import{X as N,Y as J,Z as V,_ as E,$ as X,a0 as o,a1 as D,a2 as g,g as P,D as B,a3 as k,a4 as Q,B as W,n as p,w as q,O as ee,E as ae,a5 as re,a6 as te,K as ne,J as M,a7 as U,o as j,a8 as K,x as ie,a9 as fe,aa as se,a as C,ab as ue,ac as le,ad as _e,ae as ve,af as de,ag as ce,ah as ge,A as Z,ai as be,l as he,aj as ye,ak as oe,al as Pe,f as $,am as Ee,an as Re,ao as we}from"./D4zMJ-nb.js";function S(a,s=null,d){if(typeof a!="object"||a===null||N in a)return a;const v=Q(a);if(v!==J&&v!==V)return a;var n=new Map,u=W(a),b=E(0);u&&n.set("length",E(a.length));var y;return new Proxy(a,{defineProperty(f,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&X();var i=n.get(e);return i===void 0?(i=E(r.value),n.set(e,i)):o(i,S(r.value,y)),!0},deleteProperty(f,e){var r=n.get(e);if(r===void 0)e in f&&n.set(e,E(g));else{if(u&&typeof e=="string"){var i=n.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&o(i,t)}o(r,g),G(b)}return!0},get(f,e,r){var c;if(e===N)return a;var i=n.get(e),t=e in f;if(i===void 0&&(!t||(c=D(f,e))!=null&&c.writable)&&(i=E(S(t?f[e]:g,y)),n.set(e,i)),i!==void 0){var l=P(i);return l===g?void 0:l}return Reflect.get(f,e,r)},getOwnPropertyDescriptor(f,e){var r=Reflect.getOwnPropertyDescriptor(f,e);if(r&&"value"in r){var i=n.get(e);i&&(r.value=P(i))}else if(r===void 0){var t=n.get(e),l=t==null?void 0:t.v;if(t!==void 0&&l!==g)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return r},has(f,e){var l;if(e===N)return!0;var r=n.get(e),i=r!==void 0&&r.v!==g||Reflect.has(f,e);if(r!==void 0||B!==null&&(!i||(l=D(f,e))!=null&&l.writable)){r===void 0&&(r=E(i?S(f[e],y):g),n.set(e,r));var t=P(r);if(t===g)return!1}return i},set(f,e,r,i){var w;var t=n.get(e),l=e in f;if(u&&e==="length")for(var c=r;c<t.v;c+=1){var R=n.get(c+"");R!==void 0?o(R,g):c in f&&(R=E(g),n.set(c+"",R))}t===void 0?(!l||(w=D(f,e))!=null&&w.writable)&&(t=E(void 0),o(t,S(r,y)),n.set(e,t)):(l=t.v!==g,o(t,S(r,y)));var h=Reflect.getOwnPropertyDescriptor(f,e);if(h!=null&&h.set&&h.set.call(i,r),!l){if(u&&typeof e=="string"){var O=n.get("length"),A=Number(e);Number.isInteger(A)&&A>=O.v&&o(O,A+1)}G(b)}return!0},ownKeys(f){P(b);var e=Reflect.ownKeys(f).filter(t=>{var l=n.get(t);return l===void 0||l.v!==g});for(var[r,i]of n)i.v!==g&&!(r in f)&&e.push(r);return e},setPrototypeOf(){k()}})}function G(a,s=1){o(a,a.v+s)}function Oe(a,s,d=!1){q&&ee();var v=a,n=null,u=null,b=g,y=d?ae:0,f=!1;const e=(i,t=!0)=>{f=!0,r(t,i)},r=(i,t)=>{if(b===(b=i))return;let l=!1;if(q){const c=v.data===re;!!b===c&&(v=te(),ne(v),M(!1),l=!0)}b?(n?U(n):t&&(n=j(()=>t(v))),u&&K(u,()=>{u=null})):(u?U(u):t&&(u=j(()=>t(v))),n&&K(n,()=>{n=null})),l&&M(!0)};p(()=>{f=!1,s(e),f||r(null,null)},y),q&&(v=ie)}function H(a,s){return a===s||(a==null?void 0:a[N])===s}function Ae(a={},s,d,v){return fe(()=>{var n,u;return se(()=>{n=u,u=[],C(()=>{a!==d(...u)&&(s(a,...u),n&&H(d(...n),a)&&s(null,...n))})}),()=>{ue(()=>{u&&H(d(...u),a)&&s(null,...u)})}}),a}let m=!1;function Ie(a){var s=m;try{return m=!1,[a(),m]}finally{m=s}}function z(a){for(var s=B,d=B;s!==null&&!(s.f&(ce|ge));)s=s.parent;try{return Z(s),a()}finally{Z(d)}}function Te(a,s,d,v){var Y;var n=(d&be)!==0,u=!he||(d&ye)!==0,b=(d&oe)!==0,y=(d&Re)!==0,f=!1,e;b?[e,f]=Ie(()=>a[s]):e=a[s];var r=N in a||Pe in a,i=b&&(((Y=D(a,s))==null?void 0:Y.set)??(r&&s in a&&(_=>a[s]=_)))||void 0,t=v,l=!0,c=!1,R=()=>(c=!0,l&&(l=!1,y?t=C(v):t=v),t);e===void 0&&v!==void 0&&(i&&u&&le(),e=R(),i&&i(e));var h;if(u)h=()=>{var _=a[s];return _===void 0?R():(l=!0,c=!1,_)};else{var O=z(()=>(n?$:Ee)(()=>a[s]));O.f|=_e,h=()=>{var _=P(O);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(d&ve))return h;if(i){var A=a.$$legacy;return function(_,I){return arguments.length>0?((!u||!I||A||f)&&i(I?h():_),_):h()}}var w=!1,F=!1,x=we(e),T=z(()=>$(()=>{var _=h(),I=P(x);return w?(w=!1,F=!0,I):(F=!1,x.v=_)}));return n||(T.equals=de),function(_,I){if(arguments.length>0){const L=I?P(T):u&&b?S(_):_;return T.equals(L)||(w=!0,o(x,L),c&&t!==void 0&&(t=L),C(()=>P(T))),_}return P(T)}}export{S as a,Ae as b,Oe as i,Te as p};
