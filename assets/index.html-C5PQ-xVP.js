import{_ as a,c as n,a as s,o as r}from"./app-CtJ5l8zv.js";const c={};function o(d,e){return r(),n("div",null,e[0]||(e[0]=[s('<h2 id="一、常见策略" tabindex="-1"><a class="header-anchor" href="#一、常见策略"><span>一、常见策略</span></a></h2><p>优化 Webpack 的构建速度是一个常见的需求，下面是一些常见的优化策略：</p><h4 id="_1-文件排除-include-exclude" tabindex="-1"><a class="header-anchor" href="#_1-文件排除-include-exclude"><span>1. 文件排除 Include/Exclude：</span></a></h4><p>使用<code>Include/Exclude</code>来排除掉不需要编译的目录和文件，限制 loader 的作用范围。</p><h4 id="_2-开启多线程" tabindex="-1"><a class="header-anchor" href="#_2-开启多线程"><span>2. 开启多线程：</span></a></h4><p>可以使用<code>thread-loader</code>，利用多进程加快构建，但是进程的启动也是有时间开销的，需要根据代码规模酌情考虑。</p><h4 id="_3-利用持久化缓存加速二次打包" tabindex="-1"><a class="header-anchor" href="#_3-利用持久化缓存加速二次打包"><span>3. 利用持久化缓存加速二次打包：</span></a></h4><p>使用<code>cache</code>缓存<code>eslint</code>和<code>babel</code>的处理结果，加快二次打包的速度</p><h4 id="_4-关闭-devserver" tabindex="-1"><a class="header-anchor" href="#_4-关闭-devserver"><span>4. 关闭 devServer：</span></a></h4><p>生产环境不需要启用开发服务器</p><h4 id="_5-关闭或降低-sourcemap-策略的颗粒度" tabindex="-1"><a class="header-anchor" href="#_5-关闭或降低-sourcemap-策略的颗粒度"><span>5. 关闭或降低 sourceMap 策略的颗粒度：</span></a></h4><p>关闭或者使用低精度的 sourceMap 生成策略，打包速度更快</p><h4 id="_6-使用-oneof-精准匹配" tabindex="-1"><a class="header-anchor" href="#_6-使用-oneof-精准匹配"><span>6. 使用 oneOf( )精准匹配：</span></a></h4><p>oneOf 的作用就是，存在多个 loader 情况下，只要匹配到一个 rule，其他的 rule 就不执行了。我们可以通过修改正则匹配的规则，更加精准的去匹配文件，尽量使用一条 rule 来完成对匹配文件的处理。</p><h4 id="_7-模块解析-resolve-提高资源匹配速度" tabindex="-1"><a class="header-anchor" href="#_7-模块解析-resolve-提高资源匹配速度"><span>7. 模块解析 resolve，提高资源匹配速度：</span></a></h4><ul><li>使用<code>resolve.alias</code>配置别名，加快模块的查找速度；</li><li>使用<code>‌resolve.extensions</code>指定扩展名、指定查找的文件类型；</li><li>使用<code>‌resolve.modules</code>指定搜索目录。</li></ul><h2 id="二、注意" tabindex="-1"><a class="header-anchor" href="#二、注意"><span>二、注意</span></a></h2><div class="hint-container tip"><p class="hint-container-title">注意</p><p>开发环境下，强调的是开发体验，可以适当放宽构建速度的要求。</p><ul><li><strong>开启 devServer 和 热重载</strong> 可以有效提升开发的体验感。</li><li><code>sourceMap</code> 的颗粒度也可以适当的高一点。</li></ul></div>',18)]))}const i=a(c,[["render",o],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/article/1nxo855s/","title":"Webpack 如何提高构建速度？","lang":"zh-CN","frontmatter":{"title":"Webpack 如何提高构建速度？","createTime":"2025/03/15 14:24:59","permalink":"/article/1nxo855s/","tags":["Webpack","构建","前端工具","构建优化"]},"headers":[],"readingTime":{"minutes":1.44,"words":433},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"杂谈 Node.Js/Webpack 如何提高构建速度？.md","categoryList":[{"id":"b2f957","sort":10004,"name":"杂谈 Node.Js"}]}');export{i as comp,l as data};
