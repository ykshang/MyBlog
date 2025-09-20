<template>
  <div class="container" style="margin-bottom: 20px;">
    <span>给下边两个元素添加 1px 的 border：</span>
    <el-radio-group v-model="selectedOption">
      <el-radio label="1">添加</el-radio>
      <el-radio label="0">移除</el-radio>
    </el-radio-group>
  </div>
  <div class="container">
    <div :class="coulumnClass" style="background: lightblue">
      width: 50%
    </div>
    <div :class="coulumnClass" style="background: lightgreen">
      width: 50%
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const selectedOption = ref('0')
const coulumnClass = computed(() => {
  return selectedOption.value === '1' ? 'border column' : 'column'
})
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;

  .column {
    width: 50%;
    float: left;
    height: 40px;
  }
  .border {
    border: 1px solid red;
  }
}
</style>
