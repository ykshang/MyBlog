import{_ as l,c as e,a as i,b as a,d as n,e as h,f as t,g as k,o as c}from"./app-CtJ5l8zv.js";const d={},r={id:"_3、并行执行-不推荐",tabindex:"-1"},g={class:"header-anchor",href:"#_3、并行执行-不推荐"};function y(A,s){const p=k("badge");return c(),e("div",null,[s[2]||(s[2]=i(`<p>在 Koa 中，关于中间件的执行顺序和 <code>next()</code> 的调用，有以下关键点需要理解：</p><h2 id="一、中间件不一定要等待当前操作完成才调用-next" tabindex="-1"><a class="header-anchor" href="#一、中间件不一定要等待当前操作完成才调用-next"><span>一、中间件不一定要等待当前操作完成才调用 <code>next()</code></span></a></h2><p>你完全可以在当前中间件中的异步操作完成<strong>之前</strong>就调用 <code>next()</code>，让后续中间件先执行。这是 Koa 中间件的一个重要特性，称为&quot;<strong>下游</strong>&quot;执行。</p><div class="language-javascript line-numbers-mode has-collapsed collapsed" data-ext="javascript" data-title="javascript" style="--vp-collapsed-lines:10;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">开始</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">不等待，直接进入下一个中间件</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">这里会在所有后续中间件完成后才执行（上游）</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">结束</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2.</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">开始</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">someAsyncOperation</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">长时间异步操作</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2.</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">结束</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>1.</span><span class="space"> </span><span>开始</span></span>
<span class="line"><span>2.</span><span class="space"> </span><span>开始</span></span>
<span class="line"><span>(异步操作等待...)</span></span>
<span class="line"><span>2.</span><span class="space"> </span><span>结束</span></span>
<span class="line"><span>1.</span><span class="space"> </span><span>结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、控制执行流程的三种模式" tabindex="-1"><a class="header-anchor" href="#二、控制执行流程的三种模式"><span>二、控制执行流程的三种模式</span></a></h2><h3 id="_1、先执行当前逻辑-再进入下一个中间件" tabindex="-1"><a class="header-anchor" href="#_1、先执行当前逻辑-再进入下一个中间件"><span>1、先执行当前逻辑，再进入下一个中间件</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">doSomething</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">先完成自己的任务</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">再进入下一个中间件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、先进入下一个中间件-再执行当前逻辑" tabindex="-1"><a class="header-anchor" href="#_2、先进入下一个中间件-再执行当前逻辑"><span>2、先进入下一个中间件，再执行当前逻辑</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">先让后续中间件执行</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">doSomething</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">再执行自己的收尾工作</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)),a("h4",r,[a("a",g,[a("span",null,[s[1]||(s[1]=n("3、并行执行 ")),h(p,{type:"danger"},{default:t(()=>s[0]||(s[0]=[n("不推荐")])),_:1})])])]),s[3]||(s[3]=i(`<p>不推荐这样去操作，比较难控制，容易让逻辑变复杂。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">promise1</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">doSomething</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">promise2</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">注意这种用法需要谨慎</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">all</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">([</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">promise1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">promise2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、典型应用场景" tabindex="-1"><a class="header-anchor" href="#三、典型应用场景"><span>三、典型应用场景</span></a></h2><h3 id="_1、日志记录中间件" tabindex="-1"><a class="header-anchor" href="#_1、日志记录中间件"><span>1、日志记录中间件</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">start</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">now</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">先让请求处理完成</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">duration</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">now</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">start</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">method</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">duration</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ms</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、提前响应" tabindex="-1"><a class="header-anchor" href="#_2、提前响应"><span>2、提前响应</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">path</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">===</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/healthcheck</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">body</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OK</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">直接响应，不调用next()</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、重要注意事项" tabindex="-1"><a class="header-anchor" href="#四、重要注意事项"><span>四、重要注意事项</span></a></h2><ol><li><p><strong>如果不调用 <code>next()</code></strong>，后续中间件将不会执行</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">body</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">拦截响应</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">不调用next，后续中间件被跳过</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>调用但不等待 <code>next()</code></strong> 可能导致意外行为：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">没有await，后续中间件与当前代码并行执行</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">这可能先于后续中间件执行</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>错误处理</strong>：必须在异步操作中使用 try-catch</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">try</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">catch</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">err</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">处理错误</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结"><span>五、总结</span></a></h2><p>Koa 中间件的 <code>next()</code> 调用时机非常灵活：</p><ul><li>可以<strong>立即调用</strong>（不等待当前操作完成）</li><li>可以<strong>后期调用</strong>（等待某些条件满足）</li><li>甚至可以<strong>选择性调用</strong>（根据条件决定是否进入后续中间件）</li></ul><p>这种灵活性使得你可以实现各种复杂的请求处理流程，如：</p><ul><li>前置验证</li><li>请求计时</li><li>条件管道</li><li>并行处理等</li></ul>`,14))])}const o=l(d,[["render",y],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/Koa/4wvnmaew/","title":"关于异步中间件的处理","lang":"zh-CN","frontmatter":{"title":"关于异步中间件的处理","createTime":"2025/03/30 22:47:58","permalink":"/Koa/4wvnmaew/"},"headers":[],"readingTime":{"minutes":2.31,"words":693},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Koa/1.学习笔记/3.关于异步中间件的处理.md"}');export{o as comp,v as data};
