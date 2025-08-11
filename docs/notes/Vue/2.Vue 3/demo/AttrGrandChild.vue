<template>
  <div class="GrandChild">
    <el-text tag="b">孙组件</el-text>
    <br />
    <el-text type="warning">props：</el-text>
    <br />
    <el-text type="warning">$attrs：</el-text>
    <el-tag class="m_5">{{ $attrs }}</el-tag>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: "GrandChild",
});
</script>
<style scoped>
.GrandChild {
  margin: 0 0 0 10px;
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
  flex: 1;
}
</style>
