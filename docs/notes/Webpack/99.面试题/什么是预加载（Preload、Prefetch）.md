---
title: 什么是预加载（Preload、Prefetch）
createTime: 2025/03/15 14:24:21
permalink: /Webpack/af5iw7rx/
---

::: tip 总结

1. Preload‌ 是优先加载
2. Prefetch‌ 是闲时加载
3. Webpack 自动根据魔法注释识别，并添加优先级

:::

## 一、核心定义

### 1、Preload‌

强制浏览器 ‌**立即加载当前页面关键资源**‌（如首屏渲染所需的 CSS/JS/字体），不阻塞文档 `onload` 事件 ‌。目标是**调整资源的优先级**，从而 **优先被加载**。他的特点 ‌ 是：

- 通过 `as` 属性指定资源类型（`script`/`style`/`font` 等）‌
- 高优先级加载，提升首屏渲染性能 ‌
- 需在页面头部声明或通过 HTTP 头注入 ‌

### 2、Prefetch‌

提示浏览器 ‌**预加载未来可能需要的资源**‌（如用户可能访问的子页面资源、弹窗、步骤页），加载时机由浏览器空闲时决定 ‌。他的特点 ‌ 是：

- 低优先级加载，不阻塞关键资源 ‌
- 常用于预测用户行为（如路由跳转前的资源预加载）‌

## ‌ 二、最佳实践与风险规避

1. ‌**Preload 使用原则**‌
   - 仅对 ‌**关键渲染路径资源**‌ 使用（如首屏 CSS/字体）‌
   - 避免过度预加载（可能挤占带宽）‌
2. ‌**Prefetch 优化策略**‌
   - 结合用户行为预测（如 hover 按钮时预加载弹窗模块）‌
   - 对 ‌**高概率访问的子页面资源**‌ 启用（如电商商品详情页）‌
3. ‌**通用注意事项**‌
   - 始终声明 `as` 属性以优化资源加载优先级 ‌
   - 启用 `crossorigin` 属性加载跨域资源（如字体文件）‌

## 三、配置

### 1、‌ 魔法注释自动识别（核心方案）

魔法注释是 Webpack 提供的一种特殊注释，用于控制代码分割和资源加载行为。常用的魔法注释包括：

- `webpackPreload`：告诉 Webpack 预加载资源（优先级较高，适合当前页面需要的资源）。
- `webpackPrefetch`：告诉 Webpack 预取资源（优先级较低，适合后续页面可能需要的资源）。

```js
// 动态导入语法 + Webpack 魔法注释
import(/* webpackPreload: true */ "./critical-chart.js"); // 当前路由关键组件
import(/* webpackPrefetch: true */ "./next-page.js"); // 预测用户下一步操作
// 针对不同设备动态加载
if (window.outerWidth > 768) {
  import(/* webpackPreload: true */ "./desktop-components.js");
} else {
  import(/* webpackPreload: true */ "./mobile-components.js");
}
```

### 2、手动识别（需配合插件）

`PreloadWebpackPlugin` 是一个第三方插件，用于更灵活地控制资源的预加载行为。它的主要功能包括：

- **手动指定预加载资源**：可以为某些资源手动添加 `<link rel="preload">` 标签。
- **自定义资源加载优先级**：可以指定资源的加载优先级（如 `as="script"`、`as="style"` 等）。
- **支持更多资源类型**：可以预加载图片、字体等其他类型的资源。

```js
// webpack.config.js
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

module.exports = {
  plugins: [
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: ['app', 'vendors'], // 指定需要预加载的 chunk
      fileWhitelist: [/\.css/, /\.js/], // 只预加载 CSS 和 JS 文件
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.js$/.test(entry)) return 'script';
        return 'fetch';
      },
    });
  ],
};

```

### 3、Vue、React 的路由配置支持

```js
// vue Router 示例
const routes = [
  {
    path: "/dashboard",
    component: () => import(/* webpackPrefetch: true */ "./Dashboard.vue"),
  },
];
```
