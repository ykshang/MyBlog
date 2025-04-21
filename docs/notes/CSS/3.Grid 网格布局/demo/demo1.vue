<template>
  <div class="grid-container">
    <div class="item1">头部</div>
    <div class="item2">菜单</div>
    <div class="item3">主要内容</div>
    <div class="item4">右侧</div>
    <div class="item5">底部</div>
  </div>
</template>
<style scoped>
/* 定义网格容器 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 六列，每列宽度相等 */
  grid-template-rows: repeat(3, 100px); /* 三行，每行高度为 100px */
  gap: 10px; /* 网格之间的间隙 */
  background: #f0f0f0;
}

/* 定义网格项 */
div {
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  color: #333;
}
.item1 {
  grid-column: 1 / 7; /* 占据第一行的所有列 */
}
.item2 {
  grid-area : 2/ 1 / 4 / 2; /* 占据第一行的前两列 */
}
.item3 {
  grid-column: 2 / 6; 
}
.item4 {
  grid-column: 6 / 7; 
}
.item5 {
  grid-column: 2 / 7; 
}
</style>
