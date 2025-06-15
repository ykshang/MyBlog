/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

// HTML 笔记配置
const HtmlNote = defineNoteConfig({
  dir: "Html",
  link: "/Html",
  sidebar: "auto",
});
// CSS 笔记配置
const CssNote = defineNoteConfig({
  dir: "CSS",
  link: "/CSS",
  sidebar: "auto",
});
// CSS 笔记配置
const JavaScriptNote = defineNoteConfig({
  dir: "Javascript",
  link: "/Javascript",
  sidebar: "auto",
});
// Koa 笔记配置
const KoaNote = defineNoteConfig({
  dir: "Koa",
  link: "/Koa",
  sidebar: "auto",
});
// Koa 笔记配置
const ExpressNote = defineNoteConfig({
  dir: "Express",
  link: "/Express",
  sidebar: "auto",
});
// Git 笔记配置
const GitNote = defineNoteConfig({
  dir: "Git",
  link: "/Git",
  sidebar: "auto",
});
// Vue 笔记配置
const VueNote = defineNoteConfig({
  dir: "Vue",
  link: "/Vue",
  sidebar: "auto",
});
// React 笔记配置
const ReactNote = defineNoteConfig({
  dir: "React",
  link: "/React",
  sidebar: "auto",
});
// Angular 笔记配置
const AngularNote = defineNoteConfig({
  dir: "Angular",
  link: "/Angular",
  sidebar: "auto",
});
// Vite 笔记配置
const ViteNote = defineNoteConfig({
  dir: "Vite",
  link: "/Vite",
  sidebar: "auto",
});
// Babel 笔记配置
const BabelNote = defineNoteConfig({
  dir: "Babel",
  link: "/Babel",
  sidebar: "auto",
});
// NodeJs 笔记配置
const NodeJsNote = defineNoteConfig({
  dir: "NodeJs",
  link: "/NodeJs",
  sidebar: "auto",
});
// UniApp 笔记配置
const UniAppNote = defineNoteConfig({
  dir: "UniApp",
  link: "/UniApp",
  sidebar: "auto",
});
// Webpack 笔记配置
const WebpackNote = defineNoteConfig({
  dir: "Webpack",
  link: "/Webpack",
  sidebar: "auto",
});
// DesignPattern 笔记配置
const DesignPatternNote = defineNoteConfig({
  dir: "DesignPattern",
  link: "/DesignPattern",
  sidebar: "auto",
});
// Algorithm 笔记配置
const AlgorithmNote = defineNoteConfig({
  dir: "Algorithm",
  link: "/Algorithm",
  sidebar: "auto",
});
// Security 笔记配置
const SecurityNote = defineNoteConfig({
  dir: "Security",
  link: "/Security",
  sidebar: "auto",
});
// Network 笔记配置
const NetworkNote = defineNoteConfig({
  dir: "Network",
  link: "/Network",
  sidebar: "auto",
});
// WebBasic 笔记配置
const WebBasicNote = defineNoteConfig({
  dir: "WebBasic",
  link: "/WebBasic",
  sidebar: "auto",
});

// Grunt 笔记配置
const GruntNote = defineNoteConfig({
  dir: "Grunt",
  link: "/Grunt",
  sidebar: "auto",
});
// Gulp 笔记配置
const GulpNote = defineNoteConfig({
  dir: "Gulp",
  link: "/Gulp",
  sidebar: "auto",
});
// MongoDB 笔记配置
const MongoDBNote = defineNoteConfig({
  dir: "MongoDB",
  link: "/MongoDB",
  sidebar: "auto",
});
// Sass 笔记配置
const SassNote = defineNoteConfig({
  dir: "Sass",
  link: "/Sass",
  sidebar: "auto",
});
// Less 笔记配置
const LessNote = defineNoteConfig({
  dir: "Less",
  link: "/Less",
  sidebar: "auto",
});
// Stylus
const StylusNote = defineNoteConfig({
  dir: "Stylus",
  link: "/Stylus",
  sidebar: "auto",
});
// OtherToolForNodeJs 基于Node.js 的一些实用工具
const OtherToolForNodeJsNote = defineNoteConfig({
  dir: "OtherToolForNodeJs",
  link: "/OtherToolForNodeJs",
  sidebar: "auto",
});
// Browser 浏览器 笔记配置
const BrowserNote = defineNoteConfig({
  dir: "Browser",
  link: "/Browser",
  sidebar: "auto",
});
// ClassicFrontInterview js 经典面试题
const ClassicFrontInterviewNote = defineNoteConfig({
  dir: "ClassicFrontInterview",
  link: "/ClassicFrontInterview",
  sidebar: "auto",
});
// TypeScript 笔记配置
const TypeScriptNote = defineNoteConfig({
  dir: "TypeScript",
  link: "/TypeScript",
  sidebar: "auto",
});
// Pnpm 工作空间 笔记配置
const PnpmNote = defineNoteConfig({
  dir: "Pnpm",
  link: "/Pnpm",
  sidebar: "auto",
});

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （DemoNote 为参考示例，如果不需要它，请删除）
 */
export default defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    AlgorithmNote,
    AngularNote,
    BabelNote,
    BrowserNote,
    ClassicFrontInterviewNote,
    CssNote,
    DesignPatternNote,
    ExpressNote,
    GitNote,
    GulpNote,
    GruntNote,
    HtmlNote,
    JavaScriptNote,
    KoaNote,
    LessNote,
    MongoDBNote,
    NodeJsNote,
    NetworkNote,
    OtherToolForNodeJsNote,
    PnpmNote,
    ReactNote,
    SassNote,
    SecurityNote,
    StylusNote,
    TypeScriptNote,
    UniAppNote,
    ViteNote,
    VueNote,
    WebBasicNote,
    WebpackNote,
  ],
});
