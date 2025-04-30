import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  // { text: '杂谈', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: "前端基础",
    items: [
      {
        text: "基础",
        items: [
          {
            text: "前端经典面试题",
            icon: "noto-v1:star",
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
            icon: "skill-icons:react-dark",
            link: "/notes/React/",
          },
          {
            text: "Angular",
            icon: "skill-icons:angular-light",
            link: "/notes/Angular/",
          },
          {
            text: "UniApp",
            icon: "/logo/uni-app.png",
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
            text: "其他工具",
            icon: "vscode-icons:file-type-light-config",
            link: "/notes/OtherToolForNodeJs/",
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
            icon: "la:less",
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
          {
            text: "Gulp",
            icon: "vscode-icons:file-type-gulp",
            link: "/notes/Gulp/",
          },
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
        icon: "devicon:mongodb-wordmark",
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
    ],
  },
  {
    text: "计算机基础",
    items: [
      {
        text: "算法",
        icon: "material-icon-theme:react",
        link: "/notes/Algorithm/",
      },
      {
        text: "设计模式",
        icon: "streamline-emojis:artist-palette",
        link: "/notes/DesignPattern/",
      },
      {
        text: "网络相关",
        icon: "fluent-color:wifi-20",
        link: "/notes/Network/",
      },
      {
        text: "信息安全",
        icon: "fluent-color:shield-checkmark-48",
        link: "/notes/Security/",
      },
    ],
  },
]);
