---
title: 如何使用 Babel 来转译和处理 JavaScript？
createTime: 2025/03/15 14:24:21
permalink: /Webpack/m0oko6pf/
---

# 29、如何使用 Babel 来转译和处理 JavaScript？

在 Webpack 中使用 Babel 来转译和处理 JavaScript 文件非常简单。你只需要按照以下步骤进行配置：

## 1、安装依赖：

```
npm install babel-loader @babel/core @babel/preset-env --save-dev
```

## 2、配置 babel 和预设

在 Webpack 配置文件中，添加一个配置项来处理 JavaScript 文件。这可以是一个简单的对象或一个数组，具体取决于你的配置需求。

::: tip 一句话总结

总结起来就是配置`babel-loader`、引入预设`@babel/preset-env`，其他的啥也不用配，babel 替你全干了

:::

### 2.1、单入口

如果你只有一个入口文件，可以使用对象配置：

```javascript
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

### 2.2、多入口

如果你有多个入口文件，可以使用数组配置：

```javascript
module.exports = {
  entry: {
    app: ["./src/index.js", "./src/other.js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

这样配置后，Webpack 会将所有以`.js`结尾的文件传递给 Babel 加载器（babel-loader）进行处理，并使用`@babel/preset-env`预设来转译 ES6+代码为 ES5 语法。

这样就完成了 Babel 在 Webpack 中的基本配置。当你运行 Webpack 时，所有的 JavaScript 文件都会经过 Babel 进行转译和处理。
