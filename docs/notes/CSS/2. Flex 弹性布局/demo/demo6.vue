<template>
  <el-table :data="tableData" class="dem-table" table-layout="fixed">
    <el-table-column prop="date" label="Date" width="180"> </el-table-column>
    <el-table-column prop="name" label="Name" width="180"> </el-table-column>
    <el-table-column prop="address" label="Address">
      <template #default="scope">
        <div class="parent">
          <div class="text">{{ scope.row.address }}</div>
          <div class="btn-g">
            <el-button
              class="btn-item"
              v-for="item in btnList"
              :key="item"
              type="primary"
              text
              @click="onclick(item)"
              >{{ item }}</el-button
            >
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>  
import { ElMessage } from 'element-plus'

const btnList = ["新增", "编辑", "删除"];
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
function onclick (value) {
  ElMessage({
    message: `这是一个 ${value} 按钮`,
    type: 'success',
  });
}
</script>
<style scoped>
.parent {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 300px; */
}
.text {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.btn-g {
  display: none;
  margin-left: 5px;
}
.btn-item {
  padding: 0 5px;
  height: inherit;
}
/* vuepres 内置样式影响了element的样式 */
.dem-table :deep(table) {
  margin: 0;
}
.dem-table :deep(table .el-table__row:hover .btn-g) {
  display: inline-block;
}

.dem-table :deep(th) {
  border: none;
}
.dem-table :deep(td) {
  border: none;
}
</style>
