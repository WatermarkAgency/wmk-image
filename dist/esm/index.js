import*as t from"react";import{GatsbyImage as r}from"gatsby-plugin-image";
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
***************************************************************************** */var e=function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},e.apply(this,arguments)},n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=Array.isArray,i="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,c=i||a||Function("return this")(),u=c.Symbol,s=u,l=Object.prototype,p=l.hasOwnProperty,f=l.toString,v=s?s.toStringTag:void 0;var h=function(t){var r=p.call(t,v),e=t[v];try{t[v]=void 0;var n=!0}catch(t){}var o=f.call(t);return n&&(r?t[v]=e:delete t[v]),o},y=Object.prototype.toString;var d=h,_=function(t){return y.call(t)},g=u?u.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?d(t):_(t)};var m=b,j=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||j(t)&&"[object Symbol]"==m(t)},w=o,z=O,S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var $=function(t,r){if(w(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!z(t))||(T.test(t)||!S.test(t)||null!=r&&t in Object(r))};var P=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},x=b,A=P;var E,F=function(t){if(!A(t))return!1;var r=x(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},I=c["__core-js_shared__"],C=(E=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"";var N=function(t){return!!C&&C in t},k=Function.prototype.toString;var D=F,R=N,G=P,M=function(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,B=Object.prototype,H=q.toString,J=B.hasOwnProperty,K=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(t){return!(!G(t)||R(t))&&(D(t)?K:U).test(M(t))},Q=function(t,r){return null==t?void 0:t[r]};var V=function(t,r){var e=Q(t,r);return L(e)?e:void 0},W=V(Object,"create"),X=W;var Y=function(){this.__data__=X?X(null):{},this.size=0};var Z=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},tt=W,rt=Object.prototype.hasOwnProperty;var et=function(t){var r=this.__data__;if(tt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return rt.call(r,t)?r[t]:void 0},nt=W,ot=Object.prototype.hasOwnProperty;var it=W;var at=Y,ct=Z,ut=et,st=function(t){var r=this.__data__;return nt?void 0!==r[t]:ot.call(r,t)},lt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=it&&void 0===r?"__lodash_hash_undefined__":r,this};function pt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}pt.prototype.clear=at,pt.prototype.delete=ct,pt.prototype.get=ut,pt.prototype.has=st,pt.prototype.set=lt;var ft=pt;var vt=function(){this.__data__=[],this.size=0};var ht=function(t,r){return t===r||t!=t&&r!=r};var yt=function(t,r){for(var e=t.length;e--;)if(ht(t[e][0],r))return e;return-1},dt=yt,_t=Array.prototype.splice;var gt=yt;var bt=yt;var mt=yt;var jt=vt,Ot=function(t){var r=this.__data__,e=dt(r,t);return!(e<0)&&(e==r.length-1?r.pop():_t.call(r,e,1),--this.size,!0)},wt=function(t){var r=this.__data__,e=gt(r,t);return e<0?void 0:r[e][1]},zt=function(t){return bt(this.__data__,t)>-1},St=function(t,r){var e=this.__data__,n=mt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Tt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Tt.prototype.clear=jt,Tt.prototype.delete=Ot,Tt.prototype.get=wt,Tt.prototype.has=zt,Tt.prototype.set=St;var $t=Tt,Pt=V(c,"Map"),xt=ft,At=$t,Et=Pt;var Ft=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var It=function(t,r){var e=t.__data__;return Ft(r)?e["string"==typeof r?"string":"hash"]:e.map},Ct=It;var Nt=It;var kt=It;var Dt=It;var Rt=function(){this.size=0,this.__data__={hash:new xt,map:new(Et||At),string:new xt}},Gt=function(t){var r=Ct(this,t).delete(t);return this.size-=r?1:0,r},Mt=function(t){return Nt(this,t).get(t)},Ut=function(t){return kt(this,t).has(t)},qt=function(t,r){var e=Dt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Bt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Bt.prototype.clear=Rt,Bt.prototype.delete=Gt,Bt.prototype.get=Mt,Bt.prototype.has=Ut,Bt.prototype.set=qt;var Ht=Bt;function Jt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(Jt.Cache||Ht),e}Jt.Cache=Ht;var Kt=Jt;var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Vt=function(t){var r=Kt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Lt,(function(t,e,n,o){r.push(n?o.replace(Qt,"$1"):e||t)})),r}));var Wt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Xt=o,Yt=O,Zt=u?u.prototype:void 0,tr=Zt?Zt.toString:void 0;var rr=function t(r){if("string"==typeof r)return r;if(Xt(r))return Wt(r,t)+"";if(Yt(r))return tr?tr.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},er=rr;var nr=o,or=$,ir=Vt,ar=function(t){return null==t?"":er(t)};var cr=O;var ur=function(t,r){return nr(t)?t:or(t,r)?[t]:ir(ar(t))},sr=function(t){if("string"==typeof t||cr(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var lr=function(t,r){for(var e=0,n=(r=ur(r,t)).length;null!=t&&e<n;)t=t[sr(r[e++])];return e&&e==n?t:void 0};var pr=function(t,r,e){var n=null==t?void 0:lr(t,r);return void 0===n?e:n},fr=function(){function t(t){var r=e({},t),n=function(t){return 0===t.indexOf("//")?"https:"+t:t}(r.file.url);this.title=r.title,this.description=r.description,this.alt=(null==r?void 0:r.description)||r.title,this.src=n,this.gatsbyImageData=r.gatsbyImageData,this.contentType=r.file.contentType,this.crops={}}return t.prototype.addCrop=function(t,r,e){void 0===e&&(e=!1);var n=this.crops;n[t]=r,e&&console.log(n)},t.prototype.crop=function(t){return pr(this,"crops.".concat(t))},t.prototype.get=function(t){void 0===t&&(t="");var r=this.crop(t);return""===t?this.gatsbyImageData:r},t.prototype.url=function(t){var r,e;void 0===t&&(t="");var n=this.get(t);return n?null===(e=null===(r=null==n?void 0:n.images)||void 0===r?void 0:r.fallback)||void 0===e?void 0:e.src:""},t}(),vr=function(e){var n=e.image,o=e.className,i=e.style,a=e.crop,c=void 0===a?"":a,u=n.get(c);return!!pr(n,"contentType",pr(n,"src","")).match(/svg/)?t.createElement("img",{className:o,style:i,src:n.src,alt:n.alt}):u?t.createElement(r,{className:o,style:i,image:u,alt:n.alt}):null};export{fr as Img,vr as WmkImage};
//# sourceMappingURL=index.js.map
