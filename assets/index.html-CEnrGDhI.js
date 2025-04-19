import{_ as a,c as i,a as n,o as p}from"./app-CtJ5l8zv.js";const l={};function e(h,s){return p(),i("div",null,s[0]||(s[0]=[n(`<p>在 Sass 中，<strong>导入（<code>@import</code>）</strong>、<strong>混入（<code>@mixin</code>）</strong> 和 <strong>继承（<code>@extend</code>）</strong> 是三种不同的代码复用机制，各有适用场景。以下是它们的对比分析和使用建议：</p><hr><h2 id="一、概念对比" tabindex="-1"><a class="header-anchor" href="#一、概念对比"><span>一、概念对比</span></a></h2><table><thead><tr><th><strong>特性</strong></th><th><strong><code>@import</code></strong></th><th><strong><code>@mixin</code></strong></th><th><strong><code>@extend</code></strong></th></tr></thead><tbody><tr><td><strong>核心作用</strong></td><td>合并外部 <code>Sass/CSS</code> 文件</td><td>定义可复用的样式块（支持传参）</td><td>复用选择器的样式（静态继承）</td></tr><tr><td><strong>代码输出</strong></td><td>多个源文件合并到一个文件中</td><td>复制样式到每个调用位置</td><td>通过选择器群组共享样式</td></tr><tr><td><strong>灵活性</strong></td><td>文件级复用</td><td>高（支持参数、逻辑判断）</td><td>低（静态继承，无参数）</td></tr><tr><td><strong>适用场景</strong></td><td>代码模块化、重新拆分成文件</td><td>动态生成差异化的样式</td><td>静态复用完全相同的样式</td></tr><tr><td><strong>性能影响</strong></td><td>增加编译后文件体积</td><td>可能重复代码（多次调用时）</td><td>生成紧凑代码（减少重复）</td></tr></tbody></table><h2 id="二、详细说明与示例" tabindex="-1"><a class="header-anchor" href="#二、详细说明与示例"><span>二、详细说明与示例</span></a></h2><h3 id="_1-导入-import" tabindex="-1"><a class="header-anchor" href="#_1-导入-import"><span>1. <strong>导入（<code>@import</code>）</strong></span></a></h3><ul><li><strong>作用</strong>：将多个 Sass 文件合并编译为一个 CSS 文件。</li><li><strong>适用场景</strong>：代码模块化（如分离变量、混入、组件样式）。</li><li><strong>注意</strong>：Sass 已逐步弃用 <code>@import</code>，推荐使用 <code>@use</code> + <code>@forward</code>（更安全的作用域管理）。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">_variables.scss</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">main.scss</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">variables</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">导入变量文件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-混入-mixin" tabindex="-1"><a class="header-anchor" href="#_2-混入-mixin"><span>2. <strong>混入（<code>@mixin</code>）</strong></span></a></h3><ul><li><strong>作用</strong>：定义可复用的样式块，支持参数和逻辑。</li><li><strong>适用场景</strong>：需要动态生成样式（如主题切换、响应式断点）。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">定义混入</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">mixin</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$x</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$y</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$blur</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$x</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$y</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$blur</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">-webkit-box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$x</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$y</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$blur</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">调用混入</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">card</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">white</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">card</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">-webkit-box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">white</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-继承-extend" tabindex="-1"><a class="header-anchor" href="#_3-继承-extend"><span>3. <strong>继承（<code>@extend</code>）</strong></span></a></h3><ul><li><strong>作用</strong>：复用选择器的样式，通过群组选择器减少重复代码。</li><li><strong>适用场景</strong>：静态共享完全相同的样式（如基础按钮样式）。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">占位符选择器（不直接输出）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">base-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">border-radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">primary-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">extend</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">base-button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">danger-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">extend</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">base-button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">primary-button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">danger-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">border-radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">primary-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">danger-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、如何选择" tabindex="-1"><a class="header-anchor" href="#三、如何选择"><span>三、如何选择？</span></a></h2><table><thead><tr><th><strong>场景</strong></th><th><strong>推荐机制</strong></th><th><strong>原因</strong></th></tr></thead><tbody><tr><td>复用静态样式（无参数）</td><td><code>@extend</code></td><td>生成紧凑的群组选择器，减少代码冗余</td></tr><tr><td>动态生成样式（需传参或逻辑）</td><td><code>@mixin</code></td><td>支持参数和复杂逻辑，灵活生成差异化样式</td></tr><tr><td>模块化代码（分离变量/组件）</td><td><code>@import</code></td><td>合并文件，简化编译输出（注意：新项目建议用 <code>@use</code> 替代）</td></tr></tbody></table><h2 id="四、综合对比示例" tabindex="-1"><a class="header-anchor" href="#四、综合对比示例"><span>四、综合对比示例</span></a></h2><p>假设需要定义不同颜色的按钮：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">@extend（静态复用）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">button-base</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">border</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">none</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">blue-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">extend</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">button-base</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">@mixin（动态生成）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">mixin</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">button-theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">extend</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">%</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">button-base</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">结合继承和混入</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">&amp;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">darken</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">red-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">button-theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">blue-button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">red-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">border</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">none</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">blue-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">red-button</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">red-button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">background</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">cc0000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">//</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">darken(red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">10%)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、最佳实践" tabindex="-1"><a class="header-anchor" href="#五、最佳实践"><span>五、最佳实践</span></a></h2><ol><li><strong>优先用 <code>@extend</code></strong>：当样式完全静态且无需参数时。</li><li><strong>动态场景用 <code>@mixin</code></strong>：需要传参或生成衍生样式（如 <code>:hover</code> 状态）。</li><li><strong>代码组织用 <code>@use</code>/<code>@import</code></strong>：模块化管理变量、混入和组件（新项目用 <code>@use</code>）。</li><li><strong>避免滥用继承链</strong>：过长的继承关系会降低可维护性。</li></ol><p>合理结合三者，可以写出高效、灵活且易维护的 Sass 代码！</p>`,28)]))}const k=a(l,[["render",e],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Sass/bys9hjia/","title":"导入 vs 混入 vs 继承","lang":"zh-CN","frontmatter":{"title":"导入 vs 混入 vs 继承","createTime":"2025/04/02 21:10:04","permalink":"/Sass/bys9hjia/"},"headers":[],"readingTime":{"minutes":2.97,"words":891},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Sass/1.快速入门/7.导入 vs 混入 vs 继承.md"}');export{k as comp,d as data};
