---
title: Stylus
createTime: 2025/04/16 18:31:46
permalink: /Stylus/
---

Stylus 是一款功能强大的 CSS 预处理器，它提供了比传统 CSS 更简洁、更灵活的语法，同时兼容标准 CSS 语法。

## 一、核心特性

### 1. 完全兼容 CSS 语法

由于 Stylus 是 CSS 的超集，所以它可以直接使用标准的 CSS 语法。

### 2. 极简语法（可选括号/分号/冒号）

```stylus
// 传统CSS语法
body {
  font: 12px Helvetica, Arial, sans-serif;
}

// Stylus极简语法
body
  font 12px Helvetica, Arial, sans-serif
```

### 3. 变量支持

```stylus
primary-color = #3bbfce
margin = 16px

.content
  color primary-color
  margin margin
```

### 4. 嵌套规则

```stylus
nav
  ul
    margin 0
    padding 0
    li
      display inline-block
      a
        display block
        &:hover
          color red
```

### 5. 混合(Mixins)

```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

button
  border-radius(5px)
```

### 6. 函数功能

```stylus
add(a, b)
  a + b

body
  padding add(10px, 5px)
```

## 二、高级特性

### 1. 条件语句

```stylus
box(x, y, margin = false)
  padding y x
  if margin
    margin y x

.box
  box(5px, 10px, true)
```

### 2. 循环迭代

```stylus
for num in 1 2 3
  .mt-{num}
    margin-top (num * 10)px
```

### 3. 内置函数库

```stylus
body
  color darken(#ff0000, 20%)
  background rgba(255, 0, 0, 0.5)
```

### 4. 继承(@extend)

```stylus
.message
  padding 10px
  border 1px solid #eee

.warning
  @extend .message
  color #e2e21e
```

## 三、安装与使用

### 1、安装

```bash
npm install stylus -g
```

### 2、编译命令

```bash
stylus style.styl -o style.css
```

### 3、监视文件变化

```bash
stylus -w style.styl -o style.css
```

## 四、与其他预处理器的比较

| 特性       | Stylus | Sass/SCSS | Less |
| ---------- | ------ | --------- | ---- |
| 语法灵活性 | ★★★★★  | ★★★       | ★★   |
| 内置函数   | ★★★★   | ★★★★★     | ★★★  |
| 社区生态   | ★★★    | ★★★★★     | ★★★★ |
| 学习曲线   | 中等   | 较高      | 较低 |
| 编译速度   | 快     | 中等      | 快   |

## 五、实际应用示例

### 1、响应式设计

```stylus
// 定义断点
breakpoint = 768px

// 响应式混合
respond-to()
  @media (min-width: breakpoint)
    {block}

// 使用
.container
  width 100%
  +respond-to()
    width 750px
```

### 2、CSS 网格系统

```stylus
// 生成网格类
grid(cols = 12, gutter = 20px)
  .row
    margin-left (gutter / -2)
    margin-right (gutter / -2)
    clearfix()

  for col in 1..cols
    .col-{col}
      width ((col / cols) * 100)%
      float left
      padding-left (gutter / 2)
      padding-right (gutter / 2)

// 使用12列网格
grid()
```

## 六、为什么选择 Stylus

1. **极简语法**：代码更简洁，减少冗余字符
2. **强大灵活性**：支持多种编程范式
3. **JavaScript 友好**：可与 Node.js 深度集成
4. **高度可扩展**：轻松编写自定义函数
5. **渐进式采用**：兼容标准 CSS 语法

Stylus 特别适合追求代码简洁性和灵活性的开发者，尤其适合 Node.js 项目和需要高度定制预处理功能的场景。
