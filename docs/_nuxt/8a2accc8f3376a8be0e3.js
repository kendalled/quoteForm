(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(t,e,l){var content=l(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(29).default)("7b8483af",content,!0,{sourceMap:!1})},176:function(t,e,l){"use strict";var o=l(167);l.n(o).a},177:function(t,e,l){(e=l(28)(!1)).push([t.i,".bg{background-color:#edf2f7;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath fill='%23bdbdbd' fill-opacity='.37' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'/%3E%3C/svg%3E\")}html{scroll-behavior:smooth}main>nav{position:-webkit-sticky;position:sticky;top:2rem;align-self:start}.section-nav li.active>a{color:#333;font-weight:500}.section-nav{padding-left:0}.section-nav a{text-decoration:none;display:block;padding:.125rem 0;color:#888;-webkit-transition:all 50ms ease-in-out;transition:all 50ms ease-in-out}.section-nav a:focus,.section-nav a:hover{color:#666}*{box-sizing:border-box}body,html{background:#fff}body{font-family:Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}ol,ul{list-style:none;margin:0;padding:0}li{margin:0 0 0 1rem;font-size:1.1rem}h1{font-weight:300}main{display:grid;grid-template-columns:1fr 15em;max-width:100em;width:90%;margin:0 auto}",""]),t.exports=e},184:function(t,e,l){"use strict";l.r(e);var o={name:"Selectable",data:function(){return{selected:{title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png"},imgs:[{title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{title:"Soft Enamel",src:"https://lapelpinsandcoins.com/images/quote/softenamel.png",pros:["Great for intricate designs.","Enamel fill gives the design texture.","Most cost effective production method."],cons:["Colors cannot touch, meaning no gradients."]},{title:"Cloisonné",src:"https://lapelpinsandcoins.com/images/quote/cloisonne.png",pros:["Great for a professional look.","An enamel fill reults in your design being smooth to the touch."],cons:["Cloisonne bad trait goes here."]},{title:"Silk Screen",src:"https://lapelpinsandcoins.com/images/quote/silkscreen.png",pros:["Silk Screen good","Silk screen good2.","silk screen good 3."],cons:["silk screen bad."]},{title:"Offset Printed",src:"https://lapelpinsandcoins.com/images/quote/offset2.png",pros:["offset good 1","offset good 2"],cons:["offset bad 1"]}]}},methods:{selectImg:function(img){this.selected=img},isOpen:function(img){return img.src===this.selected.src}}},n=l(19),r={name:"TestScroll",components:{Selectable:Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col w-full py-4 rounded-t bg-blue-900 justify-center"},[l("div",{staticClass:"flex w-full h-auto"},[l("p",{staticClass:"text-3xl text-gray-100 font-semibold px-6"},[t._v("\n      "+t._s(t.selected.title)+"\n    ")])]),t._v(" "),l("img",{staticClass:"w-48 h-auto mx-auto rounded-full shadow",attrs:{src:t.selected.src}}),t._v(" "),l("div",{staticClass:"flex w-full h-full justify-center mt-6"},t._l(t.imgs,(function(img,i){return l("img",{key:i,staticClass:"w-20 h-auto mx-3 rounded-full border-4 cursor-pointer",class:[t.isOpen(img)?"border-white":"border-transparent"],attrs:{src:img.src},on:{click:function(e){return t.selectImg(img)}}})})),0)])}),[],!1,null,null,null).exports},data:function(){return{titles:["Production","Plating","sizing","Backing"]}},mounted:function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target.getAttribute("id");t.intersectionRatio>0?document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.add("active"):document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.remove("active")}))}));document.querySelectorAll("section[id]").forEach((function(section){t.observe(section)}))}},c=(l(176),{components:{TestScroll:Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-screen h-auto bg-gray-300 py-12"},[l("main",{staticClass:"w-full flex"},[l("div",{staticClass:"w-auto ml-24 mr-8 px-12 py-12 bg-gray-100 rounded shadow"},[l("h1",{staticClass:"text-3xl font-bold text-gray-900 mb-4 px-4"},[t._v("\n        Free Quote Request\n      ")]),t._v(" "),t._l(t.titles,(function(title,i){return l("section",{key:i,staticClass:"border-2 rounded flex mb-24 h-auto pt-6 pb-8",class:[0===i?"mt-8":"mt-56"],attrs:{id:title}},[l("div",{staticClass:"titleWords w-1/3 bg-transparent pl-4"},[l("div",{staticClass:"flex w-full h-auto"},[l("h2",{staticClass:"text-blue-700 font-bold text-2xl w-full"},[l("span",[t._v(t._s(title)+" Method")])])]),t._v(" "),l("p",{staticClass:"text-base text-gray-700 mt-4"},[t._v("\n            Production method is the first step in creating a great custom lapel pin. Simply put, each of the production methods offers various advantages over the others. If you're feeling stuck, Soft Enamel is always a versatile and cost effective choice!\n          ")]),t._v(" "),l("p",{staticClass:"text-base text-gray-700 mt-4"},[t._v("\n            Select any of the varieties in the dialog to the right. We have listed the unique pros and cons of each choice below. You can also zoom to see the pin's material closer.\n          ")]),t._v(" "),t._m(0,!0)]),t._v(" "),l("section",{staticClass:"section-content w-full px-12"},[l("Selectable"),t._v(" "),l("div",{staticClass:"bg-white shadow-lg flex w-full h-auto rounded-b"},[l("div",{staticClass:"prosCons shadow-lg flex flex-col w-full rounded-bl"},[l("h4",{staticClass:"px-12 ml-1 font-bold text-sm text-gray-700 -mb-6 mt-8"},[t._v("\n                PROS\n              ")]),t._v(" "),l("ul",{staticClass:"list-reset text-black p-8 text-grey-darker rounded"},[l("li",{staticClass:"flex items-center mb-3 text-base"},[l("svg",{staticClass:"flex-none w-8 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"green"}},[l("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n                  Great for intricate designs.\n                ")]),t._v(" "),l("li",{staticClass:"flex items-center mb-3 text-base"},[l("svg",{staticClass:"flex-none w-8 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"green"}},[l("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n                  Enamel fill gives the design texture.\n                ")]),t._v(" "),l("li",{staticClass:"flex items-center mb-3 text-base"},[l("svg",{staticClass:"flex-none w-8 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"green"}},[l("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n                  Most cost effective production method.\n                ")])]),t._v(" "),l("h4",{staticClass:"px-12 ml-1 font-bold text-sm text-gray-700 -mb-6"},[t._v("\n                CONS\n              ")]),t._v(" "),l("ul",{staticClass:"list-reset text-black p-8 text-grey-darker rounded"},[l("li",{staticClass:"flex items-center mb-3 text-base"},[l("svg",{staticClass:"flex-none w-8 mr-2 text-red-500 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n                  Colors cannot touch, meaning no gradients.\n                ")])])])])],1)])})),t._v(" "),t._m(1)],2),t._v(" "),l("nav",{staticClass:"section-nav w-auto mr-56 py-4 border-l-2 border-white ml-auto"},[l("ol",[t._l(t.titles,(function(title,e){return l("li",{key:e},[l("a",{attrs:{href:"#"+title}},[t._v(t._s(title))])])})),t._v(" "),t._m(2)],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"selectBtnCol flex items-end justify-center mt-6 w-full"},[e("button",{staticClass:"mb-10 transition-colors bg-blue-500 text-white font-semibold hover:bg-blue-700 py-2 border border-blue-500 hover:border-transparent rounded w-full"},[this._v("\n              Select Option\n            ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{attrs:{id:"Details"}},[l("h2",[t._v("Details")]),t._v(" "),l("section",{attrs:{id:"Details--root"}},[l("h3",[t._v("Root")]),t._v(" "),l("p",[t._v("…")])]),t._v(" "),l("section",{attrs:{id:"Details--cities-overview"}},[l("h3",[t._v("Cities Overview")]),t._v(" "),l("p",[t._v("…")])]),t._v(" "),l("section",{attrs:{id:"Details--city-detail"}},[l("h3",[t._v("City Detail")]),t._v(" "),l("p",[t._v("…")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#Details"}},[this._v("Details")]),this._v(" "),e("ul",[e("li",{},[e("a",{attrs:{href:"#Details--root"}},[this._v("Root")])]),this._v(" "),e("li",{},[e("a",{attrs:{href:"#Details--cities-overview"}},[this._v("Cities Overview")])]),this._v(" "),e("li",{},[e("a",{attrs:{href:"#Details--city-detail"}},[this._v("City Detail")])])])])}],!1,null,null,null).exports}}),d=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-screen h-auto"},[e("TestScroll")],1)}),[],!1,null,null,null);e.default=d.exports}}]);