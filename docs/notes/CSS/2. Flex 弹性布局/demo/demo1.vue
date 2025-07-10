<template>
  <div>
    <el-button @click="changeDiv">{{ "当前为: " + isDiv }}</el-button>
    <el-button @click="changeFlexFlag">{{ "切换弹性元素: " + flg }}</el-button>
    <br />
    <br />
    <div v-if="isDiv === 'div'" :class="'container' + flexFlag">
      <div class="item">弹性元素1</div>
      <div class="item">弹性元素2</div>
      <div class="item">弹性元素3</div>
    </div>
    <div v-if="isDiv === 'span'" :class="'container' + flexFlag">
      <span class="item">弹性元素1</span>
      <span class="item">弹性元素2</span>
      <span class="item">弹性元素3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data() {
    return {
      flexFlag: "",
      flg: true,
      isDiv: "div",
      isCollapse: true,
    };
  },
  mounted() {
    this.flg = false;
  },
  methods: {
    changeDiv() {
      if (this.isDiv === "div") {
        this.isDiv = "span";
      } else {
        this.isDiv = "div";
      }
    },
    changeFlexFlag() {
      if (!this.flexFlag) {
        this.flexFlag = " flex";
        this.flg = true;
      } else {
        this.flexFlag = "";
        this.flg = false;
      }
      console.log(this.flg);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 150px;
  background: #f9f9f9;
}
.flex {
  display: flex;
}
.item {
  border: dashed 1px #aaa;
  padding: 10px;
  flex: 1;
}
</style>
