var Dt=Array.isArray,It=Array.from,Ot=Object.defineProperty,on=Object.getOwnPropertyDescriptor,Gn=Object.getOwnPropertyDescriptors,kt=Object.prototype,Nt=Array.prototype,$n=Object.getPrototypeOf;const Ct=()=>{};function bt(n){return n()}function Kn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,pn=4,H=8,tn=16,g=32,Z=64,D=128,V=256,p=512,R=1024,b=2048,C=4096,j=8192,Zn=16384,hn=32768,Pt=65536,zn=1<<18,dn=1<<19,fn=Symbol("$state"),Ft=Symbol("legacy props"),qt=Symbol("");function En(n){return n===this.v}function Wn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yn(n){return!Wn(n,this.v)}function Xn(n){throw new Error("effect_in_teardown")}function Jn(){throw new Error("effect_in_unowned_derived")}function Qn(n){throw new Error("effect_orphan")}function nt(){throw new Error("effect_update_depth_exceeded")}function Lt(){throw new Error("hydration_failed")}function Mt(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function Ht(){throw new Error("state_prototype_fixed")}function tt(){throw new Error("state_unsafe_local_read")}function rt(){throw new Error("state_unsafe_mutation")}let z=!1;function jt(){z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:En,version:0}}function Bt(n){return wn(rn(n))}function et(n,t=!1){var e;const r=rn(n);return t||(r.equals=yn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ut(n,t=!1){return wn(et(n,t))}function wn(n){return o!==null&&o.f&y&&(m===null?yt([n]):m.push(n)),n}function st(n,t){return o!==null&&ln()&&o.f&(y|tn)&&(m===null||!m.includes(n))&&rt(),at(n,t)}function at(n,t){return n.equals(t)||(n.v=t,n.version=Yn(),Tn(n,R),ln()&&u!==null&&u.f&p&&!(u.f&g)&&(c!==null&&c.includes(n)?(T(u,R),W(u)):A===null?wt([n]):A.push(n))),t}function Tn(n,t){var r=n.reactions;if(r!==null)for(var e=ln(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===u||(T(l,t),i&(p|D)&&(i&y?Tn(l,b):W(l)))}}const Vt=1,Gt=2,$t=16,Kt=1,Zt=2,zt=4,Wt=8,Xt=16,Jt=1,Qt=2,lt="[",ut="[!",ot="]",mn={},nr=Symbol();function gn(n){console.warn("hydration_mismatch")}let x=!1;function tr(n){x=n}let w;function L(n){if(n===null)throw gn(),mn;return w=n}function rr(){return L(I(w))}function er(n){if(x){if(I(w)!==null)throw gn(),mn;w=n}}function sr(n=1){if(x){for(var t=n,r=w;t--;)r=I(r);w=r}}function ar(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ot){if(n===0)return t;n-=1}else(r===lt||r===ut)&&(n+=1)}var e=I(t);t.remove(),t=e}}var _n,it,An,Rn;function lr(){if(_n===void 0){_n=window,it=document;var n=Element.prototype,t=Node.prototype;An=on(t,"firstChild").get,Rn=on(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function J(n){return An.call(n)}function I(n){return Rn.call(n)}function ur(n,t){if(!x)return J(n);var r=J(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function or(n,t){if(!x){var r=J(n);return r instanceof Comment&&r.data===""?I(r):r}return w}function ir(n,t=1,r=!1){let e=x?w:n;for(var s;t--;)s=e,e=I(e);if(!x)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=X();return e===null?s==null||s.after(l):e.before(l),L(l),l}return L(e),e}function fr(n){n.textContent=""}function ft(n){var t=y|R;u===null?t|=D:u.f|=dn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:En,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function _r(n){const t=ft(n);return t.equals=yn,t}function Sn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?en(e):F(e)}}}function _t(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function xn(n){var t,r=u;K(_t(n));try{Sn(n),t=Hn(n)}finally{K(r)}return t}function Dn(n){var t=xn(n),r=(O||n.f&D)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Yn())}function en(n){Sn(n),Y(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function In(n){u===null&&o===null&&Qn(),o!==null&&o.f&D&&Jn(),an&&Xn()}function ct(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|R,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{cn(!0),B(l),l.f|=Zn}catch(_){throw F(l),_}finally{cn(i)}}else t!==null&&W(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&dn)===0;if(!E&&!s&&e&&(a!==null&&ct(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function cr(n){const t=P(H,null,!1);return T(t,p),t.teardown=n,t}function vr(n){In();var t=u!==null&&(u.f&g)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=On(n);return e}}function pr(n){return In(),sn(n)}function hr(n){const t=P(Z,n,!0);return()=>{F(t)}}function On(n){return P(pn,n,!1)}function dr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=sn(()=>{n(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),St(t))})}function Er(){var n=f;sn(()=>{if(Rt(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),q(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function sn(n){return P(H,n,!0)}function yr(n){return vt(n)}function vt(n,t=0){return P(H|tn|t,n,!0)}function wr(n,t=!0){return P(H|g,n,!0,t)}function kn(n){var t=n.teardown;if(t!==null){const r=an,e=o;vn(!0),$(null);try{t.call(null)}finally{vn(r),$(e)}}}function Nn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)en(t[r])}}function Cn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function pt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&zn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:I(e);e.remove(),e=a}r=!0}Cn(n,t&&!r),Nn(n),Y(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();kn(n);var i=n.parent;i!==null&&i.first!==null&&bn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function bn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Tr(n,t){var r=[];Pn(n,r,!0),ht(r,()=>{F(n),t&&t()})}function ht(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Pn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&hn)!==0||(e.f&g)!==0;Pn(e,t,a?r:!1),e=s}}}function mr(n){Fn(n,!0)}function Fn(n,t){if(n.f&C){q(n)&&B(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&hn)!==0||(r.f&g)!==0;Fn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let G=!1,Q=[];function qn(){G=!1;const n=Q.slice();Q=[],Kn(n)}function gr(n){G||(G=!0,queueMicrotask(qn)),Q.push(n)}function dt(){G&&qn()}const Ln=0,Et=1;let U=Ln,M=!1,k=!1,an=!1;function cn(n){k=n}function vn(n){an=n}let S=[],N=0;let o=null;function $(n){o=n}let u=null;function K(n){u=n}let m=null;function yt(n){m=n}let c=null,d=0,A=null;function wt(n){A=n}let Mn=0,O=!1,f=null;function Yn(){return++Mn}function ln(){return!z||f!==null&&f.l===null}function q(n){var l,i;var t=n.f;if(t&R)return!0;if(t&b){var r=n.deps,e=(t&D)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&Dn(a),e&&u!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function Tt(n,t,r){throw n}function Hn(n){var un;var t=c,r=d,e=A,s=o,a=O,l=m,i=f,E=n.f;c=null,d=0,A=null,o=E&(g|Z)?null:n,O=!k&&(E&D)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(Y(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!O)for(v=d;v<_.length;v++)((un=_[v]).reactions??(un.reactions=[])).push(n)}else _!==null&&d<_.length&&(Y(n,d),_.length=d);return h}finally{c=t,d=r,A=e,o=s,O=a,m=l,f=i}}function mt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(D|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)mt(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&tn?pt(n):Cn(n),Nn(n),kn(n);var e=Hn(n);n.teardown=typeof e=="function"?e:null,n.version=Mn}catch(s){Tt(s)}finally{u=r}}}function jn(){N>1e3&&(N=0,nt()),N++}function Bn(n){var t=n.length;if(t!==0){jn();var r=k;k=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Un(s,a),gt(a)}}finally{k=r}}}function gt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|C))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bn(e):e.fn=null))}}function At(){if(M=!1,N>1001)return;const n=S;S=[],Bn(n),M||(N=0)}function W(n){U===Ln&&(M||(M=!0,queueMicrotask(At)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|g)){if(!(r&p))return;t.f^=p}}S.push(t)}function Un(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&g)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&H){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&pn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Un(i,t)}function Vn(n){var t=U,r=S;try{jn();const s=[];U=Et,S=s,M=!1,Bn(r);var e=n==null?void 0:n();return dt(),(S.length>0||s.length>0)&&Vn(),N=0,e}finally{U=t,S=r}}async function Ar(){await Promise.resolve(),Vn()}function Rt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=xn(n);return en(n),e}if(o!==null){m!==null&&m.includes(n)&&tt();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&u!==null&&u.f&p&&!(u.f&g)&&A.includes(n)&&(T(u,R),W(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,q(a)&&Dn(a)),n.v}function St(n){const t=o;try{return o=null,n()}finally{o=t}}const xt=~(R|b|p);function T(n,t){n.f=n.f&xt|t}function Rr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:rn(!1)})}function Sr(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),$(a.reaction),On(a.fn)}}finally{K(r),$(e)}}f=t.p,t.m=!0}return{}}function xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(fn in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&fn in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=$n(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{Kt as $,Yt as A,st as B,on as C,u as D,hn as E,Ht as F,$n as G,Dt as H,mr as I,Tr as J,rr as K,ut as L,ar as M,L as N,tr as O,On as P,sn as Q,gr as R,fn as S,Mt as T,nr as U,Pt as V,zt as W,yn as X,g as Y,Z,K as _,Sr as a,z as a0,Zt as a1,Wt as a2,Ft as a3,_r as a4,Xt as a5,et as a6,X as a7,J as a8,Jt as a9,qt as aA,Gn as aB,dr as aC,Er as aD,Ut as aE,sr as aF,it as aG,Wn as aH,Qt as aa,Ot as ab,$ as ac,o as ad,zn as ae,lt as af,I as ag,lr as ah,mn as ai,ot as aj,gn as ak,Lt as al,fr as am,It as an,hr as ao,cr as ap,Vn as aq,Ar as ar,Bt as as,C as at,at as au,Pn as av,ht as aw,Gt as ax,Vt as ay,$t as az,vr as b,ur as c,f as d,St as e,or as f,bt as g,Kn as h,Rt as i,xr as j,ft as k,jt as l,vt as m,wr as n,Ct as o,Rr as p,F as q,er as r,ir as s,yr as t,pr as u,x as v,w,kt as x,Nt as y,rn as z};