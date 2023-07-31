(function(){"use strict";var __webpack_modules__={6087:function(e,a,r){var _=r(9242),t=r(4460),u=r(3396);const c={class:"container"},o=(0,u._)("h1",null,"Calculator with Abacus Visualisations",-1),n=(0,u._)("footer",null,[(0,u.Uk)("Made for fun by "),(0,u._)("a",{href:"https://gracechin.github.io"},"Grace Chin"),(0,u.Uk)(".")],-1);function s(e,a,r,_,t,s){const i=(0,u.up)("Abacus"),l=(0,u.up)("Calculator");return(0,u.wg)(),(0,u.iD)("div",c,[o,(0,u.Wm)(i),(0,u.Wm)(l),n])}var i=r(2268);const l={class:"deck deck-upper"},p={class:"deck deck-lower"};function b(e,a,r,_,t,c){return(0,u.wg)(),(0,u.iD)("div",{class:(0,i.C_)(["abacus",{abacusDisabled:this.$store.state.disableAbacus}])},[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(this.$store.state.abacusArr,((e,a)=>((0,u.wg)(),(0,u.iD)("div",{class:(0,i.C_)(["col",`col-${e}`]),key:a},[(0,u._)("div",l,[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(2,(e=>(0,u._)("div",{class:"bead",key:e}))),64))]),(0,u._)("div",p,[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(5,(e=>(0,u._)("div",{class:"bead",key:e}))),64))])],2)))),128))],2)}var d={name:"TheAbacus",data(){return{}},methods:{}},w=r(89);const f=(0,w.Z)(d,[["render",b],["__scopeId","data-v-0df9e985"]]);var h=f;const k={class:"calculator"},v={class:"display"},A=["onClick"];function m(e,a,r,_,t,c){return(0,u.wg)(),(0,u.iD)("div",k,[(0,u._)("div",v,(0,i.zw)(this.$store.state.currValue||"0"),1),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(t.calculatorElements,(e=>((0,u.wg)(),(0,u.iD)("div",{class:(0,i.C_)(["button",{operator:["/","x","+","C","=","-"].includes(e)}]),key:e,onClick:a=>c.action(e)},(0,i.zw)(e),11,A)))),128))])}const V=r(9438);var C={name:"TheCalculator",data(){return{calculatorElements:[7,8,9,"/",4,5,6,"x",1,2,3,"+","C",0,"=","-"],operator:null,operatorPressed:!1,sound:V}},methods:{clear(){t.h.commit("clearSaved"),this.operator=null},action(e){isNaN(e)||t.h.commit("appendValue",e),"C"===e&&(t.h.commit("resetValue"),this.playSound(this.sound),this.clear()),["/","x","+","-"].includes(e)&&(this.operator="x"===e?"*":e,t.h.commit("evaluate",this.operator),t.h.commit("saveValue",this.$store.state.currValue),this.playSound(this.sound)),"="===e&&(t.h.commit("evaluate",this.operator),this.playSound(this.sound),this.clear())},playSound(e){if(e){var a=new Audio(e);a.play()}}}};const U=(0,w.Z)(C,[["render",m],["__scopeId","data-v-193380b6"]]);var q=U,g={name:"App",components:{Abacus:h,Calculator:q}};const D=(0,w.Z)(g,[["render",s]]);var E=D;const y=(0,_.ri)(E);y.use(t.h),y.mount("#app")},4460:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return store}});var vuex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7139);const DEFAULT_CURR_VALUE="0",DEFAULT_ABACUS_ARR=new Array(9).fill(0),store=(0,vuex__WEBPACK_IMPORTED_MODULE_0__.MT)({state(){return{currValue:DEFAULT_CURR_VALUE,savedValue:null,operatorPressed:!1,abacusArr:DEFAULT_ABACUS_ARR,disableAbacus:!1}},mutations:{evaluate(state,op){state.operatorPressed=!0;const calcValue=state.savedValue?eval(state.savedValue+op+state.currValue):state.currValue;if(state.currValue=calcValue,calcValue%1==0){const e=calcValue.toString().split("").map(Number);state.abacusArr=new Array(9-e.length).fill(0).concat(e),state.disableAbacus=!1}else state.abacusArr=DEFAULT_ABACUS_ARR,state.disableAbacus=!0},saveValue(e,a){e.savedValue=a},resetValue(e){e.currValue=DEFAULT_CURR_VALUE,e.abacusArr=DEFAULT_ABACUS_ARR,e.disableAbacus=!1},clearSaved(e){e.savedValue=null},appendValue(e,a){e.operatorPressed&&(e.currValue=DEFAULT_CURR_VALUE,e.operatorPressed=!1),e.currValue=e.currValue==DEFAULT_CURR_VALUE?a:`${e.currValue}${a}`}},actions:{},getters:{abacusCurrValue(e){const a=e.currValue.toString().split("").map(Number),r=new Array(9-a.length).fill(0).concat(a);return r}}})},9438:function(e,a,r){e.exports=r.p+"media/abacus.8b978558.mp3"}},__webpack_module_cache__={};function __webpack_require__(e){var a=__webpack_module_cache__[e];if(void 0!==a)return a.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(a,r,_,t){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],_=e[s][1],t=e[s][2];for(var c=!0,o=0;o<r.length;o++)(!1&t||u>=t)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](r[o])}))?r.splice(o--,1):(c=!1,t<u&&(u=t));if(c){e.splice(s--,1);var n=_();void 0!==n&&(a=n)}}return a}t=t||0;for(var s=e.length;s>0&&e[s-1][2]>t;s--)e[s]=e[s-1];e[s]=[r,_,t]}}(),function(){__webpack_require__.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(a,{a:a}),a}}(),function(){__webpack_require__.d=function(e,a){for(var r in a)__webpack_require__.o(a,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){__webpack_require__.p="/abaculator/"}(),function(){var e={143:0};__webpack_require__.O.j=function(a){return 0===e[a]};var a=function(a,r){var _,t,u=r[0],c=r[1],o=r[2],n=0;if(u.some((function(a){return 0!==e[a]}))){for(_ in c)__webpack_require__.o(c,_)&&(__webpack_require__.m[_]=c[_]);if(o)var s=o(__webpack_require__)}for(a&&a(r);n<u.length;n++)t=u[n],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return __webpack_require__.O(s)},r=self["webpackChunkabaculater"]=self["webpackChunkabaculater"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(6087)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.bc75f3cc.js.map