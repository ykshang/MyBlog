<template>
  <div class="container">
    <h2>这是一个多列布局的标题</h2>
    <p>
      这里是第一段内容。多列布局可以将内容分割为多列显示，类似于报纸或杂志的排版效果。
    </p>
    <p>
      这里是第二段内容。通过简单的 CSS
      属性即可实现复杂的多列布局，而无需使用额外的 HTML 结构或 JavaScript。
    </p>
    <p>这里是第三段内容。多列布局适用于长文本内容的排版，提升阅读体验。</p>
  </div>
</template>

<style scoped>
.container {
  column-count: 3; /* 分为 3 列 */
  column-gap: 40px; /* 列间距为 40px */
  column-rule: 2px solid #ccc; /* 列分隔线 */
}

h2 {
  column-span: all; /* 标题跨所有列 */
  text-align: center;
}
</style>
