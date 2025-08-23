<template>
  <div class="person">
    <div class="left">
      <div>
        <span>计数器：</span>
        <span>{{ count }}</span>
      </div>
      <div>
        <span>深层对象obj：</span>
        <span>{{ obj.a.b.c }}</span>
      </div>
      <div>
        <span>用户：</span>
        <span>{{ user.name }}</span>
      </div>
      <div>
        <span>年龄：</span>
        <span>{{ user.age }}</span>
      </div>
    </div>
    <div class="right">
      <button class="demo-btn m_5" @click="changeCount">计数器 + 1</button>
      <button class="demo-btn m_5" @click="changeObj">obj.a.b.c</button>
      <button class="demo-btn m_5" @click="changeName">修改名字</button>
      <button class="demo-btn m_5" @click="changeAge">年龄 + 1</button>
      <button class="demo-btn m_5" @click="changeUser">替换用户</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineOptions } from "vue";
defineOptions({
  name: "Person123",
});
// 基本类型
const count = ref(0);
// 引用类型
const user = ref({ name: "John", age: 30 });
const obj = ref({ a: { b: { c: 1 } } });

console.log(count.value);
console.log(user.value);
// 替换值
changeObj;
function changeCount() {
  count.value += 1;
}
function changeObj() {
  obj.value.a.b.c += 1;
}
function changeName() {
  user.value.name += "6";
}

function changeAge() {
  user.value.age += 1;
}

function changeUser() {
  user.value = { name: "zhangsan", age: 40 };
}
</script>
<style lang="scss" scoped>
.person {
  display: flex;
  flex-direction: row;
}
.left {
  flex: 3;
  margin-right: 20px;
  font-size: 16px;
  div {
    display: flex;
    margin-bottom: 10px;
    span {
      flex: 1;
      display: flex;
      align-items: center;
      word-break: break-all;
    }
  }
}
.right {
  flex: 2;
  button {
    margin: 5px 10px;
  }
}
</style>
