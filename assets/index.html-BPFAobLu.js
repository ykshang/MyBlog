import{_ as a,c as i,a as n,o as p}from"./app-CtJ5l8zv.js";const e={};function l(t,s){return p(),i("div",null,s[0]||(s[0]=[n(`<p>ES6 主要有 5 种方法可以遍历对象的属性。</p><h2 id="_1、for-in" tabindex="-1"><a class="header-anchor" href="#_1、for-in"><span>1、for...in</span></a></h2><p>循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。</p><h2 id="_2、object-keys-object-values-object-entries" tabindex="-1"><a class="header-anchor" href="#_2、object-keys-object-values-object-entries"><span>2、Object.keys()，Object.values()，Object.entries()</span></a></h2><p>返回一个数组，包括对象的（不含继承的）所有可枚举属性（不含 Symbol 属性）的属性或键值。</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">三种返回值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">keys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[&#39;a&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;b&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;c&#39;]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">values</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[1,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">2,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">3]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">entries</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[[&#39;a&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">1],</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[&#39;b&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">2],</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[&#39;c&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">3]]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、object-getownpropertynames-obj" tabindex="-1"><a class="header-anchor" href="#_3、object-getownpropertynames-obj"><span>3、Object.getOwnPropertyNames(obj)</span></a></h2><p>返回一个数组，包含对象的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。</p><h2 id="_4、object-getownpropertysymbols-obj" tabindex="-1"><a class="header-anchor" href="#_4、object-getownpropertysymbols-obj"><span>4、Object.getOwnPropertySymbols(obj)</span></a></h2><p>返回一个数组，只包含对象的所有 Symbol 类型的键名。</p><h2 id="_5、reflect-ownkeys-obj" tabindex="-1"><a class="header-anchor" href="#_5、reflect-ownkeys-obj"><span>5、Reflect.ownKeys(obj)</span></a></h2><p>返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。</p><p>以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。</p><ul><li>首先遍历所有数值键，按照数值升序排列。</li><li>其次遍历所有字符串键，按照加入时间升序排列。</li><li>最后遍历所有 Symbol 键，按照加入时间升序排列。</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Reflect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ownKeys</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Symbol</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()]:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">[&#39;2&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;10&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;b&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;a&#39;,</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Symbol()]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Reflect.ownKeys</code>方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性<code>2</code>和<code>10</code>，其次是字符串属性<code>b</code>和<code>a</code>，最后是 Symbol 属性。</p>`,16)]))}const k=a(e,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/Javascript/4uzgvjvy/","title":"对象的遍历","lang":"zh-CN","frontmatter":{"title":"对象的遍历","createTime":"2025/03/12 17:19:50","permalink":"/Javascript/4uzgvjvy/"},"headers":[],"readingTime":{"minutes":1.33,"words":399},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Javascript/1.基础知识/11.对象的遍历.md"}');export{k as comp,c as data};
