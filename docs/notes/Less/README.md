---
title: Less
createTime: 2025/04/13 15:11:40
permalink: /Less/
---

## **一、LESS 简介**

**LESS**（Leaner Style Sheets）是一种动态样式表语言，属于 **CSS 预处理器**，通过扩展 CSS 语法为开发者提供更高效、灵活的样式编写方式。它需编译为标准 CSS 后才能在浏览器中运行，核心目标是解决原生 CSS 在大型项目中的维护难题，提升代码组织和复用能力。

## **二、核心特性**

### **1、变量（Variables）**

使用 `@变量名` 定义颜色、尺寸等重复值，支持全局修改。

```less
@primary-color: #3498db;
.button {
  background: @primary-color;
}
```

### **2、混入（Mixins）**

复用代码块，支持参数传递，类似函数调用。

```less
.shadow(@x: 0, @y: 0) {
  box-shadow: @x @y 5px #ccc;
}
.card {
  .shadow(2px, 2px);
}
```

### **3、嵌套（Nesting）**

层级化编写选择器，结构清晰贴合 HTML。

```less
nav {
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    &:hover {
      color: red;
    } // & 表示父选择器
  }
}
```

### **4、运算与函数**

直接对数值、颜色进行数学运算或内置函数处理。

```less
@base: 10px;
.box {
  padding: @base * 2;
  background: lighten(#333, 20%);
}
```

### **5、模块化导入**

通过 `@import` 拆分代码文件，便于管理。

```less
@import "variables.less";
@import "components/button.less";
```

## **三、核心优势**

- **提升维护性**：变量和混合减少重复代码，全局修改更便捷。
- **增强可读性**：嵌套规则直观反映 HTML 结构。
- **动态能力**：支持条件判断、循环（通过递归混合模拟）。
- **生态友好**：兼容 CSS 语法，学习成本低，易于集成构建工具（如 Webpack、Gulp）。

## **四、适用场景**

- **中大型项目**：需要统一管理主题色、间距等全局样式。
- **动态样式需求**：如主题切换、响应式布局。
- **团队协作**：模块化拆分代码，提升协作效率。

## **五、编译方式**

### **1、Node.js 工具链**

使用 `lessc` 命令行工具：

```bash
npm install -g less
lessc input.less output.css
```

### **2、构建工具集成**

通过 Webpack（`less-loader`）、Gulp（`gulp-less`）等自动化编译。

### **3、浏览器端编译（开发调试）**

引入 `less.js` 实时编译（生产环境不推荐）：

```html
<link rel="stylesheet/less" href="styles.less" />
<script src="https://cdn.jsdelivr.net/npm/less@4"></script>
```

## **六、对比其他预处理器**

| **特性** | **LESS**                 | **Sass (SCSS)**               |
| -------- | ------------------------ | ----------------------------- |
| 语法风格 | 接近原生 CSS，学习曲线低 | 功能更强大，支持复杂逻辑      |
| 变量符号 | `@variable`              | `$variable`                   |
| 编译依赖 | JavaScript（Node.js）    | 最初依赖 Ruby，现支持 Node.js |
| 社区生态 | 轻量简洁                 | 更丰富的插件和框架支持        |

## **七、总结**

LESS 通过引入编程逻辑（变量、混合、嵌套等），弥补了原生 CSS 在代码复用和维护性上的不足，尤其适合追求开发效率和代码可读性的项目。其语法简洁、与 CSS 高度兼容，是开发者从 CSS 过渡到预处理器的平滑选择。
