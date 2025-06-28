---
title: 配置 SSH 免密登录
createTime: 2025/06/28 17:14:09
permalink: /article/w1h61gz4/
---

我们假设有一台 nginx 服务器，服务器 IP 为 `120.27.157.156`，服务器用户名是 `root`，服务器端口是 `22`。

::: tip 提示
生成 ssh 密钥的用户名，与登录服务器的用户名可以不一致，我们将密钥复制到服务器的哪个用户，就可以使用哪个用户进行免密登录。
:::

## 配置免密登录

我们需要使用 ssh 登录服务器，又不想每次都输入密码，可以使用 SSH 公私钥的解决方案。

### 1、生成密钥

```bash
ssh-keygen -t rsa -b 4096 -C "535634238@qq.com"
```

### 2、创建 `.ssh` 目录和 `authorized_keys` 文件

我们需要确保服务器下有 `.ssh` 目录和 `authorized_keys` 文件，如果没有可以手动创建。

```bash
mkdir ~/.ssh # ~ 表示当前用户，类似与windows系统的user目录
chmod 700 ~/.ssh # 700 是目录权限
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys # 600 是文件权限
```

::: info 600 和 700 的区别
`700` 表示只有 **文件所有者** 有 **读、写、执行** 的权限，其他用户没有权限。  
`600` 表示只有 **文件所有者** 有 **读、写** 的权限，其他用户没有权限。

- 对文件来说：执行意味着该文件是否可以作为可执行的程序、脚本运行。
- 对目录来说：执行意味着该目录下的文件是否可以被访问，是否可以被打开。

:::

### 3、将公钥复制到服务器

#### 自动处理 `ssh-copy-id`

`ssh-copy-id` 是一个便捷的工具，用于将本地 SSH 公钥自动安装到远程服务器的 `authorized_keys` 文件中，实现 SSH 免密登录。

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@120.27.157.156
```

- `i`：该参数指定了要复制的公钥文件路径。
- `root@120.27.157.156`：指定要将公钥复制到哪个服务器的哪个用户下。

#### 手动复制

我们可以使用 `cat` 命令读取公钥内容，使用 Filezilla、Xshell 等工具登录服务器，将公钥内容添加到服务器的 `authorized_keys` 文件中。

```bash
# 读取公钥内容
cat ~/.ssh/id_rsa.pub

# 登录服务器并编辑 authorized_keys 文件
vi ~/.ssh/authorized_keys
# 或者使用FTP工具直接编辑
```

### 4、测试免密登录

```bash
ssh root@120.27.157.156
```
