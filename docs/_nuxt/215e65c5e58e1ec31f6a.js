(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(e,t,n){var content=n(157);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("17ee4b54",content,!0,{sourceMap:!1})},156:function(e,t,n){"use strict";var o=n(155);n.n(o).a},157:function(e,t,n){(t=n(26)(!1)).push([e.i,"input[type=radio]+label span[data-v-953e1966]{-webkit-transition:background .2s,-webkit-transform .2s;transition:background .2s,-webkit-transform .2s;transition:background .2s,transform .2s;transition:background .2s,transform .2s,-webkit-transform .2s}input[type=radio]+label:hover span[data-v-953e1966],input[type=radio]+label span[data-v-953e1966]:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}input[type=radio]:checked+label span[data-v-953e1966]{background-color:#3490dc;box-shadow:inset 0 0 0 2px #fff}input[type=radio]:checked+label[data-v-953e1966]{color:#3490dc}label[data-v-953e1966]{margin:0 1rem;text-align:center}[type=radio]+label[data-v-953e1966]{cursor:pointer}[type=radio]:checked+label>img[data-v-953e1966]{border-color:#2b6cb0;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}",""]),e.exports=t},158:function(e,t,n){var content=n(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("a577e564",content,!0,{sourceMap:!1})},161:function(e,t,n){"use strict";var o={name:"Iradio",props:{title:{type:String,default:"production"},choiceList:{type:Array,default:function(){return[{name:"Die Struck",iSrc:"https://lapelpinsandcoins.com/images/quote/diestruck2.png"},{name:"Soft Enamel",iSrc:"https://lapelpinsandcoins.com/images/quote/softenamel.png"},{name:"Cloisonné",iSrc:"https://lapelpinsandcoins.com/images/quote/cloisonne.png"},{name:"Silk Screen",iSrc:"https://lapelpinsandcoins.com/images/quote/silkscreen.png"},{name:"Offset Printed",iSrc:"https://lapelpinsandcoins.com/images/quote/offset2.png"}]}}},methods:{emitChoice:function(title,e){this.$emit("choice",title,e)}}},c=(n(156),n(18)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"iradio mx-auto"},[n("h2",{staticClass:"text-2xl text-center font-semibold text-gray-800"},[e._v("\n    Select your "+e._s(e.title)+":\n  ")]),e._v(" "),n("section",{staticClass:"rest flex justify-center"},e._l(e.choiceList,(function(t,i){return n("div",{key:i,staticClass:"scopewrapper mx-2"},[n("input",{attrs:{id:e.title+i.toString(),name:"test"+e.title,type:"radio",hidden:""},domProps:{value:t.name},on:{click:function(n){return e.emitChoice(e.title,t.name)}}}),e._v(" "),n("label",{staticClass:"cursor-pointer text-center text-sm font-semibold text-gray-800",attrs:{for:e.title+i.toString()}},[n("img",{staticClass:"w-32 h-32 mb-2 rounded-full border-4 border-transparent",attrs:{src:t.iSrc,draggable:"false"}}),e._v(" "),n("span",{staticClass:"w-5 h-5 -mb-1 inline-block mr-1 rounded-full border border-gray-600",class:[i+1===e.choiceList.length&&"1.75 inch"!==t.name||"Antique Copper"===t.name?"ml-1":"ml-3"]}),e._v("\n        "+e._s(t.name))])])})),0)])}),[],!1,null,"953e1966",null);t.a=component.exports},162:function(e,t,n){"use strict";var o=n(158);n.n(o).a},163:function(e,t,n){(t=n(26)(!1)).push([e.i,".fade-enter-active[data-v-d5bbf86a],.fade-leave-active[data-v-d5bbf86a]{-webkit-transition:opacity .25s;transition:opacity .25s}.fade-enter[data-v-d5bbf86a],.fade-leave-to[data-v-d5bbf86a]{opacity:0}",""]),e.exports=t},169:function(e,t,n){"use strict";n.r(t);var o={name:"QuoteRedux",components:{Iradio:n(161).a},data:function(){return{currentPage:1,pages:[{pid:"p1",active:!0,title:"style",data:[{id:0,sid:"pr0",name:"Die Struck",iSrc:"https://lapelpinsandcoins.com/images/quote/diestruck2.png"},{id:1,sid:"pr1",name:"Soft Enamel",iSrc:"https://lapelpinsandcoins.com/images/quote/softenamel.png"},{id:2,sid:"pr2",name:"Cloisonné",iSrc:"https://lapelpinsandcoins.com/images/quote/cloisonne.png"},{id:3,sid:"pr3",name:"Silk Screen",iSrc:"https://lapelpinsandcoins.com/images/quote/silkscreen.png"},{id:4,sid:"pr4",name:"Offset Printed",iSrc:"https://lapelpinsandcoins.com/images/quote/offset2.png"}]},{pid:"p2",active:!1,title:"sizing",data:[{id:0,sid:"sz0",name:"0.75 inch",iSrc:"https://lapelpinsandcoins.com/images/newsizing/penny.png"},{id:1,sid:"sz1",name:"1.00 inch",iSrc:"https://lapelpinsandcoins.com/images/newsizing/quarter.png"},{id:2,sid:"sz2",name:"1.25 inch",iSrc:"https://lapelpinsandcoins.com/images/newsizing/50centcoin.png"},{id:3,sid:"sz3",name:"1.50 inch",iSrc:"https://lapelpinsandcoins.com/images/newsizing/dollarcoin.png"},{id:4,sid:"sz4",name:"1.75 inch",iSrc:"https://lapelpinsandcoins.com/images/newsizing/golfball.png"}]},{pid:"p3",active:!1,title:"plating",data:[{id:0,sid:"pl0",name:"Antique Gold",iSrc:"https://lapelpinsandcoins.com/images/quote/AGold.png"},{id:1,sid:"pl1",name:"Antique Silver",iSrc:"https://lapelpinsandcoins.com/images/quote/ASilver.png"},{id:2,sid:"pl2",name:"Antique Copper",iSrc:"https://lapelpinsandcoins.com/images/quote/ACopper.png"},{id:3,sid:"pl3",name:"Dual Plated",iSrc:"https://lapelpinsandcoins.com/images/quote/DualPlated.png"},{id:4,sid:"pl4",name:"Color Coated",iSrc:"https://lapelpinsandcoins.com/images/quote/ColorCoated.png"}]},{pid:"p4",active:!1,title:"backing",data:[{id:0,sid:"bk0",name:"Butterfly Clutch",iSrc:"https://lapelpinsandcoins.com/images/quote/butterfly.png"},{id:1,sid:"bk1",name:"Black Rubber",iSrc:"https://lapelpinsandcoins.com/images/quote/blackrubber.png"},{id:2,sid:"bk2",name:"Yellow Rubber",iSrc:"https://lapelpinsandcoins.com/images/quote/yellowrubber.png"},{id:3,sid:"bk3",name:"Safety Pin",iSrc:"https://lapelpinsandcoins.com/images/quote/safetypin.png"},{id:4,sid:"bk4",name:"Deluxe Clutch",iSrc:"https://lapelpinsandcoins.com/images/quote/deluxe.png"}]}]}},watch:{currentPage:function(){for(var e=this.currentPage-1,i=0;i<this.pages.length;i++)i!==e&&(this.pages[i].active=!1);this.pages[this.currentPage-1].active=!0}},methods:{changePage:function(e){0===e&&1!==this.currentPage&&(this.currentPage-=1),1===e&&4!==this.currentPage&&(this.currentPage+=1)},choiceMade:function(title,e){this.$emit("select",title,e)},updateQuote:function(data){this.$store.commit("setQuote",data)}}},c=(n(162),n(18)),l={name:"QuoteHelper",computed:{quote:function(){return this.$store.state.quote}}},r={components:{QuoteRedux:Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"block w-full max-w-4xl h-auto bg-white rounded shadow pt-8 pb-12 px-2"},[n("transition-group",{attrs:{name:"fade"}},e._l(e.pages,(function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"page.active"}],key:t.pid,staticClass:"radio-wrap"},[n("Iradio",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"page.active"}],attrs:{choiceList:t.data,title:t.title},on:{choice:e.choiceMade}})],1)})),0),e._v(" "),n("div",{staticClass:"inline-flex w-full justify-center mt-8"},[n("button",{staticClass:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l transition-colors focus:outline-none",on:{click:function(t){return t.preventDefault(),e.changePage(0)}}},[e._v("\n      Prev\n    ")]),e._v(" "),n("button",{staticClass:"ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r transition-colors focus:outline-none",on:{click:function(t){return t.preventDefault(),e.changePage(1)}}},[e._v("\n      Next\n    ")])]),e._v(" "),n("span",{staticClass:"nunito absolute font-semibold text-base uppercase text-gray-500 -ml-10 mt-20"},[e._v(e._s(e.currentPage)+" / 4")])],1)}),[],!1,null,"d5bbf86a",null).exports,QuoteHelper:Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ml-4 max-w-sm w-full pt-4 pb-12 px-4 bg-white shadow rounded"},[n("h3",{staticClass:"text-center font-semibold w-full text-xl"},[e._v("\n    Your Quote (saved):\n  ")]),e._v(" "),e._l(e.quote,(function(t,o){return n("div",{key:o,staticClass:"w-full h-full border-b my-2"},[e._v("\n    "+e._s(t.title)+": "),n("span",{class:[t.selected?"text-green-600":"text-gray-600"]},[e._v(e._s(t.selected?t.selected:"none"))])])}))],2)}),[],!1,null,null,null).exports},data:function(){return{quote:[{title:"style",selected:null},{title:"size",selected:null},{title:"plating",selected:null},{title:"backing",selected:null}]}},created:function(){this.resetQuote(),console.log("reset")},methods:{resetQuote:function(){this.$store.dispatch("quoteReset")},updateQuote:function(title,e){var t=0;switch(title){case"style":t=0;break;case"sizing":t=1;break;case"plating":t=2;break;case"backing":t=3;break;default:t=0,console.log("no category available")}this.quote[t].selected=e,this.$store.commit("setQuote",this.quote),console.log("vuex updated!")}}},d=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"w-full h-screen flex bg-gray-200 justify-center items-center"},[t("QuoteRedux",{on:{select:this.updateQuote}}),this._v(" "),t("QuoteHelper"),this._v(" "),t("p",{staticClass:"text-blue-700 text-xs hidden"},[this._v("\n    "+this._s(this.quote)+"\n  ")])],1)}),[],!1,null,null,null);t.default=d.exports}}]);