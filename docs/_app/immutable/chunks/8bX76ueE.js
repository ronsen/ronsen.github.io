var Mn=Array.isArray,Xt=Array.prototype.indexOf,Yn=Array.from,jn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Bn=Array.prototype,Qt=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,mt=4,ot=8,ft=16,D=32,H=64,G=128,w=256,$=512,v=1024,k=2048,C=4096,q=8192,J=16384,nn=32768,gt=65536,Gn=1<<17,rn=1<<19,Tt=1<<20,ht=Symbol("$state"),$n=Symbol("legacy props"),Kn=Symbol("");function At(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function Jn(){Q=!0}const Qn=1,tr=2,nr=16,rr=1,er=2,lr=4,ar=8,sr=16,ur=1,or=2,_n="[",cn="[!",vn="]",Rt={},fr=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function dt(t){f=t}function ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function _r(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Pt(a.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function tt(){return!Q||f!==null&&f.l===null}function it(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function cr(t){return St(it(t))}function pn(t,n=!1){var e;const r=it(t);return n||(r.equals=xt),Q&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function vr(t,n=!1){return St(pn(t,n))}function St(t){return u!==null&&!T&&u.f&m&&(A===null?kn([t]):A.push(t)),t}function hn(t,n){return u!==null&&!T&&tt()&&u.f&(m|ft)&&(A===null||!A.includes(t))&&fn(),dn(t,n)}function dn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),kt(t,k),tt()&&o!==null&&o.f&v&&!(o.f&(D|H))&&(R===null?In([t]):R.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;i&k||!e&&s===o||(x(s,n),i&(v|w)&&(i&m?kt(s,C):et(s)))}}let O=!1;function pr(t){O=t}let g;function M(t){if(t===null)throw Dt(),Rt;return g=t}function hr(){return M(b(g))}function dr(t){if(O){if(b(g)!==null)throw Dt(),Rt;g=t}}function Er(t=1){if(O){for(var n=t,r=g;n--;)r=b(r);g=r}}function yr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var Et,En,yn,It,Ot;function wr(){if(Et===void 0){Et=window,En=document,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return It.call(t)}function b(t){return Ot.call(t)}function mr(t,n){if(!O)return at(t);var r=at(g);if(r===null)r=g.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function gr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?b(r):r}return g}function Tr(t,n=1,r=!1){let e=O?g:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=lt();return e===null?l==null||l.after(s):e.before(s),M(s),s}return M(e),e}function Ar(t){t.textContent=""}function Nt(t){var n=m|k,r=u!==null&&u.f&m?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=Tt,{ctx:f,deps:null,effects:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function xr(t){const n=Nt(t);return n.equals=xt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&m))return n;n=n.parent}return null}function mn(t){var n,r=o;z(wn(t));try{Ct(t),n=$t(t)}finally{z(r)}return n}function bt(t){var n=mn(t),r=(S||t.f&w)&&t.deps!==null?C:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function Ft(t){o===null&&u===null&&sn(),u!==null&&u.f&w&&o===null&&an(),ct&&ln()}function gn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function B(t,n,r,e=!0){var l=(t&H)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=F;try{yt(!0),rt(s),s.f|=nn}catch(p){throw N(s),p}finally{yt(i)}}else n!==null&&et(s);var y=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Tt|G))===0;if(!y&&!l&&e&&(a!==null&&gn(s,a),u!==null&&u.f&m)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Rr(t){Ft();var n=o!==null&&(o.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Dr(t){return Ft(),_t(t)}function Sr(t){const n=B(H,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Pt(t){return B(mt,t,!1)}function kr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=_t(()=>{t(),!e.ran&&(e.ran=!0,hn(r.l.r2,!0),qn(n))})}function Ir(){var t=f;_t(()=>{if(Wt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&v&&x(r,C),L(r)&&rt(r),n.ran=!1}t.l.r2.v=!1}})}function _t(t){return B(ot,t,!0)}function Or(t,n=[],r=Nt){const e=n.map(r);return Tn(()=>t(...e.map(Wt)))}function Tn(t,n=0){return B(ot|ft|n,t,!0)}function Nr(t,n=!0){return B(ot|D,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;wt(!0),Z(null);try{n.call(null)}finally{wt(r),Z(e)}}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:b(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),X(t,0),x(t,J);var s=t.transitions;if(s!==null)for(const y of s)y.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Yt(t,r,!0),Rn(r,()=>{N(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&D)!==0;Yt(e,n,a?r:!1),e=l}}}function Cr(t){jt(t,!0)}function jt(t,n){if(t.f&q){t.f^=q,t.f&v||(t.f^=v),L(t)&&(x(t,k),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&D)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let K=!1,st=[];function Ht(){K=!1;const t=st.slice();st=[],tn(t)}function br(t){K||(K=!0,queueMicrotask(Ht)),st.push(t)}function Dn(){K&&Ht()}const Bt=0,Sn=1;let U=!1,V=Bt,Y=!1,j=null,F=!1,ct=!1;function yt(t){F=t}function wt(t){ct=t}let I=[],P=0;let u=null,T=!1;function Z(t){u=t}let o=null;function z(t){o=t}let A=null;function kn(t){A=t}let c=null,E=0,R=null;function In(t){R=t}let Ut=1,W=0,S=!1;function Vt(){return++Ut}function L(t){var h;var n=t.f;if(n&k)return!0;if(n&C){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&$)!==0,i=e&&o!==null&&!S,y=r.length;if(s||i){var _=t,p=_.parent;for(l=0;l<y;l++)a=r[l],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(_)))&&(a.reactions??(a.reactions=[])).push(_);s&&(_.f^=$),i&&p!==null&&!(p.f&w)&&(_.f^=w)}for(l=0;l<y;l++)if(a=r[l],L(a)&&bt(a),a.wv>t.wv)return!0}(!e||o!==null&&!S)&&x(t,v)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function Nn(t){return(t.f&J)===0&&(t.parent===null||(t.parent.f&G)===0)}function nt(t,n,r,e){if(U){if(r===null&&(U=!1),Nn(n))throw t;return}r!==null&&(U=!0);{On(t,n);return}}function Gt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&m?Gt(a,n,!1):n===a&&(r?x(a,k):a.f&v&&x(a,C),et(a))}}function $t(t){var vt;var n=c,r=E,e=R,l=u,a=S,s=A,i=f,y=T,_=t.f;c=null,E=0,R=null,u=_&(D|H)?null:t,S=(_&w)!==0&&(!F||l===null||y),A=null,dt(t.ctx),T=!1,W++;try{var p=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(X(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!S)for(d=E;d<h.length;d++)((vt=h[d]).reactions??(vt.reactions=[])).push(t)}else h!==null&&E<h.length&&(X(t,E),h.length=E);if(tt()&&R!==null&&!T&&h!==null&&!(t.f&(m|C|k)))for(d=0;d<R.length;d++)Gt(R[d],t);return l!==null&&W++,p}finally{c=n,E=r,R=e,u=l,S=a,A=s,dt(i),T=y}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&m&&(c===null||!c.includes(n))&&(x(n,C),n.f&(w|$)||(n.f^=$),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function rt(t){var n=t.f;if(!(n&J)){x(t,v);var r=o,e=f;o=t;try{n&ft?An(t):Lt(t),qt(t);var l=$t(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var a=t.deps,s}catch(i){nt(i,t,r,e||t.ctx)}finally{o=r}}}function Kt(){if(P>1e3){P=0;try{un()}catch(t){if(j!==null)nt(t,j,null);else throw t}}P++}function Zt(t){var n=t.length;if(n!==0){Kt();var r=F;F=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&v||(l.f^=v);var a=Pn(l);bn(a)}}finally{F=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(J|q)))try{L(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function Fn(){if(Y=!1,P>1001)return;const t=I;I=[],Zt(t),Y||(P=0,j=null)}function et(t){V===Bt&&(Y||(Y=!0,queueMicrotask(Fn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(H|D)){if(!(r&v))return;n.f^=v}}I.push(n)}function Pn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&D)!==0,a=l&&(e&v)!==0,s=r.next;if(!a&&!(e&q)){if(e&mt)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,L(r)&&rt(r)}catch(p){nt(p,r,null,r.ctx)}finally{u=i}}var y=r.first;if(y!==null){r=y;continue}}if(s===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var _=p.next;if(_!==null){r=_;continue t}p=p.parent}}r=s}return n}function zt(t){var n=V,r=I;try{Kt();const l=[];V=Sn,I=l,Y=!1,Zt(r);var e=t==null?void 0:t();return Dn(),(I.length>0||l.length>0)&&zt(),P=0,j=null,e}finally{V=n,I=r}}async function Fr(){await Promise.resolve(),zt()}function Wt(t){var n=t.f,r=(n&m)!==0;if(u!==null&&!T){A!==null&&A.includes(t)&&on();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!S||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&!(a.f&w)&&(l.f^=w)}return r&&(l=t,L(l)&&bt(l)),t.v}function qn(t){var n=T;try{return T=!0,t()}finally{T=n}}const Ln=-7169;function x(t,n){t.f=t.f&Ln|n}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{it as $,z as A,Mn as B,u as C,o as D,gt as E,lt as F,_n as G,rn as H,b as I,pr as J,M as K,at as L,wr as M,Rt as N,hr as O,vn as P,Dt as Q,Zn as R,Ar as S,Yn as T,Sr as U,yn as V,ur as W,or as X,ht as Y,Hn as Z,Bn as _,qn as a,Xn as a0,fr as a1,hn as a2,pt as a3,Wn as a4,Qt as a5,cn as a6,yr as a7,Cr as a8,xn as a9,kr as aA,Ir as aB,vr as aC,Er as aD,En as aE,en as aF,Pt as aa,_t as ab,br as ac,zn as ad,Gn as ae,xr as af,lr as ag,xt as ah,pn as ai,ar as aj,$n as ak,er as al,rr as am,sr as an,zt as ao,cr as ap,Fr as aq,q as ar,tr as as,dn as at,Yt as au,Rn as av,Qn as aw,nr as ax,Kn as ay,Jt as az,Dr as b,f as c,Vn as d,Pr as e,Nt as f,Wt as g,Jn as h,gr as i,_r as j,mr as k,Q as l,dr as m,Tn as n,Nr as o,ir as p,Un as q,tn as r,Tr as s,Or as t,Rr as u,N as v,O as w,g as x,jn as y,Z as z};
