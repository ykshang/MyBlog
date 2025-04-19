import{_ as e,c as t,a as n,o as i}from"./app-CtJ5l8zv.js";const s={};function o(r,a){return i(),t("div",null,a[0]||(a[0]=[n('<p><strong>缓存验证是指浏览器在使用缓存副本之前，与服务器进行通信以验证缓存的有效性的过程。它使用了一种称为协商缓存的机制来判断是否可以使用缓存副本。</strong></p><p>以下是缓存验证的过程：</p><h4 id="_1、浏览器发送请求" tabindex="-1"><a class="header-anchor" href="#_1、浏览器发送请求"><span>1、浏览器发送请求</span></a></h4><p>浏览器向服务器发送一个请求，包含请求的资源的 URL、请求头和条件字段。</p><h4 id="_2、服务器处理请求" tabindex="-1"><a class="header-anchor" href="#_2、服务器处理请求"><span>2、服务器处理请求</span></a></h4><p>服务器接收到请求后，会检查请求中的条件字段，这些字段包括 If-None-Match（用于比较 ETag）和 If-Modified-Since（用于比较 Last-Modified）。</p><h4 id="_3、服务器验证缓存" tabindex="-1"><a class="header-anchor" href="#_3、服务器验证缓存"><span>3、服务器验证缓存</span></a></h4><p>服务器根据条件字段的值与当前资源的相关信息进行比较，判断缓存是否有效。有两种情况：</p><ol><li><strong>如果资源未修改：</strong> 如果服务器判断资源未发生变化（例如，ETag 匹配或 Last-Modified 表示的最后修改时间与缓存副本相同），服务器返回状态码 304 Not Modified，表示资源未修改，并且不返回资源的内容。</li><li><strong>如果资源已修改：</strong> 如果服务器判断资源已经发生了变化（例如，ETag 不匹配或 Last-Modified 表示的最后修改时间与缓存副本不同），服务器会返回状态码 200 OK，并返回新的资源内容和新的响应头信息。</li></ol><h4 id="_4、浏览器处理响应" tabindex="-1"><a class="header-anchor" href="#_4、浏览器处理响应"><span>4、浏览器处理响应</span></a></h4><p>浏览器接收到服务器的响应后，会进行相应处理：</p><ol><li><strong>如果响应状态码是 304 Not Modified：</strong> 浏览器说明缓存仍然有效，可以直接使用缓存副本，并从缓存中获取资源。</li><li><strong>如果响应状态码是 200 OK：</strong> 浏览器说明缓存已失效或不存在，需要更新缓存，并从响应中获取新的资源和响应头信息。</li></ol><p>通过协商缓存的机制，浏览器能够准确地判断并使用缓存副本，以减少不必要的网络传输和提高性能。这种机制使用了 ETag（Entity Tag）和 Last-Modified（最后修改时间）等条件字段来进行资源的比较和验证。如果缓存有效，服务器返回 304 Not Modified，浏览器直接从缓存读取资源；如果缓存失效，服务器返回新的资源内容供浏览器更新缓存。</p>',13)]))}const g=e(s,[["render",o],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/WebBasic/kngv5wg6/","title":"解释一下缓存验证的过程是如何进行的（即协商缓存的机制）？","lang":"zh-CN","frontmatter":{"title":"解释一下缓存验证的过程是如何进行的（即协商缓存的机制）？","createTime":"2025/03/15 13:30:19","permalink":"/WebBasic/kngv5wg6/"},"headers":[],"readingTime":{"minutes":2.23,"words":668},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/WebBasic/2.浏览器相关/16.解释一下缓存验证的过程是如何进行的（即协商缓存的机制）？.md"}');export{g as comp,h as data};
