(function(e){function n(n){for(var c,o,u=n[0],i=n[1],d=n[2],l=0,h=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},a={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11570c4e":"67dbe22e","chunk-1ad4482b":"e18458b8","chunk-2d0b2918":"cf4fc272","chunk-2d0d2bef":"d2dbb7a7","chunk-2d208887":"ad521702","chunk-2d221c81":"ca213335","chunk-2d221ff9":"b240a0af","chunk-2d230ab5":"6069f696","chunk-2d237b06":"fdc61a68","chunk-2d237c54":"45542fc4","chunk-633e733c":"d631aefb","chunk-6534e759":"b5b13758","chunk-7fa8824c":"d92d42af","chunk-89fc68d6":"b1250608","chunk-9db0a9ae":"e8f795b7","chunk-145738ac":"75eab01d","chunk-3e0e9998":"098a6575","chunk-75b75848":"3dc86887","chunk-39ad6b22":"67257283","chunk-ce566caa":"8d9a382d","chunk-2d0a3aa5":"0b5e945c","chunk-399327a4":"8e2a5aff","chunk-552c14eb":"b85ddb5b","chunk-590d7072":"8623ad90","chunk-5f54743a":"d34efc9a","chunk-c1d57b18":"740cfe4c"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-11570c4e":1,"chunk-1ad4482b":1,"chunk-6534e759":1,"chunk-7fa8824c":1,"chunk-89fc68d6":1,"chunk-9db0a9ae":1,"chunk-145738ac":1,"chunk-39ad6b22":1,"chunk-399327a4":1,"chunk-552c14eb":1,"chunk-590d7072":1,"chunk-5f54743a":1,"chunk-c1d57b18":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-11570c4e":"3656a28f","chunk-1ad4482b":"ecad842c","chunk-2d0b2918":"31d6cfe0","chunk-2d0d2bef":"31d6cfe0","chunk-2d208887":"31d6cfe0","chunk-2d221c81":"31d6cfe0","chunk-2d221ff9":"31d6cfe0","chunk-2d230ab5":"31d6cfe0","chunk-2d237b06":"31d6cfe0","chunk-2d237c54":"31d6cfe0","chunk-633e733c":"31d6cfe0","chunk-6534e759":"811e97da","chunk-7fa8824c":"3bae1acf","chunk-89fc68d6":"4ac7158d","chunk-9db0a9ae":"a03c5291","chunk-145738ac":"8d35dbd0","chunk-3e0e9998":"31d6cfe0","chunk-75b75848":"31d6cfe0","chunk-39ad6b22":"89b26431","chunk-ce566caa":"31d6cfe0","chunk-2d0a3aa5":"31d6cfe0","chunk-399327a4":"ba21625c","chunk-552c14eb":"0e433876","chunk-590d7072":"31849013","chunk-5f54743a":"0e433876","chunk-c1d57b18":"90dfae8c"}[e]+".css",a=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===a))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],l=d.getAttribute("data-href");if(l===c||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],f.parentNode.removeChild(f),t(r)},f.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var h=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",h.name="ChunkLoadError",h.type=c,h.request=o,t[1](h)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],r=(t("7faf"),t("2877")),u={},i=Object(r["a"])(u,o,a,!1,null,null,null),d=i.exports,l=t("9483");Object(l["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var h=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout"},[t("the-nav",{staticClass:"the-nav",class:{"the-nav-min":e.isCollapse},attrs:{currentRouters:e.currentRouters,showLogo:!0,isCollapse:e.isCollapse,defaultActive:e.activeRouter}}),t("div",{staticClass:"main-container"},[t("the-header",{staticClass:"fixed-header"}),t("the-router",{staticClass:"the-router"})],1)],1)},s=[],p=(t("4de4"),t("5530")),m=t("2f62"),b={namespaced:!0,state:{device:"pc",theNav:{isCollapse:!1}},mutations:{TOGGLE_DEVICE:function(e,n){e.device=n},SET_COLLAPSE_NAV:function(e,n){e.theNav.isCollapse=n}},actions:{}},k=(t("b0c0"),t("cc33")),v={token:Object(k["a"])(),name:""},g={RESET_STATE:function(e){Object.assign(e,{token:Object(k["a"])(),name:""})},SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n}},E={namespaced:!0,state:v,mutations:g};c["default"].use(m["a"]);var y=new m["a"].Store({state:{},mutations:{},actions:{},modules:{app:b,user:E}}),w=document,_=w.body,C=996,O={watch:{$route:function(){this.$_resizeHandler()}},beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var e=this.$_isMobile();y.commit("app/TOGGLE_DEVICE",e?"mobile":"pc"),y.commit("app/SET_COLLAPSE_NAV",e)},methods:{$_isMobile:function(){var e=_.getBoundingClientRect();return e.width-1<C},$_resizeHandler:function(){if(!document.hidden){var e=this.$_isMobile();y.commit("app/TOGGLE_DEVICE",e?"mobile":"pc"),e&&y.commit("app/SET_COLLAPSE_NAV",!0)}}}},T={name:"Layout",components:{TheHeader:function(){return t.e("chunk-89fc68d6").then(t.bind(null,"4488"))},TheRouter:function(){return t.e("chunk-2d208887").then(t.bind(null,"a4ca"))},TheNav:function(){return t.e("chunk-11570c4e").then(t.bind(null,"40a7"))}},mixins:[O],computed:Object(p["a"])(Object(p["a"])({},Object(m["b"])({device:function(e){return e.app.device},isCollapse:function(e){return e.app.theNav.isCollapse}})),{},{activeRouter:function(){var e=this.$route.path||"/";return e},currentRouters:function(){var e=this.$router.options.routes.filter((function(e){return!e.hidden}));return e}}),watch:{device:function(e){console.log("当前是什么设备",e)},isCollapse:function(e){console.log("当前是否卷侧边栏",e)}},methods:{},data:function(){return{fixedHeader:!1}},mounted:function(){}},x=T,S=(t("c282"),Object(r["a"])(x,f,s,!1,null,"58e2b8e8",null)),j=S.exports;c["default"].use(h["a"]);var L=[{path:"/",component:j,redirect:"/home",meta:{title:"主页",icon:"el-icon-house"},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-6534e759").then(t.bind(null,"7abe"))}}]},{path:"/share",component:j,icon:"el-icon-document",redirect:"/share/index",meta:{title:"分享",icon:"el-icon-share"},children:[{path:"index",name:"Share",component:function(){return t.e("chunk-2d237b06").then(t.bind(null,"fbd8"))}}]},{path:"/mixComponent",component:j,icon:"el-icon-help",meta:{title:"混合组件",icon:"el-icon-help"},redirect:"/mixComponent/ExampleTable",children:[{path:"exampleTable",name:"ExampleTable",meta:{title:"表格",icon:"el-icon-s-data"},component:function(){return t.e("chunk-7fa8824c").then(t.bind(null,"ee36"))}},{path:"exampleForm",name:"ExampleForm",meta:{title:"表单",icon:"el-icon-tickets"},component:function(){return t.e("chunk-2d230ab5").then(t.bind(null,"ecef"))}},{path:"exampleTree",name:"ExampleTree",meta:{title:"关系图",icon:"el-icon-data-analysis"},component:function(){return t.e("chunk-2d221ff9").then(t.bind(null,"cd79"))}},{path:"theRouterNext",name:"TheRouterNext",meta:{title:"嵌套路由",icon:"el-icon-guide"},component:function(){return t.e("chunk-2d0b2918").then(t.bind(null,"2554"))},children:[{path:"menu-1",name:"Menu-1",meta:{title:"菜单-1"},component:function(){return t.e("chunk-633e733c").then(t.bind(null,"3573"))},children:[{path:"menu-1-1",name:"Menu-1-1",meta:{title:"菜单-1-1"},component:function(){return t.e("chunk-2d0d2bef").then(t.bind(null,"5a8e"))}},{path:"menu-1-2",name:"Menu-1-2",meta:{title:"菜单-1-2"},component:function(){return t.e("chunk-2d237c54").then(t.bind(null,"fd11"))}}]},{path:"menu-2",name:"Menu-2",meta:{title:"菜单-2"},component:function(){return t.e("chunk-2d221c81").then(t.bind(null,"cc8c"))}}]}]},{hidden:!0,path:"/login",name:"Login",component:function(){return t.e("chunk-1ad4482b").then(t.bind(null,"a55b"))}},{path:"/404",component:function(){return t.e("chunk-9db0a9ae").then(t.bind(null,"dc75"))},hidden:!0},{path:"*",redirect:"/404",hidden:!0}],N=new h["a"]({routes:L}),A=N;A.beforeEach((function(e,n,t){document.title="my-admin-"+e.name;var c=Object(k["a"])();"/login"===e.path||c?t():t("/login")}));var M=t("5c96"),P=t.n(M);t("0fae");c["default"].use(P.a),c["default"].config.productionTip=!1,new c["default"]({router:A,store:y,render:function(e){return e(d)}}).$mount("#app")},"7f35":function(e,n,t){},"7faf":function(e,n,t){"use strict";t("b8ff")},b8ff:function(e,n,t){},c282:function(e,n,t){"use strict";t("7f35")},cc33:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return a}));var c="admin-token";function o(){return sessionStorage.getItem(c)}function a(e){return sessionStorage.setItem(c,e)}}});
//# sourceMappingURL=app.52cef76b.js.map