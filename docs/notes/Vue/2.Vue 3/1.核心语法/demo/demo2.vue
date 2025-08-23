<template>
  <div class="person">
    <h3>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h3>
    <h4>游戏列表：</h4>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <h3>测试：{{ obj.a.b.c.d }}</h3>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一游戏</button>
    <button @click="test">测试</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineOptions } from "vue";
defineOptions({
  name: "Person",
});
// 数据
let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
  { id: "ahsgdyfa01", name: "英雄联盟" },
  { id: "ahsgdyfa02", name: "王者荣耀" },
  { id: "ahsgdyfa03", name: "原神" },
]);
let obj = reactive({
  a: {
    b: {
      c: {
        d: 666,
      },
    },
  },
});

function changeCarPrice() {
  car.price += 10;
}
function changeFirstGame() {
  games[0].name = "流星蝴蝶剑";
}
function test() {
  obj.a.b.c.d = 999;
}
</script>
<style scoped>
button {
  margin: 10px 10px 10px 0;
}
</style>
