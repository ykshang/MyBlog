<template>
  <div class="RefParent">
    <el-card class="left flex_1" header="父组件">
      <div>父: {{ parentText }}</div>
      <div>子: {{ childVal }}</div>
      <el-button type="primary" class="btn" @click="viewChildRef"
        >获取子数据</el-button
      >
    </el-card>
    <RefChild ref="childRef"></RefChild>
  </div>
</template>
<script lang="ts" setup>
// 引入依赖
import { defineOptions, ref, useTemplateRef } from "vue";
import RefChild from "./RefChild.vue";
import { ElNotification } from "element-plus";
// 组件名称
defineOptions({ name: "RefParent" });
// 页面字段
let parentText = ref("父亲");
let childVal = ref("");

// 另外一种获取 $refs 的方式
// let childRef = useTemplateRef('childRef')
let childRef = ref();
function viewChildRef() {
  childVal.value = childRef.value.childText;
  childRef.value.sayHello("父组件");
}

// 对外暴露的 sayHello 方法
function sayHello(value) {
  ElNotification({
    title: "From 父组件",
    message: "调用方：" + value,
    type: "success",
  });
}
// 主动对外暴露
defineExpose({ parentText, sayHello });
</script>
<style lang="scss" scoped>
.RefParent {
  display: flex;
  flex-direction: row;
  .left {
    margin: 5px;
  }
}
.btn {
  margin-top: 10px;
}
@media (max-width: 400px) {
  .RefParent {
    flex-direction: column;
  }
}
</style>
