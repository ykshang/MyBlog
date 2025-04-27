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

.container
  .test1
    font-size: 30px
    color: $global-color
    background: $local-color
    margin: margin-fun()

  .test2
    mixin-1()
  .info
    color #333
    
  @require "./style/demo.styl"
  
  .test3
    // @extend .warning, .error

    @extends .error
    @extends .warning
    @extends .info
    // color blue
</style>
