---
title: 如何利用sass生成一套前端主题配色
createTime: 2025/08/23 16:42:42
permalink: /blog/8intbafo/
---

## 目的

近期，在封装一个管理平台项目时，涉及到了前端主题切换，支持选择不同的主题色，于是想到了利用 sass 来生成。

## 具体设计思路

### 一、定义所需要的文件

创建以下文件，在 `index.scss` 里，引入其他文件。

- `index.scss` 引入其他文件，调用 mixin 生成特定代码块
- `variables.scss` 定义需要的变量
- `functions.scss` 定义需要的工具函数，用于颜色转换，数据提取、数据转换等。
- `mixins.scss` 定义需要的混合宏，主要用来生成代码块

```scss title="index.scss"
@use "./mixin.scss" as mixin;
@use "./functions.scss" as tools;
@use "./variables.scss" as var;
```

### 二、定义需要的变量

在 `variables.scss` 文件里，用于定义全局变量。

#### 1、定义命名空间

命名空间用来生成特定的变量前缀，例如:

- Element-UI 通常使用 `el` 作为命名空间
- Element-Plus 通常使用 `ep` 作为命名空间

```scss title="variables.scss"
$namespace: diy !default;
```

::: note 命名空间的好处
使用特定前缀可以避免全局变量冲突，防止不同项目之间的变量名冲突。生成的 CSS 变量往往为 `--#{$namespace}-xx-xx-xx` 格式，例如 `--ep-color-primary` 在 Element-Plus 表示主要颜色。
:::

#### 2. 定义主题颜色集合

主题颜色集合主要是为了定义项目中使用的颜色，例如主要颜色、信息颜色、成功颜色、警告颜色、危险颜色等。

```scss title="variables.scss"
// 主题颜色集合
$theme-colors: (
  // 主要颜色
  primary: #409eff,
  // 信息颜色
  info: #909399,
  // 成功颜色
  success: #67c23a,
  // 警告颜色
  warning: #e6a23c,
  // 危险颜色
  danger: #f56c6c
) !default;
```

#### 3. 定义默认主题模式

默认主题模式主要是为了定义项目的默认主题，例如默认的文本颜色、背景色，以及对应的混合色，不允许被覆盖。

```scss title="variables.scss"
// 默认主题
$theme-default-mode: (
  (
    // 模式
    mode: "default",
    // 背景颜色
    bg-color: #ffffff,
    // 背景混合颜色
    bg-mix-color: #000000,
    // 文本颜色，大多数的系统中与primary保持一致
    text-color: #333333,
    // 文本混合颜色
    text-mix-color: #ffffff
  )
);
```

#### 4、定义主题模式集合

主题模式集合主要是为了定义项目的主题模式，例如默认模式、暗黑模式等。

```scss title="variables.scss"
// 主题模式集合。可被覆盖
$theme-mode-list: (
  (
    mode: "dark",
    bg-color: #000000,
    bg-mix-color: #ffffff,
    text-color: #ffffff,
    text-mix-color: #000000,
  )
) !default;
```

### 三、生成样式之前的准备工作

#### 1、是否需要覆盖默认变量

接下来，我们考虑如何生成样式之前，我们可以确认一下是否需要覆盖默认变量。

```scss title="index.scss"
@use "./variables.scss" as var with (
  // 指定其他命名空间
  $namespace: "demo"
);
```

#### 2、合并默认主题模式和自定义主题模式

在 `functions.scss` 文件中，封装一个函数，用于合并默认主题模式和自定义主题模式。

```scss title="functions.scss"
@use "sass:list";

@function merge-default-theme($list, $default-map) {
  @return list.append($list, $default-map);
}
```

在 `index.scss` 文件中，调用该函数合并默认主题模式和自定义主题模式。

```scss title="index.scss"
@use "./functions.scss" as tools;
@use "./variables.scss" as var;

$theme-mode-list: tools.merge-default-theme(
  var.$theme-mode-list,
  var.$theme-default-mode
);
```

### 四、实现生成 CSS 变量的容器

众所周知，我们的 CSS 变量一般在 `:root {}` 中定义，例如：

```css
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
}
```

#### 1、使用 mixin 实现一个生成 css 变量的容器

当下主流的主题切换，都是选择在 html 标签上加一个属性，例如：

- `@vueuse` 的 `useDark()`、`toggleDark()` 方法使用 `<html dark>`
- Vuepress 的主题切换方式 `<html data-theme="dark">`

::: tip 当然，你可以使用其他的方式，具体的切换逻辑可以根据你的需求来定。
:::

##### 实现思路

1. 在定义代码的时候，我们需要获取模式 `$mode`，作为参数来传给 mixin，以模板语法的方式拼接到代码里。
2. 使用 `@content` 来容纳外边生成的 CSS 变量。
3. 使用条件语句生成多份不同主题下的 CSS 变量，同名可以保证其变量值随着主题切换而变化。
   - 默认主题直接定义在 `:root` 下
   - 其他主题定义使用 CSS 选择器 + 插值语法定义在 `html[#{$mode}]`、 `html[data-theme="#{$mode}"]` 下

```scss title="mixins.scss"
@mixin generate-css-var-root($mode) {
  // 条件为 true 时执行
  @if $mode == "default" {
    :root {
      @content; // 外部传入的样式在此处展开
    }
    // 条件为 false 时执行
  } @else {
    // vuepress
    html[data-theme="#{$mode}"] {
      @content; // 外部传入的样式在此处展开
    }
    // vueuse
    html[#{$mode}] {
      @content;
    }
  }
}
```

#### 2、获取所有的主题模式

在 `functions.scss` 文件中，封装一个函数，用于获取所有的主题模式。

```scss title="functions.scss"
@use "sass:map";

@function theme-get-all-mode($theme) {
  @return map.keys($theme);
}
```

在 `index.scss` 文件中，调用该函数获取所有的主题模式 `$theme-mode-keys`。

```scss title="index.scss"
@use "./functions.scss" as tools;

$theme-mode-keys: tools.theme-get-all-mode($theme-mode-list);
```

#### 3、实现一个函数获取对应主题的配置

该函数的参数如下：

- `$list`：主题模式列表，即包含所有主题模式的映射（`$theme-mode-list`）。
- `$key`：主题模式，即要获取的主题模式的键。

```scss
@use "sass:map";

@function theme-get-config($list, $key) {
  @each $item in $list {
    @if map.get($item, "mode") == $key {
      @return $item;
    }
  }
}
```

#### 4、生成所有的主题模式的 CSS 变量

1. 遍历所有的主题模式 `$theme-mode-keys`
2. 调用 mixin 生成 CSS 变量容器

```scss title="index.scss"
@use "./mixins.scss" as mixins;
@each $mode in $theme-mode-keys {
  @include mixin.generate-css-var-root($mode) {
    $config: tools.theme-get-config($theme-mode-list, $mode);
    // 此处预留，插入生成的css变量
  }
}
```

### 五、实现一个颜色混合工具

利用 SASS 提供的 `color.mix()` 函数，实现一个混色函数，用来生成不同权重的颜色。

::: info 这些颜色用来构成背景颜色、文本颜色的变量配色方案。
:::

#### 1、实现一个将数字转化为权重的函数

这个函数可以将 1-10 转换为 10% - 100%

```scss title="functions.scss"
@use "sass:math";

@function get-percent($num) {
  @return math.percentage(math.div($num, 10));
}
```

#### 2、实现一个实现混色函数工具

我们可以调用 `get-percent()` 函数来将数字转换为权重，利用 `color.mix()` 函数来实现颜色的混合，生成不同权重的主题颜色。

该函数的参数如下：

- `$base`：基础颜色，即要混合的颜色。
- `$color`：混合颜色，即要添加到基础颜色中的颜色。
- `$weight`：混合权重，即要添加的颜色的百分比，范围为 0 到 100。

该函数的返回值为混合后的颜色。

```scss title="functions.scss"
@use "sass:color";

@function mix-color($base, $color, $weight) {
  @return color.mix($base, $color, get-percent($weight));
}
```

### 六、生成背景颜色相关变量

#### 1、实现生成背景颜色相关变量的混入

准备一个混入，来实现现背景颜色相关变量的生成。

该混入的参数如下：

- `$config`：主题配置，即包含背景颜色、背景混合颜色、文本颜色、文本混合颜色的映射。
- `$mode`：主题模式，即要生成的 CSS 变量的选择器。
- `$namespace`：命名空间，即要生成的 CSS 变量的前缀。

主要生成两部分代码：

1. 基本背景颜色
2. 调用混色工具生成不同权重的背景颜色的混合颜色

```scss title="mixins.scss"
@use "sass:map";
@use "./functions.scss" as tools;

@mixin bg-color-generate-mixin($config, $mode, $namespace) {
  $base-color: map.get($config, "bg-color");
  $mix-color: map.get($config, "bg-mix-color");

  --#{$namespace}-bg-color: #{$base-color};

  @for $i from 10 through 0 {
    $temp-color: tools.mix-color($base-color, $mix-color, $i);

    --#{$namespace}-bg-color--light-#{$i}: #{$temp-color};
  }
}
```

#### 2、在 `index.scss` 中调用混入

在 `index.scss` 文件中，调用混入生成背景颜色相关的变量。

```scss title="index.scss" :highLight="{7-8}"
@use "./mixins.scss" as mixins;

@each $mode in $theme-mode-keys {
  @include mixin.generate-css-var-root($mode) {
    // 获取当前主题的配置
    $config: tools.theme-get-config($theme-mode-list, $mode);
    // 生成背景颜色相关变量
    @include mixin.bg-color-generate-mixin($config, $mode, var.$namespace);
  }
}
```

### 七、生成文本颜色的相关变量

#### 1、实现生成文本颜色的混入

::: info 逻辑和生成背景颜色类似
:::

该混入的参数如下：

- `$config`：主题配置，即包含背景颜色、背景混合颜色、文本颜色、文本混合颜色的映射。
- `$mode`：主题模式，即要生成的 CSS 变量的选择器。
- `$namespace`：命名空间，即要生成的 CSS 变量的前缀。

主要生成两部分代码：

1. 基本文本颜色
2. 调用混色工具生成不同权重的背景颜色的混合颜色

```scss title="mixins.scss"
@use "sass:map";
@use "./functions.scss" as tools;

@mixin text-color-generate-mixin($config, $mode, $namespace) {
  $base-color: map.get($config, "text-color");
  $mix-color: map.get($config, "text-mix-color");

  --#{$namespace}-text-color: #{$base-color};

  @for $i from 10 through 0 {
    $temp-color: tools.mix-color($base-color, $mix-color, $i);

    --#{$namespace}-text-color--light-#{$i}: #{$temp-color};
  }
}
```

#### 2、在 `index.scss` 中调用混入

在 `index.scss` 文件中，调用混入生成文本颜色相关的变量。

```scss title="index.scss" :highLight="{9-10}"
@use "./mixins.scss" as mixins;

@each $mode in $theme-mode-keys {
  @include mixin.generate-css-var-root($mode) {
    // 获取当前主题的配置
    $config: tools.theme-get-config($theme-mode-list, $mode);
    // 生成背景颜色相关变量
    @include mixin.bg-color-generate-mixin($config, $mode, var.$namespace);
    // 生成文本颜色相关变量
    @include mixin.text-color-generate-mixin($config, $mode, var.$namespace);
  }
}
```

### 八、生成主题色相关变量

#### 1、实现生成主题色的混入

::: info 逻辑和生成背景颜色、文本颜色类似
:::

该混入包含以下参数：

- `$colors`：主题颜色，即包含主题颜色的映射。
- `$config`：主题配置，即包含背景颜色、背景混合颜色、文本颜色、文本混合颜色的映射。
- `$mode`：主题模式，即要生成的 CSS 变量的选择器。
- `$namespace`：命名空间，即要生成的 CSS 变量的前缀。

```scss title="mixins.scss"
@use "sass:map";
@use "./functions.scss" as tools;

@mixin theme-color-generate-mixin($colors, $config, $mode, $namespace) {
  // 使用背景色作为混色
  $mix-color: tools.map-get($config, "bg-color");
  // 遍历主题颜色，获取对应配色，
  @each $key, $value in $colors {
    // 获取 primy 对应 #409eff
    $color: map.get($colors, $key);
    // --demo-color-primay: #409eff;
    --#{$namespace}-color-#{$key}: #{$value};
    // 生成不同权重配色
    @for $i from 10 through 0 {
      $temp-color: tools.mix-color($value, $mix-color, $i);

      // --demo-color-primay--light-10: #409eff;
      --#{$namespace}-color-#{$key}--light-#{$i}: #{$temp-color};
    }
  }
}
```

#### 2、调用该混入

在 `index.scss` 文件中，调用混入生成主题颜色相关的变量。

```scss title="index.scss" :highLight="{13-14}"
@use "./mixins.scss" as mixins;
@use "./functions.scss" as tools;
@use "./variables.scss";

@each $mode in $theme-mode-keys {
  @include mixin.generate-css-var-root($mode) {
    // 获取当前主题的配置
    $config: tools.theme-get-config($theme-mode-list, $mode);
    // 生成背景颜色相关变量
    @include mixin.bg-color-generate-mixin($config, $mode, var.$namespace);
    // 生成文本颜色相关变量
    @include mixin.text-color-generate-mixin($config, $mode, var.$namespace);
    // 生成主题颜色相关变量
    @include mixin.theme-color-generate-mixin(
      $theme-colors,
      $config,
      $mode,
      var.$namespace
    );
  }
}
```

## 完整代码

::: code-tree title="theme" height="400px" entry="/src/theme/index.scss"

```scss title="/src/theme/index.scss" :active
/**
 * 命名空间
 * @type {String}
 */
$namespace: diy !default;
// 主题颜色集合
$theme-colors: (
  primary: #409eff,
  // 主要颜色
  info: #909399,
  // 信息颜色
  success: #67c23a,
  // 成功颜色
  warning: #e6a23c,
  // 警告颜色
  danger: #f56c6c,
  // 危险颜色
) !default;
// 默认主题
$theme-default-mode: (
  (
    mode: "default",
    // 模式
    bg-color: #ffffff,
    // 背景颜色
    bg-mix-color: #000000,
    // 背景混合颜色
    text-color: #333333,
    // 文本颜色，大多数的系统中与primary保持一致
    text-mix-color: #ffffff,
    // 文本混合颜色
  )
);
// 主题模式集合。可被覆盖
$theme-mode-list: (
  (
    mode: "dark",
    bg-color: #000000,
    bg-mix-color: #ffffff,
    text-color: #ffffff,
    text-mix-color: #000000,
  )
) !default;
```

```scss title='/src/theme/variables.scss'
/**
 * 命名空间
 * @type {String}
 */
$namespace: diy !default;
/**
 * 主题颜色集合
 * @type {Map}
 * @property {String} default 默认颜色
 * @property {String} primary 主要颜色
 * @property {String} info 信息颜色
 * @property {String} success 成功颜色
 * @property {String} warning 警告颜色
 * @property {String} danger 危险颜色
 */
$theme-colors: (
  default: #409eff,
  primary: #409eff,
  info: #909399,
  success: #67c23a,
  warning: #e6a23c,
  danger: #f56c6c,
) !default;
$theme-default-mode: (
  (
    mode: "default",
    bg-color: #ffffff,
    bg-mix-color: #000000,
    text-color: #333333,
    text-mix-color: #ffffff,
  )
);
/**
 * 主题模式集合
 * @type {Map} 如果未传入
 * @property {String} bg-color 背景颜色
 * @property {String} text-color 文本颜色
 * @property {String} mix-color 混合颜色
 */
$theme-mode-list: (
  (
    mode: "dark",
    bg-color: #000000,
    bg-mix-color: #ffffff,
    text-color: #ffffff,
    text-mix-color: #000000,
  )
) !default;
```

```scss title="/src/theme/functions.scss"
@use "sass:map";
@use "sass:math";
@use "sass:color";
@use "sass:list";

/**
 * @description 颜色混合函数
 * @param {string} $base - 基础颜色
 * @param {string} $color - 混合颜色
 * @param {number} $weight - 混合权重，1-10 之间的数字, 代表为 10%-100%
 * @return {string} - 混合后的颜色
 */
@function mix-color($base, $color, $weight) {
  @return color.mix($base, $color, get-percent($weight));
}

/**
 * @description 将数字转换为百分比，用于颜色混合函数
 * @param {number} $num - 数字
 * @return {string} - 百分比
 */
@function get-percent($num) {
  @return math.percentage(math.div($num, 10));
}

/**
 * @description 从映射中获取值
 * @param {map} $map - 映射
 * @param {string} $key - 键
 * @return {any} - 值
 */
@function map-get($map, $key) {
  @return map.get($map, $key);
}
/**
 * @description 从映射中获取所有键
 * @param {map} $map - 映射
 * @return {list} - 键列表
 */
@function map-get-all-keys($map) {
  @return map.keys($map);
}
/**
 * @description 合并两个map
 * @param {map} $map - 映射
 * @param {map} $map2 - 映射
 * @return {map} - 合并后的map
 */
@function map-merge($map, $map2) {
  @return map.merge($map, $map2);
}
/**
 * @description 获取所有的主题模式
 * @param {map} $map - 映射
 * @return {list} - 值列表
 */
@function theme-get-all-mode($list) {
  $result-list: ();
  @each $item in $list {
    $result-list: list.append($result-list, map-get($item, "mode"));
  }
  @return $result-list;
}
/**
 * @description 合并默认主题
 * @param {list} $list - 列表
 * @param {map} $map2 - 映射
 * @return {map} - 合并后的map
 */
@function merge-default-theme($list, $default-map) {
  @return list.append($list, $default-map);
}
/**
* @description 获取主题配置
* @param {list} $list - 映射
* @param {string} $key - 键
* @return {map} - 值
*/
@function theme-get-config($list, $key) {
  @each $item in $list {
    @if map-get($item, "mode") == $key {
      @return $item;
    }
  }
}
```

```scss title='/src/theme/mixins.scss'
@use "./functions.scss" as tools;
/**
 * @description 生成css变量容器
*/
@mixin generate-css-var-root($mode) {
  // 条件为 true 时执行
  @if $mode == "default" {
    :root {
      @content; // 外部传入的样式在此处展开
    }
    // 条件为 false 时执行
  } @else {
    /**
    * @name 方式1
    * @example <html data-theme="dark">
    * @description vuepress 的主题切换方式
    */
    html[data-theme="#{$mode}"] {
      @content; // 外部传入的样式在此处展开
    }
    /**
    * @name 方式2，当下主流
    * @example <html dark>
    * @description @vueuse 的 useDark()、toggleDark() 方法
    */
    html[#{$mode}] {
      @content;
    }
  }
}
// 生成背景色
/**
* @description 生成背景色
* @param {map} $theme-config - 主题配置
* @param {string} $mode - 主题模式
* @param {string} $namespace - 命名空间
* @return {void} 返回 css var 变量列表
*/
@mixin bg-color-generate-mixin($config, $mode, $namespace) {
  $base-color: tools.map-get($config, "bg-color");
  $mix-color: tools.map-get($config, "bg-mix-color");

  --#{$namespace}-bg-color: #{$base-color};

  @for $i from 10 through 0 {
    $temp-color: tools.mix-color($base-color, $mix-color, $i);

    --#{$namespace}-bg-color--light-#{$i}: #{$temp-color};
  }
}
/**
 * @description 生成文本颜色
 * @param {map} $theme-config - 主题配置
 * @param {string} $mode - 主题模式
 * @param {string} $namespace - 命名空间
 * @return {void} 返回 css var 变量列表
 */
@mixin text-color-generate-mixin($config, $mode, $namespace) {
  $base-color: tools.map-get($config, "text-color");
  $mix-color: tools.map-get($config, "text-mix-color");

  --#{$namespace}-text-color: #{$base-color};

  @for $i from 10 through 0 {
    $temp-color: tools.mix-color($base-color, $mix-color, $i);

    --#{$namespace}-text-color--light-#{$i}: #{$temp-color};
  }
}

/**
 * @description 生成主题色
 * @param {map} $theme-config - 主题配置
 * @param {string} $mode - 主题模式
 * @param {string} $namespace - 命名空间
 * @return {void} 返回 css var 变量列表
 */
@mixin theme-color-generate-mixin($colors, $config, $mode, $namespace) {
  // 使用背景色作为混色
  $mix-color: tools.map-get($config, "bg-color");

  @each $key, $value in $colors {
    $color: tools.map-get($colors, $key);
    // --demo-color-primay: #409eff;
    --#{$namespace}-color-#{$key}: #{$value};

    @for $i from 10 through 0 {
      $temp-color: tools.mix-color($value, $mix-color, $i);

      // --demo-color-primay--light-10: #409eff;
      --#{$namespace}-color-#{$key}--light-#{$i}: #{$temp-color};
    }
  }
}
```

:::
