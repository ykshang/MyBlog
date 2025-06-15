<template>
  <div class="main-content">
    <Card class="card">
      这里是卡片内容。
    </Card>
    <Card class="card">
      这里是卡片内容。
    </Card>
    <Card class="card">
      这里是卡片内容。
    </Card>
    <Card class="card">
      这里是卡片内容。
    </Card>
    <Card class="card">
      这里是卡片内容。
    </Card>
  </div>
</template>

<script>
export default {
  name: "Gonglue",
  data() {
    return {
      // 这里可以初始化数据
    };
  },
  methods: {
    // 这里可以定义方法
  },
  mounted() {
    // 组件挂载后执行的逻辑
  },
};
</script>
<style lang="scss" scoped>
.main-content{
  display: flex;
  flex-wrap: wrap;
  > .card {
    margin: 20px auto;
    max-width: 200px;
    min-width: 150px;
  }
} 
</style>>
