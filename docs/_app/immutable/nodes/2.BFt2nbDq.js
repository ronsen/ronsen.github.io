import"../chunks/DsnmJJEf.js";import"../chunks/B6oXESPV.js";import{a7 as Xe,am as se,q as E,h as fe,S as K,X as Ze,ao as ea,ap as aa,aq as Ee,c as re,s as Y,d as W,C as ta,f as ia,p as U,at as ra,ar as sa,aC as na,o as Ie,ay as la,aD as Se,m as Oe,B as je,aE as oa,au as ge,av as De,aF as da,aG as va,aH as oe,aI as J,a as ca,aJ as fa,l as ua,aK as ha,v as He,aL as ga,an as _a,aM as pa,u as ma,g as ba,aw as Ve,aN as $a,aO as wa,aP as ya,aQ as Na,aR as ka,as as Aa,aS as Ma,aT as Ea,aU as Sa,aV as Pa,r as C,aW as Ta,ab as z,ac as A,w as L,aj as d,al as b,aX as I,ak as v,a9 as O,aa as T,aA as xa,aY as Ca,ah as G,aZ as x}from"../chunks/wzu9LTga.js";import{p as Z,r as j,s as D}from"../chunks/B_skw03Z.js";import{b as za,c as La,d as Ia,e as Oa,n as ja,f as Da}from"../chunks/DJMDGznk.js";function Ha(e,a){if(a){const t=document.body;e.autofocus=!0,Xe(()=>{document.activeElement===t&&e.focus()})}}function Va(e,a){return a}function Ra(e,a,t){for(var i=e.items,r=[],n=a.length,s=0;s<n;s++)fa(a[s].e,r,!0);var l=n>0&&r.length===0&&t!==null;if(l){var u=t.parentNode;ua(u),u.append(t),i.clear(),F(e,a[0].prev,a[n-1].next)}ha(r,()=>{for(var c=0;c<n;c++){var p=a[c];l||(i.delete(p.k),F(e,p.prev,p.next)),J(p.e,!l)}})}function Fa(e,a,t,i,r,n=null){var s=e,l={flags:a,items:new Map,first:null};E&&fe();var u=null,c=!1,p=new Map,m=Ze(()=>{var f=t();return je(f)?f:f==null?[]:Oe(f)}),o,$;function g(){Ba($,o,l,p,s,r,a,i,t),n!==null&&(o.length===0?u?ge(u):u=U(()=>n(s)):u!==null&&De(u,()=>{u=null}))}se(()=>{$??=He,o=K(m);var f=o.length;if(c&&f===0)return;c=f===0;let N=!1;if(E){var y=ea(s)===aa;y!==(f===0)&&(s=Ee(),re(s),Y(!1),N=!0)}if(E){for(var S=null,h,_=0;_<f;_++){if(W.nodeType===ta&&W.data===ia){s=W,N=!0,Y(!1);break}var w=o[_],M=i(w,_);h=ue(W,l,S,null,w,M,_,r,a,t),l.items.set(M,h),S=h}f>0&&re(Ee())}if(E)f===0&&n&&(u=U(()=>n(s)));else if(ra()){var k=new Set,V=sa;for(_=0;_<f;_+=1){w=o[_],M=i(w,_);var P=l.items.get(M)??p.get(M);P?Re(P,w,_):(h=ue(null,l,null,null,w,M,_,r,a,t,!0),p.set(M,h)),k.add(M)}for(const[q,B]of l.items)k.has(q)||V.skipped_effects.add(B.e);V.add_callback(g)}else g();N&&Y(!0),K(m)}),E&&(s=W)}function Ba(e,a,t,i,r,n,s,l,u){var c=a.length,p=t.items,m=t.first,o=m,$,g=null,f=[],N=[],y,S,h,_;for(_=0;_<c;_+=1){if(y=a[_],S=l(y,_),h=p.get(S),h===void 0){var w=i.get(S);if(w!==void 0){i.delete(S),p.set(S,w);var M=g?g.next:o;F(t,g,w),F(t,w,M),de(w,M,r),g=w}else{var k=o?o.e.nodes_start:r;g=ue(k,t,g,g===null?t.first:g.next,y,S,_,n,s,u)}p.set(S,g),f=[],N=[],o=g.next;continue}if(Re(h,y,_),(h.e.f&oe)!==0&&ge(h.e),h!==o){if($!==void 0&&$.has(h)){if(f.length<N.length){var V=N[0],P;g=V.prev;var q=f[0],B=f[f.length-1];for(P=0;P<f.length;P+=1)de(f[P],V,r);for(P=0;P<N.length;P+=1)$.delete(N[P]);F(t,q.prev,B.next),F(t,g,q),F(t,B,V),o=V,g=B,_-=1,f=[],N=[]}else $.delete(h),de(h,o,r),F(t,h.prev,h.next),F(t,h,g===null?t.first:g.next),F(t,g,h),g=h;continue}for(f=[],N=[];o!==null&&o.k!==S;)(o.e.f&oe)===0&&($??=new Set).add(o),N.push(o),o=o.next;if(o===null)continue;h=o}f.push(h),g=h,o=h.next}if(o!==null||$!==void 0){for(var Q=$===void 0?[]:Oe($);o!==null;)(o.e.f&oe)===0&&Q.push(o),o=o.next;var X=Q.length;if(X>0){var te=null;Ra(t,Q,te)}}e.first=t.first&&t.first.e,e.last=g&&g.e;for(var ie of i.values())J(ie.e);i.clear()}function Re(e,a,t,i){na(e.v,a),e.i=t}function ue(e,a,t,i,r,n,s,l,u,c,p){var m=(u&da)!==0,o=(u&va)===0,$=m?o?la(r,!1,!1):Se(r):r,g=(u&oa)===0?s:Se(s),f={i:g,v:$,k:n,a:null,e:null,prev:t,next:i};try{if(e===null){var N=document.createDocumentFragment();N.append(e=Ie())}return f.e=U(()=>l(e,$,g,c),E),f.e.prev=t&&t.e,f.e.next=i&&i.e,t===null?p||(a.first=f):(t.next=f,t.e.next=f.e),i!==null&&(i.prev=f,i.e.prev=f.e),f}finally{}}function de(e,a,t){for(var i=e.next?e.next.e.nodes_start:t,r=a?a.e.nodes_start:t,n=e.e.nodes_start;n!==null&&n!==i;){var s=ca(n);r.before(n),n=s}}function F(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function Wa(e,a,t,i,r,n){let s=E;E&&fe();var l,u,c=null;E&&W.nodeType===ga&&(c=W,fe());var p=E?W:e,m;se(()=>{const o=a()||null;var $=pa;o!==l&&(m&&(o===null?De(m,()=>{m=null,u=null}):o===u?ge(m):J(m)),o&&o!==u&&(m=U(()=>{if(c=E?c:document.createElementNS($,o),ma(c,c),i){E&&za(o)&&c.append(document.createComment(""));var g=E?ba(c):c.appendChild(Ie());E&&(g===null?Y(!1):re(g)),i(c,g)}He.nodes_end=c,p.before(c)})),l=o,l&&(u=l))},_a),s&&(Y(!0),re(p))}function qa(e,a){var t=void 0,i;se(()=>{t!==(t=a())&&(i&&(J(i),i=null),t&&(i=U(()=>{Ve(()=>t(e))})))})}function Fe(e){var a,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(t=Fe(e[a]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Ya(){for(var e,a,t=0,i="",r=arguments.length;t<r;t++)(e=arguments[t])&&(a=Fe(e))&&(i&&(i+=" "),i+=a);return i}function Ga(e){return typeof e=="object"?Ya(e):e??""}const Pe=[...` 	
\r\f \v\uFEFF`];function Ka(e,a,t){var i=e==null?"":""+e;if(t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var n=r.length,s=0;(s=i.indexOf(r,s))>=0;){var l=s+n;(s===0||Pe.includes(i[s-1]))&&(l===i.length||Pe.includes(i[l]))?i=(s===0?"":i.substring(0,s))+i.substring(l+1):s=l}}return i===""?null:i}function Te(e,a=!1){var t=a?" !important;":";",i="";for(var r in e){var n=e[r];n!=null&&n!==""&&(i+=" "+r+": "+n+t)}return i}function ve(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ua(e,a){if(a){var t="",i,r;if(Array.isArray(a)?(i=a[0],r=a[1]):i=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,l=!1,u=[];i&&u.push(...Object.keys(i).map(ve)),r&&u.push(...Object.keys(r).map(ve));var c=0,p=-1;const f=e.length;for(var m=0;m<f;m++){var o=e[m];if(l?o==="/"&&e[m-1]==="*"&&(l=!1):n?n===o&&(n=!1):o==="/"&&e[m+1]==="*"?l=!0:o==='"'||o==="'"?n=o:o==="("?s++:o===")"&&s--,!l&&n===!1&&s===0){if(o===":"&&p===-1)p=m;else if(o===";"||m===f-1){if(p!==-1){var $=ve(e.substring(c,p).trim());if(!u.includes($)){o!==";"&&m++;var g=e.substring(c,m).trim();t+=" "+g+";"}}c=m+1,p=-1}}}}return i&&(t+=Te(i)),r&&(t+=Te(r,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ja(e,a,t,i,r,n){var s=e.__className;if(E||s!==t||s===void 0){var l=Ka(t,i,n);(!E||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):a?e.className=l:e.setAttribute("class",l)),e.__className=t}else if(n&&r!==n)for(var u in n){var c=!!n[u];(r==null||c!==!!r[u])&&e.classList.toggle(u,c)}return n}function ce(e,a={},t,i){for(var r in t){var n=t[r];a[r]!==n&&(t[r]==null?e.style.removeProperty(r):e.style.setProperty(r,n,i))}}function Qa(e,a,t,i){var r=e.__style;if(E||r!==a){var n=Ua(a,i);(!E||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=a}else i&&(Array.isArray(i)?(ce(e,t?.[0],i[0]),ce(e,t?.[1],i[1],"important")):ce(e,t,i));return i}function he(e,a,t=!1){if(e.multiple){if(a==null)return;if(!je(a))return $a();for(var i of e.options)i.selected=a.includes(xe(i));return}for(i of e.options){var r=xe(i);if(wa(r,a)){i.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function Xa(e){var a=new MutationObserver(()=>{he(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ya(()=>{a.disconnect()})}function xe(e){return"__value"in e?e.__value:e.value}const ee=Symbol("class"),ae=Symbol("style"),Be=Symbol("is custom element"),We=Symbol("is html");function Za(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ce(e,a,t,i){var r=qe(e);E&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=t)&&(a==="loading"&&(e[Sa]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Ye(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function et(e,a,t,i,r=!1){var n=qe(e),s=n[Be],l=!n[We];let u=E&&s;u&&Y(!1);var c=a||{},p=e.tagName==="OPTION";for(var m in a)m in t||(t[m]=null);t.class?t.class=Ga(t.class):t[ee]&&(t.class=null),t[ae]&&(t.style??=null);var o=Ye(e);for(const h in t){let _=t[h];if(p&&h==="value"&&_==null){e.value=e.__value="",c[h]=_;continue}if(h==="class"){var $=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ja(e,$,_,i,a?.[ee],t[ee]),c[h]=_,c[ee]=t[ee];continue}if(h==="style"){Qa(e,_,a?.[ae],t[ae]),c[h]=_,c[ae]=t[ae];continue}var g=c[h];if(!(_===g&&!(_===void 0&&e.hasAttribute(h)))){c[h]=_;var f=h[0]+h[1];if(f!=="$$")if(f==="on"){const w={},M="$$"+h;let k=h.slice(2);var N=Da(k);if(La(k)&&(k=k.slice(0,-7),w.capture=!0),!N&&g){if(_!=null)continue;e.removeEventListener(k,c[M],w),c[M]=null}if(_!=null)if(N)e[`__${k}`]=_,Oa([k]);else{let V=function(P){c[h].call(this,P)};c[M]=Ia(k,e,V,w)}else N&&(e[`__${k}`]=void 0)}else if(h==="style")Ce(e,h,_);else if(h==="autofocus")Ha(e,!!_);else if(!s&&(h==="__value"||h==="value"&&_!=null))e.value=e.__value=_;else if(h==="selected"&&p)Za(e,_);else{var y=h;l||(y=ja(y));var S=y==="defaultValue"||y==="defaultChecked";if(_==null&&!s&&!S)if(n[h]=null,y==="value"||y==="checked"){let w=e;const M=a===void 0;if(y==="value"){let k=w.defaultValue;w.removeAttribute(y),w.defaultValue=k,w.value=w.__value=M?k:null}else{let k=w.defaultChecked;w.removeAttribute(y),w.defaultChecked=k,w.checked=M?k:!1}}else e.removeAttribute(h);else S||o.includes(y)&&(s||typeof _!="string")?(e[y]=_,y in n&&(n[y]=Aa)):typeof _!="function"&&Ce(e,y,_)}}}return u&&Y(!0),c}function ze(e,a,t=[],i=[],r,n=!1){Na(t,i,s=>{var l=void 0,u={},c=e.nodeName==="SELECT",p=!1;if(se(()=>{var o=a(...s.map(K)),$=et(e,l,o,r,n);p&&c&&"value"in o&&he(e,o.value);for(let f of Object.getOwnPropertySymbols(u))o[f]||J(u[f]);for(let f of Object.getOwnPropertySymbols(o)){var g=o[f];f.description===ka&&(!l||g!==l[f])&&(u[f]&&J(u[f]),u[f]=U(()=>qa(e,()=>g))),$[f]=g}l=$}),c){var m=e;Ve(()=>{he(m,l.value,!0),Xa(m)})}p=!0})}function qe(e){return e.__attributes??={[Be]:e.nodeName.includes("-"),[We]:e.namespaceURI===Ma}}var Le=new Map;function Ye(e){var a=e.getAttribute("is")||e.nodeName,t=Le.get(a);if(t)return t;Le.set(a,t=[]);for(var i,r=e,n=Element.prototype;n!==r;){i=Pa(r);for(var s in i)i[s].set&&t.push(s);r=Ea(r)}return t}/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const at={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var tt=Ta("<svg><!><!></svg>");function H(e,a){C(a,!0);const t=Z(a,"color",3,"currentColor"),i=Z(a,"size",3,24),r=Z(a,"strokeWidth",3,2),n=Z(a,"absoluteStrokeWidth",3,!1),s=Z(a,"iconNode",19,()=>[]),l=j(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=tt();ze(u,m=>({...at,...l,width:i(),height:i(),stroke:t(),"stroke-width":m,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>n()?Number(r())*24/Number(i()):r()]);var c=d(u);Fa(c,17,s,Va,(m,o)=>{var $=xa(()=>Ca(K(o),2));let g=()=>K($)[0],f=()=>K($)[1];var N=O(),y=T(N);Wa(y,g,!0,(S,h)=>{ze(S,()=>({...f()}))}),A(m,N)});var p=b(c);z(p,()=>a.children??I),v(u),A(e,u),L()}function it(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];H(e,D({name:"building-2"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function rt(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];H(e,D({name:"code"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function st(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];H(e,D({name:"database"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function nt(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];H(e,D({name:"frame"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function lt(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];H(e,D({name:"github"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ot(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];H(e,D({name:"globe"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function dt(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];H(e,D({name:"mail"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function vt(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];H(e,D({name:"message-circle"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ct(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];H(e,D({name:"scroll-text"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ft(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];H(e,D({name:"smartphone"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function R(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];H(e,D({name:"square-arrow-out-up-right"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ut(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];H(e,D({name:"twitter"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}function ht(e,a){C(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=j(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];H(e,D({name:"wrench"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=O(),l=T(s);z(l,()=>a.children??I),A(r,s)},$$slots:{default:!0}})),L()}var gt=G(`<section><div class="section-container"><h3 class="section-title">Let's Connect</h3> <div class="text-center mb-6">Do you have any questions regarding website and application development?
			Let's discuss first!</div> <div class="grid md:grid-cols-2 gap-4"><a class="btn btn-primary inline-flex items-center gap-2" href="mailto:ronsen@startrek.or.id"><!> <span>Email me</span></a> <a class="btn btn-success inline-flex items-center gap-2" href="https://wa.me/6281319479396"><!> <span>WhatsApp</span></a></div></div></section>`);function _t(e){var a=gt(),t=d(a),i=b(d(t),4),r=d(i),n=d(r);dt(n,{size:16}),x(2),v(r);var s=b(r,2),l=d(s);vt(l,{size:16}),x(2),v(s),v(i),v(t),v(a),A(e,a)}var pt=G(`<section><div class="section-container"><h3 class="section-title">Area of Expertise</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Web Programming</span></div> <div class="card-content">Proficient in developing and maintaining web applications using modern
					programming languages and frameworks. Skilled in writing clean,
					efficient code, optimizing application performance, and ensuring
					smooth functionality across different platforms and devices.</div></div> <div class="card"><div class="card-title"><!> <span>Mobile Programming</span></div> <div class="card-content">Skilled in building responsive and high-performance mobile
					applications. Experienced in using modern frameworks and languages to
					create user-friendly, efficient, and scalable mobile solutions.</div></div></div></div></section>`);function mt(e){var a=pt(),t=d(a),i=b(d(t),2),r=d(i),n=d(r),s=d(n);ot(s,{}),x(2),v(n),x(2),v(r);var l=b(r,2),u=d(l),c=d(u);ft(c,{}),x(2),v(u),x(2),v(l),v(i),v(t),v(a),A(e,a)}var bt=G('<section class="bg-zinc-900 text-white"><div class="section-container"><div class="flex justify-center items-center gap-4"><a href="https://sintaks.web.id" target="_blank"><!></a> <a href="https://ronsen.vercel.app" target="_blank"><!></a> <a href="https://github.com/ronsen" target="_blank"><!></a> <a href="https://x.com/rnldnbbn" target="_blank"><!></a></div></div></section>');function $t(e){var a=bt(),t=d(a),i=d(t),r=d(i),n=d(r);it(n,{size:18}),v(r);var s=b(r,2),l=d(s);ct(l,{size:18}),v(s);var u=b(s,2),c=d(u);lt(c,{size:18}),v(u);var p=b(u,2),m=d(p);ut(m,{size:18}),v(p),v(i),v(t),v(a),A(e,a)}var wt=G('<section class="bg-sky-800 text-white text-center"><a href="/"><img alt="[]" class="w-48 mx-auto rounded-full shadow" src="./avatar.jpg"/></a> <div class="mt-6"><h1 class="font-bold text-3xl mb-4">Ronald Nababan</h1> <p>Freelance Programmer</p></div></section>');function yt(e){var a=wt();A(e,a)}var Nt=G(`<section><div class="section-container mb-12"><h3 class="section-title">Projects</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><a href="https://www.hetanews.com" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://www.hetanews.com/favicon.ico" width="12px"/> Heta News</div> <!></div></a></div> <div class="card"><a href="https://fokus24.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://fokus24.id/favicon.ico" width="12px"/> Fokus24</div> <!></div></a></div></div></div> <div class="section-container mb-12"><h3 class="section-title">Fun Projects</h3> <div class="mb-4"><a href="https://ace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ace</strong> &mdash; Easy bookmark manager</div> <!></div></a></div> <div class="mb-4"><a href="https://asikin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Asikin</strong> &mdash; YouTube trending videos</div> <!></div></a></div> <div class="mb-4"><a href="https://coverletter.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Cover Letter</strong> &mdash; Bikin <em>cover letter</em> lebih mudah</div> <!></div></a></div> <div class="mb-4"><a href="https://ende.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ende</strong> &mdash; Kumpulan lirik lagu Batak</div> <!></div></a></div> <div class="mb-4"><a href="https://guritan.vercel.app/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Guritan</strong> &mdash; Penyunting <em>markdown</em> untuk Blogger</div> <!></div></a></div> <div class="mb-4"><a href="https://kecilin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Kecilin</strong> &mdash; Ngecilin gambar-gambar yang
						berukuran besar</div> <!></div></a></div> <div class="mb-4"><a href="https://video.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Video</strong> &mdash; Social video sharing and bookmarking</div> <!></div></a></div></div> <div class="section-container"><h3 class="section-title">Demo Projects</h3> <div class="mb-4"><a href="https://demo.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Berita</strong> &mdash; <em>Content management system</em> untuk situs web berita</div> <!></div></a></div> <div class="mb-4"><a href="https://marketplace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Marketplace</strong> &mdash; Multi-vendor online
						shop</div> <!></div></a></div></div></section>`);function kt(e){var a=Nt(),t=d(a),i=b(d(t),2),r=d(i),n=d(r),s=d(n),l=b(d(s),2);R(l,{size:14}),v(s),v(n),v(r);var u=b(r,2),c=d(u),p=d(c),m=b(d(p),2);R(m,{size:14}),v(p),v(c),v(u),v(i),v(t);var o=b(t,2),$=b(d(o),2),g=d($),f=d(g),N=b(d(f),2);R(N,{size:14}),v(f),v(g),v($);var y=b($,2),S=d(y),h=d(S),_=b(d(h),2);R(_,{size:14}),v(h),v(S),v(y);var w=b(y,2),M=d(w),k=d(M),V=b(d(k),2);R(V,{size:14}),v(k),v(M),v(w);var P=b(w,2),q=d(P),B=d(q),Q=b(d(B),2);R(Q,{size:14}),v(B),v(q),v(P);var X=b(P,2),te=d(X),ie=d(te),Ge=b(d(ie),2);R(Ge,{size:14}),v(ie),v(te),v(X);var ne=b(X,2),_e=d(ne),pe=d(_e),Ke=b(d(pe),2);R(Ke,{size:14}),v(pe),v(_e),v(ne);var me=b(ne,2),be=d(me),$e=d(be),Ue=b(d($e),2);R(Ue,{size:14}),v($e),v(be),v(me),v(o);var we=b(o,2),le=b(d(we),2),ye=d(le),Ne=d(ye),Je=b(d(Ne),2);R(Je,{size:14}),v(Ne),v(ye),v(le);var ke=b(le,2),Ae=d(ke),Me=d(Ae),Qe=b(d(Me),2);R(Qe,{size:14}),v(Me),v(Ae),v(ke),v(we),v(a),A(e,a)}var At=G('<section class="bg-zinc-50"><div class="section-container"><h3 class="section-title">Technical Skills</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Programming</span></div> <div class="card-content"><ul><li>PHP</li> <li>JavaScript</li> <li>Dart</li> <li>Python</li> <li>Java</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Frameworks</span></div> <div class="card-content"><ul><li>Laravel</li> <li>Svelte/SvelteKit</li> <li>Prisma</li> <li>ExpressJS</li> <li>Flutter</li> <li>TailwindCSS</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Databases</span></div> <div class="card-content"><ul><li>PostgreSQL</li> <li>MariaDB/MySQL</li> <li>sqlite</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Tools</span></div> <div class="card-content"><ul><li>Linux</li> <li>Docker</li> <li>Mail server</li> <li>nginx</li> <li>git</li> <li>Ollama AI</li></ul></div></div></div></div></section>');function Mt(e){var a=At(),t=d(a),i=b(d(t),2),r=d(i),n=d(r),s=d(n);rt(s,{size:16}),x(2),v(n),x(2),v(r);var l=b(r,2),u=d(l),c=d(u);nt(c,{size:16}),x(2),v(u),x(2),v(l);var p=b(l,2),m=d(p),o=d(m);st(o,{size:16}),x(2),v(m),x(2),v(p);var $=b(p,2),g=d($),f=d(g);ht(f,{size:16}),x(2),v(g),x(2),v($),v(i),v(t),v(a),A(e,a)}var Et=G("<!> <!> <!> <!> <!> <!>",1);function zt(e){var a=Et(),t=T(a);yt(t);var i=b(t,2);mt(i);var r=b(i,2);Mt(r);var n=b(r,2);kt(n);var s=b(n,2);_t(s);var l=b(s,2);$t(l),A(e,a)}export{zt as component};
