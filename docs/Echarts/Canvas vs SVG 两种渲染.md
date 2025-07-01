---
title: Canvas vs SVG 两种渲染
createTime: 2025/07/01 00:37:08
permalink: /article/1qqwnfnc/
---

在数据可视化库（如 ECharts、Three.js 等）中，`CanvasRenderer` 和 `SVGRenderer` 是两种常见的渲染方式，它们的核心区别和选型建议如下：

## 核心区别对比

| **特性**       | **CanvasRenderer**                    | **SVGRenderer**                         |
| -------------- | ------------------------------------- | --------------------------------------- |
| **渲染技术**   | 基于像素的位图渲染（`<canvas>` 元素） | 基于矢量的 DOM 渲染（`<svg>` 元素）     |
| **性能**       | ✅ 高频更新（如动画、大数据量）更流畅 | ⚠️ 适合静态或低频更新场景               |
| **内存占用**   | 较低（单一块画布）                    | 较高（大量 DOM 节点）                   |
| **缩放表现**   | ⚠️ 放大时像素模糊                     | ✅ 无限缩放不失真                       |
| **交互灵活性** | 需手动实现事件检测                    | ✅ 原生支持 DOM 事件（如点击、悬停）    |
| **兼容性**     | 兼容所有现代浏览器                    | 兼容性稍差（部分旧浏览器 SVG 支持有限） |
| **导出图片**   | ✅ 直接转 PNG/JPG                     | 需转换为位图（可能失真）                |
| **动态效果**   | 适合复杂动画/游戏                     | 适合简单过渡效果                        |

## 选型决策指南

### 优先选择 `CanvasRenderer` 的场景

1. **数据量巨大**：如万级以上的散点图
2. **高频动态更新**：如实时监控仪表盘
3. **需要复杂视觉、动画效果**：如 3D、WebGL 混合渲染
4. **移动端性能敏感场景**：减少 DOM 压力

### 优先选择 `SVGRenderer` 的场景

1. **需要矢量无损缩放**：如高精度地图
2. **依赖 DOM 交互**：如复杂的图元点击检测
3. **导出矢量图**：如 PDF/SVG 格式报表
4. **SEO 友好需求**：SVG 内容可被爬虫解析
5. **大量简单图表**：如几十个内容比较简单的图表

### 总结起来

大多数情况下，我们遇到的都是比较简单的图表，内容也比较少。

- 如果带一点交互，比如点击查看某个指标，优先选择 `SVGRenderer`
- 如果不带交互，仅仅显示一些指标，或者带点简单的动画效果，直接 div + css
- 带点简单的动画效果作为过渡，可以使用 `SVGRenderer`
- 只要内容特别复杂，比如需要 3D 效果、动态交互等，优先选择 `CanvasRenderer`

::: echarts 二者性能示意

```js
// const height = 260;
const option = {
  tooltip: {
    trigger: "item",
    formatter: "{a}",
  },
  legend: {
    left: "left",
  },
  grid: {
    containLabel: false,
    bottom: 20,
    height: 300,
  },
  xAxis: {
    type: "category",
    name: "内容复杂度",
    nameTextStyle: {
      align: "right",
      verticalAlign: "top",
      padding: [8, 30, 0, 0],
    },
    data: [1, 2, 3, 4, 5, 6, 7],
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: true,
      symbol: ["none", "arrow"],
      symbolSize: [6, 10],
    },
    axisTick: {
      show: false,
    },
  },

  yAxis: {
    type: "value",
    name: "消\n耗\n资\n源",
    nameTextStyle: {
      align: "right",
      verticalAlign: "top",
      padding: [32, 8, 0, 0],
    },
    max: 90,
    min: 45,
    axisLine: {
      show: true,
      symbol: ["none", "arrow"],
      symbolSize: [5, 10],
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      name: "SVG",
      type: "line",
      data: [50, 55, 60, 65, 70, 75, 80],
      itemStyle: {
        opacity: 0,
      },
    },
    {
      name: "Canvas",
      type: "line",
      data: [55, 58, 61, 64, 67, 70, 73],
      itemStyle: {
        opacity: 0,
      },
    },
  ],
};
```

:::

## 性能实测数据

| **场景**               | Canvas (FPS) | SVG (FPS) |
| ---------------------- | ------------ | --------- |
| 静态图表（1000 元素）  | 60           | 60        |
| 动态更新（1000 点/秒） | 55-60        | 20-30     |
| 极大数据量（10 万点）  | 30-40        | <5        |

> _测试环境：Chrome 120 / i7-12700H / ECharts 5.4_

## 如何切换渲染器

```javascript
// 初始化时指定渲染器
const chart = echarts.init(dom, null, {
  renderer: "canvas", // 或 'svg'
});

// 运行时切换（需 dispose 后重新 init）
chart.dispose();
chart = echarts.init(dom, null, { renderer: "svg" });
```
