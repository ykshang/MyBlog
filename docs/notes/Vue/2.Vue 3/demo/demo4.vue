<template>
  <div class="person">
    <div>
      <span>姓：</span>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <span>名：</span>
      <input type="text" v-model="lastName" />
    </div>
    <div>
      <span>全名：{{ fullName }}</span>
    </div>
    <button class="demo-btn m_5" @click="changeFullName">
      全名改为：li-si
    </button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, computed } from "vue";

let firstName = ref("zhang");
let lastName = ref("san");

// 计算属性——只读取，不修改
/* let fullName = computed(()=>{
    return firstName.value + '-' + lastName.value
  }) */

// 复杂用法
let fullName = computed({
  // 读取
  get() {
    return firstName.value + "-" + lastName.value;
  },
  // 修改
  set(val) {
    console.log("有人修改了fullName", val);
    firstName.value = val.split("-")[0];
    lastName.value = val.split("-")[1];
  },
});

function changeFullName() {
  fullName.value = "li-si";
}
</script>
<style scoped>
div {
  margin-bottom: 5px;
}
</style>
