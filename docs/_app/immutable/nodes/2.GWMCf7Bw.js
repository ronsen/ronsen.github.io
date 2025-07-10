import"../chunks/CWj6FrbW.js";import"../chunks/Cacjx51u.js";import{aa as ra,ak as ee,q as M,h as de,R as G,X as sa,am as na,an as la,ao as ze,c as Z,s as W,d as V,C as oa,f as da,ap as fe,p as Q,aq as Re,ay as ne,m as Ve,v as ve,az as va,au as ca,aA as xe,B as Be,aB as fa,aC as ua,l as ha,aD as ga,aE as J,aF as _a,aG as pa,a as ba,aH as ma,al as wa,aI as $a,u as ka,g as ya,o as Na,as as Fe,aJ as Aa,aK as Ma,aL as Ea,W as Sa,aM as Pa,aN as Ta,aO as za,aP as xa,aQ as Ca,r as T,aR as La,a5 as z,a6 as N,w as x,ah as o,aj as g,aS as C,ai as d,a3 as L,a4 as S,aw as ja,aT as Ia,af as q,aU as P}from"../chunks/CkvwaIBb.js";import{p as K,r as j,s as O}from"../chunks/Ddkqntuv.js";import{b as Oa,c as Ha,d as Da,e as Ra,n as Va,f as Ba}from"../chunks/CzqSIQAf.js";function Fa(a,e){if(e){const i=document.body;a.autofocus=!0,ra(()=>{document.activeElement===i&&a.focus()})}}function Wa(a,e){return e}function qa(a,e,i,t){for(var r=[],n=e.length,s=0;s<n;s++)ua(e[s].e,r,!0);var l=n>0&&r.length===0&&i!==null;if(l){var f=i.parentNode;ha(f),f.append(i),t.clear(),R(a,e[0].prev,e[n-1].next)}ga(r,()=>{for(var u=0;u<n;u++){var c=e[u];l||(t.delete(c.k),R(a,c.prev,c.next)),J(c.e,!l)}})}function Ga(a,e,i,t,r,n=null){var s=a,l={flags:e,items:new Map,first:null};M&&de();var f=null,u=!1,c=sa(()=>{var h=i();return Be(h)?h:h==null?[]:Ve(h)});ee(()=>{var h=G(c),v=h.length;if(u&&v===0)return;u=v===0;let b=!1;if(M){var p=na(s)===la;p!==(v===0)&&(s=ze(),Z(s),W(!1),b=!0)}if(M){for(var w=null,A,_=0;_<v;_++){if(V.nodeType===oa&&V.data===da){s=V,b=!0,W(!1);break}var E=h[_],m=t(E,_);A=We(V,l,w,null,E,m,_,r,e,i),l.items.set(m,A),w=A}v>0&&Z(ze())}M||Ka(h,l,s,r,e,t,i),n!==null&&(v===0?f?fe(f):f=Q(()=>n(s)):f!==null&&Re(f,()=>{f=null})),b&&W(!0),G(c)}),M&&(s=V)}function Ka(a,e,i,t,r,n,s){var l=a.length,f=e.items,u=e.first,c=u,h,v=null,b=[],p=[],w,A,_,E;for(E=0;E<l;E+=1){if(w=a[E],A=n(w,E),_=f.get(A),_===void 0){var m=c?c.e.nodes_start:i;v=We(m,e,v,v===null?e.first:v.next,w,A,E,t,r,s),f.set(A,v),b=[],p=[],c=v.next;continue}if(Ua(_,w,E),(_.e.f&ne)!==0&&fe(_.e),_!==c){if(h!==void 0&&h.has(_)){if(b.length<p.length){var $=p[0],k;v=$.prev;var D=b[0],y=b[b.length-1];for(k=0;k<b.length;k+=1)Ce(b[k],$,i);for(k=0;k<p.length;k+=1)h.delete(p[k]);R(e,D.prev,y.next),R(e,v,D),R(e,y,$),c=$,v=y,E-=1,b=[],p=[]}else h.delete(_),Ce(_,c,i),R(e,_.prev,_.next),R(e,_,v===null?e.first:v.next),R(e,v,_),v=_;continue}for(b=[],p=[];c!==null&&c.k!==A;)(c.e.f&ne)===0&&(h??(h=new Set)).add(c),p.push(c),c=c.next;if(c===null)continue;_=c}b.push(_),v=_,c=_.next}if(c!==null||h!==void 0){for(var B=h===void 0?[]:Ve(h);c!==null;)(c.e.f&ne)===0&&B.push(c),c=c.next;var F=B.length;if(F>0){var X=null;qa(e,B,X,f)}}ve.first=e.first&&e.first.e,ve.last=v&&v.e}function Ua(a,e,i,t){va(a.v,e),a.i=i}function We(a,e,i,t,r,n,s,l,f,u){var c=(f&_a)!==0,h=(f&pa)===0,v=c?h?ca(r,!1,!1):xe(r):r,b=(f&fa)===0?s:xe(s),p={i:b,v,k:n,a:null,e:null,prev:i,next:t};try{return p.e=Q(()=>l(a,v,b,u),M),p.e.prev=i&&i.e,p.e.next=t&&t.e,i===null?e.first=p:(i.next=p,i.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{}}function Ce(a,e,i){for(var t=a.next?a.next.e.nodes_start:i,r=e?e.e.nodes_start:i,n=a.e.nodes_start;n!==t;){var s=ba(n);r.before(n),n=s}}function R(a,e,i){e===null?a.first=i:(e.next=i,e.e.next=i&&i.e),i!==null&&(i.prev=e,i.e.prev=e&&e.e)}function Ya(a,e,i,t,r,n){let s=M;M&&de();var l,f,u=null;M&&V.nodeType===ma&&(u=V,de());var c=M?V:a,h;ee(()=>{const v=e()||null;var b=$a;v!==l&&(h&&(v===null?Re(h,()=>{h=null,f=null}):v===f?fe(h):J(h)),v&&v!==f&&(h=Q(()=>{if(u=M?u:document.createElementNS(b,v),ka(u,u),t){M&&Oa(v)&&u.append(document.createComment(""));var p=M?ya(u):u.appendChild(Na());M&&(p===null?W(!1):Z(p)),t(u,p)}ve.nodes_end=u,c.before(u)})),l=v,l&&(f=l))},wa),s&&(W(!0),Z(c))}function Ja(a,e){var i=void 0,t;ee(()=>{i!==(i=e())&&(t&&(J(t),t=null),i&&(t=Q(()=>{Fe(()=>i(a))})))})}function qe(a){var e,i,t="";if(typeof a=="string"||typeof a=="number")t+=a;else if(typeof a=="object")if(Array.isArray(a)){var r=a.length;for(e=0;e<r;e++)a[e]&&(i=qe(a[e]))&&(t&&(t+=" "),t+=i)}else for(i in a)a[i]&&(t&&(t+=" "),t+=i);return t}function Qa(){for(var a,e,i=0,t="",r=arguments.length;i<r;i++)(a=arguments[i])&&(e=qe(a))&&(t&&(t+=" "),t+=e);return t}function Xa(a){return typeof a=="object"?Qa(a):a??""}const Le=[...` 	
\r\f \v\uFEFF`];function Za(a,e,i){var t=a==null?"":""+a;if(i){for(var r in i)if(i[r])t=t?t+" "+r:r;else if(t.length)for(var n=r.length,s=0;(s=t.indexOf(r,s))>=0;){var l=s+n;(s===0||Le.includes(t[s-1]))&&(l===t.length||Le.includes(t[l]))?t=(s===0?"":t.substring(0,s))+t.substring(l+1):s=l}}return t===""?null:t}function je(a,e=!1){var i=e?" !important;":";",t="";for(var r in a){var n=a[r];n!=null&&n!==""&&(t+=" "+r+": "+n+i)}return t}function le(a){return a[0]!=="-"||a[1]!=="-"?a.toLowerCase():a}function ei(a,e){if(e){var i="",t,r;if(Array.isArray(e)?(t=e[0],r=e[1]):t=e,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,l=!1,f=[];t&&f.push(...Object.keys(t).map(le)),r&&f.push(...Object.keys(r).map(le));var u=0,c=-1;const w=a.length;for(var h=0;h<w;h++){var v=a[h];if(l?v==="/"&&a[h-1]==="*"&&(l=!1):n?n===v&&(n=!1):v==="/"&&a[h+1]==="*"?l=!0:v==='"'||v==="'"?n=v:v==="("?s++:v===")"&&s--,!l&&n===!1&&s===0){if(v===":"&&c===-1)c=h;else if(v===";"||h===w-1){if(c!==-1){var b=le(a.substring(u,c).trim());if(!f.includes(b)){v!==";"&&h++;var p=a.substring(u,h).trim();i+=" "+p+";"}}u=h+1,c=-1}}}}return t&&(i+=je(t)),r&&(i+=je(r,!0)),i=i.trim(),i===""?null:i}return a==null?null:String(a)}function ai(a,e,i,t,r,n){var s=a.__className;if(M||s!==i||s===void 0){var l=Za(i,t,n);(!M||l!==a.getAttribute("class"))&&(l==null?a.removeAttribute("class"):e?a.className=l:a.setAttribute("class",l)),a.__className=i}else if(n&&r!==n)for(var f in n){var u=!!n[f];(r==null||u!==!!r[f])&&a.classList.toggle(f,u)}return n}function oe(a,e={},i,t){for(var r in i){var n=i[r];e[r]!==n&&(i[r]==null?a.style.removeProperty(r):a.style.setProperty(r,n,t))}}function ii(a,e,i,t){var r=a.__style;if(M||r!==e){var n=ei(e,t);(!M||n!==a.getAttribute("style"))&&(n==null?a.removeAttribute("style"):a.style.cssText=n),a.__style=e}else t&&(Array.isArray(t)?(oe(a,i==null?void 0:i[0],t[0]),oe(a,i==null?void 0:i[1],t[1],"important")):oe(a,i,t));return t}function ce(a,e,i=!1){if(a.multiple){if(e==null)return;if(!Be(e))return Aa();for(var t of a.options)t.selected=e.includes(Ie(t));return}for(t of a.options){var r=Ie(t);if(Ma(r,e)){t.selected=!0;return}}(!i||e!==void 0)&&(a.selectedIndex=-1)}function ti(a){var e=new MutationObserver(()=>{ce(a,a.__value)});e.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ea(()=>{e.disconnect()})}function Ie(a){return"__value"in a?a.__value:a.value}const U=Symbol("class"),Y=Symbol("style"),Ge=Symbol("is custom element"),Ke=Symbol("is html");function ri(a,e){e?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function Oe(a,e,i,t){var r=Ue(a);M&&(r[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||r[e]!==(r[e]=i)&&(e==="loading"&&(a[xa]=i),i==null?a.removeAttribute(e):typeof i!="string"&&Ye(a).includes(e)?a[e]=i:a.setAttribute(e,i))}function si(a,e,i,t,r=!1){var n=Ue(a),s=n[Ge],l=!n[Ke];let f=M&&s;f&&W(!1);var u=e||{},c=a.tagName==="OPTION";for(var h in e)h in i||(i[h]=null);i.class?i.class=Xa(i.class):i[U]&&(i.class=null),i[Y]&&(i.style??(i.style=null));var v=Ye(a);for(const m in i){let $=i[m];if(c&&m==="value"&&$==null){a.value=a.__value="",u[m]=$;continue}if(m==="class"){var b=a.namespaceURI==="http://www.w3.org/1999/xhtml";ai(a,b,$,t,e==null?void 0:e[U],i[U]),u[m]=$,u[U]=i[U];continue}if(m==="style"){ii(a,$,e==null?void 0:e[Y],i[Y]),u[m]=$,u[Y]=i[Y];continue}var p=u[m];if(!($===p&&!($===void 0&&a.hasAttribute(m)))){u[m]=$;var w=m[0]+m[1];if(w!=="$$")if(w==="on"){const k={},D="$$"+m;let y=m.slice(2);var A=Ba(y);if(Ha(y)&&(y=y.slice(0,-7),k.capture=!0),!A&&p){if($!=null)continue;a.removeEventListener(y,u[D],k),u[D]=null}if($!=null)if(A)a[`__${y}`]=$,Ra([y]);else{let B=function(F){u[m].call(this,F)};u[D]=Da(y,a,B,k)}else A&&(a[`__${y}`]=void 0)}else if(m==="style")Oe(a,m,$);else if(m==="autofocus")Fa(a,!!$);else if(!s&&(m==="__value"||m==="value"&&$!=null))a.value=a.__value=$;else if(m==="selected"&&c)ri(a,$);else{var _=m;l||(_=Va(_));var E=_==="defaultValue"||_==="defaultChecked";if($==null&&!s&&!E)if(n[m]=null,_==="value"||_==="checked"){let k=a;const D=e===void 0;if(_==="value"){let y=k.defaultValue;k.removeAttribute(_),k.defaultValue=y,k.value=k.__value=D?y:null}else{let y=k.defaultChecked;k.removeAttribute(_),k.defaultChecked=y,k.checked=D?y:!1}}else a.removeAttribute(m);else E||v.includes(_)&&(s||typeof $!="string")?a[_]=$:typeof $!="function"&&Oe(a,_,$)}}}return f&&W(!0),u}function He(a,e,i=[],t,r=!1,n=Sa){const s=i.map(n);var l=void 0,f={},u=a.nodeName==="SELECT",c=!1;if(ee(()=>{var v=e(...s.map(G)),b=si(a,l,v,t,r);c&&u&&"value"in v&&ce(a,v.value);for(let w of Object.getOwnPropertySymbols(f))v[w]||J(f[w]);for(let w of Object.getOwnPropertySymbols(v)){var p=v[w];w.description===Pa&&(!l||p!==l[w])&&(f[w]&&J(f[w]),f[w]=Q(()=>Ja(a,()=>p))),b[w]=p}l=b}),u){var h=a;Fe(()=>{ce(h,l.value,!0),ti(h)})}c=!0}function Ue(a){return a.__attributes??(a.__attributes={[Ge]:a.nodeName.includes("-"),[Ke]:a.namespaceURI===Ta})}var De=new Map;function Ye(a){var e=De.get(a.nodeName);if(e)return e;De.set(a.nodeName,e=[]);for(var i,t=a,r=Element.prototype;r!==t;){i=Ca(t);for(var n in i)i[n].set&&e.push(n);t=za(t)}return e}/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ni={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var li=La("<svg><!><!></svg>");function H(a,e){T(e,!0);const i=K(e,"color",3,"currentColor"),t=K(e,"size",3,24),r=K(e,"strokeWidth",3,2),n=K(e,"absoluteStrokeWidth",3,!1),s=K(e,"iconNode",19,()=>[]),l=j(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var f=li();He(f,h=>({...ni,...l,width:t(),height:t(),stroke:i(),"stroke-width":h,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>n()?Number(r())*24/Number(t()):r()]);var u=o(f);Ga(u,17,s,Wa,(h,v)=>{var b=ja(()=>Ia(G(v),2));let p=()=>G(b)[0],w=()=>G(b)[1];var A=L(),_=S(A);Ya(_,p,!0,(E,m)=>{He(E,()=>({...w()}))}),N(h,A)});var c=g(u);z(c,()=>e.children??C),d(f),N(a,f),x()}function oi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];H(a,O({name:"building-2"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function di(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];H(a,O({name:"code"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function vi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];H(a,O({name:"database"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function ci(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];H(a,O({name:"frame"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function fi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];H(a,O({name:"github"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function ui(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];H(a,O({name:"globe"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function hi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];H(a,O({name:"mail"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function gi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];H(a,O({name:"message-circle"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function _i(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];H(a,O({name:"scroll-text"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function pi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];H(a,O({name:"smartphone"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function I(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];H(a,O({name:"square-arrow-out-up-right"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function bi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];H(a,O({name:"twitter"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}function mi(a,e){T(e,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let i=j(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];H(a,O({name:"wrench"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=L(),l=S(s);z(l,()=>e.children??C),N(r,s)},$$slots:{default:!0}})),x()}var wi=q(`<section><div class="section-container"><h3 class="section-title">Let's Connect</h3> <div class="text-center mb-6">Do you have any questions regarding website and application development?
			Let's discuss first!</div> <div class="grid md:grid-cols-2 gap-4"><a class="btn btn-primary inline-flex items-center gap-2" href="mailto:ronsen@startrek.or.id"><!> <span>Email me</span></a> <a class="btn btn-success inline-flex items-center gap-2" href="https://wa.me/6281319479396"><!> <span>WhatsApp</span></a></div></div></section>`);function $i(a){var e=wi(),i=o(e),t=g(o(i),4),r=o(t),n=o(r);hi(n,{size:16}),P(2),d(r);var s=g(r,2),l=o(s);gi(l,{size:16}),P(2),d(s),d(t),d(i),d(e),N(a,e)}var ki=q(`<section><div class="section-container"><h3 class="section-title">Area of Expertise</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Web Programming</span></div> <div class="card-content">Proficient in developing and maintaining web applications using modern
					programming languages and frameworks. Skilled in writing clean,
					efficient code, optimizing application performance, and ensuring
					smooth functionality across different platforms and devices.</div></div> <div class="card"><div class="card-title"><!> <span>Mobile Programming</span></div> <div class="card-content">Skilled in building responsive and high-performance mobile
					applications. Experienced in using modern frameworks and languages to
					create user-friendly, efficient, and scalable mobile solutions.</div></div></div></div></section>`);function yi(a){var e=ki(),i=o(e),t=g(o(i),2),r=o(t),n=o(r),s=o(n);ui(s,{}),P(2),d(n),P(2),d(r);var l=g(r,2),f=o(l),u=o(f);pi(u,{}),P(2),d(f),P(2),d(l),d(t),d(i),d(e),N(a,e)}var Ni=q('<section class="bg-zinc-900 text-white"><div class="section-container"><div class="flex justify-center items-center gap-4"><a href="https://sintaks.web.id" target="_blank"><!></a> <a href="https://ronsen.vercel.app" target="_blank"><!></a> <a href="https://github.com/ronsen" target="_blank"><!></a> <a href="https://x.com/rnldnbbn" target="_blank"><!></a></div></div></section>');function Ai(a){var e=Ni(),i=o(e),t=o(i),r=o(t),n=o(r);oi(n,{size:18}),d(r);var s=g(r,2),l=o(s);_i(l,{size:18}),d(s);var f=g(s,2),u=o(f);fi(u,{size:18}),d(f);var c=g(f,2),h=o(c);bi(h,{size:18}),d(c),d(t),d(i),d(e),N(a,e)}var Mi=q('<section class="bg-sky-800 text-white text-center"><a href="/"><img alt="[]" class="w-48 mx-auto rounded-full shadow" src="./avatar.jpg"/></a> <div class="mt-6"><h1 class="font-bold text-3xl mb-4">Ronald Nababan</h1> <p>Freelance Programmer</p></div></section>');function Ei(a){var e=Mi();N(a,e)}var Si=q(`<section><div class="section-container mb-12"><h3 class="section-title">Projects</h3> <div class="grid md:grid-cols-3 gap-4"><div class="card"><a href="https://www.hetanews.com" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://www.hetanews.com/favicon.ico" width="12px"/> Heta News</div> <!></div></a></div> <div class="card"><a href="https://fokus24.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://fokus24.id/favicon.ico" width="12px"/> Fokus24</div> <!></div></a></div> <div class="card"><a href="https://kilasutama.sintaks.web.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://kilasutama.sintaks.web.id/favicon.ico" width="12px"/> Kilas Utama</div> <!></div></a></div></div></div> <div class="section-container mb-12"><h3 class="section-title">Fun Projects</h3> <div class="mb-4"><a href="https://ace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ace</strong> &mdash; Easy bookmark manager</div> <!></div></a></div> <div class="mb-4"><a href="https://asikin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Asikin</strong> &mdash; YouTube trending videos</div> <!></div></a></div> <div class="mb-4"><a href="https://coverletter.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Cover Letter</strong> &mdash; Bikin <em>cover letter</em> lebih mudah</div> <!></div></a></div> <div class="mb-4"><a href="https://ende.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ende</strong> &mdash; Kumpulan lirik lagu Batak</div> <!></div></a></div> <div class="mb-4"><a href="https://gokkon.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Gokkon</strong> &mdash; Undangan pernikahan gratis</div> <!></div></a></div> <div class="mb-4"><a href="https://guritan.vercel.app/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Guritan</strong> &mdash; Penyunting <em>markdown</em> untuk Blogger</div> <!></div></a></div> <div class="mb-4"><a href="https://kecilin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Kecilin</strong> &mdash; Ngecilin gambar-gambar yang
						berukuran besar</div> <!></div></a></div> <div class="mb-4"><a href="https://video.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Video</strong> &mdash; Social video sharing and bookmarking</div> <!></div></a></div></div> <div class="section-container"><h3 class="section-title">Demo Projects</h3> <div class="mb-4"><a href="https://demo.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Berita</strong> &mdash; <em>Content management system</em> untuk situs web berita</div> <!></div></a></div> <div class="mb-4"><a href="https://marketplace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Marketplace</strong> &mdash; Multi-vendor online
						shop</div> <!></div></a></div></div></section>`);function Pi(a){var e=Si(),i=o(e),t=g(o(i),2),r=o(t),n=o(r),s=o(n),l=g(o(s),2);I(l,{size:14}),d(s),d(n),d(r);var f=g(r,2),u=o(f),c=o(u),h=g(o(c),2);I(h,{size:14}),d(c),d(u),d(f);var v=g(f,2),b=o(v),p=o(b),w=g(o(p),2);I(w,{size:14}),d(p),d(b),d(v),d(t),d(i);var A=g(i,2),_=g(o(A),2),E=o(_),m=o(E),$=g(o(m),2);I($,{size:14}),d(m),d(E),d(_);var k=g(_,2),D=o(k),y=o(D),B=g(o(y),2);I(B,{size:14}),d(y),d(D),d(k);var F=g(k,2),X=o(F),ue=o(X),Je=g(o(ue),2);I(Je,{size:14}),d(ue),d(X),d(F);var ae=g(F,2),he=o(ae),ge=o(he),Qe=g(o(ge),2);I(Qe,{size:14}),d(ge),d(he),d(ae);var ie=g(ae,2),_e=o(ie),pe=o(_e),Xe=g(o(pe),2);I(Xe,{size:14}),d(pe),d(_e),d(ie);var te=g(ie,2),be=o(te),me=o(be),Ze=g(o(me),2);I(Ze,{size:14}),d(me),d(be),d(te);var re=g(te,2),we=o(re),$e=o(we),ea=g(o($e),2);I(ea,{size:14}),d($e),d(we),d(re);var ke=g(re,2),ye=o(ke),Ne=o(ye),aa=g(o(Ne),2);I(aa,{size:14}),d(Ne),d(ye),d(ke),d(A);var Ae=g(A,2),se=g(o(Ae),2),Me=o(se),Ee=o(Me),ia=g(o(Ee),2);I(ia,{size:14}),d(Ee),d(Me),d(se);var Se=g(se,2),Pe=o(Se),Te=o(Pe),ta=g(o(Te),2);I(ta,{size:14}),d(Te),d(Pe),d(Se),d(Ae),d(e),N(a,e)}var Ti=q('<section class="bg-zinc-50"><div class="section-container"><h3 class="section-title">Technical Skills</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Programming</span></div> <div class="card-content"><ul><li>PHP</li> <li>JavaScript</li> <li>Dart</li> <li>Python</li> <li>Java</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Frameworks</span></div> <div class="card-content"><ul><li>Laravel</li> <li>Svelte/SvelteKit</li> <li>Prisma</li> <li>ExpressJS</li> <li>Flutter</li> <li>TailwindCSS</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Databases</span></div> <div class="card-content"><ul><li>PostgreSQL</li> <li>MariaDB/MySQL</li> <li>sqlite</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Tools</span></div> <div class="card-content"><ul><li>Linux</li> <li>Docker</li> <li>Mail server</li> <li>nginx</li> <li>git</li> <li>Ollama AI</li></ul></div></div></div></div></section>');function zi(a){var e=Ti(),i=o(e),t=g(o(i),2),r=o(t),n=o(r),s=o(n);di(s,{size:16}),P(2),d(n),P(2),d(r);var l=g(r,2),f=o(l),u=o(f);ci(u,{size:16}),P(2),d(f),P(2),d(l);var c=g(l,2),h=o(c),v=o(h);vi(v,{size:16}),P(2),d(h),P(2),d(c);var b=g(c,2),p=o(b),w=o(p);mi(w,{size:16}),P(2),d(p),P(2),d(b),d(t),d(i),d(e),N(a,e)}var xi=q("<!> <!> <!> <!> <!> <!>",1);function Hi(a){var e=xi(),i=S(e);Ei(i);var t=g(i,2);yi(t);var r=g(t,2);zi(r);var n=g(r,2);Pi(n);var s=g(n,2);$i(s);var l=g(s,2);Ai(l),N(a,e)}export{Hi as component};
