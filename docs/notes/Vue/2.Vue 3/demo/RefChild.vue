<template>
  <el-card class="RefChild" header="子组件">
    <div>子：{{ childText }}</div>
    <div>父：{{ parentVal }}</div>
    <el-button class="btn" type="primary" @click="getParent">获取父数据</el-button>
  </el-card>
</template>
<script lang="ts" setup>
import { ElNotification } from "element-plus";
import { ref, defineExpose, getCurrentInstance } from "vue";

defineOptions({ name: "RefChild" });
const instance = getCurrentInstance();
const childText = ref("孩子");
const parentVal = ref("");
function getParent() {
  parentVal.value = instance?.parent?.exposed?.parentText.value;
  instance?.parent?.exposed?.sayHello("子组件");
}
function sayHello(value) {
  ElNotification({
    title: "From 子组件",
    message: "调用方：" + value,
    type: "success",
  });
}
// 主动对外暴露
defineExpose({ childText, sayHello });
</script>
<style lang="scss" scoped>
.RefChild {
  flex: 1;
  margin: 5px;
  .btn {
    margin-top: 10px;
  }
}
</style>
