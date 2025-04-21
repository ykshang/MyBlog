<template>
  <el-row>
    <el-col :span="6">操作第2个元素：</el-col>
    <el-col :span="18">
      <el-radio-group v-model="selectedOption">
        <el-radio label="1">添加 min-width: 0</el-radio>
        <el-radio label="0">移除 min-width: 0</el-radio>
      </el-radio-group>
    </el-col>
  </el-row>

  <div class="flex-container">
    <div class="flex-item">The quick brown fox jumps over the lazy dog</div>
    <div :class="minWidthClass">
      Life is like a box of chocolateschocolates, you never know what you're
      gonna get
    </div>
    <div class="flex-item">To be or not to be, that is the question</div>
    <div class="flex-item">All that glitters is not gold</div>
    <div class="flex-item">
      A journey of a thousand miles begins with a single step
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

let selectedOption = ref("0");
let minWidthClass = computed(() => {
  return selectedOption.value === "1" ? "flex-item minWidthClass" : "flex-item";
});
</script>

<style scoped>
.flex-container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 20px;
}

.flex-item {
  background-color: #ddd;
  color: #5086a1;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
.minWidthClass {
  min-width: 0;
}
</style>
