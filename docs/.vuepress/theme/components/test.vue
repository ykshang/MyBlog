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
function isString(value: unknown): asserts value is string {
  if (typeof value !== "number") throw new Error("Not a number");
}
type Person = {
  name: string;
  age: number;
  address?: string;
};

const user = {
  name: "Alice",
  age: 30,
} satisfies Person;
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
