<template>
  <div class="container">
    <div class="top">
      <div class="top-left">上左</div>
      <div class="top-right">上右</div>
    </div>
    <div class="bottom">
      <div class="bottom-item">下1</div>
      <div class="bottom-item">下2</div>
      <div class="bottom-item">下3</div>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  background: lightblue;
}
div[class="container"], div[class="top"], div[class="bottom"] {
  background: lightslategray;
}
.container {
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;
}

.top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 三列等宽 */
  gap: 5px;
}
</style>
