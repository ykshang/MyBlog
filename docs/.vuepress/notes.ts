import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// HTML 笔记配置
const HtmlNote = defineNoteConfig({
  dir: 'Html',
  link: '/Html',
  sidebar: 'auto',
})
// CSS 笔记配置
const CssNote = defineNoteConfig({
  dir: 'CSS',
  link: '/CSS',
  sidebar: 'auto',
})
// CSS 笔记配置
const JavaScriptNote = defineNoteConfig({
  dir: 'Javascript',
  link: '/Javascript',
  sidebar: 'auto',
})
// Koa 笔记配置
const KoaNote = defineNoteConfig({
  dir: 'Koa',
  link: '/Koa',
  sidebar: 'auto',
})
// Koa 笔记配置
const ExpressNote = defineNoteConfig({
  dir: 'Express',
  link: '/Express',
  sidebar: 'auto',
})
// Git 笔记配置
const GitNote = defineNoteConfig({
  dir: 'Git',
  link: '/Git',
  sidebar: 'auto',
})
// Vue 笔记配置
const VueNote = defineNoteConfig({
  dir: 'Vue',
  link: '/Vue',
  sidebar: 'auto',
})
// React 笔记配置
const ReactNote = defineNoteConfig({
  dir: 'React',
  link: '/React',
  sidebar: 'auto',
})
// Angular 笔记配置
const AngularNote = defineNoteConfig({
  dir: 'Angular',
  link: '/Angular',
  sidebar: 'auto',
})
// Vite 笔记配置
const ViteNote = defineNoteConfig({
  dir: 'Vite',
  link: '/Vite',
  sidebar: 'auto',
})
// Babel 笔记配置
const BabelNote = defineNoteConfig({
  dir: 'Babel',
  link: '/Babel',
  sidebar: 'auto',
})
// NodeJs 笔记配置
const NodeJsNote = defineNoteConfig({
  dir: 'NodeJs',
  link: '/NodeJs',
  sidebar: 'auto',
})
// UniApp 笔记配置
const UniAppNote = defineNoteConfig({
  dir: 'UniApp',
  link: '/UniApp',
  sidebar: 'auto',
})
// Webpack 笔记配置
const WebpackNote = defineNoteConfig({
  dir: 'Webpack',
  link: '/Webpack',
  sidebar: 'auto',
})
// DesignPattern 笔记配置
const DesignPatternNote = defineNoteConfig({
  dir: 'DesignPattern',
  link: '/DesignPattern',
  sidebar: 'auto',
})
// Algorithm 笔记配置
const AlgorithmNote = defineNoteConfig({
  dir: 'Algorithm',
  link: '/Algorithm',
  sidebar: 'auto',
})
// Security 笔记配置
const SecurityNote = defineNoteConfig({
  dir: 'Security',
  link: '/Security',
  sidebar: 'auto',
})
// Network 笔记配置
const NetworkNote = defineNoteConfig({
  dir: 'Network',
  link: '/Network',
  sidebar: 'auto',
})
// WebBasic 笔记配置
const WebBasicNote = defineNoteConfig({
  dir: 'WebBasic',
  link: '/WebBasic',
  sidebar: 'auto',
})

// Grunt 笔记配置
const GruntNote = defineNoteConfig({
  dir: 'Grunt',
  link: '/Grunt',
  sidebar: 'auto',
})
// Gulp 笔记配置
const GulpNote = defineNoteConfig({
  dir: 'Gulp',
  link: '/Gulp',
  sidebar: 'auto',
})
// MongoDB 笔记配置
const MongoDBNote = defineNoteConfig({
  dir: 'MongoDB',
  link: '/MongoDB',
  sidebar: 'auto',
})
// Sass 笔记配置
const SassNote = defineNoteConfig({
  dir: 'Sass',
  link: '/Sass',
  sidebar: 'auto',
})
// Less 笔记配置
const LessNote = defineNoteConfig({
  dir: 'Less',
  link: '/Less',
  sidebar: 'auto',
})
// Stylus
const StylusNote = defineNoteConfig({
  dir: 'Stylus',
  link: '/Stylus',
  sidebar: 'auto',
})
// OtherToolForNodeJs 基于Node.js 的一些实用工具
const OtherToolForNodeJsNote = defineNoteConfig({
  dir: 'OtherToolForNodeJs',
  link: '/OtherToolForNodeJs',
  sidebar: 'auto',
})
export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    AlgorithmNote,
    AngularNote,
    BabelNote,
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
    ReactNote,
    SassNote,
    SecurityNote,
    StylusNote,
    UniAppNote,
    ViteNote,
    VueNote,
    WebBasicNote,
    WebpackNote,
  ],
})
