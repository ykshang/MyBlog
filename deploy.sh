#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

## 安装依赖
# npm install -g pnpm

# pnpm install

# 生成静态文件
pnpm cross-env NODE_OPTIONS=--max-old-space-size=6192 VUEPRESS_BASE="/MyBlog/" vuepress build docs --clean-cache --clean-temp

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config user.email "535634238@qq.com"
git config --global user.name "kangkang shang"
git add -A
git commit -m 'Automatic build'

# 发布到gh-pages分支
git checkout -B master
git push -f git@github.com:ykshang/MyBlog.git master:gh-pages

cd -
