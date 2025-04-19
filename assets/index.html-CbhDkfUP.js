import{r as y,_ as o,c as m,b as s,e as l,a as D,f as p,g as e,o as x,d as a}from"./app-CtJ5l8zv.js";const B=y({jsLib:[],cssLib:[],script:"",css:"",html:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Max-content and Min-content Demo</title>
    <style>
      .container {
        display: flex;
        justify-content: space-around;
        gap: 20px;
      }

      .box {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
        background: #8e96aa24;
      }

      .max-content {
        width: max-content;
      }

      .min-content {
        width: min-content;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="box max-content">
        这是一个使用 max-content
        的盒子。它会根据内容的最大宽度来确定自身的宽度。这里有一较长的文本，用于展示max-content
        的效果。
      </div>
      <div class="box min-content">
        这是一个使用 min-content
        的盒子。
      </div>
    </div>
  </body>
</html>`}),u="/MyBlog/assets/css11-DearVYoz.png",A="/MyBlog/assets/css12-BF-dJWoW.png",b="/MyBlog/assets/css14-CZFn7RwQ.png",v="/MyBlog/assets/css15-nfUEmYqY.png",C="/MyBlog/assets/css16-Bjx2jjZb.png",E="/MyBlog/assets/css17-Dj3s0iWF.png",_="/MyBlog/assets/css18-DJ1J91l7.png",f="/MyBlog/assets/css19-DYYQSc00.png",F={__name:"index.html",setup(c,{expose:i}){i();const n={get DemoDemo1_html(){return B}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function w(c,i,n,t,M,T){const h=e("VPIcon"),k=e("CodeTabs"),d=e("VPDemoNormal");return x(),m("div",null,[i[2]||(i[2]=s("h2",{id:"一、介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#一、介绍"},[s("span",null,"一、介绍")])],-1)),i[3]||(i[3]=s("ul",null,[s("li",null,"max-content 根据内容的最大宽度来确定自身的宽度"),s("li",null,"min-content 根据内容的最小宽度来确定自身的宽度")],-1)),l(d,{config:t.DemoDemo1_html,title:"示例",desc:"max-content / min-content 的影响"},{default:p(()=>[l(k,{id:"0",data:[{id:"HTML"}]},{title0:p(({value:r,isActive:g})=>[l(h,{name:"vscode-icons:file-type-html"}),i[0]||(i[0]=s("span",null,"HTML",-1))]),tab0:p(({value:r,isActive:g})=>i[1]||(i[1]=[s("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<!"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"DOCTYPE"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"html"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"html"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"lang"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"en"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"head"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"meta"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"charset"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"UTF-8"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"/>")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"meta"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"name"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"viewport"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"content"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"width=device-width,"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"initial-scale=1.0"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"/>")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"Max-content"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"and"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"Min-content"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"Demo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"style"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"display"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"flex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"justify-content"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"space-around"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"gap"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"box"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"border"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"solid"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"#"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"ccc"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"padding"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"margin-bottom"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"background"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"#"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"8e96aa24"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"max-content"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"width"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"max-content"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"min-content"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"width"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"min-content"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"style"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"head"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"body"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"class"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"container"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"class"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"box"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"max-content"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"这是一个使用"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"max-content")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"的盒子。它会根据内容的最大宽度来确定自身的宽度。这里有一较长的文本，用于展示max-content")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"的效果。")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"class"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"box"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"min-content"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"这是一个使用"),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"min-content")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"的盒子。")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{class:"space"}," "),s("span",{class:"space"}," "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"body"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"html"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),_:1},8,["config"]),i[4]||(i[4]=D('<h2 id="二、如何影响的" tabindex="-1"><a class="header-anchor" href="#二、如何影响的"><span>二、如何影响的</span></a></h2><h3 id="_1、仅设置-display-flex" tabindex="-1"><a class="header-anchor" href="#_1、仅设置-display-flex"><span>1、仅设置 display: flex</span></a></h3><ul><li>不存在 width 和 flex-basis 的时候，元素的宽度应该是受 max-content 影响的</li></ul><p><img src="'+u+'" alt="max-content" width="1208" height="205"></p><ul><li>某个元素设置了 width 和 flex-basis 的时候，剩余元素的宽度受 max-content 影响的</li></ul><p><img src="'+A+'" alt="max-content" width="1209" height="207"></p><h3 id="_2、设置-display-flex-和-flex-1" tabindex="-1"><a class="header-anchor" href="#_2、设置-display-flex-和-flex-1"><span>2、设置 display: flex 和 flex: 1</span></a></h3><p>假设容器的宽度为 1000px，且在设置成 flex 属性前,有 5 个元素均设置了 flex: 1，那么一般情况他们的伸缩比例是相同的，且强制设置其在主轴上的初始长度为 0。</p><ol><li><p>这几个元素在主轴的上的宽度均小于平均宽度（200px）。那么分配剩余空间后，这几个元素的宽度（200px）相等</p><p><img src="'+b+'" alt="max-content" width="1210" height="211"></p></li><li><p>这几个元素有大于平均宽度（200px）的，有小于平均宽度（200px）的，但是加起来不大于 1000px，此时存在：</p><ul><li><p>当所有的元素 min-content 小于等于平均宽度（200px）的时候，宽度平分，最终每一个元素都是平均宽度（200px）；</p><p><img src="'+v+'" alt="max-content" width="1178" height="211"></p></li><li><p>当有元素 min-content 大于平均宽度（200px）的时候，那么它的宽度最终为 min-content，然后剩余的宽度有另外的元素平分。</p><p><img src="'+C+'" alt="max-content" width="1165" height="205"></p></li></ul></li><li><p>当这几个元素有大于平均宽度（200px），有小于平均宽度（200px）的，加起来大于 1000px，此时存在：</p><ul><li><p>当这几个元素的 min-content 均未大于平均宽度（200px），那么这几个元素平分后最终均为平均宽度（200px）；</p><p><img src="'+E+'" alt="max-content" width="1165" height="207"></p></li><li><p>当有的 min-content 大于平均宽度（200px），有的小于平均宽度（200px），总的加起来并未超过 1000px，那么 1000px 减去大于平均宽度（200px）的 min-content，剩下的元素平分后，宽度相等，大于平均宽度（200px）的元素宽度均为其各自的 min-content。如果这时候最终总宽度大于 1000px，会溢出。</p><p><img src="'+_+'" alt="max-content" width="1247" height="206"></p></li><li><p>如果所有的元素的 min-content 均大于平均宽度（200px），那么最终宽度为各自的 min-content，溢出。</p><p><img src="'+f+'" alt="max-content" width="1270" height="209"></p></li></ul></li></ol>',9))])}const V=o(F,[["render",w],["__file","index.html.vue"]]),j=JSON.parse('{"path":"/CSS/xgekvazg/","title":"外界影响因素 max-content / min-content","lang":"zh-CN","frontmatter":{"title":"外界影响因素 max-content / min-content","createTime":"2025/03/10 19:39:33","permalink":"/CSS/xgekvazg/"},"headers":[],"readingTime":{"minutes":1.98,"words":593},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/CSS/2. Flex 弹性布局/6.外界影响因素 max-content、min-content.md"}');export{V as comp,j as data};
