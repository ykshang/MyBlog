<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class C {
  _prop = "";
  get prop() {
    console.log("读取 prop 属性：", this._prop);
    return this._prop;
  }
  set prop(value) {
    console.log("设置 prop 属性：", value);
    this._prop = value;
  }
}
let c = new C();
c.prop = "123"; // 调用 setter
console.log('打印 prop：',c.prop); // 调用 getter
</script> 
