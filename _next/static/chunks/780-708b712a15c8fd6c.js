(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{78012:function(e,t,n){const r=n(2784),{Platform:o,processColor:a}=n(30976),c=n(9654);function i(e){if(e){if(!Array.isArray(e)||2===e.length)return Array.isArray(e)?e:[e.x,e.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}t.o=class extends r.Component{render(){const{colors:e,locations:t,start:n,end:u,...l}=this.props;let s=t;return t&&e.length!==t.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),s=t.slice(0,e.length)),r.createElement(c,{...l,colors:o.select({web:e,default:e.map(a)}),locations:s,startPoint:i(n),endPoint:i(u)})}}},9654:function(e,t,n){const r=n(2784),{View:o}=n(30976),{normalizeColor:a}=n(96934);e.exports=function({colors:e,locations:t,startPoint:n,endPoint:c,...i}){const[u,l]=r.useState(null),{width:s=1,height:f=1}=u??{},d=`linear-gradient(${r.useMemo((()=>{const[e,t]=(()=>{let e=[0,0];Array.isArray(n)&&(e=[null!=n[0]?n[0]:0,null!=n[1]?n[1]:0]);let t=[0,1];return Array.isArray(c)&&(t=[null!=c[0]?c[0]:0,null!=c[1]?c[1]:1]),[e,t]})();e[0]*=s,t[0]*=s,e[1]*=f,t[1]*=f;const r=t[1]-e[1],o=t[0]-e[0];return 90+180*Math.atan2(r,o)/Math.PI}),[s,f,n,c])}deg, ${r.useMemo((()=>e.map(((e,n)=>{let r=a(e);if(t&&t[n]){r+=` ${100*Math.max(0,Math.min(1,t[n]))}%`}return r}))),[e,t]).join(",")})`;return r.createElement(o,{...i,style:[i.style,{backgroundImage:d}],onLayout:e=>{const{x:t,y:n,width:r,height:o}=e.nativeEvent.layout,a=u??{x:0,y:0,width:1,height:1};t===a.x&&n===a.y&&r===a.width&&o===a.height||l({x:t,y:n,width:r,height:o}),i.onLayout&&i.onLayout(e)}})}},96934:function(e,t,n){const{processColor:r}=n(30976);t.normalizeColor=function(e,t=1){if(null==e)return;if("string"===typeof e&&(e=>"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var("))(e))return e;const n=r(e);if(null!=n){return`rgba(${n>>16&255},${n>>8&255},${255&n},${((n>>24&255)/255*t).toFixed(2)})`}}},50381:function(e,t,n){"use strict";var r=n(91706),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,i,u,l,s=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),u.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(i):u.removeAllRanges()),l&&document.body.removeChild(l),c()}return s}},84501:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},18217:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n(2784),c="right-scroll-bar-position",i="width-before-scroll-bar";function u(e,t){return function(e,t){var n=(0,a.useState)((function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}}))[0];return n.callback=t,n.facade}(t||null,(function(t){return e.forEach((function(e){return function(e,t){return"function"===typeof e?e(t):e&&(e.current=t),e}(e,t)}))}))}function l(e){return e}function s(e,t){void 0===t&&(t=l);var n=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(a)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}}}var f=function(e){void 0===e&&(e={});var t=s(null);return t.options=r({async:!0,ssr:!1},e),t}(),d=function(){},p=a.forwardRef((function(e,t){var n=a.useRef(null),c=a.useState({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:d}),i=c[0],l=c[1],s=e.forwardProps,p=e.children,h=e.className,v=e.removeScrollBar,m=e.enabled,g=e.shards,y=e.sideCar,w=e.noIsolation,b=e.inert,C=e.allowPinchZoom,E=e.as,x=void 0===E?"div":E,S=o(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),k=y,R=u([n,t]),M=r(r({},S),i);return a.createElement(a.Fragment,null,m&&a.createElement(k,{sideCar:f,removeScrollBar:v,shards:g,noIsolation:w,inert:b,setCallbacks:l,allowPinchZoom:!!C,lockRef:n}),s?a.cloneElement(a.Children.only(p),r(r({},M),{ref:R})):a.createElement(x,r({},M,{className:h,ref:R}),p))}));p.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},p.classNames={fullWidth:i,zeroRight:c};var h,v=function(e){var t=e.sideCar,n=o(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=t.read();if(!c)throw new Error("Sidecar medium not found");return a.createElement(c,r({},n))};v.isSideCarExport=!0;function m(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=h||n.nc;return t&&e.setAttribute("nonce",t),e}var g=function(){var e=0,t=null;return{add:function(n){var r,o;0==e&&(t=m())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){!--e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},y=function(){var e=function(){var e=g();return function(t){a.useEffect((function(){return e.add(t),function(){e.remove()}}),[t])}}();return function(t){var n=t.styles;return e(n),null}},w={left:0,top:0,right:0,gap:0},b=function(e){return parseInt(e||"",10)||0},C=function(e){if(void 0===e&&(e="margin"),"undefined"===typeof window)return w;var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[b(n),b(r),b(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},E=y(),x=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(i," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},S=function(e){var t=a.useState(C(e.gapMode)),n=t[0],r=t[1];a.useEffect((function(){r(C(e.gapMode))}),[e.gapMode]);var o=e.noRelative,c=e.noImportant,i=e.gapMode,u=void 0===i?"margin":i;return a.createElement(E,{styles:x(n,!o,u,c?"":"!important")})},k=!1;if("undefined"!==typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return k=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch($){k=!1}var M=!!k&&{passive:!1},O=function(e,t){var n=t;do{if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),P(e,n)){var r=D(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},P=function(e,t){return"v"===e?function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)}(t):function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)}(t)},D=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t);var n},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},j=function(e){return[e.deltaX,e.deltaY]},A=function(e){return e&&"current"in e?e.current:e},T=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},N=0,I=[];var W,X=(W=function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(N++)[0],c=a.useState((function(){return y()}))[0],i=a.useRef(e);a.useEffect((function(){i.current=e}),[e]),a.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([e.lockRef.current],(e.shards||[]).map(A),!0).filter(Boolean);return t.forEach((function(e){return e.classList.add("allow-interactivity-".concat(o))})),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(o))}))}}}),[e.inert,e.lockRef.current,e.shards]);var u=a.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=L(e),c=n.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],s=e.target,f=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===f&&"range"===s.type)return!1;var d=O(f,s);if(!d)return!0;if(d?o=f:(o="v"===f?"h":"v",d=O(f,s)),!d)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return function(e,t,n,r,o){var a=function(e,t){return"h"===e&&"rtl"===t?-1:1}(e,window.getComputedStyle(t).direction),c=a*r,i=n.target,u=t.contains(i),l=!1,s=c>0,f=0,d=0;do{var p=D(e,i),h=p[0],v=p[1]-p[2]-a*h;(h||v)&&P(e,i)&&(f+=v,d+=h),i=i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(s&&(o&&0===f||!o&&c>f)||!s&&(o&&0===d||!o&&-c>d))&&(l=!0),l}(p,t,e,"h"===p?u:l,!0)}),[]),l=a.useCallback((function(e){var n=e;if(I.length&&I[I.length-1]===c){var r="deltaY"in n?j(n):L(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&(t=e.delta,o=r,t[0]===o[0]&&t[1]===o[1]);var t,o}))[0];if(o&&o.should)n.preventDefault();else if(!o){var a=(i.current.shards||[]).map(A).filter(Boolean).filter((function(e){return e.contains(n.target)}));(a.length>0?u(n,a[0]):!i.current.noIsolation)&&n.preventDefault()}}}),[]),s=a.useCallback((function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout((function(){t.current=t.current.filter((function(e){return e!==a}))}),1)}),[]),f=a.useCallback((function(e){n.current=L(e),r.current=void 0}),[]),d=a.useCallback((function(t){s(t.type,j(t),t.target,u(t,e.lockRef.current))}),[]),p=a.useCallback((function(t){s(t.type,L(t),t.target,u(t,e.lockRef.current))}),[]);a.useEffect((function(){return I.push(c),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,M),document.addEventListener("touchmove",l,M),document.addEventListener("touchstart",f,M),function(){I=I.filter((function(e){return e!==c})),document.removeEventListener("wheel",l,M),document.removeEventListener("touchmove",l,M),document.removeEventListener("touchstart",f,M)}}),[]);var h=e.removeScrollBar,v=e.inert;return a.createElement(a.Fragment,null,v?a.createElement(c,{styles:T(o)}):null,h?a.createElement(S,{gapMode:"margin"}):null)},f.useMedium(W),v),B=a.forwardRef((function(e,t){return a.createElement(p,r({},e,{ref:t,sideCar:X}))}));B.classNames=p.classNames;var Y=B},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},53098:function(e,t,n){e.exports=n(7575)},7575:function(e,t,n){"use strict";t.getMDXComponent=function(e,t){return u(e,t).default};var r=i(n(2784)),o=i(n(52322)),a=i(n(28316));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function u(e,t){const n={React:r,ReactDOM:a,_jsx_runtime:o,...t};return new Function(...Object.keys(n),e)(...Object.values(n))}}}]);