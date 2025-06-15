<template>
  <div class="grid-container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
  </div>
</template>

<style scoped>
div {
  background: lightblue;
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 最大列数 */
  grid-template-rows: 40px 40px; /* 两行 */
  gap: 5px;
  background: lightslategray;
}

/* 让第一行的两个元素各占1.5fr(相当于两列) */
.item1,
.item2 {
  grid-column: 3;
}

/* 或者更精确的控制 */
.item1 {
  grid-column: 1 / 4;
}
.item2 {
  grid-column: 4 / 7;
}
.item3 {
  grid-column: 1 / 3;
}
.item4 {
  grid-column: 3 / 5;
}
.item5 {
  grid-column: 5 / 7;
}
</style>
