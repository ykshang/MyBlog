<template>
  <div class="wrapper">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
    <div class="item4">Item 4</div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 60px);
  height: 250px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}

.item1 {
  grid-area: a;
}

.item2 {
  grid-area: b;
}

.item3 {
  grid-area: c;
}

.item4 {
  grid-area: d;
}
</style>
