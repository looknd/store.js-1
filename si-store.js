!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.store=t()}(this,function(){"use strict";var e={size:null,id:"store",expires:null,enableCache:!0,storage:"local"},t=function(e,t){if(e)if(e.length===+e.length&&e.length-1 in e){var n;for(n=0;n<e.length&&t.call(e[n],e[n],n)!==!1;n++);}else for(var i in e)if(t.call(e[i],e[i],i)===!1)break},n=function(e){return t(Array.prototype.slice.call(arguments,1),function(n){t(n,function(t,i){n.hasOwnProperty(i)&&(e[i]=t)})}),e},i=window.localStorage,r={set:function(e,t){i.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(i.getItem(e))},remove:function(e){i.removeItem(e)},each:function(e){for(var t in i)e(this.get(t),t)}},o=window.sessionStorage,u={set:function(e,t){o.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(o.getItem(e))},remove:function(e){o.removeItem(e)},each:function(e){for(var t in o)if(e(this.get(t),t)===!1)return}},s={},a=function(e,t){s[e]=t},f=function(e){return s[e]};a("local",r),a("session",u);var l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(){function t(i){l(this,t),this.options=n({},e,i),this.storage=f(i.storage),this.length=0,this._init()}return c(t,[{key:"_init",value:function(){}},{key:"set",value:function(e,t,n){var i=this._setVal(e,t,n);return e=this._setKey(e),this.storage.set(e,i),this}},{key:"get",value:function(e){e=this._setKey(e);var t=this.storage.get(e);return this._getVal(t)}},{key:"forEach",value:function(e){var t=this;this.storage.each(function(n,i){if(i=t._getKey(i)){var r=t._getVal(n);void 0!==r&&null!==r&&e(r,i)}})}},{key:"clear",value:function(){var e=this;return this.forEach(function(t,n){e.remove(n)}),this}},{key:"remove",value:function(e){return e=this._setKey(e),this.storage.remove(e),this}},{key:"has",value:function(e){return!!this.get(e)}},{key:"getAll",value:function(){var e={};return this.forEach(function(t,n){e[n]=t}),e}},{key:"_setVal",value:function(e,t,n){return{value:t,key:e,exp:n||this.options.expires,time:(new Date).getTime()}}},{key:"_getVal",value:function(e){if(null===e)return null;var t=(new Date).getTime();return e.exp&&t-e.time>e.exp?(this.storage.remove(e.key),null):e.value}},{key:"_setKey",value:function(e){return this.options.id+"_"+e}},{key:"_getKey",value:function(e){if(0===e.indexOf(this.options.id+"_"))return e.substring(this.options.id.length+1)}}]),t}(),v=new h;return v.version="0.1.0",v.create=function(e){return new h(e)},v.register=a,v});
//# sourceMappingURL=si-store.js.map