(function(e){function t(t){for(var r,u,c=t[0],l=t[1],i=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0b78ea64":"ee37555d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"48cc":function(e,t,n){"use strict";n("c76b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/product"}},[e._v("Product")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),c={},l=Object(u["a"])(c,o,a,!1,null,null,null),i=l.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("bca0")}}),r("HelloWorld",{attrs:{msg:""}})],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" Hola, bienvenido a la prueba de CO de ingeniero de software. ")])])},v=[],m={name:"HelloWorld",props:{msg:String}},b=m,h=(n("48cc"),Object(u["a"])(b,d,v,!1,null,"7f2fd998",null)),g=h.exports,y={name:"Home",components:{HelloWorld:g}},w=y,_=Object(u["a"])(w,f,p,!1,null,null,null),O=_.exports;r["default"].use(s["a"]);var j=[{path:"/",name:"Home",component:O},{path:"/product",name:"Product",component:function(){return n.e("chunk-0b78ea64").then(n.bind(null,"d2f1"))}}],P=new s["a"]({routes:j}),x=P,k=n("2f62");r["default"].use(k["a"]);var H=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=(n("f9e3"),n("2dd8"),n("5f5b")),E=n("bc3a"),C=n.n(E),T=n("2106"),L=n.n(T);r["default"].use(S["a"]),r["default"].use(L.a,C.a),C.a.defaults.baseURL="http://localhost:3000/api",r["default"].config.productionTip=!1,new r["default"]({router:x,store:H,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},bca0:function(e,t,n){e.exports=n.p+"img/Logo.761516a6.png"},c76b:function(e,t,n){}});
//# sourceMappingURL=app.8e748c61.js.map