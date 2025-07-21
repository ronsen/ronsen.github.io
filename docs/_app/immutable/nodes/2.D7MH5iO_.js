import"../chunks/Bzak7iHL.js";import"../chunks/hoMUrSwO.js";import{ab as ia,al as se,q as E,h as ue,S as G,X as ta,an as ra,ao as sa,ap as Te,c as re,s as K,d as W,C as na,f as la,p as U,as as oa,aq as da,aB as va,o as De,ax as ca,aC as ze,m as He,B as Ve,aD as fa,at as _e,au as Re,aE as ua,aF as ha,aG as de,aH as J,a as ga,aI as _a,l as pa,aJ as ma,v as Be,aK as ba,am as wa,aL as $a,u as ka,g as Na,av as Fe,aM as ya,aN as Aa,aO as Ma,aP as Ea,aQ as Sa,aR as Pa,aS as Ta,aT as za,aU as xa,r as x,aV as Ca,a6 as C,a7 as A,w as L,ai as o,ak as p,aW as I,aj as d,a4 as O,a5 as T,az as La,aX as Ia,ag as Y,aY as z}from"../chunks/ComInjFY.js";import{p as Z,r as j,s as D}from"../chunks/DyeK7gnM.js";import{b as Oa,c as ja,d as Da,e as Ha,n as Va,f as Ra}from"../chunks/DwM-cnMI.js";function Ba(e,a){if(a){const i=document.body;e.autofocus=!0,ia(()=>{document.activeElement===i&&e.focus()})}}function Fa(e,a){return a}function Wa(e,a,i){for(var t=e.items,r=[],n=a.length,s=0;s<n;s++)_a(a[s].e,r,!0);var l=n>0&&r.length===0&&i!==null;if(l){var c=i.parentNode;pa(c),c.append(i),t.clear(),B(e,a[0].prev,a[n-1].next)}ma(r,()=>{for(var f=0;f<n;f++){var m=a[f];l||(t.delete(m.k),B(e,m.prev,m.next)),J(m.e,!l)}})}function qa(e,a,i,t,r,n=null){var s=e,l={flags:a,items:new Map,first:null};E&&ue();var c=null,f=!1,m=new Map,b=ta(()=>{var u=i();return Ve(u)?u:u==null?[]:He(u)}),v,w;function g(){Ka(w,v,l,m,s,r,a,t,i),n!==null&&(v.length===0?c?_e(c):c=U(()=>n(s)):c!==null&&Re(c,()=>{c=null}))}se(()=>{w??(w=Be),v=G(b);var u=v.length;if(f&&u===0)return;f=u===0;let k=!1;if(E){var N=ra(s)===sa;N!==(u===0)&&(s=Te(),re(s),K(!1),k=!0)}if(E){for(var S=null,h,_=0;_<u;_++){if(W.nodeType===na&&W.data===la){s=W,k=!0,K(!1);break}var $=v[_],M=t($,_);h=he(W,l,S,null,$,M,_,r,a,i),l.items.set(M,h),S=h}u>0&&re(Te())}if(E)u===0&&n&&(c=U(()=>n(s)));else if(oa()){var y=new Set,R=da;for(_=0;_<u;_+=1){$=v[_],M=t($,_);var P=l.items.get(M)??m.get(M);P?We(P,$,_):(h=he(null,l,null,null,$,M,_,r,a,i,!0),m.set(M,h)),y.add(M)}for(const[q,F]of l.items)y.has(q)||R.skipped_effects.add(F.e);R.add_callback(g)}else g();k&&K(!0),G(b)}),E&&(s=W)}function Ka(e,a,i,t,r,n,s,l,c){var f=a.length,m=i.items,b=i.first,v=b,w,g=null,u=[],k=[],N,S,h,_;for(_=0;_<f;_+=1){if(N=a[_],S=l(N,_),h=m.get(S),h===void 0){var $=t.get(S);if($!==void 0){t.delete(S),m.set(S,$);var M=g?g.next:v;B(i,g,$),B(i,$,M),ve($,M,r),g=$}else{var y=v?v.e.nodes_start:r;g=he(y,i,g,g===null?i.first:g.next,N,S,_,n,s,c)}m.set(S,g),u=[],k=[],v=g.next;continue}if(We(h,N,_),(h.e.f&de)!==0&&_e(h.e),h!==v){if(w!==void 0&&w.has(h)){if(u.length<k.length){var R=k[0],P;g=R.prev;var q=u[0],F=u[u.length-1];for(P=0;P<u.length;P+=1)ve(u[P],R,r);for(P=0;P<k.length;P+=1)w.delete(k[P]);B(i,q.prev,F.next),B(i,g,q),B(i,F,R),v=R,g=F,_-=1,u=[],k=[]}else w.delete(h),ve(h,v,r),B(i,h.prev,h.next),B(i,h,g===null?i.first:g.next),B(i,g,h),g=h;continue}for(u=[],k=[];v!==null&&v.k!==S;)(v.e.f&de)===0&&(w??(w=new Set)).add(v),k.push(v),v=v.next;if(v===null)continue;h=v}u.push(h),g=h,v=h.next}if(v!==null||w!==void 0){for(var Q=w===void 0?[]:He(w);v!==null;)(v.e.f&de)===0&&Q.push(v),v=v.next;var X=Q.length;if(X>0){var ie=null;Wa(i,Q,ie)}}e.first=i.first&&i.first.e,e.last=g&&g.e;for(var te of t.values())J(te.e);t.clear()}function We(e,a,i,t){va(e.v,a),e.i=i}function he(e,a,i,t,r,n,s,l,c,f,m){var b=(c&ua)!==0,v=(c&ha)===0,w=b?v?ca(r,!1,!1):ze(r):r,g=(c&fa)===0?s:ze(s),u={i:g,v:w,k:n,a:null,e:null,prev:i,next:t};try{if(e===null){var k=document.createDocumentFragment();k.append(e=De())}return u.e=U(()=>l(e,w,g,f),E),u.e.prev=i&&i.e,u.e.next=t&&t.e,i===null?m||(a.first=u):(i.next=u,i.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function ve(e,a,i){for(var t=e.next?e.next.e.nodes_start:i,r=a?a.e.nodes_start:i,n=e.e.nodes_start;n!==null&&n!==t;){var s=ga(n);r.before(n),n=s}}function B(e,a,i){a===null?e.first=i:(a.next=i,a.e.next=i&&i.e),i!==null&&(i.prev=a,i.e.prev=a&&a.e)}function Ya(e,a,i,t,r,n){let s=E;E&&ue();var l,c,f=null;E&&W.nodeType===ba&&(f=W,ue());var m=E?W:e,b;se(()=>{const v=a()||null;var w=$a;v!==l&&(b&&(v===null?Re(b,()=>{b=null,c=null}):v===c?_e(b):J(b)),v&&v!==c&&(b=U(()=>{if(f=E?f:document.createElementNS(w,v),ka(f,f),t){E&&Oa(v)&&f.append(document.createComment(""));var g=E?Na(f):f.appendChild(De());E&&(g===null?K(!1):re(g)),t(f,g)}Be.nodes_end=f,m.before(f)})),l=v,l&&(c=l))},wa),s&&(K(!0),re(m))}function Ga(e,a){var i=void 0,t;se(()=>{i!==(i=a())&&(t&&(J(t),t=null),i&&(t=U(()=>{Fe(()=>i(e))})))})}function qe(e){var a,i,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(i=qe(e[a]))&&(t&&(t+=" "),t+=i)}else for(i in e)e[i]&&(t&&(t+=" "),t+=i);return t}function Ua(){for(var e,a,i=0,t="",r=arguments.length;i<r;i++)(e=arguments[i])&&(a=qe(e))&&(t&&(t+=" "),t+=a);return t}function Ja(e){return typeof e=="object"?Ua(e):e??""}const xe=[...` 	
\r\f \v\uFEFF`];function Qa(e,a,i){var t=e==null?"":""+e;if(i){for(var r in i)if(i[r])t=t?t+" "+r:r;else if(t.length)for(var n=r.length,s=0;(s=t.indexOf(r,s))>=0;){var l=s+n;(s===0||xe.includes(t[s-1]))&&(l===t.length||xe.includes(t[l]))?t=(s===0?"":t.substring(0,s))+t.substring(l+1):s=l}}return t===""?null:t}function Ce(e,a=!1){var i=a?" !important;":";",t="";for(var r in e){var n=e[r];n!=null&&n!==""&&(t+=" "+r+": "+n+i)}return t}function ce(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Xa(e,a){if(a){var i="",t,r;if(Array.isArray(a)?(t=a[0],r=a[1]):t=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,l=!1,c=[];t&&c.push(...Object.keys(t).map(ce)),r&&c.push(...Object.keys(r).map(ce));var f=0,m=-1;const u=e.length;for(var b=0;b<u;b++){var v=e[b];if(l?v==="/"&&e[b-1]==="*"&&(l=!1):n?n===v&&(n=!1):v==="/"&&e[b+1]==="*"?l=!0:v==='"'||v==="'"?n=v:v==="("?s++:v===")"&&s--,!l&&n===!1&&s===0){if(v===":"&&m===-1)m=b;else if(v===";"||b===u-1){if(m!==-1){var w=ce(e.substring(f,m).trim());if(!c.includes(w)){v!==";"&&b++;var g=e.substring(f,b).trim();i+=" "+g+";"}}f=b+1,m=-1}}}}return t&&(i+=Ce(t)),r&&(i+=Ce(r,!0)),i=i.trim(),i===""?null:i}return e==null?null:String(e)}function Za(e,a,i,t,r,n){var s=e.__className;if(E||s!==i||s===void 0){var l=Qa(i,t,n);(!E||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):a?e.className=l:e.setAttribute("class",l)),e.__className=i}else if(n&&r!==n)for(var c in n){var f=!!n[c];(r==null||f!==!!r[c])&&e.classList.toggle(c,f)}return n}function fe(e,a={},i,t){for(var r in i){var n=i[r];a[r]!==n&&(i[r]==null?e.style.removeProperty(r):e.style.setProperty(r,n,t))}}function ei(e,a,i,t){var r=e.__style;if(E||r!==a){var n=Xa(a,t);(!E||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=a}else t&&(Array.isArray(t)?(fe(e,i==null?void 0:i[0],t[0]),fe(e,i==null?void 0:i[1],t[1],"important")):fe(e,i,t));return t}function ge(e,a,i=!1){if(e.multiple){if(a==null)return;if(!Ve(a))return ya();for(var t of e.options)t.selected=a.includes(Le(t));return}for(t of e.options){var r=Le(t);if(Aa(r,a)){t.selected=!0;return}}(!i||a!==void 0)&&(e.selectedIndex=-1)}function ai(e){var a=new MutationObserver(()=>{ge(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ma(()=>{a.disconnect()})}function Le(e){return"__value"in e?e.__value:e.value}const ee=Symbol("class"),ae=Symbol("style"),Ke=Symbol("is custom element"),Ye=Symbol("is html");function ii(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ie(e,a,i,t){var r=Ge(e);E&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=i)&&(a==="loading"&&(e[za]=i),i==null?e.removeAttribute(a):typeof i!="string"&&Ue(e).includes(a)?e[a]=i:e.setAttribute(a,i))}function ti(e,a,i,t,r=!1){var n=Ge(e),s=n[Ke],l=!n[Ye];let c=E&&s;c&&K(!1);var f=a||{},m=e.tagName==="OPTION";for(var b in a)b in i||(i[b]=null);i.class?i.class=Ja(i.class):i[ee]&&(i.class=null),i[ae]&&(i.style??(i.style=null));var v=Ue(e);for(const h in i){let _=i[h];if(m&&h==="value"&&_==null){e.value=e.__value="",f[h]=_;continue}if(h==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";Za(e,w,_,t,a==null?void 0:a[ee],i[ee]),f[h]=_,f[ee]=i[ee];continue}if(h==="style"){ei(e,_,a==null?void 0:a[ae],i[ae]),f[h]=_,f[ae]=i[ae];continue}var g=f[h];if(!(_===g&&!(_===void 0&&e.hasAttribute(h)))){f[h]=_;var u=h[0]+h[1];if(u!=="$$")if(u==="on"){const $={},M="$$"+h;let y=h.slice(2);var k=Ra(y);if(ja(y)&&(y=y.slice(0,-7),$.capture=!0),!k&&g){if(_!=null)continue;e.removeEventListener(y,f[M],$),f[M]=null}if(_!=null)if(k)e[`__${y}`]=_,Ha([y]);else{let R=function(P){f[h].call(this,P)};f[M]=Da(y,e,R,$)}else k&&(e[`__${y}`]=void 0)}else if(h==="style")Ie(e,h,_);else if(h==="autofocus")Ba(e,!!_);else if(!s&&(h==="__value"||h==="value"&&_!=null))e.value=e.__value=_;else if(h==="selected"&&m)ii(e,_);else{var N=h;l||(N=Va(N));var S=N==="defaultValue"||N==="defaultChecked";if(_==null&&!s&&!S)if(n[h]=null,N==="value"||N==="checked"){let $=e;const M=a===void 0;if(N==="value"){let y=$.defaultValue;$.removeAttribute(N),$.defaultValue=y,$.value=$.__value=M?y:null}else{let y=$.defaultChecked;$.removeAttribute(N),$.defaultChecked=y,$.checked=M?y:!1}}else e.removeAttribute(h);else S||v.includes(N)&&(s||typeof _!="string")?e[N]=_:typeof _!="function"&&Ie(e,N,_)}}}return c&&K(!0),f}function Oe(e,a,i=[],t=[],r,n=!1){Ea(i,t,s=>{var l=void 0,c={},f=e.nodeName==="SELECT",m=!1;if(se(()=>{var v=a(...s.map(G)),w=ti(e,l,v,r,n);m&&f&&"value"in v&&ge(e,v.value);for(let u of Object.getOwnPropertySymbols(c))v[u]||J(c[u]);for(let u of Object.getOwnPropertySymbols(v)){var g=v[u];u.description===Sa&&(!l||g!==l[u])&&(c[u]&&J(c[u]),c[u]=U(()=>Ga(e,()=>g))),w[u]=g}l=w}),f){var b=e;Fe(()=>{ge(b,l.value,!0),ai(b)})}m=!0})}function Ge(e){return e.__attributes??(e.__attributes={[Ke]:e.nodeName.includes("-"),[Ye]:e.namespaceURI===Pa})}var je=new Map;function Ue(e){var a=je.get(e.nodeName);if(a)return a;je.set(e.nodeName,a=[]);for(var i,t=e,r=Element.prototype;r!==t;){i=xa(t);for(var n in i)i[n].set&&a.push(n);t=Ta(t)}return a}/**
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
 */const ri={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var si=Ca("<svg><!><!></svg>");function H(e,a){x(a,!0);const i=Z(a,"color",3,"currentColor"),t=Z(a,"size",3,24),r=Z(a,"strokeWidth",3,2),n=Z(a,"absoluteStrokeWidth",3,!1),s=Z(a,"iconNode",19,()=>[]),l=j(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=si();Oe(c,b=>({...ri,...l,width:t(),height:t(),stroke:i(),"stroke-width":b,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>n()?Number(r())*24/Number(t()):r()]);var f=o(c);qa(f,17,s,Fa,(b,v)=>{var w=La(()=>Ia(G(v),2));let g=()=>G(w)[0],u=()=>G(w)[1];var k=O(),N=T(k);Ya(N,g,!0,(S,h)=>{Oe(S,()=>({...u()}))}),A(b,k)});var m=p(f);C(m,()=>a.children??I),d(c),A(e,c),L()}function ni(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];H(e,D({name:"building-2"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function li(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];H(e,D({name:"code"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function oi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];H(e,D({name:"database"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function di(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];H(e,D({name:"frame"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function vi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];H(e,D({name:"github"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ci(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];H(e,D({name:"globe"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function fi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];H(e,D({name:"mail"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ui(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];H(e,D({name:"message-circle"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function hi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];H(e,D({name:"scroll-text"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function gi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];H(e,D({name:"smartphone"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function V(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];H(e,D({name:"square-arrow-out-up-right"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function _i(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];H(e,D({name:"twitter"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function pi(e,a){x(a,!0);/**
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
 */let i=j(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];H(e,D({name:"wrench"},()=>i,{get iconNode(){return t},children:(r,n)=>{var s=O(),l=T(s);C(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}var mi=Y(`<section><div class="section-container"><h3 class="section-title">Let's Connect</h3> <div class="text-center mb-6">Do you have any questions regarding website and application development?
			Let's discuss first!</div> <div class="grid md:grid-cols-2 gap-4"><a class="btn btn-primary inline-flex items-center gap-2" href="mailto:ronsen@startrek.or.id"><!> <span>Email me</span></a> <a class="btn btn-success inline-flex items-center gap-2" href="https://wa.me/6281319479396"><!> <span>WhatsApp</span></a></div></div></section>`);function bi(e){var a=mi(),i=o(a),t=p(o(i),4),r=o(t),n=o(r);fi(n,{size:16}),z(2),d(r);var s=p(r,2),l=o(s);ui(l,{size:16}),z(2),d(s),d(t),d(i),d(a),A(e,a)}var wi=Y(`<section><div class="section-container"><h3 class="section-title">Area of Expertise</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Web Programming</span></div> <div class="card-content">Proficient in developing and maintaining web applications using modern
					programming languages and frameworks. Skilled in writing clean,
					efficient code, optimizing application performance, and ensuring
					smooth functionality across different platforms and devices.</div></div> <div class="card"><div class="card-title"><!> <span>Mobile Programming</span></div> <div class="card-content">Skilled in building responsive and high-performance mobile
					applications. Experienced in using modern frameworks and languages to
					create user-friendly, efficient, and scalable mobile solutions.</div></div></div></div></section>`);function $i(e){var a=wi(),i=o(a),t=p(o(i),2),r=o(t),n=o(r),s=o(n);ci(s,{}),z(2),d(n),z(2),d(r);var l=p(r,2),c=o(l),f=o(c);gi(f,{}),z(2),d(c),z(2),d(l),d(t),d(i),d(a),A(e,a)}var ki=Y('<section class="bg-zinc-900 text-white"><div class="section-container"><div class="flex justify-center items-center gap-4"><a href="https://sintaks.web.id" target="_blank"><!></a> <a href="https://ronsen.vercel.app" target="_blank"><!></a> <a href="https://github.com/ronsen" target="_blank"><!></a> <a href="https://x.com/rnldnbbn" target="_blank"><!></a></div></div></section>');function Ni(e){var a=ki(),i=o(a),t=o(i),r=o(t),n=o(r);ni(n,{size:18}),d(r);var s=p(r,2),l=o(s);hi(l,{size:18}),d(s);var c=p(s,2),f=o(c);vi(f,{size:18}),d(c);var m=p(c,2),b=o(m);_i(b,{size:18}),d(m),d(t),d(i),d(a),A(e,a)}var yi=Y('<section class="bg-sky-800 text-white text-center"><a href="/"><img alt="[]" class="w-48 mx-auto rounded-full shadow" src="./avatar.jpg"/></a> <div class="mt-6"><h1 class="font-bold text-3xl mb-4">Ronald Nababan</h1> <p>Freelance Programmer</p></div></section>');function Ai(e){var a=yi();A(e,a)}var Mi=Y(`<section><div class="section-container mb-12"><h3 class="section-title">Projects</h3> <div class="grid md:grid-cols-3 gap-4"><div class="card"><a href="https://www.hetanews.com" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://www.hetanews.com/favicon.ico" width="12px"/> Heta News</div> <!></div></a></div> <div class="card"><a href="https://fokus24.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://fokus24.id/favicon.ico" width="12px"/> Fokus24</div> <!></div></a></div> <div class="card"><a href="https://kilasutama.sintaks.web.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://kilasutama.sintaks.web.id/favicon.ico" width="12px"/> Kilas Utama</div> <!></div></a></div></div></div> <div class="section-container mb-12"><h3 class="section-title">Fun Projects</h3> <div class="mb-4"><a href="https://ace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ace</strong> &mdash; Easy bookmark manager</div> <!></div></a></div> <div class="mb-4"><a href="https://asikin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Asikin</strong> &mdash; YouTube trending videos</div> <!></div></a></div> <div class="mb-4"><a href="https://coverletter.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Cover Letter</strong> &mdash; Bikin <em>cover letter</em> lebih mudah</div> <!></div></a></div> <div class="mb-4"><a href="https://ende.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ende</strong> &mdash; Kumpulan lirik lagu Batak</div> <!></div></a></div> <div class="mb-4"><a href="https://guritan.vercel.app/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Guritan</strong> &mdash; Penyunting <em>markdown</em> untuk Blogger</div> <!></div></a></div> <div class="mb-4"><a href="https://kecilin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Kecilin</strong> &mdash; Ngecilin gambar-gambar yang
						berukuran besar</div> <!></div></a></div> <div class="mb-4"><a href="https://video.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Video</strong> &mdash; Social video sharing and bookmarking</div> <!></div></a></div></div> <div class="section-container"><h3 class="section-title">Demo Projects</h3> <div class="mb-4"><a href="https://demo.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Berita</strong> &mdash; <em>Content management system</em> untuk situs web berita</div> <!></div></a></div> <div class="mb-4"><a href="https://marketplace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Marketplace</strong> &mdash; Multi-vendor online
						shop</div> <!></div></a></div></div></section>`);function Ei(e){var a=Mi(),i=o(a),t=p(o(i),2),r=o(t),n=o(r),s=o(n),l=p(o(s),2);V(l,{size:14}),d(s),d(n),d(r);var c=p(r,2),f=o(c),m=o(f),b=p(o(m),2);V(b,{size:14}),d(m),d(f),d(c);var v=p(c,2),w=o(v),g=o(w),u=p(o(g),2);V(u,{size:14}),d(g),d(w),d(v),d(t),d(i);var k=p(i,2),N=p(o(k),2),S=o(N),h=o(S),_=p(o(h),2);V(_,{size:14}),d(h),d(S),d(N);var $=p(N,2),M=o($),y=o(M),R=p(o(y),2);V(R,{size:14}),d(y),d(M),d($);var P=p($,2),q=o(P),F=o(q),Q=p(o(F),2);V(Q,{size:14}),d(F),d(q),d(P);var X=p(P,2),ie=o(X),te=o(ie),Je=p(o(te),2);V(Je,{size:14}),d(te),d(ie),d(X);var ne=p(X,2),pe=o(ne),me=o(pe),Qe=p(o(me),2);V(Qe,{size:14}),d(me),d(pe),d(ne);var le=p(ne,2),be=o(le),we=o(be),Xe=p(o(we),2);V(Xe,{size:14}),d(we),d(be),d(le);var $e=p(le,2),ke=o($e),Ne=o(ke),Ze=p(o(Ne),2);V(Ze,{size:14}),d(Ne),d(ke),d($e),d(k);var ye=p(k,2),oe=p(o(ye),2),Ae=o(oe),Me=o(Ae),ea=p(o(Me),2);V(ea,{size:14}),d(Me),d(Ae),d(oe);var Ee=p(oe,2),Se=o(Ee),Pe=o(Se),aa=p(o(Pe),2);V(aa,{size:14}),d(Pe),d(Se),d(Ee),d(ye),d(a),A(e,a)}var Si=Y('<section class="bg-zinc-50"><div class="section-container"><h3 class="section-title">Technical Skills</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Programming</span></div> <div class="card-content"><ul><li>PHP</li> <li>JavaScript</li> <li>Dart</li> <li>Python</li> <li>Java</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Frameworks</span></div> <div class="card-content"><ul><li>Laravel</li> <li>Svelte/SvelteKit</li> <li>Prisma</li> <li>ExpressJS</li> <li>Flutter</li> <li>TailwindCSS</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Databases</span></div> <div class="card-content"><ul><li>PostgreSQL</li> <li>MariaDB/MySQL</li> <li>sqlite</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Tools</span></div> <div class="card-content"><ul><li>Linux</li> <li>Docker</li> <li>Mail server</li> <li>nginx</li> <li>git</li> <li>Ollama AI</li></ul></div></div></div></div></section>');function Pi(e){var a=Si(),i=o(a),t=p(o(i),2),r=o(t),n=o(r),s=o(n);li(s,{size:16}),z(2),d(n),z(2),d(r);var l=p(r,2),c=o(l),f=o(c);di(f,{size:16}),z(2),d(c),z(2),d(l);var m=p(l,2),b=o(m),v=o(b);oi(v,{size:16}),z(2),d(b),z(2),d(m);var w=p(m,2),g=o(w),u=o(g);pi(u,{size:16}),z(2),d(g),z(2),d(w),d(t),d(i),d(a),A(e,a)}var Ti=Y("<!> <!> <!> <!> <!> <!>",1);function Oi(e){var a=Ti(),i=T(a);Ai(i);var t=p(i,2);$i(t);var r=p(t,2);Pi(r);var n=p(r,2);Ei(n);var s=p(n,2);bi(s);var l=p(s,2);Ni(l),A(e,a)}export{Oi as component};
