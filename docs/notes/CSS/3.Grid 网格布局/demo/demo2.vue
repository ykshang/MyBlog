<template>
  <div class="grid-container">
    <div class="item1">Header</div>
    <div class="item2">Menu</div>
    <div class="item3">Main</div>
    <div class="item4">Right</div>
    <div class="item5">Footer</div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid; /* 需要添加 display: grid 以启用网格布局 */
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";
  gap: 5px;
  background: #f0f0f0;
  height: 200px;
}
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}

div {
  background: lightblue;
  text-align: center;
}
</style>
