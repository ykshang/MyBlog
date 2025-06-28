#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

## 安装依赖
pnpm install

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config user.email "535634238@qq.com"
git config --global user.name "kangkang shang"
git add -A
git commit -m 'Automatic build'

# 发布到gh-pages分支
git checkout -B master
git push -f git@github.com:ykshang/MyInterviewDocs.git master:gh-pages

cd -
