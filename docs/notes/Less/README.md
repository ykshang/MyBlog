---
title: Less
createTime: 2025/04/13 15:11:40
permalink: /Less/
---

以下是关于 **LESS** 的全面介绍，涵盖语法特性、使用场景、编译方法及最佳实践等内容：

## **一、LESS 是什么？**

LESS（Leaner Style Sheets）是一种 **动态样式语言**，属于 CSS 预处理器（CSS Preprocessor）。它通过扩展 CSS 语法，引入变量、函数、逻辑运算等编程特性，使 CSS 更易维护和扩展。LESS 代码需编译为标准 CSS 后才能在浏览器中运行。

## **二、核心语法特性**

### **1、变量（Variables）**

- 用 `@变量名` 定义可复用的值（颜色、尺寸、字体等）。
- 变量插值语法：在字符串或选择器中使用变量动态拼接。

示例：

```less
@theme-color: #3498db;
@selector: header;

.@{selector} {
  color: @theme-color;
  border: 1px solid darken(@theme-color, 20%);
}
```

编译后：

```css
header {
  color: #3498db;
  border: 1px solid #2980b9;
}
```

### **2、混入（Mixins）**

- 将一组 CSS 属性定义为可复用的代码块。
- 混入传参：支持默认参数和逻辑判断。

示例：

```less
.shadow(@x: 0, @y: 0, @blur: 5px, @color: rgba(0,0,0,0.3)) {
  box-shadow: @arguments;
  & when (@blur > 10px) {
    // 条件判断
    margin: 2px;
  }
}

.card {
  .shadow(2px, 2px, 15px); // 使用混合
}
```

编译后：

```css
.card {
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  margin: 2px;
}
```

### **3、嵌套（Nesting）**

- 层级化编写选择器，模拟 HTML DOM 结构。
- 父选择器占位符：使用 `&` 表示当前选择器的父级。

示例：

```less
.menu {
  padding: 10px;
  li {
    list-style: none;
    &:hover {
      // 等价于 li:hover
      color: red;
    }
    &.active {
      // 等价于 li.active
      font-weight: bold;
    }
  }
}
```

编译后：

```css
.menu {
  padding: 10px;
}
.menu li {
  list-style: none;
}
.menu li:hover {
  color: red;
}
.menu li.active {
  font-weight: bold;
}
```

### **4、运算（Operations）**

- 对数值、颜色、单位进行数学运算。
- 单位自动转换：如 `10px + 2em` 会报错，但 `10px + 2` 结果为 `12px`。

示例：

```less
@base-size: 16px;
.text {
  font-size: @base-size * 1.2; // 19.2px
  margin: (@base-size / 2) 0;
}
```

编译后：

```css
.text {
  font-size: 19.2px;
  margin: 8px 0;
}
```

### **5、内置函数（Functions）**

- 内置颜色处理、数学计算等函数（如 `lighten()`, `ceil()`, `percentage()`）。
- 自定义函数（通过 Mixins 模拟）。

示例：

```less
.add-margin(@a, @b) {
  margin: (@a + @b) * 1px;
}

.box {
  .add-margin(10, 20); // margin: 30px;
  background: lighten(#ff0000, 20%); // #ff6666
}
```

编译后：

```css
.box {
  margin: 30px;
  background: #ff6666;
}
```

### **6、作用域（Scope）**

变量和混合遵循块级作用域，就近覆盖。

示例：

```less
@color: blue;
.box {
  @color: red; // 局部变量覆盖全局变量
  color: @color; // red
}
```

编译后：

```css
.box {
  color: red;
}
```

### **7、模块化与导入（Import）**

通过 `@import` 拆分代码，支持文件合并。
示例：

```less
@import "variables.less"; // 导入变量文件
@import "mixins/buttons.less"; // 导入混合库
```

### **8、循环（Loops）**

通过递归混合实现循环逻辑。

```less
.generate-columns(@n, @i: 1) when (@i <= @n) {
  .col-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}

.generate-columns(4); // 生成 .col-1 到 .col-4 的宽度类
```

编译后：

```css
.col-1 {
  width: 25%;
}
.col-2 {
  width: 50%;
}
.col-3 {
  width: 75%;
}
.col-4 {
  width: 100%;
}
```

### **9、注释（Comments）**

less 支持单行注释（`//`）和多行注释（`/* */`）。可以在编译时保留注释，便于调试。

示例：

```less
/* 这是一个注释 */
.box {
  // 这也是注释
  color: red;
}
```

## **三、编译与工具链**

### **1、Node.js 命令行工具`lessc`**

```bash
npm install -g less
lessc styles.less styles.css
```

### **2、构建工具集成**

Webpack（`less-loader`）、Gulp（`gulp-less`）、Vite 等。

### **3、浏览器实时编译**

（开发调试用）：

```html
<link rel="stylesheet/less" href="styles.less" />
<script src="https://cdn.jsdelivr.net/npm/less@4"></script>
```

### **4、Source Maps**

生成 CSS 与 LESS 源码的映射文件，便于调试。

```bash
lessc --source-map styles.less styles.css
```

## **四、使用场景与优势**

### **1、适用场景**

- 中大型项目，需要维护复杂样式。
- 需要动态生成样式（如主题切换、响应式布局）。
- 团队协作，强调代码复用和规范。

### **2、核心优势**

- **代码复用**：通过变量和混合减少冗余代码。
- **逻辑能力**：支持条件判断、循环等编程特性。
- **可维护性**：模块化组织代码，修改全局变量即可调整整体样式。

## **五、与 Sass 的对比**

| **特性**       | **LESS**                   | **Sass (SCSS)**                  |
| -------------- | -------------------------- | -------------------------------- |
| **变量符号**   | `@variable`                | `$variable`                      |
| **语法兼容性** | 兼容 CSS 语法              | 完全兼容 CSS（SCSS 语法）        |
| **条件与循环** | 通过 Mixins 和 Guards 实现 | 原生支持 `@if`, `@for`, `@each`  |
| **社区生态**   | 轻量级，工具链简单         | 更丰富的插件和框架（如 Compass） |
| **学习曲线**   | 较低（适合 CSS 开发者）    | 稍高（需适应 Ruby 风格语法）     |

## **六、最佳实践**

1. **命名规范**：使用 `@primary-color` 而非 `@color1` 提高可读性。
2. **避免过度嵌套**：嵌套层级不超过 3 层，防止生成冗余 CSS。
3. **模块化拆分**：
   ```
   styles/
   ├── variables.less    // 全局变量
   ├── mixins.less       // 公共混合
   ├── components/       // 组件样式
   └── main.less         // 主文件（导入其他文件）
   ```
4. **利用函数库**：使用预定义的 Less 函数库（如 `lesshat`）简化开发。

## **七、局限性**

- **运行时性能**：需编译为 CSS，不直接支持浏览器原生解析。
- **功能限制**：相比 Sass，逻辑处理能力较弱（如无原生循环语法）。

## **八、总结**

LESS 通过引入编程思维，解决了原生 CSS 在大型项目中难以维护的问题。其简洁的语法、直观的嵌套规则和模块化能力，使其成为提升前端开发效率的重要工具。选择 LESS 还是 Sass 取决于团队偏好和项目需求，但二者的核心目标一致：**让 CSS 更强大、更优雅**。
