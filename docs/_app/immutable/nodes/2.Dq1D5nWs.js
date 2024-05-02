import{s as ve,n as ue,e as Ge,r as Xe}from"../chunks/scheduler.CtbWrGNo.js";import{S as ge,i as me,n as qe,g as A,d as m,y as ce,z as de,a as C,k as r,A as N,h as d,e as w,s as z,u as V,c as x,B as q,f as k,v as E,w as I,C as W,D as Re,l as H,q as Ye,m as j,o as Je,x as D,E as Qe}from"../chunks/index.BFBjMXEI.js";function We(l,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?l.style.fontSize=e.replace("x","em"):l.style.fontSize=""}function Ze(l,e,t,i,c,f=1,o="",b=""){let g=1,v=1;c&&(c=="horizontal"?g=-1:c=="vertical"?v=-1:g=v=-1),typeof l=="string"&&(l=parseFloat(l)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const h=`${e*f}${o}`,a=`${t*f}${o}`;let s=`translate(${h},${a}) scale(${g*l},${v*l})`;return i&&(s+=` rotate(${i}${b})`),s}function Be(l){let e,t,i,c,f,o,b;function g(a,s){return typeof a[16][4]=="string"?tt:et}let v=g(l),h=v(l);return{c(){e=ce("svg"),t=ce("g"),i=ce("g"),h.c(),this.h()},l(a){e=de(a,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var s=C(e);t=de(s,"g",{transform:!0,"transform-origin":!0});var p=C(t);i=de(p,"g",{transform:!0});var n=C(i);h.l(n),n.forEach(m),p.forEach(m),s.forEach(m),this.h()},h(){r(i,"transform",l[15]),r(t,"transform",c="translate("+l[16][0]/2+" "+l[16][1]/2+")"),r(t,"transform-origin",f=l[16][0]/4+" 0"),r(e,"id",l[1]),r(e,"class",o="svelte-fa svelte-fa-base "+l[0]+" svelte-bvo74f"),r(e,"style",l[2]),r(e,"viewBox",b="0 0 "+l[16][0]+" "+l[16][1]),r(e,"aria-hidden","true"),r(e,"role","img"),r(e,"xmlns","http://www.w3.org/2000/svg"),N(e,"pulse",l[8]),N(e,"svelte-fa-size-lg",l[3]==="lg"),N(e,"svelte-fa-size-sm",l[3]==="sm"),N(e,"svelte-fa-size-xs",l[3]==="xs"),N(e,"svelte-fa-fw",l[5]),N(e,"svelte-fa-pull-left",l[6]==="left"),N(e,"svelte-fa-pull-right",l[6]==="right"),N(e,"spin",l[7])},m(a,s){A(a,e,s),d(e,t),d(t,i),h.m(i,null),l[23](e)},p(a,s){v===(v=g(a))&&h?h.p(a,s):(h.d(1),h=v(a),h&&(h.c(),h.m(i,null))),s&32768&&r(i,"transform",a[15]),s&65536&&c!==(c="translate("+a[16][0]/2+" "+a[16][1]/2+")")&&r(t,"transform",c),s&65536&&f!==(f=a[16][0]/4+" 0")&&r(t,"transform-origin",f),s&2&&r(e,"id",a[1]),s&1&&o!==(o="svelte-fa svelte-fa-base "+a[0]+" svelte-bvo74f")&&r(e,"class",o),s&4&&r(e,"style",a[2]),s&65536&&b!==(b="0 0 "+a[16][0]+" "+a[16][1])&&r(e,"viewBox",b),s&257&&N(e,"pulse",a[8]),s&9&&N(e,"svelte-fa-size-lg",a[3]==="lg"),s&9&&N(e,"svelte-fa-size-sm",a[3]==="sm"),s&9&&N(e,"svelte-fa-size-xs",a[3]==="xs"),s&33&&N(e,"svelte-fa-fw",a[5]),s&65&&N(e,"svelte-fa-pull-left",a[6]==="left"),s&65&&N(e,"svelte-fa-pull-right",a[6]==="right"),s&129&&N(e,"spin",a[7])},d(a){a&&m(e),h.d(),l[23](null)}}}function et(l){let e,t,i,c,f,o,b,g,v,h;return{c(){e=ce("path"),o=ce("path"),this.h()},l(a){e=de(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(e).forEach(m),o=de(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(o).forEach(m),this.h()},h(){r(e,"d",t=l[16][4][0]),r(e,"fill",i=l[10]||l[4]||"currentColor"),r(e,"fill-opacity",c=l[13]!=!1?l[11]:l[12]),r(e,"transform",f="translate("+l[16][0]/-2+" "+l[16][1]/-2+")"),r(o,"d",b=l[16][4][1]),r(o,"fill",g=l[9]||l[4]||"currentColor"),r(o,"fill-opacity",v=l[13]!=!1?l[12]:l[11]),r(o,"transform",h="translate("+l[16][0]/-2+" "+l[16][1]/-2+")")},m(a,s){A(a,e,s),A(a,o,s)},p(a,s){s&65536&&t!==(t=a[16][4][0])&&r(e,"d",t),s&1040&&i!==(i=a[10]||a[4]||"currentColor")&&r(e,"fill",i),s&14336&&c!==(c=a[13]!=!1?a[11]:a[12])&&r(e,"fill-opacity",c),s&65536&&f!==(f="translate("+a[16][0]/-2+" "+a[16][1]/-2+")")&&r(e,"transform",f),s&65536&&b!==(b=a[16][4][1])&&r(o,"d",b),s&528&&g!==(g=a[9]||a[4]||"currentColor")&&r(o,"fill",g),s&14336&&v!==(v=a[13]!=!1?a[12]:a[11])&&r(o,"fill-opacity",v),s&65536&&h!==(h="translate("+a[16][0]/-2+" "+a[16][1]/-2+")")&&r(o,"transform",h)},d(a){a&&(m(e),m(o))}}}function tt(l){let e,t,i,c;return{c(){e=ce("path"),this.h()},l(f){e=de(f,"path",{d:!0,fill:!0,transform:!0}),C(e).forEach(m),this.h()},h(){r(e,"d",t=l[16][4]),r(e,"fill",i=l[4]||l[9]||"currentColor"),r(e,"transform",c="translate("+l[16][0]/-2+" "+l[16][1]/-2+")")},m(f,o){A(f,e,o)},p(f,o){o&65536&&t!==(t=f[16][4])&&r(e,"d",t),o&528&&i!==(i=f[4]||f[9]||"currentColor")&&r(e,"fill",i),o&65536&&c!==(c="translate("+f[16][0]/-2+" "+f[16][1]/-2+")")&&r(e,"transform",c)},d(f){f&&m(e)}}}function at(l){let e,t=l[16][4]&&Be(l);return{c(){t&&t.c(),e=qe()},l(i){t&&t.l(i),e=qe()},m(i,c){t&&t.m(i,c),A(i,e,c)},p(i,[c]){i[16][4]?t?t.p(i,c):(t=Be(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ue,o:ue,d(i){i&&m(e),t&&t.d(i)}}}function st(l,e,t){let i,c,{class:f=void 0}=e,{id:o=void 0}=e,{style:b=void 0}=e,{icon:g}=e,{size:v=void 0}=e,{color:h=void 0}=e,{fw:a=!1}=e,{pull:s=void 0}=e,{scale:p=1}=e,{translateX:n=0}=e,{translateY:_=0}=e,{rotate:T=void 0}=e,{flip:y=void 0}=e,{spin:M=!1}=e,{pulse:P=!1}=e,{primaryColor:K=""}=e,{secondaryColor:O=""}=e,{primaryOpacity:Y=1}=e,{secondaryOpacity:R=.4}=e,{swapOpacity:F=!1}=e,U;function B(u){Ge[u?"unshift":"push"](()=>{U=u,t(14,U)})}return l.$$set=u=>{"class"in u&&t(0,f=u.class),"id"in u&&t(1,o=u.id),"style"in u&&t(2,b=u.style),"icon"in u&&t(17,g=u.icon),"size"in u&&t(3,v=u.size),"color"in u&&t(4,h=u.color),"fw"in u&&t(5,a=u.fw),"pull"in u&&t(6,s=u.pull),"scale"in u&&t(18,p=u.scale),"translateX"in u&&t(19,n=u.translateX),"translateY"in u&&t(20,_=u.translateY),"rotate"in u&&t(21,T=u.rotate),"flip"in u&&t(22,y=u.flip),"spin"in u&&t(7,M=u.spin),"pulse"in u&&t(8,P=u.pulse),"primaryColor"in u&&t(9,K=u.primaryColor),"secondaryColor"in u&&t(10,O=u.secondaryColor),"primaryOpacity"in u&&t(11,Y=u.primaryOpacity),"secondaryOpacity"in u&&t(12,R=u.secondaryOpacity),"swapOpacity"in u&&t(13,F=u.swapOpacity)},l.$$.update=()=>{l.$$.dirty&16392&&U&&v&&We(U,v),l.$$.dirty&131072&&t(16,i=g&&g.icon||[0,0,"",[],""]),l.$$.dirty&8126464&&t(15,c=Ze(p,n,_,T,y,512))},[f,o,b,v,h,a,s,M,P,K,O,Y,R,F,U,c,i,g,p,n,_,T,y,B]}class $ extends ge{constructor(e){super(),me(this,e,st,at,ve,{class:0,id:1,style:2,icon:17,size:3,color:4,fw:5,pull:6,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:7,pulse:8,primaryColor:9,secondaryColor:10,primaryOpacity:11,secondaryOpacity:12,swapOpacity:13})}}var lt={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Me={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Ue={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},fe={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function Fe(l){let e,t,i='<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md "><a href="https://www.hetanews.com/"><div class="flex justify-center items-center h-32 bg-amber-100 rounded-t-md"><img src="./hetanews.png" alt="Heta News" class="w-16"/></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://www.hetanews.com/">Heta News</a></h2> <div class="text-sm mb-2">Media online Sumatera Utara</div> <div class="inline-flex gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://play.google.com/store/apps/details?id=com.hetanews"><div class="flex justify-center items-center h-32 bg-cyan-100 rounded-t-md"><img src="./hetanews.png" alt="Heta News" class="w-16"/></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://play.google.com/store/apps/details?id=com.hetanews">Heta News (Android)</a></h2> <div class="text-sm mb-2">Media online Sumatera Utara</div> <div class="inline-flex gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Flutter</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://fokus24.id/"><div class="flex justify-center items-center h-32 bg-red-100 rounded-t-md"><img src="./fokus24.png" alt="Heta News" class="w-16"/></div></a> <div class="p-4 h-auto"><h2 class="font-bold"><a href="https://fokus24.id/">Fokus24.id</a></h2> <div class="text-sm mb-2">Tepercaya dan Akurat</div> <div class="inline-flex gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div></div></div></div> <div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md"><a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/"><div class="flex justify-center items-center h-32 bg-gray-300 rounded-t-md"><img src="./popup.png" alt="Heta News" class="w-12"/></div></a> <div class="p-4"><h2 class="font-bold"><a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/">Popup This Video</a></h2> <div class="text-sm mb-2">A browser extension that displays popups on videos</div> <div class="inline-flex gap-3"><div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">JavaScript</div> <div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Firefox</div></div></div></div>',c,f,o,b='<img src="./kasir.png" alt="Kasir" class="w-16 h-16 object-cover rounded-lg"/> <div><a href="https://sada.web.id/" class="font-bold">Kasir</a> <div class="text-gray-400"><p class="text-sm">Aplikasi Kasir (Point-of-Sale) terbaik dan termurah</p> <p class="text-xs text-gray-600">Laravel, Livewire, FilamentPHP, PostgreSQL</p></div></div>',g,v,h,a,s,p='<img src="./ayatacak.jpg" alt="Ayat Acak Alkitab" class="w-16 h-16 object-cover rounded-lg"/> <div><a href="https://ayatacak.vercel.app/" class="font-bold">Ayat Acak Alkitab</a> <div class="text-gray-400"><p class="text-sm">Ayat emas Alkitab secara acak</p> <p class="text-xs text-gray-600">SvelteKit, Vercel</p></div></div>',n,_,T,y,M,P,K,O,Y='<a href="https://www.barakconsultant.com/" class="font-bold">Barak Consultant Services</a> <div class="text-gray-400"><p class="text-sm">A company operating in the technology and information sector</p> <p class="text-xs text-gray-600">PHP</p></div>',R,F,U,B,u,Z,He,ie,Se='<a href="https://hotel.arsak.web.id/" class="font-bold">Hotel</a> <div class="text-gray-400"><p class="text-sm">Sistem Informasi Hotel (Demo)</p> <p class="text-xs text-gray-600">Laravel, FilamentPHP, sqlite</p></div>',je,ee,Ve,G,J,te,Ee,re,Ne='<a href="https://rental.arsak.web.id/" class="font-bold">Rental</a> <div class="text-gray-400"><p class="text-sm">Sistem Rental Kendaraan Bermotor (Demo)</p> <p class="text-xs text-gray-600">Laravel, FilamentPHP, sqlite</p></div>',Ie,ae,De,X,Q,se,Te,ne,Pe='<a href="https://s.id/guritan" class="font-bold">Guritan</a> <div class="text-gray-400"><p class="text-sm">Markdown editor for Blogger</p> <p class="text-xs text-gray-600">SvelteKit, Google Blogger API, Vercel</p></div>',$e,le,he,Ae,Oe;return v=new $({props:{icon:fe}}),_=new $({props:{icon:fe}}),P=new $({props:{icon:Me}}),F=new $({props:{icon:fe}}),Z=new $({props:{icon:Me}}),ee=new $({props:{icon:fe}}),te=new $({props:{icon:Me}}),ae=new $({props:{icon:fe}}),se=new $({props:{icon:Me}}),le=new $({props:{icon:fe}}),{c(){e=w("div"),t=w("div"),t.innerHTML=i,c=z(),f=w("div"),o=w("div"),o.innerHTML=b,g=z(),V(v.$$.fragment),h=z(),a=w("div"),s=w("div"),s.innerHTML=p,n=z(),V(_.$$.fragment),T=z(),y=w("div"),M=w("div"),V(P.$$.fragment),K=z(),O=w("div"),O.innerHTML=Y,R=z(),V(F.$$.fragment),U=z(),B=w("div"),u=w("div"),V(Z.$$.fragment),He=z(),ie=w("div"),ie.innerHTML=Se,je=z(),V(ee.$$.fragment),Ve=z(),G=w("div"),J=w("div"),V(te.$$.fragment),Ee=z(),re=w("div"),re.innerHTML=Ne,Ie=z(),V(ae.$$.fragment),De=z(),X=w("div"),Q=w("div"),V(se.$$.fragment),Te=z(),ne=w("div"),ne.innerHTML=Pe,$e=z(),V(le.$$.fragment),this.h()},l(L){e=x(L,"DIV",{});var S=C(e);t=x(S,"DIV",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-v7vbl2"&&(t.innerHTML=i),c=k(S),f=x(S,"DIV",{class:!0});var pe=C(f);o=x(pe,"DIV",{class:!0,"data-svelte-h":!0}),q(o)!=="svelte-igmzlc"&&(o.innerHTML=b),g=k(pe),E(v.$$.fragment,pe),pe.forEach(m),h=k(S),a=x(S,"DIV",{class:!0});var be=C(a);s=x(be,"DIV",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-xv3aru"&&(s.innerHTML=p),n=k(be),E(_.$$.fragment,be),be.forEach(m),T=k(S),y=x(S,"DIV",{class:!0});var _e=C(y);M=x(_e,"DIV",{class:!0});var we=C(M);E(P.$$.fragment,we),K=k(we),O=x(we,"DIV",{"data-svelte-h":!0}),q(O)!=="svelte-1gl08q7"&&(O.innerHTML=Y),we.forEach(m),R=k(_e),E(F.$$.fragment,_e),_e.forEach(m),U=k(S),B=x(S,"DIV",{class:!0});var xe=C(B);u=x(xe,"DIV",{class:!0});var ye=C(u);E(Z.$$.fragment,ye),He=k(ye),ie=x(ye,"DIV",{"data-svelte-h":!0}),q(ie)!=="svelte-rjfke4"&&(ie.innerHTML=Se),ye.forEach(m),je=k(xe),E(ee.$$.fragment,xe),xe.forEach(m),Ve=k(S),G=x(S,"DIV",{class:!0});var ze=C(G);J=x(ze,"DIV",{class:!0});var ke=C(J);E(te.$$.fragment,ke),Ee=k(ke),re=x(ke,"DIV",{"data-svelte-h":!0}),q(re)!=="svelte-1czdcz9"&&(re.innerHTML=Ne),ke.forEach(m),Ie=k(ze),E(ae.$$.fragment,ze),ze.forEach(m),De=k(S),X=x(S,"DIV",{class:!0});var Ce=C(X);Q=x(Ce,"DIV",{class:!0});var Le=C(Q);E(se.$$.fragment,Le),Te=k(Le),ne=x(Le,"DIV",{"data-svelte-h":!0}),q(ne)!=="svelte-14geroj"&&(ne.innerHTML=Pe),Le.forEach(m),$e=k(Ce),E(le.$$.fragment,Ce),Ce.forEach(m),S.forEach(m),this.h()},h(){r(t,"class","grid grid-cols-2 gap-4 mb-6 text-black"),r(o,"class","flex justify-start items-center gap-3"),r(f,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"),r(s,"class","flex justify-start items-center gap-3"),r(a,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"),r(M,"class","flex justify-start items-center gap-3"),r(y,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"),r(u,"class","flex justify-start items-center gap-3"),r(B,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"),r(J,"class","flex justify-start items-center gap-3"),r(G,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"),r(Q,"class","flex justify-start items-center gap-3"),r(X,"class","flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer")},m(L,S){A(L,e,S),d(e,t),d(e,c),d(e,f),d(f,o),d(f,g),I(v,f,null),d(e,h),d(e,a),d(a,s),d(a,n),I(_,a,null),d(e,T),d(e,y),d(y,M),I(P,M,null),d(M,K),d(M,O),d(y,R),I(F,y,null),d(e,U),d(e,B),d(B,u),I(Z,u,null),d(u,He),d(u,ie),d(B,je),I(ee,B,null),d(e,Ve),d(e,G),d(G,J),I(te,J,null),d(J,Ee),d(J,re),d(G,Ie),I(ae,G,null),d(e,De),d(e,X),d(X,Q),I(se,Q,null),d(Q,Te),d(Q,ne),d(X,$e),I(le,X,null),he=!0,Ae||(Oe=[W(f,"click",l[2]),W(a,"click",l[3]),W(y,"click",l[4]),W(B,"click",l[5]),W(G,"click",l[6]),W(X,"click",l[7])],Ae=!0)},p:ue,i(L){he||(H(v.$$.fragment,L),H(_.$$.fragment,L),H(P.$$.fragment,L),H(F.$$.fragment,L),H(Z.$$.fragment,L),H(ee.$$.fragment,L),H(te.$$.fragment,L),H(ae.$$.fragment,L),H(se.$$.fragment,L),H(le.$$.fragment,L),he=!0)},o(L){j(v.$$.fragment,L),j(_.$$.fragment,L),j(P.$$.fragment,L),j(F.$$.fragment,L),j(Z.$$.fragment,L),j(ee.$$.fragment,L),j(te.$$.fragment,L),j(ae.$$.fragment,L),j(se.$$.fragment,L),j(le.$$.fragment,L),he=!1},d(L){L&&m(e),D(v),D(_),D(P),D(F),D(Z),D(ee),D(te),D(ae),D(se),D(le),Ae=!1,Xe(Oe)}}}function it(l){let e,t,i,c,f="Portfolios",o,b,g,v,h,a;b=new $({props:{icon:Ue}});let s=l[0]&&Fe(l);return{c(){e=w("div"),t=w("div"),i=w("button"),c=w("span"),c.textContent=f,o=z(),V(b.$$.fragment),g=z(),s&&s.c(),this.h()},l(p){e=x(p,"DIV",{class:!0});var n=C(e);t=x(n,"DIV",{class:!0});var _=C(t);i=x(_,"BUTTON",{class:!0});var T=C(i);c=x(T,"SPAN",{"data-svelte-h":!0}),q(c)!=="svelte-17jdw8n"&&(c.textContent=f),o=k(T),E(b.$$.fragment,T),T.forEach(m),_.forEach(m),g=k(n),s&&s.l(n),n.forEach(m),this.h()},h(){r(i,"class","flex justify-center items-center gap-2 font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"),r(t,"class","flex flex-col gap-4"),r(e,"class","flex flex-col gap-4")},m(p,n){A(p,e,n),d(e,t),d(t,i),d(i,c),d(i,o),I(b,i,null),d(e,g),s&&s.m(e,null),v=!0,h||(a=W(i,"click",Re(l[1])),h=!0)},p(p,[n]){p[0]?s?(s.p(p,n),n&1&&H(s,1)):(s=Fe(p),s.c(),H(s,1),s.m(e,null)):s&&(Ye(),j(s,1,1,()=>{s=null}),Je())},i(p){v||(H(b.$$.fragment,p),H(s),v=!0)},o(p){j(b.$$.fragment,p),j(s),v=!1},d(p){p&&m(e),D(b),s&&s.d(),h=!1,a()}}}function oe(l){window.location.href=l}function rt(l,e,t){let i=!0;return[i,()=>t(0,i=!i),()=>oe("https://sada.web.id/"),()=>oe("https://ayatacak.vercel.app/"),()=>oe("https://www.barakconsultant.com/"),()=>oe("https://hotel.arsak.web.id/"),()=>oe("https://rental.arsak.web.id/"),()=>oe("https://s.id/guritan")]}class nt extends ge{constructor(e){super(),me(this,e,rt,it,ve,{})}}function Ke(l){let e,t='<div class="bg-white rounded-full px-3">android</div> <div class="bg-white rounded-full px-3">bootstrap css</div> <div class="bg-white rounded-full px-3">database</div> <div class="bg-white rounded-full px-3">docker</div> <div class="bg-white rounded-full px-3">express</div> <div class="bg-white rounded-full px-3">flutter</div> <div class="bg-white rounded-full px-3">java</div> <div class="bg-white rounded-full px-3">javascript</div> <div class="bg-white rounded-full px-3">jquery</div> <div class="bg-white rounded-full px-3">laravel</div> <div class="bg-white rounded-full px-3">livewire</div> <div class="bg-white rounded-full px-3">linux</div> <div class="bg-white rounded-full px-3">mysql</div> <div class="bg-white rounded-full px-3">prisma</div> <div class="bg-white rounded-full px-3">php</div> <div class="bg-white rounded-full px-3">postgresql</div> <div class="bg-white rounded-full px-3">python</div> <div class="bg-white rounded-full px-3">sqlite</div> <div class="bg-white rounded-full px-3">sveltekit</div> <div class="bg-white rounded-full px-3">tailwind css</div> <div class="bg-white rounded-full px-3">typescript</div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(i){e=x(i,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-xz1nyx"&&(e.innerHTML=t),this.h()},h(){r(e,"class","flex justify-center flex-wrap gap-4 text-sm")},m(i,c){A(i,e,c)},d(i){i&&m(e)}}}function ft(l){let e,t,i,c="Skills",f,o,b,g,v,h;o=new $({props:{icon:Ue}});let a=l[0]&&Ke();return{c(){e=w("div"),t=w("button"),i=w("span"),i.textContent=c,f=z(),V(o.$$.fragment),b=z(),a&&a.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var p=C(e);t=x(p,"BUTTON",{class:!0});var n=C(t);i=x(n,"SPAN",{"data-svelte-h":!0}),q(i)!=="svelte-y5j4xc"&&(i.textContent=c),f=k(n),E(o.$$.fragment,n),n.forEach(m),b=k(p),a&&a.l(p),p.forEach(m),this.h()},h(){r(t,"class","flex justify-center items-center gap-2 cursor-pointer font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"),r(e,"class","flex flex-col gap-4 text-zinc-800 mt-3")},m(s,p){A(s,e,p),d(e,t),d(t,i),d(t,f),I(o,t,null),d(e,b),a&&a.m(e,null),g=!0,v||(h=W(t,"click",Re(l[1])),v=!0)},p(s,[p]){s[0]?a||(a=Ke(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(s){g||(H(o.$$.fragment,s),g=!0)},o(s){j(o.$$.fragment,s),g=!1},d(s){s&&m(e),D(o),a&&a.d(),v=!1,h()}}}function ot(l,e,t){let i=!1;return[i,()=>t(0,i=!i)]}class ct extends ge{constructor(e){super(),me(this,e,ot,ft,ve,{})}}var dt={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},ut={prefix:"fab",iconName:"blogger",icon:[448,512,[],"f37c","M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"]},vt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},gt={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function mt(l){let e,t,i,c,f,o,b,g,v,h,a,s,p,n,_,T;return i=new $({props:{icon:lt}}),o=new $({props:{icon:ut}}),v=new $({props:{icon:vt}}),s=new $({props:{icon:dt}}),_=new $({props:{icon:gt}}),{c(){e=w("div"),t=w("a"),V(i.$$.fragment),c=z(),f=w("a"),V(o.$$.fragment),b=z(),g=w("a"),V(v.$$.fragment),h=z(),a=w("a"),V(s.$$.fragment),p=z(),n=w("a"),V(_.$$.fragment),this.h()},l(y){e=x(y,"DIV",{class:!0});var M=C(e);t=x(M,"A",{href:!0,class:!0});var P=C(t);E(i.$$.fragment,P),P.forEach(m),c=k(M),f=x(M,"A",{href:!0,class:!0});var K=C(f);E(o.$$.fragment,K),K.forEach(m),b=k(M),g=x(M,"A",{href:!0,class:!0});var O=C(g);E(v.$$.fragment,O),O.forEach(m),h=k(M),a=x(M,"A",{href:!0,class:!0});var Y=C(a);E(s.$$.fragment,Y),Y.forEach(m),p=k(M),n=x(M,"A",{href:!0,class:!0});var R=C(n);E(_.$$.fragment,R),R.forEach(m),M.forEach(m),this.h()},h(){r(t,"href","mailto:ronsen@startrek.or.id"),r(t,"class","hover:text-zinc-50"),r(f,"href","https://arsak.web.id/"),r(f,"class","text-amber-600 hover:text-amber-400"),r(g,"href","https://github.com/ronsen"),r(g,"class","hover:text-zinc-50"),r(a,"href","https://www.linkedin.com/in/ronaldnababan"),r(a,"class","hover:text-zinc-50"),r(n,"href","https://twitter.com/rnldnbbn"),r(n,"class","hover:text-zinc-50"),r(e,"class","flex justify-center gap-5 text-lg mt-6")},m(y,M){A(y,e,M),d(e,t),I(i,t,null),d(e,c),d(e,f),I(o,f,null),d(e,b),d(e,g),I(v,g,null),d(e,h),d(e,a),I(s,a,null),d(e,p),d(e,n),I(_,n,null),T=!0},p:ue,i(y){T||(H(i.$$.fragment,y),H(o.$$.fragment,y),H(v.$$.fragment,y),H(s.$$.fragment,y),H(_.$$.fragment,y),T=!0)},o(y){j(i.$$.fragment,y),j(o.$$.fragment,y),j(v.$$.fragment,y),j(s.$$.fragment,y),j(_.$$.fragment,y),T=!1},d(y){y&&m(e),D(i),D(o),D(v),D(s),D(_)}}}class ht extends ge{constructor(e){super(),me(this,e,null,mt,ve,{})}}function pt(l){let e,t,i='<img src="./avatar.jpg" alt="[]" class="w-48 mx-auto mb-3 rounded-full shadow-lg"/>',c,f,o=`<h1 class="title text-4xl font-semibold mb-3 text-zinc-100"><a href="/">Ronald Nababan</a></h1> <div class="mb-6"><strong>I</strong> reside in <strong>Pematangsiantar, Indonesia</strong>
		and work as a <strong>freelance programmer</strong> with <strong>extensive 
		experience</strong> in creating <strong>software</strong>, <strong>websites</strong>,
		and <strong>mobile applications</strong>. Additionally, I am passionate about 
		<strong>technology</strong>, <strong>photography</strong>, and
		<strong>videography</strong>.</div> <div class="flex justify-center mb-6"><a href="https://wa.me/6281319479396" class="w-full text-xl font-bold border border-green-600 hover:border-green-700 rounded-full p-4 text-center bg-green-600 hover:bg-green-700 text-zinc-100 hover:text-zinc-50 transition ease-out duration-300">Hire me!</a></div>`,b,g,v,h,a,s,p;return g=new nt({}),h=new ct({}),s=new ht({}),{c(){e=z(),t=w("a"),t.innerHTML=i,c=z(),f=w("div"),f.innerHTML=o,b=z(),V(g.$$.fragment),v=z(),V(h.$$.fragment),a=z(),V(s.$$.fragment),this.h()},l(n){Qe("svelte-1ge33ln",document.head).forEach(m),e=k(n),t=x(n,"A",{href:!0,"data-svelte-h":!0}),q(t)!=="svelte-1ha61ag"&&(t.innerHTML=i),c=k(n),f=x(n,"DIV",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-9j4cje"&&(f.innerHTML=o),b=k(n),E(g.$$.fragment,n),v=k(n),E(h.$$.fragment,n),a=k(n),E(s.$$.fragment,n),this.h()},h(){document.title="Ronald Nababan",r(t,"href","/"),r(f,"class","text-center")},m(n,_){A(n,e,_),A(n,t,_),A(n,c,_),A(n,f,_),A(n,b,_),I(g,n,_),A(n,v,_),I(h,n,_),A(n,a,_),I(s,n,_),p=!0},p:ue,i(n){p||(H(g.$$.fragment,n),H(h.$$.fragment,n),H(s.$$.fragment,n),p=!0)},o(n){j(g.$$.fragment,n),j(h.$$.fragment,n),j(s.$$.fragment,n),p=!1},d(n){n&&(m(e),m(t),m(c),m(f),m(b),m(v),m(a)),D(g,n),D(h,n),D(s,n)}}}class wt extends ge{constructor(e){super(),me(this,e,null,pt,ve,{})}}export{wt as component};