import{c as ce,a as A,n as he,t as D}from"../chunks/disclose-version.8MgLFfLm.js";import{i as Te}from"../chunks/legacy.BO9QQLVA.js";import{w as Y,O as He,n as De,B as Fe,T as Ae,a5 as qe,a6 as me,K as we,J as pe,x as oe,P as Ie,as as de,a7 as Ne,o as je,a8 as Oe,D as ye,at as Re,au as Be,S as Ve,av as Ge,v as Ke,C as Ue,ao as Ye,_ as ke,aw as Je,ax as Qe,ay as We,I as Xe,az as Ze,a4 as $e,aA as ea,p as Ce,aB as ue,aC as aa,i as le,j as Me,g as u,k as o,s as g,m as c,t as ie,aD as ge,a0 as V,e as se,ar as ne,aE as U,aF as ta}from"../chunks/runtime.Ded4-npS.js";import{s as ve,d as _e,a as sa}from"../chunks/render.DnanSJgx.js";import{p as z,i as J,b as ia,a as xe}from"../chunks/props.7smgzLRm.js";function ra(t,e){return e}function na(t,e,a,s){for(var i=[],l=e.length,n=0;n<l;n++)Be(e[n].e,i,!0);var _=l>0&&i.length===0&&a!==null;if(_){var d=a.parentNode;Ve(d),d.append(a),s.clear(),$(t,e[0].prev,e[l-1].next)}Ge(i,()=>{for(var v=0;v<l;v++){var b=e[v];_||(s.delete(b.k),$(t,b.prev,b.next)),Ke(b.e,!_)}})}function la(t,e,a,s,i,l=null){var n=t,_={flags:e,items:new Map,first:null};Y&&He();var d=null,v=!1;De(()=>{var b=a(),r=Fe(b)?b:b==null?[]:Ae(b),f=r.length;if(v&&f===0)return;v=f===0;let p=!1;if(Y){var x=n.data===qe;x!==(f===0)&&(n=me(),we(n),pe(!1),p=!0)}if(Y){for(var w=null,j,y=0;y<f;y++){if(oe.nodeType===8&&oe.data===Ie){n=oe,p=!0,pe(!1);break}var h=r[y],k=s(h,y);j=Ee(oe,_,w,null,h,k,y,i,e),_.items.set(k,j),w=j}f>0&&we(me())}if(!Y){var F=Ue;oa(r,_,n,i,e,(F.f&de)!==0,s)}l!==null&&(f===0?d?Ne(d):d=je(()=>l(n)):d!==null&&Oe(d,()=>{d=null})),p&&pe(!0),a()}),Y&&(n=oe)}function oa(t,e,a,s,i,l,n,_){var d=t.length,v=e.items,b=e.first,r=b,f,p=null,x=[],w=[],j,y,h,k;for(k=0;k<d;k+=1){if(j=t[k],y=n(j,k),h=v.get(y),h===void 0){var F=r?r.e.nodes_start:a;p=Ee(F,e,p,p===null?e.first:p.next,j,y,k,s,i),v.set(y,p),x=[],w=[],r=p.next;continue}if(ca(h,j,k),h.e.f&de&&Ne(h.e),h!==r){if(f!==void 0&&f.has(h)){if(x.length<w.length){var R=w[0],S;p=R.prev;var C=x[0],P=x[x.length-1];for(S=0;S<x.length;S+=1)ze(x[S],R,a);for(S=0;S<w.length;S+=1)f.delete(w[S]);$(e,C.prev,P.next),$(e,p,C),$(e,P,R),r=R,p=P,k-=1,x=[],w=[]}else f.delete(h),ze(h,r,a),$(e,h.prev,h.next),$(e,h,p===null?e.first:p.next),$(e,p,h),p=h;continue}for(x=[],w=[];r!==null&&r.k!==y;)(l||!(r.e.f&de))&&(f??(f=new Set)).add(r),w.push(r),r=r.next;if(r===null)continue;h=r}x.push(h),p=h,r=h.next}if(r!==null||f!==void 0){for(var H=f===void 0?[]:Ae(f);r!==null;)(l||!(r.e.f&de))&&H.push(r),r=r.next;var Q=H.length;if(Q>0){var M=null;na(e,H,M,v)}}ye.first=e.first&&e.first.e,ye.last=p&&p.e}function ca(t,e,a,s){Re(t.v,e),t.i=a}function Ee(t,e,a,s,i,l,n,_,d,v){var b=(d&Qe)!==0,r=(d&We)===0,f=b?r?Ye(i):ke(i):i,p=d&Je?ke(n):n,x={i:p,v:f,k:l,a:null,e:null,prev:a,next:s};try{return x.e=je(()=>_(t,f,p),Y),x.e.prev=a&&a.e,x.e.next=s&&s.e,a===null?e.first=x:(a.next=x,a.e.next=x.e),s!==null&&(s.prev=x,s.e.prev=x.e),x}finally{}}function ze(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,i=e?e.e.nodes_start:a,l=t.e.nodes_start;l!==s;){var n=Xe(l);i.before(l),l=n}}function $(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function N(t,e,a,s){var i=t.__attributes??(t.__attributes={});Y&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ze]=a),a==null?t.removeAttribute(e):typeof a!="string"&&da(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Se=new Map;function da(t){var e=Se.get(t.nodeName);if(e)return e;Se.set(t.nodeName,e=[]);for(var a,s=t,i=Element.prototype;i!==s;){a=ea(s);for(var l in a)a[l].set&&e.push(l);s=$e(s)}return e}function va(t,e){var a=t.__className,s=fa(e);Y&&t.getAttribute("class")===s?t.__className=s:(a!==s||Y&&t.getAttribute("class")!==s)&&(s===""?t.removeAttribute("class"):t.setAttribute("class",s),t.__className=s)}function fa(t){return t??""}function W(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Le(t,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?t.style.fontSize=e.replace("x","em"):t.style.fontSize=""}function pa(t,e,a,s,i,l=1,n="",_=""){let d=1,v=1;i&&(i=="horizontal"?d=-1:i=="vertical"?v=-1:d=v=-1),typeof t=="string"&&(t=parseFloat(t)),typeof e=="string"&&(e=parseFloat(e)),typeof a=="string"&&(a=parseFloat(a));const b=`${e*l}${n}`,r=`${a*l}${n}`;let f=`translate(${b},${r}) scale(${d*t},${v*t})`;return s&&(f+=` rotate(${s}${_})`),f}var ua=D('<title class="svelte-bvo74f"> </title>'),ga=he('<path class="svelte-bvo74f"></path>'),xa=he('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),ha=he('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function m(t,e){Ce(e,!1);const a=ge(),s=ge();let i=z(e,"class",24,()=>{}),l=z(e,"id",24,()=>{}),n=z(e,"style",24,()=>{}),_=z(e,"icon",8),d=z(e,"title",24,()=>{}),v=z(e,"size",24,()=>{}),b=z(e,"color",24,()=>{}),r=z(e,"fw",8,!1),f=z(e,"pull",24,()=>{}),p=z(e,"scale",8,1),x=z(e,"translateX",8,0),w=z(e,"translateY",8,0),j=z(e,"rotate",24,()=>{}),y=z(e,"flip",24,()=>{}),h=z(e,"spin",8,!1),k=z(e,"pulse",8,!1),F=z(e,"primaryColor",8,""),R=z(e,"secondaryColor",8,""),S=z(e,"primaryOpacity",8,1),C=z(e,"secondaryOpacity",8,.4),P=z(e,"swapOpacity",8,!1),H=ge();ue(()=>(u(H),se(v()),Le),()=>{u(H)&&v()&&Le(u(H),v())}),ue(()=>se(_()),()=>{V(a,_()&&_().icon||[0,0,"",[],""])}),ue(()=>(se(p()),se(x()),se(w()),se(j()),se(y())),()=>{V(s,pa(p(),x(),w(),j(),y(),512))}),aa(),Te();var Q=ce(),M=le(Q);{var B=ee=>{var L=ha(),q=o(L);{var G=T=>{var E=ua(),O=o(E,!0);c(E),ie(()=>ve(O,d())),A(T,E)};J(q,T=>{d()&&T(G)})}var I=g(q),ae=o(I),K=o(ae);{var te=T=>{var E=ga();ie(()=>{N(E,"d",u(a)[4]),N(E,"fill",b()||F()||"currentColor"),N(E,"transform",`translate(${u(a)[0]/-2} ${u(a)[1]/-2})`)}),A(T,E)},fe=T=>{var E=xa(),O=le(E),re=g(O);ie(()=>{N(O,"d",u(a)[4][0]),N(O,"fill",R()||b()||"currentColor"),N(O,"fill-opacity",P()!=!1?S():C()),N(O,"transform",`translate(${u(a)[0]/-2} ${u(a)[1]/-2})`),N(re,"d",u(a)[4][1]),N(re,"fill",F()||b()||"currentColor"),N(re,"fill-opacity",P()!=!1?C():S()),N(re,"transform",`translate(${u(a)[0]/-2} ${u(a)[1]/-2})`)}),A(T,E)};J(K,T=>{typeof u(a)[4]=="string"?T(te):T(fe,!1)})}c(ae),c(I),c(L),ia(L,T=>V(H,T),()=>u(H)),ie(()=>{N(L,"id",l()),va(L,`svelte-fa svelte-fa-base ${i()??""} svelte-bvo74f`),N(L,"style",n()),N(L,"viewBox",`0 0 ${u(a)[0]??""} ${u(a)[1]??""}`),W(L,"pulse",k()),W(L,"svelte-fa-size-lg",v()==="lg"),W(L,"svelte-fa-size-sm",v()==="sm"),W(L,"svelte-fa-size-xs",v()==="xs"),W(L,"svelte-fa-fw",r()),W(L,"svelte-fa-pull-left",f()==="left"),W(L,"svelte-fa-pull-right",f()==="right"),W(L,"spin",h()),N(I,"transform",`translate(${u(a)[0]/2} ${u(a)[1]/2})`),N(I,"transform-origin",`${u(a)[0]/4} 0`),N(ae,"transform",u(s))}),A(ee,L)};J(M,ee=>{u(a)[4]&&ee(B)})}A(t,Q),Me()}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _a={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},X={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},be={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Z={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},ba={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};var ma=(t,e)=>V(e,!u(e)),wa=(t,e)=>e("https://sada.web.id/demo"),ya=(t,e)=>e("https://www.barakconsultant.com/"),ka=(t,e)=>e("https://sada.web.id/sada"),za=(t,e)=>e("https://gokkon.sintaks.web.id/"),Sa=(t,e)=>e("https://sada.web.id/jajanhita"),La=(t,e)=>e("https://sada.web.id/ayatacak"),Aa=(t,e)=>e("https://sada.web.id/guritan"),Na=(t,e)=>e("https://sada.web.id/sintaks"),ja=D(`<div><div class="grid grid-cols-2 gap-4 mb-6 text-black"><div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://www.hetanews.com/"><div class="flex justify-center items-center h-32 bg-amber-100 rounded-t-md"><img src="./hetanews.png" alt="Heta News" class="w-16"></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://www.hetanews.com/">Heta News</a></h2> <div class="text-sm mb-2">Media online Sumatera Utara</div> <div class="inline-flex flex-wrap gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://play.google.com/store/apps/details?id=com.hetanews"><div class="flex justify-center items-center h-32 bg-cyan-100 rounded-t-md"><img src="./hetanews.png" alt="Heta News" class="w-16"></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://play.google.com/store/apps/details?id=com.hetanews">Heta News (Android)</a></h2> <div class="text-sm mb-2">Media online Sumatera Utara</div> <div class="inline-flex flex-wrap gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Flutter</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://fokus24.id/"><div class="flex justify-center items-center h-32 bg-red-100 rounded-t-md"><img src="./fokus24.png" alt="Heta News" class="w-16"></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://fokus24.id/">Fokus24.id</a></h2> <div class="text-sm mb-2">Tepercaya dan Akurat</div> <div class="inline-flex flex-wrap gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/"><div class="flex justify-center items-center h-32 bg-gray-300 rounded-t-md"><img src="./popup.png" alt="Heta News" class="w-12"></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/">Popup This Video</a></h2> <div class="text-sm mb-2">Ekstensi peramban web untuk menampilkan video <em>pop-up</em>.</div> <div class="inline-flex flex-wrap gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">JavaScript</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Firefox</div></div></div></div></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg text-yellow-200"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://sada.web.id/demo" class="font-bold">Demo</a> <div class="text-yellow-400"><p class="text-sm">Coba ini dulu!</p> <p class="text-xs text-gray-500">Laravel, Livewire, FilamentPHP, sqlite</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://www.barakconsultant.com/" class="font-bold">Barak Consultant Services</a> <div class="text-gray-400"><p class="text-sm">Sebuah perusahaan yang bergerak di bidang teknologi dan
								informasi</p> <p class="text-xs text-gray-500">PHP</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://sada.web.id/sada" class="font-bold">Sada</a> <div class="text-gray-400"><p class="text-sm">Pemendek tautan sederhana</p> <p class="text-xs text-gray-500">Laravel, Svelte 5, FilamentPHP, sqlite</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://gokkon.sintaks.web.id/" class="font-bold">Gokkon</a> <div class="text-gray-400"><p class="text-sm">Undangan pernikahan gratis</p> <p class="text-xs text-gray-500">Laravel, FilamentPHP, sqlite</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://jajanhita.com/" class="font-bold">Jaja Hita</a> <div class="text-gray-400"><p class="text-sm">Toko oleh-oleh khas Siantar.</p> <p class="text-xs text-gray-500">Laravel, FilamentPHP, PostgreSQL</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://sada.web.id/ayatacak" class="font-bold">Ayat Acak Alkitab</a> <div class="text-gray-400"><p class="text-sm">Ayat emas Alkitab secara acak</p> <p class="text-xs text-gray-500">SvelteKit, Vercel</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://sada.web.id/guritan" class="font-bold">Guritan</a> <div class="text-gray-400"><p class="text-sm">Penyunting <em>markdown</em> untuk Blogger</p> <p class="text-xs text-gray-500">SvelteKit, Google Blogger API, Vercel</p></div></div></div> <!></div>  <div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"><div class="flex justify-start items-center gap-3"><!> <div><a href="https://sada.web.id/sintaks" class="font-bold">Blog</a> <div class="text-gray-400"><p class="text-sm">Situs web pribadi</p> <p class="text-xs text-gray-500">SvelteKit, Prisma, PostgreSQL</p></div></div></div> <!></div></div>`),Ca=D('<section class="flex flex-col gap-4"><div class="flex flex-col gap-4"><button class="flex justify-center items-center gap-2 font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"><span>Portfolio</span> <!></button></div> <!></section>');function Ma(t){let e=ne(!1);function a(v){window.location.href=v}var s=Ca(),i=o(s),l=o(i);l.__click=[ma,e];var n=g(o(l),2);m(n,{icon:be}),c(l),c(i);var _=g(i,2);{var d=v=>{var b=ja(),r=g(o(b),2);r.__click=[wa,a];var f=o(r),p=o(f);m(p,{icon:X}),U(2),c(f);var x=g(f,2);m(x,{icon:Z}),c(r);var w=g(r,2);w.__click=[ya,a];var j=o(w),y=o(j);m(y,{icon:X}),U(2),c(j);var h=g(j,2);m(h,{icon:Z}),c(w);var k=g(w,2);k.__click=[ka,a];var F=o(k),R=o(F);m(R,{icon:X}),U(2),c(F);var S=g(F,2);m(S,{icon:Z}),c(k);var C=g(k,2);C.__click=[za,a];var P=o(C),H=o(P);m(H,{icon:X}),U(2),c(P);var Q=g(P,2);m(Q,{icon:Z}),c(C);var M=g(C,2);M.__click=[Sa,a];var B=o(M),ee=o(B);m(ee,{icon:X}),U(2),c(B);var L=g(B,2);m(L,{icon:Z}),c(M);var q=g(M,2);q.__click=[La,a];var G=o(q),I=o(G);m(I,{icon:X}),U(2),c(G);var ae=g(G,2);m(ae,{icon:Z}),c(q);var K=g(q,2);K.__click=[Aa,a];var te=o(K),fe=o(te);m(fe,{icon:X}),U(2),c(te);var T=g(te,2);m(T,{icon:Z}),c(K);var E=g(K,2);E.__click=[Na,a];var O=o(E),re=o(O);m(re,{icon:X}),U(2),c(O);var Pe=g(O,2);m(Pe,{icon:Z}),c(E),c(b),A(v,b)};J(_,v=>{u(e)&&v(d)})}c(s),A(t,s)}_e(["click"]);var Ea=(t,e)=>V(e,!u(e)),Pa=D('<div class="flex justify-center flex-wrap gap-4 text-sm"><div class="bg-white rounded-full px-3">android</div> <div class="bg-white rounded-full px-3">bootstrap css</div> <div class="bg-white rounded-full px-3">database</div> <div class="bg-white rounded-full px-3">docker</div> <div class="bg-white rounded-full px-3">express</div> <div class="bg-white rounded-full px-3">flutter</div> <div class="bg-white rounded-full px-3">java</div> <div class="bg-white rounded-full px-3">javascript</div> <div class="bg-white rounded-full px-3">laravel</div> <div class="bg-white rounded-full px-3">livewire</div> <div class="bg-white rounded-full px-3">linux</div> <div class="bg-white rounded-full px-3">mysql</div> <div class="bg-white rounded-full px-3">prisma</div> <div class="bg-white rounded-full px-3">php</div> <div class="bg-white rounded-full px-3">postgresql</div> <div class="bg-white rounded-full px-3">python</div> <div class="bg-white rounded-full px-3">sqlite</div> <div class="bg-white rounded-full px-3">sveltekit</div> <div class="bg-white rounded-full px-3">tailwind css</div> <div class="bg-white rounded-full px-3">typescript</div></div>'),Ta=D('<section class="flex flex-col gap-4 text-zinc-800 mt-3"><button class="flex justify-center items-center gap-2 cursor-pointer font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"><span>Skills</span> <!></button> <!></section>');function Ha(t){let e=ne(!1);var a=Ta(),s=o(a);s.__click=[Ea,e];var i=g(o(s),2);m(i,{icon:be}),c(s);var l=g(s,2);{var n=_=>{var d=Pa();A(_,d)};J(l,_=>{u(e)&&_(n)})}c(a),A(t,a)}_e(["click"]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Da={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Fa={prefix:"fab",iconName:"blogger",icon:[448,512,[],"f37c","M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"]},qa={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ia={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};var Oa=D('<section class="flex justify-center gap-5 text-lg mt-6"><a href="mailto:ronsen@startrek.or.id" class="hover:text-zinc-50"><!></a> <a href="https://i-temp.blogspot.com/" class="text-amber-600 hover:text-amber-400"><!></a> <a href="https://github.com/ronsen" class="hover:text-zinc-50"><!></a> <a href="https://www.linkedin.com/in/ronaldnababan" class="hover:text-zinc-50"><!></a> <a href="https://x.com/rnldnbbn" class="hover:text-zinc-50"><!></a></section>');function Ra(t){var e=Oa(),a=o(e),s=o(a);m(s,{icon:_a}),c(a);var i=g(a,2),l=o(i);m(l,{icon:Fa}),c(i);var n=g(i,2),_=o(n);m(_,{icon:qa}),c(n);var d=g(n,2),v=o(d);m(v,{icon:Da}),c(d);var b=g(d,2),r=o(b);m(r,{icon:Ia}),c(b),c(e),A(t,e)}async function Ba(t,e,a,s,i,l){try{V(e,!u(e));const n=await fetch(a);if(!n.ok)throw new Error(`Failed to fetch RSS feed: ${n.statusText}`);const _=await n.text(),v=new DOMParser().parseFromString(_,"application/xml");if(v.querySelector("parsererror"))throw new Error("Error parsing RSS feed XML.");const b=v.querySelectorAll("item");V(s,xe(Array.from(b).map(r=>{var f,p,x,w;return{title:(f=r.querySelector("title"))==null?void 0:f.textContent,link:(p=r.querySelector("link"))==null?void 0:p.textContent,description:(x=r.querySelector("description"))==null?void 0:x.textContent,pubDate:(w=r.querySelector("pubDate"))==null?void 0:w.textContent}})))}catch(n){n instanceof Error?V(i,xe(n.message)):V(i,xe(n))}finally{V(l,!1)}}var Va=D('<div class="flex justify-start items-center gap-2 text-white/90"><!> <div>Fetching...</div></div>'),Ga=D('<p class="text-white/90"><strong>Error:</strong> </p>'),Ka=D('<p class="text-white/90">No feed items found.</p>'),Ua=D('<div class="flex justify-between gap-4 items-center border-b border-zinc-700 mb-2 pb-2"><a target="_blank" class="text-white/80 hover:text-white/90 block w-full"> </a> <div class="text-white/60 text-xs"> </div></div>'),Ya=D("<div><!></div>"),Ja=D('<section class="flex flex-col gap-4 text-zinc-800 mt-3"><button class="flex justify-center items-center gap-2 cursor-pointer font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"><span>Writings</span> <!></button> <!></section>');function Qa(t,e){Ce(e,!0);let a=ne(!1);const s="https://sintaks.web.id/feed";let i=ne(void 0),l=ne(!0),n=ne(void 0);var _=Ja(),d=o(_);d.__click=[Ba,a,s,i,n,l];var v=g(o(d),2);m(v,{icon:be}),c(d);var b=g(d,2);{var r=f=>{var p=Ya(),x=o(p);{var w=y=>{var h=Va(),k=o(h);m(k,{icon:ba,spin:!0}),U(2),c(h),A(y,h)},j=y=>{var h=ce(),k=le(h);{var F=S=>{var C=Ga(),P=g(o(C));c(C),ie(()=>ve(P,` ${u(n)??""}`)),A(S,C)},R=S=>{var C=ce(),P=le(C);{var H=M=>{var B=Ka();A(M,B)},Q=M=>{var B=ce(),ee=le(B);la(ee,17,()=>u(i),ra,(L,q)=>{var G=Ua(),I=o(G),ae=o(I,!0);c(I);var K=g(I,2),te=o(K,!0);ie(()=>ve(te,new Date(u(q).pubDate).toLocaleDateString())),c(K),c(G),ie(()=>{N(I,"href",u(q).link),ve(ae,u(q).title)}),A(L,G)}),A(M,B)};J(P,M=>{u(i).length===0?M(H):M(Q,!1)},!0)}A(S,C)};J(k,S=>{u(n)?S(F):S(R,!1)},!0)}A(y,h)};J(x,y=>{u(l)?y(w):y(j,!1)})}c(p),A(f,p)};J(b,f=>{u(a)&&f(r)})}c(_),A(t,_),Me()}_e(["click"]);var Wa=D(`<a href="/"><img src="./avatar.jpg" alt="[]" class="w-48 mx-auto mb-3 rounded-full shadow-lg"></a> <section class="text-center"><h1 class="title text-4xl font-semibold mb-3 text-zinc-100"><a href="/">Ronald Nababan</a></h1> <div class="mb-6">Saya seorang programmer lepas yang memiliki pengalaman luas dalam
		pembuatan perangkat lunak, situs web, dan aplikasi mobile. Selain itu,
		saya juga memiliki minat besar pada teknologi, fotografi, dan
		videografi.</div> <div class="flex justify-center mb-6"><a href="https://wa.me/6281319479396" class="w-full text-xl font-bold border border-green-600 hover:border-green-700 rounded-full p-4 text-center bg-green-600 hover:bg-green-700 text-zinc-100 hover:text-zinc-50 transition ease-out duration-300">Ngobrol Dulu, Yuk!</a></div></section> <!> <!> <!> <!>`,1);function tt(t){var e=Wa();sa(n=>{ta.title="Ronald Nababan"});var a=g(le(e),4);Ma(a);var s=g(a,2);Ha(s);var i=g(s,2);Qa(i,{});var l=g(i,2);Ra(l),A(t,e)}export{tt as component};
