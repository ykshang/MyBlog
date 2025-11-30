import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import "./theme/styles/custom.css";
import "./theme/styles/index.css";
import "./theme/styles/diy.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import MyNavMenu from "./theme/components/MyNavMenu.vue";
import File from "./theme/components/File.vue";
import test from "./theme/components/test.vue";
import "./theme/styles/component.scss";

import CustomHomePage from "./theme/CustomHomePage/Custom.vue"; // 自定义首页
import CustomComponent from "./theme/components/Custom.vue";

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus);

    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    app.component("CustomHomePage", CustomHomePage);
    app.component("CustomComponent", CustomComponent);
    app.component("MyNavMenu", MyNavMenu);
    app.component("test", test);
    app.component("CustomHomePage", CustomHomePage);
    app.component("file", File);
  },
});
