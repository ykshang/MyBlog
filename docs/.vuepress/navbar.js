import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  { text: '按标签查找', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '前端基础',
    items: [{
      text: '基础',
      items: [
        { text: 'Html', link: '/notes/Html/' },
        { text: 'CSS', link: '/blog/' },
        { text: 'Javascript', link: '/blog/' },
      ]
    }, {
      text: '进阶',
      items: [
        { text: 'Html', link: '/blog/' },
      ]
    }]
  }, {
    text: '工程化',
    items: [
      { text: 'Webpack', link: '/blog/' },
      { text: 'Babel', link: '/blog/' },
      { text: 'Gulp', link: '/blog/' },
      { text: 'Grunt', link: '/blog/' },
    ]
  }, {
    text: '项目管理',
    items: [{
      text: '代码管理',
      items: [
        { text: 'Git', link: '/blog/' },
        { text: 'SVN', link: '/blog/' },
      ]
    }]
  },
])
