<template>
  <el-row>
    <h2>在第1/2个元素上加 margin: auto</h2>
    <el-col :span="24">
      <div class="container">
        <div class="item" style="margin: auto">元素 1</div>
        <div class="item">元素 2</div>
        <div class="item" style="margin: auto">元素 3</div>
        <div class="item">元素 4</div>
        <div class="item">元素 5</div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <h2>在第1/2/3个元素上加 margin: auto</h2>
    <el-col :span="24">
      <div class="container">
        <div class="item" style="margin: auto">元素 1</div>
        <div class="item" style="margin: auto">元素 2</div>
        <div class="item" style="margin: auto">元素 3</div>
        <div class="item">元素 4</div>
        <div class="item">元素 5</div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <h2>在第1/3个元素上加 margin-left: auto</h2>
    <el-col :span="24">
      <div class="container">
        <div class="item" style="margin-left: auto">元素 1</div>
        <div class="item">元素 2</div>
        <div class="item" style="margin-left: auto">元素 3</div>
        <div class="item">元素 4</div>
        <div class="item">元素 5</div>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.item {
  border: 1px dashed;
  background: #c5c5c5;
  height: 50px;
  padding: 10px 20px;
}
.container {
  display: flex;
  background: #f0f0f0;
}
</style>
