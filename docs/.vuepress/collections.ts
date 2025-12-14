/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from "vuepress-theme-plume";

const blog = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: "post",
  // 文档集合所在目录，相对于 `docs`
  dir: "blog",
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: "技术博客",
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: "/blog/",
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
  //   archives: true, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
});

// const demoNote = defineCollection({
//   // doc 类型，该类型带有侧边栏
//   type: "doc",
//   // 文档集合所在目录，相对于 `docs`
//   dir: "notes/demo",
//   // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
//   // 如果 前缀不一致，则无法生成侧边栏。
//   // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
//   linkPrefix: "/notes/demo",
//   // 文档标题，它将用于在页面的面包屑导航中显示
//   title: "内置示例目录",
//   // 根据文件结构自动生成侧边栏
//   sidebar: "auto",
// });
// 算法 文档
const AlgorithmNote = defineCollection({
  type: "doc",
  dir: "notes/Algorithm",
  linkPrefix: "/notes/Algorithm",
  title: "算法",
  sidebar: "auto",
});
// 设计模式 文档
const DesignPatternNote = defineCollection({
  type: "doc",
  dir: "notes/DesignPattern",
  linkPrefix: "/notes/DesignPattern",
  title: "设计模式",
  sidebar: "auto",
});
// 计算机网络 文档
const NetworkNote = defineCollection({
  type: "doc",
  dir: "notes/Network",
  linkPrefix: "/notes/Network",
  title: "计算机网络",
  sidebar: "auto",
});
// 信息安全 文档
const SecurityNote = defineCollection({
  type: "doc",
  dir: "notes/Security",
  linkPrefix: "/notes/Security",
  title: "信息安全",
  sidebar: "auto",
});
// Git 文档
const GitNote = defineCollection({
  type: "doc",
  dir: "notes/Git",
  linkPrefix: "/notes/Git",
  title: "Git",
  sidebar: "auto",
});
// SVN 文档
const SVNNote = defineCollection({
  type: "doc",
  dir: "notes/SVN",
  linkPrefix: "/notes/SVN",
  title: "SVN",
  sidebar: "auto",
});
// Pnpm 文档
const PnpmNote = defineCollection({
  type: "doc",
  dir: "notes/Pnpm",
  linkPrefix: "/notes/Pnpm",
  title: "Pnpm",
  sidebar: "auto",
});
// MongoDB 文档
const MongoDBNote = defineCollection({
  type: "doc",
  dir: "notes/MongoDB",
  linkPrefix: "/notes/MongoDB",
  title: "MongoDB",
  sidebar: "auto",
});
// NodeJs 文档
const NodeJsNote = defineCollection({
  type: "doc",
  dir: "notes/NodeJs",
  linkPrefix: "/notes/NodeJs",
  title: "NodeJs",
  sidebar: "auto",
});
// Express 文档
const ExpressNote = defineCollection({
  type: "doc",
  dir: "notes/Express",
  linkPrefix: "/notes/Express",
  title: "Express",
  sidebar: "auto",
});
// Koa 文档
const KoaNote = defineCollection({
  type: "doc",
  dir: "notes/Koa",
  linkPrefix: "/notes/Koa",
  title: "Koa",
  sidebar: "auto",
});
// 主流工具库 文档
const PopularLibraryNote = defineCollection({
  type: "doc",
  dir: "notes/PopularLibrary",
  linkPrefix: "/notes/PopularLibrary",
  title: "主流工具库",
  sidebar: "auto",
});
// Stylus 文档
const StylusNote = defineCollection({
  type: "doc",
  dir: "notes/Stylus",
  linkPrefix: "/notes/Stylus",
  title: "Stylus",
  sidebar: "auto",
});
// Sass 文档
const SassNote = defineCollection({
  type: "doc",
  dir: "notes/Sass",
  linkPrefix: "/notes/Sass",
  title: "Sass",
  sidebar: "auto",
});
// Less 文档
const LessNote = defineCollection({
  type: "doc",
  dir: "notes/Less",
  linkPrefix: "/notes/Less",
  title: "Less",
  sidebar: "auto",
});
// Webpack 文档
const WebpackNote = defineCollection({
  type: "doc",
  dir: "notes/Webpack",
  linkPrefix: "/notes/Webpack",
  title: "Webpack",
  sidebar: "auto",
});
// Vite 文档
const ViteNote = defineCollection({
  type: "doc",
  dir: "notes/Vite",
  linkPrefix: "/notes/Vite",
  title: "Vite",
  sidebar: "auto",
});
// Babel 文档
const BabelNote = defineCollection({
  type: "doc",
  dir: "notes/Babel",
  linkPrefix: "/notes/Babel",
  title: "Babel",
  sidebar: "auto",
});
// Gulp 文档
const GulpNote = defineCollection({
  type: "doc",
  dir: "notes/Gulp",
  linkPrefix: "/notes/Gulp",
  title: "Gulp",
  sidebar: "auto",
});
// Grunt 文档
const GruntNote = defineCollection({
  type: "doc",
  dir: "notes/Grunt",
  linkPrefix: "/notes/Grunt",
  title: "Grunt",
  sidebar: "auto",
});
// 经典前端面试题 文档
const ClassicFrontInterviewNote = defineCollection({
  type: "doc",
  dir: "notes/ClassicFrontInterview",
  linkPrefix: "/notes/ClassicFrontInterview",
  title: "经典前端面试题",
  sidebar: "auto",
});
// 前端基础 文档
const WebBasicNote = defineCollection({
  type: "doc",
  dir: "notes/WebBasic",
  linkPrefix: "/notes/WebBasic",
  title: "前端基础",
  sidebar: "auto",
});
// Html 文档
const HtmlNote = defineCollection({
  type: "doc",
  dir: "notes/Html",
  linkPrefix: "/notes/Html",
  title: "Html",
  sidebar: "auto",
});
// Css 文档
const CssNote = defineCollection({
  type: "doc",
  dir: "notes/Css",
  linkPrefix: "/notes/Css",
  title: "Css",
  sidebar: "auto",
});
// Javascript 文档
const JavascriptNote = defineCollection({
  type: "doc",
  dir: "notes/Javascript",
  linkPrefix: "/notes/Javascript",
  title: "Javascript",
  sidebar: "auto",
});
// TypeScript 文档
const TypeScriptNote = defineCollection({
  type: "doc",
  dir: "notes/TypeScript",
  linkPrefix: "/notes/TypeScript",
  title: "TypeScript",
  sidebar: "auto",
});
// 浏览器相关 文档
const BrowserNote = defineCollection({
  type: "doc",
  dir: "notes/Browser",
  linkPrefix: "/notes/Browser",
  title: "浏览器相关",
  sidebar: "auto",
});
// Vue 文档
const VueNote = defineCollection({
  type: "doc",
  dir: "notes/Vue",
  linkPrefix: "/notes/Vue",
  title: "Vue",
  sidebar: "auto",
});
// React 文档
const ReactNote = defineCollection({
  type: "doc",
  dir: "notes/React",
  linkPrefix: "/notes/React",
  title: "React",
  sidebar: "auto",
});
// Angular 文档
const AngularNote = defineCollection({
  type: "doc",
  dir: "notes/Angular",
  linkPrefix: "/notes/Angular",
  title: "Angular",
  sidebar: "auto",
});
// UniApp 文档
const UniAppNote = defineCollection({
  type: "doc",
  dir: "notes/UniApp",
  linkPrefix: "/notes/UniApp",
  title: "UniApp",
  sidebar: "auto",
});
// Rollup 文档
const RollupNote = defineCollection({
  type: "doc",
  dir: "notes/Rollup",
  linkPrefix: "/notes/Rollup",
  title: "Rollup",
  sidebar: "auto",
});
/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoNote 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([
  blog,
  AlgorithmNote,
  DesignPatternNote,
  NetworkNote,
  SecurityNote,
  GitNote,
  SVNNote,
  PnpmNote,
  MongoDBNote,
  NodeJsNote,
  ExpressNote,
  KoaNote,
  PopularLibraryNote,
  StylusNote,
  SassNote,
  LessNote,
  WebpackNote,
  ViteNote,
  BabelNote,
  GulpNote,
  GruntNote,
  ClassicFrontInterviewNote,
  WebBasicNote,
  HtmlNote,
  CssNote,
  JavascriptNote,
  TypeScriptNote,
  BrowserNote,
  VueNote,
  ReactNote,
  AngularNote,
  UniAppNote,
  RollupNote,
]);
