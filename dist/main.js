/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={655:function(e,t,r){var n,o,a,i;function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}e=r.nmd(e),i=function(){return function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function r(e,t){t instanceof Node||(t=n.text("".concat(t))),t instanceof Text&&"clone"in t&&(t=t.clone()),e.append(t)}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return"string"==typeof t&&(t={innerHTML:t}),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("function"==typeof e)return e(n,o);if(e instanceof Node)t=e;else{if("string"!=typeof e)throw new Error("Invalid tag, ",l(e));t=document.createElement(e)}return Object.keys(n).forEach((function(e){var o=n[e];if(void 0!==o)switch(e){case"child":r(t,o);break;case"children":if(!Array.isArray(o))throw new Error("children must be an array of Nodes");o.flat().forEach((function(e){r(t,e)}));break;case"attr":Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])}));break;case"style":case"dataset":Object.keys(o).forEach((function(r){t[e][r]=o[r]}));break;case"ref":o.instanceOfRef&&(o.el=t);break;default:t[e]=o}})),t}(e,t,n)}return e.d(t,{default:function(){return n}}),Object.defineProperties(n,{get:{value:function(e){return document.querySelector(e)}},getAll:{value:function(e){return s(document.querySelectorAll(e))}},parse:{value:function(e){var t=document.createElement("div");return t.innerHTML=e,1===t.childElementCount?t.firstElementChild:s(t.children)}},text:{value:function(e){return document.createTextNode(e)}},use:{value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e,r=!1,n=document.createTextNode(e),o=[n];return Object.defineProperty(n,"value",{set:function(e){t=e,o.forEach((function(t){t.textContent=e}))},get:function(){return t}}),Object.defineProperty(n,"clone",{value:function(){if(!r)return r=!0,n;var e=n.cloneNode();return o.push(e),e}}),n}}}),t.default}()},"object"==l(t)&&"object"==l(e)?e.exports=i():(o=[],void 0===(a="function"==typeof(n=i)?n.apply(t,o):n)||(e.exports=a))},316:(e,t,r)=>{var n=r(872).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),s=new O(n||[]);return i(a,"_invoke",{value:T(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h={};function m(){}function y(){}function v(){}var b={};p(b,c,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x(L([])));g&&g!==r&&a.call(g,c)&&(b=g);var w=v.prototype=m.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,i,s,c){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==n(p)&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(p).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function T(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=p(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,p(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},k(j.prototype),p(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(w),p(w,u,"Generator"),p(w,c,(function(){return this})),p(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},872:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(316)();e.exports=o;try{regeneratorRuntime=o}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=r(655),t=r.n(e);function n(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,c,"next",e)}function c(e){n(i,o,a,s,c,"throw",e)}s(void 0)}))}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function c(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=r(93),u=r.n(l);const p=JSON.parse('{"id":"bajrangcoder.template"}');var f=acode.require("projects"),d=acode.require("prompt"),h=acode.require("fileBrowser"),m=acode.require("fsOperation"),y=acode.require("helpers"),v=acode.require("loader"),b=acode.require("alert"),x=acode.require("confirm"),g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"$projectsArray",[]),c(this,"$files",void 0)}var r,n,a,i,l,p,g,w,k,j,T,S,A,E,O;return r=e,n=[{key:"init",value:(O=o(u().mark((function e(r){var n,o,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.id="acode-template-manager",r.settitle("Template Manager"),this.$page=r,n=t()("span",{className:"icon search",dataset:{action:"search-template"}}),(o=t()("span",{className:"icon add",dataset:{action:"add-template"}})).onclick=this.addTemplate.bind(this),n.onclick=this.toggleSearch.bind(this),this.$page.header.append(n,o),this.$style=t()("style",{textContent:"#acode-template-manager .searchBar{position:absolute;top:-60px;border-radius:20px;height:40px;width:100%;margin-top:10px;background-color:var(--popup-background-color);box-shadow:0 3px 8px var(--box-shadow-color);border:2px solid var(--popup-border-color);transition:top 1s ease-in-out}#acode-template-manager .searchBar .open{top:.1rem}#acode-template-manager .searchBar .searchInput{box-sizing:border-box;color:var(--popup-text-color);background:rgba(0,0,0,0);border:none;padding:5px;width:100%}#acode-template-manager .list{display:flex;flex-direction:column;border:none;list-style:none;overflow-y:auto;scroll-behavior:smooth}#acode-template-manager .list .swipe-container{width:100%;border-bottom:1px solid var(--border-color);height:50px;background:var(--secondary-color);display:flex;align-items:center;box-sizing:border-box;overflow:hidden;overflow-x:scroll;scroll-snap-type:x mandatory;transition:all 1s ease-out}#acode-template-manager .list .swipe-container:last-child{border-bottom:none;margin-bottom:20px}#acode-template-manager .list .swipe-container::-webkit-scrollbar{display:none}#acode-template-manager .list .swipe-container .action,#acode-template-manager .list .swipe-container .swipe-element{min-width:100%}#acode-template-manager .list .swipe-container .swipe-element{width:100%;scroll-snap-align:start;padding:16px;box-sizing:border-box;display:flex;flex-direction:row;align-items:center}#acode-template-manager .list .swipe-container .swipe-element .project_icon{height:45px;width:36px;padding:8px;margin-left:10px;box-sizing:border-box}#acode-template-manager .list .swipe-container .swipe-element .project_nme{width:100%;font-size:1.2em;box-sizing:border-box;margin-left:15px;font-weight:600}#acode-template-manager .list .swipe-container .action{display:flex;align-items:center;box-sizing:border-box;height:100%}#acode-template-manager .list .swipe-container .delete_icon{font-size:1.2em;color:var(--primary-text-color);position:sticky;left:5px;font-weight:700}#acode-template-manager .list .swipe-container .rightItem{background:var(--error-text-color)}"}),document.head.append(this.$style),this.$list=t()("ul",{className:"list"}),this.$page.append(this.$list),this.searchBar=t()("div",{className:"searchBar"}),this.$searchInput=t()("input",{type:"search",className:"searchInput",placeholder:"Search template name(for eg: html)"}),this.$searchInput.onkeyup=this.searchTemplate.bind(this),this.searchBar.append(this.$searchInput),this.$page.append(this.searchBar),a=m(window.DATA_STORAGE+"projects.json"),e.next=20,a.exists();case 20:if(!e.sent){e.next=26;break}return e.next=23,a.readFile("utf8");case 23:return i=e.sent,e.next=26,this.setTemplates(i);case 26:editorManager.editor.commands.addCommand({name:"template-manager",description:"Template Manager",exec:this.run.bind(this)}),this.loadAllAvailableTemplate();case 28:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"run",value:(E=o(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$page.show();case 1:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{key:"setTemplates",value:(A=o(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:JSON.parse(t).forEach((function(e){f.get(e.name)||f.set(e.name,o(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.files);case 1:case"end":return t.stop()}}),t)}))),e.icon)}));case 2:case"end":return e.stop()}}),e)}))),function(e){return A.apply(this,arguments)})},{key:"loadAllAvailableTemplate",value:(S=o(u().mark((function e(){var r,n,o,a,i,s,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.$projectsArray=[],r=f.list(),this.$projectsArray=r,this.$list.innerHTML="",n=0;n<r.length;n++)o=t()("li",{className:"swipe-container",id:r[n].name}),a=t()("div",{className:"swipe-element"}),i=t()("span",{className:"project_icon icon ".concat(r[n].icon)}),s=t()("span",{className:"project_nme",textContent:r[n].name}),a.append.apply(a,[i,s]),c=t()("div",{className:"action rightItem",child:t()("span",{className:"delete_icon icon delete"})}),o.append.apply(o,[a,c]),this.$list.append(o),o.addEventListener("touchend",this.handleSwipe.bind(this));case 5:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"handleSwipe",value:(T=o(u().mark((function e(t){var r,n,o,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=185,n=t.currentTarget,!((o=n.scrollLeft-n.clientWidth)<-1*r)){e.next=7;break}return e.abrupt("return");case 7:if(!(o<r)){e.next=19;break}return e.next=10,x("Confirm Template Deletion","Are you sure you want to delete this template? This template cannot be restored.");case 10:if(!e.sent){e.next=19;break}return f.delete(n.id),a=f.list(),i=a.filter((function(e){return e.name!==n.id})),e.next=17,m(window.DATA_STORAGE+"projects.json").writeFile(JSON.stringify(i));case 17:this.loadAllAvailableTemplate(),window.toast("Deleted",3e3);case 19:case"end":return e.stop()}}),e,this)}))),function(e){return T.apply(this,arguments)})},{key:"addTemplate",value:(j=o(u().mark((function e(){var t,r,n,o,a,i,s,c,l,p,f,x,g,w=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={required:!0,placeholder:"Template Name(for eg:html)",test:function(e){return w.$projectsArray.every((function(t){return t.name!=e.toLowerCase()}))}},e.next=4,d("Enter Template Name","","text",t);case 4:return r=e.sent,e.next=7,h("folder","Select folder which cantains all template file");case 7:if(n=e.sent){e.next=10;break}return e.abrupt("return");case 10:return o=m(n.url),this.$files={},e.next=14,o.lsDir();case 14:if(i=e.sent,r=r.replace(/\s/g,""),s="".concat(r.toLowerCase(),"-project-template"),n.name==s){e.next=20;break}return b("Error","Invalid folder name"),e.abrupt("return");case 20:v.create("loading","adding files..."),c=0;case 22:if(!(c<i.length)){e.next=45;break}return e.next=25,m(i[c].url).stat();case 25:if(!e.sent.isDirectory){e.next=30;break}this.readFolderContent(i[c].url,s),e.next=42;break;case 30:if(!i[c].name.startsWith("icon.")){e.next=36;break}return e.next=33,this.setIconForTemplate(i[c].url);case 33:a=e.sent,e.next=42;break;case 36:return e.next=38,m(i[c].url).readFile();case 38:l=e.sent,p=i[c].url.substring(i[c].url.indexOf(s)+s.length+1),f=y.decodeText(l),this.$files[p]=f;case 42:c++,e.next=22;break;case 45:return x={name:r.toLowerCase(),files:this.$files,icon:a},e.next=48,this.saveNewTemplate(x);case 48:return e.next=50,m(window.DATA_STORAGE+"projects.json").readFile("utf8");case 50:return g=e.sent,e.next=53,this.setTemplates(g);case 53:this.$files={},a="",v.destroy(),b("Success","New template is added 🥳🎉🚀"),this.loadAllAvailableTemplate(),e.next=63;break;case 60:e.prev=60,e.t0=e.catch(0),window.toast(e.t0,4e3);case 63:case"end":return e.stop()}}),e,this,[[0,60]])}))),function(){return j.apply(this,arguments)})},{key:"saveNewTemplate",value:(k=o(u().mark((function e(t){var r,n,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=m(window.DATA_STORAGE+"projects.json"),e.next=4,r.exists();case 4:if(e.sent){e.next=9;break}return e.next=7,m(window.DATA_STORAGE).createFile("projects.json");case 7:return e.next=9,r.writeFile("[]");case 9:return e.t0=JSON,e.next=12,r.readFile("utf8");case 12:return e.t1=e.sent,n=e.t0.parse.call(e.t0,e.t1),Array.isArray(n)||(n=[]),n.push(t),o=JSON.stringify(n),e.next=19,r.writeFile(o);case 19:e.next=24;break;case 21:e.prev=21,e.t2=e.catch(0),window.toast(e.t2,4e3);case 24:case"end":return e.stop()}}),e,null,[[0,21]])}))),function(e){return k.apply(this,arguments)})},{key:"setIconForTemplate",value:(w=o(u().mark((function e(t){var r,n,o,a,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m(t),e.next=3,r.stat();case 3:return n=e.sent,e.next=6,r.readFile();case 6:if(o=e.sent,a=y.decodeText(o),!y.isBinary(a)){e.next=15;break}if(!/image/i.test(n.type)){e.next=15;break}return i=new Blob([o],{type:n.type}),e.next=13,y.blobToBase64(i);case 13:return s=e.sent,e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"readFolderContent",value:(g=o(u().mark((function e(t,r){var n,o,a,i,s,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=m(t),e.next=4,n.lsDir();case 4:o=e.sent,a=0;case 6:if(!(a<o.length)){e.next=23;break}return e.next=9,m(o[a].url).stat();case 9:if(!e.sent.isDirectory){e.next=14;break}this.readFolderContent(o[a].url,r),e.next=20;break;case 14:return e.next=16,m(o[a].url).readFile();case 16:i=e.sent,s=o[a].url.substring(o[a].url.indexOf(r)+r.length+1),c=y.decodeText(i),this.$files[s]=c;case 20:a++,e.next=6;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),window.toast(e.t0,4e3);case 28:case"end":return e.stop()}}),e,this,[[0,25]])}))),function(e,t){return g.apply(this,arguments)})},{key:"toggleSearch",value:(p=o(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.searchBar.classList.contains("open")?(this.searchBar.classList.remove("open"),this.$searchInput.value="",this.loadAllAvailableTemplate(),this.$list.style.marginTop="0px"):(this.searchBar.classList.add("open"),this.$list.style.marginTop="50px");case 1:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"autocompleteMatch",value:(l=o(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(t=t.toLowerCase())){e.next=3;break}return e.abrupt("return",[]);case 3:return r=new RegExp(t.split("").join(".*")),n=this.$projectsArray.filter((function(e){var t=e.name;return r.test(t)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"searchTemplate",value:(i=o(u().mark((function e(){var r,n,o=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.$searchInput.value,this.$list.innerHTML="",e.next=4,this.autocompleteMatch(r);case 4:0==(n=e.sent).length?this.$list.innerHTML="<li>Not Found 🚫</li>":n.forEach((function(e){var r=t()("li",{className:"swipe-container",id:e.name}),n=t()("div",{className:"swipe-element"}),a=t()("span",{className:"project_icon icon ".concat(e.icon)}),i=t()("span",{className:"project_nme",textContent:e.name});n.append.apply(n,[a,i]);var s=t()("div",{className:"action rightItem",child:t()("span",{className:"delete_icon icon delete"})});r.append.apply(r,[n,s]),o.$list.append(r),r.addEventListener("touchend",o.handleSwipe.bind(o))}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"destroy",value:(a=o(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return editorManager.editor.commands.removeCommand("template-manager"),e.next=3,m(window.DATA_STORAGE+"projects.json").delete();case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}],n&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();if(window.acode){var w=new g;acode.setPluginInit(p.id,(function(e,t,r){var n=r.cacheFileUrl,o=r.cacheFile;e.endsWith("/")||(e+="/"),w.baseUrl=e,w.init(t,o,n)})),acode.setPluginUnmount(p.id,(function(){w.destroy()}))}})()})();