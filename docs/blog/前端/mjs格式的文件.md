---
title: 文件格式 mjs
createTime: 2025/06/13 17:50:10
permalink: /blog/ztjpbb4h/
tags:
  - 模块化
---

`.mjs` 是 JavaScript 的模块文件扩展名，代表"Module JavaScript"，是 ECMAScript 模块(ESM)的官方文件扩展名。

## 主要特点

1. **ES 模块标准**：严格遵循 ECMAScript 模块规范
2. **明确区分**：与传统的.js 文件形成明显区别
3. **静态解析**：模块依赖关系在代码执行前就已确定
4. **严格模式**：默认启用严格模式

## 与普通.js 文件的区别

| 特性       | .mjs 文件                | 普通.js 文件                      |
| ---------- | ------------------------ | --------------------------------- |
| 模块类型   | 始终被视为 ES 模块       | 取决于 `package.json` 或扩展名    |
| 导入/导出  | 必须使用 `import/export` | 可以使用 `require/module.exports` |
| 严格模式   | 默认启用                 | 需要手动启用                      |
| 文件扩展名 | `.mjs`                   | `.js`                             |

## 使用场景

1. **Node.js 中的 ES 模块**：在 Node.js 环境中明确表示这是 ES 模块
2. **浏览器原生模块**：现代浏览器可以直接加载.mjs 模块
3. **工具链开发**：构建工具和转译器可以更明确地处理模块

## 示例代码

```javascript
// math.mjs
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

// app.mjs
import { add, PI } from "./math.mjs";

console.log(add(2, 3)); // 输出: 5
console.log(PI); // 输出: 3.14159
```

## 配置与使用

1. **Node.js 中使用**：

   - 在 package.json 中添加 `"type": "module"`
   - 或直接使用.mjs 扩展名

2. **浏览器中使用**：

   ```html
   <script type="module" src="module.mjs"></script>
   ```

## 注意事项

1. 不是所有环境都原生支持.mjs 文件
2. 某些旧工具链可能需要额外配置才能处理.mjs
3. 模块路径必须包含完整扩展名(不能省略.mjs)
4. 与 CommonJS 模块互操作时需要注意差异

`.mjs` 扩展名的引入主要是为了解决 JavaScript 生态中长期存在的模块系统混乱问题，为 ES 模块提供明确的标识。
