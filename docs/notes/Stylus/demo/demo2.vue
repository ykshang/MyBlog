<template>
  <div class="container">
    <h1 class="title">Stylus 导入导出</h1>
  </div>
</template>

<script>
export default {
  name: "StylusPracticePage",
};
</script>

<style lang="stylus" scoped>
@require "./style/demo.styl"

.container
  color: $global-color
  margin: margin-fun()
</style>
