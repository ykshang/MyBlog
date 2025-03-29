<template>
  <div class="container">
    <div class="item top-left">上左</div>
    <div class="item top-right">上右</div>
    <div class="item bottom-1">下1</div>
    <div class="item bottom-2">下2</div>
    <div class="item bottom-3">下3</div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 两列等宽 */
  grid-auto-rows: 100px; /* 行高固定（可选） */
  gap: 10px;
}

/* 上方两栏 */
.top-left,
.top-right {
  grid-column: span 1; /* 各占一列 */
}

/* 下方三栏 */
.bottom-1 {
  grid-column: 1; /* 第一列 */
  grid-row: 2 / 4; /* 跨两行 */
}
.bottom-2 {
  grid-column: 2; /* 第二列 */
  grid-row: 2; /* 第二行 */
}
.bottom-3 {
  grid-column: 2; /* 第二列 */
  grid-row: 3; /* 第三行 */
}
</style>
