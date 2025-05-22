<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Point {
  static a: number = 1;
  constructor(public a: number) {
    this.a = a;
  }
}
Point.a = 2;
let aaa = new Point(3);
console.log(Point.a, aaa.a);
</script> 
