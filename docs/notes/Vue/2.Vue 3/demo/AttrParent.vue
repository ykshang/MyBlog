<template>
  <div class="parent">
    <div class="body">
      <el-text tag="b">父组件</el-text>
      <el-tag class="m_5">{{ a }}</el-tag>
      <el-tag class="m_5">{{ b }}</el-tag>
      <el-tag class="m_5">{{ c }}</el-tag>
      <el-tag class="m_5">{{ d }}</el-tag>
    </div>
    <Child :a="a" :b="b" :c="c" :d="d"></Child>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Child from "./AttrChild.vue";
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parent",
});

const a = ref("a");
const b = ref("b");
const c = ref("c");
const d = ref("d");
</script>
<style lang="scss" scoped>
.parent {
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
  .body {
    display: flex;
    .list {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
