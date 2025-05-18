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
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static id: "1";
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
interface UserInterface {
  (name: string, age: number): string;
  new (name: string, age: number): User;
}
const UserClass: UserInterface = function (name: string, age: number) {
  return name;
} as UserInterface;
UserClass.prototype = User.prototype;
console.log(UserClass("xiaoming", 12));
console.log(new UserClass("xiaoming", 12));

// 测试函数方法 和 属性并存

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
