/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  {
    text: "前端基础",
    items: [
      {
        text: "基础",
        items: [
          {
            text: "经典面试题",
            icon: "streamline-flex-color:group-meeting-approval",
            link: "/notes/ClassicFrontInterview/",
          },
          {
            text: "Web 基础",
            icon: "logos:internetexplorer",
            link: "/notes/WebBasic/",
          },
          {
            text: "Html",
            icon: "logos:html-5",
            link: "/notes/Html/",
          },
          {
            text: "CSS",
            icon: "vscode-icons:file-type-css",
            link: "/notes/CSS/",
          },
          {
            text: "Javascript",
            icon: "skill-icons:javascript",
            link: "/notes/Javascript/",
          },
          {
            text: "TypeScript",
            icon: "skill-icons:typescript",
            link: "/notes/TypeScript/",
          },
          {
            text: "浏览器相关",
            icon: "logos:chrome",
            link: "/notes/Browser/",
          },
        ],
      },
      {
        text: "主流框架",
        items: [
          {
            text: "Vue",
            icon: "logos:vue",
            link: "/notes/Vue/",
          },
          {
            text: "React",
            icon: "material-icon-theme:react",
            link: "/notes/React/",
          },
          {
            text: "Angular",
            icon: "skill-icons:angular-light",
            link: "/notes/Angular/",
          },
          {
            text: "UniApp",
            icon: "logos:unito-icon",
            link: "/notes/UniApp/",
          },
        ],
      },
    ],
  },
  {
    text: "前端进阶",
    items: [
      {
        text: "轻应用框架",
        items: [
          {
            text: "Node.js",
            icon: "devicon:nodejs",
            link: "/notes/NodeJs/",
          },
          {
            text: "Express",
            icon: "vscode-icons:file-type-js-official",
            link: "/notes/Express/",
          },
          {
            text: "Koa",
            icon: "logos:koa",
            link: "/notes/Koa/",
          },
          {
            text: "主流工具库",
            icon: "material-icon-theme:folder-project-open",
            link: "/notes/PopularLibrary/",
          },
        ],
      },
      {
        text: "CSS 预处理器",
        items: [
          {
            text: "Stylus",
            icon: "material-icon-theme:stylus",
            link: "/notes/Stylus/",
          },
          {
            text: "Sass",
            icon: "skill-icons:sass",
            link: "/notes/Sass/",
          },
          {
            text: "Less",
            icon: "logos:less",
            link: "/notes/Less/",
          },
        ],
      },
      {
        text: "构建工具",
        items: [
          {
            text: "Webpack",
            icon: "devicon:webpack",
            link: "/notes/Webpack/",
          },
          {
            text: "Vite",
            icon: "vscode-icons:file-type-vite",
            link: "/notes/Vite/",
          },
          {
            text: "Babel",
            icon: "vscode-icons:file-type-light-babel2",
            link: "/notes/Babel/",
          },
          // {
          //   text: "Gulp",
          //   icon: "vscode-icons:file-type-gulp",
          //   link: "/notes/Gulp/",
          // },
          {
            text: "Grunt",
            icon: "vscode-icons:file-type-grunt",
            link: "/notes/Grunt/",
          },
        ],
      },
    ],
  },
  {
    text: "数据库",
    items: [
      {
        text: "MongoDB",
        icon: "devicon:mongodb",
        link: "/notes/MongoDB/",
      },
    ],
  },
  {
    text: "项目管理",
    items: [
      {
        text: "代码管理",
        items: [
          {
            text: "Git",
            icon: "devicon:git",
            link: "/notes/Git/",
          },
          {
            text: "SVN",
            icon: "file-icons:tortoisesvn",
            link: "/notes/SVN/",
          },
        ],
      },
      {
        text: "包管理",
        items: [
          {
            text: "Pnpm",
            icon: "skill-icons:pnpm-light",
            link: "/notes/Pnpm/",
          },
        ],
      },
    ],
  },
  {
    text: "计算机基础",
    items: [
      {
        text: "算法",
        icon: "devicon:networkx",
        link: "/notes/Algorithm/",
      },
      {
        text: "设计模式",
        icon: "fxemoji:bookmarktab",
        link: "/notes/DesignPattern/",
      },
      {
        text: "计算机网络",
        icon: "marketeq:signal-2",
        link: "/notes/Network/",
      },
      {
        text: "信息安全",
        icon: "fluent-color:shield-checkmark-48",
        link: "/notes/Security/",
      },
    ],
  },
  {
    text: "更多",
    items: [
      {
        text: "站点导航",
        icon: "streamline-freehand-color:task-list-clipboard-favorite-star",
        link: "/sites-collect/",
      },
      {
        text: "测试",
        icon: "tdesign:play-demo",
        link: "/blog/llc3p6ni/",
      },
    ],
  },
]);
