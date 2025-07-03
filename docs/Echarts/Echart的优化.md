---
title: 可视化大屏的优化方向
createTime: 2025/06/26 22:40:24
permalink: /article/9apaxrdv/
---

## 按需引入

### ECharts 瘦身

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

### 组件、方法的按需引入

按需引入公共组件和方法，从而避免整个组件库、方法库被打包进去，从而减少加载的文件体积。

```js
// 例如只引入下拉框和按钮
import { ElSelect, ElButton } from "element-plus";
// 引入深拷贝方法
import { cloneDeep } from "lodash";
```

## 轻量化图表库

### Chart.js

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

## 选择合适的渲染器

### 适合 `CanvasRenderer` 的场景

- **数据量巨大：** 如万级以上的散点图
- **高频动态更新：** 如实时监控仪表盘
- **需要复杂视觉、动画效果：** 如 3D、WebGL 混合渲染
- **移动端性能敏感场景：** 减少 DOM 压力

### 适合 `SVGRenderer` 的场景

- **需要矢量无损缩放：** 如高精度地图
- **依赖 DOM 交互：** 如复杂的图元点击检测
- **导出矢量图：** 如 PDF/SVG 格式报表
- **SEO 友好需求：** SVG 内容可被爬虫解析
- **大量简单图表：** 如几十个内容比较简单的图表

## 分辨率适配

### 优先搭配 flex、grid 布局

flex、grid 布局在适配不同屏幕尺寸时，会自动调整元素的大小和位置，从而保证页面的布局和内容的显示。

### 媒体查询 `@media`

一般情况下，我们可以根据屏幕的宽度、高度、方向来设计不同的设计稿，然后使用 flex、grid 实现整体的自适应布局。

具体到字号、边距等，可以根据不同的尺寸逐一设置，也可以使用 px、rem、vh、vw 等视口解决方案来实现适配。

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

### 等比适配 `vh`、`vw`

#### 1、使用 sass 等 css 预处理器 来实现

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

#### 2、使用 postcss 插件 `postcss-px-to-viewport-8-plugin`

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

#### 3、js 侧的 vh、vw 转换

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

### rem 方案 <badge text="已经过时" type="danger" />

rem 是相对于根元素的字体大小，因此我们可以使用 rem 来实现一个分辨率适配。

flexible.js 是淘宝团队提出的一种方案，它的原理是根据设备的屏幕宽度，动态修改根元素的字体大小，从而实现响应式布局。

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

## 加载优化

### Http 2 多路复用

在服务器端开启 Http 2 多路复用，可以利用其多路复用、减少 TCP 连接开销、减少请求延迟等优势。

### Gzip、Br、zstd 压缩

利用 Gzip、Br、zstd 等压缩算法，可以减少传输数据的大小，从而减少请求时间。

可以考虑服务端实时压缩、前端预压缩等方案。

### 避免 js 阻塞

js 加载时，浏览器会阻塞页面渲染，直到 js 加载完成。可以考虑使用 defer 或者 async 来加载 js 文件，避免阻塞页面渲染。或者动态创建 script 标签，异步加载 js 文件。

### `prefetch`、`preload`、`preconnect`

可以利用 `prefetch`、`preload`、`preconnect` 等 HTTP 头部来预加载资源，提前发起请求，减少延迟。

- `prefetch`：低优先级预获取未来可能需要的资源（如下一页内容），不阻塞当前页面渲染。
- `preload`：高优先级预加载当前页面关键资源（如首屏字体/样式），立即请求且不执行。
- `preconnect`：提前建立与第三方域的 DNS/TLS/TCP 连接（如 CDN 域名），减少后续请求的延迟。

### 延迟加载、懒加载

#### 图片的懒加载

可以考虑 `lazy` 属性实现图片的懒加载。当页面滚动到图片位置时，浏览器才会加载图片。

```html
<img loading="lazy" src="large-image.jpg" alt="Large Image" />
```

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

### 动态加载、按需加载

对于一些当前不需要加载的组件或者页面，我们可以使用懒加载的方式，推迟组件、资源加载的时机。这种一般适用于图片、数据下钻的场景。

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
