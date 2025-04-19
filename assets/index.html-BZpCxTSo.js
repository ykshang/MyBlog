import{_ as a,c as i,a as e,o as n}from"./app-CtJ5l8zv.js";const p={};function l(t,s){return n(),i("div",null,s[0]||(s[0]=[e(`<div class="hint-container tip"><p class="hint-container-title">总结</p><p>新版本 webpack 中，Tree Shaking 在<strong>生产环境下是默认开启</strong> 的，但是需要配合使用 <strong>ES 模块化</strong> （<code>export...import</code>）。</p><p>Tree Shaking 的过程中。通过<code>sideEffects</code>属性和<code>/*#__PURE__*/</code>注释，可以优化 Tree Shaking。确保文件中<strong>无副作用的未引用代码被安全移除</strong>。</p></div><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介"><span>一、简介</span></a></h2><p>Webpack 的 Tree Shaking 是一个用于 <strong>删除</strong> 代码中 <strong>未被引用的模块代码</strong> 的优化技术。</p><p>它可以显著减小打包后的文件体积，提高网页加载速度。</p><h2 id="二、配置" tabindex="-1"><a class="header-anchor" href="#二、配置"><span>二、配置</span></a></h2><p>要配置 Webpack 实现代码的无用代码剔除，需要确保一下几点：</p><h4 id="_1、使用-es6-模块化" tabindex="-1"><a class="header-anchor" href="#_1、使用-es6-模块化"><span>1、使用 ES6 模块化</span></a></h4><p>因为 Tree Shaking 只对 ES6 模块有效。</p><h4 id="_2、确保启用-tree-shaking-功能" tabindex="-1"><a class="header-anchor" href="#_2、确保启用-tree-shaking-功能"><span>2、确保启用 Tree Shaking 功能</span></a></h4><ul><li>在 Webpack 配置文件中，通过设置<code>mode</code>为<code>production</code>，启用 Webpack 的生产模式，此时 Tree Shaking 功能会 <strong>默认开启</strong>。</li><li>如果 Tree Shaking 功能没有开启，再配置<code>optimization.usedExports</code>的值为<code>true</code>，启用 Tree Shaking。</li></ul><h4 id="_3、配置-sideeffects-字段" tabindex="-1"><a class="header-anchor" href="#_3、配置-sideeffects-字段"><span>3、配置 sideEffects 字段</span></a></h4><ul><li>确保你的<code>package.json</code>文件中的<code>sideEffects</code>字段被正确配置。</li><li><code>sideEffects</code>字段告诉 Webpack 哪些文件是没有副作用的，可以进行 Tree Shaking。</li><li>如果你的应用是无任何副作用，可以将<code>sideEffects</code>设置为<code>&quot;sideEffects&quot;: false</code>。</li><li>如果你的应用使用了一些有副作用的模块（例如 CSS 文件），你需要将这些模块添加到<code>sideEffects</code>字段中。这样 Webpack 就不会将这些有副作用的模块进行 Tree Shaking。</li></ul><p>配置完成后，运行 Webpack 打包构建，未被引用的代码将会被删除，从而减小文件体积。</p><h2 id="三、文件的副作用" tabindex="-1"><a class="header-anchor" href="#三、文件的副作用"><span>三、文件的副作用</span></a></h2><h3 id="_1、什么是副作用" tabindex="-1"><a class="header-anchor" href="#_1、什么是副作用"><span>1、什么是副作用？</span></a></h3><p>在 Webpack 的 Tree Shaking 过程中，<strong>副作用</strong>指的是模块执行时除了导出值之外的其他行为。这些行为可能包括：</p><ol><li>修改全局变量</li><li>执行 I/O 操作</li><li>调用其他模块的函数</li><li>动态拼接路径引入的模块或者路由</li><li>特殊语法：<code>eval</code>、<code>with</code></li></ol><h3 id="_2、为什么副作用重要" tabindex="-1"><a class="header-anchor" href="#_2、为什么副作用重要"><span>2、为什么副作用重要？</span></a></h3><p>Tree Shaking 会移除未使用的代码，但如果模块有副作用，直接删除可能导致程序出错。因此，Webpack 需要谨慎处理这些模块。</p><h3 id="_3、如何处理" tabindex="-1"><a class="header-anchor" href="#_3、如何处理"><span>3、如何处理？</span></a></h3><h4 id="_3-1、sideeffects属性" tabindex="-1"><a class="header-anchor" href="#_3-1、sideeffects属性"><span>3.1、<code>sideEffects</code>属性</span></a></h4><p>在<code>package.json</code>中设置<code>sideEffects</code>为<code>false</code>，表示模块没有副作用，Webpack 可以安全移除未使用的导出。若部分文件有副作用，可指定文件路径数组。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sideEffects</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sideEffects</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./src/some-side-effectful-file.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2、-pure-注释" tabindex="-1"><a class="header-anchor" href="#_3-2、-pure-注释"><span>3.2、<code>/*#__PURE__*/</code>注释</span></a></h4><p>标记函数调用为无副作用，帮助 Webpack 识别可安全移除的代码。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">result</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/*#__PURE__*/</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">someFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4、示例" tabindex="-1"><a class="header-anchor" href="#_4、示例"><span>4、示例</span></a></h3><p>假设模块<code>math.js</code>如下：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">square</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cube</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cube</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">副作用</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只使用<code>square</code>，<code>cube</code>中的<code>console.log</code>是副作用，Webpack 可能不会移除<code>cube</code>。</p>`,32)]))}const c=a(p,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Webpack/wlrro4n1/","title":"什么是 Tree Shaking ？如何配置实现？","lang":"zh-CN","frontmatter":{"title":"什么是 Tree Shaking ？如何配置实现？","createTime":"2025/03/15 14:24:21","permalink":"/Webpack/wlrro4n1/"},"headers":[],"readingTime":{"minutes":2.47,"words":740},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Webpack/99.面试题/什么是 Tree Shaking ？如何配置实现？.md"}');export{c as comp,d as data};
