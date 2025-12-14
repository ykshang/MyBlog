---
title: Taze 包依赖版本检查使用
createTime: 2025/07/22 23:25:25
permalink: /blog/34a6r71s/
---

在 MonoRepo 项目中，**Taze** 是一个非常不错的依赖版本检查工具，可以帮助你保持依赖的最新状态。以下是 Taze 的介绍，以 **Pnpm Workspace** 为例：

## 安装 Taze

在 **项目根目录下** 安装 Taze：

```bash
pnpm add -Dw taze
```

- **`-Dw`** 表示作为开发依赖安装到根目录。

## 基本使用

### 1、检查依赖更新

运行以下命令检查所有依赖的最新版本：

```bash
pnpm taze
```

这会列出所有可更新的依赖（包括 `dependencies` 和 `devDependencies`）。

### 2、更新依赖

如果想直接更新所有依赖，可以运行：

```bash
pnpm taze -r
```

- **`-r`** 表示递归检查所有 workspace 项目。

## 进阶用法

### 1、仅检查特定的子项目

```bash
# 仅检查 apps/web-app 的依赖
pnpm taze --filter web-app
```

### 2、仅检查生产依赖

```bash
pnpm taze --prod
```

### 3、仅检查 devDependencies

```bash
pnpm taze --dev
```

### 4、更新到最新 major 版本

```bash
pnpm taze major
```

### 5、更新到最新 minor 版本

```bash
pnpm taze minor
```

### 6、更新到最新 patch 版本

```bash
pnpm taze patch
```

## 结合 pnpm 更新依赖

Taze 仅提供检查功能，实际更新依赖仍需使用 `pnpm up`：

```bash
# 检查哪些依赖可更新
pnpm taze

# 更新所有依赖
pnpm up --latest

# 仅更新特定依赖（如 lodash）
pnpm up lodash@latest
```

## 配置文件

### package.json

可以在 `package.json` 中配置 Taze 的默认行为：

```json
{
  "taze": {
    "recursive": true, // 默认检查所有 workspace 项目
    "include": ["dependencies", "devDependencies"],
    "exclude": ["@types/*"] // 忽略某些包
  }
}
```

### taze.config.js

也可以使用一个单独的 `taze.config.js` 文件来配置 Taze。

```js
import { defineConfig } from "taze";

export default defineConfig({
  exclude: ["webpack"], // 排除不需要更新的包
  force: true, // 强制从 registry 中获取最新的包信息，忽略缓存。
  write: true, // 更新后直接写入 package.json
  install: true, // 更新后立即运行 npm/yarn/pnpm install。
  ignorePaths: ["**/node_modules/**", "**/test/**"], // 在单仓库多项目结构中忽略某些路径。
  ignoreOtherWorkspaces: true, // 忽略其他工作空间的 package.json
  // 为特定包设置不同的升级模式
  packageMode: {
    typescript: "major",
    unocss: "ignore",
    "/vue/": "latest",
  },
  // 禁用对 "overrides" 字段的检查
  depFields: {
    overrides: false,
  },
});
```

## 与 `pnpm up` 的区别

| 工具          | 功能                                        | 适用场景           |
| ------------- | ------------------------------------------- | ------------------ |
| **Taze**      | 仅检查依赖版本，不修改 `package.json`       | 查看哪些依赖可更新 |
| **`pnpm up`** | 直接更新 `package.json` 和 `pnpm-lock.yaml` | 实际升级依赖       |

## 最佳实践

1. **定期检查依赖**：
   ```bash
   pnpm taze -r
   ```
2. **选择性更新**：
   ```bash
   pnpm up lodash@latest --filter web-app
   ```
3. **测试后再提交**：
   - 更新依赖后运行测试：
     ```bash
     pnpm test
     ```
   - 确保无兼容性问题后再提交 `pnpm-lock.yaml`。

## 总结

- **Taze** 适用于检查依赖的有无新版本发布，但不自动修改 `package.json`。
- **`pnpm up`** 用于实际更新依赖。
- 在 pnpm workspace 中使用 `--filter` 可以精准控制作用的 workspace 项目，避免更新其他项目的依赖。

使用 Taze 可以让你更轻松地管理 monorepo 中的依赖版本，避免依赖过时问题！ 🚀
