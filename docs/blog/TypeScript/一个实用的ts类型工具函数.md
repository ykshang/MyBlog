---
title: 一个实用的ts类型工具函数
createTime: 2025/12/04 23:57:57
permalink: /blog/9at9hpsw/
---

```ts
type Union = "a" | "b" | "c";
export type LiteralUnion<Union extends Base, Base = string> =
  | Union
  | (Base & { zz_IGNORE_ME?: never });
```
