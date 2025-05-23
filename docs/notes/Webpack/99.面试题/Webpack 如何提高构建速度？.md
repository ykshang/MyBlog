---
title: Webpack 如何提高构建速度？
createTime: 2025/03/15 14:24:59
permalink: /Webpack/1nxo855s/
tags:
  - Webpack
  - 构建
  - 前端工具
  - 构建优化
---

## 一、常见策略

优化 Webpack 的构建速度是一个常见的需求，下面是一些常见的优化策略：

#### 1. 文件排除 Include/Exclude：

使用`Include/Exclude`来排除掉不需要编译的目录和文件，限制 loader 的作用范围。

#### 2. 开启多线程：

可以使用`thread-loader`，利用多进程加快构建，但是进程的启动也是有时间开销的，需要根据代码规模酌情考虑。

#### 3. 利用持久化缓存加速二次打包：

使用`cache`缓存`eslint`和`babel`的处理结果，加快二次打包的速度

#### 4. 关闭 devServer：

生产环境不需要启用开发服务器

#### 5. 关闭或降低 sourceMap 策略的颗粒度：

关闭或者使用低精度的 sourceMap 生成策略，打包速度更快

#### 6. 使用 oneOf( )精准匹配：

oneOf 的作用就是，存在多个 loader 情况下，只要匹配到一个 rule，其他的 rule 就不执行了。我们可以通过修改正则匹配的规则，更加精准的去匹配文件，尽量使用一条 rule 来完成对匹配文件的处理。

#### 7. 模块解析 resolve，提高资源匹配速度：

- 使用`resolve.alias`配置别名，加快模块的查找速度；
- 使用`‌resolve.extensions`指定扩展名、指定查找的文件类型；
- 使用`‌resolve.modules`指定搜索目录。

## 二、注意

::: tip 注意

开发环境下，强调的是开发体验，可以适当放宽构建速度的要求。

- **开启 devServer 和 热重载** 可以有效提升开发的体验感。
- `sourceMap` 的颗粒度也可以适当的高一点。

:::
