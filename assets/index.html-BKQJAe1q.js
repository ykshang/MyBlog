import{_ as e,c as t,a as n,o as i}from"./app-CtJ5l8zv.js";const r={};function s(o,a){return i(),t("div",null,a[0]||(a[0]=[n('<blockquote><p>这个问题主要考验的知识点是：前端假分页、滑动加载、虚拟列表</p></blockquote><p>假如后端一次性返回了几万条数据，页面直接渲染的话，会导致页面卡顿，影响用户体验。为了避免这种情况，我们可以采用以下几种方式来处理：</p><h2 id="_1、前端假分页" tabindex="-1"><a class="header-anchor" href="#_1、前端假分页"><span>1、前端假分页</span></a></h2><p>前端假分页是指在前端页面中，通过对后端返回的数据进行分页处理，从而实现对数据的分页展示。前端假分页的实现方式有很多种，其中最常见的方式是通过在前端页面中添加分页控件，例如页码、每页显示条数等，然后根据用户的操作来获取相应的数据。</p><h2 id="_2、滑动加载、懒加载" tabindex="-1"><a class="header-anchor" href="#_2、滑动加载、懒加载"><span>2、滑动加载、懒加载</span></a></h2><p>滑动加载是指在前端页面中，当用户滚动到页面底部时，自动加载更多的数据。滑动加载的实现方式有很多种，其中最常见的方式是通过监听页面滚动事件，然后根据用户的操作来判断是否需要加载更多的数据。</p><h2 id="_3、虚拟列表" tabindex="-1"><a class="header-anchor" href="#_3、虚拟列表"><span>3、虚拟列表</span></a></h2><p>虚拟列表是指在前端页面中，只渲染当前可见区域的数据，然后根据用户的操作来动态加载更多的数据。虚拟列表的实现方式有很多种，我们可以使用第三方库来实现，例如 react-window、vue-virtual-scroll-list 等。</p><h2 id="_4、其他性能优化体验" tabindex="-1"><a class="header-anchor" href="#_4、其他性能优化体验"><span>4、其他性能优化体验</span></a></h2><p>除了以上几种方式，还有其他一些性能优化体验，我们还可以从以下几个角度来优化体验：</p><ul><li>优化接口请求，改为分页，或者分多个接口返回。</li><li>使用 web worker 来处理比较耗费时间的数据，整体提高页面的性能。</li><li>如果数据涉及到多个区域。我们可以对数据分片，分批处理渲染。</li></ul>',11)]))}const c=e(r,[["render",s],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/article/7i5iowe7/","title":"假如后端一次性返回了几万条数据，你会怎么处理","lang":"zh-CN","frontmatter":{"title":"假如后端一次性返回了几万条数据，你会怎么处理","createTime":"2025/03/27 17:34:14","permalink":"/article/7i5iowe7/","tags":["性能优化","前端"]},"headers":[],"readingTime":{"minutes":1.76,"words":527},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"前端叨逼叨/假如页面一下子生成了几万条数据，你会怎么处理.md","categoryList":[{"id":"174620","sort":10006,"name":"前端叨逼叨"}]}');export{c as comp,h as data};
