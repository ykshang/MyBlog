<template>
  <div class="test-container">
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 响应式数据
const count = ref(0);
const title = ref("Vue3 + TS Component");

// 方法
const increment = () => {
  count.value++;
};

/// ------------------
console.clear();
interface Parent {
  greet(name: string): string;
}

interface Child extends Parent {
  // 保持相同签名
  greet(name: string): string;

  // 添加重载
  greet(name: string, age: number): string;

  // 或者完全覆盖（不推荐，可能会导致类型不兼容）
  greet(name: number): string;
}
class Nino implements Child {
  greet(name: any): string {
    return "Hello, " + name;
  }
}
const child = new Nino();
console.log(child.greet("John")); // 输出: Hello, John
console.log(child.greet(30)); // 输出: Hello, 30
/// --------------------------
</script> 

<style scoped>
.test-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
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
