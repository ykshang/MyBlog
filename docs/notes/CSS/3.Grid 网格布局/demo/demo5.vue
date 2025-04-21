<template>
  <div class="wrapper">
    <div class="item1">Item 1</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 50px;
  background: #f0f0f0;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  background: lightblue;
  grid-area: a;
  align-self: center;
  justify-self: center;
  font-size: 24px;
  line-height: 1.5;
  padding: 10px;
}
</style>
