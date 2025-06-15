<template>
  <div class="grid">
    <div class="item" style="block-size: 2em;"></div>
    <div class="item" style="block-size: 3em; grid-column-end: span 2;"></div>
    <div class="item" style="block-size: 1.6em;"></div>
    <div class="item" style="block-size: 4em;"></div>
    <div class="item" style="block-size: 2.2em; grid-column-end: span 2"></div>
    <div class="item" style="block-size: 3em;"></div>
    <div class="item" style="block-size: 4.5em;"></div>
    <div class="item" style="block-size: 1em;"></div>
    <div class="item" style="block-size: 3.5em;"></div>
    <div class="item" style="block-size: 2.8em;"></div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.grid > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
</style>
