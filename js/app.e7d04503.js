(function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],C=0,s=[];C<u.length;C++)a=u[C],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&s.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6997e7cc"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"3adab171"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],C=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(C===r||C===i))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],C=l.getAttribute("data-href");if(C===r||C===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,C=document.createElement("script");C.charset="utf-8",C.timeout=120,c.nc&&C.setAttribute("nonce",c.nc),C.src=u(e);var s=new Error;l=function(t){C.onerror=C.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:C})}),12e4);C.onerror=C.onload=l,document.head.appendChild(C)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/lovemathe/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],C=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=C;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("5cac");var i=n("6b0d"),o=n.n(i);const u={},c=o()(u,[["render",a]]);var l=c,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s={class:"home"};function d(e,t,n,a,i,o){var u=Object(r["x"])("OverallBadge");return Object(r["q"])(),Object(r["f"])("div",s,[Object(r["h"])(u)])}var f={class:"overall_badge"},h={class:"badges"};function p(e,t,n,a,i,o){var u=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["f"])("div",f,[Object(r["g"])("div",h,[Object(r["h"])(u,{class:"counting_one",to:"/counting_one",innerHTML:e.currentBadgeByName("CountingOne"),title:"Abzählen 1"},null,8,["innerHTML"]),Object(r["h"])(u,{class:"add_quantities",to:"/add_quantities",innerHTML:e.currentBadgeByName("AddQuantities"),title:"Mengen ergänzen"},null,8,["innerHTML"]),Object(r["h"])(u,{class:"quantity_comparison",to:"/quantity_comparison",innerHTML:e.currentBadgeByName("QuantityComparison"),title:"Mengenvergleich"},null,8,["innerHTML"]),Object(r["h"])(u,{class:"quantity_equality",to:"/quantity_equality",innerHTML:e.currentBadgeByName("QuantityEquality"),title:"Mengengleichheit"},null,8,["innerHTML"]),Object(r["h"])(u,{class:"reduce_quantities",to:"/reduce_quantities",innerHTML:e.currentBadgeByName("ReduceQuantities"),title:"Mengen reduzieren"},null,8,["innerHTML"])])])}var g=n("5530"),m=n("5502"),b={name:"OverallBadge",computed:Object(g["a"])({},Object(m["c"])(["currentBadgeByName"]))};n("9026");const v=o()(b,[["render",p]]);var y=v,w={name:"Home",components:{OverallBadge:y}};n("7c6f");const O=o()(w,[["render",d]]);var j=O,B=[{path:"/",name:"Home",component:j},{path:"/quantity_equality",name:"QuantityEqualitiyView",component:function(){return n.e("about").then(n.bind(null,"a7cd"))}},{path:"/quantity_comparison",name:"QuantityComparisonView",component:function(){return n.e("about").then(n.bind(null,"2eb7"))}},{path:"/add_quantities",name:"AddQuantitiesView",component:function(){return n.e("about").then(n.bind(null,"1601"))}},{path:"/reduce_quantities",name:"ReduceQuantitiesView",component:function(){return n.e("about").then(n.bind(null,"3c6d"))}},{path:"/counting_one",name:"CountingOneView",component:function(){return n.e("about").then(n.bind(null,"424a"))}}],M=Object(C["a"])({history:Object(C["b"])("/lovemathe/"),routes:B}),_=M,L=(n("b0c0"),n("99af"),new m["a"].Store({state:{currentBadges:{QuantityEquality:'<svg iwidth="150" height="150" viewBox="0 0 192.62 192.22" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M.17,42.44,14.85,32.32l-.74-17.89,17.8.49L41.75,0,55.86,10.93,72.55,4.67l5,17.18,17.15,4.81-6,16.87,11.06,14L85.15,67.68l.74,17.89-17.8-.49L58.25,100,44.14,89.07,27.45,95.33l-5-17.18L5.27,73.34l6-16.87Z" transform="translate(-0.17)" style="fill: #f90"/>\n      </svg>',QuantityComparison:'<svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3.94318 9.35559L3.35576 9.12402C3.04797 9.71697 2.63817 10.545 2.20551 11.5625C2.0437 11.9414 1.85376 12.3993 1.6515 12.9536C1.28796 13.9741 1.0143 15.0242 0.83366 16.092C0.497358 17.6359 0.257124 19.199 0.114325 20.7725C0.0598028 21.4637 0.0298963 22.2075 0.0298963 22.2075C0.0193436 22.4724 0.00351756 22.8934 0 23.4355C0 23.8741 -5.15247e-06 24.4372 0.038688 25.0968L0.7422 25.067C0.710542 24.4302 0.703514 23.8776 0.705273 23.4373C0.705273 23.2618 0.705274 22.8478 0.728138 22.2987C0.728138 22.2987 0.756273 21.597 0.810795 20.8953C0.950091 19.3194 1.18858 17.7539 1.52486 16.2078C1.86237 14.6967 2.31511 13.2136 2.87912 11.7712C3.21681 10.9046 3.58263 10.0994 3.94318 9.35559Z" fill="#0C6634"/>\n      <path d="M4.73301 6.72419C5.93602 4.80676 6.53752 3.84892 7.56114 2.86476C8.44053 2.02271 10.5722 -0.00525263 13.4671 1.02239e-05C14.0563 1.02239e-05 15.2963 0.0210608 16.4272 0.854347C17.1081 1.31745 17.6105 1.99805 17.8518 2.78406C18.1561 3.85593 17.8078 4.75763 17.6267 5.22954C17.263 6.12909 16.6536 6.90887 15.8679 7.48029C14.4714 8.49778 12.9395 8.54339 10.493 8.61356C9.36389 8.64689 8.45285 8.59075 6.5516 8.71881C5.54733 8.78548 4.76467 8.87144 3.99433 9.38018C3.11493 9.96611 2.76317 10.7608 2.69106 10.7169C2.57498 10.6555 3.39633 8.8539 4.73301 6.72419Z" fill="#016634"/>\n      <path d="M4.7876 8.2066C5.35387 7.58427 5.98338 7.02222 6.66597 6.5295C7.5647 5.86112 9.1599 4.69978 11.4656 4.12788C12.9061 3.77702 14.0616 3.77702 14.0581 3.73492C14.0545 3.69282 12.6845 3.60159 11.4006 3.83316C7.40465 4.56294 4.78584 8.20485 4.7876 8.2066Z" fill="#004620"/>\n      </svg>',AddQuantities:'<svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3.94318 9.35559L3.35576 9.12402C3.04797 9.71697 2.63817 10.545 2.20551 11.5625C2.0437 11.9414 1.85376 12.3993 1.6515 12.9536C1.28796 13.9741 1.0143 15.0242 0.83366 16.092C0.497358 17.6359 0.257124 19.199 0.114325 20.7725C0.0598028 21.4637 0.0298963 22.2075 0.0298963 22.2075C0.0193436 22.4724 0.00351756 22.8934 0 23.4355C0 23.8741 -5.15247e-06 24.4372 0.038688 25.0968L0.7422 25.067C0.710542 24.4302 0.703514 23.8776 0.705273 23.4373C0.705273 23.2618 0.705274 22.8478 0.728138 22.2987C0.728138 22.2987 0.756273 21.597 0.810795 20.8953C0.950091 19.3194 1.18858 17.7539 1.52486 16.2078C1.86237 14.6967 2.31511 13.2136 2.87912 11.7712C3.21681 10.9046 3.58263 10.0994 3.94318 9.35559Z" fill="#0C6634"/>\n      <path d="M4.73301 6.72419C5.93602 4.80676 6.53752 3.84892 7.56114 2.86476C8.44053 2.02271 10.5722 -0.00525263 13.4671 1.02239e-05C14.0563 1.02239e-05 15.2963 0.0210608 16.4272 0.854347C17.1081 1.31745 17.6105 1.99805 17.8518 2.78406C18.1561 3.85593 17.8078 4.75763 17.6267 5.22954C17.263 6.12909 16.6536 6.90887 15.8679 7.48029C14.4714 8.49778 12.9395 8.54339 10.493 8.61356C9.36389 8.64689 8.45285 8.59075 6.5516 8.71881C5.54733 8.78548 4.76467 8.87144 3.99433 9.38018C3.11493 9.96611 2.76317 10.7608 2.69106 10.7169C2.57498 10.6555 3.39633 8.8539 4.73301 6.72419Z" fill="#016634"/>\n      <path d="M4.7876 8.2066C5.35387 7.58427 5.98338 7.02222 6.66597 6.5295C7.5647 5.86112 9.1599 4.69978 11.4656 4.12788C12.9061 3.77702 14.0616 3.77702 14.0581 3.73492C14.0545 3.69282 12.6845 3.60159 11.4006 3.83316C7.40465 4.56294 4.78584 8.20485 4.7876 8.2066Z" fill="#004620"/>\n      </svg>',ReduceQuantities:'<svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3.94318 9.35559L3.35576 9.12402C3.04797 9.71697 2.63817 10.545 2.20551 11.5625C2.0437 11.9414 1.85376 12.3993 1.6515 12.9536C1.28796 13.9741 1.0143 15.0242 0.83366 16.092C0.497358 17.6359 0.257124 19.199 0.114325 20.7725C0.0598028 21.4637 0.0298963 22.2075 0.0298963 22.2075C0.0193436 22.4724 0.00351756 22.8934 0 23.4355C0 23.8741 -5.15247e-06 24.4372 0.038688 25.0968L0.7422 25.067C0.710542 24.4302 0.703514 23.8776 0.705273 23.4373C0.705273 23.2618 0.705274 22.8478 0.728138 22.2987C0.728138 22.2987 0.756273 21.597 0.810795 20.8953C0.950091 19.3194 1.18858 17.7539 1.52486 16.2078C1.86237 14.6967 2.31511 13.2136 2.87912 11.7712C3.21681 10.9046 3.58263 10.0994 3.94318 9.35559Z" fill="#0C6634"/>\n      <path d="M4.73301 6.72419C5.93602 4.80676 6.53752 3.84892 7.56114 2.86476C8.44053 2.02271 10.5722 -0.00525263 13.4671 1.02239e-05C14.0563 1.02239e-05 15.2963 0.0210608 16.4272 0.854347C17.1081 1.31745 17.6105 1.99805 17.8518 2.78406C18.1561 3.85593 17.8078 4.75763 17.6267 5.22954C17.263 6.12909 16.6536 6.90887 15.8679 7.48029C14.4714 8.49778 12.9395 8.54339 10.493 8.61356C9.36389 8.64689 8.45285 8.59075 6.5516 8.71881C5.54733 8.78548 4.76467 8.87144 3.99433 9.38018C3.11493 9.96611 2.76317 10.7608 2.69106 10.7169C2.57498 10.6555 3.39633 8.8539 4.73301 6.72419Z" fill="#016634"/>\n      <path d="M4.7876 8.2066C5.35387 7.58427 5.98338 7.02222 6.66597 6.5295C7.5647 5.86112 9.1599 4.69978 11.4656 4.12788C12.9061 3.77702 14.0616 3.77702 14.0581 3.73492C14.0545 3.69282 12.6845 3.60159 11.4006 3.83316C7.40465 4.56294 4.78584 8.20485 4.7876 8.2066Z" fill="#004620"/>\n      </svg>',CountingOne:'<svg width="52" height="62" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g clip-path="url(#clip0_201_114)">\n      <path d="M50.8677 16.6842C50.2156 16.032 49.0743 16.7929 44.8897 17.7168C42.9332 18.1515 42.9332 18.0428 41.3572 18.4233C39.7812 18.8037 38.2052 19.1841 36.5748 19.9993C34.6727 20.9232 32.2814 22.0644 31.0315 24.7274C30.1076 26.7382 30.2706 28.6403 30.3793 29.5098C30.488 30.7598 30.9771 32.8249 32.4988 34.7814C33.0423 35.4335 34.6727 37.3356 37.553 38.2052C40.1073 38.966 42.2267 38.4769 42.7702 38.3139C43.531 38.0965 45.5418 37.4987 47.2266 35.7596C49.3461 33.5314 49.7808 30.8141 50.2156 28.2055C50.433 26.6838 50.6504 24.4557 50.7591 22.934C50.7591 22.6622 50.8134 22.1188 50.8677 21.0862C51.0851 17.119 51.0308 16.9016 50.8677 16.6842Z" fill="#00742C"/>\n      <path d="M9.34749 -5.56372e-06C10.4344 -0.217389 11.0866 1.35864 14.7277 5.10851C16.4125 6.90193 16.5211 6.79323 17.8254 8.20623C19.1841 9.67357 20.4884 11.1409 21.6297 13.043C22.934 15.2712 24.6187 18.0972 24.0752 21.5753C23.6948 24.2383 22.1731 25.9773 21.4666 26.7925C20.4884 27.9338 18.6406 29.7272 15.7603 30.5967C14.7821 30.9228 11.7931 31.6837 8.31491 30.5424C5.21719 29.5642 3.42378 27.6077 2.98901 27.1186C2.33686 26.3578 0.706483 24.4013 0.21737 21.4666C-0.489127 17.9341 0.923867 14.8364 2.28251 11.9561C3.04336 10.2714 4.40201 7.9345 5.32589 6.30412C5.43458 6.03239 5.76065 5.43459 6.4128 4.34767C8.80403 0.271724 9.02141 0.0543404 9.34749 -5.56372e-06Z" fill="#00742C"/>\n      <path d="M19.2385 61.4652C19.5102 62.1717 21.4123 61.7913 24.8904 61.7913C27.7164 61.7913 29.7272 62.063 29.9446 61.4109C30.0533 61.0848 29.6185 60.8131 29.5098 59.7262C29.5098 59.6718 29.5098 59.5631 29.5098 58.6936C29.5098 58.0958 29.5098 57.7697 29.5098 57.498C29.5098 55.1068 29.5098 53.3133 29.3468 51.7373C29.2381 50.3243 29.1294 50.9765 28.6403 47.6614C28.5859 47.3353 28.3142 45.0528 28.3686 42.1724C28.4229 40.9225 28.4773 40.0529 28.9664 39.1834C29.4011 38.4226 30.0533 37.8247 30.2707 37.6617C30.4337 37.553 30.9772 37.0639 31.7924 36.6291C32.8793 36.0857 33.2597 36.1944 34.401 35.7053C35.2161 35.3792 35.9226 35.1075 36.6291 34.5096C37.8791 33.4227 38.2595 32.0097 38.3682 31.5206C38.8573 29.7272 38.3682 28.2055 38.3139 28.2055C38.2595 28.2055 38.4769 29.1837 38.0965 30.3794C37.9878 30.7054 37.6617 31.6837 36.8465 32.4988C36.4661 32.8249 36.0857 33.0967 33.7488 33.7488C31.5206 34.401 31.575 34.2379 30.4337 34.6727C28.912 35.2161 28.1512 35.4879 27.3903 36.0857C26.7925 36.5204 26.5751 36.9009 25.9773 36.9552C25.3795 37.0639 24.8904 36.8465 23.9665 36.2487C22.4992 35.3248 21.8471 34.7814 20.4341 33.8031C19.2385 32.988 19.2385 33.0423 18.4233 32.4445C17.9885 32.1184 16.9559 31.3032 15.9233 30.2163C14.9451 29.1837 13.5865 27.7708 12.6626 25.5426C11.7387 23.3144 11.63 21.3579 11.63 20.4884C11.5757 18.5319 11.8474 17.119 11.7387 17.0646C11.5757 17.0646 11.1409 18.4776 10.8692 20.0536C10.5975 21.4666 10.217 23.7492 10.8692 26.6295C11.0866 27.6621 11.63 29.8359 13.1517 31.8467C13.8582 32.7706 15.2169 34.1836 15.4342 34.401C16.0864 35.1075 16.7385 35.7596 16.7929 35.8139C17.3363 36.3574 17.445 36.4661 18.2059 37.1726C19.2928 38.2595 19.5645 38.5312 19.7276 38.7486C20.1623 39.2921 20.4341 39.5638 20.6514 40.0529C21.0319 40.8138 21.0862 41.5203 21.1406 41.9007C21.3036 44.1832 21.2493 46.3027 21.3036 48.5309C21.3036 49.183 21.3579 50.27 21.2492 51.7373C21.2492 52.0634 21.1949 52.4438 21.1949 52.8242C20.9775 55.1611 20.5971 56.7915 20.5428 57.1719C20.2167 58.6392 20.0536 59.4001 19.6732 60.1609C19.3471 60.9761 19.1298 61.1935 19.2385 61.4652Z" fill="#6A4527"/>\n      </g>\n      </svg>'}},mutations:{setBadge:function(e,t){e.currentBadges[t.name]=t.badge}},actions:{fetchBadge:function(e,t){fetch(t.badgePath).then((function(e){return e.text()})).then((function(n){console.log("get new badge for ".concat(t.name," from ").concat(t.badgePath)),t["badge"]=n,e.commit("setBadge",t)}))}},getters:{currentBadgeByName:function(e){return function(t){return e.currentBadges[t]}}}}));Object(r["c"])(l).use(_).use(L).mount("#app")},"5cac":function(e,t,n){"use strict";n("876a")},"5cf2":function(e,t,n){},"7c6f":function(e,t,n){"use strict";n("5cf2")},"876a":function(e,t,n){},9026:function(e,t,n){"use strict";n("eb8d")},eb8d:function(e,t,n){}});
//# sourceMappingURL=app.e7d04503.js.map