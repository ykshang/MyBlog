<template>
  <div class="container">
    <h1 class="title">Stylus 练习页面</h1>
    <p class="content">这是一个用于练习 Stylus 语法的段落。</p>
    <button class="btn">点击我</button>
    <br />
    <br />
    <span class="span1">测试 1</span>
    <br />
    <br />
    <span class="span2">测试 2</span>
    <br />
    <span class="span3">测试 3</span>
  </div>
</template>

<script>
export default {
  name: "StylusPracticePage",
};
</script>

<style lang="stylus" scoped>
// 定义变量
$primary-color = #42b983
$font-size-base = 16px
$margin-val = 30px
color-minxin() 
  color $primary-color
  text-decoration underline
  font-size 20px
size-fun()
  30px

.container
  padding 20px
  text-align center

  > .title
    color $primary-color
    font-size ($font-size-base * 2)

  > .content
    color #333
    font-size $font-size-base
    margin-top 10px

  > .btn
    background-color $primary-color
    color white
    border none
    padding 10px 20px
    border-radius 5px
    cursor pointer

    &:hover
      opacity 0.6


  $test-text = margin 16px;
  $primary-color = red
  > .span1 
    color-minxin()
  > .span2
    color $primary-color
    background: $val-color
    font-size size-fun()
  > .span3
    // margin: $margin-val
    -webkit-{text}-stroke 1px black
</style>
