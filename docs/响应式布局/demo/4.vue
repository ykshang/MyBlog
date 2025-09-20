<template>
  <table border="1">
    <tr>
      <td>第一行第一列</td>
      <td>第一行第二列</td>
      <td>第一行第三列</td>
      <td>第一行第四列</td>
    </tr>
    <tr>
      <td>第二行第一列</td>
      <td>第二行第二列</td>
      <td>第二行第三列</td>
      <td>第二行第四列</td>
    </tr>
    <tr>
      <td>第三行第一列</td>
      <td>第三行第二列</td>
      <td>第三行第三列</td>
      <td>第三行第四列</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TableLayout'
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #fff;
}

td {
  padding: 8px;
  text-align: center;
  background: var(--el-color-warning);
}
</style>
