import{_ as e,c as r,b as a,d as t,o as l}from"./app-CtJ5l8zv.js";const s={};function i(c,n){return l(),r("div",null,n[0]||(n[0]=[a("p",null,[t("在 JavaScript 中，"),a("strong",null,"JSON 对象实际上是存储在堆中的。")],-1),a("p",null,[t("JSON（JavaScript Object Notation）是"),a("strong",null,"一种用于数据交换的文本格式，通常用于表示对象和数据结构"),t("。在 JavaScript 中，可以通过解析 JSON 字符串或使用字面量语法来创建 JSON 对象。")],-1),a("p",null,"JSON 对象是一种引用类型的数据，它的存储位置是在堆中。当创建一个 JSON 对象时，实际上是在堆中分配内存来存储该对象的属性和值。",-1),a("p",null,"在栈中，只会存储对 JSON 对象的引用。这意味着变量或属性存储的是指向 JSON 对象的指针，而不是实际的对象本身。实际的 JSON 对象包含的数据会在堆中进行存储。",-1),a("p",null,"需要注意的是，当引用 JSON 对象的变量超出作用域或被赋予新的值时，对 JSON 对象本身的引用会被销毁。但是，如果有其它引用依然指向该 JSON 对象，它仍然会在堆中存在，直到所有引用都被销毁，才会由垃圾回收机制回收相应的内存空间。",-1),a("p",null,[a("strong",null,"因此，JSON 对象本身是存储在堆中的，而对它的引用存储在栈中。")],-1)]))}const m=e(s,[["render",i],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/WebBasic/qlmncb7x/","title":"在 JavaScript 中，JSON 对象是存储在堆还是栈中的？","lang":"zh-CN","frontmatter":{"title":"在 JavaScript 中，JSON 对象是存储在堆还是栈中的？","createTime":"2025/03/15 13:21:27","permalink":"/WebBasic/qlmncb7x/"},"headers":[],"readingTime":{"minutes":1.12,"words":336},"git":{"updatedTime":1745060350000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"前端叨逼叨/在 JavaScript 中，JSON 对象是存储在堆还是栈中的？.md"}');export{m as comp,p as data};
