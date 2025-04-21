<script setup>
import { ref, computed } from "vue";

let value1 = ref("");
let value2 = ref("");

let containerClass = computed(() => {
  return `container ${value1.value} ${value2.value}`;
});
const options1 = [
  { label: "ltr", value: "ltr" },
  { label: "rtl", value: "rtl" },
];
const options2 = [
  { label: "row", value: "row" },
  { label: "row-reverse", value: "row-reverse" },
  { label: "column", value: "column" },
  { label: "column-reverse", value: "column-reverse" },
];
</script>
<template>
  <div class="my-custom-content">
    <el-row>
      <el-col :span="5">flex-direction：</el-col>
      <el-col :span="6">
        <el-select key="2" v-model="value2">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="5">direction：</el-col>
      <el-col :span="6">
        <el-select key="1" v-model="value1">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
  </div>
  <div :class="containerClass">
    <div class="item">元素 1</div>
    <div class="item">元素 2</div>
    <div class="item">元素 3</div>
    <div class="item">元素 4</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-top: 30px;
  height: 250px;
  background-color: #f0f0f0;
}
.item {
  border: 1px solid #aaa;
  padding: 10px;
}
.lrt {
  direction: ltr;
}
.rtl {
  direction: rtl;
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.column-reverse {
  flex-direction: column-reverse;
}
</style>
