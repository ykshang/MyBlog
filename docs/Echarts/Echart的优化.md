---
title: 可视化大屏的优化方向
createTime: 2025/06/26 22:40:24
permalink: /article/9apaxrdv/
---

## 1、按需引入 ECharts 模块

按需引入 ECharts 模块，只引入需要的模块，避免引入整个 ECharts 库，减少代码体积。
比如我们只涉及到饼图

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

## 2、选择 SVGRenderer 还是 CanvasRenderer ？

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

## 3、及时销毁图表

在 ECharts 中，销毁图表是一个重要的操作。当不再需要某个图表实例时，应该及时销毁它，以释放内存和资源。

- 释放内存：清除图表实例、事件监听、定时器等，避免内存泄漏。
- 移除 DOM：删除图表生成的 canvas 或 svg 节点。
- 解除引用：断开与 ECharts 容器的关联。

```js
// 销毁图表实例
myChart.dispose();
```

## 4、分辨率适配

### rem 方案 flexible.js

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

### 等比适配 vh、vw

#### 1、使用 sass 来实现一个 vh、vw 的等比适配

```scss
// 定义一个设计稿的基准宽度 和 高度
$base-width: 1920px;
$base-height: 1080px;
// 定义一个函数，根据基准值和比例计算字体大小
@function px2vw($px) {
  @return ($px / $base-width) * 100vw;
}
@function px2vh($px) {
  @return ($px / $base-height) * 100vh;
}
// 使用
body {
  font-size: px2vw(16px);
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

## 前端监控

### 数据埋点

用户行为上报

### js 报错

###
