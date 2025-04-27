<template>
  <div class="container">
    <div class="test1">Stylus 导入导出</div>
    <br/>
    <div class="test2">测试混入</div>
    <br/>
    <div class="test3">测试继承</div>
  </div>
</template>

<script>
export default {
  name: "StylusPracticePage2",
};
</script>

<style lang="stylus" scoped>
@require "./style/demo.styl"

.container
  .test1
    font-size: 30px
    color: $global-color
    background: $local-color
    margin: margin-fun()

  .test2
    mixin-1()
  .test3
    @extends .extend-1
    color red
</style>
