---
title: 如何在本地将前端项目自动化部署到nginx服务器
createTime: 2025/06/26 13:34:48
permalink: /article/wlm4pkxm/
---

在日常工作中，可能公司没有搭建现成的 CI/CD 服务，而我们可能每次都手动部署，因此我们可以使用 shell 脚本实现一个简单的 CI/CD。

我们假设有一台 nginx 服务器，服务器 IP 为 `120.27.157.156`，服务器用户名是 `root`，服务器端口是 `22`。

## 如何自动化部署

我们最终的目的是将编译生成的 dist 目录上传到服务器的 nginx 目录下，并重启 nginx 服务。

如果不依托于 CI/CD 平台，我们可以根据自己的需求，编写一个 shell 脚本，实现自动化部署。

脚本被触发的时机不同，脚本的内容也相应有变化。比如：

- 本地手动执行：我们可以在本地的 git 仓库中，添加一个脚本，需要部署的时候，手动触发脚本的执行。
- 远端仓库钩子触发执行：我们可以准备一个脚本，推送到远程 git 仓库，由仓库的 post-receive 钩子触发脚本的执行。

## 本地推送

假设我们有一个 `deploy.sh` 脚本位于项目的根目录下，我们手动执行该脚本，可以触发自动部署。

### 主要流程

1. 本地构建项目
2. 打印配置信息
3. 清空原有的部署文件
4. 上传新的部署文件
5. 重启 nginx 服务

### 脚本内容

> 构建过程中需要输入服务器密码，可以配置 SSH 免密登录。

```bash title="deploy.sh" :collapsed-lines=10
#!/bin/bash

# 本地前端项目构建并部署到Nginx脚本
# 定义变量
REMOTE_HOST="root@120.27.157.156" # 服务器用户@地址
REMOTE_PATH="/root/web/dist" # 服务器部署目录
NGINX_BIN="usr/local/nginx/sbin/nginx" # nginx 目录

# 开始构建项目
echo "Step 1. 开始构建打包。。。"
# 构建命令
npm run build
echo "==========================="

# 打印配置信息
echo "Step 2. 打印配置信息。。。"
echo "服务器: $REMOTE_HOST"
echo "部署目录: $REMOTE_PATH"
echo "Nginx目录: $NGINX_BIN"
echo "==========================="

# 删除旧文件
echo "Step 3. 正在清空服务器部署的旧 Dist 文件。。。"
ssh $REMOTE_HOST "rm -rf $REMOTE_PATH/*" # 需要密码

# 上传新文件
echo "Step 4. 上传新 Dist 文件"
# 可能需要输入密码，可以配置 SSH 免密登录
scp -r dist/* $REMOTE_HOST:$REMOTE_PATH
echo "上传完成"

echo "Step 5. 重启 Nginx"
# 重启 Nginx
ssh $REMOTE_HOST "$NGINX_BIN -s reload" # 需要密码
echo "Step 6. 部署完成"
echo "请访问 http://120.27.157.156/dist/"
```

## 远端仓库触发

我们可以在 git 仓库中，配置 post-receive 钩子，每次仓库有新的提交时，自动触发脚本的执行。

假设我们的服务器上：

- 仓库地址是：<a>/var/repo/project.git</a>
- 代码部署的位置 <a>/root/web/dist</a>
- nginx 目录：<a>usr/local/nginx/sbin/nginx</a>

### 主要流程

1. 代码提交，触发 post-receive 钩子
2. 在最新的指针中，拿到分支名，如果是 master 或者 main 则触发构建
3. 清空原有构建目录、并重新创建一个空的
4. 检出代码到构建目录
5. 安装依赖（安装依赖可以使用命令，可以使用备份的依赖包）
6. 执行项目构建
7. 同步构建结果到目标目录
8. 重启 Nginx
9. 清空构建目录

### 基础脚本

我们需要在将下述脚本复制到 <a>/var/repo/project.git/hooks/</a> 目录下的 post-receive 文件里

```bash title="脚本内容" :collapsed-lines=10
#!/bin/bash
set -e  # 任何命令失败则立即退出
# 配置参数
REPO_DIR="/var/repo/project.git"
DEPLOY_DIR="/root/web/dist"
NGINX_BIN="/usr/local/nginx/sbin/nginx"
BUILD_DIR="/tmp/project-build"

# Git传入的三个参数
# 1. oldrev 推送前的hash
# 2. newrev 推送后的hash
# 3. refname 当前的指针 "refs/heads/master"
while read oldrev newrev refname
do
  # 在 refname 中提取分支名，用于分支判断、代码检出
  branch=$(git rev-parse --symbolic --abbrev-ref "$refname")

  # 只处理推送到master/main分支
  if [ "$branch" = "master" ] || [ "$branch" = "main" ]; then

    echo "====== 开始部署 $branch 分支 ======"
    # 1. 准备干净的构建环境
    rm -rf "$BUILD_DIR" # 删除旧的构建目录
    mkdir -p "$BUILD_DIR" # 创建新的构建目录
    # 在构建目录下检出对应的分支代码
    git --work-tree="$BUILD_DIR" --git-dir="$REPO_DIR" checkout -f "$branch"

    # 2. 进入构建目录并安装依赖
    cd "$BUILD_DIR" || exit
    echo "安装依赖..."
    npm install  # 如果是yarn项目请改为yarn install

    # 3. 构建项目
    echo "构建项目中..."
    npm run build  # 如果是yarn项目请改为yarn build

    # 4. 部署到目标目录
    echo "同步文件到 $DEPLOY_DIR..."
    # 构建生成的 dist 目录同步到部署目录下
    rsync -a --delete "$BUILD_DIR/dist/" "$DEPLOY_DIR/"

    # 5. 重启Nginx服务
    echo "重启Nginx..."
    $NGINX_BIN -s reload

    # 6. 清理临时文件
    rm -rf "$BUILD_DIR"

    echo "====== 部署成功 ======"
    echo "当前版本: $(git rev-parse --short HEAD)"
  fi
done
```

### 优化处理

#### 1、`node_modules` 的处理

如果项目中使用了 `node_modules` 依赖，每次部署都需要重新安装依赖，这会增加部署时间。

我们可以检测 `node_modules` 目录是否存在，如果存在，则直接将对应的依赖文件移动到项目目录下。

甚至极端条件下，服务器和外界物理隔绝，无法下载依赖，我们可以使用 `tar` 命令将 `node_modules` 目录压缩打包，使用 git lfs 托管，构件时解压到构建目录下。

##### 备份 `node_modules` 目录

首先我们要检测是否存在 `node_modules` 目录的备份。如果存在，则移动到构建目录下。构建过程中，npm、yarn、pnpm 会根据 `package.json` 和 lock 文件来增量更新依赖包。

```bash
#!/bin/bash
# 切换到项目目录
DEPENDCY_DIR="/tmp/node_modules_cache"
BUILD_DIR="/tmp/project-build"

# 检测 node_modules 目录是否存在
if [ -d "$DEPENDCY_DIR" ]; then
  # 同步 node_modules 目录到指定位置
  mkdir -p "$BUILD_DIR/node_modules" # 创建新的构建目录
  rsync -a --delete "$DEPENDCY_DIR/" "$$BUILD_DIR/node_modules/"
fi
```

构建完成后，我们需要将构建目录下的 `node_modules` 目录进行备份。

```bash
# 构建完成后，将 node_modules 移动到备份目录
rm -rf "$DEPENDCY_DIR" # 删除旧的备份目录
mkdir -p "$DEPENDCY_DIR" # 创建新的备份目录
# 同步 node_modules 目录到备份目录
rsync -a --delete "$BUILD_DIR/node_modules/" "$DEPENDCY_DIR/"
```

##### 解压缩 `node_modules.tar`

有些情况下，我们的服务器无法连接外网，只能执行内网构建，这时候，需要我们将 `node_modules` 文件夹打包上传到 git 仓库，然后在执行构建的过程中解压到构建目录下。

将上述脚本中 `npm install` 替换为下述命令：

```bash
tar -xvf node_modules.tar
```

#### 2、备份缓存，加速二次构建

::: warning 缓存可能导致代码不生效
需要注意的是，有时候修改的代码不生效，可能是因为缓存没有及时更新。如果代码修改前后，文件指纹没有发生变化，可能会导致新代码不生效。
可以结合本地构建脚本，临时规避这个问题。
:::

备份文件缓存和备份 `node_modules` 类似。现代的构建工具，几乎都支持文件缓存加速二次构建速度。因此我们在每次构建开始之前，先判断有没有文件缓存的备份。

```bash
#!/bin/bash
# 切换到项目目录
DIST_DIR="/tmp/dist_cache"
BUILD_DIR="/tmp/project-build"

# 检测 dist 备份目录是否存在
if [ -d "$DIST_DIR" ]; then
  # 同步 dist 目录到指定位置
  mkdir -p "$BUILD_DIR/dist" # 创建新的构建目录
  rsync -a --delete "$DIST_DIR/" "$BUILD_DIR/dist/"
fi
```

构建完成后，我们需要将构建目录下的 `dist` 目录移动到备份目录下。

```bash
# 构建完成后，将 dist 移动到备份目录
rm -rf "$DIST_DIR" # 删除旧的备份目录
mkdir -p "$DIST_DIR" # 创建新的备份目录
# 同步 dist 目录到备份目录
rsync -a --delete "$BUILD_DIR/dist/" "$DIST_DIR/"
```
