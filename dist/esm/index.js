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
***************************************************************************** */var e=function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},e.apply(this,arguments)},n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=Array.isArray,i="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,u=i||a||Function("return this")(),c=u.Symbol,l=c,s=Object.prototype,v=s.hasOwnProperty,p=s.toString,f=l?l.toStringTag:void 0;var h=function(t){var r=v.call(t,f),e=t[f];try{t[f]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(r?t[f]=e:delete t[f]),o},d=Object.prototype.toString;var y=h,_=function(t){return d.call(t)},g=c?c.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?y(t):_(t)};var m=b,j=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||j(t)&&"[object Symbol]"==m(t)},w=o,z=O,S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var T=function(t,r){if(w(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!z(t))||(P.test(t)||!S.test(t)||null!=r&&t in Object(r))};var $=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},x=b,A=$;var E,F=function(t){if(!A(t))return!1;var r=x(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},I=u["__core-js_shared__"],C=(E=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"";var k=function(t){return!!C&&C in t},D=Function.prototype.toString;var N=F,R=k,q=$,G=function(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,B=Object.prototype,H=U.toString,J=B.hasOwnProperty,K=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(t){return!(!q(t)||R(t))&&(N(t)?K:M).test(G(t))},Q=function(t,r){return null==t?void 0:t[r]};var V=function(t,r){var e=Q(t,r);return L(e)?e:void 0},W=V(Object,"create"),X=W;var Y=function(){this.__data__=X?X(null):{},this.size=0};var Z=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},tt=W,rt=Object.prototype.hasOwnProperty;var et=function(t){var r=this.__data__;if(tt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return rt.call(r,t)?r[t]:void 0},nt=W,ot=Object.prototype.hasOwnProperty;var it=W;var at=Y,ut=Z,ct=et,lt=function(t){var r=this.__data__;return nt?void 0!==r[t]:ot.call(r,t)},st=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=it&&void 0===r?"__lodash_hash_undefined__":r,this};function vt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}vt.prototype.clear=at,vt.prototype.delete=ut,vt.prototype.get=ct,vt.prototype.has=lt,vt.prototype.set=st;var pt=vt;var ft=function(){this.__data__=[],this.size=0};var ht=function(t,r){return t===r||t!=t&&r!=r};var dt=function(t,r){for(var e=t.length;e--;)if(ht(t[e][0],r))return e;return-1},yt=dt,_t=Array.prototype.splice;var gt=dt;var bt=dt;var mt=dt;var jt=ft,Ot=function(t){var r=this.__data__,e=yt(r,t);return!(e<0)&&(e==r.length-1?r.pop():_t.call(r,e,1),--this.size,!0)},wt=function(t){var r=this.__data__,e=gt(r,t);return e<0?void 0:r[e][1]},zt=function(t){return bt(this.__data__,t)>-1},St=function(t,r){var e=this.__data__,n=mt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Pt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Pt.prototype.clear=jt,Pt.prototype.delete=Ot,Pt.prototype.get=wt,Pt.prototype.has=zt,Pt.prototype.set=St;var Tt=Pt,$t=V(u,"Map"),xt=pt,At=Tt,Et=$t;var Ft=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var It=function(t,r){var e=t.__data__;return Ft(r)?e["string"==typeof r?"string":"hash"]:e.map},Ct=It;var kt=It;var Dt=It;var Nt=It;var Rt=function(){this.size=0,this.__data__={hash:new xt,map:new(Et||At),string:new xt}},qt=function(t){var r=Ct(this,t).delete(t);return this.size-=r?1:0,r},Gt=function(t){return kt(this,t).get(t)},Mt=function(t){return Dt(this,t).has(t)},Ut=function(t,r){var e=Nt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Bt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Bt.prototype.clear=Rt,Bt.prototype.delete=qt,Bt.prototype.get=Gt,Bt.prototype.has=Mt,Bt.prototype.set=Ut;var Ht=Bt;function Jt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(Jt.Cache||Ht),e}Jt.Cache=Ht;var Kt=Jt;var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Vt=function(t){var r=Kt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Lt,(function(t,e,n,o){r.push(n?o.replace(Qt,"$1"):e||t)})),r}));var Wt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Xt=o,Yt=O,Zt=c?c.prototype:void 0,tr=Zt?Zt.toString:void 0;var rr=function t(r){if("string"==typeof r)return r;if(Xt(r))return Wt(r,t)+"";if(Yt(r))return tr?tr.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},er=rr;var nr=o,or=T,ir=Vt,ar=function(t){return null==t?"":er(t)};var ur=O;var cr=function(t,r){return nr(t)?t:or(t,r)?[t]:ir(ar(t))},lr=function(t){if("string"==typeof t||ur(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var sr=function(t,r){for(var e=0,n=(r=cr(r,t)).length;null!=t&&e<n;)t=t[lr(r[e++])];return e&&e==n?t:void 0};var vr=function(t,r,e){var n=null==t?void 0:sr(t,r);return void 0===n?e:n},pr=function(){function t(t){var r,n,o=e({},t),i=null===(r=null==o?void 0:o.file)||void 0===r?void 0:r.url,a=i?function(t){return 0===t.indexOf("//")?"https:"+t:t}(i):void 0;this.title=null==o?void 0:o.title,this.description=null==o?void 0:o.description,this.alt=(null==o?void 0:o.description)||o.title,this.src=a,this.gatsbyImageData=null==o?void 0:o.gatsbyImageData,this.contentType=null===(n=null==o?void 0:o.file)||void 0===n?void 0:n.contentType,this.crops={}}return t.prototype.addCrop=function(t,r,e){if(void 0===e&&(e=!1),t&&""!==t){var n=this.crops;n[t]=r,e&&console.log(n)}else console.log("Problem adding cropped image size. Did you query the data and/or use the correct key?")},t.prototype.crop=function(t){return vr(this,"crops.".concat(t))},t.prototype.get=function(t){void 0===t&&(t="");var r=this.crop(t);return""===t?this.gatsbyImageData:r},t.prototype.url=function(t){var r,e;void 0===t&&(t="");var n=this.get(t);return n?null===(e=null===(r=null==n?void 0:n.images)||void 0===r?void 0:r.fallback)||void 0===e?void 0:e.src:""},t}(),fr=function(e){var n=e.image,o=e.className,i=e.style,a=e.crop,u=void 0===a?"":a,c=n.get(u);return!!vr(n,"contentType",vr(n,"src","")).match(/svg/)?t.createElement("img",{className:o,style:i,src:n.src,alt:n.alt}):c?t.createElement(r,{className:o,style:i,image:c,alt:n.alt}):null};export{pr as Img,fr as WmkImage};
//# sourceMappingURL=index.js.map
