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

Tree Shaking 的魔法主要依赖于  ES6 模块（ESM）的静态结构。ES6 模块使用  import  和  export  语句来管理模块间的依赖关系。

这些语句的特点是：

- 静态性：`import`和`export`只能在模块的顶层声明，不能在条件语句、循环或函数内部动态使用。
- 明确性：导入和导出的名称是明确的，不能是动态计算的字符串。

## 二、工作流程

#### 阶段 1 ：依赖关系分析

1. **构建依赖图**：打包工具从入口文件开始，分析所有模块的导入导出关系
2. **标记依赖**：识别哪些导出被其他模块使用，哪些从未被引用
3. **静态分析**：基于 ES6 模块的静态结构（`import`/`export` 必须是顶层声明）

#### 阶段 2 ：代码标记

1.  标记"活的"代码：从入口开始，标记所有被直接或间接引用的导出
2.  识别副作用：通过`package.json`的`sideEffects`属性或 ==魔法注释== 标记有副作用的模块

#### 阶段 3 ：代码消除

1.  移除未引用代码：删除所有未被标记的导出和相关的代码
2.  保留副作用代码：即使某些代码未被直接使用，但如果它有副作用也会被保留

#### 阶段 4 ：优化输出

1.  合并代码块：将多个小文件合并成一个大文件
2.  压缩代码：移除不必要的空格、注释等
3.  生成最终包：输出只包含必要代码的打包文件

## 二、配置

要配置 Webpack 实现代码的无用代码剔除，需要确保一下几点：

### 1、使用 ES6 模块化

因为 Tree Shaking 只对 ES6 模块有效。

### 2、确保启用 Tree Shaking 功能

- 在 Webpack 配置文件中，通过设置`mode`为`production`，启用 Webpack 的生产模式，此时 Tree Shaking 功能会 **默认开启**。
- 如果 Tree Shaking 功能没有开启，再配置`optimization.usedExports`的值为`true`，启用 Tree Shaking。

#### 3、配置 sideEffects 字段

- 确保你的`package.json`文件中的`sideEffects`字段被正确配置。
- `sideEffects`字段告诉 Webpack 哪些文件是没有副作用的，可以进行 Tree Shaking。
- 如果你的应用是无任何副作用，可以将`sideEffects`设置为`"sideEffects": false`。
- 如果你的应用使用了一些有副作用的模块（例如 CSS 文件），你需要将这些模块添加到`sideEffects`字段中。这样 Webpack 就不会将这些有副作用的模块进行 Tree Shaking。

配置完成后，运行 Webpack 打包构建，未被引用的代码将会被删除，从而减小文件体积。

## 三、文件的副作用

### 1、什么是副作用？

在 Webpack 的 Tree Shaking 过程中，**副作用**指的是模块执行时除了导出值之外的其他行为。这些行为可能包括：

1. 修改全局变量
2. 执行 I/O 操作
3. 调用其他模块的函数
4. 动态拼接路径引入的模块或者路由
5. 特殊语法：`eval`、`with`

### 2、为什么副作用重要？

Tree Shaking 会移除未使用的代码，但如果模块有副作用，直接删除可能导致程序出错。因此，Webpack 需要谨慎处理这些模块。

### 3、如何处理？

#### 3.1、`sideEffects`属性

在`package.json`中设置`sideEffects`为`false`，表示模块没有副作用，Webpack 可以安全移除未使用的导出。若部分文件有副作用，可指定文件路径数组。

```json
{
  "sideEffects": false
}
```

或

```json
{
  "sideEffects": ["./src/some-side-effectful-file.js"]
}
```

#### 3.2、`/*#__PURE__*/`注释

标记函数调用为无副作用，帮助 Webpack 识别可安全移除的代码。

```javascript
const result = /*#__PURE__*/ someFunction();
```

### 4、示例

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

如果只使用`square`，`cube`中的`console.log`是副作用，Webpack 可能不会移除`cube`。
