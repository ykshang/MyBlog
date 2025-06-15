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
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "top-left top-right ."
    "bottom-left bottom-center bottom-right";
  gap: 5px;
  background: lightslategray;
}
div {
  background: lightblue;
  text-align: center;
}

.item1 {
  grid-area: top-left;
}
.item2 {
  grid-area: top-right;
}
.item3 {
  grid-area: bottom-left;
}
.item4 {
  grid-area: bottom-center;
}
.item5 {
  grid-area: bottom-right;
}
</style>
