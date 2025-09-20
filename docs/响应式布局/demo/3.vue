<template>
  <div class="wrapper">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
    <div class="item">Item 7</div>
    <div class="item">Item 8</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 30px);
  gap: 20px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-text-1);
    background-color: var(--el-color-warning);
  }
}
</style>
