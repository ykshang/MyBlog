<template>
  <div class="person">
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>性别：{{ person.gender }}</div>
    <br />
    <button class="demo-btn m_5" @click="changeName">修改名字</button>
    <button class="demo-btn m_5" @click="changeAge">修改年龄</button>
    <button class="demo-btn m_5" @click="changeGender">修改性别</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, toRef, defineOptions } from "vue";
defineOptions({
  name: "Person",
});

// 数据
let person = reactive({ name: "张三", age: 18, gender: "男" });

let person1 = toRefs(person);
console.log(person1);

// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
let { name, gender } = toRefs(person);
// 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
let age = toRef(person, "age");
console.log(age);

// 方法
function changeName() {
  name.value += "~";
}
function changeAge() {
  age.value += 1;
}
function changeGender() {
  gender.value = "女";
}
</script>
