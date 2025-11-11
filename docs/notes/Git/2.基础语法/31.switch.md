---
title: switch
createTime: 2025/03/13 20:17:00
permalink: /Git/7mhynm4y/
---

::: tip 主要作用
切换分支，checkout 也有这个功能
:::

## 语法

```bash
git switch [<options>] [--no-guess] <branch>
git switch [<options>] --detach [<start-point>]
git switch [<options>] (-c|-C) <new-branch> [<start-point>]
git switch [<options>] --orphan <new-branch>
```

## 常用的参数

| 参数           | 解释   |
| :------------- | :----- |
| `<new-branch>` | 分支名 |

## 常用命令举例：

- 切换到分支 hotfix

  ```bash
  git switch hotfix
  ```

- 切换到上一个分支

  ```bash
  git switch -
  ```
