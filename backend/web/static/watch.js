!function(t){if(!t)throw"The library must be executed in browser env";var e=null,n=null,r="//calm-meadow-1664.herokuapp.com/index.php?r=analytics/",o="$$__ab_test_variant",i="bootstrap",u="a",c="b",s="success",a=null,f={},p=function(){var e=t.document.createElement("script");return t.document.head.appendChild(e),e},l=function(t){t.parentNode.removeChild(t)},d=function(t,n){var r,o,i,u=p(),c="",s=e.defer(),f=!1;return r=function(t){f=t},i=a._functionsStore.push(r),o="window.$__ab_Test._functionsStore["+(i-1).toString()+"]",u.onload=function(){l(u),s.resolve(f)},n.cb=o,c=v(n),u.src=t+"&"+c,s.promise},h=function(e){return e.replace(t.location.protocol,"").replace(":"+t.location.port,"").replace(t.location.host,"")},y=function(e){t.location.href=e},v=function(t){var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")},m=function(t){if(!t.id)throw"AB-Test: set param `id` for main script";a=this,a.id=t.id,this.init()};m.prototype={init:function(){e=m.Q,n=m.cookie,a._functionsStore=[],a.getSettings().then(function(){a.processAbTest()})},getSettings:function(){var t=e.defer();return d(r+"settings",{id:a.id}).then(function(e){f=e,console.dir(f),t.resolve()},function(){t.reject()}),t.promise},getAction:function(){var e=t.location.pathname;return console.log("url:"),console.log(h(f.bootstrap_url)),e===h(f.bootstrap_url)?i:e===h(f.a_url)?u:e===h(f.b_url)?c:h(f.success_url)?s:!1},processAbTest:function(){console.log("process 1");var e=t.location.host;if(-1===f.bootstrap_url.indexOf(e))throw"AB-Test: Wrong domain";switch(console.log("process 2"),console.log("Action: "+a.getAction()),a.getAction()){case i:a.goToVariant();break;case u:a.handleVariant(u);break;case c:a.handleVariant(c);break;case s:a.handleSuccess();break;default:console.log("no action")}},goToVariant:function(){var t,e=100,n=0,r=(Math.floor(Math.random()*(e-n+1))+n)%2;t=0===r?f.a_url:f.b_url,y(h(t))},handleVariant:function(t){n.set(o,t),d(r+"grab-data",{action:"show",variant:t,id:a.id})},handleSuccess:function(){var t=n.get(o);d(r+"grab-data",{action:"success",variant:t,id:a.id})}},"undefined"==typeof t.$__Ab_Test&&(t.$__Ab_Test=m)}("object"==typeof window?window:!1),function(t){"use strict";if("function"==typeof bootstrap)bootstrap("promise",t);else if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=t}else if("undefined"!=typeof self&&self.$__Ab_Test)self.$__Ab_Test.Q=t();else{if("undefined"==typeof self)throw new Error("This environment was not anticipated by Q. Please file a bug.");self.Q=t()}}(function(){"use strict";function t(t){return function(){return H.apply(t,arguments)}}function e(t){return t===Object(t)}function n(t){return"[object StopIteration]"===ne(t)||t instanceof q}function r(t,e){if(M&&e.stack&&"object"==typeof t&&null!==t&&t.stack&&-1===t.stack.indexOf(re)){for(var n=[],r=e;r;r=r.source)r.stack&&n.unshift(r.stack);n.unshift(t.stack);var i=n.join("\n"+re+"\n");t.stack=o(i)}}function o(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;++r){var o=e[r];c(o)||i(o)||!o||n.push(o)}return n.join("\n")}function i(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function u(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function c(t){var e=u(t);if(!e)return!1;var n=e[0],r=e[1];return n===B&&r>=G&&ce>=r}function s(){if(M)try{throw new Error}catch(t){var e=t.stack.split("\n"),n=e[0].indexOf("@")>0?e[1]:e[2],r=u(n);if(!r)return;return B=r[0],r[1]}}function a(t,e,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e+" is deprecated, use "+n+" instead.",new Error("").stack),t.apply(t,arguments)}}function f(t){return t instanceof h?t:g(t)?S(t):R(t)}function p(){function t(t){e=t,i.source=t,L(n,function(e,n){f.nextTick(function(){t.promiseDispatch.apply(t,n)})},void 0),n=void 0,r=void 0}var e,n=[],r=[],o=Z(p.prototype),i=Z(h.prototype);if(i.promiseDispatch=function(t,o,i){var u=J(arguments);n?(n.push(u),"when"===o&&i[1]&&r.push(i[1])):f.nextTick(function(){e.promiseDispatch.apply(e,u)})},i.valueOf=function(){if(n)return i;var t=v(e);return m(t)&&(e=t),t},i.inspect=function(){return e?e.inspect():{state:"pending"}},f.longStackSupport&&M)try{throw new Error}catch(u){i.stack=u.stack.substring(u.stack.indexOf("\n")+1)}return o.promise=i,o.resolve=function(n){e||t(f(n))},o.fulfill=function(n){e||t(R(n))},o.reject=function(n){e||t(T(n))},o.notify=function(t){e||L(r,function(e,n){f.nextTick(function(){n(t)})},void 0)},o}function l(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=p();try{t(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}return e.promise}function d(t){return l(function(e,n){for(var r=0,o=t.length;o>r;r++)f(t[r]).then(e,n)})}function h(t,e,n){void 0===e&&(e=function(t){return T(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var r=Z(h.prototype);if(r.promiseDispatch=function(n,o,i){var u;try{u=t[o]?t[o].apply(r,i):e.call(r,o,i)}catch(c){u=T(c)}n&&n(u)},r.inspect=n,n){var o=n();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function y(t,e,n,r){return f(t).then(e,n,r)}function v(t){if(m(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function m(t){return t instanceof h}function g(t){return e(t)&&"function"==typeof t.then}function k(t){return m(t)&&"pending"===t.inspect().state}function w(t){return!m(t)||"fulfilled"===t.inspect().state}function b(t){return m(t)&&"rejected"===t.inspect().state}function _(){oe.length=0,ie.length=0,ue||(ue=!0)}function x(t,e){ue&&(ie.push(t),oe.push(e&&"undefined"!=typeof e.stack?e.stack:"(no stack) "+e))}function j(t){if(ue){var e=X(ie,t);-1!==e&&(ie.splice(e,1),oe.splice(e,1))}}function T(t){var e=h({when:function(e){return e&&j(this),e?e(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return x(e,t),e}function R(t){return h({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},"delete":function(e){delete t[e]},post:function(e,n){return null===e||void 0===e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return ee(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function S(t){var e=p();return f.nextTick(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}}),e.promise}function C(t){return h({isDef:function(){}},function(e,n){return N(t,e,n)},function(){return f(t).inspect()})}function D(t,e,n){return f(t).spread(e,n)}function E(t){return function(){function e(t,e){var u;if("undefined"==typeof StopIteration){try{u=r[t](e)}catch(c){return T(c)}return u.done?f(u.value):y(u.value,o,i)}try{u=r[t](e)}catch(c){return n(c)?f(c.value):T(c)}return y(u,o,i)}var r=t.apply(this,arguments),o=e.bind(e,"next"),i=e.bind(e,"throw");return o()}}function O(t){f.done(f.async(t)())}function A(t){throw new q(t)}function P(t){return function(){return D([this,$(arguments)],function(e,n){return t.apply(e,n)})}}function N(t,e,n){return f(t).dispatch(e,n)}function $(t){return y(t,function(t){var e=0,n=p();return L(t,function(r,o,i){var u;m(o)&&"fulfilled"===(u=o.inspect()).state?t[i]=u.value:(++e,y(o,function(r){t[i]=r,0===--e&&n.resolve(t)},n.reject,function(t){n.notify({index:i,value:t})}))},void 0),0===e&&n.resolve(t),n.promise})}function U(t){if(0===t.length)return f.resolve();var e=f.defer(),n=0;return L(t,function(r,o,i){function u(t){e.resolve(t)}function c(){n--,0===n&&e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))}function s(t){e.notify({index:i,value:t})}var a=t[i];n++,y(a,u,c,s)},void 0),e.promise}function I(t){return y(t,function(t){return t=Y(t,f),y($(Y(t,function(t){return y(t,W,W)})),function(){return t})})}function V(t){return f(t).allSettled()}function F(t,e){return f(t).then(void 0,void 0,e)}function K(t,e){return f(t).nodeify(e)}var M=!1;try{throw new Error}catch(Q){M=!!Q.stack}var B,q,G=s(),W=function(){},z=function(){function t(){for(;e.next;){e=e.next;var n=e.task;e.task=void 0;var o=e.domain;o&&(e.domain=void 0,o.enter());try{n()}catch(u){if(i)throw o&&o.exit(),setTimeout(t,0),o&&o.enter(),u;setTimeout(function(){throw u},0)}o&&o.exit()}r=!1}var e={task:void 0,next:null},n=e,r=!1,o=void 0,i=!1;if(z=function(t){n=n.next={task:t,domain:i&&process.domain,next:null},r||(r=!0,o())},"undefined"!=typeof process&&process.nextTick)i=!0,o=function(){process.nextTick(t)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,t):function(){setImmediate(t)};else if("undefined"!=typeof MessageChannel){var u=new MessageChannel;u.port1.onmessage=function(){o=c,u.port1.onmessage=t,t()};var c=function(){u.port2.postMessage(0)};o=function(){setTimeout(t,0),c()}}else o=function(){setTimeout(t,0)};return z}(),H=Function.call,J=t(Array.prototype.slice),L=t(Array.prototype.reduce||function(t,e){var n=0,r=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=r)throw new TypeError}for(;r>n;n++)n in this&&(e=t(e,this[n],n));return e}),X=t(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),Y=t(Array.prototype.map||function(t,e){var n=this,r=[];return L(n,function(o,i,u){r.push(t.call(e,i,u,n))},void 0),r}),Z=Object.create||function(t){function e(){}return e.prototype=t,new e},te=t(Object.prototype.hasOwnProperty),ee=Object.keys||function(t){var e=[];for(var n in t)te(t,n)&&e.push(n);return e},ne=t(Object.prototype.toString);q="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var re="From previous event:";f.resolve=f,f.nextTick=z,f.longStackSupport=!1,"object"==typeof process&&process&&process.env&&process.env.Q_DEBUG&&(f.longStackSupport=!0),f.defer=p,p.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):t.resolve(arguments.length>2?J(arguments,1):n)}},f.Promise=l,f.promise=l,l.race=d,l.all=$,l.reject=T,l.resolve=f,f.passByCopy=function(t){return t},h.prototype.passByCopy=function(){return this},f.join=function(t,e){return f(t).join(e)},h.prototype.join=function(t){return f([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Can't join: not the same: "+t+" "+e)})},f.race=d,h.prototype.race=function(){return this.then(f.race)},f.makePromise=h,h.prototype.toString=function(){return"[object Promise]"},h.prototype.then=function(t,e,n){function o(e){try{return"function"==typeof t?t(e):e}catch(n){return T(n)}}function i(t){if("function"==typeof e){r(t,c);try{return e(t)}catch(n){return T(n)}}return T(t)}function u(t){return"function"==typeof n?n(t):t}var c=this,s=p(),a=!1;return f.nextTick(function(){c.promiseDispatch(function(t){a||(a=!0,s.resolve(o(t)))},"when",[function(t){a||(a=!0,s.resolve(i(t)))}])}),c.promiseDispatch(void 0,"when",[void 0,function(t){var e,n=!1;try{e=u(t)}catch(r){if(n=!0,!f.onerror)throw r;f.onerror(r)}n||s.notify(e)}]),s.promise},f.tap=function(t,e){return f(t).tap(e)},h.prototype.tap=function(t){return t=f(t),this.then(function(e){return t.fcall(e).thenResolve(e)})},f.when=y,h.prototype.thenResolve=function(t){return this.then(function(){return t})},f.thenResolve=function(t,e){return f(t).thenResolve(e)},h.prototype.thenReject=function(t){return this.then(function(){throw t})},f.thenReject=function(t,e){return f(t).thenReject(e)},f.nearer=v,f.isPromise=m,f.isPromiseAlike=g,f.isPending=k,h.prototype.isPending=function(){return"pending"===this.inspect().state},f.isFulfilled=w,h.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},f.isRejected=b,h.prototype.isRejected=function(){return"rejected"===this.inspect().state};var oe=[],ie=[],ue=!0;f.resetUnhandledRejections=_,f.getUnhandledReasons=function(){return oe.slice()},f.stopUnhandledRejectionTracking=function(){_(),ue=!1},_(),f.reject=T,f.fulfill=R,f.master=C,f.spread=D,h.prototype.spread=function(t,e){return this.all().then(function(e){return t.apply(void 0,e)},e)},f.async=E,f.spawn=O,f["return"]=A,f.promised=P,f.dispatch=N,h.prototype.dispatch=function(t,e){var n=this,r=p();return f.nextTick(function(){n.promiseDispatch(r.resolve,t,e)}),r.promise},f.get=function(t,e){return f(t).dispatch("get",[e])},h.prototype.get=function(t){return this.dispatch("get",[t])},f.set=function(t,e,n){return f(t).dispatch("set",[e,n])},h.prototype.set=function(t,e){return this.dispatch("set",[t,e])},f.del=f["delete"]=function(t,e){return f(t).dispatch("delete",[e])},h.prototype.del=h.prototype["delete"]=function(t){return this.dispatch("delete",[t])},f.mapply=f.post=function(t,e,n){return f(t).dispatch("post",[e,n])},h.prototype.mapply=h.prototype.post=function(t,e){return this.dispatch("post",[t,e])},f.send=f.mcall=f.invoke=function(t,e){return f(t).dispatch("post",[e,J(arguments,2)])},h.prototype.send=h.prototype.mcall=h.prototype.invoke=function(t){return this.dispatch("post",[t,J(arguments,1)])},f.fapply=function(t,e){return f(t).dispatch("apply",[void 0,e])},h.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},f["try"]=f.fcall=function(t){return f(t).dispatch("apply",[void 0,J(arguments,1)])},h.prototype.fcall=function(){return this.dispatch("apply",[void 0,J(arguments)])},f.fbind=function(t){var e=f(t),n=J(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(J(arguments))])}},h.prototype.fbind=function(){var t=this,e=J(arguments);return function(){return t.dispatch("apply",[this,e.concat(J(arguments))])}},f.keys=function(t){return f(t).dispatch("keys",[])},h.prototype.keys=function(){return this.dispatch("keys",[])},f.all=$,h.prototype.all=function(){return $(this)},f.any=U,h.prototype.any=function(){return U(this)},f.allResolved=a(I,"allResolved","allSettled"),h.prototype.allResolved=function(){return I(this)},f.allSettled=V,h.prototype.allSettled=function(){return this.then(function(t){return $(Y(t,function(t){function e(){return t.inspect()}return t=f(t),t.then(e,e)}))})},f.fail=f["catch"]=function(t,e){return f(t).then(void 0,e)},h.prototype.fail=h.prototype["catch"]=function(t){return this.then(void 0,t)},f.progress=F,h.prototype.progress=function(t){return this.then(void 0,void 0,t)},f.fin=f["finally"]=function(t,e){return f(t)["finally"](e)},h.prototype.fin=h.prototype["finally"]=function(t){return t=f(t),this.then(function(e){return t.fcall().then(function(){return e})},function(e){return t.fcall().then(function(){throw e})})},f.done=function(t,e,n,r){return f(t).done(e,n,r)},h.prototype.done=function(t,e,n){var o=function(t){f.nextTick(function(){if(r(t,i),!f.onerror)throw t;f.onerror(t)})},i=t||e||n?this.then(t,e,n):this;"object"==typeof process&&process&&process.domain&&(o=process.domain.bind(o)),i.then(void 0,o)},f.timeout=function(t,e,n){return f(t).timeout(e,n)},h.prototype.timeout=function(t,e){var n=p(),r=setTimeout(function(){e&&"string"!=typeof e||(e=new Error(e||"Timed out after "+t+" ms"),e.code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(r),n.resolve(t)},function(t){clearTimeout(r),n.reject(t)},n.notify),n.promise},f.delay=function(t,e){return void 0===e&&(e=t,t=void 0),f(t).delay(e)},h.prototype.delay=function(t){return this.then(function(e){var n=p();return setTimeout(function(){n.resolve(e)},t),n.promise})},f.nfapply=function(t,e){return f(t).nfapply(e)},h.prototype.nfapply=function(t){var e=p(),n=J(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},f.nfcall=function(t){var e=J(arguments,1);return f(t).nfapply(e)},h.prototype.nfcall=function(){var t=J(arguments),e=p();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},f.nfbind=f.denodeify=function(t){var e=J(arguments,1);return function(){var n=e.concat(J(arguments)),r=p();return n.push(r.makeNodeResolver()),f(t).fapply(n).fail(r.reject),r.promise}},h.prototype.nfbind=h.prototype.denodeify=function(){var t=J(arguments);return t.unshift(this),f.denodeify.apply(void 0,t)},f.nbind=function(t,e){var n=J(arguments,2);return function(){function r(){return t.apply(e,arguments)}var o=n.concat(J(arguments)),i=p();return o.push(i.makeNodeResolver()),f(r).fapply(o).fail(i.reject),i.promise}},h.prototype.nbind=function(){var t=J(arguments,0);return t.unshift(this),f.nbind.apply(void 0,t)},f.nmapply=f.npost=function(t,e,n){return f(t).npost(e,n)},h.prototype.nmapply=h.prototype.npost=function(t,e){var n=J(e||[]),r=p();return n.push(r.makeNodeResolver()),this.dispatch("post",[t,n]).fail(r.reject),r.promise},f.nsend=f.nmcall=f.ninvoke=function(t,e){var n=J(arguments,2),r=p();return n.push(r.makeNodeResolver()),f(t).dispatch("post",[e,n]).fail(r.reject),r.promise},h.prototype.nsend=h.prototype.nmcall=h.prototype.ninvoke=function(t){var e=J(arguments,1),n=p();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},f.nodeify=K,h.prototype.nodeify=function(t){return t?void this.then(function(e){f.nextTick(function(){t(null,e)})},function(e){f.nextTick(function(){t(e)})}):this};var ce=s();return f}),function(t,e){"use strict";var n=function(t){if("object"!=typeof t.document)throw new Error("Cookies.js requires a `window` with a `document` object");var n=function(t,e,r){return 1===arguments.length?n.get(t):n.set(t,e,r)};return n._document=t.document,n._cacheKeyPrefix="cookey.",n._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),n.defaults={path:"/",secure:!1},n.get=function(t){return n._cachedDocumentCookie!==n._document.cookie&&n._renewCache(),n._cache[n._cacheKeyPrefix+t]},n.set=function(t,r,o){return o=n._getExtendedOptions(o),o.expires=n._getExpiresDate(r===e?-1:o.expires),n._document.cookie=n._generateCookieString(t,r,o),n},n.expire=function(t,r){return n.set(t,e,r)},n._getExtendedOptions=function(t){return{path:t&&t.path||n.defaults.path,domain:t&&t.domain||n.defaults.domain,expires:t&&t.expires||n.defaults.expires,secure:t&&t.secure!==e?t.secure:n.defaults.secure}},n._isValidDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())},n._getExpiresDate=function(t,e){if(e=e||new Date,"number"==typeof t?t=1/0===t?n._maxExpireDate:new Date(e.getTime()+1e3*t):"string"==typeof t&&(t=new Date(t)),t&&!n._isValidDate(t))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return t},n._generateCookieString=function(t,e,n){t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent),t=t.replace(/\(/g,"%28").replace(/\)/g,"%29"),e=(e+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent),n=n||{};var r=t+"="+e;return r+=n.path?";path="+n.path:"",r+=n.domain?";domain="+n.domain:"",r+=n.expires?";expires="+n.expires.toUTCString():"",r+=n.secure?";secure":""},n._getCacheFromString=function(t){for(var r={},o=t?t.split("; "):[],i=0;i<o.length;i++){var u=n._getKeyValuePairFromCookieString(o[i]);r[n._cacheKeyPrefix+u.key]===e&&(r[n._cacheKeyPrefix+u.key]=u.value)}return r},n._getKeyValuePairFromCookieString=function(t){var e=t.indexOf("=");return e=0>e?t.length:e,{key:decodeURIComponent(t.substr(0,e)),value:decodeURIComponent(t.substr(e+1))}},n._renewCache=function(){n._cache=n._getCacheFromString(n._document.cookie),n._cachedDocumentCookie=n._document.cookie},n._areEnabled=function(){var t="cookies.js",e="1"===n.set(t,1).get(t);return n.expire(t),e},n.enabled=n._areEnabled(),n},r="object"==typeof t.document?n(t):n;"function"==typeof define&&define.amd?define(function(){return r}):"object"==typeof exports?("object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=r),exports.Cookies=r):window.$__Ab_Test?window.$__Ab_Test.cookie=r:t.Cookies=r}("undefined"==typeof window?this:window);