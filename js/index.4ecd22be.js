(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,v=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={index:0},a=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-4d101468":"d01b9bc3"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/beer-choice/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"1c3c":function(e,t,r){},"365c":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r("1da1"),i=(r("96cf"),r("bc3a")),a=r.n(i),o={getBeer:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("https://random-data-api.com/api/beer/random_beer");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()}},s={getUser:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.a.get(" https://random-data-api.com/api/users/random_user");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()}}},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"vm",(function(){return I}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{style:{background:e.$vuetify.theme.themes["light"].background}},[r("Navigation"),r("v-container",[r("router-view")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-navigation-drawer",{attrs:{width:"400",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[e.currentUser?n("v-card",{attrs:{flat:""}},[n("v-btn",{staticClass:"navigation-control",attrs:{fab:"",dark:"",large:"",color:"yellow darken-4"},on:{click:function(t){e.drawer=!1}}},[n("v-icon",{attrs:{dark:""}},[e._v(" mdi-arrow-left-bold ")])],1),e.avatarIsAvailable?n("AvatarComponent",{ref:"avatar",staticClass:"ma-5",attrs:{src:e.currentUser.avatar}}):n("v-img",{ref:"avatar1",staticClass:"ma-5",attrs:{src:r("bbc7")}}),n("v-card-title",{staticClass:"deep-purple-darken-4--text px-1 d-flex justify-center"},[n("div",{staticClass:"text-h4 full-name"},[e._v(" "+e._s(e.userFullName)+" ")])]),n("v-list",{staticClass:"user-info",attrs:{"three-line":""}},[n("v-list-item",[n("v-list-item-icon",{staticClass:"user-icon"},[n("v-icon",{attrs:{color:"yellow darken-4"}},[e._v(" mdi-phone ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.userPhone))]),n("v-list-item-subtitle",[e._v("Phone")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"yellow darken-4"}},[e._v(" mdi-email ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.userEmail))]),n("v-list-item-subtitle",[e._v("Email")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"yellow darken-4"}},[e._v(" mdi-map-marker ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.userFirstAddress)+"t")]),n("v-list-item-subtitle",[e._v(e._s(e.userSecondAddress))])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"yellow darken-4"}},[e._v(" mdi-human-male ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.userEmployment)+"t")]),n("v-list-item-subtitle",[e._v(e._s(e.userSkills))])],1)],1),n("v-divider")],1)],1):n("v-skeleton-loader",e._b({attrs:{type:"image, heading, list-item-three-line, divider, list-item-three-line, divider, list-item-three-line, divider, dlist-item-three-line, divider"}},"v-skeleton-loader",e.attrs,!1))],1),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"mr-6"},[e._v(e._s(e.greetingText))]),n("img",{staticClass:"first-beer",attrs:{alt:"beer",src:r("bc44")}}),n("img",{staticClass:"second-beer",attrs:{alt:"beer",src:r("bc44")}}),n("v-spacer")],1)],1)},s=[],c=r("1da1"),u=(r("99af"),r("96cf"),r("365c")),l={name:"Navigation",components:{AvatarComponent:n["default"].component("AvatarComponent",{render:function(e){var t;return t=e("img",{attrs:{src:this.src,width:400}}),t},props:{src:{type:String,required:!0}}})},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:case"end":return t.stop()}}),t)})))()},updated:function(){var e;null!==(e=this.$refs.avatar)&&void 0!==e&&e.$el.clientHeight||(this.avatarIsAvailable=!1)},data:function(){return{currentUser:null,drawer:!1,avatarIsAvailable:!0}},computed:{greetingText:function(){return this.currentUser?"hello, ".concat(this.currentUser.first_name,"!"):"hello you..."},userFullName:function(){return this.currentUser?"".concat(this.currentUser.first_name," ").concat(this.currentUser.last_name):"Anonymous"},userPhone:function(){var e;return(null===(e=this.currentUser)||void 0===e?void 0:e.phone_number)||"(xxx)-xxx-xx-xx"},userEmail:function(){var e;return(null===(e=this.currentUser)||void 0===e?void 0:e.email)||"xxx@xxx.xx"},userFirstAddress:function(){return this.currentUser?"".concat(this.currentUser.address.street_address,", ").concat(this.currentUser.address.street_name):"someStreet someAddress"},userSecondAddress:function(){return this.currentUser?"".concat(this.currentUser.address.country,", ").concat(this.currentUser.address.city,", ").concat(this.currentUser.address.state,", ").concat(this.currentUser.address.zip_code):"someStreet someAddress"},userEmployment:function(){var e,t;return(null===(e=this.currentUser)||void 0===e||null===(t=e.employment)||void 0===t?void 0:t.title)||"some employment"},userSkills:function(){var e,t;return(null===(e=this.currentUser)||void 0===e||null===(t=e.employment)||void 0===t?void 0:t.key_skill)||"some skills"}},methods:{getUser:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["b"].getUser();case 2:e.currentUser=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},d=l,v=(r("ec86"),r("2877")),f=Object(v["a"])(d,o,s,!1,null,"7d39212d",null),m=f.exports,p={name:"App",components:{Navigation:m}},h=p,b=(r("034f"),Object(v["a"])(h,i,a,!1,null,null,null)),g=b.exports,A=r("bee2"),w=r("d4ec"),U=(r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["default"].use(U["a"]);var x=function(e,t,r){r()},C=Object(A["a"])((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x;Object(w["a"])(this,e),this.path=t,this.name=i,this.component=function(){return r("a383")("./".concat(n))},this.beforeEnter=a})),y=new U["a"]({mode:"history",base:"/beer-choice/",routes:[{path:"/",redirect:"/main-page"},new C("/main-page","BeerChoice","mainPage")],scrollBehavior:function(){return{x:0,y:0}}}),k=r("ce5b"),O=r.n(k);r("bf40"),r("41e6");n["default"].use(O.a);var j={icons:{iconfont:"mdi"}},E=new O.a(j),Q=r("1633"),P=r.n(Q),B=r("2f62");r("1ca9"),r("73ec");n["default"].use(B["a"]),n["default"].config.productionTip=!1,n["default"].use(P.a,{defaultPosition:"toast-bottom-left",defaultType:"info",defaultTimeout:4e3});var I=new n["default"]({router:y,vuetify:E,render:function(e){return e(g)}}).$mount("#app")},"73ec":function(e,t,r){},"85ec":function(e,t,r){},a383:function(e,t,r){var n={"./main-page":["2dcf","chunk-4d101468"],"./main-page.vue":["2dcf","chunk-4d101468"]};function i(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return r.e(t[1]).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id="a383",e.exports=i},bbc7:function(e,t,r){e.exports=r.p+"img/chudik.74efcfe1.png"},bc44:function(e,t){e.exports="data:image/png;base64,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"},ec86:function(e,t,r){"use strict";r("1c3c")}});
//# sourceMappingURL=index.4ecd22be.js.map