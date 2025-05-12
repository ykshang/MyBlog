<template>
  <div class="container">
    <div class="test1">Stylus 导入导出</div>
    <br/>
    <div class="test2">测试函数</div>
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
// 定义函数
add(a, b)
  a + b

// 调用方式（省略括号）
result = add 10 20  // 等同于 add(10, 20)

.test2
  color red
  z-index result
</style>
