function ox(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function sx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Os={},ax={get exports(){return Os},set exports(t){Os=t}},Ql={},ye={},lx={get exports(){return ye},set exports(t){ye=t}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),ux=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),px=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),gx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),_x=Symbol.for("react.lazy"),Fh=Symbol.iterator;function xx(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,Kg={};function jo(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=jo.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}var Mf=wf.prototype=new Zg;Mf.constructor=wf;Yg(Mf,jo.prototype);Mf.isPureReactComponent=!0;var Uh=Array.isArray,Qg=Object.prototype.hasOwnProperty,bf={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Qg.call(e,i)&&!Jg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:t,key:o,ref:s,props:r,_owner:bf.current}}function yx(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function Sx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sx(""+t.key):e.toString(36)}function al(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case aa:case ux:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+qu(s,0):i,Uh(r)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),al(r,e,n,"",function(u){return u})):r!=null&&(Ef(r)&&(r=yx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Bh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Uh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+qu(o,a);s+=al(o,e,n,l,r)}else if(l=xx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+qu(o,a++),s+=al(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(o){return e.call(n,o,r++)}),i}function wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},ll={transition:null},Mx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:bf};je.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=jo;je.Fragment=cx;je.Profiler=fx;je.PureComponent=wf;je.StrictMode=dx;je.Suspense=gx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=bf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qg.call(e,l)&&!Jg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:aa,type:t.type,key:r,ref:o,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hx,_context:t},t.Consumer=t};je.createElement=e0;je.createFactory=function(t){var e=e0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:mx,render:t}};je.isValidElement=Ef;je.lazy=function(t){return{$$typeof:_x,_payload:{_status:-1,_result:t},_init:wx}};je.memo=function(t,e){return{$$typeof:vx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return Zt.current.useCallback(t,e)};je.useContext=function(t){return Zt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Zt.current.useEffect(t,e)};je.useId=function(){return Zt.current.useId()};je.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Zt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};je.useRef=function(t){return Zt.current.useRef(t)};je.useState=function(t){return Zt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Zt.current.useTransition()};je.version="18.2.0";(function(t){t.exports=je})(lx);const la=sx(ye),cd=ox({__proto__:null,default:la},[ye]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx=ye,Ex=Symbol.for("react.element"),Tx=Symbol.for("react.fragment"),Cx=Object.prototype.hasOwnProperty,Ax=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Cx.call(e,i)&&!Px.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ex,type:t,key:o,ref:s,props:r,_owner:Ax.current}}Ql.Fragment=Tx;Ql.jsx=t0;Ql.jsxs=t0;(function(t){t.exports=Ql})(ax);const Tf=Os.Fragment,ae=Os.jsx,Fe=Os.jsxs;var dd={},fd={},Lx={get exports(){return fd},set exports(t){fd=t}},yn={},hd={},Rx={get exports(){return hd},set exports(t){hd=t}},n0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Y){var X=O.length;O.push(Y);e:for(;0<X;){var pe=X-1>>>1,D=O[pe];if(0<r(D,Y))O[pe]=Y,O[X]=D,X=pe;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var Y=O[0],X=O.pop();if(X!==Y){O[0]=X;e:for(var pe=0,D=O.length,B=D>>>1;pe<B;){var j=2*(pe+1)-1,Q=O[j],E=j+1,ge=O[E];if(0>r(Q,X))E<D&&0>r(ge,Q)?(O[pe]=ge,O[E]=X,pe=E):(O[pe]=Q,O[j]=X,pe=j);else if(E<D&&0>r(ge,X))O[pe]=ge,O[E]=X,pe=E;else break e}}return Y}function r(O,Y){var X=O.sortIndex-Y.sortIndex;return X!==0?X:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,c=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=O)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function y(O){if(h=!1,_(O),!x)if(n(l)!==null)x=!0,le(w);else{var Y=n(u);Y!==null&&ne(y,Y.startTime-O)}}function w(O,Y){x=!1,h&&(h=!1,g(S),S=-1),m=!0;var X=c;try{for(_(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||O&&!Z());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,c=f.priorityLevel;var D=pe(f.expirationTime<=Y);Y=t.unstable_now(),typeof D=="function"?f.callback=D:f===n(l)&&i(l),_(Y)}else i(l);f=n(l)}if(f!==null)var B=!0;else{var j=n(u);j!==null&&ne(y,j.startTime-Y),B=!1}return B}finally{f=null,c=X,m=!1}}var P=!1,R=null,S=-1,C=5,I=-1;function Z(){return!(t.unstable_now()-I<C)}function ee(){if(R!==null){var O=t.unstable_now();I=O;var Y=!0;try{Y=R(!0,O)}finally{Y?G():(P=!1,R=null)}}else P=!1}var G;if(typeof v=="function")G=function(){v(ee)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,K=F.port2;F.port1.onmessage=ee,G=function(){K.postMessage(null)}}else G=function(){p(ee,0)};function le(O){R=O,P||(P=!0,G())}function ne(O,Y){S=p(function(){O(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,le(w))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(c){case 1:case 2:case 3:var Y=3;break;default:Y=c}var X=c;c=Y;try{return O()}finally{c=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=c;c=O;try{return Y()}finally{c=X}},t.unstable_scheduleCallback=function(O,Y,X){var pe=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pe+X:pe):X=pe,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=X+D,O={id:d++,callback:Y,priorityLevel:O,startTime:X,expirationTime:D,sortIndex:-1},X>pe?(O.sortIndex=X,e(u,O),n(l)===null&&O===n(u)&&(h?(g(S),S=-1):h=!0,ne(y,X-pe))):(O.sortIndex=D,e(l,O),x||m||(x=!0,le(w))),O},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(O){var Y=c;return function(){var X=c;c=Y;try{return O.apply(this,arguments)}finally{c=X}}}})(n0);(function(t){t.exports=n0})(Rx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=ye,xn=hd;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r0=new Set,zs={};function Br(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(zs[t]=e,t=0;t<e.length;t++)r0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=Object.prototype.hasOwnProperty,Dx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Gh={};function Ix(t){return pd.call(Gh,t)?!0:pd.call(Vh,t)?!1:Dx.test(t)?Gh[t]=!0:(Vh[t]=!0,!1)}function kx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nx(t,e,n,i){if(e===null||typeof e>"u"||kx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Af);Ut[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Af);Ut[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Af);Ut[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nx(e,n,r,i)&&(n=null),i||r===null?Ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),ao=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Df=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function Jo(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Yu;function vs(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Ku=!1;function Zu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function Ox(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=Zu(t.type,!1),t;case 11:return t=Zu(t.type.render,!1),t;case 1:return t=Zu(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case ao:return"Portal";case md:return"Profiler";case Lf:return"StrictMode";case gd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case s0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Df:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fx(t){var e=l0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=Fx(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=l0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c0(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function yd(t,e){c0(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sd(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sd(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function Mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(_s(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function d0(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function f0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?f0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,h0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){Ux.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function p0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function m0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=p0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Bx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(t,e){if(e){if(Bx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cd=null,bo=null,Eo=null;function qh(t){if(t=da(t)){if(typeof Cd!="function")throw Error(he(280));var e=t.stateNode;e&&(e=iu(e),Cd(t.stateNode,t.type,e))}}function g0(t){bo?Eo?Eo.push(t):Eo=[t]:bo=t}function v0(){if(bo){var t=bo,e=Eo;if(Eo=bo=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function _0(t,e){return t(e)}function x0(){}var Qu=!1;function y0(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return _0(t,e,n)}finally{Qu=!1,(bo!==null||Eo!==null)&&(x0(),v0())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var i=iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Ad=!1;if(bi)try{var es={};Object.defineProperty(es,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Ad=!1}function Vx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Es=!1,Ml=null,bl=!1,Pd=null,Gx={onError:function(t){Es=!0,Ml=t}};function Hx(t,e,n,i,r,o,s,a,l){Es=!1,Ml=null,Vx.apply(Gx,arguments)}function Wx(t,e,n,i,r,o,s,a,l){if(Hx.apply(this,arguments),Es){if(Es){var u=Ml;Es=!1,Ml=null}else throw Error(he(198));bl||(bl=!0,Pd=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(Vr(t)!==t)throw Error(he(188))}function jx(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Yh(r),t;if(o===i)return Yh(r),e;o=o.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function w0(t){return t=jx(t),t!==null?M0(t):null}function M0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M0(t);if(e!==null)return e;t=t.sibling}return null}var b0=xn.unstable_scheduleCallback,Kh=xn.unstable_cancelCallback,$x=xn.unstable_shouldYield,Xx=xn.unstable_requestPaint,_t=xn.unstable_now,qx=xn.unstable_getCurrentPriorityLevel,kf=xn.unstable_ImmediatePriority,E0=xn.unstable_UserBlockingPriority,El=xn.unstable_NormalPriority,Yx=xn.unstable_LowPriority,T0=xn.unstable_IdlePriority,Jl=null,ii=null;function Kx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Jx,Zx=Math.log,Qx=Math.LN2;function Jx(t){return t>>>=0,t===0?32:31-(Zx(t)/Qx|0)|0}var Ma=64,ba=4194304;function xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=xs(a):(o&=s,o!==0&&(i=xs(o)))}else s=n&~r,s!==0?i=xs(s):o!==0&&(i=xs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function ey(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Yn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ey(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function ny(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function A0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P0,Of,L0,R0,D0,Rd=!1,Ea=[],Wi=null,ji=null,$i=null,Bs=new Map,Vs=new Map,Ui=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(e.pointerId)}}function ts(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&Of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ry(t,e,n,i,r){switch(e){case"focusin":return Wi=ts(Wi,t,e,n,i,r),!0;case"dragenter":return ji=ts(ji,t,e,n,i,r),!0;case"mouseover":return $i=ts($i,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Bs.set(o,ts(Bs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Vs.set(o,ts(Vs.get(o)||null,t,e,n,i,r)),!0}return!1}function I0(t){var e=xr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=S0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=da(n),e!==null&&Of(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){ul(t)&&n.delete(e)}function oy(){Rd=!1,Wi!==null&&ul(Wi)&&(Wi=null),ji!==null&&ul(ji)&&(ji=null),$i!==null&&ul($i)&&($i=null),Bs.forEach(Qh),Vs.forEach(Qh)}function ns(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,oy)))}function Gs(t){function e(r){return ns(r,t)}if(0<Ea.length){ns(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&ns(Wi,t),ji!==null&&ns(ji,t),$i!==null&&ns($i,t),Bs.forEach(e),Vs.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&Ui.shift()}var To=Ai.ReactCurrentBatchConfig,Cl=!0;function sy(t,e,n,i){var r=et,o=To.transition;To.transition=null;try{et=1,zf(t,e,n,i)}finally{et=r,To.transition=o}}function ay(t,e,n,i){var r=et,o=To.transition;To.transition=null;try{et=4,zf(t,e,n,i)}finally{et=r,To.transition=o}}function zf(t,e,n,i){if(Cl){var r=Dd(t,e,n,i);if(r===null)uc(t,e,i,Al,n),Zh(t,i);else if(ry(r,t,e,n,i))i.stopPropagation();else if(Zh(t,i),e&4&&-1<iy.indexOf(t)){for(;r!==null;){var o=da(r);if(o!==null&&P0(o),o=Dd(t,e,n,i),o===null&&uc(t,e,i,Al,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else uc(t,e,i,null,n)}}var Al=null;function Dd(t,e,n,i){if(Al=null,t=If(i),t=xr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qx()){case kf:return 1;case E0:return 4;case El:case Yx:return 16;case T0:return 536870912;default:return 16}default:return 16}}var Vi=null,Ff=null,cl=null;function N0(){if(cl)return cl;var t,e=Ff,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Jh(){return!1}function Sn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ta:Jh,this.isPropagationStopped=Jh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Sn($o),ca=gt({},$o,{view:0,detail:0}),ly=Sn(ca),ec,tc,is,eu=gt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(ec=t.screenX-is.screenX,tc=t.screenY-is.screenY):tc=ec=0,is=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),ep=Sn(eu),uy=gt({},eu,{dataTransfer:0}),cy=Sn(uy),dy=gt({},ca,{relatedTarget:0}),nc=Sn(dy),fy=gt({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Sn(fy),py=gt({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),my=Sn(py),gy=gt({},$o,{data:0}),tp=Sn(gy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xy[t])?!!e[t]:!1}function Bf(){return yy}var Sy=gt({},ca,{key:function(t){if(t.key){var e=vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=Sn(Sy),My=gt({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Sn(My),by=gt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),Ey=Sn(by),Ty=gt({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Sn(Ty),Ay=gt({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Sn(Ay),Ly=[9,13,27,32],Vf=bi&&"CompositionEvent"in window,Ts=null;bi&&"documentMode"in document&&(Ts=document.documentMode);var Ry=bi&&"TextEvent"in window&&!Ts,O0=bi&&(!Vf||Ts&&8<Ts&&11>=Ts),ip=String.fromCharCode(32),rp=!1;function z0(t,e){switch(t){case"keyup":return Ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function Dy(t,e){switch(t){case"compositionend":return F0(e);case"keypress":return e.which!==32?null:(rp=!0,ip);case"textInput":return t=e.data,t===ip&&rp?null:t;default:return null}}function Iy(t,e){if(uo)return t==="compositionend"||!Vf&&z0(t,e)?(t=N0(),cl=Ff=Vi=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ky[t.type]:e==="textarea"}function U0(t,e,n,i){g0(i),e=Pl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Cs=null,Hs=null;function Ny(t){K0(t,0)}function tu(t){var e=ho(t);if(u0(e))return t}function Oy(t,e){if(t==="change")return e}var B0=!1;if(bi){var ic;if(bi){var rc="oninput"in document;if(!rc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),rc=typeof sp.oninput=="function"}ic=rc}else ic=!1;B0=ic&&(!document.documentMode||9<document.documentMode)}function ap(){Cs&&(Cs.detachEvent("onpropertychange",V0),Hs=Cs=null)}function V0(t){if(t.propertyName==="value"&&tu(Hs)){var e=[];U0(e,Hs,t,If(t)),y0(Ny,e)}}function zy(t,e,n){t==="focusin"?(ap(),Cs=e,Hs=n,Cs.attachEvent("onpropertychange",V0)):t==="focusout"&&ap()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(Hs)}function Uy(t,e){if(t==="click")return tu(e)}function By(t,e){if(t==="input"||t==="change")return tu(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:Vy;function Ws(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pd.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function H0(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=H0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=up(n,o);var s=up(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hy=bi&&"documentMode"in document&&11>=document.documentMode,co=null,Id=null,As=null,kd=!1;function cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||co==null||co!==wl(i)||(i=co,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),As&&Ws(As,i)||(As=i,i=Pl(Id,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=co)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fo={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},oc={},W0={};bi&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function nu(t){if(oc[t])return oc[t];if(!fo[t])return t;var e=fo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W0)return oc[t]=e[n];return t}var j0=nu("animationend"),$0=nu("animationiteration"),X0=nu("animationstart"),q0=nu("transitionend"),Y0=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Y0.set(t,e),Br(e,[t])}for(var sc=0;sc<dp.length;sc++){var ac=dp[sc],Wy=ac.toLowerCase(),jy=ac[0].toUpperCase()+ac.slice(1);ir(Wy,"on"+jy)}ir(j0,"onAnimationEnd");ir($0,"onAnimationIteration");ir(X0,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(q0,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wx(i,e,void 0,t),t.currentTarget=null}function K0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;fp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;fp(r,a,u),o=l}}}if(bl)throw t=Pd,bl=!1,Pd=null,t}function ot(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var i=t+"__bubble";n.has(i)||(Z0(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),Z0(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[Aa]){t[Aa]=!0,r0.forEach(function(n){n!=="selectionchange"&&($y.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,lc("selectionchange",!1,e))}}function Z0(t,e,n,i){switch(k0(e)){case 1:var r=sy;break;case 4:r=ay;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=xr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}y0(function(){var u=o,d=If(n),f=[];e:{var c=Y0.get(t);if(c!==void 0){var m=Uf,x=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=wy;break;case"focusin":x="focus",m=nc;break;case"focusout":x="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ey;break;case j0:case $0:case X0:m=hy;break;case q0:m=Cy;break;case"scroll":m=ly;break;case"wheel":m=Py;break;case"copy":case"cut":case"paste":m=my;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=np}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?c!==null?c+"Capture":null:c;h=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,g!==null&&(y=Us(v,g),y!=null&&h.push($s(v,y,_)))),p)break;v=v.return}0<h.length&&(c=new m(c,x,null,n,d),f.push({event:c,listeners:h}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",c&&n!==Td&&(x=n.relatedTarget||n.fromElement)&&(xr(x)||x[Ei]))break e;if((m||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?xr(x):null,x!==null&&(p=Vr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=ep,y="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=np,y="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?c:ho(m),_=x==null?c:ho(x),c=new h(y,v+"leave",m,n,d),c.target=p,c.relatedTarget=_,y=null,xr(d)===u&&(h=new h(g,v+"enter",x,n,d),h.target=_,h.relatedTarget=p,y=h),p=y,m&&x)t:{for(h=m,g=x,v=0,_=h;_;_=Hr(_))v++;for(_=0,y=g;y;y=Hr(y))_++;for(;0<v-_;)h=Hr(h),v--;for(;0<_-v;)g=Hr(g),_--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=Hr(h),g=Hr(g)}h=null}else h=null;m!==null&&hp(f,c,m,h,!1),x!==null&&p!==null&&hp(f,p,x,h,!0)}}e:{if(c=u?ho(u):window,m=c.nodeName&&c.nodeName.toLowerCase(),m==="select"||m==="input"&&c.type==="file")var w=Oy;else if(op(c))if(B0)w=By;else{w=Fy;var P=zy}else(m=c.nodeName)&&m.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(w=Uy);if(w&&(w=w(t,u))){U0(f,w,n,d);break e}P&&P(t,c,u),t==="focusout"&&(P=c._wrapperState)&&P.controlled&&c.type==="number"&&Sd(c,"number",c.value)}switch(P=u?ho(u):window,t){case"focusin":(op(P)||P.contentEditable==="true")&&(co=P,Id=u,As=null);break;case"focusout":As=Id=co=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,cp(f,n,d);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":cp(f,n,d)}var R;if(Vf)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else uo?z0(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(O0&&n.locale!=="ko"&&(uo||S!=="onCompositionStart"?S==="onCompositionEnd"&&uo&&(R=N0()):(Vi=d,Ff="value"in Vi?Vi.value:Vi.textContent,uo=!0)),P=Pl(u,S),0<P.length&&(S=new tp(S,t,null,n,d),f.push({event:S,listeners:P}),R?S.data=R:(R=F0(n),R!==null&&(S.data=R)))),(R=Ry?Dy(t,n):Iy(t,n))&&(u=Pl(u,"onBeforeInput"),0<u.length&&(d=new tp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}K0(f,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Us(t,n),o!=null&&i.unshift($s(t,o,r)),o=Us(t,e),o!=null&&i.push($s(t,o,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Us(n,o),l!=null&&s.unshift($s(n,l,a))):r||(l=Us(n,o),l!=null&&s.push($s(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Xy=/\r\n?/g,qy=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(Xy,`
`).replace(qy,"")}function Pa(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(he(425))}function Ll(){}var Nd=null,Od=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(Zy)}:Fd;function Zy(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Gs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Gs(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Xo,Xs="__reactProps$"+Xo,Ei="__reactContainer$"+Xo,Ud="__reactEvents$"+Xo,Qy="__reactListeners$"+Xo,Jy="__reactHandles$"+Xo;function xr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[ni])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function iu(t){return t[Xs]||null}var Bd=[],po=-1;function rr(t){return{current:t}}function at(t){0>po||(t.current=Bd[po],Bd[po]=null,po--)}function rt(t,e){po++,Bd[po]=t.current,t.current=e}var tr={},Wt=rr(tr),rn=rr(!1),Lr=tr;function Io(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Rl(){at(rn),at(Wt)}function vp(t,e,n){if(Wt.current!==tr)throw Error(he(168));rt(Wt,e),rt(rn,n)}function Q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,zx(t)||"Unknown",r));return gt({},n,i)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Lr=Wt.current,rt(Wt,t),rt(rn,rn.current),!0}function _p(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=Q0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,at(rn),at(Wt),rt(Wt,t)):at(rn),rt(rn,n)}var gi=null,ru=!1,dc=!1;function J0(t){gi===null?gi=[t]:gi.push(t)}function e1(t){ru=!0,J0(t)}function or(){if(!dc&&gi!==null){dc=!0;var t=0,e=et;try{var n=gi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,ru=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),b0(kf,or),r}finally{et=e,dc=!1}}return null}var mo=[],go=0,Il=null,kl=0,Tn=[],Cn=0,Rr=null,_i=1,xi="";function pr(t,e){mo[go++]=kl,mo[go++]=Il,Il=t,kl=e}function ev(t,e,n){Tn[Cn++]=_i,Tn[Cn++]=xi,Tn[Cn++]=Rr,Rr=t;var i=_i;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var o=32-Yn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,_i=1<<32-Yn(e)+r|n<<r|i,xi=o+t}else _i=1<<o|n<<r|i,xi=t}function Hf(t){t.return!==null&&(pr(t,1),ev(t,1,0))}function Wf(t){for(;t===Il;)Il=mo[--go],mo[go]=null,kl=mo[--go],mo[go]=null;for(;t===Rr;)Rr=Tn[--Cn],Tn[Cn]=null,xi=Tn[--Cn],Tn[Cn]=null,_i=Tn[--Cn],Tn[Cn]=null}var vn=null,mn=null,ut=!1,jn=null;function tv(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,mn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,mn=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(ut){var e=mn;if(e){var n=e;if(!xp(t,e)){if(Vd(t))throw Error(he(418));e=Xi(n.nextSibling);var i=vn;e&&xp(t,e)?tv(i,n):(t.flags=t.flags&-4097|2,ut=!1,vn=t)}}else{if(Vd(t))throw Error(he(418));t.flags=t.flags&-4097|2,ut=!1,vn=t}}}function yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function La(t){if(t!==vn)return!1;if(!ut)return yp(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=mn)){if(Vd(t))throw nv(),Error(he(418));for(;e;)tv(t,e),e=Xi(e.nextSibling)}if(yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=vn?Xi(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=mn;t;)t=Xi(t.nextSibling)}function ko(){mn=vn=null,ut=!1}function jf(t){jn===null?jn=[t]:jn.push(t)}var t1=Ai.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nl=rr(null),Ol=null,vo=null,$f=null;function Xf(){$f=vo=Ol=null}function qf(t){var e=Nl.current;at(Nl),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){Ol=t,$f=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(Ol===null)throw Error(he(308));vo=t,Ol.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var yr=null;function Yf(t){yr===null?yr=[t]:yr.push(t)}function iv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}function Sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,i){var r=t.updateQueue;Fi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=u=l=null,a=o;do{var c=a.lane,m=a.eventTime;if((i&c)===c){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(c=e,m=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){f=x.call(m,f,c);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,c=typeof x=="function"?x.call(m,f,c):x,c==null)break e;f=gt({},f,c);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else m={eventTime:m,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,s|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ir|=s,t.lanes=s,t.memoizedState=f}}function wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var ov=new i0.Component().refs;function Wd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=qi(t,o,r),e!==null&&(Kn(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=qi(t,o,r),e!==null&&(Kn(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Kn(e,t,i,n),fl(e,t,i))}};function Mp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ws(n,i)||!Ws(r,o):!0}function sv(t,e,n){var i=!1,r=tr,o=e.contextType;return typeof o=="object"&&o!==null?o=Dn(o):(r=on(e)?Lr:Wt.current,i=e.contextTypes,o=(i=i!=null)?Io(t,r):tr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=ov,Kf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Dn(o):(o=on(e)?Lr:Wt.current,r.context=Io(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Wd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ou.enqueueReplaceState(r,r.state,null),zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===ov&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ep(t){var e=t._init;return e(t._payload)}function av(t){function e(g,v){if(t){var _=g.deletions;_===null?(g.deletions=[v],g.flags|=16):_.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=Zi(g,v),g.index=0,g.sibling=null,g}function o(g,v,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<v?(g.flags|=2,v):_):(g.flags|=2,v)):(g.flags|=1048576,v)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,_,y){return v===null||v.tag!==6?(v=_c(_,g.mode,y),v.return=g,v):(v=r(v,_),v.return=g,v)}function l(g,v,_,y){var w=_.type;return w===lo?d(g,v,_.props.children,y,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zi&&Ep(w)===v.type)?(y=r(v,_.props),y.ref=rs(g,v,_),y.return=g,y):(y=_l(_.type,_.key,_.props,null,g.mode,y),y.ref=rs(g,v,_),y.return=g,y)}function u(g,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=xc(_,g.mode,y),v.return=g,v):(v=r(v,_.children||[]),v.return=g,v)}function d(g,v,_,y,w){return v===null||v.tag!==7?(v=Tr(_,g.mode,y,w),v.return=g,v):(v=r(v,_),v.return=g,v)}function f(g,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_c(""+v,g.mode,_),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:return _=_l(v.type,v.key,v.props,null,g.mode,_),_.ref=rs(g,null,v),_.return=g,_;case ao:return v=xc(v,g.mode,_),v.return=g,v;case zi:var y=v._init;return f(g,y(v._payload),_)}if(_s(v)||Jo(v))return v=Tr(v,g.mode,_,null),v.return=g,v;Ra(g,v)}return null}function c(g,v,_,y){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(g,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:return _.key===w?l(g,v,_,y):null;case ao:return _.key===w?u(g,v,_,y):null;case zi:return w=_._init,c(g,v,w(_._payload),y)}if(_s(_)||Jo(_))return w!==null?null:d(g,v,_,y,null);Ra(g,_)}return null}function m(g,v,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(_)||null,a(v,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ya:return g=g.get(y.key===null?_:y.key)||null,l(v,g,y,w);case ao:return g=g.get(y.key===null?_:y.key)||null,u(v,g,y,w);case zi:var P=y._init;return m(g,v,_,P(y._payload),w)}if(_s(y)||Jo(y))return g=g.get(_)||null,d(v,g,y,w,null);Ra(v,y)}return null}function x(g,v,_,y){for(var w=null,P=null,R=v,S=v=0,C=null;R!==null&&S<_.length;S++){R.index>S?(C=R,R=null):C=R.sibling;var I=c(g,R,_[S],y);if(I===null){R===null&&(R=C);break}t&&R&&I.alternate===null&&e(g,R),v=o(I,v,S),P===null?w=I:P.sibling=I,P=I,R=C}if(S===_.length)return n(g,R),ut&&pr(g,S),w;if(R===null){for(;S<_.length;S++)R=f(g,_[S],y),R!==null&&(v=o(R,v,S),P===null?w=R:P.sibling=R,P=R);return ut&&pr(g,S),w}for(R=i(g,R);S<_.length;S++)C=m(R,g,S,_[S],y),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?S:C.key),v=o(C,v,S),P===null?w=C:P.sibling=C,P=C);return t&&R.forEach(function(Z){return e(g,Z)}),ut&&pr(g,S),w}function h(g,v,_,y){var w=Jo(_);if(typeof w!="function")throw Error(he(150));if(_=w.call(_),_==null)throw Error(he(151));for(var P=w=null,R=v,S=v=0,C=null,I=_.next();R!==null&&!I.done;S++,I=_.next()){R.index>S?(C=R,R=null):C=R.sibling;var Z=c(g,R,I.value,y);if(Z===null){R===null&&(R=C);break}t&&R&&Z.alternate===null&&e(g,R),v=o(Z,v,S),P===null?w=Z:P.sibling=Z,P=Z,R=C}if(I.done)return n(g,R),ut&&pr(g,S),w;if(R===null){for(;!I.done;S++,I=_.next())I=f(g,I.value,y),I!==null&&(v=o(I,v,S),P===null?w=I:P.sibling=I,P=I);return ut&&pr(g,S),w}for(R=i(g,R);!I.done;S++,I=_.next())I=m(R,g,S,I.value,y),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?S:I.key),v=o(I,v,S),P===null?w=I:P.sibling=I,P=I);return t&&R.forEach(function(ee){return e(g,ee)}),ut&&pr(g,S),w}function p(g,v,_,y){if(typeof _=="object"&&_!==null&&_.type===lo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:e:{for(var w=_.key,P=v;P!==null;){if(P.key===w){if(w=_.type,w===lo){if(P.tag===7){n(g,P.sibling),v=r(P,_.props.children),v.return=g,g=v;break e}}else if(P.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zi&&Ep(w)===P.type){n(g,P.sibling),v=r(P,_.props),v.ref=rs(g,P,_),v.return=g,g=v;break e}n(g,P);break}else e(g,P);P=P.sibling}_.type===lo?(v=Tr(_.props.children,g.mode,y,_.key),v.return=g,g=v):(y=_l(_.type,_.key,_.props,null,g.mode,y),y.ref=rs(g,v,_),y.return=g,g=y)}return s(g);case ao:e:{for(P=_.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(g,v.sibling),v=r(v,_.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=xc(_,g.mode,y),v.return=g,g=v}return s(g);case zi:return P=_._init,p(g,v,P(_._payload),y)}if(_s(_))return x(g,v,_,y);if(Jo(_))return h(g,v,_,y);Ra(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,_),v.return=g,g=v):(n(g,v),v=_c(_,g.mode,y),v.return=g,g=v),s(g)):n(g,v)}return p}var No=av(!0),lv=av(!1),fa={},ri=rr(fa),qs=rr(fa),Ys=rr(fa);function Sr(t){if(t===fa)throw Error(he(174));return t}function Zf(t,e){switch(rt(Ys,e),rt(qs,t),rt(ri,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Md(e,t)}at(ri),rt(ri,e)}function Oo(){at(ri),at(qs),at(Ys)}function uv(t){Sr(Ys.current);var e=Sr(ri.current),n=Md(e,t.type);e!==n&&(rt(qs,t),rt(ri,n))}function Qf(t){qs.current===t&&(at(ri),at(qs))}var pt=rr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Jf(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var hl=Ai.ReactCurrentDispatcher,hc=Ai.ReactCurrentBatchConfig,Dr=0,mt=null,Tt=null,Dt=null,Ul=!1,Ps=!1,Ks=0,n1=0;function Bt(){throw Error(he(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,o){if(Dr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?s1:a1,t=n(i,r),Ps){o=0;do{if(Ps=!1,Ks=0,25<=o)throw Error(he(301));o+=1,Dt=Tt=null,e.updateQueue=null,hl.current=l1,t=n(i,r)}while(Ps)}if(hl.current=Bl,e=Tt!==null&&Tt.next!==null,Dr=0,Dt=Tt=mt=null,Ul=!1,e)throw Error(he(300));return t}function nh(){var t=Ks!==0;return Ks=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=t;else{if(t===null)throw Error(he(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Zs(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=In(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,mt.lanes|=d,Ir|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Zn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Ir|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=In(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Zn(o,e.memoizedState)||(nn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function cv(){}function dv(t,e){var n=mt,i=In(),r=e(),o=!Zn(i.memoizedState,r);if(o&&(i.memoizedState=r,nn=!0),i=i.queue,ih(pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Qs(9,hv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(he(349));Dr&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hv(t,e,n,i){e.value=n,e.getSnapshot=i,mv(e)&&gv(t)}function pv(t,e,n){return n(function(){mv(e)&&gv(t)})}function mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function gv(t){var e=Ti(t,1);e!==null&&Kn(e,t,1,-1)}function Tp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:t},e.queue=t,t=t.dispatch=o1.bind(null,mt,t),[e.memoizedState,t]}function Qs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vv(){return In().memoizedState}function pl(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=Qs(1|e,n,void 0,i===void 0?null:i)}function su(t,e,n,i){var r=In();i=i===void 0?null:i;var o=void 0;if(Tt!==null){var s=Tt.memoizedState;if(o=s.destroy,i!==null&&eh(i,s.deps)){r.memoizedState=Qs(e,n,o,i);return}}mt.flags|=t,r.memoizedState=Qs(1|e,n,o,i)}function Cp(t,e){return pl(8390656,8,t,e)}function ih(t,e){return su(2048,8,t,e)}function _v(t,e){return su(4,2,t,e)}function xv(t,e){return su(4,4,t,e)}function yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sv(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,yv.bind(null,e,t),n)}function rh(){}function wv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return Dr&21?(Zn(n,e)||(n=C0(),mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function i1(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{et=n,hc.transition=i}}function Ev(){return In().memoizedState}function r1(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))Cv(e,n);else if(n=iv(t,e,n,i),n!==null){var r=Kt();Kn(n,t,i,r),Av(n,e,i)}}function o1(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))Cv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,s)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=iv(t,e,r,i),n!==null&&(r=Kt(),Kn(n,t,i,r),Av(n,e,i))}}function Tv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Cv(t,e){Ps=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}var Bl={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},s1={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=r1.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Tp,useDebugValue:rh,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Tp(!1),e=t[0];return t=i1.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(ut){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),It===null)throw Error(he(349));Dr&30||fv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Cp(pv.bind(null,i,o,t),[t]),i.flags|=2048,Qs(9,hv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=It.identifierPrefix;if(ut){var n=xi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=n1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a1={readContext:Dn,useCallback:wv,useContext:Dn,useEffect:ih,useImperativeHandle:Sv,useInsertionEffect:_v,useLayoutEffect:xv,useMemo:Mv,useReducer:pc,useRef:vv,useState:function(){return pc(Zs)},useDebugValue:rh,useDeferredValue:function(t){var e=In();return bv(e,Tt.memoizedState,t)},useTransition:function(){var t=pc(Zs)[0],e=In().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:dv,useId:Ev,unstable_isNewReconciler:!1},l1={readContext:Dn,useCallback:wv,useContext:Dn,useEffect:ih,useImperativeHandle:Sv,useInsertionEffect:_v,useLayoutEffect:xv,useMemo:Mv,useReducer:mc,useRef:vv,useState:function(){return mc(Zs)},useDebugValue:rh,useDeferredValue:function(t){var e=In();return Tt===null?e.memoizedState=t:bv(e,Tt.memoizedState,t)},useTransition:function(){var t=mc(Zs)[0],e=In().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:dv,useId:Ev,unstable_isNewReconciler:!1};function zo(t,e){try{var n="",i=e;do n+=Ox(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var u1=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,nf=i),$d(t,e)},n}function Lv(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$d(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new u1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=M1.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var c1=Ai.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?lv(e,null,n,i):No(e,t.child,n,i)}function Rp(t,e,n,i,r){n=n.render;var o=e.ref;return Co(e,r),i=th(t,e,n,i,o,r),n=nh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ut&&n&&Hf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Dp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!fh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Rv(t,e,o,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ws,n(s,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=Zi(o,i),t.ref=e.ref,t.return=e,e.child=t}function Rv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ws(o,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Xd(t,e,n,i,r)}function Dv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(xo,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(xo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,rt(xo,hn),hn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,rt(xo,hn),hn|=i;return qt(t,e,r,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xd(t,e,n,i,r){var o=on(n)?Lr:Wt.current;return o=Io(e,o),Co(e,r),n=th(t,e,n,i,o,r),i=nh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ut&&i&&Hf(e),e.flags|=1,qt(t,e,n,r),e.child)}function Ip(t,e,n,i,r){if(on(n)){var o=!0;Dl(e)}else o=!1;if(Co(e,r),e.stateNode===null)ml(t,e),sv(e,n,i),jd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=on(n)?Lr:Wt.current,u=Io(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&bp(e,s,i,u),Fi=!1;var c=e.memoizedState;s.state=c,zl(e,i,s,r),l=e.memoizedState,a!==i||c!==l||rn.current||Fi?(typeof d=="function"&&(Wd(e,n,d,i),l=e.memoizedState),(a=Fi||Mp(e,n,a,i,c,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,rv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,f=e.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Lr:Wt.current,l=Io(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||c!==l)&&bp(e,s,i,l),Fi=!1,c=e.memoizedState,s.state=c,zl(e,i,s,r);var x=e.memoizedState;a!==f||c!==x||rn.current||Fi?(typeof m=="function"&&(Wd(e,n,m,i),x=e.memoizedState),(u=Fi||Mp(e,n,u,i,c,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return qd(t,e,n,i,o,r)}function qd(t,e,n,i,r,o){Iv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&_p(e,n,!1),Ci(t,e,o);i=e.stateNode,c1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=No(e,t.child,null,o),e.child=No(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&_p(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),Zf(t,e.containerInfo)}function kp(t,e,n,i,r){return ko(),jf(r),e.flags|=256,qt(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=uu(s,i,0,null),t=Tr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Kd(n),e.memoizedState=Yd,t):oh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return d1(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Zi(a,o):(o=Tr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Kd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return o=t.child,t=o.sibling,i=Zi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function oh(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&jf(i),No(e,t.child,null,n),t=oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d1(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(he(422))),Da(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),o=Tr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&No(e,t.child,null,s),e.child.memoizedState=Kd(s),e.memoizedState=Yd,o);if(!(e.mode&1))return Da(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(he(419)),i=gc(o,i,void 0),Da(t,e,s,i)}if(a=(s&t.childLanes)!==0,nn||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ti(t,r),Kn(i,t,r,-1))}return dh(),i=gc(Error(he(421))),Da(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=b1.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,mn=Xi(r.nextSibling),vn=e,ut=!0,jn=null,t!==null&&(Tn[Cn++]=_i,Tn[Cn++]=xi,Tn[Cn++]=Rr,_i=t.id,xi=t.overflow,Rr=e),e=oh(e,i.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hd(t.return,e,n)}function vc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,o);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function f1(t,e,n){switch(e.tag){case 3:kv(e),ko();break;case 5:uv(e);break;case 1:on(e.type)&&Dl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(rt(pt,pt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Ci(t,e,n)}var zv,Zd,Fv,Uv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zd=function(){};Fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(ri.current);var o=null;switch(n){case"input":r=xd(t,r),i=xd(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=wd(t,r),i=wd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ll)}bd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function os(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function h1(t,e,n){var i=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&Rl(),Vt(e),null;case 3:return i=e.stateNode,Oo(),at(rn),at(Wt),Jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(sf(jn),jn=null))),Zd(t,e),Vt(e),null;case 5:Qf(e);var r=Sr(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Vt(e),null}if(t=Sr(ri.current),La(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[Xs]=o,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ys.length;r++)ot(ys[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Wh(i,o),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ot("invalid",i);break;case"textarea":$h(i,o),ot("invalid",i)}bd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):zs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ot("scroll",i)}switch(n){case"input":Sa(i),jh(i,o,!0);break;case"textarea":Sa(i),Xh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=f0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[Xs]=i,zv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ed(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ys.length;r++)ot(ys[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Wh(t,i),r=xd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":$h(t,i),r=wd(t,i),ot("invalid",t);break;default:r=i}bd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?m0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fs(t,l):typeof l=="number"&&Fs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ot("scroll",t):l!=null&&Pf(t,o,l,s))}switch(n){case"input":Sa(t),jh(t,i,!1);break;case"textarea":Sa(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Mo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Sr(Ys.current),Sr(ri.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Vt(e),null;case 13:if(at(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&mn!==null&&e.mode&1&&!(e.flags&128))nv(),ko(),e.flags|=98560,o=!1;else if(o=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(he(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(he(317));o[ni]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else jn!==null&&(sf(jn),jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):dh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Oo(),Zd(t,e),t===null&&js(e.stateNode.containerInfo),Vt(e),null;case 10:return qf(e.type._context),Vt(e),null;case 17:return on(e.type)&&Rl(),Vt(e),null;case 19:if(at(pt),o=e.memoizedState,o===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)os(o,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Fl(t),s!==null){for(e.flags|=128,os(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>Fo&&(e.flags|=128,i=!0,os(o,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ut)return Vt(e),null}else 2*_t()-o.renderingStartTime>Fo&&n!==1073741824&&(e.flags|=128,i=!0,os(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function p1(t,e){switch(Wf(e),e.tag){case 1:return on(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),at(rn),at(Wt),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(at(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(pt),null;case 4:return Oo(),null;case 10:return qf(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ia=!1,Ht=!1,m1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function _o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Qd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Op=!1;function g1(t,e){if(Nd=Cl,t=H0(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,c=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)c=f,f=m;for(;;){if(f===t)break t;if(c===n&&++u===r&&(a=s),c===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Od={focusedElem:t,selectionRange:n},Cl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Hn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return x=Op,Op=!1,x}function Ls(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Qd(e,n,o)}r=r.next}while(r!==i)}}function au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bv(t){var e=t.alternate;e!==null&&(t.alternate=null,Bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Xs],delete e[Ud],delete e[Qy],delete e[Jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var Nt=null,Wn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Gv(t,e,n),n=n.sibling}function Gv(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Ht||_o(n,e);case 6:var i=Nt,r=Wn;Nt=null,Li(t,e,n),Nt=i,Wn=r,Nt!==null&&(Wn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Wn?(t=Nt,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),Gs(t)):cc(Nt,n.stateNode));break;case 4:i=Nt,r=Wn,Nt=n.stateNode.containerInfo,Wn=!0,Li(t,e,n),Nt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Qd(n,e,s),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Ht&&(_o(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Li(t,e,n),Ht=i):Li(t,e,n);break;default:Li(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new m1),e.forEach(function(i){var r=E1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Wn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Nt===null)throw Error(he(160));Gv(o,s,r),Nt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hv(e,t),e=e.sibling}function Hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{Ls(3,t,t.return),au(3,t)}catch(h){vt(t,t.return,h)}try{Ls(5,t,t.return)}catch(h){vt(t,t.return,h)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&_o(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&_o(n,n.return),t.flags&32){var r=t.stateNode;try{Fs(r,"")}catch(h){vt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&c0(r,o),Ed(a,s);var u=Ed(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?m0(r,f):d==="dangerouslySetInnerHTML"?h0(r,f):d==="children"?Fs(r,f):Pf(r,d,f,u)}switch(a){case"input":yd(r,o);break;case"textarea":d0(r,o);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Mo(r,!!o.multiple,m,!1):c!==!!o.multiple&&(o.defaultValue!=null?Mo(r,!!o.multiple,o.defaultValue,!0):Mo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Xs]=o}catch(h){vt(t,t.return,h)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(h){vt(t,t.return,h)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(h){vt(t,t.return,h)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=_t())),i&4&&Fp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||d,On(e,t),Ht=u):On(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Me=t,d=t.child;d!==null;){for(f=Me=d;Me!==null;){switch(c=Me,m=c.child,c.tag){case 0:case 11:case 14:case 15:Ls(4,c,c.return);break;case 1:_o(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){vt(i,n,h)}}break;case 5:_o(c,c.return);break;case 22:if(c.memoizedState!==null){Bp(f);continue}}m!==null?(m.return=c,Me=m):Bp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p0("display",s))}catch(h){vt(t,t.return,h)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){vt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Qn(t),i&4&&Fp(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fs(r,""),i.flags&=-33);var o=zp(t);tf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=zp(t);ef(t,a,s);break;default:throw Error(he(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){Me=t,Wv(t)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ia;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Ia;var u=Ht;if(Ia=s,(Ht=l)&&!u)for(Me=r;Me!==null;)s=Me,l=s.child,s.tag===22&&s.memoizedState!==null?Vp(r):l!==null?(l.return=s,Me=l):Vp(r);for(;o!==null;)Me=o,Wv(o),o=o.sibling;Me=r,Ia=a,Ht=u}Up(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Me=o):Up(t)}}function Up(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&wp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Gs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Ht||e.flags&512&&Jd(e)}catch(c){vt(e,e.return,c)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Bp(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Vp(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{au(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var o=e.return;try{Jd(e)}catch(l){vt(e,o,l)}break;case 5:var s=e.return;try{Jd(e)}catch(l){vt(e,s,l)}}}catch(l){vt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var _1=Math.ceil,Vl=Ai.ReactCurrentDispatcher,sh=Ai.ReactCurrentOwner,Rn=Ai.ReactCurrentBatchConfig,Ke=0,It=null,Mt=null,Ft=0,hn=0,xo=rr(0),Ct=0,Js=null,Ir=0,lu=0,ah=0,Rs=null,en=null,lh=0,Fo=1/0,pi=null,Gl=!1,nf=null,Yi=null,ka=!1,Gi=null,Hl=0,Ds=0,rf=null,gl=-1,vl=0;function Kt(){return Ke&6?_t():gl!==-1?gl:gl=_t()}function Ki(t){return t.mode&1?Ke&2&&Ft!==0?Ft&-Ft:t1.transition!==null?(vl===0&&(vl=C0()),vl):(t=et,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function Kn(t,e,n,i){if(50<Ds)throw Ds=0,rf=null,Error(he(185));ua(t,n,i),(!(Ke&2)||t!==It)&&(t===It&&(!(Ke&2)&&(lu|=n),Ct===4&&Bi(t,Ft)),sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Fo=_t()+500,ru&&or()))}function sn(t,e){var n=t.callbackNode;ty(t,e);var i=Tl(t,t===It?Ft:0);if(i===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?e1(Gp.bind(null,t)):J0(Gp.bind(null,t)),Ky(function(){!(Ke&6)&&or()}),n=null;else{switch(A0(i)){case 1:n=kf;break;case 4:n=E0;break;case 16:n=El;break;case 536870912:n=T0;break;default:n=El}n=Qv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(gl=-1,vl=0,Ke&6)throw Error(he(327));var n=t.callbackNode;if(Ao()&&t.callbackNode!==n)return null;var i=Tl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wl(t,i);else{e=i;var r=Ke;Ke|=2;var o=Xv();(It!==t||Ft!==e)&&(pi=null,Fo=_t()+500,Er(t,e));do try{S1();break}catch(a){$v(t,a)}while(1);Xf(),Vl.current=o,Ke=r,Mt!==null?e=0:(It=null,Ft=0,e=Ct)}if(e!==0){if(e===2&&(r=Ld(t),r!==0&&(i=r,e=of(t,r))),e===1)throw n=Js,Er(t,0),Bi(t,i),sn(t,_t()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!x1(r)&&(e=Wl(t,i),e===2&&(o=Ld(t),o!==0&&(i=o,e=of(t,o))),e===1))throw n=Js,Er(t,0),Bi(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:mr(t,en,pi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=lh+500-_t(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fd(mr.bind(null,t,en,pi),e);break}mr(t,en,pi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Yn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_1(i/1960))-i,10<i){t.timeoutHandle=Fd(mr.bind(null,t,en,pi),i);break}mr(t,en,pi);break;case 5:mr(t,en,pi);break;default:throw Error(he(329))}}}return sn(t,_t()),t.callbackNode===n?jv.bind(null,t):null}function of(t,e){var n=Rs;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=en,en=n,e!==null&&sf(e)),t}function sf(t){en===null?en=t:en.push.apply(en,t)}function x1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Zn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~ah,e&=~lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if(Ke&6)throw Error(he(327));Ao();var e=Tl(t,0);if(!(e&1))return sn(t,_t()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var i=Ld(t);i!==0&&(e=i,n=of(t,i))}if(n===1)throw n=Js,Er(t,0),Bi(t,e),sn(t,_t()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,en,pi),sn(t,_t()),null}function uh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Fo=_t()+500,ru&&or())}}function kr(t){Gi!==null&&Gi.tag===0&&!(Ke&6)&&Ao();var e=Ke;Ke|=1;var n=Rn.transition,i=et;try{if(Rn.transition=null,et=1,t)return t()}finally{et=i,Rn.transition=n,Ke=e,!(Ke&6)&&or()}}function ch(){hn=xo.current,at(xo)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:Oo(),at(rn),at(Wt),Jf();break;case 5:Qf(i);break;case 4:Oo();break;case 13:at(pt);break;case 19:at(pt);break;case 10:qf(i.type._context);break;case 22:case 23:ch()}n=n.return}if(It=t,Mt=t=Zi(t.current,null),Ft=hn=e,Ct=0,Js=null,ah=lu=Ir=0,en=Rs=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}yr=null}return t}function $v(t,e){do{var n=Mt;try{if(Xf(),hl.current=Bl,Ul){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Dr=0,Dt=Tt=mt=null,Ps=!1,Ks=0,sh.current=null,n===null||n.return===null){Ct=1,Js=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Pp(s);if(m!==null){m.flags&=-257,Lp(m,s,a,o,e),m.mode&1&&Ap(o,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Ap(o,u,e),dh();break e}l=Error(he(426))}}else if(ut&&a.mode&1){var p=Pp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Lp(p,s,a,o,e),jf(zo(l,a));break e}}o=l=zo(l,a),Ct!==4&&(Ct=2),Rs===null?Rs=[o]:Rs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=Pv(o,l,e);Sp(o,g);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Yi===null||!Yi.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Lv(o,a,e);Sp(o,y);break e}}o=o.return}while(o!==null)}Yv(n)}catch(w){e=w,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function Xv(){var t=Vl.current;return Vl.current=Bl,t===null?Bl:t}function dh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Ir&268435455)&&!(lu&268435455)||Bi(It,Ft)}function Wl(t,e){var n=Ke;Ke|=2;var i=Xv();(It!==t||Ft!==e)&&(pi=null,Er(t,e));do try{y1();break}catch(r){$v(t,r)}while(1);if(Xf(),Ke=n,Vl.current=i,Mt!==null)throw Error(he(261));return It=null,Ft=0,Ct}function y1(){for(;Mt!==null;)qv(Mt)}function S1(){for(;Mt!==null&&!$x();)qv(Mt)}function qv(t){var e=Zv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Yv(t):Mt=e,sh.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=p1(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Mt=null;return}}else if(n=h1(n,e,hn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Ct===0&&(Ct=5)}function mr(t,e,n){var i=et,r=Rn.transition;try{Rn.transition=null,et=1,w1(t,e,n,i)}finally{Rn.transition=r,et=i}return null}function w1(t,e,n,i){do Ao();while(Gi!==null);if(Ke&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ny(t,o),t===It&&(Mt=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Qv(El,function(){return Ao(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var s=et;et=1;var a=Ke;Ke|=4,sh.current=null,g1(t,n),Hv(n,t),Gy(Od),Cl=!!Nd,Od=Nd=null,t.current=n,v1(n),Xx(),Ke=a,et=s,Rn.transition=o}else t.current=n;if(ka&&(ka=!1,Gi=t,Hl=r),o=t.pendingLanes,o===0&&(Yi=null),Kx(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=nf,nf=null,t;return Hl&1&&t.tag!==0&&Ao(),o=t.pendingLanes,o&1?t===rf?Ds++:(Ds=0,rf=t):Ds=0,or(),null}function Ao(){if(Gi!==null){var t=A0(Hl),e=Rn.transition,n=et;try{if(Rn.transition=null,et=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,Hl=0,Ke&6)throw Error(he(331));var r=Ke;for(Ke|=4,Me=t.current;Me!==null;){var o=Me,s=o.child;if(Me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var d=Me;switch(d.tag){case 0:case 11:case 15:Ls(8,d,o)}var f=d.child;if(f!==null)f.return=d,Me=f;else for(;Me!==null;){d=Me;var c=d.sibling,m=d.return;if(Bv(d),d===u){Me=null;break}if(c!==null){c.return=m,Me=c;break}Me=m}}}var x=o.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}Me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Me=s;else e:for(;Me!==null;){if(o=Me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ls(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,Me=g;break e}Me=o.return}}var v=t.current;for(Me=v;Me!==null;){s=Me;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Me=_;else e:for(s=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:au(9,a)}}catch(w){vt(a,a.return,w)}if(a===s){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(Ke=r,or(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Jl,t)}catch{}i=!0}return i}finally{et=n,Rn.transition=e}}return!1}function Hp(t,e,n){e=zo(n,e),e=Pv(t,e,1),t=qi(t,e,1),e=Kt(),t!==null&&(ua(t,1,e),sn(t,e))}function vt(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=zo(n,t),t=Lv(e,t,1),e=qi(e,t,1),t=Kt(),e!==null&&(ua(e,1,t),sn(e,t));break}}e=e.return}}function M1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>_t()-lh?Er(t,0):ah|=n),sn(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=Kt();t=Ti(t,e),t!==null&&(ua(t,e,n),sn(t,n))}function b1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function E1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),Kv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,f1(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ut&&e.flags&1048576&&ev(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Io(e,Wt.current);Co(e,n),r=th(null,e,i,t,r,n);var o=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(o=!0,Dl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=ou,e.stateNode=r,r._reactInternals=e,jd(e,i,t,n),e=qd(null,e,i,!0,o,n)):(e.tag=0,ut&&o&&Hf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=C1(i),t=Hn(i,t),r){case 0:e=Xd(null,e,i,t,n);break e;case 1:e=Ip(null,e,i,t,n);break e;case 11:e=Rp(null,e,i,t,n);break e;case 14:e=Dp(null,e,i,Hn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Xd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ip(t,e,i,r,n);case 3:e:{if(kv(e),t===null)throw Error(he(387));i=e.pendingProps,o=e.memoizedState,r=o.element,rv(t,e),zl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=zo(Error(he(423)),e),e=kp(t,e,i,n,r);break e}else if(i!==r){r=zo(Error(he(424)),e),e=kp(t,e,i,n,r);break e}else for(mn=Xi(e.stateNode.containerInfo.firstChild),vn=e,ut=!0,jn=null,n=lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),i===r){e=Ci(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return uv(e),t===null&&Gd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,zd(i,r)?s=null:o!==null&&zd(i,o)&&(e.flags|=32),Iv(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Nv(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=No(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Rp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,rt(Nl,i._currentValue),i._currentValue=s,o!==null)if(Zn(o.value,s)){if(o.children===r.children&&!rn.current){e=Ci(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(he(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Co(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Dp(t,e,i,r,n);case 15:return Rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),ml(t,e),e.tag=1,on(i)?(t=!0,Dl(e)):t=!1,Co(e,n),sv(e,i,r),jd(e,i,r,n),qd(null,e,i,!0,t,n);case 19:return Ov(t,e,n);case 22:return Dv(t,e,n)}throw Error(he(156,e.tag))};function Qv(t,e){return b0(t,e)}function T1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new T1(t,e,n,i)}function fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C1(t){if(typeof t=="function")return fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Df)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")fh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case lo:return Tr(n.children,r,o,e);case Lf:s=8,r|=8;break;case md:return t=Ln(12,n,e,r|2),t.elementType=md,t.lanes=o,t;case gd:return t=Ln(13,n,e,r),t.elementType=gd,t.lanes=o,t;case vd:return t=Ln(19,n,e,r),t.elementType=vd,t.lanes=o,t;case a0:return uu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:s=10;break e;case s0:s=9;break e;case Rf:s=11;break e;case Df:s=14;break e;case zi:s=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Tr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=a0,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,o,s,a,l){return t=new A1(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(o),t}function P1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jv(t){if(!t)return tr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(on(n))return Q0(t,n,e)}return e}function e_(t,e,n,i,r,o,s,a,l){return t=hh(n,i,!0,t,r,o,s,a,l),t.context=Jv(null),n=t.current,i=Kt(),r=Ki(n),o=Si(i,r),o.callback=e??null,qi(n,o,r),t.current.lanes=r,ua(t,r,i),sn(t,i),t}function cu(t,e,n,i){var r=e.current,o=Kt(),s=Ki(r);return n=Jv(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,s),t!==null&&(Kn(t,r,s,o),fl(t,r,s)),s}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function L1(){return null}var t_=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}du.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));cu(t,e,null,null)};du.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){cu(null,t,null,null)}),e[Ei]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&I0(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function R1(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=jl(s);o.call(u)}}var s=e_(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=s,t[Ei]=s.current,js(t.nodeType===8?t.parentNode:t),kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=jl(l);a.call(u)}}var l=hh(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=l,t[Ei]=l.current,js(t.nodeType===8?t.parentNode:t),kr(function(){cu(e,l,n,i)}),l}function hu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=jl(s);a.call(l)}}cu(e,s,t,r)}else s=R1(n,e,t,r,i);return jl(s)}P0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xs(e.pendingLanes);n!==0&&(Nf(e,n|1),sn(e,_t()),!(Ke&6)&&(Fo=_t()+500,or()))}break;case 13:kr(function(){var i=Ti(t,1);if(i!==null){var r=Kt();Kn(i,t,1,r)}}),ph(t,1)}};Of=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Kt();Kn(e,t,134217728,n)}ph(t,134217728)}};L0=function(t){if(t.tag===13){var e=Ki(t),n=Ti(t,e);if(n!==null){var i=Kt();Kn(n,t,e,i)}ph(t,e)}};R0=function(){return et};D0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Cd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=iu(i);if(!r)throw Error(he(90));u0(i),yd(i,r)}}}break;case"textarea":d0(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};_0=uh;x0=kr;var D1={usingClientEntryPoint:!1,Events:[da,ho,iu,g0,v0,uh]},ss={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I1={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w0(t),t===null?null:t.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{Jl=Na.inject(I1),ii=Na}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(he(200));return P1(t,e,null,n)};yn.createRoot=function(t,e){if(!gh(t))throw Error(he(299));var n=!1,i="",r=t_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,js(t.nodeType===8?t.parentNode:t),new mh(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=w0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return kr(t)};yn.hydrate=function(t,e,n){if(!fu(e))throw Error(he(200));return hu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=t_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=e_(e,null,t,1,n??null,r,!1,o,s),t[Ei]=e.current,js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};yn.render=function(t,e,n){if(!fu(e))throw Error(he(200));return hu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(he(40));return t._reactRootContainer?(kr(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};yn.unstable_batchedUpdates=uh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return hu(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=yn})(Lx);var $p=fd;dd.createRoot=$p.createRoot,dd.hydrateRoot=$p.hydrateRoot;const k1=""+new URL("logo_site_quiz-9f69bfc6.png",import.meta.url).href,N1=""+new URL("user_icon-845ba611.png",import.meta.url).href,O1=""+new URL("glass_icon-4f5a244e.png",import.meta.url).href;var $l={},z1={get exports(){return $l},set exports(t){$l=t}},tt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=Symbol.for("react.element"),_h=Symbol.for("react.portal"),pu=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),vu=Symbol.for("react.provider"),_u=Symbol.for("react.context"),F1=Symbol.for("react.server_context"),xu=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),wu=Symbol.for("react.memo"),Mu=Symbol.for("react.lazy"),U1=Symbol.for("react.offscreen"),n_;n_=Symbol.for("react.module.reference");function kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vh:switch(t=t.type,t){case pu:case gu:case mu:case yu:case Su:return t;default:switch(t=t&&t.$$typeof,t){case F1:case _u:case xu:case Mu:case wu:case vu:return t;default:return e}}case _h:return e}}}tt.ContextConsumer=_u;tt.ContextProvider=vu;tt.Element=vh;tt.ForwardRef=xu;tt.Fragment=pu;tt.Lazy=Mu;tt.Memo=wu;tt.Portal=_h;tt.Profiler=gu;tt.StrictMode=mu;tt.Suspense=yu;tt.SuspenseList=Su;tt.isAsyncMode=function(){return!1};tt.isConcurrentMode=function(){return!1};tt.isContextConsumer=function(t){return kn(t)===_u};tt.isContextProvider=function(t){return kn(t)===vu};tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vh};tt.isForwardRef=function(t){return kn(t)===xu};tt.isFragment=function(t){return kn(t)===pu};tt.isLazy=function(t){return kn(t)===Mu};tt.isMemo=function(t){return kn(t)===wu};tt.isPortal=function(t){return kn(t)===_h};tt.isProfiler=function(t){return kn(t)===gu};tt.isStrictMode=function(t){return kn(t)===mu};tt.isSuspense=function(t){return kn(t)===yu};tt.isSuspenseList=function(t){return kn(t)===Su};tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===pu||t===gu||t===mu||t===yu||t===Su||t===U1||typeof t=="object"&&t!==null&&(t.$$typeof===Mu||t.$$typeof===wu||t.$$typeof===vu||t.$$typeof===_u||t.$$typeof===xu||t.$$typeof===n_||t.getModuleId!==void 0)};tt.typeOf=kn;(function(t){t.exports=tt})(z1);function B1(t){function e(D,B,j,Q,E){for(var ge=0,q=0,ve=0,ue=0,Ee,me,xe=0,Oe=0,Ae,ke=Ae=Ee=0,Pe=0,Re=0,Ne=0,Ye=0,ft=j.length,A=ft-1,M,U="",L="",k="",V="",oe;Pe<ft;){if(me=j.charCodeAt(Pe),Pe===A&&q+ue+ve+ge!==0&&(q!==0&&(me=q===47?10:47),ue=ve=ge=0,ft++,A++),q+ue+ve+ge===0){if(Pe===A&&(0<Re&&(U=U.replace(c,"")),0<U.trim().length)){switch(me){case 32:case 9:case 59:case 13:case 10:break;default:U+=j.charAt(Pe)}me=59}switch(me){case 123:for(U=U.trim(),Ee=U.charCodeAt(0),Ae=1,Ye=++Pe;Pe<ft;){switch(me=j.charCodeAt(Pe)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(me=j.charCodeAt(Pe+1)){case 42:case 47:e:{for(ke=Pe+1;ke<A;++ke)switch(j.charCodeAt(ke)){case 47:if(me===42&&j.charCodeAt(ke-1)===42&&Pe+2!==ke){Pe=ke+1;break e}break;case 10:if(me===47){Pe=ke+1;break e}}Pe=ke}}break;case 91:me++;case 40:me++;case 34:case 39:for(;Pe++<A&&j.charCodeAt(Pe)!==me;);}if(Ae===0)break;Pe++}switch(Ae=j.substring(Ye,Pe),Ee===0&&(Ee=(U=U.replace(f,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<Re&&(U=U.replace(c,"")),me=U.charCodeAt(1),me){case 100:case 109:case 115:case 45:Re=B;break;default:Re=le}if(Ae=e(B,Re,Ae,me,E+1),Ye=Ae.length,0<O&&(Re=n(le,U,Ne),oe=a(3,Ae,Re,B,G,ee,Ye,me,E,Q),U=Re.join(""),oe!==void 0&&(Ye=(Ae=oe.trim()).length)===0&&(me=0,Ae="")),0<Ye)switch(me){case 115:U=U.replace(P,s);case 100:case 109:case 45:Ae=U+"{"+Ae+"}";break;case 107:U=U.replace(v,"$1 $2"),Ae=U+"{"+Ae+"}",Ae=K===1||K===2&&o("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=U+Ae,Q===112&&(Ae=(L+=Ae,""))}else Ae="";break;default:Ae=e(B,n(B,U,Ne),Ae,Q,E+1)}k+=Ae,Ae=Ne=Re=ke=Ee=0,U="",me=j.charCodeAt(++Pe);break;case 125:case 59:if(U=(0<Re?U.replace(c,""):U).trim(),1<(Ye=U.length))switch(ke===0&&(Ee=U.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(Ye=(U=U.replace(" ",":")).length),0<O&&(oe=a(1,U,B,D,G,ee,L.length,Q,E,Q))!==void 0&&(Ye=(U=oe.trim()).length)===0&&(U="\0\0"),Ee=U.charCodeAt(0),me=U.charCodeAt(1),Ee){case 0:break;case 64:if(me===105||me===99){V+=U+j.charAt(Pe);break}default:U.charCodeAt(Ye-1)!==58&&(L+=r(U,Ee,me,U.charCodeAt(2)))}Ne=Re=ke=Ee=0,U="",me=j.charCodeAt(++Pe)}}switch(me){case 13:case 10:q===47?q=0:1+Ee===0&&Q!==107&&0<U.length&&(Re=1,U+="\0"),0<O*X&&a(0,U,B,D,G,ee,L.length,Q,E,Q),ee=1,G++;break;case 59:case 125:if(q+ue+ve+ge===0){ee++;break}default:switch(ee++,M=j.charAt(Pe),me){case 9:case 32:if(ue+ge+q===0)switch(xe){case 44:case 58:case 9:case 32:M="";break;default:me!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:ue+q+ge===0&&(Re=Ne=1,M="\f"+M);break;case 108:if(ue+q+ge+F===0&&0<ke)switch(Pe-ke){case 2:xe===112&&j.charCodeAt(Pe-3)===58&&(F=xe);case 8:Oe===111&&(F=Oe)}break;case 58:ue+q+ge===0&&(ke=Pe);break;case 44:q+ve+ue+ge===0&&(Re=1,M+="\r");break;case 34:case 39:q===0&&(ue=ue===me?0:ue===0?me:ue);break;case 91:ue+q+ve===0&&ge++;break;case 93:ue+q+ve===0&&ge--;break;case 41:ue+q+ge===0&&ve--;break;case 40:if(ue+q+ge===0){if(Ee===0)switch(2*xe+3*Oe){case 533:break;default:Ee=1}ve++}break;case 64:q+ve+ue+ge+ke+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<ue+ge+ve))switch(q){case 0:switch(2*me+3*j.charCodeAt(Pe+1)){case 235:q=47;break;case 220:Ye=Pe,q=42}break;case 42:me===47&&xe===42&&Ye+2!==Pe&&(j.charCodeAt(Ye+2)===33&&(L+=j.substring(Ye,Pe+1)),M="",q=0)}}q===0&&(U+=M)}Oe=xe,xe=me,Pe++}if(Ye=L.length,0<Ye){if(Re=B,0<O&&(oe=a(2,L,Re,D,G,ee,Ye,Q,E,Q),oe!==void 0&&(L=oe).length===0))return V+L+k;if(L=Re.join(",")+"{"+L+"}",K*F!==0){switch(K!==2||o(L,2)||(F=0),F){case 111:L=L.replace(y,":-moz-$1")+L;break;case 112:L=L.replace(_,"::-webkit-input-$1")+L.replace(_,"::-moz-$1")+L.replace(_,":-ms-input-$1")+L}F=0}}return V+L+k}function n(D,B,j){var Q=B.trim().split(p);B=Q;var E=Q.length,ge=D.length;switch(ge){case 0:case 1:var q=0;for(D=ge===0?"":D[0]+" ";q<E;++q)B[q]=i(D,B[q],j).trim();break;default:var ve=q=0;for(B=[];q<E;++q)for(var ue=0;ue<ge;++ue)B[ve++]=i(D[ue]+" ",Q[q],j).trim()}return B}function i(D,B,j){var Q=B.charCodeAt(0);switch(33>Q&&(Q=(B=B.trim()).charCodeAt(0)),Q){case 38:return B.replace(g,"$1"+D.trim());case 58:return D.trim()+B.replace(g,"$1"+D.trim());default:if(0<1*j&&0<B.indexOf("\f"))return B.replace(g,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+B}function r(D,B,j,Q){var E=D+";",ge=2*B+3*j+4*Q;if(ge===944){D=E.indexOf(":",9)+1;var q=E.substring(D,E.length-1).trim();return q=E.substring(0,D).trim()+q+";",K===1||K===2&&o(q,1)?"-webkit-"+q+q:q}if(K===0||K===2&&!o(E,1))return E;switch(ge){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Z,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return q=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+q+"-webkit-"+E+"-ms-flex-pack"+q+E;case 1005:return x.test(E)?E.replace(m,":-webkit-")+E.replace(m,":-moz-")+E:E;case 1e3:switch(q=E.substring(13).trim(),B=q.indexOf("-")+1,q.charCodeAt(0)+q.charCodeAt(B)){case 226:q=E.replace(w,"tb");break;case 232:q=E.replace(w,"tb-rl");break;case 220:q=E.replace(w,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+q+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(B=(E=D).length-10,q=(E.charCodeAt(B)===33?E.substring(0,B):E).substring(D.indexOf(":",7)+1).trim(),ge=q.charCodeAt(0)+(q.charCodeAt(7)|0)){case 203:if(111>q.charCodeAt(8))break;case 115:E=E.replace(q,"-webkit-"+q)+";"+E;break;case 207:case 102:E=E.replace(q,"-webkit-"+(102<ge?"inline-":"")+"box")+";"+E.replace(q,"-webkit-"+q)+";"+E.replace(q,"-ms-"+q+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return q=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+q+"-ms-flex-"+q+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(S,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(S,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(I.test(D)===!0)return(q=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?r(D.replace("stretch","fill-available"),B,j,Q).replace(":fill-available",":stretch"):E.replace(q,"-webkit-"+q)+E.replace(q,"-moz-"+q.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,j+Q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+E}return E}function o(D,B){var j=D.indexOf(B===1?":":"{"),Q=D.substring(0,B!==3?j:10);return j=D.substring(j+1,D.length-1),Y(B!==2?Q:Q.replace(C,"$1"),j,B)}function s(D,B){var j=r(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return j!==B+";"?j.replace(R," or ($1)").substring(4):"("+B+")"}function a(D,B,j,Q,E,ge,q,ve,ue,Ee){for(var me=0,xe=B,Oe;me<O;++me)switch(Oe=ne[me].call(d,D,xe,j,Q,E,ge,q,ve,ue,Ee)){case void 0:case!1:case!0:case null:break;default:xe=Oe}if(xe!==B)return xe}function l(D){switch(D){case void 0:case null:O=ne.length=0;break;default:if(typeof D=="function")ne[O++]=D;else if(typeof D=="object")for(var B=0,j=D.length;B<j;++B)l(D[B]);else X=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(Y=null,D?typeof D!="function"?K=1:(K=2,Y=D):K=0),u}function d(D,B){var j=D;if(33>j.charCodeAt(0)&&(j=j.trim()),pe=j,j=[pe],0<O){var Q=a(-1,B,j,j,G,ee,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(B=Q)}var E=e(le,j,B,0,0);return 0<O&&(Q=a(-2,E,j,j,G,ee,E.length,0,0,0),Q!==void 0&&(E=Q)),pe="",F=0,ee=G=1,E}var f=/^\0+/g,c=/[\0\r\f]/g,m=/: */g,x=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,y=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,S=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,Z=/([^-])(image-set\()/,ee=1,G=1,F=0,K=1,le=[],ne=[],O=0,Y=null,X=0,pe="";return d.use=l,d.set=u,t!==void 0&&u(t),d}var V1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function G1(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var H1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xp=G1(function(t){return H1.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),af={},W1={get exports(){return af},set exports(t){af=t}},nt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=typeof Symbol=="function"&&Symbol.for,xh=kt?Symbol.for("react.element"):60103,yh=kt?Symbol.for("react.portal"):60106,bu=kt?Symbol.for("react.fragment"):60107,Eu=kt?Symbol.for("react.strict_mode"):60108,Tu=kt?Symbol.for("react.profiler"):60114,Cu=kt?Symbol.for("react.provider"):60109,Au=kt?Symbol.for("react.context"):60110,Sh=kt?Symbol.for("react.async_mode"):60111,Pu=kt?Symbol.for("react.concurrent_mode"):60111,Lu=kt?Symbol.for("react.forward_ref"):60112,Ru=kt?Symbol.for("react.suspense"):60113,j1=kt?Symbol.for("react.suspense_list"):60120,Du=kt?Symbol.for("react.memo"):60115,Iu=kt?Symbol.for("react.lazy"):60116,$1=kt?Symbol.for("react.block"):60121,X1=kt?Symbol.for("react.fundamental"):60117,q1=kt?Symbol.for("react.responder"):60118,Y1=kt?Symbol.for("react.scope"):60119;function wn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xh:switch(t=t.type,t){case Sh:case Pu:case bu:case Tu:case Eu:case Ru:return t;default:switch(t=t&&t.$$typeof,t){case Au:case Lu:case Iu:case Du:case Cu:return t;default:return e}}case yh:return e}}}function i_(t){return wn(t)===Pu}nt.AsyncMode=Sh;nt.ConcurrentMode=Pu;nt.ContextConsumer=Au;nt.ContextProvider=Cu;nt.Element=xh;nt.ForwardRef=Lu;nt.Fragment=bu;nt.Lazy=Iu;nt.Memo=Du;nt.Portal=yh;nt.Profiler=Tu;nt.StrictMode=Eu;nt.Suspense=Ru;nt.isAsyncMode=function(t){return i_(t)||wn(t)===Sh};nt.isConcurrentMode=i_;nt.isContextConsumer=function(t){return wn(t)===Au};nt.isContextProvider=function(t){return wn(t)===Cu};nt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xh};nt.isForwardRef=function(t){return wn(t)===Lu};nt.isFragment=function(t){return wn(t)===bu};nt.isLazy=function(t){return wn(t)===Iu};nt.isMemo=function(t){return wn(t)===Du};nt.isPortal=function(t){return wn(t)===yh};nt.isProfiler=function(t){return wn(t)===Tu};nt.isStrictMode=function(t){return wn(t)===Eu};nt.isSuspense=function(t){return wn(t)===Ru};nt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bu||t===Pu||t===Tu||t===Eu||t===Ru||t===j1||typeof t=="object"&&t!==null&&(t.$$typeof===Iu||t.$$typeof===Du||t.$$typeof===Cu||t.$$typeof===Au||t.$$typeof===Lu||t.$$typeof===X1||t.$$typeof===q1||t.$$typeof===Y1||t.$$typeof===$1)};nt.typeOf=wn;(function(t){t.exports=nt})(W1);var wh=af,K1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh={};Mh[wh.ForwardRef]=Q1;Mh[wh.Memo]=r_;function qp(t){return wh.isMemo(t)?r_:Mh[t.$$typeof]||K1}var J1=Object.defineProperty,eS=Object.getOwnPropertyNames,Yp=Object.getOwnPropertySymbols,tS=Object.getOwnPropertyDescriptor,nS=Object.getPrototypeOf,Kp=Object.prototype;function o_(t,e,n){if(typeof e!="string"){if(Kp){var i=nS(e);i&&i!==Kp&&o_(t,i,n)}var r=eS(e);Yp&&(r=r.concat(Yp(e)));for(var o=qp(t),s=qp(e),a=0;a<r.length;++a){var l=r[a];if(!Z1[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=tS(e,l);try{J1(t,l,u)}catch{}}}}return t}var iS=o_;function yi(){return(yi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var Zp=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},lf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!$l.typeOf(t)},Xl=Object.freeze([]),Qi=Object.freeze({});function ea(t){return typeof t=="function"}function Qp(t){return t.displayName||t.name||"Component"}function bh(t){return t&&typeof t.styledComponentId=="string"}var Uo=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Eh=typeof window<"u"&&"HTMLElement"in window,rS=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function ha(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var oS=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,s=o;n>=s;)(s<<=1)<0&&ha(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=i.length;u<d;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),o=r+i;this.groupSizes[n]=0;for(var s=r;s<o;s++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],o=this.indexOfGroup(n),s=o+r,a=o;a<s;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),xl=new Map,ql=new Map,Is=1,Oa=function(t){if(xl.has(t))return xl.get(t);for(;ql.has(Is);)Is++;var e=Is++;return xl.set(t,e),ql.set(e,t),e},sS=function(t){return ql.get(t)},aS=function(t,e){e>=Is&&(Is=e+1),xl.set(t,e),ql.set(e,t)},lS="style["+Uo+'][data-styled-version="5.3.6"]',uS=new RegExp("^"+Uo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),cS=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},dS=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,o=n.length;r<o;r++){var s=n[r].trim();if(s){var a=s.match(uS);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(aS(u,l),cS(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(s)}}},fS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},s_=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(Uo))return d}}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(Uo,"active"),i.setAttribute("data-styled-version","5.3.6");var s=fS();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},hS=function(){function t(n){var i=this.element=s_(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===r)return l}ha(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),pS=function(){function t(n){var i=this.element=s_(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),o=this.nodes[n];return this.element.insertBefore(r,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),mS=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Jp=Eh,gS={isServer:!Eh,useCSSOMInjection:!rS},a_=function(){function t(n,i,r){n===void 0&&(n=Qi),i===void 0&&(i={}),this.options=yi({},gS,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Eh&&Jp&&(Jp=!1,function(o){for(var s=document.querySelectorAll(lS),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Uo)!=="active"&&(dS(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Oa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(yi({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,o=i.useCSSOMInjection,s=i.target,n=r?new mS(s):o?new hS(s):new pS(s),new oS(n)));var n,i,r,o,s},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(Oa(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(Oa(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Oa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,o="",s=0;s<r;s++){var a=sS(s);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(s);if(l&&u&&l.size){var d=Uo+".g"+s+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(c){c.length>0&&(f+=c+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},t}(),vS=/(a)(d)/gi,em=function(t){return String.fromCharCode(t+(t>25?39:97))};function uf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=em(e%52)+n;return(em(e%52)+n).replace(vS,"$1-$2")}var yo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},l_=function(t){return yo(5381,t)};function _S(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ea(n)&&!bh(n))return!1}return!0}var xS=l_("5.3.6"),yS=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&_S(e),this.componentId=n,this.baseHash=yo(xS,n),this.baseStyle=i,a_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Bo(this.rules,e,n,i).join(""),a=uf(yo(this.baseHash,s)>>>0);if(!n.hasNameForId(r,a)){var l=i(s,"."+a,void 0,r);n.insertRules(r,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=yo(this.baseHash,i.hash),f="",c=0;c<u;c++){var m=this.rules[c];if(typeof m=="string")f+=m;else if(m){var x=Bo(m,e,n,i),h=Array.isArray(x)?x.join(""):x;d=yo(d,h+c),f+=h}}if(f){var p=uf(d>>>0);if(!n.hasNameForId(r,p)){var g=i(f,"."+p,void 0,r);n.insertRules(r,p,g)}o.push(p)}}return o.join(" ")},t}(),SS=/^\s*\/\/.*$/gm,wS=[":","[",".","#"];function MS(t){var e,n,i,r,o=t===void 0?Qi:t,s=o.options,a=s===void 0?Qi:s,l=o.plugins,u=l===void 0?Xl:l,d=new B1(a),f=[],c=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,v,_,y,w,P,R,S,C,I){switch(g){case 1:if(C===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(S===0)return v+"/*|*/";break;case 3:switch(S){case 102:case 112:return h(_[0]+v),"";default:return v+(I===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(p)}}}(function(h){f.push(h)}),m=function(h,p,g){return p===0&&wS.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function x(h,p,g,v){v===void 0&&(v="&");var _=h.replace(SS,""),y=p&&g?g+" "+p+" { "+_+" }":_;return e=v,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),d(g||!p?"":p,y)}return d.use([].concat(u,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,m))},c,function(h){if(h===-2){var p=f;return f=[],p}}])),x.hash=u.length?u.reduce(function(h,p){return p.name||ha(15),yo(h,p.name)},5381).toString():"",x}var u_=la.createContext();u_.Consumer;var c_=la.createContext(),bS=(c_.Consumer,new a_),cf=MS();function ES(){return ye.useContext(u_)||bS}function TS(){return ye.useContext(c_)||cf}var CS=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=cf);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.toString=function(){return ha(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=cf),this.name+e.hash},t}(),AS=/([A-Z])/,PS=/([A-Z])/g,LS=/^ms-/,RS=function(t){return"-"+t.toLowerCase()};function tm(t){return AS.test(t)?t.replace(PS,RS).replace(LS,"-ms-"):t}var nm=function(t){return t==null||t===!1||t===""};function Bo(t,e,n,i){if(Array.isArray(t)){for(var r,o=[],s=0,a=t.length;s<a;s+=1)(r=Bo(t[s],e,n,i))!==""&&(Array.isArray(r)?o.push.apply(o,r):o.push(r));return o}if(nm(t))return"";if(bh(t))return"."+t.styledComponentId;if(ea(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Bo(l,e,n,i)}var u;return t instanceof CS?n?(t.inject(n,i),t.getName(i)):t:lf(t)?function d(f,c){var m,x,h=[];for(var p in f)f.hasOwnProperty(p)&&!nm(f[p])&&(Array.isArray(f[p])&&f[p].isCss||ea(f[p])?h.push(tm(p)+":",f[p],";"):lf(f[p])?h.push.apply(h,d(f[p],p)):h.push(tm(p)+": "+(m=p,(x=f[p])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||m in V1?String(x).trim():x+"px")+";"));return c?[c+" {"].concat(h,["}"]):h}(t):t.toString()}var im=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function DS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return ea(t)||lf(t)?im(Bo(Zp(Xl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:im(Bo(Zp(t,n)))}var IS=function(t,e,n){return n===void 0&&(n=Qi),t.theme!==n.theme&&t.theme||e||n.theme},kS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NS=/(^-|-$)/g;function yc(t){return t.replace(kS,"-").replace(NS,"")}var OS=function(t){return uf(l_(t)>>>0)};function za(t){return typeof t=="string"&&!0}var df=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},zS=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function FS(t,e,n){var i=t[n];df(e)&&df(i)?d_(i,e):t[n]=e}function d_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,o=n;r<o.length;r++){var s=o[r];if(df(s))for(var a in s)zS(a)&&FS(t,s[a],a)}return t}var f_=la.createContext();f_.Consumer;var Sc={};function h_(t,e,n){var i=bh(t),r=!za(t),o=e.attrs,s=o===void 0?Xl:o,a=e.componentId,l=a===void 0?function(v,_){var y=typeof v!="string"?"sc":yc(v);Sc[y]=(Sc[y]||0)+1;var w=y+"-"+OS("5.3.6"+y+Sc[y]);return _?_+"-"+w:w}(e.displayName,e.parentComponentId):a,u=e.displayName,d=u===void 0?function(v){return za(v)?"styled."+v:"Styled("+Qp(v)+")"}(t):u,f=e.displayName&&e.componentId?yc(e.displayName)+"-"+e.componentId:e.componentId||l,c=i&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,m=e.shouldForwardProp;i&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(v,_,y){return t.shouldForwardProp(v,_,y)&&e.shouldForwardProp(v,_,y)}:t.shouldForwardProp);var x,h=new yS(n,f,i?t.componentStyle:void 0),p=h.isStatic&&s.length===0,g=function(v,_){return function(y,w,P,R){var S=y.attrs,C=y.componentStyle,I=y.defaultProps,Z=y.foldedComponentIds,ee=y.shouldForwardProp,G=y.styledComponentId,F=y.target,K=function(Q,E,ge){Q===void 0&&(Q=Qi);var q=yi({},E,{theme:Q}),ve={};return ge.forEach(function(ue){var Ee,me,xe,Oe=ue;for(Ee in ea(Oe)&&(Oe=Oe(q)),Oe)q[Ee]=ve[Ee]=Ee==="className"?(me=ve[Ee],xe=Oe[Ee],me&&xe?me+" "+xe:me||xe):Oe[Ee]}),[q,ve]}(IS(w,ye.useContext(f_),I)||Qi,w,S),le=K[0],ne=K[1],O=function(Q,E,ge,q){var ve=ES(),ue=TS(),Ee=E?Q.generateAndInjectStyles(Qi,ve,ue):Q.generateAndInjectStyles(ge,ve,ue);return Ee}(C,R,le),Y=P,X=ne.$as||w.$as||ne.as||w.as||F,pe=za(X),D=ne!==w?yi({},w,{},ne):w,B={};for(var j in D)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?B.as=D[j]:(ee?ee(j,Xp,X):!pe||Xp(j))&&(B[j]=D[j]));return w.style&&ne.style!==w.style&&(B.style=yi({},w.style,{},ne.style)),B.className=Array.prototype.concat(Z,G,O!==G?O:null,w.className,ne.className).filter(Boolean).join(" "),B.ref=Y,ye.createElement(X,B)}(x,v,_,p)};return g.displayName=d,(x=la.forwardRef(g)).attrs=c,x.componentStyle=h,x.displayName=d,x.shouldForwardProp=m,x.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Xl,x.styledComponentId=f,x.target=i?t.target:t,x.withComponent=function(v){var _=e.componentId,y=function(P,R){if(P==null)return{};var S,C,I={},Z=Object.keys(P);for(C=0;C<Z.length;C++)S=Z[C],R.indexOf(S)>=0||(I[S]=P[S]);return I}(e,["componentId"]),w=_&&_+"-"+(za(v)?v:yc(Qp(v)));return h_(v,yi({},y,{attrs:c,componentId:w}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?d_({},t.defaultProps,v):v}}),x.toString=function(){return"."+x.styledComponentId},r&&iS(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ff=function(t){return function e(n,i,r){if(r===void 0&&(r=Qi),!$l.isValidElementType(i))return ha(1,String(i));var o=function(){return n(i,r,DS.apply(void 0,arguments))};return o.withConfig=function(s){return e(n,i,yi({},r,{},s))},o.attrs=function(s){return e(n,i,yi({},r,{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},o}(h_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ff[t]=ff(t)});const be=ff,US=be.div`
    background-color: #D9D9D9;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 2px solid lightgreen;
`,BS=be.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`,VS=be.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,GS=be.button`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-right: 20px;
    * {
        text-decoration: none;
    }
`,HS=be.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`,WS=be.input`
    width: 500px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid gray;
    padding-right: 40px;
    padding-left: 5px;
    &:focus {
        outline: none;
    }
`,jS=be.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 6px;
    right: 5px;
    
`,Pn=be.button`
    border-radius: 50px;
    margin-top: ${t=>t.marginTop||"15px"};
    margin-left: ${t=>t.buttoMarginLeft||"0px"};
    background-color: ${t=>t.buttonBackground||"#D9D9D9"};
    height: ${t=>t.buttonHeight||"60px"};
    width: ${t=>t.buttonWidth||"300px"};
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
`,Cr=be.p`
    color: ${t=>t.textColor||"black"};
    font-size: ${t=>t.textSize||"16px"};
    display: flex;
    align-items: ${t=>t.alignItems||"center"};
    justify-content: space-around;
    width: ${t=>t.textWidth||"285px"};
    &:after, &:before {
        content: "";
        flex: 1;
        border-bottom: ${t=>t.afterBeforeBorder||"0px"} solid gray;
        margin: 6px;
    }
`,$n=be.img`
    width: ${t=>t.imgWidth||"30px"};
    height: ${t=>t.imgHeight||"30px"};
    &:hover {
        cursor: pointer;
    }
`,p_=be.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: ${t=>t.titleFontSize};
    line-height: 50px;
    color: black;
    position: absolute;
    left: 430px;
    width: 450px;
    
`,qo=be.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: ${t=>t.contentDisplay||"block"};
`,m_=be.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`,Th=be.div` 
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
`;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qe(){return Qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qe.apply(this,arguments)}var wt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wt||(wt={}));const rm="popstate";function $S(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return ta("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ai(r)}return qS(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function XS(){return Math.random().toString(36).substr(2,8)}function om(t,e){return{usr:t.state,key:t.key,idx:e}}function ta(t,e,n,i){return n===void 0&&(n=null),Qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pi(e):e,{state:n,key:e&&e.key||i||XS()})}function ai(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function qS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=wt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Qe({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=wt.Pop;let p=d(),g=p==null?null:p-u;u=p,l&&l({action:a,location:h.location,delta:g})}function c(p,g){a=wt.Push;let v=ta(h.location,p,g);n&&n(v,p),u=d()+1;let _=om(v,u),y=h.createHref(v);try{s.pushState(_,"",y)}catch{r.location.assign(y)}o&&l&&l({action:a,location:h.location,delta:1})}function m(p,g){a=wt.Replace;let v=ta(h.location,p,g);n&&n(v,p),u=d();let _=om(v,u),y=h.createHref(v);s.replaceState(_,"",y),o&&l&&l({action:a,location:h.location,delta:0})}function x(p){let g=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:ai(p);return Ue(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let h={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(rm,f),l=p,()=>{r.removeEventListener(rm,f),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let g=x(p);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:c,replace:m,go(p){return s.go(p)}};return h}var zt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zt||(zt={}));function YS(t){return t.index===!0}function g_(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((i,r)=>{let o=[...e,r],s=typeof i.id=="string"?i.id:o.join("-");return Ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ue(!n.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),n.add(s),YS(i)?Qe({},i,{id:s}):Qe({},i,{id:s,children:i.children?g_(i.children,o,n):void 0})})}function Ss(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Pi(e):e,r=x_(i.pathname||"/",n);if(r==null)return null;let o=v_(t);KS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=ow(o[a],lw(r));return s}function v_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ue(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=wi([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ue(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v_(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:iw(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of __(o.path))r(o,s,l)}),e}function __(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=__(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ZS=/^:\w+$/,QS=3,JS=2,ew=1,tw=10,nw=-2,sm=t=>t==="*";function iw(t,e){let n=t.split("/"),i=n.length;return n.some(sm)&&(i+=nw),e&&(i+=JS),n.filter(r=>!sm(r)).reduce((r,o)=>r+(ZS.test(o)?QS:o===""?ew:tw),i)}function rw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ow(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",d=sw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(i,d.params);let f=a.route;o.push({params:i,pathname:wi([r,d.pathname]),pathnameBase:fw(wi([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=wi([r,d.pathnameBase]))}return o}function sw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,d,f)=>{if(d==="*"){let c=a[f]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[d]=uw(a[f]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function aw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),na(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function lw(t){try{return decodeURI(t)}catch(e){return na(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function uw(t,e){try{return decodeURIComponent(t)}catch(n){return na(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function x_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function na(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Pi(t):t;return{pathname:n?n.startsWith("/")?n:dw(n,e):e,search:hw(i),hash:pw(r)}}function dw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function wc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ku(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ch(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Pi(t):(r=Qe({},t),Ue(!r.pathname||!r.pathname.includes("?"),wc("?","pathname","search",r)),Ue(!r.pathname||!r.pathname.includes("#"),wc("#","pathname","hash",r)),Ue(!r.search||!r.search.includes("#"),wc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let c=s.split("/");for(;c[0]==="..";)c.shift(),f-=1;r.pathname=c.join("/")}a=f>=0?e[f]:"/"}let l=cw(r,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const wi=t=>t.join("/").replace(/\/\/+/g,"/"),fw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class am extends Error{}class mw{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Ue(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let i;this.abortPromise=new Promise((o,s)=>i=s),this.controller=new AbortController;let r=()=>i(new am("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce((o,s)=>{let[a,l]=s;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let i=Promise.race([n,this.abortPromise]).then(r=>this.onSettle(i,e,null,r),r=>this.onSettle(i,e,r));return i.catch(()=>{}),Object.defineProperty(i,"_tracked",{get:()=>!0}),i}onSettle(e,n,i,r){return this.controller.signal.aborted&&i instanceof am?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>i}),Promise.reject(i)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),i?(Object.defineProperty(e,"_error",{get:()=>i}),this.emit(!1,n),Promise.reject(i)):(Object.defineProperty(e,"_data",{get:()=>r}),this.emit(!1,n),r))}emit(e,n){this.subscribers.forEach(i=>i(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let i=()=>this.cancel();e.addEventListener("abort",i),n=await new Promise(r=>{this.subscribe(o=>{e.removeEventListener("abort",i),(o||this.done)&&r(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Ue(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[i,r]=n;return Object.assign(e,{[i]:vw(r)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function gw(t){return t instanceof Promise&&t._tracked===!0}function vw(t){if(!gw(t))return t;if(t._error)throw t._error;return t._data}class Ah{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function y_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const S_=["post","put","patch","delete"],_w=new Set(S_),xw=["get",...S_],yw=new Set(xw),Sw=new Set([301,302,303,307,308]),ww=new Set([307,308]),Mc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Mw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},lm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},w_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bw=!w_;function Ew(t){Ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=g_(t.routes),n=null,i=new Set,r=null,o=null,s=null,a=t.hydrationData!=null,l=Ss(e,t.history.location,t.basename),u=null;if(l==null){let L=Oi(404,{pathname:t.history.location.pathname}),{matches:k,route:V}=pm(e);l=k,u={[V.id]:L}}let d=!l.some(L=>L.route.loader)||t.hydrationData!=null,f,c={historyAction:t.history.action,location:t.history.location,matches:l,initialized:d,navigation:Mc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map,blockers:new Map},m=wt.Pop,x=!1,h,p=!1,g=!1,v=[],_=[],y=new Map,w=0,P=-1,R=new Map,S=new Set,C=new Map,I=new Map,Z=null,ee=new Map,G=!1;function F(){return n=t.history.listen(L=>{let{action:k,location:V,delta:oe}=L;if(G){G=!1;return}na(Z!=null&&oe===null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let b=Ye({currentLocation:c.location,nextLocation:V,historyAction:k});if(b&&oe!=null){G=!0,t.history.go(oe*-1),Ne(b,{state:"blocked",location:V,proceed(){Ne(b,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),t.history.go(oe)},reset(){Re(b),ne({blockers:new Map(f.state.blockers)})}});return}return pe(k,V)}),c.initialized||pe(wt.Pop,c.location),f}function K(){n&&n(),i.clear(),h&&h.abort(),c.fetchers.forEach((L,k)=>me(k)),c.blockers.forEach((L,k)=>Re(k))}function le(L){return i.add(L),()=>i.delete(L)}function ne(L){c=Qe({},c,L),i.forEach(k=>k(c))}function O(L,k){var V,oe;let b=c.actionData!=null&&c.navigation.formMethod!=null&&mi(c.navigation.formMethod)&&c.navigation.state==="loading"&&((V=L.state)==null?void 0:V._isRedirect)!==!0,N;k.actionData?Object.keys(k.actionData).length>0?N=k.actionData:N=null:b?N=c.actionData:N=null;let se=k.loaderData?hm(c.loaderData,k.loaderData,k.matches||[],k.errors):c.loaderData;for(let[ie]of ee)Re(ie);let ce=x===!0||c.navigation.formMethod!=null&&mi(c.navigation.formMethod)&&((oe=L.state)==null?void 0:oe._isRedirect)!==!0;ne(Qe({},k,{actionData:N,loaderData:se,historyAction:m,location:L,initialized:!0,navigation:Mc,revalidation:"idle",restoreScrollPosition:U(L,k.matches||c.matches),preventScrollReset:ce,blockers:new Map(c.blockers)})),p||m===wt.Pop||(m===wt.Push?t.history.push(L,L.state):m===wt.Replace&&t.history.replace(L,L.state)),m=wt.Pop,x=!1,p=!1,g=!1,v=[],_=[]}async function Y(L,k){if(typeof L=="number"){t.history.go(L);return}let{path:V,submission:oe,error:b}=um(L,k),N=c.location,se=ta(c.location,V,k&&k.state);se=Qe({},se,t.history.encodeLocation(se));let ce=k&&k.replace!=null?k.replace:void 0,ie=wt.Push;ce===!0?ie=wt.Replace:ce===!1||oe!=null&&mi(oe.formMethod)&&oe.formAction===c.location.pathname+c.location.search&&(ie=wt.Replace);let we=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,fe=Ye({currentLocation:N,nextLocation:se,historyAction:ie});if(fe){Ne(fe,{state:"blocked",location:se,proceed(){Ne(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:se}),Y(L,k)},reset(){Re(fe),ne({blockers:new Map(c.blockers)})}});return}return await pe(ie,se,{submission:oe,pendingError:b,preventScrollReset:we,replace:k&&k.replace})}function X(){if(ue(),ne({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){pe(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}pe(m||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function pe(L,k,V){h&&h.abort(),h=null,m=L,p=(V&&V.startUninterruptedRevalidation)===!0,M(c.location,c.matches),x=(V&&V.preventScrollReset)===!0;let oe=V&&V.overrideNavigation,b=Ss(e,k,t.basename);if(!b){let Ce=Oi(404,{pathname:k.pathname}),{matches:Ie,route:Be}=pm(e);ft(),O(k,{matches:Ie,loaderData:{},errors:{[Be.id]:Ce}});return}if(Lw(c.location,k)&&!(V&&V.submission&&mi(V.submission.formMethod))){O(k,{matches:b});return}h=new AbortController;let N=ls(t.history,k,h.signal,V&&V.submission),se,ce;if(V&&V.pendingError)ce={[So(b).route.id]:V.pendingError};else if(V&&V.submission&&mi(V.submission.formMethod)){let Ce=await D(N,k,V.submission,b,{replace:V.replace});if(Ce.shortCircuited)return;se=Ce.pendingActionData,ce=Ce.pendingActionError,oe=Qe({state:"loading",location:k},V.submission),N=new Request(N.url,{signal:N.signal})}let{shortCircuited:ie,loaderData:we,errors:fe}=await B(N,k,b,oe,V&&V.submission,V&&V.replace,se,ce);ie||(h=null,O(k,Qe({matches:b},se?{actionData:se}:{},{loaderData:we,errors:fe})))}async function D(L,k,V,oe,b){ue();let N=Qe({state:"submitting",location:k},V);ne({navigation:N});let se,ce=_m(oe,k);if(!ce.route.action)se={type:zt.error,error:Oi(405,{method:L.method,pathname:k.pathname,routeId:ce.route.id})};else if(se=await as("action",L,ce,oe,f.basename),L.signal.aborted)return{shortCircuited:!0};if(Po(se)){let ie;return b&&b.replace!=null?ie=b.replace:ie=se.location===c.location.pathname+c.location.search,await q(c,se,{submission:V,replace:ie}),{shortCircuited:!0}}if(ks(se)){let ie=So(oe,ce.route.id);return(b&&b.replace)!==!0&&(m=wt.Push),{pendingActionData:{},pendingActionError:{[ie.route.id]:se.error}}}if(wr(se))throw Oi(400,{type:"defer-action"});return{pendingActionData:{[ce.route.id]:se.data}}}async function B(L,k,V,oe,b,N,se,ce){let ie=oe;ie||(ie=Qe({state:"loading",location:k,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},b));let we=b||(ie.formMethod&&ie.formAction&&ie.formData&&ie.formEncType?{formMethod:ie.formMethod,formAction:ie.formAction,formData:ie.formData,formEncType:ie.formEncType}:void 0),[fe,Ce]=cm(t.history,c,V,we,k,g,v,_,se,ce,C);if(ft(De=>!(V&&V.some(Je=>Je.route.id===De))||fe&&fe.some(Je=>Je.route.id===De)),fe.length===0&&Ce.length===0)return O(k,Qe({matches:V,loaderData:{},errors:ce||null},se?{actionData:se}:{})),{shortCircuited:!0};if(!p){Ce.forEach(Je=>{let lt=c.fetchers.get(Je.key),Mn={state:"loading",data:lt&&lt.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(Je.key,Mn)});let De=se||c.actionData;ne(Qe({navigation:ie},De?Object.keys(De).length===0?{actionData:null}:{actionData:De}:{},Ce.length>0?{fetchers:new Map(c.fetchers)}:{}))}P=++w,Ce.forEach(De=>y.set(De.key,h));let{results:Ie,loaderResults:Be,fetcherResults:z}=await ve(c.matches,V,fe,Ce,L);if(L.signal.aborted)return{shortCircuited:!0};Ce.forEach(De=>y.delete(De.key));let J=mm(Ie);if(J)return await q(c,J,{replace:N}),{shortCircuited:!0};let{loaderData:de,errors:Se}=fm(c,V,fe,Be,ce,Ce,z,I);I.forEach((De,Je)=>{De.subscribe(lt=>{(lt||De.done)&&I.delete(Je)})}),Ae();let Te=ke(P);return Qe({loaderData:de,errors:Se},Te||Ce.length>0?{fetchers:new Map(c.fetchers)}:{})}function j(L){return c.fetchers.get(L)||Mw}function Q(L,k,V,oe){if(bw)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");y.has(L)&&xe(L);let b=Ss(e,V,t.basename);if(!b){Ee(L,k,Oi(404,{pathname:V}));return}let{path:N,submission:se}=um(V,oe,!0),ce=_m(b,N);if(x=(oe&&oe.preventScrollReset)===!0,se&&mi(se.formMethod)){E(L,k,N,ce,b,se);return}C.set(L,{routeId:k,path:N,match:ce,matches:b}),ge(L,k,N,ce,b,se)}async function E(L,k,V,oe,b,N){if(ue(),C.delete(L),!oe.route.action){let bn=Oi(405,{method:N.formMethod,pathname:V,routeId:k});Ee(L,k,bn);return}let se=c.fetchers.get(L),ce=Qe({state:"submitting"},N,{data:se&&se.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(L,ce),ne({fetchers:new Map(c.fetchers)});let ie=new AbortController,we=ls(t.history,V,ie.signal,N);y.set(L,ie);let fe=await as("action",we,oe,b,f.basename);if(we.signal.aborted){y.get(L)===ie&&y.delete(L);return}if(Po(fe)){y.delete(L),S.add(L);let bn=Qe({state:"loading"},N,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(L,bn),ne({fetchers:new Map(c.fetchers)}),q(c,fe,{isFetchActionRedirect:!0})}if(ks(fe)){Ee(L,k,fe.error);return}if(wr(fe))throw Oi(400,{type:"defer-action"});let Ce=c.navigation.location||c.location,Ie=ls(t.history,Ce,ie.signal),Be=c.navigation.state!=="idle"?Ss(e,c.navigation.location,t.basename):c.matches;Ue(Be,"Didn't find any matches after fetcher action");let z=++w;R.set(L,z);let J=Qe({state:"loading",data:fe.data},N,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(L,J);let[de,Se]=cm(t.history,c,Be,N,Ce,g,v,_,{[oe.route.id]:fe.data},void 0,C);Se.filter(bn=>bn.key!==L).forEach(bn=>{let Zo=bn.key,_a=c.fetchers.get(Zo),Hu={state:"loading",data:_a&&_a.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(Zo,Hu),y.set(Zo,ie)}),ne({fetchers:new Map(c.fetchers)});let{results:Te,loaderResults:De,fetcherResults:Je}=await ve(c.matches,Be,de,Se,Ie);if(ie.signal.aborted)return;R.delete(L),y.delete(L),Se.forEach(bn=>y.delete(bn.key));let lt=mm(Te);if(lt)return q(c,lt);let{loaderData:Mn,errors:it}=fm(c,c.matches,de,De,void 0,Se,Je,I),Nn={state:"idle",data:fe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(L,Nn);let Jt=ke(z);c.navigation.state==="loading"&&z>P?(Ue(m,"Expected pending action"),h&&h.abort(),O(c.navigation.location,{matches:Be,loaderData:Mn,errors:it,fetchers:new Map(c.fetchers)})):(ne(Qe({errors:it,loaderData:hm(c.loaderData,Mn,Be,it)},Jt?{fetchers:new Map(c.fetchers)}:{})),g=!1)}async function ge(L,k,V,oe,b,N){let se=c.fetchers.get(L),ce=Qe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},N,{data:se&&se.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(L,ce),ne({fetchers:new Map(c.fetchers)});let ie=new AbortController,we=ls(t.history,V,ie.signal);y.set(L,ie);let fe=await as("loader",we,oe,b,f.basename);if(wr(fe)&&(fe=await T_(fe,we.signal,!0)||fe),y.get(L)===ie&&y.delete(L),we.signal.aborted)return;if(Po(fe)){await q(c,fe);return}if(ks(fe)){let Ie=So(c.matches,k);c.fetchers.delete(L),ne({fetchers:new Map(c.fetchers),errors:{[Ie.route.id]:fe.error}});return}Ue(!wr(fe),"Unhandled fetcher deferred data");let Ce={state:"idle",data:fe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(L,Ce),ne({fetchers:new Map(c.fetchers)})}async function q(L,k,V){var oe;let{submission:b,replace:N,isFetchActionRedirect:se}=V===void 0?{}:V;k.revalidate&&(g=!0);let ce=ta(L.location,k.location,Qe({_isRedirect:!0},se?{_isFetchActionRedirect:!0}:{}));if(Ue(ce,"Expected a location on the redirect navigation"),w_&&typeof((oe=window)==null?void 0:oe.location)<"u"){let Be=t.history.createURL(k.location).origin;if(window.location.origin!==Be){N?window.location.replace(k.location):window.location.assign(k.location);return}}h=null;let ie=N===!0?wt.Replace:wt.Push,{formMethod:we,formAction:fe,formEncType:Ce,formData:Ie}=L.navigation;!b&&we&&fe&&Ie&&Ce&&(b={formMethod:we,formAction:fe,formEncType:Ce,formData:Ie}),ww.has(k.status)&&b&&mi(b.formMethod)?await pe(ie,ce,{submission:Qe({},b,{formAction:k.location}),preventScrollReset:x}):await pe(ie,ce,{overrideNavigation:{state:"loading",location:ce,formMethod:b?b.formMethod:void 0,formAction:b?b.formAction:void 0,formEncType:b?b.formEncType:void 0,formData:b?b.formData:void 0},preventScrollReset:x})}async function ve(L,k,V,oe,b){let N=await Promise.all([...V.map(ie=>as("loader",b,ie,k,f.basename)),...oe.map(ie=>as("loader",ls(t.history,ie.path,b.signal),ie.match,ie.matches,f.basename))]),se=N.slice(0,V.length),ce=N.slice(V.length);return await Promise.all([gm(L,V,se,b.signal,!1,c.loaderData),gm(L,oe.map(ie=>ie.match),ce,b.signal,!0)]),{results:N,loaderResults:se,fetcherResults:ce}}function ue(){g=!0,v.push(...ft()),C.forEach((L,k)=>{y.has(k)&&(_.push(k),xe(k))})}function Ee(L,k,V){let oe=So(c.matches,k);me(L),ne({errors:{[oe.route.id]:V},fetchers:new Map(c.fetchers)})}function me(L){y.has(L)&&xe(L),C.delete(L),R.delete(L),S.delete(L),c.fetchers.delete(L)}function xe(L){let k=y.get(L);Ue(k,"Expected fetch controller: "+L),k.abort(),y.delete(L)}function Oe(L){for(let k of L){let oe={state:"idle",data:j(k).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(k,oe)}}function Ae(){let L=[];for(let k of S){let V=c.fetchers.get(k);Ue(V,"Expected fetcher: "+k),V.state==="loading"&&(S.delete(k),L.push(k))}Oe(L)}function ke(L){let k=[];for(let[V,oe]of R)if(oe<L){let b=c.fetchers.get(V);Ue(b,"Expected fetcher: "+V),b.state==="loading"&&(xe(V),R.delete(V),k.push(V))}return Oe(k),k.length>0}function Pe(L,k){let V=c.blockers.get(L)||lm;return ee.get(L)!==k&&(ee.set(L,k),Z==null?Z=L:L!==Z&&na(!1,"A router only supports one blocker at a time")),V}function Re(L){c.blockers.delete(L),ee.delete(L),Z===L&&(Z=null)}function Ne(L,k){let V=c.blockers.get(L)||lm;Ue(V.state==="unblocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="proceeding"||V.state==="blocked"&&k.state==="unblocked"||V.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+k.state),c.blockers.set(L,k),ne({blockers:new Map(c.blockers)})}function Ye(L){let{currentLocation:k,nextLocation:V,historyAction:oe}=L;if(Z==null)return;let b=ee.get(Z);Ue(b,"Could not find a function for the active blocker");let N=c.blockers.get(Z);if(!(N&&N.state==="proceeding")&&b({currentLocation:k,nextLocation:V,historyAction:oe}))return Z}function ft(L){let k=[];return I.forEach((V,oe)=>{(!L||L(oe))&&(V.cancel(),k.push(oe),I.delete(oe))}),k}function A(L,k,V){if(r=L,s=k,o=V||(oe=>oe.key),!a&&c.navigation===Mc){a=!0;let oe=U(c.location,c.matches);oe!=null&&ne({restoreScrollPosition:oe})}return()=>{r=null,s=null,o=null}}function M(L,k){if(r&&o&&s){let V=k.map(b=>vm(b,c.loaderData)),oe=o(L,V)||L.key;r[oe]=s()}}function U(L,k){if(r&&o&&s){let V=k.map(N=>vm(N,c.loaderData)),oe=o(L,V)||L.key,b=r[oe];if(typeof b=="number")return b}return null}return f={get basename(){return t.basename},get state(){return c},get routes(){return e},initialize:F,subscribe:le,enableScrollRestoration:A,navigate:Y,fetch:Q,revalidate:X,createHref:L=>t.history.createHref(L),encodeLocation:L=>t.history.encodeLocation(L),getFetcher:j,deleteFetcher:me,dispose:K,getBlocker:Pe,deleteBlocker:Re,_internalFetchControllers:y,_internalActiveDeferreds:I},f}function Tw(t){return t!=null&&"formData"in t}function um(t,e,n){n===void 0&&(n=!1);let i=typeof t=="string"?t:ai(t);if(!e||!Tw(e))return{path:i};if(e.formMethod&&!Dw(e.formMethod))return{path:i,error:Oi(405,{method:e.formMethod})};let r;if(e.formData&&(r={formMethod:e.formMethod||"get",formAction:E_(i),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},mi(r.formMethod)))return{path:i,submission:r};let o=Pi(i),s=b_(e.formData);return n&&o.search&&C_(o.search)&&s.append("index",""),o.search="?"+s,{path:ai(o),submission:r}}function Cw(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function cm(t,e,n,i,r,o,s,a,l,u,d){let f=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,c=t.createURL(e.location),m=t.createURL(r),x=o||c.toString()===m.toString()||c.search!==m.search,h=u?Object.keys(u)[0]:void 0,g=Cw(n,h).filter((_,y)=>{if(_.route.loader==null)return!1;if(Aw(e.loaderData,e.matches[y],_)||s.some(R=>R===_.route.id))return!0;let w=e.matches[y],P=_;return dm(_,Qe({currentUrl:c,currentParams:w.params,nextUrl:m,nextParams:P.params},i,{actionResult:f,defaultShouldRevalidate:x||M_(w,P)}))}),v=[];return d&&d.forEach((_,y)=>{if(n.some(w=>w.route.id===_.routeId))a.includes(y)?v.push(Qe({key:y},_)):dm(_.match,Qe({currentUrl:c,currentParams:e.matches[e.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},i,{actionResult:f,defaultShouldRevalidate:x}))&&v.push(Qe({key:y},_));else return}),[g,v]}function Aw(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function M_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function dm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function as(t,e,n,i,r,o,s,a){r===void 0&&(r="/"),o===void 0&&(o=!1),s===void 0&&(s=!1);let l,u,d,f=new Promise((m,x)=>d=x),c=()=>d();e.signal.addEventListener("abort",c);try{let m=n.route[t];Ue(m,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([m({request:e,params:n.params,context:a}),f]),Ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){l=zt.error,u=m}finally{e.signal.removeEventListener("abort",c)}if(Rw(u)){let m=u.status;if(Sw.has(m)){let p=u.headers.get("Location");if(Ue(p,"Redirects returned/thrown from loaders/actions must have a Location header"),/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(p)){if(!o){let v=new URL(e.url),_=p.startsWith("//")?new URL(v.protocol+p):new URL(p);_.origin===v.origin&&(p=_.pathname+_.search+_.hash)}}else{let v=i.slice(0,i.indexOf(n)+1),_=ku(v).map(w=>w.pathnameBase),y=Ch(p,_,new URL(e.url).pathname);if(Ue(ai(y),"Unable to resolve redirect location: "+p),r){let w=y.pathname;y.pathname=w==="/"?r:wi([r,w])}p=ai(y)}if(o)throw u.headers.set("Location",p),u;return{type:zt.redirect,status:m,location:p,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:l||zt.data,response:u};let x,h=u.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?x=await u.json():x=await u.text(),l===zt.error?{type:l,error:new Ah(m,u.statusText,x),headers:u.headers}:{type:zt.data,data:x,statusCode:u.status,headers:u.headers}}return l===zt.error?{type:l,error:u}:u instanceof mw?{type:zt.deferred,deferredData:u}:{type:zt.data,data:u}}function ls(t,e,n,i){let r=t.createURL(E_(e)).toString(),o={signal:n};if(i&&mi(i.formMethod)){let{formMethod:s,formEncType:a,formData:l}=i;o.method=s.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?b_(l):l}return new Request(r,o)}function b_(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,i instanceof File?i.name:i);return e}function Pw(t,e,n,i,r){let o={},s=null,a,l=!1,u={};return n.forEach((d,f)=>{let c=e[f].route.id;if(Ue(!Po(d),"Cannot handle redirect results in processLoaderData"),ks(d)){let m=So(t,c),x=d.error;i&&(x=Object.values(i)[0],i=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=x),o[c]=void 0,l||(l=!0,a=y_(d.error)?d.error.status:500),d.headers&&(u[c]=d.headers)}else wr(d)?(r.set(c,d.deferredData),o[c]=d.deferredData.data):o[c]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(a=d.statusCode),d.headers&&(u[c]=d.headers)}),i&&(s=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function fm(t,e,n,i,r,o,s,a){let{loaderData:l,errors:u}=Pw(e,n,i,r,a);for(let d=0;d<o.length;d++){let{key:f,match:c}=o[d];Ue(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let m=s[d];if(ks(m)){let x=So(t.matches,c.route.id);u&&u[x.route.id]||(u=Qe({},u,{[x.route.id]:m.error})),t.fetchers.delete(f)}else if(Po(m))Ue(!1,"Unhandled fetcher revalidation redirect");else if(wr(m))Ue(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:m.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(f,x)}}return{loaderData:l,errors:u}}function hm(t,e,n,i){let r=Qe({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function So(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function pm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Oi(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",r&&n&&i?a="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(a="defer() is not supported in actions")):t===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?a="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new Ah(t||500,s,new Error(a),!0)}function mm(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Po(n))return n}}function E_(t){let e=typeof t=="string"?Pi(t):t;return ai(Qe({},e,{hash:""}))}function Lw(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function wr(t){return t.type===zt.deferred}function ks(t){return t.type===zt.error}function Po(t){return(t&&t.type)===zt.redirect}function Rw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Dw(t){return yw.has(t)}function mi(t){return _w.has(t)}async function gm(t,e,n,i,r,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s],u=t.find(f=>f.route.id===l.route.id),d=u!=null&&!M_(u,l)&&(o&&o[l.route.id])!==void 0;wr(a)&&(r||d)&&await T_(a,i,r).then(f=>{f&&(n[s]=f||n[s])})}}async function T_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:zt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:zt.error,error:r}}return{type:zt.data,data:t.deferredData.data}}}function C_(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function vm(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function _m(t,e){let n=typeof e=="string"?Pi(e).search:e.search;if(t[t.length-1].route.index&&C_(n||""))return t[t.length-1];let i=ku(t);return i[i.length-1]}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Yl.apply(this,arguments)}function Iw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const kw=typeof Object.is=="function"?Object.is:Iw,{useState:Nw,useEffect:Ow,useLayoutEffect:zw,useDebugValue:Fw}=cd;function Uw(t,e,n){const i=e(),[{inst:r},o]=Nw({inst:{value:i,getSnapshot:e}});return zw(()=>{r.value=i,r.getSnapshot=e,bc(r)&&o({inst:r})},[t,i,e]),Ow(()=>(bc(r)&&o({inst:r}),t(()=>{bc(r)&&o({inst:r})})),[t]),Fw(i),i}function bc(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!kw(n,i)}catch{return!0}}function Bw(t,e,n){return e()}const Vw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gw=!Vw,Hw=Gw?Bw:Uw,Ww="useSyncExternalStore"in cd?(t=>t.useSyncExternalStore)(cd):Hw,Ph=ye.createContext(null),Lh=ye.createContext(null),Nu=ye.createContext(null),Ou=ye.createContext(null),Yo=ye.createContext({outlet:null,matches:[]}),A_=ye.createContext(null);function jw(t,e){let{relative:n}=e===void 0?{}:e;pa()||Ue(!1);let{basename:i,navigator:r}=ye.useContext(Nu),{hash:o,pathname:s,search:a}=P_(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:wi([i,s])),r.createHref({pathname:l,search:a,hash:o})}function pa(){return ye.useContext(Ou)!=null}function zu(){return pa()||Ue(!1),ye.useContext(Ou).location}function $w(){pa()||Ue(!1);let{basename:t,navigator:e}=ye.useContext(Nu),{matches:n}=ye.useContext(Yo),{pathname:i}=zu(),r=JSON.stringify(ku(n).map(a=>a.pathnameBase)),o=ye.useRef(!1);return ye.useEffect(()=>{o.current=!0}),ye.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=Ch(a,JSON.parse(r),i,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:wi([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,r,i])}function P_(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=ye.useContext(Yo),{pathname:r}=zu(),o=JSON.stringify(ku(i).map(s=>s.pathnameBase));return ye.useMemo(()=>Ch(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}function Xw(t,e){pa()||Ue(!1);let{navigator:n}=ye.useContext(Nu),i=ye.useContext(Lh),{matches:r}=ye.useContext(Yo),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=zu(),u;if(e){var d;let h=typeof e=="string"?Pi(e):e;a==="/"||(d=h.pathname)!=null&&d.startsWith(a)||Ue(!1),u=h}else u=l;let f=u.pathname||"/",c=a==="/"?f:f.slice(a.length)||"/",m=Ss(t,{pathname:c}),x=Zw(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:wi([a,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?a:wi([a,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),r,i||void 0);return e&&x?ye.createElement(Ou.Provider,{value:{location:Yl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wt.Pop}},x):x}function qw(){let t=tM(),e=y_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),n?ye.createElement("pre",{style:r},n):null,o)}class Yw extends ye.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ye.createElement(Yo.Provider,{value:this.props.routeContext},ye.createElement(A_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kw(t){let{routeContext:e,match:n,children:i}=t,r=ye.useContext(Ph);return r&&r.static&&r.staticContext&&n.route.errorElement&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ye.createElement(Yo.Provider,{value:e},i)}function Zw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let i=t,r=n==null?void 0:n.errors;if(r!=null){let o=i.findIndex(s=>s.route.id&&(r==null?void 0:r[s.route.id]));o>=0||Ue(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,s,a)=>{let l=s.route.id?r==null?void 0:r[s.route.id]:null,u=n?s.route.errorElement||ye.createElement(qw,null):null,d=e.concat(i.slice(0,a+1)),f=()=>ye.createElement(Kw,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?ye.createElement(Yw,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:d}}):f()},null)}var xm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(xm||(xm={}));var Kl;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Kl||(Kl={}));function Qw(t){let e=ye.useContext(Lh);return e||Ue(!1),e}function Jw(t){let e=ye.useContext(Yo);return e||Ue(!1),e}function eM(t){let e=Jw(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function tM(){var t;let e=ye.useContext(A_),n=Qw(Kl.UseRouteError),i=eM(Kl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function nM(t){let{fallbackElement:e,router:n}=t,i=Ww(n.subscribe,()=>n.state,()=>n.state),r=ye.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,a,l)=>n.navigate(s,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(s,a,l)=>n.navigate(s,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),o=n.basename||"/";return ye.createElement(ye.Fragment,null,ye.createElement(Ph.Provider,{value:{router:n,navigator:r,static:!1,basename:o}},ye.createElement(Lh.Provider,{value:i},ye.createElement(rM,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:r},n.state.initialized?ye.createElement(oM,null):e))),null)}function iM(t){Ue(!1)}function rM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=wt.Pop,navigator:o,static:s=!1}=t;pa()&&Ue(!1);let a=e.replace(/^\/*/,"/"),l=ye.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=Pi(i));let{pathname:u="/",search:d="",hash:f="",state:c=null,key:m="default"}=i,x=ye.useMemo(()=>{let h=x_(u,a);return h==null?null:{pathname:h,search:d,hash:f,state:c,key:m}},[a,u,d,f,c,m]);return x==null?null:ye.createElement(Nu.Provider,{value:l},ye.createElement(Ou.Provider,{children:n,value:{location:x,navigationType:r}}))}function oM(t){let{children:e,location:n}=t,i=ye.useContext(Ph),r=i&&!e?i.router.routes:hf(e);return Xw(r,n)}var ym;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ym||(ym={}));new Promise(()=>{});function hf(t,e){e===void 0&&(e=[]);let n=[];return ye.Children.forEach(t,(i,r)=>{if(!ye.isValidElement(i))return;if(i.type===ye.Fragment){n.push.apply(n,hf(i.props.children,e));return}i.type!==iM&&Ue(!1),!i.props.index||!i.props.children||Ue(!1);let o=[...e,r],s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,hasErrorBoundary:i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle};i.props.children&&(s.children=hf(i.props.children,o)),n.push(s)}),n}function L_(t){return t.map(e=>{let n=Yl({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=L_(n.children)),n})}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zl.apply(this,arguments)}function sM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function aM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lM(t,e){return t.button===0&&(!e||e==="_self")&&!aM(t)}const uM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function cM(t,e){return Ew({basename:e==null?void 0:e.basename,history:$S({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||dM(),routes:L_(t)}).initialize()}function dM(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Zl({},e,{errors:fM(e.errors)})),e}function fM(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Ah(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){let o=new Error(r.message);o.stack="",n[i]=o}else n[i]=r;return n}const hM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ns=ye.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=e,f=sM(e,uM),c=typeof u=="string"?u:ai(u),m=/^[a-z+]+:\/\//i.test(c)||c.startsWith("//"),x=c,h=!1;if(hM&&m){let _=new URL(window.location.href),y=c.startsWith("//")?new URL(_.protocol+c):new URL(c);y.origin===_.origin?x=y.pathname+y.search+y.hash:h=!0}let p=jw(x,{relative:r}),g=pM(x,{replace:s,state:a,target:l,preventScrollReset:d,relative:r});function v(_){i&&i(_),_.defaultPrevented||g(_)}return ye.createElement("a",Zl({},f,{href:m?c:p,onClick:h||o?i:v,ref:n,target:l}))});var Sm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Sm||(Sm={}));var wm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function pM(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=$w(),l=zu(),u=P_(t,{relative:s});return ye.useCallback(d=>{if(lM(d,n)){d.preventDefault();let f=i!==void 0?i:ai(l)===ai(u);a(t,{replace:f,state:r,preventScrollReset:o,relative:s})}},[l,a,u,i,r,n,t,o,s])}function Fu(){return ae(US,{children:Fe(BS,{children:[ae(Ns,{to:"/",children:ae($n,{src:k1,imgWidth:"120px",imgHeight:"90px"})}),Fe(HS,{children:[ae(WS,{type:"text",placeholder:"SEARCH HERE"}),ae(jS,{src:O1})]}),Fe(VS,{children:[ae(GS,{children:ae(Ns,{to:"/createQuiz",children:"CREATE QUIZ"})}),ae(Ns,{to:"/settings",children:ae($n,{src:N1,imgWidth:"55px",imgHeight:"55px"})})]})]})})}function mM(){return ae(qo,{children:ae(Fu,{})})}const R_=""+new URL("google_login_icon-7784d94b.png",import.meta.url).href,gM=""+new URL("facebook_icon-4148746f.png",import.meta.url).href,vM=""+new URL("snap_icon-415959e3.png",import.meta.url).href,_M=""+new URL("twitter_icon-4e29da74.png",import.meta.url).href,xM=""+new URL("tiktok_icon-e3ea9b75.png",import.meta.url).href,yM=be.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`,SM=be.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`,wM=be.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`;be.label`
    text-align: left;
    margin-bottom: 8px;
    margin-top: 10px;
`;be.input`
    border-radius: 50px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    border: 2.5px solid lightgray;
`;function MM(){return ae(yM,{children:Fe(SM,{children:[ae(wM,{children:"SIGN UP"}),ae(Cr,{children:"Choose the best way to you sign up: "}),Fe(Pn,{children:[ae($n,{src:R_}),"With Google"]}),Fe(Pn,{children:[ae($n,{src:gM}),"With Facebook"]}),Fe(Pn,{children:[ae($n,{src:_M}),"With Twitter"]}),Fe(Pn,{children:[ae($n,{src:vM}),"With Snap"]}),Fe(Pn,{children:[ae($n,{src:xM}),"With Tik Tok"]}),ae(Cr,{textColor:"#4025E4",textSize:"12px",children:ae(Ns,{to:"/login",children:"BACK TO LOGIN"})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="149",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bM=0,Mm=1,EM=2,D_=1,TM=2,ws=3,nr=0,_n=1,Hi=2,Ji=0,Lo=1,bm=2,Em=3,Tm=4,CM=5,so=100,AM=101,PM=102,Cm=103,Am=104,LM=200,RM=201,DM=202,IM=203,I_=204,k_=205,kM=206,NM=207,OM=208,zM=209,FM=210,UM=0,BM=1,VM=2,pf=3,GM=4,HM=5,WM=6,jM=7,N_=0,$M=1,XM=2,Mi=0,qM=1,YM=2,KM=3,ZM=4,QM=5,O_=300,Vo=301,Go=302,mf=303,gf=304,Uu=306,vf=1e3,Xn=1001,_f=1002,Yt=1003,Pm=1004,Ec=1005,An=1006,JM=1007,ia=1008,Nr=1009,eb=1010,tb=1011,z_=1012,nb=1013,Mr=1014,br=1015,ra=1016,ib=1017,rb=1018,Ro=1020,ob=1021,qn=1023,sb=1024,ab=1025,Ar=1026,Ho=1027,lb=1028,ub=1029,cb=1030,db=1031,fb=1033,Tc=33776,Cc=33777,Ac=33778,Pc=33779,Lm=35840,Rm=35841,Dm=35842,Im=35843,hb=36196,km=37492,Nm=37496,Om=37808,zm=37809,Fm=37810,Um=37811,Bm=37812,Vm=37813,Gm=37814,Hm=37815,Wm=37816,jm=37817,$m=37818,Xm=37819,qm=37820,Ym=37821,Lc=36492,pb=36283,Km=36284,Zm=36285,Qm=36286,Or=3e3,st=3001,mb=3200,gb=3201,vb=0,_b=1,ei="srgb",oa="srgb-linear",Rc=7680,xb=519,Jm=35044,eg="300 es",xf=1035;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,tg=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function yb(t,e){return(t%e+e)%e}function Ic(t,e,n){return(1-n)*t+n*e}function ng(t){return(t&t-1)===0&&t!==0}function yf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],c=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],v=r[1],_=r[4],y=r[7],w=r[2],P=r[5],R=r[8];return o[0]=s*h+a*v+l*w,o[3]=s*p+a*_+l*P,o[6]=s*g+a*y+l*R,o[1]=u*h+d*v+f*w,o[4]=u*p+d*_+f*P,o[7]=u*g+d*y+f*R,o[2]=c*h+m*v+x*w,o[5]=c*p+m*_+x*P,o[8]=c*g+m*y+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*s-a*u,c=a*l-d*o,m=u*o-s*l,x=n*f+i*c+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=f*h,e[1]=(r*u-d*i)*h,e[2]=(a*i-r*s)*h,e[3]=c*h,e[4]=(d*n-r*l)*h,e[5]=(r*o-a*n)*h,e[6]=m*h,e[7]=(i*l-u*n)*h,e[8]=(s*n-i*o)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kc.makeScale(e,n)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new gn;function F_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Pr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Nc={[ei]:{[oa]:Pr},[oa]:{[ei]:yl}},$t={legacyMode:!0,get workingColorSpace(){return oa},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Nc[e]&&Nc[e][n]!==void 0){const i=Nc[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={r:0,g:0,b:0},zn={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ba(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$t.workingColorSpace){return this.r=e,this.g=n,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$t.workingColorSpace){if(e=yb(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Oc(s,o,e+1/3),this.g=Oc(s,o,e),this.b=Oc(s,o,e-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,$t.toWorkingColorSpace(this,n),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,$t.toWorkingColorSpace(this,n),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,u=parseFloat(o[2])/100,d=parseFloat(o[3])/100;return i(o[4]),this.setHSL(l,u,d,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,$t.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,$t.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ei){const i=U_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=yl(e.r),this.g=yl(e.g),this.b=yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return $t.fromWorkingColorSpace(Ba(this,Et),e),tn(Et.r*255,0,255)<<16^tn(Et.g*255,0,255)<<8^tn(Et.b*255,0,255)<<0}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$t.workingColorSpace){$t.fromWorkingColorSpace(Ba(this,Et),n);const i=Et.r,r=Et.g,o=Et.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ba(this,Et),n),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=ei){return $t.fromWorkingColorSpace(Ba(this,Et),e),e!==ei?`color(${e} ${Et.r} ${Et.g} ${Et.b})`:`rgb(${Et.r*255|0},${Et.g*255|0},${Et.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(Ua);const i=Ic(zn.h,Ua.h,n),r=Ic(zn.s,Ua.s,n),o=Ic(zn.l,Ua.l,n);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ct.NAMES=U_;let $r;class B_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=sa("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Pr(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pr(n[i]/255)*255):n[i]=Pr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class V_{constructor(e=null){this.isSource=!0,this.uuid=ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(zc(r[s].image)):o.push(zc(r[s]))}else o=zc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?B_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sb=0;class an extends Gr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Xn,r=Xn,o=An,s=ia,a=qn,l=Nr,u=an.DEFAULT_ANISOTROPY,d=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=ma(),this.name="",this.source=new V_(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=O_;an.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],f=l[8],c=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(f-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+c)<.1&&Math.abs(f+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(m+1)/2,w=(g+1)/2,P=(d+c)/4,R=(f+h)/4,S=(x+p)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=P/i,o=R/i):y>w?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=P/r,o=S/r):w<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(w),i=R/o,r=S/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-h)*(f-h)+(c-d)*(c-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-h)/v,this.z=(c-d)/v,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zr extends Gr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wb extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const c=o[s+0],m=o[s+1],x=o[s+2],h=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=c,e[n+1]=m,e[n+2]=x,e[n+3]=h;return}if(f!==h||l!==c||u!==m||d!==x){let p=1-a;const g=l*c+u*m+d*x+f*h,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const w=Math.sqrt(_),P=Math.atan2(w,g*v);p=Math.sin(p*P)/w,a=Math.sin(a*P)/w}const y=a*v;if(l=l*p+c*y,u=u*p+m*y,d=d*p+x*y,f=f*p+h*y,p===1-a){const w=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=w,u*=w,d*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s],c=o[s+1],m=o[s+2],x=o[s+3];return e[n]=a*x+d*f+l*m-u*c,e[n+1]=l*x+d*c+u*f-a*m,e[n+2]=u*x+d*m+a*c-l*f,e[n+3]=d*x-a*f-l*c-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(o/2),c=l(i/2),m=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=c*d*f+u*m*x,this._y=u*m*f-c*d*x,this._z=u*d*x+c*m*f,this._w=u*d*f-c*m*x;break;case"YXZ":this._x=c*d*f+u*m*x,this._y=u*m*f-c*d*x,this._z=u*d*x-c*m*f,this._w=u*d*f+c*m*x;break;case"ZXY":this._x=c*d*f-u*m*x,this._y=u*m*f+c*d*x,this._z=u*d*x+c*m*f,this._w=u*d*f-c*m*x;break;case"ZYX":this._x=c*d*f-u*m*x,this._y=u*m*f+c*d*x,this._z=u*d*x-c*m*f,this._w=u*d*f+c*m*x;break;case"YZX":this._x=c*d*f+u*m*x,this._y=u*m*f+c*d*x,this._z=u*d*x-c*m*f,this._w=u*d*f-c*m*x;break;case"XZY":this._x=c*d*f-u*m*x,this._y=u*m*f-c*d*x,this._z=u*d*x+c*m*f,this._w=u*d*f+c*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],c=i+a+f;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(d-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,c=Math.sin(n*d)/u;return this._w=s*f+this._w*c,this._x=i*f+this._x*c,this._y=r*f+this._y*c,this._z=o*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,d=l*i+a*n-o*r,f=l*r+o*i-s*n,c=-o*n-s*i-a*r;return this.x=u*l+c*-o+d*-a-f*-s,this.y=d*l+c*-s+f*-o-u*-a,this.z=f*l+c*-a+u*-s-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new H,ig=new Fr;class ga{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const d=e[l],f=e[l+1],c=e[l+2];d<n&&(n=d),f<i&&(i=f),c<r&&(r=c),d>o&&(o=d),f>s&&(s=f),c>a&&(a=c)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const d=e.getX(l),f=e.getY(l),c=e.getZ(l);d<n&&(n=d),f<i&&(i=f),c<r&&(r=c),d>o&&(o=d),f>s&&(s=f),c>a&&(a=c)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=cr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)cr.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(cr)}else i.boundingBox===null&&i.computeBoundingBox(),Uc.copy(i.boundingBox),Uc.applyMatrix4(e.matrixWorld),this.union(Uc);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Va.subVectors(this.max,us),Xr.subVectors(e.a,us),qr.subVectors(e.b,us),Yr.subVectors(e.c,us),Ri.subVectors(qr,Xr),Di.subVectors(Yr,qr),dr.subVectors(Xr,Yr);let n=[0,-Ri.z,Ri.y,0,-Di.z,Di.y,0,-dr.z,dr.y,Ri.z,0,-Ri.x,Di.z,0,-Di.x,dr.z,0,-dr.x,-Ri.y,Ri.x,0,-Di.y,Di.x,0,-dr.y,dr.x,0];return!Bc(n,Xr,qr,Yr,Va)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Xr,qr,Yr,Va))?!1:(Ga.crossVectors(Ri,Di),n=[Ga.x,Ga.y,Ga.z],Bc(n,Xr,qr,Yr,Va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return cr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],cr=new H,Uc=new ga,Xr=new H,qr=new H,Yr=new H,Ri=new H,Di=new H,dr=new H,us=new H,Va=new H,Ga=new H,fr=new H;function Bc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){fr.fromArray(t,o);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),u=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Mb=new ga,cs=new H,Vc=new H;class Dh{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mb.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const n=cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Vc)),this.expandByPoint(cs.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new H,Gc=new H,Ha=new H,Ii=new H,Hc=new H,Wa=new H,Wc=new H;class bb{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.direction).multiplyScalar(n).add(this.origin),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gc.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Gc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ha),a=Ii.dot(this.direction),l=-Ii.dot(Ha),u=Ii.lengthSq(),d=Math.abs(1-s*s);let f,c,m,x;if(d>0)if(f=s*l-a,c=s*a-l,x=o*d,f>=0)if(c>=-x)if(c<=x){const h=1/d;f*=h,c*=h,m=f*(f+s*c+2*a)+c*(s*f+c+2*l)+u}else c=o,f=Math.max(0,-(s*c+a)),m=-f*f+c*(c+2*l)+u;else c=-o,f=Math.max(0,-(s*c+a)),m=-f*f+c*(c+2*l)+u;else c<=-x?(f=Math.max(0,-(-s*o+a)),c=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+c*(c+2*l)+u):c<=x?(f=0,c=Math.min(Math.max(-o,-l),o),m=c*(c+2*l)+u):(f=Math.max(0,-(s*o+a)),c=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+c*(c+2*l)+u);else c=s>0?-o:o,f=Math.max(0,-(s*c+a)),m=-f*f+c*(c+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ha).multiplyScalar(c).add(Gc),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),d>=0?(o=(e.min.y-c.y)*d,s=(e.max.y-c.y)*d):(o=(e.max.y-c.y)*d,s=(e.min.y-c.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-c.z)*f,l=(e.max.z-c.z)*f):(a=(e.max.z-c.z)*f,l=(e.min.z-c.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,o){Hc.subVectors(n,e),Wa.subVectors(i,e),Wc.crossVectors(Hc,Wa);let s=this.direction.dot(Wc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(Ii,Wa));if(l<0)return null;const u=a*this.direction.dot(Hc.cross(Ii));if(u<0||l+u>s)return null;const d=-a*Ii.dot(Wc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,u,d,f,c,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=u,g[6]=d,g[10]=f,g[14]=c,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),o=1/Kr.setFromMatrixColumn(e,1).length(),s=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const c=s*d,m=s*f,x=a*d,h=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=m+x*u,n[5]=c-h*u,n[9]=-a*l,n[2]=h-c*u,n[6]=x+m*u,n[10]=s*l}else if(e.order==="YXZ"){const c=l*d,m=l*f,x=u*d,h=u*f;n[0]=c+h*a,n[4]=x*a-m,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=m*a-x,n[6]=h+c*a,n[10]=s*l}else if(e.order==="ZXY"){const c=l*d,m=l*f,x=u*d,h=u*f;n[0]=c-h*a,n[4]=-s*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=s*d,n[9]=h-c*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const c=s*d,m=s*f,x=a*d,h=a*f;n[0]=l*d,n[4]=x*u-m,n[8]=c*u+h,n[1]=l*f,n[5]=h*u+c,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const c=s*l,m=s*u,x=a*l,h=a*u;n[0]=l*d,n[4]=h-c*f,n[8]=x*f+m,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*f+x,n[10]=c-h*f}else if(e.order==="XZY"){const c=s*l,m=s*u,x=a*l,h=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=c*f+h,n[5]=s*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*d,n[10]=h*f+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eb,e,Tb)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(i,dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(i,dn)),ki.normalize(),ja.crossVectors(dn,ki),r[0]=ki.x,r[4]=ja.x,r[8]=dn.x,r[1]=ki.y,r[5]=ja.y,r[9]=dn.y,r[2]=ki.z,r[6]=ja.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],c=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],v=i[3],_=i[7],y=i[11],w=i[15],P=r[0],R=r[4],S=r[8],C=r[12],I=r[1],Z=r[5],ee=r[9],G=r[13],F=r[2],K=r[6],le=r[10],ne=r[14],O=r[3],Y=r[7],X=r[11],pe=r[15];return o[0]=s*P+a*I+l*F+u*O,o[4]=s*R+a*Z+l*K+u*Y,o[8]=s*S+a*ee+l*le+u*X,o[12]=s*C+a*G+l*ne+u*pe,o[1]=d*P+f*I+c*F+m*O,o[5]=d*R+f*Z+c*K+m*Y,o[9]=d*S+f*ee+c*le+m*X,o[13]=d*C+f*G+c*ne+m*pe,o[2]=x*P+h*I+p*F+g*O,o[6]=x*R+h*Z+p*K+g*Y,o[10]=x*S+h*ee+p*le+g*X,o[14]=x*C+h*G+p*ne+g*pe,o[3]=v*P+_*I+y*F+w*O,o[7]=v*R+_*Z+y*K+w*Y,o[11]=v*S+_*ee+y*le+w*X,o[15]=v*C+_*G+y*ne+w*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],c=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+o*l*f-r*u*f-o*a*c+i*u*c+r*a*m-i*l*m)+h*(+n*l*m-n*u*c+o*s*c-r*s*m+r*u*d-o*l*d)+p*(+n*u*f-n*a*m-o*s*f+i*s*m+o*a*d-i*u*d)+g*(-r*a*d-n*l*f+n*a*c+r*s*f-i*s*c+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],c=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],v=f*p*u-h*c*u+h*l*m-a*p*m-f*l*g+a*c*g,_=x*c*u-d*p*u-x*l*m+s*p*m+d*l*g-s*c*g,y=d*h*u-x*f*u+x*a*m-s*h*m-d*a*g+s*f*g,w=x*f*l-d*h*l-x*a*c+s*h*c+d*a*p-s*f*p,P=n*v+i*_+r*y+o*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=v*R,e[1]=(h*c*o-f*p*o-h*r*m+i*p*m+f*r*g-i*c*g)*R,e[2]=(a*p*o-h*l*o+h*r*u-i*p*u-a*r*g+i*l*g)*R,e[3]=(f*l*o-a*c*o-f*r*u+i*c*u+a*r*m-i*l*m)*R,e[4]=_*R,e[5]=(d*p*o-x*c*o+x*r*m-n*p*m-d*r*g+n*c*g)*R,e[6]=(x*l*o-s*p*o-x*r*u+n*p*u+s*r*g-n*l*g)*R,e[7]=(s*c*o-d*l*o+d*r*u-n*c*u-s*r*m+n*l*m)*R,e[8]=y*R,e[9]=(x*f*o-d*h*o-x*i*m+n*h*m+d*i*g-n*f*g)*R,e[10]=(s*h*o-x*a*o+x*i*u-n*h*u-s*i*g+n*a*g)*R,e[11]=(d*a*o-s*f*o-d*i*u+n*f*u+s*i*m-n*a*m)*R,e[12]=w*R,e[13]=(d*h*r-x*f*r+x*i*c-n*h*c-d*i*p+n*f*p)*R,e[14]=(x*a*r-s*h*r-x*i*l+n*h*l+s*i*p-n*a*p)*R,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*c+n*a*c)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,f=a+a,c=o*u,m=o*d,x=o*f,h=s*d,p=s*f,g=a*f,v=l*u,_=l*d,y=l*f,w=i.x,P=i.y,R=i.z;return r[0]=(1-(h+g))*w,r[1]=(m+y)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(m-y)*P,r[5]=(1-(c+g))*P,r[6]=(p+v)*P,r[7]=0,r[8]=(x+_)*R,r[9]=(p-v)*R,r[10]=(1-(c+h))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Kr.set(r[0],r[1],r[2]).length();const s=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/o,d=1/s,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),u=2*o/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),c=-(s+o)/(s-o),m=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),u=1/(i-r),d=1/(s-o),f=(n+e)*l,c=(i+r)*u,m=(s+o)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new H,Fn=new bt,Eb=new H(0,0,0),Tb=new H(1,1,1),ki=new H,ja=new H,dn=new H,rg=new bt,og=new Fr;class Bu{constructor(e=0,n=0,i=0,r=Bu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],c=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bu.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cb=0;const sg=new H,Zr=new Fr,di=new bt,$a=new H,ds=new H,Ab=new H,Pb=new Fr,ag=new H(1,0,0),lg=new H(0,1,0),ug=new H(0,0,1),Lb={type:"added"},cg={type:"removed"};class ht extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new H,n=new Bu,i=new Fr,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new gn}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,n){return sg.copy(e).applyQuaternion(this.quaternion),this.position.add(sg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ds,$a,this.up):di.lookAt($a,ds,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(di),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(cg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Ab),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),c=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),c.length>0&&(i.skeletons=c),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new H(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new H,fi=new H,jc=new H,hi=new H,Qr=new H,Jr=new H,dg=new H,$c=new H,Xc=new H,qc=new H;class vi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Un.subVectors(r,n),fi.subVectors(i,n),jc.subVectors(e,n);const s=Un.dot(Un),a=Un.dot(fi),l=Un.dot(jc),u=fi.dot(fi),d=fi.dot(jc),f=s*u-a*a;if(f===0)return o.set(-2,-1,-1);const c=1/f,m=(u*l-a*d)*c,x=(s*d-a*l)*c;return o.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,hi),l.set(0,0),l.addScaledVector(o,hi.x),l.addScaledVector(s,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),fi.subVectors(e,n),Un.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Un.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return vi.getUV(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Qr.subVectors(r,i),Jr.subVectors(o,i),$c.subVectors(e,i);const l=Qr.dot($c),u=Jr.dot($c);if(l<=0&&u<=0)return n.copy(i);Xc.subVectors(e,r);const d=Qr.dot(Xc),f=Jr.dot(Xc);if(d>=0&&f<=d)return n.copy(r);const c=l*f-d*u;if(c<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Qr,s);qc.subVectors(e,o);const m=Qr.dot(qc),x=Jr.dot(qc);if(x>=0&&m<=x)return n.copy(o);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Jr,a);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return dg.subVectors(o,r),a=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector(dg,a);const g=1/(p+h+c);return s=h*g,a=c*g,n.copy(i).addScaledVector(Qr,s).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rb=0;class Vu extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Lo,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=I_,this.blendDst=k_,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rc,this.stencilZFail=Rc,this.stencilZPass=Rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,Xa=new Ge;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),o=cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class W_ extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class j_ extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Db=0;const En=new bt,Yc=new ht,eo=new H,fn=new ga,fs=new ga,Rt=new H;class sr extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?j_:W_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new gn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new si(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fn.min,fs.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,fs.max),fn.expandByPoint(Rt)):(fn.expandByPoint(fs.min),fn.expandByPoint(fs.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Rt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Rt.fromBufferAttribute(a,u),l&&(eo.fromBufferAttribute(e,u),Rt.add(eo)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let I=0;I<a;I++)u[I]=new H,d[I]=new H;const f=new H,c=new H,m=new H,x=new Ge,h=new Ge,p=new Ge,g=new H,v=new H;function _(I,Z,ee){f.fromArray(r,I*3),c.fromArray(r,Z*3),m.fromArray(r,ee*3),x.fromArray(s,I*2),h.fromArray(s,Z*2),p.fromArray(s,ee*2),c.sub(f),m.sub(f),h.sub(x),p.sub(x);const G=1/(h.x*p.y-p.x*h.y);isFinite(G)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(G),v.copy(m).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(G),u[I].add(g),u[Z].add(g),u[ee].add(g),d[I].add(v),d[Z].add(v),d[ee].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,Z=y.length;I<Z;++I){const ee=y[I],G=ee.start,F=ee.count;for(let K=G,le=G+F;K<le;K+=3)_(i[K+0],i[K+1],i[K+2])}const w=new H,P=new H,R=new H,S=new H;function C(I){R.fromArray(o,I*3),S.copy(R);const Z=u[I];w.copy(Z),w.sub(R.multiplyScalar(R.dot(Z))).normalize(),P.crossVectors(S,Z);const G=P.dot(d[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=G}for(let I=0,Z=y.length;I<Z;++I){const ee=y[I],G=ee.start,F=ee.count;for(let K=G,le=G+F;K<le;K+=3)C(i[K+0]),C(i[K+1]),C(i[K+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,m=i.count;c<m;c++)i.setXYZ(c,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,u=new H,d=new H,f=new H;if(e)for(let c=0,m=e.count;c<m;c+=3){const x=e.getX(c+0),h=e.getX(c+1),p=e.getX(c+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,h),s.fromBufferAttribute(n,p),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let c=0,m=n.count;c<m;c+=3)r.fromBufferAttribute(n,c+0),o.fromBufferAttribute(n,c+1),s.fromBufferAttribute(n,c+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(c+0,d.x,d.y,d.z),i.setXYZ(c+1,d.x,d.y,d.z),i.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,c=new u.constructor(l.length*d);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*d;for(let g=0;g<d;g++)c[x++]=u[m++]}return new oi(c,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,f=u.length;d<f;d++){const c=u[d],m=e(c,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,c=u.length;f<c;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],f=o[u];for(let c=0,m=f.length;c<m;c++)d.push(f[c].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new bt,to=new bb,Kc=new Dh,hs=new H,ps=new H,ms=new H,Zc=new H,qa=new H,Ya=new Ge,Ka=new Ge,Za=new Ge,Qc=new H,Qa=new H;class Ot extends ht{constructor(e=new sr,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){qa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],f=o[l];d!==0&&(Zc.fromBufferAttribute(f,e),s?qa.addScaledVector(Zc,d):qa.addScaledVector(Zc.sub(n),d))}n.add(qa)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(o),e.ray.intersectsSphere(Kc)===!1)||(fg.copy(o).invert(),to.copy(e.ray).applyMatrix4(fg),i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,c=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const h=f[m],p=r[h.materialIndex],g=Math.max(h.start,c.start),v=Math.min(a.count,Math.min(h.start+h.count,c.start+c.count));for(let _=g,y=v;_<y;_+=3){const w=a.getX(_),P=a.getX(_+1),R=a.getX(_+2);s=Ja(this,p,e,to,u,d,w,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const m=Math.max(0,c.start),x=Math.min(a.count,c.start+c.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);s=Ja(this,r,e,to,u,d,g,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const h=f[m],p=r[h.materialIndex],g=Math.max(h.start,c.start),v=Math.min(l.count,Math.min(h.start+h.count,c.start+c.count));for(let _=g,y=v;_<y;_+=3){const w=_,P=_+1,R=_+2;s=Ja(this,p,e,to,u,d,w,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const m=Math.max(0,c.start),x=Math.min(l.count,c.start+c.count);for(let h=m,p=x;h<p;h+=3){const g=h,v=h+1,_=h+2;s=Ja(this,r,e,to,u,d,g,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}}}function Ib(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===nr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Qa);return u<n.near||u>n.far?null:{distance:u,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,o,s,a,l){t.getVertexPosition(s,hs),t.getVertexPosition(a,ps),t.getVertexPosition(l,ms);const u=Ib(t,e,n,i,hs,ps,ms,Qc);if(u){r&&(Ya.fromBufferAttribute(r,s),Ka.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),u.uv=vi.getUV(Qc,hs,ps,ms,Ya,Ka,Za,new Ge)),o&&(Ya.fromBufferAttribute(o,s),Ka.fromBufferAttribute(o,a),Za.fromBufferAttribute(o,l),u.uv2=vi.getUV(Qc,hs,ps,ms,Ya,Ka,Za,new Ge));const d={a:s,b:a,c:l,normal:new H,materialIndex:0};vi.getNormal(hs,ps,ms,d.normal),u.face=d}return u}class va extends sr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],f=[];let c=0,m=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new si(u,3)),this.setAttribute("normal",new si(d,3)),this.setAttribute("uv",new si(f,2));function x(h,p,g,v,_,y,w,P,R,S,C){const I=y/R,Z=w/S,ee=y/2,G=w/2,F=P/2,K=R+1,le=S+1;let ne=0,O=0;const Y=new H;for(let X=0;X<le;X++){const pe=X*Z-G;for(let D=0;D<K;D++){const B=D*I-ee;Y[h]=B*v,Y[p]=pe*_,Y[g]=F,u.push(Y.x,Y.y,Y.z),Y[h]=0,Y[p]=0,Y[g]=P>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(D/R),f.push(1-X/S),ne+=1}}for(let X=0;X<S;X++)for(let pe=0;pe<R;pe++){const D=c+pe+K*X,B=c+pe+K*(X+1),j=c+(pe+1)+K*(X+1),Q=c+(pe+1)+K*X;l.push(D,B,Q),l.push(B,j,Q),O+=6}a.addGroup(m,O,C),m+=O,c+=ne}}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Wo(t[n]);for(const r in i)e[r]=i[r]}return e}function kb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){return t.getRenderTarget()===null&&t.outputEncoding===st?ei:oa}const Nb={clone:Wo,merge:Xt};var Ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ob,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X_ extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends X_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tg*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const no=-90,io=1;class Fb extends ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new pn(no,io,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new pn(no,io,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new pn(no,io,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new pn(no,io,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new pn(no,io,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new pn(no,io,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,c=e.xr.enabled;e.toneMapping=Mi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}}class q_ extends an{constructor(e,n,i,r,o,s,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Vo,super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ub extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new q_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),o=new Ur({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ji});o.uniforms.tEquirect.value=n;const s=new Ot(r,o),a=n.minFilter;return n.minFilter===ia&&(n.minFilter=An),new Fb(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Jc=new H,Bb=new H,Vb=new gn;class gr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(Bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vb.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Dh,el=new H;class Ih{constructor(e=new gr,n=new gr,i=new gr,r=new gr,o=new gr,s=new gr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],u=i[5],d=i[6],f=i[7],c=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,f-l,h-c,_-p).normalize(),n[1].setComponents(a+r,f+l,h+c,_+p).normalize(),n[2].setComponents(a+o,f+u,h+m,_+g).normalize(),n[3].setComponents(a-o,f-u,h-m,_-g).normalize(),n[4].setComponents(a-s,f-d,h-x,_-v).normalize(),n[5].setComponents(a+s,f+d,h+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Gb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,c=u.usage,m=t.createBuffer();t.bindBuffer(d,m),t.bufferData(d,f,c),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function o(u,d,f){const c=d.array,m=d.updateRange;t.bindBuffer(f,u),m.count===-1?t.bufferSubData(f,0,c):(n?t.bufferSubData(f,m.offset*c.BYTES_PER_ELEMENT,c,m.offset,m.count):t.bufferSubData(f,m.offset*c.BYTES_PER_ELEMENT,c.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const c=i.get(u);(!c||c.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(o(f.buffer,u,d),f.version=u.version)}return{get:s,remove:a,update:l}}class kh extends sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,c=n/l,m=[],x=[],h=[],p=[];for(let g=0;g<d;g++){const v=g*c-s;for(let _=0;_<u;_++){const y=_*f-o;x.push(y,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const _=v+u*g,y=v+u*(g+1),w=v+1+u*(g+1),P=v+1+u*g;m.push(_,y,P),m.push(y,w,P)}this.setIndex(m),this.setAttribute("position",new si(x,3)),this.setAttribute("normal",new si(h,3)),this.setAttribute("uv",new si(p,2))}static fromJSON(e){return new kh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yb="vec3 transformed = vec3( position );",Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ME=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DE=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,GE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,e2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,t2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,n2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,i2=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,l2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,u2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,c2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,d2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,p2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,T2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,I2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,k2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,N2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,O2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,z2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,F2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,U2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,B2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X2=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ve={alphamap_fragment:Hb,alphamap_pars_fragment:Wb,alphatest_fragment:jb,alphatest_pars_fragment:$b,aomap_fragment:Xb,aomap_pars_fragment:qb,begin_vertex:Yb,beginnormal_vertex:Kb,bsdfs:Zb,iridescence_fragment:Qb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:oE,color_pars_vertex:sE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:cE,displacementmap_pars_vertex:dE,displacementmap_vertex:fE,emissivemap_fragment:hE,emissivemap_pars_fragment:pE,encodings_fragment:mE,encodings_pars_fragment:gE,envmap_fragment:vE,envmap_common_pars_fragment:_E,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:DE,envmap_vertex:SE,fog_vertex:wE,fog_pars_vertex:ME,fog_fragment:bE,fog_pars_fragment:EE,gradientmap_pars_fragment:TE,lightmap_fragment:CE,lightmap_pars_fragment:AE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:LE,lights_pars_begin:RE,lights_toon_fragment:IE,lights_toon_pars_fragment:kE,lights_phong_fragment:NE,lights_phong_pars_fragment:OE,lights_physical_fragment:zE,lights_physical_pars_fragment:FE,lights_fragment_begin:UE,lights_fragment_maps:BE,lights_fragment_end:VE,logdepthbuf_fragment:GE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:WE,logdepthbuf_vertex:jE,map_fragment:$E,map_pars_fragment:XE,map_particle_fragment:qE,map_particle_pars_fragment:YE,metalnessmap_fragment:KE,metalnessmap_pars_fragment:ZE,morphcolor_vertex:QE,morphnormal_vertex:JE,morphtarget_pars_vertex:e2,morphtarget_vertex:t2,normal_fragment_begin:n2,normal_fragment_maps:i2,normal_pars_fragment:r2,normal_pars_vertex:o2,normal_vertex:s2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:l2,clearcoat_normal_fragment_maps:u2,clearcoat_pars_fragment:c2,iridescence_pars_fragment:d2,output_fragment:f2,packing:h2,premultiplied_alpha_fragment:p2,project_vertex:m2,dithering_fragment:g2,dithering_pars_fragment:v2,roughnessmap_fragment:_2,roughnessmap_pars_fragment:x2,shadowmap_pars_fragment:y2,shadowmap_pars_vertex:S2,shadowmap_vertex:w2,shadowmask_pars_fragment:M2,skinbase_vertex:b2,skinning_pars_vertex:E2,skinning_vertex:T2,skinnormal_vertex:C2,specularmap_fragment:A2,specularmap_pars_fragment:P2,tonemapping_fragment:L2,tonemapping_pars_fragment:R2,transmission_fragment:D2,transmission_pars_fragment:I2,uv_pars_fragment:k2,uv_pars_vertex:N2,uv_vertex:O2,uv2_pars_fragment:z2,uv2_pars_vertex:F2,uv2_vertex:U2,worldpos_vertex:B2,background_vert:V2,background_frag:G2,backgroundCube_vert:H2,backgroundCube_frag:W2,cube_vert:j2,cube_frag:$2,depth_vert:X2,depth_frag:q2,distanceRGBA_vert:Y2,distanceRGBA_frag:K2,equirect_vert:Z2,equirect_frag:Q2,linedashed_vert:J2,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:sT,meshnormal_vert:aT,meshnormal_frag:lT,meshphong_vert:uT,meshphong_frag:cT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:_T,sprite_vert:xT,sprite_frag:yT},_e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},ti={basic:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([_e.lights,_e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ti.physical={uniforms:Xt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const tl={r:0,b:0,g:0};function ST(t,e,n,i,r,o,s){const a=new ct(0);let l=o===!0?0:1,u,d,f=null,c=0,m=null;function x(p,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_));const y=t.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Uu)?(d===void 0&&(d=new Ot(new va(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Wo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=_.encoding!==st,(f!==_||c!==_.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,c=_.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ot(new kh(2,2),new Ur({name:"BackgroundMaterial",uniforms:Wo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||c!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,c=_.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(tl,$_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function wT(t,e,n,i){const r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,d=!1;function f(F,K,le,ne,O){let Y=!1;if(s){const X=h(ne,le,K);u!==X&&(u=X,m(u.object)),Y=g(F,ne,le,O),Y&&v(F,ne,le,O)}else{const X=K.wireframe===!0;(u.geometry!==ne.id||u.program!==le.id||u.wireframe!==X)&&(u.geometry=ne.id,u.program=le.id,u.wireframe=X,Y=!0)}O!==null&&n.update(O,34963),(Y||d)&&(d=!1,S(F,K,le,ne),O!==null&&t.bindBuffer(34963,n.get(O).buffer))}function c(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(F){return i.isWebGL2?t.bindVertexArray(F):o.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?t.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function h(F,K,le){const ne=le.wireframe===!0;let O=a[F.id];O===void 0&&(O={},a[F.id]=O);let Y=O[K.id];Y===void 0&&(Y={},O[K.id]=Y);let X=Y[ne];return X===void 0&&(X=p(c()),Y[ne]=X),X}function p(F){const K=[],le=[],ne=[];for(let O=0;O<r;O++)K[O]=0,le[O]=0,ne[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:le,attributeDivisors:ne,object:F,attributes:{},index:null}}function g(F,K,le,ne){const O=u.attributes,Y=K.attributes;let X=0;const pe=le.getAttributes();for(const D in pe)if(pe[D].location>=0){const j=O[D];let Q=Y[D];if(Q===void 0&&(D==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),D==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;X++}return u.attributesNum!==X||u.index!==ne}function v(F,K,le,ne){const O={},Y=K.attributes;let X=0;const pe=le.getAttributes();for(const D in pe)if(pe[D].location>=0){let j=Y[D];j===void 0&&(D==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),D==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),O[D]=Q,X++}u.attributes=O,u.attributesNum=X,u.index=ne}function _(){const F=u.newAttributes;for(let K=0,le=F.length;K<le;K++)F[K]=0}function y(F){w(F,0)}function w(F,K){const le=u.newAttributes,ne=u.enabledAttributes,O=u.attributeDivisors;le[F]=1,ne[F]===0&&(t.enableVertexAttribArray(F),ne[F]=1),O[F]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,K),O[F]=K)}function P(){const F=u.newAttributes,K=u.enabledAttributes;for(let le=0,ne=K.length;le<ne;le++)K[le]!==F[le]&&(t.disableVertexAttribArray(le),K[le]=0)}function R(F,K,le,ne,O,Y){i.isWebGL2===!0&&(le===5124||le===5125)?t.vertexAttribIPointer(F,K,le,O,Y):t.vertexAttribPointer(F,K,le,ne,O,Y)}function S(F,K,le,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=ne.attributes,Y=le.getAttributes(),X=K.defaultAttributeValues;for(const pe in Y){const D=Y[pe];if(D.location>=0){let B=O[pe];if(B===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(B=F.instanceColor)),B!==void 0){const j=B.normalized,Q=B.itemSize,E=n.get(B);if(E===void 0)continue;const ge=E.buffer,q=E.type,ve=E.bytesPerElement;if(B.isInterleavedBufferAttribute){const ue=B.data,Ee=ue.stride,me=B.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)w(D.location+xe,ue.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<D.locationSize;xe++)y(D.location+xe);t.bindBuffer(34962,ge);for(let xe=0;xe<D.locationSize;xe++)R(D.location+xe,Q/D.locationSize,q,j,Ee*ve,(me+Q/D.locationSize*xe)*ve)}else{if(B.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)w(D.location+ue,B.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ue=0;ue<D.locationSize;ue++)y(D.location+ue);t.bindBuffer(34962,ge);for(let ue=0;ue<D.locationSize;ue++)R(D.location+ue,Q/D.locationSize,q,j,Q*ve,Q/D.locationSize*ue*ve)}}else if(X!==void 0){const j=X[pe];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(D.location,j);break;case 3:t.vertexAttrib3fv(D.location,j);break;case 4:t.vertexAttrib4fv(D.location,j);break;default:t.vertexAttrib1fv(D.location,j)}}}}P()}function C(){ee();for(const F in a){const K=a[F];for(const le in K){const ne=K[le];for(const O in ne)x(ne[O].object),delete ne[O];delete K[le]}delete a[F]}}function I(F){if(a[F.id]===void 0)return;const K=a[F.id];for(const le in K){const ne=K[le];for(const O in ne)x(ne[O].object),delete ne[O];delete K[le]}delete a[F.id]}function Z(F){for(const K in a){const le=a[K];if(le[F.id]===void 0)continue;const ne=le[F.id];for(const O in ne)x(ne[O].object),delete ne[O];delete le[F.id]}}function ee(){G(),d=!0,u!==l&&(u=l,m(u.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:P}}function MT(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,d){t.drawArrays(o,u,d),n.update(d,o,1)}function l(u,d,f){if(f===0)return;let c,m;if(r)c=t,m="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[m](o,u,d,f),n.update(d,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function bT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),c=t.getParameter(35660),m=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),_=c>0,y=s||e.has("OES_texture_float"),w=_&&y,P=s?t.getParameter(36183):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:c,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:P}}function ET(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new gr,a=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const m=f.length!==0||c||i!==0||r;return r=c,i=f.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,c){n=d(f,c,0)},this.setState=function(f,c,m){const x=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||x===null||x.length===0||o&&!p)o?d(null):u();else{const v=o?0:i,_=v*4;let y=g.clippingState||null;l.value=y,y=d(x,c,_,m);for(let w=0;w!==_;++w)y[w]=n[w];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,c,m,x){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,v=c.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,y=m;_!==h;++_,y+=4)s.copy(f[_]).applyMatrix4(v,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function TT(t){let e=new WeakMap;function n(s,a){return a===mf?s.mapping=Vo:a===gf&&(s.mapping=Go),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===mf||a===gf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new Ub(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class CT extends X_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const wo=4,hg=[.125,.215,.35,.446,.526,.582],_r=20,ed=new CT,pg=new ct;let td=null;const vr=(1+Math.sqrt(5))/2,oo=1/vr,mg=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,vr,oo),new H(0,vr,-oo),new H(oo,0,vr),new H(-oo,0,vr),new H(vr,oo,0),new H(-vr,oo,0)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){td=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td),e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:ra,format:qn,encoding:Or,depthBuffer:!1},r=vg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(o)),this._blurMaterial=PT(o,e,n)}return r}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,c=d.toneMapping;d.getClearColor(pg),d.toneMapping=Mi,d.autoClear=!1;const m=new Vn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new Ot(new va,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(pg),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const _=this._cubeSize;nl(r,v*_,g>2?_:0,_,_),d.setRenderTarget(r),h&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=c,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ot(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=mg[(r-1)%mg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ot(this._lodPlanes[r],u),c=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*_r-1),h=o/x,p=isFinite(o)?1+Math.floor(d*h):_r;p>_r&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const g=[];let v=0;for(let R=0;R<_r;++R){const S=R/h,C=Math.exp(-S*S/2);g.push(C),R===0?v+=C:R<p&&(v+=2*C)}for(let R=0;R<g.length;R++)g[R]=g[R]/v;c.envMap.value=e.texture,c.samples.value=p,c.weights.value=g,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:_}=this;c.dTheta.value=x,c.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-wo?r-_+wo:0),P=4*(this._cubeSize-y);nl(n,w,P,3*y,2*y),l.setRenderTarget(n),l.render(f,ed)}}function AT(t){const e=[],n=[],i=[];let r=t;const o=t-wo+1+hg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-wo?l=hg[s-t+wo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,c=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,h=3,p=2,g=1,v=new Float32Array(h*x*m),_=new Float32Array(p*x*m),y=new Float32Array(g*x*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,S=P>2?0:-1,C=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];v.set(C,h*x*P),_.set(c,p*x*P);const I=[P,P,P,P,P,P];y.set(I,g*x*P)}const w=new sr;w.setAttribute("position",new oi(v,h)),w.setAttribute("uv",new oi(_,p)),w.setAttribute("faceIndex",new oi(y,g)),e.push(w),r>wo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vg(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PT(t,e,n){const i=new Float32Array(_r),r=new H(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function _g(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function xg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===mf||l===gf,d=l===Vo||l===Go;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new gg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new gg(t));const c=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",o),c.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function RT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DT(t,e,n,i){const r={},o=new WeakMap;function s(f){const c=f.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",s),delete r[c.id];const m=o.get(c);m&&(e.remove(m),o.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(f,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,n.memory.geometries++),c}function l(f){const c=f.attributes;for(const x in c)e.update(c[x],34962);const m=f.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(f){const c=[],m=f.index,x=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let _=0,y=v.length;_<y;_+=3){const w=v[_+0],P=v[_+1],R=v[_+2];c.push(w,P,P,R,R,w)}}else{const v=x.array;h=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const w=_+0,P=_+1,R=_+2;c.push(w,P,P,R,R,w)}}const p=new(F_(c)?j_:W_)(c,1);p.version=h;const g=o.get(f);g&&e.remove(g),o.set(f,p)}function d(f){const c=o.get(f);if(c){const m=f.index;m!==null&&c.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function IT(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}let a,l;function u(c){a=c.type,l=c.bytesPerElement}function d(c,m){t.drawElements(o,m,a,c*l),n.update(m,o,1)}function f(c,m,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,m,a,c*l,x),n.update(m,o,x)}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f}function kT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NT(t,e){return t[0]-e[0]}function OT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,f,c){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=x!==void 0?x.length:0;let p=o.get(d);if(p===void 0||p.count!==h){let K=function(){G.dispose(),o.delete(d),d.removeEventListener("dispose",K)};p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],S=d.morphAttributes.color||[];let C=0;_===!0&&(C=1),y===!0&&(C=2),w===!0&&(C=3);let I=d.attributes.position.count*C,Z=1;I>e.maxTextureSize&&(Z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ee=new Float32Array(I*Z*4*h),G=new G_(ee,I,Z,h);G.type=br,G.needsUpdate=!0;const F=C*4;for(let le=0;le<h;le++){const ne=P[le],O=R[le],Y=S[le],X=I*Z*4*le;for(let pe=0;pe<ne.count;pe++){const D=pe*F;_===!0&&(s.fromBufferAttribute(ne,pe),ee[X+D+0]=s.x,ee[X+D+1]=s.y,ee[X+D+2]=s.z,ee[X+D+3]=0),y===!0&&(s.fromBufferAttribute(O,pe),ee[X+D+4]=s.x,ee[X+D+5]=s.y,ee[X+D+6]=s.z,ee[X+D+7]=0),w===!0&&(s.fromBufferAttribute(Y,pe),ee[X+D+8]=s.x,ee[X+D+9]=s.y,ee[X+D+10]=s.z,ee[X+D+11]=Y.itemSize===4?s.w:1)}}p={count:h,texture:G,size:new Ge(I,Z)},o.set(d,p),d.addEventListener("dispose",K)}let g=0;for(let _=0;_<m.length;_++)g+=m[_];const v=d.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",m),c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=m===void 0?0:m.length;let h=i[d.id];if(h===void 0||h.length!==x){h=[];for(let y=0;y<x;y++)h[y]=[y,0];i[d.id]=h}for(let y=0;y<x;y++){const w=h[y];w[0]=y,w[1]=m[y]}h.sort(OT);for(let y=0;y<8;y++)y<x&&h[y][1]?(a[y][0]=h[y][0],a[y][1]=h[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(NT);const p=d.morphAttributes.position,g=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],P=w[0],R=w[1];P!==Number.MAX_SAFE_INTEGER&&R?(p&&d.getAttribute("morphTarget"+y)!==p[P]&&d.setAttribute("morphTarget"+y,p[P]),g&&d.getAttribute("morphNormal"+y)!==g[P]&&d.setAttribute("morphNormal"+y,g[P]),r[y]=R,v+=R):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),g&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function FT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const K_=new an,Z_=new G_,Q_=new wb,J_=new q_,yg=[],Sg=[],wg=new Float32Array(16),Mg=new Float32Array(9),bg=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=yg[r];if(o===void 0&&(o=new Float32Array(r),yg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=Sg[e];n===void 0&&(n=new Int32Array(e),Sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(At(n,i))return;bg.set(i),t.uniformMatrix2fv(this.addr,!1,bg),Pt(n,i)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(At(n,i))return;Mg.set(i),t.uniformMatrix3fv(this.addr,!1,Mg),Pt(n,i)}}function jT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(At(n,i))return;wg.set(i),t.uniformMatrix4fv(this.addr,!1,wg),Pt(n,i)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function e3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||K_,r)}function t3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Q_,r)}function n3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||J_,r)}function i3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z_,r)}function r3(t){switch(t){case 5126:return UT;case 35664:return BT;case 35665:return VT;case 35666:return GT;case 35674:return HT;case 35675:return WT;case 35676:return jT;case 5124:case 35670:return $T;case 35667:case 35671:return XT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return ZT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function o3(t,e){t.uniform1fv(this.addr,e)}function s3(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function a3(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function l3(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function u3(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c3(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function d3(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function f3(t,e){t.uniform1iv(this.addr,e)}function h3(t,e){t.uniform2iv(this.addr,e)}function p3(t,e){t.uniform3iv(this.addr,e)}function m3(t,e){t.uniform4iv(this.addr,e)}function g3(t,e){t.uniform1uiv(this.addr,e)}function v3(t,e){t.uniform2uiv(this.addr,e)}function _3(t,e){t.uniform3uiv(this.addr,e)}function x3(t,e){t.uniform4uiv(this.addr,e)}function y3(t,e,n){const i=this.cache,r=e.length,o=Gu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||K_,o[s])}function S3(t,e,n){const i=this.cache,r=e.length,o=Gu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Q_,o[s])}function w3(t,e,n){const i=this.cache,r=e.length,o=Gu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||J_,o[s])}function M3(t,e,n){const i=this.cache,r=e.length,o=Gu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Z_,o[s])}function b3(t){switch(t){case 5126:return o3;case 35664:return s3;case 35665:return a3;case 35666:return l3;case 35674:return u3;case 35675:return c3;case 35676:return d3;case 5124:case 35670:return f3;case 35667:case 35671:return h3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return v3;case 36295:return _3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return y3;case 35679:case 36299:case 36307:return S3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return M3}}class E3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=r3(n.type)}}class T3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=b3(n.type)}}class C3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Eg(t,e){t.seq.push(e),t.map[e.id]=e}function A3(t,e,n){const i=t.name,r=i.length;for(nd.lastIndex=0;;){const o=nd.exec(i),s=nd.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Eg(n,u===void 0?new E3(a,t,e):new T3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new C3(a),Eg(n,f)),n=f}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);A3(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Tg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let P3=0;function L3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function R3(t){switch(t){case Or:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Cg(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+L3(t.getShaderSource(e),s)}else return r}function D3(t,e){const n=R3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function I3(t,e){let n;switch(e){case qM:n="Linear";break;case YM:n="Reinhard";break;case KM:n="OptimizedCineon";break;case ZM:n="ACESFilmic";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function k3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function N3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O3(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ms(t){return t!==""}function Ag(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(t){return t.replace(z3,F3)}function F3(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Sf(n)}const U3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(t){return t.replace(U3,B3)}function B3(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function G3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function W3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function j3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $3(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=V3(n),u=G3(n),d=H3(n),f=W3(n),c=j3(n),m=n.isWebGL2?"":k3(n),x=N3(o),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Ms).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ms).join(`
`),g.length>0&&(g+=`
`)):(p=[Rg(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),g=[m,Rg(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Mi?I3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,D3("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ms).join(`
`)),s=Sf(s),s=Ag(s,n),s=Pg(s,n),a=Sf(a),a=Ag(a,n),a=Pg(a,n),s=Lg(s),a=Lg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+p+s,y=v+g+a,w=Tg(r,35633,_),P=Tg(r,35632,y);if(r.attachShader(h,w),r.attachShader(h,P),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),I=r.getShaderInfoLog(w).trim(),Z=r.getShaderInfoLog(P).trim();let ee=!0,G=!0;if(r.getProgramParameter(h,35714)===!1){ee=!1;const F=Cg(r,w,"vertex"),K=Cg(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+F+`
`+K)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||Z==="")&&(G=!1);G&&(this.diagnostics={runnable:ee,programLog:C,vertexShader:{log:I,prefix:p},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(w),r.deleteShader(P);let R;this.getUniforms=function(){return R===void 0&&(R=new Sl(r,h)),R};let S;return this.getAttributes=function(){return S===void 0&&(S=O3(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=P3++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=P,this}let X3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Y3(e),n.set(e,i)),i}}class Y3{constructor(e){this.id=X3++,this.code=e,this.usedTimes=0}}function K3(t,e,n,i,r,o,s){const a=new H_,l=new q3,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,c=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,C,I,Z,ee){const G=Z.fog,F=ee.geometry,K=S.isMeshStandardMaterial?Z.environment:null,le=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),ne=le&&le.mapping===Uu?le.image.height:null,O=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=Y!==void 0?Y.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let D,B,j,Q;if(O){const Ee=ti[O];D=Ee.vertexShader,B=Ee.fragmentShader}else D=S.vertexShader,B=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const E=t.getRenderTarget(),ge=S.alphaTest>0,q=S.clearcoat>0,ve=S.iridescence>0;return{isWebGL2:d,shaderID:O,shaderName:S.type,vertexShader:D,fragmentShader:B,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:c,outputEncoding:E===null?t.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Or,map:!!S.map,matcap:!!S.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:ne,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===_b,tangentSpaceNormalMap:S.normalMapType===vb,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===st,clearcoat:q,clearcoatMap:q&&!!S.clearcoatMap,clearcoatRoughnessMap:q&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:q&&!!S.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!S.iridescenceMap,iridescenceThicknessMap:ve&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Lo,alphaMap:!!S.alphaMap,alphaTest:ge,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!F.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Mi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hi,flipSided:S.side===_n,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)C.push(I),C.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(g(C,S),v(C,S),C.push(t.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),S.push(a.mask)}function _(S){const C=x[S.type];let I;if(C){const Z=ti[C];I=Nb.clone(Z.uniforms)}else I=S.uniforms;return I}function y(S,C){let I;for(let Z=0,ee=u.length;Z<ee;Z++){const G=u[Z];if(G.cacheKey===C){I=G,++I.usedTimes;break}}return I===void 0&&(I=new $3(t,C,S,o),u.push(I)),I}function w(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function R(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:R}}function Z3(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Q3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ig(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,c,m,x,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:c,material:m,groupOrder:x,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=c,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,c,m,x,h,p){const g=s(f,c,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,c,m,x,h,p){const g=s(f,c,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,c){n.length>1&&n.sort(f||Q3),i.length>1&&i.sort(c||Dg),r.length>1&&r.sort(c||Dg)}function d(){for(let f=e,c=t.length;f<c;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function J3(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Ig,t.set(i,[s])):r>=o.length?(s=new Ig,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function eC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new ct};break;case"SpotLight":n={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function tC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nC=0;function iC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rC(t,e){const n=new eC,i=tC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new H);const o=new H,s=new bt,a=new bt;function l(d,f){let c=0,m=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let h=0,p=0,g=0,v=0,_=0,y=0,w=0,P=0,R=0,S=0;d.sort(iC);const C=f!==!0?Math.PI:1;for(let Z=0,ee=d.length;Z<ee;Z++){const G=d[Z],F=G.color,K=G.intensity,le=G.distance,ne=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)c+=F.r*K*C,m+=F.g*K*C,x+=F.b*K*C;else if(G.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],K);else if(G.isDirectionalLight){const O=n.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity*C),G.castShadow){const Y=G.shadow,X=i.get(G);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[h]=X,r.directionalShadowMap[h]=ne,r.directionalShadowMatrix[h]=G.shadow.matrix,y++}r.directional[h]=O,h++}else if(G.isSpotLight){const O=n.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(F).multiplyScalar(K*C),O.distance=le,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[g]=O;const Y=G.shadow;if(G.map&&(r.spotLightMap[R]=G.map,R++,Y.updateMatrices(G),G.castShadow&&S++),r.spotLightMatrix[g]=Y.matrix,G.castShadow){const X=i.get(G);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[g]=X,r.spotShadowMap[g]=ne,P++}g++}else if(G.isRectAreaLight){const O=n.get(G);O.color.copy(F).multiplyScalar(K),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=O,v++}else if(G.isPointLight){const O=n.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity*C),O.distance=G.distance,O.decay=G.decay,G.castShadow){const Y=G.shadow,X=i.get(G);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=G.shadow.matrix,w++}r.point[p]=O,p++}else if(G.isHemisphereLight){const O=n.get(G);O.skyColor.copy(G.color).multiplyScalar(K*C),O.groundColor.copy(G.groundColor).multiplyScalar(K*C),r.hemi[_]=O,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=m,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==h||I.pointLength!==p||I.spotLength!==g||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==P||I.numSpotMaps!==R)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+R-S,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=S,I.directionalLength=h,I.pointLength=p,I.spotLength=g,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=P,I.numSpotMaps=R,r.version=nC++)}function u(d,f){let c=0,m=0,x=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const y=d[v];if(y.isDirectionalLight){const w=r.directional[c];w.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(g),c++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(g),x++}else if(y.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function kg(t,e){const n=new rC(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function oC(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new kg(t,e),n.set(o,[l])):s>=a.length?(l=new kg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sC extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aC extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cC(t,e,n){let i=new Ih;const r=new Ge,o=new Ge,s=new dt,a=new sC({depthPacking:gb}),l=new aC,u={},d=n.maxTextureSize,f={[nr]:_n,[_n]:nr,[Hi]:Hi},c=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:lC,fragmentShader:uC}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const x=new sr;x.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Ot(x,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_,this.render=function(y,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const R=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ji),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Z=0,ee=y.length;Z<ee;Z++){const G=y[Z],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const K=F.getFrameExtents();if(r.multiply(K),o.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/K.x),r.x=o.x*K.x,F.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/K.y),r.y=o.y*K.y,F.mapSize.y=o.y)),F.map===null){const ne=this.type!==ws?{minFilter:Yt,magFilter:Yt}:{};F.map=new zr(r.x,r.y,ne),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const le=F.getViewportCount();for(let ne=0;ne<le;ne++){const O=F.getViewport(ne);s.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),I.viewport(s),F.updateMatrices(G,ne),i=F.getFrustum(),_(w,P,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===ws&&g(F,P),F.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(R,S,C)};function g(y,w){const P=e.update(h);c.defines.VSM_SAMPLES!==y.blurSamples&&(c.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new zr(r.x,r.y)),c.uniforms.shadow_pass.value=y.map.texture,c.uniforms.resolution.value=y.mapSize,c.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(w,null,P,c,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(w,null,P,m,h,null)}function v(y,w,P,R,S,C){let I=null;const Z=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0)I=Z;else if(I=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const ee=I.uuid,G=w.uuid;let F=u[ee];F===void 0&&(F={},u[ee]=F);let K=F[G];K===void 0&&(K=I.clone(),F[G]=K),I=K}return I.visible=w.visible,I.wireframe=w.wireframe,C===ws?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=R,I.farDistance=S),I}function _(y,w,P,R,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===ws)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),ee=y.material;if(Array.isArray(ee)){const G=Z.groups;for(let F=0,K=G.length;F<K;F++){const le=G[F],ne=ee[le.materialIndex];if(ne&&ne.visible){const O=v(y,ne,R,P.near,P.far,S);t.renderBufferDirect(P,null,Z,O,y,le)}}}else if(ee.visible){const G=v(y,ee,R,P.near,P.far,S);t.renderBufferDirect(P,null,Z,G,y,null)}}const I=y.children;for(let Z=0,ee=I.length;Z<ee;Z++)_(I[Z],w,P,R,S)}}function dC(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const J=new dt;let de=null;const Se=new dt(0,0,0,0);return{setMask:function(Te){de!==Te&&!z&&(t.colorMask(Te,Te,Te,Te),de=Te)},setLocked:function(Te){z=Te},setClear:function(Te,De,Je,lt,Mn){Mn===!0&&(Te*=lt,De*=lt,Je*=lt),J.set(Te,De,Je,lt),Se.equals(J)===!1&&(t.clearColor(Te,De,Je,lt),Se.copy(J))},reset:function(){z=!1,de=null,Se.set(-1,0,0,0)}}}function o(){let z=!1,J=null,de=null,Se=null;return{setTest:function(Te){Te?ge(2929):q(2929)},setMask:function(Te){J!==Te&&!z&&(t.depthMask(Te),J=Te)},setFunc:function(Te){if(de!==Te){switch(Te){case UM:t.depthFunc(512);break;case BM:t.depthFunc(519);break;case VM:t.depthFunc(513);break;case pf:t.depthFunc(515);break;case GM:t.depthFunc(514);break;case HM:t.depthFunc(518);break;case WM:t.depthFunc(516);break;case jM:t.depthFunc(517);break;default:t.depthFunc(515)}de=Te}},setLocked:function(Te){z=Te},setClear:function(Te){Se!==Te&&(t.clearDepth(Te),Se=Te)},reset:function(){z=!1,J=null,de=null,Se=null}}}function s(){let z=!1,J=null,de=null,Se=null,Te=null,De=null,Je=null,lt=null,Mn=null;return{setTest:function(it){z||(it?ge(2960):q(2960))},setMask:function(it){J!==it&&!z&&(t.stencilMask(it),J=it)},setFunc:function(it,Nn,Jt){(de!==it||Se!==Nn||Te!==Jt)&&(t.stencilFunc(it,Nn,Jt),de=it,Se=Nn,Te=Jt)},setOp:function(it,Nn,Jt){(De!==it||Je!==Nn||lt!==Jt)&&(t.stencilOp(it,Nn,Jt),De=it,Je=Nn,lt=Jt)},setLocked:function(it){z=it},setClear:function(it){Mn!==it&&(t.clearStencil(it),Mn=it)},reset:function(){z=!1,J=null,de=null,Se=null,Te=null,De=null,Je=null,lt=null,Mn=null}}}const a=new r,l=new o,u=new s,d=new WeakMap,f=new WeakMap;let c={},m={},x=new WeakMap,h=[],p=null,g=!1,v=null,_=null,y=null,w=null,P=null,R=null,S=null,C=!1,I=null,Z=null,ee=null,G=null,F=null;const K=t.getParameter(35661);let le=!1,ne=0;const O=t.getParameter(7938);O.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(O)[1]),le=ne>=1):O.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),le=ne>=2);let Y=null,X={};const pe=t.getParameter(3088),D=t.getParameter(2978),B=new dt().fromArray(pe),j=new dt().fromArray(D);function Q(z,J,de){const Se=new Uint8Array(4),Te=t.createTexture();t.bindTexture(z,Te),t.texParameteri(z,10241,9728),t.texParameteri(z,10240,9728);for(let De=0;De<de;De++)t.texImage2D(J+De,0,6408,1,1,0,6408,5121,Se);return Te}const E={};E[3553]=Q(3553,3553,1),E[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ge(2929),l.setFunc(pf),ke(!1),Pe(Mm),ge(2884),Oe(Ji);function ge(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function q(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function ve(z,J){return m[z]!==J?(t.bindFramebuffer(z,J),m[z]=J,i&&(z===36009&&(m[36160]=J),z===36160&&(m[36009]=J)),!0):!1}function ue(z,J){let de=h,Se=!1;if(z)if(de=x.get(J),de===void 0&&(de=[],x.set(J,de)),z.isWebGLMultipleRenderTargets){const Te=z.texture;if(de.length!==Te.length||de[0]!==36064){for(let De=0,Je=Te.length;De<Je;De++)de[De]=36064+De;de.length=Te.length,Se=!0}}else de[0]!==36064&&(de[0]=36064,Se=!0);else de[0]!==1029&&(de[0]=1029,Se=!0);Se&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ee(z){return p!==z?(t.useProgram(z),p=z,!0):!1}const me={[so]:32774,[AM]:32778,[PM]:32779};if(i)me[Cm]=32775,me[Am]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(me[Cm]=z.MIN_EXT,me[Am]=z.MAX_EXT)}const xe={[LM]:0,[RM]:1,[DM]:768,[I_]:770,[FM]:776,[OM]:774,[kM]:772,[IM]:769,[k_]:771,[zM]:775,[NM]:773};function Oe(z,J,de,Se,Te,De,Je,lt){if(z===Ji){g===!0&&(q(3042),g=!1);return}if(g===!1&&(ge(3042),g=!0),z!==CM){if(z!==v||lt!==C){if((_!==so||P!==so)&&(t.blendEquation(32774),_=so,P=so),lt)switch(z){case Lo:t.blendFuncSeparate(1,771,1,771);break;case bm:t.blendFunc(1,1);break;case Em:t.blendFuncSeparate(0,769,0,1);break;case Tm:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Lo:t.blendFuncSeparate(770,771,1,771);break;case bm:t.blendFunc(770,1);break;case Em:t.blendFuncSeparate(0,769,0,1);break;case Tm:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,w=null,R=null,S=null,v=z,C=lt}return}Te=Te||J,De=De||de,Je=Je||Se,(J!==_||Te!==P)&&(t.blendEquationSeparate(me[J],me[Te]),_=J,P=Te),(de!==y||Se!==w||De!==R||Je!==S)&&(t.blendFuncSeparate(xe[de],xe[Se],xe[De],xe[Je]),y=de,w=Se,R=De,S=Je),v=z,C=!1}function Ae(z,J){z.side===Hi?q(2884):ge(2884);let de=z.side===_n;J&&(de=!de),ke(de),z.blending===Lo&&z.transparent===!1?Oe(Ji):Oe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Se=z.stencilWrite;u.setTest(Se),Se&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ge(32926):q(32926)}function ke(z){I!==z&&(z?t.frontFace(2304):t.frontFace(2305),I=z)}function Pe(z){z!==bM?(ge(2884),z!==Z&&(z===Mm?t.cullFace(1029):z===EM?t.cullFace(1028):t.cullFace(1032))):q(2884),Z=z}function Re(z){z!==ee&&(le&&t.lineWidth(z),ee=z)}function Ne(z,J,de){z?(ge(32823),(G!==J||F!==de)&&(t.polygonOffset(J,de),G=J,F=de)):q(32823)}function Ye(z){z?ge(3089):q(3089)}function ft(z){z===void 0&&(z=33984+K-1),Y!==z&&(t.activeTexture(z),Y=z)}function A(z,J,de){de===void 0&&(Y===null?de=33984+K-1:de=Y);let Se=X[de];Se===void 0&&(Se={type:void 0,texture:void 0},X[de]=Se),(Se.type!==z||Se.texture!==J)&&(Y!==de&&(t.activeTexture(de),Y=de),t.bindTexture(z,J||E[z]),Se.type=z,Se.texture=J)}function M(){const z=X[Y];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function U(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function b(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){B.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),B.copy(z))}function fe(z){j.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Ce(z,J){let de=f.get(J);de===void 0&&(de=new WeakMap,f.set(J,de));let Se=de.get(z);Se===void 0&&(Se=t.getUniformBlockIndex(J,z.name),de.set(z,Se))}function Ie(z,J){const Se=f.get(J).get(z);d.get(J)!==Se&&(t.uniformBlockBinding(J,Se,z.__bindingPointIndex),d.set(J,Se))}function Be(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},Y=null,X={},m={},x=new WeakMap,h=[],p=null,g=!1,v=null,_=null,y=null,w=null,P=null,R=null,S=null,C=!1,I=null,Z=null,ee=null,G=null,F=null,B.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ge,disable:q,bindFramebuffer:ve,drawBuffers:ue,useProgram:Ee,setBlending:Oe,setMaterial:Ae,setFlipSided:ke,setCullFace:Pe,setLineWidth:Re,setPolygonOffset:Ne,setScissorTest:Ye,activeTexture:ft,bindTexture:A,unbindTexture:M,compressedTexImage2D:U,compressedTexImage3D:L,texImage2D:ce,texImage3D:ie,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:N,texStorage3D:se,texSubImage2D:k,texSubImage3D:V,compressedTexSubImage2D:oe,compressedTexSubImage3D:b,scissor:we,viewport:fe,reset:Be}}function fC(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return g?new OffscreenCanvas(A,M):sa("canvas")}function _(A,M,U,L){let k=1;if((A.width>L||A.height>L)&&(k=L/Math.max(A.width,A.height)),k<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const V=M?yf:Math.floor,oe=V(k*A.width),b=V(k*A.height);h===void 0&&(h=v(oe,b));const N=U?v(oe,b):h;return N.width=oe,N.height=b,N.getContext("2d").drawImage(A,0,0,oe,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+oe+"x"+b+")."),N}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return ng(A.width)&&ng(A.height)}function w(A){return a?!1:A.wrapS!==Xn||A.wrapT!==Xn||A.minFilter!==Yt&&A.minFilter!==An}function P(A,M){return A.generateMipmaps&&M&&A.minFilter!==Yt&&A.minFilter!==An}function R(A){t.generateMipmap(A)}function S(A,M,U,L,k=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=M;return M===6403&&(U===5126&&(V=33326),U===5131&&(V=33325),U===5121&&(V=33321)),M===33319&&(U===5126&&(V=33328),U===5131&&(V=33327),U===5121&&(V=33323)),M===6408&&(U===5126&&(V=34836),U===5131&&(V=34842),U===5121&&(V=L===st&&k===!1?35907:32856),U===32819&&(V=32854),U===32820&&(V=32855)),(V===33325||V===33326||V===33327||V===33328||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function C(A,M,U){return P(A,U)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){return A===Yt||A===Pm||A===Ec?9728:9729}function Z(A){const M=A.target;M.removeEventListener("dispose",Z),G(M),M.isVideoTexture&&x.delete(M)}function ee(A){const M=A.target;M.removeEventListener("dispose",ee),K(M)}function G(A){const M=i.get(A);if(M.__webglInit===void 0)return;const U=A.source,L=p.get(U);if(L){const k=L[M.__cacheKey];k.usedTimes--,k.usedTimes===0&&F(A),Object.keys(L).length===0&&p.delete(U)}i.remove(A)}function F(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const U=A.source,L=p.get(U);delete L[M.__cacheKey],s.memory.textures--}function K(A){const M=A.texture,U=i.get(A),L=i.get(M);if(L.__webglTexture!==void 0&&(t.deleteTexture(L.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)t.deleteFramebuffer(U.__webglFramebuffer[k]),U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[k]);else{if(t.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let k=0;k<U.__webglColorRenderbuffer.length;k++)U.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[k]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let k=0,V=M.length;k<V;k++){const oe=i.get(M[k]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(M[k])}i.remove(M),i.remove(A)}let le=0;function ne(){le=0}function O(){const A=le;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),le+=1,A}function Y(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function X(A,M){const U=i.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const L=A.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,A,M);return}}n.bindTexture(3553,U.__webglTexture,33984+M)}function pe(A,M){const U=i.get(A);if(A.version>0&&U.__version!==A.version){q(U,A,M);return}n.bindTexture(35866,U.__webglTexture,33984+M)}function D(A,M){const U=i.get(A);if(A.version>0&&U.__version!==A.version){q(U,A,M);return}n.bindTexture(32879,U.__webglTexture,33984+M)}function B(A,M){const U=i.get(A);if(A.version>0&&U.__version!==A.version){ve(U,A,M);return}n.bindTexture(34067,U.__webglTexture,33984+M)}const j={[vf]:10497,[Xn]:33071,[_f]:33648},Q={[Yt]:9728,[Pm]:9984,[Ec]:9986,[An]:9729,[JM]:9985,[ia]:9987};function E(A,M,U){if(U?(t.texParameteri(A,10242,j[M.wrapS]),t.texParameteri(A,10243,j[M.wrapT]),(A===32879||A===35866)&&t.texParameteri(A,32882,j[M.wrapR]),t.texParameteri(A,10240,Q[M.magFilter]),t.texParameteri(A,10241,Q[M.minFilter])):(t.texParameteri(A,10242,33071),t.texParameteri(A,10243,33071),(A===32879||A===35866)&&t.texParameteri(A,32882,33071),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,10240,I(M.magFilter)),t.texParameteri(A,10241,I(M.minFilter)),M.minFilter!==Yt&&M.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Yt||M.minFilter!==Ec&&M.minFilter!==ia||M.type===br&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ge(A,M){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Z));const L=M.source;let k=p.get(L);k===void 0&&(k={},p.set(L,k));const V=Y(M);if(V!==A.__cacheKey){k[V]===void 0&&(k[V]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,U=!0),k[V].usedTimes++;const oe=k[A.__cacheKey];oe!==void 0&&(k[A.__cacheKey].usedTimes--,oe.usedTimes===0&&F(M)),A.__cacheKey=V,A.__webglTexture=k[V].texture}return U}function q(A,M,U){let L=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(L=35866),M.isData3DTexture&&(L=32879);const k=ge(A,M),V=M.source;n.bindTexture(L,A.__webglTexture,33984+U);const oe=i.get(V);if(V.version!==oe.__version||k===!0){n.activeTexture(33984+U),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const b=w(M)&&y(M.image)===!1;let N=_(M.image,b,!1,d);N=ft(M,N);const se=y(N)||a,ce=o.convert(M.format,M.encoding);let ie=o.convert(M.type),we=S(M.internalFormat,ce,ie,M.encoding,M.isVideoTexture);E(L,M,se);let fe;const Ce=M.mipmaps,Ie=a&&M.isVideoTexture!==!0,Be=oe.__version===void 0||k===!0,z=C(M,N,se);if(M.isDepthTexture)we=6402,a?M.type===br?we=36012:M.type===Mr?we=33190:M.type===Ro?we=35056:we=33189:M.type===br&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ar&&we===6402&&M.type!==z_&&M.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Mr,ie=o.convert(M.type)),M.format===Ho&&we===6402&&(we=34041,M.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ro,ie=o.convert(M.type))),Be&&(Ie?n.texStorage2D(3553,1,we,N.width,N.height):n.texImage2D(3553,0,we,N.width,N.height,0,ce,ie,null));else if(M.isDataTexture)if(Ce.length>0&&se){Ie&&Be&&n.texStorage2D(3553,z,we,Ce[0].width,Ce[0].height);for(let J=0,de=Ce.length;J<de;J++)fe=Ce[J],Ie?n.texSubImage2D(3553,J,0,0,fe.width,fe.height,ce,ie,fe.data):n.texImage2D(3553,J,we,fe.width,fe.height,0,ce,ie,fe.data);M.generateMipmaps=!1}else Ie?(Be&&n.texStorage2D(3553,z,we,N.width,N.height),n.texSubImage2D(3553,0,0,0,N.width,N.height,ce,ie,N.data)):n.texImage2D(3553,0,we,N.width,N.height,0,ce,ie,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Be&&n.texStorage3D(35866,z,we,Ce[0].width,Ce[0].height,N.depth);for(let J=0,de=Ce.length;J<de;J++)fe=Ce[J],M.format!==qn?ce!==null?Ie?n.compressedTexSubImage3D(35866,J,0,0,0,fe.width,fe.height,N.depth,ce,fe.data,0,0):n.compressedTexImage3D(35866,J,we,fe.width,fe.height,N.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage3D(35866,J,0,0,0,fe.width,fe.height,N.depth,ce,ie,fe.data):n.texImage3D(35866,J,we,fe.width,fe.height,N.depth,0,ce,ie,fe.data)}else{Ie&&Be&&n.texStorage2D(3553,z,we,Ce[0].width,Ce[0].height);for(let J=0,de=Ce.length;J<de;J++)fe=Ce[J],M.format!==qn?ce!==null?Ie?n.compressedTexSubImage2D(3553,J,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(3553,J,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage2D(3553,J,0,0,fe.width,fe.height,ce,ie,fe.data):n.texImage2D(3553,J,we,fe.width,fe.height,0,ce,ie,fe.data)}else if(M.isDataArrayTexture)Ie?(Be&&n.texStorage3D(35866,z,we,N.width,N.height,N.depth),n.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,ce,ie,N.data)):n.texImage3D(35866,0,we,N.width,N.height,N.depth,0,ce,ie,N.data);else if(M.isData3DTexture)Ie?(Be&&n.texStorage3D(32879,z,we,N.width,N.height,N.depth),n.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,ce,ie,N.data)):n.texImage3D(32879,0,we,N.width,N.height,N.depth,0,ce,ie,N.data);else if(M.isFramebufferTexture){if(Be)if(Ie)n.texStorage2D(3553,z,we,N.width,N.height);else{let J=N.width,de=N.height;for(let Se=0;Se<z;Se++)n.texImage2D(3553,Se,we,J,de,0,ce,ie,null),J>>=1,de>>=1}}else if(Ce.length>0&&se){Ie&&Be&&n.texStorage2D(3553,z,we,Ce[0].width,Ce[0].height);for(let J=0,de=Ce.length;J<de;J++)fe=Ce[J],Ie?n.texSubImage2D(3553,J,0,0,ce,ie,fe):n.texImage2D(3553,J,we,ce,ie,fe);M.generateMipmaps=!1}else Ie?(Be&&n.texStorage2D(3553,z,we,N.width,N.height),n.texSubImage2D(3553,0,0,0,ce,ie,N)):n.texImage2D(3553,0,we,ce,ie,N);P(M,se)&&R(L),oe.__version=V.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,U){if(M.image.length!==6)return;const L=ge(A,M),k=M.source;n.bindTexture(34067,A.__webglTexture,33984+U);const V=i.get(k);if(k.version!==V.__version||L===!0){n.activeTexture(33984+U),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,b=M.image[0]&&M.image[0].isDataTexture,N=[];for(let J=0;J<6;J++)!oe&&!b?N[J]=_(M.image[J],!1,!0,u):N[J]=b?M.image[J].image:M.image[J],N[J]=ft(M,N[J]);const se=N[0],ce=y(se)||a,ie=o.convert(M.format,M.encoding),we=o.convert(M.type),fe=S(M.internalFormat,ie,we,M.encoding),Ce=a&&M.isVideoTexture!==!0,Ie=V.__version===void 0||L===!0;let Be=C(M,se,ce);E(34067,M,ce);let z;if(oe){Ce&&Ie&&n.texStorage2D(34067,Be,fe,se.width,se.height);for(let J=0;J<6;J++){z=N[J].mipmaps;for(let de=0;de<z.length;de++){const Se=z[de];M.format!==qn?ie!==null?Ce?n.compressedTexSubImage2D(34069+J,de,0,0,Se.width,Se.height,ie,Se.data):n.compressedTexImage2D(34069+J,de,fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?n.texSubImage2D(34069+J,de,0,0,Se.width,Se.height,ie,we,Se.data):n.texImage2D(34069+J,de,fe,Se.width,Se.height,0,ie,we,Se.data)}}}else{z=M.mipmaps,Ce&&Ie&&(z.length>0&&Be++,n.texStorage2D(34067,Be,fe,N[0].width,N[0].height));for(let J=0;J<6;J++)if(b){Ce?n.texSubImage2D(34069+J,0,0,0,N[J].width,N[J].height,ie,we,N[J].data):n.texImage2D(34069+J,0,fe,N[J].width,N[J].height,0,ie,we,N[J].data);for(let de=0;de<z.length;de++){const Te=z[de].image[J].image;Ce?n.texSubImage2D(34069+J,de+1,0,0,Te.width,Te.height,ie,we,Te.data):n.texImage2D(34069+J,de+1,fe,Te.width,Te.height,0,ie,we,Te.data)}}else{Ce?n.texSubImage2D(34069+J,0,0,0,ie,we,N[J]):n.texImage2D(34069+J,0,fe,ie,we,N[J]);for(let de=0;de<z.length;de++){const Se=z[de];Ce?n.texSubImage2D(34069+J,de+1,0,0,ie,we,Se.image[J]):n.texImage2D(34069+J,de+1,fe,ie,we,Se.image[J])}}}P(M,ce)&&R(34067),V.__version=k.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,U,L,k){const V=o.convert(U.format,U.encoding),oe=o.convert(U.type),b=S(U.internalFormat,V,oe,U.encoding);i.get(M).__hasExternalTextures||(k===32879||k===35866?n.texImage3D(k,0,b,M.width,M.height,M.depth,0,V,oe,null):n.texImage2D(k,0,b,M.width,M.height,0,V,oe,null)),n.bindFramebuffer(36160,A),Ne(M)?c.framebufferTexture2DMultisampleEXT(36160,L,k,i.get(U).__webglTexture,0,Re(M)):(k===3553||k>=34069&&k<=34074)&&t.framebufferTexture2D(36160,L,k,i.get(U).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ee(A,M,U){if(t.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let L=33189;if(U||Ne(M)){const k=M.depthTexture;k&&k.isDepthTexture&&(k.type===br?L=36012:k.type===Mr&&(L=33190));const V=Re(M);Ne(M)?c.renderbufferStorageMultisampleEXT(36161,V,L,M.width,M.height):t.renderbufferStorageMultisample(36161,V,L,M.width,M.height)}else t.renderbufferStorage(36161,L,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const L=Re(M);U&&Ne(M)===!1?t.renderbufferStorageMultisample(36161,L,35056,M.width,M.height):Ne(M)?c.renderbufferStorageMultisampleEXT(36161,L,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,A)}else{const L=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let k=0;k<L.length;k++){const V=L[k],oe=o.convert(V.format,V.encoding),b=o.convert(V.type),N=S(V.internalFormat,oe,b,V.encoding),se=Re(M);U&&Ne(M)===!1?t.renderbufferStorageMultisample(36161,se,N,M.width,M.height):Ne(M)?c.renderbufferStorageMultisampleEXT(36161,se,N,M.width,M.height):t.renderbufferStorage(36161,N,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function me(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const L=i.get(M.depthTexture).__webglTexture,k=Re(M);if(M.depthTexture.format===Ar)Ne(M)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,L,0,k):t.framebufferTexture2D(36160,36096,3553,L,0);else if(M.depthTexture.format===Ho)Ne(M)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,L,0,k):t.framebufferTexture2D(36160,33306,3553,L,0);else throw new Error("Unknown depthTexture format")}function xe(A){const M=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,A)}else if(U){M.__webglDepthbuffer=[];for(let L=0;L<6;L++)n.bindFramebuffer(36160,M.__webglFramebuffer[L]),M.__webglDepthbuffer[L]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[L],A,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(36160,null)}function Oe(A,M,U){const L=i.get(A);M!==void 0&&ue(L.__webglFramebuffer,A,A.texture,36064,3553),U!==void 0&&xe(A)}function Ae(A){const M=A.texture,U=i.get(A),L=i.get(M);A.addEventListener("dispose",ee),A.isWebGLMultipleRenderTargets!==!0&&(L.__webglTexture===void 0&&(L.__webglTexture=t.createTexture()),L.__version=M.version,s.memory.textures++);const k=A.isWebGLCubeRenderTarget===!0,V=A.isWebGLMultipleRenderTargets===!0,oe=y(A)||a;if(k){U.__webglFramebuffer=[];for(let b=0;b<6;b++)U.__webglFramebuffer[b]=t.createFramebuffer()}else{if(U.__webglFramebuffer=t.createFramebuffer(),V)if(r.drawBuffers){const b=A.texture;for(let N=0,se=b.length;N<se;N++){const ce=i.get(b[N]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ne(A)===!1){const b=V?M:[M];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let N=0;N<b.length;N++){const se=b[N];U.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(36161,U.__webglColorRenderbuffer[N]);const ce=o.convert(se.format,se.encoding),ie=o.convert(se.type),we=S(se.internalFormat,ce,ie,se.encoding,A.isXRRenderTarget===!0),fe=Re(A);t.renderbufferStorageMultisample(36161,fe,we,A.width,A.height),t.framebufferRenderbuffer(36160,36064+N,36161,U.__webglColorRenderbuffer[N])}t.bindRenderbuffer(36161,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(36160,null)}}if(k){n.bindTexture(34067,L.__webglTexture),E(34067,M,oe);for(let b=0;b<6;b++)ue(U.__webglFramebuffer[b],A,M,36064,34069+b);P(M,oe)&&R(34067),n.unbindTexture()}else if(V){const b=A.texture;for(let N=0,se=b.length;N<se;N++){const ce=b[N],ie=i.get(ce);n.bindTexture(3553,ie.__webglTexture),E(3553,ce,oe),ue(U.__webglFramebuffer,A,ce,36064+N,3553),P(ce,oe)&&R(3553)}n.unbindTexture()}else{let b=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?b=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(b,L.__webglTexture),E(b,M,oe),ue(U.__webglFramebuffer,A,M,36064,b),P(M,oe)&&R(b),n.unbindTexture()}A.depthBuffer&&xe(A)}function ke(A){const M=y(A)||a,U=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let L=0,k=U.length;L<k;L++){const V=U[L];if(P(V,M)){const oe=A.isWebGLCubeRenderTarget?34067:3553,b=i.get(V).__webglTexture;n.bindTexture(oe,b),R(oe),n.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&Ne(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],U=A.width,L=A.height;let k=16384;const V=[],oe=A.stencilBuffer?33306:36096,b=i.get(A),N=A.isWebGLMultipleRenderTargets===!0;if(N)for(let se=0;se<M.length;se++)n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+se,36161,null),n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+se,3553,null,0);n.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,b.__webglFramebuffer);for(let se=0;se<M.length;se++){V.push(36064+se),A.depthBuffer&&V.push(oe);const ce=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ce===!1&&(A.depthBuffer&&(k|=256),A.stencilBuffer&&(k|=1024)),N&&t.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[se]),ce===!0&&(t.invalidateFramebuffer(36008,[oe]),t.invalidateFramebuffer(36009,[oe])),N){const ie=i.get(M[se]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ie,0)}t.blitFramebuffer(0,0,U,L,0,0,U,L,k,9728),m&&t.invalidateFramebuffer(36008,V)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),N)for(let se=0;se<M.length;se++){n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+se,36161,b.__webglColorRenderbuffer[se]);const ce=i.get(M[se]).__webglTexture;n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+se,3553,ce,0)}n.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(f,A.samples)}function Ne(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(A){const M=s.render.frame;x.get(A)!==M&&(x.set(A,M),A.update())}function ft(A,M){const U=A.encoding,L=A.format,k=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xf||U!==Or&&(U===st?a===!1?e.has("EXT_sRGB")===!0&&L===qn?(A.format=xf,A.minFilter=An,A.generateMipmaps=!1):M=B_.sRGBToLinear(M):(L!==qn||k!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),M}this.allocateTextureUnit=O,this.resetTextureUnits=ne,this.setTexture2D=X,this.setTexture2DArray=pe,this.setTexture3D=D,this.setTextureCube=B,this.rebindTextures=Oe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ne}function hC(t,e,n){const i=n.isWebGL2;function r(o,s=null){let a;if(o===Nr)return 5121;if(o===ib)return 32819;if(o===rb)return 32820;if(o===eb)return 5120;if(o===tb)return 5122;if(o===z_)return 5123;if(o===nb)return 5124;if(o===Mr)return 5125;if(o===br)return 5126;if(o===ra)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===ob)return 6406;if(o===qn)return 6408;if(o===sb)return 6409;if(o===ab)return 6410;if(o===Ar)return 6402;if(o===Ho)return 34041;if(o===xf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===lb)return 6403;if(o===ub)return 36244;if(o===cb)return 33319;if(o===db)return 33320;if(o===fb)return 36249;if(o===Tc||o===Cc||o===Ac||o===Pc)if(s===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Lm||o===Rm||o===Dm||o===Im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Lm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Rm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Dm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===hb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===km||o===Nm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===km)return s===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Nm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Om||o===zm||o===Fm||o===Um||o===Bm||o===Vm||o===Gm||o===Hm||o===Wm||o===jm||o===$m||o===Xm||o===qm||o===Ym)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Om)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===zm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Fm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Um)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Bm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Vm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Gm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Hm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===jm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===$m)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Xm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===qm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ym)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Lc)return s===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===pb||o===Km||o===Zm||o===Qm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Lc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Km)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Zm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Qm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ro?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class pC extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class il extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mC={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=d.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&c>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gC extends an{constructor(e,n,i,r,o,s,a,l,u,d){if(d=d!==void 0?d:Ar,d!==Ar&&d!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ar&&(i=Mr),i===void 0&&d===Ho&&(i=Ro),super(null,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1}}class vC extends Gr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,f=null,c=null,m=null,x=null;const h=n.getContextAttributes();let p=null,g=null;const v=[],_=[],y=new Set,w=new Map,P=new pn;P.layers.enable(1),P.viewport=new dt;const R=new pn;R.layers.enable(2),R.viewport=new dt;const S=[P,R],C=new pC;C.layers.enable(1),C.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=v[D];return B===void 0&&(B=new id,v[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=v[D];return B===void 0&&(B=new id,v[D]=B),B.getGripSpace()},this.getHand=function(D){let B=v[D];return B===void 0&&(B=new id,v[D]=B),B.getHandSpace()};function ee(D){const B=_.indexOf(D.inputSource);if(B===-1)return;const j=v[B];j!==void 0&&j.dispatchEvent({type:D.type,data:D.inputSource})}function G(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",F);for(let D=0;D<v.length;D++){const B=_[D];B!==null&&(_[D]=null,v[D].disconnect(B))}I=null,Z=null,e.setRenderTarget(p),m=null,c=null,f=null,r=null,g=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",G),r.addEventListener("inputsourceschange",F),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:m}),g=new zr(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Nr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let B=null,j=null,Q=null;h.depth&&(Q=h.stencil?35056:33190,B=h.stencil?Ho:Ar,j=h.stencil?Ro:Mr);const E={colorFormat:32856,depthFormat:Q,scaleFactor:o};f=new XRWebGLBinding(r,n),c=f.createProjectionLayer(E),r.updateRenderState({layers:[c]}),g=new zr(c.textureWidth,c.textureHeight,{format:qn,type:Nr,depthTexture:new gC(c.textureWidth,c.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ge=e.properties.get(g);ge.__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(D){for(let B=0;B<D.removed.length;B++){const j=D.removed[B],Q=_.indexOf(j);Q>=0&&(_[Q]=null,v[Q].disconnect(j))}for(let B=0;B<D.added.length;B++){const j=D.added[B];let Q=_.indexOf(j);if(Q===-1){for(let ge=0;ge<v.length;ge++)if(ge>=_.length){_.push(j),Q=ge;break}else if(_[ge]===null){_[ge]=j,Q=ge;break}if(Q===-1)break}const E=v[Q];E&&E.connect(j)}}const K=new H,le=new H;function ne(D,B,j){K.setFromMatrixPosition(B.matrixWorld),le.setFromMatrixPosition(j.matrixWorld);const Q=K.distanceTo(le),E=B.projectionMatrix.elements,ge=j.projectionMatrix.elements,q=E[14]/(E[10]-1),ve=E[14]/(E[10]+1),ue=(E[9]+1)/E[5],Ee=(E[9]-1)/E[5],me=(E[8]-1)/E[0],xe=(ge[8]+1)/ge[0],Oe=q*me,Ae=q*xe,ke=Q/(-me+xe),Pe=ke*-me;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Pe),D.translateZ(ke),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Re=q+ke,Ne=ve+ke,Ye=Oe-Pe,ft=Ae+(Q-Pe),A=ue*ve/Ne*Re,M=Ee*ve/Ne*Re;D.projectionMatrix.makePerspective(Ye,ft,A,M,Re,Ne)}function O(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;C.near=R.near=P.near=D.near,C.far=R.far=P.far=D.far,(I!==C.near||Z!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,Z=C.far);const B=D.parent,j=C.cameras;O(C,B);for(let E=0;E<j.length;E++)O(j[E],B);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.matrix.copy(C.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const Q=D.children;for(let E=0,ge=Q.length;E<ge;E++)Q[E].updateMatrixWorld(!0);j.length===2?ne(C,P,R):C.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(D){l=D,c!==null&&(c.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.getPlanes=function(){return y};let Y=null;function X(D,B){if(d=B.getViewerPose(u||s),x=B,d!==null){const j=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Q=!1;j.length!==C.cameras.length&&(C.cameras.length=0,Q=!0);for(let E=0;E<j.length;E++){const ge=j[E];let q=null;if(m!==null)q=m.getViewport(ge);else{const ue=f.getViewSubImage(c,ge);q=ue.viewport,E===0&&(e.setRenderTargetTextures(g,ue.colorTexture,c.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(g))}let ve=S[E];ve===void 0&&(ve=new pn,ve.layers.enable(E),ve.viewport=new dt,S[E]=ve),ve.matrix.fromArray(ge.transform.matrix),ve.projectionMatrix.fromArray(ge.projectionMatrix),ve.viewport.set(q.x,q.y,q.width,q.height),E===0&&C.matrix.copy(ve.matrix),Q===!0&&C.cameras.push(ve)}}for(let j=0;j<v.length;j++){const Q=_[j],E=v[j];Q!==null&&E!==void 0&&E.update(Q,B,u||s)}if(Y&&Y(D,B),B.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let j=null;for(const Q of y)B.detectedPlanes.has(Q)||(j===null&&(j=[]),j.push(Q));if(j!==null)for(const Q of j)y.delete(Q),w.delete(Q),i.dispatchEvent({type:"planeremoved",data:Q});for(const Q of B.detectedPlanes)if(!y.has(Q))y.add(Q),w.set(Q,B.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Q});else{const E=w.get(Q);Q.lastChangedTime>E&&(w.set(Q,Q.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Q}))}}x=null}const pe=new Y_;pe.setAnimationLoop(X),this.setAnimationLoop=function(D){Y=D},this.dispose=function(){}}}function _C(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,$_(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),d(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&c(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&s(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===_n&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===_n&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function s(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function d(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function c(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===_n&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xC(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const w=_.program;i.updateUBOMapping(v,w);const P=e.render.frame;o[v.id]!==P&&(c(v),o[v.id]=P)}function d(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),w=v.__size,P=v.usage;return t.bindBuffer(35345,y),t.bufferData(35345,w,P),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,y),y}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const _=r[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(35345,_);for(let P=0,R=y.length;P<R;P++){const S=y[P];if(m(S,P,w)===!0){const C=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let Z=0;for(let ee=0;ee<I.length;ee++){const G=I[ee],F=h(G);typeof G=="number"?(S.__data[0]=G,t.bufferSubData(35345,C+Z,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=G.elements[0],S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=G.elements[0],S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=G.elements[0]):(G.toArray(S.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,C,S.__data)}}t.bindBuffer(35345,null)}function m(v,_,y){const w=v.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{const P=Array.isArray(w)?w:[w],R=[];for(let S=0;S<P.length;S++)R.push(P[S].clone());y[_]=R}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const P=Array.isArray(y[_])?y[_]:[y[_]],R=Array.isArray(w)?w:[w];for(let S=0;S<P.length;S++){const C=P[S];if(C.equals(R[S])===!1)return C.copy(R[S]),!0}}return!1}function x(v){const _=v.uniforms;let y=0;const w=16;let P=0;for(let R=0,S=_.length;R<S;R++){const C=_[R],I={boundary:0,storage:0},Z=Array.isArray(C.value)?C.value:[C.value];for(let ee=0,G=Z.length;ee<G;ee++){const F=Z[ee],K=h(F);I.boundary+=K.boundary,I.storage+=K.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,R>0){P=y%w;const ee=w-P;P!==0&&ee-I.boundary<0&&(y+=w-P,C.__offset=y)}y+=I.storage}return P=y%w,P>0&&(y+=w-P),v.__size=y,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:g}}function yC(){const t=sa("canvas");return t.style.display="block",t}function SC(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:yC(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,s=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let d;n!==null?d=n.getContextAttributes().alpha:d=t.alpha!==void 0?t.alpha:!1;let f=null,c=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Or,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const h=this;let p=!1,g=0,v=0,_=null,y=-1,w=null;const P=new dt,R=new dt;let S=null,C=e.width,I=e.height,Z=1,ee=null,G=null;const F=new dt(0,0,C,I),K=new dt(0,0,C,I);let le=!1;const ne=new Ih;let O=!1,Y=!1,X=null;const pe=new bt,D=new Ge,B=new H,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return _===null?Z:1}let E=n;function ge(T,$){for(let te=0;te<T.length;te++){const W=T[te],re=e.getContext(W,$);if(re!==null)return re}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rh}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),E===null){const $=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&$.shift(),E=ge($,T),E===null)throw ge($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let q,ve,ue,Ee,me,xe,Oe,Ae,ke,Pe,Re,Ne,Ye,ft,A,M,U,L,k,V,oe,b,N,se;function ce(){q=new RT(E),ve=new bT(E,q,t),q.init(ve),b=new hC(E,q,ve),ue=new dC(E,q,ve),Ee=new kT,me=new Z3,xe=new fC(E,q,ue,me,ve,b,Ee),Oe=new TT(h),Ae=new LT(h),ke=new Gb(E,ve),N=new wT(E,q,ke,ve),Pe=new DT(E,ke,Ee,N),Re=new FT(E,Pe,ke,Ee),k=new zT(E,ve,xe),M=new ET(me),Ne=new K3(h,Oe,Ae,q,ve,N,M),Ye=new _C(h,me),ft=new J3,A=new oC(q,ve),L=new ST(h,Oe,Ae,ue,Re,d,s),U=new cC(h,Re,ve),se=new xC(E,Ee,ve,ue),V=new MT(E,q,Ee,ve),oe=new IT(E,q,Ee,ve),Ee.programs=Ne.programs,h.capabilities=ve,h.extensions=q,h.properties=me,h.renderLists=ft,h.shadowMap=U,h.state=ue,h.info=Ee}ce();const ie=new vC(h,E);this.xr=ie,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(C,I,!1))},this.getSize=function(T){return T.set(C,I)},this.setSize=function(T,$,te){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,I=$,e.width=Math.floor(T*Z),e.height=Math.floor($*Z),te!==!1&&(e.style.width=T+"px",e.style.height=$+"px"),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(C*Z,I*Z).floor()},this.setDrawingBufferSize=function(T,$,te){C=T,I=$,Z=te,e.width=Math.floor(T*te),e.height=Math.floor($*te),this.setViewport(0,0,T,$)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,$,te,W){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,$,te,W),ue.viewport(P.copy(F).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,$,te,W){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,$,te,W),ue.scissor(R.copy(K).multiplyScalar(Z).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){ue.setScissorTest(le=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor.apply(L,arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha.apply(L,arguments)},this.clear=function(T=!0,$=!0,te=!0){let W=0;T&&(W|=16384),$&&(W|=256),te&&(W|=1024),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),ft.dispose(),A.dispose(),me.dispose(),Oe.dispose(),Ae.dispose(),Re.dispose(),N.dispose(),se.dispose(),Ne.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Se),ie.removeEventListener("sessionend",Te),X&&(X.dispose(),X=null),De.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ee.autoReset,$=U.enabled,te=U.autoUpdate,W=U.needsUpdate,re=U.type;ce(),Ee.autoReset=T,U.enabled=$,U.autoUpdate=te,U.needsUpdate=W,U.type=re}function Ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){const $=T.target;$.removeEventListener("dispose",Ie),Be($)}function Be(T){z(T),me.remove(T)}function z(T){const $=me.get(T).programs;$!==void 0&&($.forEach(function(te){Ne.releaseProgram(te)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,te,W,re,Le){$===null&&($=j);const ze=re.isMesh&&re.matrixWorld.determinant()<0,He=Zo(T,$,te,W,re);ue.setMaterial(W,ze);let We=te.index,Ze=1;W.wireframe===!0&&(We=Pe.getWireframeAttribute(te),Ze=2);const $e=te.drawRange,Xe=te.attributes.position;let xt=$e.start*Ze,ln=($e.start+$e.count)*Ze;Le!==null&&(xt=Math.max(xt,Le.start*Ze),ln=Math.min(ln,(Le.start+Le.count)*Ze)),We!==null?(xt=Math.max(xt,0),ln=Math.min(ln,We.count)):Xe!=null&&(xt=Math.max(xt,0),ln=Math.min(ln,Xe.count));const li=ln-xt;if(li<0||li===1/0)return;N.setup(re,W,He,te,We);let ar,yt=V;if(We!==null&&(ar=ke.get(We),yt=oe,yt.setIndex(ar)),re.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*Q()),yt.setMode(1)):yt.setMode(4);else if(re.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),ue.setLineWidth(qe*Q()),re.isLineSegments?yt.setMode(1):re.isLineLoop?yt.setMode(2):yt.setMode(3)}else re.isPoints?yt.setMode(0):re.isSprite&&yt.setMode(4);if(re.isInstancedMesh)yt.renderInstances(xt,li,re.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wu=Math.min(te.instanceCount,qe);yt.renderInstances(xt,li,Wu)}else yt.render(xt,li)},this.compile=function(T,$){function te(W,re,Le){W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,Jt(W,re,Le),W.side=nr,W.needsUpdate=!0,Jt(W,re,Le),W.side=Hi):Jt(W,re,Le)}c=A.get(T),c.init(),x.push(c),T.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(c.pushLight(W),W.castShadow&&c.pushShadow(W))}),c.setupLights(h.physicallyCorrectLights),T.traverse(function(W){const re=W.material;if(re)if(Array.isArray(re))for(let Le=0;Le<re.length;Le++){const ze=re[Le];te(ze,T,W)}else te(re,T,W)}),x.pop(),c=null};let J=null;function de(T){J&&J(T)}function Se(){De.stop()}function Te(){De.start()}const De=new Y_;De.setAnimationLoop(de),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(T){J=T,ie.setAnimationLoop(T),T===null?De.stop():De.start()},ie.addEventListener("sessionstart",Se),ie.addEventListener("sessionend",Te),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera($),$=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,$,_),c=A.get(T,x.length),c.init(),x.push(c),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ne.setFromProjectionMatrix(pe),Y=this.localClippingEnabled,O=M.init(this.clippingPlanes,Y),f=ft.get(T,m.length),f.init(),m.push(f),Je(T,$,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(ee,G),O===!0&&M.beginShadows();const te=c.state.shadowsArray;if(U.render(te,T,$),O===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),L.render(f,T),c.setupLights(h.physicallyCorrectLights),$.isArrayCamera){const W=$.cameras;for(let re=0,Le=W.length;re<Le;re++){const ze=W[re];lt(f,T,ze,ze.viewport)}}else lt(f,T,$);_!==null&&(xe.updateMultisampleRenderTarget(_),xe.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(h,T,$),N.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?c=x[x.length-1]:c=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Je(T,$,te,W){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLight)c.pushLight(T),T.castShadow&&c.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){W&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const ze=Re.update(T),He=T.material;He.visible&&f.push(T,ze,He,te,B.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||ne.intersectsObject(T))){W&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const ze=Re.update(T),He=T.material;if(Array.isArray(He)){const We=ze.groups;for(let Ze=0,$e=We.length;Ze<$e;Ze++){const Xe=We[Ze],xt=He[Xe.materialIndex];xt&&xt.visible&&f.push(T,ze,xt,te,B.z,Xe)}}else He.visible&&f.push(T,ze,He,te,B.z,null)}}const Le=T.children;for(let ze=0,He=Le.length;ze<He;ze++)Je(Le[ze],$,te,W)}function lt(T,$,te,W){const re=T.opaque,Le=T.transmissive,ze=T.transparent;c.setupLightsView(te),O===!0&&M.setGlobalState(h.clippingPlanes,te),Le.length>0&&Mn(re,$,te),W&&ue.viewport(P.copy(W)),re.length>0&&it(re,$,te),Le.length>0&&it(Le,$,te),ze.length>0&&it(ze,$,te),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Mn(T,$,te){const W=ve.isWebGL2;X===null&&(X=new zr(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?ra:Nr,minFilter:ia,samples:W&&o===!0?4:0})),h.getDrawingBufferSize(D),W?X.setSize(D.x,D.y):X.setSize(yf(D.x),yf(D.y));const re=h.getRenderTarget();h.setRenderTarget(X),h.clear();const Le=h.toneMapping;h.toneMapping=Mi,it(T,$,te),h.toneMapping=Le,xe.updateMultisampleRenderTarget(X),xe.updateRenderTargetMipmap(X),h.setRenderTarget(re)}function it(T,$,te){const W=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Le=T.length;re<Le;re++){const ze=T[re],He=ze.object,We=ze.geometry,Ze=W===null?ze.material:W,$e=ze.group;He.layers.test(te.layers)&&Nn(He,$,te,We,Ze,$e)}}function Nn(T,$,te,W,re,Le){T.onBeforeRender(h,$,te,W,re,Le),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(h,$,te,W,T,Le),re.transparent===!0&&re.side===Hi&&re.forceSinglePass===!1?(re.side=_n,re.needsUpdate=!0,h.renderBufferDirect(te,$,W,re,T,Le),re.side=nr,re.needsUpdate=!0,h.renderBufferDirect(te,$,W,re,T,Le),re.side=Hi):h.renderBufferDirect(te,$,W,re,T,Le),T.onAfterRender(h,$,te,W,re,Le)}function Jt(T,$,te){$.isScene!==!0&&($=j);const W=me.get(T),re=c.state.lights,Le=c.state.shadowsArray,ze=re.state.version,He=Ne.getParameters(T,re.state,Le,$,te),We=Ne.getProgramCacheKey(He);let Ze=W.programs;W.environment=T.isMeshStandardMaterial?$.environment:null,W.fog=$.fog,W.envMap=(T.isMeshStandardMaterial?Ae:Oe).get(T.envMap||W.environment),Ze===void 0&&(T.addEventListener("dispose",Ie),Ze=new Map,W.programs=Ze);let $e=Ze.get(We);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===ze)return bn(T,He),$e}else He.uniforms=Ne.getUniforms(T),T.onBuild(te,He,h),T.onBeforeCompile(He,h),$e=Ne.acquireProgram(He,We),Ze.set(We,$e),W.uniforms=He.uniforms;const Xe=W.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=M.uniform),bn(T,He),W.needsLights=Hu(T),W.lightsStateVersion=ze,W.needsLights&&(Xe.ambientLightColor.value=re.state.ambient,Xe.lightProbe.value=re.state.probe,Xe.directionalLights.value=re.state.directional,Xe.directionalLightShadows.value=re.state.directionalShadow,Xe.spotLights.value=re.state.spot,Xe.spotLightShadows.value=re.state.spotShadow,Xe.rectAreaLights.value=re.state.rectArea,Xe.ltc_1.value=re.state.rectAreaLTC1,Xe.ltc_2.value=re.state.rectAreaLTC2,Xe.pointLights.value=re.state.point,Xe.pointLightShadows.value=re.state.pointShadow,Xe.hemisphereLights.value=re.state.hemi,Xe.directionalShadowMap.value=re.state.directionalShadowMap,Xe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Xe.spotShadowMap.value=re.state.spotShadowMap,Xe.spotLightMatrix.value=re.state.spotLightMatrix,Xe.spotLightMap.value=re.state.spotLightMap,Xe.pointShadowMap.value=re.state.pointShadowMap,Xe.pointShadowMatrix.value=re.state.pointShadowMatrix);const xt=$e.getUniforms(),ln=Sl.seqWithValue(xt.seq,Xe);return W.currentProgram=$e,W.uniformsList=ln,$e}function bn(T,$){const te=me.get(T);te.outputEncoding=$.outputEncoding,te.instancing=$.instancing,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function Zo(T,$,te,W,re){$.isScene!==!0&&($=j),xe.resetTextureUnits();const Le=$.fog,ze=W.isMeshStandardMaterial?$.environment:null,He=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Or,We=(W.isMeshStandardMaterial?Ae:Oe).get(W.envMap||ze),Ze=W.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!W.normalMap&&!!te.attributes.tangent,Xe=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,ln=!!te.morphAttributes.color,li=W.toneMapped?h.toneMapping:Mi,ar=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=ar!==void 0?ar.length:0,qe=me.get(W),Wu=c.state.lights;if(O===!0&&(Y===!0||T!==w)){const un=T===w&&W.id===y;M.setState(W,T,un)}let Lt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Wu.state.version||qe.outputEncoding!==He||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==We||W.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==M.numPlanes||qe.numIntersection!==M.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==$e||qe.morphTargets!==Xe||qe.morphNormals!==xt||qe.morphColors!==ln||qe.toneMapping!==li||ve.isWebGL2===!0&&qe.morphTargetsCount!==yt)&&(Lt=!0):(Lt=!0,qe.__version=W.version);let lr=qe.currentProgram;Lt===!0&&(lr=Jt(W,$,re));let Oh=!1,Qo=!1,ju=!1;const jt=lr.getUniforms(),ur=qe.uniforms;if(ue.useProgram(lr.program)&&(Oh=!0,Qo=!0,ju=!0),W.id!==y&&(y=W.id,Qo=!0),Oh||w!==T){if(jt.setValue(E,"projectionMatrix",T.projectionMatrix),ve.logarithmicDepthBuffer&&jt.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Qo=!0,ju=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const un=jt.map.cameraPosition;un!==void 0&&un.setValue(E,B.setFromMatrixPosition(T.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&jt.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||re.isSkinnedMesh)&&jt.setValue(E,"viewMatrix",T.matrixWorldInverse)}if(re.isSkinnedMesh){jt.setOptional(E,re,"bindMatrix"),jt.setOptional(E,re,"bindMatrixInverse");const un=re.skeleton;un&&(ve.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),jt.setValue(E,"boneTexture",un.boneTexture,xe),jt.setValue(E,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $u=te.morphAttributes;if(($u.position!==void 0||$u.normal!==void 0||$u.color!==void 0&&ve.isWebGL2===!0)&&k.update(re,te,W,lr),(Qo||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,jt.setValue(E,"receiveShadow",re.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ur.envMap.value=We,ur.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Qo&&(jt.setValue(E,"toneMappingExposure",h.toneMappingExposure),qe.needsLights&&_a(ur,ju),Le&&W.fog===!0&&Ye.refreshFogUniforms(ur,Le),Ye.refreshMaterialUniforms(ur,W,Z,I,X),Sl.upload(E,qe.uniformsList,ur,xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sl.upload(E,qe.uniformsList,ur,xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&jt.setValue(E,"center",re.center),jt.setValue(E,"modelViewMatrix",re.modelViewMatrix),jt.setValue(E,"normalMatrix",re.normalMatrix),jt.setValue(E,"modelMatrix",re.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const un=W.uniformsGroups;for(let Xu=0,rx=un.length;Xu<rx;Xu++)if(ve.isWebGL2){const zh=un[Xu];se.update(zh,lr),se.bind(zh,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function _a(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function Hu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,$,te){me.get(T.texture).__webglTexture=$,me.get(T.depthTexture).__webglTexture=te;const W=me.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=te===void 0,W.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,$){const te=me.get(T);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(T,$=0,te=0){_=T,g=$,v=te;let W=!0,re=null,Le=!1,ze=!1;if(T){const We=me.get(T);We.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),W=!1):We.__webglFramebuffer===void 0?xe.setupRenderTarget(T):We.__hasExternalTextures&&xe.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const $e=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(re=$e[$],Le=!0):ve.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?re=me.get(T).__webglMultisampledFramebuffer:re=$e,P.copy(T.viewport),R.copy(T.scissor),S=T.scissorTest}else P.copy(F).multiplyScalar(Z).floor(),R.copy(K).multiplyScalar(Z).floor(),S=le;if(ue.bindFramebuffer(36160,re)&&ve.drawBuffers&&W&&ue.drawBuffers(T,re),ue.viewport(P),ue.scissor(R),ue.setScissorTest(S),Le){const We=me.get(T.texture);E.framebufferTexture2D(36160,36064,34069+$,We.__webglTexture,te)}else if(ze){const We=me.get(T.texture),Ze=$||0;E.framebufferTextureLayer(36160,36064,We.__webglTexture,te||0,Ze)}y=-1},this.readRenderTargetPixels=function(T,$,te,W,re,Le,ze){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){ue.bindFramebuffer(36160,He);try{const We=T.texture,Ze=We.format,$e=We.type;if(Ze!==qn&&b.convert(Ze)!==E.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=$e===ra&&(q.has("EXT_color_buffer_half_float")||ve.isWebGL2&&q.has("EXT_color_buffer_float"));if($e!==Nr&&b.convert($e)!==E.getParameter(35738)&&!($e===br&&(ve.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-W&&te>=0&&te<=T.height-re&&E.readPixels($,te,W,re,b.convert(Ze),b.convert($e),Le)}finally{const We=_!==null?me.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,We)}}},this.copyFramebufferToTexture=function(T,$,te=0){const W=Math.pow(2,-te),re=Math.floor($.image.width*W),Le=Math.floor($.image.height*W);xe.setTexture2D($,0),E.copyTexSubImage2D(3553,te,0,0,T.x,T.y,re,Le),ue.unbindTexture()},this.copyTextureToTexture=function(T,$,te,W=0){const re=$.image.width,Le=$.image.height,ze=b.convert(te.format),He=b.convert(te.type);xe.setTexture2D(te,0),E.pixelStorei(37440,te.flipY),E.pixelStorei(37441,te.premultiplyAlpha),E.pixelStorei(3317,te.unpackAlignment),$.isDataTexture?E.texSubImage2D(3553,W,T.x,T.y,re,Le,ze,He,$.image.data):$.isCompressedTexture?E.compressedTexSubImage2D(3553,W,T.x,T.y,$.mipmaps[0].width,$.mipmaps[0].height,ze,$.mipmaps[0].data):E.texSubImage2D(3553,W,T.x,T.y,ze,He,$.image),W===0&&te.generateMipmaps&&E.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,$,te,W,re=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,ze=T.max.y-T.min.y+1,He=T.max.z-T.min.z+1,We=b.convert(W.format),Ze=b.convert(W.type);let $e;if(W.isData3DTexture)xe.setTexture3D(W,0),$e=32879;else if(W.isDataArrayTexture)xe.setTexture2DArray(W,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(37440,W.flipY),E.pixelStorei(37441,W.premultiplyAlpha),E.pixelStorei(3317,W.unpackAlignment);const Xe=E.getParameter(3314),xt=E.getParameter(32878),ln=E.getParameter(3316),li=E.getParameter(3315),ar=E.getParameter(32877),yt=te.isCompressedTexture?te.mipmaps[0]:te.image;E.pixelStorei(3314,yt.width),E.pixelStorei(32878,yt.height),E.pixelStorei(3316,T.min.x),E.pixelStorei(3315,T.min.y),E.pixelStorei(32877,T.min.z),te.isDataTexture||te.isData3DTexture?E.texSubImage3D($e,re,$.x,$.y,$.z,Le,ze,He,We,Ze,yt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D($e,re,$.x,$.y,$.z,Le,ze,He,We,yt.data)):E.texSubImage3D($e,re,$.x,$.y,$.z,Le,ze,He,We,Ze,yt),E.pixelStorei(3314,Xe),E.pixelStorei(32878,xt),E.pixelStorei(3316,ln),E.pixelStorei(3315,li),E.pixelStorei(32877,ar),re===0&&W.generateMipmaps&&E.generateMipmap($e),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){g=0,v=0,_=null,ue.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ex extends SC{}ex.prototype.isWebGL1Renderer=!0;class wC extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gn extends sr{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const d=[],f=new H,c=new H,m=[],x=[],h=[],p=[];for(let g=0;g<=i;g++){const v=[],_=g/i;let y=0;g==0&&s==0?y=.5/n:g==i&&l==Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const P=w/n;f.x=-e*Math.cos(r+P*o)*Math.sin(s+_*a),f.y=e*Math.cos(s+_*a),f.z=e*Math.sin(r+P*o)*Math.sin(s+_*a),x.push(f.x,f.y,f.z),c.copy(f).normalize(),h.push(c.x,c.y,c.z),p.push(P+y,1-_),v.push(u++)}d.push(v)}for(let g=0;g<i;g++)for(let v=0;v<n;v++){const _=d[g][v+1],y=d[g][v],w=d[g+1][v],P=d[g+1][v+1];(g!==0||s>0)&&m.push(_,y,P),(g!==i-1||l<Math.PI)&&m.push(y,w,P)}this.setIndex(m),this.setAttribute("position",new si(x,3)),this.setAttribute("normal",new si(h,3)),this.setAttribute("uv",new si(p,2))}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ng={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class MC{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,o===!1&&r.onStart!==void 0&&r.onStart(d,s,a),o=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,c=u.length;f<c;f+=2){const m=u[f],x=u[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const bC=new MC;class tx{constructor(e){this.manager=e!==void 0?e:bC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class EC extends tx{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Ng.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=sa("img");function l(){d(),Ng.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){d(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class TC extends tx{constructor(e){super(e)}load(e,n,i,r){const o=new an,s=new EC(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class CC extends ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const rd=new bt,Og=new H,zg=new H;class AC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Og.setFromMatrixPosition(e.matrixWorld),n.position.copy(Og),zg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zg),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fg=new bt,gs=new H,od=new H;class PC extends AC{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),i.position.copy(gs),od.copy(i.position),od.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(od),i.updateMatrixWorld(),r.makeTranslation(-gs.x,-gs.y,-gs.z),Fg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fg)}}class LC extends CC{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ug{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const Bg={type:"change"},sd={type:"start"},Vg={type:"end"};class RC extends Gr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",ft),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Bg),i.update(),o=r.NONE},this.update=function(){const b=new H,N=new Fr().setFromUnitVectors(e.up,new H(0,1,0)),se=N.clone().invert(),ce=new H,ie=new Fr,we=2*Math.PI;return function(){const Ce=i.object.position;b.copy(Ce).sub(i.target),b.applyQuaternion(N),a.setFromVector3(b),i.autoRotate&&o===r.NONE&&C(R()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=i.minAzimuthAngle,Be=i.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Be)&&(Ie<-Math.PI?Ie+=we:Ie>Math.PI&&(Ie-=we),Be<-Math.PI?Be+=we:Be>Math.PI&&(Be-=we),Ie<=Be?a.theta=Math.max(Ie,Math.min(Be,a.theta)):a.theta=a.theta>(Ie+Be)/2?Math.max(Ie,a.theta):Math.min(Be,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),b.setFromSpherical(a),b.applyQuaternion(se),Ce.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),u=1,f||ce.distanceToSquared(i.object.position)>s||8*(1-ie.dot(i.object.quaternion))>s?(i.dispatchEvent(Bg),ce.copy(i.object.position),ie.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",U),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",Pe),i.domElement.removeEventListener("wheel",Ye),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",ke),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ft)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Ug,l=new Ug;let u=1;const d=new H;let f=!1;const c=new Ge,m=new Ge,x=new Ge,h=new Ge,p=new Ge,g=new Ge,v=new Ge,_=new Ge,y=new Ge,w=[],P={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function I(b){l.phi-=b}const Z=function(){const b=new H;return function(se,ce){b.setFromMatrixColumn(ce,0),b.multiplyScalar(-se),d.add(b)}}(),ee=function(){const b=new H;return function(se,ce){i.screenSpacePanning===!0?b.setFromMatrixColumn(ce,1):(b.setFromMatrixColumn(ce,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(se),d.add(b)}}(),G=function(){const b=new H;return function(se,ce){const ie=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;b.copy(we).sub(i.target);let fe=b.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*se*fe/ie.clientHeight,i.object.matrix),ee(2*ce*fe/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(se*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),ee(ce*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(b){c.set(b.clientX,b.clientY)}function ne(b){v.set(b.clientX,b.clientY)}function O(b){h.set(b.clientX,b.clientY)}function Y(b){m.set(b.clientX,b.clientY),x.subVectors(m,c).multiplyScalar(i.rotateSpeed);const N=i.domElement;C(2*Math.PI*x.x/N.clientHeight),I(2*Math.PI*x.y/N.clientHeight),c.copy(m),i.update()}function X(b){_.set(b.clientX,b.clientY),y.subVectors(_,v),y.y>0?F(S()):y.y<0&&K(S()),v.copy(_),i.update()}function pe(b){p.set(b.clientX,b.clientY),g.subVectors(p,h).multiplyScalar(i.panSpeed),G(g.x,g.y),h.copy(p),i.update()}function D(b){b.deltaY<0?K(S()):b.deltaY>0&&F(S()),i.update()}function B(b){let N=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),N=!0;break}N&&(b.preventDefault(),i.update())}function j(){if(w.length===1)c.set(w[0].pageX,w[0].pageY);else{const b=.5*(w[0].pageX+w[1].pageX),N=.5*(w[0].pageY+w[1].pageY);c.set(b,N)}}function Q(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const b=.5*(w[0].pageX+w[1].pageX),N=.5*(w[0].pageY+w[1].pageY);h.set(b,N)}}function E(){const b=w[0].pageX-w[1].pageX,N=w[0].pageY-w[1].pageY,se=Math.sqrt(b*b+N*N);v.set(0,se)}function ge(){i.enableZoom&&E(),i.enablePan&&Q()}function q(){i.enableZoom&&E(),i.enableRotate&&j()}function ve(b){if(w.length==1)m.set(b.pageX,b.pageY);else{const se=oe(b),ce=.5*(b.pageX+se.x),ie=.5*(b.pageY+se.y);m.set(ce,ie)}x.subVectors(m,c).multiplyScalar(i.rotateSpeed);const N=i.domElement;C(2*Math.PI*x.x/N.clientHeight),I(2*Math.PI*x.y/N.clientHeight),c.copy(m)}function ue(b){if(w.length===1)p.set(b.pageX,b.pageY);else{const N=oe(b),se=.5*(b.pageX+N.x),ce=.5*(b.pageY+N.y);p.set(se,ce)}g.subVectors(p,h).multiplyScalar(i.panSpeed),G(g.x,g.y),h.copy(p)}function Ee(b){const N=oe(b),se=b.pageX-N.x,ce=b.pageY-N.y,ie=Math.sqrt(se*se+ce*ce);_.set(0,ie),y.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),F(y.y),v.copy(_)}function me(b){i.enableZoom&&Ee(b),i.enablePan&&ue(b)}function xe(b){i.enableZoom&&Ee(b),i.enableRotate&&ve(b)}function Oe(b){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Ae),i.domElement.addEventListener("pointerup",ke)),L(b),b.pointerType==="touch"?A(b):Re(b))}function Ae(b){i.enabled!==!1&&(b.pointerType==="touch"?M(b):Ne(b))}function ke(b){k(b),w.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",ke)),i.dispatchEvent(Vg),o=r.NONE}function Pe(b){k(b)}function Re(b){let N;switch(b.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Wr.DOLLY:if(i.enableZoom===!1)return;ne(b),o=r.DOLLY;break;case Wr.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;O(b),o=r.PAN}else{if(i.enableRotate===!1)return;le(b),o=r.ROTATE}break;case Wr.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;le(b),o=r.ROTATE}else{if(i.enablePan===!1)return;O(b),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(sd)}function Ne(b){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;Y(b);break;case r.DOLLY:if(i.enableZoom===!1)return;X(b);break;case r.PAN:if(i.enablePan===!1)return;pe(b);break}}function Ye(b){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(b.preventDefault(),i.dispatchEvent(sd),D(b),i.dispatchEvent(Vg))}function ft(b){i.enabled===!1||i.enablePan===!1||B(b)}function A(b){switch(V(b),w.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;j(),o=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;Q(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(),o=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;q(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(sd)}function M(b){switch(V(b),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ue(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(b),i.update();break;default:o=r.NONE}}function U(b){i.enabled!==!1&&b.preventDefault()}function L(b){w.push(b)}function k(b){delete P[b.pointerId];for(let N=0;N<w.length;N++)if(w[N].pointerId==b.pointerId){w.splice(N,1);return}}function V(b){let N=P[b.pointerId];N===void 0&&(N=new Ge,P[b.pointerId]=N),N.set(b.pageX,b.pageY)}function oe(b){const N=b.pointerId===w[0].pointerId?w[1]:w[0];return P[N.pointerId]}i.domElement.addEventListener("contextmenu",U),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",Pe),i.domElement.addEventListener("wheel",Ye,{passive:!1}),this.update()}}const DC=""+new URL("sun_texture-f22b1cfb.jpg",import.meta.url).href,IC=""+new URL("earth_texture-d7df515b.jpg",import.meta.url).href,kC=""+new URL("mercury_texture-2583dfbf.jpeg",import.meta.url).href,NC=""+new URL("venus_texture-1fd6f2c2.jpg",import.meta.url).href,OC=""+new URL("mars_texture-79db24da.jpeg",import.meta.url).href,zC=""+new URL("jupiter_texture-0bd844bf.jpg",import.meta.url).href,FC=""+new URL("saturn_texture-0d39a4a4.jpg",import.meta.url).href,UC=""+new URL("uranus_texture-d15239d4.jpg",import.meta.url).href,BC=""+new URL("neptune_texture-cb42ea82.jpg",import.meta.url).href,VC=""+new URL("frame-0678e224.png",import.meta.url).href,GC=be.div``,HC=be.canvas``;function nx(){return ye.useEffect(()=>{const t=new TC,e={width:800,height:window.innerHeight},n=t.load(VC),i=new wC;i.background=n;const r=new ht;r.translateX(-10),r.translateY(-5),r.translateZ(30),r.rotateX(.5),i.add(r);const o=t.load(IC,Ne=>{console.log(Ne)}),s=new Vn({map:o}),a=new Gn(1.5,64,64);a.translate(0,0,-20);const l=new Ot(a,s),u=new ht;u.add(l),r.add(u);const d=new Gn(.5,64,64);d.translate(0,0,-10);const f=t.load(kC),c=new Vn({map:f}),m=new Ot(d,c),x=new ht;x.add(m),r.add(x);const h=new Gn(1,64,64);h.translate(0,0,-15);const p=t.load(NC),g=new Vn({map:p}),v=new Ot(h,g),_=new ht;_.add(v),r.add(_);const y=new Gn(1,64,64);y.translate(0,0,-25);const w=t.load(OC),P=new Vn({map:w}),R=new Ot(y,P),S=new ht;S.add(R),r.add(S);const C=new Gn(2.5,64,64);C.translate(0,0,-30);const I=t.load(zC),Z=new Vn({map:I}),ee=new Ot(C,Z),G=new ht;G.add(ee),r.add(G);const F=new Gn(3,64,64);F.translate(0,0,-40);const K=t.load(FC),le=new Vn({map:K}),ne=new Ot(F,le),O=new ht;O.add(ne);const Y=new Gn(2,64,64);Y.translate(0,0,-50);const X=t.load(UC),pe=new Vn({map:X}),D=new Ot(Y,pe),B=new ht;B.add(D),r.add(B);const j=new Gn(2.3,64,64);j.translate(0,0,-55);const Q=t.load(BC),E=new Vn({map:Q}),ge=new Ot(j,E),q=new ht;q.add(ge),r.add(q);const ve=t.load(DC),ue=new Gn(7,64,64),Ee=new Vn({map:ve}),me=new Ot(ue,Ee);r.add(me);const xe=new LC(16777215,1,1e3);xe.position.set(0,0,0),i.add(xe);const Oe=new pn(75,e.width/e.height,.1,1e3);Oe.position.z=80,Oe.position.y=-10,i.add(Oe);const Ae=document.querySelector("#THREEJSCANVA"),ke=new ex({canvas:Ae});ke.setSize(800,600),ke.setPixelRatio(2),ke.render(i,Oe);const Pe=new RC(Oe,Ae);Pe.enableDamping=!0,Pe.enablePan=!1,Pe.enableZoom=!1;const Re=()=>{x.rotateY(.03),_.rotateY(.02),u.rotateY(.015),S.rotateY(.009),G.rotateY(.008),O.rotateY(.007),B.rotateY(.006),q.rotateY(.005),Pe.update(),ke.render(i,Oe),window.requestAnimationFrame(Re)};Re()},[]),ae(GC,{children:ae(HC,{id:"THREEJSCANVA"})})}function WC(){return Fe(qo,{children:[ae(p_,{titleFontSize:"40px",children:"Discorver the universe across the quizzes"}),ae(MM,{}),ae(nx,{})]})}const jC=be.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`,$C=be.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`,XC=be.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`,Gg=be.label`
    text-align: left;
    margin-bottom: 8px;
    margin-top: 10px;
`,Hg=be.input`
    border-radius: 50px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    border: 2.5px solid lightgray;
`;function qC(){return ae(jC,{children:Fe($C,{children:[ae(XC,{children:"LOGIN"}),Fe(Tf,{children:[ae(Gg,{children:"Type your e-mail: "}),ae(Hg,{placeholder:"Type your e-mail here",type:"text"})]}),ae(Gg,{children:"Type your password: "}),ae(Hg,{placeholder:"Type your password here",type:"password"}),ae(Pn,{children:"Make Login"}),ae(Cr,{afterBeforeBorder:"2px",children:"OR"}),Fe(Pn,{children:[ae($n,{src:R_}),"Make login with Google"]}),ae(Cr,{textSize:"12px",children:"If you do not have an account"}),ae(Cr,{textColor:"#4025E4",textSize:"12px",children:ae(Ns,{to:"/signup",children:"CLICK HERE"})})]})})}function YC(){return Fe(qo,{contentDisplay:"flex",children:[ae(p_,{titleFontSize:"40px",children:"Discorver the universe across the quizzes"}),ae(qC,{}),ae(nx,{})]})}const KC=be.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    height: 300px;
    width: 200px;
`,ZC=be.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    padding-top: 5px;
`,Wg=be.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 8px;
    margin-top: 0;
    transition: all 0.4s;
    &:hover {
        cursor: pointer;
        background-color: lightgray;
        border-bottom: 2px solid lightgreen;
    }
    box-sizing: border-box;
    padding: 7px;
`,ix=""+new URL("profile_icon-979ab0b4.png",import.meta.url).href,QC=""+new URL("Sample_User_Icon-5158855d.png",import.meta.url).href,JC=""+new URL("email_icon-0304d04f.png",import.meta.url).href,eA=""+new URL("password_icon-47b59139.png",import.meta.url).href,tA=be.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`,nA=be.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 2px solid lightgray;
`,jg=be.p`
    color: black;
`,iA=be.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`,rl=be.label`
    color: black;
`,ol=be.div`
    width: 300px;
    margin: 10px;
`,ad=be.div`
    position: relative;
`,ld=be.input`
    width: 100%;
    height: 40px;
    padding-left: 40px;
`,ud=be.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
`;function rA(){return Fe(tA,{children:[ae(jg,{children:"Your profile photo: "}),Fe(nA,{children:[ae($n,{src:ix,imgWidth:"80px",imgHeight:"80px"}),ae(Pn,{buttoMarginLeft:"30px",buttonHeight:"40px",buttonWidth:"200px",marginTop:"0px",buttonBackground:"lightblue",children:"CHANGE PHOTO"}),ae(Pn,{buttoMarginLeft:"30px",buttonHeight:"40px",buttonWidth:"200px",marginTop:"0px",buttonBackground:"red",children:"REMOVE PHOTO"})]}),ae(jg,{children:"Your personal information: "}),Fe(iA,{children:[Fe(ol,{children:[ae(rl,{children:"Your username: "}),Fe(ad,{children:[ae(ud,{src:QC}),ae(ld,{type:"text",value:"rafael"})]})]}),Fe(ol,{children:[ae(rl,{children:"Your e-mail:"}),Fe(ad,{children:[ae(ud,{src:JC}),ae(ld,{type:"text",value:"rafael@gamil.com"})]})]}),Fe(ol,{children:[ae(rl,{children:"Your password: "}),Fe(ad,{children:[ae(ud,{src:eA}),ae(ld,{type:"password"})]})]}),Fe(ol,{children:[ae(rl,{children:"Do you want to change password?"}),ae(Pn,{buttonWidth:"300px",buttonHeight:"40px",marginTop:"3px",children:"Make login to change password"})]})]}),ae(Pn,{buttonWidth:"200px",buttonBackground:"green",buttonHeight:"40px",children:"SAVE CHANGES"})]})}const oA=be.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
`,sA=be.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-bottom: 2px solid lightgray;
    width: 90%;
`,aA=be.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 20px;
`,lA=be.div`
    width: 90%;
`,Bn=be.p`
    color: ${t=>t.textColor||"black"};
    margin-bottom: 10px;
    margin-top: 10px;
`,uA=be.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
`;function cA(){return ae(oA,{children:Fe(aA,{children:[Fe(sA,{children:[ae(Bn,{children:"GENERAL INFORMATION: "}),ae(Bn,{children:"Number of quizzes created: 10"}),ae(Bn,{children:"Number of quizzes played: 50"}),ae(Bn,{children:"Number of answered questions: 100"}),Fe(uA,{children:[ae(Bn,{textColor:"green",children:"Right: 90"}),ae(Bn,{textColor:"red",children:"Wrong: 10"})]})]}),Fe(lA,{children:[ae(Bn,{children:"Created quizzes information: "}),ae(Bn,{children:"Number of users that have played your quizzes: 200"}),ae(Bn,{children:"Number of likes in your quizzes received: 150"}),ae(Bn,{children:"Number of right answers: 100"}),ae(Bn,{children:"Number of wrong answers: 200"})]})]})})}const dA=""+new URL("Line_Chart_icon-73f6d90a.png",import.meta.url).href;function fA(){const[t,e]=ye.useState(!0);return Fe(qo,{children:[ae(Fu,{}),Fe(Th,{children:[ae(KC,{children:Fe(ZC,{children:[Fe(Wg,{onClick:()=>{e(!0)},children:[ae($n,{src:ix,imgWidth:"30px",imgHeight:"30px"}),ae(Cr,{children:"PROFILE"})]}),Fe(Wg,{onClick:()=>{e(!1)},children:[ae($n,{src:dA,imgWidth:"30px",imgHeight:"30px"}),ae(Cr,{children:"STATISTICS"})]})]})}),t?ae(rA,{}):ae(cA,{})]})]})}const hA=""+new URL("kick_buto-3ecef320.png",import.meta.url).href,pA=be.div`
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`,mA=be.h1`
    color: black;
    margin: 5px;
`,gA=be.h4`
    color: black;
`,vA=be.img`
    width: 100px;
    height: 100px;
    margin: 0;
    position: absolute;
    top: 20px;
    right: 180px;
`;function _A({pointMade:t,maxPoints:e}){return Fe(pA,{children:[ae(mA,{children:"You rock!"}),ae(vA,{src:hA}),Fe(gA,{children:["Congratulations my fella, you made ",t," of ",e," points"]}),ae(Pn,{children:"EXPLORE MORE!"})]})}const xA=be.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`,yA=be.button`
    width: 350px;
    height: 50px;
    margin: 5px;
    background-color: #D9D9D9;
    border-radius: 0px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
        background-color: #696969;
    };
`,SA=be.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`,wA=be.h2`
    color: black;
`,MA=be.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
`,bA=be.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
`,EA=be.div`
    background-color: ${t=>t.answerColor||"gray"};
    width: 100px;
    height: 10px;
    margin-right: 5px;
`;be.p`
    color: black;
`;let hr=0,$g=0;function TA({ListOfQuestions:t}){let e=new Array(t.length).fill("gray");e[0]="yellow";const[n,i]=ye.useState(!1),[r,o]=ye.useState(t[hr]),[s,a]=ye.useState(e);function l(u){let d=[...s];r.options[u].iR===1?(d[hr]="green",$g+=1):d[hr]="red",hr+=1,hr<t.length?(d[hr]="yellow",a(d),o(t[hr])):(a(d),i(!n))}return Fe(xA,{children:[ae(MA,{children:ae(bA,{children:s.map((u,d)=>ae(EA,{answerColor:u},d))})}),n?ae(_A,{pointMade:$g,maxPoints:t.length}):Fe(Tf,{children:[ae(wA,{children:r.question}),ae(SA,{children:r.options.map((u,d)=>ae(yA,{onClick:()=>{l(d)},children:u.text},d))})]})]})}function CA(){return Fe(qo,{children:[ae(Fu,{}),ae(Th,{children:ae(m_,{children:ae(TA,{ListOfQuestions:{id:"sdj8vsib58",owner_id:"dofoi8sfw38",title:"Imagine one title here",number_of_questions:6,quiz_cover:null,number_of_players:12,questions:[{questions_image:null,question:"Who is the creator of naruto",options:[{text:"Masashi kishimoto",iR:1},{text:"Akira toriama",iR:0},{text:"junji ito",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the creator of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the sadsadas of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the creaasdasdasdtor of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]}]}.questions})})})]})}const AA=""+new URL("right_arrow-00ade554.png",import.meta.url).href,PA=""+new URL("left_arrow-8481ff3b.png",import.meta.url).href;be.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
`;be.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
    
`;be.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;const sl=be.input`
    width: 350px;
    height: 50px;
    margin: 5px;
    background-color: ${t=>t.selected||"#D9D9D9"};
    border-radius: 0px;
    transition: all 0.3s;
    &:focus{
        outline: none;
        border: 1.5px solid lightgreen;
    }
    font-size: 20px;
    box-sizing: border-box;
    padding: 7px;
    border: none;
`,LA=be.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`,RA=be.textarea`
    font-size: 20px;
    width: 90%;
    height: 100px;
    margin: 5px;
    resize: none;
    border: none;
    border-bottom: 3px solid lightgray;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightgreen;
    }
`,DA=be.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 70%;
`,Xg=be.img`
    width: 50px;
    height: 60px;
    position: absolute;
    top: ${t=>t.Top||"auto"};
    right: ${t=>t.Right||"auto"};
    left: ${t=>t.Left||"auto"};
    transition: all 0.4s;
    &:hover {
        cursor: pointer;
        transform: scale(1.3);
        
    }
    pointer-events: ${t=>t.enabled};
`,IA=be.button`
    border-radius: 50px;
    margin-top: "15px";
    margin-left:  "0px";
    background-color: lightgray;
    height: "60px";
    width: "300px";
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    position: absolute;
    bottom: 30px;
    right: 15px;
`,kA=be.h3`
    color: black;
`;let Ni=-1;function NA(){const t={question:"",isDone:!1,options:[{text:"",iR:0},{text:"",iR:0},{text:"",iR:0},{text:"",iR:0}]},[e,n]=ye.useState([]),[i,r]=ye.useState(!1),[o,s]=ye.useState(!1),[a,l]=ye.useState(-1),[u,d]=ye.useState(t);function f(x,h){s(!1),r(!1),l(-1);let p={...u},g=0;h<4?p.options[h]={text:x,isR:0}:p.question=x,d(p),p.options.forEach(v=>{v.text.length>0&&(g+=1)}),p.question.length>0&&g==4&&r(!0)}function c(){const x={...u};x.options[a].iR=1,x.isDone=!0,e.push(x),console.log(e),d(t),l(-1),r(!1),Ni==-1&&(Ni+=2)}function m(x){Ni+=x,Ni>=e.length?d(t):d(e[Ni])}return Fe(qo,{children:[ae(Fu,{}),Fe(Th,{children:[ae(Xg,{src:PA,Top:"50vh",Left:"30px",enabled:Ni>0?"all":"none",onClick:()=>{m(-1)}}),ae(Xg,{src:AA,Top:"50vh",Right:"30px",enabled:Ni<e.length&&Ni>-1?"all":"none",onClick:()=>{m(1)}}),Fe(m_,{children:[Fe(DA,{children:[ae(RA,{value:u.question,placeholder:"TYPE THE QUESTION HERE",maxLength:200,onChange:x=>{f(x.target.value,4)}}),Fe(LA,{children:[ae(sl,{value:u.options[0].text,selected:a==0&&"green",placeholder:"FIRST OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,0)},onClick:()=>{i&&l(0),s(!0)}}),ae(sl,{value:u.options[1].text,selected:a==1&&"green",placeholder:"SECOND OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,1)},onClick:()=>{i&&l(1),s(!0)}}),ae(sl,{value:u.options[2].text,selected:a==2&&"green",placeholder:"THIRD OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,2)},onClick:()=>{i&&l(2),s(!0)}}),ae(sl,{value:u.options[3].text,selected:a==3&&"green",placeholder:"FOURTH OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,3)},onClick:()=>{i&&l(3),s(!0)}})]})]}),i&&ae(kA,{children:"select the options that is the right answer!"})]}),ae(IA,{onClick:()=>{o&&c()},children:"FINISH AND ADD QUESTION"})]})]})}const OA=cM([{path:"/",element:ae(mM,{})},{path:"/login",element:ae(YC,{})},{path:"/signup",element:ae(WC,{})},{path:"/settings",element:ae(fA,{})},{path:"/playQuiz",element:ae(CA,{})},{path:"/createQuiz",element:ae(NA,{})}]);dd.createRoot(document.getElementById("root")).render(ae(Tf,{children:ae(nM,{router:OA})}));
