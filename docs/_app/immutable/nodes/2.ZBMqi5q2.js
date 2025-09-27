import"../chunks/DsnmJJEf.js";import"../chunks/l10yKHrT.js";import{w as Xe,_ as ne,Y as E,$ as ue,a as G,f as ea,aH as aa,a1 as ta,ab as Se,a9 as re,an as Y,X as q,a0 as ia,au as ra,a2 as J,aK as sa,aI as na,Z as la,as as Oe,aN as oa,U as Pe,aq as je,t as De,aR as da,aL as _e,a4 as He,aS as va,aT as ca,aU as de,a8 as Z,ah as fa,aV as ua,ap as ha,aW as ga,c as Ve,aX as _a,ae as pa,aY as ba,at as ma,ak as $a,aM as Re,aZ as wa,a_ as ka,a$ as ya,b0 as Na,b1 as Aa,aJ as Ma,b2 as Ea,b3 as Sa,b4 as Pa,b5 as Ta,b6 as xa,J as L,b7 as za,A as I,B as S,N as O,O as d,R as _,b8 as j,Q as v,y as D,z,aP as Ca,b9 as La,K,aa as C}from"../chunks/CocvrZuC.js";import{p as X,r as H,s as V}from"../chunks/BBeSE2ZG.js";import{b as Ia,c as Oa,d as ja,e as Da,n as Ha,f as Va}from"../chunks/h5FK38fP.js";function Ra(e,a){if(a){const t=document.body;e.autofocus=!0,Xe(()=>{document.activeElement===t&&e.focus()})}}let Te=!1;function Ba(){Te||(Te=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const a of e.target.elements)a.__on_r?.()})},{capture:!0}))}function Fa(e,a){return a}function Wa(e,a,t){for(var i=e.items,r=[],n=a.length,s=0;s<n;s++)ua(a[s].e,r,!0);var l=n>0&&r.length===0&&t!==null;if(l){var c=t.parentNode;ha(c),c.append(t),i.clear(),W(e,a[0].prev,a[n-1].next)}ga(r,()=>{for(var f=0;f<n;f++){var p=a[f];l||(i.delete(p.k),W(e,p.prev,p.next)),Z(p.e,!l)}})}function qa(e,a,t,i,r,n=null){var s=e,l={flags:a,items:new Map,first:null};E&&ue();var c=null,f=!1,p=new Map,g=ea(()=>{var u=t();return De(u)?u:u==null?[]:je(u)}),o,m;function h(){Ua(m,o,l,p,s,r,a,i,t),n!==null&&(o.length===0?c?_e(c):c=J(()=>n(s)):c!==null&&He(c,()=>{c=null}))}ne(()=>{m??=Ve,o=G(g);var u=o.length;if(f&&u===0)return;f=u===0;let w=!1;if(E){var x=aa(s)===ta;x!==(u===0)&&(s=Se(),re(s),Y(!1),w=!0)}if(E){for(var T=null,k,$=0;$<u;$++){if(q.nodeType===ia&&q.data===ra){s=q,w=!0,Y(!1);break}var P=o[$],b=i(P,$);k=he(q,l,T,null,P,b,$,r,a,t),l.items.set(b,k),T=k}u>0&&re(Se())}if(E)u===0&&n&&(c=J(()=>n(s)));else if(sa()){var y=new Set,N=na;for($=0;$<u;$+=1){P=o[$],b=i(P,$);var M=l.items.get(b)??p.get(b);M?Be(M,P,$):(k=he(null,l,null,null,P,b,$,r,a,t,!0),p.set(b,k)),y.add(b)}for(const[A,F]of l.items)y.has(A)||N.skipped_effects.add(F.e);N.add_callback(h)}else h();w&&Y(!0),G(g)}),E&&(s=q)}function Ua(e,a,t,i,r,n,s,l,c){var f=a.length,p=t.items,g=t.first,o=g,m,h=null,u=[],w=[],x,T,k,$;for($=0;$<f;$+=1){if(x=a[$],T=l(x,$),k=p.get(T),k===void 0){var P=i.get(T);if(P!==void 0){i.delete(T),p.set(T,P);var b=h?h.next:o;W(t,h,P),W(t,P,b),ve(P,b,r),h=P}else{var y=o?o.e.nodes_start:r;h=he(y,t,h,h===null?t.first:h.next,x,T,$,n,s,c)}p.set(T,h),u=[],w=[],o=h.next;continue}if(Be(k,x,$),(k.e.f&de)!==0&&_e(k.e),k!==o){if(m!==void 0&&m.has(k)){if(u.length<w.length){var N=w[0],M;h=N.prev;var A=u[0],F=u[u.length-1];for(M=0;M<u.length;M+=1)ve(u[M],N,r);for(M=0;M<w.length;M+=1)m.delete(w[M]);W(t,A.prev,F.next),W(t,h,A),W(t,F,N),o=N,h=F,$-=1,u=[],w=[]}else m.delete(k),ve(k,o,r),W(t,k.prev,k.next),W(t,k,h===null?t.first:h.next),W(t,h,k),h=k;continue}for(u=[],w=[];o!==null&&o.k!==T;)(o.e.f&de)===0&&(m??=new Set).add(o),w.push(o),o=o.next;if(o===null)continue;k=o}u.push(k),h=k,o=k.next}if(o!==null||m!==void 0){for(var U=m===void 0?[]:je(m);o!==null;)(o.e.f&de)===0&&U.push(o),o=o.next;var Q=U.length;if(Q>0){var te=null;Wa(t,U,te)}}e.first=t.first&&t.first.e,e.last=h&&h.e;for(var ie of i.values())Z(ie.e);i.clear()}function Be(e,a,t,i){la(e.v,a),e.i=t}function he(e,a,t,i,r,n,s,l,c,f,p){var g=(c&va)!==0,o=(c&ca)===0,m=g?o?oa(r,!1,!1):Pe(r):r,h=(c&da)===0?s:Pe(s),u={i:h,v:m,k:n,a:null,e:null,prev:t,next:i};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Oe())}return u.e=J(()=>l(e,m,h,f),E),u.e.prev=t&&t.e,u.e.next=i&&i.e,t===null?p||(a.first=u):(t.next=u,t.e.next=u.e),i!==null&&(i.prev=u,i.e.prev=u.e),u}finally{}}function ve(e,a,t){for(var i=e.next?e.next.e.nodes_start:t,r=a?a.e.nodes_start:t,n=e.e.nodes_start;n!==null&&n!==i;){var s=fa(n);r.before(n),n=s}}function W(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function Ya(e,a,t,i,r,n){let s=E;E&&ue();var l,c,f=null;E&&q.nodeType===_a&&(f=q,ue());var p=E?q:e,g;ne(()=>{const o=a()||null;var m=ba;o!==l&&(g&&(o===null?He(g,()=>{g=null,c=null}):o===c?_e(g):Z(g)),o&&o!==c&&(g=J(()=>{if(f=E?f:document.createElementNS(m,o),ma(f,f),i){E&&Ia(o)&&f.append(document.createComment(""));var h=E?$a(f):f.appendChild(Oe());E&&(h===null?Y(!1):re(h)),i(f,h)}Ve.nodes_end=f,p.before(f)})),l=o,l&&(c=l))},pa),s&&(Y(!0),re(p))}function Ka(e,a){var t=void 0,i;ne(()=>{t!==(t=a())&&(i&&(Z(i),i=null),t&&(i=J(()=>{Re(()=>t(e))})))})}function Fe(e){var a,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(t=Fe(e[a]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Ga(){for(var e,a,t=0,i="",r=arguments.length;t<r;t++)(e=arguments[t])&&(a=Fe(e))&&(i&&(i+=" "),i+=a);return i}function Ja(e){return typeof e=="object"?Ga(e):e??""}const xe=[...` 	
\r\f \v\uFEFF`];function Za(e,a,t){var i=e==null?"":""+e;if(t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var n=r.length,s=0;(s=i.indexOf(r,s))>=0;){var l=s+n;(s===0||xe.includes(i[s-1]))&&(l===i.length||xe.includes(i[l]))?i=(s===0?"":i.substring(0,s))+i.substring(l+1):s=l}}return i===""?null:i}function ze(e,a=!1){var t=a?" !important;":";",i="";for(var r in e){var n=e[r];n!=null&&n!==""&&(i+=" "+r+": "+n+t)}return i}function ce(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qa(e,a){if(a){var t="",i,r;if(Array.isArray(a)?(i=a[0],r=a[1]):i=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,l=!1,c=[];i&&c.push(...Object.keys(i).map(ce)),r&&c.push(...Object.keys(r).map(ce));var f=0,p=-1;const u=e.length;for(var g=0;g<u;g++){var o=e[g];if(l?o==="/"&&e[g-1]==="*"&&(l=!1):n?n===o&&(n=!1):o==="/"&&e[g+1]==="*"?l=!0:o==='"'||o==="'"?n=o:o==="("?s++:o===")"&&s--,!l&&n===!1&&s===0){if(o===":"&&p===-1)p=g;else if(o===";"||g===u-1){if(p!==-1){var m=ce(e.substring(f,p).trim());if(!c.includes(m)){o!==";"&&g++;var h=e.substring(f,g).trim();t+=" "+h+";"}}f=g+1,p=-1}}}}return i&&(t+=ze(i)),r&&(t+=ze(r,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Xa(e,a,t,i,r,n){var s=e.__className;if(E||s!==t||s===void 0){var l=Za(t,i,n);(!E||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):a?e.className=l:e.setAttribute("class",l)),e.__className=t}else if(n&&r!==n)for(var c in n){var f=!!n[c];(r==null||f!==!!r[c])&&e.classList.toggle(c,f)}return n}function fe(e,a={},t,i){for(var r in t){var n=t[r];a[r]!==n&&(t[r]==null?e.style.removeProperty(r):e.style.setProperty(r,n,i))}}function et(e,a,t,i){var r=e.__style;if(E||r!==a){var n=Qa(a,i);(!E||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=a}else i&&(Array.isArray(i)?(fe(e,t?.[0],i[0]),fe(e,t?.[1],i[1],"important")):fe(e,t,i));return i}function ge(e,a,t=!1){if(e.multiple){if(a==null)return;if(!De(a))return wa();for(var i of e.options)i.selected=a.includes(Ce(i));return}for(i of e.options){var r=Ce(i);if(ka(r,a)){i.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function at(e){var a=new MutationObserver(()=>{ge(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ya(()=>{a.disconnect()})}function Ce(e){return"__value"in e?e.__value:e.value}const ee=Symbol("class"),ae=Symbol("style"),We=Symbol("is custom element"),qe=Symbol("is html");function tt(e){if(E){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var i=e.value;se(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var r=e.checked;se(e,"checked",null),e.checked=r}}};e.__on_r=t,Ea(t),Ba()}}function it(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function se(e,a,t,i){var r=Ue(e);E&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=t)&&(a==="loading"&&(e[Ta]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Ye(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function rt(e,a,t,i,r=!1,n=!1){if(E&&r&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in t||tt(s)}var c=Ue(e),f=c[We],p=!c[qe];let g=E&&f;g&&Y(!1);var o=a||{},m=e.tagName==="OPTION";for(var h in a)h in t||(t[h]=null);t.class?t.class=Ja(t.class):t[ee]&&(t.class=null),t[ae]&&(t.style??=null);var u=Ye(e);for(const b in t){let y=t[b];if(m&&b==="value"&&y==null){e.value=e.__value="",o[b]=y;continue}if(b==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";Xa(e,w,y,i,a?.[ee],t[ee]),o[b]=y,o[ee]=t[ee];continue}if(b==="style"){et(e,y,a?.[ae],t[ae]),o[b]=y,o[ae]=t[ae];continue}var x=o[b];if(!(y===x&&!(y===void 0&&e.hasAttribute(b)))){o[b]=y;var T=b[0]+b[1];if(T!=="$$")if(T==="on"){const N={},M="$$"+b;let A=b.slice(2);var k=Va(A);if(Oa(A)&&(A=A.slice(0,-7),N.capture=!0),!k&&x){if(y!=null)continue;e.removeEventListener(A,o[M],N),o[M]=null}if(y!=null)if(k)e[`__${A}`]=y,Da([A]);else{let F=function(U){o[b].call(this,U)};o[M]=ja(A,e,F,N)}else k&&(e[`__${A}`]=void 0)}else if(b==="style")se(e,b,y);else if(b==="autofocus")Ra(e,!!y);else if(!f&&(b==="__value"||b==="value"&&y!=null))e.value=e.__value=y;else if(b==="selected"&&m)it(e,y);else{var $=b;p||($=Ha($));var P=$==="defaultValue"||$==="defaultChecked";if(y==null&&!f&&!P)if(c[b]=null,$==="value"||$==="checked"){let N=e;const M=a===void 0;if($==="value"){let A=N.defaultValue;N.removeAttribute($),N.defaultValue=A,N.value=N.__value=M?A:null}else{let A=N.defaultChecked;N.removeAttribute($),N.defaultChecked=A,N.checked=M?A:!1}}else e.removeAttribute(b);else P||u.includes($)&&(f||typeof y!="string")?(e[$]=y,$ in c&&(c[$]=Ma)):typeof y!="function"&&se(e,$,y)}}}return g&&Y(!0),o}function Le(e,a,t=[],i=[],r,n=!1,s=!1){Na(t,i,l=>{var c=void 0,f={},p=e.nodeName==="SELECT",g=!1;if(ne(()=>{var m=a(...l.map(G)),h=rt(e,c,m,r,n,s);g&&p&&"value"in m&&ge(e,m.value);for(let w of Object.getOwnPropertySymbols(f))m[w]||Z(f[w]);for(let w of Object.getOwnPropertySymbols(m)){var u=m[w];w.description===Aa&&(!c||u!==c[w])&&(f[w]&&Z(f[w]),f[w]=J(()=>Ka(e,()=>u))),h[w]=u}c=h}),p){var o=e;Re(()=>{ge(o,c.value,!0),at(o)})}g=!0})}function Ue(e){return e.__attributes??={[We]:e.nodeName.includes("-"),[qe]:e.namespaceURI===Sa}}var Ie=new Map;function Ye(e){var a=e.getAttribute("is")||e.nodeName,t=Ie.get(a);if(t)return t;Ie.set(a,t=[]);for(var i,r=e,n=Element.prototype;n!==r;){i=xa(r);for(var s in i)i[s].set&&t.push(s);r=Pa(r)}return t}/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */const st={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var nt=za("<svg><!><!></svg>");function R(e,a){L(a,!0);const t=X(a,"color",3,"currentColor"),i=X(a,"size",3,24),r=X(a,"strokeWidth",3,2),n=X(a,"absoluteStrokeWidth",3,!1),s=X(a,"iconNode",19,()=>[]),l=H(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=nt();Le(c,g=>({...st,...l,width:i(),height:i(),stroke:t(),"stroke-width":g,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>n()?Number(r())*24/Number(i()):r()]);var f=d(c);qa(f,17,s,Fa,(g,o)=>{var m=Ca(()=>La(G(o),2));let h=()=>G(m)[0],u=()=>G(m)[1];var w=D(),x=z(w);Ya(x,h,!0,(T,k)=>{Le(T,()=>({...u()}))}),S(g,w)});var p=_(f);I(p,()=>a.children??j),v(c),S(e,c),O()}function lt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];R(e,V({name:"building-2"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function ot(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];R(e,V({name:"code"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function dt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];R(e,V({name:"database"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function vt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];R(e,V({name:"frame"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function ct(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];R(e,V({name:"github"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function ft(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];R(e,V({name:"globe"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function ut(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];R(e,V({name:"mail"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function ht(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];R(e,V({name:"message-circle"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function gt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];R(e,V({name:"scroll-text"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function _t(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];R(e,V({name:"smartphone"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function B(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];R(e,V({name:"square-arrow-out-up-right"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function pt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];R(e,V({name:"twitter"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}function bt(e,a){L(a,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
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
 */let t=H(a,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];R(e,V({name:"wrench"},()=>t,{get iconNode(){return i},children:(r,n)=>{var s=D(),l=z(s);I(l,()=>a.children??j),S(r,s)},$$slots:{default:!0}})),O()}var mt=K(`<section><div class="section-container"><h3 class="section-title">Let's Connect</h3> <div class="text-center mb-6">Do you have any questions regarding website and application
			development? Let's discuss first!</div> <div class="grid md:grid-cols-2 gap-4"><a class="btn btn-primary inline-flex items-center gap-2" href="mailto:ronsen@startrek.or.id"><!><span>Email me</span></a> <a class="btn btn-success inline-flex items-center gap-2" href="https://wa.me/6281319479396"><!><span>WhatsApp</span></a></div></div></section>`);function $t(e){var a=mt(),t=d(a),i=_(d(t),4),r=d(i),n=d(r);ut(n,{size:16}),C(),v(r);var s=_(r,2),l=d(s);ht(l,{size:16}),C(),v(s),v(i),v(t),v(a),S(e,a)}var wt=K(`<section><div class="section-container"><h3 class="section-title">Area of Expertise</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Web Programming</span></div> <div class="card-content">Proficient in developing and maintaining web applications using modern
					programming languages and frameworks. Skilled in writing clean,
					efficient code, optimizing application performance, and ensuring
					smooth functionality across different platforms and devices.</div></div> <div class="card"><div class="card-title"><!> <span>Mobile Programming</span></div> <div class="card-content">Skilled in building responsive and high-performance mobile
					applications. Experienced in using modern frameworks and languages to
					create user-friendly, efficient, and scalable mobile solutions.</div></div></div></div></section>`);function kt(e){var a=wt(),t=d(a),i=_(d(t),2),r=d(i),n=d(r),s=d(n);ft(s,{}),C(2),v(n),C(2),v(r);var l=_(r,2),c=d(l),f=d(c);_t(f,{}),C(2),v(c),C(2),v(l),v(i),v(t),v(a),S(e,a)}var yt=K('<section class="bg-zinc-900 text-white"><div class="section-container"><div class="flex justify-center items-center gap-4"><a href="https://sintaks.web.id" target="_blank"><!></a> <a href="https://i-temp.blogspot.com" target="_blank"><!></a> <a href="https://github.com/ronsen" target="_blank"><!></a> <a href="https://x.com/rnldnbbn" target="_blank"><!></a></div></div></section>');function Nt(e){var a=yt(),t=d(a),i=d(t),r=d(i),n=d(r);lt(n,{size:18}),v(r);var s=_(r,2),l=d(s);gt(l,{size:18}),v(s);var c=_(s,2),f=d(c);ct(f,{size:18}),v(c);var p=_(c,2),g=d(p);pt(g,{size:18}),v(p),v(i),v(t),v(a),S(e,a)}var At=K('<section class="bg-sky-800 text-white text-center"><a href="/"><img alt="[]" class="w-48 mx-auto rounded-full shadow" src="./avatar.jpg"/></a> <div class="mt-6"><h1 class="font-bold text-3xl mb-4">Ronald Nababan</h1> <p>Freelance Programmer</p></div></section>');function Mt(e){var a=At();S(e,a)}var Et=K(`<section><div class="section-container mb-12"><h3 class="section-title">Projects</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><a href="https://www.hetanews.com" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://www.hetanews.com/favicon.ico" width="12px"/> Heta News</div> <!></div></a></div> <div class="card"><a href="https://fokus24.id" target="_blank"><div class="flex justify-between items-center gap-2"><div class="inline-flex items-center gap-1"><img alt="[]" src="https://fokus24.id/favicon.ico" width="12px"/> Fokus24</div> <!></div></a></div></div></div> <div class="section-container mb-12"><h3 class="section-title">Fun Projects</h3> <div class="mb-4"><a href="https://ace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ace</strong> &mdash; Easy bookmark manager</div> <!></div></a></div> <div class="mb-4"><a href="https://asikin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Asikin</strong> &mdash; YouTube trending videos</div> <!></div></a></div> <div class="mb-4"><a href="https://coverletter.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Cover Letter</strong> &mdash; Bikin <em>cover letter</em> lebih mudah</div> <!></div></a></div> <div class="mb-4"><a href="https://ende.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Ende</strong> &mdash; Kumpulan lirik lagu Batak</div> <!></div></a></div> <div class="mb-4"><a href="https://guritan.vercel.app/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Guritan</strong> &mdash; Penyunting <em>markdown</em> untuk Blogger</div> <!></div></a></div> <div class="mb-4"><a href="https://kecilin.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Kecilin</strong> &mdash; Ngecilin gambar-gambar yang
						berukuran besar</div> <!></div></a></div> <div class="mb-4"><a href="https://video.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Video</strong> &mdash; Social video sharing and bookmarking</div> <!></div></a></div></div> <div class="section-container"><h3 class="section-title">Demo Projects</h3> <div class="mb-4"><a href="https://demo.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Berita</strong> &mdash; <em>Content management system</em> untuk situs web berita</div> <!></div></a></div> <div class="mb-4"><a href="https://marketplace.sintaks.web.id/" target="_blank"><div class="flex justify-between gap-4"><div><strong>Marketplace</strong> &mdash; Multi-vendor online
						shop</div> <!></div></a></div></div></section>`);function St(e){var a=Et(),t=d(a),i=_(d(t),2),r=d(i),n=d(r),s=d(n),l=_(d(s),2);B(l,{size:14}),v(s),v(n),v(r);var c=_(r,2),f=d(c),p=d(f),g=_(d(p),2);B(g,{size:14}),v(p),v(f),v(c),v(i),v(t);var o=_(t,2),m=_(d(o),2),h=d(m),u=d(h),w=_(d(u),2);B(w,{size:14}),v(u),v(h),v(m);var x=_(m,2),T=d(x),k=d(T),$=_(d(k),2);B($,{size:14}),v(k),v(T),v(x);var P=_(x,2),b=d(P),y=d(b),N=_(d(y),2);B(N,{size:14}),v(y),v(b),v(P);var M=_(P,2),A=d(M),F=d(A),U=_(d(F),2);B(U,{size:14}),v(F),v(A),v(M);var Q=_(M,2),te=d(Q),ie=d(te),Ke=_(d(ie),2);B(Ke,{size:14}),v(ie),v(te),v(Q);var le=_(Q,2),pe=d(le),be=d(pe),Ge=_(d(be),2);B(Ge,{size:14}),v(be),v(pe),v(le);var me=_(le,2),$e=d(me),we=d($e),Je=_(d(we),2);B(Je,{size:14}),v(we),v($e),v(me),v(o);var ke=_(o,2),oe=_(d(ke),2),ye=d(oe),Ne=d(ye),Ze=_(d(Ne),2);B(Ze,{size:14}),v(Ne),v(ye),v(oe);var Ae=_(oe,2),Me=d(Ae),Ee=d(Me),Qe=_(d(Ee),2);B(Qe,{size:14}),v(Ee),v(Me),v(Ae),v(ke),v(a),S(e,a)}var Pt=K('<section class="bg-zinc-50"><div class="section-container"><h3 class="section-title">Technical Skills</h3> <div class="grid md:grid-cols-2 gap-4"><div class="card"><div class="card-title"><!> <span>Programming</span></div> <div class="card-content"><ul><li>PHP</li> <li>JavaScript</li> <li>Dart</li> <li>Python</li> <li>Java</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Frameworks</span></div> <div class="card-content"><ul><li>Laravel</li> <li>Svelte/SvelteKit</li> <li>Prisma</li> <li>ExpressJS</li> <li>Flutter</li> <li>TailwindCSS</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Databases</span></div> <div class="card-content"><ul><li>PostgreSQL</li> <li>MariaDB/MySQL</li> <li>sqlite</li></ul></div></div> <div class="card"><div class="card-title"><!> <span>Tools</span></div> <div class="card-content"><ul><li>Linux</li> <li>Docker</li> <li>Mail server</li> <li>nginx</li> <li>git</li> <li>Ollama AI</li></ul></div></div></div></div></section>');function Tt(e){var a=Pt(),t=d(a),i=_(d(t),2),r=d(i),n=d(r),s=d(n);ot(s,{size:16}),C(2),v(n),C(2),v(r);var l=_(r,2),c=d(l),f=d(c);vt(f,{size:16}),C(2),v(c),C(2),v(l);var p=_(l,2),g=d(p),o=d(g);dt(o,{size:16}),C(2),v(g),C(2),v(p);var m=_(p,2),h=d(m),u=d(h);bt(u,{size:16}),C(2),v(h),C(2),v(m),v(i),v(t),v(a),S(e,a)}var xt=K("<!> <!> <!> <!> <!> <!>",1);function jt(e){var a=xt(),t=z(a);Mt(t);var i=_(t,2);kt(i);var r=_(i,2);Tt(r);var n=_(r,2);St(n);var s=_(n,2);$t(s);var l=_(s,2);Nt(l),S(e,a)}export{jt as component};
