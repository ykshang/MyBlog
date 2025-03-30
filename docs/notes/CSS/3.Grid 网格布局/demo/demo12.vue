<template>
  <div class="grid">
    <div class="item" style="block-size: 2em"></div>
    <div class="item" style="block-size: 3em"></div>
    <div class="item" style="block-size: 1.6em"></div>
    <div class="item" style="block-size: 4em"></div>
    <div class="item" style="block-size: 2.2em"></div>
    <div class="item" style="block-size: 3em"></div>
    <div class="item" style="block-size: 4.5em"></div>
    <div class="item" style="block-size: 1em"></div>
    <div class="item" style="block-size: 3.5em"></div>
    <div class="item" style="block-size: 2.8em"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
div {
  display: block;
  unicode-bidi: isolate;
}
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
</style>
