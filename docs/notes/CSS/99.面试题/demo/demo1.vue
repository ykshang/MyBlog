<template>
  <div class="container">
    <div class="top-left">上左</div>
    <div class="top-right">上右</div>
    <div class="bottom-1">下1</div>
    <div class="bottom-2">下2</div>
    <div class="bottom-3">下3</div>
  </div>
</template>

<style scoped>
.container {
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 两列等宽 */
  grid-template-rows: auto auto; /* 两行自适应 */
  grid-template-areas:
    "top-left top-right"
    "bottom-1 bottom-2"
    "bottom-1 bottom-3"; /* 下1跨两行 */
  gap: 10px; /* 网格间隙 */
}

.top-left {
  height: 40px;
  grid-area: top-left;
  background: slategray;
}
.top-right {
  height: 40px;
  background: slategray;
  grid-area: top-right;
}
.bottom-1 {
  background: slategray;
  grid-area: bottom-1;
}
.bottom-2 {
  background: slategray;
  height: 40px;
  grid-area: bottom-2;
}
.bottom-3 {
  background: slategray;
  height: 40px;
  grid-area: bottom-3;
}
</style>
