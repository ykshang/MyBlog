<template>
  <div class="grand-child">
    <el-card header="孙组件">
      <el-text>资产：{{ money }}</el-text>
      <br />
      <el-text>汽车：{{ car }}</el-text>
      <br />
      <br />
      <el-button type="primary" @click="updateMoney(5)">资产 +5</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "GrandChild",
});
import { inject } from "vue";
// 注入数据
type injectType = {
  money: number;
  updateMoney: (x: number) => void;
};
const { money, updateMoney } = inject<injectType>("moneyContext", {
  money: 0,
  updateMoney: (x: number): void => {},
});
const car = inject("car");
</script>
<style scoped lang="scss">
.grand-child {
  flex: 1;
  min-width: 200px;
  margin: 5px;
}
</style>
