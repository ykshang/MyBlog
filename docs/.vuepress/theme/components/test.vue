<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class TestA {
  static city: string = '1';
}

class TestB extends TestA {
  school: string;
}
let aaa = new TestB();
console.log(aaa);
console.log(TestB.city);
</script>
