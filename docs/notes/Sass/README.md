---
title: Sass
createTime: 2025/04/01 20:35:30
permalink: /Sass/
---


Sass (Syntactically Awesome Style Sheets) 是一种 CSS 预处理器，它扩展了 CSS 的功能，使样式表的编写更加高效和可维护。

## 一、主要特点

1. **CSS 变量**：可以定义可重用的值

   ```scss
   $primary-color: #333;
   body {
     color: $primary-color;
   }
   ```

2. **父子结构嵌套**：可以嵌套选择器，反映 HTML 结构

   ```scss
   nav {
     ul {
       margin: 0;
       li {
         display: inline-block;
       }
     }
   }
   ```

3. **混入(Mixins)**：可重用的样式模块

   ```scss
   @mixin border-radius($radius) {
     -webkit-border-radius: $radius;
     border-radius: $radius;
   }
   .box {
     @include border-radius(10px);
   }
   ```

4. **继承/扩展**：选择器可以继承其他选择器的样式

   ```scss
   .message {
     border: 1px solid #ccc;
   }
   .success {
     @extend .message;
     color: green;
   }
   ```

5. **运算**：可以在样式表中进行数学运算
   ```scss
   .container {
     width: 100% - 30px;
   }
   ```

## 二、两种语法格式

1. **SCSS (Sassy CSS)** - 使用 `.scss` 扩展名，完全兼容 CSS 语法

   ```scss
   $font-stack: Helvetica, sans-serif;
   body {
     font: 100% $font-stack;
   }
   ```

2. **缩进语法 (Sass)** - 使用 `.sass` 扩展名，省略大括号和分号
   ```sass
   $font-stack: Helvetica, sans-serif
   body
     font: 100% $font-stack
   ```

## 三、优势

- 更少的代码，更高的可维护性
- 更好的组织大型样式表
- 更快的开发速度
- 支持函数、循环等编程特性

Sass 需要通过编译器转换为标准的 CSS 才能在浏览器中使用，常用的编译工具有 Dart Sass、Node Sass 等。
