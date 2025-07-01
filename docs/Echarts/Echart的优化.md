---
title: Echart的优化
createTime: 2025/06/26 22:40:24
permalink: /article/9apaxrdv/
---

## 如何按需引入

### 按需引入 ECharts 模块

按需引入 ECharts 模块，只引入需要的模块，避免引入整个 ECharts 库，减少代码体积。
比如我们只涉及到饼图

```js
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

### SVG 和 Canvas 渲染各自的优缺点

SVG 渲染的优缺点：

- 优点：
  - 矢量图：支持无限缩放而不失真，适合打印和展示。
  - 交互：原生支持 CSS 动画和事件，交互丰富。
- 缺点：
  - 性能：大量元素时性能下降明显。
  - 不支持交互：如点击事件需要手动计算坐标。

Canvas 渲染的优缺点：

- 优点：
  - 高性能：减少 DOM 操作，适合高频重绘。
  - 事件处理：事件处理需手动计算坐标。
- 缺点：
  - 位图：不支持矢量图，缩放时会模糊。
  - 不支持交互：如点击事件需要手动计算坐标。

### 销毁图表

在 ECharts 中，销毁图表是一个重要的操作。当不再需要某个图表实例时，应该及时销毁它，以释放内存和资源。

- 释放内存：清除图表实例、事件监听、定时器等，避免内存泄漏。
- 移除 DOM：删除图表生成的 canvas 或 svg 节点。
- 解除引用：断开与 ECharts 容器的关联。

```js
// 销毁图表实例
myChart.dispose();
```

## 大屏的等比适配 vh、vw

使用 sass 来实现一个 vh、vw 的等比适配

```scss
// 定义一个基准值
$base-font-size: 16px;

// 定义一个函数，根据基准值和比例计算字体大小
@function px2vw($px) {
  @return ($px / $base-font-size) * 100vw;
}
@function px2vh($px) {
  @return ($px / $base-font-size) * 100vh;
}
// 使用
body {
  font-size: px2vw(16px);
}
```

## rem 做适配

rem 是相对于根元素的字体大小，因此我们可以使用 rem 来实现一个等比适配。

缺点无法做到宽高自适应响应

```scss
// 定义一个基准值
$base-font-size: 16px;

// 定义一个函数，根据基准值和比例计算字体大小
@function px2rem($px) {
  @return ($px / $base-font-size) * 1rem;
}
// 使用
body {
  font-size: px2rem(16px);
}
```

## flexible.js

这是一种通过动态修改 html 元素的 font-size 属性，来实现 rem 适配的方案。

```js
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

## 前端监控

### 数据埋点

用户行为上报

### js 报错

###
