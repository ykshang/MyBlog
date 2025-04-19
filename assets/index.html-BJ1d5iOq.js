import{_ as a,c as i,a as n,o as p}from"./app-CtJ5l8zv.js";const e={};function l(t,s){return p(),i("div",null,s[0]||(s[0]=[n(`<p>在 Sass 中，<strong>列表（Lists）</strong> 是核心数据类型之一，类似于其他编程语言中的“数组”，用于存储有序的值集合。以下是 Sass 列表的详细说明，涵盖定义、操作、函数及实际应用：</p><h2 id="一、基本定义" tabindex="-1"><a class="header-anchor" href="#一、基本定义"><span><strong>一、基本定义</strong></span></a></h2><p>列表是 <strong>用逗号或空格分隔的值集合</strong>，可以是任意数据类型（包括嵌套列表）。列表的<mark>索引从 1 开始</mark>（非 0）。 语法示例:</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">逗号分隔列表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$font-stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Helvetica</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Arial</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">sans-serif</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">空格分隔列表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$spacing</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">30</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">混合类型列表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$mixed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">text</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">ff0000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">nested</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">空列表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$empty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、分隔符" tabindex="-1"><a class="header-anchor" href="#二、分隔符"><span><strong>二、分隔符</strong></span></a></h2><ul><li><p><strong>显式分隔符</strong>：使用逗号 <code>,</code> 或空格分隔元素。</p></li><li><p><strong>单元素列表</strong>：需显式标明分隔符，否则会被视为普通值：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$single-space</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">视为单个值（非列表）</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$single-comma</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">30</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">逗号分隔的单元素列表</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="三、列表操作与函数" tabindex="-1"><a class="header-anchor" href="#三、列表操作与函数"><span><strong>三、列表操作与函数</strong></span></a></h2><h3 id="_1、访问元素" tabindex="-1"><a class="header-anchor" href="#_1、访问元素"><span><strong>1、访问元素</strong></span></a></h3><p>索引从 1 开始（非 0）：</p><table><thead><tr><th>函数</th><th>作用</th><th>示例</th><th>编译结果</th></tr></thead><tbody><tr><td><code>nth($list, $index)</code></td><td>访问指定位置的元素</td><td><code>nth((red, green, blue), 2)</code></td><td><code>green</code></td></tr></tbody></table><h3 id="_2、添加-删除元素" tabindex="-1"><a class="header-anchor" href="#_2、添加-删除元素"><span><strong>2、添加/删除元素</strong></span></a></h3><table><thead><tr><th>函数</th><th>作用</th><th>示例</th><th>编译结果</th></tr></thead><tbody><tr><td><code>append($list, $value)</code></td><td>末尾添加元素</td><td><code>append((a b), c)</code></td><td><code>a b c</code></td></tr><tr><td><code>join($list1, $list2)</code></td><td>合并两个列表</td><td><code>join((a, b), (c))</code></td><td><code>a, b, c</code></td></tr><tr><td><code>list.set-nth($list, $n, $value)</code></td><td>修改指定位置的元素</td><td><code>set-nth((a b c), 2, x)</code></td><td><code>a x c</code></td></tr></tbody></table><h3 id="_3、遍历列表" tabindex="-1"><a class="header-anchor" href="#_3、遍历列表"><span><strong>3、遍历列表</strong></span></a></h3><p>使用 <code>@each</code> 循环遍历：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$sizes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">30</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">each</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$sizes</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-10px</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-20px</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-30px</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">30</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、其他常用函数" tabindex="-1"><a class="header-anchor" href="#_4、其他常用函数"><span><strong>4、其他常用函数</strong></span></a></h3><table><thead><tr><th>函数</th><th>作用</th><th>示例</th><th>编译结果</th></tr></thead><tbody><tr><td><code>length($list)</code></td><td>获取列表长度</td><td><code>length(10px 20px)</code></td><td><code>2</code></td></tr><tr><td><code>index($list, $value)</code></td><td>查找值的索引（从 1 开始）</td><td><code>index((a, b, c), b)</code></td><td><code>2</code></td></tr><tr><td><code>is-bracketed($list)</code></td><td>判断列表是否用方括号包裹</td><td><code>is-bracketed([a b])</code></td><td><code>true</code></td></tr><tr><td><code>list.separator($list)</code></td><td>获取列表分隔符（<code>comma</code>/<code>space</code>）</td><td><code>separator((a, b))</code></td><td><code>&quot;comma&quot;</code></td></tr><tr><td><code>zip($lists)</code></td><td>将多个列表重新按照相同索引分组，生成新的多维度列表。</td><td><code>zip(1px 2px 3px, solid dashed dotted, red green blue)</code></td><td><code>1px solid red, 2px dashed green, 3px dotted blue</code></td></tr></tbody></table><h2 id="四、高级特性" tabindex="-1"><a class="header-anchor" href="#四、高级特性"><span><strong>四、高级特性</strong></span></a></h2><h3 id="_1、嵌套列表" tabindex="-1"><a class="header-anchor" href="#_1、嵌套列表"><span><strong>1、嵌套列表</strong></span></a></h3><p>列表可以嵌套多层，需注意分隔符优先级：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$matrix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">二维列表</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nth(nth(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$matrix</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">2),</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1)</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、方括号列表" tabindex="-1"><a class="header-anchor" href="#_2、方括号列表"><span><strong>2、方括号列表</strong></span></a></h3><p>使用 <code>[]</code> 包裹列表以保留分隔符语义：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$grid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">[col-start]</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">fr</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">[col-end]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">is-bracketed(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$grid</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">→</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">检查是否被方括号包裹</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、不可变性" tabindex="-1"><a class="header-anchor" href="#_3、不可变性"><span><strong>3、不可变性</strong></span></a></h3><p>Sass 列表是 <strong>不可变</strong> 的，所有函数返回新列表，原列表不变：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$original</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">a</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">b</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$modified</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$original</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">a</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">b</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">c</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">d</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$original</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">→</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">a</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">b</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">原列表未改变</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、实际应用场景" tabindex="-1"><a class="header-anchor" href="#五、实际应用场景"><span><strong>五、实际应用场景</strong></span></a></h2><h3 id="_1、生成工具类" tabindex="-1"><a class="header-anchor" href="#_1、生成工具类"><span><strong>1、生成工具类</strong></span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$spacing-sizes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">12</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">each</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$spacing-sizes</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">m-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">margin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">p-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、管理响应式断点" tabindex="-1"><a class="header-anchor" href="#_2、管理响应式断点"><span><strong>2、管理响应式断点</strong></span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$breakpoints</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">small</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">480</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">medium</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">768</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">mixin</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">respond-to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">media</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">min-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">map-get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$breakpoints</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、多值属性简化" tabindex="-1"><a class="header-anchor" href="#_3、多值属性简化"><span><strong>3、多值属性简化</strong></span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$shadow-values</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">card</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">box-shadow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$shadow-values</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、注意事项" tabindex="-1"><a class="header-anchor" href="#六、注意事项"><span><strong>六、注意事项</strong></span></a></h2><ol><li><p><strong>分隔符冲突</strong>：<br> 混合使用逗号和空格可能导致解析错误：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$invalid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">30</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">错误：混合分隔符</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>空列表处理</strong>：<br> 空列表 <code>()</code> 在某些函数中可能引发错误，需提前判断：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>性能优化</strong>：<br> 避免超长列表嵌套，可能影响编译速度。</p></li></ol><h2 id="七、总结" tabindex="-1"><a class="header-anchor" href="#七、总结"><span><strong>七、总结</strong></span></a></h2><p>Sass 列表是动态生成样式、管理多值属性的核心工具。通过灵活使用列表函数和循环，可以显著提升代码复用性，减少重复劳动。掌握其分隔符规则和不可变性特性，是高效使用列表的关键！ 🔄</p>`,40)]))}const k=a(e,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Sass/beyrhz9q/","title":"Lists 列表类型","lang":"zh-CN","frontmatter":{"title":"Lists 列表类型","createTime":"2025/04/04 23:38:25","permalink":"/Sass/beyrhz9q/"},"headers":[],"readingTime":{"minutes":3.1,"words":930},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Sass/3.SassScript篇/7.List 列表类型.md"}');export{k as comp,d as data};
