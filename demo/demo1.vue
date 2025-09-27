<template>
  <el-button @click="handleClick">点击查看结果</el-button>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus';

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
let hw = helloWorldGenerator();
function handleClick() {
  let res = hw.next();
  let message = JSON.stringify(res);
  console.log(message);
  if (res.done && !res.value) {
    ElMessage.info('Generator 遍历完成')
  } else {
    ElMessage.success(message)
  }
}
</script>
