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
console.log(count.value);
// 测试接口的属性和方法
interface Person {
  name: string;
  age: number;
  address?: string;
  speak(): void;
}
const user: Person = {
  name: "Alice",
  age: 30, // 正确
  address: "123 Main St", // 可选属性
  speak() {
    console.log("Hello, I am " + this.name);
  },
};
user.speak();
console.log(user);
// 测试接口方法
interface Person2 {
  hahah: string;
  (val: string): void;
}
const user2: Person2 = (val: string) => {
  console.log(val);
};
user2.hahah = "hahah";
console.log(user2.name);

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
  (name: string, age: number): void;
  new (name: string, age: number): UserInterface;
}
const UserClass: UserInterface = function (name: string, age: number) {
  console.log(name, age);
} as UserInterface;
// UserClass.prototype = User.prototype;
console.log(UserClass("xiaoming", 12));
// 测试函数方法 和 属性并存
interface Window {
  title: string;
}

interface Window {
  width: number;
}
const window: Window = {
  title: "Hello",
  width: 100,
};
interface B {
  [prop: string]: any;
  [prop: number]: string; // 报错
}
interface C {
  [prop: string]: number;
  [prop: number]: number; // 正确
  // @annotate: Custom error message
}

interface XIAOHONG {
  speak(): number;
  speak(x: boolean): boolean;
  speak(x: string, y: string): string;
}

function MyFunc(): number;
function MyFunc(x: boolean): boolean;
function MyFunc(x: string, y: string): string;
function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
  if (x === undefined && y === undefined) return 1;
  if (typeof x === "boolean" && y === undefined) return true;
  if (typeof x === "string" && typeof y === "string") return "hello";
  throw new Error("wrong parameters");
}

const xiaohong: XIAOHONG = {
  speak: MyFunc,
};
xiaohong.speak();
xiaohong.speak(true);
xiaohong.speak("1", "2");
const xiaobai: XIAOHONG = {
  speak: function (x?: boolean | string, y?: string): any {
    if (x === undefined && y === undefined) return 1;
    if (typeof x === "boolean" && y === undefined) return true;
    if (typeof x === "string" && typeof y === "string") return "hello";
    throw new Error("wrong parameters");
  },
};
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
