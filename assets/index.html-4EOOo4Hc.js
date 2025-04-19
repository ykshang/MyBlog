import{_ as a,c as i,a as n,o as p}from"./app-CtJ5l8zv.js";const l={};function e(t,s){return p(),i("div",null,s[0]||(s[0]=[n(`<p>Sass（Syntactically Awesome Style Sheets）有两种语法格式：<strong>SCSS</strong> 和 <strong>缩进语法（Sass）</strong>。它们在语法结构上有显著差异，但功能完全一致。以下是它们的对比和示例：</p><h2 id="一、scss-sassy-css" tabindex="-1"><a class="header-anchor" href="#一、scss-sassy-css"><span><strong>一、SCSS（Sassy CSS）</strong></span></a></h2><ul><li><strong>文件扩展名</strong>：<code>.scss</code></li><li><strong>语法风格</strong>：完全兼容 CSS 语法，使用 <code>{}</code> 包裹代码块，用 <code>;</code> 分隔语句。</li><li><strong>特点</strong>：适合从 CSS 过渡到 Sass 的用户，学习成本低。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">变量定义</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">333</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">嵌套结构</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">container</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">title</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">&amp;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text-decoration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">underline</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">混入（Mixin）</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">mixin</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">flex-center</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">flex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">justify-content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">center</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">align-items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">center</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Mixin</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">box</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">flex-center</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、缩进语法-sass" tabindex="-1"><a class="header-anchor" href="#二、缩进语法-sass"><span><strong>二、缩进语法（Sass）</strong></span></a></h2><ul><li><strong>文件扩展名</strong>：<code>.sass</code></li><li><strong>语法风格</strong>：使用缩进代替 <code>{}</code> 和 <code>;</code>，代码更简洁。</li><li><strong>特点</strong>：适合追求简洁的开发者，但对缩进敏感（类似 Python）。</li></ul><div class="language-sass line-numbers-mode" data-ext="sass" data-title="sass"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">变量定义</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">#333</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">嵌套结构</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">.container</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">padding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">20</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">px</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">.title</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">color</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$primary-color</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">:hover</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text-decoration</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">underline</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">混合宏（Mixin）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">flex-center</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">display</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">flex</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">justify-content</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">center</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">align-items</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">center</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">使用</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Mixin</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">.box</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">+</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">flex-center</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、主要区别" tabindex="-1"><a class="header-anchor" href="#三、主要区别"><span><strong>三、主要区别</strong></span></a></h2><table><thead><tr><th>特性</th><th>SCSS</th><th>缩进语法（Sass）</th></tr></thead><tbody><tr><td><strong>文件扩展名</strong></td><td><code>.scss</code></td><td><code>.sass</code></td></tr><tr><td><strong>括号和分号</strong></td><td>使用 <code>{}</code> 和 <code>;</code></td><td>依赖缩进，无需 <code>{}</code> 和 <code>;</code></td></tr><tr><td><strong>兼容性</strong></td><td>完全兼容 CSS</td><td>不直接兼容 CSS</td></tr><tr><td><strong>代码风格</strong></td><td>类似传统 CSS</td><td>简洁，类似 Python/YAML</td></tr><tr><td><strong>混合宏定义</strong></td><td><code>@mixin name { ... }</code></td><td><code>=name ...</code></td></tr><tr><td><strong>混合宏调用</strong></td><td><code>@include name</code></td><td><code>+name</code></td></tr><tr><td><strong>变量赋值符</strong></td><td><code>$var: value;</code></td><td><code>$var: value</code>（无分号）</td></tr></tbody></table><hr><h2 id="四、如何选择" tabindex="-1"><a class="header-anchor" href="#四、如何选择"><span><strong>四、如何选择？</strong></span></a></h2><ul><li><strong>SCSS</strong>：推荐大多数项目使用，尤其团队协作时，语法更直观且兼容 CSS。</li><li><strong>缩进语法</strong>：适合个人项目或追求极简风格的开发者。</li></ul><p>两种语法可以互相转换（通过工具如 <code>sass-convert</code>），最终编译结果相同。根据团队习惯或项目需求选择即可！</p>`,13)]))}const h=a(l,[["render",e],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Sass/j0b0zqh8/","title":"两种风格 .sass 和 .scss","lang":"zh-CN","frontmatter":{"title":"两种风格 .sass 和 .scss","createTime":"2025/04/03 18:25:59","permalink":"/Sass/j0b0zqh8/"},"headers":[],"readingTime":{"minutes":1.48,"words":445},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Sass/1.快速入门/11.两种风格 .sass 和 .scss.md"}');export{h as comp,d as data};
