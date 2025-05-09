---
title: 如何控制和调整 Loader 和 Plugin 的执行顺序
createTime: 2025/03/15 14:24:21
permalink: /Webpack/ca1plgxx/
---

> 在 Webpack 中，Loader 和 Plugin 的执行顺序是不同的。

## 一、Loader

Loader 是对源代码进行转换和处理的工具。它的执行顺序为：

- **优先级不同**：`pre (前置)` > `normal (普通)` > `inline (内联)` > `post (后置)`
- **优先级相同**：其执行流程为 **从右到左，从下到上**。
- **存在 pitch 方法**：Loader 里的`pitch`方法按照 **从左到右** 执行完以后，在按照 **从右到左** 的顺序执行 Loader 本身。

如下代码，优先级相同：

```js
module: {
  rules: [{ test: /\.css$/, use: ["loader1", "loader2", "loader3"] }];
}
```

其执行流程为：

![loader执行流程](../assets/loader1.png)

我们要想控制 Loader 的执行顺序，可以从以下几个方面入手:

1. 调整代码的先后顺序
2. 配置`enforce`属性，手动调整优先级
3. 如果在同一条 rule 里，想要实现一些预先处理的话可以通过暴露 pitch 方法去执行

```javascript
module: {
  rules: [
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { modules: true } },
      ],
      enforce: "post",
    },
  ];
}
```

::: tip 注意
某些 Loader 之间具有逻辑上的先后关系，比如 sass 的处理：
一定是按照 `[style-loader, css-loader,sass-loader]`的顺序去配置
:::

## 二、Plugin

**Plugin 则在整个 Webpack 构建过程中提供了更广泛的功能**。它们可以用于执行范围更广的任务，如**资源优化、文件操作、环境变量注入**等。Plugin 的执行顺序是由 Webpack 确定的，通常是通过订阅 Webpack 的生命周期事件来触发不同的插件操作。因此，Plugin 的执行顺序是与 Webpack 的生命周期相关的。

我们要想控制 Plugin 的执行顺序，直接调整期注册的生命周期钩子即可


Webpack 生命周期示意图

![Webpack 插件生命周期](../assets/plugin.jpg)
