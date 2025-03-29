<template>
  <span class="wrapper">
    <div class="item1">A</div>
    <div class="item2">B</div>
    <div class="item3">C</div>
    <div class="item4">D</div>
  </span>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  background: #f0f0f0;
  grid-auto-rows: 60px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
div {
  background: lightblue;
  font-size: 30px;
  line-height: 1.2;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
</style>
