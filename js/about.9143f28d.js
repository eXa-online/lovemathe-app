(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1601:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s={class:"compare_quantities"};function o(e,t,n,o,i,r){var u=Object(c["x"])("AddQuantities",!0);return Object(c["q"])(),Object(c["f"])("div",s,[Object(c["h"])(u)])}var i=n("ade3"),r=["src"],u=["src"],a={key:0,class:"puzzle_bottom"},g={class:"puzzle_buttons"},d=["onClick"],f=["src"],b={class:"puzzle_badge_container"},p=["src"],l=["src"];function v(e,t,n,s,o,v){return Object(c["q"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",Object(i["a"])({class:"puzzle_body"},Object(c["z"])(o.completed&&"click"),t[0]||(t[0]=function(){return v.switchToHome&&v.switchToHome.apply(v,arguments)})),[Object(c["g"])("img",{class:"puzzle",src:v.currentPuzzleBody},null,8,r),o.completed?(Object(c["q"])(),Object(c["f"])("img",{key:0,class:"puzzle_badge__large",src:v.currentBadge},null,8,u)):Object(c["e"])("",!0)],16),o.completed?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["f"])("div",a,[Object(c["g"])("div",g,[(Object(c["q"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(v.buttonImages,(function(e,t){return Object(c["q"])(),Object(c["f"])("button",{key:e,onClick:function(e){return v.evalSelection(t)}},[Object(c["g"])("img",{src:e},null,8,f)],8,d)})),128))]),Object(c["g"])("div",b,[Object(c["g"])("img",{src:v.badgeBackground},null,8,p),Object(c["g"])("img",{class:"puzzle_badge__small",src:v.currentBadge},null,8,l)])]))],64)}var m=n("5530"),O=(n("b0c0"),n("5502")),j={name:"AddQuantities",data:function(){return{completed:!1,badgeIndex:0,puzzleIndex:0,solutions:[0,1,0,2,0,1]}},computed:{buttonImages:function(){return[n("ba52"),n("3c06"),n("388e")]},currentBadge:function(){return n("9cd9")("./".concat(this.badgeIndex,".svg"))},currentPuzzleBody:function(){return n("27d9")("./".concat(this.puzzleIndex,".svg"))},badgeBackground:function(){return n("c92a")}},methods:Object(m["a"])(Object(m["a"])({},Object(O["b"])(["fetchBadge"])),{},{evalSelection:function(e){var t=e==this.solutions[this.puzzleIndex];t&&this.badgeIndex++,this.puzzleIndex<this.solutions.length&&this.puzzleIndex++,this.puzzleIndex===this.solutions.length&&(this.completed=!0,this.fetchBadge({name:this.$options.name,badgePath:this.currentBadge}))},switchToHome:function(){this.$router.push({path:"/"})}})},z=(n("81e3"),n("6b0d")),h=n.n(z);const x=h()(j,[["render",v],["__scopeId","data-v-777be6fa"]]);var _=x,k={name:"AddQuantitiesView",components:{AddQuantities:_}};const y=h()(k,[["render",o]]);t["default"]=y},"167e":function(e,t,n){e.exports=n.p+"img/1.a9e33fbc.svg"},"171e":function(e,t,n){e.exports=n.p+"img/4.a27e009c.svg"},"17fa":function(e,t,n){e.exports=n.p+"img/5.b8ae050b.svg"},"1c33":function(e,t,n){e.exports=n.p+"img/3.e717d386.svg"},2008:function(e,t,n){e.exports=n.p+"img/2.e87cfb1f.svg"},"24ac":function(e,t,n){"use strict";n("f640")},2587:function(e,t,n){var c={"./0.svg":"df4f","./1.svg":"5886","./2.svg":"8f0a","./3.svg":"be87","./4.svg":"6c6a","./5.svg":"970c","./6.svg":"8499"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="2587"},2644:function(e,t,n){e.exports=n.p+"img/0.952930d0.svg"},"27d9":function(e,t,n){var c={"./0.svg":"3260","./1.svg":"6fb0","./2.svg":"d3f9","./3.svg":"3bea","./4.svg":"9776","./5.svg":"d8ac","./6.svg":"cef1"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="27d9"},2907:function(e,t,n){e.exports=n.p+"img/4.0ad771b4.svg"},"2b08":function(e,t,n){e.exports=n.p+"img/1.a9e33fbc.svg"},"2c00":function(e,t,n){var c={"./0.svg":"777b","./1.svg":"2b08","./2.svg":"2008","./3.svg":"53f7","./4.svg":"171e","./5.svg":"b632","./6.svg":"c5cb"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="2c00"},"2eb7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s={class:"compare_quantities"};function o(e,t,n,o,i,r){var u=Object(c["x"])("QuantityComparison",!0);return Object(c["q"])(),Object(c["f"])("div",s,[Object(c["h"])(u)])}var i=n("ade3"),r=["src"],u={key:1},a=["src"],g=["src"],d={key:0,class:"puzzle_bottom"},f={class:"puzzle_buttons"},b=["onClick"],p=["src"],l={class:"puzzle_badge_container"},v=["src"],m=["src"];function O(e,t,n,s,o,O){return o.showDemo?(Object(c["q"])(),Object(c["f"])("video",{key:0,id:"puzzle_demo",autoplay:"",src:O.demoVideoPath,onEnded:t[0]||(t[0]=function(e){return o.showDemo=!1})},null,40,r)):(Object(c["q"])(),Object(c["f"])("div",u,[Object(c["g"])("div",Object(i["a"])({class:"puzzle_body"},Object(c["z"])(o.completed&&"click"),t[1]||(t[1]=function(){return O.switchToHome&&O.switchToHome.apply(O,arguments)})),[Object(c["g"])("img",{class:"puzzle",src:O.currentPuzzleBody},null,8,a),o.completed?(Object(c["q"])(),Object(c["f"])("img",{key:0,class:"puzzle_badge__large",src:O.currentBadge},null,8,g)):Object(c["e"])("",!0)],16),o.completed?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["f"])("div",d,[Object(c["g"])("div",f,[(Object(c["q"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(O.buttonImages,(function(e,t){return Object(c["q"])(),Object(c["f"])("button",{key:e,onClick:function(e){return O.evalSelection(t)}},[Object(c["g"])("img",{src:e},null,8,p)],8,b)})),128))]),Object(c["g"])("div",l,[Object(c["g"])("img",{src:O.badgeBackground},null,8,v),Object(c["g"])("img",{class:"puzzle_badge__small",src:O.currentBadge},null,8,m)])]))]))}var j=n("5530"),z=(n("b0c0"),n("5502")),h={name:"QuantityComparison",data:function(){return{completed:!1,showDemo:!0,badgeIndex:0,puzzleIndex:0,solutions:[0,2,1,0,1,0]}},computed:{buttonImages:function(){return[n("e523"),n("7f04"),n("b0a9")]},currentBadge:function(){return n("2c00")("./".concat(this.badgeIndex,".svg"))},currentPuzzleBody:function(){return n("2587")("./".concat(this.puzzleIndex,".svg"))},demoVideoPath:function(){return n("b915")},badgeBackground:function(){return n("c92a")}},methods:Object(j["a"])(Object(j["a"])({},Object(z["b"])(["fetchBadge"])),{},{evalSelection:function(e){var t=e==this.solutions[this.puzzleIndex];t&&this.badgeIndex++,this.puzzleIndex<this.solutions.length&&this.puzzleIndex++,this.puzzleIndex===this.solutions.length&&(this.completed=!0,this.fetchBadge({name:this.$options.name,badgePath:this.currentBadge}))},switchToHome:function(){this.$router.push({path:"/"})}})},x=(n("3942"),n("6b0d")),_=n.n(x);const k=_()(h,[["render",O],["__scopeId","data-v-2a5c10ea"]]);var y=k,I={name:"QuantityComparisonView",components:{QuantityComparison:y}};const w=_()(I,[["render",o]]);t["default"]=w},3005:function(e,t,n){e.exports=n.p+"img/1.35198ebb.svg"},"31fd":function(e,t,n){e.exports=n.p+"img/1.b7df94de.svg"},3260:function(e,t,n){e.exports=n.p+"img/0.467a0f29.svg"},"388e":function(e,t,n){e.exports=n.p+"img/2.02da2197.svg"},3942:function(e,t,n){"use strict";n("fa83")},"3bea":function(e,t,n){e.exports=n.p+"img/3.8a7325d1.svg"},"3c06":function(e,t,n){e.exports=n.p+"img/1.35198ebb.svg"},"3c6d":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s={class:"compare_quantities"};function o(e,t,n,o,i,r){var u=Object(c["x"])("ReduceQuantities",!0);return Object(c["q"])(),Object(c["f"])("div",s,[Object(c["h"])(u)])}var i=n("ade3"),r=["src"],u=["src"],a={key:0,class:"puzzle_bottom"},g={class:"puzzle_buttons"},d=["onClick"],f=["src"],b={class:"puzzle_badge_container"},p=["src"],l=["src"];function v(e,t,n,s,o,v){return Object(c["q"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",Object(i["a"])({class:"puzzle_body"},Object(c["z"])(o.completed&&"click"),t[0]||(t[0]=function(){return v.switchToHome&&v.switchToHome.apply(v,arguments)})),[Object(c["g"])("img",{class:"puzzle",src:v.currentPuzzleBody},null,8,r),o.completed?(Object(c["q"])(),Object(c["f"])("img",{key:0,class:"puzzle_badge__large",src:v.currentBadge},null,8,u)):Object(c["e"])("",!0)],16),o.completed?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["f"])("div",a,[Object(c["g"])("div",g,[(Object(c["q"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(v.buttonImages,(function(e,t){return Object(c["q"])(),Object(c["f"])("button",{key:e,onClick:function(e){return v.evalSelection(t)}},[Object(c["g"])("img",{src:e},null,8,f)],8,d)})),128))]),Object(c["g"])("div",b,[Object(c["g"])("img",{src:v.badgeBackground},null,8,p),Object(c["g"])("img",{class:"puzzle_badge__small",src:v.currentBadge},null,8,l)])]))],64)}var m=n("5530"),O=(n("b0c0"),n("5502")),j={name:"ReduceQuantities",data:function(){return{completed:!1,badgeIndex:0,puzzleIndex:0,solutions:[2,1,0,1,2,1]}},computed:{buttonImages:function(){return[n("f3b5"),n("3005"),n("711e")]},currentBadge:function(){return n("9ee1")("./".concat(this.badgeIndex,".svg"))},currentPuzzleBody:function(){return n("8dec")("./".concat(this.puzzleIndex,".svg"))},badgeBackground:function(){return n("c92a")}},methods:Object(m["a"])(Object(m["a"])({},Object(O["b"])(["fetchBadge"])),{},{evalSelection:function(e){var t=e==this.solutions[this.puzzleIndex];t&&this.badgeIndex++,this.puzzleIndex<this.solutions.length&&this.puzzleIndex++,this.puzzleIndex===this.solutions.length&&(this.completed=!0,this.fetchBadge({name:this.$options.name,badgePath:this.currentBadge}))},switchToHome:function(){this.$router.push({path:"/"})}})},z=(n("24ac"),n("6b0d")),h=n.n(z);const x=h()(j,[["render",v],["__scopeId","data-v-4bb9822d"]]);var _=x,k={name:"ReduceQuantitiesView",components:{ReduceQuantities:_}};const y=h()(k,[["render",o]]);t["default"]=y},4241:function(e,t,n){e.exports=n.p+"img/4.02ddbc94.svg"},"424a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s={class:"counting_one"};function o(e,t,n,o,i,r){var u=Object(c["x"])("CountingOne",!0);return Object(c["q"])(),Object(c["f"])("div",s,[Object(c["h"])(u)])}var i=n("ade3"),r=["src"],u=["src"],a={key:0,class:"puzzle_bottom"},g={class:"puzzle_buttons"},d=["onClick"],f=["src"],b={class:"puzzle_badge_container"},p=["src"],l=["src"];function v(e,t,n,s,o,v){return Object(c["q"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",Object(i["a"])({class:"puzzle_body"},Object(c["z"])(o.completed&&"click"),t[0]||(t[0]=function(){return v.switchToHome&&v.switchToHome.apply(v,arguments)})),[Object(c["g"])("img",{class:"puzzle",src:v.currentPuzzleBody},null,8,r),o.completed?(Object(c["q"])(),Object(c["f"])("img",{key:0,class:"puzzle_badge__large",src:v.currentBadge},null,8,u)):Object(c["e"])("",!0)],16),o.completed?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["f"])("div",a,[Object(c["g"])("div",g,[(Object(c["q"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(v.buttonImages,(function(e,t){return Object(c["q"])(),Object(c["f"])("button",{key:e,onClick:function(e){return v.evalSelection(t)}},[Object(c["g"])("img",{src:e},null,8,f)],8,d)})),128))]),Object(c["g"])("div",b,[Object(c["g"])("img",{src:v.badgeBackground},null,8,p),Object(c["g"])("img",{class:"puzzle_badge__small",src:v.currentBadge},null,8,l)])]))],64)}var m=n("5530"),O=(n("b0c0"),n("5502")),j={name:"CountingOne",data:function(){return{completed:!1,badgeIndex:0,puzzleIndex:0,solutions:[0,2,4,1,2,3]}},computed:{buttonImages:function(){return[n("8cfd"),n("c6cb"),n("c13c"),n("1c33"),n("55d4"),n("6e6f")]},currentBadge:function(){return n("9eeb")("./".concat(this.badgeIndex,".svg"))},currentPuzzleBody:function(){return n("ffb2")("./".concat(this.puzzleIndex,".svg"))},badgeBackground:function(){return n("c92a")}},methods:Object(m["a"])(Object(m["a"])({},Object(O["b"])(["fetchBadge"])),{},{evalSelection:function(e){var t=e==this.solutions[this.puzzleIndex];t&&this.badgeIndex++,this.puzzleIndex<this.solutions.length&&this.puzzleIndex++,this.puzzleIndex===this.solutions.length&&(this.completed=!0,this.fetchBadge({name:this.$options.name,badgePath:this.currentBadge}))},switchToHome:function(){this.$router.push({path:"/"})}})},z=(n("fd63"),n("6b0d")),h=n.n(z);const x=h()(j,[["render",v],["__scopeId","data-v-20de8de6"]]);var _=x,k={name:"CountingOneView",components:{CountingOne:_}};const y=h()(k,[["render",o]]);t["default"]=y},"48e6":function(e,t,n){e.exports=n.p+"img/4.6995d2f1.svg"},"53f7":function(e,t,n){e.exports=n.p+"img/3.406cc88c.svg"},"55d4":function(e,t,n){e.exports=n.p+"img/4.3c9a9f94.svg"},5886:function(e,t,n){e.exports=n.p+"img/1.fbdfa1f0.svg"},5993:function(e,t,n){e.exports=n.p+"img/2.7f7437f1.svg"},"5e7d":function(e,t,n){e.exports=n.p+"img/6.98f2fc5f.svg"},6769:function(e,t,n){e.exports=n.p+"img/2.1ec86295.svg"},"6a6d":function(e,t,n){},"6b35":function(e,t,n){e.exports=n.p+"img/1.e5a09d7a.svg"},"6c6a":function(e,t,n){e.exports=n.p+"img/4.e810e432.svg"},"6e6f":function(e,t,n){e.exports=n.p+"img/5.86c1e953.svg"},"6f13":function(e,t,n){e.exports=n.p+"img/6.667498c8.svg"},"6fb0":function(e,t,n){e.exports=n.p+"img/1.94da24f5.svg"},"6fb3":function(e,t,n){e.exports=n.p+"img/0.28dd0dc6.svg"},"711e":function(e,t,n){e.exports=n.p+"img/2.02da2197.svg"},"727e":function(e,t,n){e.exports=n.p+"img/2.e87cfb1f.svg"},"732d":function(e,t,n){e.exports=n.p+"img/5.d6673182.svg"},"777b":function(e,t,n){e.exports=n.p+"img/0.952930d0.svg"},"7f04":function(e,t,n){e.exports=n.p+"img/1.fa9b7449.svg"},"81e3":function(e,t,n){"use strict";n("eeef")},8499:function(e,t,n){e.exports=n.p+"img/6.667498c8.svg"},"85b0":function(e,t,n){e.exports=n.p+"img/4.197d9bf5.svg"},"85fd":function(e,t,n){e.exports=n.p+"img/4.45d55367.svg"},"87e1":function(e,t,n){e.exports=n.p+"img/3.3a750786.svg"},"8bde":function(e,t,n){e.exports=n.p+"img/1.a3d8cf23.svg"},"8cfd":function(e,t,n){e.exports=n.p+"img/0.56d64d9a.svg"},"8dec":function(e,t,n){var c={"./0.svg":"fd82","./1.svg":"8bde","./2.svg":"6769","./3.svg":"87e1","./4.svg":"2907","./5.svg":"a15e","./6.svg":"6f13"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="8dec"},"8f0a":function(e,t,n){e.exports=n.p+"img/2.157f7ed4.svg"},"970c":function(e,t,n){e.exports=n.p+"img/5.94fc4c0d.svg"},9776:function(e,t,n){e.exports=n.p+"img/4.521616eb.svg"},9786:function(e,t,n){e.exports=n.p+"img/0.952930d0.svg"},"9cd9":function(e,t,n){var c={"./0.svg":"2644","./1.svg":"cbc0","./2.svg":"727e","./3.svg":"e582","./4.svg":"85fd","./5.svg":"732d","./6.svg":"e81c"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="9cd9"},"9ee1":function(e,t,n){var c={"./0.svg":"9786","./1.svg":"167e","./2.svg":"fd86","./3.svg":"b684","./4.svg":"4241","./5.svg":"9fec","./6.svg":"5e7d"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="9ee1"},"9eeb":function(e,t,n){var c={"./0.svg":"c23f","./1.svg":"6b35","./2.svg":"5993","./3.svg":"a521","./4.svg":"85b0","./5.svg":"fbcd","./6.svg":"e7a5"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="9eeb"},"9fec":function(e,t,n){e.exports=n.p+"img/5.ccd0217a.svg"},a15e:function(e,t,n){e.exports=n.p+"img/5.384f0ee8.svg"},a521:function(e,t,n){e.exports=n.p+"img/3.b1c2cd4e.svg"},a9fc:function(e,t,n){e.exports=n.p+"img/3.56a65bb6.svg"},b0a9:function(e,t,n){e.exports=n.p+"img/2.e0c0aeee.svg"},b632:function(e,t,n){e.exports=n.p+"img/5.68418118.svg"},b684:function(e,t,n){e.exports=n.p+"img/3.406cc88c.svg"},b915:function(e,t,n){e.exports=n.p+"media/demo.0acfc199.mp4"},ba52:function(e,t,n){e.exports=n.p+"img/0.8bf4a6e3.svg"},be87:function(e,t,n){e.exports=n.p+"img/3.220c2160.svg"},c13c:function(e,t,n){e.exports=n.p+"img/2.c72ae3aa.svg"},c23f:function(e,t,n){e.exports=n.p+"img/0.5251ae94.svg"},c5cb:function(e,t,n){e.exports=n.p+"img/6.c864d4b8.svg"},c6cb:function(e,t,n){e.exports=n.p+"img/1.56687430.svg"},c92a:function(e,t,n){e.exports=n.p+"img/badge_background.6ca2a70e.svg"},cbc0:function(e,t,n){e.exports=n.p+"img/1.a9e33fbc.svg"},cc82:function(e,t,n){e.exports=n.p+"img/6.667498c8.svg"},cef1:function(e,t,n){e.exports=n.p+"img/6.667498c8.svg"},d3f9:function(e,t,n){e.exports=n.p+"img/2.5b9ab3e8.svg"},d8ac:function(e,t,n){e.exports=n.p+"img/5.b941e0cc.svg"},df4f:function(e,t,n){e.exports=n.p+"img/0.a7ba20e1.svg"},e523:function(e,t,n){e.exports=n.p+"img/0.43c83d4a.svg"},e582:function(e,t,n){e.exports=n.p+"img/3.406cc88c.svg"},e7a5:function(e,t,n){e.exports=n.p+"img/6.ae90b27e.svg"},e81c:function(e,t,n){e.exports=n.p+"img/6.9b18b3e8.svg"},e8ce:function(e,t,n){e.exports=n.p+"img/2.42d01bbb.svg"},eeef:function(e,t,n){},f3b5:function(e,t,n){e.exports=n.p+"img/0.8bf4a6e3.svg"},f640:function(e,t,n){},fa83:function(e,t,n){},fbcd:function(e,t,n){e.exports=n.p+"img/5.197d9bf5.svg"},fd63:function(e,t,n){"use strict";n("6a6d")},fd82:function(e,t,n){e.exports=n.p+"img/0.a1d723dd.svg"},fd86:function(e,t,n){e.exports=n.p+"img/2.e87cfb1f.svg"},ffb2:function(e,t,n){var c={"./0.svg":"6fb3","./1.svg":"31fd","./2.svg":"e8ce","./3.svg":"a9fc","./4.svg":"48e6","./5.svg":"17fa","./6.svg":"cc82"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=o,e.exports=s,s.id="ffb2"}}]);
//# sourceMappingURL=about.9143f28d.js.map