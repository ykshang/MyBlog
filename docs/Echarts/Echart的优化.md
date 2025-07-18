---
title: 可视化大屏的优化方向
createTime: 2025/06/26 22:40:24
permalink: /article/9apaxrdv/
---

## 按需导入

按需导入其实就是对引入的代码进行精简，主要涉及到 UI 组件、公共组件、公共方法等一些第三方库、内部封装代码等。

### 精简内部代码的引入

我们按照模块组织代码，然后通过按需引入，只引入需要的部分。

```js
import { DashBoard } from "./compoent";
import { getOptions } from "./utils";
```

### 精简第三方库

#### Echarts

按需引入 ECharts 模块，只引入需要的模块，避免引入整个 ECharts 库，减少代码体积。

比如我们只涉及到柱状图：

```js :collapsed-lines=10
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart = echarts.init(document.getElementById("main"));
myChart.setOption({
  // ...
});
```

#### UI 组件

我们可以按需引入页面用到的 UI 组件，从而避免整个组件库被打包进去，从而减少加载的文件体积。因此要求 UI 组件库要支持按需引入，常见的 UI 组件库主要有：`element-plus`、`mui`、`ant-design` 等

```js
// 例如只引入下拉框和按钮
import { ElSelect, ElButton } from "element-plus";
```

#### 其他库

比如前端常用的 `lodash`：

```js
// 引入深拷贝方法
import { cloneDeep } from "lodash";
```

### babel-plugin-import

`babel-plugin-import`是一个基于 webpack 的 babel 插件，其核心用途是 **实现组件和样式的按需加载**，从而显著减少打包体积。

一般我们引入组件、第三方库可能像这样以按需引入的方式去写：

```js
import { Button, Select } from "element-ui";

Vue.use(Button);
Vue.use(Select);
```

但是实际上呢，这个按需引入可能并不是真正的按需引入，甚至可能只是看起来是按需引入。内部依旧可能会有全量引入的情况。

而使用了 `babel-plugin-import` 插件后，Babel 会将上边的代码转换为类似下面的形式，彻彻底底的变成按需引入：

```javascript
import Button from "element-ui/lib/button"; // 仅加载Button组件
import "element-ui/lib/button/style.css"; // 自动引入Button样式

import Select from "element-ui/lib/select"; // 仅加载Select组件
import "element-ui/lib/select/style.css"; // 自动引入Select样式
```

[babel-plugin-import 插件介绍](/PopularLibrary/ar4au96n/){.read-more}

## 按需加载

### React 的 `lazy()` + `<Suspense>`

React 的 `<Suspense>` 是用于管理异步组件加载状态的组件，通常与 React.lazy 搭配使用，实现代码分割和动态加载优化。

我们通过 `fallback` 属性实现加载过程中的占位内容同，或者异步加载失败显示错误内容。

```jsx
import React from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Vue 的 `<Suspense>`

Vue3 中的 Suspense 组件是一种特殊的组件，用于处理 适用于异步组件、异步数据请求和其他延迟加载的场景。

[Vue 的 `<Suspense>` 组件](/Vue/7jyliwsm/){.read-more}

### 路由的懒加载

前端的路由懒加载主要指的是 ESM 的 `import()` 动态导入。当用户访问该路由时，才动态加载对应的代码，减少初始的加载时间。

[路由懒加载](/Webpack/1fbrhqld/){.read-more}

## 延迟加载

### `prefetch`、`preload`、`preconnect`

可以利用 `prefetch`、`preload`、`preconnect` 等 HTTP 头部来预加载资源，提前发起请求，减少延迟。

- `prefetch`：浏览器空闲时间，加载未来可能需要的资源（如下一页内容），不阻塞当前页面渲染。
- `preload`：优先加载当前页面关键资源（如首屏字体/样式）。
- `preconnect`：提前建立与第三方域的 DNS/TLS/TCP 连接（如 CDN 域名），减少后续请求的建立连接的延迟时间。

### 图片的懒加载

#### `loading="lazy"`

可以考虑 `lazy` 属性实现图片的懒加载。当页面滚动到图片位置时，或者图片进入视口时，浏览器才会加载图片。

```html
<img loading="lazy" src="large-image.jpg" alt="Large Image" />
```

#### IntersectionObserver API

也可以考虑 `IntersectionObserver` 来实现图片的懒加载。

```js
const images = document.querySelectorAll("img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => {
  observer.observe(img);
});
```

### 滚动加载

滚动加载指的是，通过监听用户滚动行为自动加载内容，当页面滚动到底部的时候，再触发加载对应区域的数据。一般用于流式列表、图文信息流、长表格等。

滚动加载一般通过 **IntersectionObserver API** 来实现。

## 代码拆分

### 多入口拆分

我们首先应该考虑是，可视化大屏能否单独拆分成一个入口。在大多数情况下，可视化大屏都是单独的一个页面。他不包含整体布局、管理等模块，是可以被单独拆分出来的。

同样，新入口对应的 是一个 html 文件，相关 Js、Css、国际化及其他静态资源文件也需要拆分出来，这样对应页面需要加载的代码就大大的减少了：

### 关键 CSS

构建页面的渲染树需要 CSS，而关键 CSS 指的是首屏加载过程中所必需的 CSS 代码。

这部分代码往往体积比较小，加载时间短，可以通过 **内联** 或 **优先加载** 这些 css 资源来加速页面呈现，提升用户体验。

因此我们可以将这部分代码提取出来，内联到 html 中。主要的技术手段有两种：

1. 手动提取：借助工具分析，手动提取关键 CSS 代码。
2. 自动提取：借助构建工具插件 `critical` 自动分析并提取关键 CSS 代码。

[参考《关键 CSS 提取》](/article/9cu263lp/){.read-more}

## 图表库优化

### 选择轻量化图表库

可以考虑一些更加轻量化的图表库，如 Chart.js，功能比较简单，优势在于占用的空间比较小。

```js
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb"],
    datasets: [
      {
        data: [10, 20],
        backgroundColor: "#3498db",
      },
    ],
  },
});
```

### CanvasRender vs SVGRender

#### 适合 `CanvasRender` 的场景

- **数据量巨大：** 如万级以上的散点图
- **高频动态更新：** 如实时监控仪表盘
- **需要复杂视觉、动画效果：** 如 3D、WebGL 混合渲染
- **移动端性能敏感场景：** 减少 DOM 压力

#### 适合 `SVGRender` 的场景

- **需要矢量无损缩放：** 如高精度地图
- **依赖 DOM 交互：** 如复杂的图元点击检测
- **导出矢量图：** 如 PDF/SVG 格式报表
- **SEO 友好需求：** SVG 内容可被爬虫解析
- **大量简单图表：** 如几十个内容比较简单的图表

## 分辨率适配

大多数情况下，比较推荐媒体查询和 vw、vh 方案

### 媒体查询 `@media`

::: info 优先搭配 flex、grid 布局
:::

一般情况下，我们可以根据屏幕的宽度、高度、方向来设计不同的设计稿，然后使用 flex、grid 实现整体的自适应布局。

具体到字号、边距等，可以根据不同的尺寸逐一设置，也可以搭配使用 px、rem、vh、vw 等 CSS 尺寸解决方案来实现多种不同尺寸下的适配。

```js :collapsed-lines=10
@media screen and (max-width: 768px) {
  // 768px 以下的屏幕宽度
  .container {
    flex-direction: column;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  // 768px 到 1024px 的屏幕宽度
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1024px) {
  // 1024px 以上的屏幕宽度
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

### `vh`、`vw` 方案

等比适配 `vh`、`vw` 可以实现等比适配，基于设计稿的基准宽度和高度，两侧及顶部不会留白。但是需要设备和浏览器支持 css3

#### 使用 sass 等 css 预处理器 来实现

```scss
// 定义一个设计稿的基准宽度 和 高度
@function px2vw($px, $baseWidth) {
  @return calc($px / $baseWidth) * 100vw;
}
@function px2vh($px, $baseHeight) {
  @return calc($px / $baseHeight) * 100vh;
}
@media screen and (min-width: 1024px) {
  $width: 1024px;
  $height: 768px;
  .test1 {
    border: 1px solid;
    width: px2vw(200px, $width);
    height: px2vh(100px, $height);
  }
}
@media screen and (min-width: 1200px) {
  $width: 1200px;
  $height: 900px;
  .test1 {
    border: 1px solid;
    width: px2vw(200px, $width);
    height: px2vh(100px, $height);
  }
}
```

编译完

```css
@media screen and (min-width: 1200px) {
  .test1 {
    border: 1px solid;
    width: 16.6666666667vw;
    height: 11.1111111111vh;
  }
}
@media screen and (min-width: 1024px) {
  .test1 {
    border: 1px solid;
    width: 19.53125vw;
    height: 13.0208333333vh;
  }
}
```

#### postcss 插件 `postcss-px-to-viewport-8-plugin`

postcss 插件只能解决 css 里的尺寸转换，无法解决 JS 里的尺寸转换。

```js title="postcss.config.js" :collapsed-lines=10
module.exports = {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      viewportWidth: 750, // 设计稿的宽度，一般是750（适用于移动端）
      unitToConvert: "px", // 要转换的单位
      viewportHeight: 1334, // 设计稿的高度
      unitPrecision: 5, // 转换后保留的小数位数
      propList: ["*"], // 需要转换的属性列表，*表示所有属性
      viewportUnit: "vw", // 转换后的单位
      fontViewportUnit: "vw", // 字体使用的视口单位
      selectorBlackList: [], // 不转换的选择器
      minPixelValue: 1, // 最小转换值
      mediaQuery: false, // 是否转换媒体查询中的px
      replace: true, // 是否直接替换值而不添加备用
      exclude: [], // 排除的文件
      include: [], // 包含的文件
      landscape: false, // 是否处理横屏情况
      landscapeUnit: "vw", // 横屏时使用的单位
      landscapeWidth: 1334, // 横屏时使用的视口宽度
    },
  },
};
```

#### js 侧的 vh、vw 转换

主要用于 Echart 等图标库数据源里的 px 转换。虽然图标内部也有类似百分比的解决方案，但是为了统一尺寸单位，保证一致的视觉效果，我们还是需要使用 vh、vw 进行转换。

```js
let baseWidth = 1024;
let baseHeight = 768;
function px2vw(px) {
  return (px / baseWidth) * 100 + "vw";
}
function px2vh(px) {
  return (px / baseHeight) * 100 + "vh";
}
```

### Rem 方案

rem 是相对于根元素的字体大小，因此我们可以使用 rem 来实现一个分辨率适配。但是逐渐被 vw/vh 方案取代。

#### 优缺点

1. 优点：
   1. 兼容性好，支持老版本的浏览器和设备
   2. 等比缩放，不会导致整体比例失调变化
2. 缺点：
   1. 比较依赖 JS，可能影响首屏渲染
   2. 无法完美适配所有场景：比如大屏场景下，字体过大，同时想显示更多的内容。
   3. 字体大小，容易在大屏上字号过大，小屏上字号过小，影响体验。
   4. 逐渐被 vw/vh 方案取代

#### flexiable.js

flexible.js 是淘宝团队提出的一种 Rem 方案，它的原理是根据设备的屏幕宽度，动态修改根元素的字体大小，从而实现响应式布局。优点是

```js :collapsed-lines=10
(function flexible(window, document) {
  // 获取 html 元素
  const docEl = document.documentElement;
  // dpr 物理像素比
  const dpr = window.devicePixelRatio || 1;

  // 调整 body 字体大小
  function setBodyFontSize() {
    // 如果页面有 body 元素，就调整 body 字体大小
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    }
    // 否则，就直接设置 html 元素的字体大小
    else {
      docEl.style.fontSize = 12 * dpr + "px";
    }
  }

  // 初始化
  setBodyFontSize();

  // 监听页面的 resize 事件，当页面大小发生变化时，重新调整 body 字体大小
  window.addEventListener("resize", setBodyFontSize);
  // 监听页面的 pageshow 事件，当页面从缓存中加载时，重新调整 body 字体大小
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setBodyFontSize();
    }
  });
  // 监听页面的 load 事件，当页面加载完成时，重新调整 body 字体大小
  window.addEventListener("load", setBodyFontSize);
})();
```

这是一种通过动态修改 html 元素的 font-size 属性，来实现 rem 适配的方案。

#### px2rem

我们也可以使用一些 postCss 的插件，比如 postcss-pxtorem：

```js
// postcss.config.js 示例
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75, // 750px 设计稿 → 1rem = 75px (750/10)
      propList: ["*"], // 转换所有属性的 px 值
    },
  },
};
```

### CSS scale 缩放方案

通过 `CSS transform: scale()` 属性动态缩放容器，保持内容比例不变，适合固定尺寸的页面（如大屏数据可视化）。

在使用过程中存在两大缺点：

- 热区偏移；由于缩放只是视觉上缩放，但是元素布局、大小、尺寸没有跟着变化，可能会导致事件热区偏移，导致交互事件混乱。
- 两侧留白：当屏幕的宽高比例和设计稿不一致时，就容易出现两侧，或者顶部留白的情况。

```vue :collapsed-lines=10
<template>
  <div ref="container" id="container">
    <!-- 页面内容 -->
  </div>
</template>
<script setup lang="ts">
screenScale(document.getElementById("container"));
// 动态计算缩放比例
function screenScale(element) {
  let width = "1920";
  let height = "1080";
  let offsetWidth = window.innerWidth;
  let offsetHeight = window.innerHeight;
  let scaleX = offsetWidth / width;
  let scaleY = offsetHeight / height;
  let scale = Math.min(scaleX, scaleY);
  //核心代码
  const transform = `scale(${scale})`;
  element.width(width);
  element.height(height);
  element.css({ transform: transform });
}
window.onresize = function () {
  screenScale(document.getElementById("container"));
};
</script>
<style>
.scale-container {
  width: 1920px; /* 设计稿基准宽度 */
  height: 1080px; /* 设计稿基准高度 */
  transform-origin: 0 0; /* 缩放基准点（左上角） */
}
</style>
```

### Viewport 视口缩放

通过动态修改 `<meta name="viewport">` 的 `initial-scale`，让浏览器自动缩放页面。

- ✅ 原生支持：浏览器自动处理缩放。
- ❌ 影响所有元素：可能导致字体和边框粗细不一致。

```html
<meta
  name="viewport"
  id="viewportMeta"
  content="width=device-width, initial-scale=1.0"
/>
<script>
  function setViewportScale() {
    const designWidth = 1920; // 设计稿宽度
    const currentWidth = window.innerWidth;
    const scale = currentWidth / designWidth;

    const meta = document.getElementById("viewportMeta");
    meta.content = `width=${designWidth}, initial-scale=${scale}`;
  }

  window.addEventListener("resize", setViewportScale);
  setViewportScale(); // 初始化
</script>
```

## DOM 操作相关

### 集中操作，避免边读边写

- DOM 的读取是同步操作，浏览器是立马执行的，甚至为了保证数据的一致性，浏览器需要重新渲染，重新计算最新值。
- DOM 的修改是异步操作，浏览器不是立马就会执行的，会放到任务队列中等待执行，甚至多个 DOM 修改一起执行。

而边读边写就会破坏这种机制，浏览器就得不得不花费时间去重新渲染，重新计算最新值，这就是为什么我们在操作 DOM 时，要避免边读边写的情况。

我们在处理基于 Dom 实现的动画时，很容易涉及到这些场景，需要我们提前计算，提前存储相关值。

## 加载优化

### Http 2 多路复用

在服务器端开启 Http 2 多路复用，可以利用其多路复用、减少 TCP 连接开销、减少请求延迟等优势。

### Gzip、Br、zstd 压缩

利用 Gzip、Br、zstd 等压缩算法，可以减少传输数据的大小，从而减少请求时间。

可以考虑服务端实时压缩、前端预压缩等方案。

### 避免 js 阻塞

js 加载时，浏览器会阻塞页面渲染，直到 js 加载完成。可以考虑使用 defer 或者 async 来加载 js 文件，避免阻塞页面渲染。或者动态创建 script 标签，异步加载 js 文件。

### 代码打包优化

我们可以查看 f12 的 network 面板，查看当前项目的代码加载情况，如果发现有比较大的文件，影响到加载速度，我们可以考虑进行代码拆分、压缩、合并等优化。

## 内存优化

### 及时销毁图表，释放内存

在 ECharts 中，销毁图表是一个重要的操作。当不再需要某个图表实例时，应该及时销毁它，以释放内存和资源。

- 释放内存：清除图表实例、事件监听、定时器等，避免内存泄漏。
- 移除 DOM：删除图表生成的 canvas 或 svg 节点。
- 解除引用：断开与 ECharts 容器的关联。

```js
// 销毁图表实例
myChart.dispose();
```

## 接口优化

### 大量待计算的数据

如果遇到接口返回的是大量数据，前端的计算比较复杂，可以考虑以下优化方案：

- 利用 webwork 来进行计算
- 后端定时任务，定期把计算好的数据存到表里，前端请求时，直接返回最新的计算结果。

### 大量的接口请求

可以考虑将多个接口请求合并为一个，减少接口请求的次数。

## 防呆设计

### loading 状态

在接口请求期间，我们可以先显示一个 loading 状态，等数据返回后再刷新图表。

### 数据为空

毕竟接口需要时间才能返回数据，我们可以先按照一定的格式先把图表渲染拿出来，显示空数据，等拿到数据再刷新进去。

### 缓存请求结果

如果部分接口比较慢，可以考虑提前渲染上一次请求的结果，并在本次请求结束后重新刷新数据，并缓存本次的数据用于下一次请求前的渲染。

### 骨架屏

正式结果出来之前，我们可以先渲染一个骨架屏，骨架屏的样式可以参考 loading 状态的样式。

### 错误处理

如果接口请求失败，我们可以先显示一个错误提示，等用户点击后再重新请求数据。

### 垂直方向滚动条

如果视口内元素过多，尽量不要让页面产生横向滚动条。尽量引导用户在纵向上滚动页面查看更多内容。

### 数据下钻

如果用户点击了某个元素，我们可以通过下钻的方式，来展示更多的信息。
