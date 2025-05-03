import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import MyNavMenu from './theme/components/MyNavMenu.vue'
import test from './theme/components/test.vue'

import './theme/styles/custom.css'
import './theme/styles/diy.sass'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    app.use(ElementPlus);

    // your custom components
    // app.component('CustomComponent', CustomComponent)
    app.component('MyNavMenu', MyNavMenu)
    app.component('test', test)
  },
})
