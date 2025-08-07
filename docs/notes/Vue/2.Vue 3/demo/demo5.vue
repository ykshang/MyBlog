<template>
  <div class="person">
    <h3>需求：水温达到50℃，或水位达到20cm，则报警</h3>
    <div id="demo">水温：{{ temp }} 摄氏度</div>
    <div>水位：{{ height }} cm</div>
    <br />
    <el-button @click="changeTemp" plain type="primary">水温 +10</el-button>
    <el-button @click="changeHeight" plain type="primary">水位 +10</el-button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "Person",
});
import { ElMessage } from "element-plus";
import { ref, watch, watchEffect, defineOptions } from "vue";
// 数据
let temp = ref(0);
let height = ref(0);

// 方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}

// 用watch实现，需要明确的指出要监视：temp、height
const stopWtach = watch([temp, height], (value) => {
  const [newTemp, newHeight] = value;
  if (newTemp >= 50 || newHeight >= 20) {
    ElMessage.warning("到达警戒状态：Watch");
  }
  if (newTemp >= 70 || newHeight >= 80) {
    stopWtach();
    ElMessage.error("取消检查：stopWtach");
  }
});
// 用watchEffect实现，vue自己去识别并监听 temp、height
const stopWtachEffect = watchEffect(() => {
  if (temp.value >= 50 || height.value >= 20) {
    ElMessage.warning("到达警戒状态：watchEffect");
  }
  if (temp.value >= 100 || height.value >= 50) {
    stopWtachEffect();
    ElMessage.error("取消检查：stopWtachEffect");
  }
});
</script>
