---
title: 1.Echart的优化
createTime: 2025/06/26 22:40:24
permalink: /article/9apaxrdv/
---

## 如何按需引入

### 按需引入 ECharts 模块

按需引入 ECharts 模块，只引入需要的模块，避免引入整个 ECharts 库，减少代码体积。
比如我们只涉及到饼图

```js
import * as echarts from "echarts/core";
import "echarts/lib/chart/pie"; // 引入饼图模块
import "echarts/lib/component/tooltip"; // 引入提示框组件
import "echarts/lib/component/legend"; // 引入图例组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
]);

CanvasRenderer;
```

### SVG 和 Canvas 渲染各自的优缺点

## 代码压缩

常见的的代码压缩 gzip brotli

### 为什么要压缩代码不要超过 50kb

因为 nginx 服务器默认的最大响应体大小是 100kb，超过 100kb 的响应体，nginx 会返回 413 请求实体过大的错误。

如果压缩后的代码小于 50kb，那么用户在首次加载页面时，就会减少 50% 的请求时间，提升用户体验。

### 什么时候选择 gzip 和什么时候选择 brotli

gzip 压缩率高，但是压缩速度慢，brotli 压缩率低，但是压缩速度快。

如果项目对压缩率要求高，那么可以选择 brotli 压缩。

如果项目对压缩速度要求高，那么可以选择 gzip 压缩。

一般来说，项目的代码压缩率在 50% 左右，压缩速度在 100ms 左右，因此我们可以根据项目的实际情况，选择合适的压缩方式。

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
      document.body.style.fontSize = 12 * dpr + 'px';
    }
    // 否则，就直接设置 html 元素的字体大小
    else {
      docEl.style.fontSize = 12 * dpr + 'px';
    }
  }

  // 初始化
  setBodyFontSize();

  // 监听页面的 resize 事件，当页面大小发生变化时，重新调整 body 字体大小
  window.addEventListener('resize', setBodyFontSize);
  // 监听页面的 pageshow 事件，当页面从缓存中加载时，重新调整 body 字体大小
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setBodyFontSize();
    }
  });
```

这是一种通过动态修改 html 元素的 font-size 属性，来实现 rem 适配的方案。


## 前端监控

### 数据埋点

用户行为上报

### js报错

### 
