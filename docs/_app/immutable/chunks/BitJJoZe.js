import{_ as j,$ as C,a0 as H,a1 as B,a2 as F,a3 as k,a4 as I,n as q,a5 as W,w as m,H as L,a6 as N,C as g,B as T,x as h,a7 as V,a8 as R,a9 as S,y as z,aa as G,ab as J,ac as K,ad as Q,ae as U,af as X,o as Z,p as x,c as aa,j as ea}from"./EgtssvE1.js";import{b as ra}from"./ieOeQssB.js";const ta=["touchstart","touchmove"];function na(a){return ta.includes(a)}const M=new Set,A=new Set;function fa(a){for(var e=0;e<a.length;e++)M.add(a[e]);for(var t of A)t(a)}function E(a){var O;var e=this,t=e.ownerDocument,d=a.type,f=((O=a.composedPath)==null?void 0:O.call(a))||[],r=f[0]||a.target,u=0,y=a.__root;if(y){var c=f.indexOf(y);if(c!==-1&&(e===document||e===window)){a.__root=e;return}var p=f.indexOf(e);if(p===-1)return;c<=p&&(u=c)}if(r=f[u]||a.target,r!==e){j(a,"currentTarget",{configurable:!0,get(){return r||t}});var b=F,i=k;C(null),H(null);try{for(var n,o=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+d];if(_!=null&&(!r.disabled||a.target===r))if(B(_)){var[Y,...$]=_;Y.apply(r,[a,...$])}else _.call(r,a)}catch(w){n?o.push(w):n=w}if(a.cancelBubble||l===e||l===null)break;r=l}if(n){for(let w of o)queueMicrotask(()=>{throw w});throw n}}finally{a.__root=e,delete a.currentTarget,C(b),H(i)}}}let s;function oa(){s=void 0}function la(a){let e=null,t=m;var d;if(m){for(e=h,s===void 0&&(s=V(document.head));s!==null&&(s.nodeType!==8||s.data!==L);)s=N(s);s===null?g(!1):s=T(N(s))}m||(d=document.head.appendChild(I()));try{q(()=>a(d),W)}finally{t&&(g(!0),s=h,T(e))}}function ua(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t+"")}function sa(a,e){return P(a,e)}function ca(a,e){R(),e.intro=e.intro??!1;const t=e.target,d=m,f=h;try{for(var r=V(t);r&&(r.nodeType!==8||r.data!==L);)r=N(r);if(!r)throw S;g(!0),T(r),z();const u=P(a,{...e,anchor:r});if(h===null||h.nodeType!==8||h.data!==G)throw J(),S;return g(!1),u}catch(u){if(u===S)return e.recover===!1&&K(),R(),Q(t),g(!1),sa(a,e);throw u}finally{g(d),T(f),oa()}}const v=new Map;function P(a,{target:e,anchor:t,props:d={},events:f,context:r,intro:u=!0}){R();var y=new Set,c=i=>{for(var n=0;n<i.length;n++){var o=i[n];if(!y.has(o)){y.add(o);var l=na(o);e.addEventListener(o,E,{passive:l});var _=v.get(o);_===void 0?(document.addEventListener(o,E,{passive:l}),v.set(o,1)):v.set(o,_+1)}}};c(U(M)),A.add(c);var p=void 0,b=X(()=>{var i=t??e.appendChild(I());return Z(()=>{if(r){x({});var n=aa;n.c=r}f&&(d.$$events=f),m&&ra(i,null),p=a(i,d)||{},m&&(k.nodes_end=h),r&&ea()}),()=>{var l;for(var n of y){e.removeEventListener(n,E);var o=v.get(n);--o===0?(document.removeEventListener(n,E),v.delete(n)):v.set(n,o)}A.delete(c),i!==t&&((l=i.parentNode)==null||l.removeChild(i))}});return D.set(p,b),p}let D=new WeakMap;function _a(a,e){const t=D.get(a);return t?(D.delete(a),t(e)):Promise.resolve()}export{la as a,fa as d,ca as h,sa as m,ua as s,_a as u};
