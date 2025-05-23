<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Point {
  x: number;
  y: number = 2;
  z: number;
  constructor(x: number) {
    this.x = x;
  }
}
let point = new Point(1);
console.log(point);
</script>
