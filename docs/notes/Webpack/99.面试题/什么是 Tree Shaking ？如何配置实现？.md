---
title: 什么是 Tree Shaking ？如何配置实现？
createTime: 2025/03/15 14:24:21
permalink: /Webpack/wlrro4n1/
---

# 17、什么是 Tree Shaking ？如何配置实现？

::: tip 总结
新版本 webpack 中，Tree Shaking 在**生产环境下是默认开启** 的，但是需要配合使用 **ES 模块化** （`export...import`）。

Tree Shaking 的过程中。通过`sideEffects`属性和`/*#__PURE__*/`注释，可以优化 Tree Shaking。确保文件中**无副作用的未引用代码被安全移除**。

:::

## 一、简介

Webpack 的 Tree Shaking 是一个用于 **移除代码中未被引用的代码，只打包你用到的代码** 的优化技术。

它可以显著减小打包后的文件体积，提高网页加载速度。

Tree Shaking 主要依赖于 ES6 模块（ESM）的静态结构。ES6 模块使用`import`和`export`语句来管理模块间的依赖关系。

这些语句的特点是：

- 静态性：`import`和`export`只能在模块的顶层声明，不能在条件语句、循环或函数内部动态使用。
- 明确性：导入和导出的名称是明确的，不能是动态计算的字符串。

## 二、前提条件

我们开启 Tree Shaking 功能时，需要满足以下前提条件：

- 必须使用 ES6 模块语法（import/export），CommonJS 模块无法被 Tree Shaking
- 设置 production 模式（会自动启用相关优化）
- 确保没有编译器（如 Babel）将 ES6 模块转译为 CommonJS 模块

::: tip 为什么必须使用 ES6 模块？
Webpack 的 Tree Shaking 主要依赖于 ES6 模块的静态结构。相对来说，CommonJS 中：

1. `require()`是动态的，可以在任何地方调用，导入的模块名也可以是变量。
2. `module.exports`也可以在运行时动态修改。

```js
const helper = require("./helper.js"); // 动态的,helper.js 可能在运行时改变
module.exports.foo = function () {
  /*··*/
};
if (Math.random() > 0.5) {
  module.exports.bar = function () {
    /*···*/
  }; // 条件导出
}
```

这种动态性使得静态分析变得非常困难，打包工具无法在编译时准确判断哪些代码会被使用。而 ES6 模块的静态特性，使得打包工具可以安全地进行分析和移除未使用代码。
:::

## 三、工作流程

Tree Shaking 的大致过程如下：

#### 1、依赖关系分析阶段

该阶段主要完成以下任务：

- 构建依赖图：打包工具从入口文件开始，分析所有模块的导入导出关系
- 标记依赖：识别哪些导出被其他模块使用，哪些从未被引用
- 静态分析：基于 ES6 模块的静态结构（`import`/`export` 必须是顶层声明）

#### 2、代码标记阶段

该阶段主要完成以下任务：

- 标记"活的"代码：从入口开始，标记所有被直接或间接引用的导出
- 识别副作用：通过`package.json`的`sideEffects`属性或 ==魔法注释== 标记有副作用的模块

#### 3、代码消除阶段

该阶段主要完成以下任务：

- 移除未引用代码：删除所有未被标记的导出和相关的代码
- 保留副作用代码：即使某些代码未被直接使用，但如果它有副作用也会被保留

#### 4、优化输出阶段

该阶段主要完成以下任务：

- 合并代码块：将多个小文件合并成一个大文件
- 压缩代码：移除不必要的空格、注释等
- 生成最终包：输出只包含必要代码的打包文件

## 三、如何有效的利用 Tree Shaking 功能

要配置 Webpack 实现代码的无用代码剔除，需要确保一下几点：

### 1、确保使用 ES6 模块化

Webpack 的 Tree Shaking 功能主要依赖于 ES 模块的静态结构。

- 确保你的代码使用 ES 模块，而不是 CommonJS 模块。
- 确保你的代码中没有使用动态拼接的路径。
- 如果你的代码使用了 CommonJS 模块，你需要使用 Babel 等工具将其转换为 ES6 模块。同时防止 Babel 把 ES6 模块转成 CommonJS 模块。

### 2、开启生产模式

配置`mode`为`production`，Webpack 会自动启用相关优化。

```js
module.exports = {
  mode: "production",
  // 其他配置...
};
```

### 3、标记副作用

在 Webpack 的 Tree Shaking 过程中，**副作用**指的是模块执行时除了导出值之外的其他行为。这些行为可能包括：

- 修改全局变量、在`window`上挂载对象
- 执行 I/O 操作
- 调用其他模块的函数
- 动态拼接路径引入的模块或者路由
- 特殊语法：`eval`、`with`
- 仅仅是导入一个 CSS 文件（它会直接影响页面样式）

所以，我们需要进行相关的配置，来告诉 Webpack 哪些模块是有副作用的，哪些模块是无副作用的。

#### 3.1、`sideEffects`属性

在`package.json`中设置`sideEffects`为`false`，表示模块没有副作用，Webpack 可以安全移除未使用的导出。如果存在有副作用的代码，我们可以配置一个数组来告诉 Webpack 谨慎处理。

```js
{
  // 标记所有的代码都没有副作用
  "sideEffects": false
  // 标记有副作用的文件
  "sideEffects": [
    "./src/some-side-effectful-file.js"
    "./src/polyfill.js",
    "*.css"
  ]
}
```

#### 3.2、`/*#__PURE__*/`注释

标记函数调用为无副作用，等于告诉 Webpack，如果该函数未被调用，可以被安全的移除。

```javascript
const result = /*#__PURE__*/ someFunction();
```

### 4、编写纯模块

尽量编写无副作用的模块。函数尽量是纯函数、尽量不导入其他的依赖包、模块的导入不应该改变全局状态。

## 四、示例

假设模块`math.js`如下：

```javascript
export function square(x) {
  return x * x;
}

export function cube(x) {
  console.log("cube"); // 副作用
  return x * x * x;
}
```

如果只使用`square`，`cube`中的`console.log`是副作用，Webpack 可能会因此不会移除`cube`。
