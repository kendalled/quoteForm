(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(t,e,o){"use strict";var n=o(3),r=o(15),l=o(21),c=o(100),d=o(56),f=o(10),h=o(38).f,m=o(57).f,v=o(8).f,x=o(161).trim,y=n.Number,w=y,_=y.prototype,k="Number"==l(o(73)(_)),C="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,l=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof y&&(k?f((function(){_.valueOf.call(o)})):"Number"!=l(o))?c(new w(S(e)),o,y):S(e)};for(var E,I=o(7)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),G=0;I.length>G;G++)r(w,E=I[G])&&!r(y,E)&&v(y,E,m(w,E));y.prototype=_,_.constructor=y,o(11)(n,"Number",y)}},161:function(t,e,o){var n=o(6),r=o(20),l=o(10),c=o(162),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,o){var r={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=r[t]=d?e(v):c[t];o&&(r[o]=f),n(n.P+n.F*d,"String",r)},v=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},162:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},167:function(t,e,o){var content=o(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("156323b0",content,!0,{sourceMap:!1})},168:function(t,e,o){var content=o(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("a3912fa0",content,!0,{sourceMap:!1})},169:function(t,e,o){var content=o(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("7b8483af",content,!0,{sourceMap:!1})},173:function(t,e,o){"use strict";var n={name:"QuoteHelper",computed:{quote:function(){return this.$store.state.quote}}},r=o(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ml-4 max-w-md w-full pt-4 pb-12 px-4 bg-white shadow rounded"},[o("h3",{staticClass:"text-center font-semibold w-full text-lg"},[t._v("\n    Your Quote (saved):\n  ")]),t._v(" "),t._l(t.quote,(function(e,n){return o("div",{key:n,staticClass:"w-full h-full border-b my-2"},[t._v("\n    "+t._s(e.title)+": "),o("span",{class:[e.selected?"text-green-600":"text-gray-600"]},[t._v(t._s(e.selected?e.selected:"none"))])])}))],2)}),[],!1,null,null,null);e.a=component.exports},179:function(t,e,o){"use strict";var n=o(167);o.n(n).a},180:function(t,e,o){(e=o(28)(!1)).push([t.i,"input[type=radio]+label span[data-v-006ad37e]{-webkit-transition:background .2s,-webkit-transform .2s;transition:background .2s,-webkit-transform .2s;transition:background .2s,transform .2s;transition:background .2s,transform .2s,-webkit-transform .2s}input[type=radio]+label:hover span[data-v-006ad37e],input[type=radio]+label span[data-v-006ad37e]:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}input[type=radio]:checked+label span[data-v-006ad37e]{background-color:#3490dc;box-shadow:inset 0 0 0 2px #fff}input[type=radio]:checked+label[data-v-006ad37e]{color:#3490dc}label[data-v-006ad37e]{margin:0 1rem;text-align:center}[type=radio]+label[data-v-006ad37e]{cursor:pointer}[type=radio]+label>img[data-v-006ad37e]{border-color:#aaa}[type=radio]:checked+label>img[data-v-006ad37e]{border-color:#2b6cb0;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}",""]),t.exports=e},181:function(t,e,o){"use strict";var n=o(168);o.n(n).a},182:function(t,e,o){(e=o(28)(!1)).push([t.i,".list-enter-active[data-v-4d9c3c28],.list-leave-active[data-v-4d9c3c28],.list-move[data-v-4d9c3c28]{-webkit-transition:.3s cubic-bezier(.59,.12,.34,.95);transition:.3s cubic-bezier(.59,.12,.34,.95);-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform;-webkit-backface-visibility:hidden;backface-visibility:hidden}.list-enter[data-v-4d9c3c28]{opacity:0;-webkit-transform:translateX(25px) scaleY(.5);transform:translateX(25px) scaleY(.5)}.list-enter-to[data-v-4d9c3c28]{opacity:1;-webkit-transform:translateX(0) scaleY(1);transform:translateX(0) scaleY(1)}.list-leave-active[data-v-4d9c3c28]{position:absolute}.list-leave-to[data-v-4d9c3c28]{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:center top;transform-origin:center top}",""]),t.exports=e},183:function(t,e,o){"use strict";var n=o(169);o.n(n).a},184:function(t,e,o){(e=o(28)(!1)).push([t.i,".bg{background-color:#edf2f7;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath fill='%23bdbdbd' fill-opacity='.37' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'/%3E%3C/svg%3E\")}html{scroll-behavior:smooth}main #sweg{position:-webkit-sticky;position:sticky;top:2rem;align-self:start}.section-nav li.active>a{color:#333;-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}.section-nav{padding-left:0}.section-nav a{text-decoration:none;display:block;padding:.125rem 0;color:#888;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.section-nav a:focus,.section-nav a:hover{color:#666}*{box-sizing:border-box}body,html{background:#fff}body{font-family:Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}ol,ul{list-style:none;margin:0;padding:0}li{margin:0 0 0 1rem;font-size:1.1rem}h1{font-weight:300}main{display:grid;grid-template-columns:1fr 15em;max-width:100em;width:90%;margin:0 auto}",""]),t.exports=e},191:function(t,e,o){"use strict";o.r(e);var n=o(173),r={name:"FormGrid"},l=o(19),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"w-full max-w-lg mx-auto mt-8"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[t._m(2),t._v(" "),o("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[o("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-state"}},[t._v("\n        State\n      ")]),t._v(" "),o("div",{staticClass:"relative"},[t._m(3),t._v(" "),o("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[o("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[o("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),t._m(4)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[this._v("\n        First Name\n      ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"grid-first-name",type:"text",placeholder:"Jane"}}),this._v(" "),e("p",{staticClass:"text-red-500 text-xs italic"},[this._v("\n        Please fill out this field.\n      ")])]),this._v(" "),e("div",{staticClass:"w-full md:w-1/2 px-3"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-last-name"}},[this._v("\n        Last Name\n      ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-last-name",type:"text",placeholder:"Doe"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[this._v("\n        Password\n      ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-password",type:"password",placeholder:"******************"}}),this._v(" "),e("p",{staticClass:"text-gray-600 text-xs italic"},[this._v("\n        Make it as long and as crazy as you'd like\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-city"}},[this._v("\n        City\n      ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-city",type:"text",placeholder:"Albuquerque"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("select",{staticClass:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-state"}},[e("option",[this._v("New Mexico")]),this._v(" "),e("option",[this._v("Missouri")]),this._v(" "),e("option",[this._v("Texas")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-zip"}},[this._v("\n        Zip\n      ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-zip",type:"text",placeholder:"90210"}})])}],!1,null,null,null).exports,d={name:"ContactSection",components:{FormGrid:c}},f=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"sectionBorder border-2 rounded flex mb-24 h-auto pt-6 pb-8"},[this._m(0),this._v(" "),e("FormGrid")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleWords w-1/3 bg-transparent pl-4"},[e("div",{staticClass:"flex w-full h-auto"},[e("h2",{staticClass:"text-blue-700 font-bold text-2xl w-full"},[e("span",[this._v("Contact Info")])])]),this._v(" "),e("p",{staticClass:"text-base text-gray-700 mt-4"},[this._v("\n      Contact info is the first step in creating a great custom lapel pin. Simply put, each of the production methods offers various advantages over the others. If you're feeling stuck, Soft Enamel is always a versatile and cost effective choice!\n    ")]),this._v(" "),e("p",{staticClass:"text-base text-gray-700 mt-4"},[this._v("\n      Select any of the varieties in the dialog to the right. We have listed the unique pros and cons of each choice below. You can also zoom to see the pin's material closer.\n    ")]),this._v(" "),e("div",{staticClass:"selectBtnCol flex items-end justify-center mt-6 w-full"},[e("button",{staticClass:"mb-10 transition-colors bg-blue-500 text-white font-semibold hover:bg-blue-700 py-2 border border-blue-500 hover:border-transparent rounded w-full"},[this._v("\n        Save Details\n      ")])])])}],!1,null,null,null).exports,h={name:"DesignSection",components:{FormGrid:c}},m=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"sectionBorder border-2 rounded flex mb-24 h-auto pt-6 pb-8"},[this._m(0),this._v(" "),e("FormGrid")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleWords w-1/3 bg-transparent pl-4"},[e("div",{staticClass:"flex w-full h-auto"},[e("h2",{staticClass:"text-blue-700 font-bold text-2xl w-full"},[e("span",[this._v("Design Info")])])]),this._v(" "),e("p",{staticClass:"text-base text-gray-700 mt-4"},[this._v("\n      Contact info is the first step in creating a great custom lapel pin. Simply put, each of the production methods offers various advantages over the others. If you're feeling stuck, Soft Enamel is always a versatile and cost effective choice!\n    ")]),this._v(" "),e("p",{staticClass:"text-base text-gray-700 mt-4"},[this._v("\n      Select any of the varieties in the dialog to the right. We have listed the unique pros and cons of each choice below. You can also zoom to see the pin's material closer.\n    ")]),this._v(" "),e("div",{staticClass:"selectBtnCol flex items-end justify-center mt-6 w-full"},[e("button",{staticClass:"mb-10 transition-colors bg-blue-500 text-white font-semibold hover:bg-blue-700 py-2 border border-blue-500 hover:border-transparent rounded w-full"},[this._v("\n        Save Details\n      ")])])])}],!1,null,null,null).exports,v=(o(160),{name:"IradioJunior",props:{title:{type:String,default:"production"},optionSet:{type:Number,default:0},choices:{type:Array,default:function(){return[{uid:0,title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"Soft Enamel",src:"https://lapelpinsandcoins.com/images/quote/softenamel.png",pros:["Great for intricate designs.","Enamel fill gives the design texture.","Most cost effective production method."],cons:["Colors cannot touch, meaning no gradients."]},{uid:2,title:"Cloisonné",src:"https://lapelpinsandcoins.com/images/quote/cloisonne.png",pros:["Great for a professional look.","An enamel fill reults in your design being smooth to the touch."],cons:["Cloisonne bad trait goes here."]},{uid:3,title:"Silk Screen",src:"https://lapelpinsandcoins.com/images/quote/silkscreen.png",pros:["Silk Screen good","Silk screen good2.","silk screen good 3."],cons:["silk screen bad."]},{uid:4,title:"Offset Printed",src:"https://lapelpinsandcoins.com/images/quote/offset2.png",pros:["offset good 1","offset good 2"],cons:["offset bad 1"]}]}}},data:function(){return{selected:{title:this.choices[0].title,src:this.choices[0].src,pros:["good 1","good 2"],cons:["bad 1"]}}},computed:{quote:function(){return this.$store.state.quote}},methods:{emitChoice:function(title,t,e,o){this.$emit("choice",title,t,e,o)},selectImg:function(img,title,t,e){this.selected.src=img,this.selected.title=title,this.selected.pros=t,this.selected.cons=e}}}),x=(o(179),Object(l.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-4 bg-gray-800 mx-auto rounded-t"},[o("div",{staticClass:"flex w-full h-auto"},[o("p",{staticClass:"text-2xl text-gray-100 font-semibold px-6"},[t._v("\n      "+t._s(t.selected.title)+"\n    ")])]),t._v(" "),o("img",{staticClass:"w-48 h-auto mx-auto rounded-full",attrs:{src:t.selected.src,draggable:"false"}}),t._v(" "),o("section",{staticClass:"flex justify-center"},t._l(t.choices,(function(e,i){return o("div",{key:i,staticClass:"scopewrapper mx-1"},[o("input",{attrs:{id:t.title+i.toString(),name:"test"+t.title,type:"radio",hidden:""},domProps:{value:e.title,checked:t.quote[t.optionSet].selected===e.title},on:{click:function(o){return t.emitChoice(t.title,e.title,e.pros,e.cons)}}}),t._v(" "),o("label",{staticClass:"cursor-pointer text-center text-xs font-semibold text-gray-100",staticStyle:{"font-size":".72rem"},attrs:{for:t.title+i.toString()},on:{click:function(o){return t.selectImg(e.src,e.title,e.pros,e.cons)}}},[o("img",{staticClass:"w-20 h-20 mb-2 rounded-full bg-white border-4 border-transparent",attrs:{src:e.src,draggable:"false"}}),t._v(" "),o("span",{staticClass:"w-4 h-4 -mb-1 inline-block mr-1 rounded-full border border-gray-600",class:[i+1===t.choices.length||"Antique Copper"===e.title?"ml-1":"ml-3"]}),t._v("\n        "+t._s(e.title))])])})),0)])}),[],!1,null,"006ad37e",null).exports),y={name:"Selectable",props:{choices:{type:Array,default:function(){return[{uid:0,title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"Soft Enamel",src:"https://lapelpinsandcoins.com/images/quote/softenamel.png",pros:["Great for intricate designs.","Enamel fill gives the design texture.","Most cost effective production method."],cons:["Colors cannot touch, meaning no gradients."]},{uid:2,title:"Cloisonné",src:"https://lapelpinsandcoins.com/images/quote/cloisonne.png",pros:["Great for a professional look.","An enamel fill reults in your design being smooth to the touch."],cons:["Cloisonne bad trait goes here."]},{uid:3,title:"Silk Screen",src:"https://lapelpinsandcoins.com/images/quote/silkscreen.png",pros:["Silk Screen good","Silk screen good2.","silk screen good 3."],cons:["silk screen bad."]},{uid:4,title:"Offset Printed",src:"https://lapelpinsandcoins.com/images/quote/offset2.png",pros:["offset good 1","offset good 2"],cons:["offset bad 1"]}]}}},data:function(){return{selected:{title:this.choices[0].title,src:this.choices[0].src}}},methods:{selectImg:function(img){this.selected=img},isOpen:function(img){return img.src===this.selected.src}}},w={name:"QuoteSection",components:{IradioJunior:x,Selectable:Object(l.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col w-full py-4 rounded-t justify-center",staticStyle:{background:"linear-gradient(#2D3748, #4A5568)"}},[o("div",{staticClass:"flex w-full h-auto"},[o("p",{staticClass:"text-2xl text-gray-100 font-semibold px-6"},[t._v("\n      "+t._s(t.selected.title)+"\n    ")])]),t._v(" "),o("img",{staticClass:"w-48 h-auto mx-auto rounded-full",attrs:{src:t.selected.src,draggable:"false"}}),t._v(" "),o("div",{staticClass:"flex w-full h-full justify-center mt-6"},t._l(t.choices,(function(img,i){return o("img",{key:i,staticClass:"w-20 h-auto mx-3 rounded-full border-4 transition-colors transition-250 bg-gray-100 cursor-pointer",class:[t.isOpen(img)?"border-blue-600":"border-gray-400"],attrs:{src:img.src,draggable:"false"},on:{click:function(e){return t.selectImg(img)}}})})),0)])}),[],!1,null,null,null).exports},props:{optionSet:{type:Object,default:function(){return{title:"Production",imgs:[{uid:0,title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"Soft Enamel",src:"https://lapelpinsandcoins.com/images/quote/softenamel.png",pros:["Great for intricate designs.","Enamel fill gives the design texture."],cons:["Colors cannot touch, meaning no gradients."]},{uid:2,title:"Cloisonné",src:"https://lapelpinsandcoins.com/images/quote/cloisonne.png",pros:["Great for a professional look.","An enamel fill reults in your design being smooth to the touch."],cons:["Cloisonne bad trait goes here."]},{uid:3,title:"Silk Screen",src:"https://lapelpinsandcoins.com/images/quote/silkscreen.png",pros:["Silk Screen good","Silk screen good2.","silk screen good 3."],cons:["silk screen bad."]},{uid:4,title:"Offset Printed",src:"https://lapelpinsandcoins.com/images/quote/offset2.png",pros:["offset good 1","offset good 2"],cons:["offset bad 1"]}]}}}},data:function(){return{selected:"",pros:this.optionSet.imgs[0].pros,cons:this.optionSet.imgs[0].cons}},mounted:function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target.getAttribute("id");t.intersectionRatio>0?document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.add("active"):document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.remove("active")}))}));document.querySelectorAll("section[id]").forEach((function(section){t.observe(section)}))},methods:{choiceMade:function(title,t,e,o){this.pros=e,this.cons=o,this.selected=t,this.$emit("select",title,t)}}},_=(o(181),Object(l.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sectionBorder border-2 rounded flex mb-32 h-auto pt-6 pb-8"},[o("div",{staticClass:"titleWords w-1/3 bg-transparent pl-4"},[o("div",{staticClass:"flex w-full h-auto"},[o("h2",{staticClass:"text-blue-700 font-bold text-2xl w-full"},[o("span",[t._v(t._s(t.optionSet.title)+" Method:")])])]),t._v(" "),o("p",{staticClass:"text-base text-gray-700 mt-4"},[t._v("\n      "+t._s(t.optionSet.title)+" is the first step in creating a great custom lapel pin. Simply put, each of the production methods offers various advantages over the others. If you're feeling stuck, Soft Enamel is always a versatile and cost effective choice!\n    ")]),t._v(" "),o("p",{staticClass:"text-base text-gray-700 mt-4"},[t._v("\n      Select any of the varieties in the dialog to the right. We have listed the unique pros and cons of each choice below. You can also zoom to see the pin's material closer.\n    ")]),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"section-content w-full px-12 transition-all"},[o("IradioJunior",{attrs:{choices:t.optionSet.imgs,optionSet:t.optionSet.ind,title:t.optionSet.title},on:{choice:t.choiceMade}}),t._v(" "),t._e(),t._v(" "),o("div",{staticClass:"bg-white shadow-lg flex w-full h-auto rounded-b"},[o("div",{staticClass:"prosCons shadow-lg flex flex-col w-full rounded-bl"},[o("h4",{staticClass:"px-12 ml-1 font-bold text-sm text-gray-700 -mb-6 mt-8"},[t._v("\n          PROS\n        ")]),t._v(" "),o("transition-group",{staticClass:"list-reset text-black p-8 text-grey-darker rounded",attrs:{tag:"ul",name:"list"}},t._l(t.pros,(function(e){return o("li",{key:e.substr(e.length-5),staticClass:"flex items-center mb-3 text-base"},[o("svg",{staticClass:"flex-none w-8 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"green"}},[o("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),o("h4",{staticClass:"px-12 ml-1 font-bold text-sm text-gray-700 -mb-6"},[t._v("\n          CONS\n        ")]),t._v(" "),o("ul",{staticClass:"list-reset text-black p-8 text-grey-darker rounded"},t._l(t.cons,(function(e,n){return o("li",{key:n,staticClass:"flex items-center mb-3 text-base"},[o("svg",{staticClass:"flex-none w-8 mr-2 text-red-500 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n            "+t._s(e)+"\n          ")])})),0)],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"selectBtnCol flex items-end justify-center mt-6 w-full"},[e("button",{staticClass:"mb-10 transition-colors bg-blue-500 text-white font-semibold hover:bg-blue-700 py-2 border border-blue-500 hover:border-transparent rounded w-full"},[this._v("\n        Select Option\n      ")])])}],!1,null,"4d9c3c28",null).exports),k={name:"TestScroll",components:{QuoteHelper:n.a,ContactSection:f,DesignSection:m,QuoteSection:_},data:function(){return{choices:[{ind:0,title:"Production",imgs:[{uid:0,title:"Die Struck",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look.","Cost effective and quickly manufactured."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"Soft Enamel",src:"https://lapelpinsandcoins.com/images/quote/softenamel.png",pros:["Great for intricate designs.","Enamel fill gives the design texture.","Most cost effective production method."],cons:["Colors cannot touch, meaning no gradients."]},{uid:2,title:"Cloisonné",src:"https://lapelpinsandcoins.com/images/quote/cloisonne.png",pros:["Great for a professional look.","An enamel fill reults in your design being smooth to the touch."],cons:["Cloisonne bad trait goes here."]},{uid:3,title:"Silk Screen",src:"https://lapelpinsandcoins.com/images/quote/silkscreen.png",pros:["Silk Screen good","Silk screen good2.","silk screen good 3."],cons:["silk screen bad."]},{uid:4,title:"Offset Printed",src:"https://lapelpinsandcoins.com/images/quote/offset2.png",pros:["offset good 1","offset good 2"],cons:["offset bad 1"]}]},{ind:1,title:"Sizing",imgs:[{uid:0,title:"0.75''",src:"https://lapelpinsandcoins.com/images/newsizing/penny.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"1.00''",src:"https://lapelpinsandcoins.com/images/newsizing/quarter.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:2,title:"1.25''",src:"https://lapelpinsandcoins.com/images/newsizing/50centcoin.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:3,title:"1.50''",src:"https://lapelpinsandcoins.com/images/newsizing/dollarcoin.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:4,title:"1.75''",src:"https://lapelpinsandcoins.com/images/newsizing/golfball.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]}]},{ind:2,title:"Plating",imgs:[{uid:0,title:"A. Silver",src:"https://lapelpinsandcoins.com/images/quote/ASilver.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"P. Copper",src:"https://lapelpinsandcoins.com/images/quote/HPCopper.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:2,title:"A. Copper",src:"https://lapelpinsandcoins.com/images/quote/ACopper.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:3,title:"A. Gold",src:"https://lapelpinsandcoins.com/images/quote/AGold.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:4,title:"Dual Plated",src:"https://lapelpinsandcoins.com/images/quote/DualPlated.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]}]},{ind:3,title:"Backing",imgs:[{uid:0,title:"B. Clutch",src:"https://lapelpinsandcoins.com/images/quote/butterfly.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:1,title:"B. Rubber",src:"https://lapelpinsandcoins.com/images/quote/blackrubber.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:2,title:"Y. Rubber",src:"https://lapelpinsandcoins.com/images/quote/yellowrubber.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:3,title:"Safety Pin",src:"https://lapelpinsandcoins.com/images/quote/safetypin.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]},{uid:4,title:"Deluxe Clutch",src:"https://lapelpinsandcoins.com/images/quote/deluxe.png",pros:["Great for intricate designs.","The lack of color allows for a professional look."],cons:["If your logo or design requires color, this is not the option."]}]}]}},computed:{quote:function(){return[{title:"Production",selected:this.$store.state.quote[0].selected},{title:"Sizing",selected:this.$store.state.quote[1].selected},{title:"Plating",selected:this.$store.state.quote[2].selected},{title:"Backing",selected:this.$store.state.quote[3].selected}]}},mounted:function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target.getAttribute("id");t.intersectionRatio>0?document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.add("active"):document.querySelector('nav li a[href="#'.concat(e,'"]')).parentElement.classList.remove("active")}))}));document.querySelectorAll("section[id]").forEach((function(section){t.observe(section)}))},methods:{resetQuote:function(){console.log("reset"),this.$store.dispatch("quoteReset")},updateQuote:function(title,t){var e=0;switch(title){case"Production":e=0;break;case"Sizing":e=1;break;case"Plating":e=2;break;case"Backing":e=3;break;default:e=0,console.log("no category available")}this.quote[e].selected=t,this.$store.commit("setQuote",JSON.stringify(this.quote)),console.log("vuex updated!")},testScroll:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"})}}},C=(o(183),{components:{TestScroll:Object(l.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full h-auto bg-gray-200 py-12"},[o("main",{staticClass:"w-full flex"},[o("div",{staticClass:"w-auto ml-24 mr-8 px-12 py-12 bg-white rounded shadow"},[o("h1",{staticClass:"text-3xl font-bold text-gray-900 mb-4 px-4"},[t._v("\n        Free Quote Request\n      ")]),t._v(" "),t._l(t.choices,(function(e,i){return o("QuoteSection",{key:i,class:[0===i?"mt-8":"mt-48"],attrs:{optionSet:e,id:e.title},on:{select:t.updateQuote}})})),t._v(" "),o("section",{attrs:{id:"Your-Quote"}},[o("h2",{staticClass:"text-3xl font-bold text-gray-900 mb-4 px-4"},[t._v("\n          Your Quote\n        ")]),t._v(" "),o("ContactSection"),t._v(" "),o("section",{staticClass:"h-full flex justify-center",attrs:{id:"Your-Quote--Design"}},[o("DesignSection")],1),t._v(" "),t._m(0)],1)],2),t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{id:"sweg"}},[o("nav",{staticClass:"section-nav w-auto mr-56 py-4 border-l-2 border-white ml-auto"},[o("ol",[t._l(t.choices,(function(e,n){return o("li",{key:n},[o("a",{attrs:{href:"#"+e.title},on:{click:function(o){return o.preventDefault(),t.testScroll(e.title)}}},[t._v(t._s(e.title))])])})),t._v(" "),t._m(1)],2)]),t._v(" "),o("div",{staticClass:"mt-24"},[o("QuoteHelper",{staticClass:"sticky self-end"}),t._v(" "),o("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-24 mt-8 max-w-sm focus:outline-none",on:{click:t.resetQuote}},[t._v("\n          Reset Local Data\n        ")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"Your-Quote--Summary"}},[e("h3",[this._v("Summary")]),this._v(" "),e("p",[this._v("…")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#Your-Quote"}},[this._v("Quote")]),this._v(" "),e("ul",[e("li",{},[e("a",{attrs:{href:"#Your-Quote--Design"}},[this._v("Design")])]),this._v(" "),e("li",{},[e("a",{attrs:{href:"#Your-Quote--Summary"}},[this._v("Summary")])])])])}],!1,null,null,null).exports}}),S=Object(l.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-auto"},[e("TestScroll")],1)}),[],!1,null,null,null);e.default=S.exports}}]);