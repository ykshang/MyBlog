<template>
  <div class="wrapper">
    <div class="demo-panel lightBlue">1</div>
    <div class="demo-panel lightyellow">2</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 250px;
  .demo-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
  }
  .lightBlue {
    background-color: lightblue;
  }
  .lightyellow {
    background-color: lightyellow;
  }
}
</style>
