(function(e){function n(n){for(var o,r,i=n[0],u=n[1],s=n[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==c[i]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1ad4482b":"ca7c4133","chunk-2d0ceb84":"2c582072","chunk-2d0e95df":"dd335540","chunk-2d224560":"aa9e81c7","chunk-517bb913":"5d73ea4b","chunk-d9890892":"8523747b","chunk-f0e12240":"c5b3a1dd","chunk-2d0af8f8":"b77954b4","chunk-5e6019d6":"6a689f67","chunk-235816b8":"8d3f6ede","chunk-ea2dd226":"c573cbb8"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-1ad4482b":1,"chunk-517bb913":1,"chunk-d9890892":1,"chunk-f0e12240":1,"chunk-5e6019d6":1,"chunk-235816b8":1,"chunk-ea2dd226":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-1ad4482b":"ecad842c","chunk-2d0ceb84":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d224560":"31d6cfe0","chunk-517bb913":"46aea26f","chunk-d9890892":"2c1fd3c4","chunk-f0e12240":"8315e33c","chunk-2d0af8f8":"31d6cfe0","chunk-5e6019d6":"bb0e5a4b","chunk-235816b8":"49d2be8e","chunk-ea2dd226":"eb0fa472"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===o||d===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,t[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=(t("7faf"),t("2877")),i={},u=Object(a["a"])(i,r,c,!1,null,null,null),s=u.exports,d=t("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var l=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout"},[t("the-nav",{staticClass:"the-nav",class:{"the-nav-min":e.isCollapse},attrs:{currentRouters:e.currentRouters,showLogo:!0,isCollapse:e.isCollapse}}),t("div",{staticClass:"main-container"},[t("the-main")],1)],1)},h=[],p=t("5530"),b=t("2f62"),m={namespaced:!0,state:{device:"pc",theNav:{isCollapse:!1}},mutations:{TOGGLE_DEVICE:function(e,n){e.device=n},SET_COLLAPSE_NAV:function(e,n){e.theNav.isCollapse=n}},actions:{}},v=(t("b0c0"),t("cc33")),g={token:Object(v["a"])(),name:""},k={RESET_STATE:function(e){Object.assign(e,{token:Object(v["a"])(),name:""})},SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n}},E={namespaced:!0,state:g,mutations:k};o["default"].use(b["a"]);var y=new b["a"].Store({state:{},mutations:{},actions:{},modules:{app:m,user:E}}),w=document,_=w.body,O=996,C={watch:{$route:function(){this.$_resizeHandler()}},beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var e=this.$_isMobile();y.commit("app/TOGGLE_DEVICE",e?"mobile":"pc"),y.commit("app/SET_COLLAPSE_NAV",e)},methods:{$_isMobile:function(){var e=_.getBoundingClientRect();return e.width-1<O},$_resizeHandler:function(){if(!document.hidden){var e=this.$_isMobile();y.commit("app/TOGGLE_DEVICE",e?"mobile":"pc"),y.commit("app/SET_COLLAPSE_NAV",e)}}}},S={name:"Layout",components:{TheMain:function(){return t.e("chunk-d9890892").then(t.bind(null,"d600"))},TheNav:function(){return t.e("chunk-517bb913").then(t.bind(null,"e8ed"))}},mixins:[C],computed:Object(p["a"])(Object(p["a"])({},Object(b["b"])({device:function(e){return e.app.device},isCollapse:function(e){return e.app.theNav.isCollapse}})),{},{currentRouters:function(){var e=this.$router.options.routes;return e}}),watch:{device:function(e){console.log("当前是什么设备",e)},isCollapse:function(e){console.log("当前是否卷侧边栏",e)}},methods:{},data:function(){return{fixedHeader:!1}},mounted:function(){}},j=S,T=(t("fb73"),Object(a["a"])(j,f,h,!1,null,"00ae884e",null)),A=T.exports;o["default"].use(l["a"]);var L=[{path:"/",name:"主页",component:A,icon:"el-icon-eleme",redirect:"/home",children:[{path:"home",name:"Home",component:function(){return t.e("chunk-f0e12240").then(t.bind(null,"7abe"))}}]},{path:"/about",name:"About",icon:"el-icon-info",component:A,redirect:"/about/abc",children:[{path:"ab",name:"ab",component:function(){return t.e("chunk-2d0ceb84").then(t.bind(null,"613f"))}},{hidden:!0,path:"abc",name:"ABC",component:function(){return t.e("chunk-2d224560").then(t.bind(null,"e065"))}}]},{hidden:!0,path:"/login",name:"Login",component:function(){return t.e("chunk-1ad4482b").then(t.bind(null,"a55b"))}},{path:"/404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))},hidden:!0},{path:"*",redirect:"/404",hidden:!0}],N=new l["a"]({routes:L}),P=N;P.beforeEach((function(e,n,t){document.title="my-admin-"+e.name;var o=Object(v["a"])();"/login"===e.path||o?t():t("/login")}));var $=t("5c96"),x=t.n($);t("0fae");o["default"].use(x.a),o["default"].config.productionTip=!1,new o["default"]({router:P,store:y,render:function(e){return e(s)}}).$mount("#app")},"7faf":function(e,n,t){"use strict";t("b8ff")},b8ff:function(e,n,t){},cc33:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c}));var o="admin-token";function r(){return sessionStorage.getItem(o)}function c(e){return sessionStorage.setItem(o,e)}},dd9f:function(e,n,t){},fb73:function(e,n,t){"use strict";t("dd9f")}});
//# sourceMappingURL=app.d4aa51c6.js.map