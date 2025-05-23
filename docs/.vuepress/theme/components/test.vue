<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Parent {
  static greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  static greet() {
    return super.greet() + " and Child"; // ✅ 调用父类静态方法
  }
}
console.log(Child.greet()); // "Hello from Parent and Child"
</script>
