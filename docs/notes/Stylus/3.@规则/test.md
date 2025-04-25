---
title: test
createTime: 2025/04/25 22:24:47
permalink: /Stylus/s47t2mih/
---

在 Stylus 预处理器中，`@import` 是核心的模块化代码复用机制，其功能比原生 CSS 的 `@import` 更强大且灵活。以下是详细解析：

## ‌ 一、基础行为

### 1、文件扩展名敏感 ‌

#### 1.1、`.css` 文件 ‌

Stylus 不会编译或合并 `.css` 文件的内容，而是直接输出为 css 原生的 `@import` 语句。

```styl
// 直接输出 CSS 原生 @import 语句
@import "reset.css"
```

编译结果 ‌：

```css
@import "reset.css";
```

#### 1.2、`.styl` 文件 ‌

Stylus 动态解析并内联文件内容。

```styl
// 查找 buttons.styl，编译后合并到当前文件
@import "mixins/buttons"
```

### 2、路径解析规则 ‌

- **默认路径**‌：以当前 Stylus 文件所在目录为基准（由 `filename` 选项定义）。

- **自定义路径**：通过 `paths` 配置项扩展搜索目录，例如：

  ```js
  stylus(css).set("paths", ["./src/styles", "./vendor"]); // 编译配置
  ```

  ```styl
  // 优先搜索 ./src/styles/colors.styl
  @import "colors"
  ```

## 二、高级特性

### 1、索引文件自动加载

当导入一个目录时（如 `@import "utils"`），Stylus 会查找该目录下的 `index.styl` 文件。

例如以下结构中，通过目录索引实现模块化代码组织。

::: file-tree

- utils
  - index.styl // 入口文件
  - mixins.styl // 混入库
  - variables.styl // 变量定义

:::

### 2、条件导入（动态逻辑）

可结合 Stylus 的条件语句按需导入文件：

```styl
if env == "development"
  @import "debug-tools"  // 开发环境加载调试工具
```

### 3、媒体查询与原生 CSS 混合

导入 CSS 文件时支持媒体查询参数：

```styl
@import "print.css" screen and (min-width: 768px) // 输出带条件的 @import
```

## ‌ 三、注意事项

### 1、重复导入风险

Stylus 默认不会检查重复导入，可能导致代码冗余：

```styl
// 多次引入同一文件
@import "variables/colors"
@import "variables/colors" // 编译后变量会被重复定义
```

### 2、路径冲突规避

避免同名 `.css` 和 `.styl` 文件共存：

```styl
@import "button"  // 若存在 button.css 和 button.styl，可能意外引入 CSS 文件
```

### 3、性能优化建议

- 高频复用模块（如变量库）建议改用 `@require`（自动单次加载）。
- 大型项目推荐使用索引文件（`index.styl`）集中管理模块依赖。

## 四、代码示例 ‌

#### 1. 基础导入

<pre><div class="code-header"><span rl-type="stop">stylus</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div></div><div class="code-right"><code class="hljs language-stylus">// 导入 .styl 文件（编译后合并）
@import "components/button"

// 导入 CSS 文件（原样输出）
@import "vendor/normalize.css"
</code></div></div></pre>

#### 2. 路径解析

<pre><div class="code-header"><span rl-type="stop">stylus</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div><div data-line-number="7" class="code-number"></div><div data-line-number="8" class="code-number"></div><div data-line-number="9" class="code-number"></div></div><div class="code-right"><code class="hljs language-stylus">// 文件结构
// /project
//   /styles
//     main.styl
//     /utils
//       index.styl

// main.styl 中导入
@import "utils" // 加载 /styles/utils/index.styl
</code></div></div></pre>

#### 3. 动态条件导入

<pre><div class="code-header"><span rl-type="stop">stylus</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-stylus">$theme = "dark"

@import "themes/" + $theme  // 动态拼接路径，导入 themes/dark.styl
</code></div></div></pre>

---

### ‌**五、总结** ‌

`@import` 是 Stylus 实现代码分治的核心工具，其特点包括：

- ‌**灵活性** ‌：支持动态路径、条件导入、CSS 文件混合。
- ‌**模块化** ‌：通过索引文件组织复杂代码结构。
- ‌**风险点** ‌：需手动规避重复导入和路径冲突。

建议在需要直接引入 CSS 资源或动态控制代码合并时优先使用 `@import`，其他场景可结合 `@require` 提升安全性和性能。
