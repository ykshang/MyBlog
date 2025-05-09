---
title: 如何处理样式文件（CSS、Sass、Less 等）？
createTime: 2025/03/15 14:24:21
permalink: /Webpack/sz2z3ct0/
---

# 31、如何处理样式文件（CSS、Sass、Less 等）？

::: tip 总结

- 对于 sass、less、css 分别有对应的 loader 去处理
- 考虑兼容性问题，需要使用`postcss-loader postcss postcss-preset-env`这几个包去解决
- CSS 压缩：`MiniCssExtractPlugin`
- CSS 提取成单个文件: `MiniCssExtractPlugin`

:::

## 一、常规处理

在 Webpack 中处理样式文件非常简单，你可以使用相应的 loader 来处理不同类型的样式文件。

- 对于 CSS 文件，你可以使用`css-loader`和`style-loader`。`css-loader`负责解析 CSS 文件，而`style-loader`将解析后的 CSS 文件注入到 HTML 页面中。

- 对于 Sass 文件，你需要使用`sass-loader`来解析 Sass 文件，并使用`css-loader`和`style-loader`来处理解析后的 CSS 文件。

- 对于 Less 文件，你需要使用`less-loader`来解析 Less 文件，并使用`css-loader`和`style-loader`来处理解析后的 CSS 文件。

在 Webpack 的配置文件中，你需要像下面这样配置相应的 loader：

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
  ],
}
```

在配置中:

- `test`字段指定了要匹配的文件类型。
- `use`字段指定了要使用的 loader 及其加载顺序。

## 二、兼容性处理

### 1. 下载包

```shell
npm i postcss-loader postcss postcss-preset-env -D
```

### 2. 配置 webpack.prod.js

```js {1-18,33,37,41,45}
// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders("stylus-loader"),
      },
    ],
  },
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

### 3. 控制兼容性

我们可以在 `package.json` 文件中添加 `browserslist` 来控制样式的兼容性做到什么程度。

```json
{
  // 其他省略
  "browserslist": ["ie >= 8"]
}
```

想要知道更多的 `browserslist` 配置，查看[browserslist 文档](https://github.com/browserslist/browserslist)

以上为了测试兼容性所以设置兼容浏览器 ie8 以上。

实际开发中我们一般不考虑旧版本浏览器了，所以我们可以这样设置：

```json
{
  // 其他省略
  "browserslist": ["last 2 version", "> 1%", "not dead"]
}
```

## 三、CSS 提取

Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式

这样对于网站来说，会出现闪屏现象，用户体验不好

我们应该是单独的 Css 文件，通过 link 标签加载性能才好

### 1、下载包

```shell
npm i css-minimizer-webpack-plugin -D
```

### 2、配置 webpack.prod.js

```js {2,17,21,25,29,34-38}
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/main.css",
    }),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

## 四、CSS 压缩

当你在代码中导入样式文件时，Webpack 会根据配置自动处理这些文件，并将其注入到 HTML 页面中。

需要注意的是，如果你希望将样式文件 **提取为独立的 CSS 文件** 而不是将其注入到 HTML 页面中，你可以使用`MiniCssExtractPlugin`插件。这个插件可以将 CSS 文件从 JavaScript 文件中提取出来，并生成独立的 CSS 文件。

### 1、安装依赖

```
npm i css-minimizer-webpack-plugin -D
```

### 2、配置 webpack.prod.js

```js {1,11-12}
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  plugins: [
    // css压缩
    new CssMinimizerPlugin(),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```
