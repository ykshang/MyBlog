---
title: 在 Node.js 中使用 ESM 模块
createTime: 2025/06/13 18:53:25
permalink: /article/tz4sd55p/
tags:
  - Node.js
  - ESM
  - 模块化
---

Node.js 从 v12 开始正式支持 ECMAScript 模块 (ESM)，以下是完整的使用指南：

## 一、启用方式

### 1、使用 `.mjs` 文件扩展名

`.mjs` 文件扩展名代表 ECMAScript 模块文件，Node.js 会自动将其视为 ESM 模块。

```javascript
// module.mjs
export function hello() {
  return "Hello from ESM!";
}

// app.mjs
import { hello } from "./module.mjs";
console.log(hello());
```

### 2、在 `package.json` 中设置 `type`

设置后所有 `.js` 文件都会被当作 ESM 模块

```json
{
  "type": "module"
}
```

### 3、在 html 中导入模块

在 html 导入 javascript 模块脚本是，需要在 `<script>` 标签中添加 `type="module"` 的属性声明

```html
<script type="module" src="/moduleA.js"></script>
```

## 二、常用导入导出语法

### 1、命名导出与导入

```javascript
// lib.mjs
export const PI = 3.14;
export function circleArea(r) {
  return PI * r * r;
}

// app.mjs
import { PI, circleArea } from "./lib.mjs";
```

### 2、默认导出与导入

```javascript
// logger.mjs
export default function (msg) {
  console.log(`[LOG]: ${msg}`);
}

// app.mjs
import log from "./logger.mjs";
log("Hello");
```

### 3、命名空间导入

```javascript
import * as math from "./math.mjs";
console.log(math.PI);
```

## 三、与 CommonJS 的差异

| 特性       | ESM                         | CommonJS             |
| ---------- | --------------------------- | -------------------- |
| 导入语法   | `import`                    | `require()`          |
| 导出语法   | `export`                    | `module.exports`     |
| 文件扩展名 | `.mjs` 或 `"type":"module"` | `.js`                |
| 动态导入   | `import()` 函数             | `require()` 随时调用 |
| 顶层 await | 支持                        | 不支持               |
| 加载方式   | 异步                        | 同步                 |

## 四、与 CommonJS 互操作

### 1、在 ESM 中导入 CommonJS 模块

```javascript
// 导入 CommonJS 模块
import cjsModule from "./cjs-module.js";
console.log(cjsModule.foo);
```

### 2、在 CommonJS 中导入 ESM 模块（需要动态导入）

```javascript
// 注意：必须在 async 函数中
async function loadESM() {
  const esmModule = await import("./esm-module.mjs");
  console.log(esmModule.hello());
}
```

## 五、特殊注意事项

### 1、文件扩展名必须完整

```javascript
// 必须写全扩展名
import "./module.mjs"; // ✅
import "./module"; // ❌
```

### 2、目录索引文件

- ESM: 必须明确写 `./dir/index.mjs`
- 不像 CommonJS 可以简写为 `./dir`

### 3、`__dirname` 和 `__filename` 替代方案

```javascript
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

const _filename =
  typeof __filename !== "undefined"
    ? __filename
    : basename(fileURLToPath(import.meta.url));
```

### 4、导入 JSON 模块

```javascript
import config from "./config.json" assert { type: "json" };
```

## 六、最佳实践

1. 新项目建议直接使用 ESM
2. 大型项目迁移可以逐步进行
3. 工具库最好同时提供 ESM 和 CommonJS 版本
4. 注意第三方模块的兼容性

## 七、常见问题解决

1. 错误 `ERR_REQUIRE_ESM`：不能使用 `require()` 加载 ESM 模块，必须使用 `import()`

2. 文件路径问题：使用 `import.meta.url` 配合 `url` 和 `path` 模块解决路径问题
