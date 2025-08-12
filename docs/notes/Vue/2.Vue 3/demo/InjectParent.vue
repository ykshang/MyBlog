<template>
  <div class="father">
    <el-card header="父组件" class="pCard">
      <el-text>资产：{{ money }}</el-text>
      <br />
      <el-text>汽车：{{ car }}</el-text>
      <br />
      <br />
      <el-button type="primary" @click="money += 1">资产 +1</el-button>
      <el-button type="primary" @click="car.price += 10">汽车价格 +10</el-button>
    </el-card>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
defineOptions({ name: "ParentView" });
import Child from "./InjectChild.vue";
import { ref, reactive, provide } from "vue";
// 数据
const money = ref(100);
const car = reactive({
  brand: "奔驰",
  price: 100,
});
// 用于更新money的方法
function updateMoney(value: number) {
  money.value += value;
}
// 提供数据
provide("moneyContext", { money, updateMoney });
provide("car", car);
</script>
<style lang="scss" scoped>
.father {
  display: flex;
  flex-wrap: wrap;
}
.pCard {
  flex: 1;
  min-width: 200px;
  margin: 5px;
}
</style>
