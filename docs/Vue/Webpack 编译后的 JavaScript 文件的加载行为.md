---
title: "Webpack 编译后的 JavaScript 文件的加载行为"
createTime: 2025/07/18 19:41:44
permalink: /article/mgkcxcmx/
tags:
  - Vue
---

在 Vue CLI 创建的 Vue 项目中，Webpack 编译后的 JavaScript 文件的加载行为默认是 **`defer`**，而不是 `async`。这是 Vue CLI 的默认优化策略，主要基于以下原因：

---

### **1. 默认行为：`defer`**

Vue CLI 使用 `html-webpack-plugin` 生成最终的 `index.html`，并默认设置：

```javascript
new HtmlWebpackPlugin({
  scriptLoading: "defer", // Vue CLI 默认使用 defer
  // ...
});
```

所以，编译后的 `app.js` 和 `chunk-vendors.js` 等脚本会带有 `defer` 属性：

```html
<script defer src="/js/app.123456.js"></script>
<script defer src="/js/chunk-vendors.789abc.js"></script>
```

---

### **2. 为什么选择 `defer` 而不是 `async`？**

Vue CLI 选择 `defer` 的主要原因是：

1. **保证执行顺序**

   - `defer` 会按 HTML 中的顺序依次执行（`chunk-vendors.js` → `app.js`），确保 Vue 依赖（如 Vue 本身、Vue Router、Vuex）先加载，再执行应用代码。
   - `async` 不能保证顺序，可能导致依赖未加载时就执行应用代码，引发错误。

2. **优化首屏渲染**

   - `defer` 脚本在 DOM 解析完成后按顺序执行，不会阻塞渲染。
   - `async` 可能在 DOM 解析中途执行，可能阻塞渲染。

3. **与 Vue 运行时兼容性**  
   Vue 的运行时需要依赖（如 `vue.runtime.esm.js`）优先加载，`defer` 更符合这种需求。

---

### **3. 动态导入（Code Splitting）的 `async` 行为**

通过 `import()` 动态加载的组件或路由会生成单独的 chunk，这些 chunk **默认是异步加载的（类似 `async`）**，例如：

```javascript
const Foo = () => import("./Foo.vue"); // 生成的文件会异步加载
```

编译后的 HTML 中会看到类似这样的脚本：

```html
<script src="/js/chunk-123456.789abc.js"></script>
<!-- 无 defer/async，但实际是异步加载 -->
```

Webpack 会通过自身的运行时逻辑管理这些 chunk 的加载，而不是依赖 `defer/async` 属性。

---

### **4. 如何强制改为 `async`？**

如果需要改为 `async`，可以在 `vue.config.js` 中配置：

```javascript
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].scriptLoading = "async"; // 改为 async
      return args;
    });
  },
};
```

但需注意：**可能导致依赖加载顺序问题**，需确保代码不依赖同步执行的脚本顺序。

---

### **总结**

| 场景                      | 加载方式             | 原因                                              |
| ------------------------- | -------------------- | ------------------------------------------------- |
| 主入口文件（如 `app.js`） | `defer`              | 保证依赖顺序，不阻塞渲染，兼容 Vue 运行时需求。   |
| 动态导入的 chunk          | 异步（类似 `async`） | 按需加载，由 Webpack 运行时管理，不阻塞初始渲染。 |

Vue CLI 的这种默认设计是为了在性能、兼容性和开发体验之间取得平衡。大多数情况下，无需修改默认行为。
