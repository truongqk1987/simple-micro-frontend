System.register([],(function(r,t){return{execute:function(){r((()=>{var r={722:(r,t,e)=>{const n=e(905).R;t.s=function(r){if(r||(r=1),!e.y.meta||!e.y.meta.url)throw console.error("__system_context__",e.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");e.p=n(e.y.meta.url,r)}},905:(r,t,e)=>{t.R=function(r,t){var e=document.createElement("a");e.href=r;for(var n="/"===e.pathname[0]?e.pathname:"/"+e.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+r);var s=n.slice(0,i+1);return e.protocol+"//"+e.host+s};Number.isInteger}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return r[t](i,i.exports,n),i.exports}n.y=t,n.d=(r,t)=>{for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),n.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.p="";var o={};return(0,n(722).s)(1),(()=>{"use strict";n.r(o),n.d(o,{ProductService:()=>r});var r={};n.r(r),n.d(r,{subscribe:()=>B,update:()=>q});var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},t(r,e)};function e(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return s}function u(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))}function c(r){return"function"==typeof r}function a(r){var t=r((function(r){Error.call(r),r.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create;var l=a((function(r){return function(t){r(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function p(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var f=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return r.prototype.unsubscribe=function(){var r,t,e,n,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var p=i(a),f=p.next();!f.done;f=p.next())f.value.remove(this)}catch(t){r={error:t}}finally{try{f&&!f.done&&(t=p.return)&&t.call(p)}finally{if(r)throw r.error}}else a.remove(this);var h=this.initialTeardown;if(c(h))try{h()}catch(r){o=r instanceof l?r.errors:[r]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=i(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{d(m)}catch(r){o=null!=o?o:[],r instanceof l?o=u(u([],s(o)),s(r.errors)):o.push(r)}}}catch(r){e={error:r}}finally{try{b&&!b.done&&(n=y.return)&&n.call(y)}finally{if(e)throw e.error}}}if(o)throw new l(o)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)d(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&p(t,r)},r.prototype.remove=function(t){var e=this._finalizers;e&&p(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}(),h=f.EMPTY;function v(r){return r instanceof f||r&&"closed"in r&&c(r.remove)&&c(r.add)&&c(r.unsubscribe)}function d(r){c(r)?r():r.unsubscribe()}var y=null,b=null,m=void 0,_=!1,w=!1,g={setTimeout:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var o=g.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,u([r,t],s(e))):setTimeout.apply(void 0,u([r,t],s(e)))},clearTimeout:function(r){var t=g.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function S(){}var x=O("C",void 0,void 0);function O(r,t,e){return{kind:r,value:t,error:e}}var E=null;function T(r){if(_){var t=!E;if(t&&(E={errorThrown:!1,error:null}),r(),t){var e=E,n=e.errorThrown,o=e.error;if(E=null,n)throw o}}else r()}var j=function(r){function t(t){var e=r.call(this)||this;return e.isStopped=!1,t?(e.destination=t,v(t)&&t.add(e)):e.destination=M,e}return e(t,r),t.create=function(r,t,e){return new k(r,t,e)},t.prototype.next=function(r){this.isStopped?I(function(r){return O("N",r,void 0)}(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?I(O("E",void 0,r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?I(x,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(f),P=Function.prototype.bind;function A(r,t){return P.call(r,t)}var C=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){z(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){z(r)}else z(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){z(r)}},r}(),k=function(r){function t(t,e,n){var o,i,s=r.call(this)||this;return c(t)||!t?o={next:null!=t?t:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:s&&w?((i=Object.create(t)).unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&A(t.next,i),error:t.error&&A(t.error,i),complete:t.complete&&A(t.complete,i)}):o=t,s.destination=new C(o),s}return e(t,r),t}(j);function z(r){var t;_?(t=r,_&&E&&(E.errorThrown=!0,E.error=t)):function(r){g.setTimeout((function(){if(!y)throw r;y(r)}))}(r)}function I(r,t){var e=b;e&&g.setTimeout((function(){return e(r,t)}))}var M={closed:!0,next:S,error:function(r){throw r},complete:S},F="function"==typeof Symbol&&Symbol.observable||"@@observable";function R(r){return r}function U(r){return 0===r.length?R:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var L=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(r,t,e){var n,o=this,i=(n=r)&&n instanceof j||function(r){return r&&c(r.next)&&c(r.error)&&c(r.complete)}(n)&&v(n)?r:new k(r,t,e);return T((function(){var r=o,t=r.operator,e=r.source;i.add(t?t.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var e=this;return new(t=N(t))((function(t,n){var o=new k({next:function(t){try{r(t)}catch(r){n(r),o.unsubscribe()}},error:n,complete:t});e.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[F]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return U(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=N(r))((function(r,e){var n;t.subscribe((function(r){return n=r}),(function(r){return e(r)}),(function(){return r(n)}))}))},r.create=function(t){return new r(t)},r}();function N(r){var t;return null!==(t=null!=r?r:m)&&void 0!==t?t:Promise}var V=a((function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Y=function(r){function t(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e(t,r),t.prototype.lift=function(r){var t=new D(this,this);return t.operator=r,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new V},t.prototype.next=function(r){var t=this;T((function(){var e,n;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var o=i(t.currentObservers),s=o.next();!s.done;s=o.next())s.value.next(r)}catch(r){e={error:r}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}}}))},t.prototype.error=function(r){var t=this;T((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=r;for(var e=t.observers;e.length;)e.shift().error(r)}}))},t.prototype.complete=function(){var r=this;T((function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var t=r.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return(null===(r=this.observers)||void 0===r?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var t=this,e=this,n=e.hasError,o=e.isStopped,i=e.observers;return n||o?h:(this.currentObservers=null,i.push(r),new f((function(){t.currentObservers=null,p(i,r)})))},t.prototype._checkFinalizedStatuses=function(r){var t=this,e=t.hasError,n=t.thrownError,o=t.isStopped;e?r.error(n):o&&r.complete()},t.prototype.asObservable=function(){var r=new L;return r.source=this,r},t.create=function(r,t){return new D(r,t)},t}(L),D=function(r){function t(t,e){var n=r.call(this)||this;return n.destination=t,n.source=e,n}return e(t,r),t.prototype.next=function(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===e||e.call(t,r)},t.prototype.error=function(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===e||e.call(t,r)},t.prototype.complete=function(){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===t||t.call(r)},t.prototype._subscribe=function(r){var t,e;return null!==(e=null===(t=this.source)||void 0===t?void 0:t.subscribe(r))&&void 0!==e?e:h},t}(Y),J=new(function(r){function t(t){var e=r.call(this)||this;return e._value=t,e}return e(t,r),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(t){var e=r.prototype._subscribe.call(this,t);return!e.closed&&t.next(this._value),e},t.prototype.getValue=function(){var r=this,t=r.hasError,e=r.thrownError,n=r._value;if(t)throw e;return this._throwIfClosed(),n},t.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},t}(Y))(null),q=function(r){J.next(r)},B=function(r){return J.subscribe(r)}})(),o})())}}}));
//# sourceMappingURL=ts-utils.js.map