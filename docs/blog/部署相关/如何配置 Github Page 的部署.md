---
title: 如何配置 Github Page 的部署
createTime: 2025/05/14 13:50:15
permalink: /blog/9z4lpa1m/
---

分享一个常用的一个 **万能+灵活** 配置：

可以本地运行，可以在 github 上运行，都可以自动部署到 github 的 gh-pages 分支。

### Step 1 本地创建构建文件并测试一下

本地创建一个`deploy.sh`，内容如下：（文件名随意，和构建流程文件能对得上行）

该脚本运行完能将结果能推送到 gh-pages 分支，并且不影响本地项目。

文件里的邮箱要和 github 上的邮箱和用户名一致，不然会报错。**因为要和对应的 ssh keys 能验证匹配**

**注意：本地项目下运行可以删掉`npm install`，因为不需要重新安装依赖**

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

## 安装依赖
npm install

# 运行构建命令，生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 推送构建结果到gh-pages分支
git init
# 邮箱
git config user.email "xxxxxx@qq.com"
# 用户名
git config --global user.name "xxxx"
# 添加文件并提交
git add -A
git commit -m 'Automatic build'

# 不确定 git init 后，当前分支是master 还是 main
# 这里再次强制创建切换到 master 分支。
# 可以指定其他的分支名，能和 push 命令里的分支名对应即可。
git checkout -B master
# 强制推送到gh-pages分支。
git push -f git@github.com:ykshang/MyInterviewDocs.git master:gh-pages

cd -
```

### Step 2 测试一下

测试主要分两部分：

1. 使用`docs:build` 看看构建报错吗？构建结果是否正常？
2. 运行`bash deploy.sh` 看看报错吗？ 本地运行的话，运行结果有没有推送到仓库的 `gh-pages` 分支的？过一两分钟，刷新一下页面，你修改的博客内容是不是生效了？

在本地使用`http-server`试试能不能访问构建出来的静态文件。

#### Step 3 创建一个变量存储 `id_rsa` 私钥。

在`setting -> secrets` 下创建一个变量 `ACTION_DEPLOY_KEY`。（名字随意，保持和 `deploy.yml` 文件的引用变量的名字一致即可）

打开本地 user 目录下，把`.ssh/id_rsa` 的文件内容复制给 `ACTION_DEPLOY_KEY` 变量。或者打开用户设置，把`SSH keys` 复制过去。

这个变量主要是就是身份认证，方便你把构建结果推送（ssh）到 `gh-pages` 分支

### Step 4 创建 github 的工作流文件并拉取到本地

构建脚本能正常运行并推送代码的话，就可以配置工作流了。

在`github -> aciton` 里创建个 `workflow` 工作流。流程文件名字起一下，如：`deploy.yml`。

创建提交以后，在本地更新一下，把这个文件`deploy.yml` 拉取到本地。

可以复制下面的代码，直接使用：

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  # 触发构建的动作和对应的分支，代码在哪，分支就配置哪。
  # 这里是master分支，所以每次push到master分支，就会触发构建。
  push:
    branches: [master]
  # pull_request 也会触发构建
  pull_request:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: Setup install env
        env:
          # 需要在 secrets 创建该变量 ACTION_DEPLOY_KEY
          # 并且把你本地计算机的私钥复制进去，和用户设置里的`SSH keys` 保持一致
          # 方便后续，构建完成后，推送代码到gh-pages分支。
          ACTION_DEPLOY_KEY: ${{ secrets.ACTION_DEPLOY_KEY }}

        run: |
          # set up private key for deploy
          mkdir -p ~/.ssh/
          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts

      # Runs a set of commands using the runners shell
      - name: build
        # 运行构建脚本
        run: bash deploy.sh
```

#### Step5 本地推送代码并测试一下

前边的 `deploy.yml` 中指定了`push` 到 `mastser` 分支时触发构建

我们可以在本地代码里，修改一下内容，然后推送到仓库的 `master` 分支。

然后去`action` 里看一下，是否能正常运行构建脚本？

如果构建脚本能正常运行，并且能推送到 `gh-pages` 分支，那么就说明构建流程配置成功了。
