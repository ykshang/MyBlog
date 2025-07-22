---
title: Monorepo 架构实践
createTime: 2025/07/22 17:37:54
permalink: /article/u4mvbli9/
---

## 查看仓库内所有的 monorepo 项目

```bash
pnpm list -r --depth -1
```

- `-r`：表示递归地列出所有依赖，适用于 monorepo 项目。
- `--depth -1`：表示列出所有依赖，不包含子依赖。

## 过滤子应用

```bash
pnpm --filter <app-name>
pnpm --filter <app-name>
```

- `--filter <app-name>`：表示过滤指定的子应用，`app-name` 为子应用的名称。`<app-name>` 与 `package.json` 中的 `name` 字段保持一致。

  可以省略掉 scope 部分，例如 `pnpm --filter @vue-learn/demo start` 可以直接写为 `pnpm --filter demo start`。

## packages.json 里的 name 字段

```json
{
  "name": "@scope/name"
}
```

- name 字段的格式为 `@scope/name`，
- Scope 部分可以配置，也可以不配置。
  - 如果配置了 Scope 部分，`--filter` 时可以省略掉 Scope 部分。
  - 如果没有配置 Scope 部分，`--filter` 时会严格匹配 name 字段。
- name 字段必须和 `--filter` 后的名称一致。

例如下边的命令是相同的，都是启动 demo 应用：

```bash
pnpm --filter @vue-learn/demo start
pnpm --filter demo start
```

## 全局添加依赖

该包会被安装到所有的子应用中。

```bash
pnpm add <package-name>
```

## 给指定子应用添加依赖

该依赖包只安装到指定的子应用中。

```bash
pnpm --filter <app-name> add <package-name>
```

- `<app-name>`：表示子应用的名称，与 `package.json` 中的 `name` 字段保持一致。scope 可以省略。
- `<package-name>`：表示要添加的依赖包的名称。

例如下边的命令是给 demo 应用添加 vue 依赖：

```bash
pnpm --filter demo add vue
```

## 给本地项目添加本地的依赖

### 版本号形式 `@workspace:*`

可以使用版本号的形式安装：

```bash
## @workspace:* 是一个特殊的版本号
pnpm --filter demo add @vue-learn/utils@workspace:*
```

需要注意，如果本地仓库下的项目配置了 scope ，当他被当做依赖包安装时，需要匹配完整的 `@scope/name`。

### 工作区参数 `--workspace`

也可以使用 `--workspace` 选项，给所有子应用添加依赖。

```bash
pnpm --filter demo add @vue-learn/utils --workspace
```
### 直接在 package.json 里配置

```json
{
  "dependencies": {
    "@vue-learn/utils": "workspace:*"
  }
}
```

## 快速创建应用

```bash
pnpm create vite vue-app
```