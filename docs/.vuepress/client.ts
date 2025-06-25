import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import MyNavMenu from "./theme/components/MyNavMenu.vue";
import File from "./theme/components/File.vue";
import test from "./theme/components/test.vue";
import gonglue from "./theme/gonglue/gonglue.vue";
import CustomIndex from "./theme/CustomIndex/Custom.vue"; // 自定义组件

import "./theme/styles/custom.css";
import "./theme/styles/index.css";
import "./theme/styles/diy.sass";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

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
    app.component("MyNavMenu", MyNavMenu);
    app.component("test", test);
    app.component("CustomIndex", CustomIndex);
    app.component("gonglue", gonglue);
    app.component("file", File);
  },
});
