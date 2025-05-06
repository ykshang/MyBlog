<template>
  <div class="test-container">
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 响应式数据
const count = ref(0)
const title = ref('Vue3 + TS Component')

// 方法
const increment = () => {
  count.value++
}

interface MyInterface {
  toString(): string; // 继承的属性
  prop: number; // 自身的属性
  a: number;
}
let obj: MyInterface = {
  toString() {
    return 'Hello';
  },
  prop: 123,
  a: 1
}
console.log(obj.toString()); // 输出: Hello
console.log(obj.prop); // 输出: Hello
</script>

<style scoped>
.test-container {
  text-align: center;
  padding: 20px;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
