"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=require("gatsby-plugin-image");function e(t){if(t&&t.__esModule)return t;var r=Object.create(null);return t&&Object.keys(t).forEach((function(e){if("default"!==e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})}})),r.default=t,Object.freeze(r)}var n=e(t),o=function(){return o=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},o.apply(this,arguments)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,u="object"==typeof i&&i&&i.Object===Object&&i,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=l.Symbol,f=s,v=Object.prototype,p=v.hasOwnProperty,h=v.toString,d=f?f.toStringTag:void 0;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(t){var r=p.call(t,d),e=t[d];try{t[d]=void 0;var n=!0}catch(t){}var o=h.call(t);return n&&(r?t[d]=e:delete t[d]),o},_=Object.prototype.toString;var g=y,b=function(t){return _.call(t)},j=s?s.toStringTag:void 0;var m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?g(t):b(t)};var O=m,w=function(t){return null!=t&&"object"==typeof t};var z=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==O(t)},P=a,S=z,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var $=function(t,r){if(P(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!S(t))||(T.test(t)||!I.test(t)||null!=r&&t in Object(r))};var x=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},E=m,k=x;var A,F=function(t){if(!k(t))return!1;var r=E(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},C=l["__core-js_shared__"],D=(A=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var N=function(t){return!!D&&D in t},q=Function.prototype.toString;var M=F,G=N,R=x,U=function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,B=Function.prototype,H=Object.prototype,J=B.toString,K=H.hasOwnProperty,L=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!R(t)||G(t))&&(M(t)?L:W).test(U(t))},V=function(t,r){return null==t?void 0:t[r]};var X=function(t,r){var e=V(t,r);return Q(e)?e:void 0},Y=X(Object,"create"),Z=Y;var tt=function(){this.__data__=Z?Z(null):{},this.size=0};var rt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},et=Y,nt=Object.prototype.hasOwnProperty;var ot=function(t){var r=this.__data__;if(et){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return nt.call(r,t)?r[t]:void 0},it=Y,at=Object.prototype.hasOwnProperty;var ut=Y;var ct=tt,lt=rt,st=ot,ft=function(t){var r=this.__data__;return it?void 0!==r[t]:at.call(r,t)},vt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ut&&void 0===r?"__lodash_hash_undefined__":r,this};function pt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}pt.prototype.clear=ct,pt.prototype.delete=lt,pt.prototype.get=st,pt.prototype.has=ft,pt.prototype.set=vt;var ht=pt;var dt=function(){this.__data__=[],this.size=0};var yt=function(t,r){return t===r||t!=t&&r!=r};var _t=function(t,r){for(var e=t.length;e--;)if(yt(t[e][0],r))return e;return-1},gt=_t,bt=Array.prototype.splice;var jt=_t;var mt=_t;var Ot=_t;var wt=dt,zt=function(t){var r=this.__data__,e=gt(r,t);return!(e<0)&&(e==r.length-1?r.pop():bt.call(r,e,1),--this.size,!0)},Pt=function(t){var r=this.__data__,e=jt(r,t);return e<0?void 0:r[e][1]},St=function(t){return mt(this.__data__,t)>-1},It=function(t,r){var e=this.__data__,n=Ot(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Tt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Tt.prototype.clear=wt,Tt.prototype.delete=zt,Tt.prototype.get=Pt,Tt.prototype.has=St,Tt.prototype.set=It;var $t=Tt,xt=X(l,"Map"),Et=ht,kt=$t,At=xt;var Ft=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Ct=function(t,r){var e=t.__data__;return Ft(r)?e["string"==typeof r?"string":"hash"]:e.map},Dt=Ct;var Nt=Ct;var qt=Ct;var Mt=Ct;var Gt=function(){this.size=0,this.__data__={hash:new Et,map:new(At||kt),string:new Et}},Rt=function(t){var r=Dt(this,t).delete(t);return this.size-=r?1:0,r},Ut=function(t){return Nt(this,t).get(t)},Wt=function(t){return qt(this,t).has(t)},Bt=function(t,r){var e=Mt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Ht(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Ht.prototype.clear=Gt,Ht.prototype.delete=Rt,Ht.prototype.get=Ut,Ht.prototype.has=Wt,Ht.prototype.set=Bt;var Jt=Ht;function Kt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(Kt.Cache||Jt),e}Kt.Cache=Jt;var Lt=Kt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Xt=function(t){var r=Lt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Qt,(function(t,e,n,o){r.push(n?o.replace(Vt,"$1"):e||t)})),r}));var Yt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Zt=a,tr=z,rr=s?s.prototype:void 0,er=rr?rr.toString:void 0;var nr=function t(r){if("string"==typeof r)return r;if(Zt(r))return Yt(r,t)+"";if(tr(r))return er?er.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},or=nr;var ir=a,ar=$,ur=Xt,cr=function(t){return null==t?"":or(t)};var lr=z;var sr=function(t,r){return ir(t)?t:ar(t,r)?[t]:ur(cr(t))},fr=function(t){if("string"==typeof t||lr(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var vr=function(t,r){for(var e=0,n=(r=sr(r,t)).length;null!=t&&e<n;)t=t[fr(r[e++])];return e&&e==n?t:void 0};var pr=function(t,r,e){var n=null==t?void 0:vr(t,r);return void 0===n?e:n},hr=function(){function t(t){var r,e,n=t?o({},t):void 0,i=null===(r=null==n?void 0:n.file)||void 0===r?void 0:r.url,a=i?function(t){return 0===t.indexOf("//")?"https:"+t:t}(i):void 0;this.title=null==n?void 0:n.title,this.description=null==n?void 0:n.description,this.alt=(null==n?void 0:n.description)||(null==n?void 0:n.title)||"",this.src=a,this.gatsbyImageData=null==n?void 0:n.gatsbyImageData,this.contentType=null===(e=null==n?void 0:n.file)||void 0===e?void 0:e.contentType,this.crops={}}return t.prototype.addCrop=function(t,r,e){if(void 0===e&&(e=!1),t&&""!==t){var n=this.crops;n[t]=r,e&&console.log(n)}else console.log("Problem adding cropped image size. Did you query the data and/or use the correct key?")},t.prototype.crop=function(t){return pr(this,"crops.".concat(t))},t.prototype.get=function(t){void 0===t&&(t="");var r=this.crop(t);return""===t?this.gatsbyImageData:r},t.prototype.url=function(t){var r,e;void 0===t&&(t="");var n=this.get(t);return n?null===(e=null===(r=null==n?void 0:n.images)||void 0===r?void 0:r.fallback)||void 0===e?void 0:e.src:""},t}();exports.Img=hr,exports.WmkImage=function(t){var e=t.image,o=t.className,i=t.style,a=t.crop,u=void 0===a?"":a,c=e&&e.get(u);return!!pr(e,"contentType",pr(e,"src","")).match(/svg/)?n.createElement("img",{className:o,style:i,src:e.src,alt:e.alt}):c?n.createElement(r.GatsbyImage,{className:o,style:i,image:c,alt:e.alt}):null};
//# sourceMappingURL=index.js.map
