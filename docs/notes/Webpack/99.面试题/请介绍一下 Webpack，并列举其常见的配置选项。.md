---
title: 请介绍一下 Webpack，并列举其常见的配置选项。
createTime: 2025/03/15 14:24:59
permalink: /Webpack/oq2ve55x/
---

## 一、简介

Webpack 是一个现代化的【静态模块打包工具】，它可以将多个模块打包成一个或多个【静态资源文件】。 它是构建现代 JavaScript 应用程序的一个重要工具，它具有模块化、扩展性和自动化等特点。

## 二、常见配置选项

以下是一些常见的 Webpack 配置选项：

1. `entry`: 指定打包的入口文件，可以是一个或多个文件。
2. `output`: 配置输出的文件名和路径。
3. `module`: 用来配置不同类型模块的处理规则，比如解析 JavaScript、CSS、图片等。
4. `resolve`: 配置模块解析的方式，可以指定模块的搜索路径和扩展名。
5. `plugins`: 用于扩展 Webpack 功能的插件，比如压缩代码、拷贝文件等。
6. `devServer`: 配置开发服务器，可以实时预览和调试代码。
7. `mode`: 配置 Webpack 的构建模式，可以是`development`、`production`或`none`。
8. `devtool`: 配置源代码映射，用于方便调试代码。
9. `optimization`: 配置优化相关的选项，比如代码压缩、代码分割等。
10. `externals`: 配置不需要打包的外部依赖。
