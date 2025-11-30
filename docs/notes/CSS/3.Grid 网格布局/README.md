---
title: Grid 网格布局
createTime: 2025/03/29 12:40:01
permalink: /notes/CSS/m7wd19n0/
---

## 一、简介

网格是一组相交的水平线和垂直线，它定义了网格的列和行。

CSS 提供了一个基于网格的布局系统，带有行和列，可以让我们更轻松地设计网页，而无需使用浮动和定位。

以下是一个简单的网页布局，使用了网格布局，包含六列和三行：

@[demo vue desc="右下角查看代码"](./demo/demo1.vue)

## 二、属性配置

| 属性                  | 描述                                                                                                                                  |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| column-gap            | 指定列之间的间隙                                                                                                                      |
| gap                   | row-gap 和 column-gap 的简写属性                                                                                                  |
| grid                  | grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, 以及 grid-auto-flow 的简写属性 |
| grid-area             | 指定网格元素的名称，或者也可以是 grid-row-start, grid-column-start, grid-row-end, 和 grid-column-end 的简写属性               |
| grid-auto-columns     | 指的默认的列尺寸                                                                                                                      |
| grid-auto-flow        | 指定自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。                                                                  |
| grid-auto-rows        | 指的默认的行尺寸                                                                                                                      |
| grid-column           | grid-column-start 和 grid-column-end 的简写属性                                                                                   |
| grid-column-end       | 指定网格元素列的结束位置                                                                                                              |
| grid-column-gap       | 指定网格元素的间距大小                                                                                                                |
| grid-column-start     | 指定网格元素列的开始位置                                                                                                              |
| grid-gap              | grid-row-gap 和 grid-column-gap 的简写属性                                                                                        |
| grid-row              | grid-row-start 和 grid-row-end 的简写属性                                                                                         |
| grid-row-end          | 指定网格元素行的结束位置                                                                                                              |
| grid-row-gap          | 指定网格元素的行间距                                                                                                                  |
| grid-row-start        | 指定网格元素行的开始位置                                                                                                              |
| grid-template         | grid-template-rows, grid-template-columns 和 grid-areas 的简写属性                                                              |
| grid-template-areas   | 指定如何显示行和列，使用命名的网格元素                                                                                                |
| grid-template-columns | 指定列的大小，以及网格布局中设置列的数量                                                                                              |
| grid-template-rows    | 指定网格布局中行的大小                                                                                                                |
| row-gap               | 指定两个行之间的间距                                                                                                                  |
