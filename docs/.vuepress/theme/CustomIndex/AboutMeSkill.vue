<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-skill">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">技能</p>
      <p class="about-me-card-text-big">我的能力</p>
    </div>
    <!-- 第一行向左移动 -->
    <div class="marquee-row first-row">
      <div class="marquee-content">
        <span v-for="(item, index) in technology" :key="index">
          <icon :name="item.icon" />
        </span>
        <span
          v-for="(item, index) in technology"
          :key="index + technology.length"
          ><icon :name="item.icon"
        /></span>
      </div>
    </div>
    <!-- 第二行向右移动 -->
    <div class="marquee-row second-row">
      <div class="marquee-content">
        <span v-for="(item, index) in tools" :key="index"
          ><icon :name="item.icon"
        /></span>
        <span v-for="(item, index) in tools" :key="index + tools.length"
          ><icon :name="item.icon"
        /></span>
      </div>
    </div>

    <div class="about-me-skill-detail">
      <span v-for="(item, index) in technology" :key="index">
        <icon :name="item.icon" /> <span>{{ item.type }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const technology = ref([
  { type: "HTML5", icon: "logos:html-5" },
  { type: "CSS3", icon: "logos:css-3" },
  { type: "JavaScript", icon: "vscode-icons:file-type-light-js" },
  { type: "TypeScript", icon: "vscode-icons:file-type-typescript" },
  { type: "Vue", icon: "logos:vue" },
  { type: "AngularJs", icon: "devicon:angularjs" },
  { type: "Sass", icon: "skill-icons:sass" },
  { type: "Less", icon: "logos:less" },
  { type: "Stylus", icon: "material-icon-theme:stylus" },
  { type: "Element-UI", icon: "logos:element" },
  { type: "Pinia", icon: "logos:pinia" },
  { type: "Vuex", icon: "material-icon-theme:vuex-store" },
  { type: "Node.js", icon: "devicon:nodejs" },
  { type: "Express", icon: "skill-icons:expressjs-light" },
  { type: "Koa", icon: "simple-icons:koa" },
  { type: "Webpack", icon: "devicon:webpack" },
  { type: "Vite", icon: "vscode-icons:file-type-vite" },
  { type: "Babel", icon: "vscode-icons:file-type-light-babel2" },
  { type: "Gulp", icon: "vscode-icons:file-type-gulp" },
  { type: "Grunt", icon: "vscode-icons:file-type-grunt" },
  { type: "MongoDB", icon: "devicon:mongodb-wordmark" },
  { type: "Java", icon: "vscode-icons:file-type-java" },
  { type: "MySQL", icon: "devicon:mysql" },
  { type: "Ant-Design", icon: "devicon:antdesign" },
  { type: "Eslint", icon: "logos:eslint" },
  { type: "Prettier", icon: "logos:prettier" },
  { type: "jQuery", icon: "skill-icons:jquery" },
  { type: "Bootstrap", icon: "skill-icons:bootstrap" },
]);

const tools = ref([
  { type: "VSCode", icon: "vscode-icons:file-type-vscode" },
  { type: "npm", icon: "skill-icons:npm-light" },
  { type: "Yarn", icon: "logos:yarn" },
  { type: "IDEA", icon: "logos:intellij-idea" },
  { type: "Eclipse", icon: "devicon:eclipse" },
  { type: "Atom", icon: "skill-icons:atom" },
  { type: "Git", icon: "skill-icons:git" },
  { type: "SVN", icon: "file-icons:tortoisesvn" },
  { type: "Vim", icon: "logos:vim" },
  { type: "Markdown", icon: "skill-icons:markdown-light" },
  { type: "Powershell", icon: "skill-icons:powershell-light" },
]);
</script>

<style lang="scss" scoped>
.about-me-skill {
  position: relative;
  min-height: 316px;
  padding: 20px 0;
  z-index: 1;
  &:hover .marquee-row {
    opacity: 0;
  }
  &:hover .about-me-skill-detail {
    opacity: 1;
  }
}

.about-me-skill-detail {
  position: absolute;
  top: 100px;
  opacity: 0;
  z-index: 2;
  display: flex;
  padding: 0 20px;
  transition: opacity 0.5s;
  flex-wrap: wrap;
  overflow: auto;
  max-height: 300px;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px 6px 0;
    border-radius: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--vp-c-text-2);
    background-color: var(--home-action-bnt-bg);
    cursor: pointer;
  }
}

.marquee-row {
  transition: opacity 0.6s 0.1s;
  width: 105%;
  margin-left: -6px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotateZ(-6deg);
}

.marquee-content {
  display: inline-flex;
  animation: marquee-left 30s linear infinite;
  > span {
    display: flex;
    border-radius: 20%;
    align-content: center;
    align-items: center;
    background-color: var(--about-me-skill-item-bg);
    width: 80px;
    height: 80px;
    font-size: 50px;
    margin: 0 10px;
  }
}
.first-row {
  margin-top: 20px;
}
.second-row {
  margin-top: 20px;
}
.second-row .marquee-content {
  animation: marquee-right 50s linear infinite;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
