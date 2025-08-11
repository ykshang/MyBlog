<template>
  <div class="child">
    <el-text tag="b">子组件</el-text>
    <div class="body">
      <div class="list">
        <el-text type="warning">props：</el-text>
        <el-tag class="m_5 min_0">{{ a }}</el-tag>
        <el-tag class="m_5 min_0">{{ b }}</el-tag>
        <br />
        <el-text type="warning">$attrs：</el-text>
        <el-tag class="m_5">{{ $attrs }}</el-tag>
      </div>
      <GrandChild :e="e" v-bind="$attrs"></GrandChild>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, useAttrs } from "vue";
import GrandChild from "./AttrGrandChild.vue";
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Child",
});
defineProps(["a", "b"]);
const e = ref("e");
</script>
<style lang="scss" scoped>
.child {
  margin: 0 0 0 20px;
  flex: 1;
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
  .body {
    display: flex;
  }
}
</style>
