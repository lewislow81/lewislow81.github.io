function krunch(){}const log=function(e,t){console.log("krugurt:",e,t)};function injectDOM(e){const t=document.createDocumentFragment(),n=document.createElement("y");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);return t}function localeProcessor(e,t){const n=e;let i=t;function o(e,t){const n=document.getElementById(e);let i=locale.t(t);n.innerHTML=i}locale.use(XHRBackend).use(BrowserLanguageDetector).init({fallbackLang:"en",debug:!0,namespace:["special","common"],defaultNS:"special",backend:{loadPath:"assets/locale/{{lng}}/{{namespace}}.json",crossDomain:!0}},(function(e,t){o(n,i)})),locale.on("languageChanged",(function(){o(n,i)}))}function localeGenerator(e){for(let t=0;t<e.length;t++){let n=e[t];localeProcessor(n.id,n.data)}}function dmcaProtection(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("a.dmca-badge");if(e[0].getAttribute("href").indexOf("refurl")<0)for(var t=0;t<e.length;t++){var n=e[t];n.href=n.href+(-1===n.href.indexOf("?")?"?":"&")+"refurl="+document.location}}),!1)}function driftMessenger(){const e=window.driftt=window.drift=window.driftt||[];if(!e.init){if(e.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));e.invoked=!0,e.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],e.factory=function(t){return function(){const n=Array.prototype.slice.call(arguments);return n.unshift(t),e.push(n),e}},e.methods.forEach((function(t){e[t]=e.factory(t)})),e.load=function(e){const t=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+t+"/"+e+".js";const i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("9ad3433dnnis")}function googleAnalytics(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-109094106-2")}function greeting(){}function popup(){}krunch.probeConnection=function(){const e=injectDOM('<y class="w-screen" id="ba194bb5a0b6e42d520d17a3b75f5962"></y><style>#ba194bb5a0b6e42d520d17a3b75f5962{color:#fff;font-size:0.8em;text-align:center;width:100%;top:0;left:0;z-index:999999;position:fixed;}.is-online{background:transparent;padding:0}.is-online:after{visibility:visible;content:"";}.is-offline{background:#F44336;padding:0.15rem}.is-offline:after{visibility:visible;content:"No connection!";}</style>');document.body.insertBefore(e,document.body.childNodes[0]);try{window.addEventListener("load",(function(){function e(){window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className=navigator.onLine?"is-online":"is-offline",log("(CONN) is "+window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className)}setInterval((function(){window.addEventListener("online",e),window.addEventListener("offline",e)}),1e3)}))}catch(e){log("(CONN)",e)}},serviceWorker.init(),krunch.addCache=function(e){serviceWorker.add(e),log("(SW) add cache",e)},krunch.removeCache=function(e){serviceWorker.remove(e),log("(SW) remove cache",e)},krunch.isCached=function(){serviceWorker.onCached((function(){log("(SW) (CACHED)")}))},krunch.isOnline=function(){serviceWorker.onOnline((function(){log("(SW) (ONLINE)")}))},krunch.lang=function(){fetch("assets/locale/id.json").then((function(e){return e.json()})).then((function(e){localeGenerator(e),log("(LANG) (id)",e)})).catch((function(e){log("(LANG) (ERR)",e)}))},krunch.langTrigger=function(e){locale.changeLanguage(e)},krunch.adaptiveImageLoader=function(){const e=document.getElementsByClassName("adaptive");Array.from(e).map(e=>{const t=new Image;t.src=e.dataset.src,t.onload=function(){e.classList.remove("adaptive"),"IMG"===e.nodeName?e.src=t.src:e.style.backgroundImage=`url(${t.src})`}})},krunch.networkSpeed=function(){log("(Network Type) "+navigator.connection.type),log("(Downlink) "+navigator.connection.downlink+" MBytes/s",""),log("(Round-Trip Time) "+navigator.connection.rtt+" miliseconds",""),log("(Downlink Max) "+navigator.connection.downlinkMax+" MBytes/s",""),log("(Effective Type) "+navigator.connection.effectiveType,""),log("(DataSaver Mode) "+navigator.connection.saveData,"")},krunch.torrent=function(e,t){const n=t;(new KrunchTorrent).add(n,(function(t){log("(torrent) seed:",t.infoHash),t.files.forEach((function(n){n.appendTo(e,(function(e,n){if(e)throw e;log("(torrent) DOM content:",n),log("(torrent) just downloaded:",t.download+" Bytes"),log("(torrent) total downloaded: ",t.downloaded+" Bytes"),log("(torrent) download speed:",t.downloadSpeed+" Bytes"),log("(torrent) progress:",t.progress)}))}))}))},greeting.withTime=function(){const e=(new Date).getHours(),t=" Are you coming here to hire me?";if(e<12){const e="<strong>Good morning!</strong>"+t;snicker.onLoad(e,1e4)}else if(e<20){const e="<strong>Good evening!</strong>"+t;snicker.onLoad(e,1e4)}else{const e="<strong>Good night!</strong>"+t;snicker.onLoad(e,1e4)}},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,popup.image=function(){"use strict";var e,t,n,i,o,r,a={xCurr:0,yCurr:0,xDest:0,yDest:0},s=!0,c=0,d={w:0,h:0},l={w:0,h:0},u={x:0,y:0};function f(e,t){for(var n in t)e.style[n]=t[n]}function h(e){(e.getAttribute("data-src")||e.src)&&e.addEventListener("click",(function(){!function(e){var t=e.getAttribute("data-src")||e.src,s=e.getAttribute("data-title"),c=e.getAttribute("data-caption"),d=new Image;d.onload=function(){n={w:d.width,h:d.height},i=this,function(e,t){(o=document.createElement("figure")).appendChild(i),f(o,{backgroundColor:"rgba(0,0,0,0.8)",width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px",overflow:"hidden",zIndex:"999999",margin:"0px",webkitTransition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",MozTransition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",transition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",opacity:"0"}),f(i,{cursor:'url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IyNDI3M0FFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IyNDI3NEFFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQjI0MjcxQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDQjI0MjcyQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+soZ1WgAABp5JREFUeNrcWn9M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" ) 25 25, no-drop'});var n=document.createElement("figcaption");if(f(n,{fontFamily:"Poppins, Sans-Serif",position:"fixed",bottom:"0px",left:"0px",padding:"25px",color:"#fff",wordSpacing:"0.2px",webkitFontSmoothing:"antialiased",textShadow:"-1px 0px 1px rgba(0,0,0,0.4)",backgroundColor:"rgba(0,0,0,0.9)"}),e){var r=document.createElement("h1");f(r,{margin:"0px",padding:"0px",fontWeight:"normal",fontSize:"14px",letterSpacing:"0.1px",maxWidth:"500px",textAlign:"left",background:"none",marginTop:"5px"}),r.innerHTML=e,n.appendChild(r)}if(t){var s=document.createElement("h2");f(s,{margin:"0px",padding:"0px",fontWeight:"normal",fontSize:"14px",letterSpacing:"0.1px",maxWidth:"500px",textAlign:"left",background:"none",marginTop:"5px"}),s.innerHTML=t,n.appendChild(s)}o.appendChild(n),y(),a.xCurr=a.xDest=window.innerWidth/2,a.yCurr=a.yDest=window.innerHeight/2,document.body.appendChild(o),setTimeout((function(){o.style.opacity="1"}),10)}(s,c),r=document.body.style.overflow,document.body.style.overflow="hidden",o.addEventListener("mousemove",v,!1),o.addEventListener("touchmove",b,!1),window.addEventListener("resize",y,!1),window.addEventListener("keyup",w,!1),i.addEventListener("click",g,!1),m()},d.src=t}(this)}),!1)}function p(){cancelRequestAnimFrame(e)}function m(){e=requestAnimFrame(m),function(){if(a.xCurr+=.05*(a.xDest-a.xCurr),a.yCurr+=.05*(a.yDest-a.yCurr),!0===s){if(c+=a.xCurr-c,a.xCurr!==t){var e=parseFloat(c/l.w);e=u.x*e,i.style.webkitTransform="translate3d("+e+"px, 0px, 0px)",i.style.MozTransform="translate3d("+e+"px, 0px, 0px)",i.style.msTransform="translate3d("+e+"px, 0px, 0px)",t=a.xCurr}}else if(!1===s&&(c+=a.yCurr-c,a.yCurr!==t)){e=parseFloat(c/l.h);e=u.y*e,i.style.webkitTransform="translate3d( 0px, "+e+"px, 0px)",i.style.MozTransform="translate3d( 0px, "+e+"px, 0px)",i.style.msTransform="translate3d( 0px, "+e+"px, 0px)",t=a.yCurr}}()}function g(){document.body.style.overflow=r,o.removeEventListener("mousemove",v,!1),o.removeEventListener("touchmove",b,!1),window.removeEventListener("resize",y,!1),window.removeEventListener("keyup",w,!1),i.removeEventListener("click",g,!1),p(),document.body.removeChild(o)}function y(){var e=function(e){var t=window.innerHeight/e.h;if(e.w*t>window.innerWidth)return{w:e.w*t,h:e.h*t,fit:!0};var n=window.innerWidth/e.w;return{w:e.w*n,h:e.h*n,fit:!1}}(n);i.width=e.w,i.height=e.h,s=e.fit,d={w:i.width,h:i.height},l={w:window.innerWidth,h:window.innerHeight},u={x:l.w-d.w,y:l.h-d.h}}function v(e){a.xDest=e.clientX,a.yDest=e.clientY}function b(e){e.preventDefault(),a.xDest=e.touches[0].clientX,a.yDest=e.touches[0].clientY}function w(e){e.preventDefault(),27===e.keyCode&&g()}return function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e}((function(e){if(!e)throw"(ERR) you need to pass an element!";!function(e){var t;if(e.length)for(t=0;t<e.length;t++)h(e[t]);else h(e)}(e)}),{resize:y,start:function(){m()},stop:p})}(),popup.imageNotTouchDevice=function(e){try{document.createEvent("TouchEvent");const t=document.querySelectorAll(e);return popup.image(t),!0}catch(e){return!1}},popup.imageTouchDevice=function(e){try{return document.createEvent("TouchEvent"),!0}catch(t){const n=document.querySelectorAll(e);return popup.image(n),!1}};var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};function progressbar(){}const reader={defaults:{color:"rgba(49, 130, 206, 1)",height:"3px",top:0,bottom:0,left:0,right:0,zIndex:9999,ontop:!0,ltr:!0,attach:!1,css:!1,round:!1,nobar:!1},start:function(e={}){let t;e.nobar||(t=document.createElement("y"),t.setAttribute("id","pageReadProgressBar"),document.body.appendChild(t),t.style.position="fixed",t.style.zIndex="99999",t.style.width="0%",e.ontop?t.style.bottom="0":t.style.top=reader.defaults.top,e.ltr?t.style.right="0":t.style.left=reader.defaults.left,e.height?t.style.height=e.height:t.style.height=reader.defaults.height,e.color?t.style.backgroundColor=e.color:t.style.backgroundColor=reader.defaults.color);let n=reader.defaults.attach,i=reader.defaults.round;i=e.round?e.round:2,e.attach&&(n=document.querySelector(e.attach)),document.addEventListener("scroll",(function(o){const r=document.body.scrollHeight,a=window.innerHeight,s=window.scrollY/(r-a)*100;e.nobar||(t.style.width=s.toFixed(i)+"%"),n&&(n.innerHTML=s.toFixed(i))}))}};function snicker(){}function snickerUI(e,t){const n=document.createElement("y");n.setAttribute("style","position:fixed; bottom:13%; left:3%; right:3%; width:fit-content; color:#fff; background-color:#25313a; padding:1em; font-size:0.8em; font-family:inherit; border-radius:3px; box-shadow: 0 0 4px #0a0e10; z-index:999;"),n.innerHTML=e,setTimeout((function(){n.parentNode.removeChild(n)}),t),document.body.appendChild(n)}function totalPosts(e,t){const n=document.getElementById(e),i=Object.keys(t).length;n.innerHTML=n.innerHTML+i}progressbar.pageRead=function(){document.addEventListener("DOMContentLoaded",(function(e){reader.start()}))},function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ScrollReveal=t()}(this,(function(){"use strict";var e={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var t={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function n(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function i(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(n);if(n(e))return[e];if(i=e,o=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(o)&&(0===i.length||n(i[0])))return Array.prototype.slice.call(e);var i,o;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function o(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function r(e,t){if(o(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function a(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function s(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},o={active:[],stale:[]};try{r(i("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(e){throw e}r(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),r(t.stale,(function(t){return delete e.store.elements[t]})),r(this.store.elements,(function(e){-1===o.active.indexOf(e.containerId)&&o.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),r(this.store.containers,(function(e){-1===o.active.indexOf(e.id)&&o.stale.push(e.id)})),r(o.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),r(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),r(n.stale,(function(t){return delete e.store.sequences[t]}))}function c(e){var t,n=this;try{r(i(e),(function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var o=n.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),e.setAttribute("style",o.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}}))}catch(e){return a.call(this,"Clean failed.",e.message)}if(t)try{s.call(this)}catch(e){return a.call(this,"Clean failed.",e.message)}}function d(){var e=this;r(this.store.elements,(function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),r(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function l(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=u();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function u(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function f(e,t){for(var n=l(e),i=l(t),o=[],r=0;r<4;r++)for(var a=[n[r],n[r+4],n[r+8],n[r+12]],s=0;s<4;s++){var c=4*s,d=[i[c],i[c+1],i[c+2],i[c+3]],u=a[0]*d[0]+a[1]*d[1]+a[2]*d[2]+a[3]*d[3];o[r+c]=u}return o}function h(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return l(t[2].split(", ").map(parseFloat))}return u()}function p(e,t){var n=u();return n[0]=e,n[5]="number"==typeof t?t:e,n}var m=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function g(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,o={},r=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=r?r.map((function(e){return e.trim()})).join("; ")+";":"",o.generated=r.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?o.computed:r.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var a,s,c,d=parseFloat(t.opacity),l=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),g={computed:d!==l?"opacity: "+d+";":"",generated:d!==l?"opacity: "+l+";":""},y=[];if(parseFloat(i.distance)){var v="top"===i.origin||"bottom"===i.origin?"Y":"X",b=i.distance;"top"!==i.origin&&"left"!==i.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*x;break;case"px":b=x;break;case"%":b="Y"===v?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===v?y.push(function(e){var t=u();return t[13]=e,t}(b)):y.push(function(e){var t=u();return t[12]=e,t}(b))}i.rotate.x&&y.push((a=i.rotate.x,s=Math.PI/180*a,(c=u())[5]=c[10]=Math.cos(s),c[6]=c[9]=Math.sin(s),c[9]*=-1,c)),i.rotate.y&&y.push(function(e){var t=Math.PI/180*e,n=u();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&y.push(function(e){var t=Math.PI/180*e,n=u();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(i.rotate.z)),1!==i.scale&&(0===i.scale?y.push(p(2e-4)):y.push(p(i.scale)));var k={};if(y.length){k.property=m("transform"),k.computed={raw:t[k.property],matrix:h(t[k.property])},y.unshift(k.computed.matrix);var E=y.reduce(f);k.generated={initial:k.property+": matrix3d("+E.join(", ")+");",final:k.property+": matrix3d("+k.computed.matrix.join(", ")+");"}}else k.generated={initial:"",final:""};var A={};if(g.generated||k.generated.initial){A.property=m("transition"),A.computed=t[A.property],A.fragments=[];var T=i.delay,j=i.duration,M=i.easing;g.generated&&A.fragments.push({delayed:"opacity "+j/1e3+"s "+M+" "+T/1e3+"s",instant:"opacity "+j/1e3+"s "+M+" 0s"}),k.generated.initial&&A.fragments.push({delayed:k.property+" "+j/1e3+"s "+M+" "+T/1e3+"s",instant:k.property+" "+j/1e3+"s "+M+" 0s"}),A.computed&&!A.computed.match(/all 0s/)&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var C=A.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});A.generated={delayed:A.property+": "+C.delayed+";",instant:A.property+": "+C.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:o,opacity:g,position:n,transform:k,transition:A}}function y(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,o=e.visible&&!e.revealed,r=!e.visible&&e.revealed&&e.config.reset;return t.reveal||o?v.call(this,e,i):t.reset||r?b.call(this,e):void 0}function v(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter((function(e){return""!==e})).join(" ")),w.call(this,e,t)}function b(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter((function(e){return""!==e})).join(" ")),w.call(this,e)}function w(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,r=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){r(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&c.call(n,e.node)}),i-a)}}var x,k=(x=0,function(){return x++});function E(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return y.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var o=new T(n,"visible",this.store),r=new T(n,"revealed",this.store);if(n.models={visible:o,revealed:r},!r.body.length){var a=n.members[o.body[0]],s=this.store.elements[a];if(s)return j.call(this,n,o.body[0],-1,t),j.call(this,n,o.body[0],1,t),y.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(r.head).pop()&&i>=[].concat(o.body).shift())return j.call(this,n,i,-1,t),y.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(r.foot).shift()&&i<=[].concat(o.body).pop())return j.call(this,n,i,1,t),y.call(this,e,{reveal:!0,pristine:t})}}function A(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=k(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function T(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],r(e.members,(function(e,o){var r=n.elements[e];r&&r[t]&&i.body.push(o)})),this.body.length&&r(e.members,(function(e,o){var r=n.elements[e];r&&!r[t]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))}))}function j(e,t,n,i){var o=this,r=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[r]=!0,setTimeout((function(){e.blocked[r]=!1,s&&E.call(o,s,i)}),e.interval)}function M(){var e=this;s.call(this),r(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter((function(e){return""!==e})).join(" "))})),r(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function C(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function L(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(o(e))return r(t,(function(t){r(t,(function(t,n){o(t)?(e[n]&&o(e[n])||(e[n]={}),L(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function I(t,n,o){var s=this;void 0===n&&(n={}),void 0===o&&(o=!1);var d,l=[],u=n.interval||e.interval;try{u&&(d=new A(u));var f=i(t);if(!f.length)throw new Error("Invalid reveal target.");var h=f.reduce((function(e,t){var o={},a=t.getAttribute("data-sr-id");a?(L(o,s.store.elements[a]),o.node.setAttribute("style",o.styles.inline.computed)):(o.id=k(),o.node=t,o.seen=!1,o.revealed=!1,o.visible=!1);var u=L({},o.config||s.defaults,n);if(!u.mobile&&C()||!u.desktop&&!C())return a&&c.call(s,o),e;var f,h=i(u.container)[0];if(!h)throw new Error("Invalid container.");return h.contains(t)?(null===(f=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return r(t,(function(t){r(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(h,l,s.store.containers))&&(f=k(),l.push({id:f,node:h})),o.config=u,o.containerId=f,o.styles=g(o),d&&(o.sequence={id:d.id,index:d.members.length},d.members.push(o.id)),e.push(o),e):e}),[]);r(h,(function(e){s.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return a.call(this,"Reveal failed.",e.message)}r(l,(function(e){s.store.containers[e.id]={id:e.id,node:e.node}})),d&&(this.store.sequences[d.id]=d),!0!==o&&(this.store.history.push({target:t,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(M.bind(this),0))}function D(){var e=this;r(this.store.history,(function(t){I.call(e,t.target,t.options,!0)})),M.call(this)}var O,R=Math.sign||function(e){return(e>0)-(e<0)||+e},S=(O=Date.now(),function(e){var t=Date.now();t-O>16?(O=t,e(t)):setTimeout((function(){return S(e)}),0)}),N=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S;function z(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,o=0,r=0,a=e.node;do{isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(r+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:o,right:r+i,bottom:o+n,left:r},height:n,width:i}}function F(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function W(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,o=e.geometry.bounds.top+e.geometry.height*n,r=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,d=t.geometry.bounds.right+t.scroll.left-i.right,l=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return o<l&&r>u&&a>c&&s<d||"fixed"===e.styles.position}}function B(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),N((function(){var i="init"===e.type||"resize"===e.type;r(n.store.containers,(function(e){i&&(e.geometry=z.call(n,e,!0));var t=F.call(n,e);e.scroll&&(e.direction={x:R(t.left-e.scroll.left),y:R(t.top-e.scroll.top)}),e.scroll=t})),r(t,(function(e){i&&(e.geometry=z.call(n,e)),e.visible=W.call(n,e)})),r(t,(function(e){e.sequence?E.call(n,e):y.call(n,e)})),n.pristine=!1}))}var Z,P,Y,J,G,U,q,H;function Q(n){var o;if(void 0===n&&(n={}),void 0===this||Object.getPrototypeOf(this)!==Q.prototype)return new Q(n);if(!Q.isSupported())return a.call(this,"Instantiation failed.","This browser is not supported."),t.failure();try{o=L({},U||e,n)}catch(e){return a.call(this,"Invalid configuration.",e.message),t.failure()}try{if(!i(o.container)[0])throw new Error("Invalid container.")}catch(e){return a.call(this,e.message),t.failure()}return!(U=o).mobile&&C()||!U.desktop&&!C()?(a.call(this,"This device is disabled.","desktop: "+U.desktop,"mobile: "+U.mobile),t.failure()):(t.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Z=Z||B.bind(this),P=P||d.bind(this),Y=Y||I.bind(this),J=J||c.bind(this),G=G||D.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Z}}),Object.defineProperty(this,"destroy",{get:function(){return P}}),Object.defineProperty(this,"reveal",{get:function(){return Y}}),Object.defineProperty(this,"clean",{get:function(){return J}}),Object.defineProperty(this,"sync",{get:function(){return G}}),Object.defineProperty(this,"defaults",{get:function(){return U}}),Object.defineProperty(this,"version",{get:function(){return"0.0.1"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}return Q.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(Q,"debug",{get:function(){return q||!1},set:function(e){return q="boolean"==typeof e?e:q}}),Q(),Q})),snicker.onClick=function(e,t,n){document.getElementById(e).onclick=function(){snickerUI(t,n)}},snicker.onLoad=function(e,t){snickerUI(e,t)};