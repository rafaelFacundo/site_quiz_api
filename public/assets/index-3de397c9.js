function J_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ks={},tx={get exports(){return ks},set exports(t){ks=t}},ql={},He={},nx={get exports(){return He},set exports(t){He=t}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),ix=Symbol.for("react.portal"),rx=Symbol.for("react.fragment"),ox=Symbol.for("react.strict_mode"),sx=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),lx=Symbol.for("react.context"),ux=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),dx=Symbol.for("react.memo"),fx=Symbol.for("react.lazy"),Rh=Symbol.iterator;function hx(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Wg={};function jo(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jg(){}jg.prototype=jo.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}var gf=mf.prototype=new jg;gf.constructor=mf;Hg(gf,jo.prototype);gf.isPureReactComponent=!0;var Dh=Array.isArray,$g=Object.prototype.hasOwnProperty,vf={current:null},Xg={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)$g.call(e,i)&&!Xg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:t,key:o,ref:s,props:r,_owner:vf.current}}function px(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mx(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case oa:case ix:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Vu(s,0):i,Dh(r)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),ol(r,e,n,"",function(u){return u})):r!=null&&(_f(r)&&(r=px(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Ih,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Dh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Vu(o,a);s+=ol(o,e,n,l,r)}else if(l=hx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Vu(o,a++),s+=ol(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(o){return e.call(n,o,r++)}),i}function gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},sl={transition:null},vx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:sl,ReactCurrentOwner:vf};We.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=jo;We.Fragment=rx;We.Profiler=sx;We.PureComponent=mf;We.StrictMode=ox;We.Suspense=cx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$g.call(e,l)&&!Xg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:oa,type:t.type,key:r,ref:o,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ax,_context:t},t.Consumer=t};We.createElement=qg;We.createFactory=function(t){var e=qg.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:ux,render:t}};We.isValidElement=_f;We.lazy=function(t){return{$$typeof:fx,_payload:{_status:-1,_result:t},_init:gx}};We.memo=function(t,e){return{$$typeof:dx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=sl.transition;sl.transition={};try{t()}finally{sl.transition=e}};We.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};We.useCallback=function(t,e){return Zt.current.useCallback(t,e)};We.useContext=function(t){return Zt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Zt.current.useEffect(t,e)};We.useId=function(){return Zt.current.useId()};We.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Zt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};We.useRef=function(t){return Zt.current.useRef(t)};We.useState=function(t){return Zt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Zt.current.useTransition()};We.version="18.2.0";(function(t){t.exports=We})(nx);const sa=ex(He),id=J_({__proto__:null,default:sa},[He]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=He,xx=Symbol.for("react.element"),yx=Symbol.for("react.fragment"),Sx=Object.prototype.hasOwnProperty,wx=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mx={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Sx.call(e,i)&&!Mx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xx,type:t,key:o,ref:s,props:r,_owner:wx.current}}ql.Fragment=yx;ql.jsx=Yg;ql.jsxs=Yg;(function(t){t.exports=ql})(tx);const xf=ks.Fragment,ae=ks.jsx,ze=ks.jsxs;var rd={},od={},bx={get exports(){return od},set exports(t){od=t}},yn={},sd={},Ex={get exports(){return sd},set exports(t){sd=t}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var Y=O.length;O.push(q);e:for(;0<Y;){var de=Y-1>>>1,D=O[de];if(0<r(D,q))O[de]=q,O[Y]=D,Y=de;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var q=O[0],Y=O.pop();if(Y!==q){O[0]=Y;e:for(var de=0,D=O.length,F=D>>>1;de<F;){var j=2*(de+1)-1,Q=O[j],E=j+1,ge=O[E];if(0>r(Q,Y))E<D&&0>r(ge,Q)?(O[de]=ge,O[E]=Y,de=E):(O[de]=Q,O[j]=Y,de=j);else if(E<D&&0>r(ge,Y))O[de]=ge,O[E]=Y,de=E;else break e}}return q}function r(O,q){var Y=O.sortIndex-q.sortIndex;return Y!==0?Y:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,c=3,g=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=O)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function y(O){if(p=!1,_(O),!x)if(n(l)!==null)x=!0,le(S);else{var q=n(u);q!==null&&ee(y,q.startTime-O)}}function S(O,q){x=!1,p&&(p=!1,m(w),w=-1),g=!0;var Y=c;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||O&&!Z());){var de=f.callback;if(typeof de=="function"){f.callback=null,c=f.priorityLevel;var D=de(f.expirationTime<=q);q=t.unstable_now(),typeof D=="function"?f.callback=D:f===n(l)&&i(l),_(q)}else i(l);f=n(l)}if(f!==null)var F=!0;else{var j=n(u);j!==null&&ee(y,j.startTime-q),F=!1}return F}finally{f=null,c=Y,g=!1}}var P=!1,R=null,w=-1,C=5,I=-1;function Z(){return!(t.unstable_now()-I<C)}function ie(){if(R!==null){var O=t.unstable_now();I=O;var q=!0;try{q=R(!0,O)}finally{q?U():(P=!1,R=null)}}else P=!1}var U;if(typeof v=="function")U=function(){v(ie)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,K=B.port2;B.port1.onmessage=ie,U=function(){K.postMessage(null)}}else U=function(){h(ie,0)};function le(O){R=O,P||(P=!0,U())}function ee(O,q){w=h(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,le(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(c){case 1:case 2:case 3:var q=3;break;default:q=c}var Y=c;c=q;try{return O()}finally{c=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=c;c=O;try{return q()}finally{c=Y}},t.unstable_scheduleCallback=function(O,q,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,O={id:d++,callback:q,priorityLevel:O,startTime:Y,expirationTime:D,sortIndex:-1},Y>de?(O.sortIndex=Y,e(u,O),n(l)===null&&O===n(u)&&(p?(m(w),w=-1):p=!0,ee(y,Y-de))):(O.sortIndex=D,e(l,O),x||g||(x=!0,le(S))),O},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(O){var q=c;return function(){var Y=c;c=q;try{return O.apply(this,arguments)}finally{c=Y}}}})(Kg);(function(t){t.exports=Kg})(Ex);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg=He,xn=sd;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,Ns={};function Ur(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(Ns[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kh={},Nh={};function Cx(t){return ad.call(Nh,t)?!0:ad.call(kh,t)?!1:Tx.test(t)?Nh[t]=!0:(kh[t]=!0,!1)}function Ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Px(t,e,n,i){if(e===null||typeof e>"u"||Ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,Sf);Ut[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,Sf);Ut[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,Sf);Ut[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Px(e,n,r,i)&&(n=null),i||r===null?Cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),ao=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),e0=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),cd=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Gu;function gs(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Hu=!1;function Wu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gs(t):""}function Lx(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case ao:return"Portal";case ld:return"Profiler";case Mf:return"StrictMode";case ud:return"Suspense";case cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Jg:return(t._context.displayName||"Context")+".Provider";case bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function Rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dx(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=Dx(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fd(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function hd(t,e){r0(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function Mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(vs(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function o0(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,a0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(t){Ix.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ws[e]=ws[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ws.hasOwnProperty(t)&&ws[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,bo=null,Eo=null;function Vh(t){if(t=ua(t)){if(typeof yd!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Jl(e),yd(t.stateNode,t.type,e))}}function c0(t){bo?Eo?Eo.push(t):Eo=[t]:bo=t}function d0(){if(bo){var t=bo,e=Eo;if(Eo=bo=null,Vh(t),e)for(t=0;t<e.length;t++)Vh(e[t])}}function f0(t,e){return t(e)}function h0(){}var ju=!1;function p0(t,e,n){if(ju)return t(e,n);ju=!0;try{return f0(t,e,n)}finally{ju=!1,(bo!==null||Eo!==null)&&(h0(),d0())}}function zs(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Sd=!1;if(Mi)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Sd=!1}function Nx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ms=!1,Sl=null,wl=!1,wd=null,Ox={onError:function(t){Ms=!0,Sl=t}};function zx(t,e,n,i,r,o,s,a,l){Ms=!1,Sl=null,Nx.apply(Ox,arguments)}function Fx(t,e,n,i,r,o,s,a,l){if(zx.apply(this,arguments),Ms){if(Ms){var u=Sl;Ms=!1,Sl=null}else throw Error(pe(198));wl||(wl=!0,wd=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gh(t){if(Br(t)!==t)throw Error(pe(188))}function Ux(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Gh(r),t;if(o===i)return Gh(r),e;o=o.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function g0(t){return t=Ux(t),t!==null?v0(t):null}function v0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v0(t);if(e!==null)return e;t=t.sibling}return null}var _0=xn.unstable_scheduleCallback,Hh=xn.unstable_cancelCallback,Bx=xn.unstable_shouldYield,Vx=xn.unstable_requestPaint,_t=xn.unstable_now,Gx=xn.unstable_getCurrentPriorityLevel,Cf=xn.unstable_ImmediatePriority,x0=xn.unstable_UserBlockingPriority,Ml=xn.unstable_NormalPriority,Hx=xn.unstable_LowPriority,y0=xn.unstable_IdlePriority,Yl=null,ii=null;function Wx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Xx,jx=Math.log,$x=Math.LN2;function Xx(t){return t>>>=0,t===0?32:31-(jx(t)/$x|0)|0}var ya=64,Sa=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=_s(a):(o&=s,o!==0&&(i=_s(o)))}else s=n&~r,s!==0?i=_s(s):o!==0&&(i=_s(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function qx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Yn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=qx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function $u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function Kx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M0,Pf,b0,E0,T0,bd=!1,wa=[],Gi=null,Hi=null,Wi=null,Fs=new Map,Us=new Map,zi=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function es(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qx(t,e,n,i,r){switch(e){case"focusin":return Gi=es(Gi,t,e,n,i,r),!0;case"dragenter":return Hi=es(Hi,t,e,n,i,r),!0;case"mouseover":return Wi=es(Wi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Fs.set(o,es(Fs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Us.set(o,es(Us.get(o)||null,t,e,n,i,r)),!0}return!1}function C0(t){var e=vr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){b0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=ua(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function jh(t,e,n){al(t)&&n.delete(e)}function Jx(){bd=!1,Gi!==null&&al(Gi)&&(Gi=null),Hi!==null&&al(Hi)&&(Hi=null),Wi!==null&&al(Wi)&&(Wi=null),Fs.forEach(jh),Us.forEach(jh)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,bd||(bd=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,Jx)))}function Bs(t){function e(r){return ts(r,t)}if(0<wa.length){ts(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&ts(Gi,t),Hi!==null&&ts(Hi,t),Wi!==null&&ts(Wi,t),Fs.forEach(e),Us.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&zi.shift()}var To=Ci.ReactCurrentBatchConfig,El=!0;function ey(t,e,n,i){var r=et,o=To.transition;To.transition=null;try{et=1,Lf(t,e,n,i)}finally{et=r,To.transition=o}}function ty(t,e,n,i){var r=et,o=To.transition;To.transition=null;try{et=4,Lf(t,e,n,i)}finally{et=r,To.transition=o}}function Lf(t,e,n,i){if(El){var r=Ed(t,e,n,i);if(r===null)nc(t,e,i,Tl,n),Wh(t,i);else if(Qx(r,t,e,n,i))i.stopPropagation();else if(Wh(t,i),e&4&&-1<Zx.indexOf(t)){for(;r!==null;){var o=ua(r);if(o!==null&&M0(o),o=Ed(t,e,n,i),o===null&&nc(t,e,i,Tl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else nc(t,e,i,null,n)}}var Tl=null;function Ed(t,e,n,i){if(Tl=null,t=Tf(i),t=vr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gx()){case Cf:return 1;case x0:return 4;case Ml:case Hx:return 16;case y0:return 536870912;default:return 16}default:return 16}}var Ui=null,Rf=null,ll=null;function P0(){if(ll)return ll;var t,e=Rf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return ll=r.slice(t,1<i?1-i:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function $h(){return!1}function Sn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ma:$h,this.isPropagationStopped=$h,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=Sn($o),la=gt({},$o,{view:0,detail:0}),ny=Sn(la),Xu,qu,ns,Kl=gt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(Xu=t.screenX-ns.screenX,qu=t.screenY-ns.screenY):qu=Xu=0,ns=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),Xh=Sn(Kl),iy=gt({},Kl,{dataTransfer:0}),ry=Sn(iy),oy=gt({},la,{relatedTarget:0}),Yu=Sn(oy),sy=gt({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=Sn(sy),ly=gt({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uy=Sn(ly),cy=gt({},$o,{data:0}),qh=Sn(cy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hy[t])?!!e[t]:!1}function If(){return py}var my=gt({},la,{key:function(t){if(t.key){var e=dy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gy=Sn(my),vy=gt({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Sn(vy),_y=gt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),xy=Sn(_y),yy=gt({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=Sn(yy),wy=gt({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),My=Sn(wy),by=[9,13,27,32],kf=Mi&&"CompositionEvent"in window,bs=null;Mi&&"documentMode"in document&&(bs=document.documentMode);var Ey=Mi&&"TextEvent"in window&&!bs,L0=Mi&&(!kf||bs&&8<bs&&11>=bs),Kh=String.fromCharCode(32),Zh=!1;function R0(t,e){switch(t){case"keyup":return by.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function Ty(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(Zh=!0,Kh);case"textInput":return t=e.data,t===Kh&&Zh?null:t;default:return null}}function Cy(t,e){if(uo)return t==="compositionend"||!kf&&R0(t,e)?(t=P0(),ll=Rf=Ui=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L0&&e.locale!=="ko"?null:e.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ay[t.type]:e==="textarea"}function I0(t,e,n,i){c0(i),e=Cl(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Es=null,Vs=null;function Py(t){W0(t,0)}function Zl(t){var e=ho(t);if(i0(e))return t}function Ly(t,e){if(t==="change")return e}var k0=!1;if(Mi){var Ku;if(Mi){var Zu="oninput"in document;if(!Zu){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Zu=typeof Jh.oninput=="function"}Ku=Zu}else Ku=!1;k0=Ku&&(!document.documentMode||9<document.documentMode)}function ep(){Es&&(Es.detachEvent("onpropertychange",N0),Vs=Es=null)}function N0(t){if(t.propertyName==="value"&&Zl(Vs)){var e=[];I0(e,Vs,t,Tf(t)),p0(Py,e)}}function Ry(t,e,n){t==="focusin"?(ep(),Es=e,Vs=n,Es.attachEvent("onpropertychange",N0)):t==="focusout"&&ep()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Vs)}function Iy(t,e){if(t==="click")return Zl(e)}function ky(t,e){if(t==="input"||t==="change")return Zl(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:Ny;function Gs(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,e){var n=tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Oy(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=np(n,o);var s=np(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=Mi&&"documentMode"in document&&11>=document.documentMode,co=null,Td=null,Ts=null,Cd=!1;function ip(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||co==null||co!==yl(i)||(i=co,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ts&&Gs(Ts,i)||(Ts=i,i=Cl(Td,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=co)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fo={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Qu={},F0={};Mi&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function Ql(t){if(Qu[t])return Qu[t];if(!fo[t])return t;var e=fo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F0)return Qu[t]=e[n];return t}var U0=Ql("animationend"),B0=Ql("animationiteration"),V0=Ql("animationstart"),G0=Ql("transitionend"),H0=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){H0.set(t,e),Ur(e,[t])}for(var Ju=0;Ju<rp.length;Ju++){var ec=rp[Ju],Fy=ec.toLowerCase(),Uy=ec[0].toUpperCase()+ec.slice(1);tr(Fy,"on"+Uy)}tr(U0,"onAnimationEnd");tr(B0,"onAnimationIteration");tr(V0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(G0,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Fx(i,e,void 0,t),t.currentTarget=null}function W0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;op(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;op(r,a,u),o=l}}}if(wl)throw t=wd,wl=!1,wd=null,t}function ot(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(j0(e,t,2,!1),n.add(i))}function tc(t,e,n){var i=0;e&&(i|=4),j0(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Ea]){t[Ea]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(By.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,tc("selectionchange",!1,e))}}function j0(t,e,n,i){switch(A0(e)){case 1:var r=ey;break;case 4:r=ty;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=vr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}p0(function(){var u=o,d=Tf(n),f=[];e:{var c=H0.get(t);if(c!==void 0){var g=Df,x=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":g=gy;break;case"focusin":x="focus",g=Yu;break;case"focusout":x="blur",g=Yu;break;case"beforeblur":case"afterblur":g=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xy;break;case U0:case B0:case V0:g=ay;break;case G0:g=Sy;break;case"scroll":g=ny;break;case"wheel":g=My;break;case"copy":case"cut":case"paste":g=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yh}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?c!==null?c+"Capture":null:c;p=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,m!==null&&(y=zs(v,m),y!=null&&p.push(Ws(v,y,_)))),h)break;v=v.return}0<p.length&&(c=new g(c,x,null,n,d),f.push({event:c,listeners:p}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",c&&n!==xd&&(x=n.relatedTarget||n.fromElement)&&(vr(x)||x[bi]))break e;if((g||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?vr(x):null,x!==null&&(h=Br(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(p=Xh,y="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=Yh,y="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?c:ho(g),_=x==null?c:ho(x),c=new p(y,v+"leave",g,n,d),c.target=h,c.relatedTarget=_,y=null,vr(d)===u&&(p=new p(m,v+"enter",x,n,d),p.target=_,p.relatedTarget=h,y=p),h=y,g&&x)t:{for(p=g,m=x,v=0,_=p;_;_=Hr(_))v++;for(_=0,y=m;y;y=Hr(y))_++;for(;0<v-_;)p=Hr(p),v--;for(;0<_-v;)m=Hr(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Hr(p),m=Hr(m)}p=null}else p=null;g!==null&&sp(f,c,g,p,!1),x!==null&&h!==null&&sp(f,h,x,p,!0)}}e:{if(c=u?ho(u):window,g=c.nodeName&&c.nodeName.toLowerCase(),g==="select"||g==="input"&&c.type==="file")var S=Ly;else if(Qh(c))if(k0)S=ky;else{S=Dy;var P=Ry}else(g=c.nodeName)&&g.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(S=Iy);if(S&&(S=S(t,u))){I0(f,S,n,d);break e}P&&P(t,c,u),t==="focusout"&&(P=c._wrapperState)&&P.controlled&&c.type==="number"&&pd(c,"number",c.value)}switch(P=u?ho(u):window,t){case"focusin":(Qh(P)||P.contentEditable==="true")&&(co=P,Td=u,Ts=null);break;case"focusout":Ts=Td=co=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,ip(f,n,d);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":ip(f,n,d)}var R;if(kf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else uo?R0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(L0&&n.locale!=="ko"&&(uo||w!=="onCompositionStart"?w==="onCompositionEnd"&&uo&&(R=P0()):(Ui=d,Rf="value"in Ui?Ui.value:Ui.textContent,uo=!0)),P=Cl(u,w),0<P.length&&(w=new qh(w,t,null,n,d),f.push({event:w,listeners:P}),R?w.data=R:(R=D0(n),R!==null&&(w.data=R)))),(R=Ey?Ty(t,n):Cy(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(d=new qh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}W0(f,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=zs(t,n),o!=null&&i.unshift(Ws(t,o,r)),o=zs(t,e),o!=null&&i.push(Ws(t,o,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=zs(n,o),l!=null&&s.unshift(Ws(n,l,a))):r||(l=zs(n,o),l!=null&&s.push(Ws(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Vy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Gy,"")}function Ta(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(pe(425))}function Al(){}var Ad=null,Pd=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){return lp.resolve(null).then(t).catch(jy)}:Rd;function jy(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Bs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Bs(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Xo,js="__reactProps$"+Xo,bi="__reactContainer$"+Xo,Dd="__reactEvents$"+Xo,$y="__reactListeners$"+Xo,Xy="__reactHandles$"+Xo;function vr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[ni])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[ni]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Jl(t){return t[js]||null}var Id=[],po=-1;function nr(t){return{current:t}}function at(t){0>po||(t.current=Id[po],Id[po]=null,po--)}function rt(t,e){po++,Id[po]=t.current,t.current=e}var Ji={},Wt=nr(Ji),rn=nr(!1),Pr=Ji;function Io(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Pl(){at(rn),at(Wt)}function cp(t,e,n){if(Wt.current!==Ji)throw Error(pe(168));rt(Wt,e),rt(rn,n)}function $0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Rx(t)||"Unknown",r));return gt({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Pr=Wt.current,rt(Wt,t),rt(rn,rn.current),!0}function dp(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=$0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,at(rn),at(Wt),rt(Wt,t)):at(rn),rt(rn,n)}var gi=null,eu=!1,rc=!1;function X0(t){gi===null?gi=[t]:gi.push(t)}function qy(t){eu=!0,X0(t)}function ir(){if(!rc&&gi!==null){rc=!0;var t=0,e=et;try{var n=gi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,eu=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),_0(Cf,ir),r}finally{et=e,rc=!1}}return null}var mo=[],go=0,Rl=null,Dl=0,Tn=[],Cn=0,Lr=null,_i=1,xi="";function fr(t,e){mo[go++]=Dl,mo[go++]=Rl,Rl=t,Dl=e}function q0(t,e,n){Tn[Cn++]=_i,Tn[Cn++]=xi,Tn[Cn++]=Lr,Lr=t;var i=_i;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var o=32-Yn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,_i=1<<32-Yn(e)+r|n<<r|i,xi=o+t}else _i=1<<o|n<<r|i,xi=t}function Of(t){t.return!==null&&(fr(t,1),q0(t,1,0))}function zf(t){for(;t===Rl;)Rl=mo[--go],mo[go]=null,Dl=mo[--go],mo[go]=null;for(;t===Lr;)Lr=Tn[--Cn],Tn[Cn]=null,xi=Tn[--Cn],Tn[Cn]=null,_i=Tn[--Cn],Tn[Cn]=null}var vn=null,mn=null,ut=!1,jn=null;function Y0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,mn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,mn=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(ut){var e=mn;if(e){var n=e;if(!fp(t,e)){if(kd(t))throw Error(pe(418));e=ji(n.nextSibling);var i=vn;e&&fp(t,e)?Y0(i,n):(t.flags=t.flags&-4097|2,ut=!1,vn=t)}}else{if(kd(t))throw Error(pe(418));t.flags=t.flags&-4097|2,ut=!1,vn=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ca(t){if(t!==vn)return!1;if(!ut)return hp(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=mn)){if(kd(t))throw K0(),Error(pe(418));for(;e;)Y0(t,e),e=ji(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=vn?ji(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=mn;t;)t=ji(t.nextSibling)}function ko(){mn=vn=null,ut=!1}function Ff(t){jn===null?jn=[t]:jn.push(t)}var Yy=Ci.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Il=nr(null),kl=null,vo=null,Uf=null;function Bf(){Uf=vo=kl=null}function Vf(t){var e=Il.current;at(Il),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){kl=t,Uf=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Uf!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(kl===null)throw Error(pe(308));vo=t,kl.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var _r=null;function Gf(t){_r===null?_r=[t]:_r.push(t)}function Z0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;Oi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=u=l=null,a=o;do{var c=a.lane,g=a.eventTime;if((i&c)===c){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,p=a;switch(c=e,g=n,p.tag){case 1:if(x=p.payload,typeof x=="function"){f=x.call(g,f,c);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,c=typeof x=="function"?x.call(g,f,c):x,c==null)break e;f=gt({},f,c);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else g={eventTime:g,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,s|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Dr|=s,t.lanes=s,t.memoizedState=f}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var J0=new Zg.Component().refs;function zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Kn(e,t,r,i),cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Kn(e,t,r,i),cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=qi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Kn(e,t,i,n),cl(e,t,i))}};function gp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,i)||!Gs(r,o):!0}function ev(t,e,n){var i=!1,r=Ji,o=e.contextType;return typeof o=="object"&&o!==null?o=Dn(o):(r=on(e)?Pr:Wt.current,i=e.contextTypes,o=(i=i!=null)?Io(t,r):Ji),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=J0,Hf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Dn(o):(o=on(e)?Pr:Wt.current,r.context=Io(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===J0&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function tv(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Yi(m,v),m.index=0,m.sibling=null,m}function o(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,y){return v===null||v.tag!==6?(v=dc(_,m.mode,y),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,y){var S=_.type;return S===lo?d(m,v,_.props.children,y,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ni&&_p(S)===v.type)?(y=r(v,_.props),y.ref=is(m,v,_),y.return=m,y):(y=gl(_.type,_.key,_.props,null,m.mode,y),y.ref=is(m,v,_),y.return=m,y)}function u(m,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=fc(_,m.mode,y),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function d(m,v,_,y,S){return v===null||v.tag!==7?(v=br(_,m.mode,y,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function f(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dc(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return _=gl(v.type,v.key,v.props,null,m.mode,_),_.ref=is(m,null,v),_.return=m,_;case ao:return v=fc(v,m.mode,_),v.return=m,v;case Ni:var y=v._init;return f(m,y(v._payload),_)}if(vs(v)||Qo(v))return v=br(v,m.mode,_,null),v.return=m,v;Aa(m,v)}return null}function c(m,v,_,y){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case va:return _.key===S?l(m,v,_,y):null;case ao:return _.key===S?u(m,v,_,y):null;case Ni:return S=_._init,c(m,v,S(_._payload),y)}if(vs(_)||Qo(_))return S!==null?null:d(m,v,_,y,null);Aa(m,_)}return null}function g(m,v,_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(_)||null,a(v,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case va:return m=m.get(y.key===null?_:y.key)||null,l(v,m,y,S);case ao:return m=m.get(y.key===null?_:y.key)||null,u(v,m,y,S);case Ni:var P=y._init;return g(m,v,_,P(y._payload),S)}if(vs(y)||Qo(y))return m=m.get(_)||null,d(v,m,y,S,null);Aa(v,y)}return null}function x(m,v,_,y){for(var S=null,P=null,R=v,w=v=0,C=null;R!==null&&w<_.length;w++){R.index>w?(C=R,R=null):C=R.sibling;var I=c(m,R,_[w],y);if(I===null){R===null&&(R=C);break}t&&R&&I.alternate===null&&e(m,R),v=o(I,v,w),P===null?S=I:P.sibling=I,P=I,R=C}if(w===_.length)return n(m,R),ut&&fr(m,w),S;if(R===null){for(;w<_.length;w++)R=f(m,_[w],y),R!==null&&(v=o(R,v,w),P===null?S=R:P.sibling=R,P=R);return ut&&fr(m,w),S}for(R=i(m,R);w<_.length;w++)C=g(R,m,w,_[w],y),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?w:C.key),v=o(C,v,w),P===null?S=C:P.sibling=C,P=C);return t&&R.forEach(function(Z){return e(m,Z)}),ut&&fr(m,w),S}function p(m,v,_,y){var S=Qo(_);if(typeof S!="function")throw Error(pe(150));if(_=S.call(_),_==null)throw Error(pe(151));for(var P=S=null,R=v,w=v=0,C=null,I=_.next();R!==null&&!I.done;w++,I=_.next()){R.index>w?(C=R,R=null):C=R.sibling;var Z=c(m,R,I.value,y);if(Z===null){R===null&&(R=C);break}t&&R&&Z.alternate===null&&e(m,R),v=o(Z,v,w),P===null?S=Z:P.sibling=Z,P=Z,R=C}if(I.done)return n(m,R),ut&&fr(m,w),S;if(R===null){for(;!I.done;w++,I=_.next())I=f(m,I.value,y),I!==null&&(v=o(I,v,w),P===null?S=I:P.sibling=I,P=I);return ut&&fr(m,w),S}for(R=i(m,R);!I.done;w++,I=_.next())I=g(R,m,w,I.value,y),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?w:I.key),v=o(I,v,w),P===null?S=I:P.sibling=I,P=I);return t&&R.forEach(function(ie){return e(m,ie)}),ut&&fr(m,w),S}function h(m,v,_,y){if(typeof _=="object"&&_!==null&&_.type===lo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case va:e:{for(var S=_.key,P=v;P!==null;){if(P.key===S){if(S=_.type,S===lo){if(P.tag===7){n(m,P.sibling),v=r(P,_.props.children),v.return=m,m=v;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ni&&_p(S)===P.type){n(m,P.sibling),v=r(P,_.props),v.ref=is(m,P,_),v.return=m,m=v;break e}n(m,P);break}else e(m,P);P=P.sibling}_.type===lo?(v=br(_.props.children,m.mode,y,_.key),v.return=m,m=v):(y=gl(_.type,_.key,_.props,null,m.mode,y),y.ref=is(m,v,_),y.return=m,m=y)}return s(m);case ao:e:{for(P=_.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=fc(_,m.mode,y),v.return=m,m=v}return s(m);case Ni:return P=_._init,h(m,v,P(_._payload),y)}if(vs(_))return x(m,v,_,y);if(Qo(_))return p(m,v,_,y);Aa(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=dc(_,m.mode,y),v.return=m,m=v),s(m)):n(m,v)}return h}var No=tv(!0),nv=tv(!1),ca={},ri=nr(ca),$s=nr(ca),Xs=nr(ca);function xr(t){if(t===ca)throw Error(pe(174));return t}function Wf(t,e){switch(rt(Xs,e),rt($s,t),rt(ri,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}at(ri),rt(ri,e)}function Oo(){at(ri),at($s),at(Xs)}function iv(t){xr(Xs.current);var e=xr(ri.current),n=gd(e,t.type);e!==n&&(rt($s,t),rt(ri,n))}function jf(t){$s.current===t&&(at(ri),at($s))}var pt=nr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function $f(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var dl=Ci.ReactCurrentDispatcher,sc=Ci.ReactCurrentBatchConfig,Rr=0,mt=null,Et=null,Dt=null,zl=!1,Cs=!1,qs=0,Ky=0;function Bt(){throw Error(pe(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,o){if(Rr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?e1:t1,t=n(i,r),Cs){o=0;do{if(Cs=!1,qs=0,25<=o)throw Error(pe(301));o+=1,Dt=Et=null,e.updateQueue=null,dl.current=n1,t=n(i,r)}while(Cs)}if(dl.current=Fl,e=Et!==null&&Et.next!==null,Rr=0,Dt=Et=mt=null,zl=!1,e)throw Error(pe(300));return t}function Yf(){var t=qs!==0;return qs=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(Et===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,Et=t;else{if(t===null)throw Error(pe(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Ys(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=In(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Rr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,mt.lanes|=d,Dr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Zn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Dr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=In(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Zn(o,e.memoizedState)||(nn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function rv(){}function ov(t,e){var n=mt,i=In(),r=e(),o=!Zn(i.memoizedState,r);if(o&&(i.memoizedState=r,nn=!0),i=i.queue,Kf(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ks(9,av.bind(null,n,i,r,e),void 0,null),It===null)throw Error(pe(349));Rr&30||sv(n,e,r)}return r}function sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,i){e.value=n,e.getSnapshot=i,uv(e)&&cv(t)}function lv(t,e,n){return n(function(){uv(e)&&cv(t)})}function uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function cv(t){var e=Ei(t,1);e!==null&&Kn(e,t,1,-1)}function xp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,mt,t),[e.memoizedState,t]}function Ks(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return In().memoizedState}function fl(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=Ks(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=In();i=i===void 0?null:i;var o=void 0;if(Et!==null){var s=Et.memoizedState;if(o=s.destroy,i!==null&&Xf(i,s.deps)){r.memoizedState=Ks(e,n,o,i);return}}mt.flags|=t,r.memoizedState=Ks(1|e,n,o,i)}function yp(t,e){return fl(8390656,8,t,e)}function Kf(t,e){return nu(2048,8,t,e)}function fv(t,e){return nu(4,2,t,e)}function hv(t,e){return nu(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,pv.bind(null,e,t),n)}function Zf(){}function gv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _v(t,e,n){return Rr&21?(Zn(n,e)||(n=S0(),mt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Zy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=sc.transition;sc.transition={};try{t(!1),e()}finally{et=n,sc.transition=i}}function xv(){return In().memoizedState}function Qy(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))Sv(e,n);else if(n=Z0(t,e,n,i),n!==null){var r=Kt();Kn(n,t,i,r),wv(n,e,i)}}function Jy(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))Sv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,s)){var l=e.interleaved;l===null?(r.next=r,Gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Z0(t,e,r,i),n!==null&&(r=Kt(),Kn(n,t,i,r),wv(n,e,i))}}function yv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Sv(t,e){Cs=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}var Fl={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},e1={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:Zf,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=Zy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(ut){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),It===null)throw Error(pe(349));Rr&30||sv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yp(lv.bind(null,i,o,t),[t]),i.flags|=2048,Ks(9,av.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=It.identifierPrefix;if(ut){var n=xi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t1={readContext:Dn,useCallback:gv,useContext:Dn,useEffect:Kf,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:vv,useReducer:ac,useRef:dv,useState:function(){return ac(Ys)},useDebugValue:Zf,useDeferredValue:function(t){var e=In();return _v(e,Et.memoizedState,t)},useTransition:function(){var t=ac(Ys)[0],e=In().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1},n1={readContext:Dn,useCallback:gv,useContext:Dn,useEffect:Kf,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:vv,useReducer:lc,useRef:dv,useState:function(){return lc(Ys)},useDebugValue:Zf,useDeferredValue:function(t){var e=In();return Et===null?e.memoizedState=t:_v(e,Et.memoizedState,t)},useTransition:function(){var t=lc(Ys)[0],e=In().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1};function zo(t,e){try{var n="",i=e;do n+=Lx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var i1=typeof WeakMap=="function"?WeakMap:Map;function Mv(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,Yd=i),Ud(t,e)},n}function bv(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ud(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ud(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new i1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=v1.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var r1=Ci.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?nv(e,null,n,i):No(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var o=e.ref;return Co(e,r),i=qf(t,e,n,i,o,r),n=Yf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ut&&n&&Of(e),e.flags|=1,qt(t,e,i,r),e.child)}function Ep(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!oh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ev(t,e,o,i,r)):(t=gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(s,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=Yi(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ev(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Gs(o,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return Bd(t,e,n,i,r)}function Tv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(xo,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(xo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,rt(xo,hn),hn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,rt(xo,hn),hn|=i;return qt(t,e,r,n),e.child}function Cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bd(t,e,n,i,r){var o=on(n)?Pr:Wt.current;return o=Io(e,o),Co(e,r),n=qf(t,e,n,i,o,r),i=Yf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ut&&i&&Of(e),e.flags|=1,qt(t,e,n,r),e.child)}function Tp(t,e,n,i,r){if(on(n)){var o=!0;Ll(e)}else o=!1;if(Co(e,r),e.stateNode===null)hl(t,e),ev(e,n,i),Fd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=on(n)?Pr:Wt.current,u=Io(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vp(e,s,i,u),Oi=!1;var c=e.memoizedState;s.state=c,Nl(e,i,s,r),l=e.memoizedState,a!==i||c!==l||rn.current||Oi?(typeof d=="function"&&(zd(e,n,d,i),l=e.memoizedState),(a=Oi||gp(e,n,a,i,c,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Q0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,f=e.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Pr:Wt.current,l=Io(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||c!==l)&&vp(e,s,i,l),Oi=!1,c=e.memoizedState,s.state=c,Nl(e,i,s,r);var x=e.memoizedState;a!==f||c!==x||rn.current||Oi?(typeof g=="function"&&(zd(e,n,g,i),x=e.memoizedState),(u=Oi||gp(e,n,u,i,c,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return Vd(t,e,n,i,o,r)}function Vd(t,e,n,i,r,o){Cv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&dp(e,n,!1),Ti(t,e,o);i=e.stateNode,r1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=No(e,t.child,null,o),e.child=No(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&dp(e,n,!0),e.child}function Av(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),Wf(t,e.containerInfo)}function Cp(t,e,n,i,r){return ko(),Ff(r),e.flags|=256,qt(t,e,n,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pv(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ou(s,i,0,null),t=br(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Hd(n),e.memoizedState=Gd,t):Qf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return o1(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Yi(a,o):(o=br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Hd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Gd,i}return o=t.child,t=o.sibling,i=Yi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qf(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Ff(i),No(e,t.child,null,n),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o1(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=uc(Error(pe(422))),Pa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),o=br(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&No(e,t.child,null,s),e.child.memoizedState=Hd(s),e.memoizedState=Gd,o);if(!(e.mode&1))return Pa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(pe(419)),i=uc(o,i,void 0),Pa(t,e,s,i)}if(a=(s&t.childLanes)!==0,nn||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ei(t,r),Kn(i,t,r,-1))}return rh(),i=uc(Error(pe(421))),Pa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_1.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,mn=ji(r.nextSibling),vn=e,ut=!0,jn=null,t!==null&&(Tn[Cn++]=_i,Tn[Cn++]=xi,Tn[Cn++]=Lr,_i=t.id,xi=t.overflow,Lr=e),e=Qf(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function cc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cc(e,!0,n,null,o);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s1(t,e,n){switch(e.tag){case 3:Av(e),ko();break;case 5:iv(e);break;case 1:on(e.type)&&Ll(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Pv(t,e,n):(rt(pt,pt.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Tv(t,e,n)}return Ti(t,e,n)}var Rv,Wd,Dv,Iv;Rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};Dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(ri.current);var o=null;switch(n){case"input":r=fd(t,r),i=fd(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=md(t,r),i=md(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}vd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Iv=function(t,e,n,i){n!==i&&(e.flags|=4)};function rs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function a1(t,e,n){var i=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&Pl(),Vt(e),null;case 3:return i=e.stateNode,Oo(),at(rn),at(Wt),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Qd(jn),jn=null))),Wd(t,e),Vt(e),null;case 5:jf(e);var r=xr(Xs.current);if(n=e.type,t!==null&&e.stateNode!=null)Dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Vt(e),null}if(t=xr(ri.current),Ca(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[js]=o,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<xs.length;r++)ot(xs[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":zh(i,o),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ot("invalid",i);break;case"textarea":Uh(i,o),ot("invalid",i)}vd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):Ns.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ot("scroll",i)}switch(n){case"input":_a(i),Fh(i,o,!0);break;case"textarea":_a(i),Bh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[js]=i,Rv(t,e,!1,!1),e.stateNode=t;e:{switch(s=_d(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<xs.length;r++)ot(xs[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":zh(t,i),r=fd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Uh(t,i),r=md(t,i),ot("invalid",t);break;default:r=i}vd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?u0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ns.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ot("scroll",t):l!=null&&wf(t,o,l,s))}switch(n){case"input":_a(t),Fh(t,i,!1);break;case"textarea":_a(t),Bh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Mo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=xr(Xs.current),xr(ri.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Vt(e),null;case 13:if(at(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&mn!==null&&e.mode&1&&!(e.flags&128))K0(),ko(),e.flags|=98560,o=!1;else if(o=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(pe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(pe(317));o[ni]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else jn!==null&&(Qd(jn),jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Tt===0&&(Tt=3):rh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Oo(),Wd(t,e),t===null&&Hs(e.stateNode.containerInfo),Vt(e),null;case 10:return Vf(e.type._context),Vt(e),null;case 17:return on(e.type)&&Pl(),Vt(e),null;case 19:if(at(pt),o=e.memoizedState,o===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)rs(o,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ol(t),s!==null){for(e.flags|=128,rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>Fo&&(e.flags|=128,i=!0,rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ut)return Vt(e),null}else 2*_t()-o.renderingStartTime>Fo&&n!==1073741824&&(e.flags|=128,i=!0,rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function l1(t,e){switch(zf(e),e.tag){case 1:return on(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),at(rn),at(Wt),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(at(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(pt),null;case 4:return Oo(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var La=!1,Ht=!1,u1=typeof WeakSet=="function"?WeakSet:Set,we=null;function _o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Pp=!1;function c1(t,e){if(Ad=El,t=z0(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,c=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)c=f,f=g;for(;;){if(f===t)break t;if(c===n&&++u===r&&(a=s),c===o&&++d===i&&(l=s),(g=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},El=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Hn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return x=Pp,Pp=!1,x}function As(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&jd(e,n,o)}r=r.next}while(r!==i)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[js],delete e[Dd],delete e[$y],delete e[Xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Nt=null,Wn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)Ov(t,e,n),n=n.sibling}function Ov(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Ht||_o(n,e);case 6:var i=Nt,r=Wn;Nt=null,Ai(t,e,n),Nt=i,Wn=r,Nt!==null&&(Wn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Wn?(t=Nt,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),Bs(t)):ic(Nt,n.stateNode));break;case 4:i=Nt,r=Wn,Nt=n.stateNode.containerInfo,Wn=!0,Ai(t,e,n),Nt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jd(n,e,s),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Ht&&(_o(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Ai(t,e,n),Ht=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u1),e.forEach(function(i){var r=x1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Wn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Nt===null)throw Error(pe(160));Ov(o,s,r),Nt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,t),e=e.sibling}function zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{As(3,t,t.return),iu(3,t)}catch(p){vt(t,t.return,p)}try{As(5,t,t.return)}catch(p){vt(t,t.return,p)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&_o(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&_o(n,n.return),t.flags&32){var r=t.stateNode;try{Os(r,"")}catch(p){vt(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&r0(r,o),_d(a,s);var u=_d(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?u0(r,f):d==="dangerouslySetInnerHTML"?a0(r,f):d==="children"?Os(r,f):wf(r,d,f,u)}switch(a){case"input":hd(r,o);break;case"textarea":o0(r,o);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Mo(r,!!o.multiple,g,!1):c!==!!o.multiple&&(o.defaultValue!=null?Mo(r,!!o.multiple,o.defaultValue,!0):Mo(r,!!o.multiple,o.multiple?[]:"",!1))}r[js]=o}catch(p){vt(t,t.return,p)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(p){vt(t,t.return,p)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(p){vt(t,t.return,p)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(th=_t())),i&4&&Rp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||d,On(e,t),Ht=u):On(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(we=t,d=t.child;d!==null;){for(f=we=d;we!==null;){switch(c=we,g=c.child,c.tag){case 0:case 11:case 14:case 15:As(4,c,c.return);break;case 1:_o(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){vt(i,n,p)}}break;case 5:_o(c,c.return);break;case 22:if(c.memoizedState!==null){Ip(f);continue}}g!==null?(g.return=c,we=g):Ip(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l0("display",s))}catch(p){vt(t,t.return,p)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){vt(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Qn(t),i&4&&Rp(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Os(r,""),i.flags&=-33);var o=Lp(t);qd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Lp(t);Xd(t,a,s);break;default:throw Error(pe(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function d1(t,e,n){we=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||La;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=La;var u=Ht;if(La=s,(Ht=l)&&!u)for(we=r;we!==null;)s=we,l=s.child,s.tag===22&&s.memoizedState!==null?kp(r):l!==null?(l.return=s,we=l):kp(r);for(;o!==null;)we=o,Fv(o),o=o.sibling;we=r,La=a,Ht=u}Dp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,we=o):Dp(t)}}function Dp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&mp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Bs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Ht||e.flags&512&&$d(e)}catch(c){vt(e,e.return,c)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Ip(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function kp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var o=e.return;try{$d(e)}catch(l){vt(e,o,l)}break;case 5:var s=e.return;try{$d(e)}catch(l){vt(e,s,l)}}}catch(l){vt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var f1=Math.ceil,Ul=Ci.ReactCurrentDispatcher,Jf=Ci.ReactCurrentOwner,Rn=Ci.ReactCurrentBatchConfig,Ye=0,It=null,wt=null,Ft=0,hn=0,xo=nr(0),Tt=0,Zs=null,Dr=0,ru=0,eh=0,Ps=null,en=null,th=0,Fo=1/0,pi=null,Bl=!1,Yd=null,Xi=null,Ra=!1,Bi=null,Vl=0,Ls=0,Kd=null,pl=-1,ml=0;function Kt(){return Ye&6?_t():pl!==-1?pl:pl=_t()}function qi(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:Yy.transition!==null?(ml===0&&(ml=S0()),ml):(t=et,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function Kn(t,e,n,i){if(50<Ls)throw Ls=0,Kd=null,Error(pe(185));aa(t,n,i),(!(Ye&2)||t!==It)&&(t===It&&(!(Ye&2)&&(ru|=n),Tt===4&&Fi(t,Ft)),sn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Fo=_t()+500,eu&&ir()))}function sn(t,e){var n=t.callbackNode;Yx(t,e);var i=bl(t,t===It?Ft:0);if(i===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?qy(Np.bind(null,t)):X0(Np.bind(null,t)),Wy(function(){!(Ye&6)&&ir()}),n=null;else{switch(w0(i)){case 1:n=Cf;break;case 4:n=x0;break;case 16:n=Ml;break;case 536870912:n=y0;break;default:n=Ml}n=$v(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(pl=-1,ml=0,Ye&6)throw Error(pe(327));var n=t.callbackNode;if(Ao()&&t.callbackNode!==n)return null;var i=bl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=Ye;Ye|=2;var o=Vv();(It!==t||Ft!==e)&&(pi=null,Fo=_t()+500,Mr(t,e));do try{m1();break}catch(a){Bv(t,a)}while(1);Bf(),Ul.current=o,Ye=r,wt!==null?e=0:(It=null,Ft=0,e=Tt)}if(e!==0){if(e===2&&(r=Md(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=Zs,Mr(t,0),Fi(t,i),sn(t,_t()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!h1(r)&&(e=Gl(t,i),e===2&&(o=Md(t),o!==0&&(i=o,e=Zd(t,o))),e===1))throw n=Zs,Mr(t,0),Fi(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:hr(t,en,pi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=th+500-_t(),10<e)){if(bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Rd(hr.bind(null,t,en,pi),e);break}hr(t,en,pi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Yn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*f1(i/1960))-i,10<i){t.timeoutHandle=Rd(hr.bind(null,t,en,pi),i);break}hr(t,en,pi);break;case 5:hr(t,en,pi);break;default:throw Error(pe(329))}}}return sn(t,_t()),t.callbackNode===n?Uv.bind(null,t):null}function Zd(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=en,en=n,e!==null&&Qd(e)),t}function Qd(t){en===null?en=t:en.push.apply(en,t)}function h1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Zn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~eh,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(Ye&6)throw Error(pe(327));Ao();var e=bl(t,0);if(!(e&1))return sn(t,_t()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=Md(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=Zs,Mr(t,0),Fi(t,e),sn(t,_t()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,en,pi),sn(t,_t()),null}function nh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Fo=_t()+500,eu&&ir())}}function Ir(t){Bi!==null&&Bi.tag===0&&!(Ye&6)&&Ao();var e=Ye;Ye|=1;var n=Rn.transition,i=et;try{if(Rn.transition=null,et=1,t)return t()}finally{et=i,Rn.transition=n,Ye=e,!(Ye&6)&&ir()}}function ih(){hn=xo.current,at(xo)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hy(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Oo(),at(rn),at(Wt),$f();break;case 5:jf(i);break;case 4:Oo();break;case 13:at(pt);break;case 19:at(pt);break;case 10:Vf(i.type._context);break;case 22:case 23:ih()}n=n.return}if(It=t,wt=t=Yi(t.current,null),Ft=hn=e,Tt=0,Zs=null,eh=ru=Dr=0,en=Ps=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}_r=null}return t}function Bv(t,e){do{var n=wt;try{if(Bf(),dl.current=Fl,zl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zl=!1}if(Rr=0,Dt=Et=mt=null,Cs=!1,qs=0,Jf.current=null,n===null||n.return===null){Tt=1,Zs=e,wt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=wp(s);if(g!==null){g.flags&=-257,Mp(g,s,a,o,e),g.mode&1&&Sp(o,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if(!(e&1)){Sp(o,u,e),rh();break e}l=Error(pe(426))}}else if(ut&&a.mode&1){var h=wp(s);if(h!==null){!(h.flags&65536)&&(h.flags|=256),Mp(h,s,a,o,e),Ff(zo(l,a));break e}}o=l=zo(l,a),Tt!==4&&(Tt=2),Ps===null?Ps=[o]:Ps.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=Mv(o,l,e);pp(o,m);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Xi===null||!Xi.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=bv(o,a,e);pp(o,y);break e}}o=o.return}while(o!==null)}Hv(n)}catch(S){e=S,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(1)}function Vv(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function rh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),It===null||!(Dr&268435455)&&!(ru&268435455)||Fi(It,Ft)}function Gl(t,e){var n=Ye;Ye|=2;var i=Vv();(It!==t||Ft!==e)&&(pi=null,Mr(t,e));do try{p1();break}catch(r){Bv(t,r)}while(1);if(Bf(),Ye=n,Ul.current=i,wt!==null)throw Error(pe(261));return It=null,Ft=0,Tt}function p1(){for(;wt!==null;)Gv(wt)}function m1(){for(;wt!==null&&!Bx();)Gv(wt)}function Gv(t){var e=jv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Hv(t):wt=e,Jf.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l1(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,wt=null;return}}else if(n=a1(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Tt===0&&(Tt=5)}function hr(t,e,n){var i=et,r=Rn.transition;try{Rn.transition=null,et=1,g1(t,e,n,i)}finally{Rn.transition=r,et=i}return null}function g1(t,e,n,i){do Ao();while(Bi!==null);if(Ye&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kx(t,o),t===It&&(wt=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,$v(Ml,function(){return Ao(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var s=et;et=1;var a=Ye;Ye|=4,Jf.current=null,c1(t,n),zv(n,t),Oy(Pd),El=!!Ad,Pd=Ad=null,t.current=n,d1(n),Vx(),Ye=a,et=s,Rn.transition=o}else t.current=n;if(Ra&&(Ra=!1,Bi=t,Vl=r),o=t.pendingLanes,o===0&&(Xi=null),Wx(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=Yd,Yd=null,t;return Vl&1&&t.tag!==0&&Ao(),o=t.pendingLanes,o&1?t===Kd?Ls++:(Ls=0,Kd=t):Ls=0,ir(),null}function Ao(){if(Bi!==null){var t=w0(Vl),e=Rn.transition,n=et;try{if(Rn.transition=null,et=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Vl=0,Ye&6)throw Error(pe(331));var r=Ye;for(Ye|=4,we=t.current;we!==null;){var o=we,s=o.child;if(we.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var d=we;switch(d.tag){case 0:case 11:case 15:As(8,d,o)}var f=d.child;if(f!==null)f.return=d,we=f;else for(;we!==null;){d=we;var c=d.sibling,g=d.return;if(kv(d),d===u){we=null;break}if(c!==null){c.return=g,we=c;break}we=g}}}var x=o.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}we=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,we=s;else e:for(;we!==null;){if(o=we,o.flags&2048)switch(o.tag){case 0:case 11:case 15:As(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,we=m;break e}we=o.return}}var v=t.current;for(we=v;we!==null;){s=we;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,we=_;else e:for(s=v;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:iu(9,a)}}catch(S){vt(a,a.return,S)}if(a===s){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(Ye=r,ir(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{et=n,Rn.transition=e}}return!1}function Op(t,e,n){e=zo(n,e),e=Mv(t,e,1),t=$i(t,e,1),e=Kt(),t!==null&&(aa(t,1,e),sn(t,e))}function vt(t,e,n){if(t.tag===3)Op(t,t,n);else for(;e!==null;){if(e.tag===3){Op(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=zo(n,t),t=bv(e,t,1),e=$i(e,t,1),t=Kt(),e!==null&&(aa(e,1,t),sn(e,t));break}}e=e.return}}function v1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(Tt===4||Tt===3&&(Ft&130023424)===Ft&&500>_t()-th?Mr(t,0):eh|=n),sn(t,e)}function Wv(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=Kt();t=Ei(t,e),t!==null&&(aa(t,e,n),sn(t,n))}function _1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function x1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Wv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,s1(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ut&&e.flags&1048576&&q0(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hl(t,e),t=e.pendingProps;var r=Io(e,Wt.current);Co(e,n),r=qf(null,e,i,t,r,n);var o=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(o=!0,Ll(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hf(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,Fd(e,i,t,n),e=Vd(null,e,i,!0,o,n)):(e.tag=0,ut&&o&&Of(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=S1(i),t=Hn(i,t),r){case 0:e=Bd(null,e,i,t,n);break e;case 1:e=Tp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Ep(null,e,i,Hn(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Bd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Tp(t,e,i,r,n);case 3:e:{if(Av(e),t===null)throw Error(pe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Q0(t,e),Nl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=zo(Error(pe(423)),e),e=Cp(t,e,i,n,r);break e}else if(i!==r){r=zo(Error(pe(424)),e),e=Cp(t,e,i,n,r);break e}else for(mn=ji(e.stateNode.containerInfo.firstChild),vn=e,ut=!0,jn=null,n=nv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),i===r){e=Ti(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&Nd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Ld(i,r)?s=null:o!==null&&Ld(i,o)&&(e.flags|=32),Cv(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return Pv(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=No(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),bp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,rt(Il,i._currentValue),i._currentValue=s,o!==null)if(Zn(o.value,s)){if(o.children===r.children&&!rn.current){e=Ti(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Od(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(pe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Od(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Co(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Ep(t,e,i,r,n);case 15:return Ev(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),hl(t,e),e.tag=1,on(i)?(t=!0,Ll(e)):t=!1,Co(e,n),ev(e,i,r),Fd(e,i,r,n),Vd(null,e,i,!0,t,n);case 19:return Lv(t,e,n);case 22:return Tv(t,e,n)}throw Error(pe(156,e.tag))};function $v(t,e){return _0(t,e)}function y1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new y1(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S1(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bf)return 11;if(t===Ef)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")oh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case lo:return br(n.children,r,o,e);case Mf:s=8,r|=8;break;case ld:return t=Ln(12,n,e,r|2),t.elementType=ld,t.lanes=o,t;case ud:return t=Ln(13,n,e,r),t.elementType=ud,t.lanes=o,t;case cd:return t=Ln(19,n,e,r),t.elementType=cd,t.lanes=o,t;case t0:return ou(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jg:s=10;break e;case e0:s=9;break e;case bf:s=11;break e;case Ef:s=14;break e;case Ni:s=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function br(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sh(t,e,n,i,r,o,s,a,l){return t=new w1(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(o),t}function M1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xv(t){if(!t)return Ji;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(on(n))return $0(t,n,e)}return e}function qv(t,e,n,i,r,o,s,a,l){return t=sh(n,i,!0,t,r,o,s,a,l),t.context=Xv(null),n=t.current,i=Kt(),r=qi(n),o=Si(i,r),o.callback=e??null,$i(n,o,r),t.current.lanes=r,aa(t,r,i),sn(t,i),t}function su(t,e,n,i){var r=e.current,o=Kt(),s=qi(r);return n=Xv(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,s),t!==null&&(Kn(t,r,s,o),cl(t,r,s)),s}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ah(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function b1(){return null}var Yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function lh(t){this._internalRoot=t}au.prototype.render=lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));su(t,e,null,null)};au.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){su(null,t,null,null)}),e[bi]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=E0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&C0(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function E1(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Hl(s);o.call(u)}}var s=qv(e,i,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=s,t[bi]=s.current,Hs(t.nodeType===8?t.parentNode:t),Ir(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Hl(l);a.call(u)}}var l=sh(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[bi]=l.current,Hs(t.nodeType===8?t.parentNode:t),Ir(function(){su(e,l,n,i)}),l}function uu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Hl(s);a.call(l)}}su(e,s,t,r)}else s=E1(n,e,t,r,i);return Hl(s)}M0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Af(e,n|1),sn(e,_t()),!(Ye&6)&&(Fo=_t()+500,ir()))}break;case 13:Ir(function(){var i=Ei(t,1);if(i!==null){var r=Kt();Kn(i,t,1,r)}}),ah(t,1)}};Pf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Kt();Kn(e,t,134217728,n)}ah(t,134217728)}};b0=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=Kt();Kn(n,t,e,i)}ah(t,e)}};E0=function(){return et};T0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};yd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(pe(90));i0(i),hd(i,r)}}}break;case"textarea":o0(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};f0=nh;h0=Ir;var T1={usingClientEntryPoint:!1,Events:[ua,ho,Jl,c0,d0,nh]},os={findFiberByHostInstance:vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C1={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Yl=Da.inject(C1),ii=Da}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(pe(200));return M1(t,e,null,n)};yn.createRoot=function(t,e){if(!uh(t))throw Error(pe(299));var n=!1,i="",r=Yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sh(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Hs(t.nodeType===8?t.parentNode:t),new lh(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Ir(t)};yn.hydrate=function(t,e,n){if(!lu(e))throw Error(pe(200));return uu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=qv(e,null,t,1,n??null,r,!1,o,s),t[bi]=e.current,Hs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new au(e)};yn.render=function(t,e,n){if(!lu(e))throw Error(pe(200));return uu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!lu(t))throw Error(pe(40));return t._reactRootContainer?(Ir(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};yn.unstable_batchedUpdates=nh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lu(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return uu(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=yn})(bx);var Up=od;rd.createRoot=Up.createRoot,rd.hydrateRoot=Up.hydrateRoot;const A1="/assets/logo_site_quiz-9f69bfc6.png",P1="/assets/user_icon-845ba611.png",L1="/assets/glass_icon-4f5a244e.png";var Wl={},R1={get exports(){return Wl},set exports(t){Wl=t}},tt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=Symbol.for("react.element"),dh=Symbol.for("react.portal"),cu=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),D1=Symbol.for("react.server_context"),mu=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),xu=Symbol.for("react.lazy"),I1=Symbol.for("react.offscreen"),Kv;Kv=Symbol.for("react.module.reference");function kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ch:switch(t=t.type,t){case cu:case fu:case du:case gu:case vu:return t;default:switch(t=t&&t.$$typeof,t){case D1:case pu:case mu:case xu:case _u:case hu:return t;default:return e}}case dh:return e}}}tt.ContextConsumer=pu;tt.ContextProvider=hu;tt.Element=ch;tt.ForwardRef=mu;tt.Fragment=cu;tt.Lazy=xu;tt.Memo=_u;tt.Portal=dh;tt.Profiler=fu;tt.StrictMode=du;tt.Suspense=gu;tt.SuspenseList=vu;tt.isAsyncMode=function(){return!1};tt.isConcurrentMode=function(){return!1};tt.isContextConsumer=function(t){return kn(t)===pu};tt.isContextProvider=function(t){return kn(t)===hu};tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ch};tt.isForwardRef=function(t){return kn(t)===mu};tt.isFragment=function(t){return kn(t)===cu};tt.isLazy=function(t){return kn(t)===xu};tt.isMemo=function(t){return kn(t)===_u};tt.isPortal=function(t){return kn(t)===dh};tt.isProfiler=function(t){return kn(t)===fu};tt.isStrictMode=function(t){return kn(t)===du};tt.isSuspense=function(t){return kn(t)===gu};tt.isSuspenseList=function(t){return kn(t)===vu};tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cu||t===fu||t===du||t===gu||t===vu||t===I1||typeof t=="object"&&t!==null&&(t.$$typeof===xu||t.$$typeof===_u||t.$$typeof===hu||t.$$typeof===pu||t.$$typeof===mu||t.$$typeof===Kv||t.getModuleId!==void 0)};tt.typeOf=kn;(function(t){t.exports=tt})(R1);function k1(t){function e(D,F,j,Q,E){for(var ge=0,X=0,ve=0,ue=0,be,me,xe=0,Ne=0,Ce,Ie=Ce=be=0,Ae=0,Le=0,ke=0,qe=0,ft=j.length,A=ft-1,M,V="",L="",k="",G="",oe;Ae<ft;){if(me=j.charCodeAt(Ae),Ae===A&&X+ue+ve+ge!==0&&(X!==0&&(me=X===47?10:47),ue=ve=ge=0,ft++,A++),X+ue+ve+ge===0){if(Ae===A&&(0<Le&&(V=V.replace(c,"")),0<V.trim().length)){switch(me){case 32:case 9:case 59:case 13:case 10:break;default:V+=j.charAt(Ae)}me=59}switch(me){case 123:for(V=V.trim(),be=V.charCodeAt(0),Ce=1,qe=++Ae;Ae<ft;){switch(me=j.charCodeAt(Ae)){case 123:Ce++;break;case 125:Ce--;break;case 47:switch(me=j.charCodeAt(Ae+1)){case 42:case 47:e:{for(Ie=Ae+1;Ie<A;++Ie)switch(j.charCodeAt(Ie)){case 47:if(me===42&&j.charCodeAt(Ie-1)===42&&Ae+2!==Ie){Ae=Ie+1;break e}break;case 10:if(me===47){Ae=Ie+1;break e}}Ae=Ie}}break;case 91:me++;case 40:me++;case 34:case 39:for(;Ae++<A&&j.charCodeAt(Ae)!==me;);}if(Ce===0)break;Ae++}switch(Ce=j.substring(qe,Ae),be===0&&(be=(V=V.replace(f,"").trim()).charCodeAt(0)),be){case 64:switch(0<Le&&(V=V.replace(c,"")),me=V.charCodeAt(1),me){case 100:case 109:case 115:case 45:Le=F;break;default:Le=le}if(Ce=e(F,Le,Ce,me,E+1),qe=Ce.length,0<O&&(Le=n(le,V,ke),oe=a(3,Ce,Le,F,U,ie,qe,me,E,Q),V=Le.join(""),oe!==void 0&&(qe=(Ce=oe.trim()).length)===0&&(me=0,Ce="")),0<qe)switch(me){case 115:V=V.replace(P,s);case 100:case 109:case 45:Ce=V+"{"+Ce+"}";break;case 107:V=V.replace(v,"$1 $2"),Ce=V+"{"+Ce+"}",Ce=K===1||K===2&&o("@"+Ce,3)?"@-webkit-"+Ce+"@"+Ce:"@"+Ce;break;default:Ce=V+Ce,Q===112&&(Ce=(L+=Ce,""))}else Ce="";break;default:Ce=e(F,n(F,V,ke),Ce,Q,E+1)}k+=Ce,Ce=ke=Le=Ie=be=0,V="",me=j.charCodeAt(++Ae);break;case 125:case 59:if(V=(0<Le?V.replace(c,""):V).trim(),1<(qe=V.length))switch(Ie===0&&(be=V.charCodeAt(0),be===45||96<be&&123>be)&&(qe=(V=V.replace(" ",":")).length),0<O&&(oe=a(1,V,F,D,U,ie,L.length,Q,E,Q))!==void 0&&(qe=(V=oe.trim()).length)===0&&(V="\0\0"),be=V.charCodeAt(0),me=V.charCodeAt(1),be){case 0:break;case 64:if(me===105||me===99){G+=V+j.charAt(Ae);break}default:V.charCodeAt(qe-1)!==58&&(L+=r(V,be,me,V.charCodeAt(2)))}ke=Le=Ie=be=0,V="",me=j.charCodeAt(++Ae)}}switch(me){case 13:case 10:X===47?X=0:1+be===0&&Q!==107&&0<V.length&&(Le=1,V+="\0"),0<O*Y&&a(0,V,F,D,U,ie,L.length,Q,E,Q),ie=1,U++;break;case 59:case 125:if(X+ue+ve+ge===0){ie++;break}default:switch(ie++,M=j.charAt(Ae),me){case 9:case 32:if(ue+ge+X===0)switch(xe){case 44:case 58:case 9:case 32:M="";break;default:me!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:ue+X+ge===0&&(Le=ke=1,M="\f"+M);break;case 108:if(ue+X+ge+B===0&&0<Ie)switch(Ae-Ie){case 2:xe===112&&j.charCodeAt(Ae-3)===58&&(B=xe);case 8:Ne===111&&(B=Ne)}break;case 58:ue+X+ge===0&&(Ie=Ae);break;case 44:X+ve+ue+ge===0&&(Le=1,M+="\r");break;case 34:case 39:X===0&&(ue=ue===me?0:ue===0?me:ue);break;case 91:ue+X+ve===0&&ge++;break;case 93:ue+X+ve===0&&ge--;break;case 41:ue+X+ge===0&&ve--;break;case 40:if(ue+X+ge===0){if(be===0)switch(2*xe+3*Ne){case 533:break;default:be=1}ve++}break;case 64:X+ve+ue+ge+Ie+Ce===0&&(Ce=1);break;case 42:case 47:if(!(0<ue+ge+ve))switch(X){case 0:switch(2*me+3*j.charCodeAt(Ae+1)){case 235:X=47;break;case 220:qe=Ae,X=42}break;case 42:me===47&&xe===42&&qe+2!==Ae&&(j.charCodeAt(qe+2)===33&&(L+=j.substring(qe,Ae+1)),M="",X=0)}}X===0&&(V+=M)}Ne=xe,xe=me,Ae++}if(qe=L.length,0<qe){if(Le=F,0<O&&(oe=a(2,L,Le,D,U,ie,qe,Q,E,Q),oe!==void 0&&(L=oe).length===0))return G+L+k;if(L=Le.join(",")+"{"+L+"}",K*B!==0){switch(K!==2||o(L,2)||(B=0),B){case 111:L=L.replace(y,":-moz-$1")+L;break;case 112:L=L.replace(_,"::-webkit-input-$1")+L.replace(_,"::-moz-$1")+L.replace(_,":-ms-input-$1")+L}B=0}}return G+L+k}function n(D,F,j){var Q=F.trim().split(h);F=Q;var E=Q.length,ge=D.length;switch(ge){case 0:case 1:var X=0;for(D=ge===0?"":D[0]+" ";X<E;++X)F[X]=i(D,F[X],j).trim();break;default:var ve=X=0;for(F=[];X<E;++X)for(var ue=0;ue<ge;++ue)F[ve++]=i(D[ue]+" ",Q[X],j).trim()}return F}function i(D,F,j){var Q=F.charCodeAt(0);switch(33>Q&&(Q=(F=F.trim()).charCodeAt(0)),Q){case 38:return F.replace(m,"$1"+D.trim());case 58:return D.trim()+F.replace(m,"$1"+D.trim());default:if(0<1*j&&0<F.indexOf("\f"))return F.replace(m,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+F}function r(D,F,j,Q){var E=D+";",ge=2*F+3*j+4*Q;if(ge===944){D=E.indexOf(":",9)+1;var X=E.substring(D,E.length-1).trim();return X=E.substring(0,D).trim()+X+";",K===1||K===2&&o(X,1)?"-webkit-"+X+X:X}if(K===0||K===2&&!o(E,1))return E;switch(ge){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Z,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return X=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+X+"-webkit-"+E+"-ms-flex-pack"+X+E;case 1005:return x.test(E)?E.replace(g,":-webkit-")+E.replace(g,":-moz-")+E:E;case 1e3:switch(X=E.substring(13).trim(),F=X.indexOf("-")+1,X.charCodeAt(0)+X.charCodeAt(F)){case 226:X=E.replace(S,"tb");break;case 232:X=E.replace(S,"tb-rl");break;case 220:X=E.replace(S,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+X+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(F=(E=D).length-10,X=(E.charCodeAt(F)===33?E.substring(0,F):E).substring(D.indexOf(":",7)+1).trim(),ge=X.charCodeAt(0)+(X.charCodeAt(7)|0)){case 203:if(111>X.charCodeAt(8))break;case 115:E=E.replace(X,"-webkit-"+X)+";"+E;break;case 207:case 102:E=E.replace(X,"-webkit-"+(102<ge?"inline-":"")+"box")+";"+E.replace(X,"-webkit-"+X)+";"+E.replace(X,"-ms-"+X+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return X=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+X+"-ms-flex-"+X+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(w,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(w,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(I.test(D)===!0)return(X=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?r(D.replace("stretch","fill-available"),F,j,Q).replace(":fill-available",":stretch"):E.replace(X,"-webkit-"+X)+E.replace(X,"-moz-"+X.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,j+Q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+E}return E}function o(D,F){var j=D.indexOf(F===1?":":"{"),Q=D.substring(0,F!==3?j:10);return j=D.substring(j+1,D.length-1),q(F!==2?Q:Q.replace(C,"$1"),j,F)}function s(D,F){var j=r(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return j!==F+";"?j.replace(R," or ($1)").substring(4):"("+F+")"}function a(D,F,j,Q,E,ge,X,ve,ue,be){for(var me=0,xe=F,Ne;me<O;++me)switch(Ne=ee[me].call(d,D,xe,j,Q,E,ge,X,ve,ue,be)){case void 0:case!1:case!0:case null:break;default:xe=Ne}if(xe!==F)return xe}function l(D){switch(D){case void 0:case null:O=ee.length=0;break;default:if(typeof D=="function")ee[O++]=D;else if(typeof D=="object")for(var F=0,j=D.length;F<j;++F)l(D[F]);else Y=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(q=null,D?typeof D!="function"?K=1:(K=2,q=D):K=0),u}function d(D,F){var j=D;if(33>j.charCodeAt(0)&&(j=j.trim()),de=j,j=[de],0<O){var Q=a(-1,F,j,j,U,ie,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(F=Q)}var E=e(le,j,F,0,0);return 0<O&&(Q=a(-2,E,j,j,U,ie,E.length,0,0,0),Q!==void 0&&(E=Q)),de="",B=0,ie=U=1,E}var f=/^\0+/g,c=/[\0\r\f]/g,g=/: */g,x=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,y=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,w=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,Z=/([^-])(image-set\()/,ie=1,U=1,B=0,K=1,le=[],ee=[],O=0,q=null,Y=0,de="";return d.use=l,d.set=u,t!==void 0&&u(t),d}var N1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function O1(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var z1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bp=O1(function(t){return z1.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Jd={},F1={get exports(){return Jd},set exports(t){Jd=t}},nt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=typeof Symbol=="function"&&Symbol.for,fh=kt?Symbol.for("react.element"):60103,hh=kt?Symbol.for("react.portal"):60106,yu=kt?Symbol.for("react.fragment"):60107,Su=kt?Symbol.for("react.strict_mode"):60108,wu=kt?Symbol.for("react.profiler"):60114,Mu=kt?Symbol.for("react.provider"):60109,bu=kt?Symbol.for("react.context"):60110,ph=kt?Symbol.for("react.async_mode"):60111,Eu=kt?Symbol.for("react.concurrent_mode"):60111,Tu=kt?Symbol.for("react.forward_ref"):60112,Cu=kt?Symbol.for("react.suspense"):60113,U1=kt?Symbol.for("react.suspense_list"):60120,Au=kt?Symbol.for("react.memo"):60115,Pu=kt?Symbol.for("react.lazy"):60116,B1=kt?Symbol.for("react.block"):60121,V1=kt?Symbol.for("react.fundamental"):60117,G1=kt?Symbol.for("react.responder"):60118,H1=kt?Symbol.for("react.scope"):60119;function wn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case fh:switch(t=t.type,t){case ph:case Eu:case yu:case wu:case Su:case Cu:return t;default:switch(t=t&&t.$$typeof,t){case bu:case Tu:case Pu:case Au:case Mu:return t;default:return e}}case hh:return e}}}function Zv(t){return wn(t)===Eu}nt.AsyncMode=ph;nt.ConcurrentMode=Eu;nt.ContextConsumer=bu;nt.ContextProvider=Mu;nt.Element=fh;nt.ForwardRef=Tu;nt.Fragment=yu;nt.Lazy=Pu;nt.Memo=Au;nt.Portal=hh;nt.Profiler=wu;nt.StrictMode=Su;nt.Suspense=Cu;nt.isAsyncMode=function(t){return Zv(t)||wn(t)===ph};nt.isConcurrentMode=Zv;nt.isContextConsumer=function(t){return wn(t)===bu};nt.isContextProvider=function(t){return wn(t)===Mu};nt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===fh};nt.isForwardRef=function(t){return wn(t)===Tu};nt.isFragment=function(t){return wn(t)===yu};nt.isLazy=function(t){return wn(t)===Pu};nt.isMemo=function(t){return wn(t)===Au};nt.isPortal=function(t){return wn(t)===hh};nt.isProfiler=function(t){return wn(t)===wu};nt.isStrictMode=function(t){return wn(t)===Su};nt.isSuspense=function(t){return wn(t)===Cu};nt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===yu||t===Eu||t===wu||t===Su||t===Cu||t===U1||typeof t=="object"&&t!==null&&(t.$$typeof===Pu||t.$$typeof===Au||t.$$typeof===Mu||t.$$typeof===bu||t.$$typeof===Tu||t.$$typeof===V1||t.$$typeof===G1||t.$$typeof===H1||t.$$typeof===B1)};nt.typeOf=wn;(function(t){t.exports=nt})(F1);var mh=Jd,W1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gh={};gh[mh.ForwardRef]=$1;gh[mh.Memo]=Qv;function Vp(t){return mh.isMemo(t)?Qv:gh[t.$$typeof]||W1}var X1=Object.defineProperty,q1=Object.getOwnPropertyNames,Gp=Object.getOwnPropertySymbols,Y1=Object.getOwnPropertyDescriptor,K1=Object.getPrototypeOf,Hp=Object.prototype;function Jv(t,e,n){if(typeof e!="string"){if(Hp){var i=K1(e);i&&i!==Hp&&Jv(t,i,n)}var r=q1(e);Gp&&(r=r.concat(Gp(e)));for(var o=Vp(t),s=Vp(e),a=0;a<r.length;++a){var l=r[a];if(!j1[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=Y1(e,l);try{X1(t,l,u)}catch{}}}}return t}var Z1=Jv;function yi(){return(yi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var Wp=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},ef=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Wl.typeOf(t)},jl=Object.freeze([]),Ki=Object.freeze({});function Qs(t){return typeof t=="function"}function jp(t){return t.displayName||t.name||"Component"}function vh(t){return t&&typeof t.styledComponentId=="string"}var Uo=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_h=typeof window<"u"&&"HTMLElement"in window,Q1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function da(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var J1=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,s=o;n>=s;)(s<<=1)<0&&da(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=i.length;u<d;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),o=r+i;this.groupSizes[n]=0;for(var s=r;s<o;s++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],o=this.indexOfGroup(n),s=o+r,a=o;a<s;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),vl=new Map,$l=new Map,Rs=1,Ia=function(t){if(vl.has(t))return vl.get(t);for(;$l.has(Rs);)Rs++;var e=Rs++;return vl.set(t,e),$l.set(e,t),e},eS=function(t){return $l.get(t)},tS=function(t,e){e>=Rs&&(Rs=e+1),vl.set(t,e),$l.set(e,t)},nS="style["+Uo+'][data-styled-version="5.3.6"]',iS=new RegExp("^"+Uo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),rS=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},oS=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,o=n.length;r<o;r++){var s=n[r].trim();if(s){var a=s.match(iS);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(tS(u,l),rS(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(s)}}},sS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},e_=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(Uo))return d}}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(Uo,"active"),i.setAttribute("data-styled-version","5.3.6");var s=sS();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},aS=function(){function t(n){var i=this.element=e_(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===r)return l}da(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),lS=function(){function t(n){var i=this.element=e_(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),o=this.nodes[n];return this.element.insertBefore(r,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),uS=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),$p=_h,cS={isServer:!_h,useCSSOMInjection:!Q1},t_=function(){function t(n,i,r){n===void 0&&(n=Ki),i===void 0&&(i={}),this.options=yi({},cS,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&_h&&$p&&($p=!1,function(o){for(var s=document.querySelectorAll(nS),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Uo)!=="active"&&(oS(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ia(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(yi({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,o=i.useCSSOMInjection,s=i.target,n=r?new uS(s):o?new aS(s):new lS(s),new J1(n)));var n,i,r,o,s},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(Ia(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(Ia(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ia(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,o="",s=0;s<r;s++){var a=eS(s);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(s);if(l&&u&&l.size){var d=Uo+".g"+s+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(c){c.length>0&&(f+=c+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},t}(),dS=/(a)(d)/gi,Xp=function(t){return String.fromCharCode(t+(t>25?39:97))};function tf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Xp(e%52)+n;return(Xp(e%52)+n).replace(dS,"$1-$2")}var yo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},n_=function(t){return yo(5381,t)};function fS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qs(n)&&!vh(n))return!1}return!0}var hS=n_("5.3.6"),pS=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&fS(e),this.componentId=n,this.baseHash=yo(hS,n),this.baseStyle=i,t_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Bo(this.rules,e,n,i).join(""),a=tf(yo(this.baseHash,s)>>>0);if(!n.hasNameForId(r,a)){var l=i(s,"."+a,void 0,r);n.insertRules(r,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=yo(this.baseHash,i.hash),f="",c=0;c<u;c++){var g=this.rules[c];if(typeof g=="string")f+=g;else if(g){var x=Bo(g,e,n,i),p=Array.isArray(x)?x.join(""):x;d=yo(d,p+c),f+=p}}if(f){var h=tf(d>>>0);if(!n.hasNameForId(r,h)){var m=i(f,"."+h,void 0,r);n.insertRules(r,h,m)}o.push(h)}}return o.join(" ")},t}(),mS=/^\s*\/\/.*$/gm,gS=[":","[",".","#"];function vS(t){var e,n,i,r,o=t===void 0?Ki:t,s=o.options,a=s===void 0?Ki:s,l=o.plugins,u=l===void 0?jl:l,d=new k1(a),f=[],c=function(p){function h(m){if(m)try{p(m+"}")}catch{}}return function(m,v,_,y,S,P,R,w,C,I){switch(m){case 1:if(C===0&&v.charCodeAt(0)===64)return p(v+";"),"";break;case 2:if(w===0)return v+"/*|*/";break;case 3:switch(w){case 102:case 112:return p(_[0]+v),"";default:return v+(I===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(h)}}}(function(p){f.push(p)}),g=function(p,h,m){return h===0&&gS.indexOf(m[n.length])!==-1||m.match(r)?p:"."+e};function x(p,h,m,v){v===void 0&&(v="&");var _=p.replace(mS,""),y=h&&m?m+" "+h+" { "+_+" }":_;return e=v,n=h,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),d(m||!h?"":h,y)}return d.use([].concat(u,[function(p,h,m){p===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(i,g))},c,function(p){if(p===-2){var h=f;return f=[],h}}])),x.hash=u.length?u.reduce(function(p,h){return h.name||da(15),yo(p,h.name)},5381).toString():"",x}var i_=sa.createContext();i_.Consumer;var r_=sa.createContext(),_S=(r_.Consumer,new t_),nf=vS();function xS(){return He.useContext(i_)||_S}function yS(){return He.useContext(r_)||nf}var SS=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=nf);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.toString=function(){return da(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=nf),this.name+e.hash},t}(),wS=/([A-Z])/,MS=/([A-Z])/g,bS=/^ms-/,ES=function(t){return"-"+t.toLowerCase()};function qp(t){return wS.test(t)?t.replace(MS,ES).replace(bS,"-ms-"):t}var Yp=function(t){return t==null||t===!1||t===""};function Bo(t,e,n,i){if(Array.isArray(t)){for(var r,o=[],s=0,a=t.length;s<a;s+=1)(r=Bo(t[s],e,n,i))!==""&&(Array.isArray(r)?o.push.apply(o,r):o.push(r));return o}if(Yp(t))return"";if(vh(t))return"."+t.styledComponentId;if(Qs(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Bo(l,e,n,i)}var u;return t instanceof SS?n?(t.inject(n,i),t.getName(i)):t:ef(t)?function d(f,c){var g,x,p=[];for(var h in f)f.hasOwnProperty(h)&&!Yp(f[h])&&(Array.isArray(f[h])&&f[h].isCss||Qs(f[h])?p.push(qp(h)+":",f[h],";"):ef(f[h])?p.push.apply(p,d(f[h],h)):p.push(qp(h)+": "+(g=h,(x=f[h])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||g in N1?String(x).trim():x+"px")+";"));return c?[c+" {"].concat(p,["}"]):p}(t):t.toString()}var Kp=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function TS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return Qs(t)||ef(t)?Kp(Bo(Wp(jl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Kp(Bo(Wp(t,n)))}var CS=function(t,e,n){return n===void 0&&(n=Ki),t.theme!==n.theme&&t.theme||e||n.theme},AS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,PS=/(^-|-$)/g;function hc(t){return t.replace(AS,"-").replace(PS,"")}var LS=function(t){return tf(n_(t)>>>0)};function ka(t){return typeof t=="string"&&!0}var rf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},RS=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function DS(t,e,n){var i=t[n];rf(e)&&rf(i)?o_(i,e):t[n]=e}function o_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,o=n;r<o.length;r++){var s=o[r];if(rf(s))for(var a in s)RS(a)&&DS(t,s[a],a)}return t}var s_=sa.createContext();s_.Consumer;var pc={};function a_(t,e,n){var i=vh(t),r=!ka(t),o=e.attrs,s=o===void 0?jl:o,a=e.componentId,l=a===void 0?function(v,_){var y=typeof v!="string"?"sc":hc(v);pc[y]=(pc[y]||0)+1;var S=y+"-"+LS("5.3.6"+y+pc[y]);return _?_+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,d=u===void 0?function(v){return ka(v)?"styled."+v:"Styled("+jp(v)+")"}(t):u,f=e.displayName&&e.componentId?hc(e.displayName)+"-"+e.componentId:e.componentId||l,c=i&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,g=e.shouldForwardProp;i&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(v,_,y){return t.shouldForwardProp(v,_,y)&&e.shouldForwardProp(v,_,y)}:t.shouldForwardProp);var x,p=new pS(n,f,i?t.componentStyle:void 0),h=p.isStatic&&s.length===0,m=function(v,_){return function(y,S,P,R){var w=y.attrs,C=y.componentStyle,I=y.defaultProps,Z=y.foldedComponentIds,ie=y.shouldForwardProp,U=y.styledComponentId,B=y.target,K=function(Q,E,ge){Q===void 0&&(Q=Ki);var X=yi({},E,{theme:Q}),ve={};return ge.forEach(function(ue){var be,me,xe,Ne=ue;for(be in Qs(Ne)&&(Ne=Ne(X)),Ne)X[be]=ve[be]=be==="className"?(me=ve[be],xe=Ne[be],me&&xe?me+" "+xe:me||xe):Ne[be]}),[X,ve]}(CS(S,He.useContext(s_),I)||Ki,S,w),le=K[0],ee=K[1],O=function(Q,E,ge,X){var ve=xS(),ue=yS(),be=E?Q.generateAndInjectStyles(Ki,ve,ue):Q.generateAndInjectStyles(ge,ve,ue);return be}(C,R,le),q=P,Y=ee.$as||S.$as||ee.as||S.as||B,de=ka(Y),D=ee!==S?yi({},S,{},ee):S,F={};for(var j in D)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?F.as=D[j]:(ie?ie(j,Bp,Y):!de||Bp(j))&&(F[j]=D[j]));return S.style&&ee.style!==S.style&&(F.style=yi({},S.style,{},ee.style)),F.className=Array.prototype.concat(Z,U,O!==U?O:null,S.className,ee.className).filter(Boolean).join(" "),F.ref=q,He.createElement(Y,F)}(x,v,_,h)};return m.displayName=d,(x=sa.forwardRef(m)).attrs=c,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):jl,x.styledComponentId=f,x.target=i?t.target:t,x.withComponent=function(v){var _=e.componentId,y=function(P,R){if(P==null)return{};var w,C,I={},Z=Object.keys(P);for(C=0;C<Z.length;C++)w=Z[C],R.indexOf(w)>=0||(I[w]=P[w]);return I}(e,["componentId"]),S=_&&_+"-"+(ka(v)?v:hc(jp(v)));return a_(v,yi({},y,{attrs:c,componentId:S}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?o_({},t.defaultProps,v):v}}),x.toString=function(){return"."+x.styledComponentId},r&&Z1(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var of=function(t){return function e(n,i,r){if(r===void 0&&(r=Ki),!Wl.isValidElementType(i))return da(1,String(i));var o=function(){return n(i,r,TS.apply(void 0,arguments))};return o.withConfig=function(s){return e(n,i,yi({},r,{},s))},o.attrs=function(s){return e(n,i,yi({},r,{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},o}(a_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){of[t]=of(t)});const Me=of,IS=Me.div`
    background-color: #D9D9D9;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 2px solid lightgreen;
`,kS=Me.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`,NS=Me.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,OS=Me.button`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-right: 20px;
    * {
        text-decoration: none;
    }
`,zS=Me.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`,FS=Me.input`
    width: 500px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid gray;
    padding-right: 40px;
    padding-left: 5px;
    &:focus {
        outline: none;
    }
`,US=Me.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 6px;
    right: 5px;
    
`,Pn=Me.button`
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
`,Er=Me.p`
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
`,$n=Me.img`
    width: ${t=>t.imgWidth||"30px"};
    height: ${t=>t.imgHeight||"30px"};
    &:hover {
        cursor: pointer;
    }
`,l_=Me.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: ${t=>t.titleFontSize};
    line-height: 50px;
    color: black;
    position: absolute;
    left: 430px;
    width: 450px;
    
`,qo=Me.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: ${t=>t.contentDisplay||"block"};
`,u_=Me.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`,xh=Me.div` 
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
 */function Ze(){return Ze=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ze.apply(this,arguments)}var Rt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rt||(Rt={}));const Zp="popstate";function BS(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Js("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ai(r)}return GS(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VS(){return Math.random().toString(36).substr(2,8)}function Qp(t,e){return{usr:t.state,key:t.key,idx:e}}function Js(t,e,n,i){return n===void 0&&(n=null),Ze({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vr(e):e,{state:n,key:e&&e.key||i||VS()})}function ai(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Vr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function GS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Rt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Ze({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Rt.Pop;let h=d(),m=h==null?null:h-u;u=h,l&&l({action:a,location:p.location,delta:m})}function c(h,m){a=Rt.Push;let v=Js(p.location,h,m);n&&n(v,h),u=d()+1;let _=Qp(v,u),y=p.createHref(v);try{s.pushState(_,"",y)}catch{r.location.assign(y)}o&&l&&l({action:a,location:p.location,delta:1})}function g(h,m){a=Rt.Replace;let v=Js(p.location,h,m);n&&n(v,h),u=d();let _=Qp(v,u),y=p.createHref(v);s.replaceState(_,"",y),o&&l&&l({action:a,location:p.location,delta:0})}function x(h){let m=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof h=="string"?h:ai(h);return Qe(m,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,m)}let p={get action(){return a},get location(){return t(r,s)},listen(h){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Zp,f),l=h,()=>{r.removeEventListener(Zp,f),l=null}},createHref(h){return e(r,h)},createURL:x,encodeLocation(h){let m=x(h);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:c,replace:g,go(h){return s.go(h)}};return p}var zt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zt||(zt={}));function HS(t){return t.index===!0}function c_(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((i,r)=>{let o=[...e,r],s=typeof i.id=="string"?i.id:o.join("-");return Qe(i.index!==!0||!i.children,"Cannot specify children on an index route"),Qe(!n.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),n.add(s),HS(i)?Ze({},i,{id:s}):Ze({},i,{id:s,children:i.children?c_(i.children,o,n):void 0})})}function Na(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Vr(e):e,r=rw(i.pathname||"/",n);if(r==null)return null;let o=d_(t);WS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=JS(o[a],nw(r));return s}function d_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Qe(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Tr([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),d_(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:ZS(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of f_(o.path))r(o,s,l)}),e}function f_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=f_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function WS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const jS=/^:\w+$/,$S=3,XS=2,qS=1,YS=10,KS=-2,Jp=t=>t==="*";function ZS(t,e){let n=t.split("/"),i=n.length;return n.some(Jp)&&(i+=KS),e&&(i+=XS),n.filter(r=>!Jp(r)).reduce((r,o)=>r+(jS.test(o)?$S:o===""?qS:YS),i)}function QS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function JS(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",d=ew({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(i,d.params);let f=a.route;o.push({params:i,pathname:Tr([r,d.pathname]),pathnameBase:aw(Tr([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=Tr([r,d.pathnameBase]))}return o}function ew(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=tw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,d,f)=>{if(d==="*"){let c=a[f]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[d]=iw(a[f]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function tw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ea(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function nw(t){try{return decodeURI(t)}catch(e){return ea(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function iw(t,e){try{return decodeURIComponent(t)}catch(n){return ea(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function rw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ea(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ow(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Vr(t):t;return{pathname:n?n.startsWith("/")?n:sw(n,e):e,search:lw(i),hash:uw(r)}}function sw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function mc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Vr(t):(r=Ze({},t),Qe(!r.pathname||!r.pathname.includes("?"),mc("?","pathname","search",r)),Qe(!r.pathname||!r.pathname.includes("#"),mc("#","pathname","hash",r)),Qe(!r.search||!r.search.includes("#"),mc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let c=s.split("/");for(;c[0]==="..";)c.shift(),f-=1;r.pathname=c.join("/")}a=f>=0?e[f]:"/"}let l=ow(r,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),aw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class em extends Error{}class cw{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Qe(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let i;this.abortPromise=new Promise((o,s)=>i=s),this.controller=new AbortController;let r=()=>i(new em("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce((o,s)=>{let[a,l]=s;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let i=Promise.race([n,this.abortPromise]).then(r=>this.onSettle(i,e,null,r),r=>this.onSettle(i,e,r));return i.catch(()=>{}),Object.defineProperty(i,"_tracked",{get:()=>!0}),i}onSettle(e,n,i,r){return this.controller.signal.aborted&&i instanceof em?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>i}),Promise.reject(i)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),i?(Object.defineProperty(e,"_error",{get:()=>i}),this.emit(!1,n),Promise.reject(i)):(Object.defineProperty(e,"_data",{get:()=>r}),this.emit(!1,n),r))}emit(e,n){this.subscribers.forEach(i=>i(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let i=()=>this.cancel();e.addEventListener("abort",i),n=await new Promise(r=>{this.subscribe(o=>{e.removeEventListener("abort",i),(o||this.done)&&r(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Qe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[i,r]=n;return Object.assign(e,{[i]:fw(r)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function dw(t){return t instanceof Promise&&t._tracked===!0}function fw(t){if(!dw(t))return t;if(t._error)throw t._error;return t._data}class Sh{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function hw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const h_=["post","put","patch","delete"],pw=new Set(h_),mw=["get",...h_],gw=new Set(mw),vw=new Set([301,302,303,307,308]),_w=new Set([307,308]),gc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},xw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},tm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},p_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yw=!p_;function Sw(t){Qe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=c_(t.routes),n=null,i=new Set,r=null,o=null,s=null,a=t.hydrationData!=null,l=Na(e,t.history.location,t.basename),u=null;if(l==null){let L=ki(404,{pathname:t.history.location.pathname}),{matches:k,route:G}=am(e);l=k,u={[G.id]:L}}let d=!l.some(L=>L.route.loader)||t.hydrationData!=null,f,c={historyAction:t.history.action,location:t.history.location,matches:l,initialized:d,navigation:gc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map,blockers:new Map},g=Rt.Pop,x=!1,p,h=!1,m=!1,v=[],_=[],y=new Map,S=0,P=-1,R=new Map,w=new Set,C=new Map,I=new Map,Z=null,ie=new Map,U=!1;function B(){return n=t.history.listen(L=>{let{action:k,location:G,delta:oe}=L;if(U){U=!1;return}ea(Z!=null&&oe===null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let b=qe({currentLocation:c.location,nextLocation:G,historyAction:k});if(b&&oe!=null){U=!0,t.history.go(oe*-1),ke(b,{state:"blocked",location:G,proceed(){ke(b,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),t.history.go(oe)},reset(){Le(b),ee({blockers:new Map(f.state.blockers)})}});return}return de(k,G)}),c.initialized||de(Rt.Pop,c.location),f}function K(){n&&n(),i.clear(),p&&p.abort(),c.fetchers.forEach((L,k)=>me(k)),c.blockers.forEach((L,k)=>Le(k))}function le(L){return i.add(L),()=>i.delete(L)}function ee(L){c=Ze({},c,L),i.forEach(k=>k(c))}function O(L,k){var G,oe;let b=c.actionData!=null&&c.navigation.formMethod!=null&&mi(c.navigation.formMethod)&&c.navigation.state==="loading"&&((G=L.state)==null?void 0:G._isRedirect)!==!0,N;k.actionData?Object.keys(k.actionData).length>0?N=k.actionData:N=null:b?N=c.actionData:N=null;let se=k.loaderData?sm(c.loaderData,k.loaderData,k.matches||[],k.errors):c.loaderData;for(let[ne]of ie)Le(ne);let ce=x===!0||c.navigation.formMethod!=null&&mi(c.navigation.formMethod)&&((oe=L.state)==null?void 0:oe._isRedirect)!==!0;ee(Ze({},k,{actionData:N,loaderData:se,historyAction:g,location:L,initialized:!0,navigation:gc,revalidation:"idle",restoreScrollPosition:V(L,k.matches||c.matches),preventScrollReset:ce,blockers:new Map(c.blockers)})),h||g===Rt.Pop||(g===Rt.Push?t.history.push(L,L.state):g===Rt.Replace&&t.history.replace(L,L.state)),g=Rt.Pop,x=!1,h=!1,m=!1,v=[],_=[]}async function q(L,k){if(typeof L=="number"){t.history.go(L);return}let{path:G,submission:oe,error:b}=nm(L,k),N=c.location,se=Js(c.location,G,k&&k.state);se=Ze({},se,t.history.encodeLocation(se));let ce=k&&k.replace!=null?k.replace:void 0,ne=Rt.Push;ce===!0?ne=Rt.Replace:ce===!1||oe!=null&&mi(oe.formMethod)&&oe.formAction===c.location.pathname+c.location.search&&(ne=Rt.Replace);let Se=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,he=qe({currentLocation:N,nextLocation:se,historyAction:ne});if(he){ke(he,{state:"blocked",location:se,proceed(){ke(he,{state:"proceeding",proceed:void 0,reset:void 0,location:se}),q(L,k)},reset(){Le(he),ee({blockers:new Map(c.blockers)})}});return}return await de(ne,se,{submission:oe,pendingError:b,preventScrollReset:Se,replace:k&&k.replace})}function Y(){if(ue(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){de(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}de(g||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function de(L,k,G){p&&p.abort(),p=null,g=L,h=(G&&G.startUninterruptedRevalidation)===!0,M(c.location,c.matches),x=(G&&G.preventScrollReset)===!0;let oe=G&&G.overrideNavigation,b=Na(e,k,t.basename);if(!b){let Te=ki(404,{pathname:k.pathname}),{matches:De,route:Fe}=am(e);ft(),O(k,{matches:De,loaderData:{},errors:{[Fe.id]:Te}});return}if(Tw(c.location,k)&&!(G&&G.submission&&mi(G.submission.formMethod))){O(k,{matches:b});return}p=new AbortController;let N=as(t.history,k,p.signal,G&&G.submission),se,ce;if(G&&G.pendingError)ce={[So(b).route.id]:G.pendingError};else if(G&&G.submission&&mi(G.submission.formMethod)){let Te=await D(N,k,G.submission,b,{replace:G.replace});if(Te.shortCircuited)return;se=Te.pendingActionData,ce=Te.pendingActionError,oe=Ze({state:"loading",location:k},G.submission),N=new Request(N.url,{signal:N.signal})}let{shortCircuited:ne,loaderData:Se,errors:he}=await F(N,k,b,oe,G&&G.submission,G&&G.replace,se,ce);ne||(p=null,O(k,Ze({matches:b},se?{actionData:se}:{},{loaderData:Se,errors:he})))}async function D(L,k,G,oe,b){ue();let N=Ze({state:"submitting",location:k},G);ee({navigation:N});let se,ce=dm(oe,k);if(!ce.route.action)se={type:zt.error,error:ki(405,{method:L.method,pathname:k.pathname,routeId:ce.route.id})};else if(se=await ss("action",L,ce,oe,f.basename),L.signal.aborted)return{shortCircuited:!0};if(Po(se)){let ne;return b&&b.replace!=null?ne=b.replace:ne=se.location===c.location.pathname+c.location.search,await X(c,se,{submission:G,replace:ne}),{shortCircuited:!0}}if(Ds(se)){let ne=So(oe,ce.route.id);return(b&&b.replace)!==!0&&(g=Rt.Push),{pendingActionData:{},pendingActionError:{[ne.route.id]:se.error}}}if(yr(se))throw ki(400,{type:"defer-action"});return{pendingActionData:{[ce.route.id]:se.data}}}async function F(L,k,G,oe,b,N,se,ce){let ne=oe;ne||(ne=Ze({state:"loading",location:k,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},b));let Se=b||(ne.formMethod&&ne.formAction&&ne.formData&&ne.formEncType?{formMethod:ne.formMethod,formAction:ne.formAction,formData:ne.formData,formEncType:ne.formEncType}:void 0),[he,Te]=im(t.history,c,G,Se,k,m,v,_,se,ce,C);if(ft(Re=>!(G&&G.some(Je=>Je.route.id===Re))||he&&he.some(Je=>Je.route.id===Re)),he.length===0&&Te.length===0)return O(k,Ze({matches:G,loaderData:{},errors:ce||null},se?{actionData:se}:{})),{shortCircuited:!0};if(!h){Te.forEach(Je=>{let lt=c.fetchers.get(Je.key),Mn={state:"loading",data:lt&&lt.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(Je.key,Mn)});let Re=se||c.actionData;ee(Ze({navigation:ne},Re?Object.keys(Re).length===0?{actionData:null}:{actionData:Re}:{},Te.length>0?{fetchers:new Map(c.fetchers)}:{}))}P=++S,Te.forEach(Re=>y.set(Re.key,p));let{results:De,loaderResults:Fe,fetcherResults:z}=await ve(c.matches,G,he,Te,L);if(L.signal.aborted)return{shortCircuited:!0};Te.forEach(Re=>y.delete(Re.key));let J=lm(De);if(J)return await X(c,J,{replace:N}),{shortCircuited:!0};let{loaderData:fe,errors:ye}=om(c,G,he,Fe,ce,Te,z,I);I.forEach((Re,Je)=>{Re.subscribe(lt=>{(lt||Re.done)&&I.delete(Je)})}),Ce();let Ee=Ie(P);return Ze({loaderData:fe,errors:ye},Ee||Te.length>0?{fetchers:new Map(c.fetchers)}:{})}function j(L){return c.fetchers.get(L)||xw}function Q(L,k,G,oe){if(yw)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");y.has(L)&&xe(L);let b=Na(e,G,t.basename);if(!b){be(L,k,ki(404,{pathname:G}));return}let{path:N,submission:se}=nm(G,oe,!0),ce=dm(b,N);if(x=(oe&&oe.preventScrollReset)===!0,se&&mi(se.formMethod)){E(L,k,N,ce,b,se);return}C.set(L,{routeId:k,path:N,match:ce,matches:b}),ge(L,k,N,ce,b,se)}async function E(L,k,G,oe,b,N){if(ue(),C.delete(L),!oe.route.action){let bn=ki(405,{method:N.formMethod,pathname:G,routeId:k});be(L,k,bn);return}let se=c.fetchers.get(L),ce=Ze({state:"submitting"},N,{data:se&&se.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(L,ce),ee({fetchers:new Map(c.fetchers)});let ne=new AbortController,Se=as(t.history,G,ne.signal,N);y.set(L,ne);let he=await ss("action",Se,oe,b,f.basename);if(Se.signal.aborted){y.get(L)===ne&&y.delete(L);return}if(Po(he)){y.delete(L),w.add(L);let bn=Ze({state:"loading"},N,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(L,bn),ee({fetchers:new Map(c.fetchers)}),X(c,he,{isFetchActionRedirect:!0})}if(Ds(he)){be(L,k,he.error);return}if(yr(he))throw ki(400,{type:"defer-action"});let Te=c.navigation.location||c.location,De=as(t.history,Te,ne.signal),Fe=c.navigation.state!=="idle"?Na(e,c.navigation.location,t.basename):c.matches;Qe(Fe,"Didn't find any matches after fetcher action");let z=++S;R.set(L,z);let J=Ze({state:"loading",data:he.data},N,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(L,J);let[fe,ye]=im(t.history,c,Fe,N,Te,m,v,_,{[oe.route.id]:he.data},void 0,C);ye.filter(bn=>bn.key!==L).forEach(bn=>{let Ko=bn.key,ma=c.fetchers.get(Ko),Ou={state:"loading",data:ma&&ma.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(Ko,Ou),y.set(Ko,ne)}),ee({fetchers:new Map(c.fetchers)});let{results:Ee,loaderResults:Re,fetcherResults:Je}=await ve(c.matches,Fe,fe,ye,De);if(ne.signal.aborted)return;R.delete(L),y.delete(L),ye.forEach(bn=>y.delete(bn.key));let lt=lm(Ee);if(lt)return X(c,lt);let{loaderData:Mn,errors:it}=om(c,c.matches,fe,Re,void 0,ye,Je,I),Nn={state:"idle",data:he.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(L,Nn);let Jt=Ie(z);c.navigation.state==="loading"&&z>P?(Qe(g,"Expected pending action"),p&&p.abort(),O(c.navigation.location,{matches:Fe,loaderData:Mn,errors:it,fetchers:new Map(c.fetchers)})):(ee(Ze({errors:it,loaderData:sm(c.loaderData,Mn,Fe,it)},Jt?{fetchers:new Map(c.fetchers)}:{})),m=!1)}async function ge(L,k,G,oe,b,N){let se=c.fetchers.get(L),ce=Ze({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},N,{data:se&&se.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(L,ce),ee({fetchers:new Map(c.fetchers)});let ne=new AbortController,Se=as(t.history,G,ne.signal);y.set(L,ne);let he=await ss("loader",Se,oe,b,f.basename);if(yr(he)&&(he=await __(he,Se.signal,!0)||he),y.get(L)===ne&&y.delete(L),Se.signal.aborted)return;if(Po(he)){await X(c,he);return}if(Ds(he)){let De=So(c.matches,k);c.fetchers.delete(L),ee({fetchers:new Map(c.fetchers),errors:{[De.route.id]:he.error}});return}Qe(!yr(he),"Unhandled fetcher deferred data");let Te={state:"idle",data:he.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(L,Te),ee({fetchers:new Map(c.fetchers)})}async function X(L,k,G){var oe;let{submission:b,replace:N,isFetchActionRedirect:se}=G===void 0?{}:G;k.revalidate&&(m=!0);let ce=Js(L.location,k.location,Ze({_isRedirect:!0},se?{_isFetchActionRedirect:!0}:{}));if(Qe(ce,"Expected a location on the redirect navigation"),p_&&typeof((oe=window)==null?void 0:oe.location)<"u"){let Fe=t.history.createURL(k.location).origin;if(window.location.origin!==Fe){N?window.location.replace(k.location):window.location.assign(k.location);return}}p=null;let ne=N===!0?Rt.Replace:Rt.Push,{formMethod:Se,formAction:he,formEncType:Te,formData:De}=L.navigation;!b&&Se&&he&&De&&Te&&(b={formMethod:Se,formAction:he,formEncType:Te,formData:De}),_w.has(k.status)&&b&&mi(b.formMethod)?await de(ne,ce,{submission:Ze({},b,{formAction:k.location}),preventScrollReset:x}):await de(ne,ce,{overrideNavigation:{state:"loading",location:ce,formMethod:b?b.formMethod:void 0,formAction:b?b.formAction:void 0,formEncType:b?b.formEncType:void 0,formData:b?b.formData:void 0},preventScrollReset:x})}async function ve(L,k,G,oe,b){let N=await Promise.all([...G.map(ne=>ss("loader",b,ne,k,f.basename)),...oe.map(ne=>ss("loader",as(t.history,ne.path,b.signal),ne.match,ne.matches,f.basename))]),se=N.slice(0,G.length),ce=N.slice(G.length);return await Promise.all([um(L,G,se,b.signal,!1,c.loaderData),um(L,oe.map(ne=>ne.match),ce,b.signal,!0)]),{results:N,loaderResults:se,fetcherResults:ce}}function ue(){m=!0,v.push(...ft()),C.forEach((L,k)=>{y.has(k)&&(_.push(k),xe(k))})}function be(L,k,G){let oe=So(c.matches,k);me(L),ee({errors:{[oe.route.id]:G},fetchers:new Map(c.fetchers)})}function me(L){y.has(L)&&xe(L),C.delete(L),R.delete(L),w.delete(L),c.fetchers.delete(L)}function xe(L){let k=y.get(L);Qe(k,"Expected fetch controller: "+L),k.abort(),y.delete(L)}function Ne(L){for(let k of L){let oe={state:"idle",data:j(k).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(k,oe)}}function Ce(){let L=[];for(let k of w){let G=c.fetchers.get(k);Qe(G,"Expected fetcher: "+k),G.state==="loading"&&(w.delete(k),L.push(k))}Ne(L)}function Ie(L){let k=[];for(let[G,oe]of R)if(oe<L){let b=c.fetchers.get(G);Qe(b,"Expected fetcher: "+G),b.state==="loading"&&(xe(G),R.delete(G),k.push(G))}return Ne(k),k.length>0}function Ae(L,k){let G=c.blockers.get(L)||tm;return ie.get(L)!==k&&(ie.set(L,k),Z==null?Z=L:L!==Z&&ea(!1,"A router only supports one blocker at a time")),G}function Le(L){c.blockers.delete(L),ie.delete(L),Z===L&&(Z=null)}function ke(L,k){let G=c.blockers.get(L)||tm;Qe(G.state==="unblocked"&&k.state==="blocked"||G.state==="blocked"&&k.state==="blocked"||G.state==="blocked"&&k.state==="proceeding"||G.state==="blocked"&&k.state==="unblocked"||G.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+k.state),c.blockers.set(L,k),ee({blockers:new Map(c.blockers)})}function qe(L){let{currentLocation:k,nextLocation:G,historyAction:oe}=L;if(Z==null)return;let b=ie.get(Z);Qe(b,"Could not find a function for the active blocker");let N=c.blockers.get(Z);if(!(N&&N.state==="proceeding")&&b({currentLocation:k,nextLocation:G,historyAction:oe}))return Z}function ft(L){let k=[];return I.forEach((G,oe)=>{(!L||L(oe))&&(G.cancel(),k.push(oe),I.delete(oe))}),k}function A(L,k,G){if(r=L,s=k,o=G||(oe=>oe.key),!a&&c.navigation===gc){a=!0;let oe=V(c.location,c.matches);oe!=null&&ee({restoreScrollPosition:oe})}return()=>{r=null,s=null,o=null}}function M(L,k){if(r&&o&&s){let G=k.map(b=>cm(b,c.loaderData)),oe=o(L,G)||L.key;r[oe]=s()}}function V(L,k){if(r&&o&&s){let G=k.map(N=>cm(N,c.loaderData)),oe=o(L,G)||L.key,b=r[oe];if(typeof b=="number")return b}return null}return f={get basename(){return t.basename},get state(){return c},get routes(){return e},initialize:B,subscribe:le,enableScrollRestoration:A,navigate:q,fetch:Q,revalidate:Y,createHref:L=>t.history.createHref(L),encodeLocation:L=>t.history.encodeLocation(L),getFetcher:j,deleteFetcher:me,dispose:K,getBlocker:Ae,deleteBlocker:Le,_internalFetchControllers:y,_internalActiveDeferreds:I},f}function ww(t){return t!=null&&"formData"in t}function nm(t,e,n){n===void 0&&(n=!1);let i=typeof t=="string"?t:ai(t);if(!e||!ww(e))return{path:i};if(e.formMethod&&!Aw(e.formMethod))return{path:i,error:ki(405,{method:e.formMethod})};let r;if(e.formData&&(r={formMethod:e.formMethod||"get",formAction:v_(i),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},mi(r.formMethod)))return{path:i,submission:r};let o=Vr(i),s=g_(e.formData);return n&&o.search&&x_(o.search)&&s.append("index",""),o.search="?"+s,{path:ai(o),submission:r}}function Mw(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function im(t,e,n,i,r,o,s,a,l,u,d){let f=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,c=t.createURL(e.location),g=t.createURL(r),x=o||c.toString()===g.toString()||c.search!==g.search,p=u?Object.keys(u)[0]:void 0,m=Mw(n,p).filter((_,y)=>{if(_.route.loader==null)return!1;if(bw(e.loaderData,e.matches[y],_)||s.some(R=>R===_.route.id))return!0;let S=e.matches[y],P=_;return rm(_,Ze({currentUrl:c,currentParams:S.params,nextUrl:g,nextParams:P.params},i,{actionResult:f,defaultShouldRevalidate:x||m_(S,P)}))}),v=[];return d&&d.forEach((_,y)=>{if(n.some(S=>S.route.id===_.routeId))a.includes(y)?v.push(Ze({key:y},_)):rm(_.match,Ze({currentUrl:c,currentParams:e.matches[e.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},i,{actionResult:f,defaultShouldRevalidate:x}))&&v.push(Ze({key:y},_));else return}),[m,v]}function bw(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function m_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function rm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function ss(t,e,n,i,r,o,s,a){r===void 0&&(r="/"),o===void 0&&(o=!1),s===void 0&&(s=!1);let l,u,d,f=new Promise((g,x)=>d=x),c=()=>d();e.signal.addEventListener("abort",c);try{let g=n.route[t];Qe(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([g({request:e,params:n.params,context:a}),f]),Qe(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){l=zt.error,u=g}finally{e.signal.removeEventListener("abort",c)}if(Cw(u)){let g=u.status;if(vw.has(g)){let h=u.headers.get("Location");if(Qe(h,"Redirects returned/thrown from loaders/actions must have a Location header"),/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(h)){if(!o){let v=new URL(e.url),_=h.startsWith("//")?new URL(v.protocol+h):new URL(h);_.origin===v.origin&&(h=_.pathname+_.search+_.hash)}}else{let v=i.slice(0,i.indexOf(n)+1),_=Lu(v).map(S=>S.pathnameBase),y=yh(h,_,new URL(e.url).pathname);if(Qe(ai(y),"Unable to resolve redirect location: "+h),r){let S=y.pathname;y.pathname=S==="/"?r:Tr([r,S])}h=ai(y)}if(o)throw u.headers.set("Location",h),u;return{type:zt.redirect,status:g,location:h,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:l||zt.data,response:u};let x,p=u.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?x=await u.json():x=await u.text(),l===zt.error?{type:l,error:new Sh(g,u.statusText,x),headers:u.headers}:{type:zt.data,data:x,statusCode:u.status,headers:u.headers}}return l===zt.error?{type:l,error:u}:u instanceof cw?{type:zt.deferred,deferredData:u}:{type:zt.data,data:u}}function as(t,e,n,i){let r=t.createURL(v_(e)).toString(),o={signal:n};if(i&&mi(i.formMethod)){let{formMethod:s,formEncType:a,formData:l}=i;o.method=s.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?g_(l):l}return new Request(r,o)}function g_(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,i instanceof File?i.name:i);return e}function Ew(t,e,n,i,r){let o={},s=null,a,l=!1,u={};return n.forEach((d,f)=>{let c=e[f].route.id;if(Qe(!Po(d),"Cannot handle redirect results in processLoaderData"),Ds(d)){let g=So(t,c),x=d.error;i&&(x=Object.values(i)[0],i=void 0),s=s||{},s[g.route.id]==null&&(s[g.route.id]=x),o[c]=void 0,l||(l=!0,a=hw(d.error)?d.error.status:500),d.headers&&(u[c]=d.headers)}else yr(d)?(r.set(c,d.deferredData),o[c]=d.deferredData.data):o[c]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(a=d.statusCode),d.headers&&(u[c]=d.headers)}),i&&(s=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function om(t,e,n,i,r,o,s,a){let{loaderData:l,errors:u}=Ew(e,n,i,r,a);for(let d=0;d<o.length;d++){let{key:f,match:c}=o[d];Qe(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let g=s[d];if(Ds(g)){let x=So(t.matches,c.route.id);u&&u[x.route.id]||(u=Ze({},u,{[x.route.id]:g.error})),t.fetchers.delete(f)}else if(Po(g))Qe(!1,"Unhandled fetcher revalidation redirect");else if(yr(g))Qe(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(f,x)}}return{loaderData:l,errors:u}}function sm(t,e,n,i){let r=Ze({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function So(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function am(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function ki(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",r&&n&&i?a="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(a="defer() is not supported in actions")):t===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?a="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new Sh(t||500,s,new Error(a),!0)}function lm(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Po(n))return n}}function v_(t){let e=typeof t=="string"?Vr(t):t;return ai(Ze({},e,{hash:""}))}function Tw(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function yr(t){return t.type===zt.deferred}function Ds(t){return t.type===zt.error}function Po(t){return(t&&t.type)===zt.redirect}function Cw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Aw(t){return gw.has(t)}function mi(t){return pw.has(t)}async function um(t,e,n,i,r,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s],u=t.find(f=>f.route.id===l.route.id),d=u!=null&&!m_(u,l)&&(o&&o[l.route.id])!==void 0;yr(a)&&(r||d)&&await __(a,i,r).then(f=>{f&&(n[s]=f||n[s])})}}async function __(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:zt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:zt.error,error:r}}return{type:zt.data,data:t.deferredData.data}}}function x_(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function cm(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function dm(t,e){let n=typeof e=="string"?Vr(e).search:e.search;if(t[t.length-1].route.index&&x_(n||""))return t[t.length-1];let i=Lu(t);return i[i.length-1]}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sf(){return sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sf.apply(this,arguments)}function Pw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Lw=typeof Object.is=="function"?Object.is:Pw,{useState:Rw,useEffect:Dw,useLayoutEffect:Iw,useDebugValue:kw}=id;function Nw(t,e,n){const i=e(),[{inst:r},o]=Rw({inst:{value:i,getSnapshot:e}});return Iw(()=>{r.value=i,r.getSnapshot=e,vc(r)&&o({inst:r})},[t,i,e]),Dw(()=>(vc(r)&&o({inst:r}),t(()=>{vc(r)&&o({inst:r})})),[t]),kw(i),i}function vc(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!Lw(n,i)}catch{return!0}}function Ow(t,e,n){return e()}const zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fw=!zw,Uw=Fw?Ow:Nw;"useSyncExternalStore"in id&&(t=>t.useSyncExternalStore)(id);const y_=He.createContext(null),S_=He.createContext(null),w_=He.createContext({outlet:null,matches:[]});function Bw(t,e){let{relative:n}=e===void 0?{}:e;wh()||Qe(!1);let{basename:i,navigator:r}=He.useContext(y_),{hash:o,pathname:s,search:a}=M_(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Tr([i,s])),r.createHref({pathname:l,search:a,hash:o})}function wh(){return He.useContext(S_)!=null}function Mh(){return wh()||Qe(!1),He.useContext(S_).location}function Vw(){wh()||Qe(!1);let{basename:t,navigator:e}=He.useContext(y_),{matches:n}=He.useContext(w_),{pathname:i}=Mh(),r=JSON.stringify(Lu(n).map(a=>a.pathnameBase)),o=He.useRef(!1);return He.useEffect(()=>{o.current=!0}),He.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=yh(a,JSON.parse(r),i,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Tr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,r,i])}function M_(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=He.useContext(w_),{pathname:r}=Mh(),o=JSON.stringify(Lu(i).map(s=>s.pathnameBase));return He.useMemo(()=>yh(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}var fm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(fm||(fm={}));var hm;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(hm||(hm={}));var pm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(pm||(pm={}));new Promise(()=>{});function b_(t){return t.map(e=>{let n=sf({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=b_(n.children)),n})}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xl.apply(this,arguments)}function Gw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Hw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ww(t,e){return t.button===0&&(!e||e==="_self")&&!Hw(t)}const jw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function $w(t,e){return Sw({basename:e==null?void 0:e.basename,history:BS({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||Xw(),routes:b_(t)}).initialize()}function Xw(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Xl({},e,{errors:qw(e.errors)})),e}function qw(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Sh(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){let o=new Error(r.message);o.stack="",n[i]=o}else n[i]=r;return n}const Yw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Is=He.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=e,f=Gw(e,jw),c=typeof u=="string"?u:ai(u),g=/^[a-z+]+:\/\//i.test(c)||c.startsWith("//"),x=c,p=!1;if(Yw&&g){let _=new URL(window.location.href),y=c.startsWith("//")?new URL(_.protocol+c):new URL(c);y.origin===_.origin?x=y.pathname+y.search+y.hash:p=!0}let h=Bw(x,{relative:r}),m=Kw(x,{replace:s,state:a,target:l,preventScrollReset:d,relative:r});function v(_){i&&i(_),_.defaultPrevented||m(_)}return He.createElement("a",Xl({},f,{href:g?c:h,onClick:p||o?i:v,ref:n,target:l}))});var mm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(mm||(mm={}));var gm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function Kw(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=Vw(),l=Mh(),u=M_(t,{relative:s});return He.useCallback(d=>{if(Ww(d,n)){d.preventDefault();let f=i!==void 0?i:ai(l)===ai(u);a(t,{replace:f,state:r,preventScrollReset:o,relative:s})}},[l,a,u,i,r,n,t,o,s])}function Ru(){return ae(IS,{children:ze(kS,{children:[ae(Is,{to:"/",children:ae($n,{src:A1,imgWidth:"120px",imgHeight:"90px"})}),ze(zS,{children:[ae(FS,{type:"text",placeholder:"SEARCH HERE"}),ae(US,{src:L1})]}),ze(NS,{children:[ae(OS,{children:ae(Is,{to:"/createQuiz",children:"CREATE QUIZ"})}),ae(Is,{to:"/settings",children:ae($n,{src:P1,imgWidth:"55px",imgHeight:"55px"})})]})]})})}function Zw(){return ae(qo,{children:ae(Ru,{})})}const E_="/assets/google_login_icon-7784d94b.png",Qw="/assets/facebook_icon-4148746f.png",Jw="/assets/snap_icon-415959e3.png",eM="/assets/twitter_icon-4e29da74.png",tM="/assets/tiktok_icon-e3ea9b75.png",nM=Me.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`,iM=Me.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`,rM=Me.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`;Me.label`
    text-align: left;
    margin-bottom: 8px;
    margin-top: 10px;
`;Me.input`
    border-radius: 50px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    border: 2.5px solid lightgray;
`;function oM(){return ae(nM,{children:ze(iM,{children:[ae(rM,{children:"SIGN UP"}),ae(Er,{children:"Choose the best way to you sign up: "}),ze(Pn,{children:[ae($n,{src:E_}),"With Google"]}),ze(Pn,{children:[ae($n,{src:Qw}),"With Facebook"]}),ze(Pn,{children:[ae($n,{src:eM}),"With Twitter"]}),ze(Pn,{children:[ae($n,{src:Jw}),"With Snap"]}),ze(Pn,{children:[ae($n,{src:tM}),"With Tik Tok"]}),ae(Er,{textColor:"#4025E4",textSize:"12px",children:ae(Is,{to:"/login",children:"BACK TO LOGIN"})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="149",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sM=0,vm=1,aM=2,T_=1,lM=2,ys=3,er=0,_n=1,Vi=2,Zi=0,Lo=1,_m=2,xm=3,ym=4,uM=5,so=100,cM=101,dM=102,Sm=103,wm=104,fM=200,hM=201,pM=202,mM=203,C_=204,A_=205,gM=206,vM=207,_M=208,xM=209,yM=210,SM=0,wM=1,MM=2,af=3,bM=4,EM=5,TM=6,CM=7,P_=0,AM=1,PM=2,wi=0,LM=1,RM=2,DM=3,IM=4,kM=5,L_=300,Vo=301,Go=302,lf=303,uf=304,Du=306,cf=1e3,Xn=1001,df=1002,Yt=1003,Mm=1004,_c=1005,An=1006,NM=1007,ta=1008,kr=1009,OM=1010,zM=1011,R_=1012,FM=1013,Sr=1014,wr=1015,na=1016,UM=1017,BM=1018,Ro=1020,VM=1021,qn=1023,GM=1024,HM=1025,Cr=1026,Ho=1027,WM=1028,jM=1029,$M=1030,XM=1031,qM=1033,xc=33776,yc=33777,Sc=33778,wc=33779,bm=35840,Em=35841,Tm=35842,Cm=35843,YM=36196,Am=37492,Pm=37496,Lm=37808,Rm=37809,Dm=37810,Im=37811,km=37812,Nm=37813,Om=37814,zm=37815,Fm=37816,Um=37817,Bm=37818,Vm=37819,Gm=37820,Hm=37821,Mc=36492,KM=36283,Wm=36284,jm=36285,$m=36286,Nr=3e3,st=3001,ZM=3200,QM=3201,JM=0,eb=1,ei="srgb",ia="srgb-linear",bc=7680,tb=519,Xm=35044,qm="300 es",ff=1035;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Ym=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function nb(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function Km(t){return(t&t-1)===0&&t!==0}function hf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Oa(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],c=i[2],g=i[5],x=i[8],p=r[0],h=r[3],m=r[6],v=r[1],_=r[4],y=r[7],S=r[2],P=r[5],R=r[8];return o[0]=s*p+a*v+l*S,o[3]=s*h+a*_+l*P,o[6]=s*m+a*y+l*R,o[1]=u*p+d*v+f*S,o[4]=u*h+d*_+f*P,o[7]=u*m+d*y+f*R,o[2]=c*p+g*v+x*S,o[5]=c*h+g*_+x*P,o[8]=c*m+g*y+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*s-a*u,c=a*l-d*o,g=u*o-s*l,x=n*f+i*c+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*u-d*i)*p,e[2]=(a*i-r*s)*p,e[3]=c*p,e[4]=(d*n-r*l)*p,e[5]=(r*o-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(s*n-i*o)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new gn;function D_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _l(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ac={[ei]:{[ia]:Ar},[ia]:{[ei]:_l}},$t={legacyMode:!0,get workingColorSpace(){return ia},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Ac[e]&&Ac[e][n]!==void 0){const i=Ac[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bt={r:0,g:0,b:0},zn={h:0,s:0,l:0},za={h:0,s:0,l:0};function Pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Fa(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$t.workingColorSpace){return this.r=e,this.g=n,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$t.workingColorSpace){if(e=nb(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Pc(s,o,e+1/3),this.g=Pc(s,o,e),this.b=Pc(s,o,e-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,$t.toWorkingColorSpace(this,n),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,$t.toWorkingColorSpace(this,n),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,u=parseFloat(o[2])/100,d=parseFloat(o[3])/100;return i(o[4]),this.setHSL(l,u,d,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,$t.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,$t.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ei){const i=I_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return $t.fromWorkingColorSpace(Fa(this,bt),e),tn(bt.r*255,0,255)<<16^tn(bt.g*255,0,255)<<8^tn(bt.b*255,0,255)<<0}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$t.workingColorSpace){$t.fromWorkingColorSpace(Fa(this,bt),n);const i=bt.r,r=bt.g,o=bt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=$t.workingColorSpace){return $t.fromWorkingColorSpace(Fa(this,bt),n),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=ei){return $t.fromWorkingColorSpace(Fa(this,bt),e),e!==ei?`color(${e} ${bt.r} ${bt.g} ${bt.b})`:`rgb(${bt.r*255|0},${bt.g*255|0},${bt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(za);const i=Tc(zn.h,za.h,n),r=Tc(zn.s,za.s,n),o=Tc(zn.l,za.l,n);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ct.NAMES=I_;let $r;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=ra("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ar(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ar(n[i]/255)*255):n[i]=Ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class N_{constructor(e=null){this.isSource=!0,this.uuid=fa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Lc(r[s].image)):o.push(Lc(r[s]))}else o=Lc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Lc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?k_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ib=0;class an extends Gr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Xn,r=Xn,o=An,s=ta,a=qn,l=kr,u=an.DEFAULT_ANISOTROPY,d=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=fa(),this.name="",this.source=new N_(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=L_;an.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],f=l[8],c=l[1],g=l[5],x=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(d-c)<.01&&Math.abs(f-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(d+c)<.1&&Math.abs(f+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(g+1)/2,S=(m+1)/2,P=(d+c)/4,R=(f+p)/4,w=(x+h)/4;return _>y&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=P/i,o=R/i):y>S?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=P/r,o=w/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=R/o,r=w/o),this.set(i,r,o,n),this}let v=Math.sqrt((h-x)*(h-x)+(f-p)*(f-p)+(c-d)*(c-d));return Math.abs(v)<.001&&(v=1),this.x=(h-x)/v,this.y=(f-p)/v,this.z=(c-d)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Or extends Gr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new N_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rb extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const c=o[s+0],g=o[s+1],x=o[s+2],p=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=c,e[n+1]=g,e[n+2]=x,e[n+3]=p;return}if(f!==p||l!==c||u!==g||d!==x){let h=1-a;const m=l*c+u*g+d*x+f*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),P=Math.atan2(S,m*v);h=Math.sin(h*P)/S,a=Math.sin(a*P)/S}const y=a*v;if(l=l*h+c*y,u=u*h+g*y,d=d*h+x*y,f=f*h+p*y,h===1-a){const S=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=S,u*=S,d*=S,f*=S}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s],c=o[s+1],g=o[s+2],x=o[s+3];return e[n]=a*x+d*f+l*g-u*c,e[n+1]=l*x+d*c+u*f-a*g,e[n+2]=u*x+d*g+a*c-l*f,e[n+3]=d*x-a*f-l*c-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(o/2),c=l(i/2),g=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=c*d*f+u*g*x,this._y=u*g*f-c*d*x,this._z=u*d*x+c*g*f,this._w=u*d*f-c*g*x;break;case"YXZ":this._x=c*d*f+u*g*x,this._y=u*g*f-c*d*x,this._z=u*d*x-c*g*f,this._w=u*d*f+c*g*x;break;case"ZXY":this._x=c*d*f-u*g*x,this._y=u*g*f+c*d*x,this._z=u*d*x+c*g*f,this._w=u*d*f-c*g*x;break;case"ZYX":this._x=c*d*f-u*g*x,this._y=u*g*f+c*d*x,this._z=u*d*x-c*g*f,this._w=u*d*f+c*g*x;break;case"YZX":this._x=c*d*f+u*g*x,this._y=u*g*f+c*d*x,this._z=u*d*x-c*g*f,this._w=u*d*f-c*g*x;break;case"XZY":this._x=c*d*f-u*g*x,this._y=u*g*f-c*d*x,this._z=u*d*x+c*g*f,this._w=u*d*f+c*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],c=i+a+f;if(c>0){const g=.5/Math.sqrt(c+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-u)*g,this._z=(s-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(o-u)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(s-r)/g,this._x=(o+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,c=Math.sin(n*d)/u;return this._w=s*f+this._w*c,this._x=i*f+this._x*c,this._y=r*f+this._y*c,this._z=o*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,d=l*i+a*n-o*r,f=l*r+o*i-s*n,c=-o*n-s*i-a*r;return this.x=u*l+c*-o+d*-a-f*-s,this.y=d*l+c*-s+f*-o-u*-a,this.z=f*l+c*-a+u*-s-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new H,Zm=new zr;class ha{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const d=e[l],f=e[l+1],c=e[l+2];d<n&&(n=d),f<i&&(i=f),c<r&&(r=c),d>o&&(o=d),f>s&&(s=f),c>a&&(a=c)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const d=e.getX(l),f=e.getY(l),c=e.getZ(l);d<n&&(n=d),f<i&&(i=f),c<r&&(r=c),d>o&&(o=d),f>s&&(s=f),c>a&&(a=c)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=lr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)lr.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(lr)}else i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox),Dc.applyMatrix4(e.matrixWorld),this.union(Dc);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ua.subVectors(this.max,ls),Xr.subVectors(e.a,ls),qr.subVectors(e.b,ls),Yr.subVectors(e.c,ls),Pi.subVectors(qr,Xr),Li.subVectors(Yr,qr),ur.subVectors(Xr,Yr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ur.z,ur.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ur.z,0,-ur.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ur.y,ur.x,0];return!Ic(n,Xr,qr,Yr,Ua)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Xr,qr,Yr,Ua))?!1:(Ba.crossVectors(Pi,Li),n=[Ba.x,Ba.y,Ba.z],Ic(n,Xr,qr,Yr,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return lr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],lr=new H,Dc=new ha,Xr=new H,qr=new H,Yr=new H,Pi=new H,Li=new H,ur=new H,ls=new H,Ua=new H,Ba=new H,cr=new H;function Ic(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){cr.fromArray(t,o);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const ob=new ha,us=new H,kc=new H;class Eh{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ob.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const n=us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(kc)),this.expandByPoint(us.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new H,Nc=new H,Va=new H,Ri=new H,Oc=new H,Ga=new H,zc=new H;class sb{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.direction).multiplyScalar(n).add(this.origin),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(Nc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Va),a=Ri.dot(this.direction),l=-Ri.dot(Va),u=Ri.lengthSq(),d=Math.abs(1-s*s);let f,c,g,x;if(d>0)if(f=s*l-a,c=s*a-l,x=o*d,f>=0)if(c>=-x)if(c<=x){const p=1/d;f*=p,c*=p,g=f*(f+s*c+2*a)+c*(s*f+c+2*l)+u}else c=o,f=Math.max(0,-(s*c+a)),g=-f*f+c*(c+2*l)+u;else c=-o,f=Math.max(0,-(s*c+a)),g=-f*f+c*(c+2*l)+u;else c<=-x?(f=Math.max(0,-(-s*o+a)),c=f>0?-o:Math.min(Math.max(-o,-l),o),g=-f*f+c*(c+2*l)+u):c<=x?(f=0,c=Math.min(Math.max(-o,-l),o),g=c*(c+2*l)+u):(f=Math.max(0,-(s*o+a)),c=f>0?o:Math.min(Math.max(-o,-l),o),g=-f*f+c*(c+2*l)+u);else c=s>0?-o:o,f=Math.max(0,-(s*c+a)),g=-f*f+c*(c+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Va).multiplyScalar(c).add(Nc),g}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),d>=0?(o=(e.min.y-c.y)*d,s=(e.max.y-c.y)*d):(o=(e.max.y-c.y)*d,s=(e.min.y-c.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-c.z)*f,l=(e.max.z-c.z)*f):(a=(e.max.z-c.z)*f,l=(e.min.z-c.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,o){Oc.subVectors(n,e),Ga.subVectors(i,e),zc.crossVectors(Oc,Ga);let s=this.direction.dot(zc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Ri,Ga));if(l<0)return null;const u=a*this.direction.dot(Oc.cross(Ri));if(u<0||l+u>s)return null;const d=-a*Ri.dot(zc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,u,d,f,c,g,x,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=u,m[6]=d,m[10]=f,m[14]=c,m[3]=g,m[7]=x,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),o=1/Kr.setFromMatrixColumn(e,1).length(),s=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const c=s*d,g=s*f,x=a*d,p=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=g+x*u,n[5]=c-p*u,n[9]=-a*l,n[2]=p-c*u,n[6]=x+g*u,n[10]=s*l}else if(e.order==="YXZ"){const c=l*d,g=l*f,x=u*d,p=u*f;n[0]=c+p*a,n[4]=x*a-g,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=g*a-x,n[6]=p+c*a,n[10]=s*l}else if(e.order==="ZXY"){const c=l*d,g=l*f,x=u*d,p=u*f;n[0]=c-p*a,n[4]=-s*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=s*d,n[9]=p-c*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const c=s*d,g=s*f,x=a*d,p=a*f;n[0]=l*d,n[4]=x*u-g,n[8]=c*u+p,n[1]=l*f,n[5]=p*u+c,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const c=s*l,g=s*u,x=a*l,p=a*u;n[0]=l*d,n[4]=p-c*f,n[8]=x*f+g,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=g*f+x,n[10]=c-p*f}else if(e.order==="XZY"){const c=s*l,g=s*u,x=a*l,p=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=c*f+p,n[5]=s*d,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*d,n[10]=p*f+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,lb)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Di.crossVectors(i,dn),Di.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Di.crossVectors(i,dn)),Di.normalize(),Ha.crossVectors(dn,Di),r[0]=Di.x,r[4]=Ha.x,r[8]=dn.x,r[1]=Di.y,r[5]=Ha.y,r[9]=dn.y,r[2]=Di.z,r[6]=Ha.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],c=i[9],g=i[13],x=i[2],p=i[6],h=i[10],m=i[14],v=i[3],_=i[7],y=i[11],S=i[15],P=r[0],R=r[4],w=r[8],C=r[12],I=r[1],Z=r[5],ie=r[9],U=r[13],B=r[2],K=r[6],le=r[10],ee=r[14],O=r[3],q=r[7],Y=r[11],de=r[15];return o[0]=s*P+a*I+l*B+u*O,o[4]=s*R+a*Z+l*K+u*q,o[8]=s*w+a*ie+l*le+u*Y,o[12]=s*C+a*U+l*ee+u*de,o[1]=d*P+f*I+c*B+g*O,o[5]=d*R+f*Z+c*K+g*q,o[9]=d*w+f*ie+c*le+g*Y,o[13]=d*C+f*U+c*ee+g*de,o[2]=x*P+p*I+h*B+m*O,o[6]=x*R+p*Z+h*K+m*q,o[10]=x*w+p*ie+h*le+m*Y,o[14]=x*C+p*U+h*ee+m*de,o[3]=v*P+_*I+y*B+S*O,o[7]=v*R+_*Z+y*K+S*q,o[11]=v*w+_*ie+y*le+S*Y,o[15]=v*C+_*U+y*ee+S*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],c=e[10],g=e[14],x=e[3],p=e[7],h=e[11],m=e[15];return x*(+o*l*f-r*u*f-o*a*c+i*u*c+r*a*g-i*l*g)+p*(+n*l*g-n*u*c+o*s*c-r*s*g+r*u*d-o*l*d)+h*(+n*u*f-n*a*g-o*s*f+i*s*g+o*a*d-i*u*d)+m*(-r*a*d-n*l*f+n*a*c+r*s*f-i*s*c+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],c=e[10],g=e[11],x=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*c*u+p*l*g-a*h*g-f*l*m+a*c*m,_=x*c*u-d*h*u-x*l*g+s*h*g+d*l*m-s*c*m,y=d*p*u-x*f*u+x*a*g-s*p*g-d*a*m+s*f*m,S=x*f*l-d*p*l-x*a*c+s*p*c+d*a*h-s*f*h,P=n*v+i*_+r*y+o*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=v*R,e[1]=(p*c*o-f*h*o-p*r*g+i*h*g+f*r*m-i*c*m)*R,e[2]=(a*h*o-p*l*o+p*r*u-i*h*u-a*r*m+i*l*m)*R,e[3]=(f*l*o-a*c*o-f*r*u+i*c*u+a*r*g-i*l*g)*R,e[4]=_*R,e[5]=(d*h*o-x*c*o+x*r*g-n*h*g-d*r*m+n*c*m)*R,e[6]=(x*l*o-s*h*o-x*r*u+n*h*u+s*r*m-n*l*m)*R,e[7]=(s*c*o-d*l*o+d*r*u-n*c*u-s*r*g+n*l*g)*R,e[8]=y*R,e[9]=(x*f*o-d*p*o-x*i*g+n*p*g+d*i*m-n*f*m)*R,e[10]=(s*p*o-x*a*o+x*i*u-n*p*u-s*i*m+n*a*m)*R,e[11]=(d*a*o-s*f*o-d*i*u+n*f*u+s*i*g-n*a*g)*R,e[12]=S*R,e[13]=(d*p*r-x*f*r+x*i*c-n*p*c-d*i*h+n*f*h)*R,e[14]=(x*a*r-s*p*r-x*i*l+n*p*l+s*i*h-n*a*h)*R,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*c+n*a*c)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,f=a+a,c=o*u,g=o*d,x=o*f,p=s*d,h=s*f,m=a*f,v=l*u,_=l*d,y=l*f,S=i.x,P=i.y,R=i.z;return r[0]=(1-(p+m))*S,r[1]=(g+y)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-y)*P,r[5]=(1-(c+m))*P,r[6]=(h+v)*P,r[7]=0,r[8]=(x+_)*R,r[9]=(h-v)*R,r[10]=(1-(c+p))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Kr.set(r[0],r[1],r[2]).length();const s=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/o,d=1/s,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),u=2*o/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),c=-(s+o)/(s-o),g=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),u=1/(i-r),d=1/(s-o),f=(n+e)*l,c=(i+r)*u,g=(s+o)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new H,Fn=new Mt,ab=new H(0,0,0),lb=new H(1,1,1),Di=new H,Ha=new H,dn=new H,Qm=new Mt,Jm=new zr;class Iu{constructor(e=0,n=0,i=0,r=Iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],c=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Iu.DEFAULT_ORDER="XYZ";class z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ub=0;const eg=new H,Zr=new zr,di=new Mt,Wa=new H,cs=new H,cb=new H,db=new zr,tg=new H(1,0,0),ng=new H(0,1,0),ig=new H(0,0,1),fb={type:"added"},rg={type:"removed"};class ht extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new H,n=new Iu,i=new zr,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new gn}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,n){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(cs,Wa,this.up):di.lookAt(Wa,cs,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(di),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(rg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,cb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),c=s(e.skeletons),g=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),c.length>0&&(i.skeletons=c),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new H(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new H,fi=new H,Fc=new H,hi=new H,Qr=new H,Jr=new H,og=new H,Uc=new H,Bc=new H,Vc=new H;class vi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Un.subVectors(r,n),fi.subVectors(i,n),Fc.subVectors(e,n);const s=Un.dot(Un),a=Un.dot(fi),l=Un.dot(Fc),u=fi.dot(fi),d=fi.dot(Fc),f=s*u-a*a;if(f===0)return o.set(-2,-1,-1);const c=1/f,g=(u*l-a*d)*c,x=(s*d-a*l)*c;return o.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,hi),l.set(0,0),l.addScaledVector(o,hi.x),l.addScaledVector(s,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),fi.subVectors(e,n),Un.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Un.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return vi.getUV(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Qr.subVectors(r,i),Jr.subVectors(o,i),Uc.subVectors(e,i);const l=Qr.dot(Uc),u=Jr.dot(Uc);if(l<=0&&u<=0)return n.copy(i);Bc.subVectors(e,r);const d=Qr.dot(Bc),f=Jr.dot(Bc);if(d>=0&&f<=d)return n.copy(r);const c=l*f-d*u;if(c<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Qr,s);Vc.subVectors(e,o);const g=Qr.dot(Vc),x=Jr.dot(Vc);if(x>=0&&g<=x)return n.copy(o);const p=g*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Jr,a);const h=d*x-g*f;if(h<=0&&f-d>=0&&g-x>=0)return og.subVectors(o,r),a=(f-d)/(f-d+(g-x)),n.copy(r).addScaledVector(og,a);const m=1/(h+p+c);return s=p*m,a=c*m,n.copy(i).addScaledVector(Qr,s).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hb=0;class ku extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Lo,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C_,this.blendDst=A_,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=af,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bc,this.stencilZFail=bc,this.stencilZPass=bc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,ja=new Be;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(e),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),o=cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class F_ extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U_ extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pb=0;const En=new Mt,Gc=new ht,eo=new H,fn=new ha,ds=new ha,Lt=new H;class rr extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D_(e)?U_:F_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new gn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new si(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(fn.min,ds.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,ds.max),fn.expandByPoint(Lt)):(fn.expandByPoint(ds.min),fn.expandByPoint(ds.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Lt.fromBufferAttribute(a,u),l&&(eo.fromBufferAttribute(e,u),Lt.add(eo)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let I=0;I<a;I++)u[I]=new H,d[I]=new H;const f=new H,c=new H,g=new H,x=new Be,p=new Be,h=new Be,m=new H,v=new H;function _(I,Z,ie){f.fromArray(r,I*3),c.fromArray(r,Z*3),g.fromArray(r,ie*3),x.fromArray(s,I*2),p.fromArray(s,Z*2),h.fromArray(s,ie*2),c.sub(f),g.sub(f),p.sub(x),h.sub(x);const U=1/(p.x*h.y-h.x*p.y);isFinite(U)&&(m.copy(c).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(U),v.copy(g).multiplyScalar(p.x).addScaledVector(c,-h.x).multiplyScalar(U),u[I].add(m),u[Z].add(m),u[ie].add(m),d[I].add(v),d[Z].add(v),d[ie].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,Z=y.length;I<Z;++I){const ie=y[I],U=ie.start,B=ie.count;for(let K=U,le=U+B;K<le;K+=3)_(i[K+0],i[K+1],i[K+2])}const S=new H,P=new H,R=new H,w=new H;function C(I){R.fromArray(o,I*3),w.copy(R);const Z=u[I];S.copy(Z),S.sub(R.multiplyScalar(R.dot(Z))).normalize(),P.crossVectors(w,Z);const U=P.dot(d[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=U}for(let I=0,Z=y.length;I<Z;++I){const ie=y[I],U=ie.start,B=ie.count;for(let K=U,le=U+B;K<le;K+=3)C(i[K+0]),C(i[K+1]),C(i[K+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,g=i.count;c<g;c++)i.setXYZ(c,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,u=new H,d=new H,f=new H;if(e)for(let c=0,g=e.count;c<g;c+=3){const x=e.getX(c+0),p=e.getX(c+1),h=e.getX(c+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),s.fromBufferAttribute(n,h),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let c=0,g=n.count;c<g;c+=3)r.fromBufferAttribute(n,c+0),o.fromBufferAttribute(n,c+1),s.fromBufferAttribute(n,c+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(c+0,d.x,d.y,d.z),i.setXYZ(c+1,d.x,d.y,d.z),i.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,c=new u.constructor(l.length*d);let g=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*d;for(let m=0;m<d;m++)c[x++]=u[g++]}return new oi(c,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,f=u.length;d<f;d++){const c=u[d],g=e(c,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,c=u.length;f<c;f++){const g=u[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],f=o[u];for(let c=0,g=f.length;c<g;c++)d.push(f[c].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sg=new Mt,to=new sb,Hc=new Eh,fs=new H,hs=new H,ps=new H,Wc=new H,$a=new H,Xa=new Be,qa=new Be,Ya=new Be,jc=new H,Ka=new H;class Ot extends ht{constructor(e=new rr,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){$a.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],f=o[l];d!==0&&(Wc.fromBufferAttribute(f,e),s?$a.addScaledVector(Wc,d):$a.addScaledVector(Wc.sub(n),d))}n.add($a)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(o),e.ray.intersectsSphere(Hc)===!1)||(sg.copy(o).invert(),to.copy(e.ray).applyMatrix4(sg),i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,c=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=r[p.materialIndex],m=Math.max(p.start,c.start),v=Math.min(a.count,Math.min(p.start+p.count,c.start+c.count));for(let _=m,y=v;_<y;_+=3){const S=a.getX(_),P=a.getX(_+1),R=a.getX(_+2);s=Za(this,h,e,to,u,d,S,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,c.start),x=Math.min(a.count,c.start+c.count);for(let p=g,h=x;p<h;p+=3){const m=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);s=Za(this,r,e,to,u,d,m,v,_),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=r[p.materialIndex],m=Math.max(p.start,c.start),v=Math.min(l.count,Math.min(p.start+p.count,c.start+c.count));for(let _=m,y=v;_<y;_+=3){const S=_,P=_+1,R=_+2;s=Za(this,h,e,to,u,d,S,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,c.start),x=Math.min(l.count,c.start+c.count);for(let p=g,h=x;p<h;p+=3){const m=p,v=p+1,_=p+2;s=Za(this,r,e,to,u,d,m,v,_),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function mb(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===er,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ka);return u<n.near||u>n.far?null:{distance:u,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,o,s,a,l){t.getVertexPosition(s,fs),t.getVertexPosition(a,hs),t.getVertexPosition(l,ps);const u=mb(t,e,n,i,fs,hs,ps,jc);if(u){r&&(Xa.fromBufferAttribute(r,s),qa.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),u.uv=vi.getUV(jc,fs,hs,ps,Xa,qa,Ya,new Be)),o&&(Xa.fromBufferAttribute(o,s),qa.fromBufferAttribute(o,a),Ya.fromBufferAttribute(o,l),u.uv2=vi.getUV(jc,fs,hs,ps,Xa,qa,Ya,new Be));const d={a:s,b:a,c:l,normal:new H,materialIndex:0};vi.getNormal(fs,hs,ps,d.normal),u.face=d}return u}class pa extends rr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],f=[];let c=0,g=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new si(u,3)),this.setAttribute("normal",new si(d,3)),this.setAttribute("uv",new si(f,2));function x(p,h,m,v,_,y,S,P,R,w,C){const I=y/R,Z=S/w,ie=y/2,U=S/2,B=P/2,K=R+1,le=w+1;let ee=0,O=0;const q=new H;for(let Y=0;Y<le;Y++){const de=Y*Z-U;for(let D=0;D<K;D++){const F=D*I-ie;q[p]=F*v,q[h]=de*_,q[m]=B,u.push(q.x,q.y,q.z),q[p]=0,q[h]=0,q[m]=P>0?1:-1,d.push(q.x,q.y,q.z),f.push(D/R),f.push(1-Y/w),ee+=1}}for(let Y=0;Y<w;Y++)for(let de=0;de<R;de++){const D=c+de+K*Y,F=c+de+K*(Y+1),j=c+(de+1)+K*(Y+1),Q=c+(de+1)+K*Y;l.push(D,F,Q),l.push(F,j,Q),O+=6}a.addGroup(g,O,C),g+=O,c+=ee}}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Wo(t[n]);for(const r in i)e[r]=i[r]}return e}function gb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B_(t){return t.getRenderTarget()===null&&t.outputEncoding===st?ei:ia}const vb={clone:Wo,merge:Xt};var _b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_b,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class V_ extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends V_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ym*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ym*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const no=-90,io=1;class yb extends ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new pn(no,io,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new pn(no,io,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new pn(no,io,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new pn(no,io,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new pn(no,io,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new pn(no,io,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,c=e.xr.enabled;e.toneMapping=wi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}}class G_ extends an{constructor(e,n,i,r,o,s,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Vo,super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sb extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new G_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pa(5,5,5),o=new Fr({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Zi});o.uniforms.tEquirect.value=n;const s=new Ot(r,o),a=n.minFilter;return n.minFilter===ta&&(n.minFilter=An),new yb(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const $c=new H,wb=new H,Mb=new gn;class pr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$c.subVectors(i,n).cross(wb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta($c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Mb.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Eh,Qa=new H;class Th{constructor(e=new pr,n=new pr,i=new pr,r=new pr,o=new pr,s=new pr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],u=i[5],d=i[6],f=i[7],c=i[8],g=i[9],x=i[10],p=i[11],h=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,f-l,p-c,_-h).normalize(),n[1].setComponents(a+r,f+l,p+c,_+h).normalize(),n[2].setComponents(a+o,f+u,p+g,_+m).normalize(),n[3].setComponents(a-o,f-u,p-g,_-m).normalize(),n[4].setComponents(a-s,f-d,p-x,_-v).normalize(),n[5].setComponents(a+s,f+d,p+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function bb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,c=u.usage,g=t.createBuffer();t.bindBuffer(d,g),t.bufferData(d,f,c),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function o(u,d,f){const c=d.array,g=d.updateRange;t.bindBuffer(f,u),g.count===-1?t.bufferSubData(f,0,c):(n?t.bufferSubData(f,g.offset*c.BYTES_PER_ELEMENT,c,g.offset,g.count):t.bufferSubData(f,g.offset*c.BYTES_PER_ELEMENT,c.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const c=i.get(u);(!c||c.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(o(f.buffer,u,d),f.version=u.version)}return{get:s,remove:a,update:l}}class Ch extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,c=n/l,g=[],x=[],p=[],h=[];for(let m=0;m<d;m++){const v=m*c-s;for(let _=0;_<u;_++){const y=_*f-o;x.push(y,-v,0),p.push(0,0,1),h.push(_/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,y=v+u*(m+1),S=v+1+u*(m+1),P=v+1+u*m;g.push(_,y,P),g.push(y,S,P)}this.setIndex(g),this.setAttribute("position",new si(x,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(h,2))}static fromJSON(e){return new Ch(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb="vec3 transformed = vec3( position );",Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wb=`#define PI 3.141592653589793
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
}`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$b=`vec3 transformedNormal = objectNormal;
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
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jb=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
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
}`,uE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
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
#endif`,pE=`#if defined( USE_ENVMAP )
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
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
#endif`,yE=`struct PhysicalMaterial {
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
}`,SE=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
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
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,UE=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o2=`float getShadowMask() {
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
}`,s2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,l2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u2=`#ifdef USE_SKINNING
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
#endif`,c2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#ifdef USE_TRANSMISSION
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
#endif`,g2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,v2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,x2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,y2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,S2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,w2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b2=`uniform sampler2D t2D;
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P2=`#include <common>
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
}`,L2=`#if DEPTH_PACKING == 3200
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
}`,R2=`#define DISTANCE
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
}`,D2=`#define DISTANCE
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
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,N2=`uniform float scale;
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
}`,O2=`uniform vec3 diffuse;
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
}`,z2=`#include <common>
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
}`,F2=`uniform vec3 diffuse;
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
}`,U2=`#define LAMBERT
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
}`,B2=`#define LAMBERT
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
}`,V2=`#define MATCAP
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
}`,G2=`#define MATCAP
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
}`,H2=`#define NORMAL
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
}`,W2=`#define NORMAL
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
}`,j2=`#define PHONG
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
}`,$2=`#define PHONG
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
}`,X2=`#define STANDARD
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
}`,q2=`#define STANDARD
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
}`,Y2=`#define TOON
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
}`,K2=`#define TOON
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
}`,Z2=`uniform float size;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,J2=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:Cb,alphatest_pars_fragment:Ab,aomap_fragment:Pb,aomap_pars_fragment:Lb,begin_vertex:Rb,beginnormal_vertex:Db,bsdfs:Ib,iridescence_fragment:kb,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Ob,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Ub,color_fragment:Bb,color_pars_fragment:Vb,color_pars_vertex:Gb,color_vertex:Hb,common:Wb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:Xb,displacementmap_vertex:qb,emissivemap_fragment:Yb,emissivemap_pars_fragment:Kb,encodings_fragment:Zb,encodings_pars_fragment:Qb,envmap_fragment:Jb,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:pE,envmap_vertex:iE,fog_vertex:rE,fog_pars_vertex:oE,fog_fragment:sE,fog_pars_fragment:aE,gradientmap_pars_fragment:lE,lightmap_fragment:uE,lightmap_pars_fragment:cE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:_E,lights_physical_fragment:xE,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:wE,lights_fragment_end:ME,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:CE,map_fragment:AE,map_pars_fragment:PE,map_particle_fragment:LE,map_particle_pars_fragment:RE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:IE,morphcolor_vertex:kE,morphnormal_vertex:NE,morphtarget_pars_vertex:OE,morphtarget_vertex:zE,normal_fragment_begin:FE,normal_fragment_maps:UE,normal_pars_fragment:BE,normal_pars_vertex:VE,normal_vertex:GE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:XE,output_fragment:qE,packing:YE,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:e2,roughnessmap_pars_fragment:t2,shadowmap_pars_fragment:n2,shadowmap_pars_vertex:i2,shadowmap_vertex:r2,shadowmask_pars_fragment:o2,skinbase_vertex:s2,skinning_pars_vertex:a2,skinning_vertex:l2,skinnormal_vertex:u2,specularmap_fragment:c2,specularmap_pars_fragment:d2,tonemapping_fragment:f2,tonemapping_pars_fragment:h2,transmission_fragment:p2,transmission_pars_fragment:m2,uv_pars_fragment:g2,uv_pars_vertex:v2,uv_vertex:_2,uv2_pars_fragment:x2,uv2_pars_vertex:y2,uv2_vertex:S2,worldpos_vertex:w2,background_vert:M2,background_frag:b2,backgroundCube_vert:E2,backgroundCube_frag:T2,cube_vert:C2,cube_frag:A2,depth_vert:P2,depth_frag:L2,distanceRGBA_vert:R2,distanceRGBA_frag:D2,equirect_vert:I2,equirect_frag:k2,linedashed_vert:N2,linedashed_frag:O2,meshbasic_vert:z2,meshbasic_frag:F2,meshlambert_vert:U2,meshlambert_frag:B2,meshmatcap_vert:V2,meshmatcap_frag:G2,meshnormal_vert:H2,meshnormal_frag:W2,meshphong_vert:j2,meshphong_frag:$2,meshphysical_vert:X2,meshphysical_frag:q2,meshtoon_vert:Y2,meshtoon_frag:K2,points_vert:Z2,points_frag:Q2,shadow_vert:J2,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},_e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},ti={basic:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Xt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Xt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Xt([_e.points,_e.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Xt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Xt([_e.common,_e.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Xt([_e.sprite,_e.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Xt([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Xt([_e.lights,_e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ti.physical={uniforms:Xt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ja={r:0,b:0,g:0};function iT(t,e,n,i,r,o,s){const a=new ct(0);let l=o===!0?0:1,u,d,f=null,c=0,g=null;function x(h,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const y=t.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Du)?(d===void 0&&(d=new Ot(new pa(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Wo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=_.encoding!==st,(f!==_||c!==_.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,c=_.version,g=t.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ot(new Ch(2,2),new Fr({name:"BackgroundMaterial",uniforms:Wo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||c!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,c=_.version,g=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,m){h.getRGB(Ja,B_(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,m,s)}return{getClearColor:function(){return a},setClearColor:function(h,m=1){a.set(h),l=m,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:x}}function rT(t,e,n,i){const r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=h(null);let u=l,d=!1;function f(B,K,le,ee,O){let q=!1;if(s){const Y=p(ee,le,K);u!==Y&&(u=Y,g(u.object)),q=m(B,ee,le,O),q&&v(B,ee,le,O)}else{const Y=K.wireframe===!0;(u.geometry!==ee.id||u.program!==le.id||u.wireframe!==Y)&&(u.geometry=ee.id,u.program=le.id,u.wireframe=Y,q=!0)}O!==null&&n.update(O,34963),(q||d)&&(d=!1,w(B,K,le,ee),O!==null&&t.bindBuffer(34963,n.get(O).buffer))}function c(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(B){return i.isWebGL2?t.bindVertexArray(B):o.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?t.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function p(B,K,le){const ee=le.wireframe===!0;let O=a[B.id];O===void 0&&(O={},a[B.id]=O);let q=O[K.id];q===void 0&&(q={},O[K.id]=q);let Y=q[ee];return Y===void 0&&(Y=h(c()),q[ee]=Y),Y}function h(B){const K=[],le=[],ee=[];for(let O=0;O<r;O++)K[O]=0,le[O]=0,ee[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:le,attributeDivisors:ee,object:B,attributes:{},index:null}}function m(B,K,le,ee){const O=u.attributes,q=K.attributes;let Y=0;const de=le.getAttributes();for(const D in de)if(de[D].location>=0){const j=O[D];let Q=q[D];if(Q===void 0&&(D==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),D==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;Y++}return u.attributesNum!==Y||u.index!==ee}function v(B,K,le,ee){const O={},q=K.attributes;let Y=0;const de=le.getAttributes();for(const D in de)if(de[D].location>=0){let j=q[D];j===void 0&&(D==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),D==="instanceColor"&&B.instanceColor&&(j=B.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),O[D]=Q,Y++}u.attributes=O,u.attributesNum=Y,u.index=ee}function _(){const B=u.newAttributes;for(let K=0,le=B.length;K<le;K++)B[K]=0}function y(B){S(B,0)}function S(B,K){const le=u.newAttributes,ee=u.enabledAttributes,O=u.attributeDivisors;le[B]=1,ee[B]===0&&(t.enableVertexAttribArray(B),ee[B]=1),O[B]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),O[B]=K)}function P(){const B=u.newAttributes,K=u.enabledAttributes;for(let le=0,ee=K.length;le<ee;le++)K[le]!==B[le]&&(t.disableVertexAttribArray(le),K[le]=0)}function R(B,K,le,ee,O,q){i.isWebGL2===!0&&(le===5124||le===5125)?t.vertexAttribIPointer(B,K,le,O,q):t.vertexAttribPointer(B,K,le,ee,O,q)}function w(B,K,le,ee){if(i.isWebGL2===!1&&(B.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=ee.attributes,q=le.getAttributes(),Y=K.defaultAttributeValues;for(const de in q){const D=q[de];if(D.location>=0){let F=O[de];if(F===void 0&&(de==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),de==="instanceColor"&&B.instanceColor&&(F=B.instanceColor)),F!==void 0){const j=F.normalized,Q=F.itemSize,E=n.get(F);if(E===void 0)continue;const ge=E.buffer,X=E.type,ve=E.bytesPerElement;if(F.isInterleavedBufferAttribute){const ue=F.data,be=ue.stride,me=F.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)S(D.location+xe,ue.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<D.locationSize;xe++)y(D.location+xe);t.bindBuffer(34962,ge);for(let xe=0;xe<D.locationSize;xe++)R(D.location+xe,Q/D.locationSize,X,j,be*ve,(me+Q/D.locationSize*xe)*ve)}else{if(F.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)S(D.location+ue,F.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<D.locationSize;ue++)y(D.location+ue);t.bindBuffer(34962,ge);for(let ue=0;ue<D.locationSize;ue++)R(D.location+ue,Q/D.locationSize,X,j,Q*ve,Q/D.locationSize*ue*ve)}}else if(Y!==void 0){const j=Y[de];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(D.location,j);break;case 3:t.vertexAttrib3fv(D.location,j);break;case 4:t.vertexAttrib4fv(D.location,j);break;default:t.vertexAttrib1fv(D.location,j)}}}}P()}function C(){ie();for(const B in a){const K=a[B];for(const le in K){const ee=K[le];for(const O in ee)x(ee[O].object),delete ee[O];delete K[le]}delete a[B]}}function I(B){if(a[B.id]===void 0)return;const K=a[B.id];for(const le in K){const ee=K[le];for(const O in ee)x(ee[O].object),delete ee[O];delete K[le]}delete a[B.id]}function Z(B){for(const K in a){const le=a[K];if(le[B.id]===void 0)continue;const ee=le[B.id];for(const O in ee)x(ee[O].object),delete ee[O];delete le[B.id]}}function ie(){U(),d=!0,u!==l&&(u=l,g(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:P}}function oT(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,d){t.drawArrays(o,u,d),n.update(d,o,1)}function l(u,d,f){if(f===0)return;let c,g;if(r)c=t,g="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[g](o,u,d,f),n.update(d,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function sT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),c=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=c>0,y=s||e.has("OES_texture_float"),S=_&&y,P=s?t.getParameter(36183):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:c,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:P}}function aT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new pr,a=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const g=f.length!==0||c||i!==0||r;return r=c,i=f.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,c){n=d(f,c,0)},this.setState=function(f,c,g){const x=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=t.get(f);if(!r||x===null||x.length===0||o&&!h)o?d(null):u();else{const v=o?0:i,_=v*4;let y=m.clippingState||null;l.value=y,y=d(x,c,_,g);for(let S=0;S!==_;++S)y[S]=n[S];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,c,g,x){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const m=g+p*4,v=c.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,y=g;_!==p;++_,y+=4)s.copy(f[_]).applyMatrix4(v,a),s.normal.toArray(h,y),h[y+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function lT(t){let e=new WeakMap;function n(s,a){return a===lf?s.mapping=Vo:a===uf&&(s.mapping=Go),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===lf||a===uf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new Sb(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class uT extends V_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const wo=4,ag=[.125,.215,.35,.446,.526,.582],gr=20,Xc=new uT,lg=new ct;let qc=null;const mr=(1+Math.sqrt(5))/2,oo=1/mr,ug=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,mr,oo),new H(0,mr,-oo),new H(oo,0,mr),new H(-oo,0,mr),new H(mr,oo,0),new H(-mr,oo,0)];class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:na,format:qn,encoding:Nr,depthBuffer:!1},r=dg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(o)),this._blurMaterial=dT(o,e,n)}return r}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,c=d.toneMapping;d.getClearColor(lg),d.toneMapping=wi,d.autoClear=!1;const g=new Vn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new Ot(new pa,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(lg),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;el(r,v*_,m>2?_:0,_,_),d.setRenderTarget(r),p&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=c,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ot(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=ug[(r-1)%ug.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ot(this._lodPlanes[r],u),c=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*gr-1),p=o/x,h=isFinite(o)?1+Math.floor(d*p):gr;h>gr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${gr}`);const m=[];let v=0;for(let R=0;R<gr;++R){const w=R/p,C=Math.exp(-w*w/2);m.push(C),R===0?v+=C:R<h&&(v+=2*C)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;c.envMap.value=e.texture,c.samples.value=h,c.weights.value=m,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:_}=this;c.dTheta.value=x,c.mipInt.value=_-i;const y=this._sizeLods[r],S=3*y*(r>_-wo?r-_+wo:0),P=4*(this._cubeSize-y);el(n,S,P,3*y,2*y),l.setRenderTarget(n),l.render(f,Xc)}}function cT(t){const e=[],n=[],i=[];let r=t;const o=t-wo+1+ag.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-wo?l=ag[s-t+wo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,c=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,p=3,h=2,m=1,v=new Float32Array(p*x*g),_=new Float32Array(h*x*g),y=new Float32Array(m*x*g);for(let P=0;P<g;P++){const R=P%3*2/3-1,w=P>2?0:-1,C=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];v.set(C,p*x*P),_.set(c,h*x*P);const I=[P,P,P,P,P,P];y.set(I,m*x*P)}const S=new rr;S.setAttribute("position",new oi(v,p)),S.setAttribute("uv",new oi(_,h)),S.setAttribute("faceIndex",new oi(y,m)),e.push(S),r>wo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dg(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dT(t,e,n){const i=new Float32Array(gr),r=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fg(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function hg(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function fT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===lf||l===uf,d=l===Vo||l===Go;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new cg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new cg(t));const c=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",o),c.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function hT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},o=new WeakMap;function s(f){const c=f.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",s),delete r[c.id];const g=o.get(c);g&&(e.remove(g),o.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(f,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,n.memory.geometries++),c}function l(f){const c=f.attributes;for(const x in c)e.update(c[x],34962);const g=f.morphAttributes;for(const x in g){const p=g[x];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const c=[],g=f.index,x=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,y=v.length;_<y;_+=3){const S=v[_+0],P=v[_+1],R=v[_+2];c.push(S,P,P,R,R,S)}}else{const v=x.array;p=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const S=_+0,P=_+1,R=_+2;c.push(S,P,P,R,R,S)}}const h=new(D_(c)?U_:F_)(c,1);h.version=p;const m=o.get(f);m&&e.remove(m),o.set(f,h)}function d(f){const c=o.get(f);if(c){const g=f.index;g!==null&&c.version<g.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function mT(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}let a,l;function u(c){a=c.type,l=c.bytesPerElement}function d(c,g){t.drawElements(o,g,a,c*l),n.update(g,o,1)}function f(c,g,x){if(x===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](o,g,a,c*l,x),n.update(g,o,x)}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e){return t[0]-e[0]}function _T(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,f,c){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let m=o.get(d);if(m===void 0||m.count!==h){let le=function(){B.dispose(),o.delete(d),d.removeEventListener("dispose",le)};var x=le;m!==void 0&&m.texture.dispose();const y=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let I=0;y===!0&&(I=1),S===!0&&(I=2),P===!0&&(I=3);let Z=d.attributes.position.count*I,ie=1;Z>e.maxTextureSize&&(ie=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const U=new Float32Array(Z*ie*4*h),B=new O_(U,Z,ie,h);B.type=wr,B.needsUpdate=!0;const K=I*4;for(let ee=0;ee<h;ee++){const O=R[ee],q=w[ee],Y=C[ee],de=Z*ie*4*ee;for(let D=0;D<O.count;D++){const F=D*K;y===!0&&(s.fromBufferAttribute(O,D),U[de+F+0]=s.x,U[de+F+1]=s.y,U[de+F+2]=s.z,U[de+F+3]=0),S===!0&&(s.fromBufferAttribute(q,D),U[de+F+4]=s.x,U[de+F+5]=s.y,U[de+F+6]=s.z,U[de+F+7]=0),P===!0&&(s.fromBufferAttribute(Y,D),U[de+F+8]=s.x,U[de+F+9]=s.y,U[de+F+10]=s.z,U[de+F+11]=Y.itemSize===4?s.w:1)}}m={count:h,texture:B,size:new Be(Z,ie)},o.set(d,m),d.addEventListener("dispose",le)}let v=0;for(let y=0;y<g.length;y++)v+=g[y];const _=d.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",g),c.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[d.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];i[d.id]=h}for(let S=0;S<p;S++){const P=h[S];P[0]=S,P[1]=g[S]}h.sort(_T);for(let S=0;S<8;S++)S<p&&h[S][1]?(a[S][0]=h[S][0],a[S][1]=h[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(vT);const m=d.morphAttributes.position,v=d.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const P=a[S],R=P[0],w=P[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&d.getAttribute("morphTarget"+S)!==m[R]&&d.setAttribute("morphTarget"+S,m[R]),v&&d.getAttribute("morphNormal"+S)!==v[R]&&d.setAttribute("morphNormal"+S,v[R]),r[S]=w,_+=w):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),v&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const y=d.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const W_=new an,j_=new O_,$_=new rb,X_=new G_,pg=[],mg=[],gg=new Float32Array(16),vg=new Float32Array(9),_g=new Float32Array(4);function Yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=pg[r];if(o===void 0&&(o=new Float32Array(r),pg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=mg[e];n===void 0&&(n=new Int32Array(e),mg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;_g.set(i),t.uniformMatrix2fv(this.addr,!1,_g),At(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;vg.set(i),t.uniformMatrix3fv(this.addr,!1,vg),At(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;gg.set(i),t.uniformMatrix4fv(this.addr,!1,gg),At(n,i)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||W_,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$_,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||X_,r)}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||j_,r)}function BT(t){switch(t){case 5126:return ST;case 35664:return wT;case 35665:return MT;case 35666:return bT;case 35674:return ET;case 35675:return TT;case 35676:return CT;case 5124:case 35670:return AT;case 35667:case 35671:return PT;case 35668:case 35672:return LT;case 35669:case 35673:return RT;case 5125:return DT;case 36294:return IT;case 36295:return kT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return UT}}function VT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=Yo(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=Yo(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=Yo(e,this.size,4);t.uniform4fv(this.addr,n)}function jT(t,e){const n=Yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $T(t,e){const n=Yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XT(t,e){const n=Yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function KT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function e3(t,e){t.uniform3uiv(this.addr,e)}function t3(t,e){t.uniform4uiv(this.addr,e)}function n3(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||W_,o[s])}function i3(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||$_,o[s])}function r3(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||X_,o[s])}function o3(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||j_,o[s])}function s3(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return HT;case 35666:return WT;case 35674:return jT;case 35675:return $T;case 35676:return XT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return e3;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return n3;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return r3;case 36289:case 36303:case 36311:case 36292:return o3}}class a3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=BT(n.type)}}class l3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=s3(n.type)}}class u3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function xg(t,e){t.seq.push(e),t.map[e.id]=e}function c3(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const o=Yc.exec(i),s=Yc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){xg(n,u===void 0?new a3(a,t,e):new l3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new u3(a),xg(n,f)),n=f}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);c3(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function yg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let d3=0;function f3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function h3(t){switch(t){case Nr:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Sg(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+f3(t.getShaderSource(e),s)}else return r}function p3(t,e){const n=h3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function m3(t,e){let n;switch(e){case LM:n="Linear";break;case RM:n="Reinhard";break;case DM:n="OptimizedCineon";break;case IM:n="ACESFilmic";break;case kM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function g3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function v3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _3(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ss(t){return t!==""}function wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x3=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(t){return t.replace(x3,y3)}function y3(t,e){const n=Ue[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return pf(n)}const S3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(t){return t.replace(S3,w3)}function w3(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Eg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function b3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Go:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function T3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case AM:e="ENVMAP_BLENDING_MIX";break;case PM:e="ENVMAP_BLENDING_ADD";break}return e}function C3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function A3(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=M3(n),u=b3(n),d=E3(n),f=T3(n),c=C3(n),g=n.isWebGL2?"":g3(n),x=v3(o),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[x].filter(Ss).join(`
`),h.length>0&&(h+=`
`),m=[g,x].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(h=[Eg(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[g,Eg(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==wi?m3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,p3("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),s=pf(s),s=wg(s,n),s=Mg(s,n),a=pf(a),a=wg(a,n),a=Mg(a,n),s=bg(s),a=bg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+h+s,y=v+m+a,S=yg(r,35633,_),P=yg(r,35632,y);if(r.attachShader(p,S),r.attachShader(p,P),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(S).trim(),Z=r.getShaderInfoLog(P).trim();let ie=!0,U=!0;if(r.getProgramParameter(p,35714)===!1){ie=!1;const B=Sg(r,S,"vertex"),K=Sg(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+B+`
`+K)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||Z==="")&&(U=!1);U&&(this.diagnostics={runnable:ie,programLog:C,vertexShader:{log:I,prefix:h},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(S),r.deleteShader(P);let R;this.getUniforms=function(){return R===void 0&&(R=new xl(r,p)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=_3(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=d3++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let P3=0;class L3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new R3(e),n.set(e,i)),i}}class R3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function D3(t,e,n,i,r,o,s){const a=new z_,l=new L3,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,c=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,C,I,Z,ie){const U=Z.fog,B=ie.geometry,K=w.isMeshStandardMaterial?Z.environment:null,le=(w.isMeshStandardMaterial?n:e).get(w.envMap||K),ee=le&&le.mapping===Du?le.image.height:null,O=x[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=q!==void 0?q.length:0;let de=0;B.morphAttributes.position!==void 0&&(de=1),B.morphAttributes.normal!==void 0&&(de=2),B.morphAttributes.color!==void 0&&(de=3);let D,F,j,Q;if(O){const be=ti[O];D=be.vertexShader,F=be.fragmentShader}else D=w.vertexShader,F=w.fragmentShader,l.update(w),j=l.getVertexShaderID(w),Q=l.getFragmentShaderID(w);const E=t.getRenderTarget(),ge=w.alphaTest>0,X=w.clearcoat>0,ve=w.iridescence>0;return{isWebGL2:d,shaderID:O,shaderName:w.type,vertexShader:D,fragmentShader:F,defines:w.defines,customVertexShaderID:j,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:c,outputEncoding:E===null?t.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Nr,map:!!w.map,matcap:!!w.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:ee,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===eb,tangentSpaceNormalMap:w.normalMapType===JM,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===st,clearcoat:X,clearcoatMap:X&&!!w.clearcoatMap,clearcoatRoughnessMap:X&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!w.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!w.iridescenceMap,iridescenceThicknessMap:ve&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Lo,alphaMap:!!w.alphaMap,alphaTest:ge,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!B.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:de,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:w.toneMapped?t.toneMapping:wi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vi,flipSided:w.side===_n,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)C.push(I),C.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(m(C,w),v(C,w),C.push(t.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function m(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function v(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),w.push(a.mask)}function _(w){const C=x[w.type];let I;if(C){const Z=ti[C];I=vb.clone(Z.uniforms)}else I=w.uniforms;return I}function y(w,C){let I;for(let Z=0,ie=u.length;Z<ie;Z++){const U=u[Z];if(U.cacheKey===C){I=U,++I.usedTimes;break}}return I===void 0&&(I=new A3(t,C,w,o),u.push(I)),I}function S(w){if(--w.usedTimes===0){const C=u.indexOf(w);u[C]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:y,releaseProgram:S,releaseShaderCache:P,programs:u,dispose:R}}function I3(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function k3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,c,g,x,p,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:c,material:g,groupOrder:x,renderOrder:f.renderOrder,z:p,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=c,m.material=g,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,c,g,x,p,h){const m=s(f,c,g,x,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(f,c,g,x,p,h){const m=s(f,c,g,x,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,c){n.length>1&&n.sort(f||k3),i.length>1&&i.sort(c||Tg),r.length>1&&r.sort(c||Tg)}function d(){for(let f=e,c=t.length;f<c;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function N3(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Cg,t.set(i,[s])):r>=o.length?(s=new Cg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function O3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new ct};break;case"SpotLight":n={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function z3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let F3=0;function U3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function B3(t,e){const n=new O3,i=z3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new H);const o=new H,s=new Mt,a=new Mt;function l(d,f){let c=0,g=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let p=0,h=0,m=0,v=0,_=0,y=0,S=0,P=0,R=0,w=0;d.sort(U3);const C=f!==!0?Math.PI:1;for(let Z=0,ie=d.length;Z<ie;Z++){const U=d[Z],B=U.color,K=U.intensity,le=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)c+=B.r*K*C,g+=B.g*K*C,x+=B.b*K*C;else if(U.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(U.sh.coefficients[O],K);else if(U.isDirectionalLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const q=U.shadow,Y=i.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[p]=Y,r.directionalShadowMap[p]=ee,r.directionalShadowMatrix[p]=U.shadow.matrix,y++}r.directional[p]=O,p++}else if(U.isSpotLight){const O=n.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(B).multiplyScalar(K*C),O.distance=le,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,r.spot[m]=O;const q=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,q.updateMatrices(U),U.castShadow&&w++),r.spotLightMatrix[m]=q.matrix,U.castShadow){const Y=i.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[m]=Y,r.spotShadowMap[m]=ee,P++}m++}else if(U.isRectAreaLight){const O=n.get(U);O.color.copy(B).multiplyScalar(K),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=O,v++}else if(U.isPointLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*C),O.distance=U.distance,O.decay=U.decay,U.castShadow){const q=U.shadow,Y=i.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[h]=Y,r.pointShadowMap[h]=ee,r.pointShadowMatrix[h]=U.shadow.matrix,S++}r.point[h]=O,h++}else if(U.isHemisphereLight){const O=n.get(U);O.skyColor.copy(U.color).multiplyScalar(K*C),O.groundColor.copy(U.groundColor).multiplyScalar(K*C),r.hemi[_]=O,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=g,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==p||I.pointLength!==h||I.spotLength!==m||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==P||I.numSpotMaps!==R)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+R-w,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=w,I.directionalLength=p,I.pointLength=h,I.spotLength=m,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=P,I.numSpotMaps=R,r.version=F3++)}function u(d,f){let c=0,g=0,x=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const y=d[v];if(y.isDirectionalLight){const S=r.directional[c];S.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(m),c++}else if(y.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(m),x++}else if(y.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),g++}else if(y.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Ag(t,e){const n=new B3(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function V3(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Ag(t,e),n.set(o,[l])):s>=a.length?(l=new Ag(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class G3 extends ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H3 extends ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
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
}`;function $3(t,e,n){let i=new Th;const r=new Be,o=new Be,s=new dt,a=new G3({depthPacking:QM}),l=new H3,u={},d=n.maxTextureSize,f={[er]:_n,[_n]:er,[Vi]:Vi},c=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:W3,fragmentShader:j3}),g=c.clone();g.defines.HORIZONTAL_PASS=1;const x=new rr;x.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ot(x,c),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_,this.render=function(y,S,P){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;const R=t.getRenderTarget(),w=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Zi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Z=0,ie=y.length;Z<ie;Z++){const U=y[Z],B=U.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const K=B.getFrameExtents();if(r.multiply(K),o.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/K.x),r.x=o.x*K.x,B.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/K.y),r.y=o.y*K.y,B.mapSize.y=o.y)),B.map===null){const ee=this.type!==ys?{minFilter:Yt,magFilter:Yt}:{};B.map=new Or(r.x,r.y,ee),B.map.texture.name=U.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const le=B.getViewportCount();for(let ee=0;ee<le;ee++){const O=B.getViewport(ee);s.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),I.viewport(s),B.updateMatrices(U,ee),i=B.getFrustum(),_(S,P,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===ys&&m(B,P),B.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(R,w,C)};function m(y,S){const P=e.update(p);c.defines.VSM_SAMPLES!==y.blurSamples&&(c.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,c.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Or(r.x,r.y)),c.uniforms.shadow_pass.value=y.map.texture,c.uniforms.resolution.value=y.mapSize,c.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(S,null,P,c,p,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(S,null,P,g,p,null)}function v(y,S,P,R,w,C){let I=null;const Z=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0)I=Z;else if(I=P.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const ie=I.uuid,U=S.uuid;let B=u[ie];B===void 0&&(B={},u[ie]=B);let K=B[U];K===void 0&&(K=I.clone(),B[U]=K),I=K}return I.visible=S.visible,I.wireframe=S.wireframe,C===ys?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:f[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=R,I.farDistance=w),I}function _(y,S,P,R,w){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===ys)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),ie=y.material;if(Array.isArray(ie)){const U=Z.groups;for(let B=0,K=U.length;B<K;B++){const le=U[B],ee=ie[le.materialIndex];if(ee&&ee.visible){const O=v(y,ee,R,P.near,P.far,w);t.renderBufferDirect(P,null,Z,O,y,le)}}}else if(ie.visible){const U=v(y,ie,R,P.near,P.far,w);t.renderBufferDirect(P,null,Z,U,y,null)}}const I=y.children;for(let Z=0,ie=I.length;Z<ie;Z++)_(I[Z],S,P,R,w)}}function X3(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const J=new dt;let fe=null;const ye=new dt(0,0,0,0);return{setMask:function(Ee){fe!==Ee&&!z&&(t.colorMask(Ee,Ee,Ee,Ee),fe=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,Re,Je,lt,Mn){Mn===!0&&(Ee*=lt,Re*=lt,Je*=lt),J.set(Ee,Re,Je,lt),ye.equals(J)===!1&&(t.clearColor(Ee,Re,Je,lt),ye.copy(J))},reset:function(){z=!1,fe=null,ye.set(-1,0,0,0)}}}function o(){let z=!1,J=null,fe=null,ye=null;return{setTest:function(Ee){Ee?ge(2929):X(2929)},setMask:function(Ee){J!==Ee&&!z&&(t.depthMask(Ee),J=Ee)},setFunc:function(Ee){if(fe!==Ee){switch(Ee){case SM:t.depthFunc(512);break;case wM:t.depthFunc(519);break;case MM:t.depthFunc(513);break;case af:t.depthFunc(515);break;case bM:t.depthFunc(514);break;case EM:t.depthFunc(518);break;case TM:t.depthFunc(516);break;case CM:t.depthFunc(517);break;default:t.depthFunc(515)}fe=Ee}},setLocked:function(Ee){z=Ee},setClear:function(Ee){ye!==Ee&&(t.clearDepth(Ee),ye=Ee)},reset:function(){z=!1,J=null,fe=null,ye=null}}}function s(){let z=!1,J=null,fe=null,ye=null,Ee=null,Re=null,Je=null,lt=null,Mn=null;return{setTest:function(it){z||(it?ge(2960):X(2960))},setMask:function(it){J!==it&&!z&&(t.stencilMask(it),J=it)},setFunc:function(it,Nn,Jt){(fe!==it||ye!==Nn||Ee!==Jt)&&(t.stencilFunc(it,Nn,Jt),fe=it,ye=Nn,Ee=Jt)},setOp:function(it,Nn,Jt){(Re!==it||Je!==Nn||lt!==Jt)&&(t.stencilOp(it,Nn,Jt),Re=it,Je=Nn,lt=Jt)},setLocked:function(it){z=it},setClear:function(it){Mn!==it&&(t.clearStencil(it),Mn=it)},reset:function(){z=!1,J=null,fe=null,ye=null,Ee=null,Re=null,Je=null,lt=null,Mn=null}}}const a=new r,l=new o,u=new s,d=new WeakMap,f=new WeakMap;let c={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,S=null,P=null,R=null,w=null,C=!1,I=null,Z=null,ie=null,U=null,B=null;const K=t.getParameter(35661);let le=!1,ee=0;const O=t.getParameter(7938);O.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(O)[1]),le=ee>=1):O.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),le=ee>=2);let q=null,Y={};const de=t.getParameter(3088),D=t.getParameter(2978),F=new dt().fromArray(de),j=new dt().fromArray(D);function Q(z,J,fe){const ye=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(z,Ee),t.texParameteri(z,10241,9728),t.texParameteri(z,10240,9728);for(let Re=0;Re<fe;Re++)t.texImage2D(J+Re,0,6408,1,1,0,6408,5121,ye);return Ee}const E={};E[3553]=Q(3553,3553,1),E[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ge(2929),l.setFunc(af),Ie(!1),Ae(vm),ge(2884),Ne(Zi);function ge(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function X(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function ve(z,J){return g[z]!==J?(t.bindFramebuffer(z,J),g[z]=J,i&&(z===36009&&(g[36160]=J),z===36160&&(g[36009]=J)),!0):!1}function ue(z,J){let fe=p,ye=!1;if(z)if(fe=x.get(J),fe===void 0&&(fe=[],x.set(J,fe)),z.isWebGLMultipleRenderTargets){const Ee=z.texture;if(fe.length!==Ee.length||fe[0]!==36064){for(let Re=0,Je=Ee.length;Re<Je;Re++)fe[Re]=36064+Re;fe.length=Ee.length,ye=!0}}else fe[0]!==36064&&(fe[0]=36064,ye=!0);else fe[0]!==1029&&(fe[0]=1029,ye=!0);ye&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function be(z){return h!==z?(t.useProgram(z),h=z,!0):!1}const me={[so]:32774,[cM]:32778,[dM]:32779};if(i)me[Sm]=32775,me[wm]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(me[Sm]=z.MIN_EXT,me[wm]=z.MAX_EXT)}const xe={[fM]:0,[hM]:1,[pM]:768,[C_]:770,[yM]:776,[_M]:774,[gM]:772,[mM]:769,[A_]:771,[xM]:775,[vM]:773};function Ne(z,J,fe,ye,Ee,Re,Je,lt){if(z===Zi){m===!0&&(X(3042),m=!1);return}if(m===!1&&(ge(3042),m=!0),z!==uM){if(z!==v||lt!==C){if((_!==so||P!==so)&&(t.blendEquation(32774),_=so,P=so),lt)switch(z){case Lo:t.blendFuncSeparate(1,771,1,771);break;case _m:t.blendFunc(1,1);break;case xm:t.blendFuncSeparate(0,769,0,1);break;case ym:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Lo:t.blendFuncSeparate(770,771,1,771);break;case _m:t.blendFunc(770,1);break;case xm:t.blendFuncSeparate(0,769,0,1);break;case ym:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,S=null,R=null,w=null,v=z,C=lt}return}Ee=Ee||J,Re=Re||fe,Je=Je||ye,(J!==_||Ee!==P)&&(t.blendEquationSeparate(me[J],me[Ee]),_=J,P=Ee),(fe!==y||ye!==S||Re!==R||Je!==w)&&(t.blendFuncSeparate(xe[fe],xe[ye],xe[Re],xe[Je]),y=fe,S=ye,R=Re,w=Je),v=z,C=!1}function Ce(z,J){z.side===Vi?X(2884):ge(2884);let fe=z.side===_n;J&&(fe=!fe),Ie(fe),z.blending===Lo&&z.transparent===!1?Ne(Zi):Ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const ye=z.stencilWrite;u.setTest(ye),ye&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ke(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ge(32926):X(32926)}function Ie(z){I!==z&&(z?t.frontFace(2304):t.frontFace(2305),I=z)}function Ae(z){z!==sM?(ge(2884),z!==Z&&(z===vm?t.cullFace(1029):z===aM?t.cullFace(1028):t.cullFace(1032))):X(2884),Z=z}function Le(z){z!==ie&&(le&&t.lineWidth(z),ie=z)}function ke(z,J,fe){z?(ge(32823),(U!==J||B!==fe)&&(t.polygonOffset(J,fe),U=J,B=fe)):X(32823)}function qe(z){z?ge(3089):X(3089)}function ft(z){z===void 0&&(z=33984+K-1),q!==z&&(t.activeTexture(z),q=z)}function A(z,J,fe){fe===void 0&&(q===null?fe=33984+K-1:fe=q);let ye=Y[fe];ye===void 0&&(ye={type:void 0,texture:void 0},Y[fe]=ye),(ye.type!==z||ye.texture!==J)&&(q!==fe&&(t.activeTexture(fe),q=fe),t.bindTexture(z,J||E[z]),ye.type=z,ye.texture=J)}function M(){const z=Y[q];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function V(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function b(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(z){F.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),F.copy(z))}function he(z){j.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Te(z,J){let fe=f.get(J);fe===void 0&&(fe=new WeakMap,f.set(J,fe));let ye=fe.get(z);ye===void 0&&(ye=t.getUniformBlockIndex(J,z.name),fe.set(z,ye))}function De(z,J){const ye=f.get(J).get(z);d.get(J)!==ye&&(t.uniformBlockBinding(J,ye,z.__bindingPointIndex),d.set(J,ye))}function Fe(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},q=null,Y={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,S=null,P=null,R=null,w=null,C=!1,I=null,Z=null,ie=null,U=null,B=null,F.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ge,disable:X,bindFramebuffer:ve,drawBuffers:ue,useProgram:be,setBlending:Ne,setMaterial:Ce,setFlipSided:Ie,setCullFace:Ae,setLineWidth:Le,setPolygonOffset:ke,setScissorTest:qe,activeTexture:ft,bindTexture:A,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:L,texImage2D:ce,texImage3D:ne,updateUBOMapping:Te,uniformBlockBinding:De,texStorage2D:N,texStorage3D:se,texSubImage2D:k,texSubImage3D:G,compressedTexSubImage2D:oe,compressedTexSubImage3D:b,scissor:Se,viewport:he,reset:Fe}}function q3(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return m?new OffscreenCanvas(A,M):ra("canvas")}function _(A,M,V,L){let k=1;if((A.width>L||A.height>L)&&(k=L/Math.max(A.width,A.height)),k<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const G=M?hf:Math.floor,oe=G(k*A.width),b=G(k*A.height);p===void 0&&(p=v(oe,b));const N=V?v(oe,b):p;return N.width=oe,N.height=b,N.getContext("2d").drawImage(A,0,0,oe,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+oe+"x"+b+")."),N}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Km(A.width)&&Km(A.height)}function S(A){return a?!1:A.wrapS!==Xn||A.wrapT!==Xn||A.minFilter!==Yt&&A.minFilter!==An}function P(A,M){return A.generateMipmaps&&M&&A.minFilter!==Yt&&A.minFilter!==An}function R(A){t.generateMipmap(A)}function w(A,M,V,L,k=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=M;return M===6403&&(V===5126&&(G=33326),V===5131&&(G=33325),V===5121&&(G=33321)),M===33319&&(V===5126&&(G=33328),V===5131&&(G=33327),V===5121&&(G=33323)),M===6408&&(V===5126&&(G=34836),V===5131&&(G=34842),V===5121&&(G=L===st&&k===!1?35907:32856),V===32819&&(G=32854),V===32820&&(G=32855)),(G===33325||G===33326||G===33327||G===33328||G===34842||G===34836)&&e.get("EXT_color_buffer_float"),G}function C(A,M,V){return P(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){return A===Yt||A===Mm||A===_c?9728:9729}function Z(A){const M=A.target;M.removeEventListener("dispose",Z),U(M),M.isVideoTexture&&x.delete(M)}function ie(A){const M=A.target;M.removeEventListener("dispose",ie),K(M)}function U(A){const M=i.get(A);if(M.__webglInit===void 0)return;const V=A.source,L=h.get(V);if(L){const k=L[M.__cacheKey];k.usedTimes--,k.usedTimes===0&&B(A),Object.keys(L).length===0&&h.delete(V)}i.remove(A)}function B(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const V=A.source,L=h.get(V);delete L[M.__cacheKey],s.memory.textures--}function K(A){const M=A.texture,V=i.get(A),L=i.get(M);if(L.__webglTexture!==void 0&&(t.deleteTexture(L.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)t.deleteFramebuffer(V.__webglFramebuffer[k]),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[k]);else{if(t.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let k=0;k<V.__webglColorRenderbuffer.length;k++)V.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[k]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let k=0,G=M.length;k<G;k++){const oe=i.get(M[k]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(M[k])}i.remove(M),i.remove(A)}let le=0;function ee(){le=0}function O(){const A=le;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),le+=1,A}function q(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function Y(A,M){const V=i.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const L=A.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,A,M);return}}n.bindTexture(3553,V.__webglTexture,33984+M)}function de(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){X(V,A,M);return}n.bindTexture(35866,V.__webglTexture,33984+M)}function D(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){X(V,A,M);return}n.bindTexture(32879,V.__webglTexture,33984+M)}function F(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){ve(V,A,M);return}n.bindTexture(34067,V.__webglTexture,33984+M)}const j={[cf]:10497,[Xn]:33071,[df]:33648},Q={[Yt]:9728,[Mm]:9984,[_c]:9986,[An]:9729,[NM]:9985,[ta]:9987};function E(A,M,V){if(V?(t.texParameteri(A,10242,j[M.wrapS]),t.texParameteri(A,10243,j[M.wrapT]),(A===32879||A===35866)&&t.texParameteri(A,32882,j[M.wrapR]),t.texParameteri(A,10240,Q[M.magFilter]),t.texParameteri(A,10241,Q[M.minFilter])):(t.texParameteri(A,10242,33071),t.texParameteri(A,10243,33071),(A===32879||A===35866)&&t.texParameteri(A,32882,33071),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,10240,I(M.magFilter)),t.texParameteri(A,10241,I(M.minFilter)),M.minFilter!==Yt&&M.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Yt||M.minFilter!==_c&&M.minFilter!==ta||M.type===wr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===na&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ge(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Z));const L=M.source;let k=h.get(L);k===void 0&&(k={},h.set(L,k));const G=q(M);if(G!==A.__cacheKey){k[G]===void 0&&(k[G]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),k[G].usedTimes++;const oe=k[A.__cacheKey];oe!==void 0&&(k[A.__cacheKey].usedTimes--,oe.usedTimes===0&&B(M)),A.__cacheKey=G,A.__webglTexture=k[G].texture}return V}function X(A,M,V){let L=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(L=35866),M.isData3DTexture&&(L=32879);const k=ge(A,M),G=M.source;n.bindTexture(L,A.__webglTexture,33984+V);const oe=i.get(G);if(G.version!==oe.__version||k===!0){n.activeTexture(33984+V),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const b=S(M)&&y(M.image)===!1;let N=_(M.image,b,!1,d);N=ft(M,N);const se=y(N)||a,ce=o.convert(M.format,M.encoding);let ne=o.convert(M.type),Se=w(M.internalFormat,ce,ne,M.encoding,M.isVideoTexture);E(L,M,se);let he;const Te=M.mipmaps,De=a&&M.isVideoTexture!==!0,Fe=oe.__version===void 0||k===!0,z=C(M,N,se);if(M.isDepthTexture)Se=6402,a?M.type===wr?Se=36012:M.type===Sr?Se=33190:M.type===Ro?Se=35056:Se=33189:M.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Cr&&Se===6402&&M.type!==R_&&M.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Sr,ne=o.convert(M.type)),M.format===Ho&&Se===6402&&(Se=34041,M.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ro,ne=o.convert(M.type))),Fe&&(De?n.texStorage2D(3553,1,Se,N.width,N.height):n.texImage2D(3553,0,Se,N.width,N.height,0,ce,ne,null));else if(M.isDataTexture)if(Te.length>0&&se){De&&Fe&&n.texStorage2D(3553,z,Se,Te[0].width,Te[0].height);for(let J=0,fe=Te.length;J<fe;J++)he=Te[J],De?n.texSubImage2D(3553,J,0,0,he.width,he.height,ce,ne,he.data):n.texImage2D(3553,J,Se,he.width,he.height,0,ce,ne,he.data);M.generateMipmaps=!1}else De?(Fe&&n.texStorage2D(3553,z,Se,N.width,N.height),n.texSubImage2D(3553,0,0,0,N.width,N.height,ce,ne,N.data)):n.texImage2D(3553,0,Se,N.width,N.height,0,ce,ne,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&Fe&&n.texStorage3D(35866,z,Se,Te[0].width,Te[0].height,N.depth);for(let J=0,fe=Te.length;J<fe;J++)he=Te[J],M.format!==qn?ce!==null?De?n.compressedTexSubImage3D(35866,J,0,0,0,he.width,he.height,N.depth,ce,he.data,0,0):n.compressedTexImage3D(35866,J,Se,he.width,he.height,N.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage3D(35866,J,0,0,0,he.width,he.height,N.depth,ce,ne,he.data):n.texImage3D(35866,J,Se,he.width,he.height,N.depth,0,ce,ne,he.data)}else{De&&Fe&&n.texStorage2D(3553,z,Se,Te[0].width,Te[0].height);for(let J=0,fe=Te.length;J<fe;J++)he=Te[J],M.format!==qn?ce!==null?De?n.compressedTexSubImage2D(3553,J,0,0,he.width,he.height,ce,he.data):n.compressedTexImage2D(3553,J,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage2D(3553,J,0,0,he.width,he.height,ce,ne,he.data):n.texImage2D(3553,J,Se,he.width,he.height,0,ce,ne,he.data)}else if(M.isDataArrayTexture)De?(Fe&&n.texStorage3D(35866,z,Se,N.width,N.height,N.depth),n.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,ce,ne,N.data)):n.texImage3D(35866,0,Se,N.width,N.height,N.depth,0,ce,ne,N.data);else if(M.isData3DTexture)De?(Fe&&n.texStorage3D(32879,z,Se,N.width,N.height,N.depth),n.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,ce,ne,N.data)):n.texImage3D(32879,0,Se,N.width,N.height,N.depth,0,ce,ne,N.data);else if(M.isFramebufferTexture){if(Fe)if(De)n.texStorage2D(3553,z,Se,N.width,N.height);else{let J=N.width,fe=N.height;for(let ye=0;ye<z;ye++)n.texImage2D(3553,ye,Se,J,fe,0,ce,ne,null),J>>=1,fe>>=1}}else if(Te.length>0&&se){De&&Fe&&n.texStorage2D(3553,z,Se,Te[0].width,Te[0].height);for(let J=0,fe=Te.length;J<fe;J++)he=Te[J],De?n.texSubImage2D(3553,J,0,0,ce,ne,he):n.texImage2D(3553,J,Se,ce,ne,he);M.generateMipmaps=!1}else De?(Fe&&n.texStorage2D(3553,z,Se,N.width,N.height),n.texSubImage2D(3553,0,0,0,ce,ne,N)):n.texImage2D(3553,0,Se,ce,ne,N);P(M,se)&&R(L),oe.__version=G.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,V){if(M.image.length!==6)return;const L=ge(A,M),k=M.source;n.bindTexture(34067,A.__webglTexture,33984+V);const G=i.get(k);if(k.version!==G.__version||L===!0){n.activeTexture(33984+V),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,b=M.image[0]&&M.image[0].isDataTexture,N=[];for(let J=0;J<6;J++)!oe&&!b?N[J]=_(M.image[J],!1,!0,u):N[J]=b?M.image[J].image:M.image[J],N[J]=ft(M,N[J]);const se=N[0],ce=y(se)||a,ne=o.convert(M.format,M.encoding),Se=o.convert(M.type),he=w(M.internalFormat,ne,Se,M.encoding),Te=a&&M.isVideoTexture!==!0,De=G.__version===void 0||L===!0;let Fe=C(M,se,ce);E(34067,M,ce);let z;if(oe){Te&&De&&n.texStorage2D(34067,Fe,he,se.width,se.height);for(let J=0;J<6;J++){z=N[J].mipmaps;for(let fe=0;fe<z.length;fe++){const ye=z[fe];M.format!==qn?ne!==null?Te?n.compressedTexSubImage2D(34069+J,fe,0,0,ye.width,ye.height,ne,ye.data):n.compressedTexImage2D(34069+J,fe,he,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?n.texSubImage2D(34069+J,fe,0,0,ye.width,ye.height,ne,Se,ye.data):n.texImage2D(34069+J,fe,he,ye.width,ye.height,0,ne,Se,ye.data)}}}else{z=M.mipmaps,Te&&De&&(z.length>0&&Fe++,n.texStorage2D(34067,Fe,he,N[0].width,N[0].height));for(let J=0;J<6;J++)if(b){Te?n.texSubImage2D(34069+J,0,0,0,N[J].width,N[J].height,ne,Se,N[J].data):n.texImage2D(34069+J,0,he,N[J].width,N[J].height,0,ne,Se,N[J].data);for(let fe=0;fe<z.length;fe++){const Ee=z[fe].image[J].image;Te?n.texSubImage2D(34069+J,fe+1,0,0,Ee.width,Ee.height,ne,Se,Ee.data):n.texImage2D(34069+J,fe+1,he,Ee.width,Ee.height,0,ne,Se,Ee.data)}}else{Te?n.texSubImage2D(34069+J,0,0,0,ne,Se,N[J]):n.texImage2D(34069+J,0,he,ne,Se,N[J]);for(let fe=0;fe<z.length;fe++){const ye=z[fe];Te?n.texSubImage2D(34069+J,fe+1,0,0,ne,Se,ye.image[J]):n.texImage2D(34069+J,fe+1,he,ne,Se,ye.image[J])}}}P(M,ce)&&R(34067),G.__version=k.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,V,L,k){const G=o.convert(V.format,V.encoding),oe=o.convert(V.type),b=w(V.internalFormat,G,oe,V.encoding);i.get(M).__hasExternalTextures||(k===32879||k===35866?n.texImage3D(k,0,b,M.width,M.height,M.depth,0,G,oe,null):n.texImage2D(k,0,b,M.width,M.height,0,G,oe,null)),n.bindFramebuffer(36160,A),ke(M)?c.framebufferTexture2DMultisampleEXT(36160,L,k,i.get(V).__webglTexture,0,Le(M)):(k===3553||k>=34069&&k<=34074)&&t.framebufferTexture2D(36160,L,k,i.get(V).__webglTexture,0),n.bindFramebuffer(36160,null)}function be(A,M,V){if(t.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let L=33189;if(V||ke(M)){const k=M.depthTexture;k&&k.isDepthTexture&&(k.type===wr?L=36012:k.type===Sr&&(L=33190));const G=Le(M);ke(M)?c.renderbufferStorageMultisampleEXT(36161,G,L,M.width,M.height):t.renderbufferStorageMultisample(36161,G,L,M.width,M.height)}else t.renderbufferStorage(36161,L,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const L=Le(M);V&&ke(M)===!1?t.renderbufferStorageMultisample(36161,L,35056,M.width,M.height):ke(M)?c.renderbufferStorageMultisampleEXT(36161,L,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,A)}else{const L=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let k=0;k<L.length;k++){const G=L[k],oe=o.convert(G.format,G.encoding),b=o.convert(G.type),N=w(G.internalFormat,oe,b,G.encoding),se=Le(M);V&&ke(M)===!1?t.renderbufferStorageMultisample(36161,se,N,M.width,M.height):ke(M)?c.renderbufferStorageMultisampleEXT(36161,se,N,M.width,M.height):t.renderbufferStorage(36161,N,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function me(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const L=i.get(M.depthTexture).__webglTexture,k=Le(M);if(M.depthTexture.format===Cr)ke(M)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,L,0,k):t.framebufferTexture2D(36160,36096,3553,L,0);else if(M.depthTexture.format===Ho)ke(M)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,L,0,k):t.framebufferTexture2D(36160,33306,3553,L,0);else throw new Error("Unknown depthTexture format")}function xe(A){const M=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let L=0;L<6;L++)n.bindFramebuffer(36160,M.__webglFramebuffer[L]),M.__webglDepthbuffer[L]=t.createRenderbuffer(),be(M.__webglDepthbuffer[L],A,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),be(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(36160,null)}function Ne(A,M,V){const L=i.get(A);M!==void 0&&ue(L.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&xe(A)}function Ce(A){const M=A.texture,V=i.get(A),L=i.get(M);A.addEventListener("dispose",ie),A.isWebGLMultipleRenderTargets!==!0&&(L.__webglTexture===void 0&&(L.__webglTexture=t.createTexture()),L.__version=M.version,s.memory.textures++);const k=A.isWebGLCubeRenderTarget===!0,G=A.isWebGLMultipleRenderTargets===!0,oe=y(A)||a;if(k){V.__webglFramebuffer=[];for(let b=0;b<6;b++)V.__webglFramebuffer[b]=t.createFramebuffer()}else{if(V.__webglFramebuffer=t.createFramebuffer(),G)if(r.drawBuffers){const b=A.texture;for(let N=0,se=b.length;N<se;N++){const ce=i.get(b[N]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ke(A)===!1){const b=G?M:[M];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let N=0;N<b.length;N++){const se=b[N];V.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(36161,V.__webglColorRenderbuffer[N]);const ce=o.convert(se.format,se.encoding),ne=o.convert(se.type),Se=w(se.internalFormat,ce,ne,se.encoding,A.isXRRenderTarget===!0),he=Le(A);t.renderbufferStorageMultisample(36161,he,Se,A.width,A.height),t.framebufferRenderbuffer(36160,36064+N,36161,V.__webglColorRenderbuffer[N])}t.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),be(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(36160,null)}}if(k){n.bindTexture(34067,L.__webglTexture),E(34067,M,oe);for(let b=0;b<6;b++)ue(V.__webglFramebuffer[b],A,M,36064,34069+b);P(M,oe)&&R(34067),n.unbindTexture()}else if(G){const b=A.texture;for(let N=0,se=b.length;N<se;N++){const ce=b[N],ne=i.get(ce);n.bindTexture(3553,ne.__webglTexture),E(3553,ce,oe),ue(V.__webglFramebuffer,A,ce,36064+N,3553),P(ce,oe)&&R(3553)}n.unbindTexture()}else{let b=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?b=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(b,L.__webglTexture),E(b,M,oe),ue(V.__webglFramebuffer,A,M,36064,b),P(M,oe)&&R(b),n.unbindTexture()}A.depthBuffer&&xe(A)}function Ie(A){const M=y(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let L=0,k=V.length;L<k;L++){const G=V[L];if(P(G,M)){const oe=A.isWebGLCubeRenderTarget?34067:3553,b=i.get(G).__webglTexture;n.bindTexture(oe,b),R(oe),n.unbindTexture()}}}function Ae(A){if(a&&A.samples>0&&ke(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,L=A.height;let k=16384;const G=[],oe=A.stencilBuffer?33306:36096,b=i.get(A),N=A.isWebGLMultipleRenderTargets===!0;if(N)for(let se=0;se<M.length;se++)n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+se,36161,null),n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+se,3553,null,0);n.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,b.__webglFramebuffer);for(let se=0;se<M.length;se++){G.push(36064+se),A.depthBuffer&&G.push(oe);const ce=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ce===!1&&(A.depthBuffer&&(k|=256),A.stencilBuffer&&(k|=1024)),N&&t.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[se]),ce===!0&&(t.invalidateFramebuffer(36008,[oe]),t.invalidateFramebuffer(36009,[oe])),N){const ne=i.get(M[se]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ne,0)}t.blitFramebuffer(0,0,V,L,0,0,V,L,k,9728),g&&t.invalidateFramebuffer(36008,G)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),N)for(let se=0;se<M.length;se++){n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+se,36161,b.__webglColorRenderbuffer[se]);const ce=i.get(M[se]).__webglTexture;n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+se,3553,ce,0)}n.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(f,A.samples)}function ke(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(A){const M=s.render.frame;x.get(A)!==M&&(x.set(A,M),A.update())}function ft(A,M){const V=A.encoding,L=A.format,k=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ff||V!==Nr&&(V===st?a===!1?e.has("EXT_sRGB")===!0&&L===qn?(A.format=ff,A.minFilter=An,A.generateMipmaps=!1):M=k_.sRGBToLinear(M):(L!==qn||k!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=O,this.resetTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=de,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=Ne,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ke}function Y3(t,e,n){const i=n.isWebGL2;function r(o,s=null){let a;if(o===kr)return 5121;if(o===UM)return 32819;if(o===BM)return 32820;if(o===OM)return 5120;if(o===zM)return 5122;if(o===R_)return 5123;if(o===FM)return 5124;if(o===Sr)return 5125;if(o===wr)return 5126;if(o===na)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===VM)return 6406;if(o===qn)return 6408;if(o===GM)return 6409;if(o===HM)return 6410;if(o===Cr)return 6402;if(o===Ho)return 34041;if(o===ff)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===WM)return 6403;if(o===jM)return 36244;if(o===$M)return 33319;if(o===XM)return 33320;if(o===qM)return 36249;if(o===xc||o===yc||o===Sc||o===wc)if(s===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===bm||o===Em||o===Tm||o===Cm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===bm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Em)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Tm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Cm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===YM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Am||o===Pm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Am)return s===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Pm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Lm||o===Rm||o===Dm||o===Im||o===km||o===Nm||o===Om||o===zm||o===Fm||o===Um||o===Bm||o===Vm||o===Gm||o===Hm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Lm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Rm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Dm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Im)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===km)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Nm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Om)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===zm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Fm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Um)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Bm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Vm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Gm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Hm)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Mc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Mc)return s===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===KM||o===Wm||o===jm||o===$m)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Mc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Wm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===jm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===$m)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ro?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class K3 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tl extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z3={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i),m=this._getHandJoint(u,p);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=d.position.distanceTo(f.position),g=.02,x=.005;u.inputState.pinching&&c>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Q3 extends an{constructor(e,n,i,r,o,s,a,l,u,d){if(d=d!==void 0?d:Cr,d!==Cr&&d!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Cr&&(i=Sr),i===void 0&&d===Ho&&(i=Ro),super(null,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1}}class J3 extends Gr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,f=null,c=null,g=null,x=null;const p=n.getContextAttributes();let h=null,m=null;const v=[],_=[],y=new Set,S=new Map,P=new pn;P.layers.enable(1),P.viewport=new dt;const R=new pn;R.layers.enable(2),R.viewport=new dt;const w=[P,R],C=new K3;C.layers.enable(1),C.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let F=v[D];return F===void 0&&(F=new Kc,v[D]=F),F.getTargetRaySpace()},this.getControllerGrip=function(D){let F=v[D];return F===void 0&&(F=new Kc,v[D]=F),F.getGripSpace()},this.getHand=function(D){let F=v[D];return F===void 0&&(F=new Kc,v[D]=F),F.getHandSpace()};function ie(D){const F=_.indexOf(D.inputSource);if(F===-1)return;const j=v[F];j!==void 0&&j.dispatchEvent({type:D.type,data:D.inputSource})}function U(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",B);for(let D=0;D<v.length;D++){const F=_[D];F!==null&&(_[D]=null,v[D].disconnect(F))}I=null,Z=null,e.setRenderTarget(h),g=null,c=null,f=null,r=null,m=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return c!==null?c:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",U),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:g}),m=new Or(g.framebufferWidth,g.framebufferHeight,{format:qn,type:kr,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let F=null,j=null,Q=null;p.depth&&(Q=p.stencil?35056:33190,F=p.stencil?Ho:Cr,j=p.stencil?Ro:Sr);const E={colorFormat:32856,depthFormat:Q,scaleFactor:o};f=new XRWebGLBinding(r,n),c=f.createProjectionLayer(E),r.updateRenderState({layers:[c]}),m=new Or(c.textureWidth,c.textureHeight,{format:qn,type:kr,depthTexture:new Q3(c.textureWidth,c.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ge=e.properties.get(m);ge.__ignoreDepthValues=c.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(D){for(let F=0;F<D.removed.length;F++){const j=D.removed[F],Q=_.indexOf(j);Q>=0&&(_[Q]=null,v[Q].disconnect(j))}for(let F=0;F<D.added.length;F++){const j=D.added[F];let Q=_.indexOf(j);if(Q===-1){for(let ge=0;ge<v.length;ge++)if(ge>=_.length){_.push(j),Q=ge;break}else if(_[ge]===null){_[ge]=j,Q=ge;break}if(Q===-1)break}const E=v[Q];E&&E.connect(j)}}const K=new H,le=new H;function ee(D,F,j){K.setFromMatrixPosition(F.matrixWorld),le.setFromMatrixPosition(j.matrixWorld);const Q=K.distanceTo(le),E=F.projectionMatrix.elements,ge=j.projectionMatrix.elements,X=E[14]/(E[10]-1),ve=E[14]/(E[10]+1),ue=(E[9]+1)/E[5],be=(E[9]-1)/E[5],me=(E[8]-1)/E[0],xe=(ge[8]+1)/ge[0],Ne=X*me,Ce=X*xe,Ie=Q/(-me+xe),Ae=Ie*-me;F.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ae),D.translateZ(Ie),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Le=X+Ie,ke=ve+Ie,qe=Ne-Ae,ft=Ce+(Q-Ae),A=ue*ve/ke*Le,M=be*ve/ke*Le;D.projectionMatrix.makePerspective(qe,ft,A,M,Le,ke)}function O(D,F){F===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(F.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;C.near=R.near=P.near=D.near,C.far=R.far=P.far=D.far,(I!==C.near||Z!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,Z=C.far);const F=D.parent,j=C.cameras;O(C,F);for(let E=0;E<j.length;E++)O(j[E],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.matrix.copy(C.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const Q=D.children;for(let E=0,ge=Q.length;E<ge;E++)Q[E].updateMatrixWorld(!0);j.length===2?ee(C,P,R):C.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(c===null&&g===null))return l},this.setFoveation=function(D){l=D,c!==null&&(c.fixedFoveation=D),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=D)},this.getPlanes=function(){return y};let q=null;function Y(D,F){if(d=F.getViewerPose(u||s),x=F,d!==null){const j=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Q=!1;j.length!==C.cameras.length&&(C.cameras.length=0,Q=!0);for(let E=0;E<j.length;E++){const ge=j[E];let X=null;if(g!==null)X=g.getViewport(ge);else{const ue=f.getViewSubImage(c,ge);X=ue.viewport,E===0&&(e.setRenderTargetTextures(m,ue.colorTexture,c.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(m))}let ve=w[E];ve===void 0&&(ve=new pn,ve.layers.enable(E),ve.viewport=new dt,w[E]=ve),ve.matrix.fromArray(ge.transform.matrix),ve.projectionMatrix.fromArray(ge.projectionMatrix),ve.viewport.set(X.x,X.y,X.width,X.height),E===0&&C.matrix.copy(ve.matrix),Q===!0&&C.cameras.push(ve)}}for(let j=0;j<v.length;j++){const Q=_[j],E=v[j];Q!==null&&E!==void 0&&E.update(Q,F,u||s)}if(q&&q(D,F),F.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:F.detectedPlanes});let j=null;for(const Q of y)F.detectedPlanes.has(Q)||(j===null&&(j=[]),j.push(Q));if(j!==null)for(const Q of j)y.delete(Q),S.delete(Q),i.dispatchEvent({type:"planeremoved",data:Q});for(const Q of F.detectedPlanes)if(!y.has(Q))y.add(Q),S.set(Q,F.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Q});else{const E=S.get(Q);Q.lastChangedTime>E&&(S.set(Q,Q.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Q}))}}x=null}const de=new H_;de.setAnimationLoop(Y),this.setAnimationLoop=function(D){q=D},this.dispose=function(){}}}function eC(t,e){function n(p,h){h.color.getRGB(p.fogColor.value,B_(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&c(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&s(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===_n&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===_n&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function s(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function c(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===_n&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tC(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",h));const S=_.program;i.updateUBOMapping(v,S);const P=e.render.frame;o[v.id]!==P&&(c(v),o[v.id]=P)}function d(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),S=v.__size,P=v.usage;return t.bindBuffer(35345,y),t.bufferData(35345,S,P),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,y),y}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const _=r[v.id],y=v.uniforms,S=v.__cache;t.bindBuffer(35345,_);for(let P=0,R=y.length;P<R;P++){const w=y[P];if(g(w,P,S)===!0){const C=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let ie=0;ie<I.length;ie++){const U=I[ie],B=p(U);typeof U=="number"?(w.__data[0]=U,t.bufferSubData(35345,C+Z,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=U.elements[0],w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=U.elements[0],w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=U.elements[0]):(U.toArray(w.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,C,w.__data)}}t.bindBuffer(35345,null)}function g(v,_,y){const S=v.value;if(y[_]===void 0){if(typeof S=="number")y[_]=S;else{const P=Array.isArray(S)?S:[S],R=[];for(let w=0;w<P.length;w++)R.push(P[w].clone());y[_]=R}return!0}else if(typeof S=="number"){if(y[_]!==S)return y[_]=S,!0}else{const P=Array.isArray(y[_])?y[_]:[y[_]],R=Array.isArray(S)?S:[S];for(let w=0;w<P.length;w++){const C=P[w];if(C.equals(R[w])===!1)return C.copy(R[w]),!0}}return!1}function x(v){const _=v.uniforms;let y=0;const S=16;let P=0;for(let R=0,w=_.length;R<w;R++){const C=_[R],I={boundary:0,storage:0},Z=Array.isArray(C.value)?C.value:[C.value];for(let ie=0,U=Z.length;ie<U;ie++){const B=Z[ie],K=p(B);I.boundary+=K.boundary,I.storage+=K.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,R>0){P=y%S;const ie=S-P;P!==0&&ie-I.boundary<0&&(y+=S-P,C.__offset=y)}y+=I.storage}return P=y%S,P>0&&(y+=S-P),v.__size=y,v.__cache={},this}function p(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function h(v){const _=v.target;_.removeEventListener("dispose",h);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:m}}function nC(){const t=ra("canvas");return t.style.display="block",t}function iC(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:nC(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,s=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let d;n!==null?d=n.getContextAttributes().alpha:d=t.alpha!==void 0?t.alpha:!1;let f=null,c=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Nr,this.physicallyCorrectLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const p=this;let h=!1,m=0,v=0,_=null,y=-1,S=null;const P=new dt,R=new dt;let w=null,C=e.width,I=e.height,Z=1,ie=null,U=null;const B=new dt(0,0,C,I),K=new dt(0,0,C,I);let le=!1;const ee=new Th;let O=!1,q=!1,Y=null;const de=new Mt,D=new Be,F=new H,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return _===null?Z:1}let E=n;function ge(T,$){for(let te=0;te<T.length;te++){const W=T[te],re=e.getContext(W,$);if(re!==null)return re}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Te,!1),E===null){const $=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&$.shift(),E=ge($,T),E===null)throw ge($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,ve,ue,be,me,xe,Ne,Ce,Ie,Ae,Le,ke,qe,ft,A,M,V,L,k,G,oe,b,N,se;function ce(){X=new hT(E),ve=new sT(E,X,t),X.init(ve),b=new Y3(E,X,ve),ue=new X3(E,X,ve),be=new gT,me=new I3,xe=new q3(E,X,ue,me,ve,b,be),Ne=new lT(p),Ce=new fT(p),Ie=new bb(E,ve),N=new rT(E,X,Ie,ve),Ae=new pT(E,Ie,be,N),Le=new yT(E,Ae,Ie,be),k=new xT(E,ve,xe),M=new aT(me),ke=new D3(p,Ne,Ce,X,ve,N,M),qe=new eC(p,me),ft=new N3,A=new V3(X,ve),L=new iT(p,Ne,Ce,ue,Le,d,s),V=new $3(p,Le,ve),se=new tC(E,be,ve,ue),G=new oT(E,X,be,ve),oe=new mT(E,X,be,ve),be.programs=ke.programs,p.capabilities=ve,p.extensions=X,p.properties=me,p.renderLists=ft,p.shadowMap=V,p.state=ue,p.info=be}ce();const ne=new J3(p,E);this.xr=ne,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(C,I,!1))},this.getSize=function(T){return T.set(C,I)},this.setSize=function(T,$,te){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,I=$,e.width=Math.floor(T*Z),e.height=Math.floor($*Z),te!==!1&&(e.style.width=T+"px",e.style.height=$+"px"),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(C*Z,I*Z).floor()},this.setDrawingBufferSize=function(T,$,te){C=T,I=$,Z=te,e.width=Math.floor(T*te),e.height=Math.floor($*te),this.setViewport(0,0,T,$)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,$,te,W){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,$,te,W),ue.viewport(P.copy(B).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,$,te,W){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,$,te,W),ue.scissor(R.copy(K).multiplyScalar(Z).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){ue.setScissorTest(le=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor.apply(L,arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha.apply(L,arguments)},this.clear=function(T=!0,$=!0,te=!0){let W=0;T&&(W|=16384),$&&(W|=256),te&&(W|=1024),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),ft.dispose(),A.dispose(),me.dispose(),Ne.dispose(),Ce.dispose(),Le.dispose(),N.dispose(),se.dispose(),ke.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ye),ne.removeEventListener("sessionend",Ee),Y&&(Y.dispose(),Y=null),Re.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=be.autoReset,$=V.enabled,te=V.autoUpdate,W=V.needsUpdate,re=V.type;ce(),be.autoReset=T,V.enabled=$,V.autoUpdate=te,V.needsUpdate=W,V.type=re}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const $=T.target;$.removeEventListener("dispose",De),Fe($)}function Fe(T){z(T),me.remove(T)}function z(T){const $=me.get(T).programs;$!==void 0&&($.forEach(function(te){ke.releaseProgram(te)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,te,W,re,Pe){$===null&&($=j);const Oe=re.isMesh&&re.matrixWorld.determinant()<0,Ve=Ko(T,$,te,W,re);ue.setMaterial(W,Oe);let Ge=te.index,Ke=1;W.wireframe===!0&&(Ge=Ae.getWireframeAttribute(te),Ke=2);const je=te.drawRange,$e=te.attributes.position;let xt=je.start*Ke,ln=(je.start+je.count)*Ke;Pe!==null&&(xt=Math.max(xt,Pe.start*Ke),ln=Math.min(ln,(Pe.start+Pe.count)*Ke)),Ge!==null?(xt=Math.max(xt,0),ln=Math.min(ln,Ge.count)):$e!=null&&(xt=Math.max(xt,0),ln=Math.min(ln,$e.count));const li=ln-xt;if(li<0||li===1/0)return;N.setup(re,W,Ve,te,Ge);let or,yt=G;if(Ge!==null&&(or=Ie.get(Ge),yt=oe,yt.setIndex(or)),re.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*Q()),yt.setMode(1)):yt.setMode(4);else if(re.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),ue.setLineWidth(Xe*Q()),re.isLineSegments?yt.setMode(1):re.isLineLoop?yt.setMode(2):yt.setMode(3)}else re.isPoints?yt.setMode(0):re.isSprite&&yt.setMode(4);if(re.isInstancedMesh)yt.renderInstances(xt,li,re.count);else if(te.isInstancedBufferGeometry){const Xe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,zu=Math.min(te.instanceCount,Xe);yt.renderInstances(xt,li,zu)}else yt.render(xt,li)},this.compile=function(T,$){function te(W,re,Pe){W.transparent===!0&&W.side===Vi&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,Jt(W,re,Pe),W.side=er,W.needsUpdate=!0,Jt(W,re,Pe),W.side=Vi):Jt(W,re,Pe)}c=A.get(T),c.init(),x.push(c),T.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(c.pushLight(W),W.castShadow&&c.pushShadow(W))}),c.setupLights(p.physicallyCorrectLights),T.traverse(function(W){const re=W.material;if(re)if(Array.isArray(re))for(let Pe=0;Pe<re.length;Pe++){const Oe=re[Pe];te(Oe,T,W)}else te(re,T,W)}),x.pop(),c=null};let J=null;function fe(T){J&&J(T)}function ye(){Re.stop()}function Ee(){Re.start()}const Re=new H_;Re.setAnimationLoop(fe),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(T){J=T,ne.setAnimationLoop(T),T===null?Re.stop():Re.start()},ne.addEventListener("sessionstart",ye),ne.addEventListener("sessionend",Ee),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera($),$=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,$,_),c=A.get(T,x.length),c.init(),x.push(c),de.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ee.setFromProjectionMatrix(de),q=this.localClippingEnabled,O=M.init(this.clippingPlanes,q),f=ft.get(T,g.length),f.init(),g.push(f),Je(T,$,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ie,U),O===!0&&M.beginShadows();const te=c.state.shadowsArray;if(V.render(te,T,$),O===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),L.render(f,T),c.setupLights(p.physicallyCorrectLights),$.isArrayCamera){const W=$.cameras;for(let re=0,Pe=W.length;re<Pe;re++){const Oe=W[re];lt(f,T,Oe,Oe.viewport)}}else lt(f,T,$);_!==null&&(xe.updateMultisampleRenderTarget(_),xe.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(p,T,$),N.resetDefaultState(),y=-1,S=null,x.pop(),x.length>0?c=x[x.length-1]:c=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function Je(T,$,te,W){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLight)c.pushLight(T),T.castShadow&&c.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){W&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Oe=Le.update(T),Ve=T.material;Ve.visible&&f.push(T,Oe,Ve,te,F.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==be.render.frame&&(T.skeleton.update(),T.skeleton.frame=be.render.frame),!T.frustumCulled||ee.intersectsObject(T))){W&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Oe=Le.update(T),Ve=T.material;if(Array.isArray(Ve)){const Ge=Oe.groups;for(let Ke=0,je=Ge.length;Ke<je;Ke++){const $e=Ge[Ke],xt=Ve[$e.materialIndex];xt&&xt.visible&&f.push(T,Oe,xt,te,F.z,$e)}}else Ve.visible&&f.push(T,Oe,Ve,te,F.z,null)}}const Pe=T.children;for(let Oe=0,Ve=Pe.length;Oe<Ve;Oe++)Je(Pe[Oe],$,te,W)}function lt(T,$,te,W){const re=T.opaque,Pe=T.transmissive,Oe=T.transparent;c.setupLightsView(te),O===!0&&M.setGlobalState(p.clippingPlanes,te),Pe.length>0&&Mn(re,$,te),W&&ue.viewport(P.copy(W)),re.length>0&&it(re,$,te),Pe.length>0&&it(Pe,$,te),Oe.length>0&&it(Oe,$,te),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Mn(T,$,te){const W=ve.isWebGL2;Y===null&&(Y=new Or(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?na:kr,minFilter:ta,samples:W&&o===!0?4:0})),p.getDrawingBufferSize(D),W?Y.setSize(D.x,D.y):Y.setSize(hf(D.x),hf(D.y));const re=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const Pe=p.toneMapping;p.toneMapping=wi,it(T,$,te),p.toneMapping=Pe,xe.updateMultisampleRenderTarget(Y),xe.updateRenderTargetMipmap(Y),p.setRenderTarget(re)}function it(T,$,te){const W=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Pe=T.length;re<Pe;re++){const Oe=T[re],Ve=Oe.object,Ge=Oe.geometry,Ke=W===null?Oe.material:W,je=Oe.group;Ve.layers.test(te.layers)&&Nn(Ve,$,te,Ge,Ke,je)}}function Nn(T,$,te,W,re,Pe){T.onBeforeRender(p,$,te,W,re,Pe),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(p,$,te,W,T,Pe),re.transparent===!0&&re.side===Vi&&re.forceSinglePass===!1?(re.side=_n,re.needsUpdate=!0,p.renderBufferDirect(te,$,W,re,T,Pe),re.side=er,re.needsUpdate=!0,p.renderBufferDirect(te,$,W,re,T,Pe),re.side=Vi):p.renderBufferDirect(te,$,W,re,T,Pe),T.onAfterRender(p,$,te,W,re,Pe)}function Jt(T,$,te){$.isScene!==!0&&($=j);const W=me.get(T),re=c.state.lights,Pe=c.state.shadowsArray,Oe=re.state.version,Ve=ke.getParameters(T,re.state,Pe,$,te),Ge=ke.getProgramCacheKey(Ve);let Ke=W.programs;W.environment=T.isMeshStandardMaterial?$.environment:null,W.fog=$.fog,W.envMap=(T.isMeshStandardMaterial?Ce:Ne).get(T.envMap||W.environment),Ke===void 0&&(T.addEventListener("dispose",De),Ke=new Map,W.programs=Ke);let je=Ke.get(Ge);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Oe)return bn(T,Ve),je}else Ve.uniforms=ke.getUniforms(T),T.onBuild(te,Ve,p),T.onBeforeCompile(Ve,p),je=ke.acquireProgram(Ve,Ge),Ke.set(Ge,je),W.uniforms=Ve.uniforms;const $e=W.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=M.uniform),bn(T,Ve),W.needsLights=Ou(T),W.lightsStateVersion=Oe,W.needsLights&&($e.ambientLightColor.value=re.state.ambient,$e.lightProbe.value=re.state.probe,$e.directionalLights.value=re.state.directional,$e.directionalLightShadows.value=re.state.directionalShadow,$e.spotLights.value=re.state.spot,$e.spotLightShadows.value=re.state.spotShadow,$e.rectAreaLights.value=re.state.rectArea,$e.ltc_1.value=re.state.rectAreaLTC1,$e.ltc_2.value=re.state.rectAreaLTC2,$e.pointLights.value=re.state.point,$e.pointLightShadows.value=re.state.pointShadow,$e.hemisphereLights.value=re.state.hemi,$e.directionalShadowMap.value=re.state.directionalShadowMap,$e.directionalShadowMatrix.value=re.state.directionalShadowMatrix,$e.spotShadowMap.value=re.state.spotShadowMap,$e.spotLightMatrix.value=re.state.spotLightMatrix,$e.spotLightMap.value=re.state.spotLightMap,$e.pointShadowMap.value=re.state.pointShadowMap,$e.pointShadowMatrix.value=re.state.pointShadowMatrix);const xt=je.getUniforms(),ln=xl.seqWithValue(xt.seq,$e);return W.currentProgram=je,W.uniformsList=ln,je}function bn(T,$){const te=me.get(T);te.outputEncoding=$.outputEncoding,te.instancing=$.instancing,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function Ko(T,$,te,W,re){$.isScene!==!0&&($=j),xe.resetTextureUnits();const Pe=$.fog,Oe=W.isMeshStandardMaterial?$.environment:null,Ve=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Nr,Ge=(W.isMeshStandardMaterial?Ce:Ne).get(W.envMap||Oe),Ke=W.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,je=!!W.normalMap&&!!te.attributes.tangent,$e=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,ln=!!te.morphAttributes.color,li=W.toneMapped?p.toneMapping:wi,or=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=or!==void 0?or.length:0,Xe=me.get(W),zu=c.state.lights;if(O===!0&&(q===!0||T!==S)){const un=T===S&&W.id===y;M.setState(W,T,un)}let Pt=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==zu.state.version||Xe.outputEncoding!==Ve||re.isInstancedMesh&&Xe.instancing===!1||!re.isInstancedMesh&&Xe.instancing===!0||re.isSkinnedMesh&&Xe.skinning===!1||!re.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ge||W.fog===!0&&Xe.fog!==Pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==M.numPlanes||Xe.numIntersection!==M.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==je||Xe.morphTargets!==$e||Xe.morphNormals!==xt||Xe.morphColors!==ln||Xe.toneMapping!==li||ve.isWebGL2===!0&&Xe.morphTargetsCount!==yt)&&(Pt=!0):(Pt=!0,Xe.__version=W.version);let sr=Xe.currentProgram;Pt===!0&&(sr=Jt(W,$,re));let Ph=!1,Zo=!1,Fu=!1;const jt=sr.getUniforms(),ar=Xe.uniforms;if(ue.useProgram(sr.program)&&(Ph=!0,Zo=!0,Fu=!0),W.id!==y&&(y=W.id,Zo=!0),Ph||S!==T){if(jt.setValue(E,"projectionMatrix",T.projectionMatrix),ve.logarithmicDepthBuffer&&jt.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Zo=!0,Fu=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const un=jt.map.cameraPosition;un!==void 0&&un.setValue(E,F.setFromMatrixPosition(T.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&jt.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||re.isSkinnedMesh)&&jt.setValue(E,"viewMatrix",T.matrixWorldInverse)}if(re.isSkinnedMesh){jt.setOptional(E,re,"bindMatrix"),jt.setOptional(E,re,"bindMatrixInverse");const un=re.skeleton;un&&(ve.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),jt.setValue(E,"boneTexture",un.boneTexture,xe),jt.setValue(E,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uu=te.morphAttributes;if((Uu.position!==void 0||Uu.normal!==void 0||Uu.color!==void 0&&ve.isWebGL2===!0)&&k.update(re,te,W,sr),(Zo||Xe.receiveShadow!==re.receiveShadow)&&(Xe.receiveShadow=re.receiveShadow,jt.setValue(E,"receiveShadow",re.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ar.envMap.value=Ge,ar.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Zo&&(jt.setValue(E,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&ma(ar,Fu),Pe&&W.fog===!0&&qe.refreshFogUniforms(ar,Pe),qe.refreshMaterialUniforms(ar,W,Z,I,Y),xl.upload(E,Xe.uniformsList,ar,xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xl.upload(E,Xe.uniformsList,ar,xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&jt.setValue(E,"center",re.center),jt.setValue(E,"modelViewMatrix",re.modelViewMatrix),jt.setValue(E,"normalMatrix",re.normalMatrix),jt.setValue(E,"modelMatrix",re.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const un=W.uniformsGroups;for(let Bu=0,Q_=un.length;Bu<Q_;Bu++)if(ve.isWebGL2){const Lh=un[Bu];se.update(Lh,sr),se.bind(Lh,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function ma(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,$,te){me.get(T.texture).__webglTexture=$,me.get(T.depthTexture).__webglTexture=te;const W=me.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=te===void 0,W.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,$){const te=me.get(T);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(T,$=0,te=0){_=T,m=$,v=te;let W=!0,re=null,Pe=!1,Oe=!1;if(T){const Ge=me.get(T);Ge.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),W=!1):Ge.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Ge.__hasExternalTextures&&xe.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const je=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(re=je[$],Pe=!0):ve.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?re=me.get(T).__webglMultisampledFramebuffer:re=je,P.copy(T.viewport),R.copy(T.scissor),w=T.scissorTest}else P.copy(B).multiplyScalar(Z).floor(),R.copy(K).multiplyScalar(Z).floor(),w=le;if(ue.bindFramebuffer(36160,re)&&ve.drawBuffers&&W&&ue.drawBuffers(T,re),ue.viewport(P),ue.scissor(R),ue.setScissorTest(w),Pe){const Ge=me.get(T.texture);E.framebufferTexture2D(36160,36064,34069+$,Ge.__webglTexture,te)}else if(Oe){const Ge=me.get(T.texture),Ke=$||0;E.framebufferTextureLayer(36160,36064,Ge.__webglTexture,te||0,Ke)}y=-1},this.readRenderTargetPixels=function(T,$,te,W,re,Pe,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){ue.bindFramebuffer(36160,Ve);try{const Ge=T.texture,Ke=Ge.format,je=Ge.type;if(Ke!==qn&&b.convert(Ke)!==E.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=je===na&&(X.has("EXT_color_buffer_half_float")||ve.isWebGL2&&X.has("EXT_color_buffer_float"));if(je!==kr&&b.convert(je)!==E.getParameter(35738)&&!(je===wr&&(ve.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-W&&te>=0&&te<=T.height-re&&E.readPixels($,te,W,re,b.convert(Ke),b.convert(je),Pe)}finally{const Ge=_!==null?me.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(T,$,te=0){const W=Math.pow(2,-te),re=Math.floor($.image.width*W),Pe=Math.floor($.image.height*W);xe.setTexture2D($,0),E.copyTexSubImage2D(3553,te,0,0,T.x,T.y,re,Pe),ue.unbindTexture()},this.copyTextureToTexture=function(T,$,te,W=0){const re=$.image.width,Pe=$.image.height,Oe=b.convert(te.format),Ve=b.convert(te.type);xe.setTexture2D(te,0),E.pixelStorei(37440,te.flipY),E.pixelStorei(37441,te.premultiplyAlpha),E.pixelStorei(3317,te.unpackAlignment),$.isDataTexture?E.texSubImage2D(3553,W,T.x,T.y,re,Pe,Oe,Ve,$.image.data):$.isCompressedTexture?E.compressedTexSubImage2D(3553,W,T.x,T.y,$.mipmaps[0].width,$.mipmaps[0].height,Oe,$.mipmaps[0].data):E.texSubImage2D(3553,W,T.x,T.y,Oe,Ve,$.image),W===0&&te.generateMipmaps&&E.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,$,te,W,re=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,Ve=T.max.z-T.min.z+1,Ge=b.convert(W.format),Ke=b.convert(W.type);let je;if(W.isData3DTexture)xe.setTexture3D(W,0),je=32879;else if(W.isDataArrayTexture)xe.setTexture2DArray(W,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(37440,W.flipY),E.pixelStorei(37441,W.premultiplyAlpha),E.pixelStorei(3317,W.unpackAlignment);const $e=E.getParameter(3314),xt=E.getParameter(32878),ln=E.getParameter(3316),li=E.getParameter(3315),or=E.getParameter(32877),yt=te.isCompressedTexture?te.mipmaps[0]:te.image;E.pixelStorei(3314,yt.width),E.pixelStorei(32878,yt.height),E.pixelStorei(3316,T.min.x),E.pixelStorei(3315,T.min.y),E.pixelStorei(32877,T.min.z),te.isDataTexture||te.isData3DTexture?E.texSubImage3D(je,re,$.x,$.y,$.z,Pe,Oe,Ve,Ge,Ke,yt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(je,re,$.x,$.y,$.z,Pe,Oe,Ve,Ge,yt.data)):E.texSubImage3D(je,re,$.x,$.y,$.z,Pe,Oe,Ve,Ge,Ke,yt),E.pixelStorei(3314,$e),E.pixelStorei(32878,xt),E.pixelStorei(3316,ln),E.pixelStorei(3315,li),E.pixelStorei(32877,or),re===0&&W.generateMipmaps&&E.generateMipmap(je),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,ue.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class q_ extends iC{}q_.prototype.isWebGL1Renderer=!0;class rC extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gn extends rr{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const d=[],f=new H,c=new H,g=[],x=[],p=[],h=[];for(let m=0;m<=i;m++){const v=[],_=m/i;let y=0;m==0&&s==0?y=.5/n:m==i&&l==Math.PI&&(y=-.5/n);for(let S=0;S<=n;S++){const P=S/n;f.x=-e*Math.cos(r+P*o)*Math.sin(s+_*a),f.y=e*Math.cos(s+_*a),f.z=e*Math.sin(r+P*o)*Math.sin(s+_*a),x.push(f.x,f.y,f.z),c.copy(f).normalize(),p.push(c.x,c.y,c.z),h.push(P+y,1-_),v.push(u++)}d.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const _=d[m][v+1],y=d[m][v],S=d[m+1][v],P=d[m+1][v+1];(m!==0||s>0)&&g.push(_,y,P),(m!==i-1||l<Math.PI)&&g.push(y,S,P)}this.setIndex(g),this.setAttribute("position",new si(x,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(h,2))}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Pg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class oC{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,o===!1&&r.onStart!==void 0&&r.onStart(d,s,a),o=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,c=u.length;f<c;f+=2){const g=u[f],x=u[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null}}}const sC=new oC;class Y_{constructor(e){this.manager=e!==void 0?e:sC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class aC extends Y_{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Pg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ra("img");function l(){d(),Pg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){d(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class lC extends Y_{constructor(e){super(e)}load(e,n,i,r){const o=new an,s=new aC(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class uC extends ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Zc=new Mt,Lg=new H,Rg=new H;class cC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Lg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lg),Rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rg),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dg=new Mt,ms=new H,Qc=new H;class dC extends cC{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),i.position.copy(ms),Qc.copy(i.position),Qc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Qc),i.updateMatrixWorld(),r.makeTranslation(-ms.x,-ms.y,-ms.z),Dg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg)}}class fC extends uC{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ig{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);const kg={type:"change"},Jc={type:"start"},Ng={type:"end"};class hC extends Gr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",ft),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(kg),i.update(),o=r.NONE},this.update=function(){const b=new H,N=new zr().setFromUnitVectors(e.up,new H(0,1,0)),se=N.clone().invert(),ce=new H,ne=new zr,Se=2*Math.PI;return function(){const Te=i.object.position;b.copy(Te).sub(i.target),b.applyQuaternion(N),a.setFromVector3(b),i.autoRotate&&o===r.NONE&&C(R()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;return isFinite(De)&&isFinite(Fe)&&(De<-Math.PI?De+=Se:De>Math.PI&&(De-=Se),Fe<-Math.PI?Fe+=Se:Fe>Math.PI&&(Fe-=Se),De<=Fe?a.theta=Math.max(De,Math.min(Fe,a.theta)):a.theta=a.theta>(De+Fe)/2?Math.max(De,a.theta):Math.min(Fe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),b.setFromSpherical(a),b.applyQuaternion(se),Te.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),u=1,f||ce.distanceToSquared(i.object.position)>s||8*(1-ne.dot(i.object.quaternion))>s?(i.dispatchEvent(kg),ce.copy(i.object.position),ne.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",V),i.domElement.removeEventListener("pointerdown",Ne),i.domElement.removeEventListener("pointercancel",Ae),i.domElement.removeEventListener("wheel",qe),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ie),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ft)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Ig,l=new Ig;let u=1;const d=new H;let f=!1;const c=new Be,g=new Be,x=new Be,p=new Be,h=new Be,m=new Be,v=new Be,_=new Be,y=new Be,S=[],P={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function I(b){l.phi-=b}const Z=function(){const b=new H;return function(se,ce){b.setFromMatrixColumn(ce,0),b.multiplyScalar(-se),d.add(b)}}(),ie=function(){const b=new H;return function(se,ce){i.screenSpacePanning===!0?b.setFromMatrixColumn(ce,1):(b.setFromMatrixColumn(ce,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(se),d.add(b)}}(),U=function(){const b=new H;return function(se,ce){const ne=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;b.copy(Se).sub(i.target);let he=b.length();he*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*se*he/ne.clientHeight,i.object.matrix),ie(2*ce*he/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(se*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),ie(ce*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(b){c.set(b.clientX,b.clientY)}function ee(b){v.set(b.clientX,b.clientY)}function O(b){p.set(b.clientX,b.clientY)}function q(b){g.set(b.clientX,b.clientY),x.subVectors(g,c).multiplyScalar(i.rotateSpeed);const N=i.domElement;C(2*Math.PI*x.x/N.clientHeight),I(2*Math.PI*x.y/N.clientHeight),c.copy(g),i.update()}function Y(b){_.set(b.clientX,b.clientY),y.subVectors(_,v),y.y>0?B(w()):y.y<0&&K(w()),v.copy(_),i.update()}function de(b){h.set(b.clientX,b.clientY),m.subVectors(h,p).multiplyScalar(i.panSpeed),U(m.x,m.y),p.copy(h),i.update()}function D(b){b.deltaY<0?K(w()):b.deltaY>0&&B(w()),i.update()}function F(b){let N=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),N=!0;break}N&&(b.preventDefault(),i.update())}function j(){if(S.length===1)c.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),N=.5*(S[0].pageY+S[1].pageY);c.set(b,N)}}function Q(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),N=.5*(S[0].pageY+S[1].pageY);p.set(b,N)}}function E(){const b=S[0].pageX-S[1].pageX,N=S[0].pageY-S[1].pageY,se=Math.sqrt(b*b+N*N);v.set(0,se)}function ge(){i.enableZoom&&E(),i.enablePan&&Q()}function X(){i.enableZoom&&E(),i.enableRotate&&j()}function ve(b){if(S.length==1)g.set(b.pageX,b.pageY);else{const se=oe(b),ce=.5*(b.pageX+se.x),ne=.5*(b.pageY+se.y);g.set(ce,ne)}x.subVectors(g,c).multiplyScalar(i.rotateSpeed);const N=i.domElement;C(2*Math.PI*x.x/N.clientHeight),I(2*Math.PI*x.y/N.clientHeight),c.copy(g)}function ue(b){if(S.length===1)h.set(b.pageX,b.pageY);else{const N=oe(b),se=.5*(b.pageX+N.x),ce=.5*(b.pageY+N.y);h.set(se,ce)}m.subVectors(h,p).multiplyScalar(i.panSpeed),U(m.x,m.y),p.copy(h)}function be(b){const N=oe(b),se=b.pageX-N.x,ce=b.pageY-N.y,ne=Math.sqrt(se*se+ce*ce);_.set(0,ne),y.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),B(y.y),v.copy(_)}function me(b){i.enableZoom&&be(b),i.enablePan&&ue(b)}function xe(b){i.enableZoom&&be(b),i.enableRotate&&ve(b)}function Ne(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",Ie)),L(b),b.pointerType==="touch"?A(b):Le(b))}function Ce(b){i.enabled!==!1&&(b.pointerType==="touch"?M(b):ke(b))}function Ie(b){k(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ie)),i.dispatchEvent(Ng),o=r.NONE}function Ae(b){k(b)}function Le(b){let N;switch(b.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Wr.DOLLY:if(i.enableZoom===!1)return;ee(b),o=r.DOLLY;break;case Wr.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;O(b),o=r.PAN}else{if(i.enableRotate===!1)return;le(b),o=r.ROTATE}break;case Wr.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;le(b),o=r.ROTATE}else{if(i.enablePan===!1)return;O(b),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Jc)}function ke(b){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;q(b);break;case r.DOLLY:if(i.enableZoom===!1)return;Y(b);break;case r.PAN:if(i.enablePan===!1)return;de(b);break}}function qe(b){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(b.preventDefault(),i.dispatchEvent(Jc),D(b),i.dispatchEvent(Ng))}function ft(b){i.enabled===!1||i.enablePan===!1||F(b)}function A(b){switch(G(b),S.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;j(),o=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;Q(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(),o=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Jc)}function M(b){switch(G(b),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ue(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(b),i.update();break;default:o=r.NONE}}function V(b){i.enabled!==!1&&b.preventDefault()}function L(b){S.push(b)}function k(b){delete P[b.pointerId];for(let N=0;N<S.length;N++)if(S[N].pointerId==b.pointerId){S.splice(N,1);return}}function G(b){let N=P[b.pointerId];N===void 0&&(N=new Be,P[b.pointerId]=N),N.set(b.pageX,b.pageY)}function oe(b){const N=b.pointerId===S[0].pointerId?S[1]:S[0];return P[N.pointerId]}i.domElement.addEventListener("contextmenu",V),i.domElement.addEventListener("pointerdown",Ne),i.domElement.addEventListener("pointercancel",Ae),i.domElement.addEventListener("wheel",qe,{passive:!1}),this.update()}}const pC="/assets/sun_texture-f22b1cfb.jpg",mC="/assets/earth_texture-d7df515b.jpg",gC="/assets/mercury_texture-2583dfbf.jpeg",vC="/assets/venus_texture-1fd6f2c2.jpg",_C="/assets/mars_texture-79db24da.jpeg",xC="/assets/jupiter_texture-0bd844bf.jpg",yC="/assets/saturn_texture-0d39a4a4.jpg",SC="/assets/uranus_texture-d15239d4.jpg",wC="/assets/neptune_texture-cb42ea82.jpg",MC="/assets/frame-0678e224.png",bC=Me.div``,EC=Me.canvas``;function K_(){return He.useEffect(()=>{const t=new lC,e={width:800,height:window.innerHeight},n=t.load(MC),i=new rC;i.background=n;const r=new ht;r.translateX(-10),r.translateY(-5),r.translateZ(30),r.rotateX(.5),i.add(r);const o=t.load(mC,ke=>{console.log(ke)}),s=new Vn({map:o}),a=new Gn(1.5,64,64);a.translate(0,0,-20);const l=new Ot(a,s),u=new ht;u.add(l),r.add(u);const d=new Gn(.5,64,64);d.translate(0,0,-10);const f=t.load(gC),c=new Vn({map:f}),g=new Ot(d,c),x=new ht;x.add(g),r.add(x);const p=new Gn(1,64,64);p.translate(0,0,-15);const h=t.load(vC),m=new Vn({map:h}),v=new Ot(p,m),_=new ht;_.add(v),r.add(_);const y=new Gn(1,64,64);y.translate(0,0,-25);const S=t.load(_C),P=new Vn({map:S}),R=new Ot(y,P),w=new ht;w.add(R),r.add(w);const C=new Gn(2.5,64,64);C.translate(0,0,-30);const I=t.load(xC),Z=new Vn({map:I}),ie=new Ot(C,Z),U=new ht;U.add(ie),r.add(U);const B=new Gn(3,64,64);B.translate(0,0,-40);const K=t.load(yC),le=new Vn({map:K}),ee=new Ot(B,le),O=new ht;O.add(ee);const q=new Gn(2,64,64);q.translate(0,0,-50);const Y=t.load(SC),de=new Vn({map:Y}),D=new Ot(q,de),F=new ht;F.add(D),r.add(F);const j=new Gn(2.3,64,64);j.translate(0,0,-55);const Q=t.load(wC),E=new Vn({map:Q}),ge=new Ot(j,E),X=new ht;X.add(ge),r.add(X);const ve=t.load(pC),ue=new Gn(7,64,64),be=new Vn({map:ve}),me=new Ot(ue,be);r.add(me);const xe=new fC(16777215,1,1e3);xe.position.set(0,0,0),i.add(xe);const Ne=new pn(75,e.width/e.height,.1,1e3);Ne.position.z=80,Ne.position.y=-10,i.add(Ne);const Ce=document.querySelector("#THREEJSCANVA"),Ie=new q_({canvas:Ce});Ie.setSize(800,600),Ie.setPixelRatio(2),Ie.render(i,Ne);const Ae=new hC(Ne,Ce);Ae.enableDamping=!0,Ae.enablePan=!1,Ae.enableZoom=!1;const Le=()=>{x.rotateY(.03),_.rotateY(.02),u.rotateY(.015),w.rotateY(.009),U.rotateY(.008),O.rotateY(.007),F.rotateY(.006),X.rotateY(.005),Ae.update(),Ie.render(i,Ne),window.requestAnimationFrame(Le)};Le()},[]),ae(bC,{children:ae(EC,{id:"THREEJSCANVA"})})}function TC(){return ze(qo,{children:[ae(l_,{titleFontSize:"40px",children:"Discorver the universe across the quizzes"}),ae(oM,{}),ae(K_,{})]})}const CC=Me.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`,AC=Me.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`,PC=Me.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`,Og=Me.label`
    text-align: left;
    margin-bottom: 8px;
    margin-top: 10px;
`,zg=Me.input`
    border-radius: 50px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    border: 2.5px solid lightgray;
`;function LC(){return ae(CC,{children:ze(AC,{children:[ae(PC,{children:"LOGIN"}),ze(xf,{children:[ae(Og,{children:"Type your e-mail: "}),ae(zg,{placeholder:"Type your e-mail here",type:"text"})]}),ae(Og,{children:"Type your password: "}),ae(zg,{placeholder:"Type your password here",type:"password"}),ae(Pn,{children:"Make Login"}),ae(Er,{afterBeforeBorder:"2px",children:"OR"}),ze(Pn,{children:[ae($n,{src:E_}),"Make login with Google"]}),ae(Er,{textSize:"12px",children:"If you do not have an account"}),ae(Er,{textColor:"#4025E4",textSize:"12px",children:ae(Is,{to:"/signup",children:"CLICK HERE"})})]})})}function RC(){return ze(qo,{contentDisplay:"flex",children:[ae(l_,{titleFontSize:"40px",children:"Discorver the universe across the quizzes"}),ae(LC,{}),ae(K_,{})]})}const DC=Me.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    height: 300px;
    width: 200px;
`,IC=Me.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    padding-top: 5px;
`,Fg=Me.li`
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
`,Z_="/assets/profile_icon-979ab0b4.png",kC="/assets/Sample_User_Icon-5158855d.png",NC="/assets/email_icon-0304d04f.png",OC="/assets/password_icon-47b59139.png",zC=Me.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`,FC=Me.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 2px solid lightgray;
`,Ug=Me.p`
    color: black;
`,UC=Me.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`,nl=Me.label`
    color: black;
`,il=Me.div`
    width: 300px;
    margin: 10px;
`,ed=Me.div`
    position: relative;
`,td=Me.input`
    width: 100%;
    height: 40px;
    padding-left: 40px;
`,nd=Me.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
`;function BC(){return ze(zC,{children:[ae(Ug,{children:"Your profile photo: "}),ze(FC,{children:[ae($n,{src:Z_,imgWidth:"80px",imgHeight:"80px"}),ae(Pn,{buttoMarginLeft:"30px",buttonHeight:"40px",buttonWidth:"200px",marginTop:"0px",buttonBackground:"lightblue",children:"CHANGE PHOTO"}),ae(Pn,{buttoMarginLeft:"30px",buttonHeight:"40px",buttonWidth:"200px",marginTop:"0px",buttonBackground:"red",children:"REMOVE PHOTO"})]}),ae(Ug,{children:"Your personal information: "}),ze(UC,{children:[ze(il,{children:[ae(nl,{children:"Your username: "}),ze(ed,{children:[ae(nd,{src:kC}),ae(td,{type:"text",value:"rafael"})]})]}),ze(il,{children:[ae(nl,{children:"Your e-mail:"}),ze(ed,{children:[ae(nd,{src:NC}),ae(td,{type:"text",value:"rafael@gamil.com"})]})]}),ze(il,{children:[ae(nl,{children:"Your password: "}),ze(ed,{children:[ae(nd,{src:OC}),ae(td,{type:"password"})]})]}),ze(il,{children:[ae(nl,{children:"Do you want to change password?"}),ae(Pn,{buttonWidth:"300px",buttonHeight:"40px",marginTop:"3px",children:"Make login to change password"})]})]}),ae(Pn,{buttonWidth:"200px",buttonBackground:"green",buttonHeight:"40px",children:"SAVE CHANGES"})]})}const VC=Me.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
`,GC=Me.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-bottom: 2px solid lightgray;
    width: 90%;
`,HC=Me.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 20px;
`,WC=Me.div`
    width: 90%;
`,Bn=Me.p`
    color: ${t=>t.textColor||"black"};
    margin-bottom: 10px;
    margin-top: 10px;
`,jC=Me.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
`;function $C(){return ae(VC,{children:ze(HC,{children:[ze(GC,{children:[ae(Bn,{children:"GENERAL INFORMATION: "}),ae(Bn,{children:"Number of quizzes created: 10"}),ae(Bn,{children:"Number of quizzes played: 50"}),ae(Bn,{children:"Number of answered questions: 100"}),ze(jC,{children:[ae(Bn,{textColor:"green",children:"Right: 90"}),ae(Bn,{textColor:"red",children:"Wrong: 10"})]})]}),ze(WC,{children:[ae(Bn,{children:"Created quizzes information: "}),ae(Bn,{children:"Number of users that have played your quizzes: 200"}),ae(Bn,{children:"Number of likes in your quizzes received: 150"}),ae(Bn,{children:"Number of right answers: 100"}),ae(Bn,{children:"Number of wrong answers: 200"})]})]})})}const XC="/assets/Line_Chart_icon-73f6d90a.png";function qC(){const[t,e]=He.useState(!0);return ze(qo,{children:[ae(Ru,{}),ze(xh,{children:[ae(DC,{children:ze(IC,{children:[ze(Fg,{onClick:()=>{e(!0)},children:[ae($n,{src:Z_,imgWidth:"30px",imgHeight:"30px"}),ae(Er,{children:"PROFILE"})]}),ze(Fg,{onClick:()=>{e(!1)},children:[ae($n,{src:XC,imgWidth:"30px",imgHeight:"30px"}),ae(Er,{children:"STATISTICS"})]})]})}),t?ae(BC,{}):ae($C,{})]})]})}const YC="/assets/kick_buto-3ecef320.png",KC=Me.div`
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`,ZC=Me.h1`
    color: black;
    margin: 5px;
`,QC=Me.h4`
    color: black;
`,JC=Me.img`
    width: 100px;
    height: 100px;
    margin: 0;
    position: absolute;
    top: 20px;
    right: 180px;
`;function eA({pointMade:t,maxPoints:e}){return ze(KC,{children:[ae(ZC,{children:"You rock!"}),ae(JC,{src:YC}),ze(QC,{children:["Congratulations my fella, you made ",t," of ",e," points"]}),ae(Pn,{children:"EXPLORE MORE!"})]})}const tA=Me.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`,nA=Me.button`
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
`,iA=Me.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`,rA=Me.h2`
    color: black;
`,oA=Me.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
`,sA=Me.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
`,aA=Me.div`
    background-color: ${t=>t.answerColor||"gray"};
    width: 100px;
    height: 10px;
    margin-right: 5px;
`;Me.p`
    color: black;
`;let dr=0,Bg=0;function lA({ListOfQuestions:t}){let e=new Array(t.length).fill("gray");e[0]="yellow";const[n,i]=He.useState(!1),[r,o]=He.useState(t[dr]),[s,a]=He.useState(e);function l(u){let d=[...s];r.options[u].iR===1?(d[dr]="green",Bg+=1):d[dr]="red",dr+=1,dr<t.length?(d[dr]="yellow",a(d),o(t[dr])):(a(d),i(!n))}return ze(tA,{children:[ae(oA,{children:ae(sA,{children:s.map((u,d)=>ae(aA,{answerColor:u},d))})}),n?ae(eA,{pointMade:Bg,maxPoints:t.length}):ze(xf,{children:[ae(rA,{children:r.question}),ae(iA,{children:r.options.map((u,d)=>ae(nA,{onClick:()=>{l(d)},children:u.text},d))})]})]})}function uA(){return ze(qo,{children:[ae(Ru,{}),ae(xh,{children:ae(u_,{children:ae(lA,{ListOfQuestions:{id:"sdj8vsib58",owner_id:"dofoi8sfw38",title:"Imagine one title here",number_of_questions:6,quiz_cover:null,number_of_players:12,questions:[{questions_image:null,question:"Who is the creator of naruto",options:[{text:"Masashi kishimoto",iR:1},{text:"Akira toriama",iR:0},{text:"junji ito",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the creator of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the sadsadas of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]},{questions_image:null,question:"Who is the creaasdasdasdtor of dragon ball",options:[{text:"matt groening",iR:1},{text:"Akira toriama",iR:0},{text:"steven morfat",iR:0},{text:"hajime yatate",iR:0}]}]}.questions})})})]})}const cA="/assets/right_arrow-00ade554.png",dA="/assets/left_arrow-8481ff3b.png";Me.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
`;Me.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
    
`;Me.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;const rl=Me.input`
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
`,fA=Me.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`,hA=Me.textarea`
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
`,pA=Me.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 70%;
`,Vg=Me.img`
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
`,mA=Me.button`
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
`,gA=Me.h3`
    color: black;
`;let Ii=-1;function vA(){const t={question:"",isDone:!1,options:[{text:"",iR:0},{text:"",iR:0},{text:"",iR:0},{text:"",iR:0}]},[e,n]=He.useState([]),[i,r]=He.useState(!1),[o,s]=He.useState(!1),[a,l]=He.useState(-1),[u,d]=He.useState(t);function f(x,p){s(!1),r(!1),l(-1);let h={...u},m=0;p<4?h.options[p]={text:x,isR:0}:h.question=x,d(h),h.options.forEach(v=>{v.text.length>0&&(m+=1)}),h.question.length>0&&m==4&&r(!0)}function c(){const x={...u};x.options[a].iR=1,x.isDone=!0,e.push(x),console.log(e),d(t),l(-1),r(!1),Ii==-1&&(Ii+=2)}function g(x){Ii+=x,Ii>=e.length?d(t):d(e[Ii])}return ze(qo,{children:[ae(Ru,{}),ze(xh,{children:[ae(Vg,{src:dA,Top:"50vh",Left:"30px",enabled:Ii>0?"all":"none",onClick:()=>{g(-1)}}),ae(Vg,{src:cA,Top:"50vh",Right:"30px",enabled:Ii<e.length&&Ii>-1?"all":"none",onClick:()=>{g(1)}}),ze(u_,{children:[ze(pA,{children:[ae(hA,{value:u.question,placeholder:"TYPE THE QUESTION HERE",maxLength:200,onChange:x=>{f(x.target.value,4)}}),ze(fA,{children:[ae(rl,{value:u.options[0].text,selected:a==0&&"green",placeholder:"FIRST OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,0)},onClick:()=>{i&&l(0),s(!0)}}),ae(rl,{value:u.options[1].text,selected:a==1&&"green",placeholder:"SECOND OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,1)},onClick:()=>{i&&l(1),s(!0)}}),ae(rl,{value:u.options[2].text,selected:a==2&&"green",placeholder:"THIRD OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,2)},onClick:()=>{i&&l(2),s(!0)}}),ae(rl,{value:u.options[3].text,selected:a==3&&"green",placeholder:"FOURTH OPTION HERE",maxLength:60,onChange:x=>{f(x.target.value,3)},onClick:()=>{i&&l(3),s(!0)}})]})]}),i&&ae(gA,{children:"select the options that is the right answer!"})]}),ae(mA,{onClick:()=>{o&&c()},children:"FINISH AND ADD QUESTION"})]})]})}$w([{path:"/",element:ae(Zw,{})},{path:"/login",element:ae(RC,{})},{path:"/signup",element:ae(TC,{})},{path:"/settings",element:ae(qC,{})},{path:"/playQuiz",element:ae(uA,{})},{path:"/createQuiz",element:ae(vA,{})}]);rd.createRoot(document.getElementById("root")).render(ae(xf,{children:ae("h1",{children:" olá"})}));
