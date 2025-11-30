---
title: 如何识别关键 CSS ?
createTime: 2025/07/18 11:54:55
permalink: /blog/9cu263lp/
tags:
  - CSS
  - 性能优化
---

## 什么是关键 CSS？

构建页面的渲染树需要 CSS，而 JavaScript 在页面的初始构建过程中通常会阻塞 CSS。

因此，开发者应该确保任何非必要的 CSS 都被标记为非关键（例如：打印和其他媒体查询）。并且关键 CSS 体积应该足够小，仅包含网页首屏渲染所必需的最小 CSS 集合，同时加载时间要尽可能短，通过内联或优先加载这些样式来加速页面呈现，提升用户体验 ‌。

## 如何提取并内联到代码中？

要么人工分析，要么使用第三方库。

### 人工分析并提取

人工分析的话，我们可以使用 Chrome 浏览器：

1. 打开 F12 控制台，在 more tool 里找到 Coverage。
2. 打开以后，刷新页面，开始记录。
3. 等页面加载完成后，查看一下 `Unused Bytes` 列的数据。

例如下边的图片中，红色的部分代表未使用代码。点开的对应 CSS 资源，被红色标记的都是首屏加载时 `Unused` 的代码。剩下的没被标记的都是首屏加载用到的关键 CSS。我们可以直接将这些 CSS 拷贝出来，复制到页面的 `<head>` 标签下。

![coverage](./assert/1.png)

::: note 有的浏览器的标记可能是蓝色，需要根据实际情况来判断
:::

### 使用第三方插件

这样做比较费时费力，并且如果代码有更新，我们就需要重新分析。市面上有一些第三方库可以代替我们做这些事情，比如 `critical.js`

基于 `critical` 封装的 Webpack 插件有很多，以下是比较推荐的：

- 优先使用 critters-webpack-plugin（简单高效）。

```js
const Critters = require("critters-webpack-plugin");

module.exports = {
  plugins: [
    new Critters({
      // 关键配置项
      preload: "swap", // 异步加载方式（可选值：'swap'|'js'|'media'）
      inlineThreshold: 5000, // 小于5KB的CSS直接内联
      compress: true, // 压缩内联CSS
      pruneSource: true, // 移除已内联的重复规则
    }),
  ],
};
```

- 复杂项目可尝试 html-critical-webpack-plugin 或 critical。

```js
// webpack.config.js
const WebpackCritical = require("webpack-critical");
module.exports = {
  plugins: [
    new WebpackCritical({
      base: "dist", // 输出目录
      src: "index.html", // 源HTML文件
      dest: "index.html", // 目标HTML文件
      inline: true, // 内联关键CSS
      extract: true, // 提取关键CSS
      width: 1300, // 视口宽度
      height: 900, // 视口高度
    }),
  ],
};
```
