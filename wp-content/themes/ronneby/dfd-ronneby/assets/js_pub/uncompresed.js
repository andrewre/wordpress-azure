/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return H("flexWrap")},s.flexboxlegacy=function(){return H("boxDirection")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},s.hsla=function(){return B("background-color:hsla(120,40%,100%,.5)"),E(j.backgroundColor,"rgba")||E(j.backgroundColor,"hsla")},s.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return H("backgroundSize")},s.borderimage=function(){return H("borderImage")},s.borderradius=function(){return H("borderRadius")},s.boxshadow=function(){return H("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return H("animationName")},s.csscolumns=function(){return H("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},s.cssreflections=function(){return H("boxReflect")},s.csstransforms=function(){return!!H("transform")},s.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return H("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var I in s)A(s,I)&&(x=I.toLowerCase(),e[x]=s[I](),v.push((e[x]?"":"no-")+x));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=y,e.prefixed=function(a,b,c){return b?H(a,b,c):H(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});
// jquery.event.move
//
// 1.3.1
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.
(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e,t){function l(e){function i(e){n?(t(),o(i),r=!0,n=!1):r=!1}var t=e,n=!1,r=!1;this.kick=function(e){n=!0,r||i()},this.end=function(e){var i=t;if(!e)return;r?(t=n?function(){i(),e()}:e,n=!0):e()}}function c(){return!0}function h(){return!1}function p(e){e.preventDefault()}function d(e){if(u[e.target.tagName.toLowerCase()])return;e.preventDefault()}function v(e){return e.which===1&&!e.ctrlKey&&!e.altKey}function m(e,t){var n,r;if(e.identifiedTouch)return e.identifiedTouch(t);n=-1,r=e.length;while(++n<r)if(e[n].identifier===t)return e[n]}function g(e,t){var n=m(e.changedTouches,t.identifier);if(!n)return;if(n.pageX===t.pageX&&n.pageY===t.pageY)return;return n}function y(e){var t;if(!v(e))return;t={target:e.target,startX:e.pageX,startY:e.pageY,timeStamp:e.timeStamp},r(document,a.move,b,t),r(document,a.cancel,w,t)}function b(e){var t=e.data;C(e,t,e,E)}function w(e){E()}function E(){i(document,a.move,b),i(document,a.cancel,E)}function S(e){var t,n;if(u[e.target.tagName.toLowerCase()])return;t=e.changedTouches[0],n={target:t.target,startX:t.pageX,startY:t.pageY,timeStamp:e.timeStamp,identifier:t.identifier},r(document,f.move+"."+t.identifier,x,n),r(document,f.cancel+"."+t.identifier,T,n)}function x(e){var t=e.data,n=g(e,t);if(!n)return;C(e,t,n,N)}function T(e){var t=e.data,n=m(e.changedTouches,t.identifier);if(!n)return;N(t.identifier)}function N(e){i(document,"."+e,x),i(document,"."+e,T)}function C(e,t,r,i){var s=r.pageX-t.startX,o=r.pageY-t.startY;if(s*s+o*o<n*n)return;A(e,t,r,s,o,i)}function k(){return this._handled=c,!1}function L(e){e._handled()}function A(e,t,n,r,i,o){var u=t.target,a,f;a=e.targetTouches,f=e.timeStamp-t.timeStamp,t.type="movestart",t.distX=r,t.distY=i,t.deltaX=r,t.deltaY=i,t.pageX=n.pageX,t.pageY=n.pageY,t.velocityX=r/f,t.velocityY=i/f,t.targetTouches=a,t.finger=a?a.length:1,t._handled=k,t._preventTouchmoveDefault=function(){e.preventDefault()},s(t.target,t),o(t.identifier)}function O(e){var t=e.data.event,n=e.data.timer;B(t,e,e.timeStamp,n)}function M(e){var t=e.data.event,n=e.data.timer;_(),j(t,n,function(){setTimeout(function(){i(t.target,"click",h)},0)})}function _(e){i(document,a.move,O),i(document,a.end,M)}function D(e){var t=e.data.event,n=e.data.timer,r=g(e,t);if(!r)return;e.preventDefault(),t.targetTouches=e.targetTouches,B(t,r,e.timeStamp,n)}function P(e){var t=e.data.event,n=e.data.timer,r=m(e.changedTouches,t.identifier);if(!r)return;H(t),j(t,n)}function H(e){i(document,"."+e.identifier,D),i(document,"."+e.identifier,P)}function B(e,t,n,r){var i=n-e.timeStamp;e.type="move",e.distX=t.pageX-e.startX,e.distY=t.pageY-e.startY,e.deltaX=t.pageX-e.pageX,e.deltaY=t.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/i,e.velocityY=.3*e.velocityY+.7*e.deltaY/i,e.pageX=t.pageX,e.pageY=t.pageY,r.kick()}function j(e,t,n){t.end(function(){return e.type="moveend",s(e.target,e),n&&n()})}function F(e,t,n){return r(this,"movestart.move",L),!0}function I(e){return i(this,"dragstart drag",p),i(this,"mousedown touchstart",d),i(this,"movestart",L),!0}function q(e){if(e.namespace==="move"||e.namespace==="moveend")return;r(this,"dragstart."+e.guid+" drag."+e.guid,p,t,e.selector),r(this,"mousedown."+e.guid,d,t,e.selector)}function R(e){if(e.namespace==="move"||e.namespace==="moveend")return;i(this,"dragstart."+e.guid+" drag."+e.guid),i(this,"mousedown."+e.guid)}var n=6,r=e.event.add,i=e.event.remove,s=function(t,n,r){e.event.trigger(n,r,t)},o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return window.setTimeout(function(){e()},25)}}(),u={textarea:!0,input:!0,select:!0,button:!0},a={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},f={move:"touchmove",cancel:"touchend",end:"touchend"};e.event.special.movestart={setup:F,teardown:I,add:q,remove:R,_default:function(e){var n,i;if(!e._handled())return;n={target:e.target,startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,timeStamp:e.timeStamp,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},i={event:n,timer:new l(function(t){s(e.target,n)})},e.identifier===t?(r(e.target,"click",h),r(document,a.move,O,i),r(document,a.end,M,i)):(e._preventTouchmoveDefault(),r(document,f.move+"."+e.identifier,D,i),r(document,f.end+"."+e.identifier,P,i))}},e.event.special.move={setup:function(){r(this,"movestart.move",e.noop)},teardown:function(){i(this,"movestart.move",e.noop)}},e.event.special.moveend={setup:function(){r(this,"movestart.moveend",e.noop)},teardown:function(){i(this,"movestart.moveend",e.noop)}},r(document,"mousedown.move",y),r(document,"touchstart.move",S),typeof Array.prototype.indexOf=="function"&&function(e,t){var n=["changedTouches","targetTouches"],r=n.length;while(r--)e.event.props.indexOf(n[r])===-1&&e.event.props.push(n[r])}(e)});
// jQuery.event.swipe
// 0.5
// Stephen Band
// Dependencies
// jQuery.event.move 1.2
// One of swipeleft, swiperight, swipeup or swipedown is triggered on
// moveend, when the move has covered a threshold ratio of the dimension
// of the target node, or has gone really fast. Threshold and velocity
// sensitivity changed with:
//
// jQuery.event.special.swipe.settings.threshold
// jQuery.event.special.swipe.settings.sensitivity
(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e,t){function o(e){var t,n,r;t=e.target.offsetWidth,n=e.target.offsetHeight,r={distX:e.distX,distY:e.distY,velocityX:e.velocityX,velocityY:e.velocityY,finger:e.finger};if(e.distX>e.distY){if(e.distX>-e.distY){if(e.distX/t>s.threshold||e.velocityX*e.distX/t*s.sensitivity>1)r.type="swiperight",i(e.currentTarget,r)}else if(-e.distY/n>s.threshold||e.velocityY*e.distY/t*s.sensitivity>1)r.type="swipeup",i(e.currentTarget,r)}else if(e.distX>-e.distY){if(e.distY/n>s.threshold||e.velocityY*e.distY/t*s.sensitivity>1)r.type="swipedown",i(e.currentTarget,r)}else if(-e.distX/t>s.threshold||e.velocityX*e.distX/t*s.sensitivity>1)r.type="swipeleft",i(e.currentTarget,r)}function u(t){var n=e.data(t,"event_swipe");return n||(n={count:0},e.data(t,"event_swipe",n)),n}var n=e.event.add,r=e.event.remove,i=function(t,n,r){e.event.trigger(n,r,t)},s={threshold:.4,sensitivity:6};e.event.special.swipe=e.event.special.swipeleft=e.event.special.swiperight=e.event.special.swipeup=e.event.special.swipedown={setup:function(e,t,r){var e=u(this);if(e.count++>0)return;return n(this,"moveend",o),!0},teardown:function(){var e=u(this);if(--e.count>0)return;return r(this,"moveend",o),!0},settings:s}});
// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
;(function($, sr) {
	var debounce = function(func, threshold, execAsap) {
		var timeout;

		return function debounced() {
			var obj = this, args = arguments;
			function delayed() {
				if (!execAsap) func.apply(obj, args);
				timeout = null;
			}

			if (timeout) clearTimeout(timeout); else if (execAsap) func.apply(obj, args);
			timeout = setTimeout(delayed, threshold || 100);
		};
	}
	// smartresize 
	jQuery.fn[sr] = function(fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};
})(jQuery, 'smartresize');
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
;
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});

/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expand":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["0%","0%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
(function(e){var t=!1,i=!1,n={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,s,a){"function"==typeof s?(a=s,s="sidr"):s||(s="sidr");var r,d,l,c=e("#"+s),u=e(c.data("body")),f=e("html"),p=c.outerWidth(!0),g=c.data("speed"),h=c.data("side"),m=c.data("displace"),v=c.data("onOpen"),y=c.data("onClose"),x="sidr"===s?"sidr-open":"sidr-open "+s+"-open";if("open"===n||"toggle"===n&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return o.close(i,function(){o.open(s)}),void 0;t=!0,"left"===h?(r={left:p+"px"},d={left:"0px"}):(r={right:p+"px"},d={right:"0px"}),u.is("body")&&(l=f.scrollTop(),f.css("overflow-x","hidden").scrollTop(l)),m?u.addClass("sidr-animating").css({width:u.width(),position:"absolute"}).animate(r,g,function(){e(this).addClass(x)}):setTimeout(function(){e(this).addClass(x)},g),c.css("display","block").animate(d,g,function(){t=!1,i=s,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),v()}else{if(!c.is(":visible")||t)return;t=!0,"left"===h?(r={left:0},d={left:"-"+p+"px"}):(r={right:0},d={right:"-"+p+"px"}),u.is("body")&&(l=f.scrollTop(),f.removeAttr("style").scrollTop(l)),u.addClass("sidr-animating").animate(r,g).removeClass(x),c.animate(d,g,function(){c.removeAttr("style").hide(),u.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),y()}}},o={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};e.sidr=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):o.toggle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},t),s=i.name,a=e("#"+s);if(0===a.length&&(a=e("<div />").attr("id",s).appendTo(e("body"))),a.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,onOpen:i.onOpen,onClose:i.onClose}),"function"==typeof i.source){var r=i.source(s);n.loadContent(a,r)}else if("string"==typeof i.source&&n.isUrl(i.source))e.get(i.source,function(e){n.loadContent(a,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var o=e(i);n.addPrefix(o)}),d=c.html()}n.loadContent(a,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",s),"ontouchstart"in document.documentElement?(t.bind("touchstart",function(e){e.originalEvent.touches[0],this.touched=e.timeStamp}),t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),o.toggle(s))})):t.click(function(e){e.preventDefault(),o.toggle(s)}))})}})(jQuery);
(function($){"use strict";$=jQuery;var $createKeyframeStyleTag,animationPlayState,playStateRunning,vendorPrefix;$createKeyframeStyleTag=function(params){return $("<style>").attr({class:"keyframe-style",id:params.id,type:"text/css"}).appendTo("head");};$.keyframe={getVendorPrefix:function(){var ua;ua=navigator.userAgent;if(ua.indexOf("Opera")!==-1){return"-o-";}else if(ua.indexOf("MSIE")!==-1){return"-ms-";}else if(ua.indexOf("WebKit")!==-1){return"-webkit-";}else if(ua.indexOf("Gecko")!==-1){return"-moz-";}else{return"";}},isSupported:function(){var animationSupport,element,pfx;element=$('body').get(0);animationSupport=false;if(element.style.animationName){animationSupport=true;}else{pfx=this.getVendorPrefix().slice(1,-1);var property=pfx+"AnimationName";if(property in element.style){animationSupport=true;}}return animationSupport;},getProperty:function(property){var temp=property;switch(property){case"transform":temp=this.getVendorPrefix()+temp;break;}return temp;},generate:function(frameData){var $elems,$frameStyle,css,frameName,property,key;frameName=frameData.name||"";css="@"+(this.getVendorPrefix())+"keyframes "+frameName+" {";for(key in frameData){if(key!=="name"){css+=key+" {";for(property in frameData[key]){var pfx_property=this.getProperty(property);css+=pfx_property+":"+frameData[key][property]+";";}css+="}";}}css+="}";$frameStyle=$("style#"+frameData.name);if($frameStyle.length>0){$frameStyle.html(css);$elems=$("*").filter(function(){this.style[""+($.keyframe.getVendorPrefix().slice(1,-1))+"AnimationName"]===frameName;});$elems.each(function(){var $el,options;$el=$(this);options=$el.data("keyframeOptions");$el.resetKeyframe(function(){$el.playKeyframe(options);});});}else{$createKeyframeStyleTag({id:frameName}).append(css);}},define:function(frameData){if(frameData.length){for(var i=0;i<frameData.length;i++){var frame=frameData[i];this.generate(frame);}}else{return this.generate(frameData);}}};vendorPrefix=$.keyframe.getVendorPrefix();animationPlayState="animation-play-state";playStateRunning="running";$.fn.resetKeyframe=function(callback){var $el=$(this).css(vendorPrefix+animationPlayState,playStateRunning).css(vendorPrefix+"animation","none");if(callback){setTimeout(callback,1);}};$.fn.pauseKeyframe=function(){var $el=$(this).css(vendorPrefix+animationPlayState,"paused");};$.fn.resumeKeyframe=function(){return $(this).css(vendorPrefix+animationPlayState,playStateRunning);};$.fn.playKeyframe=function(frameOptions,callback){var animationcss,animationkey,delay,duration,pfx,repeat;if(typeof frameOptions==='string'){var frameOptSplit=frameOptions.trim().split(' ');frameOptions={name:frameOptSplit[0],duration:parseInt(frameOptSplit[1]),timingFunction:frameOptSplit[2],delay:parseInt(frameOptSplit[3]),repeat:frameOptSplit[4],direction:frameOptSplit[5],fillMode:frameOptSplit[6],complete:callback}}frameOptions=$.extend({duration:0,timingFunction:"ease",delay:0,repeat:1,direction:"normal",fillMode:"forwards",complete:callback},frameOptions);duration=frameOptions.duration;delay=frameOptions.delay;repeat=frameOptions.repeat;animationcss=""+frameOptions.name+" "+duration+"ms "+frameOptions.timingFunction+" "+delay+"ms "+repeat+" "+frameOptions.direction+" "+frameOptions.fillMode;callback=frameOptions.complete;animationkey=vendorPrefix+"animation";pfx=["webkit","moz","MS","o",""];var _prefixEvent=function(element,type,callback){var evt,p,_results;p=0;_results=[];while(p<pfx.length){if(!pfx[p]){type=type.toLowerCase();}evt=pfx[p]+type;element.off(evt).on(evt,callback);_results.push(p++);}_results;};this.each(function(){var $el=$(this).addClass("boostKeyframe").css(vendorPrefix+animationPlayState,playStateRunning).css(animationkey,animationcss).data("keyframeOptions",frameOptions);if(callback){_prefixEvent($el,'AnimationIteration',callback);_prefixEvent($el,'AnimationEnd',callback);}});};$createKeyframeStyleTag({id:"boost-keyframe"}).append(" .boostKeyframe{"+vendorPrefix+"transform:scale3d(1,1,1);}");}).call(this);
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.5.9
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues

 */
//!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().width(100/a.options.slidesPerRow+"%").css({display:"inline-block"})}},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).off("click.slick",b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",b.setPaused.bind(b,!0)).off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},b.cleanUpEvents(),a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides&&(b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden","true").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.html(b.$slides)),b.cleanUpRows(),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized")},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildRows(),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",b.setPaused.bind(b,!0)).on("mouseleave.slick",b.setPaused.bind(b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).on(b.visibilityChange,b.visibility.bind(b)),b.$list.on("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.on("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange.bind(b)),a(window).on("resize.slick.slick-"+b.instanceUid,b.resize.bind(b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:1},200)},d.src=c,b.css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!1)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,b.autoPlayClear())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),c.$slides.eq(e).addClass("slick-active").attr("aria-hidden","false"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(e).addClass("slick-center")),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"===typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.stop().animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e=h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case"object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&&"%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()},set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

;(function($,window,undefined){'use strict';$.HoverDir=function(options,element){this.$el=$(element);this._init(options);};$.HoverDir.defaults={speed:300,easing:'ease',hoverDelay:0,inverse:false};$.HoverDir.prototype={_init:function(options){this.options=$.extend(true,{},$.HoverDir.defaults,options);this.transitionProp='all '+this.options.speed+'ms '+this.options.easing;this.support=Modernizr.csstransitions;this._loadEvents();},_loadEvents:function(){var self=this;this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir',function(event){var $el=$(this),$hoverElem=$el.find('div.portfolio-entry-hover, div.portfolio-custom-hover'),direction=self._getDir($el,{x:event.pageX,y:event.pageY}),styleCSS=self._getStyle(direction);if(event.type==='mouseenter'){$hoverElem.hide().css(styleCSS.from);clearTimeout(self.tmhover);self.tmhover=setTimeout(function(){$hoverElem.show(0,function(){var $el=$(this);if(self.support){$el.css('transition',self.transitionProp);}self._applyAnimation($el,styleCSS.to,self.options.speed);});},self.options.hoverDelay);}else{if(self.support){$hoverElem.css('transition',self.transitionProp);}clearTimeout(self.tmhover);self._applyAnimation($hoverElem,styleCSS.from,self.options.speed);}});},_getDir:function($el,coordinates){var w=$el.width(),h=$el.height(),x=(coordinates.x-$el.offset().left-(w/2))*(w>h?(h/w):1),y=(coordinates.y-$el.offset().top-(h/2))*(h>w?(w/h):1),direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;return direction;},_getStyle:function(direction){var fromStyle,toStyle,slideFromTop={left:'0px',top:'-100%'},slideFromBottom={left:'0px',top:'100%'},slideFromLeft={left:'-100%',top:'0px'},slideFromRight={left:'100%',top:'0px'},slideTop={top:'0px'},slideLeft={left:'0px'};switch(direction){case 0:fromStyle=!this.options.inverse?slideFromTop:slideFromBottom;toStyle=slideTop;break;case 1:fromStyle=!this.options.inverse?slideFromRight:slideFromLeft;toStyle=slideLeft;break;case 2:fromStyle=!this.options.inverse?slideFromBottom:slideFromTop;toStyle=slideTop;break;case 3:fromStyle=!this.options.inverse?slideFromLeft:slideFromRight;toStyle=slideLeft;break;};return{from:fromStyle,to:toStyle};},_applyAnimation:function(el,styleCSS,speed){$.fn.applyStyle=this.support?$.fn.css:$.fn.animate;el.stop().applyStyle(styleCSS,$.extend(true,[],{duration:speed+'ms'}));},};var logError=function(message){if(window.console){window.console.error(message);}};$.fn.hoverdir=function(options){var instance=$.data(this,'hoverdir');if(typeof options==='string'){var args=Array.prototype.slice.call(arguments,1);this.each(function(){if(!instance){logError("cannot call methods on hoverdir prior to initialization; "+"attempted to call method '"+options+"'");return;}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for hoverdir instance");return;}instance[options].apply(instance,args);});}else{this.each(function(){if(instance){instance._init();}else{instance=$.data(this,'hoverdir',new $.HoverDir(options,this));}});}return instance;};})(jQuery,window);
!function(o){var n=function(){o(".project.portfolio-hover-style-1 .entry-thumb, .dfd-gallery-single-item.portfolio-hover-style-1 .entry-thumb").each(function(){o(this).hoverdir({})})};o(window).load(function(){n(),o(".dfd-blog, .dfd-portfolio, .dfd-gallery").observeDOM(function(){n()})})}(jQuery);
(function ($) {
	var namespace = 'chaffle';
	var methods = {
		init: function (options) {
			options = $.extend({
				speed: 20, //シャッフルスピード
				time: 70 //一文字をシャッフルする時間
			}, options);
			return this.each(function () {
				var _this = this;
				var $this = $(this);
				var data = $this.data(namespace);
				var use_hover = $this.data("remove-hover");
				if (!data) {
					options = $.extend({
					}, options);
					$this.data(namespace, {
						options: options
					});
				}

				var $text = $this.text();
				var substitution;
				//代入テキスト
				var shuffle_timer;
				var shuffle_timer_delay;

				//ランダムにテキストを代入
				var shuffle = function () {
					$this.text(substitution);
					//$text.length = オリジナルテキストの文字数
					//substitution.length = 現在の文字数（ループカウント）
					//オリジナルの文字数までシャッフルをループさせる
					//thisがシャッフル中かどうか文字数で判定
					if ($text.length - substitution.length > 0) {
						//thisにオリジナルの文字数があればその文字数までループ
						for (i = 0; i < $text.length - substitution.length; i++) {
							//ランダムな文字を代入
							var shuffleStr = random_text.call();
							$this.append(shuffleStr);
						}
					} else {
						//シャッフル中場合などそれ以外は止める
						clearInterval(shuffle_timer);
					}
				};

				//1文字遅れてオリジナルのテキストを入れていく。
				var shuffle_delay = function () {
					if (substitution.length < $text.length) {
						substitution = $text.substr(0, substitution.length + 1);
					} else {
						clearInterval(shuffle_timer_delay);
					}
				};

				//ランダムに文字を取得
				var random_text = function () {
					var str;
					var lang = $this.data('lang');
					switch (lang) {
						case "en":
							str = String.fromCharCode(33 + Math.round(Math.random() * 99));
							break;
						case "ja":
							str = String.fromCharCode(19968 + Math.round(Math.random() * 80));
							break;
						case "ja-hiragana":
							str = String.fromCharCode(12352 + Math.round(Math.random() * 50));
							break;
						case "ja-katakana":
							str = String.fromCharCode(12448 + Math.round(Math.random() * 84));
							break;
					}
					return str;
				};

				var start = function () {
					substitution = '';
					clearInterval(shuffle_timer);
					clearInterval(shuffle_timer_delay);

					//ランダムテキストダイマー
					shuffle_timer = setInterval(function () {
						shuffle.call(_this);
					}, options.speed);

					shuffle_timer_delay = setInterval(function () {
						shuffle_delay.call(this);
					}, options.time);
				};

				//mouseover
				if(!use_hover) {
					$this.unbind('mouseover.' + namespace).bind('mouseover.' + namespace, function () {
						start.call(_this);
					});
				}	
				
				if($this.data('load') && $this.data('load') == 'onload') {
					var initReInitTime = $(this).parents('.dfd-animated-text-block').data('speed') ? $(this).parents('.dfd-animated-text-block').data('speed') : 50;
					$this.on('init-chaffle', function() {
						options.time = initReInitTime;
						start.call(_this);
					});
					$this.on('reinit-chaffle', function() {
						options.time = initReInitTime * 1;
						start.call(_this);
					});
//					$this.parents('.call-on-waypoint').on('on-waypoin', function() {
//						options.time = 500;
//						start.call(_this);
//						options.time = 60;
////						setTimeout(function() {
////						},100);
//					});
				}

			}); // end each
		},
		destroy: function () {
			return this.each(function () {
				var $this = $(this);
				$(window).unbind('.' + namespace);
				$this.removeData(namespace);
			});
		}
	};
	$.fn.chaffle = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.' + namespace);
		}
	};
})(jQuery);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
(function($) {
	$.prettyPhoto = {version: '3.1.6'};
	
	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			hook: 'rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
			animation_speed: 'fast', /* fast/slow/normal */
			ajaxcallback: function() {},
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			allow_expand: true, /* Allow the user to expand a resized image. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="pp_social">{pp_social}</div> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			audio_markup: '<div class="pp_audio_container"><div class="thumb-wrap">{thumb}</div><div class="dfd-composition-heading"><div><h3 class="entry-title">{title}</h3><div class="entry-subtitle">{subtitle}</div></div></div><audio class="audio" preload="auto" controls="controls"><source src ="{path}"></audio></div>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
		}, pp_settings);
		
		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
		
		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
		
		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								e.preventDefault();
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								e.preventDefault();
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								e.preventDefault();
								break;
						};
						// return false;
					};
				};
			});
		};
		
		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function(event) {
			
			ppEvent = event;
			
			if($(event.target).hasClass('active')) {
				return false;
			}
			
			$(event.target).addClass('active');
			
			settings = pp_settings;
			
			if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
			
			// Find out if the picture is part of a set
			theRel = $(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
			pp_thumbs = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('data-thumb') ? $(n).attr('data-thumb') : $(n).attr('href')); }) : $.makeArray($(this).attr('data-thumb'));
			pp_animation = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('data-animation')) ? $(n).attr('data-animation') : ""; }) : $(this).attr('data-animation');
			pp_audio_thumb = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('data-audio-thumb')) ? $(n).attr('data-audio-thumb') : ""; }) : $(this).attr('data-audio-thumb');
			pp_audio_title = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('data-audio-title')) ? $(n).attr('data-audio-title') : ""; }) : $(this).attr('data-audio-title');
			pp_audio_subtitle = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('data-audio-subtitle')) ? $(n).attr('data-audio-subtitle') : ""; }) : $(this).attr('data-audio-subtitle');
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
			
			if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			
			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
			rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
			
			_build_overlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize)
				$(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
			
			
			$.prettyPhoto.open(event);
			
			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function(event) {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = (arguments[3])? arguments[3]: 0;
				_build_overlay(event.target); // Build the overlay {this} being the caller
			}
			
			if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.pp_loaderIcon').show();
		
			if(settings.deeplinking)
				setHashtag();
		
			// Rebuild Facebook Like Button with updated href
			if(settings.social_tools){
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
				$pp_pic_holder.find('.pp_social').html(facebook_like_link);
			}
			
			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());
			
			// Set the description
			if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
				$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
			}else{
				$pp_pic_holder.find('.pp_description').hide();
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			percentBased=false;
			if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
			if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
			
			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				// Set the title
				(settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
				
				imgPreloader = "";
				skipInjection = false;
				
				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

						imgPreloader.onload = function(){
							// Fit item to viewport
							pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.prettyPhoto.close();
						};
					
						imgPreloader.src = pp_images[set_position];
					break;
				
					case 'youtube':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						$pp_pic_holder.addClass('dfd-video-box');
						// Regular youtube link
						movie_id = getParam('v',pp_images[set_position]);
						
						// youtu.be link
						if(movie_id == ""){
							movie_id = pp_images[set_position].split('youtu.be/');
							movie_id = movie_id[1];
							if(movie_id.indexOf('?') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

							if(movie_id.indexOf('&') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
						}

						movie = '//www.youtube.com/embed/'+movie_id;
						(getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
							
						if(settings.autoplay) movie += "&autoplay=1";
					
						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						$pp_pic_holder.addClass('dfd-video-box');
						movie_id = pp_images[set_position];
						var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = '//player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";
				
						vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
					break;
				
					case 'audio':
						pp_dimensions = _fitToViewport(500,530); // Fit item to viewport
						$pp_pic_holder.addClass('dfd-audio-box');
						
						audio_url = pp_images[set_position];
						
						toInject = settings.audio_markup.replace(/{thumb}/g,'<img src="'+ pp_audio_thumb +'" alt="audio thumb" />').replace(/{title}/g,pp_audio_title).replace(/{subtitle}/g,pp_audio_subtitle).replace(/{path}/g,audio_url);
					break;
				
					case 'quicktime':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						$pp_pic_holder.addClass('dfd-video-box');
						pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));
					
						toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
				
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
					break;
					
					case 'ajax':
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport(movie_width,movie_height);
						doresize = true; // Reset the dimensions
					
						skipInjection = true;
						$.get(pp_images[set_position],function(responseHTML){
							toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
							$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
							_showContent();
						});
						
					break;
					
					case 'custom':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
						doresize = true; // Reset the dimensions
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader && !skipInjection){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
					
					// Show content
					_showContent();
				};
			});

			return false;
		};

	
		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0) set_position = $(pp_images).size()-1;
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) set_position = 0;
			}else{
				set_position=direction;
			};
			
			rel_index = set_position;

			if(!doresize) doresize = true; // Allow the resizing of the images
			if(settings.allow_expand) {
				$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
			}

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage) currentGalleryPage = 0;
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0) currentGalleryPage = totalPage;
			}else{
				currentGalleryPage = direction;
			};
			
			slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

			slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

			$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = function(){
			if(typeof pp_slideshow == 'undefined'){
				$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
			}else{
				$.prettyPhoto.changePage('next');	
			};
		}


		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = function(){
			$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
				$.prettyPhoto.startSlideshow();
				return false;
			});
			clearInterval(pp_slideshow);
			pp_slideshow=undefined;
		}


		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){
			
			if(typeof ppEvent.target != 'undefined') {
				$(ppEvent.target).removeClass('active');
			}
			
			if($pp_overlay.is(":animated")) return;
			
			$.prettyPhoto.stopSlideshow();
			
			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
			
			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$pp_overlay.fadeOut(settings.animation_speed, function(){
				
				if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
				
				$(this).remove(); // No more need for the prettyPhoto markup
				
				$(window).unbind('scroll.prettyphoto');
				
				clearHashtag();
				
				settings.callback();
				
				doresize = true;
				
				pp_open = false;
				
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		function _showContent(){
			$('.pp_loaderIcon').hide();
			
			var fileType = _getFileType(pp_images[set_position]);
			
			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;
			
			$ppt.fadeTo(settings.animation_speed,1);
			
			// Resize the content holder
			$pp_pic_holder.find('.pp_content')
				.animate({
					height:pp_dimensions['contentHeight'],
					width:pp_dimensions['contentWidth']
				},settings.animation_speed);
		
			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': projectedTop,
				'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
				'width': pp_dimensions['containerWidth'],
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && fileType =="image") {
					$pp_pic_holder.find('.pp_hoverContainer').show();
				} else if(fileType == 'vimeo' || fileType == 'youtube' || fileType == 'audio') {
					$pp_pic_holder.find('.pp_hoverContainer').css('zIndex', '-1').find('> *:not(.pp_close)').hide();
				} else {
					$pp_pic_holder.find('.pp_hoverContainer').hide();
				}
			
				if(settings.allow_expand) {
					if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
						$('a.pp_expand,a.pp_contract').css('display','block');
					} else {
						$('a.pp_expand').css('display', 'none');
					}
				}
				
				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
				
				settings.changepicturecallback(); // Callback!
				
				pp_open = true;
			});
			
			_insert_gallery();
			
			if(fileType == 'youtube' || fileType == 'vimeo') {
				$pp_pic_holder.find('#pp_full_res')
					.animate({
						opacity: 0,
					},{
						complete: function(now,fx) {
							var $self = $(this);
							if(typeof pp_animation == 'undefined' || pp_animation == '') {
								pp_animation = 'transition.shrinkIn';
							}
							$self.velocity(pp_animation, {display: 'auto'});
						},
					},settings.animation_speed);
			} else if(fileType == 'audio') {
				$pp_pic_holder
					.find('audio')
						.audioPlayer({
							strPlay: '',
							strPause: '',
							strVolume: ''
						});
							
				$pp_pic_holder
					.find('.audioplayer-playpause a').click();
			}
			
			pp_settings.ajaxcallback();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
			$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
				$('.pp_loaderIcon').show();
				
				callback();
			});
		};
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;
			
			var offset = 0;
			if($('.dfd-frame-line.line-bottom')) {
				offset = $('.dfd-frame-line.line-bottom').height() * 2 + 20;
			}
			
			var forThumbsOffset = 300 + offset;
			if(Modernizr.touch && windowWidth < 800 || (_getFileType(pp_images[set_position]) == 'youtube' || _getFileType(pp_images[set_position]) == 'vimeo') || _getFileType(pp_images[set_position]) == 'audio') {
				forThumbsOffset = 0;
			}

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > (windowHeight - forThumbsOffset))) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if(pp_containerWidth > windowWidth && pp_containerHeight > (windowHeight - forThumbsOffset)) {
						if(pp_containerWidth/windowWidth > pp_containerHeight/(windowHeight - forThumbsOffset)) {
							imageWidth = (windowWidth - 100);
							imageHeight = (height/width) * imageWidth;
						} else {
							imageHeight = (windowHeight - forThumbsOffset);
							imageWidth = (width/height) * imageHeight;
						}
					}else if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 100);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > (windowHeight - forThumbsOffset))){
						imageHeight = (windowHeight - forThumbsOffset);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};
			

				
				if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
					_fitToViewport(pp_containerWidth,pp_containerHeight)
				};
				
				_getDimensions(imageWidth,imageHeight);
			};
			
			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			
			$pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			$pp_details.remove();
			
			// Get the titles height, to do so, I need to clone it since it's invisible
			$pp_title = $pp_pic_holder.find('.ppt');
			$pp_title.width(width);
			titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
			$pp_title = $pp_title.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			
			if(_getFileType(pp_images[set_position]) == 'youtube' || _getFileType(pp_images[set_position]) == 'vimeo' || _getFileType(pp_images[set_position]) == 'audio') {
				detailsHeight = 0;
				$pp_pic_holder.find('.pp_details').remove();
			}
			
			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.match(/\b.mov\b/i)){ 
				return 'quicktime';
			}else if(itemSrc.match(/\b.mp3/i)){ 
				return 'audio';
			}else if(itemSrc.match(/\b.swf\b/i)){
				return 'flash';
			}else if(itemSrc.match(/\biframe=true\b/i)){
				return 'iframe';
			}else if(itemSrc.match(/\bajax=true\b/i)){
				return 'ajax';
			}else if(itemSrc.match(/\bcustom=true\b/i)){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};
	
		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				if(projectedTop < 0) projectedTop = 0;
				
				if(contentHeight > windowHeight)
					return;

				$pp_pic_holder.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			};
		};
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			
			if($('body').hasClass('dfd-custom-padding-html')) {
				windowWidth -= $('.dfd-frame-line.line-bottom').height() * 2;
			}
			
			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
		};
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
				itemWidth = 90 + 20; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((pp_dimensions['containerWidth']/* - 100 - navWidth*/) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
				}else{
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
				};

				galleryWidth = pp_dimensions['width']; //itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				
				// Set the proper width to the gallery items
				$pp_gallery
					//.css('margin-left',-((galleryWidth/2) + (navWidth/2)))
					.find('div:first').width(galleryWidth)
					.find('ul').width(fullGalleryWidth)
					.find('li.selected').removeClass('selected');
				
				goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

				$.prettyPhoto.changeGalleryPage(goToPage);
				
				$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				// $pp_gallery.hide();
			}
		}
	
		function _build_overlay(caller){
			// Inject Social Tool markup into General markup
			if(settings.social_tools)
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

			settings.markup = settings.markup.replace('{pp_social}',''); 
			
			$('body').append(settings.markup); // Inject the markup
			
			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_thumbs.length; i++) {
					if(!pp_thumbs[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
						classname = 'default';
						img_src = '';
					}else{
						classname = '';
						img_src = pp_thumbs[i];
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='90' height='90' alt='' /></a></li>";
				};
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
								
				$pp_pic_holder.find('#pp_full_res').after(toInject);
				
				$pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
				
				$pp_gallery.find('.pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_gallery.find('.pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
					});

				itemWidth = 90 + 20; // 52 beign the thumb width, 5 being the right margin.
				$pp_gallery_li.each(function(i){
					$(this)
						.find('a')
						.click(function(){
							$.prettyPhoto.changePage(i);
							$.prettyPhoto.stopSlideshow();
							return false;
						});
				});
			};
			
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}
			
			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
			
			var overlayWidth = $(window).width();
			
			if($('body').hasClass('dfd-custom-padding-html')) {
				overlayWidth -= $('.dfd-frame-line.line-bottom').height() * 2;
			}
			
			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(window).width()
					})
				.bind('click',function(){
					if(!settings.modal) $.prettyPhoto.close();
				});

			$('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


			if(settings.allow_expand) {
				$('a.pp_expand').bind('click',function(e){
					// Expand the image
					if($(this).hasClass('pp_expand')){
						$(this).removeClass('pp_expand').addClass('pp_contract');
						doresize = false;
					}else{
						$(this).removeClass('pp_contract').addClass('pp_expand');
						doresize = true;
						_center_overlay();
					};
				
					_hideContent(function(){ $.prettyPhoto.open(); });
			
					return false;
				});
			}
		
			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
		
			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
				$.prettyPhoto.changePage('next');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		};

		if(!pp_alreadyInitialized && getHashtag()){
			pp_alreadyInitialized = true;
			
			// Grab the rel index to trigger the click on the correct element
			hashIndex = getHashtag();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
			hashRel = hashRel.substring(0,hashRel.indexOf('/'));

			// Little timeout to make sure all the prettyPhoto initialize scripts has been run.
			// Useful in the event the page contain several init scripts.
			setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
		}
		
		return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};
	
	function getHashtag(){
		var url = location.href;
		hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;
		if(hashtag){  hashtag = hashtag.replace(/<|>/g,''); }
		return hashtag;
	};
	
	function setHashtag(){
		if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
		location.hash = theRel + '/'+rel_index+'/';
	};
	
	function clearHashtag(){
		if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
	}
	
	function getParam(name,url){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( url );
		return ( results == null ) ? "" : results[1];
	}
	
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.

/**
 * jQuery Hotspot : A jQuery Plugin to create hotspot for an HTML element
 *
 * Author: Aniruddha Nath
 * Version: 1.0.0
 * 
 * Website: https://github.com/Aniruddha22/jquery-hotspot
 * 
 * Description: A jquery plugin for creating and displaying Hotspots in an HTML element.
 *	It operates in two mode, admin and display. The design of the hotspot created are fully customizable.
 *	User can add their own CSS class to style the hotspots.
 * 
 * License: http://www.opensource.org/licenses/mit-license.php
 */

;(function($) {
	
	// Default settings for the plugin
	var defaults = {

		// Data
		data: [],

		// Hotspot Tag
		tag: 'img',

		// Mode of the plugin
		// Options: admin, display
		mode: 'display',

		// HTML5 LocalStorage variable
		LS_Variable: '__HotspotPlugin_LocalStorage',
		
		// Hidden class for hiding the data
		hiddenClass: 'hidden',

		// Event on which the data will show up
		// Options: click, hover, none
		interactivity: 'hover',

		// Buttons' id (Used only in Admin mode)
		done_btnId: 'HotspotPlugin_Done',
		remove_btnId: 'HotspotPlugin_Remove',
		sync_btnId: 'HotspotPlugin_Server',

		// Buttons class
		done_btnClass: 'btn btn-success HotspotPlugin_Done',
		remove_btnClass: 'btn btn-danger HotspotPlugin_Remove',
		sync_btnClass: 'btn btn-info HotspotPlugin_Server',

		// Classes for Hotspots
		hotspotClass: 'HotspotPlugin_Hotspot',
		hotspotAuxClass: 'HotspotPlugin_inc',

		// Overlay
		hotspotOverlayClass: 'HotspotPlugin_Overlay',

		// No. of variables included in the spots
		dataStuff: [
			{
				'property': 'Title',
				'default': 'jQuery Hotspot'
			},
			{
				'property': 'Message',
				'default': 'This jQuery Plugin lets you create hotspot to any HTML element. '
			}
		]
	};
	
	//Constructor
	function Hotspot(element, options) {
		
		// Overwriting defaults with options
		this.config = $.extend(true, {}, defaults, options);
		
		this.element = element;
		this.imageEl = element.find(this.config.tag);
		this.imageParent = this.imageEl.parent();

		this.broadcast = '';

		var widget = this;

		// Event API for users
		$.each(this.config, function(index, val) {
			if (typeof val === 'function') {
				widget.element.on(index + '.hotspot', function() {
					val(widget.broadcast);
				});
			};
		});

		this.init();
	};

	Hotspot.prototype.init = function() {
		this.getData();
	};

	Hotspot.prototype.getData = function() {
		if (($(this.config.LS_Variable).val() == '' || $(this.config.LS_Variable).val()) === null && this.config.data.length == 0) {
			return;
		} 
		
		this.beautifyData();
		
		$('body').trigger('dfd-hotspot-inited');
	};

	Hotspot.prototype.beautifyData = function() {
		var widget = this;

		if (this.config.data.length != 0) {
			var raw = this.config.data;
		}
		
		var obj = JSON.parse(raw);
		
		for (var i = obj.length - 1; i >= 0; i--) {
			var el = obj[i];

			if (this.config.interactivity === 'none') {
				var htmlBuilt = $('<div><i class="close-item dfd-socicon-cross-24 hide"></i></div>');
			} else {
				var htmlBuilt = $('<div><i class="close-item dfd-socicon-cross-24 hide"></i></div>').addClass(this.config.hiddenClass);
			}

			$.each(el, function(index, val) {
				if (typeof val === "string") {
					$('<div/>', {
						html: val
					}).addClass('Hotspot_' + index).appendTo(htmlBuilt);
				};
			});

			var div = $('<div/>', {
				html: htmlBuilt
			}).css({
				'top': el.y + '%',
				'left': el.x + '%'
			}).addClass(this.config.hotspotClass).appendTo(this.element);

			if (widget.config.interactivity === 'click' || widget.config.interactivity === 'hover') {
				widget.addEvents(div);
			} else {
				htmlBuilt.removeClass(this.config.hiddenClass);
			}

			if (this.config.interactivity === 'none') {
				htmlBuilt.css('display', 'block');
			}
		};
	};
	
	Hotspot.prototype.addEvents = function($el) {
		var self = this;
		$(window).on('load resize', function() {
			var realAction = self.config.interactivity;
			if(self.config.interactivity === 'hover' && typeof $(window).width() != 'undefined' && $(window).width() < 768) {
				realAction = 'click';
			}
			$el.off().on(realAction, function(event) {
				$(this).toggleClass('active').children('div').toggleClass(self.config.hiddenClass);
			});
		});
	};

	$.fn.hotspot = function (options) {
		new Hotspot(this, options);
		return this;
	};

}(jQuery));
/*!
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @joshuatuscan
 Site: http://www.kurtnoble.com/labs/rrssb
 Twitter: @therealkni

        ___           ___
       /__/|         /__/\        ___
      |  |:|         \  \:\      /  /\
      |  |:|          \  \:\    /  /:/
    __|  |:|      _____\__\:\  /__/::\
   /__/\_|:|____ /__/::::::::\ \__\/\:\__
   \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
    \  \::/~~~~   \  \:\  ~~~      \__\::/
     \  \:\        \  \:\          /__/:/
      \  \:\        \  \:\         \__\/
       \__\/         \__\/
*/

+(function(window, $, undefined) {
	'use strict';

	var support = {
		calc : false
	};

	/*
	 * Public Function
	 */

	$.fn.rrssb = function( options ) {

		// Settings that $.rrssb() will accept.
		var settings = $.extend({
			description: undefined,
			emailAddress: undefined,
			emailBody: undefined,
			emailSubject: undefined,
			image: undefined,
			title: undefined,
			url: undefined
		}, options );

		// use some sensible defaults if they didn't specify email settings
		settings.emailSubject = settings.emailSubject || settings.title;
		settings.emailBody = settings.emailBody ||
			(
				(settings.description ? settings.description : '') +
				(settings.url ? '\n\n' + settings.url : '')
			);

		// Return the encoded strings if the settings have been changed.
		for (var key in settings) {
			if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
				settings[key] = encodeString(settings[key]);
			}
		};

		if (settings.url !== undefined) {
			$(this).find('.rrssb-facebook a').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
			$(this).find('.rrssb-tumblr a').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '')  + (settings.description !== undefined ? '&description=' + settings.description : ''));
			$(this).find('.rrssb-linkedin a').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
			$(this).find('.rrssb-twitter a').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
			$(this).find('.rrssb-hackernews a').attr('href', 'https://news.ycombinator.com/submitlink?u=' + settings.url + (settings.title !== undefined ? '&text=' + settings.title : ''));
			$(this).find('.rrssb-reddit a').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
			$(this).find('.rrssb-pinterest a').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
			$(this).find('.rrssb-pocket a').attr('href', 'https://getpocket.com/save?url=' + settings.url);
			$(this).find('.rrssb-github a').attr('href', settings.url);
			$(this).find('.rrssb-print a').attr('href', 'javascript:window.print()');
			$(this).find('.rrssb-whatsapp a').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
		}

		if (settings.emailAddress !== undefined || settings.emailSubject) {
			$(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
		}

	};

	/*
	 * Utility functions
	 */
	var detectCalcSupport = function(){
		//detect if calc is natively supported.
		var el = $('<div>');
		var calcProps = [
			'calc',
			'-webkit-calc',
			'-moz-calc'
		];

		$('body').append(el);

		for (var i=0; i < calcProps.length; i++) {
			el.css('width', calcProps[i] + '(1px)');
			if(el.width() === 1){
				support.calc = calcProps[i];
				break;
			}
		}

		el.remove();
	};

	var encodeString = function(string) {
		// Recursively decode string first to ensure we aren't double encoding.
		if (string !== undefined && string !== null) {
			if (string.match(/%[0-9a-f]{2}/i) !== null) {
				string = decodeURIComponent(string);
				encodeString(string);
			} else {
				return encodeURIComponent(string);
			}
		}
	};

	var setPercentBtns = function() {
		// loop through each instance of buttons
		$('.rrssb-buttons').each(function(index) {
			var self = $(this);
			var buttons = $('li:visible', self);
			var numOfButtons = buttons.length;
			var initBtnWidth = 100 / numOfButtons;
			var containerWidth = numOfButtons * 44;
			if(self.parent().hasClass('dfd-blog-share-popup-wrap')) {
				self.css('width',containerWidth);
			}
			buttons.css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
		});
	};

	var makeExtremityBtns = function() {
		// loop through each instance of buttons
		$('.rrssb-buttons').each(function(index) {
			var self = $(this);
			//get button width
			var containerWidth = self.width();
			var buttonWidth = $('li', self).not('.small').eq(0).width();
			var buttonCountSmall = $('li.small', self).length;

			// enlarge buttons if they get wide enough
			if (buttonWidth > 170 && buttonCountSmall < 1) {
				self.addClass('large-format');
				var fontSize = buttonWidth / 12 + 'px';
				self.css('font-size', fontSize);
			} else {
				self.removeClass('large-format');
				self.css('font-size', '');
			}

			if (containerWidth < buttonCountSmall * 25) {
				self.removeClass('small-format').addClass('tiny-format');
			} else {
				self.removeClass('tiny-format');
			}
		});
	};

	var backUpFromSmall = function() {
		// loop through each instance of buttons
		$('.rrssb-buttons').each(function(index) {
			var self = $(this);

			var buttons = $('li', self);
			var smallButtons = buttons.filter('.small');
			var totalBtnSze = 0;
			var totalTxtSze = 0;
			var upCandidate = smallButtons.eq(0);
			var nextBackUp = parseFloat(upCandidate.attr('data-size')) + 55;
			var smallBtnCount = smallButtons.length;

			if (smallBtnCount === buttons.length) {
				var btnCalc = smallBtnCount * 42;
				var containerWidth = self.width();

				if ((btnCalc + nextBackUp) < containerWidth) {
					self.removeClass('small-format');
					smallButtons.eq(0).removeClass('small');

					sizeSmallBtns();
				}

			} else {
				buttons.not('.small').each(function(index) {
					var button = $(this);
					var txtWidth = parseFloat(button.attr('data-size')) + 55;
					var btnWidth = parseFloat(button.width());

					totalBtnSze = totalBtnSze + btnWidth;
					totalTxtSze = totalTxtSze + txtWidth;
				});

				var spaceLeft = totalBtnSze - totalTxtSze;

				if (nextBackUp < spaceLeft) {
					upCandidate.removeClass('small');
					sizeSmallBtns();
				}
			}
		});
	};

	var checkSize = function(init) {
		// loop through each instance of buttons
		$('.rrssb-buttons').each(function(index) {

			var self = $(this);
			var buttons = $('li', self);

			// get buttons in reverse order and loop through each
			$(buttons.get().reverse()).each(function(index, count) {

				var button = $(this);

				if (button.hasClass('small') === false) {
					var txtWidth = parseFloat(button.attr('data-size')) + 55;
					var btnWidth = parseFloat(button.width());

					if (txtWidth > btnWidth) {
						var btn2small = buttons.not('.small').last();
						$(btn2small).addClass('small');
						sizeSmallBtns();
					}
				}

				if (!--count) backUpFromSmall();
			});
		});

		// if first time running, put it through the magic layout
		if (init === true) {
			rrssbMagicLayout(sizeSmallBtns);
		}
	};

	var sizeSmallBtns = function() {
		// loop through each instance of buttons
		$('.rrssb-buttons').each(function(index) {
			var self = $(this);
			var regButtonCount;
			var regPercent;
			var pixelsOff;
			var magicWidth;
			var smallBtnFraction;
			var buttons = $('li', self);
			var smallButtons = buttons.filter('.small');

			// readjust buttons for small display
			var smallBtnCount = smallButtons.length;

			// make sure there are small buttons
			if (smallBtnCount > 0 && smallBtnCount !== buttons.length) {
				self.removeClass('small-format');

				//make sure small buttons are square when not all small
				smallButtons.css('width','42px');
				pixelsOff = smallBtnCount * 42;
				regButtonCount = buttons.not('.small').length;
				regPercent = 100 / regButtonCount;
				smallBtnFraction = pixelsOff / regButtonCount;

				// if calc is not supported. calculate the width on the fly.
				if (support.calc === false) {
					magicWidth = ((self.innerWidth()-1) / regButtonCount) - smallBtnFraction;
					magicWidth = Math.floor(magicWidth*1000) / 1000;
					magicWidth += 'px';
				} else {
					magicWidth = support.calc+'('+regPercent+'% - '+smallBtnFraction+'px)';
				}

				buttons.not('.small').css('width', magicWidth);

			} else if (smallBtnCount === buttons.length) {
				// if all buttons are small, change back to percentage
				self.addClass('small-format');
				setPercentBtns();
			} else {
				self.removeClass('small-format');
				setPercentBtns();
			}
		}); //end loop

		makeExtremityBtns();
	};

	var rrssbInit = function() {
		$('.rrssb-buttons').each(function(index) {
			$(this).addClass('rrssb-'+(index + 1));
		});

		//detectCalcSupport();

		//setPercentBtns();

		// grab initial text width of each button and add as data attr
		$('.rrssb-buttons li .rrssb-text').each(function(index) {
			var buttonTxt = $(this);
			var txtWdth = buttonTxt.width();
			buttonTxt.closest('li').attr('data-size', txtWdth);
		});

		//checkSize(true);
	};

	var rrssbMagicLayout = function(callback) {
		//remove small buttons before each conversion try
		$('.rrssb-buttons li.small').removeClass('small');

		//checkSize();

		callback();
	};

	var popupCenter = function(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;

		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if (newWindow && newWindow.focus) {
			newWindow.focus();
		}
	};

	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	// init load
	$(document).ready(function(){
		/*
		 * Event listners
		 */

		try {
			$(document).on('click', '.rrssb-buttons a.popup', {}, function popUp(e) {
				var self = $(this);
				popupCenter(self.attr('href'), self.find('.rrssb-text').html(), 580, 470);
				e.preventDefault();
			});
		}
		catch (e) { // catching this adds partial support for jQuery 1.3
		}

		// resize function
		$(window).resize(function () {

			//rrssbMagicLayout(sizeSmallBtns);

			waitForFinalEvent(function(){
				//rrssbMagicLayout(sizeSmallBtns);
			}, 200, "finished resizing");
		});

		rrssbInit();
	});

	// Make global
	window.rrssbInit = rrssbInit;

})(window, jQuery);

(function($) {
	'use strict';

	var dfd_share = dfd_share || {};

	dfd_share.share = function () {
		var shareItems = [];

		if ($('[data-share]').length > 0) {
			$('[data-share]').each(function (index) {
				shareItems[index] = {};
				shareItems[index].self = $(this);
				if(!shareItems[index].self.hasClass('initialized')) {
					shareItems[index].self.addClass('initialized');
					
					shareItems[index].url = shareItems[index].self.data('share-url');
					shareItems[index].countFacebook = shareItems[index].self.find('[data-share-count="facebook"]');
					shareItems[index].countGoogle = shareItems[index].self.find('[data-share-count="google"]');
					shareItems[index].SHARE_URL = typeof shareItems[index].url === 'undefined' || shareItems[index].url === '' ? window.location.href : shareItems[index].url;
					$.ajax({
						url: ajax_var.url,
						type: 'POST',
						dataType: 'json',
						data: {
							action: 'dfd_share_counter',
							nonce: ajax_var.nonce,
							url: shareItems[index].SHARE_URL,
							counts: {
								facebook: shareItems[index].countFacebook.length,
								google: shareItems[index].countGoogle.length,
							}
						},
						success: function (response) {
							shareItems[index].countFacebook.text(dfd_share.shareApproximate(response.Facebook));
							shareItems[index].countGoogle.text(dfd_share.shareApproximate(response.Google));
						},
						error: function () {
							shareItems[index].countFacebook.html(0);
							shareItems[index].countGoogle.html(0);
						}
					});
				}
			});
		}
	};

	dfd_share.shareFormatDecimals = function (num, base) {
		var workingNum = num / base;

		return workingNum < 10 ? Math.round(workingNum * 10) / 10 : Math.round(workingNum);
	};

	dfd_share.shareApproximate = function (num) {
		var negative = num < 0;
		var number = num;
		var numString;

		if (negative) {
			number = Math.abs(num);
		}

		if (number < 10000) {
			numString = number;
		} else if (number < 1000000) {
			numString = dfd_share.shareFormatDecimals(number, 1000) + 'k';
		} else if (number < 1000000000) {
			numString = dfd_share.shareFormatDecimals(number, 1000000) + 'm';
		} else {
			numString = dfd_share.shareFormatDecimals(number, 1000000000) + 'b';
		}

		if (negative) {
			numString = '-' + numString;
		}

		return numString;
	};
	
	dfd_share.popupCenter = function(url, title, w, h) {
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;

		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		if (newWindow && newWindow.focus) {
			newWindow.focus();
		}
	};

	$(document).ready(function () {
		dfd_share.share();
		$('body').on('post-load init-lightbox', function() {
			dfd_share.share();
		});
	});
})(jQuery);

(function($){"use strict";$.fn.equalHeightsDestroy=function(){$(this).css({'height':'auto','min-height':'0px'});return this;};$.fn.equalHeights=function(options){var settings=$.extend({container:null},options);var currentTallest=0;var outerTallest=0;var $this=$(this);$this.css({'height':'auto','min-height':'0px'}).each(function(){var $el=$(this);if($el.height()>currentTallest){currentTallest=$el.height();outerTallest=$el.outerHeight();}}).css({'height':outerTallest,'min-height':outerTallest});if(settings.container!=null){$this.parents(settings.container).css({'height':outerTallest,'min-height':outerTallest});}return this;};$.fn.splitRows=function(options){var settings=$.extend({container:'.row',class:'row-i-'},options);if(this.length===0){return this;}var $container=$(this[0]).parent(settings.container);var container_width=$container.innerWidth();var els_width_summ=0;var row_i=0;var row=[];this.each(function(){var $el=$(this);var el_width=$el.width();els_width_summ+=el_width;if(els_width_summ>container_width){els_width_summ=el_width;row_i+=1;row=[];}var old_row_i=$el.attr('data-row');if(old_row_i){$el.removeClass(settings.class+old_row_i);}$el.attr('data-row',row_i).addClass(settings.class+row_i);if(row_i==0){$el.attr('data-row',row_i).addClass('row-first');}row.push($el);});for(var i in row){row[i].addClass('row-last');}return this;};$.fn.verticalCenterAlign=function(){return this.each(function(){var $this=$(this);var $parent=$this.parent();$this.css("position","absolute");$this.css("top",($parent.height()-$this.height())/2+"px");return this;});};$.equalHeightsAdvanced=function(options){var settings=$.extend({container:'.row-goods',cell:'.cell',class:'row-i-',class_first_el:'row-el-first',class_last_el:'row-el-last',class_row_first:'row-first',class_row_last:'row-last',equalHeight:true},options);var $split_rows_items=$(settings.container+' '+settings.cell);$split_rows_items.splitRows(settings);var $prev_el;var old_class;var row_num=0;var el_i=0;var els_in_row=0;var el_class_buf;$split_rows_items.each(function(){var $el=$(this);$el.removeClass(settings.class_first_el).removeClass(settings.class_middle_el).removeClass(settings.class_last_el).removeClass(settings.class_row_first).removeClass(settings.class_row_last);var old_row_i=$el.attr('data-row');var el_class=settings.class+old_row_i;el_i++;if(old_class!==el_class){row_num++;els_in_row=el_i;el_i=0;if(settings.equalHeight){$(settings.container+' .'+el_class).equalHeights();}old_class=el_class;$el.addClass(settings.class_first_el);if($prev_el){$prev_el.addClass(settings.class_last_el);}}if(row_num===1){$el.addClass(settings.class_row_first);}$prev_el=$el;el_class_buf=el_class;});$(settings.container+' .'+el_class_buf).addClass(settings.class_row_last);if(els_in_row&&(els_in_row-1)===el_i){$prev_el.addClass(settings.class_last_el);}return this;};})(jQuery);
/*
 * DropKick 1.3.3
 *
 * Highly customizable <select> lists
 * https://github.com/robdel12/DropKick
 *
 * Created by: Jamie Lottering <http://github.com/JamieLottering> <http://twitter.com/JamieLottering>
 *
 *
*/
/*
 * 
 New version added
 this is a backup, just for any case ;)
 * 
(function(e,t,n){"use strict";var r=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),i=!!r,s=i&&parseFloat(r[1])<7,o=navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),u={},a=[],f={left:37,up:38,right:39,down:40,enter:13,tab:9,zero:48,z:90,last:221},l=['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">','<a class="dk_toggle">','<span class="dk_label">{{ label }}</span>',"</a>",'<div class="dk_options">','<ul class="dk_options_inner">',"</ul>","</div>","</div>"].join(""),c='<li class="{{ current }} {{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',h={startSpeed:400,theme:!1,changes:!1,syncReverse:!0,nativeMobile:!0},p=null,d=null,v=function(e,t,n){var r,i,s,o;r=e.attr("data-dk-dropdown-value");i=e.text();s=t.data("dropkick");o=s.$select;o.val(r).trigger("change");t.find(".dk_label").text(i);n=n||!1;s.settings.change&&!n&&!s.settings.syncReverse&&s.settings.change.call(o,r,i)},m=function(e){e.removeClass("dk_open");p=null},g=function(n){var r=n.find(".dk_toggle"),i=n.find(".dk_options").outerHeight(),s=e(t).height()-r.outerHeight()-r.offset().top+e(t).scrollTop(),o=r.offset().top-e(t).scrollTop();return i<o?i<s:!0},y=function(e,t,n){var r=e.find(".dk_options_inner"),i=t.prevAll("li").outerHeight()*t.prevAll("li").length,s=r.scrollTop(),o=r.height()+r.scrollTop()-t.outerHeight();(n&&n.type==="keydown"||i<s||i>o)&&r.scrollTop(i)},b=function(e,t){var n=g(e);e.find(".dk_options").css({top:n?e.find(".dk_toggle").outerHeight()-1:"",bottom:n?"":e.find(".dk_toggle").outerHeight()-1});p=e.toggleClass("dk_open");y(e,e.find(".dk_option_current"),t)},w=function(e,t,n){t.find(".dk_option_current").removeClass("dk_option_current");e.addClass("dk_option_current");y(t,e,n)},E=function(t,n){var r=t.keyCode,i=n.data("dropkick"),s=String.fromCharCode(r),o=n.find(".dk_options"),u=n.hasClass("dk_open"),a=o.find("li"),l=n.find(".dk_option_current"),c=a.first(),h=a.last(),p,d,g,y,E,S,x;switch(r){case f.enter:if(u){if(!l.hasClass("disabled")){v(l.find("a"),n);m(n)}}else b(n,t);t.preventDefault();break;case f.tab:if(u){v(l.find("a"),n);m(n)}break;case f.up:d=l.prev("li");u?d.length?w(d,n,t):w(h,n,t):b(n,t);t.preventDefault();break;case f.down:if(u){p=l.next("li").first();p.length?w(p,n,t):w(c,n,t)}else b(n,t);t.preventDefault();break;default:}if(r>=f.zero&&r<=f.z){g=(new Date).getTime();if(i.finder===null){i.finder=s.toUpperCase();i.timer=g}else if(g>parseInt(i.timer,10)+1e3){i.finder=s.toUpperCase();i.timer=g}else{i.finder=i.finder+s.toUpperCase();i.timer=g}y=a.find("a");for(E=0,S=y.length;E<S;E++){x=e(y[E]);if(x.html().toUpperCase().indexOf(i.finder)===0){v(x,n);w(x.parent(),n,t);break}}n.data("dropkick",i)}},S=function(t){return e.trim(t).length>0?t:!1},x=function(t,n){var r=t.replace("{{ id }}",n.id).replace("{{ label }}",n.label).replace("{{ tabindex }}",n.tabindex),i=[],s,o,u,a,f;if(n.options&&n.options.length)for(o=0,u=n.options.length;o<u;o++){a=e(n.options[o]);o===0&&a.attr("selected")!==undefined&&a.attr("disabled")!==undefined?f=null:f=c.replace("{{ value }}",a.val()).replace("{{ current }}",S(a.val())===n.value?"dk_option_current":"").replace("{{ disabled }}",a.attr("disabled")!==undefined?"disabled":"").replace("{{ text }}",e.trim(a.html()));i[i.length]=f}s=e(r);s.find(".dk_options_inner").html(i.join(""));return s};s||(n.documentElement.className=n.documentElement.className+" dk_fouc");u.init=function(t){t=e.extend({},h,t);return this.each(function(){var n=e(this),r=n.find(":selected").first(),i=n.find("option"),s=n.data("dropkick")||{},u=n.attr("id")||n.attr("name"),f=t.width||n.outerWidth(),c=n.attr("tabindex")||"0",h=!1,p,v;if(s.id)return n;s.settings=t;s.tabindex=c;s.id=u;s.$original=r;s.$select=n;s.value=S(n.val())||S(r.attr("value"));s.label=r.text();s.options=i;h=x(l,s);h.find(".dk_toggle").css({width:f+"px"});n.before(h).appendTo(h);h=e('div[id="dk_container_'+u+'"]').fadeIn(t.startSpeed);p=t.theme||"default";h.addClass("dk_theme_"+p);s.theme=p;s.$dk=h;n.data("dropkick",s);h.addClass(n.attr("class"));h.data("dropkick",s);a[a.length]=n;h.bind("focus.dropkick",function(){d=h.addClass("dk_focus")}).bind("blur.dropkick",function(){h.removeClass("dk_focus");d=null});o&&s.settings.nativeMobile&&h.addClass("dk_mobile");s.settings.syncReverse&&n.on("change",function(t){var r=n.val(),i=e('a[data-dk-dropdown-value="'+r+'"]',h),o=i.text();h.find(".dk_label").text(o);s.settings.change&&s.settings.change.call(n,r,o);w(i.parent(),h,t)});if(n.attr("form")||n.closest("form").length){v=n.attr("form")?e("#"+n.attr("form").replace(" ",", #")):n.closest("form");v.on("reset",function(){n.dropkick("reset")})}})};u.theme=function(t){var n=e(this).data("dropkick"),r=n.$dk,i="dk_theme_"+n.theme;r.removeClass(i).addClass("dk_theme_"+t);n.theme=t};u.reset=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$dk,r=e('a[data-dk-dropdown-value="'+t.value+'"]',n);!t.$original.eq(0).prop("selected")&&t.$original.eq(0).prop("selected",!0);n.find(".dk_label").text(t.label);w(r.parent(),n)})};u.setValue=function(t){var n=e(this).data("dropkick").$dk,r=e('.dk_options a[data-dk-dropdown-value="'+t+'"]',n);if(r.length){v(r,n);w(r.parent(),n)}else console.warn("There is no option with this value in the <select>")};u.refresh=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$select,r=t.$dk;t.settings.startSpeed=0;n.removeData("dropkick").insertAfter(r);r.remove();n.dropkick(t.settings)})};e.fn.dropkick=function(e){if(!s){if(u[e])return u[e].apply(this,Array.prototype.slice.call(arguments,1));if(typeof e=="object"||!e)return u.init.apply(this,arguments)}};e(function(){e(n).on(i?"mousedown":"click",".dk_options a",function(){var t=e(this),n=t.parents(".dk_container").first();if(!t.parent().hasClass("disabled")){v(t,n);w(t.parent(),n);m(n)}return!1});e(n).bind("keydown.dk_nav",function(e){var t=null;p?t=p:d&&!p&&(t=d);t&&E(e,t)});e(n).on("click",null,function(t){if(p&&e(t.target).closest(".dk_container").length===0)m(p);else if(e(t.target).is(".dk_toggle, .dk_label")){var n=e(t.target).parents(".dk_container").first();if(n.hasClass("dk_open"))m(n);else{p&&m(p);b(n,t)}return!1}});var r="onwheel"in t?"wheel":"onmousewheel"in n?"mousewheel":"MouseScrollEvent"in t?"DOMMouseScroll MozMousePixelScroll":!1;r&&e(n).on(r,".dk_options_inner",function(e){var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;if(i){this.scrollTop-=Math.round(t/10);return!1}return t>0&&this.scrollTop<=0||t<0&&this.scrollTop>=this.scrollHeight-this.offsetHeight?!1:!0})})})(jQuery,window,document);
 */


/*
 * DropKick
 *
 * Highly customizable <select> lists
 * https://github.com/robdel12/DropKick
 *
*/
!function(e){var t;if("object"==typeof exports){try{t=require("jquery")}catch(s){}module.exports=e(window,document,t)}else window.Dropkick=e(window,document,window.jQuery)}(function(e,t,s,i){var a,n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),l=e.parent!==e.self&&location.host===parent.location.host,o=-1!==navigator.appVersion.indexOf("MSIE"),d=function(s,i){var a,n;if(this===e)return new d(s,i);for("string"==typeof s&&"#"===s[0]&&(s=t.getElementById(s.substr(1))),a=0;a<d.uid;a++)if(n=d.cache[a],n instanceof d&&n.data.select===s)return c.extend(n.data.settings,i),n;return s?"SELECT"===s.nodeName?this.init(s,i):void 0:(console.error("You must pass a select to DropKick"),!1)},r=function(){},h={initialize:r,change:r,open:r,close:r,search:"strict",bubble:!0},c={hasClass:function(e,t){var s=new RegExp("(^|\\s+)"+t+"(\\s+|$)");return e&&s.test(e.className)},addClass:function(e,t){e&&!c.hasClass(e,t)&&(e.className+=" "+t)},removeClass:function(e,t){var s=new RegExp("(^|\\s+)"+t+"(\\s+|$)");e&&(e.className=e.className.replace(s," "))},toggleClass:function(e,t){var s=c.hasClass(e,t)?"remove":"add";c[s+"Class"](e,t)},extend:function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var s in t)e[s]=t[s]}),e},offset:function(s){var i=s.getBoundingClientRect()||{top:0,left:0},a=t.documentElement,n=o?a.scrollTop:e.pageYOffset,l=o?a.scrollLeft:e.pageXOffset;return{top:i.top+n-a.clientTop,left:i.left+l-a.clientLeft}},position:function(e,t){for(var s={top:0,left:0};e&&e!==t;)s.top+=e.offsetTop,s.left+=e.offsetLeft,e=e.parentNode;return s},closest:function(e,t){for(;e;){if(e===t)return e;e=e.parentNode}return!1},create:function(e,s){var i,a=t.createElement(e);s||(s={});for(i in s)s.hasOwnProperty(i)&&("innerHTML"===i?a.innerHTML=s[i]:a.setAttribute(i,s[i]));return a},deferred:function(t){return function(){var s=arguments,i=this;e.setTimeout(function(){t.apply(i,s)},1)}}};return d.cache={},d.uid=0,d.prototype={add:function(e,s){var i,a,n;"string"==typeof e&&(i=e,e=t.createElement("option"),e.text=i),"OPTION"===e.nodeName&&(a=c.create("li",{"class":"dk-option","data-value":e.value,innerHTML:e.text,role:"option","aria-selected":"false",id:"dk"+this.data.cacheID+"-"+(e.id||e.value.replace(" ","-"))}),c.addClass(a,e.className),this.length+=1,e.disabled&&(c.addClass(a,"dk-option-disabled"),a.setAttribute("aria-disabled","true")),this.data.select.add(e,s),"number"==typeof s&&(s=this.item(s)),this.options.indexOf(s)>-1?s.parentNode.insertBefore(a,s):this.data.elem.lastChild.appendChild(a),a.addEventListener("mouseover",this),n=this.options.indexOf(s),this.options.splice(n,0,a),e.selected&&this.select(n))},item:function(e){return e=0>e?this.options.length+e:e,this.options[e]||null},remove:function(e){var t=this.item(e);t.parentNode.removeChild(t),this.options.splice(e,1),this.data.select.remove(e),this.select(this.data.select.selectedIndex),this.length-=1},init:function(e,s){var i,o=d.build(e,"dk"+d.uid);if(this.data={},this.data.select=e,this.data.elem=o.elem,this.data.settings=c.extend({},h,s),this.disabled=e.disabled,this.form=e.form,this.length=e.length,this.multiple=e.multiple,this.options=o.options.slice(0),this.selectedIndex=e.selectedIndex,this.selectedOptions=o.selected.slice(0),this.value=e.value,this.data.cacheID=d.uid,d.cache[this.data.cacheID]=this,this.data.settings.initialize.call(this),d.uid+=1,this._changeListener||(e.addEventListener("change",this),this._changeListener=!0),!n||this.data.settings.mobile){if(e.parentNode.insertBefore(this.data.elem,e),e.setAttribute("data-dkCacheId",this.data.cacheID),this.data.elem.addEventListener("click",this),this.data.elem.addEventListener("keydown",this),this.data.elem.addEventListener("keypress",this),this.form&&this.form.addEventListener("reset",this),!this.multiple)for(i=0;i<this.options.length;i++)this.options[i].addEventListener("mouseover",this);a||(t.addEventListener("click",d.onDocClick),l&&parent.document.addEventListener("click",d.onDocClick),a=!0)}return this},close:function(){var e,t=this.data.elem;if(!this.isOpen||this.multiple)return!1;for(e=0;e<this.options.length;e++)c.removeClass(this.options[e],"dk-option-highlight");t.lastChild.setAttribute("aria-expanded","false"),c.removeClass(t.lastChild,"dk-select-options-highlight"),c.removeClass(t,"dk-select-open-(up|down)"),this.isOpen=!1,this.data.settings.close.call(this)},open:c.deferred(function(){var s,i,a,n,l,d,r=this.data.elem,h=r.lastChild;return l=o?c.offset(r).top-t.documentElement.scrollTop:c.offset(r).top-e.scrollY,d=e.innerHeight-(l+r.offsetHeight),this.isOpen||this.multiple?!1:(h.style.display="block",s=h.offsetHeight,h.style.display="",i=l>s,a=d>s,n=i&&!a?"-up":"-down",this.isOpen=!0,c.addClass(r,"dk-select-open"+n),h.setAttribute("aria-expanded","true"),this._scrollTo(this.options.length-1),this._scrollTo(this.selectedIndex),void this.data.settings.open.call(this))}),disable:function(e,t){var s="dk-option-disabled";(0===arguments.length||"boolean"==typeof e)&&(t=e===i?!0:!1,e=this.data.elem,s="dk-select-disabled",this.disabled=t),t===i&&(t=!0),"number"==typeof e&&(e=this.item(e)),c[t?"addClass":"removeClass"](e,s)},select:function(e,t){var s,i,a,n,l=this.data.select;if("number"==typeof e&&(e=this.item(e)),"string"==typeof e)for(s=0;s<this.length;s++)this.options[s].getAttribute("data-value")===e&&(e=this.options[s]);return!e||"string"==typeof e||!t&&c.hasClass(e,"dk-option-disabled")?!1:c.hasClass(e,"dk-option")?(i=this.options.indexOf(e),a=l.options[i],this.multiple?(c.toggleClass(e,"dk-option-selected"),a.selected=!a.selected,c.hasClass(e,"dk-option-selected")?(e.setAttribute("aria-selected","true"),this.selectedOptions.push(e)):(e.setAttribute("aria-selected","false"),i=this.selectedOptions.indexOf(e),this.selectedOptions.splice(i,1))):(n=this.data.elem.firstChild,this.selectedOptions.length&&(c.removeClass(this.selectedOptions[0],"dk-option-selected"),this.selectedOptions[0].setAttribute("aria-selected","false")),c.addClass(e,"dk-option-selected"),e.setAttribute("aria-selected","true"),n.setAttribute("aria-activedescendant",e.id),n.className="dk-selected "+a.className,n.innerHTML=a.text,this.selectedOptions[0]=e,a.selected=!0),this.selectedIndex=l.selectedIndex,this.value=l.value,t||this.data.select.dispatchEvent(new CustomEvent("change",{bubbles:this.data.settings.bubble})),e):void 0},selectOne:function(e,t){return this.reset(!0),this._scrollTo(e),this.select(e,t)},search:function(e,t){var s,i,a,n,l,o,d,r,h=this.data.select.options,c=[];if(!e)return this.options;for(t=t?t.toLowerCase():"strict",t="fuzzy"===t?2:"partial"===t?1:0,r=new RegExp((t?"":"^")+e,"i"),s=0;s<h.length;s++)if(a=h[s].text.toLowerCase(),2==t){for(i=e.toLowerCase().split(""),n=l=o=d=0;l<a.length;)a[l]===i[n]?(o+=1+o,n++):o=0,d+=o,l++;n===i.length&&c.push({e:this.options[s],s:d,i:s})}else r.test(a)&&c.push(this.options[s]);return 2===t&&(c=c.sort(function(e,t){return t.s-e.s||e.i-t.i}).reduce(function(e,t){return e[e.length]=t.e,e},[])),c},focus:function(){this.disabled||(this.multiple?this.data.elem:this.data.elem.children[0]).focus()},reset:function(e){var t,s=this.data.select;for(this.selectedOptions.length=0,t=0;t<s.options.length;t++)s.options[t].selected=!1,c.removeClass(this.options[t],"dk-option-selected"),this.options[t].setAttribute("aria-selected","false"),!e&&s.options[t].defaultSelected&&this.select(t,!0);this.selectedOptions.length||this.multiple||this.select(0,!0)},refresh:function(){this.dispose().init(this.data.select,this.data.settings)},dispose:function(){return delete d.cache[this.data.cacheID],(!n||this.data.settings.mobile)&&(this.data.elem.parentNode.removeChild(this.data.elem),this.data.select.removeAttribute("data-dkCacheId")),this},handleEvent:function(e){if(!this.disabled)switch(e.type){case"click":this._delegate(e);break;case"keydown":this._keyHandler(e);break;case"keypress":this._searchOptions(e);break;case"mouseover":this._highlight(e);break;case"reset":this.reset();break;case"change":this.data.settings.change.call(this)}},_delegate:function(t){var s,i,a,n,l=t.target;if(c.hasClass(l,"dk-option-disabled"))return!1;if(this.multiple){if(c.hasClass(l,"dk-option"))if(s=e.getSelection(),"Range"===s.type&&s.collapseToStart(),t.shiftKey)if(a=this.options.indexOf(this.selectedOptions[0]),n=this.options.indexOf(this.selectedOptions[this.selectedOptions.length-1]),i=this.options.indexOf(l),i>a&&n>i&&(i=a),i>n&&n>a&&(n=a),this.reset(!0),n>i)for(;n+1>i;)this.select(i++);else for(;i>n-1;)this.select(i--);else t.ctrlKey||t.metaKey?this.select(l):(this.reset(!0),this.select(l))}else this[this.isOpen?"close":"open"](),c.hasClass(l,"dk-option")&&this.select(l)},_highlight:function(e){var t,s=e.target;if(!this.multiple){for(t=0;t<this.options.length;t++)c.removeClass(this.options[t],"dk-option-highlight");c.addClass(this.data.elem.lastChild,"dk-select-options-highlight"),c.addClass(s,"dk-option-highlight")}},_keyHandler:function(e){var t,s,i=this.selectedOptions,a=this.options,n=1,l={tab:9,enter:13,esc:27,space:32,up:38,down:40};switch(e.keyCode){case l.up:n=-1;case l.down:if(e.preventDefault(),t=i[i.length-1],c.hasClass(this.data.elem.lastChild,"dk-select-options-highlight"))for(c.removeClass(this.data.elem.lastChild,"dk-select-options-highlight"),s=0;s<a.length;s++)c.hasClass(a[s],"dk-option-highlight")&&(c.removeClass(a[s],"dk-option-highlight"),t=a[s]);n=a.indexOf(t)+n,n>a.length-1?n=a.length-1:0>n&&(n=0),this.data.select.options[n].disabled||(this.reset(!0),this.select(n),this._scrollTo(n));break;case l.space:if(!this.isOpen){e.preventDefault(),this.open();break}case l.tab:case l.enter:for(n=0;n<a.length;n++)c.hasClass(a[n],"dk-option-highlight")&&this.select(n);case l.esc:this.isOpen&&(e.preventDefault(),this.close())}},_searchOptions:function(e){var t,s=this,a=String.fromCharCode(e.keyCode||e.which),n=function(){s.data.searchTimeout&&clearTimeout(s.data.searchTimeout),s.data.searchTimeout=setTimeout(function(){s.data.searchString=""},1e3)};this.data.searchString===i&&(this.data.searchString=""),n(),this.data.searchString+=a,t=this.search(this.data.searchString,this.data.settings.search),t.length&&(c.hasClass(t[0],"dk-option-disabled")||this.selectOne(t[0]))},_scrollTo:function(e){var t,s,i,a=this.data.elem.lastChild;return-1===e||"number"!=typeof e&&!e||!this.isOpen&&!this.multiple?!1:("number"==typeof e&&(e=this.item(e)),t=c.position(e,a).top,s=t-a.scrollTop,i=s+e.offsetHeight,void(i>a.offsetHeight?(t+=e.offsetHeight,a.scrollTop=t-a.offsetHeight):0>s&&(a.scrollTop=t)))}},d.build=function(e,t){var s,i,a,n=[],l={elem:null,options:[],selected:[]},o=function(e){var s,i,a,n,d=[];switch(e.nodeName){case"OPTION":s=c.create("li",{"class":"dk-option ","data-value":e.value,innerHTML:e.text,role:"option","aria-selected":"false",id:t+"-"+(e.id||e.value.replace(" ","-"))}),c.addClass(s,e.className),e.disabled&&(c.addClass(s,"dk-option-disabled"),s.setAttribute("aria-disabled","true")),e.selected&&(c.addClass(s,"dk-option-selected"),s.setAttribute("aria-selected","true"),l.selected.push(s)),l.options.push(this.appendChild(s));break;case"OPTGROUP":for(i=c.create("li",{"class":"dk-optgroup"}),e.label&&i.appendChild(c.create("div",{"class":"dk-optgroup-label",innerHTML:e.label})),a=c.create("ul",{"class":"dk-optgroup-options"}),n=e.children.length;n--;d.unshift(e.children[n]));d.forEach(o,a),this.appendChild(i).appendChild(a)}};for(l.elem=c.create("div",{"class":"dk-select"+(e.multiple?"-multi":"")}),i=c.create("ul",{"class":"dk-select-options",id:t+"-listbox",role:"listbox"}),e.disabled&&c.addClass(l.elem,"dk-select-disabled"),l.elem.id=t+(e.id?"-"+e.id:""),c.addClass(l.elem,e.className),e.multiple?(l.elem.setAttribute("tabindex",e.getAttribute("tabindex")||"0"),i.setAttribute("aria-multiselectable","true")):(s=e.options[e.selectedIndex],l.elem.appendChild(c.create("div",{"class":"dk-selected "+s.className,tabindex:e.tabindex||0,innerHTML:s?s.text:"&nbsp;",id:t+"-combobox","aria-live":"assertive","aria-owns":i.id,role:"combobox"})),i.setAttribute("aria-expanded","false")),a=e.children.length;a--;n.unshift(e.children[a]));return n.forEach(o,l.elem.appendChild(i)),l},d.onDocClick=function(e){var t,s;if(1!==e.target.nodeType)return!1;null!==(t=e.target.getAttribute("data-dkcacheid"))&&d.cache[t].focus();for(s in d.cache)c.closest(e.target,d.cache[s].data.elem)||s===t||d.cache[s].disabled||d.cache[s].close()},s!==i&&(s.fn.dropkick=function(){var e=Array.prototype.slice.call(arguments);return s(this).each(function(){e[0]&&"object"!=typeof e[0]?"string"==typeof e[0]&&d.prototype[e[0]].apply(new d(this),e.slice(1)):new d(this,e[0]||{})})}),d});
/*
Copyright © 2013 Adobe Systems Incorporated.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * See <a href="http://jquery.com">http://jquery.com</a>.
 * @name jquery
 * @class
 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See <a href="http://jquery.com">http://jquery.com</a>
 * @name fn
 * @class
 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jquery
 */

/**
 * @fileOverview accessibleMegaMenu plugin
 *
 *<p>Licensed under the Apache License, Version 2.0 (the “License”)
 *<br />Copyright © 2013 Adobe Systems Incorporated.
 *<br />Project page <a href="https://github.com/adobe-accessibility/Accessible-Mega-Menu">https://github.com/adobe-accessibility/Accessible-Mega-Menu</a>
 * @version 0.1
 * @author Michael Jordan
 * @requires jquery
 */

/*jslint browser: true, devel: true, plusplus: true, nomen: true */
/*global jQuery */
(function ($, window, document) {
    "use strict";
    var pluginName = "accessibleMegaMenu",
        defaults = {
            uuidPrefix: "accessible-megamenu", // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
            menuClass: "accessible-megamenu", // default css class used to define the megamenu styling
            topNavItemClass: "accessible-megamenu-top-nav-item", // default css class for a top-level navigation item in the megamenu
            panelClass: "accessible-megamenu-panel", // default css class for a megamenu panel
            panelGroupClass: "accessible-megamenu-panel-group", // default css class for a group of items within a megamenu panel
            hoverClass: "hover", // default css class for the hover state
            focusClass: "focus", // default css class for the focus state
            openClass: "open" // default css class for the open state
        },
        Keyboard = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            keyMap: {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                190: "."
            }
        };
        
    /**
     * @desc Creates a new accessible mega menu instance.
     * @param {jquery} element
     * @param {object} [options] Mega Menu options
     * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
     * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
     * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
     * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
     * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
     * @param {string} [options.hoverClass=hover] - CSS class for the hover state
     * @param {string} [options.focusClass=focus] - CSS class for the focus state
     * @param {string} [options.openClass=open] - CSS class for the open state
     * @constructor
     */
    function AccessibleMegaMenu(element, options) {
        this.element = element;
        
        // merge optional settings and defaults into settings
        this.settings = $.extend({}, defaults, options);
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }
    
    AccessibleMegaMenu.prototype = (function () {

        /* private attributes and methods ------------------------ */
        var uuid = 0,
            keydownTimeoutDuration = 1000,
            keydownSearchString = "",
			isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
            _getPlugin,
            _addUniqueId,
            _togglePanel,
            _clickHandler,
            _clickOutsideHandler,
            _DOMAttrModifiedHandler,
            _focusInHandler,
            _focusOutHandler,
            _keyDownHandler,
            _mouseDownHandler,
            _mouseOverHandler,
            _mouseOutHandler,
            _toggleExpandedEventHandlers;
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_getPlugin
         * @desc Returns the parent accessibleMegaMenu instance for a given element
         * @param {jQuery} element
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _getPlugin = function (element) {
            return $(element).closest(':data(plugin_' + pluginName + ')').data("plugin_" + pluginName);
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_addUniqueId
         * @desc Adds a unique id and element.
         * The id string starts with the 
         * string defined in settings.uuidPrefix.
         * @param {jQuery} element
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _addUniqueId = function (element) {
            element = $(element);
            var settings = this.settings;
            if (!element.attr("id")) {
                element.attr("id", settings.uuidPrefix + "-" + new Date().getTime() + "-" + (++uuid));
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_togglePanel
         * @desc Toggle the display of mega menu panels in response to an event.
         * The optional boolean value 'hide' forces all panels to hide.
         * @param {event} event
         * @param {Boolean} [hide] Hide all mega menu panels when true
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _togglePanel = function (event, hide) {
            var target = $(event.target),
                that = this,
                settings = this.settings,
                menu = this.menu,
                topli = target.closest('.' + settings.topNavItemClass),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                newfocus;
            
            _toggleExpandedEventHandlers.call(this, hide);
            $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu, pointerup.outside-accessible-megamenu', _clickOutsideHandler);
            menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
            
            if (hide) {
                topli = menu.find('.' + settings.topNavItemClass + ' .' + settings.openClass + ':first').closest('.' + settings.topNavItemClass);
                if (!(topli.is(event.relatedTarget) || topli.has(event.relatedTarget).length > 0)) {
                    if ((event.type === 'mouseout' || event.type === 'focusout') && topli.has(document.activeElement).length > 0) {
                        return;
                    }
                    topli.find('[aria-expanded]')
                        .attr('aria-expanded', 'false')
                        .removeClass(settings.openClass)
                        .filter('.' + settings.panelClass)
                        .attr('aria-hidden', 'true');
                    if ((event.type === 'keydown' && event.keyCode === Keyboard.ESCAPE) || event.type === 'DOMAttrModified') {
                        newfocus = topli.find(':tabbable:first');
                        setTimeout(function () {
                            menu.find('[aria-expanded].' + that.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
                            newfocus.focus();
                            that.justFocused = false;
                        }, 99);
                    }
                } else if (topli.length === 0) {
                    menu.find('[aria-expanded=true]')
                        .attr('aria-expanded', 'false')
                        .removeClass(settings.openClass)
                        .filter('.' + settings.panelClass)
                        .attr('aria-hidden', 'true');
                }
            } else {
                clearTimeout(that.focusTimeoutID);
                topli.siblings()
                    .find('[aria-expanded]')
                    .attr('aria-expanded', 'false')
                    .removeClass(settings.openClass)
                    .filter('.' + settings.panelClass)
                    .attr('aria-hidden', 'true');
                topli.find('[aria-expanded]')
                    .attr('aria-expanded', 'true')
                    .addClass(settings.openClass)
                    .filter('.' + settings.panelClass)
                    .attr('aria-hidden', 'false');
			
				jQuery(this.element).trigger('megamenu:open', topli.find('[aria-expanded]'));
			
                if (event.type === 'mouseover' && target.is(':tabbable') && topli.length === 1 && panel.length === 0 && menu.has(document.activeElement).length > 0) {
                    target.focus();
                    that.justFocused = false;
                }
                
                _toggleExpandedEventHandlers.call(that);
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_clickHandler
         * @desc Handle click event on mega menu item
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _clickHandler = function (event) {
            var target = $(event.target),
                topli = target.closest('.' + this.settings.topNavItemClass),
                panel = target.closest('.' + this.settings.panelClass);
            if (topli.length === 1
                    && panel.length === 0
                    && topli.find('.' + this.settings.panelClass).length === 1) {
                if (!target.hasClass(this.settings.openClass)) {
                    event.preventDefault();
                    event.stopPropagation();
                    _togglePanel.call(this, event);
                } else {
                    if (this.justFocused) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.justFocused = false;
                    } else if (isTouch) {
                        event.preventDefault();
                        event.stopPropagation();
                        _togglePanel.call(this, event, target.hasClass(this.settings.openClass));
                    }
                }
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_clickOutsideHandler
         * @desc Handle click event outside of a the megamenu
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _clickOutsideHandler = function (event) {
            if (this.menu.has($(event.target)).length === 0) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_DOMAttrModifiedHandler
         * @desc Handle DOMAttrModified event on panel to respond to Windows 8 Narrator ExpandCollapse pattern
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _DOMAttrModifiedHandler = function (event) {
            if (event.originalEvent.attrName === 'aria-expanded'
                    && event.originalEvent.newValue === 'false'
                    && $(event.target).hasClass(this.settings.openClass)) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_focusInHandler
         * @desc Handle focusin event on mega menu item.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _focusInHandler = function (event) {
            clearTimeout(this.focusTimeoutID);
            $(event.target)
                .addClass(this.settings.focusClass)
                .on('click.accessible-megamenu', $.proxy(_clickHandler, this));
            this.justFocused = true;
            if (this.panels.filter('.' + this.settings.openClass).length) {
                _togglePanel.call(this, event);
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_focusOutHandler
         * @desc Handle focusout event on mega menu item.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _focusOutHandler = function (event) {
            this.justFocused = false;
            var that = this,
                target = $(event.target),
                topli = target.closest('.' + this.settings.topNavItemClass),
                keepOpen = false;
            target
                .removeClass(this.settings.focusClass)
                .off('click.accessible-megamenu', _clickHandler);
            
            if (window.cvox) {
                // If ChromeVox is running...
                that.focusTimeoutID = setTimeout(function () {
                    window.cvox.Api.getCurrentNode(function (node) {
                        if (topli.has(node).length) {
                            // and the current node being voiced is in
                            // the mega menu, clearTimeout, 
                            // so the panel stays open.
                            clearTimeout(that.focusTimeoutID);
                        } else {
                            that.focusTimeoutID = setTimeout(function (scope, event, hide) {
                                _togglePanel.call(scope, event, hide);
                            }, 275, that, event, true);
                        }
                    });
                }, 25);
            } else {
                that.focusTimeoutID = setTimeout(function () {
                    _togglePanel.call(that, event, true);
                }, 300);
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_keyDownHandler
         * @desc Handle keydown event on mega menu.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _keyDownHandler = function (event) {
            var target = $($(this).is('.hover:tabbable') ? this : event.target),
                that = target.is(event.target) ? this : _getPlugin(target),
                settings = that.settings,
                menu = that.menu,
                topnavitems = that.topnavitems,
                topli = target.closest('.' + settings.topNavItemClass),
                tabbables = menu.find(':tabbable'),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                panelGroups = panel.find('.' + settings.panelGroupClass),
                currentPanelGroup = target.closest('.' + settings.panelGroupClass),
                next,
                keycode = event.keyCode || event.which,
                start,
                i,
                o,
                label,
                found = false,
                newString = Keyboard.keyMap[event.keyCode] || '',
                regex,
                isTopNavItem = (topli.length === 1 && panel.length === 0);
            if (target.is('.hover:tabbable')) {
                $('html').off('keydown.accessible-megamenu');
            }
            switch (keycode) {
            case Keyboard.ESCAPE:
                _togglePanel.call(that, event, true);
                break;
            case Keyboard.DOWN:
                event.preventDefault();
                if (isTopNavItem) {
                    _togglePanel.call(that, event);
                    found = (topli.find('.' + settings.panelClass + ' :tabbable:first').focus().length === 1);
                } else {
                    found = (tabbables.filter(':gt(' + tabbables.index(target) + '):first').focus().length === 1);
                }
                
                if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                    tabbables = $(':tabbable');
                    i = tabbables.index(target);
                    found = ($(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                }
                break;
            case Keyboard.UP:
                event.preventDefault();
                if (isTopNavItem && target.hasClass(settings.openClass)) {
                    _togglePanel.call(that, event, true);
                    next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                    if (next.children('.' + settings.panelClass).length) {
                        found = (next.children()
                            .attr('aria-expanded', 'true')
                            .addClass(settings.openClass)
                            .filter('.' + settings.panelClass)
                            .attr('aria-hidden', 'false')
                            .find(':tabbable:last')
                            .focus() === 1);
						jQuery(this.element).trigger('megamenu: open', next.children());
                    }
                } else if (!isTopNavItem) {
                    found = (tabbables.filter(':lt(' + tabbables.index(target) + '):last').focus().length === 1);
                }
                    
                if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                    tabbables = $(':tabbable');
                    i = tabbables.index(target);
                    found = ($(':tabbable:lt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                }
                break;
            case Keyboard.RIGHT:
                event.preventDefault();
                if (isTopNavItem) {
                    found = (topnavitems.filter(':gt(' + topnavitems.index(topli) + '):first').find(':tabbable:first').focus().length === 1);
                } else {
                    if (panelGroups.length && currentPanelGroup.length) {
                        // if the current panel contains panel groups, and we are able to focus the first tabbable element of the next panel group
                        found = (panelGroups.filter(':gt(' + panelGroups.index(currentPanelGroup) + '):first').find(':tabbable:first').focus().length === 1);
                    }
                    
                    if (!found) {
                        found = (topli.find(':tabbable:first').focus().length === 1);
                    }
                }
                break;
            case Keyboard.LEFT:
                event.preventDefault();
                if (isTopNavItem) {
                    found = (topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last').find(':tabbable:first').focus().length === 1);
                } else {
                    if (panelGroups.length && currentPanelGroup.length) {
                        // if the current panel contains panel groups, and we are able to focus the first tabbable element of the previous panel group
                        found = (panelGroups.filter(':lt(' + panelGroups.index(currentPanelGroup) + '):last').find(':tabbable:first').focus().length === 1);
                    }
                    
                    if (!found) {
                        found = (topli.find(':tabbable:first').focus().length === 1);
                    }
                }
                break;
            case Keyboard.TAB:
                i = tabbables.index(target);
                if (event.shiftKey && isTopNavItem && target.hasClass(settings.openClass)) {
                    _togglePanel(event, true);
                    next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                    if (next.children('.' + settings.panelClass).length) {
                        found = next.children()
                            .attr('aria-expanded', 'true')
                            .addClass(settings.openClass)
                            .filter('.' + settings.panelClass)
                            .attr('aria-hidden', 'false')
                            .find(':tabbable:last')
                            .focus();
						jQuery(this.element).trigger('megamenu: open', next.children());
                    }
                } else if (event.shiftKey && i > 0) {
                    found = (tabbables.filter(':lt(' + i + '):last').focus().length === 1);
                } else if (!event.shiftKey && i < tabbables.length - 1) {
                    found = (tabbables.filter(':gt(' + i + '):first').focus().length === 1);
                } else if (window.opera && opera.toString() === "[object Opera]") {
                    tabbables = $(':tabbable');
                    i = tabbables.index(target);
                    if (event.shiftKey) {
                        found = ($(':tabbable:lt(' + $(':tabbable').index(target) + '):last').focus().length === 1);
                    } else {
                        found = ($(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                    }
                }
                
                if (found) {
                    event.preventDefault();
                }
                break;
            case Keyboard.SPACE:
                if (isTopNavItem) {
                    event.preventDefault();
                    _clickHandler.call(that, event);
                }
                break;
            default:
                // alphanumeric filter    
                clearTimeout(this.keydownTimeoutID);
                keydownSearchString += newString !== keydownSearchString ? newString : '';
                
                if (keydownSearchString.length === 0) {
                    return;
                }
                
                this.keydownTimeoutID = setTimeout(function () {
                    keydownSearchString = '';
                }, keydownTimeoutDuration);

                if (isTopNavItem && !target.hasClass(settings.openClass)) {
                    tabbables = tabbables.filter('.' + settings.topNavItemClass + ' > :tabbable');
                } else {
                    tabbables = topli.find(':tabbable');
                }

                if (event.shiftKey) {
                    tabbables = $(tabbables.get()
                        .reverse());
                }

                for (i = 0; i < tabbables.length; i++) {
                    o = tabbables.eq(i);
                    if (o.is(target)) {
                        start = (keydownSearchString.length === 1) ? i + 1 : i;
                        break;
                    }
                }
                
                regex = new RegExp('^' + keydownSearchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), 'i');
                    
                for (i = start; i < tabbables.length; i++) {
                    o = tabbables.eq(i);
                    label = $.trim(o.text());
                    if (regex.test(label)) {
                        found = true;
                        o.focus();
                        break;
                    }
                }
                if (!found) {
                    for (i = 0; i < start; i++) {
                        o = tabbables.eq(i);
                        label = $.trim(o.text());
                        if (regex.test(label)) {
                            o.focus();
                            break;
                        }
                    }
                }
                break;
            }
            that.justFocused = false;
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_mouseDownHandler
         * @desc Handle mousedown event on mega menu.
         * @param {event} Event object
         * @memberof accessibleMegaMenu
         * @inner
         * @private
         */
        _mouseDownHandler = function (event) {
            this.mouseTimeoutID = setTimeout(function () {
                clearTimeout(this.focusTimeoutID);
            }, 1);
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_mouseOverHandler
         * @desc Handle mouseover event on mega menu.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _mouseOverHandler = function (event) {
            clearTimeout(this.mouseTimeoutID);
            $(event.target)
                .addClass(this.settings.hoverClass);
            _togglePanel.call(this, event);
            if ($(event.target).is(':tabbable')) {
                $('html').on('keydown.accessible-megamenu', $.proxy(_keyDownHandler, event.target));
            }
        };
        
        /**
         * @name jQuery.fn.accessibleMegaMenu~_mouseOutHandler
         * @desc Handle mouseout event on mega menu.
         * @param {event} Event object
         * @memberof jQuery.fn.accessibleMegaMenu
         * @inner
         * @private
         */
        _mouseOutHandler = function (event) {
            var that = this;
            $(event.target)
                .removeClass(that.settings.hoverClass);
            
            that.mouseTimeoutID = setTimeout(function () {
                _togglePanel.call(that, event, true);
            }, 300);
            if ($(event.target).is(':tabbable')) {
                $('html').off('keydown.accessible-megamenu');
            }
        };
        
        _toggleExpandedEventHandlers = function (hide) {
            var menu = this.menu;
            if (hide) {
                $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', _clickOutsideHandler);
                
                menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu', _DOMAttrModifiedHandler);
            } else {
                $('html').on('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', $.proxy(_clickOutsideHandler, this));
                
                /* Narrator in Windows 8 automatically toggles the aria-expanded property on double tap or click. 
                   To respond to the change to collapse the panel, we must add a listener for a DOMAttrModified event. */
                menu.find('[aria-expanded=true].' + this.settings.panelClass).on('DOMAttrModified.accessible-megamenu', $.proxy(_DOMAttrModifiedHandler, this));
            }
        };
        
        /* public attributes and methods ------------------------- */
        return {
            constructor: AccessibleMegaMenu,
            
            /**
             * @lends jQuery.fn.accessibleMegaMenu
             * @desc Initializes an instance of the accessibleMegaMenu plugins
             * @memberof jQuery.fn.accessibleMegaMenu
             * @instance
             */
            init: function () {
                var that = this,
                    settings = this.settings,
                    justFocused = this.justFocused = false,
                    nav = this.nav = $(this.element),
                    menu = this.menu = nav.children().first(),
                    topnavitems = this.topnavitems = menu.children();
                nav.attr("role", "navigation");
                menu.addClass(settings.menuClass);
                topnavitems.each(function (i, topnavitem) {
                    var topnavitemlink, topnavitempanel;
                    topnavitem = $(topnavitem);
                    topnavitem.addClass(settings.topNavItemClass);
                    topnavitemlink = topnavitem.find(":tabbable:first");
                    topnavitempanel = topnavitem.children(":not(:tabbable):last");
                    _addUniqueId.call(that, topnavitemlink);
                    if (topnavitempanel.length) {
                        _addUniqueId.call(that, topnavitempanel);
                        topnavitemlink.attr({
                            "aria-haspopup": true,
                            "aria-owns": topnavitempanel.attr("id"),
                            "aria-controls": topnavitempanel.attr("id"),
                            "aria-expanded": false
                        });

                        topnavitempanel.attr({
                            "role": "group",
                            "aria-expanded": false,
                            "aria-hidden": true
                        })
                            .addClass(settings.panelClass)
                            .not("[aria-labelledby]")
                            .attr("aria-labelledby", topnavitemlink.attr("id"));
                    }
                });
                
                this.panels = menu.find("." + settings.panelClass);

                menu.on("focusin.accessible-megamenu", ":tabbable, :focusable, ." + settings.panelClass, $.proxy(_focusInHandler, this))
                    .on("focusout.accessible-megamenu", ":tabbable, :focusable, ." + settings.panelClass, $.proxy(_focusOutHandler, this))
                    .on("keydown.accessible-megamenu", $.proxy(_keyDownHandler, this))
                    .on("mouseover.accessible-megamenu", $.proxy(_mouseOverHandler, this))
                    .on("mouseout.accessible-megamenu", $.proxy(_mouseOutHandler, this))
                    .on("mousedown.accessible-megamenu", $.proxy(_mouseDownHandler, this));
                
				if (isTouch) {
					menu.on("touchstart.accessible-megamenu",  $.proxy(_clickHandler, this));
				}
                
				menu.find("hr").attr("role", "separator");
            },
            
            /**
             * @desc Get default values
             * @example $(selector).accessibleMegaMenu("getDefaults");
             * @return {object}
             * @memberof jQuery.fn.accessibleMegaMenu
             * @instance
             */
            getDefaults: function () {
                return this._defaults;
            },
            
            /**
             * @desc Get any option set to plugin using its name (as string)
             * @example $(selector).accessibleMegaMenu("getOption", some_option);
             * @param {string} opt
             * @return {string}
             * @memberof jQuery.fn.accessibleMegaMenu
             * @instance
             */
            getOption: function (opt) {
                return this.settings[opt];
            },
            
            /**
             * @desc Get all options
             * @example $(selector).accessibleMegaMenu("getAllOptions");
             * @return {object}
             * @memberof jQuery.fn.accessibleMegaMenu
             * @instance
             */
            getAllOptions: function () {
                return this.settings;
            },
            
            /**
             * @desc Set option
             * @example $(selector).accessibleMegaMenu("setOption", "option_name",  "option_value",  reinitialize);
             * @param {string} opt - Option name
             * @param {string} val - Option value
             * @param {boolean} [reinitialize] - boolean to re-initialize the menu.
             * @memberof jQuery.fn.accessibleMegaMenu
             * @instance
             */
            setOption: function (opt, value, reinitialize) {
                this.settings[opt] = value;
                if (reinitialize) {
                    this.init();
                }
            }
        };
    }());
        
    /* lightweight plugin wrapper around the constructor, 
       to prevent against multiple instantiations */
       
    /**
     * @class accessibleMegaMenu
     * @memberOf jQuery.fn
     * @classdesc Implements an accessible mega menu as a jQuery plugin. 
     * <p>The mega-menu It is modeled after the mega menu on {@link http://adobe.com|adobe.com} but has been simplified for use by others. A brief description of the interaction design choices can be found in a blog post at {@link http://blogs.adobe.com/accessibility/2013/05/adobe-com.html|Mega menu accessibility on adobe.com}.</p>
     * <h3>Keyboard Accessibility</h3>
     * <p>The accessible mega menu supports keyboard interaction modeled after the behavior described in the {@link http://www.w3.org/TR/wai-aria-practices/#menu|WAI-ARIA Menu or Menu bar (widget) design pattern}, however we also try to respect users' general expectations for the behavior of links in a global navigation. To this end, the accessible mega menu implementation permits tab focus on each of the six top-level menu items. When one of the menu items has focus, pressing the Enter key, Spacebar or Down arrow will open the submenu panel, and pressing the Left or Right arrow key will shift focus to the adjacent menu item. Links within the submenu panels are included in the tab order when the panel is open. They can also be navigated with the arrow keys or by typing the first character in the link name, which speeds up keyboard navigation considerably. Pressing the Escape key closes the submenu and restores focus to the parent menu item.</p>
     * <h3>Screen Reader Accessibility</h3>
     * <p>The accessible mega menu models its use of WAI-ARIA Roles, States, and Properties after those described in the {@link http://www.w3.org/TR/wai-aria-practices/#menu|WAI-ARIA Menu or Menu bar (widget) design pattern} with some notable exceptions, so that it behaves better with screen reader user expectations for global navigation. We don't use <code class="prettyprint prettyprinted" style=""><span class="pln">role</span><span class="pun">=</span><span class="str">"menu"</span></code> for the menu container and <code class="prettyprint prettyprinted" style=""><span class="pln">role</span><span class="pun">=</span><span class="str">"menuitem"</span></code> for each of the links therein, because if we do, assistive technology will no longer interpret the links as links, but instead, as menu items, and the links in our global navigation will no longer show up when a screen reader user executes a shortcut command to bring up a list of links in the page.</p>
     * @example <h4>HTML</h4><hr/>
&lt;nav&gt;
    &lt;ul class=&quot;nav-menu&quot;&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a href=&quot;?movie&quot;&gt;Movies&lt;/a&gt;
            &lt;div class=&quot;sub-nav&quot;&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=0&quot;&gt;Action &amp;amp; Adventure&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=2&quot;&gt;Children &amp;amp; Family&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=7&quot;&gt;Dramas&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=9&quot;&gt;Foreign&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=14&quot;&gt;Musicals&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=15&quot;&gt;Romance&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/li&gt;
        &lt;li class=&quot;nav-item&quot;&gt;
            &lt;a href=&quot;?tv&quot;&gt;TV Shows&lt;/a&gt;
            &lt;div class=&quot;sub-nav&quot;&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=20&quot;&gt;Classic TV&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=21&quot;&gt;Crime TV&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=27&quot;&gt;Reality TV&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=30&quot;&gt;TV Action&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul class=&quot;sub-nav-group&quot;&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=33&quot;&gt;TV Dramas&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=34&quot;&gt;TV Horror&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
     * @example <h4>CSS</h4><hr/>
&#47;* Rudimentary mega menu CSS for demonstration *&#47;    

&#47;* mega menu list *&#47;
.nav-menu {
    display: block;
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 15;
}

&#47;* a top level navigation item in the mega menu *&#47;
.nav-item {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;
}

&#47;* first descendant link within a top level navigation item *&#47;
.nav-item &gt; a {
    position: relative;
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0 0 -1px 0;
    border: 1px solid transparent;
}

&#47;* focus/open states of first descendant link within a top level 
   navigation item *&#47;
.nav-item &gt; a:focus,
.nav-item &gt; a.open {
    border: 1px solid #dedede;
}

&#47;* open state of first descendant link within a top level 
   navigation item *&#47;
.nav-item &gt; a.open {
    background-color: #fff;
    border-bottom: none;
    z-index: 1;
}

&#47;* sub-navigation panel *&#47;
.sub-nav {
    position: absolute;
    display: none;
    top: 2.2em;
    margin-top: -1px;
    padding: 0.5em 1em;
    border: 1px solid #dedede;
    background-color: #fff;
}

&#47;* sub-navigation panel open state *&#47;
.sub-nav.open {
    display: block;
}

&#47;* list of items within sub-navigation panel *&#47;
.sub-nav ul {
    display: inline-block;
    vertical-align: top;
    margin: 0 1em 0 0;
    padding: 0;
}

&#47;* list item within sub-navigation panel *&#47;
.sub-nav li {
    display: block;
    list-style-type: none;
    margin: 0;
    padding: 0;
}     
     * @example <h4>JavaScript</h4><hr/>
&lt;!-- include jquery --&gt;
&lt;script src=&quot;http://code.jquery.com/jquery-1.10.1.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- include the jquery-accessibleMegaMenu plugin script --&gt;
&lt;script src=&quot;js/jquery-accessibleMegaMenu.js&quot;&gt;&lt;/script&gt;

&lt;!-- initialize a selector as an accessibleMegaMenu --&gt;
&lt;script&gt;
    $(&quot;nav:first&quot;).accessibleMegaMenu({
        &#47;* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby *&#47;
        uuidPrefix: &quot;accessible-megamenu&quot;,
        
        &#47;* css class used to define the megamenu styling *&#47;
        menuClass: &quot;nav-menu&quot;,
        
        &#47;* css class for a top-level navigation item in the megamenu *&#47;
        topNavItemClass: &quot;nav-item&quot;,
        
        &#47;* css class for a megamenu panel *&#47;
        panelClass: &quot;sub-nav&quot;,
        
        &#47;* css class for a group of items within a megamenu panel *&#47;
        panelGroupClass: &quot;sub-nav-group&quot;,
        
        &#47;* css class for the hover state *&#47;
        hoverClass: &quot;hover&quot;,
        
        &#47;* css class for the focus state *&#47;
        focusClass: &quot;focus&quot;,
        
        &#47;* css class for the open state *&#47;
        openClass: &quot;open&quot;
    });
&lt;/script&gt;
     * @param {object} [options] Mega Menu options
     * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
     * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
     * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
     * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
     * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
     * @param {string} [options.hoverClass=hover] - CSS class for the hover state
     * @param {string} [options.focusClass=focus] - CSS class for the focus state
     * @param {string} [options.openClass=open] - CSS class for the open state
     */
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new AccessibleMegaMenu(this, options));
            }
        });
    };
        
    /* :focusable and :tabbable selectors from 
       https://raw.github.com/jquery/jquery-ui/master/ui/jquery.ui.core.js */
        
    /**
     * @private
     */
    function visible(element) {
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
            return $.css(this, "visibility") === "hidden";
        }).length;
    }
        
    /**
     * @private
     */
    function focusable(element, isTabIndexNotNaN) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap=#" + mapName + "]")[0];
            return !!img && visible(img);
        }
        return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled :
                "a" === nodeName ?
                        element.href || isTabIndexNotNaN :
                        isTabIndexNotNaN) &&
                            // the element and all of its ancestors must be visible
                            visible(element);
    }
        
    $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
            return function (elem) {
                return !!$.data(elem, dataName);
            };
        }) : // support: jQuery <1.8
                function (elem, i, match) {
                    return !!$.data(elem, match[3]);
                },
    
        focusable: function (element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        },
    
        tabbable: function (element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
        }
    });
}(jQuery, window, document));
(function($){
	"use strict";
	if(!$('body').hasClass('dfd-rtl')) {
		var $window = $(window);
		$.runMegaMenu = function() {
			$("nav.mega-menu")
				.accessibleMegaMenu({
					/* prefix for generated unique id attributes, which are required 
					 to indicate aria-owns, aria-controls and aria-labelledby */
					uuidPrefix: "accessible-megamenu",
					/* css class used to define the megamenu styling */
					menuClass: "nav-menu",
					/* css class for a top-level navigation item in the megamenu */
					topNavItemClass: "nav-item",
					/* css class for a megamenu panel */
					panelClass: "sub-nav",
					/* css class for a group of items within a megamenu panel */
					panelGroupClass: "sub-nav-group",
					/* css class for the hover state */
					hoverClass: "hover",
					/* css class for the focus state */
					focusClass: "focus",
					/* css class for the open state */
					openClass: "open"
				})
				.on('megamenu:open focusin.accessible-megamenu mouseover.accessible-megamenu', function(e, el) {
					if ($window.width() <= screen_medium) return false;

					var $menu = $(this),
						$el = $(el),
						$sub_nav;

					if ($el.is('.main-menu-link.open') && $el.siblings('div.sub-nav').length>0) {
						$sub_nav = $el.siblings('div.sub-nav');
					} else if ($el.is('div.sub-nav')) {
						$sub_nav = $el;
						$el = $sub_nav.siblings('.main-menu-link');
					} else {
						return true;
					}

					$sub_nav.removeAttr('style').removeClass('sub-nav-onecol');

					if($sub_nav.parents('#header-container').hasClass('dfd-enable-mega-menu')) {
						$sub_nav.find('ul.sub-menu-wide').each(function(){
							var $ul = $(this),
								total_width = 0,
								limit = $ul.data('limit-columns'),
								i = 0;

							$ul.children().each(function(){
								if(!limit || limit > i) {
	//								total_width += Math.ceil($(this)[0].offsetWidth);
									total_width += Math.ceil(getComputedStyle($(this)[0]).width.substring(0,getComputedStyle($(this)[0]).width.indexOf('px')));
	//								console.log(Math.ceil(getComputedStyle($(this)[0]).width.substring(0,getComputedStyle($(this)[0]).width.indexOf('px'))));
								}
								i++;
							});

							$ul.innerWidth(total_width + i);
						});

						var w_width = $window.width();
						var sub_nav_width = $sub_nav.width();
						var sub_nav_margin = 0;

						$sub_nav.css({'max-width': w_width});

						if (sub_nav_width > w_width) {
							$sub_nav.addClass('sub-nav-onecol');

							sub_nav_width = $sub_nav.width();
						}
						var el_width = $el.outerWidth();
						var el_offset_left = $el.offset().left;
						var el_offset_right = w_width - $el.offset().left - el_width;

						if(el_offset_left < 0) {
							sub_nav_margin = -(el_offset_left -sub_nav_width/2 + el_width/2);
						}
						if(el_offset_right < (sub_nav_width - el_width)) {
							sub_nav_margin = -(sub_nav_width - el_width - el_offset_right);
						}
						$sub_nav.css('margin-left', Math.ceil(sub_nav_margin));
					}


					$('.sub-menu.sub-nav-group .has-submenu').hover(function() {
						var $self = $(this),
							$sub_sub_nav = $self.find('> .sub-sub-menu');
						setTimeout(function() {
							var windowWidth = $(window).width(),
								selfWidth = $self.outerWidth(true),
								offset = $sub_sub_nav.offset();
							if(offset.left + selfWidth > windowWidth && !$sub_sub_nav.hasClass('sub-nav-left')) {
								$sub_sub_nav.addClass('sub-nav-left');
							} else if($sub_sub_nav.hasClass('sub-nav-left')) {
								$sub_sub_nav.addClass('sub-nav-left');
							}
						},50);
					});




				});
		};
		/*  to add MORE button in header menu start */
		/*
		$.cloneMenuItems = function() {
			var main_mega_menu = $('nav.mega-menu');
			var more_menu_item = $('<li id="nav-menu-item-more" class="menu-item-more mega-menu-item nav-item menu-item-depth-0 has-submenu" style="display: none">\n\
				<a class="menu-link main-menu-link item-title" href="#">More</a>\n\
				<div class="sub-nav">\n\
					<ul class="menu-depth-1 sub-menu sub-nav-group"></ul>\n\
				</div></li>');

			$('> ul > li', main_mega_menu).each(function() {
				$('> div.sub-nav > ul', more_menu_item).append($(this).clone().hide().removeClass('current-menu-parent current-menu-ancestor current-menu-item'));
			});


			var depth_reg = /(menu-item-|menu-)depth-(\d+)/;
			$('ul, li', more_menu_item).each(function() {
				var depth = depth_reg.exec($(this).attr('class'));
				if (depth != null) {
					var old_depth = depth[2];
					var new_depth = parseInt(old_depth) + 1;

					$(this).removeClass(depth[0]).addClass(depth[0].replace(old_depth, new_depth));
				}
			});

			// 2-й уровень
			$('> div.sub-nav > ul > li', more_menu_item).addClass('sub-nav-item').children('a').removeClass('main-menu-link').addClass('sub-menu-link');

			// 3-й уровень
			$('> div.sub-nav > ul > li > div.sub-nav > ul', more_menu_item).unwrap().removeClass('sub-menu sub-nav-group').addClass('sub-sub-menu');

			$('> ul', main_mega_menu).append(more_menu_item);
		};

		$.hideShowMenuItems = function() {
			var main_mega_menu = $('nav.mega-menu').parent('.header-col-fluid');
			var main_mena_menu_width = main_mega_menu.width();
			var items_width = 0;
			var nav_menu_item_more = $('#nav-menu-item-more');

			$('nav > ul > li', main_mega_menu).each(function() {
				var menu_item = $(this);

				if (menu_item.hasClass('menu-item-more')) {
					return false;
				}

				if (menu_item.is(':visible')) {
					items_width += menu_item.outerWidth(true);
				}

				if (items_width > main_mena_menu_width) {
					menu_item.prev().hide().end().hide();

					nav_menu_item_more.find('#'+menu_item.prev().attr('id')).show();
					nav_menu_item_more.find('#'+menu_item.attr('id')).show();

					if (!nav_menu_item_more.is(':visible')) {
						nav_menu_item_more.show();
					}
				} else {
					var first_hidden_menu_item = $('nav > ul > li:hidden:first', main_mega_menu);
					if (main_mena_menu_width - items_width > first_hidden_menu_item.outerWidth(true)) {
						first_hidden_menu_item.show();
						nav_menu_item_more.find('#'+first_hidden_menu_item.attr('id')).hide();
					}
				}
			});

			if ($('nav > ul > li.mega-menu-item:hidden', main_mega_menu).length === 0) {
				nav_menu_item_more.hide();
			}
		};
		*/
	   /*  to add MORE button in header menu end */

	   /* menu items slider */


		var initSlider = function(slider) {
			//var slider = $('#main_mega_menu, #top_left_mega_menu, #top_right_mega_menu');
			var innerWrap = slider.find('> ul');
			var slider_prev = $('.carousel-nav.next', slider);
			var slider_next = $('.carousel-nav.prev', slider);
			var menu_width = innerWrap.innerWidth();
			var items_width = 0;

			$('.menu-item-depth-0', slider).each(function() {
				var menu_item = $(this);

				items_width += menu_item.outerWidth(true);

				if (items_width > menu_width) {
					menu_item.hide();
				} else {
					menu_item.show();
				}
			});
			if(items_width > menu_width) {
				slider.addClass('menu-with-slider');
				slider.find('.carousel-nav').css('display', 'block');
				slider_prev.unbind('click').on('click touchend',function() {
					var toHidePrev = innerWrap.find('.menu-item-depth-0:visible:first');
					var toShowPrev = innerWrap.find('.menu-item-depth-0:visible:last').next('.menu-item-depth-0');
					if(toShowPrev.length > 0) {
						toHidePrev.hide('fast');
						toShowPrev.show('fast');
					}
				});
				slider_next.unbind('click').on('click touchend',function() {
					var toHideNext = innerWrap.find('.menu-item-depth-0:visible:last');
					var toShowNext = innerWrap.find('.menu-item-depth-0:visible:first').prev('.menu-item-depth-0');
					if(toShowNext.length > 0) {
						toHideNext.hide('fast');
						toShowNext.show('fast');
					}
				});
			} else {
				slider.removeClass('menu-with-slider');
				slider.find('.carousel-nav').css('display', 'none');
			}
		};

	/*
		var scrollTimerId;
		$window.scroll(function() {
			if (!scrollTimerId)
				$('#header-container nav.mega-menu').addClass('dfd-hide-overflow');

			clearTimeout(scrollTimerId);
			scrollTimerId = setTimeout(function(){
				$('#header-container nav.mega-menu').removeClass('dfd-hide-overflow');
				scrollTimerId = undefined;
			},150);
		});
		$window.on('load resize window_top window_not_top', function() {
			$('#header-container .onclick-menu-wrap .onclick-menu-cover').css('height', $window.height()*.7);
			if($('#header-container').hasClass('header-style-1') || $('#header-container').hasClass('header-style-2') || $('#header-container').hasClass('header-style-3') || $('#header-container').hasClass('header-style-4')) {
				setTimeout(function() {
					initSlider($('#main_mega_menu'));
					initSlider($('#top_left_mega_menu'));
					initSlider($('#top_right_mega_menu'));
				}, 500);
			}
		});
		*/

		$('document').ready(function() {
			/*$('#side-area .widget.widget_nav_menu .item-title').click(function(e){
				e.preventDefault();
				$(this).parent().trigger('click');
			});
	*/
			var dfdInitClickMenu = function(elem) {
				elem.click(function(e){
					e.preventDefault();

					var $a = $(this);
					var $sub_nav = $a.siblings('div.sub-nav');

					if ($sub_nav.length === 0) {
						$sub_nav = $a.siblings('ul');
					}

					$sub_nav.slideToggle();
					$a.toggleClass('open');
				});
			};

			/*dfdInitClickMenu($('#side-area .onclick-nav-menu li.has-submenu > a'));*/
			dfdInitClickMenu($('#header .onclick-nav-menu li.has-submenu > a'));
			dfdInitClickMenu($('.widget.widget_nav_menu li.has-submenu > a'));
		});
	}
})(jQuery);
(function($){
	"use strict";
	if($('body').hasClass('dfd-rtl')) {
		var $window = $(window);
		$.runMegaMenu = function() {
			$("nav.mega-menu")
				.accessibleMegaMenu({
					/* prefix for generated unique id attributes, which are required 
					 to indicate aria-owns, aria-controls and aria-labelledby */
					uuidPrefix: "accessible-megamenu",
					/* css class used to define the megamenu styling */
					menuClass: "nav-menu",
					/* css class for a top-level navigation item in the megamenu */
					topNavItemClass: "nav-item",
					/* css class for a megamenu panel */
					panelClass: "sub-nav",
					/* css class for a group of items within a megamenu panel */
					panelGroupClass: "sub-nav-group",
					/* css class for the hover state */
					hoverClass: "hover",
					/* css class for the focus state */
					focusClass: "focus",
					/* css class for the open state */
					openClass: "open"
				})
				.on('megamenu:open', function(e, el) {
					if ($window.width() <= screen_medium) return false;

					var $menu = $(this),
						$el = $(el),
						$sub_nav;

					if ($el.is('.main-menu-link.open') && $el.siblings('div.sub-nav').length>0) {
						$sub_nav = $el.siblings('div.sub-nav');
					} else if ($el.is('div.sub-nav')) {
						$sub_nav = $el;
						$el = $sub_nav.siblings('.main-menu-link');
					} else {
						return true;
					}

					$sub_nav.removeAttr('style').removeClass('sub-nav-onecol');

					if($sub_nav.parents('#header-container').hasClass('header-style-1') || $sub_nav.parents('#header-container').hasClass('header-style-2') || $sub_nav.parents('#header-container').hasClass('header-style-3') || $sub_nav.parents('#header-container').hasClass('header-style-4')) {
						$sub_nav.find('ul.sub-menu-wide').each(function(){
							var $ul = $(this);
							var total_width = 1;

							$ul.children().each(function(){
								total_width += $(this).outerWidth();
							});

							$ul.innerWidth(total_width);
						});

						var w_width = $window.width();
						var sub_nav_width = $sub_nav.width();
						var sub_nav_margin = 0;

						$sub_nav.css({'max-width': w_width});

						if (sub_nav_width > w_width) {
							$sub_nav.addClass('sub-nav-onecol');

							sub_nav_width = $sub_nav.width();
						}
						var el_width = $el.outerWidth();
						var el_offset_left = $el.offset().left;
						var el_offset_right = w_width - $el.offset().left - el_width;

						if(el_offset_right < 0) {		//change for RTL
							sub_nav_margin = -(el_offset_right -sub_nav_width/2 + el_width/2);
						}
						if(el_offset_left < (sub_nav_width - el_width)) {		//change for RTL
							sub_nav_margin = -(sub_nav_width - el_width - el_offset_left);
						}
						$sub_nav.css('margin-right', sub_nav_margin);	//change for RTL
					}
				});
		};
		/*  to add MORE button in header menu start */
		/*
		$.cloneMenuItems = function() {
			var main_mega_menu = $('nav.mega-menu');
			var more_menu_item = $('<li id="nav-menu-item-more" class="menu-item-more mega-menu-item nav-item menu-item-depth-0 has-submenu" style="display: none">\n\
				<a class="menu-link main-menu-link item-title" href="#">More</a>\n\
				<div class="sub-nav">\n\
					<ul class="menu-depth-1 sub-menu sub-nav-group"></ul>\n\
				</div></li>');

			$('> ul > li', main_mega_menu).each(function() {
				$('> div.sub-nav > ul', more_menu_item).append($(this).clone().hide().removeClass('current-menu-parent current-menu-ancestor current-menu-item'));
			});


			var depth_reg = /(menu-item-|menu-)depth-(\d+)/;
			$('ul, li', more_menu_item).each(function() {
				var depth = depth_reg.exec($(this).attr('class'));
				if (depth != null) {
					var old_depth = depth[2];
					var new_depth = parseInt(old_depth) + 1;

					$(this).removeClass(depth[0]).addClass(depth[0].replace(old_depth, new_depth));
				}
			});

			// 2-й уровень
			$('> div.sub-nav > ul > li', more_menu_item).addClass('sub-nav-item').children('a').removeClass('main-menu-link').addClass('sub-menu-link');

			// 3-й уровень
			$('> div.sub-nav > ul > li > div.sub-nav > ul', more_menu_item).unwrap().removeClass('sub-menu sub-nav-group').addClass('sub-sub-menu');

			$('> ul', main_mega_menu).append(more_menu_item);
		};

		$.hideShowMenuItems = function() {
			var main_mega_menu = $('nav.mega-menu').parent('.header-col-fluid');
			var main_mena_menu_width = main_mega_menu.width();
			var items_width = 0;
			var nav_menu_item_more = $('#nav-menu-item-more');

			$('nav > ul > li', main_mega_menu).each(function() {
				var menu_item = $(this);

				if (menu_item.hasClass('menu-item-more')) {
					return false;
				}

				if (menu_item.is(':visible')) {
					items_width += menu_item.outerWidth(true);
				}

				if (items_width > main_mena_menu_width) {
					menu_item.prev().hide().end().hide();

					nav_menu_item_more.find('#'+menu_item.prev().attr('id')).show();
					nav_menu_item_more.find('#'+menu_item.attr('id')).show();

					if (!nav_menu_item_more.is(':visible')) {
						nav_menu_item_more.show();
					}
				} else {
					var first_hidden_menu_item = $('nav > ul > li:hidden:first', main_mega_menu);
					if (main_mena_menu_width - items_width > first_hidden_menu_item.outerWidth(true)) {
						first_hidden_menu_item.show();
						nav_menu_item_more.find('#'+first_hidden_menu_item.attr('id')).hide();
					}
				}
			});

			if ($('nav > ul > li.mega-menu-item:hidden', main_mega_menu).length === 0) {
				nav_menu_item_more.hide();
			}
		};
		*/
	   /*  to add MORE button in header menu end */

	   /* menu items slider */


		var initSlider = function(slider) {
			//var slider = $('#main_mega_menu, #top_left_mega_menu, #top_right_mega_menu');
			var innerWrap = slider.find('> ul');
			var slider_prev = $('.carousel-nav.next', slider);
			var slider_next = $('.carousel-nav.prev', slider);
			var menu_width = slider.innerWidth();
			var items_width = 0;

			$('.menu-item-depth-0', slider).each(function() {
				var menu_item = $(this);

				items_width += menu_item.outerWidth(true);

				if (items_width > menu_width) {
					menu_item.hide();
				} else {
					menu_item.show();
				}
			});
			if(items_width > menu_width) {
				slider.addClass('menu-with-slider');
				slider.find('.carousel-nav').css('display', 'block');
				slider_prev.unbind('click').on('click touchend',function() {
					var toHidePrev = innerWrap.find('.menu-item-depth-0:visible:first');
					var toShowPrev = innerWrap.find('.menu-item-depth-0:visible:last').next('.menu-item-depth-0');
					if(toShowPrev.length > 0) {
						toHidePrev.hide('fast');
						toShowPrev.show('fast');
					}
				});
				slider_next.unbind('click').on('click touchend',function() {
					var toHideNext = innerWrap.find('.menu-item-depth-0:visible:last');
					var toShowNext = innerWrap.find('.menu-item-depth-0:visible:first').prev('.menu-item-depth-0');
					if(toShowNext.length > 0) {
						toHideNext.hide('fast');
						toShowNext.show('fast');
					}
				});
			} else {
				slider.removeClass('menu-with-slider');
				slider.find('.carousel-nav').css('display', 'none');
			}
		};

	/*
		var scrollTimerId;
		$window.scroll(function() {
			if (!scrollTimerId)
				$('#header-container nav.mega-menu').addClass('dfd-hide-overflow');

			clearTimeout(scrollTimerId);
			scrollTimerId = setTimeout(function(){
				$('#header-container nav.mega-menu').removeClass('dfd-hide-overflow');
				scrollTimerId = undefined;
			},150);
		});
		*/
		$window.on('load resize scroll', function() {
			$('#header-container .onclick-menu-wrap .onclick-menu-cover').css('height', $window.height()*.7);
			if(!$('#header-container').hasClass('header-style-5') && !$('#header-container').hasClass('header-style-7') && !$('#header-container').hasClass('header-style-8')) {
				setTimeout(function() {
					initSlider($('#main_mega_menu'));
					initSlider($('#top_left_mega_menu'));
					initSlider($('#top_right_mega_menu'));
				}, 500);
			}
		});

		$('document').ready(function() {
			/*$('#side-area .widget.widget_nav_menu .item-title').click(function(e){
				e.preventDefault();
				$(this).parent().trigger('click');
			});
	*/
			var dfdInitClickMenu = function(elem) {
				elem.click(function(e){
					e.preventDefault();

					var $a = $(this);
					var $sub_nav = $a.siblings('div.sub-nav');

					if ($sub_nav.length === 0) {
						$sub_nav = $a.siblings('ul');
					}

					$sub_nav.slideToggle();
					$a.toggleClass('open');
				});
			};

			/*dfdInitClickMenu($('#side-area .onclick-nav-menu li.has-submenu > a'));*/
			dfdInitClickMenu($('#header .onclick-nav-menu li.has-submenu > a'));
			dfdInitClickMenu($('.widget.widget_nav_menu li.has-submenu > a'));
		});
	}
})(jQuery);
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    var instances = [], matchers = [], defaultOptions = {
        precision: 100,
        elapse: false,
        defer: false
    };
    matchers.push(/^[0-9]*$/.source);
    matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers = new RegExp(matchers.join("|"));
    function parseDateString(dateString) {
        if (dateString instanceof Date) {
            return dateString;
        }
        if (String(dateString).match(matchers)) {
            if (String(dateString).match(/^[0-9]*$/)) {
                dateString = Number(dateString);
            }
            if (String(dateString).match(/\-/)) {
                dateString = String(dateString).replace(/\-/g, "/");
            }
            return new Date(dateString);
        } else {
            throw new Error("Couldn't cast `" + dateString + "` to a date object.");
        }
    }
    var DIRECTIVE_KEY_MAP = {
        Y: "years",
		z: "yearsToMonth",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };
    function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize);
    }
    function strftime(offsetObject) {
        return function(format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives) {
                for (var i = 0, len = directives.length; i < len; ++i) {
                    var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = escapedRegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
                    directive = directive[2];
                    if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                        value = DIRECTIVE_KEY_MAP[directive];
                        value = Number(offsetObject[value]);
                    }
                    if (value !== null) {
                        if (modifier === "!") {
                            value = pluralize(plural, value);
                        }
                        if (modifier === "") {
                            if (value < 10) {
                                value = "0" + value.toString();
                            }
                        }
                        format = format.replace(regexp, value.toString());
                    }
                }
            }
            format = format.replace(/%%/, "%");
            return format;
        };
    }
    function pluralize(format, count) {
        var plural = "s", singular = "";
        if (format) {
            format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
            if (format.length === 1) {
                plural = format[0];
            } else {
                singular = format[0];
                plural = format[1];
            }
        }
        if (Math.abs(count) > 1) {
            return plural;
        } else {
            return singular;
        }
    }
    var Countdown = function(el, finalDate, options) {
        this.el = el;
        this.$el = $(el);
        this.interval = null;
        this.offset = {};
        this.options = $.extend({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (options) {
            if (typeof options === "function") {
                this.$el.on("update.countdown", options);
                this.$el.on("stoped.countdown", options);
                this.$el.on("finish.countdown", options);
            } else {
                this.options = $.extend({}, defaultOptions, options);
            }
        }
        this.setFinalDate(finalDate);
        if (this.options.defer === false) {
            this.start();
        }
    };
    $.extend(Countdown.prototype, {
        start: function() {
            if (this.interval !== null) {
                clearInterval(this.interval);
            }
            var self = this;
            this.update();
            this.interval = setInterval(function() {
                self.update.call(self);
            }, this.options.precision);
        },
        stop: function() {
            clearInterval(this.interval);
            this.interval = null;
            this.dispatchEvent("stoped");
        },
        toggle: function() {
            if (this.interval) {
                this.stop();
            } else {
                this.start();
            }
        },
        pause: function() {
            this.stop();
        },
        resume: function() {
            this.start();
        },
        remove: function() {
            this.stop.call(this);
            instances[this.instanceNumber] = null;
            delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(value) {
            this.finalDate = parseDateString(value);
        },
        update: function() {
            if (this.$el.closest("html").length === 0) {
                this.remove();
                return;
            }
            var hasEventsAttached = $._data(this.el, "events") !== undefined, now = new Date(), newTotalSecsLeft;
            newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
            newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
            newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
            if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
                return;
            } else {
                this.totalSecsLeft = newTotalSecsLeft;
            }
            this.elapsed = now >= this.finalDate;
			
			var monthInYears, Years;
			Years = Math.floor(   (this.totalSecsLeft / 60 / 60 / 24 / 30.4368) / 12   );
			monthInYears = Math.abs(   Years * 12    );
			
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),

				years: Years,
                yearsToMonth: Math.floor((this.totalSecsLeft / 60 / 60 / 24 / 30.4368) -   monthInYears  ),

                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            };
            if (!this.options.elapse && this.totalSecsLeft === 0) {
                this.stop();
                this.dispatchEvent("finish");
            } else {
                this.dispatchEvent("update");
            }
        },
        dispatchEvent: function(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate;
            event.elapsed = this.elapsed;
            event.offset = $.extend({}, this.offset);
            event.strftime = strftime(this.offset);
            this.$el.trigger(event);
        }
    });
    $.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var instanceNumber = $(this).data("countdown-instance");
            if (instanceNumber !== undefined) {
                var instance = instances[instanceNumber], method = argumentsArray[0];
                if (Countdown.prototype.hasOwnProperty(method)) {
                    instance[method].apply(instance, argumentsArray.slice(1));
                } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
                    instance.setFinalDate.call(instance, method);
                    instance.start();
                } else {
                    $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
                }
            } else {
                new Countdown(this, argumentsArray[0], argumentsArray[1]);
            }
        });
    };
});
// Generated by CoffeeScript 1.6.2
/**
 @license Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */


(function () {
	var $, win;

	$ = this.jQuery || window.jQuery;

	win = $(window);

	$.fn.stick_in_parent = function (opts) {
		var doc, elm, enable_bottoming, inner_scrolling, manual_spacer, offset_top, outer_width, parent_selector, recalc_every, sticky_class, _fn, _i, _len;

		if (opts == null) {
			opts = {};
		}
		sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;
		if (offset_top == null) {
			offset_top = 0;
		}
		if (parent_selector == null) {
			parent_selector = void 0;
		}
		if (inner_scrolling == null) {
			inner_scrolling = true;
		}
		if (sticky_class == null) {
			sticky_class = "is_stuck";
		}
		doc = $(document);
		if (enable_bottoming == null) {
			enable_bottoming = true;
		}
		outer_width = function (el) {
			var computed, w, _el;

			if (window.getComputedStyle) {
				_el = el[0];
				computed = window.getComputedStyle(el[0]);
				w = parseFloat(computed.getPropertyValue("width")) + parseFloat(computed.getPropertyValue("margin-left")) + parseFloat(computed.getPropertyValue("margin-right"));
				if (computed.getPropertyValue("box-sizing") !== "border-box") {
					w += parseFloat(computed.getPropertyValue("border-left-width")) + parseFloat(computed.getPropertyValue("border-right-width")) + parseFloat(computed.getPropertyValue("padding-left")) + parseFloat(computed.getPropertyValue("padding-right"));
				}
				return w;
			} else {
				return el.outerWidth(true);
			}
		};
		_fn = function (elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
			var bottomed, detach, fixed, last_pos, last_scroll_height, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;

			if (elm.data("sticky_kit")) {
				return;
			}
			elm.data("sticky_kit", true);
			last_scroll_height = doc.height();
			parent = elm.parent();
			if (parent_selector != null) {
				parent = parent.closest(parent_selector);
			}
			if (!parent.length) {
				throw "failed to find stick parent";
			}
			fixed = false;
			bottomed = false;
			spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");
			if (spacer) {
				spacer.css('position', elm.css('position'));
			}
			recalc = function () {
				var border_top, padding_top, restore;

				if (detached) {
					return;
				}
				last_scroll_height = doc.height();
				border_top = parseInt(parent.css("border-top-width"), 10);
				padding_top = parseInt(parent.css("padding-top"), 10);
				padding_bottom = parseInt(parent.css("padding-bottom"), 10);
				parent_top = parent.offset().top + border_top + padding_top;
				parent_height = parent.height();
				if (fixed) {
					fixed = false;
					bottomed = false;
					if (manual_spacer == null) {
						elm.insertAfter(spacer);
						spacer.detach();
					}
					elm.css({
						position: "",
						top: "",
						width: "",
						bottom: ""
					}).removeClass(sticky_class);
					parent.removeClass(sticky_class);
					restore = true;
				}
				top = elm.offset().top - (parseInt(elm.css("margin-top"), 10) || 0) - offset_top;
				height = elm.outerHeight(true);
				el_float = elm.css("float");
				if (spacer) {
					spacer.css({
						width: outer_width(elm),
						height: height,
						display: elm.css("display"),
						"vertical-align": elm.css("vertical-align"),
						"float": el_float
					});
				}
				if (restore) {
					return tick();
				}
			};
			recalc();
			if (height === parent_height) {
				return;
			}
			last_pos = void 0;
			offset = offset_top;
			recalc_counter = recalc_every;
			tick = function () {
				var css, delta, recalced, scroll, will_bottom, win_height;

				if (detached) {
					return;
				}
				recalced = false;
				if (recalc_counter != null) {
					recalc_counter -= 1;
					if (recalc_counter <= 0) {
						recalc_counter = recalc_every;
						recalc();
						recalced = true;
					}
				}
				if (!recalced && doc.height() !== last_scroll_height) {
					recalc();
					recalced = true;
				}
				scroll = win.scrollTop();
				if (last_pos != null) {
					delta = scroll - last_pos;
				}
				last_pos = scroll;
				if (fixed) {
					if (enable_bottoming) {
						will_bottom = scroll + height + offset > parent_height + parent_top;
						if (bottomed && !will_bottom) {
							bottomed = false;
							elm.css({
								position: "fixed",
								bottom: "",
								top: offset
							}).trigger("sticky_kit:unbottom");
						}
					}
					if (scroll < top) {
						fixed = false;
						offset = offset_top;
						if (manual_spacer == null) {
							if (el_float === "left" || el_float === "right") {
								elm.insertAfter(spacer);
							}
							spacer.detach();
						}
						css = {
							position: "",
							width: "",
							top: ""
						};
						parent.removeClass(sticky_class);
						elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
					}
					if (inner_scrolling) {
						win_height = win.height();
						if (height + offset_top > win_height) {
							if (!bottomed) {
								offset -= delta;
								offset = Math.max(win_height - height, offset);
								offset = Math.min(offset_top, offset);
								if (fixed) {
									elm.css({
										top: offset + "px"
									});
								}
							}
						}
					}
				} else {
					if (scroll > top) {
						fixed = true;
						css = {
							position: "fixed",
							top: offset
						};
						css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
						parent.addClass(sticky_class);
						elm.css(css).addClass(sticky_class);
						if (manual_spacer == null) {
							elm.after(spacer);
							if (el_float === "left" || el_float === "right") {
								spacer.append(elm);
							}
						}
						elm.trigger("sticky_kit:stick");
					}
				}
				if (fixed && enable_bottoming) {
					if (will_bottom == null) {
						will_bottom = scroll + height + offset > parent_height + parent_top;
					}
					if (!bottomed && will_bottom) {
						bottomed = true;
						if (parent.css("position") === "static") {
							parent.css({
								position: "relative"
							});
						}
						return elm.css({
							position: "absolute",
							bottom: padding_bottom,
							top: "auto"
						}).trigger("sticky_kit:bottom");
					}
				}
			};
			recalc_and_tick = function () {
				recalc();
				return tick();
			};
			detach = function () {
				detached = true;
				win.off("touchmove", tick);
				win.off("scroll", tick);
				win.off("resize", recalc_and_tick);
				$(document.body).off("sticky_kit:recalc", recalc_and_tick);
				elm.off("sticky_kit:detach", detach);
				elm.removeData("sticky_kit");
				elm.css({
					position: "",
					bottom: "",
					top: "",
					width: ""
				});
				parent.position("position", "");
				if (fixed) {
					if (manual_spacer == null) {
						if (el_float === "left" || el_float === "right") {
							elm.insertAfter(spacer);
						}
						spacer.remove();
					}
					parent.removeClass(sticky_class);
					return elm.removeClass(sticky_class);
				}
			};
			win.on("touchmove", tick);
			win.on("scroll", tick);
			win.on("resize", recalc_and_tick);
			$(document.body).on("sticky_kit:recalc", recalc_and_tick);
			elm.on("sticky_kit:detach", detach);
			return setTimeout(tick, 0);
		};
		for (_i = 0, _len = this.length; _i < _len; _i++) {
			elm = this[_i];
			_fn($(elm));
		}
		return this;
	};

}).call(this);

/*---------------------------------
 Portfolio votes
 -----------------------------------*/

jQuery(document).ready(function () {

    jQuery(".post-like a").click(function () {

        var heart = jQuery(this);

        // Retrieve post ID from data attribute
        var post_id = heart.data("post_id");

        // Ajax call
        jQuery.ajax({
            type: "post",
            url: ajax_var.url,
            data: "action=dfd_post_like&nonce=" + ajax_var.nonce + "&post_like=&post_id=" + post_id,
            success: function (count) {
                // If vote successful
                if (count != "already") {
                    heart.addClass("voted");
                    heart.find(".count").text(count);
                }
            }
        });

        return false;
    });
	
	jQuery("a.post-like, a.post-like-mini").click(function () {

        var $heart = jQuery(this);

        // Retrieve post ID from data attribute
        var post_id = $heart.data("post_id");

        // Ajax call
        jQuery.ajax({
            type: "post",
            url: ajax_var.url,
            data: "action=dfd_post_like&nonce=" + ajax_var.nonce + "&post_like=&post_id=" + post_id,
            success: function (count) {
                // If vote successful
                if (count != "already") {
                    $heart.addClass("voted");

					jQuery('.count', $heart).text(count);
                }
            }
        });

        return false;
    });
});

/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */

(function($){"use strict";function isInEffect(effect){return/In/.test(effect)||$.inArray(effect,$.fn.textillate.defaults.inEffects)>=0}function isOutEffect(effect){return/Out/.test(effect)||$.inArray(effect,$.fn.textillate.defaults.outEffects)>=0}function getData(node){var attrs=node.attributes||[],data={};if(!attrs.length)return data;$.each(attrs,function(i,attr){if(/^data-in-*/.test(attr.nodeName)){data["in"]=data["in"]||{};data["in"][attr.nodeName.replace(/data-in-/,"")]=attr.nodeValue}else if(/^data-out-*/.test(attr.nodeName)){data.out=
    data.out||{};data.out[attr.nodeName.replace(/data-out-/,"")]=attr.nodeValue}else if(/^data-*/.test(attr.nodeName))data[attr.nodeName]=attr.nodeValue});return data}function shuffle(o){for(var j,x,i=o.length;i;j=parseInt(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);return o}function animate($c,effect,cb){$c.addClass("animated "+effect).css("visibility","visible").show();$c.one("animationend webkitAnimationEnd oAnimationEnd",function(){$c.removeClass("animated "+effect);cb&&cb()})}function animateChars($chars,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            options,cb){var that=this,count=$chars.length;if(!count){cb&&cb();return}if(options.shuffle)shuffle($chars);$chars.each(function(i){var $this=$(this);function complete(){if(isInEffect(options.effect))$this.css("visibility","visible");else if(isOutEffect(options.effect))$this.css("visibility","hidden");count-=1;if(!count&&cb)cb()}var delay=options.sync?options.delay:options.delay*i*options.delayScale;$this.text()?setTimeout(function(){animate($this,options.effect,complete)},delay):complete()})}var Textillate=
    function(element,options){var base=this,$element=$(element);base.init=function(){base.$texts=$element.find(options.selector);if(!base.$texts.length){base.$texts=$('<ul class="texts"><li>'+$element.html()+"</li></ul>");$element.html(base.$texts)}base.$texts.hide();base.$current=$("<span>").text(base.$texts.find(":first-child").html()).prependTo($element);if(isInEffect(options.effect))base.$current.css("visibility","hidden");else if(isOutEffect(options.effect))base.$current.css("visibility","visible");
        base.setOptions(options);setTimeout(function(){base.options.autoStart&&base.start()},base.options.initialDelay)};base.setOptions=function(options){base.options=options};base.start=function(index){var $next=base.$texts.find(":nth-child("+(index||1)+")");(function run($elem){var options=$.extend({},base.options,getData($elem));base.$current.text($elem.html()).lettering("words");base.$current.find('[class^="word"]').css({"display":"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)",
        "-o-transform":"translate3d(0,0,0)","transform":"translate3d(0,0,0)"}).each(function(){$(this).lettering()});var $chars=base.$current.find('[class^="char"]').css("display","inline-block");if(isInEffect(options["in"].effect))$chars.css("visibility","hidden");else if(isOutEffect(options["in"].effect))$chars.css("visibility","visible");animateChars($chars,options["in"],function(){setTimeout(function(){var options=$.extend({},base.options,getData($elem));var $next=$elem.next();if(base.options.loop&&!$next.length)$next=
        base.$texts.find(":first-child");if(!$next.length)return;animateChars($chars,options.out,function(){run($next)})},base.options.minDisplayTime)})})($next)};base.init()};$.fn.textillate=function(settings,args){return this.each(function(){var $this=$(this),data=$this.data("textillate"),options=$.extend(true,{},$.fn.textillate.defaults,getData(this),typeof settings=="object"&&settings);if(!data)$this.data("textillate",data=new Textillate(this,options));else if(typeof settings=="string")data[settings].apply(data,
    [].concat(args));else data.setOptions.call(data,options)})};$.fn.textillate.defaults={selector:".texts",loop:false,minDisplayTime:2E3,initialDelay:0,"in":{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:false,shuffle:false},out:{effect:"hinge",delayScale:1.5,delay:50,sync:false,shuffle:false},autoStart:true,inEffects:[],outEffects:["hinge"]}})(jQuery);

/*!
 * Lettering.JS 0.6.1
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */

(function(b){function c(a,e,c,d){e=a.text().split(e);var f="";e.length&&(b(e).each(function(a,b){f+='<span class="'+c+(a+1)+'">'+b+"</span>"+d}),a.empty().append(f))}var d={init:function(){return this.each(function(){c(b(this),"","char","")})},words:function(){return this.each(function(){c(b(this)," ","word"," ")})},lines:function(){return this.each(function(){c(b(this).children("br").replaceWith("eefec303079ad17405c889e092e105b0").end(),"eefec303079ad17405c889e092e105b0","line","")})}};b.fn.lettering=function(a){if(a&&d[a])return d[a].apply(this,[].slice.call(arguments,1));if("letters"===a||!a)return d.init.apply(this,[].slice.call(arguments,0));b.error("Method "+a+" does not exist on jQuery.lettering");return this}})(jQuery);
/*! Fluidvids v2.2.0 | (c) 2014 @toddmotto | github.com/toddmotto/fluidvids */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b:a.fluidvids=b()}(this,function(){"use strict";var a={selector:"iframe",players:["www.youtube.com","player.vimeo.com"]},b=document.head||document.getElementsByTagName("head")[0],c=".fluidvids{width:100%;position:relative;}.fluidvids iframe{position:absolute;top:0px;left:0px;width:100%;height:100%;}",d=function(b){var c=new RegExp("^(https?:)?//(?:"+a.players.join("|")+").*$","i");return c.test(b)},e=function(a){if(!a.getAttribute("data-fluidvids")){var b=document.createElement("div"),c=parseInt(a.height?a.height:a.offsetHeight,10)/parseInt(a.width?a.width:a.offsetWidth,10)*100;a.parentNode.insertBefore(b,a),a.setAttribute("data-fluidvids","loaded"),b.className+="fluidvids",b.style.paddingTop=c+"%",b.appendChild(a)}},f=function(){var a=document.createElement("div");a.innerHTML="<p>x</p><style>"+c+"</style>",b.appendChild(a.childNodes[1])};return a.apply=function(){for(var b=document.querySelectorAll(a.selector),c=0;c<b.length;c++){var f=b[c];d(f.src)&&e(f)}},a.init=function(b){for(var c in b)a[c]=b[c];a.apply(),f()},a});
/*
 	panr - v0.0.1
 	jQuery plugin for zoom & pan elements on mousemove
	by Robert Bue (@robert_bue)

	Powered by the Greensock Tweening Platform
	http://www.greensock.com
	Greensock License info at http://www.greensock.com/licensing/
 	
 	Dual licensed under MIT and GPL.
 */

;(function ( $, window, document, undefined ) {

	// Create the defaults once
	var pluginName = "panr",
		defaults = {
			sensitivity: 30,
			scale: true,
			scaleOnHover: false,
			scaleTo: 1.1,
			scaleDuration: .25,
			panY: true,
			panX: true,
			panDuration: 1.25,
			resetPanOnMouseLeave: false,
			onEnter: function(){},
			onLeave: function(){}
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {

			var settings = this.settings,
			target = $(this.element),
			w = target.width(),
			h= target.height(),
			targetWidth = target.width() - settings.sensitivity,
			cx = (w-targetWidth)/targetWidth,
			x,
			y,
			panVars,
			xPanVars,
			yPanVars,
			mouseleaveVars;

			if ( settings.scale || (!settings.scaleOnHover && settings.scale) ) {
				TweenMax.set(target, { scale: settings.scaleTo });
			}

			// moveTarget
			if ( jQuery.type(settings.moveTarget) === "string" ) {
				settings.moveTarget = $(this.element).parent(settings.moveTarget);
			}

			// If no target provided we'll use the hovered element
			if ( !settings.moveTarget ) {
				settings.moveTarget = $(this.element);
			}

			settings.moveTarget.on('mousemove', function(e){

				x = e.pageX - target.offset().left; // mouse x coordinate relative to the container
				y = e.pageY - target.offset().top; // mouse x coordinate relative to the container

				if ( settings.panX ) {
					xPanVars = { x: -cx*x };	
				}

				if ( settings.panY ) {
					yPanVars = { y: -cx*y };
				}

				panVars = $.extend({}, xPanVars, yPanVars);

				// Pan element
				TweenMax.to(target, settings.panDuration, panVars);
			});

			// On mouseover
			settings.moveTarget.on('mouseenter', function(e){
				
				if ( settings.scaleOnHover ) {
					// Scale up element
					TweenMax.to(target, settings.scaleDuration, { scale: settings.scaleTo });
				}

				settings.onEnter(target);
			});

			if ( !settings.scale || (!settings.scaleOnHover && !settings.scale) ) {

				mouseleaveVars = { scale: 1, x: 0, y: 0 };

			} else {
				if ( settings.resetPanOnMouseLeave ) {
					mouseleaveVars = { x: 0, y: 0 };
				}
			}

			settings.moveTarget.on('mouseleave', function(e){
				// Reset element
				TweenMax.to(target, settings.scaleDuration, mouseleaveVars );

				settings.onLeave(target);
			});
		}
	};

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );
(function($) {
	var initPanr = function() {
		$('.project.panr, .dfd-gallery-single-item.panr, .dfd-single-image-module.panr, .dfd-info-banner.panr, .dfd-woo-single-category.panr').each(function() {
			var $work = $(this);
			var $img = $('img', $work);
			$img.panr({
				moveTarget: $work,
				sensitivity: 18,
				scale: false,
				scaleOnHover: true,
				scaleTo: 1.08,
				scaleDuration: .2,
				//panY: true,
				//panX: true,
				panDuration: 3,
				resetPanOnMouseLeave: false,
			});
		});
	};
	$(window).load(function() {
		initPanr();
		$('.dfd-blog, .dfd-portfolio, .dfd-gallery').observeDOM(function() {
			initPanr();
		});
	});
})(jQuery);
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.17.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===n)&&v!==t&&(i=!0,v>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=g+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(l=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&l>=.5)&&(l=1-l),3===_&&(l*=2),1===u?l*=l:2===u?l*=l*l:3===u?l*=l*l*l:4===u&&(l*=l*l*l*l),this.ratio=1===_?1-l:2===_?l:.5>this._time/g?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,c){a=a||0;var f,p,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(c||n.callbackScope||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){p={};for(d in n)p[d]=n[d];p.delay=g,m===f&&l&&(p.onComplete=y),v[m]=new r(t[m],e,p),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},c=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=c(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,c,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(c=n.length,u=0;c>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,c=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=c,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&c.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&c.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&c.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),c.to(t[u],e,f(r),u*n);return this.add(c,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,h=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.17.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,h,l,_,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,m=this._totalTime,d=this._startTime,g=this._timeScale,v=this._rawPrevTime,y=this._paused,T=this._cycle;if(t>=c)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>v||v===r)&&v!==t&&this._first&&(_=!0,v>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&v!==r&&(v>0||0>t&&v>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,l="onReverseComplete"):v>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else 0===f&&0>v&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=f+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),w=x===(this._yoyo&&0!==(1&this._cycle)),b=this._totalTime,P=this._cycle,k=this._rawPrevTime,S=this._time;if(this._totalTime=T*f,T>this._cycle?x=!x:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?v-1e-4:v,this._cycle=T,this._locked=!0,p=x?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),w&&(p=x?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!y)return;this._time=S,this._totalTime=b,this._cycle=P,this._rawPrevTime=k}if(!(this._time!==p&&this._first||i||_))return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=p)for(s=this._first;s&&(h=s._next,!this._paused||y);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,!this._paused||y);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),l&&(this._locked||this._gc||(d===this._startTime||g!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,c=(l+_)/2,f=(c-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(l=0;w>l;l++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[l],T=i[l],x=.25*(T+y)*r/(a?.5:s[l]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,c,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],l(m,n,a,h,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],m[c]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,_=1;i>=_;_++)l=p*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]
}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?p[n](h):p[n]=h;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](h):p[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,c[l],a,o,h,f!==l),p[l]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},N=document,E=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},L=E("div"),X=E("img"),B=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=E("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||Pe===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return j||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(_e)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(l)+h}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,c={},f={},p=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],c[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:c,end:f,firstMPT:l,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,s,r,n){var a=new pe(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},de=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new pe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=h,a.setRatio=l,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&("#"===p.charAt(0)||oe[p]||P.test(p)))k=","===m.charAt(m.length-1)?"),":")",p=le(p),m=le(m),x=p.length+m.length>6,x&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(x=!1),a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":k,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,k,!1)));else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(l=pe.prototype,l.l=l.pr=0;--ge>0;)l["xn"+ge]=0,l["xs"+ge]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ve(n[s],e)},Te=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ve.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):c&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=h.join(", ")}return de(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=c||f;var xe,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=W("transform"),Pe=V+"transform",ke=W("transformOrigin"),Se=null!==W("perspective"),Re=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Oe=window.SVGElement,Ae=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=N.documentElement,De=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return N.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[ke]="50% 50%",e.style[be]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Ce.removeChild(t)),s}(),Me=function(t,e,i,s,r){var n,o,h,l,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Fe(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=l=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=l*(p/g)+_*(-f/g)+(f*d-p*m)/g,h=l*(-c/g)+_*(u/g)-(u*d-c*m)/g,l=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=h),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=l-v,h=_-y,T.xOffset+=o*x[0]+h*x[2]-o,T.yOffset+=o*x[1]+h*x[3]-h):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},ze=function(t){return!!(Oe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Fe=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Re,h=1e5;if(be?s=Q(t,Pe,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&ze(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(s=t.style[be],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=r.length;--ge>-1;)n=Number(r[ge]),r[ge]=(a=n-(n|=0))?(0|a*h+(0>a?-.5:.5))/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,h,l,_,u,c,f=s?t._gsTransform||new Re:new Re,p=0>f.scaleX,m=2e-5,d=1e5,g=Se?parseFloat(Q(t,ke,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!ze(t)),f.svg&&(Me(t,Q(t,ke,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),xe=a.useSVGTransformAttr||De),o=Fe(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],F=o[10],N=o[12],E=o[13],L=o[14],X=o[11],B=Math.atan2(C,F);f.zOrigin&&(L=-f.zOrigin,N=M*L-o[12],E=z*L-o[13],L=F*L+f.zOrigin-o[14]),f.rotationX=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+F*b,M=O*-b+M*w,z=A*-b+z*w,F=C*-b+F*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,F),f.rotationY=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-F*b,z=k*b+z*w,F=S*b+F*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+F*F)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=N,f.y=E,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Se&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,j=Y?o[0]:1,U=o[1]||0,q=o[2]||0,V=Y?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,l=Math.sqrt(j*j+U*U),_=Math.sqrt(V*V+q*q),u=j||U?Math.atan2(U,j)*I:f.rotation||0,c=q||V?Math.atan2(q,V)*I+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=_,f.rotation=u,f.skewX=c,Se&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*j+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(h in f)m>f[h]&&f[h]>-m&&(f[h]=0)}return s&&(t._gsTransform=f,f.svg&&(xe&&t.style[be]?e.delayedCall(.001,function(){Be(t.style,be)}):!xe&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Ee=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=h,h=-l,l=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*h),b+=p-(f*l+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*h)+w)+", Dy="+(p-(f*l+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ge=0;4>ge;ge++)k=ee[ge],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ge?-s.ieOffsetX:-s.ieOffsetY:2>ge?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ge||2===ge?1:R)))+"px"}}},Le=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,I=k.x,F=k.y,N=k.z,E=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||N||L||A||O)&&(!xe||!E)&&Se))return R||k.skewX||E?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,xe&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),I+=.01*k.xPercent*m.width,F+=.01*k.yPercent*m.height),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",E&&xe?this.t.setAttribute("transform","matrix("+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||E))return S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+N+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,l=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,c*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||E)&&(p&&(I+=s*-p,F+=a*-p,N+=l*-p+p),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>I&&I>-m&&(I=w),m>F&&F>-m&&(F=w),m>N&&N>-m&&(N=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>h&&h>-m?w:h)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>l&&l>-m?w:l)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=I+x+F+x+N+x+(L?1+-N/L:1)+")",S[be]=T};l=Re.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=l.xOffset=l.yOffset=0,l.scaleX=l.scaleY=l.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,c,f,p,m,d,g,v=t._gsTransform,y=s._transform=Ne(t,r,!0,h.parseTransform),T=t.style,x=1e-6,w=we.length,b=h,P={},k="transformOrigin";if("string"==typeof b.transform&&be)u=L.style,u[be]=b.transform,u.display="block",u.position="absolute",N.body.appendChild(L),l=Ne(L,null,!1),N.body.removeChild(L),null!=b.xPercent&&(l.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(l.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(l={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(u in m)b[u]=m[u];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(l.x=0,l.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(l.y=0,l.yPercent=ne(b.y,y.yPercent)),l.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Se&&(l.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),l.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),l.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),l.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(_=l.skewY-y.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=b.force3D&&(y.force3D=b.force3D,p=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,f=y.force3D||y.z||y.rotationX||y.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==b.scale||(l.scaleZ=1);--w>-1;)i=we[w],c=l[i]-y[i],(c>x||-x>c||null!=b[i]||null!=F[i])&&(p=!0,n=new pe(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(d=y.xOffset,g=y.yOffset,Me(t,se(c),l,b.svgOrigin,b.smoothOrigin),n=me(y,"xOrigin",(v?y:l).xOrigin,l.xOrigin,n,k),n=me(y,"yOrigin",(v?y:l).yOrigin,l.yOrigin,n,k),(d!==y.xOffset||g!==y.yOffset)&&(n=me(y,"xOffset",v?d:y.xOffset,y.xOffset,n,k),n=me(y,"yOffset",v?g:y.yOffset,y.yOffset,n,k)),c=xe?null:"0px 0px"),(c||Se&&f&&y.zOrigin)&&(be?(p=!0,i=ke,c=(c||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Se?(u=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===u||"0px"!==c[2])?parseFloat(c[2]):u)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new pe(y,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):se(c+"",y)),p&&(s._transformType=y.svg&&xe||!f&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,l=parseFloat(_)+p+g)),a=de(P,b[h],u+" "+_,c+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",c),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ye("backgroundSize",{defaultValue:"0 0",formatter:se}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Xe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Xe),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n
}});var Be=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Be(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,c),t.setAttribute("class",p),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?ke:h[i].p),Be(a,i);r&&(Be(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ge=l.length;ge--;)Te(l[ge]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,be?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new pe(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=be?Le:Ee,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=de(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(c),p=l||0===l?c.substr((l+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(l=ie(t,a,r),p="px"):"left"===a||"top"===a?(l=H(t,a,r),p="px"):(l="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+l:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,p),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||l||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=de(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},l._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&xe||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var qe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)qe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||qe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=h._targets||h.target,qe(t,_,c),h.render(i,!0,!0),qe(t,u),h.render(0,!0,!0),h._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(c[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,s){var r,n,a,o,h;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(r in s)this._start[r]=this._proxy[r]=n=i.getAttribute(r)+"",this._end[r]=a=s[r]+"",this._suffix[r]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(h=a.indexOf(o),-1!==h&&(a=a.substr(0,h))),this._addTween(this._proxy,r,parseFloat(n),a,r)||(this._suffix[r]=""),"="===a.charAt(1)&&(this._end[r]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(r);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start,n=r===this._proxy;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+(n?this._suffix[e]:""))}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,c,f,d=r.length,g=d;--d>-1;)(_=p[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=h(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},l.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){o||a.wake();var i=this.vars.useFrames?j:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new l.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.17.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},N=D._internals={isArray:f,isSelector:M,lazyTweens:I},E=D._plugins={},L=N.tweenLookup={},X=0,B=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=O._rootFramesTimeline=new C,U=O._rootTimeline=new C,q=30,V=N.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};U._startTime=a.time,j._startTime=a.frame,U._active=j._active=!0,setTimeout(V,1),O._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),U.render((a.time-U._startTime)*U._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=U._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,p),0===Q(o,l,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)B[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):x[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],B[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)
},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,h=!0),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(E[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
	// universal module definition
	/*jshint strict: false */ /* globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('jquery-bridget/jquery-bridget', ['jquery'], function (jQuery) {
			return factory(window, jQuery);
		});
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			window,
			require('jquery')
			);
	} else {
		// browser global
		window.jQueryBridget = factory(
			window,
			window.jQuery
			);
	}

}(window, function factory(window, jQuery) {
	'use strict';

// ----- utils ----- //

	var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
	var console = window.console;
	var logError = typeof console == 'undefined' ? function () {} :
		function (message) {
			console.error(message);
		};

// ----- jQueryBridget ----- //

	function jQueryBridget(namespace, PluginClass, $) {
		$ = $ || jQuery || window.jQuery;
		if (!$) {
			return;
		}

		// add option method -> $().plugin('option', {...})
		if (!PluginClass.prototype.option) {
			// option setter
			PluginClass.prototype.option = function (opts) {
				// bail out if not an object
				if (!$.isPlainObject(opts)) {
					return;
				}
				this.options = $.extend(true, this.options, opts);
			};
		}

		// make jQuery plugin
		$.fn[ namespace ] = function (arg0 /*, arg1 */) {
			if (typeof arg0 == 'string') {
				// method call $().plugin( 'methodName', { options } )
				// shift arguments by 1
				var args = arraySlice.call(arguments, 1);
				return methodCall(this, arg0, args);
			}
			// just $().plugin({ options })
			plainCall(this, arg0);
			return this;
		};

		// $().plugin('methodName')
		function methodCall($elems, methodName, args) {
			var returnValue;
			var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

			$elems.each(function (i, elem) {
				// get instance
				var instance = $.data(elem, namespace);
				if (!instance) {
					logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
						pluginMethodStr);
					return;
				}

				var method = instance[ methodName ];
				if (!method || methodName.charAt(0) == '_') {
					logError(pluginMethodStr + ' is not a valid method');
					return;
				}

				// apply method, get return value
				var value = method.apply(instance, args);
				// set return value if value is returned, use only first value
				returnValue = returnValue === undefined ? value : returnValue;
			});

			return returnValue !== undefined ? returnValue : $elems;
		}

		function plainCall($elems, options) {
			$elems.each(function (i, elem) {
				var instance = $.data(elem, namespace);
				if (instance) {
					// set options & init
					instance.option(options);
					instance._init();
				} else {
					// initialize new instance
					instance = new PluginClass(elem, options);
					$.data(elem, namespace, instance);
				}
			});
		}

		updateJQuery($);

	}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
	function updateJQuery($) {
		if (!$ || ($ && $.bridget)) {
			return;
		}
		$.bridget = jQueryBridget;
	}

	updateJQuery(jQuery || window.jQuery);

// -----  ----- //

	return jQueryBridget;

}));

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
	// universal module definition
	/* jshint strict: false */ /* globals define, module, window */
	if (typeof define == 'function' && define.amd) {
		// AMD - RequireJS
		define('ev-emitter/ev-emitter', factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS - Browserify, Webpack
		module.exports = factory();
	} else {
		// Browser globals
		global.EvEmitter = factory();
	}

}(typeof window != 'undefined' ? window : this, function () {



	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function (eventName, listener) {
		if (!eventName || !listener) {
			return;
		}
		// set events hash
		var events = this._events = this._events || {};
		// set listeners array
		var listeners = events[ eventName ] = events[ eventName ] || [];
		// only add once
		if (listeners.indexOf(listener) == -1) {
			listeners.push(listener);
		}

		return this;
	};

	proto.once = function (eventName, listener) {
		if (!eventName || !listener) {
			return;
		}
		// add event
		this.on(eventName, listener);
		// set once flag
		// set onceEvents hash
		var onceEvents = this._onceEvents = this._onceEvents || {};
		// set onceListeners object
		var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
		// set flag
		onceListeners[ listener ] = true;

		return this;
	};

	proto.off = function (eventName, listener) {
		var listeners = this._events && this._events[ eventName ];
		if (!listeners || !listeners.length) {
			return;
		}
		var index = listeners.indexOf(listener);
		if (index != -1) {
			listeners.splice(index, 1);
		}

		return this;
	};

	proto.emitEvent = function (eventName, args) {
		var listeners = this._events && this._events[ eventName ];
		if (!listeners || !listeners.length) {
			return;
		}
		var i = 0;
		var listener = listeners[i];
		args = args || [];
		// once stuff
		var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

		while (listener) {
			var isOnce = onceListeners && onceListeners[ listener ];
			if (isOnce) {
				// remove listener
				// remove before trigger to prevent recursion
				this.off(eventName, listener);
				// unset once flag
				delete onceListeners[ listener ];
			}
			// trigger listener
			listener.apply(this, args);
			// get next listener
			i += isOnce ? 0 : 1;
			listener = listeners[i];
		}

		return this;
	};

	return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

(function (window, factory) {
	'use strict';

	if (typeof define == 'function' && define.amd) {
		// AMD
		define('get-size/get-size', [], function () {
			return factory();
		});
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		window.getSize = factory();
	}

})(window, function factory() {
	'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
	function getStyleSize(value) {
		var num = parseFloat(value);
		// not a percent like '100%', and a number
		var isValid = value.indexOf('%') == -1 && !isNaN(num);
		return isValid && num;
	}

	function noop() {}

	var logError = typeof console == 'undefined' ? noop :
		function (message) {
			console.error(message);
		};

// -------------------------- measurements -------------------------- //

	var measurements = [
		'paddingLeft',
		'paddingRight',
		'paddingTop',
		'paddingBottom',
		'marginLeft',
		'marginRight',
		'marginTop',
		'marginBottom',
		'borderLeftWidth',
		'borderRightWidth',
		'borderTopWidth',
		'borderBottomWidth'
	];

	var measurementsLength = measurements.length;

	function getZeroSize() {
		var size = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		};
		for (var i = 0; i < measurementsLength; i++) {
			var measurement = measurements[i];
			size[ measurement ] = 0;
		}
		return size;
	}

// -------------------------- getStyle -------------------------- //

	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle(elem) {
		var style = getComputedStyle(elem);
		if (!style) {
			logError('Style returned ' + style +
				'. Are you running this code in a hidden iframe on Firefox? ' +
				'See http://bit.ly/getsizebug1');
		}
		return style;
	}

// -------------------------- setup -------------------------- //

	var isSetup = false;

	var isBoxSizeOuter;

	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
		// setup once
		if (isSetup) {
			return;
		}
		isSetup = true;

		// -------------------------- box sizing -------------------------- //

		/**
		 * WebKit measures the outer-width on style.width on border-box elems
		 * IE & Firefox<29 measures the inner-width
		 */
		var div = document.createElement('div');
		div.style.width = '200px';
		div.style.padding = '1px 2px 3px 4px';
		div.style.borderStyle = 'solid';
		div.style.borderWidth = '1px 2px 3px 4px';
		div.style.boxSizing = 'border-box';

		var body = document.body || document.documentElement;
		body.appendChild(div);
		var style = getStyle(div);

		getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
		body.removeChild(div);

	}

// -------------------------- getSize -------------------------- //

	function getSize(elem) {
		setup();

		// use querySeletor if elem is string
		if (typeof elem == 'string') {
			elem = document.querySelector(elem);
		}

		// do not proceed on non-objects
		if (!elem || typeof elem != 'object' || !elem.nodeType) {
			return;
		}

		var style = getStyle(elem);

		// if hidden, everything is 0
		if (style.display == 'none') {
			return getZeroSize();
		}

		var size = {};
		size.width = elem.offsetWidth;
		size.height = elem.offsetHeight;

		var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

		// get all measurements
		for (var i = 0; i < measurementsLength; i++) {
			var measurement = measurements[i];
			var value = style[ measurement ];
			var num = parseFloat(value);
			// any 'auto', 'medium' value will be 0
			size[ measurement ] = !isNaN(num) ? num : 0;
		}

		var paddingWidth = size.paddingLeft + size.paddingRight;
		var paddingHeight = size.paddingTop + size.paddingBottom;
		var marginWidth = size.marginLeft + size.marginRight;
		var marginHeight = size.marginTop + size.marginBottom;
		var borderWidth = size.borderLeftWidth + size.borderRightWidth;
		var borderHeight = size.borderTopWidth + size.borderBottomWidth;

		var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

		// overwrite width and height if we can get it from style
		var styleWidth = getStyleSize(style.width);
		if (styleWidth !== false) {
			size.width = styleWidth +
			// add padding and border unless it's already including it
				(isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
		}

		var styleHeight = getStyleSize(style.height);
		if (styleHeight !== false) {
			size.height = styleHeight +
			// add padding and border unless it's already including it
				(isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
		}

		size.innerWidth = size.width - (paddingWidth + borderWidth);
		size.innerHeight = size.height - (paddingHeight + borderHeight);

		size.outerWidth = size.width + marginWidth;
		size.outerHeight = size.height + marginHeight;

		return size;
	}

	return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
	/*global define: false, module: false */
	'use strict';
	// universal module definition
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('desandro-matches-selector/matches-selector', factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		window.matchesSelector = factory();
	}

}(window, function factory() {
	'use strict';

	var matchesMethod = (function () {
		var ElemProto = window.Element.prototype;
		// check for the standard method name first
		if (ElemProto.matches) {
			return 'matches';
		}
		// check un-prefixed
		if (ElemProto.matchesSelector) {
			return 'matchesSelector';
		}
		// check vendor prefixes
		var prefixes = ['webkit', 'moz', 'ms', 'o'];

		for (var i = 0; i < prefixes.length; i++) {
			var prefix = prefixes[i];
			var method = prefix + 'MatchesSelector';
			if (ElemProto[ method ]) {
				return method;
			}
		}
	})();

	return function matchesSelector(elem, selector) {
		return elem[ matchesMethod ](selector);
	};

}));

/**
 * Fizzy UI utils v2.0.5
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
	// universal module definition
	/*jshint strict: false */ /*globals define, module, require */

	if (typeof define == 'function' && define.amd) {
		// AMD
		define('fizzy-ui-utils/utils', [
			'desandro-matches-selector/matches-selector'
		], function (matchesSelector) {
			return factory(window, matchesSelector);
		});
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			window,
			require('desandro-matches-selector')
			);
	} else {
		// browser global
		window.fizzyUIUtils = factory(
			window,
			window.matchesSelector
			);
	}

}(window, function factory(window, matchesSelector) {



	var utils = {};

// ----- extend ----- //

// extends objects
	utils.extend = function (a, b) {
		for (var prop in b) {
			a[ prop ] = b[ prop ];
		}
		return a;
	};

// ----- modulo ----- //

	utils.modulo = function (num, div) {
		return ((num % div) + div) % div;
	};

// ----- makeArray ----- //

// turn element or nodeList into an array
	utils.makeArray = function (obj) {
		var ary = [];
		if (Array.isArray(obj)) {
			// use object if already an array
			ary = obj;
		} else if (obj && typeof obj == 'object' &&
			typeof obj.length == 'number') {
			// convert nodeList to array
			for (var i = 0; i < obj.length; i++) {
				ary.push(obj[i]);
			}
		} else {
			// array of single index
			ary.push(obj);
		}
		return ary;
	};

// ----- removeFrom ----- //

	utils.removeFrom = function (ary, obj) {
		var index = ary.indexOf(obj);
		if (index != -1) {
			ary.splice(index, 1);
		}
	};

// ----- getParent ----- //

	utils.getParent = function (elem, selector) {
		while (elem.parentNode && elem != document.body) {
			elem = elem.parentNode;
			if (matchesSelector(elem, selector)) {
				return elem;
			}
		}
	};

// ----- getQueryElement ----- //

// use element as selector string
	utils.getQueryElement = function (elem) {
		if (typeof elem == 'string') {
			return document.querySelector(elem);
		}
		return elem;
	};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function (event) {
		var method = 'on' + event.type;
		if (this[ method ]) {
			this[ method ](event);
		}
	};

// ----- filterFindElements ----- //

	utils.filterFindElements = function (elems, selector) {
		// make array of elems
		elems = utils.makeArray(elems);
		var ffElems = [];

		elems.forEach(function (elem) {
			// check that elem is an actual element
			if (!(elem instanceof HTMLElement)) {
				return;
			}
			// add elem if no selector
			if (!selector) {
				ffElems.push(elem);
				return;
			}
			// filter & find items if we have a selector
			// filter
			if (matchesSelector(elem, selector)) {
				ffElems.push(elem);
			}
			// find children
			var childElems = elem.querySelectorAll(selector);
			// concat childElems to filterFound array
			for (var i = 0; i < childElems.length; i++) {
				ffElems.push(childElems[i]);
			}
		});

		return ffElems;
	};

// ----- debounceMethod ----- //

	utils.debounceMethod = function (_class, methodName, threshold) {
		// original method
		var method = _class.prototype[ methodName ];
		var timeoutName = methodName + 'Timeout';

		_class.prototype[ methodName ] = function () {
			var timeout = this[ timeoutName ];
			if (timeout) {
				clearTimeout(timeout);
			}
			var args = arguments;

			var _this = this;
			this[ timeoutName ] = setTimeout(function () {
				method.apply(_this, args);
				delete _this[ timeoutName ];
			}, threshold || 100);
		};
	};

// ----- docReady ----- //

	utils.docReady = function (callback) {
		var readyState = document.readyState;
		if (readyState == 'complete' || readyState == 'interactive') {
			// do async to allow for other scripts to run. metafizzy/flickity#441
			setTimeout(callback);
		} else {
			document.addEventListener('DOMContentLoaded', callback);
		}
	};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function (str) {
		return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
			return $1 + '-' + $2;
		}).toLowerCase();
	};

	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function (WidgetClass, namespace) {
		utils.docReady(function () {
			var dashedNamespace = utils.toDashed(namespace);
			var dataAttr = 'data-' + dashedNamespace;
			var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
			var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
			var elems = utils.makeArray(dataAttrElems)
				.concat(utils.makeArray(jsDashElems));
			var dataOptionsAttr = dataAttr + '-options';
			var jQuery = window.jQuery;

			elems.forEach(function (elem) {
				var attr = elem.getAttribute(dataAttr) ||
					elem.getAttribute(dataOptionsAttr);
				var options;
				try {
					options = attr && JSON.parse(attr);
				} catch (error) {
					// log error, do not initialize
					if (console) {
						console.error('Error parsing ' + dataAttr + ' on ' + elem.className +
							': ' + error);
					}
					return;
				}
				// initialize
				var instance = new WidgetClass(elem, options);
				// make available via $().data('namespace')
				if (jQuery) {
					jQuery.data(elem, namespace, instance);
				}
			});

		});
	};

// -----  ----- //

	return utils;

}));

/**
 * Outlayer Item
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /* globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD - RequireJS
		define('outlayer/item', [
			'ev-emitter/ev-emitter',
			'get-size/get-size'
		],
			factory
			);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS - Browserify, Webpack
		module.exports = factory(
			require('ev-emitter'),
			require('get-size')
			);
	} else {
		// browser global
		window.Outlayer = {};
		window.Outlayer.Item = factory(
			window.EvEmitter,
			window.getSize
			);
	}

}(window, function factory(EvEmitter, getSize) {
	'use strict';

// ----- helpers ----- //

	function isEmptyObj(obj) {
		for (var prop in obj) {
			return false;
		}
		prop = null;
		return true;
	}

// -------------------------- CSS3 support -------------------------- //


	var docElemStyle = document.documentElement.style;

	var transitionProperty = typeof docElemStyle.transition == 'string' ?
		'transition' : 'WebkitTransition';
	var transformProperty = typeof docElemStyle.transform == 'string' ?
		'transform' : 'WebkitTransform';

	var transitionEndEvent = {
		WebkitTransition: 'webkitTransitionEnd',
		transition: 'transitionend'
	}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
	var vendorProperties = {
		transform: transformProperty,
		transition: transitionProperty,
		transitionDuration: transitionProperty + 'Duration',
		transitionProperty: transitionProperty + 'Property',
		transitionDelay: transitionProperty + 'Delay'
	};

// -------------------------- Item -------------------------- //

	function Item(element, layout) {
		if (!element) {
			return;
		}

		this.element = element;
		// parent layout class, i.e. Masonry, Isotope, or Packery
		this.layout = layout;
		this.position = {
			x: 0,
			y: 0
		};

		this._create();
	}

// inherit EvEmitter
	var proto = Item.prototype = Object.create(EvEmitter.prototype);
	proto.constructor = Item;

	proto._create = function () {
		// transition objects
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		};

		this.css({
			position: 'absolute'
		});
	};

// trigger specified handler for event type
	proto.handleEvent = function (event) {
		var method = 'on' + event.type;
		if (this[ method ]) {
			this[ method ](event);
		}
	};

	proto.getSize = function () {
		this.size = getSize(this.element);
	};

	/**
	 * apply CSS styles to element
	 * @param {Object} style
	 */
	proto.css = function (style) {
		var elemStyle = this.element.style;

		for (var prop in style) {
			// use vendor property if available
			var supportedProp = vendorProperties[ prop ] || prop;
			elemStyle[ supportedProp ] = style[ prop ];
		}
	};

	// measure position, and sets it
	proto.getPosition = function () {
		var style = getComputedStyle(this.element);
		var isOriginLeft = this.layout._getOption('originLeft');
		var isOriginTop = this.layout._getOption('originTop');
		var xValue = style[ isOriginLeft ? 'left' : 'right' ];
		var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
		// convert percent to pixels
		var layoutSize = this.layout.size;
		var x = xValue.indexOf('%') != -1 ?
			(parseFloat(xValue) / 100) * layoutSize.width : parseInt(xValue, 10);
		var y = yValue.indexOf('%') != -1 ?
			(parseFloat(yValue) / 100) * layoutSize.height : parseInt(yValue, 10);

		// clean up 'auto' or other non-integer values
		x = isNaN(x) ? 0 : x;
		y = isNaN(y) ? 0 : y;
		// remove padding from measurement
		x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
		y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

		this.position.x = x;
		this.position.y = y;
	};

// set settled position, apply padding
	proto.layoutPosition = function () {
		var layoutSize = this.layout.size;
		var style = {};
		var isOriginLeft = this.layout._getOption('originLeft');
		var isOriginTop = this.layout._getOption('originTop');

		// x
		var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
		var xProperty = isOriginLeft ? 'left' : 'right';
		var xResetProperty = isOriginLeft ? 'right' : 'left';

		var x = this.position.x + layoutSize[ xPadding ];
		// set in percentage or pixels
		style[ xProperty ] = this.getXValue(x);
		// reset other property
		style[ xResetProperty ] = '';

		// y
		var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
		var yProperty = isOriginTop ? 'top' : 'bottom';
		var yResetProperty = isOriginTop ? 'bottom' : 'top';

		var y = this.position.y + layoutSize[ yPadding ];
		// set in percentage or pixels
		style[ yProperty ] = this.getYValue(y);
		// reset other property
		style[ yResetProperty ] = '';

		this.css(style);
		this.emitEvent('layout', [this]);
	};

	proto.getXValue = function (x) {
		var isHorizontal = this.layout._getOption('horizontal');
		return this.layout.options.percentPosition && !isHorizontal ?
			((x / this.layout.size.width) * 100) + '%' : x + 'px';
	};

	proto.getYValue = function (y) {
		var isHorizontal = this.layout._getOption('horizontal');
		return this.layout.options.percentPosition && isHorizontal ?
			((y / this.layout.size.height) * 100) + '%' : y + 'px';
	};

	proto._transitionTo = function (x, y) {
		this.getPosition();
		// get current x & y from top/left
		var curX = this.position.x;
		var curY = this.position.y;

		var compareX = parseInt(x, 10);
		var compareY = parseInt(y, 10);
		var didNotMove = compareX === this.position.x && compareY === this.position.y;

		// save end position
		this.setPosition(x, y);

		// if did not move and not transitioning, just go to layout
		if (didNotMove && !this.isTransitioning) {
			this.layoutPosition();
			return;
		}

		var transX = x - curX;
		var transY = y - curY;
		var transitionStyle = {};
		transitionStyle.transform = this.getTranslate(transX, transY);

		this.transition({
			to: transitionStyle,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: true
		});
	};

	proto.getTranslate = function (x, y) {
		// flip cooridinates if origin on right or bottom
		var isOriginLeft = this.layout._getOption('originLeft');
		var isOriginTop = this.layout._getOption('originTop');
		x = isOriginLeft ? x : -x;
		y = isOriginTop ? y : -y;
		return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	};

// non transition + transform support
	proto.goTo = function (x, y) {
		this.setPosition(x, y);
		this.layoutPosition();
	};

	proto.moveTo = proto._transitionTo;

	proto.setPosition = function (x, y) {
		this.position.x = parseInt(x, 10);
		this.position.y = parseInt(y, 10);
	};

// ----- transition ----- //

	/**
	 * @param {Object} style - CSS
	 * @param {Function} onTransitionEnd
	 */

// non transition, just trigger callback
	proto._nonTransition = function (args) {
		this.css(args.to);
		if (args.isCleaning) {
			this._removeStyles(args.to);
		}
		for (var prop in args.onTransitionEnd) {
			args.onTransitionEnd[ prop ].call(this);
		}
	};

	/**
	 * proper transition
	 * @param {Object} args - arguments
	 *   @param {Object} to - style to transition to
	 *   @param {Object} from - style to start transition from
	 *   @param {Boolean} isCleaning - removes transition styles after transition
	 *   @param {Function} onTransitionEnd - callback
	 */
	proto.transition = function (args) {
		// redirect to nonTransition if no transition duration
		if (!parseFloat(this.layout.options.transitionDuration)) {
			this._nonTransition(args);
			return;
		}

		var _transition = this._transn;
		// keep track of onTransitionEnd callback by css property
		for (var prop in args.onTransitionEnd) {
			_transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
		}
		// keep track of properties that are transitioning
		for (prop in args.to) {
			_transition.ingProperties[ prop ] = true;
			// keep track of properties to clean up when transition is done
			if (args.isCleaning) {
				_transition.clean[ prop ] = true;
			}
		}

		// set from styles
		if (args.from) {
			this.css(args.from);
			// force redraw. http://blog.alexmaccaw.com/css-transitions
			var h = this.element.offsetHeight;
			// hack for JSHint to hush about unused var
			h = null;
		}
		// enable transition
		this.enableTransition(args.to);
		// set styles that are transitioning
		this.css(args.to);

		this.isTransitioning = true;

	};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
	function toDashedAll(str) {
		return str.replace(/([A-Z])/g, function ($1) {
			return '-' + $1.toLowerCase();
		});
	}

	var transitionProps = 'opacity,' + toDashedAll(transformProperty);

	proto.enableTransition = function (/* style */) {
		// HACK changing transitionProperty during a transition
		// will cause transition to jump
		if (this.isTransitioning) {
			return;
		}

		// make `transition: foo, bar, baz` from style object
		// HACK un-comment this when enableTransition can work
		// while a transition is happening
		// var transitionValues = [];
		// for ( var prop in style ) {
		//   // dash-ify camelCased properties like WebkitTransition
		//   prop = vendorProperties[ prop ] || prop;
		//   transitionValues.push( toDashedAll( prop ) );
		// }
		// munge number to millisecond, to match stagger
		var duration = this.layout.options.transitionDuration;
		duration = typeof duration == 'number' ? duration + 'ms' : duration;
		// enable transition styles
		this.css({
			transitionProperty: transitionProps,
			transitionDuration: duration,
			transitionDelay: this.staggerDelay || 0
		});
		// listen for transition end event
		this.element.addEventListener(transitionEndEvent, this, false);
	};

// ----- events ----- //

	proto.onwebkitTransitionEnd = function (event) {
		this.ontransitionend(event);
	};

	proto.onotransitionend = function (event) {
		this.ontransitionend(event);
	};

// properties that I munge to make my life easier
	var dashedVendorProperties = {
		'-webkit-transform': 'transform'
	};

	proto.ontransitionend = function (event) {
		// disregard bubbled events from children
		if (event.target !== this.element) {
			return;
		}
		var _transition = this._transn;
		// get property name of transitioned property, convert to prefix-free
		var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

		// remove property that has completed transitioning
		delete _transition.ingProperties[ propertyName ];
		// check if any properties are still transitioning
		if (isEmptyObj(_transition.ingProperties)) {
			// all properties have completed transitioning
			this.disableTransition();
		}
		// clean style
		if (propertyName in _transition.clean) {
			// clean up style
			this.element.style[ event.propertyName ] = '';
			delete _transition.clean[ propertyName ];
		}
		// trigger onTransitionEnd callback
		if (propertyName in _transition.onEnd) {
			var onTransitionEnd = _transition.onEnd[ propertyName ];
			onTransitionEnd.call(this);
			delete _transition.onEnd[ propertyName ];
		}

		this.emitEvent('transitionEnd', [this]);
	};

	proto.disableTransition = function () {
		this.removeTransitionStyles();
		this.element.removeEventListener(transitionEndEvent, this, false);
		this.isTransitioning = false;
	};

	/**
	 * removes style property from element
	 * @param {Object} style
	 **/
	proto._removeStyles = function (style) {
		// clean up transition styles
		var cleanStyle = {};
		for (var prop in style) {
			cleanStyle[ prop ] = '';
		}
		this.css(cleanStyle);
	};

	var cleanTransitionStyle = {
		transitionProperty: '',
		transitionDuration: '',
		transitionDelay: ''
	};

	proto.removeTransitionStyles = function () {
		// remove transition
		this.css(cleanTransitionStyle);
	};

// ----- stagger ----- //

	proto.stagger = function (delay) {
		delay = isNaN(delay) ? 0 : delay;
		this.staggerDelay = delay + 'ms';
	};

// ----- show/hide/remove ----- //

// remove element from DOM
	proto.removeElem = function () {
		this.element.parentNode.removeChild(this.element);
		// remove display: none
		this.css({display: ''});
		this.emitEvent('remove', [this]);
	};

	proto.remove = function () {
		// just remove element if no transition support or no transition
		if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
			this.removeElem();
			return;
		}

		// start transition
		this.once('transitionEnd', function () {
			this.removeElem();
		});
		this.hide();
	};

	proto.reveal = function () {
		delete this.isHidden;
		// remove display: none
		this.css({display: ''});

		var options = this.layout.options;

		var onTransitionEnd = {};
		var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
		onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

		this.transition({
			from: options.hiddenStyle,
			to: options.visibleStyle,
			isCleaning: true,
			onTransitionEnd: onTransitionEnd
		});
	};

	proto.onRevealTransitionEnd = function () {
		// check if still visible
		// during transition, item may have been hidden
		if (!this.isHidden) {
			this.emitEvent('reveal');
		}
	};

	/**
	 * get style property use for hide/reveal transition end
	 * @param {String} styleProperty - hiddenStyle/visibleStyle
	 * @returns {String}
	 */
	proto.getHideRevealTransitionEndProperty = function (styleProperty) {
		var optionStyle = this.layout.options[ styleProperty ];
		// use opacity
		if (optionStyle.opacity) {
			return 'opacity';
		}
		// get first property
		for (var prop in optionStyle) {
			return prop;
		}
	};

	proto.hide = function () {
		// set flag
		this.isHidden = true;
		// remove display: none
		this.css({display: ''});

		var options = this.layout.options;

		var onTransitionEnd = {};
		var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
		onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

		this.transition({
			from: options.visibleStyle,
			to: options.hiddenStyle,
			// keep hidden stuff hidden
			isCleaning: true,
			onTransitionEnd: onTransitionEnd
		});
	};

	proto.onHideTransitionEnd = function () {
		// check if still hidden
		// during transition, item may have been un-hidden
		if (this.isHidden) {
			this.css({display: 'none'});
			this.emitEvent('hide');
		}
	};

	proto.destroy = function () {
		this.css({
			position: '',
			left: '',
			right: '',
			top: '',
			bottom: '',
			transition: '',
			transform: ''
		});
	};

	return Item;

}));

/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */

(function (window, factory) {
	'use strict';
	// universal module definition
	/* jshint strict: false */ /* globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD - RequireJS
		define('outlayer/outlayer', [
			'ev-emitter/ev-emitter',
			'get-size/get-size',
			'fizzy-ui-utils/utils',
			'./item'
		],
			function (EvEmitter, getSize, utils, Item) {
				return factory(window, EvEmitter, getSize, utils, Item);
			}
		);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS - Browserify, Webpack
		module.exports = factory(
			window,
			require('ev-emitter'),
			require('get-size'),
			require('fizzy-ui-utils'),
			require('./item')
			);
	} else {
		// browser global
		window.Outlayer = factory(
			window,
			window.EvEmitter,
			window.getSize,
			window.fizzyUIUtils,
			window.Outlayer.Item
			);
	}

}(window, function factory(window, EvEmitter, getSize, utils, Item) {
	'use strict';

// ----- vars ----- //

	var console = window.console;
	var jQuery = window.jQuery;
	var noop = function () {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
	var GUID = 0;
// internal store of all Outlayer intances
	var instances = {};


	/**
	 * @param {Element, String} element
	 * @param {Object} options
	 * @constructor
	 */
	function Outlayer(element, options) {
		var queryElement = utils.getQueryElement(element);
		if (!queryElement) {
			if (console) {
				console.error('Bad element for ' + this.constructor.namespace +
					': ' + (queryElement || element));
			}
			return;
		}
		this.element = queryElement;
		// add jQuery
		if (jQuery) {
			this.$element = jQuery(this.element);
		}

		// options
		this.options = utils.extend({}, this.constructor.defaults);
		this.option(options);

		// add id for Outlayer.getFromElement
		var id = ++GUID;
		this.element.outlayerGUID = id; // expando
		instances[ id ] = this; // associate via id

		// kick it off
		this._create();

		var isInitLayout = this._getOption('initLayout');
		if (isInitLayout) {
			this.layout();
		}
	}

// settings are for internal use only
	Outlayer.namespace = 'outlayer';
	Outlayer.Item = Item;

// default options
	Outlayer.defaults = {
		containerStyle: {
			position: 'relative'
		},
		initLayout: true,
		originLeft: true,
		originTop: true,
		resize: true,
		resizeContainer: true,
		// item options
		transitionDuration: '0.4s',
		hiddenStyle: {
			opacity: 0,
			transform: 'scale(0.001)'
		},
		visibleStyle: {
			opacity: 1,
			transform: 'scale(1)'
		}
	};

	var proto = Outlayer.prototype;
// inherit EvEmitter
	utils.extend(proto, EvEmitter.prototype);

	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function (opts) {
		utils.extend(this.options, opts);
	};

	/**
	 * get backwards compatible option value, check old name
	 */
	proto._getOption = function (option) {
		var oldOption = this.constructor.compatOptions[ option ];
		return oldOption && this.options[ oldOption ] !== undefined ?
			this.options[ oldOption ] : this.options[ option ];
	};

	Outlayer.compatOptions = {
		// currentName: oldName
		initLayout: 'isInitLayout',
		horizontal: 'isHorizontal',
		layoutInstant: 'isLayoutInstant',
		originLeft: 'isOriginLeft',
		originTop: 'isOriginTop',
		resize: 'isResizeBound',
		resizeContainer: 'isResizingContainer'
	};

	proto._create = function () {
		// get items from children
		this.reloadItems();
		// elements that affect layout, but are not laid out
		this.stamps = [];
		this.stamp(this.options.stamp);
		// set container style
		utils.extend(this.element.style, this.options.containerStyle);

		// bind resize method
		var canBindResize = this._getOption('resize');
		if (canBindResize) {
			this.bindResize();
		}
	};

// goes through all children again and gets bricks in proper order
	proto.reloadItems = function () {
		// collection of item elements
		this.items = this._itemize(this.element.children);
	};


	/**
	 * turn elements into Outlayer.Items to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Outlayer Items
	 */
	proto._itemize = function (elems) {

		var itemElems = this._filterFindItemElements(elems);
		var Item = this.constructor.Item;

		// create new Outlayer Items for collection
		var items = [];
		for (var i = 0; i < itemElems.length; i++) {
			var elem = itemElems[i];
			var item = new Item(elem, this);
			items.push(item);
		}

		return items;
	};

	/**
	 * get item elements to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - item elements
	 */
	proto._filterFindItemElements = function (elems) {
		return utils.filterFindElements(elems, this.options.itemSelector);
	};

	/**
	 * getter method for getting item elements
	 * @returns {Array} elems - collection of item elements
	 */
	proto.getItemElements = function () {
		return this.items.map(function (item) {
			return item.element;
		});
	};

// ----- init & layout ----- //

	/**
	 * lays out all items
	 */
	proto.layout = function () {
		this._resetLayout();
		this._manageStamps();

		// don't animate first layout
		var layoutInstant = this._getOption('layoutInstant');
		var isInstant = layoutInstant !== undefined ?
			layoutInstant : !this._isLayoutInited;
		this.layoutItems(this.items, isInstant);

		// flag for initalized
		this._isLayoutInited = true;
	};

// _init is alias for layout
	proto._init = proto.layout;

	/**
	 * logic before any new layout
	 */
	proto._resetLayout = function () {
		this.getSize();
	};


	proto.getSize = function () {
		this.size = getSize(this.element);
	};

	/**
	 * get measurement from option, for columnWidth, rowHeight, gutter
	 * if option is String -> get element from selector string, & get size of element
	 * if option is Element -> get size of element
	 * else use option as a number
	 *
	 * @param {String} measurement
	 * @param {String} size - width or height
	 * @private
	 */
	proto._getMeasurement = function (measurement, size) {
		var option = this.options[ measurement ];
		var elem;
		if (!option) {
			// default to 0
			this[ measurement ] = 0;
		} else {
			// use option as an element
			if (typeof option == 'string') {
				elem = this.element.querySelector(option);
			} else if (option instanceof HTMLElement) {
				elem = option;
			}
			// use size of element, if element
			this[ measurement ] = elem ? getSize(elem)[ size ] : option;
		}
	};

	/**
	 * layout a collection of item elements
	 * @api public
	 */
	proto.layoutItems = function (items, isInstant) {
		items = this._getItemsForLayout(items);

		this._layoutItems(items, isInstant);

		this._postLayout();
	};

	/**
	 * get the items to be laid out
	 * you may want to skip over some items
	 * @param {Array} items
	 * @returns {Array} items
	 */
	proto._getItemsForLayout = function (items) {
		return items.filter(function (item) {
			return !item.isIgnored;
		});
	};

	/**
	 * layout items
	 * @param {Array} items
	 * @param {Boolean} isInstant
	 */
	proto._layoutItems = function (items, isInstant) {
		this._emitCompleteOnItems('layout', items);

		if (!items || !items.length) {
			// no items, emit event with empty array
			return;
		}

		var queue = [];

		items.forEach(function (item) {
			// get x/y object from method
			var position = this._getItemLayoutPosition(item);
			// enqueue
			position.item = item;
			position.isInstant = isInstant || item.isLayoutInstant;
			queue.push(position);
		}, this);

		this._processLayoutQueue(queue);
	};

	/**
	 * get item layout position
	 * @param {Outlayer.Item} item
	 * @returns {Object} x and y position
	 */
	proto._getItemLayoutPosition = function ( /* item */ ) {
		return {
			x: 0,
			y: 0
		};
	};

	/**
	 * iterate over array and position each item
	 * Reason being - separating this logic prevents 'layout invalidation'
	 * thx @paul_irish
	 * @param {Array} queue
	 */
	proto._processLayoutQueue = function (queue) {
		this.updateStagger();
		queue.forEach(function (obj, i) {
			this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
		}, this);
	};

// set stagger from option in milliseconds number
	proto.updateStagger = function () {
		var stagger = this.options.stagger;
		if (stagger === null || stagger === undefined) {
			this.stagger = 0;
			return;
		}
		this.stagger = getMilliseconds(stagger);
		return this.stagger;
	};

	/**
	 * Sets position of item in DOM
	 * @param {Outlayer.Item} item
	 * @param {Number} x - horizontal position
	 * @param {Number} y - vertical position
	 * @param {Boolean} isInstant - disables transitions
	 */
	proto._positionItem = function (item, x, y, isInstant, i) {
		if (isInstant) {
			// if not transition, just set CSS
			item.goTo(x, y);
		} else {
			item.stagger(i * this.stagger);
			item.moveTo(x, y);
		}
	};

	/**
	 * Any logic you want to do after each layout,
	 * i.e. size the container
	 */
	proto._postLayout = function () {
		this.resizeContainer();
	};

	proto.resizeContainer = function () {
		var isResizingContainer = this._getOption('resizeContainer');
		if (!isResizingContainer) {
			return;
		}
		var size = this._getContainerSize();
		if (size) {
			this._setContainerMeasure(size.width, true);
			this._setContainerMeasure(size.height, false);
		}
	};

	/**
	 * Sets width or height of container if returned
	 * @returns {Object} size
	 *   @param {Number} width
	 *   @param {Number} height
	 */
	proto._getContainerSize = noop;

	/**
	 * @param {Number} measure - size of width or height
	 * @param {Boolean} isWidth
	 */
	proto._setContainerMeasure = function (measure, isWidth) {
		if (measure === undefined) {
			return;
		}

		var elemSize = this.size;
		// add padding and border width if border box
		if (elemSize.isBorderBox) {
			measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
				elemSize.borderLeftWidth + elemSize.borderRightWidth :
				elemSize.paddingBottom + elemSize.paddingTop +
				elemSize.borderTopWidth + elemSize.borderBottomWidth;
		}

		measure = Math.max(measure, 0);
		this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
	};

	/**
	 * emit eventComplete on a collection of items events
	 * @param {String} eventName
	 * @param {Array} items - Outlayer.Items
	 */
	proto._emitCompleteOnItems = function (eventName, items) {
		var _this = this;
		function onComplete() {
			_this.dispatchEvent(eventName + 'Complete', null, [items]);
		}

		var count = items.length;
		if (!items || !count) {
			onComplete();
			return;
		}

		var doneCount = 0;
		function tick() {
			doneCount++;
			if (doneCount == count) {
				onComplete();
			}
		}

		// bind callback
		items.forEach(function (item) {
			item.once(eventName, tick);
		});
	};

	/**
	 * emits events via EvEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function (type, event, args) {
		// add original event to arguments
		var emitArgs = event ? [event].concat(args) : args;
		this.emitEvent(type, emitArgs);

		if (jQuery) {
			// set this.$element
			this.$element = this.$element || jQuery(this.element);
			if (event) {
				// create jQuery event
				var $event = jQuery.Event(event);
				$event.type = type;
				this.$element.trigger($event, args);
			} else {
				// just trigger with type if no event available
				this.$element.trigger(type, args);
			}
		}
	};

// -------------------------- ignore & stamps -------------------------- //


	/**
	 * keep item in collection, but do not lay it out
	 * ignored items do not get skipped in layout
	 * @param {Element} elem
	 */
	proto.ignore = function (elem) {
		var item = this.getItem(elem);
		if (item) {
			item.isIgnored = true;
		}
	};

	/**
	 * return item to layout collection
	 * @param {Element} elem
	 */
	proto.unignore = function (elem) {
		var item = this.getItem(elem);
		if (item) {
			delete item.isIgnored;
		}
	};

	/**
	 * adds elements to stamps
	 * @param {NodeList, Array, Element, or String} elems
	 */
	proto.stamp = function (elems) {
		elems = this._find(elems);
		if (!elems) {
			return;
		}

		this.stamps = this.stamps.concat(elems);
		// ignore
		elems.forEach(this.ignore, this);
	};

	/**
	 * removes elements to stamps
	 * @param {NodeList, Array, or Element} elems
	 */
	proto.unstamp = function (elems) {
		elems = this._find(elems);
		if (!elems) {
			return;
		}

		elems.forEach(function (elem) {
			// filter out removed stamp elements
			utils.removeFrom(this.stamps, elem);
			this.unignore(elem);
		}, this);
	};

	/**
	 * finds child elements
	 * @param {NodeList, Array, Element, or String} elems
	 * @returns {Array} elems
	 */
	proto._find = function (elems) {
		if (!elems) {
			return;
		}
		// if string, use argument as selector string
		if (typeof elems == 'string') {
			elems = this.element.querySelectorAll(elems);
		}
		elems = utils.makeArray(elems);
		return elems;
	};

	proto._manageStamps = function () {
		if (!this.stamps || !this.stamps.length) {
			return;
		}

		this._getBoundingRect();

		this.stamps.forEach(this._manageStamp, this);
	};

// update boundingLeft / Top
	proto._getBoundingRect = function () {
		// get bounding rect for container element
		var boundingRect = this.element.getBoundingClientRect();
		var size = this.size;
		this._boundingRect = {
			left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
			top: boundingRect.top + size.paddingTop + size.borderTopWidth,
			right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
			bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
		};
	};

	/**
	 * @param {Element} stamp
	 **/
	proto._manageStamp = noop;

	/**
	 * get x/y position of element relative to container element
	 * @param {Element} elem
	 * @returns {Object} offset - has left, top, right, bottom
	 */
	proto._getElementOffset = function (elem) {
		var boundingRect = elem.getBoundingClientRect();
		var thisRect = this._boundingRect;
		var size = getSize(elem);
		var offset = {
			left: boundingRect.left - thisRect.left - size.marginLeft,
			top: boundingRect.top - thisRect.top - size.marginTop,
			right: thisRect.right - boundingRect.right - size.marginRight,
			bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
		};
		return offset;
	};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
	proto.handleEvent = utils.handleEvent;

	/**
	 * Bind layout to window resizing
	 */
	proto.bindResize = function () {
		window.addEventListener('resize', this);
		this.isResizeBound = true;
	};

	/**
	 * Unbind layout to window resizing
	 */
	proto.unbindResize = function () {
		window.removeEventListener('resize', this);
		this.isResizeBound = false;
	};

	proto.onresize = function () {
		this.resize();
	};

	utils.debounceMethod(Outlayer, 'onresize', 100);

	proto.resize = function () {
		// don't trigger if size did not change
		// or if resize was unbound. See #9
		if (!this.isResizeBound || !this.needsResizeLayout()) {
			return;
		}

		this.layout();
	};

	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	proto.needsResizeLayout = function () {
		var size = getSize(this.element);
		// check that this.size and size are there
		// IE8 triggers resize on body size change, so they might not be
		var hasSizes = this.size && size;
		return hasSizes && size.innerWidth !== this.size.innerWidth;
	};

// -------------------------- methods -------------------------- //

	/**
	 * add items to Outlayer instance
	 * @param {Array or NodeList or Element} elems
	 * @returns {Array} items - Outlayer.Items
	 **/
	proto.addItems = function (elems) {
		var items = this._itemize(elems);
		// add items to collection
		if (items.length) {
			this.items = this.items.concat(items);
		}
		return items;
	};

	/**
	 * Layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.appended = function (elems) {
		var items = this.addItems(elems);
		if (!items.length) {
			return;
		}
		// layout and reveal just the new items
		this.layoutItems(items, true);
		this.reveal(items);
	};

	/**
	 * Layout prepended elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.prepended = function (elems) {
		var items = this._itemize(elems);
		if (!items.length) {
			return;
		}
		// add items to beginning of collection
		var previousItems = this.items.slice(0);
		this.items = items.concat(previousItems);
		// start new layout
		this._resetLayout();
		this._manageStamps();
		// layout new stuff without transition
		this.layoutItems(items, true);
		this.reveal(items);
		// layout previous items
		this.layoutItems(previousItems);
	};

	/**
	 * reveal a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.reveal = function (items) {
		this._emitCompleteOnItems('reveal', items);
		if (!items || !items.length) {
			return;
		}
		var stagger = this.updateStagger();
		items.forEach(function (item, i) {
			item.stagger(i * stagger);
			item.reveal();
		});
	};

	/**
	 * hide a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.hide = function (items) {
		this._emitCompleteOnItems('hide', items);
		if (!items || !items.length) {
			return;
		}
		var stagger = this.updateStagger();
		items.forEach(function (item, i) {
			item.stagger(i * stagger);
			item.hide();
		});
	};

	/**
	 * reveal item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.revealItemElements = function (elems) {
		var items = this.getItems(elems);
		this.reveal(items);
	};

	/**
	 * hide item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.hideItemElements = function (elems) {
		var items = this.getItems(elems);
		this.hide(items);
	};

	/**
	 * get Outlayer.Item, given an Element
	 * @param {Element} elem
	 * @param {Function} callback
	 * @returns {Outlayer.Item} item
	 */
	proto.getItem = function (elem) {
		// loop through items to get the one that matches
		for (var i = 0; i < this.items.length; i++) {
			var item = this.items[i];
			if (item.element == elem) {
				// return item
				return item;
			}
		}
	};

	/**
	 * get collection of Outlayer.Items, given Elements
	 * @param {Array} elems
	 * @returns {Array} items - Outlayer.Items
	 */
	proto.getItems = function (elems) {
		elems = utils.makeArray(elems);
		var items = [];
		elems.forEach(function (elem) {
			var item = this.getItem(elem);
			if (item) {
				items.push(item);
			}
		}, this);

		return items;
	};

	/**
	 * remove element(s) from instance and DOM
	 * @param {Array or NodeList or Element} elems
	 */
	proto.remove = function (elems) {
		var removeItems = this.getItems(elems);

		this._emitCompleteOnItems('remove', removeItems);

		// bail if no items to remove
		if (!removeItems || !removeItems.length) {
			return;
		}

		removeItems.forEach(function (item) {
			item.remove();
			// remove item from collection
			utils.removeFrom(this.items, item);
		}, this);
	};

// ----- destroy ----- //

// remove and disable Outlayer instance
	proto.destroy = function () {
		// clean up dynamic styles
		var style = this.element.style;
		style.height = '';
		style.position = '';
		style.width = '';
		// destroy items
		this.items.forEach(function (item) {
			item.destroy();
		});

		this.unbindResize();

		var id = this.element.outlayerGUID;
		delete instances[ id ]; // remove reference to instance by id
		delete this.element.outlayerGUID;
		// remove data for jQuery
		if (jQuery) {
			jQuery.removeData(this.element, this.constructor.namespace);
		}

	};

// -------------------------- data -------------------------- //

	/**
	 * get Outlayer instance from element
	 * @param {Element} elem
	 * @returns {Outlayer}
	 */
	Outlayer.data = function (elem) {
		elem = utils.getQueryElement(elem);
		var id = elem && elem.outlayerGUID;
		return id && instances[ id ];
	};


// -------------------------- create Outlayer class -------------------------- //

	/**
	 * create a layout class
	 * @param {String} namespace
	 */
	Outlayer.create = function (namespace, options) {
		// sub-class Outlayer
		var Layout = subclass(Outlayer);
		// apply new options and compatOptions
		Layout.defaults = utils.extend({}, Outlayer.defaults);
		utils.extend(Layout.defaults, options);
		Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

		Layout.namespace = namespace;

		Layout.data = Outlayer.data;

		// sub-class Item
		Layout.Item = subclass(Item);

		// -------------------------- declarative -------------------------- //

		utils.htmlInit(Layout, namespace);

		// -------------------------- jQuery bridge -------------------------- //

		// make into jQuery plugin
		if (jQuery && jQuery.bridget) {
			jQuery.bridget(namespace, Layout);
		}

		return Layout;
	};

	function subclass(Parent) {
		function SubClass() {
			Parent.apply(this, arguments);
		}

		SubClass.prototype = Object.create(Parent.prototype);
		SubClass.prototype.constructor = SubClass;

		return SubClass;
	}

// ----- helpers ----- //

// how many milliseconds are in each unit
	var msUnits = {
		ms: 1,
		s: 1000
	};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
	function getMilliseconds(time) {
		if (typeof time == 'number') {
			return time;
		}
		var matches = time.match(/(^\d*\.?\d*)(\w*)/);
		var num = matches && matches[1];
		var unit = matches && matches[2];
		if (!num.length) {
			return 0;
		}
		num = parseFloat(num);
		var mult = msUnits[ unit ] || 1;
		return num * mult;
	}

// ----- fin ----- //

// back in global
	Outlayer.Item = Item;

	return Outlayer;

}));

/**
 * Isotope Item
 **/

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('isotope/js/item', [
			'outlayer/outlayer'
		],
			factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('outlayer')
			);
	} else {
		// browser global
		window.Isotope = window.Isotope || {};
		window.Isotope.Item = factory(
			window.Outlayer
			);
	}

}(window, function factory(Outlayer) {
	'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
	function Item() {
		Outlayer.Item.apply(this, arguments);
	}

	var proto = Item.prototype = Object.create(Outlayer.Item.prototype);

	var _create = proto._create;
	proto._create = function () {
		// assign id, used for original-order sorting
		this.id = this.layout.itemGUID++;
		_create.call(this);
		this.sortData = {};
	};

	proto.updateSortData = function () {
		if (this.isIgnored) {
			return;
		}
		// default sorters
		this.sortData.id = this.id;
		// for backward compatibility
		this.sortData['original-order'] = this.id;
		this.sortData.random = Math.random();
		// go thru getSortData obj and apply the sorters
		var getSortData = this.layout.options.getSortData;
		var sorters = this.layout._sorters;
		for (var key in getSortData) {
			var sorter = sorters[ key ];
			this.sortData[ key ] = sorter(this.element, this);
		}
	};

	var _destroy = proto.destroy;
	proto.destroy = function () {
		// call super
		_destroy.apply(this, arguments);
		// reset display, #741
		this.css({
			display: ''
		});
	};

	return Item;

}));

/**
 * Isotope LayoutMode
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('isotope/js/layout-mode', [
			'get-size/get-size',
			'outlayer/outlayer'
		],
			factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('get-size'),
			require('outlayer')
			);
	} else {
		// browser global
		window.Isotope = window.Isotope || {};
		window.Isotope.LayoutMode = factory(
			window.getSize,
			window.Outlayer
			);
	}

}(window, function factory(getSize, Outlayer) {
	'use strict';

	// layout mode class
	function LayoutMode(isotope) {
		this.isotope = isotope;
		// link properties
		if (isotope) {
			this.options = isotope.options[ this.namespace ];
			this.element = isotope.element;
			this.items = isotope.filteredItems;
			this.size = isotope.size;
		}
	}

	var proto = LayoutMode.prototype;

	/**
	 * some methods should just defer to default Outlayer method
	 * and reference the Isotope instance as `this`
	 **/
	var facadeMethods = [
		'_resetLayout',
		'_getItemLayoutPosition',
		'_manageStamp',
		'_getContainerSize',
		'_getElementOffset',
		'needsResizeLayout',
		'_getOption'
	];

	facadeMethods.forEach(function (methodName) {
		proto[ methodName ] = function () {
			return Outlayer.prototype[ methodName ].apply(this.isotope, arguments);
		};
	});

	// -----  ----- //

	// for horizontal layout modes, check vertical size
	proto.needsVerticalResizeLayout = function () {
		// don't trigger if size did not change
		var size = getSize(this.isotope.element);
		// check that this.size and size are there
		// IE8 triggers resize on body size change, so they might not be
		var hasSizes = this.isotope.size && size;
		return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
	};

	// ----- measurements ----- //

	proto._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments);
	};

	proto.getColumnWidth = function () {
		this.getSegmentSize('column', 'Width');
	};

	proto.getRowHeight = function () {
		this.getSegmentSize('row', 'Height');
	};

	/**
	 * get columnWidth or rowHeight
	 * segment: 'column' or 'row'
	 * size 'Width' or 'Height'
	 **/
	proto.getSegmentSize = function (segment, size) {
		var segmentName = segment + size;
		var outerSize = 'outer' + size;
		// columnWidth / outerWidth // rowHeight / outerHeight
		this._getMeasurement(segmentName, outerSize);
		// got rowHeight or columnWidth, we can chill
		if (this[ segmentName ]) {
			return;
		}
		// fall back to item of first element
		var firstItemSize = this.getFirstItemSize();
		this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
			// or size of container
			this.isotope.size[ 'inner' + size ];
	};

	proto.getFirstItemSize = function () {
		var firstItem = this.isotope.filteredItems[0];
		return firstItem && firstItem.element && getSize(firstItem.element);
	};

	// ----- methods that should reference isotope ----- //

	proto.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments);
	};

	proto.getSize = function () {
		this.isotope.getSize();
		this.size = this.isotope.size;
	};

	// -------------------------- create -------------------------- //

	LayoutMode.modes = {};

	LayoutMode.create = function (namespace, options) {

		function Mode() {
			LayoutMode.apply(this, arguments);
		}

		Mode.prototype = Object.create(proto);
		Mode.prototype.constructor = Mode;

		// default options
		if (options) {
			Mode.options = options;
		}

		Mode.prototype.namespace = namespace;
		// register in Isotope
		LayoutMode.modes[ namespace ] = Mode;

		return Mode;
	};

	return LayoutMode;

}));

/*!
 * Masonry v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('masonry/masonry', [
			'outlayer/outlayer',
			'get-size/get-size'
		],
			factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('outlayer'),
			require('get-size')
			);
	} else {
		// browser global
		window.Masonry = factory(
			window.Outlayer,
			window.getSize
			);
	}

}(window, function factory(Outlayer, getSize) {



// -------------------------- masonryDefinition -------------------------- //

	// create an Outlayer layout class
	var Masonry = Outlayer.create('masonry');
	// isFitWidth -> fitWidth
	Masonry.compatOptions.fitWidth = 'isFitWidth';

	var proto = Masonry.prototype;

	proto._resetLayout = function () {
		this.getSize();
		this._getMeasurement('columnWidth', 'outerWidth');
		this._getMeasurement('gutter', 'outerWidth');
		this.measureColumns();

		// reset column Y
		this.colYs = [];
		for (var i = 0; i < this.cols; i++) {
			this.colYs.push(0);
		}

		this.maxY = 0;
		this.horizontalColIndex = 0;
	};

	proto.measureColumns = function () {
		this.getContainerWidth();
		// if columnWidth is 0, default to outerWidth of first item
		if (!this.columnWidth) {
			var firstItem = this.items[0];
			var firstItemElem = firstItem && firstItem.element;
			// columnWidth fall back to item of first element
			this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
				// if first elem has no width, default to size of container
				this.containerWidth;
		}

		var columnWidth = this.columnWidth += this.gutter;

		// calculate columns
		var containerWidth = this.containerWidth + this.gutter;
		var cols = containerWidth / columnWidth;
		// fix rounding errors, typically with gutters
		var excess = columnWidth - containerWidth % columnWidth;
		// if overshoot is less than a pixel, round up, otherwise floor it
		var mathMethod = excess && excess < 1 ? 'round' : 'floor';
		cols = Math[ mathMethod ](cols);
		this.cols = Math.max(cols, 1);
	};

	proto.getContainerWidth = function () {
		// container is parent if fit width
		var isFitWidth = this._getOption('fitWidth');
		var container = isFitWidth ? this.element.parentNode : this.element;
		// check that this.size and size are there
		// IE8 triggers resize on body size change, so they might not be
		var size = getSize(container);
		this.containerWidth = size && size.innerWidth;
	};

	proto._getItemLayoutPosition = function (item) {
		item.getSize();
		// how many columns does this brick span
		var remainder = item.size.outerWidth % this.columnWidth;
		var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
		// round if off by 1 pixel, otherwise use ceil
		var colSpan = Math[ mathMethod ](item.size.outerWidth / this.columnWidth);
		colSpan = Math.min(colSpan, this.cols);
		// use horizontal or top column position
		var colPosMethod = this.options.horizontalOrder ?
			'_getHorizontalColPosition' : '_getTopColPosition';
		var colPosition = this[ colPosMethod ](colSpan, item);
		// position the brick
		var position = {
			x: this.columnWidth * colPosition.col,
			y: colPosition.y
		};
		// apply setHeight to necessary columns
		var setHeight = colPosition.y + item.size.outerHeight;
		var setMax = colSpan + colPosition.col;
		for (var i = colPosition.col; i < setMax; i++) {
			this.colYs[i] = setHeight;
		}

		return position;
	};

	proto._getTopColPosition = function (colSpan) {
		var colGroup = this._getTopColGroup(colSpan);
		// get the minimum Y value from the columns
		var minimumY = Math.min.apply(Math, colGroup);

		return {
			col: colGroup.indexOf(minimumY),
			y: minimumY,
		};
	};

	/**
	 * @param {Number} colSpan - number of columns the element spans
	 * @returns {Array} colGroup
	 */
	proto._getTopColGroup = function (colSpan) {
		if (colSpan < 2) {
			// if brick spans only one column, use all the column Ys
			return this.colYs;
		}

		var colGroup = [];
		// how many different places could this brick fit horizontally
		var groupCount = this.cols + 1 - colSpan;
		// for each group potential horizontal position
		for (var i = 0; i < groupCount; i++) {
			colGroup[i] = this._getColGroupY(i, colSpan);
		}
		return colGroup;
	};

	proto._getColGroupY = function (col, colSpan) {
		if (colSpan < 2) {
			return this.colYs[ col ];
		}
		// make an array of colY values for that one group
		var groupColYs = this.colYs.slice(col, col + colSpan);
		// and get the max value of the array
		return Math.max.apply(Math, groupColYs);
	};

	// get column position based on horizontal index. #873
	proto._getHorizontalColPosition = function (colSpan, item) {
		var col = this.horizontalColIndex % this.cols;
		var isOver = colSpan > 1 && col + colSpan > this.cols;
		// shift to next row if item can't fit on current row
		col = isOver ? 0 : col;
		// don't let zero-size items take up space
		var hasSize = item.size.outerWidth && item.size.outerHeight;
		this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

		return {
			col: col,
			y: this._getColGroupY(col, colSpan),
		};
	};

	proto._manageStamp = function (stamp) {
		var stampSize = getSize(stamp);
		var offset = this._getElementOffset(stamp);
		// get the columns that this stamp affects
		var isOriginLeft = this._getOption('originLeft');
		var firstX = isOriginLeft ? offset.left : offset.right;
		var lastX = firstX + stampSize.outerWidth;
		var firstCol = Math.floor(firstX / this.columnWidth);
		firstCol = Math.max(0, firstCol);
		var lastCol = Math.floor(lastX / this.columnWidth);
		// lastCol should not go over if multiple of columnWidth #425
		lastCol -= lastX % this.columnWidth ? 0 : 1;
		lastCol = Math.min(this.cols - 1, lastCol);
		// set colYs to bottom of the stamp

		var isOriginTop = this._getOption('originTop');
		var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
			stampSize.outerHeight;
		for (var i = firstCol; i <= lastCol; i++) {
			this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
		}
	};

	proto._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var size = {
			height: this.maxY
		};

		if (this._getOption('fitWidth')) {
			size.width = this._getContainerFitWidth();
		}

		return size;
	};

	proto._getContainerFitWidth = function () {
		var unusedCols = 0;
		// count unused columns
		var i = this.cols;
		while (--i) {
			if (this.colYs[i] !== 0) {
				break;
			}
			unusedCols++;
		}
		// fit container to columns that have been used
		return (this.cols - unusedCols) * this.columnWidth - this.gutter;
	};

	proto.needsResizeLayout = function () {
		var previousWidth = this.containerWidth;
		this.getContainerWidth();
		return previousWidth != this.containerWidth;
	};

	return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('isotope/js/layout-modes/masonry', [
			'../layout-mode',
			'masonry/masonry'
		],
			factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('../layout-mode'),
			require('masonry-layout')
			);
	} else {
		// browser global
		factory(
			window.Isotope.LayoutMode,
			window.Masonry
			);
	}

}(window, function factory(LayoutMode, Masonry) {
	'use strict';

// -------------------------- masonryDefinition -------------------------- //

	// create an Outlayer layout class
	var MasonryMode = LayoutMode.create('masonry');

	var proto = MasonryMode.prototype;

	var keepModeMethods = {
		_getElementOffset: true,
		layout: true,
		_getMeasurement: true
	};

	// inherit Masonry prototype
	for (var method in Masonry.prototype) {
		// do not inherit mode methods
		if (!keepModeMethods[ method ]) {
			proto[ method ] = Masonry.prototype[ method ];
		}
	}

	var measureColumns = proto.measureColumns;
	proto.measureColumns = function () {
		// set items, used if measuring first item
		this.items = this.isotope.filteredItems;
		measureColumns.call(this);
	};

	// point to mode options for fitWidth
	var _getOption = proto._getOption;
	proto._getOption = function (option) {
		if (option == 'fitWidth') {
			return this.options.isFitWidth !== undefined ?
				this.options.isFitWidth : this.options.fitWidth;
		}
		return _getOption.apply(this.isotope, arguments);
	};

	return MasonryMode;

}));

/**
 * fitRows layout mode
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('isotope/js/layout-modes/fit-rows', [
			'../layout-mode'
		],
			factory);
	} else if (typeof exports == 'object') {
		// CommonJS
		module.exports = factory(
			require('../layout-mode')
			);
	} else {
		// browser global
		factory(
			window.Isotope.LayoutMode
			);
	}

}(window, function factory(LayoutMode) {
	'use strict';

	var FitRows = LayoutMode.create('fitRows');

	var proto = FitRows.prototype;

	proto._resetLayout = function () {
		this.x = 0;
		this.y = 0;
		this.maxY = 0;
		this._getMeasurement('gutter', 'outerWidth');
	};

	proto._getItemLayoutPosition = function (item) {
		item.getSize();

		var itemWidth = item.size.outerWidth + this.gutter;
		// if this element cannot fit in the current row
		var containerWidth = this.isotope.size.innerWidth + this.gutter;
		if (this.x !== 0 && itemWidth + this.x > containerWidth) {
			this.x = 0;
			this.y = this.maxY;
		}

		var position = {
			x: this.x,
			y: this.y
		};

		this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
		this.x += itemWidth;

		return position;
	};

	proto._getContainerSize = function () {
		return {height: this.maxY};
	};

	return FitRows;

}));

/**
 * vertical layout mode
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define('isotope/js/layout-modes/vertical', [
			'../layout-mode'
		],
			factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			require('../layout-mode')
			);
	} else {
		// browser global
		factory(
			window.Isotope.LayoutMode
			);
	}

}(window, function factory(LayoutMode) {
	'use strict';

	var Vertical = LayoutMode.create('vertical', {
		horizontalAlignment: 0
	});

	var proto = Vertical.prototype;

	proto._resetLayout = function () {
		this.y = 0;
	};

	proto._getItemLayoutPosition = function (item) {
		item.getSize();
		var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
			this.options.horizontalAlignment;
		var y = this.y;
		this.y += item.size.outerHeight;
		return {x: x, y: y};
	};

	proto._getContainerSize = function () {
		return {height: this.y};
	};

	return Vertical;

}));

/*!
 * Isotope v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

(function (window, factory) {
	// universal module definition
	/* jshint strict: false */ /*globals define, module, require */
	if (typeof define == 'function' && define.amd) {
		// AMD
		define([
			'outlayer/outlayer',
			'get-size/get-size',
			'desandro-matches-selector/matches-selector',
			'fizzy-ui-utils/utils',
			'isotope/js/item',
			'isotope/js/layout-mode',
			// include default layout modes
			'isotope/js/layout-modes/masonry',
			'isotope/js/layout-modes/fit-rows',
			'isotope/js/layout-modes/vertical'
		],
			function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
				return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
			});
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			window,
			require('outlayer'),
			require('get-size'),
			require('desandro-matches-selector'),
			require('fizzy-ui-utils'),
			require('isotope/js/item'),
			require('isotope/js/layout-mode'),
			// include default layout modes
			require('isotope/js/layout-modes/masonry'),
			require('isotope/js/layout-modes/fit-rows'),
			require('isotope/js/layout-modes/vertical')
			);
	} else {
		// browser global
		window.Isotope = factory(
			window,
			window.Outlayer,
			window.getSize,
			window.matchesSelector,
			window.fizzyUIUtils,
			window.Isotope.Item,
			window.Isotope.LayoutMode
			);
	}

}(window, function factory(window, Outlayer, getSize, matchesSelector, utils,
	Item, LayoutMode) {



// -------------------------- vars -------------------------- //

	var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

	var trim = String.prototype.trim ?
		function (str) {
			return str.trim();
		} :
		function (str) {
			return str.replace(/^\s+|\s+$/g, '');
		};

// -------------------------- isotopeDefinition -------------------------- //

	// create an Outlayer layout class
	var Isotope = Outlayer.create('isotope', {
		layoutMode: 'masonry',
		isJQueryFiltering: true,
		sortAscending: true
	});

	Isotope.Item = Item;
	Isotope.LayoutMode = LayoutMode;

	var proto = Isotope.prototype;

	proto._create = function () {
		this.itemGUID = 0;
		// functions that sort items
		this._sorters = {};
		this._getSorters();
		// call super
		Outlayer.prototype._create.call(this);

		// create layout modes
		this.modes = {};
		// start filteredItems with all items
		this.filteredItems = this.items;
		// keep of track of sortBys
		this.sortHistory = ['original-order'];
		// create from registered layout modes
		for (var name in LayoutMode.modes) {
			this._initLayoutMode(name);
		}
	};

	proto.reloadItems = function () {
		// reset item ID counter
		this.itemGUID = 0;
		// call super
		Outlayer.prototype.reloadItems.call(this);
	};

	proto._itemize = function () {
		var items = Outlayer.prototype._itemize.apply(this, arguments);
		// assign ID for original-order
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			item.id = this.itemGUID++;
		}
		this._updateItemsSortData(items);
		return items;
	};


	// -------------------------- layout -------------------------- //

	proto._initLayoutMode = function (name) {
		var Mode = LayoutMode.modes[ name ];
		// set mode options
		// HACK extend initial options, back-fill in default options
		var initialOpts = this.options[ name ] || {};
		this.options[ name ] = Mode.options ?
			utils.extend(Mode.options, initialOpts) : initialOpts;
		// init layout mode instance
		this.modes[ name ] = new Mode(this);
	};


	proto.layout = function () {
		// if first time doing layout, do all magic
		if (!this._isLayoutInited && this._getOption('initLayout')) {
			this.arrange();
			return;
		}
		this._layout();
	};

	// private method to be used in layout() & magic()
	proto._layout = function () {
		// don't animate first layout
		var isInstant = this._getIsInstant();
		// layout flow
		this._resetLayout();
		this._manageStamps();
		this.layoutItems(this.filteredItems, isInstant);

		// flag for initalized
		this._isLayoutInited = true;
	};

	// filter + sort + layout
	proto.arrange = function (opts) {
		// set any options pass
		this.option(opts);
		this._getIsInstant();
		// filter, sort, and layout

		// filter
		var filtered = this._filter(this.items);
		this.filteredItems = filtered.matches;

		this._bindArrangeComplete();

		if (this._isInstant) {
			this._noTransition(this._hideReveal, [filtered]);
		} else {
			this._hideReveal(filtered);
		}

		this._sort();
		this._layout();
	};
	// alias to _init for main plugin method
	proto._init = proto.arrange;

	proto._hideReveal = function (filtered) {
		this.reveal(filtered.needReveal);
		this.hide(filtered.needHide);
	};

	// HACK
	// Don't animate/transition first layout
	// Or don't animate/transition other layouts
	proto._getIsInstant = function () {
		var isLayoutInstant = this._getOption('layoutInstant');
		var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
			!this._isLayoutInited;
		this._isInstant = isInstant;
		return isInstant;
	};

	// listen for layoutComplete, hideComplete and revealComplete
	// to trigger arrangeComplete
	proto._bindArrangeComplete = function () {
		// listen for 3 events to trigger arrangeComplete
		var isLayoutComplete, isHideComplete, isRevealComplete;
		var _this = this;
		function arrangeParallelCallback() {
			if (isLayoutComplete && isHideComplete && isRevealComplete) {
				_this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
			}
		}
		this.once('layoutComplete', function () {
			isLayoutComplete = true;
			arrangeParallelCallback();
		});
		this.once('hideComplete', function () {
			isHideComplete = true;
			arrangeParallelCallback();
		});
		this.once('revealComplete', function () {
			isRevealComplete = true;
			arrangeParallelCallback();
		});
	};

	// -------------------------- filter -------------------------- //

	proto._filter = function (items) {
		var filter = this.options.filter;
		filter = filter || '*';
		var matches = [];
		var hiddenMatched = [];
		var visibleUnmatched = [];

		var test = this._getFilterTest(filter);

		// test each item
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.isIgnored) {
				continue;
			}
			// add item to either matched or unmatched group
			var isMatched = test(item);
			// item.isFilterMatched = isMatched;
			// add to matches if its a match
			if (isMatched) {
				matches.push(item);
			}
			// add to additional group if item needs to be hidden or revealed
			if (isMatched && item.isHidden) {
				hiddenMatched.push(item);
			} else if (!isMatched && !item.isHidden) {
				visibleUnmatched.push(item);
			}
		}

		// return collections of items to be manipulated
		return {
			matches: matches,
			needReveal: hiddenMatched,
			needHide: visibleUnmatched
		};
	};

	// get a jQuery, function, or a matchesSelector test given the filter
	proto._getFilterTest = function (filter) {
		if (jQuery && this.options.isJQueryFiltering) {
			// use jQuery
			return function (item) {
				return jQuery(item.element).is(filter);
			};
		}
		if (typeof filter == 'function') {
			// use filter as function
			return function (item) {
				return filter(item.element);
			};
		}
		// default, use filter as selector string
		return function (item) {
			return matchesSelector(item.element, filter);
		};
	};

	// -------------------------- sorting -------------------------- //

	/**
	 * @params {Array} elems
	 * @public
	 */
	proto.updateSortData = function (elems) {
		// get items
		var items;
		if (elems) {
			elems = utils.makeArray(elems);
			items = this.getItems(elems);
		} else {
			// update all items if no elems provided
			items = this.items;
		}

		this._getSorters();
		this._updateItemsSortData(items);
	};

	proto._getSorters = function () {
		var getSortData = this.options.getSortData;
		for (var key in getSortData) {
			var sorter = getSortData[ key ];
			this._sorters[ key ] = mungeSorter(sorter);
		}
	};

	/**
	 * @params {Array} items - of Isotope.Items
	 * @private
	 */
	proto._updateItemsSortData = function (items) {
		// do not update if no items
		var len = items && items.length;

		for (var i = 0; len && i < len; i++) {
			var item = items[i];
			item.updateSortData();
		}
	};

	// ----- munge sorter ----- //

	// encapsulate this, as we just need mungeSorter
	// other functions in here are just for munging
	var mungeSorter = (function () {
		// add a magic layer to sorters for convienent shorthands
		// `.foo-bar` will use the text of .foo-bar querySelector
		// `[foo-bar]` will use attribute
		// you can also add parser
		// `.foo-bar parseInt` will parse that as a number
		function mungeSorter(sorter) {
			// if not a string, return function or whatever it is
			if (typeof sorter != 'string') {
				return sorter;
			}
			// parse the sorter string
			var args = trim(sorter).split(' ');
			var query = args[0];
			// check if query looks like [an-attribute]
			var attrMatch = query.match(/^\[(.+)\]$/);
			var attr = attrMatch && attrMatch[1];
			var getValue = getValueGetter(attr, query);
			// use second argument as a parser
			var parser = Isotope.sortDataParsers[ args[1] ];
			// parse the value, if there was a parser
			sorter = parser ? function (elem) {
				return elem && parser(getValue(elem));
			} :
				// otherwise just return value
					function (elem) {
						return elem && getValue(elem);
					};

				return sorter;
			}

		// get an attribute getter, or get text of the querySelector
		function getValueGetter(attr, query) {
			// if query looks like [foo-bar], get attribute
			if (attr) {
				return function getAttribute(elem) {
					return elem.getAttribute(attr);
				};
			}

			// otherwise, assume its a querySelector, and get its text
			return function getChildText(elem) {
				var child = elem.querySelector(query);
				return child && child.textContent;
			};
		}

		return mungeSorter;
	})();

	// parsers used in getSortData shortcut strings
	Isotope.sortDataParsers = {
		'parseInt': function (val) {
			return parseInt(val, 10);
		},
		'parseFloat': function (val) {
			return parseFloat(val);
		}
	};

	// ----- sort method ----- //

	// sort filteredItem order
	proto._sort = function () {
		if (!this.options.sortBy) {
			return;
		}
		// keep track of sortBy History
		var sortBys = utils.makeArray(this.options.sortBy);
		if (!this._getIsSameSortBy(sortBys)) {
			// concat all sortBy and sortHistory, add to front, oldest goes in last
			this.sortHistory = sortBys.concat(this.sortHistory);
		}
		// sort magic
		var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
		this.filteredItems.sort(itemSorter);
	};

	// check if sortBys is same as start of sortHistory
	proto._getIsSameSortBy = function (sortBys) {
		for (var i = 0; i < sortBys.length; i++) {
			if (sortBys[i] != this.sortHistory[i]) {
				return false;
			}
		}
		return true;
	};

	// returns a function used for sorting
	function getItemSorter(sortBys, sortAsc) {
		return function sorter(itemA, itemB) {
			// cycle through all sortKeys
			for (var i = 0; i < sortBys.length; i++) {
				var sortBy = sortBys[i];
				var a = itemA.sortData[ sortBy ];
				var b = itemB.sortData[ sortBy ];
				if (a > b || a < b) {
					// if sortAsc is an object, use the value given the sortBy key
					var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
					var direction = isAscending ? 1 : -1;
					return (a > b ? 1 : -1) * direction;
				}
			}
			return 0;
		};
	}

	// -------------------------- methods -------------------------- //

	// get layout mode
	proto._mode = function () {
		var layoutMode = this.options.layoutMode;
		var mode = this.modes[ layoutMode ];
		if (!mode) {
			// TODO console.error
			throw new Error('No layout mode: ' + layoutMode);
		}
		// HACK sync mode's options
		// any options set after init for layout mode need to be synced
		mode.options = this.options[ layoutMode ];
		return mode;
	};

	proto._resetLayout = function () {
		// trigger original reset layout
		Outlayer.prototype._resetLayout.call(this);
		this._mode()._resetLayout();
	};

	proto._getItemLayoutPosition = function (item) {
		return this._mode()._getItemLayoutPosition(item);
	};

	proto._manageStamp = function (stamp) {
		this._mode()._manageStamp(stamp);
	};

	proto._getContainerSize = function () {
		return this._mode()._getContainerSize();
	};

	proto.needsResizeLayout = function () {
		return this._mode().needsResizeLayout();
	};

	// -------------------------- adding & removing -------------------------- //

	// HEADS UP overwrites default Outlayer appended
	proto.appended = function (elems) {
		var items = this.addItems(elems);
		if (!items.length) {
			return;
		}
		// filter, layout, reveal new items
		var filteredItems = this._filterRevealAdded(items);
		// add to filteredItems
		this.filteredItems = this.filteredItems.concat(filteredItems);
	};

	// HEADS UP overwrites default Outlayer prepended
	proto.prepended = function (elems) {
		var items = this._itemize(elems);
		if (!items.length) {
			return;
		}
		// start new layout
		this._resetLayout();
		this._manageStamps();
		// filter, layout, reveal new items
		var filteredItems = this._filterRevealAdded(items);
		// layout previous items
		this.layoutItems(this.filteredItems);
		// add to items and filteredItems
		this.filteredItems = filteredItems.concat(this.filteredItems);
		this.items = items.concat(this.items);
	};

	proto._filterRevealAdded = function (items) {
		var filtered = this._filter(items);
		this.hide(filtered.needHide);
		// reveal all new items
		this.reveal(filtered.matches);
		// layout new items, no transition
		this.layoutItems(filtered.matches, true);
		return filtered.matches;
	};

	/**
	 * Filter, sort, and layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.insert = function (elems) {
		var items = this.addItems(elems);
		if (!items.length) {
			return;
		}
		// append item elements
		var i, item;
		var len = items.length;
		for (i = 0; i < len; i++) {
			item = items[i];
			this.element.appendChild(item.element);
		}
		// filter new stuff
		var filteredInsertItems = this._filter(items).matches;
		// set flag
		for (i = 0; i < len; i++) {
			items[i].isLayoutInstant = true;
		}
		this.arrange();
		// reset flag
		for (i = 0; i < len; i++) {
			delete items[i].isLayoutInstant;
		}
		this.reveal(filteredInsertItems);
	};

	var _remove = proto.remove;
	proto.remove = function (elems) {
		elems = utils.makeArray(elems);
		var removeItems = this.getItems(elems);
		// do regular thing
		_remove.call(this, elems);
		// bail if no items to remove
		var len = removeItems && removeItems.length;
		// remove elems from filteredItems
		for (var i = 0; len && i < len; i++) {
			var item = removeItems[i];
			// remove item from collection
			utils.removeFrom(this.filteredItems, item);
		}
	};

	proto.shuffle = function () {
		// update random sortData
		for (var i = 0; i < this.items.length; i++) {
			var item = this.items[i];
			item.sortData.random = Math.random();
		}
		this.options.sortBy = 'random';
		this._sort();
		this._layout();
	};

	/**
	 * trigger fn without transition
	 * kind of hacky to have this in the first place
	 * @param {Function} fn
	 * @param {Array} args
	 * @returns ret
	 * @private
	 */
	proto._noTransition = function (fn, args) {
		// save transitionDuration before disabling
		var transitionDuration = this.options.transitionDuration;
		// disable transition
		this.options.transitionDuration = 0;
		// do it
		var returnValue = fn.apply(this, args);
		// re-enable transition for reveal
		this.options.transitionDuration = transitionDuration;
		return returnValue;
	};

	// ----- helper methods ----- //

	/**
	 * getter method for getting filtered item elements
	 * @returns {Array} elems - collection of item elements
	 */
	proto.getFilteredItemElements = function () {
		return this.filteredItems.map(function (item) {
			return item.element;
		});
	};

	// -----  ----- //

	return Isotope;

}));
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

proto.allOff =
proto.removeAllListeners = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});
;(function ($, window, undefined) {
    'use strict';
	
	$.fn.slideParallax = function() {
		return this.each(function() {
			var $container = $(this),
				direction = $container.parents('.dfd-slide-parallax-wrap').data('direction') ? $container.parents('.dfd-slide-parallax-wrap').data('direction') : 'horizontal',
				$handler = $container.find('.handler'),
				$pointer = $handler.find('.pointer'),
				$imageLeft = $container.find('.image-left img'),
				$imageRight = $container.find('.image-right img'),
				$imageContainers = $container.find('.image-left, .image-right'),
				size =  {
					width: null,
					height: null,
					pointer_height: null,
				},
				_offset_x = 0.5,
				_offset_y = 0.5,

				init = function(o) {
					init_sizes();
					bind();

					$(window)
						.on("load resize", function(){
							init_sizes();
							reinit_offset_x();
							reinit_offset_y();
						});
				},

				init_sizes = function() {
					resetSizes();
					getSizes();
					setSizes();
				},

				resetSizes = function() {
					// Reset styles to auto
					$container
						.find('.image-left img, .image-right img')
						.andSelf()
							.css({
								'width': 'auto',
								'height': 'auto'
							});

				},

				getSizes = function() {
					size.pointer_height = $pointer.height();

					var container_w = $container.width();
					var left_image_w = $imageLeft.width();
					var left_image_h = $imageLeft.height();

					var right_image_w = $imageRight.width();
					var right_image_h = $imageRight.height();

					size.width = Math.min(left_image_w, right_image_w, container_w);

					var new_left_image_h = Math.floor(size.width*left_image_h / left_image_w);
					var new_right_image_h = Math.floor(size.width*right_image_h / right_image_w);

					size.height = Math.min(new_left_image_h, new_right_image_h);
				},

				setSizes = function() {
					$container.find('.image-wrap > img')
							.css({
								display: 'block',
								position: 'absolute',
								//top: '0'
							})
						.andSelf()
							.css({
								width: size.width,
								height: size.height
							});

					var half_width = Math.round(size.width / 2);
					var half_height = Math.round(size.height / 2);
					
					if(direction == 'vertical') {
						$imageContainers.css({
							width: size.width,
							height: half_height
						});
					} else {
						$imageContainers.css({
							width: half_width,
							height: size.height
						});
					}

				},

				bind = function() {

					$container.on('mousedown touchstart',function(e) {
						e.preventDefault();
						//update_position(e);

						$(this).bind('mousemove touchmove', function(e) {
							update_position(e);
						});
					});

					$container.on('mouseup touchend',function(e) {
						$(this).unbind('mousemove touchmove');
					});
				},

				update_position = function(e) {
					var vector = _cursor_position(e);

					_update_offset_y(vector.y);
					_update_offset_x(vector.x);
				},
				_update_offset_y = function(y) {
					if(direction == 'vertical') {
						$handler.css('top', y);
						$imageLeft.parent().css('height', y);
						$imageRight.parent().css('height', size.height - y);
					} else {
						$pointer.css('top', y);
					}
					
					_offset_y = y / size.height;
				},
				_update_offset_x = function(x) {
					if(direction == 'vertical') {
						$pointer.css('left', x);
					} else {
						$handler.css('left', x);
						$imageLeft.parent().css('width', x);
						$imageRight.parent().css('width', size.width - x);
					}

					_offset_x = x / size.width;
				},

				reinit_offset_x = function() {			
					_update_offset_x(Math.floor(_offset_x * size.width));
				},

				reinit_offset_y = function() {			
					_update_offset_y(Math.floor(_offset_y * size.height));
				},

				_cursor_position = function(e) {
					var vector = {x: null, y: null};
					var event;

					if (e.type == 'touchmove') {
						e.stopImmediatePropagation();
						event = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
					} else {
						event = e;
					}

					var offset = $container.offset(),
						containerHeight = $container.height();

					vector.x = event.pageX - offset.left;
					vector.y = event.pageY - offset.top;

					var setY = null;
					var minY = 0;
					var maxY = containerHeight;

					if ( (vector.y > minY) && (vector.y < maxY) ) {
						setY = vector.y;
					} else if (vector.y <= minY) {
						setY = minY;
					} else if (vector.y >= maxY) {
						setY = maxY;
					}

					var setX = null;
					var minX = parseInt($handler.width() / 2) + 1;
					
					var maxX = $container.width() - parseInt($handler.width() / 2);
					
					if(direction == 'vertical') {
						minX = 0;
						maxX = $container.width();
					}

					if (vector.x > minX && vector.x < maxX) {
						setX = vector.x;
					} else if (vector.x <= minX) {
						setX = minX;
					} else if (vector.x >= maxX) {
						setX = maxX;
					}

					return {x: setX, y: setY};			
				};
			
			init();
		});
	};
})(jQuery, window);

// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // div containing strings
        this.stringsElement = this.options.stringsElement;

        // input strings of text
        this.strings = this.options.strings;
		
		this.stringsCss = [];

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]=i;

                // shuffle the array if true
                if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            var self = this;
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
				
				if(!strings || strings.length < 1 || strings == '')
					strings = this.stringsElement.find('span');
				
                $.each(strings, function(key, value){
					self.stringsCss.push($(value).attr('style'));
                    self.strings.push($(value).html());
                });
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
							self.el.attr('style',self.stringsCss[self.arrayPos]);
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }
        /**
         * Shuffles the numbers in the given array.
         * @param {Array} array
         * @returns {Array}
         */
        ,shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
            return array;
        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);

/*
jquery-circle-progress - jQuery Plugin to draw animated circular progress bars

URL: http://kottenator.github.io/jquery-circle-progress/
Author: Rostyslav Bryzgunov <kottenator@gmail.com>
Version: 1.1.3
License: MIT
*/
!function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw()},initWidget:function(){var t=this.canvas=this.canvas||i("<canvas>").prependTo(this.el)[0];t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d")},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if(a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,h=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],o=n.createLinearGradient.apply(n,h),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),o.addColorStop(u,d)}this.arcFill=o}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;1>i&&(t.save(),t.beginPath(),0>=i?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}}(jQuery);
/*! odometer 0.4.7 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    r = '<span class="odometer-value"></span>', o = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + r + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + o + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", k = 0, h = /^\(?([^)]*)\)?(?:(.)(D*)(d*))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, l = 1e3 / i, b = 1e3 / a, p = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, q = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, m = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, t = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.children[0]
    }, v = function(a, b) {
        return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
    }, s = function(a, b) {
        return v(a, b), a.className += " " + b
    }, z = function(a, b) {
        var c;
        return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
    }, u = function() {
        var a, b;
        return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
    }, x = function(a, b) {
        return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
    }, A = function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }, C = !1, (B = function() {
        var a, b, c, d, e;
        if (!C && null != window.jQuery) {
            for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                var b;
                return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                    var c;
                    return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                }
            }(a));
            return e
        }
    })(), setTimeout(B, 0), n = function() {
        function a(b) {
            var c, d, e, g, h, i, k, m, n, o, p = this;
            if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, m = a.options;
            for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
            null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / l / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
            try {
                for (o = ["innerHTML", "innerText", "textContent"], i = 0, k = o.length; k > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                    return Object.defineProperty(p.el, a, {
                        get: function() {
                            var b;
                            return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                        },
                        set: function(a) {
                            return p.update(a)
                        }
                    })
                }(e)
            } catch (q) {
                c = q, this.watchForMutations()
            }
        }
        return a.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, a.prototype.watchForMutations = function() {
            var a, b = this;
            if (null != m) try {
                return null == this.observer && (this.observer = new m(function(a) {
                    var c;
                    return c = b.el.innerText, b.renderInside(), b.render(b.value), b.update(c)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (c) {
                a = c
            }
        }, a.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, a.prototype.stopWatchingMutations = function() {
            var a;
            return null != (a = this.observer) ? a.disconnect() : void 0
        }, a.prototype.cleanValue = function(a) {
            var b;
            return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
        }, a.prototype.bindTransitionEnd = function() {
            var a, b, c, d, e, f, g = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, b = !1, e = p.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                    return b ? !0 : (b = !0, setTimeout(function() {
                        return g.render(), b = !1, z(g.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return f
            }
        }, a.prototype.resetFormat = function() {
            var a, b, d, e, f, g, i, j, k, l;
            if (a = null != (k = this.options.format) ? k : c, a || (a = "d"), f = h.exec(a), !f) throw new Error("Odometer: Unparsable digit format");
            return l = f.slice(1, 5), j = l[0], i = l[1], d = l[2], e = l[3], b = (null != d ? d.length : void 0) || 0, g = b + (null != e ? e.length : void 0) || 0, this.format = {
                repeating: j,
                radix: i,
                precision: g,
                fractional: b
            }
        }, a.prototype.render = function(a) {
            var b, c, d, e, f, g, h;
            for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
            return e.push("odometer"), q || e.push("odometer-no-transitions"), f ? e.push("odometer-theme-" + f) : e.push("odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
        }, a.prototype.formatDigits = function(a) {
            var b, c, d, e, f, g, h, i, j, l, m, n, o;
            if (this.digits = [], this.options.formatFunction)
                for (h = this.options.formatFunction(a), m = h.split("").reverse(), i = 0, l = m.length; l > i; i++) g = m[i], g.match(/[0-9]/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = g, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(g);
            else {
                for (f = Math.abs(a), c = Math.max(this.format.fractional, this.getFractionalDigitCount(f)), c && (f = Math.round(f * Math.pow(10, c))), d = 0; f > 0;) this.addDigit((f % 10).toString(), d >= c), f = Math.floor(f / 10), d += 1, d === c && this.addDigit(".", !0);
                for (e = null != (n = this.options.minIntegerLen) ? n : k, d = j = o = d - c; e > j; d = j += 1) this.addDigit(0, !0);
                0 > a && this.addDigit("-", !0)
            }
        }, a.prototype.update = function(a) {
            var b, c = this;
            return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? s(this.el, "odometer-animating-up") : s(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                return c.el.offsetHeight, s(c.el, "odometer-animating")
            }, 0), this.value = a) : void 0
        }, a.prototype.renderDigit = function() {
            return t(d)
        }, a.prototype.insertDigit = function(a, b) {
            return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
        }, a.prototype.addSpacer = function(a, b, c) {
            var d;
            return d = t(g), d.innerHTML = a, c && s(d, c), this.insertDigit(d, b)
        }, a.prototype.addDigit = function(a, b) {
            var c, d, e, f;
            if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
            if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
            if (b)
                for (e = !1;;) {
                    if (!this.format.repeating.length) {
                        if (e) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), e = !0
                    }
                    if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                    this.addSpacer(c)
                }
            return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
        }, a.prototype.animate = function(a) {
            return q && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
        }, a.prototype.animateCount = function(a) {
            var c, d, e, f, g, h = this;
            if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
                var i, j, k;
                return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
            })()
        }, a.prototype.getDigitCount = function() {
            var a, b, c, d, e, f;
            for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
            return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
        }, a.prototype.getFractionalDigitCount = function() {
            var a, b, c, d, e, f, g;
            for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), null == c ? e[a] = 0 : e[a] = c[1].length;
            return Math.max.apply(Math, e)
        }, a.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, a.prototype.animateSlide = function(a) {
            var b, c, d, f, g, h, i, j, l, m, n, o, p, q, r, t, u, v, w, x, y, z, B, C, D, E, F, G, H;
            if (u = this.value, j = Math.max(this.format.fractional, this.getFractionalDigitCount(u, a)), j && (a = Math.round(a * Math.pow(10, j)), u = Math.round(u * Math.pow(10, j))), d = a - u) {
                for (this.bindTransitionEnd(), r = null != (F = this.options.minIntegerLen) ? F : k, f = Math.max(this.getDigitCount(u, a), r + j), g = [], b = 0, n = x = 0; f >= 0 ? f > x : x > f; n = f >= 0 ? ++x : --x) {
                    if (v = A(u / Math.pow(10, f - n - 1)), i = A(a / Math.pow(10, f - n - 1)), h = i - v, Math.abs(h) > this.MAX_VALUES) {
                        for (m = [], o = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = v; h > 0 && i > c || 0 > h && c > i;) m.push(Math.round(c)), c += o;
                        m[m.length - 1] !== i && m.push(i), b++
                    } else m = function() {
                        H = [];
                        for (var a = v; i >= v ? i >= a : a >= i; i >= v ? a++ : a--) H.push(a);
                        return H
                    }.apply(this);
                    for (n = y = 0, B = m.length; B > y; n = ++y) l = m[n], m[n] = Math.abs(l % 10);
                    g.push(m)
                }
                for (this.resetDigits(), G = g.reverse(), n = z = 0, C = G.length; C > z; n = ++z)
                    for (m = G[n], this.digits[n] || this.addDigit(" ", n >= j), null == (w = this.ribbons)[n] && (w[n] = this.digits[n].querySelector(".odometer-ribbon-inner")), this.ribbons[n].innerHTML = "", 0 > d && (m = m.reverse()), p = E = 0, D = m.length; D > E; p = ++E) l = m[p], t = document.createElement("div"), t.className = "odometer-value", t.innerHTML = l, this.ribbons[n].appendChild(t), p === m.length - 1 && s(t, "odometer-last-value"), 0 === p && s(t, "odometer-first-value");
                return 0 > v && this.addDigit("-"), q = this.inside.querySelector(".odometer-radix-mark"), null != q && q.parent.removeChild(q), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
            }
        }, a
    }(), n.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
        var a, b, c, d, e;
        if (window.odometerOptions) {
            d = window.odometerOptions, e = [];
            for (a in d) b = d[a], e.push(null != (c = n.options)[a] ? (c = n.options)[a] : c[a] = b);
            return e
        }
    }, 0), n.init = function() {
        var a, b, c, d, e, f;
        if (null != document.querySelectorAll) {
            for (b = document.querySelectorAll(n.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new n({
                el: a,
                value: null != (e = a.innerText) ? e : a.textContent
            }));
            return f
        }
    }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && n.options.auto !== !1 && n.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return n.options.auto !== !1 ? n.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return n
    }) : "undefined" != typeof exports && null !== exports ? module.exports = n : window.Odometer = n
}).call(this);

odometerOptions = { auto: false };
/** * Stop an iframe or HTML5 <video> from playing * @param  {Element} element The element that contains the video */var DFD_VideoModule = DFD_VideoModule || {};(function($){	var VideoModule_VimeoPlayer = function(iframe){		var iframeEl = iframe;		var tag = document.createElement('script');		tag.src = "https://f.vimeocdn.com/js/froogaloop2.min.js";		tag.id = "dfd-vimeo-api-script";		var firstScriptTag = document.getElementsByTagName('script')[0];		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);		play = function(){			var player = $f(iframeEl[0]);			player.addEvent('ready', function(){				player.api("play");			});		};		setIframe = function(id){			iframeEl = id;		};		var public = {			setIframe: setIframe,			play: play		};		return public;	};	var VideoModule_YoutubePlayer = function(iframe){		var iframeEl = iframe;		play = function(){			/*$('.dfd-fullscreen-video-container iframe').each(function(){				var player = $(this);				player[0].src += '&autoplay=1';			});*/			iframeEl[0].src += '&autoplay=1';		};		setIframe = function(id){			iframeEl = id;		};		var public = {			setIframe: setIframe,			play: play		};		return public;	};	DFD_VideoModule = {		block_id: "",		id: "",		$video_container: "",		iframe: [		],		player: [		],		getTypePlayer: function(href, iframe){			if(!href || href == '' || href == '#'){				alert('No valid video url were added in Video module settings. Please specify the valid video url');				return;			}			var isVimeo = href.search("player.vimeo.com");			if(isVimeo >= 0){				this.player["#" + this.id] = new VideoModule_VimeoPlayer(iframe);			} else {				this.player["#" + this.id] = new VideoModule_YoutubePlayer(iframe);			}		},		init: function(id, block_id){			this.id = id;			this.block_id = block_id;			this.iframe["#" + id] = $("#" + id).find("iframe");			var url = $(this.iframe["#" + id]).attr("src");			this.getTypePlayer(url, this.iframe["#" + id]);			this.addLightBox();			this.addEvents();		},		addEvents: function(){			var self = this;			$("#" + this.block_id + " a.dfd-video-link").on("click", function(e){				id = $(this).attr("href");				e.preventDefault();				var $animation = $(this).data("animation");				/*self.$video_container.fadeIn('slow');				$animation ? $animation : "none";				console.log($animation);*/				self.$video_container.find(".fluidvids").removeClass("LightBoxVideoModule_Hide");				self.$video_container.fadeIn("slow").find(".fluidvids").removeClass("LightBoxVideoModule_Show");				if($animation){					self.$video_container.find(".fluidvids").velocity($animation, {display: 'auto'});					self.$video_container.css("display", "block");				} else {					self.$video_container.find(".fluidvids").velocity("transition.slideUpBigIn", {display: 'auto'});					self.$video_container.css("display", "block");				}/*				console.log(self.settings[id]);				console.log(self.id);				console.log(self.block_id);				$(self.$video_container[0]).removeAttr("id");*/				$(self.$video_container[0]).attr("id", id.replace("#", ""));				/*$(self.$video_container[0]).prop(""+self.settings[id]+"");*/				self.$video_container.find(".fluidvids").append(self.iframe[id]);				self.player[id].play();			});			$("#" + this.block_id + " a.dfd-video-image-thumb").on("click", function(e){				e.preventDefault();				id = $(this).attr("href");				$(this).parent().addClass('active');				$(this).fadeOut('slow');				self.player[id].play();			});			this.$video_container.find('a.fullscreen-video-close').on('click', function(e){				e.preventDefault();/*				self.$video_container.find(".fluidvids iframe").velocity("transition.slideDownBigIn", {display: 'none'});				self.$video_container.find(".fluidvids").css({"transform": "translateY(50px)","opacity" : "0", "transition": "all .5s"})*/				self.$video_container.find(".fluidvids").addClass("LightBoxVideoModule_Hide");				setTimeout(function(){					self.$video_container.fadeOut("slow").find('iframe').remove();				}, 500);			});		},		addLightBox: function(){			if($('.dfd-fullscreen-video-container').length == 0){				this.$video_container = $('<div class="dfd-fullscreen-video-container video_module" ><div class="fluidvids"></div><a href="#close-video" class="fullscreen-video-close">×</a></div>');				this.$video_container.appendTo('body');			} else {				this.$video_container = $('.dfd-fullscreen-video-container');			}		}	};})(jQuery)
/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;(function( $, window, document, undefined )
{
	var isTouch		  = 'ontouchstart' in window,
		eStart		  = isTouch ? 'touchstart'	: 'mousedown',
		eMove		  = isTouch ? 'touchmove'	: 'mousemove',
		eEnd		  = isTouch ? 'touchend'	: 'mouseup',
		eCancel		  = isTouch ? 'touchcancel'	: 'mouseup',
		secondsToTime = function( secs )
		{
			var hoursDiv = secs / 3600, hours = Math.floor( hoursDiv ), minutesDiv = secs % 3600 / 60, minutes = Math.floor( minutesDiv ), seconds = Math.ceil( secs % 3600 % 60 );
			if( seconds > 59 ) { seconds = 0; minutes = Math.ceil( minutesDiv ); }
			if( minutes > 59 ) { minutes = 0; hours = Math.ceil( hoursDiv ); }
			return ( hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0'+hours+':' : hours+':' ) + ( minutes.toString().length < 2 ? '0'+minutes : minutes ) + ':' + ( seconds.toString().length < 2 ? '0'+seconds : seconds );
		},
		canPlayType	  = function( file )
		{
			var audioElement = document.createElement( 'audio' );
			return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
		};

	$.fn.audioPlayer = function( params )
	{
		var params		= $.extend( { classPrefix: 'audioplayer', strPlay: 'Play', strPause: 'Pause', strVolume: 'Volume' }, params ),
			cssClass	= {},
			cssClassSub =
			{
				playPause:	 	'playpause',
				playing:		'playing',
				stopped:		'stopped',
				time:		 	'time',
				timeCurrent:	'time-current',
				timeDuration: 	'time-duration',
				bar: 			'bar',
				barLoaded:		'bar-loaded',
				barPlayed:		'bar-played',
				volume:		 	'volume',
				volumeButton: 	'volume-button',
				volumeAdjust: 	'volume-adjust',
				noVolume: 		'novolume',
				muted: 			'muted',
				mini: 			'mini'
			};

		for( var subName in cssClassSub )
			cssClass[ subName ] = params.classPrefix + '-' + cssClassSub[ subName ];

		this.each( function()
		{
			if( $( this ).prop( 'tagName' ).toLowerCase() != 'audio' )
				return false;

			var $this	   = $( this ),
				audioFile  = $this.attr( 'src' ),
				isAutoPlay = $this.get( 0 ).getAttribute( 'autoplay' ), isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? true : false,
				isLoop	   = $this.get( 0 ).getAttribute( 'loop' ),		isLoop	   = isLoop		=== '' || isLoop	 === 'loop'		? true : false,
				isSupport  = false;

			if( typeof audioFile === 'undefined' )
			{
				$this.find( 'source' ).each( function()
				{
					audioFile = $( this ).attr( 'src' );
					if( typeof audioFile !== 'undefined' && canPlayType( audioFile ) )
					{
						isSupport = true;
						return false;
					}
				});
			}
			else if( canPlayType( audioFile ) ) isSupport = true;

			var thePlayer = $( '<div class="' + params.classPrefix + '">' + ( isSupport ? $( '<div>' ).append( $this.eq( 0 ).clone() ).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() +'" loop="' + isLoop.toString() + '" />' ) + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>' ),
				theAudio  = isSupport ? thePlayer.find( 'audio' ) : thePlayer.find( 'embed' ), theAudio = theAudio.get( 0 );

			if( isSupport )
			{
				thePlayer.find( 'audio' ).css( { 'width': 0, 'height': 0, 'visibility': 'hidden' } );
				thePlayer.append( '<div class="' + cssClass.time + ' ' + cssClass.timeCurrent + '"></div><div class="' + cssClass.bar + '"><div class="' + cssClass.barLoaded + '"></div><div class="' + cssClass.barPlayed + '"></div></div><div class="' + cssClass.time + ' ' + cssClass.timeDuration + '"></div><div class="' + cssClass.volume + '"><div class="' + cssClass.volumeButton + '" title="' + params.strVolume + '"><a href="#">' + params.strVolume + '</a></div><div class="' + cssClass.volumeAdjust + '"><div><div></div></div></div></div>' );

				var theBar			  = thePlayer.find( '.' + cssClass.bar ),
					barPlayed	 	  = thePlayer.find( '.' + cssClass.barPlayed ),
					barLoaded	 	  = thePlayer.find( '.' + cssClass.barLoaded ),
					timeCurrent		  = thePlayer.find( '.' + cssClass.timeCurrent ),
					timeDuration	  = thePlayer.find( '.' + cssClass.timeDuration ),
					volumeButton	  = thePlayer.find( '.' + cssClass.volumeButton ),
					volumeAdjuster	  = thePlayer.find( '.' + cssClass.volumeAdjust + ' > div' ),
					volumeDefault	  = 0,
					adjustCurrentTime = function( e )
					{
						theRealEvent		 = isTouch ? e.originalEvent.touches[ 0 ] : e;
						theAudio.currentTime = Math.round( ( theAudio.duration * ( theRealEvent.pageX - theBar.offset().left ) ) / theBar.width() );
					},
					adjustVolume = function( e )
					{
						theRealEvent	= isTouch ? e.originalEvent.touches[ 0 ] : e;
						theAudio.volume = Math.abs( ( theRealEvent.pageX - ( volumeAdjuster.offset().left + volumeAdjuster.width() ) ) / volumeAdjuster.width() );
					},
					updateLoadBar = function()
					{
						var interval = setInterval( function()
						{
							if( theAudio.buffered.length < 1 ) return true;
							barLoaded.width( ( theAudio.buffered.end( 0 ) / theAudio.duration ) * 100 + '%' );
							if( Math.floor( theAudio.buffered.end( 0 ) ) >= Math.floor( theAudio.duration ) ) clearInterval( interval );
						}, 100 );
					};

				var volumeTestDefault = theAudio.volume, volumeTestValue = theAudio.volume = 0.111;
				if( Math.round( theAudio.volume * 1000 ) / 1000 == volumeTestValue ) theAudio.volume = volumeTestDefault;
				else thePlayer.addClass( cssClass.noVolume );

				timeDuration.html( '&hellip;' );
				timeCurrent.html( secondsToTime( 0 ) );

				theAudio.addEventListener( 'loadeddata', function()
				{
					updateLoadBar();
					timeDuration.html( $.isNumeric( theAudio.duration ) ? secondsToTime( theAudio.duration ) : '&hellip;' );
					volumeAdjuster.find( 'div' ).width( theAudio.volume * 100 + '%' );
					volumeDefault = theAudio.volume;
				});

				theAudio.addEventListener( 'timeupdate', function()
				{
					timeCurrent.html( secondsToTime( theAudio.currentTime ) );
					barPlayed.width( ( theAudio.currentTime / theAudio.duration ) * 100 + '%' );
				});

				theAudio.addEventListener( 'volumechange', function()
				{
					volumeAdjuster.find( 'div' ).width( theAudio.volume * 100 + '%' );
					if( theAudio.volume > 0 && thePlayer.hasClass( cssClass.mute ) ) thePlayer.removeClass( cssClass.mute );
					if( theAudio.volume <= 0 && !thePlayer.hasClass( cssClass.mute ) ) thePlayer.addClass( cssClass.mute );
				});

				theAudio.addEventListener( 'ended', function()
				{
					thePlayer.removeClass( cssClass.playing ).addClass( cssClass.stopped );
				});

				theBar.on( eStart, function( e )
				{
					adjustCurrentTime( e );
					theBar.on( eMove, function( e ) { adjustCurrentTime( e ); } );
				})
				.on( eCancel, function()
				{
					theBar.unbind( eMove );
				});

				volumeButton.on( 'click', function()
				{
					if( thePlayer.hasClass( cssClass.muted ) )
					{
						thePlayer.removeClass( cssClass.muted );
						theAudio.volume = volumeDefault;
					}
					else
					{
						thePlayer.addClass( cssClass.muted );
						volumeDefault = theAudio.volume;
						theAudio.volume = 0;
					}
					return false;
				});

				volumeAdjuster.on( eStart, function( e )
				{
					adjustVolume( e );
					volumeAdjuster.on( eMove, function( e ) { adjustVolume( e ); } );
				})
				.on( eCancel, function()
				{
					volumeAdjuster.unbind( eMove );
				});
			}
			else thePlayer.addClass( cssClass.mini );

			thePlayer.addClass( isAutoPlay ? cssClass.playing : cssClass.stopped );

			thePlayer.find( '.' + cssClass.playPause ).on( 'click', function()
			{
				if( thePlayer.hasClass( cssClass.playing ) )
				{
					$( this ).attr( 'title', params.strPlay ).find( 'a' ).html( params.strPlay );
					thePlayer.removeClass( cssClass.playing ).addClass( cssClass.stopped );
					isSupport ? theAudio.pause() : theAudio.Stop();
				}
				else
				{
					$( this ).attr( 'title', params.strPause ).find( 'a' ).html( params.strPause );
					thePlayer.addClass( cssClass.playing ).removeClass( cssClass.stopped );
					isSupport ? theAudio.play() : theAudio.Play();
				}
				return false;
			});

			$this.replaceWith( thePlayer );
		});
		return this;
	};
})( jQuery, window, document );
(function ($) {
	"use strict";
	$.fn.changeWords = function (options) {
		var settings = $.extend({
			time: 1500,
			animate: "zoomIn",
			afterChangeAnimate: "zoomIn",
			selector: "span"
		}, options);
		var wordCount = $(settings.selector, this).size();
		var words = $(settings.selector, this);
		words.filter(function () {
			return $(this).attr("data-id") != "1"
		}).css("display", "none");
		var count = 1;
		setInterval(function () {
			++count;
			var wordOrder = count;
			words.filter(function () {
				return $(this).attr("data-id") != wordOrder
			}).removeClass(settings.animate).addClass("dfd-text-animated " + settings.afterChangeAnimate).trigger('reinit-chaffle');
				words.filter(function () {
					return $(this).attr("data-id") != wordOrder
				}).css("display", "none").removeClass();
				words.filter(function () {
					return $(this).attr("data-id") == wordOrder
				}).addClass("dfd-text-animated " + settings.animate).css({"display": "inline-block",'opacity':'1'}).trigger('init-chaffle');
			if (count == wordCount) {
				count = 0;
			}
		}, settings.time);
	}
}(jQuery));
/*---------------------------------
 DOM mutation observer
 -----------------------------------*/
(function ($) {
	'use strict';
	$.fn.observeDOM = function(callback){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener,
			$self = $(this)[0];

		if($self) {
			if( MutationObserver ){
				// define a new observer
				var obs = new MutationObserver(function(mutations){
					if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
						callback();
				});
				// have the observer observe foo for changes in children
				obs.observe( $self, { childList:true });
			} else if( eventListenerSupported ){
				$self.addEventListener('DOMNodeInserted', callback, false);
				$self.addEventListener('DOMNodeRemoved', callback, false);
			}
		}
		return this;
	};
})(jQuery);
/* Equal width */
(function($){
	"use strict";
	/* Pricing table columns width */
	$.fn.dfdEqWidth = function() {
		var $columns = $(this);
		var width = (100 / $columns.length);
		$columns.css('width', width+'%');
		
		return this;
	};
})(jQuery);

(function($){
	"use strict";
	$.fn.products_thumbnails_carousel = function(num, ver) {
		var obj = $(this);
		var responsive_point_one = (num > 1) ? num - 1 : 1;
		var responsive_point_two = (responsive_point_one > 1) ? responsive_point_one - 1 : 1;
		obj.slick({
			infinite: true,
			slidesToShow: num,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			autoplay: true,
			autoplaySpeed: 2000,
			vertical: ver,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 800,
					settings: {
						slidesToShow: responsive_point_one,
						slidesToScroll: 1,
						infinite: true,
						arrows: false,
						dots: false,
						vertical: false
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: responsive_point_two,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						vertical: false
					}
				}
			]
		});
		
		return this;
	};
})(jQuery);
(function($) {
	$(window).load(function() {
		$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
	
		if ( !navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) && $.browser.chrome && $('body').hasClass('dfd-smooth-scroll') ) {
//		if ( $.browser.chrome && $('body').hasClass('dfd-smooth-scroll') ) {
			(function () {
				function init() {
					if (document.body) {
						var a = document.body,
							b = document.documentElement,
							c = window.innerHeight,
							d = a.scrollHeight;
						if (root = 0 <= document.compatMode.indexOf("CSS") ? b : a, activeElement = a, initdone = !0, top != self) frame = !0;
						else if (d > c && (a.offsetHeight <= c || b.offsetHeight <= c)) {
							var e = !1,
								d = function() {
									e || b.scrollHeight == document.height || (e = !0, setTimeout(function() {
										b.style.height = document.height + "px", e = !1
									}, 500))
								};
							b.style.height = "auto", setTimeout(d, 10), addEvent("DOMNodeInserted", d), addEvent("DOMNodeRemoved", d), root.offsetHeight <= c && (c = document.createElement("div"), c.style.clear = "both", a.appendChild(c))
						} - 1 < document.URL.indexOf("mail.google.com") && (c = document.createElement("style"), c.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || b).appendChild(c)), fixedback || disabled || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll")
					}
				}

				function scrollArray(a, b, c, d) {
					if (d || (d = 1e3), directionCheck(b, c), acceleration) {
						var e = +new Date - lastScroll;
						accelDelta > e && (e = (1 + 30 / e) / 2, e > 1 && (e = Math.min(e, accelMax), b *= e, c *= e)), lastScroll = +new Date
					}
					if (que.push({
							x: b,
							y: c,
							lastX: 0 > b ? .99 : -.99,
							lastY: 0 > c ? .99 : -.99,
							start: +new Date
						}), !pending) {
						if($('body').hasClass('top-inner-page-initializing') || $('#layout').hasClass('one-page-scroll')) {
							return;
						}
						var f = a === document.body,
							g = function() {
								for (var e = +new Date, h = 0, i = 0, j = 0; j < que.length; j++) {
									var k = que[j],
										l = e - k.start,
										m = l >= animtime,
										n = m ? 1 : l / animtime;
									pulseAlgorithm && (n = pulse(n)), l = k.x * n - k.lastX >> 0, n = k.y * n - k.lastY >> 0, h += l, i += n, k.lastX += l, k.lastY += n, m && (que.splice(j, 1), j--)
								}
								f ? window.scrollBy(h, i) : (h && (a.scrollLeft += h), i && (a.scrollTop += i)), b || c || (que = []), que.length ? requestFrame(g, a, d / framerate + 1) : pending = !1
							};
						requestFrame(g, a, 0), pending = !0
					}
				}

				function wheel(a) {
					initdone || init();
					var b = a.target,
						c = overflowingAncestor(b);
					if (!c || a.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(b, "embed") && /\.pdf/i.test(b.src)) return !0;
					var b = a.wheelDeltaX || 0,
						d = a.wheelDeltaY || 0;
					b || d || (d = a.wheelDelta || 0), 1.2 < Math.abs(b) && (b *= stepsize / 120), 1.2 < Math.abs(d) && (d *= stepsize / 120), scrollArray(c, -b, -d), void a.preventDefault()
				}

				function keydown(a) {
					var b = a.target,
						c = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== key.spacebar;
					if (/input|textarea|select|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c || isNodeName(b, "button") && a.keyCode === key.spacebar) return !0;
					var d;
					d = b = 0;
					var c = overflowingAncestor(activeElement),
						e = c.clientHeight;
					switch (c == document.body && (e = window.innerHeight), a.keyCode) {
						case key.up:
							d = -arrowscroll;
							break;
						case key.down:
							d = arrowscroll;
							break;
						case key.spacebar:
							d = a.shiftKey ? 1 : -1, d = .9 * -d * e;
							break;
						case key.pageup:
							d = .9 * -e;
							break;
						case key.pagedown:
							d = .9 * e;
							break;
						case key.home:
							d = -c.scrollTop;
							break;
						case key.end:
							e = c.scrollHeight - c.scrollTop - e, d = e > 0 ? e + 10 : 0;
							break;
						case key.left:
							b = -arrowscroll;
							break;
						case key.right:
							b = arrowscroll;
							break;
						default:
							return !0
					}
					scrollArray(c, b, d), a.preventDefault()
				}

				function mousedown(a) {
					activeElement = a.target
				}

				function setCache(a, b) {
					for (var c = a.length; c--;) cache[uniqueID(a[c])] = b;
					return b
				}

				function overflowingAncestor(a) {
					var b = [],
						c = root.scrollHeight;
					do {
						var d = cache[uniqueID(a)];
						if (d) return setCache(b, d);
						if (b.push(a), c === a.scrollHeight) {
							if (!frame || root.clientHeight + 10 < c) return setCache(b, document.body)
						} else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a)
					} while (a = a.parentNode)
				}

				function addEvent(a, b, c) {
					window.addEventListener(a, b, c || !1)
				}

				function removeEvent(a, b, c) {
					window.removeEventListener(a, b, c || !1)
				}

				function isNodeName(a, b) {
					return (a.nodeName || "").toLowerCase() === b.toLowerCase()
				}

				function directionCheck(a, b) {
					a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (direction.x !== a || direction.y !== b) && (direction.x = a, direction.y = b, que = [], lastScroll = 0)
				}

				function pulse_(a) {
					var b;
					return a *= pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b)), b * pulseNormalize
				}

				function pulse(a) {
					return a >= 1 ? 1 : 0 >= a ? 0 : (1 == pulseNormalize && (pulseNormalize /= pulse_(1)), pulse_(a))
				}

				var framerate = 150,
					animtime = 800,
					stepsize = 150,
					pulseAlgorithm = true,
					pulseScale = 6,
					pulseNormalize = 1,
					acceleration = !0,
					accelDelta = 20,
					accelMax = 1,
					keyboardsupport = !0,
					disableKeyboard = !1,
					arrowscroll = 50,
					exclude = "",
					disabled = !1,
					frame = !1,
					direction = {
						x: 0,
						y: 0
					},
					initdone = !1,
					fixedback = !0,
					root = document.documentElement,
					activeElement, key = {
						left: 37,
						up: 38,
						right: 39,
						down: 40,
						spacebar: 32,
						pageup: 33,
						pagedown: 34,
						end: 35,
						home: 36
					},
					que = [],
					pending = !1,
					lastScroll = +new Date,
					cache = {};

				setInterval(function() {
					cache = {}
				}, 1e4);

				var uniqueID = function() {
						var a = 0;
						return function(b) {
							return b.uniqueID || (b.uniqueID = a++)
						}
					}(),
					requestFrame = function() {
						return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a, b, c) {
							window.setTimeout(a, c || 1e3 / 60)
						}
					}();

				addEvent("mousedown", mousedown), addEvent("mousewheel", wheel, {passive: false}), addEvent("load", init);

			})();
		}
	});
	
})(jQuery);
;
var screen_medium = 800;
(function ($, window, undefined) {
    'use strict';

    $(document).ready(function () {
		$.fn.placeholder ? $('input, textarea').placeholder() : null;
    });

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }
	
})(jQuery, this);

if (!window.requestAnimationFrame) {

	window.requestAnimationFrame = (function () {

		return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

				window.setTimeout(callback, 1000 / 60);

			};

	})();
}

/*---------------------------------
 Correct OS & Browser Check
 -----------------------------------*/

var ua = navigator.userAgent,
    checker = {
        os: {
            iphone: ua.match(/iPhone/),
            ipod: ua.match(/iPod/),
            ipad: ua.match(/iPad/),
            blackberry: ua.match(/BlackBerry/),
            android: ua.match(/(Android|Linux armv6l|Linux armv7l)/),
            linux: ua.match(/Linux/),
            win: ua.match(/Windows/),
            mac: ua.match(/Macintosh/)
        },
        ua: {
            ie: ua.match(/MSIE/),
            ie6: ua.match(/MSIE 6.0/),
            ie7: ua.match(/MSIE 7.0/),
            ie8: ua.match(/MSIE 8.0/),
            ie9: ua.match(/MSIE 9.0/),
            ie10: ua.match(/MSIE 10.0/),
            opera: ua.match(/Opera/),
            firefox: ua.match(/Firefox/),
            chrome: ua.match(/Chrome/),
            safari: ua.match(/(Safari|BlackBerry)/)
        }
    };

(function($) {
	"use strict";
	var dfd_ronneby = window.dfd_ronneby || {};
	
	window.dfd_ronneby = dfd_ronneby;
	
	dfd_ronneby.window = $(window);
	dfd_ronneby.document = $(document);
	dfd_ronneby.windowHeight = dfd_ronneby.window.height();
	dfd_ronneby.windowWidth = dfd_ronneby.window.width();
	dfd_ronneby.scrollbarWidth = 0;
	dfd_ronneby.windowScrollTop = 0;
	dfd_ronneby.sameOrigin = true;
	dfd_ronneby.isSafari = false;
	
	var Modernizr = window.Modernizr;
	
	dfd_ronneby.initSizing = function() {
		var ua = window.navigator.userAgent;
		var ie_version;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			ie_version =  parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			ie_version =  parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
		   // IE 12 => return version number
		   ie_version =  parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}
		
		dfd_ronneby.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		
		try {
			dfd_ronneby.sameOrigin = window.parent.location.host == window.location.host;
		} catch (e) {
			dfd_ronneby.sameOrigin = false;
		}
		
		var recalcWindowOffset = function() {
			dfd_ronneby.windowScrollTop = dfd_ronneby.window.scrollTop();
		};

		dfd_ronneby.document.ready(function() {
			var div = document.createElement('div');

			div.style.overflowY = 'scroll';
			div.style.width =  '50px';
			div.style.height = '50px';

			div.style.visibility = 'hidden';

			document.body.appendChild(div);
			dfd_ronneby.scrollbarWidth = div.offsetWidth - div.clientWidth;
			document.body.removeChild(div);

		});

		var recalcWindowInitHeight = function() {
			dfd_ronneby.windowHeight = dfd_ronneby.window.height();
			dfd_ronneby.windowWidth = dfd_ronneby.window.width() + dfd_ronneby.scrollbarWidth;

			recalcWindowOffset();
		};

		recalcWindowInitHeight();

		recalcWindowOffset();
		
		dfd_ronneby.window
				.on("resize load", recalcWindowInitHeight)
				.on("scroll", recalcWindowOffset);
		
		dfd_ronneby.window.on("load", function() {
			$('body').trigger('reinit-waypoint');
			if(window.top != window.self && $('body').hasClass('single-my-product')) {
				$('#header-container, #footer-wrap, #wpadminbar').hide();
			}
		});
		var timer, el = $('body'),
			flag = false;
		
		dfd_ronneby.window.on('scroll', function() {
			if(!Modernizr.touch) {
				if (!flag) {
					flag = true;
					el.addClass('scrolling');
				}
				clearTimeout(timer);
				timer = setTimeout(function() {
					el.removeClass('scrolling');
					flag = false;
				}, 200);
			}
		});
	};
	
	dfd_ronneby.initfluidvids = function() {
		var init = function() {
			fluidvids.init({selector: 'iframe:not(.dfd-bg-frame)', players: ['www.youtube.com', 'player.vimeo.com']})
		};
		
		dfd_ronneby.document.on('ready', init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initShortcodes = function() {
		var init = function() {
			initPriceList();
			sbDfdTab();
			initImageLayersModule();
			initCountdown();
			initServices();
			initMilestone();
			initHotspot();
			initProgressBar();
			initPieCharts();
			initAnimText();
			initFacts();
			initRowDelimiterBg();
			initContactForm();
			initChaffle();
			initImageModule();
			initDropkick();
			initNewsSlick();
			initNewsIsotope();
			initAudioplayer();
			initFacts();
			initDelimiterShortcode();
			initImageCarousel();
			initClientLogo();
			initDfdTimeline();
		},
		initPriceList = function() {
			var init = function() {
				$('.dfd-price-wrap .dfd-price-block').each(function() {
					var $self = $(this);

					if(!$self.find('.dfd-price-cover')) return;

					var $container = $self.find('.dfd-price-cover'),
						$thumb = $self.find('.thumb-wrap'),
						titleWidth = 0,
						priceWidth = 0,
						titleFont = 0,
						titleLine = 0,
						delimBottom = 0,
						elTextHeight = $self.find('.text-wrap').height(),
						elThumbHeight = $thumb.height();

					if(elTextHeight < elThumbHeight) {
						$self.find('.text-wrap').addClass('small-img');
						$self.css("height", elThumbHeight + "px");
					}

					if($container.find('.price-title')) {
						titleWidth = $container.find('.price-title').width();
							// Height of delimiter	
						titleFont = parseFloat($container.find('.price-title').css('font-size'));
						titleLine = parseFloat($container.find('.price-title').css('line-height'));
						delimBottom = (titleLine - titleFont) / 2;
					};
					if($container.find('>.amount')) {
						priceWidth = $container.find('.amount').width();
					}
					if($("body").hasClass("rtl")) {
						$container.find('.price-delimeter').css({
							'right': titleWidth,
							'left': priceWidth,
							'bottom': delimBottom,
							'padding-left': priceWidth + 20
						});
					}else {
						$container.find('.price-delimeter').css({
							'left': titleWidth,
							'right': priceWidth,
							'bottom': delimBottom
						});
						$container.find('.price-title').css({
							'padding-right': priceWidth + 20
						});
					};
					$container.find('.price-delimeter').css({
						'left': titleWidth,
						'right': priceWidth,
						'bottom': delimBottom
					});
				});
			};
			init();

			dfd_ronneby.window.on('load resize', init);

			$('body').on('tabs-reinited', function() {
				setTimeout(function() {
					init();
				},200);
			});
		},
		sbDfdTab = function() {
			$(".dfd_tabs_block .dfd_tta_tabs").find(".vc_tta-tabs-list").on("click", ".vc_tta-tab:not(.vc_active)", function(){
				$('body').trigger('tabs-reinited');

				$(this).siblings().removeClass("vc_active");
				$(this).addClass("vc_active");

				var id = $(this).find("a").attr("href");

				var main_block = $(this).parent().parent().parent();

				var next_active_tab = main_block.find(id),
					next_active_tabHeight = next_active_tab.height();

				setTimeout(function(){
					main_block.find(".vc_tta-panels .vc_tta-panel").removeClass("vc_active");
					main_block.find(".vc_tta-panel-body").attr("style", "");
					next_active_tab.addClass("vc_active");
					if(dfd_ronneby.windowWidth > 767) {
						next_active_tab.parent().css({height: next_active_tabHeight});
					}
				},150);
			});
				/*max width 767*/
			$('.dfd_tabs_block .dfd_tta_tabs').find('.vc_tta-panel').on('click touchend', '.vc_tta-panel-title a', function() {
				$('body').trigger('tabs-reinited');

				var main_block = $(this).parent().parent().parent();

				main_block.siblings().removeClass("vc_active");
				main_block.addClass("vc_active");
			});
			var init = function() {
				$('.dfd_tabs_block').each(function() {
					var tabContainer = $(this).find('.dfd_tta_tabs'),
						activeTab = tabContainer.find('.vc_tta-panels-container .vc_tta-panels .vc_tta-panel.vc_active');

					if(dfd_ronneby.windowWidth > 767) {
						activeTab.parent().css({'height': activeTab.find('.vc_tta-panel-body').height()});
					} else {
						activeTab.parent().css({'height': 'auto'});
					}
				});
			};
			$('body').on('click','.dfd_tabs_block .dfd_tta_tabs .vc_tta-tabs-list a',function() {
				var selector = $(this).data('vc-target'),
					$container = $(selector),
					$panel = $container.find('.vc_tta-panel-body');

				$container.parent().css({'height': $panel.height()});
			});

			dfd_ronneby.window.on('load resize', function() {
				init();
			});
			$('body').on('post-load', init);
		},
		initImageLayersModule = function() {
			$('.dfd-image-layers-wrap').each(function() {
				var $container = $(this),
					layerWidth = 0,
					initImageLayers = function() {
						if(typeof $.fn.equalHeights != 'undefined') {
							$container.find('.dfd-layer-container').equalHeights();
						}

						if(typeof $.fn.waypoint != 'undefined') {
							$container.waypoint(function () {
								$container.addClass('layer-animate');
							}, {triggerOnce: true, offset: '70%'});
						}
					},
					imageSizing = function() {
						$container.find('.dfd-layer-item').each(function(){
							var $el = $(this);

							if($el.width() > layerWidth) {
								layerWidth = $el.width();
							}
						});

						$container.css({'width': layerWidth});
					};

				dfd_ronneby.window.on('load', function() {
					imageSizing();
					initImageLayers();
				});

				dfd_ronneby.window.on('resize', initImageLayers);

				$('body').on('post-load', function() {
					imageSizing();
					initImageLayers();
				});
			});
		},
		initCountdown = function() {
			$('.dfd-countdown-wrap').each(function() {
				var $self = $(this),
					date = $self.data('date'),
					onfinishHtml = $self.data('finish-text'),
					html = $self.find('.dfd-countdown-html').html();

				$self.find('.dfd-countdown-html').remove();

				$self.countdown(date).on('update.countdown', function (event) {
					$(this).html(event.strftime(html));
					/*$(this).countdown('stop');*/
				}).on('finish.countdown', function () {
					$(this).html('<h3>' + onfinishHtml + '</h3>');
				});
			});
		},
		initServices = function() {
			var init = function() {
				$('.dfd-service-module-wrap').each(function(){
					$(this).find('.dfd-equalize-height').equalHeights();
				});
				
				if(dfd_ronneby.isSafari) {
					$('.dfd-service-module-wrap').addClass('dfd-services-safari');
				}
			};
			dfd_ronneby.window.on('load resize', init);
		},
		initMilestone = function() {
			var init = function() {
				$('.dfd-milestone-wrap').each(function(){
					$(this).find('.dfd-equalize-height').equalHeights();
				});
			};
			init();
			setTimeout(function() {
				init();
			}, 100);
			dfd_ronneby.window.on('resize', init);
		},
		initHotspot = function() {
			var initOffsets = function() {
				$('.dfd-hotspot-shortcode').each(function() {
					$(this).find('.HotspotPlugin_Hotspot').each(function(index) {
						var $self = $(this);
						if(!Modernizr.touch && dfd_ronneby.windowWidth > 800) {
							if(!$self.hasClass('animation-done')) {
								$self.css('opacity', '0');
							}
							$self.waypoint(function () {
								if(!$self.hasClass('animation-done')) {
									$self.addClass('animation-done')
										.velocity('transition.slideUpBigIn',{
											display: 'block',
											opacity: '1',
											delay: index * 200,
											complete: function(el) {
												$(el).css({
													'-webkit-transform': 'none',
													'-moz-transform': 'none',
													'-o-transform': 'none',
													'transform': 'none'
												});
											}
										});
								}
							}, {offset: '95%'});
						}
					});
				});
				$('.dfd-hotspot-shortcode .HotspotPlugin_Hotspot').each(function(index) {
					var $self = $(this),
						$tooltip = $self.find('> div'),
						selfWidth = $tooltip.outerWidth(),
						selfOffset = $tooltip.offset();

					$tooltip.removeClass('dfd-hotspot-left').removeClass('dfd-hotspot-right');

					if(selfOffset.left <= 0 && selfOffset.left + selfWidth > dfd_ronneby.windowWidth) {
						$tooltip.addClass('dfd-hotspot-outsite');
					} else if(selfOffset.left <= 0) {
						$tooltip.addClass('dfd-hotspot-left');
					} else if(selfOffset.left + selfWidth > dfd_ronneby.windowWidth) {
						$tooltip.addClass('dfd-hotspot-right');
					}
				});
			};
			$('.dfd-hotspot-shortcode').each(function() {
				var $self = $(this),
					hotspotClass = $self.data('hotspot-class') ? $self.data('hotspot-class') : 'HotspotPlugin_Hotspot',
					hotspotContent = $self.data('hotspot-content') ? $self.data('hotspot-content') : '',
					action = $self.data('action') ? $self.data('action') : 'hover';

				if(hotspotContent != '' && !$self.find('.dfd-hotspot-image-cover').hasClass('dfd-htospot-inited')) {
					$self.find('.dfd-hotspot-image-cover').addClass('dfd-htospot-inited').hotspot({
						hotspotClass: hotspotClass,
						interactivity: action,
						data: decodeURIComponent(hotspotContent)
					});
				}
			});
			$('body').on('dfd-hotspot-inited', initOffsets);
			initOffsets();
			dfd_ronneby.window.on('resize', initOffsets);
		},
		initProgressBar = function() {
			if ('undefined' !== typeof($.fn.waypoint)) {
				$('.dfd-progressbar').each(function () {
					var current = $(this);
					$(this).waypoint(function () {
						var bar = current.find('.meter'),
							val = bar.data('percentage-value');

						setTimeout(function () {
							bar.css({"width": val + '%'});
						}, 100);
					}, {offset: '85%'});
				});
			}
		},
		initPieCharts = function() {
			$('.dfd-piecharts').each(function() {
				var $current_chart = $(this);
				$current_chart.on('on-waypoin', function () {
					if (!$current_chart.hasClass('animated')) {
						var $animation = {duration: 1700};
						var count_html = $current_chart.find('.piecharts-number');
						if ($current_chart.hasClass('circle-off-animation')){
							$animation = {duration: 0};
						}
						if(false == $animation){
							count_html.html(count_html.data('max') +  '<span>'+count_html.data('units')+'</span>');
							$current_chart.addClass('animated');
						}
						$current_chart.circleProgress({
								startAngle: -Math.PI / 4 * 2,
								emptyFill: $current_chart.data('emptyfill'),
								animation: $animation
							}
						).on('circle-animation-progress', function (event, progress) {
							count_html.html(parseInt((count_html.data('max')) * progress) + '<span>'+count_html.data('units')+'</span>'
							);
						}).on('circle-animation-end', function (event) {
							$current_chart.addClass('animated');
						});
					}
				});
			});
		},
		initAnimText = function() {
			$('.animated-test-module .call-on-waypoint').each(function() {
				var $block = $(this);

				$block.on('on-waypoin', function () {
					if($block.hasClass('onit') === false) {
						setTimeout(function() {
							$block.addClass('onit');
						}, 500);
					}
				});
			});
		},
		initFacts = function() {
			$('.fact-number .number.call-on-waypoint:not(.circle)').each(function() {
				var $number = $(this);
				var start = $number.attr('data-start');
				var end = $number.attr('data-end');
				var speed = parseInt($number.attr('data-speed'));

				$number.on('on-waypoin', function () {	
					$({value: start}).animate({value: end}, {
							duration: speed,
							easing: 'linear',
							step: function() {
								$number.text(Math.floor(this.value)).trigger('change');
							},
							complete: function() {
								$number.text(Math.floor(this.value)).trigger('change');
							}
						});
				});
			});
			$('.fact-number .number.circle.call-on-waypoint').each(function() {
				if (dfd_ronneby.windowWidth <= screen_medium) return false;

				var $number = $(this);
				var start = $number.attr('data-start');
				var end = $number.attr('data-end');
				var speed = parseInt($number.attr('data-speed'));

				var $input = $number.find($number.attr('data-knob'));
				$input.val(Math.ceil(start)).trigger('change');

				$number.on('on-waypoin', function () { 
					$({value: start}).animate({value: end}, {
						duration: speed,
						easing: 'swing',
						step: function() {
							$input.val(Math.ceil(this.value)).trigger('change');
							$number.text(Math.floor(this.value)).trigger('change');
						},
						complete: function() {
							$input.val(Math.ceil(this.value)).trigger('change');
							$number.text(Math.floor(this.value)).trigger('change');
						}
					});
				});
			});
		},
		initRowDelimiterBg = function() {
			$('.vc-row-delimiter-top-left, .vc-row-delimiter-top-right, .vc-row-delimiter-bottom-left, .vc-row-delimiter-bottom-right').each(function() {
				var $delimiters = $(this),
					bg_color = $delimiters.parents('.vc-row-wrapper').css('background-color');
				if($delimiters.parents('.vc-row-wrapper').find('.dfd-row-bg-wrap').length > 0)
					bg_color = $delimiters.parents('.vc-row-wrapper').find('.dfd-row-bg-wrap').css('background-color');

				$delimiters.css('background-color', bg_color);
			});
		},
		initContactForm = function() {
			$('form.wpcf7-form input:not([type="submit"])').focus(function(e){
				$(this).parent('span').addClass('active').siblings().addClass('active');
			}).blur(function() {
				if(!$(this).parents('.dfd-contact-form-style-5').length || ($(this).parents('.dfd-contact-form-style-5').length && $(this).val() == '')) {
					$(this).parent('span').removeClass('active').siblings().removeClass('active');
				}
			});
		},
		initChaffle = function() {
			$('.chaffle').chaffle();
		},
		initDropkick = function() {
			$('form.wpcf7-form select, .widget select, .arhives404 select, .woocommerce-ordering select').dropkick({mobile: true});
		},
		initNewsIsotope = function() {
			$('.dfd-blog-module.blog_masonry').each(function() {
				var $self = $(this);
				if(!$self.hasClass('initialized')) {
					$self.addClass('initialized');
					var $container = $('.posts-list', $self);
					var $items = $('.post', $container);

					var columns = 3;
					var columnsWidth;

					var masonry_layout_mode = $self.data('masonry-layout');

					if(!masonry_layout_mode) {
						masonry_layout_mode = 'masonry';
					}

					var setColumns = function () {
						$items = $('.post', $container);
						var width = $container.width();


						switch(true) {
							case (width > 1380): columns = 4; break;
							case (width > 980): columns = 3; break;
							case (width > 640): columns = 2; break;
							default: columns = 1;
						}
						columnsWidth = Math.floor($container.width() / columns);

						$items.width(columnsWidth);
					};

					var runIsotope = function() {
						setColumns();

						$container.isotope({
							layoutMode: masonry_layout_mode,
							/*masonry: {
								columnWidth: columnsWidth,
							},*/
							itemSelector : '.post', 
							resizable : true
						});

						$('body').bind('isotope-add-item', function(e, item) {
							$(item).imagesLoaded(function() {
								$container.isotope('insert', $(item));
							});
						});
					};

					runIsotope();
					$container.imagesLoaded(runIsotope);
					dfd_ronneby.window.resize(runIsotope);
					$('body').on('post-load', function() {
						setTimeout(function() {
							runIsotope();
						}, 1000);
					});

					$self.find('.sort-panel .filter a').click(function () { 
						var selector = $(this).attr('data-filter');

						$(this).parent().parent().find('> li.active').removeClass('active');
						$(this).parent().addClass('active');

						$container.isotope( { 
							filter : selector 
						});

						return false;
					});
				}
			});
		},
		initFacts = function() {
			$('.facts-number').each(function () {
				var $self =  $(this);
				if(!$self.hasClass('facts-inited')) {
					var $anim = $self.data('animation');
					if(!$self.hasClass('disable-animation')) {
						if ('count' == $anim){
							var odometer = new Odometer({el: $self[0], animation: 'count' });
						} else {
							var odometer = new Odometer({el: $self[0]});
						}

						$(this).on('on-waypoin', function () {
							odometer.update($(this).data('max'));
						});
					}
				}
			});
		},
		initAudioplayer = function() {
			$('.post.format-audio').each(function() {
				var $self = $(this);
				
				if(!$self.find('div.audioplayer').length && $self.find('audio.audio').length) {
					$self.find('audio.audio:not(.wp-audio-shortcode)').audioPlayer({
						strPlay: '',
						strPause: '',
						strVolume: ''
					});
				}
			});
			$('body').trigger('audioplayer-inited');
		},
		initNewsSlick = function() {
			$('.dfd-scrolling-news-wrap').each(function() {
				var $self = $(this);
				if($self.hasClass('initialized')) {
					return;
				}
				$self.addClass('initialized');
				var slides_top = $self.data('slides-top'),
					slides_bottom = $self.data('slides-bottom'),
					$top_carousel = $('.dfd-news-top', $self),
					$bottom_carousel = $('.dfd-news-bottom', $self);
				$top_carousel.slick({
					infinite: false,
					slidesToShow: slides_top,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: false,
					cssEase: 'ease-in',
					speed: 1500,
					responsive: [
						{
							breakpoint: 960,
							settings: {
								slidesToShow: 1,
								infinite: false,
								arrows: false
							}
						}
					]
				});
				$bottom_carousel.slick({
					infinite: false,
					slidesToShow: slides_bottom,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: false,
					cssEase: 'ease-out',
					speed: 1200,
					responsive: [
						{
							breakpoint: 960,
							settings: {
								slidesToShow: 2,
								infinite: false,
								arrows: false
							}
						}
					]
				});
				$top_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					if(currentSlide > nextSlide) {
						$bottom_carousel.eq(0).slick('slickPrev');
					} else {
						$bottom_carousel.eq(0).slick('slickNext');
					}
				});
				$bottom_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					if(currentSlide > nextSlide) {
						$top_carousel.eq(0).slick('slickPrev');
					} else {
						$top_carousel.eq(0).slick('slickNext');
					}
				});
				$self.find('>.slider-controls .slider-control.prev').click(function(e) {
					e.preventDefault();
					$top_carousel.eq(0).slick('slickPrev');
				});
				$self.find('>.slider-controls .slider-control.next').click(function(e) {
					e.preventDefault();
					$top_carousel.eq(0).slick('slickNext');
				});
				var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';
				$self.find('.dfd-scrolling-news-container').bind(mousewheelevt, function(e){
					var ev = window.event || e;
					ev = ev.originalEvent ? ev.originalEvent : ev;
					var delta = ev.detail ? ev.detail*(-40) : ev.wheelDelta;
					if(delta > 0 && $top_carousel.find('.slick-slide.slick-active').first().prev('.slick-slide').length > 0) {
						ev.preventDefault();
						$top_carousel.eq(0).slick('slickPrev');
					} else if(delta < 0 && $top_carousel.find('.slick-slide.slick-active').last().next('.slick-slide').length > 0) {
						ev.preventDefault();
						$top_carousel.eq(0).slick('slickNext');
					}
				});
			});
		},
		initImageModule = function() {
			if($('#layout').hasClass('one-page-scroll')) {
				$('.dfd-single-image-module .dfd-one-page-nav').each(function() {
					var $self = $(this),
						dir = $self.data('dir'),
						$carousel = $('#layout.one-page-scroll');

					$self.click(function(e) {
						e.preventDefault();
						if(dir == 'slickNext') {
							$carousel.fullpage.moveSectionDown();
						} else if (dir == 'slickPrev') {
							$carousel.fullpage.moveSectionUp();
						}
					});
				});
			}
			if (('devicePixelRatio' in window) && (window.devicePixelRatio > 1)) {
				$('.dfd-single-image-module img').each(function() {
					var $self = $(this),
						retina_img_src = $self.attr('data-retina-img');

					$self.attr('src', retina_img_src);
				});
			}
		},
		initDelimiterShortcode = function() {
			$(".dfd-delimier-wrapper.dfd-delimiter-with-arrow .inner-wrapper-icon").on("click", function(){
				$(".body-back-to-top").trigger("click");
			});
		},
		initClientLogo = function () {
			var init = function () {
				$('.dfd-client-logo-wrap').each(function () {
					var $wrap = $(this),
						$windowWidth = $(window).width(),
						$scrollbarWidth = 0,
						x = $wrap.data('count');
					if (typeof $.fn.equalHeights != 'undefined') {
						$('.dfd-item-offset .thumb-wrap', $wrap).equalHeights();
					}
					if ($wrap.hasClass('style-1') || $wrap.hasClass('style-2')) {
						$('.dfd-client-logo-item', $wrap).each(function () {
							var $self = $(this),
								height = 0,
								titleHeight = 0,
								top = 0;

							if ($self.find('.thumb-wrap')) {
								height += $self.find('.thumb-wrap').outerHeight();
							}

							if ($self.find('.title-wrap')) {
								titleHeight = $self.find('.title-wrap').outerHeight();
								height += titleHeight;
								if ($self.parents('.dfd-client-logo-wrap').hasClass('style-1')) {
									top = titleHeight;
								}
							}

							if ($self.find('.description')) {
								height += $self.find('.description').outerHeight();
							}

							if ($self.find('.dfd-shadow-wrap')) {
								$self.find('.dfd-shadow-wrap').height(height + 100).css('top', '-' + top + 'px');
							}
						});
					}
					if ($wrap.hasClass('enable-delimiter') && $windowWidth - $scrollbarWidth > 800) {
						$('.columns-with-border:nth-child(-n+' + x + ')', $wrap).addClass('no-top-border');
						$('.columns-with-border:nth-child(' + x + 'n+1)', $wrap).addClass('no-left-border');
					}
				});
			};

			init();

			$(window).on('resize', init);
		},
		initDfdTimeline = function() {
			var init = function() {
				var countCol;
				
				$('.timeline').each(function() {
					var $self = $(this),
						col,
						columns = $self.data('columns'),
						desktop = $self.data('columns-desktop'),
						tablet = $self.data('columns-tablet'),
						mobile = $self.data('columns-mobile');
					
					countCol = function() {
						if(dfd_ronneby.windowWidth > 1023 && dfd_ronneby.windowWidth < 1280) {
							col = desktop;
						} else if(dfd_ronneby.windowWidth > 799 && dfd_ronneby.windowWidth < 1024) {
							col = tablet;
						} else if(dfd_ronneby.windowWidth < 800) {
							col = mobile;
						} else {
							col = columns;
						}
					};
					
					countCol();
					
					$self.timeline({
						forceVerticalMode: 700,
						mode: 'horizontal',
						verticalStartPosition: 'left',
						visibleItems: col,
						forceVerticalMode: 1
					});
					
				});
			};
			setTimeout(function() {
				init();
			},200);
			$(window).on('resize', init);
		},
		initImageCarousel = function() {
			var init = function() {
				$('.dfd-logo-carousel-wrap').each(function() {
					var $wrap = $(this),
					$windowWidth = $(window).width(),
					$scrollbarWidth = 0,
						slides_to_show = $wrap.data('slide') && $wrap.data('slide') != '' ? $wrap.data('slide') : 1,
						slides_to_scroll = $wrap.data('scroll') && $wrap.data('scroll') ? $wrap.data('scroll') : 1,
						enable_dots = false,
						auto_slideshow = false,
						slideshow_speed = $wrap.data('speed') && $wrap.data('speed') != '' ? $wrap.data('speed') : 3000,
						breakpoint_first = slides_to_show > 3 ? 3 : slides_to_show,
						breakpoint_second = slides_to_show > 2 ? 2 : slides_to_show,
						x = $wrap.data('count');

					if($wrap.data('dots') && $wrap.data('dots') == '1') {
						enable_dots = true;
					}	

					if($wrap.data('autoplay') && $wrap.data('autoplay') == '1') {
						auto_slideshow = true;
					}	

					if($wrap.hasClass('style-3')) {
						var elContainer = $wrap.find('.dfd-item-offset'),
							elThumb = elContainer.find('.thumb-wrap'),
							elThumbImg = elThumb.find('img'),
							descContainer = elThumb.find('.desc-text'),
							descContainerOverflow = descContainer.find('.text-overflow'),
							itemHeight = elThumbImg.height(),
							descHeight = descContainerOverflow.height();

						elContainer.each(function() {
							if(elThumbImg.height() > itemHeight) {
								itemHeight = elThumbImg.height();
							}
								if(descContainerOverflow.height() > descHeight) {
									descHeight = descContainerOverflow.height();
								}
						});
						if(descHeight > itemHeight) {
							descContainer.css('height', itemHeight + 'px');
						} else {
							descContainer.css('height', 'auto');
						}
						elThumb.css('height', itemHeight + 'px');
					} else {
						$('.dfd-equalize-height', $wrap).equalHeights();
					}

					if($wrap.hasClass('enable-delimiter') && $windowWidth - $scrollbarWidth > 800) {
						$('.columns-with-border:nth-child(-n+'+x+')', $wrap).addClass('no-top-border');
						$('.columns-with-border:nth-child('+x+'n+1)', $wrap).addClass('no-left-border');
					}

					if($wrap.hasClass('dfd-slide-images') && $wrap.find('.slick-initialized').length < 1) {
						$wrap.find('.dfd-logo-carousel-list').slick({
							infinite: true,
							slidesToShow: slides_to_show,
							slidesToScroll: slides_to_scroll,
							arrows: false,
							dots: enable_dots,
							autoplay: auto_slideshow,
							dotsClass: 'dfd-slick-dots',
							autoplaySpeed: slideshow_speed,
							customPaging: function(slider, i) {
								return '<span data-role="none" role="button" aria-required="false" tabindex="0"></span>';
							},
							responsive: [
								{
									breakpoint: 1280,
									settings: {
										slidesToShow: breakpoint_first,
										infinite: true,
										arrows: false,
										dots: enable_dots
									}
								},
								{
									breakpoint: 800,
									settings: {
										slidesToShow: breakpoint_second,
										infinite: true,
										arrows: false,
										dots: enable_dots
									}
								},
								{
									breakpoint: 460,
									settings: {
										slidesToShow: 1,
										infinite: true,
										arrows: false,
										dots: false
									}
								}
							]
						});
					}
				});
			};

			init();

			$(window).on('load resize', function() {
				init();
				setTimeout(function() {
					init();
				},200);
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initHoverDir = function() {
		var init = function() {
			$('.project.portfolio-hover-style-1 .entry-thumb, .dfd-gallery-single-item.portfolio-hover-style-1 .entry-thumb').each( function() {
				$(this).hoverdir();
			});
		};
		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.anchorSmoothScroll = function() {
		dfd_ronneby.document.ready(function() {
			var $link = $('a.menu-link');
			$link.each(function() {
				var $self = $(this);
				var href = $self.attr('href');
				if(href && href.indexOf('#') !== -1 && href != '#' && href.indexOf('#/') === -1) {
					href = href.substring(href.indexOf("#"));
					if($(href).length > 0) {
						var highlightCurrent = function() {
							/*var targetheight = $(href).outerHeight(true);*/
							var targetOffset = $(href).offset().top;
							if((dfd_ronneby.window.scrollTop() + $('body').offset().top) >= targetOffset /*&& dfd_ronneby.window.scrollTop() < (targetOffset + targetheight)*/) {
								/*setTimeout(function() {*/
									$self.parent().addClass('current-menu-ancestor current-menu-item').siblings().removeClass('current-menu-ancestor current-menu-item');
									if($self.parents('.header-style-3').length > 0 && $self.parents('#top_left_mega_menu').length > 0) {
										$self.parents('.header-style-3').find('#top_right_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-3').length > 0 && $self.parents('#top_right_mega_menu').length > 0) {
										$self.parents('.header-style-3').find('#top_left_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-4').length > 0 && $self.parents('#top_left_mega_menu').length > 0) {
										$self.parents('.header-style-4').find('#top_right_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-4').length > 0 && $self.parents('#top_right_mega_menu').length > 0) {
										$self.parents('.header-style-4').find('#top_left_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
								/*}, 100);*/
							}
						};
						highlightCurrent();
						dfd_ronneby.window.on('load resize scroll', highlightCurrent);
						$self.on('click touchend', function(e) {
							e.preventDefault();
							dfd_ronneby.window.scrollTo(href, {duration:'slow'});
							highlightCurrent();
						});
					}
				}
			});
		});
	};
	
	dfd_ronneby.initTopInnerPage = function() {
		dfd_ronneby.document.ready(function() {
			var $top_panel_inner = $('#top-panel-inner');
			$('a.top-inner-page').on('click', function(e){
				e.preventDefault();
				$top_panel_inner.addClass('open');
			});
			$('a.top-inner-page-close').on('click', function(e){
				e.preventDefault();
				$top_panel_inner.removeClass('open');
			});
			$('.top-inner-page-close').each(function(){
				var $self = $(this);
				$self.hover(function() {
					$self.addClass('hovered');
				},function() {
					$self.removeClass('hovered').addClass('lost-hover');
					setTimeout(function() {
						$self.removeClass('lost-hover');
					}, 300);
				});
			});
		});
	};
	
	dfd_ronneby.initSideArea = function() {
		dfd_ronneby.document.on('click touchend', '.side-area-controller', function (e) {
			e.preventDefault();

			if($('.side-area-controller').hasClass('active')) {
				$('.side-area-controller').removeClass('active');
			} else {
				$('.side-area-controller').addClass('active');
			}

			$('#side-area').toggleClass('opened');
			$('html,body').toggleClass('side-area-opened');

			if (typeof $.initSlider === 'function') {
				setTimeout(function() {
					$.initSlider();
				}, 500);
			}
		});
	};
	
	dfd_ronneby.initPostsCarousel = function() {
		var init = function() {
			$('.dfd-blog-posts-module .dfd-blog-carousel, .dfd-portfolio-module .dfd-portfolio-carousel, .dfd-gallery-module .dfd-gallery-carousel').each(function() {
				var $carousel = $(this);
				
				if($carousel.hasClass('slick-initialized')) {
					return;
				}
				
				var enable_slideshow = $carousel.data('enable_slideshow'),
					slideshow_speed = $carousel.data('slideshow_speed'),
					columns = $carousel.data('columns'),
					breakpoint;

				if(!enable_slideshow) enable_slideshow = false;

				if(!slideshow_speed) slideshow_speed = 5000;

				if(!columns) columns = 3;

				breakpoint = (columns > 2) ? 2 : columns;

				$carousel.slick({
					infinite: false,
					slidesToShow: columns,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: enable_slideshow,
					autoplaySpeed: slideshow_speed,
					responsive: [
						{
							breakpoint: 1279,
							settings: {
								slidesToShow: breakpoint,
								infinite: true,
								arrows: false,
								dots: false
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								arrows: false,
								dots: false
							}
						}
					]
				});
				$carousel.siblings('.slider-controls').find('.next').click(function(e) {
					e.preventDefault();

					$carousel.slickNext();
				});

				$carousel.siblings('.slider-controls').find('.prev').click(function(e) {
					e.preventDefault();

					$carousel.slickPrev();
				});
				$carousel.find('div').on('mousedown select',(function(e){
					e.preventDefault();
				}));
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initPostsModule = function() {
		var init = function() {
			$('.dfd-blog-posts-module.excerpts-overlay').each(function() {
				var exerpt = $(this).find('.entry-content.enable-dropcap-excerpt p'),
					text,
					first;
				
				if(exerpt.length > 0) {
					text = exerpt.html();
					first = $('<span class="exerpt-dropcap">'+text.charAt(0)+'</span>');
				
					exerpt.html(text.substring(1)).prepend(first);
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.frontentEditorReinitScripts = function() {
		if(dfd_ronneby.sameOrigin && typeof parent.vc != 'undefined' && typeof parent.vc.events != 'undefined') {
			parent.vc.events.on('shortcodeView:ready', function() {
				$('body').trigger('post-load');
				setTimeout(function() {
					$('body').trigger('resort-isotope');
				}, 1000);
			});
		}
	};
	
	dfd_ronneby.initGallery = function() {
		var init = function() {
			$('.dfd-gallery-post-slider').each(function() {
				var $carousel = $(this);
				if(!$carousel.hasClass('slick-initialized')) {
					var $window = dfd_ronneby.window,
						total_slides,
						slideshow_speed = 5000,
						$bar = $carousel.siblings('.dfd-gallery-bar'),
						carouselWidth;
					var getSize = function() {
						carouselWidth = $carousel.width();
					};
					getSize();
					$window.on('load resize', getSize);
					var startAnimation = function() {
						$bar.css('width',0);
						$bar.animate({
							width: carouselWidth
						}, slideshow_speed, 'linear').parent()
						.hover(
							function(){
								$bar.stop(true,false);
						}, function(){
							var cur = parseInt($bar.css('width'));
							$bar.animate({ 'width' : carouselWidth }, slideshow_speed*((carouselWidth-cur)/carouselWidth), 'linear');
						});
					};
					$carousel.on('init reInit afterChange', function (event, slick, currentSlide) {
						startAnimation();
						var prev_slide_index, next_slide_index, current;
						var $prev_counter = $carousel.next('.slider-controls').find('.prev .count');
						var $next_counter = $carousel.next('.slider-controls').find('.next .count');
						total_slides = slick.slideCount;
						current = (currentSlide ? currentSlide : 0) + 1;
						prev_slide_index = (current - 1 < 1) ? total_slides : current - 1;
						next_slide_index = (current + 1 > total_slides) ? 1 : current + 1;
						$prev_counter.text(prev_slide_index + '/' + total_slides);
						$next_counter.text(next_slide_index + '/'+ total_slides);
					});
					$carousel.slick({
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						autoplay: true,
						autoplaySpeed: slideshow_speed
					});
					$carousel.siblings('.slider-controls').find('.next').click(function(e) {
						e.preventDefault();

						$carousel.eq(0).slick('slickNext');
					});

					$carousel.siblings('.slider-controls').find('.prev').click(function(e) {
						e.preventDefault();

						$carousel.eq(0).slick('slickPrev');
					});
					$carousel.find('div').on('mousedown select',(function(e){
						e.preventDefault();
					}));
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initBuddyPress = function() {
		var init = function() {
			$('#whats-new-submit').prepend('<i class="crdash-check_alt"></i>');

			$('#subnav a').prepend('');

			if ($('#group-admins').length > 0) {
				$('#item-header-content > span').wrapAll('<div id="item-actions-wrap"></div>');
				$('#item-header-content > #item-actions-wrap').insertAfter($('#group-admins'));
				$('#item-actions > h3').insertBefore('#item-actions-wrap > .highlight');
				$('#item-header-content').hide();
			}

			$('#activity-stream li').each(function() {
				var $this = $(this);
				$('> div', $this).wrapAll('<div class="activitys-wrap"></div>');

				$('.activity-meta a', $this).removeClass('button');
				$('.activity-meta a.acomment-reply', $this).prepend('<i class="crdash-square_chat_alt"></i>');
				$('.activity-meta a.fav', $this).prepend('<i class="crdash-heart"></i>');
				$('.activity-meta a.delete-activity', $this).prepend('<i class="crdash-trash_can"></i>');

				$('.activity-content .activity-meta', $this).insertAfter($('.activitys-wrap', $this));
			});

			$('#members_search, #groups_search').unwrap('label');

			$('#bp-login-widget-form').find('label').each(function() {
				var id = $(this).attr('for');
				var input = $('#'+id);
				var labelHtml = $(this).clone();
				var inputHtml = $('#'+id).clone();
				if(input.length) {
					$(this).remove();
					input.remove();
					$('#bp-login-widget-form .forgetmenot').before('<p class="'+id+'"/>');
					$('#bp-login-widget-form').find('.'+id).append(labelHtml).append(inputHtml);
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initHeaderHorizontalScroll = function() {
		var y = 0;
	
		dfd_ronneby.window.scroll(function() {
			if($(this).scrollLeft() != 0 && $('body').hasClass('dfd-custom-padding-html')) {
				$('#header-container').css({left: $(this).scrollLeft() + $('body').css('margin') * -1});
			} else if($(this).scrollLeft() != 0 && !$('body').hasClass('dfd-custom-padding-html')) {
				$('#header-container').css({left: $(this).scrollLeft() * -1});
			}
		});
	};
	
	dfd_ronneby.initSortPanelHideElems = function() {
		var init = function () {
			$('.sort-panel').each(function() {
				var $container = $(this).parent().parent(),
					$filter_item = $(this).find('a');

				$filter_item.each(function() {
					var $this = $(this);
					var filter = ($this.data('filter') != undefined) ? $this.data('filter') : false;
					if (filter === false) {
						return true;
					}
					var filter_match = $container.find(filter).length;

					if (filter_match == 0) {
						$this.parent('li').hide();
					} else if (filter_match > 0 && $this.parent('li').is(':hidden')) {
						$this.parent('li').show();
					}
				});
			});
		};

		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initPrettyPhoto = function() {
		var initSharrre = function() {
			if('rrssbInit' in window) {
				window.rrssbInit();
			}
		},
		initPrettyPhoto = function() {
			var deeplinkVal = $('body').hasClass('dfd-pp-deeplinks') ? true : false,
				url = window.location.href,
				imageUrl = $('body').find('img').first().attr('src'),
				directiry = $('body').data('directory'),
				sharePretty = $('body').data('share-pretty'),
				nextPretty = $('body').data('next-pretty'),
				prevPretty = $('body').data('prev-pretty');
			$("a[data-rel^='prettyPhoto'], a.zoom-link, a.thumbnail, a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto({
				hook: 'data-rel',
				show_title: true,
				deeplinking:deeplinkVal,
				markup: '<div class="pp_pic_holder"> \
							<div class="ppt">&nbsp;</div> \
							<a class="pp_close" href="#">×</a> \
							<div class="pp_top"> \
								<div class="pp_left"></div> \
								<div class="pp_middle"></div> \
								<div class="pp_right"></div> \
							</div> \
							<div class="pp_content_container"> \
								<div class="pp_left"> \
								<div class="pp_right"> \
									<div class="pp_content"> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
											<div class="pp_hoverContainer"> \
												<a class="pp_next" href="#"><span><span>'+nextPretty+'</span></span></a> \
												<a class="pp_previous" href="#"><span><span>'+prevPretty+'</span></span></a> \
											</div> \
											<div id="pp_full_res"></div> \
											<div class="pp_details"> \
												<div class="pp_nav"> \
													<a href="#" class="pp_arrow_previous">Previous</a> \
													<p class="currentTextHolder">0/0</p> \
													<a href="#" class="pp_arrow_next">Next</a> \
												</div> \
												<div class="pp_social">{pp_social}</div> \
												<p class="pp_description"></p> \
											</div> \
										</div> \
									</div> \
								</div> \
								</div> \
							</div> \
							<div class="pp_bottom"> \
								<div class="pp_left"></div> \
								<div class="pp_middle"></div> \
								<div class="pp_right"></div> \
							</div> \
						</div> \
						<div class="pp_overlay"></div>',
				gallery_markup: '<div class="pp_gallery mobile-hide"> \
									<a href="#" class="pp_arrow_previous">Previous</a> \
									<div> \
										<ul> \
											{gallery} \
										</ul> \
									</div> \
									<a href="#" class="pp_arrow_next">Next</a> \
								</div>',
				changepicturecallback: function() {
						initSharrre();
						var imgUrl = $('#fullResImage').attr('src');
						$('.pp_social .dfd-share-buttons').find('> li > a').each(function() {
							var src = $(this).attr('href');
							$(this).attr('href', src + imgUrl);
						});
					},
				social_tools: '<div class="dfd-share-cover dfd-share-animated">'+
								'<div class="dfd-blog-share-popup-wrap" data-text="Share" data-title="Share" data-url="'+url+'">'+
									'<div class="box">'+
										'<div class="dfd-share-icons">'+
											'<ul class="entry-share-popup rrssb-buttons dfd-share-buttons" data-share="1">'+
												'<li class="rrssb-facebook facebook soc_icon-facebook">'+
													'<a href="https://www.facebook.com/sharer/sharer.php?u=" data-share-button="facebook" class="popup entry-share-link-facebook"></a>'+
												'</li>'+
												'<li class="rrssb-linkedin linkedin soc_icon-linkedin">'+
													'<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=" class="popup"></a>'+
												'</li>'+
												'<li class="rrssb-pinterest pinterest soc_icon-pinterest">'+
													'<a href="http://pinterest.com/pin/create/button/?url=" class="popup"></a>'+
												'</li>'+
												'<li class="rrssb-twitter twitter soc_icon-twitter-3">'+
													'<a href="https://twitter.com/intent/tweet?text=" data-share-button="twitter" class="popup entry-share-link-twitter"></a>'+
												'</li>'+
											'</ul>'+
										'</div>'+
										'<div class="dfd-share-title box-name">'+sharePretty+'</div>'+
									'</div>'+
								'</div>'+
							'</div>'
			});
		};
		
		dfd_ronneby.document.ready(function() {
			initSharrre();
			initPrettyPhoto();
		});
		$('body').on('post-load', function() {
			initSharrre();
			initPrettyPhoto();
		});
	};
	
	dfd_ronneby.initTaxonomyIsotope = function() {
		var $window = dfd_ronneby.window;
	
		var init = function() {
			$('.dfd-new-isotope').each(function() {
				var $container = $(this);
				
				if(!$container.hasClass('dfd-new-isotope-inited')) {
					var layout_style = $container.data('layout-style'),
						columns_wide = $container.data('columns'),
						itemClass = $container.data('item'),
						$items = $('.'+itemClass),
						columns_normal, columns_medium, columns_small, columns_mobile;

					if(!layout_style) layout_style = 'masonry';
					if(!columns_wide) columns_wide = 5;
					columns_normal = (columns_wide > 4) ? 4 : columns_wide;
					columns_medium = (columns_wide > 3) ? 3 : columns_wide;
					columns_small = (columns_wide > 2) ? 2 : columns_wide;
					columns_mobile = (columns_wide > 1) ? 1 : columns_wide;

					var columns = 3;
					var columnsWidth;

					var setColumns = function () {
						$items = $('> .'+itemClass, $container);
						var width = $container.width();

						switch(true) {
							case (width > 1280): columns = columns_wide; break;
							case (width > 1024): columns = columns_normal; break;
							case (width > 800): columns = columns_medium; break;
							case (width > 460): columns = columns_small; break;
							default: columns = columns_mobile;
						}

						columnsWidth = Math.floor(width / columns);
						$items.width(columnsWidth);
					};

					var runIsotope = function() {
						setColumns();

						$container.isotope({
							layoutMode: layout_style,
							masonry: {
								columnWidth: columnsWidth
							},
							itemSelector : '.'+itemClass, 
							resizable : true
						});

						$('body').bind('isotope-add-item', function(e, item) {
							$(item).width(columnsWidth);
							$(item).imagesLoaded(function() {
								$container.isotope('insert', $(item));
							});
						});
					};

					runIsotope();
					$container.imagesLoaded(runIsotope);

					$container.parent().parent().find('.sort-panel .filter a').click(function () {
						var selector = $(this).attr('data-filter');

						$(this).parent().parent().find('> li.active').removeClass('active');
						$(this).parent().addClass('active');

						$container.isotope({
							filter : selector
						});

						return false;
					});

					$window.on('resize',runIsotope);

					$('body').on('post-load', function() {
						setTimeout(function() {
							runIsotope();
						}, 1000);
					});

					$container.one('layoutComplete', function() {
						setTimeout(function() {
							dfd_ronneby.window.trigger('resize');
						}, 1000);
					});

					$container.addClass('dfd-new-isotope-inited');
				}
			});
		};

		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initSpacer = function() {
		var init = function() {
			$('.dfd-spacer-module').each(function() {
				var $self = $(this),
					wWidth = dfd_ronneby.windowWidth,
					units = $self.data('units'),
					screen_wide_resolution = $self.data('wide_resolution'),
					screen_wide_spacer_size = $self.data('wide_size'),
					screen_normal_resolution = $self.data('normal_resolution'),
					screen_normal_spacer_size = $self.data('normal_size'),
					screen_tablet_resolution = $self.data('tablet_resolution'),
					screen_tablet_spacer_size = $self.data('tablet_size'),
					screen_mobile_resolution = $self.data('mobile_resolution'),
					screen_mobile_spacer_size = $self.data('mobile_size');
				if(units == '%') {
					screen_normal_spacer_size = screen_wide_spacer_size * screen_normal_spacer_size / 100;
					screen_tablet_spacer_size = screen_wide_spacer_size * screen_tablet_spacer_size / 100;
					screen_mobile_spacer_size = screen_wide_spacer_size * screen_mobile_spacer_size / 100;
				}
				
				if(dfd_ronneby.isSafari) {
					wWidth = dfd_ronneby.windowWidth - dfd_ronneby.scrollbarWidth;
				}

				if(wWidth >= screen_wide_resolution) {
					$self.css('height',screen_wide_spacer_size);
				} else if(wWidth >= screen_normal_resolution && wWidth < screen_wide_resolution) {
					$self.css('height',screen_normal_spacer_size);
				} else if(wWidth >= screen_tablet_resolution && wWidth < screen_normal_resolution) {
					$self.css('height',screen_tablet_spacer_size);
				} else if(wWidth >=screen_mobile_resolution  && wWidth <   screen_tablet_resolution) {
					$self.css('height',screen_mobile_spacer_size);
				} else if(screen_mobile_resolution >= wWidth) {
					$self.css('height',screen_mobile_spacer_size);
				}
				$('body').trigger('reinit-waypoint');
			});
		};

		dfd_ronneby.window.on('load resize', init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initShortcodesLoadResize = function() {
		var init = function() {
//			initMobileBgImage();
			initPriceList();
			initFullHeightRow();
			initFixedFooter();
		},
		initPriceList = function() {
			$('.dfd-woocomposer_list .dfd-woo-product-list >li').each(function() {
				var $self = $(this);
				if(!$self.find('.dfd-list-menu-mode')) return;
				var $container = $self.find('.dfd-list-menu-mode:first-child');
				var titleWidth = 0;
				var priceWidth = 0;
				if($container.find('.box-name')) {
					titleWidth = $container.find('.box-name').width();
				}
				if($container.find('>.amount')) {
					priceWidth = $container.find('>.amount').width();
				}
				$container.find('.woo-delim').css({
					'left': titleWidth,
					'right': priceWidth
				});
			});
		},
		initMobileBgImage = function() {
			$('.dfd-row-bg-image').each(function() {
				var $self = $(this),
					defaultImage = '',
					mobileImage = '',
					resolution = 799,
					windowWidth = dfd_ronneby.windowWidth;

				if($self.data('bg-img')) {
					defaultImage = $self.data('bg-img');
				}

				if($self.data('responsive-image')) {
					mobileImage = $self.data('responsive-image');
				}

				if($self.data('responsive-resolution')) {
					resolution = $self.data('responsive-resolution');
				}

				if(defaultImage != '' && mobileImage != '') {
					if(typeof windowWidth != 'undefined' && windowWidth <= resolution && mobileImage) {
						$self.css('background-image','url('+mobileImage+')');
					} else {
						$self.css('background-image','url('+defaultImage+')');
					}
				}
			});
		},
		initFullHeightRow = function () {
			$('.dfd-row-full-height:first').each( function () {
				var offset,
					fullHeight,
					$self = $(this),
					windowHeight = dfd_ronneby.windowHeight,
					windowWidth = dfd_ronneby.windowWidth;
				
				setTimeout(function() {
					offset = $self.offset().top;
					if($('.dfd-frame-line.line-bottom')) {
						offset += $('.dfd-frame-line.line-bottom').height();
					}
					if ( offset < windowHeight ) {
							fullHeight = windowHeight - offset - 1;
							$self.css( 'min-height', fullHeight + 'px' );
							if(windowWidth < 1025 && windowWidth > 1022) {
								$self.css( 'max-height', fullHeight + 'px' );
							}
					}
				}, 100);
			});
		},
		initFixedFooter = function() {
			if(!$('#layout').hasClass('one-page-scroll') && $('#main-wrap').hasClass('dfd-parallax-footer')) {
				var margin =  (dfd_ronneby.windowWidth > 780) ? $('#footer-wrap').outerHeight(true) : 0;
				if($('body > .boxed_layout').length > 0) {
					$('body > .boxed_layout').css('margin-bottom', margin);
				} else {
					$('#main-wrap').css('margin-bottom', margin);
				}
			}
		};
		
		dfd_ronneby.window.on("load resize", init);
		$('body').on('post-load', init);
		dfd_ronneby.window.on("resize", initMobileBgImage);
		$('body').on('post-load', initMobileBgImage);
	};
	
	dfd_ronneby.initBackground = function() {
		var init = function() {
			initParallax();
			initMultiParallax();
			initAnimatedBg();
			initCanvasBg();
			initVideoBg();
		},
		initParallax = function() {
			if (!$('html').is('.lt-ie10, .lt-ie9, .lt-ie8')) {
				$('.upb_row_bg, .dfd-row-parallax, .dfd-column-parallax, .dfd-fade-on-scroll, .dfd-row-bg-image.dfd_vertical_parallax, .dfd-row-bg-image.dfd_horizontal_parallax, .dfd-multi-parallax-layer').each(function() {
					// Store some variables based on where we are
					var $self = $(this), offsetCoords, topOffset, selfHeight;

					var recalcInitValues = function() {
						offsetCoords = $self.offset();
						selfHeight = $self.height();
						topOffset = offsetCoords.top;
					};

					recalcInitValues();

					dfd_ronneby.window.on("resize load", recalcInitValues);

					var speed = parseFloat($self.data('parallax_sense')) / 100;
					var maxMinValue = parseFloat($self.data('parallax_limit'));
					var statPos = '0';
					var mobileEnable = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false;
					// When the window is scrolled...
					
					if(
						$self.hasClass('upb_row_bg') ||
						$self.hasClass('dfd_vertical_parallax') ||
						$self.hasClass('dfd-multi-parallax-layer')
					) {
						var actualImage = new Image();
						if($self.hasClass('upb_row_bg')) {
							actualImage.src = $self.css('backgroundImage').replace(/"/g,'').replace(/url\(|\)$/ig, '');
						} else {
							actualImage.src = $self.attr('data-bg-img').replace(/"/g,'').replace(/url\(|\)$/ig, '');
						}
						actualImage.onload = function() {
							$self.css({
								'width': actualImage.width,
								'height': actualImage.height
							});
						};
					}

					dfd_ronneby.window.on("load scroll", function() {
						if(!mobileEnable && Modernizr.touch && dfd_ronneby.windowWidth < 800) return;
						// If this section is in view
						// Scroll the background at var speed
						// the yPos is a negative value because we're scrolling it UP!
						var diff = (topOffset - dfd_ronneby.windowScrollTop) / 3,
							diffPos = -(diff * 2 * speed),
							starPosition = '50% 50%';
						// If this element has a Y offset then add it on
						if ($self.data('parallax_offset')) {
							if($self.hasClass('dfd_vertical_parallax') || $self.hasClass('dfd_horizontal_parallax')) {
								if($self.hasClass('dfd_vertical_parallax')) {
									starPosition = '50% calc(50% + '+$self.data('parallax_offset')+'px)';
								} else if($self.hasClass('dfd_horizontal_parallax')) {
									starPosition = 'calc(50% + '+$self.data('parallax_offset')+'px) 50%';
								}
								$self.css('backgroundPosition', starPosition);
							}
						}
						// Put together our final background position
						var coords;
						if($self.hasClass('vcpb-vz-jquery')) {
							coords = '50% ' + diffPos + 'px';
						}
						if($self.hasClass('dfd_vertical_parallax')) {
							coords = statPos + ', ' + diffPos + 'px';
						}

						if($self.hasClass('vcpb-hz-jquery')) {
							coords = diffPos + 'px' + ' 50%';
						}
						if($self.hasClass('dfd_horizontal_parallax')) {
							coords = diffPos + 'px,' + statPos;
						}

						if($self.hasClass('dfd-multi-parallax-layer')) {
							var increment = +$self.attr('data-index');
							var dirMulti = $self.data('direction-multi') ? $self.data('direction-multi') : 'vertical';
							var multiPost = -(diff * speed * increment);
							if(dirMulti == 'vertical') {
								coords = statPos + ', ' + multiPost + 'px';
							} else {
								coords = multiPost + 'px,' + ' ' + statPos;
							}
						}

						if($self.hasClass('dfd-row-parallax')) {
							var yPos = -(diff * speed);

							if(yPos > maxMinValue) yPos = maxMinValue;
							if(yPos < -maxMinValue) yPos = -maxMinValue;

							// Move the module
							$self.find('>.row').css({
								'-webkit-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'-moz-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'-0-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'transform': 'matrix(1,0,0,1,0,'+yPos+')'
							});
						}
						if(($self.hasClass('dfd-column-parallax'))) {
							var w = dfd_ronneby.windowWidth;
							var colParalDestroy = $self.data('parallax-destroy');
							if (colParalDestroy != undefined && w <= colParalDestroy ) {
								$self.css ({
									'':''
								});
							} else {
								// Move the column
								var yPos = -(diff * speed);

								if(yPos > maxMinValue) yPos = maxMinValue;
								if(yPos < -maxMinValue) yPos = -maxMinValue;

								window.requestAnimationFrame(function() {
									$self.css({
										'-webkit-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'-moz-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'-0-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'transform': 'matrix(1,0,0,1,0,'+yPos+')'
									});
								});
							}
						}
						if (
								$self.hasClass('dfd-fade-on-scroll') &&
								((dfd_ronneby.windowScrollTop ) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop)
						) {
							var height = $self.height();

							// Fade the row
							window.requestAnimationFrame(function() {
								$self.css({
									opacity: (1 + 1/(height/(topOffset - dfd_ronneby.windowScrollTop)))
								});
							});
						}
						if (
								((dfd_ronneby.windowScrollTop + dfd_ronneby.windowHeight) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop) &&
								(
									$self.hasClass('dfd_vertical_parallax') ||
									$self.hasClass('dfd_horizontal_parallax') ||
									$self.hasClass('dfd-multi-parallax-layer')
								)
						) {
							// Move the background
							window.requestAnimationFrame(function() {
								$self.css({
									'-webkit-transform': 'translate3d('+coords+',0)',
									'-moz-transform': 'translate3d('+coords+',0)',
									'-0-transform': 'translate3d('+coords+',0)',
									'transform': 'translate3d('+coords+',0)'
								});
							});
						}
						if (
								((dfd_ronneby.windowScrollTop + dfd_ronneby.windowHeight) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop) &&
								$self.hasClass('upb_row_bg')
						) {
							// Move the background
							window.requestAnimationFrame(function() {
								$self.css({backgroundPosition: coords});
							});
						}
						recalcInitValues();

					}); // window scroll
				});
			}
		},
		initMultiParallax = function() {
			$('.dfd-row-bg-wrap.dfd-row-bg-image.dfd_mousemove_parallax').each(function() {
				var $self = $(this),
					mobileEnabled = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false;

				if(!mobileEnabled && Modernizr.touch && dfd_ronneby.windowWidth < 800) return;
				
				$self.parent().css({'z-index': 'initial'});
				$('.dfd-interactive-parallax-item', $self).parallax({mouseport: $self.parent()});
			});
		},
		initAnimatedBg = function() {
			$('.dfd-row-bg-image.dfd_animated_bg').each(function() {
				var $self = $(this),
					dir = $self.data('direction'),
					speed = 100 - $self.data('parallax_sense'),
					coords = 0,
					mobileEnabled = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false,
					width = $self.parent().outerWidth(),
					height = $self.parent().outerHeight();
					
				if(!mobileEnabled && Modernizr.touch && dfd_ronneby.windowWidth < 800) {
					return;
				}

				var actualImage = new Image();
				actualImage.src = $self.attr('data-bg-img').replace(/"/g,'').replace(/url\(|\)$/ig, '');

				if(!$self.hasClass('bg-initialized')) {
					$self.addClass('bg-initialized');
					actualImage.onload = function() {
						if(dir == 'left' || dir == 'right') {
							$self.css('width', actualImage.width + width);
						} else if(dir == 'top' || dir == 'bottom') {
							$self.css('height', actualImage.height + height);
						}

						setInterval(function() {
							if(dir == 'left' || dir == 'bottom') {
								coords -= 1;
							} else {
								coords += 1;
							}

							if(
								(coords < -actualImage.width && dir == 'left') || 
								(coords < -actualImage.height && dir == 'bottom')
							) {
								coords = 0;
							}

							if( (coords > 0 && dir == 'right') ) {
								coords = -actualImage.width;
							}

							if( (coords > 0 && dir == 'top') ) {
								coords = -actualImage.height;
							}
							if(dir == 'left' || dir == 'right') {
								$self.css({
									'-webkit-transform': 'translate3d('+coords +'px, 0, 0)',
									'-moz-transform': 'translate3d('+coords +'px, 0, 0)',
									'-o-transform': 'translate3d('+coords +'px, 0, 0)',
									'-ms-transform': 'translate3d('+coords +'px, 0, 0)',
									'transform': 'translate3d('+coords +'px, 0, 0)'
								});
							} else {
								$self.css({
									'-webkit-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-moz-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-o-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-ms-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'transform': 'translate3d(0, '+ coords + 'px, 0)'
								});
							}
						}, speed);
					};
				}
			});
		},
		initCanvasBg = function() {
			
			$('.dfd-row-bg-canvas').each(function(){
				var $self = $(this);
				
				if(dfd_ronneby.windowWidth < 1100) {
					return false;
				}
				var canvas_id = $self.data('canvas-id');
				var canvas_style = $self.data('canvas-style');
				var canvas_color = $self.data('canvas-color');
				var apply_to = $self.data('canvas-size');

				if(canvas_color == '') {
					canvas_color = '#ffffff';
				}

				if(canvas_style == 'style_1') {
					$self.append('<canvas id="canvas-'+ canvas_id +'" />');
				}

				var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
				var wrapper = (apply_to != 'window') ? $('#'+canvas_id).parents('.vc-row-wrapper') : dfd_ronneby.window;

				if(canvas_style == 'style_1') {
					(function() {
						initHeader('canvas-'+canvas_id);
						initAnimation();
						addListeners();
						function initHeader(id) {
							width = wrapper.width();
							height = wrapper.height();
							target = {x: width/2, y: height/2};

							largeHeader = document.getElementById(id);
							largeHeader.style.height = height+'px';

							canvas = document.getElementById(id);
							canvas.width = width;
							canvas.height = height;
							ctx = canvas.getContext('2d');

							// create points
							points = [];
							for(var x = 0; x < width; x = x + width/20) {
								for(var y = 0; y < height; y = y + height/20) {
									var px = x + Math.random()*width/20;
									var py = y + Math.random()*height/20;
									var p = {x: px, originX: px, y: py, originY: py };
									points.push(p);
								}
							}

							// for each point find the 5 closest points
							for(var i = 0; i < points.length; i++) {
								var closest = [];
								var p1 = points[i];
								for(var j = 0; j < points.length; j++) {
									var p2 = points[j]
									if(!(p1 == p2)) {
										var placed = false;
										for(var k = 0; k < 5; k++) {
											if(!placed) {
												if(closest[k] == undefined) {
													closest[k] = p2;
													placed = true;
												}
											}
										}

										for(var k = 0; k < 5; k++) {
											if(!placed) {
												if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
													closest[k] = p2;	
													placed = true;
												}
											}
										}
									}
								}
								p1.closest = closest;
							}

							// assign a circle to each point
							for(var i in points) {
								var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
								points[i].circle = c;
							}
						}

						// Event handling
						function addListeners() {
							if(!('ontouchstart' in window)) {
								window.addEventListener('mousemove', mouseMove);
							}
							window.addEventListener('resize', resize);
						}

						function mouseMove(e) {
							var posx = 0;
							var posy = 0;
							var offset_left = $('#'+canvas_id).offset().left;
							var offset_top = $('#'+canvas_id).offset().top;
							if (e.pageX || e.pageY) {
								posx = e.pageX;
								posy = e.pageY;
							} else if (e.clientX || e.clientY)    {
								posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
								posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
							}
							target.x = posx - offset_left;
							target.y = posy - offset_top;
						}

						function resize() {
							width = wrapper.width();
							height = wrapper.height();
							largeHeader.style.height = height+'px';
							canvas.width = width;
							canvas.height = height;
						}

						// animation
						function initAnimation() {
							animate();
							for(var i in points) {
								shiftPoint(points[i]);
							}
						}

						function animate() {
							if(animateHeader) {
								ctx.clearRect(0,0,width,height);
								for(var i in points) {
									// detect points in range
									if(Math.abs(getDistance(target, points[i])) < 4000) {
										points[i].active = 0.3;
										points[i].circle.active = 0.6;
									} else if(Math.abs(getDistance(target, points[i])) < 20000) {
										points[i].active = 0.1;
										points[i].circle.active = 0.3;
									} else if(Math.abs(getDistance(target, points[i])) < 40000) {
										points[i].active = 0.02;
										points[i].circle.active = 0.1;
									} else {
										points[i].active = 0;
										points[i].circle.active = 0;
									}

									drawLines(points[i]);
									points[i].circle.draw();
								}
							}
							requestAnimationFrame(animate);
						}

						function shiftPoint(p) {
							TweenLite.to(p, 1+1*Math.random(), {
								x:p.originX-50+Math.random()*100,
								y: p.originY-50+Math.random()*100,
								ease:Circ.easeInOut,
								onComplete: function() {
									shiftPoint(p);
								}
							});
						}

						// Canvas manipulation
						function drawLines(p) {
							if(!p.active) {
								return;
							}
							for(var i in p.closest) {
								ctx.beginPath();
								ctx.moveTo(p.x, p.y);
								ctx.lineTo(p.closest[i].x, p.closest[i].y);
								ctx.strokeStyle = 'rgba(255,255,255,'+ p.active+')';
								ctx.stroke();
							}
						}

						function Circle(pos,rad,color) {
							var _this = this;

							// constructor
							(function() {
								_this.pos = pos || null;
								_this.radius = rad || null;
								_this.color = color || null;
							})();

							this.draw = function() {
								if(!_this.active) {
									return;
								}
								ctx.beginPath();
								ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
								ctx.fillStyle = 'rgba(255,255,255,'+ _this.active+')';
								ctx.fill();
							};
						}

						// Util
						function getDistance(p1, p2) {
							return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
						}
					})();
				} else if(canvas_style == 'style_2') {
					$('#'+canvas_id).particleground({
						dotColor: canvas_color,
						lineColor: canvas_color
					});
				} else if(canvas_style == 'style_3') {
					(function() {
						var mouseX = 0, mouseY = 0,

						windowHalfX = window.innerWidth / 2,
						windowHalfY = window.innerHeight / 2,

						SEPARATION = 200,
						AMOUNTX = 1,
						AMOUNTY = 1,

						camera, scene, renderer;

						init();
						animate();

						function init() {
							var container, separation = 1000, amountX = 50, amountY = 50, color = 0xffffff,
							particles, particle;
							container = document.getElementById(canvas_id);
							camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
							camera.position.z = 100;
							scene = new THREE.Scene();
							renderer = new THREE.CanvasRenderer({ alpha: true });
							renderer.setPixelRatio( window.devicePixelRatio );
							renderer.setClearColor( 0x000000, 0 );   // canvas background color
							renderer.setSize( wrapper.width(), wrapper.height() );
							container.appendChild( renderer.domElement );

							var PI2 = Math.PI * 2;
							var material = new THREE.SpriteCanvasMaterial( {
								color: color,
								opacity: 0.5,
								program: function ( context ) {
									context.beginPath();
									context.arc( 0, 0, 0.5, 0, PI2, true );
									context.fill();
								}
							} );
							var geometry = new THREE.Geometry();
							/*
							 *   Number of particles
							 */
							for ( var i = 0; i < 150; i ++ ) {

								particle = new THREE.Sprite( material );
								particle.position.x = Math.random() * 2 - 1;
								particle.position.y = Math.random() * 2 - 1;
								particle.position.z = Math.random() * 2 - 1;
								particle.position.normalize();
								particle.position.multiplyScalar( Math.random() * 10 + 600 );
								particle.scale.x = particle.scale.y = 5;
								scene.add( particle );
								geometry.vertices.push( particle.position );
							}
							/*
							 *   Lines
							 */
							var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: color, opacity: 0.2 } ) );
							scene.add( line );
							document.addEventListener( 'mousemove', onDocumentMouseMove, false );
							document.addEventListener( 'touchstart', onDocumentTouchStart, false );
							window.addEventListener( 'resize', onWindowResize, false );

						}

						function onWindowResize() {
							windowHalfX = wrapper.width() / 2;
							windowHalfY = wrapper.height() / 2;
							camera.aspect = wrapper.width() / wrapper.height();
							camera.updateProjectionMatrix();
							renderer.setSize( wrapper.width(), wrapper.height() );
						}

						function onDocumentMouseMove(event) {
							mouseX = (event.clientX - windowHalfX) * 0.05;
							mouseY = (event.clientY - windowHalfY) * 0.2;
						}

						function onDocumentTouchStart( event ) {

							if ( event.touches.length > 1 ) {

								event.preventDefault();

								mouseX = (event.touches[ 0 ].pageX - windowHalfX) * 0.7;
								mouseY = (event.touches[ 0 ].pageY - windowHalfY) * 0.7;

							}

						}

						function onDocumentTouchMove( event ) {

							if ( event.touches.length == 1 ) {

								event.preventDefault();

								mouseX = event.touches[ 0 ].pageX - windowHalfX;
								mouseY = event.touches[ 0 ].pageY - windowHalfY;

							}

						}

						function animate() {

							requestAnimationFrame( animate );

							render();

						}

						function render() {

							camera.position.x += ( mouseX - camera.position.x ) * 0.1;
							camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;
							camera.lookAt( scene.position );

							renderer.render( scene, camera );

						}
					})();

				} else if(canvas_style == 'style_4') {
					$('#'+canvas_id).particlegroundOld({
						dotColor: canvas_color,
						lineColor: canvas_color
					});
				}
			});
		},
		initVideoBg = function() {
			$('.dfd-video-bg video, .dfd-video-bg .dfd-bg-frame').each(function() {
				var $self = $(this),
					ratio = 1.778,
					pWidth,
					pHeight,
					selfWidth,
					selfHeight,
					setSizes = function() {
						pWidth = $self.parents('.vc-row-wrapper.wpb_row').length > 0 ? $self.parents('.vc-row-wrapper.wpb_row').width() : $self.parent().width();
						pHeight = $self.parents('.vc-row-wrapper.wpb_row').length > 0 ? $self.parents('.vc-row-wrapper.wpb_row').height() : $self.parent('').height();
						if(pWidth / ratio < pHeight) {
							selfWidth = Math.ceil(pHeight * ratio);
							selfHeight = pHeight;
							$self.css({
								'width': selfWidth,
								'height': selfHeight
							});
						} else {
							selfWidth = pWidth;
							selfHeight = Math.ceil(pWidth / ratio);
							$self.css({
								'width': selfWidth,
								'height': selfHeight
							});
						}
					};
				
				$self.parents('.dfd-video-bg').siblings('.dfd-video-controller').unbind('click').on('click', function(e) {
					e.preventDefault();
					var $button = $(this);
					if($button.hasClass('dfd-socicon-ic_pause_48px')) {
						$self.get(0).pause();
						$button.removeClass('dfd-socicon-ic_pause_48px').addClass('dfd-socicon-icon-play');
					} else {
						$self.get(0).play();
						$button.removeClass('dfd-socicon-icon-play').addClass('dfd-socicon-ic_pause_48px');
					}
				});
				$self.parents('.dfd-video-bg').siblings('.dfd-sound-controller').unbind('click').on('click', function(e) {
					e.preventDefault();
					var $button = $(this);
					if($button.hasClass('dfd-socicon-unmute')) {
						$self.prop('muted',false);
						$button.removeClass('dfd-socicon-unmute').addClass('dfd-socicon-mute');
					} else {
						$self.prop('muted',true);
						$button.removeClass('dfd-socicon-mute').addClass('dfd-socicon-unmute');
					}
				});
				setSizes();
				dfd_ronneby.window.on('resize', function() {
					setSizes();
				});
				$('body').on('post-load', setSizes);
				dfd_ronneby.window.on('load', function() {
					if($self.is('video') && $self.get(0).paused) {
						$self.get(0).play();
					}
				});
			});
			if($('.dfd-youtube-bg').length > 0) {
				var tag = document.createElement('script');

				tag.src = "//www.youtube.com/iframe_api";
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				var players = {};

				window.onYouTubeIframeAPIReady = function() {
					$('.dfd-youtube-bg iframe').each(function() {
						var $self = $(this),
							id = $self.attr('id');

						if($self.data('muted') && $self.data('muted') == '1') {
							players[id] = new YT.Player(id, {
								events: {
									"onReady": onPlayerReady
								}
							});
						} else {
							players[id] = new YT.Player(id, {
								events: {
									"onReady": onPlayerReadyLoud
								}
							});
						}
					});
				};
			}
			function onPlayerReady(e) {
				e.target.mute();
				e.target.playVideo();
			}
			function onPlayerReadyLoud(e) {
				e.target.playVideo();
			}
			if($('.dfd-vimeo-bg').length > 0) {
				$('.dfd-vimeo-bg iframe').each(function() {
					var $self = $(this);

					if (window.addEventListener) {
						window.addEventListener('message', onMessageReceived, false);
					} else {
						window.attachEvent('onmessage', onMessageReceived, false);
					}

					function onMessageReceived(e) {
						var data = JSON.parse(e.data);

						switch (data.event) {
							case 'ready':
								$self[0].contentWindow.postMessage('{"method":"play", "value":1}','*');
								if($self.data('muted') && $self.data('muted') == '1') {
									$self[0].contentWindow.postMessage('{"method":"setVolume", "value":0}','*');
								}
								break;
						}
					}
				});
			}
		};
		
		dfd_ronneby.document.ready(function() {
			// Cache the Y offset and the speed of each sprite
			$('[data-type]').each(function() {
				$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
				$(this).data('Xposition', $(this).attr('data-Xposition'));
				$(this).data('parallax_sense', $(this).attr('data-parallax_sense'));
			});
			
			init();
		});
		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initStunHeaderParallax = function() {
		dfd_ronneby.window.on('load resize scroll', function() {
			var scrolledY = dfd_ronneby.windowScrollTop,
				$self = $('.stuning-header-inner .page-title-inner'),
				height = $self.parent().height(),
				coord = scrolledY*.333;

			window.requestAnimationFrame(function() {
				$self.css({
					'-webkit-transform': 'translate3d(0,'+coord+'px,0)',
					'-moz-transform': 'translate3d(0,'+coord+'px,0)',
					'-o-transform': 'translate3d(0,'+coord+'px,0)',
					'transform': 'translate3d(0,'+coord+'px,0)',
					'opacity': (1 - (scrolledY/height))
				});
			});
		});
	};
	
	dfd_ronneby.initEqHeight = function() {
		var init = function() {
			var w = dfd_ronneby.windowWidth;
			$('.features_module-eq-height .row').each(function(){
				if (w>800) {
					$(this).find('.columns').equalHeights();
				} else {
					$(this).find('.columns').equalHeightsDestroy();
				}
			});
			$('.module-eq-height .row').each(function(){
				if (w>800) {
					$(this).find('.columns').equalHeights();
				} else {
					$(this).find('.columns').equalHeightsDestroy();
				}
			});
			$('.features_tiles_module .row').each(function(){
				$(this).find('.columns').equalHeights();
			});
			$('.dfd-equal-height-children').each(function(){
				if (w>800 && !$(this).hasClass('dfd-destroy-wide')) {
					if ($(this).find('#left-sidebar.dfd-eq-height').length > 0 || $(this).find('#right-sidebar.dfd-eq-height').length > 0) {
						var $self = $(this);
						setTimeout(function() {
							$self.find('.dfd-eq-height').equalHeights();}, 1000);
					} else {
						$(this).find('.dfd-eq-height').equalHeights();
					}
					$(this).find('.dfd-eq-height').equalHeights();
				} else if ($(this).hasClass('dfd-mobile-keep-height')) {
					$(this).find('.dfd-eq-height').equalHeights();
				} else if (w>1024 && $(this).hasClass('dfd-destroy-wide')) {
					$(this).find('.dfd-eq-height').equalHeights();
				} else {
					$(this).find('.dfd-eq-height').equalHeightsDestroy();
				}
			});
			$('.vc-row-wrapper.equal-height-columns').each(function(){
				var $container = $(this);
				var resolution = $container.data('resolution') ? $container.data('resolution') : 800;
				var $columns = $container.find('>.row >.columns');
				if($(this).hasClass('mobile-destroy-equal-heights')) {
					if (w>resolution) {
						$columns.equalHeights();
					} else {
						$columns.equalHeightsDestroy();
					}
				} else {
					$(this).find('>.row >.columns').equalHeights();
				}
				$columns.each(function() {
					if($(this).find('.vc-row-wrapper').length > 0) {
						$(this).addClass('dfd-bg-inside');
					}
				});
			});

			$('.dfd-equal-height-wrapper').each(function(){
				if($(this).hasClass('dfd-mobile-destroy-equal-heights')) {
					if (w>800) {
						$(this).find('>div').equalHeights();
					} else {
						$(this).find('>div').equalHeightsDestroy();
					}
				} else {
					$(this).find('>div').equalHeights();
				}
			});
		};

		dfd_ronneby.window.on('load resize', init);
		dfd_ronneby.window.one('scroll', init);

		if($('#left-sidebar').length > 0 || $('#right-sidebar').length > 0) {
			$('#grid-folio, .works-list, #grid-posts, .dfd-blog, .dfd-portfolio, .dfd-gallery').observeDOM(function(){
				init();
			});
		}
		if($('.dfd-equal-height-children').length > 0) {
			$('.dfd-equal-height-children').parent().observeDOM(function(){ 
				init();
			});
		}

		dfd_ronneby.document.ready(function() {
			init();
			$('.vc-row-wrapper.equal-height-columns.aligh-content-verticaly').each(function(){
				var $container = $(this);
				var $columns = $container.find('>.row >.columns');
				$columns.each(function() {
					if($(this).find('.vc-row-wrapper').length > 0) {
						$(this).find('.vc-row-wrapper').wrapInner('<div class="dfd-vertical-aligned"></div>');
					} else {
						$(this).wrapInner('<div class="dfd-vertical-aligned"></div>');
					}
				});
			});
		});
	};
	
	dfd_ronneby.initStickInParent = function() {
		dfd_ronneby.window.on('load resize', function() {
			if (Modernizr.touch === false && !$('html').is('.lt-ie10, .lt-ie9, .lt-ie8') && dfd_ronneby.windowWidth > 800) {
				var offset = 0;
				if( ($('#header-container:not(.header-style-5)').length > 0) && ($('#header-container:not(.header-style-8)').length > 0) && ($('#header-container:not(.header-style-11)').length > 0) ) {
					offset += 60;
				}
				if($('#wpadminbar').length > 0) {
					offset += $('#wpadminbar').outerHeight();
				}
				if($('.dfd-frame-line.line-bottom').length > 0) {
					offset += $('.dfd-frame-line.line-bottom').outerHeight();
				}
				$('.folio-info.desc-left > .row, .folio-info.desc-right > .row').stick_in_parent({
					parent: 'div.project-wrap',
					sticky_class: 'sticky',
					offset_top: offset + 20,
					bottoming: true,
					inner_scrolling: false
				});
				$('.single-folio .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '.row.project',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
				$('.dfd-single-gallery .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '#layout.dfd-single-gallery .blog-section',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
				$('#layout.single-post .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '#layout.single-post .blog-section',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
			}
		});
	};
	
	dfd_ronneby.hideBeforeAnimation = function() {
		$('.cr-animate-gen, [data-animate="1"]').each(function () {
			var $self = $(this),
				$item;

			if ($self.data('animate-item')) {
				$item = $self.find($self.data('animate-item'));
				$item.css('opacity','0');
			} else {
				$self.css('opacity','0');
			}
		});
	};
	
	dfd_ronneby.initAnimation = function() {
		var init = function () {
			var offset = '85%';

			$('.cr-animate-gen, [data-animate="1"]').each(function () {
					var $curr = $(this);
					var $item;
					var $animation;
					$animation = $curr.data('animate-type');

					if ($curr.data('animate-item')) {
						$item = $curr.find($curr.data('animate-item'));
						$item.each(function() {
							var $self = $(this);
							$self.waypoint(function () {
								if(!$self.hasClass('animation-done')) {
									$self.addClass('animation-done');
										$self.velocity($animation, {stagger: 150, drag: true, display:'auto'});
								}
							}, {offset: offset});
						});
					} else {
						$curr.waypoint(function () {
							if(!$curr.hasClass('animation-done')) {
								$curr.addClass('animation-done');
								$curr.velocity($animation,{display:'auto'});
							}
						}, {offset: offset});
					}
			});
			$('.call-on-waypoint').each(function () {
				var $this = $(this);

				$this.waypoint(function () {
					$this.trigger('on-waypoin');
				}, {triggerOnce: true, offset: offset});
			});
		};

		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.imagesLazyLoad = function() {
		var init = function() {
			$('.dfd-img-lazy-load').each(function () {
				var $self = $(this),
					offset = $('body').data('lazy-load-offset') ? $('body').data('lazy-load-offset') : '140%';
				$self.waypoint(function () {
					if(!$self.hasClass('image-loaded')) {
						var $data_src = $self.find('img').attr('data-src');
						if(('devicePixelRatio' in window) && (window.devicePixelRatio > 1) && $self.find('img').attr('data-retina-img')) {
							$data_src = $self.find('img').attr('data-retina-img');
						}
						$self.addClass('image-loaded');
						$self
							//.css('background','none')
							.find('img').attr('src', $data_src).css('opacity','1');
					}
				}, {offset: offset});
			});
			$('.dfd-bg-lazy-load').each(function () {
				var $self = $(this),
					offset = $('body').data('lazy-load-offset') ? $('body').data('lazy-load-offset') : '140%',
					resolution = 799;
				$self.waypoint(function () {
					if(!$self.hasClass('image-loaded')) {
						var $data_src = $self.attr('data-bg-img');
						if(('devicePixelRatio' in window) && (window.devicePixelRatio > 1) && $self.attr('data-retina-bg-img')) {
							$data_src = $self.attr('data-retina-bg-img');
						}
						if($self.data('responsive-resolution')) {
							resolution = $self.data('responsive-resolution');
						}
						if($self.data('responsive-image') && dfd_ronneby.windowWidth <= resolution) {
							$data_src = $self.attr('data-responsive-image');
						}
						$self.addClass('image-loaded');
						$self.css('backgroundImage', 'url('+$data_src+')');
					}
				}, {offset: offset});
			});
		};
		
		dfd_ronneby.window.load(init);
		$('body').on('post-load', function() {
			setTimeout(function() {
				init();
			},1000);
		});
	};
	
	dfd_ronneby.initMobileMenu = function() {
		if($('#header-container').hasClass('header-style-3') || $('#header-container').hasClass('header-style-4')) {
			var $mobileMenu = $('<ul />');
			$('ul.menu-clonable-for-mobiles').each(function() {
				var $sub_menu = $(this).children().clone();
				$mobileMenu = $mobileMenu.append($sub_menu);
			});
		} else {
			var $mobileMenu = $('ul.menu-clonable-for-mobiles').clone();
		}
		$mobileMenu
				.removeAttr('id')
				.find('ul, li, a').addBack()
				.removeAttr('id');
		$mobileMenu
				.find('ul')
				.removeAttr('style');
	
		$mobileMenu
				.attr('class', 'sidr-dropdown-menu')
			.find('ul')
				.attr('class', 'sidr-class-sub-menu');
		
		$mobileMenu.find('.sub-nav > ul').each(function(){
			$(this).unwrap();
		});
		
		$mobileMenu.find('li').each(function(){
			var $self = $(this);
			if($self.find('ul').length > 0) {
				$self.find('> a').append('<i class="sidr-dropdown-toggler" />');
			}
		});
	
		var $menuButton = $('#mobile-menu');
		
		$('.sidr-inner').append($mobileMenu);
		$menuButton.sidr({
			displace: false,
			onOpen: function() {
				$('body').toggleClass('sidr-opened');
				$menuButton.addClass('opened');
			},
			onClose: function() {
				$('body').toggleClass('sidr-opened');
				$menuButton.removeClass('opened');
			}
		});
		
		$('.sidr-dropdown-toggler').unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			$(this).parent('a').toggleClass('active').siblings('ul').slideToggle(500);
		});
		$menuButton.unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			var $self = $(this);
			if(!$self.hasClass('opened')) {
				$.sidr('open');
			} else {
				$.sidr('close');
			}
		});
		$('.dfd-sidr-close').unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			$.sidr('close');
		});
	};
	
	dfd_ronneby.initRetinaLogo = function() {
		if (('devicePixelRatio' in window) && (window.devicePixelRatio > 1)) {
			$('.logo-for-panel img').each(function(){
				var $logo = $(this);
				var retina_src = $logo.attr('data-retina');

				if (!retina_src || retina_src.legth===0) {
					return;
				}

				var w = $logo.attr('data-retina_w');
				var h = $logo.attr('data-retina_h');

				var max = {w: 164, h: 164};

				$logo.attr('src', retina_src);

				if (w<max.w && h<max.h) {
					$logo.css({
						width: Math.round(w/2) + 'px',
						height: Math.round(h/2) + 'px'
					});
				}
			});
		}
	};
	
	dfd_ronneby.initHeaderEvents = function() {
		var init = function() {
			var $header_container = $("#header-container");
			var disable_body_hover = function() {
				$header_container.addClass('dfd-disable-transition');

				setTimeout(function(){
					$header_container.removeClass('dfd-disable-transition');
				}, 400);
			};

			var initAnim = function($el, triggerClass, initClass) {
				if($el && $el.length > 0) {
					if($el.is('#header-container') && $('body').data('header-responsive-width') && (dfd_ronneby.windowWidth) < $('body').data('header-responsive-width')) {
						return;
					}
					$el.addClass(initClass);
					if(dfd_ronneby.window.scrollTop() > 0) {
						$el.addClass(triggerClass);
						dfd_ronneby.window.trigger('reinit-waypoint');
					} else {
						$el.removeClass(triggerClass);
					}
				}
			};

			$header_container = $('#header-container');

			var header_width, hcH, header_wrap_height, header_logo_height, header_bottom_height;

			var $header_wrap = $header_container.find('.header-wrap'),
				$stuning_header = $('#stuning-header'),
				$menu_fixer = $('#menu-fixer');

			var header_el_sizing = function() {
				header_width = $('#main-wrap').width();

				$header_container.find('.dfd-top-row').width(header_width);
				/* menu fixer */

				hcH = ($header_container.find('.dfd-top-row').length) ? $header_container.find('.dfd-top-row').outerHeight() : $header_container.find('#header').outerHeight();

				if ($stuning_header.length > 0) {
					if (
						$menu_fixer.length === 0
						&& (!$header_container.hasClass('dfd-header-layout-fixed')
						|| $header_container.hasClass('dfd-keep-menu-fixer'))
					) {
						$menu_fixer = $('<div id="menu-fixer"></div>');
					}
					$stuning_header.prepend($menu_fixer);
				} else {
					if (
						$header_container.hasClass('dfd-header-layout-fixed') || $('#main-wrap').hasClass('dfd-one-page-scroll-layout') || $header_container.hasClass('menu-position-bottom')
					) {
						if ($menu_fixer.length > 0) {
							$menu_fixer.remove();
						}
					} else {
						if ($menu_fixer.length === 0) {
							$menu_fixer = $('<div id="menu-fixer"></div>');
							$($menu_fixer).insertAfter('#header-container');
						}
					}
				}
				if ($menu_fixer.length > 0) {
					$menu_fixer.height(hcH);
				}
			};

			dfd_ronneby.window.on('load resize', function() {
				header_el_sizing();
				sideHeaderSetter();
			});

			if(
				$header_container.hasClass('dfd-enable-headroom') && !$('#layout').hasClass('one-page-scroll')
			) {
				dfd_ronneby.window.on('load resize scroll', function() {
					initAnim($header_container, 'small', 'animated--header');
				});
			}

			if(
				$('#top-panel-inner').hasClass('dfd-panel-animated')
			) {
				var $top_panel_inner = $('#top-panel-inner .top-panel-inner-wrapper');
				var set_top_panel = function() {
					var height = dfd_ronneby.window.height() - ($('body').css('margin').replace('px', '') * 2);
					$top_panel_inner.outerHeight(height);
				};
				set_top_panel();
				$top_panel_inner.wrapInner('<div class="dfd-vertical-aligned" />');
				$('.top-inner-page').remove();
				//top_panel_animation.init();
				dfd_ronneby.window.on('load reinit-waypoint', function() {
					if(typeof Waypoint != "undefined") {
						setTimeout(function() {
							Waypoint.refreshAll();
						}, 1200);
					}
				});
				dfd_ronneby.window.on('load scroll', function() {
					initAnim($('body'), 'moved', 'animated--body');
				});
				dfd_ronneby.window.on('load resize', set_top_panel);
			}


			/*---------------------------------
				Mega Menu (if enabled)
			-----------------------------------*/
			if (typeof $.initSlider === 'function') {
				setTimeout(function() {
					$.initSlider();
				}, 500);
			}
			if (typeof $.runMegaMenu === 'function') {
				$.runMegaMenu();
			}

			/*---------------------------------
				Drop-down
			-----------------------------------*/
			$('.sel-dropdown').unbind('hover').hover(function(){
				$(this).addClass("hovered");
			}, function(){
				$(this).removeClass("hovered");
			});

			$('.click-dropdown > a').unbind('click touchstart').bind('click touchstart', function(e){
				var $self = $(this).parent();
				e.preventDefault();
				if(!$self.hasClass('active')) {
					$self.addClass('active').siblings('.click-dropdown').removeClass('active');
				} else {
					$self.removeClass('active');
				}
			});

			/*---------------------------------
				Menu animation
			-----------------------------------*/
			$(".nav-item.has-submenu > a").on('click', function() {
				var $self = $(this);
				if ($self.attr('href') != '#' && $self.attr('href') != '' && $self.hasClass('open')) {
					window.location.href = $self.attr('href');
				}

				return false;
			});

			initSearchForm();

			initHeaderSixth();

			initOpenMenu();

			$('#dfd-side-header-activation-button').unbind('click').bind('click touchend', function(e) {
				e.preventDefault();
				$(this).parents('#header-container').toggleClass('active');
			});
			$('body').on('click touchend', '#dfd-menu-button', function(e) {
				e.preventDefault();
				var $self = $(this),
					$menuWrapper = $self.parents('.header-col-right');

				if($menuWrapper.hasClass('active')) {
					$menuWrapper.removeClass('active visible-overflow');
				} else {
					$menuWrapper.addClass('active');
					setTimeout(function() {
						$menuWrapper.addClass('visible-overflow');
					}, 700);
				}
			});

			dfd_ronneby.initRetinaLogo();

			/*---------------------------------
			 Bind Mobile Menu
			 -----------------------------------*/
			dfd_ronneby.initMobileMenu();
		},
		initOpenMenu = function() {
			var button = $('.dfd-menu-button');
			var headerContainer = $('#header-container');
			button.unbind('click').on('click touchend', function(e) {
				e.preventDefault();
				headerContainer.toggleClass('opened');
			});
		},
		initHeaderSixth = function() {
			var container = $('#header-container.header-style-6 .onclick-menu-wrap');
			var button = $('.dfd-click-menu-activation-button a', container);
			var menu = $('nav.onclick-menu', container);
			button.unbind('click').on('click touchend', function(e) {
				e.preventDefault();
				if ($(this).hasClass('opened')) {
					button.removeClass('opened');
				} else {
					button.addClass('opened');
				}
				menu.slideToggle(250);
			});
		},
//		header_items_timeout = function(el_first, el_second) {
//			var box_timer;
//			$(el_first).hover(function() {
//				if (box_timer != undefined) {
//					clearTimeout(box_timer);
//				}
//				$(el_second, $(this)).css('max-height', dfd_ronneby.windowHeight - $('#header > .header-wrap').height() - 40).fadeIn(300);
//			}, function() {
//				var $this = $(this);
//				box_timer = setTimeout(function() {
//					$(el_second, $this).fadeOut(300);
//				},0);
//			});
//		},
		initSearchForm = function() {
			"use strict";
			var button = $('.header-search-switcher');
			var form = $('.form-search-section');
			button.unbind('click').on('click touchend', function() {
				form.fadeToggle(500, function() {
					if (form.is(':visible')) {
						button.addClass("active");
					} else {
						button.removeClass("active");
					}
				});
				form.toggleClass('shift-form');
				return false;
			});
		},
		sideHeaderSetter = function() {
			var header = $('#header-container');
			if(header.hasClass('header-style-5') && $('.boxed_layout').length > 0) {
				var bodyWrapper = $('.boxed_layout');
				var bodyWrapperOffset = bodyWrapper.offset().left;
				if(header.hasClass('left')) {
					header.find('#header').css('left', bodyWrapperOffset);
				}
				if(header.hasClass('right')) {
					header.find('#header').css('right', bodyWrapperOffset);
				}
			}
		};
		
		dfd_ronneby.document.ready(init);
	};
	
	dfd_ronneby.initExtraElements = function() {
		dfd_ronneby.document.ready(function() {
			$('.widget_dfd_author').each(function() {
				$('.widget.soc-icons.dfd-soc-icons-hover-style-13 a', $(this)).dfdEqWidth();
			});

			dfd_ronneby.window.on("resize", function () {
				var $tiled_menu = $('.mega-menu, .sub-nav', '#header');
				if (dfd_ronneby.windowWidth >= screen_medium) {
					$tiled_menu.each(function(){
						if (!$(this).is(':visible')) {
							$(this).removeAttr('style');
						}
					});
				}
			});
			$(".widget_crum_cat_arch").each(function() {
				var $self = $(this),
					$target = $self.find(".dk_toggle");

				$target.on("click touchend", function() {
					$self.find(".dk_container").removeClass("dk_open");
					$(this).parent(".dk_container").toggleClass("dk_open");
				});
				dfd_ronneby.document.mouseup(function (e) {
					if (!$target.is(e.target) && $target.has(e.target).length === 0) {
						$self.find(".dk_container").removeClass("dk_open");
					}
				});
			});

			$('#footer .widget_nav_menu >ul >li').equalHeights();

			/*---------------------------------
			 Scroll To Top
			 -----------------------------------*/
			var $back_to_top = $('.body-back-to-top');
			dfd_ronneby.window.on('scroll', function() {
				if ($back_to_top.length>0) {
					if(dfd_ronneby.windowScrollTop > 80) {
						$back_to_top.addClass('active');
					} else {
						$back_to_top.removeClass('active');
					}
				}
			});

			var duration = 800;
			$('.back-to-top, .body-back-to-top').click(function (e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, duration);
				return false;
			});
			
			$('.widget_akismet_widget strong').wrapInner('<span />');
			
			var $container = $('.pagination');
			if($container.hasClass('dfd-pagination-style-3') || $container.hasClass('dfd-pagination-style-4')) {
				var $current = $('.page-numbers ', $container).find('.current');
				$current.parent().addClass('current-parent');
				$current.parent().prev().addClass('before-current');
				$current.parent().next().addClass('after-current');
			}
			var $share_container = $('.entry-share-popup, .entry-share-no-popup, .entry-share-popup-folio, .dfd-single-share-fixed');

			if($($share_container).length  > 0) {
				$('.entry-share-clickable > a').each(function(){
					var $closebutton = $(this).parent().parent().siblings('.entry-share-clickable-close').find('>a');
					var $popup = $(this).parent().parent().siblings('.entry-share-popup-folio');

					$(this).click(function(){
						$popup.show().animate({top: '0'}, 200, function () {
							$closebutton.show();
						});

						return false;
					});

					$closebutton.click(function() {
						$popup.animate({top: '100%'}, 200, function() {
							$closebutton.hide();
						});
						setTimeout(function() {
							$popup.hide();
						},200);

						return false;
					});
				});

				$('.dfd-share-popup').unbind('click').bind('click touchend', function(e) {
					e.preventDefault();
					var $self = $(this);
					$self.siblings('.entry-share-popup').toggle('slow');
				});
			}
		});
	};
	
	dfd_ronneby.widgetTabs = function() {
		dfd_ronneby.document.ready(function() {
			$('.widget_crum_widget_tabs .tabs a').click(function() {
				var href = $(this).attr('href');
				if(!$(this).parent().hasClass('active')) {
					$(this).parent().addClass('active').siblings('dd').removeClass('active').parents('.tabs')
						.siblings('.tabs-content').find('li'+href+'Tab').addClass('active').siblings('li').removeClass('active');
				}
			});
		});
	};
	
	dfd_ronneby.loginFormHeader = function() {
		if($('#header .login-header').length <= 0) {
			return false;
		}
		var loginContainer = $('#header .login-header'),
			loginButton = loginContainer.find('a[data-reveal-id]'),
			loginBg = loginContainer.find('.reveal-modal-bg');
		loginButton.on('click', function(e) {
			e.preventDefault();
			loginContainer.find('#loginModal').addClass('open').fadeIn(300);
			loginBg.fadeIn(300);
		});
		loginBg.on('click', function(e) {
			e.preventDefault();
			loginContainer.find('#loginModal').removeClass('open').fadeOut(300);
			$(this).fadeOut(300);
		});
	};
	
	dfd_ronneby.init = function() {
		dfd_ronneby.hideBeforeAnimation();
		dfd_ronneby.initSizing();
		dfd_ronneby.initHeaderEvents();
		dfd_ronneby.frontentEditorReinitScripts();
		dfd_ronneby.initBackground();
		dfd_ronneby.initfluidvids();
		dfd_ronneby.initShortcodes();
		dfd_ronneby.initHoverDir();
		dfd_ronneby.anchorSmoothScroll();
		dfd_ronneby.initTopInnerPage();
		dfd_ronneby.initSideArea();
		dfd_ronneby.initPostsCarousel();
		dfd_ronneby.initPostsModule();
		dfd_ronneby.initGallery();
		dfd_ronneby.initBuddyPress();
		dfd_ronneby.initHeaderHorizontalScroll();
		dfd_ronneby.initSortPanelHideElems();
		dfd_ronneby.initPrettyPhoto();
		dfd_ronneby.initTaxonomyIsotope();
		dfd_ronneby.initSpacer();
		dfd_ronneby.initShortcodesLoadResize();
		dfd_ronneby.initStunHeaderParallax();
		dfd_ronneby.initEqHeight();
		dfd_ronneby.initStickInParent();
		dfd_ronneby.initAnimation();
		dfd_ronneby.imagesLazyLoad();
		dfd_ronneby.initExtraElements();
		dfd_ronneby.widgetTabs();
		dfd_ronneby.loginFormHeader();
	};
	
	dfd_ronneby.init();
})(jQuery);