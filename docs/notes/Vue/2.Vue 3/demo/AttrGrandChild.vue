<template>
  <el-card class="GrandChild">
    <el-text tag="b">孙组件</el-text>
    <br />
    <el-text type="warning">props：</el-text>
    <br />
    <el-text type="warning">$attrs：</el-text>
    <el-tag class="m_5">{{ $attrs }}</el-tag>
  </el-card>
</template>
<script setup lang="ts">
defineOptions({
  name: "GrandChild",
});
</script>
<style scoped>
.GrandChild {
  margin-top: 10px;
  padding: 10px;
  flex: 1;
}
</style>
