(function(e){function n(n){for(var o,r,u=n[0],a=n[1],s=n[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(n);while(l.length)l.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==c[u]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ceb84":"46f30a95","chunk-2d0e95df":"68b0ae31","chunk-2d224560":"97292112","chunk-491a59e8":"c1369963","chunk-712f2df5":"fb825d6c","chunk-7ce9d0be":"fd246fff","chunk-d9890892":"59d3e051","chunk-2d0af8f8":"76fed757","chunk-5e6019d6":"28c83e5d"}[e]+".js"}function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t={"chunk-491a59e8":1,"chunk-7ce9d0be":1,"chunk-d9890892":1,"chunk-5e6019d6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0ceb84":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d224560":"31d6cfe0","chunk-491a59e8":"568fb265","chunk-712f2df5":"31d6cfe0","chunk-7ce9d0be":"0fcccab2","chunk-d9890892":"2c1fd3c4","chunk-2d0af8f8":"31d6cfe0","chunk-5e6019d6":"bb0e5a4b"}[e]+".css",c=a.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),t(i)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,t[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],i=(t("7faf"),t("2877")),u={},a=Object(i["a"])(u,r,c,!1,null,null,null),s=a.exports,d=t("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var l=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout"},[t("the-nav",{staticClass:"the-nav",class:{"the-nav-min":e.isCollapse},attrs:{currentRouters:e.currentRouters,showLogo:!0,isCollapse:e.isCollapse}}),t("div",{staticClass:"main-container"},[t("the-main")],1)],1)},h=[],p=t("5530"),m=t("2f62"),b={namespaced:!0,state:{device:"pc",theNav:{isCollapse:!1}},mutations:{TOGGLE_DEVICE:function(e,n){e.device=n},SET_COLLAPSE_NAV:function(e,n){e.theNav.isCollapse=n}},actions:{}};o["default"].use(m["a"]);var v=new m["a"].Store({state:{},mutations:{},actions:{},modules:{app:b}}),g=document,k=g.body,w=996,y={watch:{$route:function(){}},beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var e=this.$_isMobile();v.commit("app/TOGGLE_DEVICE",e?"mobile":"desktop"),v.commit("app/SET_COLLAPSE_NAV",e)},methods:{$_isMobile:function(){var e=k.getBoundingClientRect();return e.width-1<w},$_resizeHandler:function(){if(!document.hidden){var e=this.$_isMobile();v.commit("app/TOGGLE_DEVICE",e?"mobile":"desktop"),v.commit("app/SET_COLLAPSE_NAV",e)}}}},E={name:"Layout",components:{TheMain:function(){return t.e("chunk-d9890892").then(t.bind(null,"d600"))},TheNav:function(){return t.e("chunk-491a59e8").then(t.bind(null,"e8ed"))}},mixins:[y],computed:Object(p["a"])(Object(p["a"])({},Object(m["b"])({device:function(e){return e.app.device},isCollapse:function(e){return e.app.theNav.isCollapse}})),{},{currentRouters:function(){var e=this.$router.options.routes;return e}}),watch:{device:function(e){console.log("当前是什么设备",e)},isCollapse:function(e){console.log("当前是否卷侧边栏",e)}},methods:{},data:function(){return{fixedHeader:!1}},mounted:function(){}},_=E,C=(t("9363"),Object(i["a"])(_,f,h,!1,null,"715ec733",null)),O=C.exports;o["default"].use(l["a"]);var L=[{path:"/",name:"主页",component:O,icon:"el-icon-eleme",redirect:"/home",children:[{path:"home",name:"Home",component:function(){return t.e("chunk-712f2df5").then(t.bind(null,"bb51"))}}]},{path:"/about",name:"About",icon:"el-icon-info",component:O,redirect:"/about/abc",children:[{path:"ab",name:"ab",component:function(){return t.e("chunk-2d0ceb84").then(t.bind(null,"613f"))}},{hidden:!0,path:"abc",name:"ABC",component:function(){return t.e("chunk-2d224560").then(t.bind(null,"e065"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-7ce9d0be").then(t.bind(null,"a55b"))},icon:"el-icon-present"},{path:"/404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))},hidden:!0},{path:"*",redirect:"/404",hidden:!0}],j=new l["a"]({routes:L}),A=j,S=t("5c96"),T=t.n(S);t("0fae");o["default"].use(T.a),o["default"].config.productionTip=!1,new o["default"]({router:A,store:v,render:function(e){return e(s)}}).$mount("#app")},"7faf":function(e,n,t){"use strict";t("b8ff")},9363:function(e,n,t){"use strict";t("9971")},9971:function(e,n,t){},b8ff:function(e,n,t){}});
//# sourceMappingURL=app.84e68344.js.map