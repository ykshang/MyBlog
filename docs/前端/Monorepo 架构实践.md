---
title: Monorepo 架构实践
createTime: 2025/07/22 17:37:54
permalink: /article/u4mvbli9/
---

常用命令：

#### 列出所有依赖

```bash
pnpm list -r --depth -1
```

- `-r`：表示递归地列出所有依赖，适用于 monorepo 项目。
- `--depth -1`：表示列出所有依赖，不包含子依赖。

##### 过滤子应用

```bash
pnpm --filter <app-name>
pnpm --filter <app-name>
```

- `--filter <app-name>`：表示过滤指定的子应用，`app-name` 为子应用的名称。`<app-name>` 与 `package.json` 中的 `name` 字段保持一致。

  可以省略掉 scope 部分，例如 `pnpm --filter @vue-learn/demo start` 可以直接写为 `pnpm --filter demo start`。

#### packages.json 里的 name 字段

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
