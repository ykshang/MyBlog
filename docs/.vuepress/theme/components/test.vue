<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Point {
  abc = 1;
  x: number;
  y: number;
  add: () => number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.add = function () {
      return this.x + this.y;
    }
  }
}


let p = new Point(1, 2);
console.log(p.add());
console.log(Point.prototype.abc);
</script> 
