<template>
  <div class="test1">{{ 1 }}</div>
  <div class="test2">{{ 2 }}</div>
  <div class="test3">{{ 3 }}</div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
@function px2vw($px, $baseWidth) {
  @return calc($px / $baseWidth) * 100vw;
}
@function px2vh($px, $baseHeight) {
  @return calc($px / $baseHeight) * 100vh;
}
@media screen and (min-width: 1024px) {
  $width: 1024px;
  $height: 768px;
  .test1 {
    border: 1px solid;
    width: px2vw(200px, $width);
    height: px2vh(100px, $height);
  }
}
@media screen and (min-width: 1200px) {
  $width: 1200px;
  $height: 900px;
  .test1 {
    border: 1px solid;
    width: px2vw(200px, $width);
    height: px2vh(100px, $height);
  }
}
</style>
