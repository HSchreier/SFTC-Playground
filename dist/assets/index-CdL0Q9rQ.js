var m1=Object.defineProperty;var g1=(r,e,t)=>e in r?m1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var io=(r,e,t)=>g1(r,typeof e!="symbol"?e+"":e,t);function _1(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in r)){const a=Object.getOwnPropertyDescriptor(n,s);a&&Object.defineProperty(r,s,a.get?a:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Hy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Vy(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var s=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return r[n]}})}),t}var Rd={exports:{}},bl={},Pd={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function v1(){if(k0)return dt;k0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(z){return z===null||typeof z!="object"?null:(z=m&&z[m]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(z,ne,Ae){this.props=z,this.context=ne,this.refs=S,this.updater=Ae||x}y.prototype.isReactComponent={},y.prototype.setState=function(z,ne){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ne,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=y.prototype;function R(z,ne,Ae){this.props=z,this.context=ne,this.refs=S,this.updater=Ae||x}var P=R.prototype=new v;P.constructor=R,E(P,y.prototype),P.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function U(z,ne,Ae){var J,fe={},Me=null,ve=null;if(ne!=null)for(J in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)N.call(ne,J)&&!T.hasOwnProperty(J)&&(fe[J]=ne[J]);var Te=arguments.length-2;if(Te===1)fe.children=Ae;else if(1<Te){for(var Xe=Array(Te),Ve=0;Ve<Te;Ve++)Xe[Ve]=arguments[Ve+2];fe.children=Xe}if(z&&z.defaultProps)for(J in Te=z.defaultProps,Te)fe[J]===void 0&&(fe[J]=Te[J]);return{$$typeof:r,type:z,key:Me,ref:ve,props:fe,_owner:L.current}}function w(z,ne){return{$$typeof:r,type:z.type,key:ne,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function k(z){var ne={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ae){return ne[Ae]})}var $=/\/+/g;function G(z,ne){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ne.toString(36)}function ee(z,ne,Ae,J,fe){var Me=typeof z;(Me==="undefined"||Me==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case r:case e:ve=!0}}if(ve)return ve=z,fe=fe(ve),z=J===""?"."+G(ve,0):J,b(fe)?(Ae="",z!=null&&(Ae=z.replace($,"$&/")+"/"),ee(fe,ne,Ae,"",function(Ve){return Ve})):fe!=null&&(A(fe)&&(fe=w(fe,Ae+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace($,"$&/")+"/")+z)),ne.push(fe)),1;if(ve=0,J=J===""?".":J+":",b(z))for(var Te=0;Te<z.length;Te++){Me=z[Te];var Xe=J+G(Me,Te);ve+=ee(Me,ne,Ae,Xe,fe)}else if(Xe=g(z),typeof Xe=="function")for(z=Xe.call(z),Te=0;!(Me=z.next()).done;)Me=Me.value,Xe=J+G(Me,Te++),ve+=ee(Me,ne,Ae,Xe,fe);else if(Me==="object")throw ne=String(z),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function oe(z,ne,Ae){if(z==null)return z;var J=[],fe=0;return ee(z,J,"","",function(Me){return ne.call(Ae,Me,fe++)}),J}function K(z){if(z._status===-1){var ne=z._result;ne=ne(),ne.then(function(Ae){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ae)},function(Ae){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ae)}),z._status===-1&&(z._status=0,z._result=ne)}if(z._status===1)return z._result.default;throw z._result}var ce={current:null},B={transition:null},se={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:L};function le(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:oe,forEach:function(z,ne,Ae){oe(z,function(){ne.apply(this,arguments)},Ae)},count:function(z){var ne=0;return oe(z,function(){ne++}),ne},toArray:function(z){return oe(z,function(ne){return ne})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},dt.Component=y,dt.Fragment=t,dt.Profiler=s,dt.PureComponent=R,dt.StrictMode=n,dt.Suspense=f,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,dt.act=le,dt.cloneElement=function(z,ne,Ae){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var J=E({},z.props),fe=z.key,Me=z.ref,ve=z._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=L.current),ne.key!==void 0&&(fe=""+ne.key),z.type&&z.type.defaultProps)var Te=z.type.defaultProps;for(Xe in ne)N.call(ne,Xe)&&!T.hasOwnProperty(Xe)&&(J[Xe]=ne[Xe]===void 0&&Te!==void 0?Te[Xe]:ne[Xe])}var Xe=arguments.length-2;if(Xe===1)J.children=Ae;else if(1<Xe){Te=Array(Xe);for(var Ve=0;Ve<Xe;Ve++)Te[Ve]=arguments[Ve+2];J.children=Te}return{$$typeof:r,type:z.type,key:fe,ref:Me,props:J,_owner:ve}},dt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:a,_context:z},z.Consumer=z},dt.createElement=U,dt.createFactory=function(z){var ne=U.bind(null,z);return ne.type=z,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(z){return{$$typeof:c,render:z}},dt.isValidElement=A,dt.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:K}},dt.memo=function(z,ne){return{$$typeof:d,type:z,compare:ne===void 0?null:ne}},dt.startTransition=function(z){var ne=B.transition;B.transition={};try{z()}finally{B.transition=ne}},dt.unstable_act=le,dt.useCallback=function(z,ne){return ce.current.useCallback(z,ne)},dt.useContext=function(z){return ce.current.useContext(z)},dt.useDebugValue=function(){},dt.useDeferredValue=function(z){return ce.current.useDeferredValue(z)},dt.useEffect=function(z,ne){return ce.current.useEffect(z,ne)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(z,ne,Ae){return ce.current.useImperativeHandle(z,ne,Ae)},dt.useInsertionEffect=function(z,ne){return ce.current.useInsertionEffect(z,ne)},dt.useLayoutEffect=function(z,ne){return ce.current.useLayoutEffect(z,ne)},dt.useMemo=function(z,ne){return ce.current.useMemo(z,ne)},dt.useReducer=function(z,ne,Ae){return ce.current.useReducer(z,ne,Ae)},dt.useRef=function(z){return ce.current.useRef(z)},dt.useState=function(z){return ce.current.useState(z)},dt.useSyncExternalStore=function(z,ne,Ae){return ce.current.useSyncExternalStore(z,ne,Ae)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var z0;function Pm(){return z0||(z0=1,Pd.exports=v1()),Pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function y1(){if(B0)return bl;B0=1;var r=Pm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,d){var p,m={},g=null,x=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(x=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:g,ref:x,props:m,_owner:s.current}}return bl.Fragment=t,bl.jsx=u,bl.jsxs=u,bl}var H0;function x1(){return H0||(H0=1,Rd.exports=y1()),Rd.exports}var Is=x1(),zt=Pm();const Gy=Hy(zt),V0=_1({__proto__:null,default:Gy},[zt]);var bc={},Dd={exports:{}},li={},Ld={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function S1(){return G0||(G0=1,function(r){function e(B,se){var le=B.length;B.push(se);e:for(;0<le;){var z=le-1>>>1,ne=B[z];if(0<s(ne,se))B[z]=se,B[le]=ne,le=z;else break e}}function t(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var se=B[0],le=B.pop();if(le!==se){B[0]=le;e:for(var z=0,ne=B.length,Ae=ne>>>1;z<Ae;){var J=2*(z+1)-1,fe=B[J],Me=J+1,ve=B[Me];if(0>s(fe,le))Me<ne&&0>s(ve,fe)?(B[z]=ve,B[Me]=le,z=Me):(B[z]=fe,B[J]=le,z=J);else if(Me<ne&&0>s(ve,le))B[z]=ve,B[Me]=le,z=Me;else break e}}return se}function s(B,se){var le=B.sortIndex-se.sortIndex;return le!==0?le:B.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var f=[],d=[],p=1,m=null,g=3,x=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var se=t(d);se!==null;){if(se.callback===null)n(d);else if(se.startTime<=B)n(d),se.sortIndex=se.expirationTime,e(f,se);else break;se=t(d)}}function b(B){if(S=!1,P(B),!E)if(t(f)!==null)E=!0,K(N);else{var se=t(d);se!==null&&ce(b,se.startTime-B)}}function N(B,se){E=!1,S&&(S=!1,v(U),U=-1),x=!0;var le=g;try{for(P(se),m=t(f);m!==null&&(!(m.expirationTime>se)||B&&!k());){var z=m.callback;if(typeof z=="function"){m.callback=null,g=m.priorityLevel;var ne=z(m.expirationTime<=se);se=r.unstable_now(),typeof ne=="function"?m.callback=ne:m===t(f)&&n(f),P(se)}else n(f);m=t(f)}if(m!==null)var Ae=!0;else{var J=t(d);J!==null&&ce(b,J.startTime-se),Ae=!1}return Ae}finally{m=null,g=le,x=!1}}var L=!1,T=null,U=-1,w=5,A=-1;function k(){return!(r.unstable_now()-A<w)}function $(){if(T!==null){var B=r.unstable_now();A=B;var se=!0;try{se=T(!0,B)}finally{se?G():(L=!1,T=null)}}else L=!1}var G;if(typeof R=="function")G=function(){R($)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=$,G=function(){oe.postMessage(null)}}else G=function(){y($,0)};function K(B){T=B,L||(L=!0,G())}function ce(B,se){U=y(function(){B(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||x||(E=!0,K(N))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var le=g;g=se;try{return B()}finally{g=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,se){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=g;g=B;try{return se()}finally{g=le}},r.unstable_scheduleCallback=function(B,se,le){var z=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?z+le:z):le=z,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=le+ne,B={id:p++,callback:se,priorityLevel:B,startTime:le,expirationTime:ne,sortIndex:-1},le>z?(B.sortIndex=le,e(d,B),t(f)===null&&B===t(d)&&(S?(v(U),U=-1):S=!0,ce(b,le-z))):(B.sortIndex=ne,e(f,B),E||x||(E=!0,K(N))),B},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(B){var se=g;return function(){var le=g;g=se;try{return B.apply(this,arguments)}finally{g=le}}}}(Id)),Id}var W0;function M1(){return W0||(W0=1,Ld.exports=S1()),Ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function E1(){if(X0)return li;X0=1;var r=Pm(),e=M1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return f.call(m,i)?!0:f.call(p,i)?!1:d.test(i)?m[i]=!0:(p[i]=!0,!1)}function x(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,o,l,h){if(o===null||typeof o>"u"||x(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function S(i,o,l,h,_,M,C){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=_,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=M,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new S(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];y[o]=new S(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new S(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new S(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new S(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new S(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new S(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new S(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new S(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,o,l,h){var _=y.hasOwnProperty(o)?y[o]:null;(_!==null?_.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,_,h)&&(l=null),h||_===null?g(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):_.mustUseProperty?i[_.propertyName]=l===null?_.type===3?!1:"":l:(o=_.attributeName,h=_.attributeNamespace,l===null?i.removeAttribute(o):(_=_.type,l=_===3||_===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function se(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,z;function ne(i){if(z===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);z=o&&o[1]||""}return`
`+z+i}var Ae=!1;function J(i,o){if(!i||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(re){var h=re}Reflect.construct(i,[],o)}else{try{o.call()}catch(re){h=re}i.call(o.prototype)}else{try{throw Error()}catch(re){h=re}i()}}catch(re){if(re&&h&&typeof re.stack=="string"){for(var _=re.stack.split(`
`),M=h.stack.split(`
`),C=_.length-1,F=M.length-1;1<=C&&0<=F&&_[C]!==M[F];)F--;for(;1<=C&&0<=F;C--,F--)if(_[C]!==M[F]){if(C!==1||F!==1)do if(C--,F--,0>F||_[C]!==M[F]){var H=`
`+_[C].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=C&&0<=F);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ne(i):""}function fe(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=J(i.type,!1),i;case 11:return i=J(i.type.render,!1),i;case 1:return i=J(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case T:return"Fragment";case L:return"Portal";case w:return"Profiler";case U:return"StrictMode";case G:return"Suspense";case ee:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case $:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case oe:return o=i.displayName||null,o!==null?o:Me(i.type)||"Memo";case K:o=i._payload,i=i._init;try{return Me(i(o))}catch{}}return null}function ve(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(o);case 8:return o===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Xe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ve(i){var o=Xe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var _=l.get,M=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return _.call(this)},set:function(C){h=""+C,M.call(this,C)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function It(i){i._valueTracker||(i._valueTracker=Ve(i))}function Ut(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Xe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function ct(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Xn(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Te(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mt(i,o){o=o.checked,o!=null&&P(i,"checked",o,!1)}function ft(i,o){mt(i,o);var l=Te(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ct(i,o.type,l):o.hasOwnProperty("defaultValue")&&Ct(i,o.type,Te(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function je(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ct(i,o,l){(o!=="number"||ct(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ge=Array.isArray;function O(i,o,l,h){if(i=i.options,o){o={};for(var _=0;_<l.length;_++)o["$"+l[_]]=!0;for(l=0;l<i.length;l++)_=o.hasOwnProperty("$"+i[l].value),i[l].selected!==_&&(i[l].selected=_),_&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Te(l),o=null,_=0;_<i.length;_++){if(i[_].value===l){i[_].selected=!0,h&&(i[_].defaultSelected=!0);return}o!==null||i[_].disabled||(o=i[_])}o!==null&&(o.selected=!0)}}function D(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ie(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Ge(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Te(l)}}function de(i,o){var l=Te(o.value),h=Te(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function _e(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?he(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var be,qe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,_){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,_)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=be.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function $e(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(i){Ne.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ye[o]=ye[i]})});function Je(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ye.hasOwnProperty(i)&&ye[i]?(""+o).trim():o+"px"}function et(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,_=Je(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,_):i[l]=_}}var Oe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(i,o){if(o){if(Oe[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function it(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,ue=null,pe=null;function De(i){if(i=hl(i)){if(typeof Ce!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Vu(o),Ce(i.stateNode,i.type,o))}}function Pe(i){ue?pe?pe.push(i):pe=[i]:ue=i}function rt(){if(ue){var i=ue,o=pe;if(pe=ue=null,De(i),o)for(i=0;i<o.length;i++)De(o[i])}}function Ot(i,o){return i(o)}function dn(){}var xt=!1;function ni(i,o,l){if(xt)return i(o,l);xt=!0;try{return Ot(i,o,l)}finally{xt=!1,(ue!==null||pe!==null)&&(dn(),rt())}}function jn(i,o){var l=i.stateNode;if(l===null)return null;var h=Vu(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Po=!1;if(c)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Po=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Po=!1}function Tr(i,o,l,h,_,M,C,F,H){var re=Array.prototype.slice.call(arguments,3);try{o.apply(l,re)}catch(ge){this.onError(ge)}}var wr=!1,Gs=null,Ws=!1,ns=null,xu={onError:function(i){wr=!0,Gs=i}};function Do(i,o,l,h,_,M,C,F,H){wr=!1,Gs=null,Tr.apply(xu,arguments)}function Su(i,o,l,h,_,M,C,F,H){if(Do.apply(this,arguments),wr){if(wr){var re=Gs;wr=!1,Gs=null}else throw Error(t(198));Ws||(Ws=!0,ns=re)}}function sr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Mu(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Eu(i){if(sr(i)!==i)throw Error(t(188))}function Qf(i){var o=i.alternate;if(!o){if(o=sr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var _=l.return;if(_===null)break;var M=_.alternate;if(M===null){if(h=_.return,h!==null){l=h;continue}break}if(_.child===M.child){for(M=_.child;M;){if(M===l)return Eu(_),i;if(M===h)return Eu(_),o;M=M.sibling}throw Error(t(188))}if(l.return!==h.return)l=_,h=M;else{for(var C=!1,F=_.child;F;){if(F===l){C=!0,l=_,h=M;break}if(F===h){C=!0,h=_,l=M;break}F=F.sibling}if(!C){for(F=M.child;F;){if(F===l){C=!0,l=M,h=_;break}if(F===h){C=!0,h=M,l=_;break}F=F.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Tu(i){return i=Qf(i),i!==null?wu(i):null}function wu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=wu(i);if(o!==null)return o;i=i.sibling}return null}var Au=e.unstable_scheduleCallback,I=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ae=e.unstable_requestPaint,Q=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,ze=null;function _t(i){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,Qt=Math.log,Ht=Math.LN2;function yt(i){return i>>>=0,i===0?32:31-(Qt(i)/Ht|0)|0}var Ye=64,Jt=4194304;function gt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ln(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,_=i.suspendedLanes,M=i.pingedLanes,C=l&268435455;if(C!==0){var F=C&~_;F!==0?h=gt(F):(M&=C,M!==0&&(h=gt(M)))}else C=l&~_,C!==0?h=gt(C):M!==0&&(h=gt(M));if(h===0)return 0;if(o!==0&&o!==h&&(o&_)===0&&(_=h&-h,M=o&-o,_>=M||_===16&&(M&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-st(o),_=1<<l,h|=i[l],o&=~_;return h}function is(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,_=i.expirationTimes,M=i.pendingLanes;0<M;){var C=31-st(M),F=1<<C,H=_[C];H===-1?((F&l)===0||(F&h)!==0)&&(_[C]=is(F,o)):H<=o&&(i.expiredLanes|=F),M&=~F}}function Ar(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Dt(){var i=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),i}function In(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function yn(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-st(o),i[o]=l}function bn(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var _=31-st(l),M=1<<_;o[_]=0,h[_]=-1,i[_]=-1,l&=~M}}function xn(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-st(l),_=1<<h;_&o|i[h]&o&&(i[h]|=o),l&=~_}}var St=0;function or(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var _g,Jf,vg,yg,xg,eh=!1,bu=[],rs=null,ss=null,os=null,Ka=new Map,Za=new Map,as=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sg(i,o){switch(i){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Ka.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(o.pointerId)}}function Qa(i,o,l,h,_,M){return i===null||i.nativeEvent!==M?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:M,targetContainers:[_]},o!==null&&(o=hl(o),o!==null&&Jf(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,_!==null&&o.indexOf(_)===-1&&o.push(_),i)}function kS(i,o,l,h,_){switch(o){case"focusin":return rs=Qa(rs,i,o,l,h,_),!0;case"dragenter":return ss=Qa(ss,i,o,l,h,_),!0;case"mouseover":return os=Qa(os,i,o,l,h,_),!0;case"pointerover":var M=_.pointerId;return Ka.set(M,Qa(Ka.get(M)||null,i,o,l,h,_)),!0;case"gotpointercapture":return M=_.pointerId,Za.set(M,Qa(Za.get(M)||null,i,o,l,h,_)),!0}return!1}function Mg(i){var o=Xs(i.target);if(o!==null){var l=sr(o);if(l!==null){if(o=l.tag,o===13){if(o=Mu(l),o!==null){i.blockedOn=o,xg(i.priority,function(){vg(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Cu(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=nh(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);bt=h,l.target.dispatchEvent(h),bt=null}else return o=hl(l),o!==null&&Jf(o),i.blockedOn=l,!1;o.shift()}return!0}function Eg(i,o,l){Cu(i)&&l.delete(o)}function zS(){eh=!1,rs!==null&&Cu(rs)&&(rs=null),ss!==null&&Cu(ss)&&(ss=null),os!==null&&Cu(os)&&(os=null),Ka.forEach(Eg),Za.forEach(Eg)}function Ja(i,o){i.blockedOn===o&&(i.blockedOn=null,eh||(eh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zS)))}function el(i){function o(_){return Ja(_,i)}if(0<bu.length){Ja(bu[0],i);for(var l=1;l<bu.length;l++){var h=bu[l];h.blockedOn===i&&(h.blockedOn=null)}}for(rs!==null&&Ja(rs,i),ss!==null&&Ja(ss,i),os!==null&&Ja(os,i),Ka.forEach(o),Za.forEach(o),l=0;l<as.length;l++)h=as[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<as.length&&(l=as[0],l.blockedOn===null);)Mg(l),l.blockedOn===null&&as.shift()}var Lo=b.ReactCurrentBatchConfig,Ru=!0;function BS(i,o,l,h){var _=St,M=Lo.transition;Lo.transition=null;try{St=1,th(i,o,l,h)}finally{St=_,Lo.transition=M}}function HS(i,o,l,h){var _=St,M=Lo.transition;Lo.transition=null;try{St=4,th(i,o,l,h)}finally{St=_,Lo.transition=M}}function th(i,o,l,h){if(Ru){var _=nh(i,o,l,h);if(_===null)yh(i,o,h,Pu,l),Sg(i,h);else if(kS(_,i,o,l,h))h.stopPropagation();else if(Sg(i,h),o&4&&-1<FS.indexOf(i)){for(;_!==null;){var M=hl(_);if(M!==null&&_g(M),M=nh(i,o,l,h),M===null&&yh(i,o,h,Pu,l),M===_)break;_=M}_!==null&&h.stopPropagation()}else yh(i,o,h,null,l)}}var Pu=null;function nh(i,o,l,h){if(Pu=null,i=X(h),i=Xs(i),i!==null)if(o=sr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Mu(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Pu=i,null}function Tg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Se:return 1;case Re:return 4;case Le:case Fe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var ls=null,ih=null,Du=null;function wg(){if(Du)return Du;var i,o=ih,l=o.length,h,_="value"in ls?ls.value:ls.textContent,M=_.length;for(i=0;i<l&&o[i]===_[i];i++);var C=l-i;for(h=1;h<=C&&o[l-h]===_[M-h];h++);return Du=_.slice(i,1<h?1-h:void 0)}function Lu(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Iu(){return!0}function Ag(){return!1}function gi(i){function o(l,h,_,M,C){this._reactName=l,this._targetInst=_,this.type=h,this.nativeEvent=M,this.target=C,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(M):M[F]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Iu:Ag,this.isPropagationStopped=Ag,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),o}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=gi(Io),tl=le({},Io,{view:0,detail:0}),VS=gi(tl),sh,oh,nl,Uu=le({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==nl&&(nl&&i.type==="mousemove"?(sh=i.screenX-nl.screenX,oh=i.screenY-nl.screenY):oh=sh=0,nl=i),sh)},movementY:function(i){return"movementY"in i?i.movementY:oh}}),bg=gi(Uu),GS=le({},Uu,{dataTransfer:0}),WS=gi(GS),XS=le({},tl,{relatedTarget:0}),ah=gi(XS),jS=le({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=gi(jS),$S=le({},Io,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),qS=gi($S),KS=le({},Io,{data:0}),Cg=gi(KS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=JS[i])?!!o[i]:!1}function lh(){return eM}var tM=le({},tl,{key:function(i){if(i.key){var o=ZS[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Lu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?QS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(i){return i.type==="keypress"?Lu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Lu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),nM=gi(tM),iM=le({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rg=gi(iM),rM=le({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),sM=gi(rM),oM=le({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=gi(oM),lM=le({},Uu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=gi(lM),cM=[9,13,27,32],uh=c&&"CompositionEvent"in window,il=null;c&&"documentMode"in document&&(il=document.documentMode);var fM=c&&"TextEvent"in window&&!il,Pg=c&&(!uh||il&&8<il&&11>=il),Dg=" ",Lg=!1;function Ig(i,o){switch(i){case"keyup":return cM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Uo=!1;function hM(i,o){switch(i){case"compositionend":return Ug(o);case"keypress":return o.which!==32?null:(Lg=!0,Dg);case"textInput":return i=o.data,i===Dg&&Lg?null:i;default:return null}}function dM(i,o){if(Uo)return i==="compositionend"||!uh&&Ig(i,o)?(i=wg(),Du=ih=ls=null,Uo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Pg&&o.locale!=="ko"?null:o.data;default:return null}}var pM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!pM[i.type]:o==="textarea"}function Og(i,o,l,h){Pe(h),o=zu(o,"onChange"),0<o.length&&(l=new rh("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var rl=null,sl=null;function mM(i){e_(i,0)}function Nu(i){var o=zo(i);if(Ut(o))return i}function gM(i,o){if(i==="change")return o}var Fg=!1;if(c){var ch;if(c){var fh="oninput"in document;if(!fh){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),fh=typeof kg.oninput=="function"}ch=fh}else ch=!1;Fg=ch&&(!document.documentMode||9<document.documentMode)}function zg(){rl&&(rl.detachEvent("onpropertychange",Bg),sl=rl=null)}function Bg(i){if(i.propertyName==="value"&&Nu(sl)){var o=[];Og(o,sl,i,X(i)),ni(mM,o)}}function _M(i,o,l){i==="focusin"?(zg(),rl=o,sl=l,rl.attachEvent("onpropertychange",Bg)):i==="focusout"&&zg()}function vM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Nu(sl)}function yM(i,o){if(i==="click")return Nu(o)}function xM(i,o){if(i==="input"||i==="change")return Nu(o)}function SM(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ji=typeof Object.is=="function"?Object.is:SM;function ol(i,o){if(ji(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var _=l[h];if(!f.call(o,_)||!ji(i[_],o[_]))return!1}return!0}function Hg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Vg(i,o){var l=Hg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hg(l)}}function Gg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Gg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Wg(){for(var i=window,o=ct();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=ct(i.document)}return o}function hh(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function MM(i){var o=Wg(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Gg(l.ownerDocument.documentElement,l)){if(h!==null&&hh(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var _=l.textContent.length,M=Math.min(h.start,_);h=h.end===void 0?M:Math.min(h.end,_),!i.extend&&M>h&&(_=h,h=M,M=_),_=Vg(l,M);var C=Vg(l,h);_&&C&&(i.rangeCount!==1||i.anchorNode!==_.node||i.anchorOffset!==_.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(o=o.createRange(),o.setStart(_.node,_.offset),i.removeAllRanges(),M>h?(i.addRange(o),i.extend(C.node,C.offset)):(o.setEnd(C.node,C.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var EM=c&&"documentMode"in document&&11>=document.documentMode,No=null,dh=null,al=null,ph=!1;function Xg(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ph||No==null||No!==ct(h)||(h=No,"selectionStart"in h&&hh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),al&&ol(al,h)||(al=h,h=zu(dh,"onSelect"),0<h.length&&(o=new rh("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=No)))}function Ou(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Oo={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},mh={},jg={};c&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function Fu(i){if(mh[i])return mh[i];if(!Oo[i])return i;var o=Oo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in jg)return mh[i]=o[l];return i}var Yg=Fu("animationend"),$g=Fu("animationiteration"),qg=Fu("animationstart"),Kg=Fu("transitionend"),Zg=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(i,o){Zg.set(i,o),a(o,[i])}for(var gh=0;gh<Qg.length;gh++){var _h=Qg[gh],TM=_h.toLowerCase(),wM=_h[0].toUpperCase()+_h.slice(1);us(TM,"on"+wM)}us(Yg,"onAnimationEnd"),us($g,"onAnimationIteration"),us(qg,"onAnimationStart"),us("dblclick","onDoubleClick"),us("focusin","onFocus"),us("focusout","onBlur"),us(Kg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));function Jg(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Su(h,o,void 0,i),i.currentTarget=null}function e_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],_=h.event;h=h.listeners;e:{var M=void 0;if(o)for(var C=h.length-1;0<=C;C--){var F=h[C],H=F.instance,re=F.currentTarget;if(F=F.listener,H!==M&&_.isPropagationStopped())break e;Jg(_,F,re),M=H}else for(C=0;C<h.length;C++){if(F=h[C],H=F.instance,re=F.currentTarget,F=F.listener,H!==M&&_.isPropagationStopped())break e;Jg(_,F,re),M=H}}}if(Ws)throw i=ns,Ws=!1,ns=null,i}function Ft(i,o){var l=o[wh];l===void 0&&(l=o[wh]=new Set);var h=i+"__bubble";l.has(h)||(t_(o,i,2,!1),l.add(h))}function vh(i,o,l){var h=0;o&&(h|=4),t_(l,i,h,o)}var ku="_reactListening"+Math.random().toString(36).slice(2);function ul(i){if(!i[ku]){i[ku]=!0,n.forEach(function(l){l!=="selectionchange"&&(AM.has(l)||vh(l,!1,i),vh(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[ku]||(o[ku]=!0,vh("selectionchange",!1,o))}}function t_(i,o,l,h){switch(Tg(o)){case 1:var _=BS;break;case 4:_=HS;break;default:_=th}l=_.bind(null,o,l,i),_=void 0,!Po||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(_=!0),h?_!==void 0?i.addEventListener(o,l,{capture:!0,passive:_}):i.addEventListener(o,l,!0):_!==void 0?i.addEventListener(o,l,{passive:_}):i.addEventListener(o,l,!1)}function yh(i,o,l,h,_){var M=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var F=h.stateNode.containerInfo;if(F===_||F.nodeType===8&&F.parentNode===_)break;if(C===4)for(C=h.return;C!==null;){var H=C.tag;if((H===3||H===4)&&(H=C.stateNode.containerInfo,H===_||H.nodeType===8&&H.parentNode===_))return;C=C.return}for(;F!==null;){if(C=Xs(F),C===null)return;if(H=C.tag,H===5||H===6){h=M=C;continue e}F=F.parentNode}}h=h.return}ni(function(){var re=M,ge=X(l),xe=[];e:{var me=Zg.get(i);if(me!==void 0){var Ie=rh,ke=i;switch(i){case"keypress":if(Lu(l)===0)break e;case"keydown":case"keyup":Ie=nM;break;case"focusin":ke="focus",Ie=ah;break;case"focusout":ke="blur",Ie=ah;break;case"beforeblur":case"afterblur":Ie=ah;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=sM;break;case Yg:case $g:case qg:Ie=YS;break;case Kg:Ie=aM;break;case"scroll":Ie=VS;break;case"wheel":Ie=uM;break;case"copy":case"cut":case"paste":Ie=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Rg}var Be=(o&4)!==0,sn=!Be&&i==="scroll",Z=Be?me!==null?me+"Capture":null:me;Be=[];for(var W=re,te;W!==null;){te=W;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Z!==null&&(Ee=jn(W,Z),Ee!=null&&Be.push(cl(W,Ee,te)))),sn)break;W=W.return}0<Be.length&&(me=new Ie(me,ke,null,l,ge),xe.push({event:me,listeners:Be}))}}if((o&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",me&&l!==bt&&(ke=l.relatedTarget||l.fromElement)&&(Xs(ke)||ke[br]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=l.relatedTarget||l.toElement,Ie=re,ke=ke?Xs(ke):null,ke!==null&&(sn=sr(ke),ke!==sn||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=re),Ie!==ke)){if(Be=bg,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Be=Rg,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),sn=Ie==null?me:zo(Ie),te=ke==null?me:zo(ke),me=new Be(Ee,W+"leave",Ie,l,ge),me.target=sn,me.relatedTarget=te,Ee=null,Xs(ge)===re&&(Be=new Be(Z,W+"enter",ke,l,ge),Be.target=te,Be.relatedTarget=sn,Ee=Be),sn=Ee,Ie&&ke)t:{for(Be=Ie,Z=ke,W=0,te=Be;te;te=Fo(te))W++;for(te=0,Ee=Z;Ee;Ee=Fo(Ee))te++;for(;0<W-te;)Be=Fo(Be),W--;for(;0<te-W;)Z=Fo(Z),te--;for(;W--;){if(Be===Z||Z!==null&&Be===Z.alternate)break t;Be=Fo(Be),Z=Fo(Z)}Be=null}else Be=null;Ie!==null&&n_(xe,me,Ie,Be,!1),ke!==null&&sn!==null&&n_(xe,sn,ke,Be,!0)}}e:{if(me=re?zo(re):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var We=gM;else if(Ng(me))if(Fg)We=xM;else{We=vM;var Ke=_M}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=yM);if(We&&(We=We(i,re))){Og(xe,We,l,ge);break e}Ke&&Ke(i,me,re),i==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch(Ke=re?zo(re):window,i){case"focusin":(Ng(Ke)||Ke.contentEditable==="true")&&(No=Ke,dh=re,al=null);break;case"focusout":al=dh=No=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Xg(xe,l,ge);break;case"selectionchange":if(EM)break;case"keydown":case"keyup":Xg(xe,l,ge)}var Ze;if(uh)e:{switch(i){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Uo?Ig(i,l)&&(nt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(Pg&&l.locale!=="ko"&&(Uo||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Uo&&(Ze=wg()):(ls=ge,ih="value"in ls?ls.value:ls.textContent,Uo=!0)),Ke=zu(re,nt),0<Ke.length&&(nt=new Cg(nt,i,null,l,ge),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Ug(l),Ze!==null&&(nt.data=Ze)))),(Ze=fM?hM(i,l):dM(i,l))&&(re=zu(re,"onBeforeInput"),0<re.length&&(ge=new Cg("onBeforeInput","beforeinput",null,l,ge),xe.push({event:ge,listeners:re}),ge.data=Ze))}e_(xe,o)})}function cl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function zu(i,o){for(var l=o+"Capture",h=[];i!==null;){var _=i,M=_.stateNode;_.tag===5&&M!==null&&(_=M,M=jn(i,l),M!=null&&h.unshift(cl(i,M,_)),M=jn(i,o),M!=null&&h.push(cl(i,M,_))),i=i.return}return h}function Fo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function n_(i,o,l,h,_){for(var M=o._reactName,C=[];l!==null&&l!==h;){var F=l,H=F.alternate,re=F.stateNode;if(H!==null&&H===h)break;F.tag===5&&re!==null&&(F=re,_?(H=jn(l,M),H!=null&&C.unshift(cl(l,H,F))):_||(H=jn(l,M),H!=null&&C.push(cl(l,H,F)))),l=l.return}C.length!==0&&i.push({event:o,listeners:C})}var bM=/\r\n?/g,CM=/\u0000|\uFFFD/g;function i_(i){return(typeof i=="string"?i:""+i).replace(bM,`
`).replace(CM,"")}function Bu(i,o,l){if(o=i_(o),i_(i)!==o&&l)throw Error(t(425))}function Hu(){}var xh=null,Sh=null;function Mh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,PM=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(i){return r_.resolve(null).then(i).catch(DM)}:Eh;function DM(i){setTimeout(function(){throw i})}function Th(i,o){var l=o,h=0;do{var _=l.nextSibling;if(i.removeChild(l),_&&_.nodeType===8)if(l=_.data,l==="/$"){if(h===0){i.removeChild(_),el(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=_}while(l);el(o)}function cs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function s_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ko=Math.random().toString(36).slice(2),ar="__reactFiber$"+ko,fl="__reactProps$"+ko,br="__reactContainer$"+ko,wh="__reactEvents$"+ko,LM="__reactListeners$"+ko,IM="__reactHandles$"+ko;function Xs(i){var o=i[ar];if(o)return o;for(var l=i.parentNode;l;){if(o=l[br]||l[ar]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=s_(i);i!==null;){if(l=i[ar])return l;i=s_(i)}return o}i=l,l=i.parentNode}return null}function hl(i){return i=i[ar]||i[br],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function zo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Vu(i){return i[fl]||null}var Ah=[],Bo=-1;function fs(i){return{current:i}}function kt(i){0>Bo||(i.current=Ah[Bo],Ah[Bo]=null,Bo--)}function Nt(i,o){Bo++,Ah[Bo]=i.current,i.current=o}var hs={},Un=fs(hs),ii=fs(!1),js=hs;function Ho(i,o){var l=i.type.contextTypes;if(!l)return hs;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var _={},M;for(M in l)_[M]=o[M];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=_),_}function ri(i){return i=i.childContextTypes,i!=null}function Gu(){kt(ii),kt(Un)}function o_(i,o,l){if(Un.current!==hs)throw Error(t(168));Nt(Un,o),Nt(ii,l)}function a_(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var _ in h)if(!(_ in o))throw Error(t(108,ve(i)||"Unknown",_));return le({},l,h)}function Wu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||hs,js=Un.current,Nt(Un,i),Nt(ii,ii.current),!0}function l_(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=a_(i,o,js),h.__reactInternalMemoizedMergedChildContext=i,kt(ii),kt(Un),Nt(Un,i)):kt(ii),Nt(ii,l)}var Cr=null,Xu=!1,bh=!1;function u_(i){Cr===null?Cr=[i]:Cr.push(i)}function UM(i){Xu=!0,u_(i)}function ds(){if(!bh&&Cr!==null){bh=!0;var i=0,o=St;try{var l=Cr;for(St=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Cr=null,Xu=!1}catch(_){throw Cr!==null&&(Cr=Cr.slice(i+1)),Au(Se,ds),_}finally{St=o,bh=!1}}return null}var Vo=[],Go=0,ju=null,Yu=0,Li=[],Ii=0,Ys=null,Rr=1,Pr="";function $s(i,o){Vo[Go++]=Yu,Vo[Go++]=ju,ju=i,Yu=o}function c_(i,o,l){Li[Ii++]=Rr,Li[Ii++]=Pr,Li[Ii++]=Ys,Ys=i;var h=Rr;i=Pr;var _=32-st(h)-1;h&=~(1<<_),l+=1;var M=32-st(o)+_;if(30<M){var C=_-_%5;M=(h&(1<<C)-1).toString(32),h>>=C,_-=C,Rr=1<<32-st(o)+_|l<<_|h,Pr=M+i}else Rr=1<<M|l<<_|h,Pr=i}function Ch(i){i.return!==null&&($s(i,1),c_(i,1,0))}function Rh(i){for(;i===ju;)ju=Vo[--Go],Vo[Go]=null,Yu=Vo[--Go],Vo[Go]=null;for(;i===Ys;)Ys=Li[--Ii],Li[Ii]=null,Pr=Li[--Ii],Li[Ii]=null,Rr=Li[--Ii],Li[Ii]=null}var _i=null,vi=null,Vt=!1,Yi=null;function f_(i,o){var l=Fi(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function h_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,_i=i,vi=cs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,_i=i,vi=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ys!==null?{id:Rr,overflow:Pr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Fi(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,_i=i,vi=null,!0):!1;default:return!1}}function Ph(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Dh(i){if(Vt){var o=vi;if(o){var l=o;if(!h_(i,o)){if(Ph(i))throw Error(t(418));o=cs(l.nextSibling);var h=_i;o&&h_(i,o)?f_(h,l):(i.flags=i.flags&-4097|2,Vt=!1,_i=i)}}else{if(Ph(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,_i=i}}}function d_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;_i=i}function $u(i){if(i!==_i)return!1;if(!Vt)return d_(i),Vt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Mh(i.type,i.memoizedProps)),o&&(o=vi)){if(Ph(i))throw p_(),Error(t(418));for(;o;)f_(i,o),o=cs(o.nextSibling)}if(d_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){vi=cs(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}vi=null}}else vi=_i?cs(i.stateNode.nextSibling):null;return!0}function p_(){for(var i=vi;i;)i=cs(i.nextSibling)}function Wo(){vi=_i=null,Vt=!1}function Lh(i){Yi===null?Yi=[i]:Yi.push(i)}var NM=b.ReactCurrentBatchConfig;function dl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var _=h,M=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(C){var F=_.refs;C===null?delete F[M]:F[M]=C},o._stringRef=M,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function qu(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function m_(i){var o=i._init;return o(i._payload)}function g_(i){function o(Z,W){if(i){var te=Z.deletions;te===null?(Z.deletions=[W],Z.flags|=16):te.push(W)}}function l(Z,W){if(!i)return null;for(;W!==null;)o(Z,W),W=W.sibling;return null}function h(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function _(Z,W){return Z=Ss(Z,W),Z.index=0,Z.sibling=null,Z}function M(Z,W,te){return Z.index=te,i?(te=Z.alternate,te!==null?(te=te.index,te<W?(Z.flags|=2,W):te):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function C(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,W,te,Ee){return W===null||W.tag!==6?(W=Ed(te,Z.mode,Ee),W.return=Z,W):(W=_(W,te),W.return=Z,W)}function H(Z,W,te,Ee){var We=te.type;return We===T?ge(Z,W,te.props.children,Ee,te.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&m_(We)===W.type)?(Ee=_(W,te.props),Ee.ref=dl(Z,W,te),Ee.return=Z,Ee):(Ee=yc(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=dl(Z,W,te),Ee.return=Z,Ee)}function re(Z,W,te,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Td(te,Z.mode,Ee),W.return=Z,W):(W=_(W,te.children||[]),W.return=Z,W)}function ge(Z,W,te,Ee,We){return W===null||W.tag!==7?(W=no(te,Z.mode,Ee,We),W.return=Z,W):(W=_(W,te),W.return=Z,W)}function xe(Z,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ed(""+W,Z.mode,te),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return te=yc(W.type,W.key,W.props,null,Z.mode,te),te.ref=dl(Z,null,W),te.return=Z,te;case L:return W=Td(W,Z.mode,te),W.return=Z,W;case K:var Ee=W._init;return xe(Z,Ee(W._payload),te)}if(Ge(W)||se(W))return W=no(W,Z.mode,te,null),W.return=Z,W;qu(Z,W)}return null}function me(Z,W,te,Ee){var We=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return We!==null?null:F(Z,W,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===We?H(Z,W,te,Ee):null;case L:return te.key===We?re(Z,W,te,Ee):null;case K:return We=te._init,me(Z,W,We(te._payload),Ee)}if(Ge(te)||se(te))return We!==null?null:ge(Z,W,te,Ee,null);qu(Z,te)}return null}function Ie(Z,W,te,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(te)||null,F(W,Z,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case N:return Z=Z.get(Ee.key===null?te:Ee.key)||null,H(W,Z,Ee,We);case L:return Z=Z.get(Ee.key===null?te:Ee.key)||null,re(W,Z,Ee,We);case K:var Ke=Ee._init;return Ie(Z,W,te,Ke(Ee._payload),We)}if(Ge(Ee)||se(Ee))return Z=Z.get(te)||null,ge(W,Z,Ee,We,null);qu(W,Ee)}return null}function ke(Z,W,te,Ee){for(var We=null,Ke=null,Ze=W,nt=W=0,En=null;Ze!==null&&nt<te.length;nt++){Ze.index>nt?(En=Ze,Ze=null):En=Ze.sibling;var Et=me(Z,Ze,te[nt],Ee);if(Et===null){Ze===null&&(Ze=En);break}i&&Ze&&Et.alternate===null&&o(Z,Ze),W=M(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et,Ze=En}if(nt===te.length)return l(Z,Ze),Vt&&$s(Z,nt),We;if(Ze===null){for(;nt<te.length;nt++)Ze=xe(Z,te[nt],Ee),Ze!==null&&(W=M(Ze,W,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Vt&&$s(Z,nt),We}for(Ze=h(Z,Ze);nt<te.length;nt++)En=Ie(Ze,Z,nt,te[nt],Ee),En!==null&&(i&&En.alternate!==null&&Ze.delete(En.key===null?nt:En.key),W=M(En,W,nt),Ke===null?We=En:Ke.sibling=En,Ke=En);return i&&Ze.forEach(function(Ms){return o(Z,Ms)}),Vt&&$s(Z,nt),We}function Be(Z,W,te,Ee){var We=se(te);if(typeof We!="function")throw Error(t(150));if(te=We.call(te),te==null)throw Error(t(151));for(var Ke=We=null,Ze=W,nt=W=0,En=null,Et=te.next();Ze!==null&&!Et.done;nt++,Et=te.next()){Ze.index>nt?(En=Ze,Ze=null):En=Ze.sibling;var Ms=me(Z,Ze,Et.value,Ee);if(Ms===null){Ze===null&&(Ze=En);break}i&&Ze&&Ms.alternate===null&&o(Z,Ze),W=M(Ms,W,nt),Ke===null?We=Ms:Ke.sibling=Ms,Ke=Ms,Ze=En}if(Et.done)return l(Z,Ze),Vt&&$s(Z,nt),We;if(Ze===null){for(;!Et.done;nt++,Et=te.next())Et=xe(Z,Et.value,Ee),Et!==null&&(W=M(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return Vt&&$s(Z,nt),We}for(Ze=h(Z,Ze);!Et.done;nt++,Et=te.next())Et=Ie(Ze,Z,nt,Et.value,Ee),Et!==null&&(i&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),W=M(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return i&&Ze.forEach(function(p1){return o(Z,p1)}),Vt&&$s(Z,nt),We}function sn(Z,W,te,Ee){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var We=te.key,Ke=W;Ke!==null;){if(Ke.key===We){if(We=te.type,We===T){if(Ke.tag===7){l(Z,Ke.sibling),W=_(Ke,te.props.children),W.return=Z,Z=W;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&m_(We)===Ke.type){l(Z,Ke.sibling),W=_(Ke,te.props),W.ref=dl(Z,Ke,te),W.return=Z,Z=W;break e}l(Z,Ke);break}else o(Z,Ke);Ke=Ke.sibling}te.type===T?(W=no(te.props.children,Z.mode,Ee,te.key),W.return=Z,Z=W):(Ee=yc(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=dl(Z,W,te),Ee.return=Z,Z=Ee)}return C(Z);case L:e:{for(Ke=te.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){l(Z,W.sibling),W=_(W,te.children||[]),W.return=Z,Z=W;break e}else{l(Z,W);break}else o(Z,W);W=W.sibling}W=Td(te,Z.mode,Ee),W.return=Z,Z=W}return C(Z);case K:return Ke=te._init,sn(Z,W,Ke(te._payload),Ee)}if(Ge(te))return ke(Z,W,te,Ee);if(se(te))return Be(Z,W,te,Ee);qu(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(l(Z,W.sibling),W=_(W,te),W.return=Z,Z=W):(l(Z,W),W=Ed(te,Z.mode,Ee),W.return=Z,Z=W),C(Z)):l(Z,W)}return sn}var Xo=g_(!0),__=g_(!1),Ku=fs(null),Zu=null,jo=null,Ih=null;function Uh(){Ih=jo=Zu=null}function Nh(i){var o=Ku.current;kt(Ku),i._currentValue=o}function Oh(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Yo(i,o){Zu=i,Ih=jo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(si=!0),i.firstContext=null)}function Ui(i){var o=i._currentValue;if(Ih!==i)if(i={context:i,memoizedValue:o,next:null},jo===null){if(Zu===null)throw Error(t(308));jo=i,Zu.dependencies={lanes:0,firstContext:i}}else jo=jo.next=i;return o}var qs=null;function Fh(i){qs===null?qs=[i]:qs.push(i)}function v_(i,o,l,h){var _=o.interleaved;return _===null?(l.next=l,Fh(o)):(l.next=_.next,_.next=l),o.interleaved=l,Dr(i,h)}function Dr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ps=!1;function kh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Lr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ms(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Mt&2)!==0){var _=h.pending;return _===null?o.next=o:(o.next=_.next,_.next=o),h.pending=o,Dr(i,l)}return _=h.interleaved,_===null?(o.next=o,Fh(h)):(o.next=_.next,_.next=o),h.interleaved=o,Dr(i,l)}function Qu(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,xn(i,l)}}function x_(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var _=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?_=M=C:M=M.next=C,l=l.next}while(l!==null);M===null?_=M=o:M=M.next=o}else _=M=o;l={baseState:h.baseState,firstBaseUpdate:_,lastBaseUpdate:M,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Ju(i,o,l,h){var _=i.updateQueue;ps=!1;var M=_.firstBaseUpdate,C=_.lastBaseUpdate,F=_.shared.pending;if(F!==null){_.shared.pending=null;var H=F,re=H.next;H.next=null,C===null?M=re:C.next=re,C=H;var ge=i.alternate;ge!==null&&(ge=ge.updateQueue,F=ge.lastBaseUpdate,F!==C&&(F===null?ge.firstBaseUpdate=re:F.next=re,ge.lastBaseUpdate=H))}if(M!==null){var xe=_.baseState;C=0,ge=re=H=null,F=M;do{var me=F.lane,Ie=F.eventTime;if((h&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var ke=i,Be=F;switch(me=o,Ie=l,Be.tag){case 1:if(ke=Be.payload,typeof ke=="function"){xe=ke.call(Ie,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Be.payload,me=typeof ke=="function"?ke.call(Ie,xe,me):ke,me==null)break e;xe=le({},xe,me);break e;case 2:ps=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,me=_.effects,me===null?_.effects=[F]:me.push(F))}else Ie={eventTime:Ie,lane:me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ge===null?(re=ge=Ie,H=xe):ge=ge.next=Ie,C|=me;if(F=F.next,F===null){if(F=_.shared.pending,F===null)break;me=F,F=me.next,me.next=null,_.lastBaseUpdate=me,_.shared.pending=null}}while(!0);if(ge===null&&(H=xe),_.baseState=H,_.firstBaseUpdate=re,_.lastBaseUpdate=ge,o=_.shared.interleaved,o!==null){_=o;do C|=_.lane,_=_.next;while(_!==o)}else M===null&&(_.shared.lanes=0);Qs|=C,i.lanes=C,i.memoizedState=xe}}function S_(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],_=h.callback;if(_!==null){if(h.callback=null,h=l,typeof _!="function")throw Error(t(191,_));_.call(h)}}}var pl={},lr=fs(pl),ml=fs(pl),gl=fs(pl);function Ks(i){if(i===pl)throw Error(t(174));return i}function zh(i,o){switch(Nt(gl,o),Nt(ml,i),Nt(lr,pl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:He(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=He(o,i)}kt(lr),Nt(lr,o)}function $o(){kt(lr),kt(ml),kt(gl)}function M_(i){Ks(gl.current);var o=Ks(lr.current),l=He(o,i.type);o!==l&&(Nt(ml,i),Nt(lr,l))}function Bh(i){ml.current===i&&(kt(lr),kt(ml))}var jt=fs(0);function ec(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Hh=[];function Vh(){for(var i=0;i<Hh.length;i++)Hh[i]._workInProgressVersionPrimary=null;Hh.length=0}var tc=b.ReactCurrentDispatcher,Gh=b.ReactCurrentBatchConfig,Zs=0,Yt=null,pn=null,Sn=null,nc=!1,_l=!1,vl=0,OM=0;function Nn(){throw Error(t(321))}function Wh(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!ji(i[l],o[l]))return!1;return!0}function Xh(i,o,l,h,_,M){if(Zs=M,Yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,tc.current=i===null||i.memoizedState===null?BM:HM,i=l(h,_),_l){M=0;do{if(_l=!1,vl=0,25<=M)throw Error(t(301));M+=1,Sn=pn=null,o.updateQueue=null,tc.current=VM,i=l(h,_)}while(_l)}if(tc.current=sc,o=pn!==null&&pn.next!==null,Zs=0,Sn=pn=Yt=null,nc=!1,o)throw Error(t(300));return i}function jh(){var i=vl!==0;return vl=0,i}function ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Yt.memoizedState=Sn=i:Sn=Sn.next=i,Sn}function Ni(){if(pn===null){var i=Yt.alternate;i=i!==null?i.memoizedState:null}else i=pn.next;var o=Sn===null?Yt.memoizedState:Sn.next;if(o!==null)Sn=o,pn=i;else{if(i===null)throw Error(t(310));pn=i,i={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Sn===null?Yt.memoizedState=Sn=i:Sn=Sn.next=i}return Sn}function yl(i,o){return typeof o=="function"?o(i):o}function Yh(i){var o=Ni(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=pn,_=h.baseQueue,M=l.pending;if(M!==null){if(_!==null){var C=_.next;_.next=M.next,M.next=C}h.baseQueue=_=M,l.pending=null}if(_!==null){M=_.next,h=h.baseState;var F=C=null,H=null,re=M;do{var ge=re.lane;if((Zs&ge)===ge)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),h=re.hasEagerState?re.eagerState:i(h,re.action);else{var xe={lane:ge,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(F=H=xe,C=h):H=H.next=xe,Yt.lanes|=ge,Qs|=ge}re=re.next}while(re!==null&&re!==M);H===null?C=h:H.next=F,ji(h,o.memoizedState)||(si=!0),o.memoizedState=h,o.baseState=C,o.baseQueue=H,l.lastRenderedState=h}if(i=l.interleaved,i!==null){_=i;do M=_.lane,Yt.lanes|=M,Qs|=M,_=_.next;while(_!==i)}else _===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function $h(i){var o=Ni(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,_=l.pending,M=o.memoizedState;if(_!==null){l.pending=null;var C=_=_.next;do M=i(M,C.action),C=C.next;while(C!==_);ji(M,o.memoizedState)||(si=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),l.lastRenderedState=M}return[M,h]}function E_(){}function T_(i,o){var l=Yt,h=Ni(),_=o(),M=!ji(h.memoizedState,_);if(M&&(h.memoizedState=_,si=!0),h=h.queue,qh(b_.bind(null,l,h,i),[i]),h.getSnapshot!==o||M||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,xl(9,A_.bind(null,l,h,_,o),void 0,null),Mn===null)throw Error(t(349));(Zs&30)!==0||w_(l,o,_)}return _}function w_(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function A_(i,o,l,h){o.value=l,o.getSnapshot=h,C_(o)&&R_(i)}function b_(i,o,l){return l(function(){C_(o)&&R_(i)})}function C_(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!ji(i,l)}catch{return!0}}function R_(i){var o=Dr(i,1);o!==null&&Zi(o,i,1,-1)}function P_(i){var o=ur();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:i},o.queue=i,i=i.dispatch=zM.bind(null,Yt,i),[o.memoizedState,i]}function xl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function D_(){return Ni().memoizedState}function ic(i,o,l,h){var _=ur();Yt.flags|=i,_.memoizedState=xl(1|o,l,void 0,h===void 0?null:h)}function rc(i,o,l,h){var _=Ni();h=h===void 0?null:h;var M=void 0;if(pn!==null){var C=pn.memoizedState;if(M=C.destroy,h!==null&&Wh(h,C.deps)){_.memoizedState=xl(o,l,M,h);return}}Yt.flags|=i,_.memoizedState=xl(1|o,l,M,h)}function L_(i,o){return ic(8390656,8,i,o)}function qh(i,o){return rc(2048,8,i,o)}function I_(i,o){return rc(4,2,i,o)}function U_(i,o){return rc(4,4,i,o)}function N_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function O_(i,o,l){return l=l!=null?l.concat([i]):null,rc(4,4,N_.bind(null,o,i),l)}function Kh(){}function F_(i,o){var l=Ni();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Wh(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function k_(i,o){var l=Ni();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Wh(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function z_(i,o,l){return(Zs&21)===0?(i.baseState&&(i.baseState=!1,si=!0),i.memoizedState=l):(ji(l,o)||(l=Dt(),Yt.lanes|=l,Qs|=l,i.baseState=!0),o)}function FM(i,o){var l=St;St=l!==0&&4>l?l:4,i(!0);var h=Gh.transition;Gh.transition={};try{i(!1),o()}finally{St=l,Gh.transition=h}}function B_(){return Ni().memoizedState}function kM(i,o,l){var h=ys(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},H_(i))V_(o,l);else if(l=v_(i,o,l,h),l!==null){var _=qn();Zi(l,i,h,_),G_(l,o,h)}}function zM(i,o,l){var h=ys(i),_={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(H_(i))V_(o,_);else{var M=i.alternate;if(i.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var C=o.lastRenderedState,F=M(C,l);if(_.hasEagerState=!0,_.eagerState=F,ji(F,C)){var H=o.interleaved;H===null?(_.next=_,Fh(o)):(_.next=H.next,H.next=_),o.interleaved=_;return}}catch{}finally{}l=v_(i,o,_,h),l!==null&&(_=qn(),Zi(l,i,h,_),G_(l,o,h))}}function H_(i){var o=i.alternate;return i===Yt||o!==null&&o===Yt}function V_(i,o){_l=nc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function G_(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,xn(i,l)}}var sc={readContext:Ui,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},BM={readContext:Ui,useCallback:function(i,o){return ur().memoizedState=[i,o===void 0?null:o],i},useContext:Ui,useEffect:L_,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,ic(4194308,4,N_.bind(null,o,i),l)},useLayoutEffect:function(i,o){return ic(4194308,4,i,o)},useInsertionEffect:function(i,o){return ic(4,2,i,o)},useMemo:function(i,o){var l=ur();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=ur();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=kM.bind(null,Yt,i),[h.memoizedState,i]},useRef:function(i){var o=ur();return i={current:i},o.memoizedState=i},useState:P_,useDebugValue:Kh,useDeferredValue:function(i){return ur().memoizedState=i},useTransition:function(){var i=P_(!1),o=i[0];return i=FM.bind(null,i[1]),ur().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=Yt,_=ur();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Mn===null)throw Error(t(349));(Zs&30)!==0||w_(h,o,l)}_.memoizedState=l;var M={value:l,getSnapshot:o};return _.queue=M,L_(b_.bind(null,h,M,i),[i]),h.flags|=2048,xl(9,A_.bind(null,h,M,l,o),void 0,null),l},useId:function(){var i=ur(),o=Mn.identifierPrefix;if(Vt){var l=Pr,h=Rr;l=(h&~(1<<32-st(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=OM++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},HM={readContext:Ui,useCallback:F_,useContext:Ui,useEffect:qh,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:U_,useMemo:k_,useReducer:Yh,useRef:D_,useState:function(){return Yh(yl)},useDebugValue:Kh,useDeferredValue:function(i){var o=Ni();return z_(o,pn.memoizedState,i)},useTransition:function(){var i=Yh(yl)[0],o=Ni().memoizedState;return[i,o]},useMutableSource:E_,useSyncExternalStore:T_,useId:B_,unstable_isNewReconciler:!1},VM={readContext:Ui,useCallback:F_,useContext:Ui,useEffect:qh,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:U_,useMemo:k_,useReducer:$h,useRef:D_,useState:function(){return $h(yl)},useDebugValue:Kh,useDeferredValue:function(i){var o=Ni();return pn===null?o.memoizedState=i:z_(o,pn.memoizedState,i)},useTransition:function(){var i=$h(yl)[0],o=Ni().memoizedState;return[i,o]},useMutableSource:E_,useSyncExternalStore:T_,useId:B_,unstable_isNewReconciler:!1};function $i(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Zh(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var oc={isMounted:function(i){return(i=i._reactInternals)?sr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=qn(),_=ys(i),M=Lr(h,_);M.payload=o,l!=null&&(M.callback=l),o=ms(i,M,_),o!==null&&(Zi(o,i,_,h),Qu(o,i,_))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=qn(),_=ys(i),M=Lr(h,_);M.tag=1,M.payload=o,l!=null&&(M.callback=l),o=ms(i,M,_),o!==null&&(Zi(o,i,_,h),Qu(o,i,_))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=qn(),h=ys(i),_=Lr(l,h);_.tag=2,o!=null&&(_.callback=o),o=ms(i,_,h),o!==null&&(Zi(o,i,h,l),Qu(o,i,h))}};function W_(i,o,l,h,_,M,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,M,C):o.prototype&&o.prototype.isPureReactComponent?!ol(l,h)||!ol(_,M):!0}function X_(i,o,l){var h=!1,_=hs,M=o.contextType;return typeof M=="object"&&M!==null?M=Ui(M):(_=ri(o)?js:Un.current,h=o.contextTypes,M=(h=h!=null)?Ho(i,_):hs),o=new o(l,M),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=oc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=_,i.__reactInternalMemoizedMaskedChildContext=M),o}function j_(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&oc.enqueueReplaceState(o,o.state,null)}function Qh(i,o,l,h){var _=i.stateNode;_.props=l,_.state=i.memoizedState,_.refs={},kh(i);var M=o.contextType;typeof M=="object"&&M!==null?_.context=Ui(M):(M=ri(o)?js:Un.current,_.context=Ho(i,M)),_.state=i.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Zh(i,o,M,l),_.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(o=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),o!==_.state&&oc.enqueueReplaceState(_,_.state,null),Ju(i,l,_,h),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308)}function qo(i,o){try{var l="",h=o;do l+=fe(h),h=h.return;while(h);var _=l}catch(M){_=`
Error generating stack: `+M.message+`
`+M.stack}return{value:i,source:o,stack:_,digest:null}}function Jh(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function ed(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var GM=typeof WeakMap=="function"?WeakMap:Map;function Y_(i,o,l){l=Lr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){dc||(dc=!0,md=h),ed(i,o)},l}function $_(i,o,l){l=Lr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var _=o.value;l.payload=function(){return h(_)},l.callback=function(){ed(i,o)}}var M=i.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){ed(i,o),typeof h!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})}),l}function q_(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new GM;var _=new Set;h.set(o,_)}else _=h.get(o),_===void 0&&(_=new Set,h.set(o,_));_.has(l)||(_.add(l),i=i1.bind(null,i,o,l),o.then(i,i))}function K_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Z_(i,o,l,h,_){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Lr(-1,1),o.tag=2,ms(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=_,i)}var WM=b.ReactCurrentOwner,si=!1;function $n(i,o,l,h){o.child=i===null?__(o,null,l,h):Xo(o,i.child,l,h)}function Q_(i,o,l,h,_){l=l.render;var M=o.ref;return Yo(o,_),h=Xh(i,o,l,h,M,_),l=jh(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~_,Ir(i,o,_)):(Vt&&l&&Ch(o),o.flags|=1,$n(i,o,h,_),o.child)}function J_(i,o,l,h,_){if(i===null){var M=l.type;return typeof M=="function"&&!Md(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=M,e0(i,o,M,h,_)):(i=yc(l.type,null,h,o,o.mode,_),i.ref=o.ref,i.return=o,o.child=i)}if(M=i.child,(i.lanes&_)===0){var C=M.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(C,h)&&i.ref===o.ref)return Ir(i,o,_)}return o.flags|=1,i=Ss(M,h),i.ref=o.ref,i.return=o,o.child=i}function e0(i,o,l,h,_){if(i!==null){var M=i.memoizedProps;if(ol(M,h)&&i.ref===o.ref)if(si=!1,o.pendingProps=h=M,(i.lanes&_)!==0)(i.flags&131072)!==0&&(si=!0);else return o.lanes=i.lanes,Ir(i,o,_)}return td(i,o,l,h,_)}function t0(i,o,l){var h=o.pendingProps,_=h.children,M=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Zo,yi),yi|=l;else{if((l&1073741824)===0)return i=M!==null?M.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Nt(Zo,yi),yi|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=M!==null?M.baseLanes:l,Nt(Zo,yi),yi|=h}else M!==null?(h=M.baseLanes|l,o.memoizedState=null):h=l,Nt(Zo,yi),yi|=h;return $n(i,o,_,l),o.child}function n0(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function td(i,o,l,h,_){var M=ri(l)?js:Un.current;return M=Ho(o,M),Yo(o,_),l=Xh(i,o,l,h,M,_),h=jh(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~_,Ir(i,o,_)):(Vt&&h&&Ch(o),o.flags|=1,$n(i,o,l,_),o.child)}function i0(i,o,l,h,_){if(ri(l)){var M=!0;Wu(o)}else M=!1;if(Yo(o,_),o.stateNode===null)lc(i,o),X_(o,l,h),Qh(o,l,h,_),h=!0;else if(i===null){var C=o.stateNode,F=o.memoizedProps;C.props=F;var H=C.context,re=l.contextType;typeof re=="object"&&re!==null?re=Ui(re):(re=ri(l)?js:Un.current,re=Ho(o,re));var ge=l.getDerivedStateFromProps,xe=typeof ge=="function"||typeof C.getSnapshotBeforeUpdate=="function";xe||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(F!==h||H!==re)&&j_(o,C,h,re),ps=!1;var me=o.memoizedState;C.state=me,Ju(o,h,C,_),H=o.memoizedState,F!==h||me!==H||ii.current||ps?(typeof ge=="function"&&(Zh(o,l,ge,h),H=o.memoizedState),(F=ps||W_(o,l,F,h,me,H,re))?(xe||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(o.flags|=4194308)):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=H),C.props=h,C.state=H,C.context=re,h=F):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{C=o.stateNode,y_(i,o),F=o.memoizedProps,re=o.type===o.elementType?F:$i(o.type,F),C.props=re,xe=o.pendingProps,me=C.context,H=l.contextType,typeof H=="object"&&H!==null?H=Ui(H):(H=ri(l)?js:Un.current,H=Ho(o,H));var Ie=l.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(F!==xe||me!==H)&&j_(o,C,h,H),ps=!1,me=o.memoizedState,C.state=me,Ju(o,h,C,_);var ke=o.memoizedState;F!==xe||me!==ke||ii.current||ps?(typeof Ie=="function"&&(Zh(o,l,Ie,h),ke=o.memoizedState),(re=ps||W_(o,l,re,h,me,ke,H)||!1)?(ge||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,ke,H),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,ke,H)),typeof C.componentDidUpdate=="function"&&(o.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof C.componentDidUpdate!="function"||F===i.memoizedProps&&me===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&me===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ke),C.props=h,C.state=ke,C.context=H,h=re):(typeof C.componentDidUpdate!="function"||F===i.memoizedProps&&me===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&me===i.memoizedState||(o.flags|=1024),h=!1)}return nd(i,o,l,h,M,_)}function nd(i,o,l,h,_,M){n0(i,o);var C=(o.flags&128)!==0;if(!h&&!C)return _&&l_(o,l,!1),Ir(i,o,M);h=o.stateNode,WM.current=o;var F=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&C?(o.child=Xo(o,i.child,null,M),o.child=Xo(o,null,F,M)):$n(i,o,F,M),o.memoizedState=h.state,_&&l_(o,l,!0),o.child}function r0(i){var o=i.stateNode;o.pendingContext?o_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&o_(i,o.context,!1),zh(i,o.containerInfo)}function s0(i,o,l,h,_){return Wo(),Lh(_),o.flags|=256,$n(i,o,l,h),o.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(i){return{baseLanes:i,cachePool:null,transitions:null}}function o0(i,o,l){var h=o.pendingProps,_=jt.current,M=!1,C=(o.flags&128)!==0,F;if((F=C)||(F=i!==null&&i.memoizedState===null?!1:(_&2)!==0),F?(M=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(_|=1),Nt(jt,_&1),i===null)return Dh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(C=h.children,i=h.fallback,M?(h=o.mode,M=o.child,C={mode:"hidden",children:C},(h&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=C):M=xc(C,h,0,null),i=no(i,h,l,null),M.return=o,i.return=o,M.sibling=i,o.child=M,o.child.memoizedState=rd(l),o.memoizedState=id,i):sd(o,C));if(_=i.memoizedState,_!==null&&(F=_.dehydrated,F!==null))return XM(i,o,C,h,F,_,l);if(M){M=h.fallback,C=o.mode,_=i.child,F=_.sibling;var H={mode:"hidden",children:h.children};return(C&1)===0&&o.child!==_?(h=o.child,h.childLanes=0,h.pendingProps=H,o.deletions=null):(h=Ss(_,H),h.subtreeFlags=_.subtreeFlags&14680064),F!==null?M=Ss(F,M):(M=no(M,C,l,null),M.flags|=2),M.return=o,h.return=o,h.sibling=M,o.child=h,h=M,M=o.child,C=i.child.memoizedState,C=C===null?rd(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},M.memoizedState=C,M.childLanes=i.childLanes&~l,o.memoizedState=id,h}return M=i.child,i=M.sibling,h=Ss(M,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function sd(i,o){return o=xc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function ac(i,o,l,h){return h!==null&&Lh(h),Xo(o,i.child,null,l),i=sd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function XM(i,o,l,h,_,M,C){if(l)return o.flags&256?(o.flags&=-257,h=Jh(Error(t(422))),ac(i,o,C,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(M=h.fallback,_=o.mode,h=xc({mode:"visible",children:h.children},_,0,null),M=no(M,_,C,null),M.flags|=2,h.return=o,M.return=o,h.sibling=M,o.child=h,(o.mode&1)!==0&&Xo(o,i.child,null,C),o.child.memoizedState=rd(C),o.memoizedState=id,M);if((o.mode&1)===0)return ac(i,o,C,null);if(_.data==="$!"){if(h=_.nextSibling&&_.nextSibling.dataset,h)var F=h.dgst;return h=F,M=Error(t(419)),h=Jh(M,h,void 0),ac(i,o,C,h)}if(F=(C&i.childLanes)!==0,si||F){if(h=Mn,h!==null){switch(C&-C){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(h.suspendedLanes|C))!==0?0:_,_!==0&&_!==M.retryLane&&(M.retryLane=_,Dr(i,_),Zi(h,i,_,-1))}return Sd(),h=Jh(Error(t(421))),ac(i,o,C,h)}return _.data==="$?"?(o.flags|=128,o.child=i.child,o=r1.bind(null,i),_._reactRetry=o,null):(i=M.treeContext,vi=cs(_.nextSibling),_i=o,Vt=!0,Yi=null,i!==null&&(Li[Ii++]=Rr,Li[Ii++]=Pr,Li[Ii++]=Ys,Rr=i.id,Pr=i.overflow,Ys=o),o=sd(o,h.children),o.flags|=4096,o)}function a0(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Oh(i.return,o,l)}function od(i,o,l,h,_){var M=i.memoizedState;M===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:_}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=h,M.tail=l,M.tailMode=_)}function l0(i,o,l){var h=o.pendingProps,_=h.revealOrder,M=h.tail;if($n(i,o,h.children,l),h=jt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&a0(i,l,o);else if(i.tag===19)a0(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Nt(jt,h),(o.mode&1)===0)o.memoizedState=null;else switch(_){case"forwards":for(l=o.child,_=null;l!==null;)i=l.alternate,i!==null&&ec(i)===null&&(_=l),l=l.sibling;l=_,l===null?(_=o.child,o.child=null):(_=l.sibling,l.sibling=null),od(o,!1,_,l,M);break;case"backwards":for(l=null,_=o.child,o.child=null;_!==null;){if(i=_.alternate,i!==null&&ec(i)===null){o.child=_;break}i=_.sibling,_.sibling=l,l=_,_=i}od(o,!0,l,null,M);break;case"together":od(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function lc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ir(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Qs|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ss(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ss(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function jM(i,o,l){switch(o.tag){case 3:r0(o),Wo();break;case 5:M_(o);break;case 1:ri(o.type)&&Wu(o);break;case 4:zh(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,_=o.memoizedProps.value;Nt(Ku,h._currentValue),h._currentValue=_;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Nt(jt,jt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?o0(i,o,l):(Nt(jt,jt.current&1),i=Ir(i,o,l),i!==null?i.sibling:null);Nt(jt,jt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return l0(i,o,l);o.flags|=128}if(_=o.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),Nt(jt,jt.current),h)break;return null;case 22:case 23:return o.lanes=0,t0(i,o,l)}return Ir(i,o,l)}var u0,ad,c0,f0;u0=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ad=function(){},c0=function(i,o,l,h){var _=i.memoizedProps;if(_!==h){i=o.stateNode,Ks(lr.current);var M=null;switch(l){case"input":_=V(i,_),h=V(i,h),M=[];break;case"select":_=le({},_,{value:void 0}),h=le({},h,{value:void 0}),M=[];break;case"textarea":_=D(i,_),h=D(i,h),M=[];break;default:typeof _.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Hu)}ht(l,h);var C;l=null;for(re in _)if(!h.hasOwnProperty(re)&&_.hasOwnProperty(re)&&_[re]!=null)if(re==="style"){var F=_[re];for(C in F)F.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?M||(M=[]):(M=M||[]).push(re,null));for(re in h){var H=h[re];if(F=_!=null?_[re]:void 0,h.hasOwnProperty(re)&&H!==F&&(H!=null||F!=null))if(re==="style")if(F){for(C in F)!F.hasOwnProperty(C)||H&&H.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in H)H.hasOwnProperty(C)&&F[C]!==H[C]&&(l||(l={}),l[C]=H[C])}else l||(M||(M=[]),M.push(re,l)),l=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(M=M||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(M=M||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Ft("scroll",i),M||F===H||(M=[])):(M=M||[]).push(re,H))}l&&(M=M||[]).push("style",l);var re=M;(o.updateQueue=re)&&(o.flags|=4)}},f0=function(i,o,l,h){l!==h&&(o.flags|=4)};function Sl(i,o){if(!Vt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function On(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var _=i.child;_!==null;)l|=_.lanes|_.childLanes,h|=_.subtreeFlags&14680064,h|=_.flags&14680064,_.return=i,_=_.sibling;else for(_=i.child;_!==null;)l|=_.lanes|_.childLanes,h|=_.subtreeFlags,h|=_.flags,_.return=i,_=_.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function YM(i,o,l){var h=o.pendingProps;switch(Rh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(o),null;case 1:return ri(o.type)&&Gu(),On(o),null;case 3:return h=o.stateNode,$o(),kt(ii),kt(Un),Vh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&($u(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Yi!==null&&(vd(Yi),Yi=null))),ad(i,o),On(o),null;case 5:Bh(o);var _=Ks(gl.current);if(l=o.type,i!==null&&o.stateNode!=null)c0(i,o,l,h,_),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return On(o),null}if(i=Ks(lr.current),$u(o)){h=o.stateNode,l=o.type;var M=o.memoizedProps;switch(h[ar]=o,h[fl]=M,i=(o.mode&1)!==0,l){case"dialog":Ft("cancel",h),Ft("close",h);break;case"iframe":case"object":case"embed":Ft("load",h);break;case"video":case"audio":for(_=0;_<ll.length;_++)Ft(ll[_],h);break;case"source":Ft("error",h);break;case"img":case"image":case"link":Ft("error",h),Ft("load",h);break;case"details":Ft("toggle",h);break;case"input":Xn(h,M),Ft("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!M.multiple},Ft("invalid",h);break;case"textarea":ie(h,M),Ft("invalid",h)}ht(l,M),_=null;for(var C in M)if(M.hasOwnProperty(C)){var F=M[C];C==="children"?typeof F=="string"?h.textContent!==F&&(M.suppressHydrationWarning!==!0&&Bu(h.textContent,F,i),_=["children",F]):typeof F=="number"&&h.textContent!==""+F&&(M.suppressHydrationWarning!==!0&&Bu(h.textContent,F,i),_=["children",""+F]):s.hasOwnProperty(C)&&F!=null&&C==="onScroll"&&Ft("scroll",h)}switch(l){case"input":It(h),je(h,M,!0);break;case"textarea":It(h),_e(h);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(h.onclick=Hu)}h=_,o.updateQueue=h,h!==null&&(o.flags|=4)}else{C=_.nodeType===9?_:_.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=C.createElement(l,{is:h.is}):(i=C.createElement(l),l==="select"&&(C=i,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):i=C.createElementNS(i,l),i[ar]=o,i[fl]=h,u0(i,o,!1,!1),o.stateNode=i;e:{switch(C=it(l,h),l){case"dialog":Ft("cancel",i),Ft("close",i),_=h;break;case"iframe":case"object":case"embed":Ft("load",i),_=h;break;case"video":case"audio":for(_=0;_<ll.length;_++)Ft(ll[_],i);_=h;break;case"source":Ft("error",i),_=h;break;case"img":case"image":case"link":Ft("error",i),Ft("load",i),_=h;break;case"details":Ft("toggle",i),_=h;break;case"input":Xn(i,h),_=V(i,h),Ft("invalid",i);break;case"option":_=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},_=le({},h,{value:void 0}),Ft("invalid",i);break;case"textarea":ie(i,h),_=D(i,h),Ft("invalid",i);break;default:_=h}ht(l,_),F=_;for(M in F)if(F.hasOwnProperty(M)){var H=F[M];M==="style"?et(i,H):M==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qe(i,H)):M==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&$e(i,H):typeof H=="number"&&$e(i,""+H):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?H!=null&&M==="onScroll"&&Ft("scroll",i):H!=null&&P(i,M,H,C))}switch(l){case"input":It(i),je(i,h,!1);break;case"textarea":It(i),_e(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Te(h.value));break;case"select":i.multiple=!!h.multiple,M=h.value,M!=null?O(i,!!h.multiple,M,!1):h.defaultValue!=null&&O(i,!!h.multiple,h.defaultValue,!0);break;default:typeof _.onClick=="function"&&(i.onclick=Hu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return On(o),null;case 6:if(i&&o.stateNode!=null)f0(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ks(gl.current),Ks(lr.current),$u(o)){if(h=o.stateNode,l=o.memoizedProps,h[ar]=o,(M=h.nodeValue!==l)&&(i=_i,i!==null))switch(i.tag){case 3:Bu(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Bu(h.nodeValue,l,(i.mode&1)!==0)}M&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[ar]=o,o.stateNode=h}return On(o),null;case 13:if(kt(jt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&vi!==null&&(o.mode&1)!==0&&(o.flags&128)===0)p_(),Wo(),o.flags|=98560,M=!1;else if(M=$u(o),h!==null&&h.dehydrated!==null){if(i===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ar]=o}else Wo(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;On(o),M=!1}else Yi!==null&&(vd(Yi),Yi=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(jt.current&1)!==0?mn===0&&(mn=3):Sd())),o.updateQueue!==null&&(o.flags|=4),On(o),null);case 4:return $o(),ad(i,o),i===null&&ul(o.stateNode.containerInfo),On(o),null;case 10:return Nh(o.type._context),On(o),null;case 17:return ri(o.type)&&Gu(),On(o),null;case 19:if(kt(jt),M=o.memoizedState,M===null)return On(o),null;if(h=(o.flags&128)!==0,C=M.rendering,C===null)if(h)Sl(M,!1);else{if(mn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(C=ec(i),C!==null){for(o.flags|=128,Sl(M,!1),h=C.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)M=l,i=h,M.flags&=14680066,C=M.alternate,C===null?(M.childLanes=0,M.lanes=i,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=C.childLanes,M.lanes=C.lanes,M.child=C.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=C.memoizedProps,M.memoizedState=C.memoizedState,M.updateQueue=C.updateQueue,M.type=C.type,i=C.dependencies,M.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Nt(jt,jt.current&1|2),o.child}i=i.sibling}M.tail!==null&&Q()>Qo&&(o.flags|=128,h=!0,Sl(M,!1),o.lanes=4194304)}else{if(!h)if(i=ec(C),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Sl(M,!0),M.tail===null&&M.tailMode==="hidden"&&!C.alternate&&!Vt)return On(o),null}else 2*Q()-M.renderingStartTime>Qo&&l!==1073741824&&(o.flags|=128,h=!0,Sl(M,!1),o.lanes=4194304);M.isBackwards?(C.sibling=o.child,o.child=C):(l=M.last,l!==null?l.sibling=C:o.child=C,M.last=C)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=Q(),o.sibling=null,l=jt.current,Nt(jt,h?l&1|2:l&1),o):(On(o),null);case 22:case 23:return xd(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(yi&1073741824)!==0&&(On(o),o.subtreeFlags&6&&(o.flags|=8192)):On(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function $M(i,o){switch(Rh(o),o.tag){case 1:return ri(o.type)&&Gu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return $o(),kt(ii),kt(Un),Vh(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Bh(o),null;case 13:if(kt(jt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Wo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return kt(jt),null;case 4:return $o(),null;case 10:return Nh(o.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var uc=!1,Fn=!1,qM=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ko(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){en(i,o,h)}else l.current=null}function ld(i,o,l){try{l()}catch(h){en(i,o,h)}}var h0=!1;function KM(i,o){if(xh=Ru,i=Wg(),hh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var _=h.anchorOffset,M=h.focusNode;h=h.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var C=0,F=-1,H=-1,re=0,ge=0,xe=i,me=null;t:for(;;){for(var Ie;xe!==l||_!==0&&xe.nodeType!==3||(F=C+_),xe!==M||h!==0&&xe.nodeType!==3||(H=C+h),xe.nodeType===3&&(C+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===i)break t;if(me===l&&++re===_&&(F=C),me===M&&++ge===h&&(H=C),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Sh={focusedElem:i,selectionRange:l},Ru=!1,Ue=o;Ue!==null;)if(o=Ue,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Ue=i;else for(;Ue!==null;){o=Ue;try{var ke=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Be=ke.memoizedProps,sn=ke.memoizedState,Z=o.stateNode,W=Z.getSnapshotBeforeUpdate(o.elementType===o.type?Be:$i(o.type,Be),sn);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){en(o,o.return,Ee)}if(i=o.sibling,i!==null){i.return=o.return,Ue=i;break}Ue=o.return}return ke=h0,h0=!1,ke}function Ml(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var _=h=h.next;do{if((_.tag&i)===i){var M=_.destroy;_.destroy=void 0,M!==void 0&&ld(o,l,M)}_=_.next}while(_!==h)}}function cc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function ud(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function d0(i){var o=i.alternate;o!==null&&(i.alternate=null,d0(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[ar],delete o[fl],delete o[wh],delete o[LM],delete o[IM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function p0(i){return i.tag===5||i.tag===3||i.tag===4}function m0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||p0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function cd(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Hu));else if(h!==4&&(i=i.child,i!==null))for(cd(i,o,l),i=i.sibling;i!==null;)cd(i,o,l),i=i.sibling}function fd(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(fd(i,o,l),i=i.sibling;i!==null;)fd(i,o,l),i=i.sibling}var Cn=null,qi=!1;function gs(i,o,l){for(l=l.child;l!==null;)g0(i,o,l),l=l.sibling}function g0(i,o,l){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:Fn||Ko(l,o);case 6:var h=Cn,_=qi;Cn=null,gs(i,o,l),Cn=h,qi=_,Cn!==null&&(qi?(i=Cn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Cn.removeChild(l.stateNode));break;case 18:Cn!==null&&(qi?(i=Cn,l=l.stateNode,i.nodeType===8?Th(i.parentNode,l):i.nodeType===1&&Th(i,l),el(i)):Th(Cn,l.stateNode));break;case 4:h=Cn,_=qi,Cn=l.stateNode.containerInfo,qi=!0,gs(i,o,l),Cn=h,qi=_;break;case 0:case 11:case 14:case 15:if(!Fn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){_=h=h.next;do{var M=_,C=M.destroy;M=M.tag,C!==void 0&&((M&2)!==0||(M&4)!==0)&&ld(l,o,C),_=_.next}while(_!==h)}gs(i,o,l);break;case 1:if(!Fn&&(Ko(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(F){en(l,o,F)}gs(i,o,l);break;case 21:gs(i,o,l);break;case 22:l.mode&1?(Fn=(h=Fn)||l.memoizedState!==null,gs(i,o,l),Fn=h):gs(i,o,l);break;default:gs(i,o,l)}}function _0(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new qM),o.forEach(function(h){var _=s1.bind(null,i,h);l.has(h)||(l.add(h),h.then(_,_))})}}function Ki(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var _=l[h];try{var M=i,C=o,F=C;e:for(;F!==null;){switch(F.tag){case 5:Cn=F.stateNode,qi=!1;break e;case 3:Cn=F.stateNode.containerInfo,qi=!0;break e;case 4:Cn=F.stateNode.containerInfo,qi=!0;break e}F=F.return}if(Cn===null)throw Error(t(160));g0(M,C,_),Cn=null,qi=!1;var H=_.alternate;H!==null&&(H.return=null),_.return=null}catch(re){en(_,o,re)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)v0(o,i),o=o.sibling}function v0(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ki(o,i),cr(i),h&4){try{Ml(3,i,i.return),cc(3,i)}catch(Be){en(i,i.return,Be)}try{Ml(5,i,i.return)}catch(Be){en(i,i.return,Be)}}break;case 1:Ki(o,i),cr(i),h&512&&l!==null&&Ko(l,l.return);break;case 5:if(Ki(o,i),cr(i),h&512&&l!==null&&Ko(l,l.return),i.flags&32){var _=i.stateNode;try{$e(_,"")}catch(Be){en(i,i.return,Be)}}if(h&4&&(_=i.stateNode,_!=null)){var M=i.memoizedProps,C=l!==null?l.memoizedProps:M,F=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{F==="input"&&M.type==="radio"&&M.name!=null&&mt(_,M),it(F,C);var re=it(F,M);for(C=0;C<H.length;C+=2){var ge=H[C],xe=H[C+1];ge==="style"?et(_,xe):ge==="dangerouslySetInnerHTML"?qe(_,xe):ge==="children"?$e(_,xe):P(_,ge,xe,re)}switch(F){case"input":ft(_,M);break;case"textarea":de(_,M);break;case"select":var me=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!M.multiple;var Ie=M.value;Ie!=null?O(_,!!M.multiple,Ie,!1):me!==!!M.multiple&&(M.defaultValue!=null?O(_,!!M.multiple,M.defaultValue,!0):O(_,!!M.multiple,M.multiple?[]:"",!1))}_[fl]=M}catch(Be){en(i,i.return,Be)}}break;case 6:if(Ki(o,i),cr(i),h&4){if(i.stateNode===null)throw Error(t(162));_=i.stateNode,M=i.memoizedProps;try{_.nodeValue=M}catch(Be){en(i,i.return,Be)}}break;case 3:if(Ki(o,i),cr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{el(o.containerInfo)}catch(Be){en(i,i.return,Be)}break;case 4:Ki(o,i),cr(i);break;case 13:Ki(o,i),cr(i),_=i.child,_.flags&8192&&(M=_.memoizedState!==null,_.stateNode.isHidden=M,!M||_.alternate!==null&&_.alternate.memoizedState!==null||(pd=Q())),h&4&&_0(i);break;case 22:if(ge=l!==null&&l.memoizedState!==null,i.mode&1?(Fn=(re=Fn)||ge,Ki(o,i),Fn=re):Ki(o,i),cr(i),h&8192){if(re=i.memoizedState!==null,(i.stateNode.isHidden=re)&&!ge&&(i.mode&1)!==0)for(Ue=i,ge=i.child;ge!==null;){for(xe=Ue=ge;Ue!==null;){switch(me=Ue,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:Ml(4,me,me.return);break;case 1:Ko(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){h=me,l=me.return;try{o=h,ke.props=o.memoizedProps,ke.state=o.memoizedState,ke.componentWillUnmount()}catch(Be){en(h,l,Be)}}break;case 5:Ko(me,me.return);break;case 22:if(me.memoizedState!==null){S0(xe);continue}}Ie!==null?(Ie.return=me,Ue=Ie):S0(xe)}ge=ge.sibling}e:for(ge=null,xe=i;;){if(xe.tag===5){if(ge===null){ge=xe;try{_=xe.stateNode,re?(M=_.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(F=xe.stateNode,H=xe.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Je("display",C))}catch(Be){en(i,i.return,Be)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=re?"":xe.memoizedProps}catch(Be){en(i,i.return,Be)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Ki(o,i),cr(i),h&4&&_0(i);break;case 21:break;default:Ki(o,i),cr(i)}}function cr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(p0(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var _=h.stateNode;h.flags&32&&($e(_,""),h.flags&=-33);var M=m0(i);fd(i,M,_);break;case 3:case 4:var C=h.stateNode.containerInfo,F=m0(i);cd(i,F,C);break;default:throw Error(t(161))}}catch(H){en(i,i.return,H)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function ZM(i,o,l){Ue=i,y0(i)}function y0(i,o,l){for(var h=(i.mode&1)!==0;Ue!==null;){var _=Ue,M=_.child;if(_.tag===22&&h){var C=_.memoizedState!==null||uc;if(!C){var F=_.alternate,H=F!==null&&F.memoizedState!==null||Fn;F=uc;var re=Fn;if(uc=C,(Fn=H)&&!re)for(Ue=_;Ue!==null;)C=Ue,H=C.child,C.tag===22&&C.memoizedState!==null?M0(_):H!==null?(H.return=C,Ue=H):M0(_);for(;M!==null;)Ue=M,y0(M),M=M.sibling;Ue=_,uc=F,Fn=re}x0(i)}else(_.subtreeFlags&8772)!==0&&M!==null?(M.return=_,Ue=M):x0(i)}}function x0(i){for(;Ue!==null;){var o=Ue;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Fn||cc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Fn)if(l===null)h.componentDidMount();else{var _=o.elementType===o.type?l.memoizedProps:$i(o.type,l.memoizedProps);h.componentDidUpdate(_,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&S_(o,M,h);break;case 3:var C=o.updateQueue;if(C!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}S_(o,C,l)}break;case 5:var F=o.stateNode;if(l===null&&o.flags&4){l=F;var H=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var re=o.alternate;if(re!==null){var ge=re.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&el(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Fn||o.flags&512&&ud(o)}catch(me){en(o,o.return,me)}}if(o===i){Ue=null;break}if(l=o.sibling,l!==null){l.return=o.return,Ue=l;break}Ue=o.return}}function S0(i){for(;Ue!==null;){var o=Ue;if(o===i){Ue=null;break}var l=o.sibling;if(l!==null){l.return=o.return,Ue=l;break}Ue=o.return}}function M0(i){for(;Ue!==null;){var o=Ue;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{cc(4,o)}catch(H){en(o,l,H)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var _=o.return;try{h.componentDidMount()}catch(H){en(o,_,H)}}var M=o.return;try{ud(o)}catch(H){en(o,M,H)}break;case 5:var C=o.return;try{ud(o)}catch(H){en(o,C,H)}}}catch(H){en(o,o.return,H)}if(o===i){Ue=null;break}var F=o.sibling;if(F!==null){F.return=o.return,Ue=F;break}Ue=o.return}}var QM=Math.ceil,fc=b.ReactCurrentDispatcher,hd=b.ReactCurrentOwner,Oi=b.ReactCurrentBatchConfig,Mt=0,Mn=null,ln=null,Rn=0,yi=0,Zo=fs(0),mn=0,El=null,Qs=0,hc=0,dd=0,Tl=null,oi=null,pd=0,Qo=1/0,Ur=null,dc=!1,md=null,_s=null,pc=!1,vs=null,mc=0,wl=0,gd=null,gc=-1,_c=0;function qn(){return(Mt&6)!==0?Q():gc!==-1?gc:gc=Q()}function ys(i){return(i.mode&1)===0?1:(Mt&2)!==0&&Rn!==0?Rn&-Rn:NM.transition!==null?(_c===0&&(_c=Dt()),_c):(i=St,i!==0||(i=window.event,i=i===void 0?16:Tg(i.type)),i)}function Zi(i,o,l,h){if(50<wl)throw wl=0,gd=null,Error(t(185));yn(i,l,h),((Mt&2)===0||i!==Mn)&&(i===Mn&&((Mt&2)===0&&(hc|=l),mn===4&&xs(i,Rn)),ai(i,h),l===1&&Mt===0&&(o.mode&1)===0&&(Qo=Q()+500,Xu&&ds()))}function ai(i,o){var l=i.callbackNode;Yn(i,o);var h=Ln(i,i===Mn?Rn:0);if(h===0)l!==null&&I(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&I(l),o===1)i.tag===0?UM(T0.bind(null,i)):u_(T0.bind(null,i)),PM(function(){(Mt&6)===0&&ds()}),l=null;else{switch(or(h)){case 1:l=Se;break;case 4:l=Re;break;case 16:l=Le;break;case 536870912:l=tt;break;default:l=Le}l=L0(l,E0.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function E0(i,o){if(gc=-1,_c=0,(Mt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Jo()&&i.callbackNode!==l)return null;var h=Ln(i,i===Mn?Rn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=vc(i,h);else{o=h;var _=Mt;Mt|=2;var M=A0();(Mn!==i||Rn!==o)&&(Ur=null,Qo=Q()+500,eo(i,o));do try{t1();break}catch(F){w0(i,F)}while(!0);Uh(),fc.current=M,Mt=_,ln!==null?o=0:(Mn=null,Rn=0,o=mn)}if(o!==0){if(o===2&&(_=Ar(i),_!==0&&(h=_,o=_d(i,_))),o===1)throw l=El,eo(i,0),xs(i,h),ai(i,Q()),l;if(o===6)xs(i,h);else{if(_=i.current.alternate,(h&30)===0&&!JM(_)&&(o=vc(i,h),o===2&&(M=Ar(i),M!==0&&(h=M,o=_d(i,M))),o===1))throw l=El,eo(i,0),xs(i,h),ai(i,Q()),l;switch(i.finishedWork=_,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:to(i,oi,Ur);break;case 3:if(xs(i,h),(h&130023424)===h&&(o=pd+500-Q(),10<o)){if(Ln(i,0)!==0)break;if(_=i.suspendedLanes,(_&h)!==h){qn(),i.pingedLanes|=i.suspendedLanes&_;break}i.timeoutHandle=Eh(to.bind(null,i,oi,Ur),o);break}to(i,oi,Ur);break;case 4:if(xs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,_=-1;0<h;){var C=31-st(h);M=1<<C,C=o[C],C>_&&(_=C),h&=~M}if(h=_,h=Q()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*QM(h/1960))-h,10<h){i.timeoutHandle=Eh(to.bind(null,i,oi,Ur),h);break}to(i,oi,Ur);break;case 5:to(i,oi,Ur);break;default:throw Error(t(329))}}}return ai(i,Q()),i.callbackNode===l?E0.bind(null,i):null}function _d(i,o){var l=Tl;return i.current.memoizedState.isDehydrated&&(eo(i,o).flags|=256),i=vc(i,o),i!==2&&(o=oi,oi=l,o!==null&&vd(o)),i}function vd(i){oi===null?oi=i:oi.push.apply(oi,i)}function JM(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var _=l[h],M=_.getSnapshot;_=_.value;try{if(!ji(M(),_))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function xs(i,o){for(o&=~dd,o&=~hc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-st(o),h=1<<l;i[l]=-1,o&=~h}}function T0(i){if((Mt&6)!==0)throw Error(t(327));Jo();var o=Ln(i,0);if((o&1)===0)return ai(i,Q()),null;var l=vc(i,o);if(i.tag!==0&&l===2){var h=Ar(i);h!==0&&(o=h,l=_d(i,h))}if(l===1)throw l=El,eo(i,0),xs(i,o),ai(i,Q()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,to(i,oi,Ur),ai(i,Q()),null}function yd(i,o){var l=Mt;Mt|=1;try{return i(o)}finally{Mt=l,Mt===0&&(Qo=Q()+500,Xu&&ds())}}function Js(i){vs!==null&&vs.tag===0&&(Mt&6)===0&&Jo();var o=Mt;Mt|=1;var l=Oi.transition,h=St;try{if(Oi.transition=null,St=1,i)return i()}finally{St=h,Oi.transition=l,Mt=o,(Mt&6)===0&&ds()}}function xd(){yi=Zo.current,kt(Zo)}function eo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,RM(l)),ln!==null)for(l=ln.return;l!==null;){var h=l;switch(Rh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Gu();break;case 3:$o(),kt(ii),kt(Un),Vh();break;case 5:Bh(h);break;case 4:$o();break;case 13:kt(jt);break;case 19:kt(jt);break;case 10:Nh(h.type._context);break;case 22:case 23:xd()}l=l.return}if(Mn=i,ln=i=Ss(i.current,null),Rn=yi=o,mn=0,El=null,dd=hc=Qs=0,oi=Tl=null,qs!==null){for(o=0;o<qs.length;o++)if(l=qs[o],h=l.interleaved,h!==null){l.interleaved=null;var _=h.next,M=l.pending;if(M!==null){var C=M.next;M.next=_,h.next=C}l.pending=h}qs=null}return i}function w0(i,o){do{var l=ln;try{if(Uh(),tc.current=sc,nc){for(var h=Yt.memoizedState;h!==null;){var _=h.queue;_!==null&&(_.pending=null),h=h.next}nc=!1}if(Zs=0,Sn=pn=Yt=null,_l=!1,vl=0,hd.current=null,l===null||l.return===null){mn=1,El=o,ln=null;break}e:{var M=i,C=l.return,F=l,H=o;if(o=Rn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,ge=F,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=K_(C);if(Ie!==null){Ie.flags&=-257,Z_(Ie,C,F,M,o),Ie.mode&1&&q_(M,re,o),o=Ie,H=re;var ke=o.updateQueue;if(ke===null){var Be=new Set;Be.add(H),o.updateQueue=Be}else ke.add(H);break e}else{if((o&1)===0){q_(M,re,o),Sd();break e}H=Error(t(426))}}else if(Vt&&F.mode&1){var sn=K_(C);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Z_(sn,C,F,M,o),Lh(qo(H,F));break e}}M=H=qo(H,F),mn!==4&&(mn=2),Tl===null?Tl=[M]:Tl.push(M),M=C;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var Z=Y_(M,H,o);x_(M,Z);break e;case 1:F=H;var W=M.type,te=M.stateNode;if((M.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(_s===null||!_s.has(te)))){M.flags|=65536,o&=-o,M.lanes|=o;var Ee=$_(M,F,o);x_(M,Ee);break e}}M=M.return}while(M!==null)}C0(l)}catch(We){o=We,ln===l&&l!==null&&(ln=l=l.return);continue}break}while(!0)}function A0(){var i=fc.current;return fc.current=sc,i===null?sc:i}function Sd(){(mn===0||mn===3||mn===2)&&(mn=4),Mn===null||(Qs&268435455)===0&&(hc&268435455)===0||xs(Mn,Rn)}function vc(i,o){var l=Mt;Mt|=2;var h=A0();(Mn!==i||Rn!==o)&&(Ur=null,eo(i,o));do try{e1();break}catch(_){w0(i,_)}while(!0);if(Uh(),Mt=l,fc.current=h,ln!==null)throw Error(t(261));return Mn=null,Rn=0,mn}function e1(){for(;ln!==null;)b0(ln)}function t1(){for(;ln!==null&&!Y();)b0(ln)}function b0(i){var o=D0(i.alternate,i,yi);i.memoizedProps=i.pendingProps,o===null?C0(i):ln=o,hd.current=null}function C0(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=YM(l,o,yi),l!==null){ln=l;return}}else{if(l=$M(l,o),l!==null){l.flags&=32767,ln=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{mn=6,ln=null;return}}if(o=o.sibling,o!==null){ln=o;return}ln=o=i}while(o!==null);mn===0&&(mn=5)}function to(i,o,l){var h=St,_=Oi.transition;try{Oi.transition=null,St=1,n1(i,o,l,h)}finally{Oi.transition=_,St=h}return null}function n1(i,o,l,h){do Jo();while(vs!==null);if((Mt&6)!==0)throw Error(t(327));l=i.finishedWork;var _=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var M=l.lanes|l.childLanes;if(bn(i,M),i===Mn&&(ln=Mn=null,Rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||pc||(pc=!0,L0(Le,function(){return Jo(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Oi.transition,Oi.transition=null;var C=St;St=1;var F=Mt;Mt|=4,hd.current=null,KM(i,l),v0(l,i),MM(Sh),Ru=!!xh,Sh=xh=null,i.current=l,ZM(l),ae(),Mt=F,St=C,Oi.transition=M}else i.current=l;if(pc&&(pc=!1,vs=i,mc=_),M=i.pendingLanes,M===0&&(_s=null),_t(l.stateNode),ai(i,Q()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)_=o[l],h(_.value,{componentStack:_.stack,digest:_.digest});if(dc)throw dc=!1,i=md,md=null,i;return(mc&1)!==0&&i.tag!==0&&Jo(),M=i.pendingLanes,(M&1)!==0?i===gd?wl++:(wl=0,gd=i):wl=0,ds(),null}function Jo(){if(vs!==null){var i=or(mc),o=Oi.transition,l=St;try{if(Oi.transition=null,St=16>i?16:i,vs===null)var h=!1;else{if(i=vs,vs=null,mc=0,(Mt&6)!==0)throw Error(t(331));var _=Mt;for(Mt|=4,Ue=i.current;Ue!==null;){var M=Ue,C=M.child;if((Ue.flags&16)!==0){var F=M.deletions;if(F!==null){for(var H=0;H<F.length;H++){var re=F[H];for(Ue=re;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:Ml(8,ge,M)}var xe=ge.child;if(xe!==null)xe.return=ge,Ue=xe;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ie=ge.return;if(d0(ge),ge===re){Ue=null;break}if(me!==null){me.return=Ie,Ue=me;break}Ue=Ie}}}var ke=M.alternate;if(ke!==null){var Be=ke.child;if(Be!==null){ke.child=null;do{var sn=Be.sibling;Be.sibling=null,Be=sn}while(Be!==null)}}Ue=M}}if((M.subtreeFlags&2064)!==0&&C!==null)C.return=M,Ue=C;else e:for(;Ue!==null;){if(M=Ue,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Ml(9,M,M.return)}var Z=M.sibling;if(Z!==null){Z.return=M.return,Ue=Z;break e}Ue=M.return}}var W=i.current;for(Ue=W;Ue!==null;){C=Ue;var te=C.child;if((C.subtreeFlags&2064)!==0&&te!==null)te.return=C,Ue=te;else e:for(C=W;Ue!==null;){if(F=Ue,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:cc(9,F)}}catch(We){en(F,F.return,We)}if(F===C){Ue=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,Ue=Ee;break e}Ue=F.return}}if(Mt=_,ds(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Qe,i)}catch{}h=!0}return h}finally{St=l,Oi.transition=o}}return!1}function R0(i,o,l){o=qo(l,o),o=Y_(i,o,1),i=ms(i,o,1),o=qn(),i!==null&&(yn(i,1,o),ai(i,o))}function en(i,o,l){if(i.tag===3)R0(i,i,l);else for(;o!==null;){if(o.tag===3){R0(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(_s===null||!_s.has(h))){i=qo(l,i),i=$_(o,i,1),o=ms(o,i,1),i=qn(),o!==null&&(yn(o,1,i),ai(o,i));break}}o=o.return}}function i1(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=qn(),i.pingedLanes|=i.suspendedLanes&l,Mn===i&&(Rn&l)===l&&(mn===4||mn===3&&(Rn&130023424)===Rn&&500>Q()-pd?eo(i,0):dd|=l),ai(i,o)}function P0(i,o){o===0&&((i.mode&1)===0?o=1:(o=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var l=qn();i=Dr(i,o),i!==null&&(yn(i,o,l),ai(i,l))}function r1(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),P0(i,l)}function s1(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,_=i.memoizedState;_!==null&&(l=_.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),P0(i,l)}var D0;D0=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||ii.current)si=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return si=!1,jM(i,o,l);si=(i.flags&131072)!==0}else si=!1,Vt&&(o.flags&1048576)!==0&&c_(o,Yu,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;lc(i,o),i=o.pendingProps;var _=Ho(o,Un.current);Yo(o,l),_=Xh(null,o,h,i,_,l);var M=jh();return o.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ri(h)?(M=!0,Wu(o)):M=!1,o.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,kh(o),_.updater=oc,o.stateNode=_,_._reactInternals=o,Qh(o,h,i,l),o=nd(null,o,h,!0,M,l)):(o.tag=0,Vt&&M&&Ch(o),$n(null,o,_,l),o=o.child),o;case 16:h=o.elementType;e:{switch(lc(i,o),i=o.pendingProps,_=h._init,h=_(h._payload),o.type=h,_=o.tag=a1(h),i=$i(h,i),_){case 0:o=td(null,o,h,i,l);break e;case 1:o=i0(null,o,h,i,l);break e;case 11:o=Q_(null,o,h,i,l);break e;case 14:o=J_(null,o,h,$i(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,_=o.pendingProps,_=o.elementType===h?_:$i(h,_),td(i,o,h,_,l);case 1:return h=o.type,_=o.pendingProps,_=o.elementType===h?_:$i(h,_),i0(i,o,h,_,l);case 3:e:{if(r0(o),i===null)throw Error(t(387));h=o.pendingProps,M=o.memoizedState,_=M.element,y_(i,o),Ju(o,h,null,l);var C=o.memoizedState;if(h=C.element,M.isDehydrated)if(M={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){_=qo(Error(t(423)),o),o=s0(i,o,h,l,_);break e}else if(h!==_){_=qo(Error(t(424)),o),o=s0(i,o,h,l,_);break e}else for(vi=cs(o.stateNode.containerInfo.firstChild),_i=o,Vt=!0,Yi=null,l=__(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Wo(),h===_){o=Ir(i,o,l);break e}$n(i,o,h,l)}o=o.child}return o;case 5:return M_(o),i===null&&Dh(o),h=o.type,_=o.pendingProps,M=i!==null?i.memoizedProps:null,C=_.children,Mh(h,_)?C=null:M!==null&&Mh(h,M)&&(o.flags|=32),n0(i,o),$n(i,o,C,l),o.child;case 6:return i===null&&Dh(o),null;case 13:return o0(i,o,l);case 4:return zh(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Xo(o,null,h,l):$n(i,o,h,l),o.child;case 11:return h=o.type,_=o.pendingProps,_=o.elementType===h?_:$i(h,_),Q_(i,o,h,_,l);case 7:return $n(i,o,o.pendingProps,l),o.child;case 8:return $n(i,o,o.pendingProps.children,l),o.child;case 12:return $n(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,_=o.pendingProps,M=o.memoizedProps,C=_.value,Nt(Ku,h._currentValue),h._currentValue=C,M!==null)if(ji(M.value,C)){if(M.children===_.children&&!ii.current){o=Ir(i,o,l);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var F=M.dependencies;if(F!==null){C=M.child;for(var H=F.firstContext;H!==null;){if(H.context===h){if(M.tag===1){H=Lr(-1,l&-l),H.tag=2;var re=M.updateQueue;if(re!==null){re=re.shared;var ge=re.pending;ge===null?H.next=H:(H.next=ge.next,ge.next=H),re.pending=H}}M.lanes|=l,H=M.alternate,H!==null&&(H.lanes|=l),Oh(M.return,l,o),F.lanes|=l;break}H=H.next}}else if(M.tag===10)C=M.type===o.type?null:M.child;else if(M.tag===18){if(C=M.return,C===null)throw Error(t(341));C.lanes|=l,F=C.alternate,F!==null&&(F.lanes|=l),Oh(C,l,o),C=M.sibling}else C=M.child;if(C!==null)C.return=M;else for(C=M;C!==null;){if(C===o){C=null;break}if(M=C.sibling,M!==null){M.return=C.return,C=M;break}C=C.return}M=C}$n(i,o,_.children,l),o=o.child}return o;case 9:return _=o.type,h=o.pendingProps.children,Yo(o,l),_=Ui(_),h=h(_),o.flags|=1,$n(i,o,h,l),o.child;case 14:return h=o.type,_=$i(h,o.pendingProps),_=$i(h.type,_),J_(i,o,h,_,l);case 15:return e0(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,_=o.pendingProps,_=o.elementType===h?_:$i(h,_),lc(i,o),o.tag=1,ri(h)?(i=!0,Wu(o)):i=!1,Yo(o,l),X_(o,h,_),Qh(o,h,_,l),nd(null,o,h,!0,i,l);case 19:return l0(i,o,l);case 22:return t0(i,o,l)}throw Error(t(156,o.tag))};function L0(i,o){return Au(i,o)}function o1(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(i,o,l,h){return new o1(i,o,l,h)}function Md(i){return i=i.prototype,!(!i||!i.isReactComponent)}function a1(i){if(typeof i=="function")return Md(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===oe)return 14}return 2}function Ss(i,o){var l=i.alternate;return l===null?(l=Fi(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function yc(i,o,l,h,_,M){var C=2;if(h=i,typeof i=="function")Md(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case T:return no(l.children,_,M,o);case U:C=8,_|=8;break;case w:return i=Fi(12,l,o,_|2),i.elementType=w,i.lanes=M,i;case G:return i=Fi(13,l,o,_),i.elementType=G,i.lanes=M,i;case ee:return i=Fi(19,l,o,_),i.elementType=ee,i.lanes=M,i;case ce:return xc(l,_,M,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:C=10;break e;case k:C=9;break e;case $:C=11;break e;case oe:C=14;break e;case K:C=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Fi(C,l,o,_),o.elementType=i,o.type=h,o.lanes=M,o}function no(i,o,l,h){return i=Fi(7,i,h,o),i.lanes=l,i}function xc(i,o,l,h){return i=Fi(22,i,h,o),i.elementType=ce,i.lanes=l,i.stateNode={isHidden:!1},i}function Ed(i,o,l){return i=Fi(6,i,null,o),i.lanes=l,i}function Td(i,o,l){return o=Fi(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function l1(i,o,l,h,_){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=h,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function wd(i,o,l,h,_,M,C,F,H){return i=new l1(i,o,l,F,H),o===1?(o=1,M===!0&&(o|=8)):o=0,M=Fi(3,null,null,o),i.current=M,M.stateNode=i,M.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(M),i}function u1(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function I0(i){if(!i)return hs;i=i._reactInternals;e:{if(sr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ri(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ri(l))return a_(i,l,o)}return o}function U0(i,o,l,h,_,M,C,F,H){return i=wd(l,h,!0,i,_,M,C,F,H),i.context=I0(null),l=i.current,h=qn(),_=ys(l),M=Lr(h,_),M.callback=o??null,ms(l,M,_),i.current.lanes=_,yn(i,_,h),ai(i,h),i}function Sc(i,o,l,h){var _=o.current,M=qn(),C=ys(_);return l=I0(l),o.context===null?o.context=l:o.pendingContext=l,o=Lr(M,C),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ms(_,o,C),i!==null&&(Zi(i,_,C,M),Qu(i,_,C)),C}function Mc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function N0(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Ad(i,o){N0(i,o),(i=i.alternate)&&N0(i,o)}function c1(){return null}var O0=typeof reportError=="function"?reportError:function(i){console.error(i)};function bd(i){this._internalRoot=i}Ec.prototype.render=bd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Sc(i,o,null,null)},Ec.prototype.unmount=bd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Js(function(){Sc(null,i,null,null)}),o[br]=null}};function Ec(i){this._internalRoot=i}Ec.prototype.unstable_scheduleHydration=function(i){if(i){var o=yg();i={blockedOn:null,target:i,priority:o};for(var l=0;l<as.length&&o!==0&&o<as[l].priority;l++);as.splice(l,0,i),l===0&&Mg(i)}};function Cd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Tc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function F0(){}function f1(i,o,l,h,_){if(_){if(typeof h=="function"){var M=h;h=function(){var re=Mc(C);M.call(re)}}var C=U0(o,h,i,0,null,!1,!1,"",F0);return i._reactRootContainer=C,i[br]=C.current,ul(i.nodeType===8?i.parentNode:i),Js(),C}for(;_=i.lastChild;)i.removeChild(_);if(typeof h=="function"){var F=h;h=function(){var re=Mc(H);F.call(re)}}var H=wd(i,0,!1,null,null,!1,!1,"",F0);return i._reactRootContainer=H,i[br]=H.current,ul(i.nodeType===8?i.parentNode:i),Js(function(){Sc(o,H,l,h)}),H}function wc(i,o,l,h,_){var M=l._reactRootContainer;if(M){var C=M;if(typeof _=="function"){var F=_;_=function(){var H=Mc(C);F.call(H)}}Sc(o,C,i,_)}else C=f1(l,o,i,_,h);return Mc(C)}_g=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=gt(o.pendingLanes);l!==0&&(xn(o,l|1),ai(o,Q()),(Mt&6)===0&&(Qo=Q()+500,ds()))}break;case 13:Js(function(){var h=Dr(i,1);if(h!==null){var _=qn();Zi(h,i,1,_)}}),Ad(i,1)}},Jf=function(i){if(i.tag===13){var o=Dr(i,134217728);if(o!==null){var l=qn();Zi(o,i,134217728,l)}Ad(i,134217728)}},vg=function(i){if(i.tag===13){var o=ys(i),l=Dr(i,o);if(l!==null){var h=qn();Zi(l,i,o,h)}Ad(i,o)}},yg=function(){return St},xg=function(i,o){var l=St;try{return St=i,o()}finally{St=l}},Ce=function(i,o,l){switch(o){case"input":if(ft(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var _=Vu(h);if(!_)throw Error(t(90));Ut(h),ft(h,_)}}}break;case"textarea":de(i,l);break;case"select":o=l.value,o!=null&&O(i,!!l.multiple,o,!1)}},Ot=yd,dn=Js;var h1={usingClientEntryPoint:!1,Events:[hl,zo,Vu,Pe,rt,yd]},Al={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d1={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Tu(i),i===null?null:i.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Qe=Ac.inject(d1),ze=Ac}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1,li.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(o))throw Error(t(200));return u1(i,o,null,l)},li.createRoot=function(i,o){if(!Cd(i))throw Error(t(299));var l=!1,h="",_=O0;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=wd(i,1,!1,null,null,l,!1,h,_),i[br]=o.current,ul(i.nodeType===8?i.parentNode:i),new bd(o)},li.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Tu(o),i=i===null?null:i.stateNode,i},li.flushSync=function(i){return Js(i)},li.hydrate=function(i,o,l){if(!Tc(o))throw Error(t(200));return wc(null,i,o,!0,l)},li.hydrateRoot=function(i,o,l){if(!Cd(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,_=!1,M="",C=O0;if(l!=null&&(l.unstable_strictMode===!0&&(_=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),o=U0(o,null,i,1,l??null,_,!1,M,C),i[br]=o.current,ul(i),h)for(i=0;i<h.length;i++)l=h[i],_=l._getVersion,_=_(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,_]:o.mutableSourceEagerHydrationData.push(l,_);return new Ec(o)},li.render=function(i,o,l){if(!Tc(o))throw Error(t(200));return wc(null,i,o,!1,l)},li.unmountComponentAtNode=function(i){if(!Tc(i))throw Error(t(40));return i._reactRootContainer?(Js(function(){wc(null,null,i,!1,function(){i._reactRootContainer=null,i[br]=null})}),!0):!1},li.unstable_batchedUpdates=yd,li.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Tc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wc(i,o,l,!1,h)},li.version="18.3.1-next-f1338f8080-20240426",li}var j0;function T1(){if(j0)return Dd.exports;j0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=E1(),Dd.exports}var Y0;function w1(){if(Y0)return bc;Y0=1;var r=T1();return bc.createRoot=r.createRoot,bc.hydrateRoot=r.hydrateRoot,bc}var A1=w1();const b1=Hy(A1),$l={black:"#000",white:"#fff"},ea={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},ta={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},na={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ia={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ra={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Cl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},C1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ql(r){let e="https://mui.com/production-error/?code="+r;for(let t=1;t<arguments.length;t+=1)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+r+"; visit "+e+" for the full message."}const R1=Object.freeze(Object.defineProperty({__proto__:null,default:ql},Symbol.toStringTag,{value:"Module"})),P1="$$material";function Xt(){return Xt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Xt.apply(null,arguments)}function Hs(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function D1(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function L1(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var I1=function(){function r(t){var n=this;this._insertTag=function(s){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,a),n.tags.push(s)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(L1(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=D1(s);try{a.insertRule(n,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){var s;return(s=n.parentNode)==null?void 0:s.removeChild(n)}),this.tags=[],this.ctr=0},r}(),Bn="-ms-",vf="-moz-",wt="-webkit-",Wy="comm",Dm="rule",Lm="decl",U1="@import",Xy="@keyframes",N1="@layer",O1=Math.abs,Uf=String.fromCharCode,F1=Object.assign;function k1(r,e){return Pn(r,0)^45?(((e<<2^Pn(r,0))<<2^Pn(r,1))<<2^Pn(r,2))<<2^Pn(r,3):0}function jy(r){return r.trim()}function z1(r,e){return(r=e.exec(r))?r[0]:r}function At(r,e,t){return r.replace(e,t)}function Ep(r,e){return r.indexOf(e)}function Pn(r,e){return r.charCodeAt(e)|0}function Kl(r,e,t){return r.slice(e,t)}function hr(r){return r.length}function Im(r){return r.length}function Cc(r,e){return e.push(r),r}function B1(r,e){return r.map(e).join("")}var Nf=1,Ia=1,Yy=0,pi=0,hn=0,Xa="";function Of(r,e,t,n,s,a,u){return{value:r,root:e,parent:t,type:n,props:s,children:a,line:Nf,column:Ia,length:u,return:""}}function Rl(r,e){return F1(Of("",null,null,"",null,null,0),r,{length:-r.length},e)}function H1(){return hn}function V1(){return hn=pi>0?Pn(Xa,--pi):0,Ia--,hn===10&&(Ia=1,Nf--),hn}function Ci(){return hn=pi<Yy?Pn(Xa,pi++):0,Ia++,hn===10&&(Ia=1,Nf++),hn}function vr(){return Pn(Xa,pi)}function rf(){return pi}function hu(r,e){return Kl(Xa,r,e)}function Zl(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $y(r){return Nf=Ia=1,Yy=hr(Xa=r),pi=0,[]}function qy(r){return Xa="",r}function sf(r){return jy(hu(pi-1,Tp(r===91?r+2:r===40?r+1:r)))}function G1(r){for(;(hn=vr())&&hn<33;)Ci();return Zl(r)>2||Zl(hn)>3?"":" "}function W1(r,e){for(;--e&&Ci()&&!(hn<48||hn>102||hn>57&&hn<65||hn>70&&hn<97););return hu(r,rf()+(e<6&&vr()==32&&Ci()==32))}function Tp(r){for(;Ci();)switch(hn){case r:return pi;case 34:case 39:r!==34&&r!==39&&Tp(hn);break;case 40:r===41&&Tp(r);break;case 92:Ci();break}return pi}function X1(r,e){for(;Ci()&&r+hn!==57;)if(r+hn===84&&vr()===47)break;return"/*"+hu(e,pi-1)+"*"+Uf(r===47?r:Ci())}function j1(r){for(;!Zl(vr());)Ci();return hu(r,pi)}function Y1(r){return qy(of("",null,null,null,[""],r=$y(r),0,[0],r))}function of(r,e,t,n,s,a,u,c,f){for(var d=0,p=0,m=u,g=0,x=0,E=0,S=1,y=1,v=1,R=0,P="",b=s,N=a,L=n,T=P;y;)switch(E=R,R=Ci()){case 40:if(E!=108&&Pn(T,m-1)==58){Ep(T+=At(sf(R),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:T+=sf(R);break;case 9:case 10:case 13:case 32:T+=G1(E);break;case 92:T+=W1(rf()-1,7);continue;case 47:switch(vr()){case 42:case 47:Cc($1(X1(Ci(),rf()),e,t),f);break;default:T+="/"}break;case 123*S:c[d++]=hr(T)*v;case 125*S:case 59:case 0:switch(R){case 0:case 125:y=0;case 59+p:v==-1&&(T=At(T,/\f/g,"")),x>0&&hr(T)-m&&Cc(x>32?q0(T+";",n,t,m-1):q0(At(T," ","")+";",n,t,m-2),f);break;case 59:T+=";";default:if(Cc(L=$0(T,e,t,d,p,s,c,P,b=[],N=[],m),a),R===123)if(p===0)of(T,e,L,L,b,a,m,c,N);else switch(g===99&&Pn(T,3)===110?100:g){case 100:case 108:case 109:case 115:of(r,L,L,n&&Cc($0(r,L,L,0,0,s,c,P,s,b=[],m),N),s,N,m,c,n?b:N);break;default:of(T,L,L,L,[""],N,0,c,N)}}d=p=x=0,S=v=1,P=T="",m=u;break;case 58:m=1+hr(T),x=E;default:if(S<1){if(R==123)--S;else if(R==125&&S++==0&&V1()==125)continue}switch(T+=Uf(R),R*S){case 38:v=p>0?1:(T+="\f",-1);break;case 44:c[d++]=(hr(T)-1)*v,v=1;break;case 64:vr()===45&&(T+=sf(Ci())),g=vr(),p=m=hr(P=T+=j1(rf())),R++;break;case 45:E===45&&hr(T)==2&&(S=0)}}return a}function $0(r,e,t,n,s,a,u,c,f,d,p){for(var m=s-1,g=s===0?a:[""],x=Im(g),E=0,S=0,y=0;E<n;++E)for(var v=0,R=Kl(r,m+1,m=O1(S=u[E])),P=r;v<x;++v)(P=jy(S>0?g[v]+" "+R:At(R,/&\f/g,g[v])))&&(f[y++]=P);return Of(r,e,t,s===0?Dm:c,f,d,p)}function $1(r,e,t){return Of(r,e,t,Wy,Uf(H1()),Kl(r,2,-2),0)}function q0(r,e,t,n){return Of(r,e,t,Lm,Kl(r,0,n),Kl(r,n+1,-1),n)}function wa(r,e){for(var t="",n=Im(r),s=0;s<n;s++)t+=e(r[s],s,r,e)||"";return t}function q1(r,e,t,n){switch(r.type){case N1:if(r.children.length)break;case U1:case Lm:return r.return=r.return||r.value;case Wy:return"";case Xy:return r.return=r.value+"{"+wa(r.children,n)+"}";case Dm:r.value=r.props.join(",")}return hr(t=wa(r.children,n))?r.return=r.value+"{"+t+"}":""}function K1(r){var e=Im(r);return function(t,n,s,a){for(var u="",c=0;c<e;c++)u+=r[c](t,n,s,a)||"";return u}}function Z1(r){return function(e){e.root||(e=e.return)&&r(e)}}function Ky(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var Q1=function(e,t,n){for(var s=0,a=0;s=a,a=vr(),s===38&&a===12&&(t[n]=1),!Zl(a);)Ci();return hu(e,pi)},J1=function(e,t){var n=-1,s=44;do switch(Zl(s)){case 0:s===38&&vr()===12&&(t[n]=1),e[n]+=Q1(pi-1,t,n);break;case 2:e[n]+=sf(s);break;case 4:if(s===44){e[++n]=vr()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Uf(s)}while(s=Ci());return e},eE=function(e,t){return qy(J1($y(e),t))},K0=new WeakMap,tE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,s=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!K0.get(n))&&!s){K0.set(e,!0);for(var a=[],u=eE(t,a),c=n.props,f=0,d=0;f<u.length;f++)for(var p=0;p<c.length;p++,d++)e.props[d]=a[f]?u[f].replace(/&\f/g,c[p]):c[p]+" "+u[f]}}},nE=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function Zy(r,e){switch(k1(r,e)){case 5103:return wt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+r+vf+r+Bn+r+r;case 6828:case 4268:return wt+r+Bn+r+r;case 6165:return wt+r+Bn+"flex-"+r+r;case 5187:return wt+r+At(r,/(\w+).+(:[^]+)/,wt+"box-$1$2"+Bn+"flex-$1$2")+r;case 5443:return wt+r+Bn+"flex-item-"+At(r,/flex-|-self/,"")+r;case 4675:return wt+r+Bn+"flex-line-pack"+At(r,/align-content|flex-|-self/,"")+r;case 5548:return wt+r+Bn+At(r,"shrink","negative")+r;case 5292:return wt+r+Bn+At(r,"basis","preferred-size")+r;case 6060:return wt+"box-"+At(r,"-grow","")+wt+r+Bn+At(r,"grow","positive")+r;case 4554:return wt+At(r,/([^-])(transform)/g,"$1"+wt+"$2")+r;case 6187:return At(At(At(r,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),r,"")+r;case 5495:case 3959:return At(r,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return At(At(r,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+Bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+r+r;case 4095:case 3583:case 4068:case 2532:return At(r,/(.+)-inline(.+)/,wt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(r)-1-e>6)switch(Pn(r,e+1)){case 109:if(Pn(r,e+4)!==45)break;case 102:return At(r,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+vf+(Pn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Ep(r,"stretch")?Zy(At(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(Pn(r,e+1)!==115)break;case 6444:switch(Pn(r,hr(r)-3-(~Ep(r,"!important")&&10))){case 107:return At(r,":",":"+wt)+r;case 101:return At(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+wt+(Pn(r,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+Bn+"$2box$3")+r}break;case 5936:switch(Pn(r,e+11)){case 114:return wt+r+Bn+At(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return wt+r+Bn+At(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return wt+r+Bn+At(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return wt+r+Bn+r+r}return r}var iE=function(e,t,n,s){if(e.length>-1&&!e.return)switch(e.type){case Lm:e.return=Zy(e.value,e.length);break;case Xy:return wa([Rl(e,{value:At(e.value,"@","@"+wt)})],s);case Dm:if(e.length)return B1(e.props,function(a){switch(z1(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return wa([Rl(e,{props:[At(a,/:(read-\w+)/,":"+vf+"$1")]})],s);case"::placeholder":return wa([Rl(e,{props:[At(a,/:(plac\w+)/,":"+wt+"input-$1")]}),Rl(e,{props:[At(a,/:(plac\w+)/,":"+vf+"$1")]}),Rl(e,{props:[At(a,/:(plac\w+)/,Bn+"input-$1")]})],s)}return""})}},rE=[iE],sE=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(S){var y=S.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var s=e.stylisPlugins||rE,a={},u,c=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(S){for(var y=S.getAttribute("data-emotion").split(" "),v=1;v<y.length;v++)a[y[v]]=!0;c.push(S)});var f,d=[tE,nE];{var p,m=[q1,Z1(function(S){p.insert(S)})],g=K1(d.concat(s,m)),x=function(y){return wa(Y1(y),g)};f=function(y,v,R,P){p=R,x(y?y+"{"+v.styles+"}":v.styles),P&&(E.inserted[v.name]=!0)}}var E={key:t,sheet:new I1({key:t,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:f};return E.sheet.hydrate(c),E},oE=!0;function aE(r,e,t){var n="";return t.split(" ").forEach(function(s){r[s]!==void 0?e.push(r[s]+";"):s&&(n+=s+" ")}),n}var Qy=function(e,t,n){var s=e.key+"-"+t.name;(n===!1||oE===!1)&&e.registered[s]===void 0&&(e.registered[s]=t.styles)},lE=function(e,t,n){Qy(e,t,n);var s=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var a=t;do e.insert(t===a?"."+s:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function uE(r){for(var e=0,t,n=0,s=r.length;s>=4;++n,s-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var cE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fE=/[A-Z]|^ms/g,hE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jy=function(e){return e.charCodeAt(1)===45},Z0=function(e){return e!=null&&typeof e!="boolean"},Ud=Ky(function(r){return Jy(r)?r:r.replace(fE,"-$&").toLowerCase()}),Q0=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(hE,function(n,s,a){return dr={name:s,styles:a,next:dr},s})}return cE[e]!==1&&!Jy(e)&&typeof t=="number"&&t!==0?t+"px":t};function Ql(r,e,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var s=t;if(s.anim===1)return dr={name:s.name,styles:s.styles,next:dr},s.name;var a=t;if(a.styles!==void 0){var u=a.next;if(u!==void 0)for(;u!==void 0;)dr={name:u.name,styles:u.styles,next:dr},u=u.next;var c=a.styles+";";return c}return dE(r,e,t)}case"function":{if(r!==void 0){var f=dr,d=t(r);return dr=f,Ql(r,e,d)}break}}var p=t;if(e==null)return p;var m=e[p];return m!==void 0?m:p}function dE(r,e,t){var n="";if(Array.isArray(t))for(var s=0;s<t.length;s++)n+=Ql(r,e,t[s])+";";else for(var a in t){var u=t[a];if(typeof u!="object"){var c=u;e!=null&&e[c]!==void 0?n+=a+"{"+e[c]+"}":Z0(c)&&(n+=Ud(a)+":"+Q0(a,c)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var f=0;f<u.length;f++)Z0(u[f])&&(n+=Ud(a)+":"+Q0(a,u[f])+";");else{var d=Ql(r,e,u);switch(a){case"animation":case"animationName":{n+=Ud(a)+":"+d+";";break}default:n+=a+"{"+d+"}"}}}return n}var J0=/label:\s*([^\s;{]+)\s*(;|$)/g,dr;function pE(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var n=!0,s="";dr=void 0;var a=r[0];if(a==null||a.raw===void 0)n=!1,s+=Ql(t,e,a);else{var u=a;s+=u[0]}for(var c=1;c<r.length;c++)if(s+=Ql(t,e,r[c]),n){var f=a;s+=f[c]}J0.lastIndex=0;for(var d="",p;(p=J0.exec(s))!==null;)d+="-"+p[1];var m=uE(s)+d;return{name:m,styles:s,next:dr}}var mE=function(e){return e()},gE=V0.useInsertionEffect?V0.useInsertionEffect:!1,_E=gE||mE,ex=zt.createContext(typeof HTMLElement<"u"?sE({key:"css"}):null);ex.Provider;var vE=function(e){return zt.forwardRef(function(t,n){var s=zt.useContext(ex);return e(t,s,n)})},tx=zt.createContext({}),yE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xE=Ky(function(r){return yE.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),SE=xE,ME=function(e){return e!=="theme"},ev=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?SE:ME},tv=function(e,t,n){var s;if(t){var a=t.shouldForwardProp;s=e.__emotion_forwardProp&&a?function(u){return e.__emotion_forwardProp(u)&&a(u)}:a}return typeof s!="function"&&n&&(s=e.__emotion_forwardProp),s},EE=function(e){var t=e.cache,n=e.serialized,s=e.isStringTag;return Qy(t,n,s),_E(function(){return lE(t,n,s)}),null},TE=function r(e,t){var n=e.__emotion_real===e,s=n&&e.__emotion_base||e,a,u;t!==void 0&&(a=t.label,u=t.target);var c=tv(e,t,n),f=c||ev(s),d=!f("as");return function(){var p=arguments,m=n&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(a!==void 0&&m.push("label:"+a+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var g=p[0];m.push(g[0]);for(var x=p.length,E=1;E<x;E++)m.push(p[E],g[E])}var S=vE(function(y,v,R){var P=d&&y.as||s,b="",N=[],L=y;if(y.theme==null){L={};for(var T in y)L[T]=y[T];L.theme=zt.useContext(tx)}typeof y.className=="string"?b=aE(v.registered,N,y.className):y.className!=null&&(b=y.className+" ");var U=pE(m.concat(N),v.registered,L);b+=v.key+"-"+U.name,u!==void 0&&(b+=" "+u);var w=d&&c===void 0?ev(P):f,A={};for(var k in y)d&&k==="as"||w(k)&&(A[k]=y[k]);return A.className=b,R&&(A.ref=R),zt.createElement(zt.Fragment,null,zt.createElement(EE,{cache:v,serialized:U,isStringTag:typeof P=="string"}),zt.createElement(P,A))});return S.displayName=a!==void 0?a:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=e.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=m,S.__emotion_forwardProp=c,Object.defineProperty(S,"toString",{value:function(){return"."+u}}),S.withComponent=function(y,v){var R=r(y,Xt({},t,v,{shouldForwardProp:tv(S,v,!0)}));return R.apply(void 0,m)},S}},wE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],wp=TE.bind(null);wE.forEach(function(r){wp[r]=wp(r)});function AE(r,e){return wp(r,e)}function mo(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function nx(r){if(zt.isValidElement(r)||!mo(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=nx(r[t])}),e}function $r(r,e,t={clone:!0}){const n=t.clone?Xt({},r):r;return mo(r)&&mo(e)&&Object.keys(e).forEach(s=>{zt.isValidElement(e[s])?n[s]=e[s]:mo(e[s])&&Object.prototype.hasOwnProperty.call(r,s)&&mo(r[s])?n[s]=$r(r[s],e[s],t):t.clone?n[s]=mo(e[s])?nx(e[s]):e[s]:n[s]=e[s]}),n}const bE=["values","unit","step"],CE=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,n)=>t.val-n.val),e.reduce((t,n)=>Xt({},t,{[n.key]:n.val}),{})};function RE(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:n=5}=r,s=Hs(r,bE),a=CE(e),u=Object.keys(a);function c(g){return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${t})`}function f(g){return`@media (max-width:${(typeof e[g]=="number"?e[g]:g)-n/100}${t})`}function d(g,x){const E=u.indexOf(x);return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${t}) and (max-width:${(E!==-1&&typeof e[u[E]]=="number"?e[u[E]]:x)-n/100}${t})`}function p(g){return u.indexOf(g)+1<u.length?d(g,u[u.indexOf(g)+1]):c(g)}function m(g){const x=u.indexOf(g);return x===0?c(u[1]):x===u.length-1?f(u[x]):d(g,u[u.indexOf(g)+1]).replace("@media","@media not all and")}return Xt({keys:u,values:a,up:c,down:f,between:d,only:p,not:m,unit:t},s)}const PE={borderRadius:4};function Hl(r,e){return e?$r(r,e,{clone:!1}):r}const Um={xs:0,sm:600,md:900,lg:1200,xl:1536},nv={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${Um[r]}px)`};function Kr(r,e,t){const n=r.theme||{};if(Array.isArray(e)){const a=n.breakpoints||nv;return e.reduce((u,c,f)=>(u[a.up(a.keys[f])]=t(e[f]),u),{})}if(typeof e=="object"){const a=n.breakpoints||nv;return Object.keys(e).reduce((u,c)=>{if(Object.keys(a.values||Um).indexOf(c)!==-1){const f=a.up(c);u[f]=t(e[c],c)}else{const f=c;u[f]=e[f]}return u},{})}return t(e)}function DE(r={}){var e;return((e=r.keys)==null?void 0:e.reduce((n,s)=>{const a=r.up(s);return n[a]={},n},{}))||{}}function LE(r,e){return r.reduce((t,n)=>{const s=t[n];return(!s||Object.keys(s).length===0)&&delete t[n],t},e)}function ix(r){if(typeof r!="string")throw new Error(ql(7));return r.charAt(0).toUpperCase()+r.slice(1)}function Ff(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const n=`vars.${e}`.split(".").reduce((s,a)=>s&&s[a]?s[a]:null,r);if(n!=null)return n}return e.split(".").reduce((n,s)=>n&&n[s]!=null?n[s]:null,r)}function yf(r,e,t,n=t){let s;return typeof r=="function"?s=r(t):Array.isArray(r)?s=r[t]||n:s=Ff(r,t)||n,e&&(s=e(s,n,r)),s}function an(r){const{prop:e,cssProperty:t=r.prop,themeKey:n,transform:s}=r,a=u=>{if(u[e]==null)return null;const c=u[e],f=u.theme,d=Ff(f,n)||{};return Kr(u,c,m=>{let g=yf(d,s,m);return m===g&&typeof m=="string"&&(g=yf(d,s,`${e}${m==="default"?"":ix(m)}`,m)),t===!1?g:{[t]:g}})};return a.propTypes={},a.filterProps=[e],a}function IE(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const UE={m:"margin",p:"padding"},NE={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},iv={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},OE=IE(r=>{if(r.length>2)if(iv[r])r=iv[r];else return[r];const[e,t]=r.split(""),n=UE[e],s=NE[t]||"";return Array.isArray(s)?s.map(a=>n+a):[n+s]}),Nm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Om=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Nm,...Om];function du(r,e,t,n){var s;const a=(s=Ff(r,e,!1))!=null?s:t;return typeof a=="number"?u=>typeof u=="string"?u:a*u:Array.isArray(a)?u=>typeof u=="string"?u:a[u]:typeof a=="function"?a:()=>{}}function rx(r){return du(r,"spacing",8)}function pu(r,e){if(typeof e=="string"||e==null)return e;const t=Math.abs(e),n=r(t);return e>=0?n:typeof n=="number"?-n:`-${n}`}function FE(r,e){return t=>r.reduce((n,s)=>(n[s]=pu(e,t),n),{})}function kE(r,e,t,n){if(e.indexOf(t)===-1)return null;const s=OE(t),a=FE(s,n),u=r[t];return Kr(r,u,a)}function sx(r,e){const t=rx(r.theme);return Object.keys(r).map(n=>kE(r,e,n,t)).reduce(Hl,{})}function tn(r){return sx(r,Nm)}tn.propTypes={};tn.filterProps=Nm;function nn(r){return sx(r,Om)}nn.propTypes={};nn.filterProps=Om;function zE(r=8){if(r.mui)return r;const e=rx({spacing:r}),t=(...n)=>(n.length===0?[1]:n).map(a=>{const u=e(a);return typeof u=="number"?`${u}px`:u}).join(" ");return t.mui=!0,t}function kf(...r){const e=r.reduce((n,s)=>(s.filterProps.forEach(a=>{n[a]=s}),n),{}),t=n=>Object.keys(n).reduce((s,a)=>e[a]?Hl(s,e[a](n)):s,{});return t.propTypes={},t.filterProps=r.reduce((n,s)=>n.concat(s.filterProps),[]),t}function Hi(r){return typeof r!="number"?r:`${r}px solid`}function Xi(r,e){return an({prop:r,themeKey:"borders",transform:e})}const BE=Xi("border",Hi),HE=Xi("borderTop",Hi),VE=Xi("borderRight",Hi),GE=Xi("borderBottom",Hi),WE=Xi("borderLeft",Hi),XE=Xi("borderColor"),jE=Xi("borderTopColor"),YE=Xi("borderRightColor"),$E=Xi("borderBottomColor"),qE=Xi("borderLeftColor"),KE=Xi("outline",Hi),ZE=Xi("outlineColor"),zf=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=du(r.theme,"shape.borderRadius",4),t=n=>({borderRadius:pu(e,n)});return Kr(r,r.borderRadius,t)}return null};zf.propTypes={};zf.filterProps=["borderRadius"];kf(BE,HE,VE,GE,WE,XE,jE,YE,$E,qE,zf,KE,ZE);const Bf=r=>{if(r.gap!==void 0&&r.gap!==null){const e=du(r.theme,"spacing",8),t=n=>({gap:pu(e,n)});return Kr(r,r.gap,t)}return null};Bf.propTypes={};Bf.filterProps=["gap"];const Hf=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=du(r.theme,"spacing",8),t=n=>({columnGap:pu(e,n)});return Kr(r,r.columnGap,t)}return null};Hf.propTypes={};Hf.filterProps=["columnGap"];const Vf=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=du(r.theme,"spacing",8),t=n=>({rowGap:pu(e,n)});return Kr(r,r.rowGap,t)}return null};Vf.propTypes={};Vf.filterProps=["rowGap"];const QE=an({prop:"gridColumn"}),JE=an({prop:"gridRow"}),eT=an({prop:"gridAutoFlow"}),tT=an({prop:"gridAutoColumns"}),nT=an({prop:"gridAutoRows"}),iT=an({prop:"gridTemplateColumns"}),rT=an({prop:"gridTemplateRows"}),sT=an({prop:"gridTemplateAreas"}),oT=an({prop:"gridArea"});kf(Bf,Hf,Vf,QE,JE,eT,tT,nT,iT,rT,sT,oT);function Aa(r,e){return e==="grey"?e:r}const aT=an({prop:"color",themeKey:"palette",transform:Aa}),lT=an({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Aa}),uT=an({prop:"backgroundColor",themeKey:"palette",transform:Aa});kf(aT,lT,uT);function wi(r){return r<=1&&r!==0?`${r*100}%`:r}const cT=an({prop:"width",transform:wi}),Fm=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var n,s;const a=((n=r.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[t])||Um[t];return a?((s=r.theme)==null||(s=s.breakpoints)==null?void 0:s.unit)!=="px"?{maxWidth:`${a}${r.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:wi(t)}};return Kr(r,r.maxWidth,e)}return null};Fm.filterProps=["maxWidth"];const fT=an({prop:"minWidth",transform:wi}),hT=an({prop:"height",transform:wi}),dT=an({prop:"maxHeight",transform:wi}),pT=an({prop:"minHeight",transform:wi});an({prop:"size",cssProperty:"width",transform:wi});an({prop:"size",cssProperty:"height",transform:wi});const mT=an({prop:"boxSizing"});kf(cT,Fm,fT,hT,dT,pT,mT);const Gf={border:{themeKey:"borders",transform:Hi},borderTop:{themeKey:"borders",transform:Hi},borderRight:{themeKey:"borders",transform:Hi},borderBottom:{themeKey:"borders",transform:Hi},borderLeft:{themeKey:"borders",transform:Hi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Hi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:zf},color:{themeKey:"palette",transform:Aa},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Aa},backgroundColor:{themeKey:"palette",transform:Aa},p:{style:nn},pt:{style:nn},pr:{style:nn},pb:{style:nn},pl:{style:nn},px:{style:nn},py:{style:nn},padding:{style:nn},paddingTop:{style:nn},paddingRight:{style:nn},paddingBottom:{style:nn},paddingLeft:{style:nn},paddingX:{style:nn},paddingY:{style:nn},paddingInline:{style:nn},paddingInlineStart:{style:nn},paddingInlineEnd:{style:nn},paddingBlock:{style:nn},paddingBlockStart:{style:nn},paddingBlockEnd:{style:nn},m:{style:tn},mt:{style:tn},mr:{style:tn},mb:{style:tn},ml:{style:tn},mx:{style:tn},my:{style:tn},margin:{style:tn},marginTop:{style:tn},marginRight:{style:tn},marginBottom:{style:tn},marginLeft:{style:tn},marginX:{style:tn},marginY:{style:tn},marginInline:{style:tn},marginInlineStart:{style:tn},marginInlineEnd:{style:tn},marginBlock:{style:tn},marginBlockStart:{style:tn},marginBlockEnd:{style:tn},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Bf},rowGap:{style:Vf},columnGap:{style:Hf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:wi},maxWidth:{style:Fm},minWidth:{transform:wi},height:{transform:wi},maxHeight:{transform:wi},minHeight:{transform:wi},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function gT(...r){const e=r.reduce((n,s)=>n.concat(Object.keys(s)),[]),t=new Set(e);return r.every(n=>t.size===Object.keys(n).length)}function _T(r,e){return typeof r=="function"?r(e):r}function vT(){function r(t,n,s,a){const u={[t]:n,theme:s},c=a[t];if(!c)return{[t]:n};const{cssProperty:f=t,themeKey:d,transform:p,style:m}=c;if(n==null)return null;if(d==="typography"&&n==="inherit")return{[t]:n};const g=Ff(s,d)||{};return m?m(u):Kr(u,n,E=>{let S=yf(g,p,E);return E===S&&typeof E=="string"&&(S=yf(g,p,`${t}${E==="default"?"":ix(E)}`,E)),f===!1?S:{[f]:S}})}function e(t){var n;const{sx:s,theme:a={}}=t||{};if(!s)return null;const u=(n=a.unstable_sxConfig)!=null?n:Gf;function c(f){let d=f;if(typeof f=="function")d=f(a);else if(typeof f!="object")return f;if(!d)return null;const p=DE(a.breakpoints),m=Object.keys(p);let g=p;return Object.keys(d).forEach(x=>{const E=_T(d[x],a);if(E!=null)if(typeof E=="object")if(u[x])g=Hl(g,r(x,E,a,u));else{const S=Kr({theme:a},E,y=>({[x]:y}));gT(S,E)?g[x]=e({sx:E,theme:a}):g=Hl(g,S)}else g=Hl(g,r(x,E,a,u))}),LE(m,g)}return Array.isArray(s)?s.map(c):c(s)}return e}const Wf=vT();Wf.filterProps=["sx"];function yT(r,e){const t=this;return t.vars&&typeof t.getColorSchemeSelector=="function"?{[t.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:t.palette.mode===r?e:{}}const xT=["breakpoints","palette","spacing","shape"];function ox(r={},...e){const{breakpoints:t={},palette:n={},spacing:s,shape:a={}}=r,u=Hs(r,xT),c=RE(t),f=zE(s);let d=$r({breakpoints:c,direction:"ltr",components:{},palette:Xt({mode:"light"},n),spacing:f,shape:Xt({},PE,a)},u);return d.applyStyles=yT,d=e.reduce((p,m)=>$r(p,m),d),d.unstable_sxConfig=Xt({},Gf,u==null?void 0:u.unstable_sxConfig),d.unstable_sx=function(m){return Wf({sx:m,theme:this})},d}function ST(r){return Object.keys(r).length===0}function MT(r=null){const e=zt.useContext(tx);return!e||ST(e)?r:e}const ET=ox();function TT(r=ET){return MT(r)}const wT=["sx"],AT=r=>{var e,t;const n={systemProps:{},otherProps:{}},s=(e=r==null||(t=r.theme)==null?void 0:t.unstable_sxConfig)!=null?e:Gf;return Object.keys(r).forEach(a=>{s[a]?n.systemProps[a]=r[a]:n.otherProps[a]=r[a]}),n};function bT(r){const{sx:e}=r,t=Hs(r,wT),{systemProps:n,otherProps:s}=AT(t);let a;return Array.isArray(e)?a=[n,...e]:typeof e=="function"?a=(...u)=>{const c=e(...u);return mo(c)?Xt({},n,c):n}:a=Xt({},n,e),Xt({},s,{sx:a})}const rv=r=>r,CT=()=>{let r=rv;return{configure(e){r=e},generate(e){return r(e)},reset(){r=rv}}},ax=CT();function lx(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=lx(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function RT(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=lx(r))&&(n&&(n+=" "),n+=e);return n}const PT=["className","component"];function DT(r={}){const{themeId:e,defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:s}=r,a=AE("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Wf);return zt.forwardRef(function(f,d){const p=TT(t),m=bT(f),{className:g,component:x="div"}=m,E=Hs(m,PT);return Is.jsx(a,Xt({as:x,ref:d,className:RT(g,s?s(n):n),theme:e&&p[e]||p},E))})}const LT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function IT(r,e,t="Mui"){const n=LT[e];return n?`${t}-${n}`:`${ax.generate(r)}-${e}`}function UT(r,e,t="Mui"){const n={};return e.forEach(s=>{n[s]=IT(r,s,t)}),n}function NT(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}const OT=Object.freeze(Object.defineProperty({__proto__:null,default:NT},Symbol.toStringTag,{value:"Module"}));function FT(r,e){return Xt({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},e)}var $t={},Nd={exports:{}},sv;function kT(){return sv||(sv=1,function(r){function e(t){return t&&t.__esModule?t:{default:t}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Nd)),Nd.exports}const zT=Vy(R1),BT=Vy(OT);var ov;function HT(){if(ov)return $t;ov=1;var r=kT();Object.defineProperty($t,"__esModule",{value:!0}),$t.alpha=E,$t.blend=L,$t.colorChannel=void 0,$t.darken=y,$t.decomposeColor=u,$t.emphasize=b,$t.getContrastRatio=x,$t.getLuminance=g,$t.hexToRgb=s,$t.hslToRgb=m,$t.lighten=R,$t.private_safeAlpha=S,$t.private_safeColorChannel=void 0,$t.private_safeDarken=v,$t.private_safeEmphasize=N,$t.private_safeLighten=P,$t.recomposeColor=d,$t.rgbToHex=p;var e=r(zT),t=r(BT);function n(T,U=0,w=1){return(0,t.default)(T,U,w)}function s(T){T=T.slice(1);const U=new RegExp(`.{1,${T.length>=6?2:1}}`,"g");let w=T.match(U);return w&&w[0].length===1&&(w=w.map(A=>A+A)),w?`rgb${w.length===4?"a":""}(${w.map((A,k)=>k<3?parseInt(A,16):Math.round(parseInt(A,16)/255*1e3)/1e3).join(", ")})`:""}function a(T){const U=T.toString(16);return U.length===1?`0${U}`:U}function u(T){if(T.type)return T;if(T.charAt(0)==="#")return u(s(T));const U=T.indexOf("("),w=T.substring(0,U);if(["rgb","rgba","hsl","hsla","color"].indexOf(w)===-1)throw new Error((0,e.default)(9,T));let A=T.substring(U+1,T.length-1),k;if(w==="color"){if(A=A.split(" "),k=A.shift(),A.length===4&&A[3].charAt(0)==="/"&&(A[3]=A[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(k)===-1)throw new Error((0,e.default)(10,k))}else A=A.split(",");return A=A.map($=>parseFloat($)),{type:w,values:A,colorSpace:k}}const c=T=>{const U=u(T);return U.values.slice(0,3).map((w,A)=>U.type.indexOf("hsl")!==-1&&A!==0?`${w}%`:w).join(" ")};$t.colorChannel=c;const f=(T,U)=>{try{return c(T)}catch{return T}};$t.private_safeColorChannel=f;function d(T){const{type:U,colorSpace:w}=T;let{values:A}=T;return U.indexOf("rgb")!==-1?A=A.map((k,$)=>$<3?parseInt(k,10):k):U.indexOf("hsl")!==-1&&(A[1]=`${A[1]}%`,A[2]=`${A[2]}%`),U.indexOf("color")!==-1?A=`${w} ${A.join(" ")}`:A=`${A.join(", ")}`,`${U}(${A})`}function p(T){if(T.indexOf("#")===0)return T;const{values:U}=u(T);return`#${U.map((w,A)=>a(A===3?Math.round(255*w):w)).join("")}`}function m(T){T=u(T);const{values:U}=T,w=U[0],A=U[1]/100,k=U[2]/100,$=A*Math.min(k,1-k),G=(K,ce=(K+w/30)%12)=>k-$*Math.max(Math.min(ce-3,9-ce,1),-1);let ee="rgb";const oe=[Math.round(G(0)*255),Math.round(G(8)*255),Math.round(G(4)*255)];return T.type==="hsla"&&(ee+="a",oe.push(U[3])),d({type:ee,values:oe})}function g(T){T=u(T);let U=T.type==="hsl"||T.type==="hsla"?u(m(T)).values:T.values;return U=U.map(w=>(T.type!=="color"&&(w/=255),w<=.03928?w/12.92:((w+.055)/1.055)**2.4)),Number((.2126*U[0]+.7152*U[1]+.0722*U[2]).toFixed(3))}function x(T,U){const w=g(T),A=g(U);return(Math.max(w,A)+.05)/(Math.min(w,A)+.05)}function E(T,U){return T=u(T),U=n(U),(T.type==="rgb"||T.type==="hsl")&&(T.type+="a"),T.type==="color"?T.values[3]=`/${U}`:T.values[3]=U,d(T)}function S(T,U,w){try{return E(T,U)}catch{return T}}function y(T,U){if(T=u(T),U=n(U),T.type.indexOf("hsl")!==-1)T.values[2]*=1-U;else if(T.type.indexOf("rgb")!==-1||T.type.indexOf("color")!==-1)for(let w=0;w<3;w+=1)T.values[w]*=1-U;return d(T)}function v(T,U,w){try{return y(T,U)}catch{return T}}function R(T,U){if(T=u(T),U=n(U),T.type.indexOf("hsl")!==-1)T.values[2]+=(100-T.values[2])*U;else if(T.type.indexOf("rgb")!==-1)for(let w=0;w<3;w+=1)T.values[w]+=(255-T.values[w])*U;else if(T.type.indexOf("color")!==-1)for(let w=0;w<3;w+=1)T.values[w]+=(1-T.values[w])*U;return d(T)}function P(T,U,w){try{return R(T,U)}catch{return T}}function b(T,U=.15){return g(T)>.5?y(T,U):R(T,U)}function N(T,U,w){try{return b(T,U)}catch{return T}}function L(T,U,w,A=1){const k=(oe,K)=>Math.round((oe**(1/A)*(1-w)+K**(1/A)*w)**A),$=u(T),G=u(U),ee=[k($.values[0],G.values[0]),k($.values[1],G.values[1]),k($.values[2],G.values[2])];return d({type:"rgb",values:ee})}return $t}var Ap=HT();const VT=["mode","contrastThreshold","tonalOffset"],av={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:$l.white,default:$l.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Od={text:{primary:$l.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:$l.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function lv(r,e,t,n){const s=n.light||n,a=n.dark||n*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Ap.lighten(r.main,s):e==="dark"&&(r.dark=Ap.darken(r.main,a)))}function GT(r="light"){return r==="dark"?{main:na[200],light:na[50],dark:na[400]}:{main:na[700],light:na[400],dark:na[800]}}function WT(r="light"){return r==="dark"?{main:ta[200],light:ta[50],dark:ta[400]}:{main:ta[500],light:ta[300],dark:ta[700]}}function XT(r="light"){return r==="dark"?{main:ea[500],light:ea[300],dark:ea[700]}:{main:ea[700],light:ea[400],dark:ea[800]}}function jT(r="light"){return r==="dark"?{main:ia[400],light:ia[300],dark:ia[700]}:{main:ia[700],light:ia[500],dark:ia[900]}}function YT(r="light"){return r==="dark"?{main:ra[400],light:ra[300],dark:ra[700]}:{main:ra[800],light:ra[500],dark:ra[900]}}function $T(r="light"){return r==="dark"?{main:Cl[400],light:Cl[300],dark:Cl[700]}:{main:"#ed6c02",light:Cl[500],dark:Cl[900]}}function qT(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:n=.2}=r,s=Hs(r,VT),a=r.primary||GT(e),u=r.secondary||WT(e),c=r.error||XT(e),f=r.info||jT(e),d=r.success||YT(e),p=r.warning||$T(e);function m(S){return Ap.getContrastRatio(S,Od.text.primary)>=t?Od.text.primary:av.text.primary}const g=({color:S,name:y,mainShade:v=500,lightShade:R=300,darkShade:P=700})=>{if(S=Xt({},S),!S.main&&S[v]&&(S.main=S[v]),!S.hasOwnProperty("main"))throw new Error(ql(11,y?` (${y})`:"",v));if(typeof S.main!="string")throw new Error(ql(12,y?` (${y})`:"",JSON.stringify(S.main)));return lv(S,"light",R,n),lv(S,"dark",P,n),S.contrastText||(S.contrastText=m(S.main)),S},x={dark:Od,light:av};return $r(Xt({common:Xt({},$l),mode:e,primary:g({color:a,name:"primary"}),secondary:g({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:g({color:c,name:"error"}),warning:g({color:p,name:"warning"}),info:g({color:f,name:"info"}),success:g({color:d,name:"success"}),grey:C1,contrastThreshold:t,getContrastText:m,augmentColor:g,tonalOffset:n},x[e]),s)}const KT=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function ZT(r){return Math.round(r*1e5)/1e5}const uv={textTransform:"uppercase"},cv='"Roboto", "Helvetica", "Arial", sans-serif';function QT(r,e){const t=typeof e=="function"?e(r):e,{fontFamily:n=cv,fontSize:s=14,fontWeightLight:a=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:f=700,htmlFontSize:d=16,allVariants:p,pxToRem:m}=t,g=Hs(t,KT),x=s/14,E=m||(v=>`${v/d*x}rem`),S=(v,R,P,b,N)=>Xt({fontFamily:n,fontWeight:v,fontSize:E(R),lineHeight:P},n===cv?{letterSpacing:`${ZT(b/R)}em`}:{},N,p),y={h1:S(a,96,1.167,-1.5),h2:S(a,60,1.2,-.5),h3:S(u,48,1.167,0),h4:S(u,34,1.235,.25),h5:S(u,24,1.334,0),h6:S(c,20,1.6,.15),subtitle1:S(u,16,1.75,.15),subtitle2:S(c,14,1.57,.1),body1:S(u,16,1.5,.15),body2:S(u,14,1.43,.15),button:S(c,14,1.75,.4,uv),caption:S(u,12,1.66,.4),overline:S(u,12,2.66,1,uv),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return $r(Xt({htmlFontSize:d,pxToRem:E,fontFamily:n,fontSize:s,fontWeightLight:a,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:f},y),g,{clone:!1})}const JT=.2,ew=.14,tw=.12;function Gt(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${JT})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${ew})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${tw})`].join(",")}const nw=["none",Gt(0,2,1,-1,0,1,1,0,0,1,3,0),Gt(0,3,1,-2,0,2,2,0,0,1,5,0),Gt(0,3,3,-2,0,3,4,0,0,1,8,0),Gt(0,2,4,-1,0,4,5,0,0,1,10,0),Gt(0,3,5,-1,0,5,8,0,0,1,14,0),Gt(0,3,5,-1,0,6,10,0,0,1,18,0),Gt(0,4,5,-2,0,7,10,1,0,2,16,1),Gt(0,5,5,-3,0,8,10,1,0,3,14,2),Gt(0,5,6,-3,0,9,12,1,0,3,16,2),Gt(0,6,6,-3,0,10,14,1,0,4,18,3),Gt(0,6,7,-4,0,11,15,1,0,4,20,3),Gt(0,7,8,-4,0,12,17,2,0,5,22,4),Gt(0,7,8,-4,0,13,19,2,0,5,24,4),Gt(0,7,9,-4,0,14,21,2,0,5,26,4),Gt(0,8,9,-5,0,15,22,2,0,6,28,5),Gt(0,8,10,-5,0,16,24,2,0,6,30,5),Gt(0,8,11,-5,0,17,26,2,0,6,32,5),Gt(0,9,11,-5,0,18,28,2,0,7,34,6),Gt(0,9,12,-6,0,19,29,2,0,7,36,6),Gt(0,10,13,-6,0,20,31,3,0,8,38,7),Gt(0,10,13,-6,0,21,33,3,0,8,40,7),Gt(0,10,14,-6,0,22,35,3,0,8,42,7),Gt(0,11,14,-7,0,23,36,3,0,9,44,8),Gt(0,11,15,-7,0,24,38,3,0,9,46,8)],iw=["duration","easing","delay"],rw={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},sw={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function fv(r){return`${Math.round(r)}ms`}function ow(r){if(!r)return 0;const e=r/36;return Math.round((4+15*e**.25+e/5)*10)}function aw(r){const e=Xt({},rw,r.easing),t=Xt({},sw,r.duration);return Xt({getAutoHeightDuration:ow,create:(s=["all"],a={})=>{const{duration:u=t.standard,easing:c=e.easeInOut,delay:f=0}=a;return Hs(a,iw),(Array.isArray(s)?s:[s]).map(d=>`${d} ${typeof u=="string"?u:fv(u)} ${c} ${typeof f=="string"?f:fv(f)}`).join(",")}},r,{easing:e,duration:t})}const lw={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},uw=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function cw(r={},...e){const{mixins:t={},palette:n={},transitions:s={},typography:a={}}=r,u=Hs(r,uw);if(r.vars&&r.generateCssVars===void 0)throw new Error(ql(18));const c=qT(n),f=ox(r);let d=$r(f,{mixins:FT(f.breakpoints,t),palette:c,shadows:nw.slice(),typography:QT(c,a),transitions:aw(s),zIndex:Xt({},lw)});return d=$r(d,u),d=e.reduce((p,m)=>$r(p,m),d),d.unstable_sxConfig=Xt({},Gf,u==null?void 0:u.unstable_sxConfig),d.unstable_sx=function(m){return Wf({sx:m,theme:this})},d}const fw=UT("MuiBox",["root"]),hw=cw(),dw=DT({themeId:P1,defaultTheme:hw,defaultClassName:fw.root,generateClassName:ax.generate});var Vl=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),n(++r%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function n(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";r=p}var s=(performance||Date).now(),a=s,u=0,c=t(new Vl.Panel("FPS","#0ff","#002")),f=t(new Vl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new Vl.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){u++;var p=(performance||Date).now();if(f.update(p-s,200),p>=a+1e3&&(c.update(u*1e3/(p-a),100),a=p,u=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){s=this.end()},domElement:e,setMode:n}};Vl.Panel=function(r,e,t){var n=1/0,s=0,a=Math.round,u=a(window.devicePixelRatio||1),c=80*u,f=48*u,d=3*u,p=2*u,m=3*u,g=15*u,x=74*u,E=30*u,S=document.createElement("canvas");S.width=c,S.height=f,S.style.cssText="width:80px;height:48px";var y=S.getContext("2d");return y.font="bold "+9*u+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,c,f),y.fillStyle=e,y.fillText(r,d,p),y.fillRect(m,g,x,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,g,x,E),{dom:S,update:function(v,R){n=Math.min(n,v),s=Math.max(s,v),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,c,g),y.fillStyle=e,y.fillText(a(v)+" "+r+" ("+a(n)+"-"+a(s)+")",d,p),y.drawImage(S,m+u,g,x-u,E,m,g,x-u,E),y.fillRect(m+x-u,g,u,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+x-u,g,u,a((1-v/R)*E))}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const km="176",ba={ROTATE:0,DOLLY:1,PAN:2},Sa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pw=0,hv=1,mw=2,ux=1,gw=2,Hr=3,Zr=0,ei=1,Xr=2,Us=0,Ca=1,dv=2,pv=3,mv=4,_w=5,go=100,vw=101,yw=102,xw=103,Sw=104,Mw=200,Ew=201,Tw=202,ww=203,bp=204,Cp=205,Aw=206,bw=207,Cw=208,Rw=209,Pw=210,Dw=211,Lw=212,Iw=213,Uw=214,Rp=0,Pp=1,Dp=2,Ua=3,Lp=4,Ip=5,Up=6,Np=7,zm=0,Nw=1,Ow=2,Ns=0,Fw=1,kw=2,zw=3,Bw=4,Hw=5,Vw=6,Gw=7,cx=300,Na=301,Oa=302,Op=303,Fp=304,Xf=306,xf=1e3,vo=1001,kp=1002,ir=1003,Ww=1004,Rc=1005,gr=1006,Fd=1007,yo=1008,Qr=1009,fx=1010,hx=1011,Jl=1012,Bm=1013,wo=1014,jr=1015,mu=1016,Hm=1017,Vm=1018,eu=1020,dx=35902,px=1021,mx=1022,nr=1023,tu=1026,nu=1027,gx=1028,Gm=1029,_x=1030,Wm=1031,Xm=1033,af=33776,lf=33777,uf=33778,cf=33779,zp=35840,Bp=35841,Hp=35842,Vp=35843,Gp=36196,Wp=37492,Xp=37496,jp=37808,Yp=37809,$p=37810,qp=37811,Kp=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,ff=36492,om=36494,am=36495,vx=36283,lm=36284,um=36285,cm=36286,Xw=3200,jw=3201,jm=0,Yw=1,Rs="",Mi="srgb",Fa="srgb-linear",Sf="linear",Rt="srgb",sa=7680,gv=519,$w=512,qw=513,Kw=514,yx=515,Zw=516,Qw=517,Jw=518,eA=519,_v=35044,vv="300 es",Yr=2e3,Mf=2001;class Co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yv=1234567;const Gl=Math.PI/180,iu=180/Math.PI;function ja(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Ym(r,e){return(r%e+e)%e}function tA(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function nA(r,e,t){return r!==e?(t-r)/(e-r):0}function Wl(r,e,t){return(1-t)*r+t*e}function iA(r,e,t,n){return Wl(r,e,1-Math.exp(-t*n))}function rA(r,e=1){return e-Math.abs(Ym(r,e*2)-e)}function sA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function oA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function aA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lA(r,e){return r+Math.random()*(e-r)}function uA(r){return r*(.5-Math.random())}function cA(r){r!==void 0&&(yv=r);let e=yv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fA(r){return r*Gl}function hA(r){return r*iu}function dA(r){return(r&r-1)===0&&r!==0}function pA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gA(r,e,t,n,s){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+n)/2),p=u((e+n)/2),m=a((e-n)/2),g=u((e-n)/2),x=a((n-e)/2),E=u((n-e)/2);switch(s){case"XYX":r.set(c*p,f*m,f*g,c*d);break;case"YZY":r.set(f*g,c*p,f*m,c*d);break;case"ZXZ":r.set(f*m,f*g,c*p,c*d);break;case"XZX":r.set(c*p,f*E,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*E,c*d);break;case"ZYZ":r.set(f*E,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fm={DEG2RAD:Gl,RAD2DEG:iu,generateUUID:ja,clamp:pt,euclideanModulo:Ym,mapLinear:tA,inverseLerp:nA,lerp:Wl,damp:iA,pingpong:rA,smoothstep:sA,smootherstep:oA,randInt:aA,randFloat:lA,randFloatSpread:uA,seededRandom:cA,degToRad:fA,radToDeg:hA,isPowerOfTwo:dA,ceilPowerOfTwo:pA,floorPowerOfTwo:mA,setQuaternionFromProperEuler:gA,normalize:Kn,denormalize:xa};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*s+e.x,this.y=a*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,s,a,u,c,f,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,f,d)}set(e,t,n,s,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[3],f=n[6],d=n[1],p=n[4],m=n[7],g=n[2],x=n[5],E=n[8],S=s[0],y=s[3],v=s[6],R=s[1],P=s[4],b=s[7],N=s[2],L=s[5],T=s[8];return a[0]=u*S+c*R+f*N,a[3]=u*y+c*P+f*L,a[6]=u*v+c*b+f*T,a[1]=d*S+p*R+m*N,a[4]=d*y+p*P+m*L,a[7]=d*v+p*b+m*T,a[2]=g*S+x*R+E*N,a[5]=g*y+x*P+E*L,a[8]=g*v+x*b+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-n*a*p+n*c*f+s*a*d-s*u*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=p*u-c*d,g=c*f-p*a,x=d*a-u*f,E=t*m+n*g+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=m*S,e[1]=(s*d-p*n)*S,e[2]=(c*n-s*u)*S,e[3]=g*S,e[4]=(p*t-s*f)*S,e[5]=(s*a-c*t)*S,e[6]=x*S,e[7]=(n*f-d*t)*S,e[8]=(u*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*u+d*c)+u+e,-s*d,s*f,-s*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new ot;function xx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _A(){const r=ru("canvas");return r.style.display="block",r}const xv={};function hf(r){r in xv||(xv[r]=!0,console.warn(r))}function vA(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function yA(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xA(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sv=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SA(){const r={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Rt&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(s.r=Ra(s.r),s.g=Ra(s.g),s.b=Ra(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rs?Sf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fa]:{primaries:e,whitePoint:n,transfer:Sf,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Tt=SA();function qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let oa;class MA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oa===void 0&&(oa=ru("canvas")),oa.width=e.width,oa.height=e.height;const s=oa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=qr(a[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qr(t[n]/255)*255):t[n]=qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EA=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(zd(s[u].image)):a.push(zd(s[u]))}else a=zd(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MA.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TA=0;class ti extends Co{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,n=vo,s=vo,a=gr,u=yo,c=nr,f=Qr,d=ti.DEFAULT_ANISOTROPY,p=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=ja(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case vo:e.x=e.x<0?0:1;break;case kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case vo:e.y=e.y<0?0:1;break;case kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=cx;ti.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,d=f[0],p=f[4],m=f[8],g=f[1],x=f[5],E=f[9],S=f[2],y=f[6],v=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-S)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+S)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,b=(x+1)/2,N=(v+1)/2,L=(p+g)/4,T=(m+S)/4,U=(E+y)/4;return P>b&&P>N?P<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(P),s=L/n,a=T/n):b>N?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=L/s,a=U/s):N<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),n=T/a,s=U/a),this.set(n,s,a,t),this}let R=Math.sqrt((y-E)*(y-E)+(m-S)*(m-S)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(m-S)/R,this.z=(g-p)/R,this.w=Math.acos((d+x+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wA extends Co{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new ti(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new $m(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends wA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sx extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ir,this.minFilter=ir,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AA extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ir,this.minFilter=ir,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,u,c){let f=n[s+0],d=n[s+1],p=n[s+2],m=n[s+3];const g=a[u+0],x=a[u+1],E=a[u+2],S=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=g,e[t+1]=x,e[t+2]=E,e[t+3]=S;return}if(m!==S||f!==g||d!==x||p!==E){let y=1-c;const v=f*g+d*x+p*E+m*S,R=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const N=Math.sqrt(P),L=Math.atan2(N,v*R);y=Math.sin(y*L)/N,c=Math.sin(c*L)/N}const b=c*R;if(f=f*y+g*b,d=d*y+x*b,p=p*y+E*b,m=m*y+S*b,y===1-c){const N=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=N,d*=N,p*=N,m*=N}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,u){const c=n[s],f=n[s+1],d=n[s+2],p=n[s+3],m=a[u],g=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+p*m+f*x-d*g,e[t+1]=f*E+p*g+d*m-c*x,e[t+2]=d*E+p*x+c*g-f*m,e[t+3]=p*E-c*m-f*g-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(s/2),m=c(a/2),g=f(n/2),x=f(s/2),E=f(a/2);switch(u){case"XYZ":this._x=g*p*m+d*x*E,this._y=d*x*m-g*p*E,this._z=d*p*E+g*x*m,this._w=d*p*m-g*x*E;break;case"YXZ":this._x=g*p*m+d*x*E,this._y=d*x*m-g*p*E,this._z=d*p*E-g*x*m,this._w=d*p*m+g*x*E;break;case"ZXY":this._x=g*p*m-d*x*E,this._y=d*x*m+g*p*E,this._z=d*p*E+g*x*m,this._w=d*p*m-g*x*E;break;case"ZYX":this._x=g*p*m-d*x*E,this._y=d*x*m+g*p*E,this._z=d*p*E-g*x*m,this._w=d*p*m+g*x*E;break;case"YZX":this._x=g*p*m+d*x*E,this._y=d*x*m+g*p*E,this._z=d*p*E-g*x*m,this._w=d*p*m-g*x*E;break;case"XZY":this._x=g*p*m-d*x*E,this._y=d*x*m-g*p*E,this._z=d*p*E+g*x*m,this._w=d*p*m+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-s)*x}else if(n>c&&n>m){const x=2*Math.sqrt(1+n-c-m);this._w=(p-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(a+d)/x}else if(c>m){const x=2*Math.sqrt(1+c-n-m);this._w=(a-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+m-n-c);this._w=(u-s)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+u*c+s*d-a*f,this._y=s*p+u*f+a*c-n*d,this._z=a*p+u*d+n*f-s*c,this._w=u*p-n*c-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=u*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*s-c*n),p=2*(c*t-a*s),m=2*(a*n-u*t);return this.x=t+f*d+u*m-c*p,this.y=n+f*p+c*d-a*m,this.z=s+f*m+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-a*c,this.y=a*u-n*f,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new j,Ev=new Ao;class Ya{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Qi):Qi.fromBufferAttribute(a,u),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pc.copy(n.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pl),Dc.subVectors(this.max,Pl),aa.subVectors(e.a,Pl),la.subVectors(e.b,Pl),ua.subVectors(e.c,Pl),Es.subVectors(la,aa),Ts.subVectors(ua,la),ro.subVectors(aa,ua);let t=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-ro.z,ro.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,ro.z,0,-ro.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-ro.y,ro.x,0];return!Hd(t,aa,la,ua,Dc)||(t=[1,0,0,0,1,0,0,0,1],!Hd(t,aa,la,ua,Dc))?!1:(Lc.crossVectors(Es,Ts),t=[Lc.x,Lc.y,Lc.z],Hd(t,aa,la,ua,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nr=[new j,new j,new j,new j,new j,new j,new j,new j],Qi=new j,Pc=new Ya,aa=new j,la=new j,ua=new j,Es=new j,Ts=new j,ro=new j,Pl=new j,Dc=new j,Lc=new j,so=new j;function Hd(r,e,t,n,s){for(let a=0,u=r.length-3;a<=u;a+=3){so.fromArray(r,a);const c=s.x*Math.abs(so.x)+s.y*Math.abs(so.y)+s.z*Math.abs(so.z),f=e.dot(so),d=t.dot(so),p=n.dot(so);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const bA=new Ya,Dl=new j,Vd=new j;class gu{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bA.setFromPoints(e).getCenter(n);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const t=Dl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(Vd)),this.expandByPoint(Dl.copy(e.center).sub(Vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Or=new j,Gd=new j,Ic=new j,ws=new j,Wd=new j,Uc=new j,Xd=new j;class jf{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,t),Or.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gd.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),ws.copy(this.origin).sub(Gd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Ic),c=ws.dot(this.direction),f=-ws.dot(Ic),d=ws.lengthSq(),p=Math.abs(1-u*u);let m,g,x,E;if(p>0)if(m=u*f-c,g=u*c-f,E=a*p,m>=0)if(g>=-E)if(g<=E){const S=1/p;m*=S,g*=S,x=m*(m+u*g+2*c)+g*(u*m+g+2*f)+d}else g=a,m=Math.max(0,-(u*g+c)),x=-m*m+g*(g+2*f)+d;else g=-a,m=Math.max(0,-(u*g+c)),x=-m*m+g*(g+2*f)+d;else g<=-E?(m=Math.max(0,-(-u*a+c)),g=m>0?-a:Math.min(Math.max(-a,-f),a),x=-m*m+g*(g+2*f)+d):g<=E?(m=0,g=Math.min(Math.max(-a,-f),a),x=g*(g+2*f)+d):(m=Math.max(0,-(u*a+c)),g=m>0?a:Math.min(Math.max(-a,-f),a),x=-m*m+g*(g+2*f)+d);else g=u>0?-a:a,m=Math.max(0,-(u*g+c)),x=-m*m+g*(g+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Gd).addScaledVector(Ic,g),x}intersectSphere(e,t){Or.subVectors(e.center,this.origin);const n=Or.dot(this.direction),s=Or.dot(Or)-n*n,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||a>s||((a>n||isNaN(n))&&(n=a),(u<s||isNaN(s))&&(s=u),m>=0?(c=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,t,n,s,a){Wd.subVectors(t,e),Uc.subVectors(n,e),Xd.crossVectors(Wd,Uc);let u=this.direction.dot(Xd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ws.subVectors(this.origin,e);const f=c*this.direction.dot(Uc.crossVectors(ws,Uc));if(f<0)return null;const d=c*this.direction.dot(Wd.cross(ws));if(d<0||f+d>u)return null;const p=-c*ws.dot(Xd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,s,a,u,c,f,d,p,m,g,x,E,S,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,f,d,p,m,g,x,E,S,y)}set(e,t,n,s,a,u,c,f,d,p,m,g,x,E,S,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=u,v[9]=c,v[13]=f,v[2]=d,v[6]=p,v[10]=m,v[14]=g,v[3]=x,v[7]=E,v[11]=S,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ca.setFromMatrixColumn(e,0).length(),a=1/ca.setFromMatrixColumn(e,1).length(),u=1/ca.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=u*p,x=u*m,E=c*p,S=c*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=x+E*d,t[5]=g-S*d,t[9]=-c*f,t[2]=S-g*d,t[6]=E+x*d,t[10]=u*f}else if(e.order==="YXZ"){const g=f*p,x=f*m,E=d*p,S=d*m;t[0]=g+S*c,t[4]=E*c-x,t[8]=u*d,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=x*c-E,t[6]=S+g*c,t[10]=u*f}else if(e.order==="ZXY"){const g=f*p,x=f*m,E=d*p,S=d*m;t[0]=g-S*c,t[4]=-u*m,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*p,t[9]=S-g*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const g=u*p,x=u*m,E=c*p,S=c*m;t[0]=f*p,t[4]=E*d-x,t[8]=g*d+S,t[1]=f*m,t[5]=S*d+g,t[9]=x*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,x=u*d,E=c*f,S=c*d;t[0]=f*p,t[4]=S-g*m,t[8]=E*m+x,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*m+E,t[10]=g-S*m}else if(e.order==="XZY"){const g=u*f,x=u*d,E=c*f,S=c*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=g*m+S,t[5]=u*p,t[9]=x*m-E,t[2]=E*m-x,t[6]=c*p,t[10]=S*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CA,e,RA)}lookAt(e,t,n){const s=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),As.crossVectors(n,xi),As.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),As.crossVectors(n,xi)),As.normalize(),Nc.crossVectors(xi,As),s[0]=As.x,s[4]=Nc.x,s[8]=xi.x,s[1]=As.y,s[5]=Nc.y,s[9]=xi.y,s[2]=As.z,s[6]=Nc.z,s[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[4],f=n[8],d=n[12],p=n[1],m=n[5],g=n[9],x=n[13],E=n[2],S=n[6],y=n[10],v=n[14],R=n[3],P=n[7],b=n[11],N=n[15],L=s[0],T=s[4],U=s[8],w=s[12],A=s[1],k=s[5],$=s[9],G=s[13],ee=s[2],oe=s[6],K=s[10],ce=s[14],B=s[3],se=s[7],le=s[11],z=s[15];return a[0]=u*L+c*A+f*ee+d*B,a[4]=u*T+c*k+f*oe+d*se,a[8]=u*U+c*$+f*K+d*le,a[12]=u*w+c*G+f*ce+d*z,a[1]=p*L+m*A+g*ee+x*B,a[5]=p*T+m*k+g*oe+x*se,a[9]=p*U+m*$+g*K+x*le,a[13]=p*w+m*G+g*ce+x*z,a[2]=E*L+S*A+y*ee+v*B,a[6]=E*T+S*k+y*oe+v*se,a[10]=E*U+S*$+y*K+v*le,a[14]=E*w+S*G+y*ce+v*z,a[3]=R*L+P*A+b*ee+N*B,a[7]=R*T+P*k+b*oe+N*se,a[11]=R*U+P*$+b*K+N*le,a[15]=R*w+P*G+b*ce+N*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],m=e[6],g=e[10],x=e[14],E=e[3],S=e[7],y=e[11],v=e[15];return E*(+a*f*m-s*d*m-a*c*g+n*d*g+s*c*x-n*f*x)+S*(+t*f*x-t*d*g+a*u*g-s*u*x+s*d*p-a*f*p)+y*(+t*d*m-t*c*x-a*u*m+n*u*x+a*c*p-n*d*p)+v*(-s*c*p-t*f*m+t*c*g+s*u*m-n*u*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=e[9],g=e[10],x=e[11],E=e[12],S=e[13],y=e[14],v=e[15],R=m*y*d-S*g*d+S*f*x-c*y*x-m*f*v+c*g*v,P=E*g*d-p*y*d-E*f*x+u*y*x+p*f*v-u*g*v,b=p*S*d-E*m*d+E*c*x-u*S*x-p*c*v+u*m*v,N=E*m*f-p*S*f-E*c*g+u*S*g+p*c*y-u*m*y,L=t*R+n*P+s*b+a*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/L;return e[0]=R*T,e[1]=(S*g*a-m*y*a-S*s*x+n*y*x+m*s*v-n*g*v)*T,e[2]=(c*y*a-S*f*a+S*s*d-n*y*d-c*s*v+n*f*v)*T,e[3]=(m*f*a-c*g*a-m*s*d+n*g*d+c*s*x-n*f*x)*T,e[4]=P*T,e[5]=(p*y*a-E*g*a+E*s*x-t*y*x-p*s*v+t*g*v)*T,e[6]=(E*f*a-u*y*a-E*s*d+t*y*d+u*s*v-t*f*v)*T,e[7]=(u*g*a-p*f*a+p*s*d-t*g*d-u*s*x+t*f*x)*T,e[8]=b*T,e[9]=(E*m*a-p*S*a-E*n*x+t*S*x+p*n*v-t*m*v)*T,e[10]=(u*S*a-E*c*a+E*n*d-t*S*d-u*n*v+t*c*v)*T,e[11]=(p*c*a-u*m*a-p*n*d+t*m*d+u*n*x-t*c*x)*T,e[12]=N*T,e[13]=(p*S*s-E*m*s+E*n*g-t*S*g-p*n*y+t*m*y)*T,e[14]=(E*c*s-u*S*s-E*n*f+t*S*f+u*n*y-t*c*y)*T,e[15]=(u*m*s-p*c*s+p*n*f-t*m*f-u*n*g+t*c*g)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+n,d*c-s*f,d*f+s*c,0,d*c+s*f,p*c+n,p*f-s*u,0,d*f-s*c,p*f+s*u,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,u){return this.set(1,n,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,m=c+c,g=a*d,x=a*p,E=a*m,S=u*p,y=u*m,v=c*m,R=f*d,P=f*p,b=f*m,N=n.x,L=n.y,T=n.z;return s[0]=(1-(S+v))*N,s[1]=(x+b)*N,s[2]=(E-P)*N,s[3]=0,s[4]=(x-b)*L,s[5]=(1-(g+v))*L,s[6]=(y+R)*L,s[7]=0,s[8]=(E+P)*T,s[9]=(y-R)*T,s[10]=(1-(g+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ca.set(s[0],s[1],s[2]).length();const u=ca.set(s[4],s[5],s[6]).length(),c=ca.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ji.copy(this);const d=1/a,p=1/u,m=1/c;return Ji.elements[0]*=d,Ji.elements[1]*=d,Ji.elements[2]*=d,Ji.elements[4]*=p,Ji.elements[5]*=p,Ji.elements[6]*=p,Ji.elements[8]*=m,Ji.elements[9]*=m,Ji.elements[10]*=m,t.setFromRotationMatrix(Ji),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,s,a,u,c=Yr){const f=this.elements,d=2*a/(t-e),p=2*a/(n-s),m=(t+e)/(t-e),g=(n+s)/(n-s);let x,E;if(c===Yr)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Mf)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,u,c=Yr){const f=this.elements,d=1/(t-e),p=1/(n-s),m=1/(u-a),g=(t+e)*d,x=(n+s)*p;let E,S;if(c===Yr)E=(u+a)*m,S=-2*m;else if(c===Mf)E=a*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=S,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ca=new j,Ji=new Bt,CA=new j(0,0,0),RA=new j(1,1,1),As=new j,Nc=new j,xi=new j,Tv=new Bt,wv=new Ao;class rr{constructor(e=0,t=0,n=0,s=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],f=s[1],d=s[5],p=s[9],m=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PA=0;const Av=new j,fa=new Ao,Fr=new Bt,Oc=new j,Ll=new j,DA=new j,LA=new Ao,bv=new j(1,0,0),Cv=new j(0,1,0),Rv=new j(0,0,1),Pv={type:"added"},IA={type:"removed"},ha={type:"childadded",child:null},jd={type:"childremoved",child:null};class Gn extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new j,t=new rr,n=new Ao,s=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,t){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oc.copy(e):Oc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(Ll,Oc,this.up):Fr.lookAt(Oc,Ll,this.up),this.quaternion.setFromRotationMatrix(Fr),s&&(Fr.extractRotation(s.matrixWorld),fa.setFromRotationMatrix(Fr),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),ha.child=e,this.dispatchEvent(ha),ha.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IA),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,DA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,LA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),m=u(e.shapes),g=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=s,n;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Gn.DEFAULT_UP=new j(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const er=new j,kr=new j,Yd=new j,zr=new j,da=new j,pa=new j,Dv=new j,$d=new j,qd=new j,Kd=new j,Zd=new Kt,Qd=new Kt,Jd=new Kt;class tr{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),er.subVectors(e,t),s.cross(er);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){er.subVectors(s,t),kr.subVectors(n,t),Yd.subVectors(e,t);const u=er.dot(er),c=er.dot(kr),f=er.dot(Yd),d=kr.dot(kr),p=kr.dot(Yd),m=u*d-c*c;if(m===0)return a.set(0,0,0),null;const g=1/m,x=(d*f-c*p)*g,E=(u*p-c*f)*g;return a.set(1-x-E,E,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,n,s,a,u,c,f){return this.getBarycoord(e,t,n,s,zr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,zr.x),f.addScaledVector(u,zr.y),f.addScaledVector(c,zr.z),f)}static getInterpolatedAttribute(e,t,n,s,a,u){return Zd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Zd.fromBufferAttribute(e,t),Qd.fromBufferAttribute(e,n),Jd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Zd,a.x),u.addScaledVector(Qd,a.y),u.addScaledVector(Jd,a.z),u}static isFrontFacing(e,t,n,s){return er.subVectors(n,t),kr.subVectors(e,t),er.cross(kr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),er.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return tr.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let u,c;da.subVectors(s,n),pa.subVectors(a,n),$d.subVectors(e,n);const f=da.dot($d),d=pa.dot($d);if(f<=0&&d<=0)return t.copy(n);qd.subVectors(e,s);const p=da.dot(qd),m=pa.dot(qd);if(p>=0&&m<=p)return t.copy(s);const g=f*m-p*d;if(g<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(n).addScaledVector(da,u);Kd.subVectors(e,a);const x=da.dot(Kd),E=pa.dot(Kd);if(E>=0&&x<=E)return t.copy(a);const S=x*d-f*E;if(S<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(n).addScaledVector(pa,c);const y=p*E-x*m;if(y<=0&&m-p>=0&&x-E>=0)return Dv.subVectors(a,s),c=(m-p)/(m-p+(x-E)),t.copy(s).addScaledVector(Dv,c);const v=1/(y+S+g);return u=S*v,c=g*v,t.copy(n).addScaledVector(da,u).addScaledVector(pa,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function ep(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=Ym(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=ep(u,a,e+1/3),this.g=ep(u,a,e),this.b=ep(u,a,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const n=Ex[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Tt.fromWorkingColorSpace(zn.copy(this),e),Math.round(pt(zn.r*255,0,255))*65536+Math.round(pt(zn.g*255,0,255))*256+Math.round(pt(zn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,s=zn.g,a=zn.b,u=Math.max(n,s,a),c=Math.min(n,s,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const m=u-c;switch(d=p<=.5?m/(u+c):m/(2-u-c),u){case n:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-n)/m+2;break;case a:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Mi){Tt.fromWorkingColorSpace(zn.copy(this),e);const t=zn.r,n=zn.g,s=zn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Fc);const n=Wl(bs.h,Fc.h,t),s=Wl(bs.s,Fc.s,t),a=Wl(bs.l,Fc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new at;at.NAMES=Ex;let UA=0;class Sr extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ca,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Cp,this.blendEquation=go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(n.blending=this.blending),this.side!==Zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bp&&(n.blendSrc=this.blendSrc),this.blendDst!==Cp&&(n.blendDst=this.blendDst),this.blendEquation!==go&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qm extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new j,kc=new ut;let NA=0;class yr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_v,this.updateRanges=[],this.gpuType=jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}}class Tx extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wx extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wn extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let OA=0;const ki=new Bt,tp=new Gn,ma=new j,Si=new Ya,Il=new Ya,Tn=new j;class Wi extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?wx:Tx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,n){return ki.makeTranslation(e,t,n),this.applyMatrix4(ki),this}scale(e,t,n){return ki.makeScale(e,t,n),this.applyMatrix4(ki),this}lookAt(e){return tp.lookAt(e),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Il.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(Si.min,Il.min),Si.expandByPoint(Tn),Tn.addVectors(Si.max,Il.max),Si.expandByPoint(Tn)):(Si.expandByPoint(Il.min),Si.expandByPoint(Il.max))}Si.getCenter(n);let s=0;for(let a=0,u=e.count;a<u;a++)Tn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Tn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Tn.fromBufferAttribute(c,d),f&&(ma.fromBufferAttribute(e,d),Tn.add(ma)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let U=0;U<n.count;U++)c[U]=new j,f[U]=new j;const d=new j,p=new j,m=new j,g=new ut,x=new ut,E=new ut,S=new j,y=new j;function v(U,w,A){d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,w),m.fromBufferAttribute(n,A),g.fromBufferAttribute(a,U),x.fromBufferAttribute(a,w),E.fromBufferAttribute(a,A),p.sub(d),m.sub(d),x.sub(g),E.sub(g);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(S.copy(p).multiplyScalar(E.y).addScaledVector(m,-x.y).multiplyScalar(k),y.copy(m).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(k),c[U].add(S),c[w].add(S),c[A].add(S),f[U].add(y),f[w].add(y),f[A].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let U=0,w=R.length;U<w;++U){const A=R[U],k=A.start,$=A.count;for(let G=k,ee=k+$;G<ee;G+=3)v(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new j,b=new j,N=new j,L=new j;function T(U){N.fromBufferAttribute(s,U),L.copy(N);const w=c[U];P.copy(w),P.sub(N.multiplyScalar(N.dot(w))).normalize(),b.crossVectors(L,w);const k=b.dot(f[U])<0?-1:1;u.setXYZW(U,P.x,P.y,P.z,k)}for(let U=0,w=R.length;U<w;++U){const A=R[U],k=A.start,$=A.count;for(let G=k,ee=k+$;G<ee;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const s=new j,a=new j,u=new j,c=new j,f=new j,d=new j,p=new j,m=new j;if(e)for(let g=0,x=e.count;g<x;g+=3){const E=e.getX(g+0),S=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,S),u.fromBufferAttribute(t,y),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),c.add(p),f.add(p),d.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(S,f.x,f.y,f.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,m=c.normalized,g=new d.constructor(f.length*p);let x=0,E=0;for(let S=0,y=f.length;S<y;S++){c.isInterleavedBufferAttribute?x=f[S]*c.data.stride+c.offset:x=f[S]*p;for(let v=0;v<p;v++)g[E++]=d[x++]}return new yr(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],d=e(f,n);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,m=d.length;p<m;p++){const g=d[p],x=e(g,n);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,g=d.length;m<g;m++){const x=d[m];p.push(x.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],m=a[d];for(let g=0,x=m.length;g<x;g++)p.push(m[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new Bt,oo=new jf,zc=new gu,Iv=new j,Bc=new j,Hc=new j,Vc=new j,np=new j,Gc=new j,Uv=new j,Wc=new j;class Jn extends Gn{constructor(e=new Wi,t=new qm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Gc.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],m=a[f];p!==0&&(np.fromBufferAttribute(m,e),u?Gc.addScaledVector(np,p):Gc.addScaledVector(np.sub(t),p))}t.add(Gc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(a),oo.copy(e.ray).recast(e.near),!(zc.containsPoint(oo.origin)===!1&&(oo.intersectSphere(zc,Iv)===null||oo.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Lv.copy(a).invert(),oo.copy(e.ray).applyMatrix4(Lv),!(n.boundingBox!==null&&oo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}_computeIntersections(e,t,n){let s;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,S=g.length;E<S;E++){const y=g[E],v=u[y.materialIndex],R=Math.max(y.start,x.start),P=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let b=R,N=P;b<N;b+=3){const L=c.getX(b),T=c.getX(b+1),U=c.getX(b+2);s=Xc(this,v,e,n,d,p,m,L,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let y=E,v=S;y<v;y+=3){const R=c.getX(y),P=c.getX(y+1),b=c.getX(y+2);s=Xc(this,u,e,n,d,p,m,R,P,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,S=g.length;E<S;E++){const y=g[E],v=u[y.materialIndex],R=Math.max(y.start,x.start),P=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let b=R,N=P;b<N;b+=3){const L=b,T=b+1,U=b+2;s=Xc(this,v,e,n,d,p,m,L,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),S=Math.min(f.count,x.start+x.count);for(let y=E,v=S;y<v;y+=3){const R=y,P=y+1,b=y+2;s=Xc(this,u,e,n,d,p,m,R,P,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function FA(r,e,t,n,s,a,u,c){let f;if(e.side===ei?f=n.intersectTriangle(u,a,s,!0,c):f=n.intersectTriangle(s,a,u,e.side===Zr,c),f===null)return null;Wc.copy(c),Wc.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Wc);return d<t.near||d>t.far?null:{distance:d,point:Wc.clone(),object:r}}function Xc(r,e,t,n,s,a,u,c,f,d){r.getVertexPosition(c,Bc),r.getVertexPosition(f,Hc),r.getVertexPosition(d,Vc);const p=FA(r,e,t,n,Bc,Hc,Vc,Uv);if(p){const m=new j;tr.getBarycoord(Uv,Bc,Hc,Vc,m),s&&(p.uv=tr.getInterpolatedAttribute(s,c,f,d,m,new ut)),a&&(p.uv1=tr.getInterpolatedAttribute(a,c,f,d,m,new ut)),u&&(p.normal=tr.getInterpolatedAttribute(u,c,f,d,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:f,c:d,normal:new j,materialIndex:0};tr.getNormal(Bc,Hc,Vc,g.normal),p.face=g,p.barycoord=m}return p}class $a extends Wi{constructor(e=1,t=1,n=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],m=[];let g=0,x=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,s,u,2),E("x","z","y",1,-1,e,n,-t,s,u,3),E("x","y","z",1,-1,e,t,n,s,a,4),E("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new wn(d,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(m,2));function E(S,y,v,R,P,b,N,L,T,U,w){const A=b/T,k=N/U,$=b/2,G=N/2,ee=L/2,oe=T+1,K=U+1;let ce=0,B=0;const se=new j;for(let le=0;le<K;le++){const z=le*k-G;for(let ne=0;ne<oe;ne++){const Ae=ne*A-$;se[S]=Ae*R,se[y]=z*P,se[v]=ee,d.push(se.x,se.y,se.z),se[S]=0,se[y]=0,se[v]=L>0?1:-1,p.push(se.x,se.y,se.z),m.push(ne/T),m.push(1-le/U),ce+=1}}for(let le=0;le<U;le++)for(let z=0;z<T;z++){const ne=g+z+oe*le,Ae=g+z+oe*(le+1),J=g+(z+1)+oe*(le+1),fe=g+(z+1)+oe*le;f.push(ne,Ae,fe),f.push(Ae,J,fe),B+=6}c.addGroup(x,B,w),x+=B,g+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ka(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zn(r){const e={};for(let t=0;t<r.length;t++){const n=ka(r[t]);for(const s in n)e[s]=n[s]}return e}function kA(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ax(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ef={clone:ka,merge:Zn};var zA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ka(e.uniforms),this.uniformsGroups=kA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new j,Nv=new ut,Ov=new ut;class Ti extends bx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return iu*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Nv,Ov),t.subVectors(Ov,Nv)}setViewOffset(e,t,n,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*s/f,t-=u.offsetY*n/d,s*=u.width/f,n*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ga=-90,_a=1;class HA extends Gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ti(ga,_a,e,t);s.layers=this.layers,this.add(s);const a=new Ti(ga,_a,e,t);a.layers=this.layers,this.add(a);const u=new Ti(ga,_a,e,t);u.layers=this.layers,this.add(u);const c=new Ti(ga,_a,e,t);c.layers=this.layers,this.add(c);const f=new Ti(ga,_a,e,t);f.layers=this.layers,this.add(f);const d=new Ti(ga,_a,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Yr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Mf)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,g,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Cx extends ti{constructor(e=[],t=Na,n,s,a,u,c,f,d,p){super(e,t,n,s,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VA extends ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $a(5,5,5),a=new Mr({name:"CubemapFromEquirect",uniforms:ka(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Us});a.uniforms.tEquirect.value=t;const u=new Jn(s,a),c=t.minFilter;return t.minFilter===yo&&(t.minFilter=gr),new HA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(a)}}class Ol extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GA={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),v=this._getHandJoint(d,S);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=p.position.distanceTo(m.position),x=.02,E=.005;d.inputState.pinching&&g>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ol;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class WA extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rp=new j,XA=new j,jA=new ot;class Gr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=rp.subVectors(n,t).cross(XA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rp),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jA.getNormalMatrix(e),s=this.coplanarPoint(rp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ao=new gu,jc=new j;class Rx{constructor(e=new Gr,t=new Gr,n=new Gr,s=new Gr,a=new Gr,u=new Gr){this.planes=[e,t,n,s,a,u]}set(e,t,n,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yr){const n=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],f=s[3],d=s[4],p=s[5],m=s[6],g=s[7],x=s[8],E=s[9],S=s[10],y=s[11],v=s[12],R=s[13],P=s[14],b=s[15];if(n[0].setComponents(f-a,g-d,y-x,b-v).normalize(),n[1].setComponents(f+a,g+d,y+x,b+v).normalize(),n[2].setComponents(f+u,g+p,y+E,b+R).normalize(),n[3].setComponents(f-u,g-p,y-E,b-R).normalize(),n[4].setComponents(f-c,g-m,y-S,b-P).normalize(),t===Yr)n[5].setComponents(f+c,g+m,y+S,b+P).normalize();else if(t===Mf)n[5].setComponents(c,m,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(e){return ao.center.set(0,0,0),ao.radius=.7071067811865476,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jc.x=s.normal.x>0?e.max.x:e.min.x,jc.y=s.normal.y>0?e.max.y:e.min.y,jc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class df extends Sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tf=new j,wf=new j,Fv=new Bt,Ul=new jf,Yc=new gu,sp=new j,kv=new j;class YA extends Gn{constructor(e=new Wi,t=new df){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Tf.fromBufferAttribute(t,s-1),wf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tf.distanceTo(wf);e.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=a,e.ray.intersectsSphere(Yc)===!1)return;Fv.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(Fv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const x=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let S=x,y=E-1;S<y;S+=d){const v=p.getX(S),R=p.getX(S+1),P=$c(this,e,Ul,f,v,R,S);P&&t.push(P)}if(this.isLineLoop){const S=p.getX(E-1),y=p.getX(x),v=$c(this,e,Ul,f,S,y,E-1);v&&t.push(v)}}else{const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let S=x,y=E-1;S<y;S+=d){const v=$c(this,e,Ul,f,S,S+1,S);v&&t.push(v)}if(this.isLineLoop){const S=$c(this,e,Ul,f,E-1,x,E-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function $c(r,e,t,n,s,a,u){const c=r.geometry.attributes.position;if(Tf.fromBufferAttribute(c,s),wf.fromBufferAttribute(c,a),t.distanceSqToSegment(Tf,wf,sp,kv)>n)return;sp.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(sp);if(!(d<e.near||d>e.far))return{distance:d,point:kv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const zv=new j,Bv=new j;class Hv extends YA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)zv.fromBufferAttribute(t,s),Bv.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zv.distanceTo(Bv);e.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fl extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vv=new Bt,hm=new jf,qc=new gu,Kc=new j;class op extends Gn{constructor(e=new Wi,t=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(s),qc.radius+=a,e.ray.intersectsSphere(qc)===!1)return;Vv.copy(s).invert(),hm.copy(e.ray).applyMatrix4(Vv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,m=n.attributes.position;if(d!==null){const g=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let E=g,S=x;E<S;E++){const y=d.getX(E);Kc.fromBufferAttribute(m,y),Gv(Kc,y,f,s,e,t,this)}}else{const g=Math.max(0,u.start),x=Math.min(m.count,u.start+u.count);for(let E=g,S=x;E<S;E++)Kc.fromBufferAttribute(m,E),Gv(Kc,E,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Gv(r,e,t,n,s,a,u){const c=hm.distanceSqToPoint(r);if(c<t){const f=new j;hm.closestPointToPoint(r,f),f.applyMatrix4(n);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Px extends ti{constructor(e,t,n=wo,s,a,u,c=ir,f=ir,d,p=tu){if(p!==tu&&p!==nu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,u,c,f,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _u extends Wi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(n),f=Math.floor(s),d=c+1,p=f+1,m=e/c,g=t/f,x=[],E=[],S=[],y=[];for(let v=0;v<p;v++){const R=v*g-u;for(let P=0;P<d;P++){const b=P*m-a;E.push(b,-R,0),S.push(0,0,1),y.push(P/c),y.push(1-v/f)}}for(let v=0;v<f;v++)for(let R=0;R<c;R++){const P=R+d*v,b=R+d*(v+1),N=R+1+d*(v+1),L=R+1+d*v;x.push(P,b,L),x.push(b,N,L)}this.setIndex(x),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Km extends Wi{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(u+c,Math.PI);let d=0;const p=[],m=new j,g=new j,x=[],E=[],S=[],y=[];for(let v=0;v<=n;v++){const R=[],P=v/n;let b=0;v===0&&u===0?b=.5/t:v===n&&f===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const L=N/t;m.x=-e*Math.cos(s+L*a)*Math.sin(u+P*c),m.y=e*Math.cos(u+P*c),m.z=e*Math.sin(s+L*a)*Math.sin(u+P*c),E.push(m.x,m.y,m.z),g.copy(m).normalize(),S.push(g.x,g.y,g.z),y.push(L+b,1-P),R.push(d++)}p.push(R)}for(let v=0;v<n;v++)for(let R=0;R<t;R++){const P=p[v][R+1],b=p[v][R],N=p[v+1][R],L=p[v+1][R+1];(v!==0||u>0)&&x.push(P,b,L),(v!==n-1||f<Math.PI)&&x.push(b,N,L)}this.setIndex(x),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Km(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wv extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $A extends Sr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qA extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Af={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Dx{constructor(e,t,n){const s=this;let a=!1,u=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&s.onStart!==void 0&&s.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=d.length;m<g;m+=2){const x=d[m],E=d[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const ZA=new Dx;class vu{constructor(e){this.manager=e!==void 0?e:ZA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Br={};class QA extends Error{constructor(e,t){super(e),this.response=t}}class JA extends vu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Af.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Br[e]!==void 0){Br[e].push({onLoad:t,onProgress:n,onError:s});return}Br[e]=[],Br[e].push({onLoad:t,onProgress:n,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,f=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Br[e],m=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=g?parseInt(g):0,E=x!==0;let S=0;const y=new ReadableStream({start(v){R();function R(){m.read().then(({done:P,value:b})=>{if(P)v.close();else{S+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:E,loaded:S,total:x});for(let L=0,T=p.length;L<T;L++){const U=p[L];U.onProgress&&U.onProgress(N)}v.enqueue(b),R()}},P=>{v.error(P)})}}});return new Response(y)}else throw new QA(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),g=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(g);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Af.add(e,d);const p=Br[e];delete Br[e];for(let m=0,g=p.length;m<g;m++){const x=p[m];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=Br[e];if(p===void 0)throw this.manager.itemError(e),d;delete Br[e];for(let m=0,g=p.length;m<g;m++){const x=p[m];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eb extends vu{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Af.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=ru("img");function f(){p(),Af.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(m){p(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class tb extends vu{constructor(e){super(e)}load(e,t,n,s){const a=new ti,u=new eb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class nb extends Gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ib extends bx{constructor(e=-1,t=1,n=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rb extends nb{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sb extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ob{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xv(){return performance.now()}class jv{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ab extends Co{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yv(r,e,t,n){const s=lb(n);switch(t){case px:return r*e;case gx:return r*e/s.components*s.byteLength;case Gm:return r*e/s.components*s.byteLength;case _x:return r*e*2/s.components*s.byteLength;case Wm:return r*e*2/s.components*s.byteLength;case mx:return r*e*3/s.components*s.byteLength;case nr:return r*e*4/s.components*s.byteLength;case Xm:return r*e*4/s.components*s.byteLength;case af:case lf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uf:case cf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bp:case Vp:return Math.max(r,16)*Math.max(e,8)/4;case zp:case Hp:return Math.max(r,8)*Math.max(e,8)/2;case Gp:case Wp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $p:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ff:case om:case am:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vx:case lm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case um:case cm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lb(r){switch(r){case Qr:case fx:return{byteLength:1,components:1};case Jl:case hx:case mu:return{byteLength:2,components:1};case Hm:case Vm:return{byteLength:2,components:4};case wo:case Bm:case jr:return{byteLength:4,components:1};case dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:km}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=km);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lx(){let r=null,e=!1,t=null,n=null;function s(a,u){t(a,u),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function ub(r){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,d,p),c.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,d){const p=f.array,m=f.updateRanges;if(r.bindBuffer(d,c),m.length===0)r.bufferSubData(d,0,p);else{m.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<m.length;x++){const E=m[g],S=m[x];S.start<=E.start+E.count+1?E.count=Math.max(E.count,S.start+S.count-E.start):(++g,m[g]=S)}m.length=g+1;for(let x=0,E=m.length;x<E;x++){const S=m[x];r.bufferSubData(d,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:s,remove:a,update:u}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ib=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,nC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,uC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$C=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QC=`#ifdef USE_SKINNING
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
#endif`,JC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rR=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cR=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_R=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vR=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ER=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,AR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,CR=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,LR=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,UR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,OR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,kR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,VR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:cb,alphahash_pars_fragment:fb,alphamap_fragment:hb,alphamap_pars_fragment:db,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:yb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Cb,color_fragment:Rb,color_pars_fragment:Pb,color_pars_vertex:Db,color_vertex:Lb,common:Ib,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Ob,displacementmap_vertex:Fb,emissivemap_fragment:kb,emissivemap_pars_fragment:zb,colorspace_fragment:Bb,colorspace_pars_fragment:Hb,envmap_fragment:Vb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Wb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:nC,envmap_vertex:jb,fog_vertex:Yb,fog_pars_vertex:$b,fog_fragment:qb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:eC,lights_pars_begin:tC,lights_toon_fragment:iC,lights_toon_pars_fragment:rC,lights_phong_fragment:sC,lights_phong_pars_fragment:oC,lights_physical_fragment:aC,lights_physical_pars_fragment:lC,lights_fragment_begin:uC,lights_fragment_maps:cC,lights_fragment_end:fC,logdepthbuf_fragment:hC,logdepthbuf_pars_fragment:dC,logdepthbuf_pars_vertex:pC,logdepthbuf_vertex:mC,map_fragment:gC,map_pars_fragment:_C,map_particle_fragment:vC,map_particle_pars_fragment:yC,metalnessmap_fragment:xC,metalnessmap_pars_fragment:SC,morphinstance_vertex:MC,morphcolor_vertex:EC,morphnormal_vertex:TC,morphtarget_pars_vertex:wC,morphtarget_vertex:AC,normal_fragment_begin:bC,normal_fragment_maps:CC,normal_pars_fragment:RC,normal_pars_vertex:PC,normal_vertex:DC,normalmap_pars_fragment:LC,clearcoat_normal_fragment_begin:IC,clearcoat_normal_fragment_maps:UC,clearcoat_pars_fragment:NC,iridescence_pars_fragment:OC,opaque_fragment:FC,packing:kC,premultiplied_alpha_fragment:zC,project_vertex:BC,dithering_fragment:HC,dithering_pars_fragment:VC,roughnessmap_fragment:GC,roughnessmap_pars_fragment:WC,shadowmap_pars_fragment:XC,shadowmap_pars_vertex:jC,shadowmap_vertex:YC,shadowmask_pars_fragment:$C,skinbase_vertex:qC,skinning_pars_vertex:KC,skinning_vertex:ZC,skinnormal_vertex:QC,specularmap_fragment:JC,specularmap_pars_fragment:eR,tonemapping_fragment:tR,tonemapping_pars_fragment:nR,transmission_fragment:iR,transmission_pars_fragment:rR,uv_pars_fragment:sR,uv_pars_vertex:oR,uv_vertex:aR,worldpos_vertex:lR,background_vert:uR,background_frag:cR,backgroundCube_vert:fR,backgroundCube_frag:hR,cube_vert:dR,cube_frag:pR,depth_vert:mR,depth_frag:gR,distanceRGBA_vert:_R,distanceRGBA_frag:vR,equirect_vert:yR,equirect_frag:xR,linedashed_vert:SR,linedashed_frag:MR,meshbasic_vert:ER,meshbasic_frag:TR,meshlambert_vert:wR,meshlambert_frag:AR,meshmatcap_vert:bR,meshmatcap_frag:CR,meshnormal_vert:RR,meshnormal_frag:PR,meshphong_vert:DR,meshphong_frag:LR,meshphysical_vert:IR,meshphysical_frag:UR,meshtoon_vert:NR,meshtoon_frag:OR,points_vert:FR,points_frag:kR,shadow_vert:zR,shadow_frag:BR,sprite_vert:HR,sprite_frag:VR},we={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pr={basic:{uniforms:Zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Zn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Zn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Zn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Zn([we.points,we.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Zn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Zn([we.common,we.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Zn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Zn([we.sprite,we.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Zn([we.common,we.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Zn([we.lights,we.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};pr.physical={uniforms:Zn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Zc={r:0,b:0,g:0},lo=new rr,GR=new Bt;function WR(r,e,t,n,s,a,u){const c=new at(0);let f=a===!0?0:1,d,p,m=null,g=0,x=null;function E(P){let b=P.isScene===!0?P.background:null;return b&&b.isTexture&&(b=(P.backgroundBlurriness>0?t:e).get(b)),b}function S(P){let b=!1;const N=E(P);N===null?v(c,f):N&&N.isColor&&(v(N,1),b=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===Xf)?(p===void 0&&(p=new Jn(new $a(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ka(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),lo.copy(b.backgroundRotation),lo.x*=-1,lo.y*=-1,lo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(GR.makeRotationFromEuler(lo)),p.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Rt,(m!==N||g!==N.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=N,g=N.version,x=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Jn(new _u(2,2),new Mr({name:"BackgroundMaterial",uniforms:ka(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Rt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||g!==N.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,m=N,g=N.version,x=r.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function v(P,b){P.getRGB(Zc,Ax(r)),n.buffers.color.setClear(Zc.r,Zc.g,Zc.b,b,u)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,b=1){c.set(P),f=b,v(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,v(c,f)},render:S,addToRenderList:y,dispose:R}}function XR(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,u=!1;function c(A,k,$,G,ee){let oe=!1;const K=m(G,$,k);a!==K&&(a=K,d(a.object)),oe=x(A,G,$,ee),oe&&E(A,G,$,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,b(A,k,$,G),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function f(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function p(A){return r.deleteVertexArray(A)}function m(A,k,$){const G=$.wireframe===!0;let ee=n[A.id];ee===void 0&&(ee={},n[A.id]=ee);let oe=ee[k.id];oe===void 0&&(oe={},ee[k.id]=oe);let K=oe[G];return K===void 0&&(K=g(f()),oe[G]=K),K}function g(A){const k=[],$=[],G=[];for(let ee=0;ee<t;ee++)k[ee]=0,$[ee]=0,G[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:G,object:A,attributes:{},index:null}}function x(A,k,$,G){const ee=a.attributes,oe=k.attributes;let K=0;const ce=$.getAttributes();for(const B in ce)if(ce[B].location>=0){const le=ee[B];let z=oe[B];if(z===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),le===void 0||le.attribute!==z||z&&le.data!==z.data)return!0;K++}return a.attributesNum!==K||a.index!==G}function E(A,k,$,G){const ee={},oe=k.attributes;let K=0;const ce=$.getAttributes();for(const B in ce)if(ce[B].location>=0){let le=oe[B];le===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const z={};z.attribute=le,le&&le.data&&(z.data=le.data),ee[B]=z,K++}a.attributes=ee,a.attributesNum=K,a.index=G}function S(){const A=a.newAttributes;for(let k=0,$=A.length;k<$;k++)A[k]=0}function y(A){v(A,0)}function v(A,k){const $=a.newAttributes,G=a.enabledAttributes,ee=a.attributeDivisors;$[A]=1,G[A]===0&&(r.enableVertexAttribArray(A),G[A]=1),ee[A]!==k&&(r.vertexAttribDivisor(A,k),ee[A]=k)}function R(){const A=a.newAttributes,k=a.enabledAttributes;for(let $=0,G=k.length;$<G;$++)k[$]!==A[$]&&(r.disableVertexAttribArray($),k[$]=0)}function P(A,k,$,G,ee,oe,K){K===!0?r.vertexAttribIPointer(A,k,$,ee,oe):r.vertexAttribPointer(A,k,$,G,ee,oe)}function b(A,k,$,G){S();const ee=G.attributes,oe=$.getAttributes(),K=k.defaultAttributeValues;for(const ce in oe){const B=oe[ce];if(B.location>=0){let se=ee[ce];if(se===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),se!==void 0){const le=se.normalized,z=se.itemSize,ne=e.get(se);if(ne===void 0)continue;const Ae=ne.buffer,J=ne.type,fe=ne.bytesPerElement,Me=J===r.INT||J===r.UNSIGNED_INT||se.gpuType===Bm;if(se.isInterleavedBufferAttribute){const ve=se.data,Te=ve.stride,Xe=se.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<B.locationSize;Ve++)v(B.location+Ve,ve.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<B.locationSize;Ve++)y(B.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ve=0;Ve<B.locationSize;Ve++)P(B.location+Ve,z/B.locationSize,J,le,Te*fe,(Xe+z/B.locationSize*Ve)*fe,Me)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)v(B.location+ve,se.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ve=0;ve<B.locationSize;ve++)P(B.location+ve,z/B.locationSize,J,le,z*fe,z/B.locationSize*ve*fe,Me)}}else if(K!==void 0){const le=K[ce];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(B.location,le);break;case 3:r.vertexAttrib3fv(B.location,le);break;case 4:r.vertexAttrib4fv(B.location,le);break;default:r.vertexAttrib1fv(B.location,le)}}}}R()}function N(){U();for(const A in n){const k=n[A];for(const $ in k){const G=k[$];for(const ee in G)p(G[ee].object),delete G[ee];delete k[$]}delete n[A]}}function L(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const $ in k){const G=k[$];for(const ee in G)p(G[ee].object),delete G[ee];delete k[$]}delete n[A.id]}function T(A){for(const k in n){const $=n[k];if($[A.id]===void 0)continue;const G=$[A.id];for(const ee in G)p(G[ee].object),delete G[ee];delete $[A.id]}}function U(){w(),u=!0,a!==s&&(a=s,d(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:U,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:y,disableUnusedAttributes:R}}function jR(r,e,t){let n;function s(d){n=d}function a(d,p){r.drawArrays(n,d,p),t.update(p,n,1)}function u(d,p,m){m!==0&&(r.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function c(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let x=0;for(let E=0;E<m;E++)x+=p[E];t.update(x,n,1)}function f(d,p,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)u(d[E],p[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(n,d,0,p,0,g,0,m);let E=0;for(let S=0;S<m;S++)E+=p[S]*g[S];t.update(E,n,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function YR(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(T){return!(T!==nr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){const U=T===mu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jr&&!U)}function f(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:S,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:b,vertexTextures:N,maxSamples:L}}function $R(r){const e=this;let t=null,n=0,s=!1,a=!1;const u=new Gr,c=new ot,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||n!==0||s;return s=g,n=m.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,x){const E=m.clippingPlanes,S=m.clipIntersection,y=m.clipShadows,v=r.get(m);if(!s||E===null||E.length===0||a&&!y)a?p(null):d();else{const R=a?0:n,P=R*4;let b=v.clippingState||null;f.value=b,b=p(E,g,P,x);for(let N=0;N!==P;++N)b[N]=t[N];v.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,x,E){const S=m!==null?m.length:0;let y=null;if(S!==0){if(y=f.value,E!==!0||y===null){const v=x+S*4,R=g.matrixWorldInverse;c.getNormalMatrix(R),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,b=x;P!==S;++P,b+=4)u.copy(m[P]).applyMatrix4(R,c),u.normal.toArray(y,b),y[b+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function qR(r){let e=new WeakMap;function t(u,c){return c===Op?u.mapping=Na:c===Fp&&(u.mapping=Oa),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Op||c===Fp)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new VA(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ma=4,$v=[.125,.215,.35,.446,.526,.582],_o=20,ap=new ib,qv=new at;let lp=null,up=0,cp=0,fp=!1;const ho=(1+Math.sqrt(5))/2,va=1/ho,Kv=[new j(-ho,va,0),new j(ho,va,0),new j(-va,0,ho),new j(va,0,ho),new j(0,ho,-va),new j(0,ho,va),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],KR=new j;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:u=256,position:c=KR}=a;lp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ey(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,up,cp),this._renderer.xr.enabled=fp,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Na||e.mapping===Oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gr,minFilter:gr,generateMipmaps:!1,type:mu,format:nr,colorSpace:Fa,depthBuffer:!1},s=Qv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qv(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZR(a)),this._blurMaterial=QR(a,e,t)}return s}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,n,s,a){const f=new Ti(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,x=m.toneMapping;m.getClearColor(qv),m.toneMapping=Ns,m.autoClear=!1;const E=new qm({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),S=new Jn(new $a,E);let y=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,y=!0):(E.color.copy(qv),y=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(f.up.set(0,d[R],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[R],a.y,a.z)):P===1?(f.up.set(0,0,d[R]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[R],a.z)):(f.up.set(0,d[R],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[R]));const b=this._cubeSize;Qc(s,P*b,R>2?b:0,b,b),m.setRenderTarget(s),y&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=x,m.autoClear=g,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Na||e.mapping===Oa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ey()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Qc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,ap)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Kv[(s-a-1)%Kv.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",a),this._halfBlur(u,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Jn(this._lodPlanes[s],d),g=d.uniforms,x=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*_o-1),S=a/E,y=isFinite(a)?1+Math.floor(p*S):_o;y>_o&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_o}`);const v=[];let R=0;for(let T=0;T<_o;++T){const U=T/S,w=Math.exp(-U*U/2);v.push(w),T===0?R+=w:T<y&&(R+=2*w)}for(let T=0;T<v.length;T++)v[T]=v[T]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-n;const b=this._sizeLods[s],N=3*b*(s>P-Ma?s-P+Ma:0),L=4*(this._cubeSize-b);Qc(t,N,L,3*b,2*b),f.setRenderTarget(t),f.render(m,ap)}}function ZR(r){const e=[],t=[],n=[];let s=r;const a=r-Ma+1+$v.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>r-Ma?f=$v[u-r+Ma-1]:u===0&&(f=0),n.push(f);const d=1/(c-2),p=-d,m=1+d,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,E=6,S=3,y=2,v=1,R=new Float32Array(S*E*x),P=new Float32Array(y*E*x),b=new Float32Array(v*E*x);for(let L=0;L<x;L++){const T=L%3*2/3-1,U=L>2?0:-1,w=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];R.set(w,S*E*L),P.set(g,y*E*L);const A=[L,L,L,L,L,L];b.set(A,v*E*L)}const N=new Wi;N.setAttribute("position",new yr(R,S)),N.setAttribute("uv",new yr(P,y)),N.setAttribute("faceIndex",new yr(b,v)),e.push(N),s>Ma&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qv(r,e,t){const n=new ks(r,e,t);return n.texture.mapping=Xf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function QR(r,e,t){const n=new Float32Array(_o),s=new j(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Jv(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function ey(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Zm(){return`

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
	`}function JR(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,d=f===Op||f===Fp,p=f===Na||f===Oa;if(d||p){let m=e.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Zv(r)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const x=c.image;return d&&x&&x.height>0||p&&x&&s(x)?(t===null&&(t=new Zv(r)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function eP(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hf("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tP(r,e,t,n){const s={},a=new WeakMap;function u(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const x=a.get(g);x&&(e.remove(x),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const x in g)e.update(g[x],r.ARRAY_BUFFER)}function d(m){const g=[],x=m.index,E=m.attributes.position;let S=0;if(x!==null){const R=x.array;S=x.version;for(let P=0,b=R.length;P<b;P+=3){const N=R[P+0],L=R[P+1],T=R[P+2];g.push(N,L,L,T,T,N)}}else if(E!==void 0){const R=E.array;S=E.version;for(let P=0,b=R.length/3-1;P<b;P+=3){const N=P+0,L=P+1,T=P+2;g.push(N,L,L,T,T,N)}}else return;const y=new(xx(g)?wx:Tx)(g,1);y.version=S;const v=a.get(m);v&&e.remove(v),a.set(m,y)}function p(m){const g=a.get(m);if(g){const x=m.index;x!==null&&g.version<x.version&&d(m)}else d(m);return a.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function nP(r,e,t){let n;function s(g){n=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function f(g,x){r.drawElements(n,x,a,g*u),t.update(x,n,1)}function d(g,x,E){E!==0&&(r.drawElementsInstanced(n,x,a,g*u,E),t.update(x,n,E))}function p(g,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,a,g,0,E);let y=0;for(let v=0;v<E;v++)y+=x[v];t.update(y,n,1)}function m(g,x,E,S){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)d(g[v]/u,x[v],S[v]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,a,g,0,S,0,E);let v=0;for(let R=0;R<E;R++)v+=x[R]*S[R];t.update(v,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function iP(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rP(r,e,t){const n=new WeakMap,s=new Kt;function a(u,c,f){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let w=function(){T.dispose(),n.delete(c),c.removeEventListener("dispose",w)};g!==void 0&&g.texture.dispose();const x=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let P=0;x===!0&&(P=1),E===!0&&(P=2),S===!0&&(P=3);let b=c.attributes.position.count*P,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*N*4*m),T=new Sx(L,b,N,m);T.type=jr,T.needsUpdate=!0;const U=P*4;for(let A=0;A<m;A++){const k=y[A],$=v[A],G=R[A],ee=b*N*4*A;for(let oe=0;oe<k.count;oe++){const K=oe*U;x===!0&&(s.fromBufferAttribute(k,oe),L[ee+K+0]=s.x,L[ee+K+1]=s.y,L[ee+K+2]=s.z,L[ee+K+3]=0),E===!0&&(s.fromBufferAttribute($,oe),L[ee+K+4]=s.x,L[ee+K+5]=s.y,L[ee+K+6]=s.z,L[ee+K+7]=0),S===!0&&(s.fromBufferAttribute(G,oe),L[ee+K+8]=s.x,L[ee+K+9]=s.y,L[ee+K+10]=s.z,L[ee+K+11]=G.itemSize===4?s.w:1)}}g={count:m,texture:T,size:new ut(b,N)},n.set(c,g),c.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let x=0;for(let S=0;S<d.length;S++)x+=d[S];const E=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",d)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function sP(r,e,t,n){let s=new WeakMap;function a(f){const d=n.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function u(){s=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const Ix=new ti,ty=new Px(1,1),Ux=new Sx,Nx=new AA,Ox=new Cx,ny=[],iy=[],ry=new Float32Array(16),sy=new Float32Array(9),oy=new Float32Array(4);function qa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=ny[s];if(a===void 0&&(a=new Float32Array(s),ny[s]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yf(r,e){let t=iy[e];t===void 0&&(t=new Int32Array(e),iy[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function lP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function uP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function cP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;oy.set(n),r.uniformMatrix2fv(this.addr,!1,oy),vn(t,n)}}function fP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;sy.set(n),r.uniformMatrix3fv(this.addr,!1,sy),vn(t,n)}}function hP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;ry.set(n),r.uniformMatrix4fv(this.addr,!1,ry),vn(t,n)}}function dP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function mP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function gP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function _P(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function yP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function xP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function SP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(ty.compareFunction=yx,a=ty):a=Ix,t.setTexture2D(e||a,s)}function MP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nx,s)}function EP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ox,s)}function TP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ux,s)}function wP(r){switch(r){case 5126:return oP;case 35664:return aP;case 35665:return lP;case 35666:return uP;case 35674:return cP;case 35675:return fP;case 35676:return hP;case 5124:case 35670:return dP;case 35667:case 35671:return pP;case 35668:case 35672:return mP;case 35669:case 35673:return gP;case 5125:return _P;case 36294:return vP;case 36295:return yP;case 36296:return xP;case 35678:case 36198:case 36298:case 36306:case 35682:return SP;case 35679:case 36299:case 36307:return MP;case 35680:case 36300:case 36308:case 36293:return EP;case 36289:case 36303:case 36311:case 36292:return TP}}function AP(r,e){r.uniform1fv(this.addr,e)}function bP(r,e){const t=qa(e,this.size,2);r.uniform2fv(this.addr,t)}function CP(r,e){const t=qa(e,this.size,3);r.uniform3fv(this.addr,t)}function RP(r,e){const t=qa(e,this.size,4);r.uniform4fv(this.addr,t)}function PP(r,e){const t=qa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function DP(r,e){const t=qa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LP(r,e){const t=qa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IP(r,e){r.uniform1iv(this.addr,e)}function UP(r,e){r.uniform2iv(this.addr,e)}function NP(r,e){r.uniform3iv(this.addr,e)}function OP(r,e){r.uniform4iv(this.addr,e)}function FP(r,e){r.uniform1uiv(this.addr,e)}function kP(r,e){r.uniform2uiv(this.addr,e)}function zP(r,e){r.uniform3uiv(this.addr,e)}function BP(r,e){r.uniform4uiv(this.addr,e)}function HP(r,e,t){const n=this.cache,s=e.length,a=Yf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Ix,a[u])}function VP(r,e,t){const n=this.cache,s=e.length,a=Yf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Nx,a[u])}function GP(r,e,t){const n=this.cache,s=e.length,a=Yf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Ox,a[u])}function WP(r,e,t){const n=this.cache,s=e.length,a=Yf(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Ux,a[u])}function XP(r){switch(r){case 5126:return AP;case 35664:return bP;case 35665:return CP;case 35666:return RP;case 35674:return PP;case 35675:return DP;case 35676:return LP;case 5124:case 35670:return IP;case 35667:case 35671:return UP;case 35668:case 35672:return NP;case 35669:case 35673:return OP;case 5125:return FP;case 36294:return kP;case 36295:return zP;case 36296:return BP;case 35678:case 36198:case 36298:case 36306:case 35682:return HP;case 35679:case 36299:case 36307:return VP;case 35680:case 36300:case 36308:case 36293:return GP;case 36289:case 36303:case 36311:case 36292:return WP}}class jP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wP(t.type)}}class YP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XP(t.type)}}class $P{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const hp=/(\w+)(\])?(\[|\.)?/g;function ay(r,e){r.seq.push(e),r.map[e.id]=e}function qP(r,e,t){const n=r.name,s=n.length;for(hp.lastIndex=0;;){const a=hp.exec(n),u=hp.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===s){ay(t,d===void 0?new jP(c,r,e):new YP(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new $P(c),ay(t,m)),t=m}}}class pf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);qP(a,u,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function ly(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const KP=37297;let ZP=0;function QP(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const uy=new ot;function JP(r){Tt._getMatrix(uy,Tt.workingColorSpace,r);const e=`mat3( ${uy.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Sf:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cy(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+QP(r.getShaderSource(e),u)}else return s}function e2(r,e){const t=JP(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t2(r,e){let t;switch(e){case Fw:t="Linear";break;case kw:t="Reinhard";break;case zw:t="Cineon";break;case Bw:t="ACESFilmic";break;case Vw:t="AgX";break;case Gw:t="Neutral";break;case Hw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jc=new j;function n2(){Tt.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function r2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function kl(r){return r!==""}function fy(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(r){return r.replace(o2,l2)}const a2=new Map;function l2(r,e){let t=lt[e];if(t===void 0){const n=a2.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dm(t)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dy(r){return r.replace(u2,c2)}function c2(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function py(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gw?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function h2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Na:case Oa:e="ENVMAP_TYPE_CUBE";break;case Xf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Oa:e="ENVMAP_MODE_REFRACTION";break}return e}function p2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zm:e="ENVMAP_BLENDING_MULTIPLY";break;case Nw:e="ENVMAP_BLENDING_MIX";break;case Ow:e="ENVMAP_BLENDING_ADD";break}return e}function m2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function g2(r,e,t,n){const s=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=f2(t),d=h2(t),p=d2(t),m=p2(t),g=m2(t),x=i2(t),E=r2(a),S=s.createProgram();let y,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(kl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(kl).join(`
`),v.length>0&&(v+=`
`)):(y=[py(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),v=[py(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?t2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,e2("linearToOutputTexel",t.outputColorSpace),n2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kl).join(`
`)),u=dm(u),u=fy(u,t),u=hy(u,t),c=dm(c),c=fy(c,t),c=hy(c,t),u=dy(u),c=dy(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=R+y+u,b=R+v+c,N=ly(s,s.VERTEX_SHADER,P),L=ly(s,s.FRAGMENT_SHADER,b);s.attachShader(S,N),s.attachShader(S,L),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(k){if(r.debug.checkShaderErrors){const $=s.getProgramInfoLog(S).trim(),G=s.getShaderInfoLog(N).trim(),ee=s.getShaderInfoLog(L).trim();let oe=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,N,L);else{const ce=cy(s,N,"vertex"),B=cy(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+ce+`
`+B)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||ee==="")&&(K=!1);K&&(k.diagnostics={runnable:oe,programLog:$,vertexShader:{log:G,prefix:y},fragmentShader:{log:ee,prefix:v}})}s.deleteShader(N),s.deleteShader(L),U=new pf(s,S),w=s2(s,S)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,KP)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZP++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=L,this}let _2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y2(e),t.set(e,n)),n}}class y2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function x2(r,e,t,n,s,a,u){const c=new Mx,f=new v2,d=new Set,p=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return d.add(w),w===0?"uv":`uv${w}`}function y(w,A,k,$,G){const ee=$.fog,oe=G.geometry,K=w.isMeshStandardMaterial?$.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),B=ce&&ce.mapping===Xf?ce.image.height:null,se=E[w.type];w.precision!==null&&(x=s.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,z=le!==void 0?le.length:0;let ne=0;oe.morphAttributes.position!==void 0&&(ne=1),oe.morphAttributes.normal!==void 0&&(ne=2),oe.morphAttributes.color!==void 0&&(ne=3);let Ae,J,fe,Me;if(se){const xt=pr[se];Ae=xt.vertexShader,J=xt.fragmentShader}else Ae=w.vertexShader,J=w.fragmentShader,f.update(w),fe=f.getVertexShaderID(w),Me=f.getFragmentShaderID(w);const ve=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Xe=G.isInstancedMesh===!0,Ve=G.isBatchedMesh===!0,It=!!w.map,Ut=!!w.matcap,ct=!!ce,V=!!w.aoMap,Xn=!!w.lightMap,mt=!!w.bumpMap,ft=!!w.normalMap,je=!!w.displacementMap,Ct=!!w.emissiveMap,Ge=!!w.metalnessMap,O=!!w.roughnessMap,D=w.anisotropy>0,ie=w.clearcoat>0,de=w.dispersion>0,_e=w.iridescence>0,he=w.sheen>0,He=w.transmission>0,be=D&&!!w.anisotropyMap,qe=ie&&!!w.clearcoatMap,$e=ie&&!!w.clearcoatNormalMap,ye=ie&&!!w.clearcoatRoughnessMap,Ne=_e&&!!w.iridescenceMap,Je=_e&&!!w.iridescenceThicknessMap,et=he&&!!w.sheenColorMap,Oe=he&&!!w.sheenRoughnessMap,ht=!!w.specularMap,it=!!w.specularColorMap,bt=!!w.specularIntensityMap,X=He&&!!w.transmissionMap,Ce=He&&!!w.thicknessMap,ue=!!w.gradientMap,pe=!!w.alphaMap,De=w.alphaTest>0,Pe=!!w.alphaHash,rt=!!w.extensions;let Ot=Ns;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const dn={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:J,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Ve,batchingColor:Ve&&G._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&G.instanceColor!==null,instancingMorph:Xe&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Fa,alphaToCoverage:!!w.alphaToCoverage,map:It,matcap:Ut,envMap:ct,envMapMode:ct&&ce.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Xn,bumpMap:mt,normalMap:ft,displacementMap:g&&je,emissiveMap:Ct,normalMapObjectSpace:ft&&w.normalMapType===Yw,normalMapTangentSpace:ft&&w.normalMapType===jm,metalnessMap:Ge,roughnessMap:O,anisotropy:D,anisotropyMap:be,clearcoat:ie,clearcoatMap:qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ye,dispersion:de,iridescence:_e,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:ht,specularColorMap:it,specularIntensityMap:bt,transmission:He,transmissionMap:X,thicknessMap:Ce,gradientMap:ue,opaque:w.transparent===!1&&w.blending===Ca&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Pe,combine:w.combine,mapUv:It&&S(w.map.channel),aoMapUv:V&&S(w.aoMap.channel),lightMapUv:Xn&&S(w.lightMap.channel),bumpMapUv:mt&&S(w.bumpMap.channel),normalMapUv:ft&&S(w.normalMap.channel),displacementMapUv:je&&S(w.displacementMap.channel),emissiveMapUv:Ct&&S(w.emissiveMap.channel),metalnessMapUv:Ge&&S(w.metalnessMap.channel),roughnessMapUv:O&&S(w.roughnessMap.channel),anisotropyMapUv:be&&S(w.anisotropyMap.channel),clearcoatMapUv:qe&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&S(w.sheenRoughnessMap.channel),specularMapUv:ht&&S(w.specularMap.channel),specularColorMapUv:it&&S(w.specularColorMap.channel),specularIntensityMapUv:bt&&S(w.specularIntensityMap.channel),transmissionMapUv:X&&S(w.transmissionMap.channel),thicknessMapUv:Ce&&S(w.thicknessMap.channel),alphaMapUv:pe&&S(w.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(ft||D),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!oe.attributes.uv&&(It||pe),fog:!!ee,useFog:w.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:G.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:It&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ct&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xr,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:rt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&w.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dn.vertexUv1s=d.has(1),dn.vertexUv2s=d.has(2),dn.vertexUv3s=d.has(3),d.clear(),dn}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)A.push(k),A.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(R(A,w),P(A,w),A.push(r.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function R(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function P(w,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),w.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),w.push(c.mask)}function b(w){const A=E[w.type];let k;if(A){const $=pr[A];k=Ef.clone($.uniforms)}else k=w.uniforms;return k}function N(w,A){let k;for(let $=0,G=p.length;$<G;$++){const ee=p[$];if(ee.cacheKey===A){k=ee,++k.usedTimes;break}}return k===void 0&&(k=new g2(r,A,w,a),p.push(k)),k}function L(w){if(--w.usedTimes===0){const A=p.indexOf(w);p[A]=p[p.length-1],p.pop(),w.destroy()}}function T(w){f.remove(w)}function U(){f.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:N,releaseProgram:L,releaseShaderCache:T,programs:p,dispose:U}}function S2(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function s(u,c,f){r.get(u)[c]=f}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function M2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function my(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gy(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function u(m,g,x,E,S,y){let v=r[e];return v===void 0?(v={id:m.id,object:m,geometry:g,material:x,groupOrder:E,renderOrder:m.renderOrder,z:S,group:y},r[e]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=x,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=S,v.group=y),e++,v}function c(m,g,x,E,S,y){const v=u(m,g,x,E,S,y);x.transmission>0?n.push(v):x.transparent===!0?s.push(v):t.push(v)}function f(m,g,x,E,S,y){const v=u(m,g,x,E,S,y);x.transmission>0?n.unshift(v):x.transparent===!0?s.unshift(v):t.unshift(v)}function d(m,g){t.length>1&&t.sort(m||M2),n.length>1&&n.sort(g||my),s.length>1&&s.sort(g||my)}function p(){for(let m=e,g=r.length;m<g;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:f,finish:p,sort:d}}function E2(){let r=new WeakMap;function e(n,s){const a=r.get(n);let u;return a===void 0?(u=new gy,r.set(n,[u])):s>=a.length?(u=new gy,a.push(u)):u=a[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function T2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new at};break;case"SpotLight":t={position:new j,direction:new j,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function w2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A2=0;function b2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C2(r){const e=new T2,t=w2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const s=new j,a=new Bt,u=new Bt;function c(d){let p=0,m=0,g=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let x=0,E=0,S=0,y=0,v=0,R=0,P=0,b=0,N=0,L=0,T=0;d.sort(b2);for(let w=0,A=d.length;w<A;w++){const k=d[w],$=k.color,G=k.intensity,ee=k.distance,oe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=$.r*G,m+=$.g*G,g+=$.b*G;else if(k.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(k.sh.coefficients[K],G);T++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,n.directionalShadow[x]=B,n.directionalShadowMap[x]=oe,n.directionalShadowMatrix[x]=k.shadow.matrix,R++}n.directional[x]=K,x++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy($).multiplyScalar(G),K.distance=ee,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,n.spot[S]=K;const ce=k.shadow;if(k.map&&(n.spotLightMap[N]=k.map,N++,ce.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[S]=ce.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,n.spotShadow[S]=B,n.spotShadowMap[S]=oe,b++}S++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy($).multiplyScalar(G),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),n.rectArea[y]=K,y++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const ce=k.shadow,B=t.get(k);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,n.pointShadow[E]=B,n.pointShadowMap[E]=oe,n.pointShadowMatrix[E]=k.shadow.matrix,P++}n.point[E]=K,E++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(G),K.groundColor.copy(k.groundColor).multiplyScalar(G),n.hemi[v]=K,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const U=n.hash;(U.directionalLength!==x||U.pointLength!==E||U.spotLength!==S||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==R||U.numPointShadows!==P||U.numSpotShadows!==b||U.numSpotMaps!==N||U.numLightProbes!==T)&&(n.directional.length=x,n.spot.length=S,n.rectArea.length=y,n.point.length=E,n.hemi.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=b+N-L,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=T,U.directionalLength=x,U.pointLength=E,U.spotLength=S,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=R,U.numPointShadows=P,U.numSpotShadows=b,U.numSpotMaps=N,U.numLightProbes=T,n.version=A2++)}function f(d,p){let m=0,g=0,x=0,E=0,S=0;const y=p.matrixWorldInverse;for(let v=0,R=d.length;v<R;v++){const P=d[v];if(P.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),m++}else if(P.isSpotLight){const b=n.spot[x];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),u.identity(),a.copy(P.matrixWorld),a.premultiply(y),u.extractRotation(a),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const b=n.point[g];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(y),S++}}}return{setup:c,setupView:f,state:n}}function _y(r){const e=new C2(r),t=[],n=[];function s(p){d.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function R2(r){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new _y(r),e.set(s,[c])):a>=u.length?(c=new _y(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const P2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D2=`uniform sampler2D shadow_pass;
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
}`;function L2(r,e,t){let n=new Rx;const s=new ut,a=new ut,u=new Kt,c=new qA({depthPacking:jw}),f=new KA,d={},p=t.maxTextureSize,m={[Zr]:ei,[ei]:Zr,[Xr]:Xr},g=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:P2,fragmentShader:D2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Wi;E.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Jn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ux;let v=this.type;this.render=function(L,T,U){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const w=r.getRenderTarget(),A=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Us),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=v!==Hr&&this.type===Hr,ee=v===Hr&&this.type!==Hr;for(let oe=0,K=L.length;oe<K;oe++){const ce=L[oe],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const se=B.getFrameExtents();if(s.multiply(se),a.copy(B.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/se.x),s.x=a.x*se.x,B.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/se.y),s.y=a.y*se.y,B.mapSize.y=a.y)),B.map===null||G===!0||ee===!0){const z=this.type!==Hr?{minFilter:ir,magFilter:ir}:{};B.map!==null&&B.map.dispose(),B.map=new ks(s.x,s.y,z),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const le=B.getViewportCount();for(let z=0;z<le;z++){const ne=B.getViewport(z);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),$.viewport(u),B.updateMatrices(ce,z),n=B.getFrustum(),b(T,U,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Hr&&R(B,U),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(w,A,k)};function R(L,T){const U=e.update(S);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ks(s.x,s.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(T,null,U,g,S,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(T,null,U,x,S,null)}function P(L,T,U,w){let A=null;const k=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)A=k;else if(A=U.isPointLight===!0?f:c,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=A.uuid,G=T.uuid;let ee=d[$];ee===void 0&&(ee={},d[$]=ee);let oe=ee[G];oe===void 0&&(oe=A.clone(),ee[G]=oe,T.addEventListener("dispose",N)),A=oe}if(A.visible=T.visible,A.wireframe=T.wireframe,w===Hr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:m[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=r.properties.get(A);$.light=U}return A}function b(L,T,U,w,A){if(L.visible===!1)return;if(L.layers.test(T.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Hr)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const G=e.update(L),ee=L.material;if(Array.isArray(ee)){const oe=G.groups;for(let K=0,ce=oe.length;K<ce;K++){const B=oe[K],se=ee[B.materialIndex];if(se&&se.visible){const le=P(L,se,w,A);L.onBeforeShadow(r,L,T,U,G,le,B),r.renderBufferDirect(U,null,G,le,L,B),L.onAfterShadow(r,L,T,U,G,le,B)}}}else if(ee.visible){const oe=P(L,ee,w,A);L.onBeforeShadow(r,L,T,U,G,oe,null),r.renderBufferDirect(U,null,G,oe,L,null),L.onAfterShadow(r,L,T,U,G,oe,null)}}const $=L.children;for(let G=0,ee=$.length;G<ee;G++)b($[G],T,U,w,A)}function N(L){L.target.removeEventListener("dispose",N);for(const U in d){const w=d[U],A=L.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const I2={[Rp]:Pp,[Dp]:Up,[Lp]:Np,[Ua]:Ip,[Pp]:Rp,[Up]:Dp,[Np]:Lp,[Ip]:Ua};function U2(r,e){function t(){let X=!1;const Ce=new Kt;let ue=null;const pe=new Kt(0,0,0,0);return{setMask:function(De){ue!==De&&!X&&(r.colorMask(De,De,De,De),ue=De)},setLocked:function(De){X=De},setClear:function(De,Pe,rt,Ot,dn){dn===!0&&(De*=Ot,Pe*=Ot,rt*=Ot),Ce.set(De,Pe,rt,Ot),pe.equals(Ce)===!1&&(r.clearColor(De,Pe,rt,Ot),pe.copy(Ce))},reset:function(){X=!1,ue=null,pe.set(-1,0,0,0)}}}function n(){let X=!1,Ce=!1,ue=null,pe=null,De=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=Pe;const Ot=De;De=null,this.setClear(Ot)}},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Pe){ue!==Pe&&!X&&(r.depthMask(Pe),ue=Pe)},setFunc:function(Pe){if(Ce&&(Pe=I2[Pe]),pe!==Pe){switch(Pe){case Rp:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case Dp:r.depthFunc(r.LESS);break;case Ua:r.depthFunc(r.LEQUAL);break;case Lp:r.depthFunc(r.EQUAL);break;case Ip:r.depthFunc(r.GEQUAL);break;case Up:r.depthFunc(r.GREATER);break;case Np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){De!==Pe&&(Ce&&(Pe=1-Pe),r.clearDepth(Pe),De=Pe)},reset:function(){X=!1,ue=null,pe=null,De=null,Ce=!1}}}function s(){let X=!1,Ce=null,ue=null,pe=null,De=null,Pe=null,rt=null,Ot=null,dn=null;return{setTest:function(xt){X||(xt?ve(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!X&&(r.stencilMask(xt),Ce=xt)},setFunc:function(xt,ni,jn){(ue!==xt||pe!==ni||De!==jn)&&(r.stencilFunc(xt,ni,jn),ue=xt,pe=ni,De=jn)},setOp:function(xt,ni,jn){(Pe!==xt||rt!==ni||Ot!==jn)&&(r.stencilOp(xt,ni,jn),Pe=xt,rt=ni,Ot=jn)},setLocked:function(xt){X=xt},setClear:function(xt){dn!==xt&&(r.clearStencil(xt),dn=xt)},reset:function(){X=!1,Ce=null,ue=null,pe=null,De=null,Pe=null,rt=null,Ot=null,dn=null}}}const a=new t,u=new n,c=new s,f=new WeakMap,d=new WeakMap;let p={},m={},g=new WeakMap,x=[],E=null,S=!1,y=null,v=null,R=null,P=null,b=null,N=null,L=null,T=new at(0,0,0),U=0,w=!1,A=null,k=null,$=null,G=null,ee=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=ce>=2);let se=null,le={};const z=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ae=new Kt().fromArray(z),J=new Kt().fromArray(ne);function fe(X,Ce,ue,pe){const De=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(X,Pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<ue;rt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Ce+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Pe}const Me={};Me[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Ua),mt(!1),ft(hv),ve(r.CULL_FACE),V(Us);function ve(X){p[X]!==!0&&(r.enable(X),p[X]=!0)}function Te(X){p[X]!==!1&&(r.disable(X),p[X]=!1)}function Xe(X,Ce){return m[X]!==Ce?(r.bindFramebuffer(X,Ce),m[X]=Ce,X===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ce),X===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ve(X,Ce){let ue=x,pe=!1;if(X){ue=g.get(Ce),ue===void 0&&(ue=[],g.set(Ce,ue));const De=X.textures;if(ue.length!==De.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,rt=De.length;Pe<rt;Pe++)ue[Pe]=r.COLOR_ATTACHMENT0+Pe;ue.length=De.length,pe=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ue)}function It(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Ut={[go]:r.FUNC_ADD,[vw]:r.FUNC_SUBTRACT,[yw]:r.FUNC_REVERSE_SUBTRACT};Ut[xw]=r.MIN,Ut[Sw]=r.MAX;const ct={[Mw]:r.ZERO,[Ew]:r.ONE,[Tw]:r.SRC_COLOR,[bp]:r.SRC_ALPHA,[Pw]:r.SRC_ALPHA_SATURATE,[Cw]:r.DST_COLOR,[Aw]:r.DST_ALPHA,[ww]:r.ONE_MINUS_SRC_COLOR,[Cp]:r.ONE_MINUS_SRC_ALPHA,[Rw]:r.ONE_MINUS_DST_COLOR,[bw]:r.ONE_MINUS_DST_ALPHA,[Dw]:r.CONSTANT_COLOR,[Lw]:r.ONE_MINUS_CONSTANT_COLOR,[Iw]:r.CONSTANT_ALPHA,[Uw]:r.ONE_MINUS_CONSTANT_ALPHA};function V(X,Ce,ue,pe,De,Pe,rt,Ot,dn,xt){if(X===Us){S===!0&&(Te(r.BLEND),S=!1);return}if(S===!1&&(ve(r.BLEND),S=!0),X!==_w){if(X!==y||xt!==w){if((v!==go||b!==go)&&(r.blendEquation(r.FUNC_ADD),v=go,b=go),xt)switch(X){case Ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dv:r.blendFunc(r.ONE,r.ONE);break;case pv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,P=null,N=null,L=null,T.set(0,0,0),U=0,y=X,w=xt}return}De=De||Ce,Pe=Pe||ue,rt=rt||pe,(Ce!==v||De!==b)&&(r.blendEquationSeparate(Ut[Ce],Ut[De]),v=Ce,b=De),(ue!==R||pe!==P||Pe!==N||rt!==L)&&(r.blendFuncSeparate(ct[ue],ct[pe],ct[Pe],ct[rt]),R=ue,P=pe,N=Pe,L=rt),(Ot.equals(T)===!1||dn!==U)&&(r.blendColor(Ot.r,Ot.g,Ot.b,dn),T.copy(Ot),U=dn),y=X,w=!1}function Xn(X,Ce){X.side===Xr?Te(r.CULL_FACE):ve(r.CULL_FACE);let ue=X.side===ei;Ce&&(ue=!ue),mt(ue),X.blending===Ca&&X.transparent===!1?V(Us):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),a.setMask(X.colorWrite);const pe=X.stencilWrite;c.setTest(pe),pe&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){A!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),A=X)}function ft(X){X!==pw?(ve(r.CULL_FACE),X!==k&&(X===hv?r.cullFace(r.BACK):X===mw?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),k=X}function je(X){X!==$&&(K&&r.lineWidth(X),$=X)}function Ct(X,Ce,ue){X?(ve(r.POLYGON_OFFSET_FILL),(G!==Ce||ee!==ue)&&(r.polygonOffset(Ce,ue),G=Ce,ee=ue)):Te(r.POLYGON_OFFSET_FILL)}function Ge(X){X?ve(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function O(X){X===void 0&&(X=r.TEXTURE0+oe-1),se!==X&&(r.activeTexture(X),se=X)}function D(X,Ce,ue){ue===void 0&&(se===null?ue=r.TEXTURE0+oe-1:ue=se);let pe=le[ue];pe===void 0&&(pe={type:void 0,texture:void 0},le[ue]=pe),(pe.type!==X||pe.texture!==Ce)&&(se!==ue&&(r.activeTexture(ue),se=ue),r.bindTexture(X,Ce||Me[X]),pe.type=X,pe.texture=Ce)}function ie(){const X=le[se];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){Ae.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function Oe(X){J.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ht(X,Ce){let ue=d.get(Ce);ue===void 0&&(ue=new WeakMap,d.set(Ce,ue));let pe=ue.get(X);pe===void 0&&(pe=r.getUniformBlockIndex(Ce,X.name),ue.set(X,pe))}function it(X,Ce){const pe=d.get(Ce).get(X);f.get(Ce)!==pe&&(r.uniformBlockBinding(Ce,pe,X.__bindingPointIndex),f.set(Ce,pe))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},se=null,le={},m={},g=new WeakMap,x=[],E=null,S=!1,y=null,v=null,R=null,P=null,b=null,N=null,L=null,T=new at(0,0,0),U=0,w=!1,A=null,k=null,$=null,G=null,ee=null,Ae.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ve,disable:Te,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:It,setBlending:V,setMaterial:Xn,setFlipSided:mt,setCullFace:ft,setLineWidth:je,setPolygonOffset:Ct,setScissorTest:Ge,activeTexture:O,bindTexture:D,unbindTexture:ie,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Ne,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:$e,texStorage3D:ye,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:be,compressedTexSubImage3D:qe,scissor:et,viewport:Oe,reset:bt}}function N2(r,e,t,n,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,p=new WeakMap;let m;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,D){return x?new OffscreenCanvas(O,D):ru("canvas")}function S(O,D,ie){let de=1;const _e=Ge(O);if((_e.width>ie||_e.height>ie)&&(de=ie/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(de*_e.width),He=Math.floor(de*_e.height);m===void 0&&(m=E(he,He));const be=D?E(he,He):m;return be.width=he,be.height=He,be.getContext("2d").drawImage(O,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+He+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(O,D,ie,de,_e=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=D;if(D===r.RED&&(ie===r.FLOAT&&(he=r.R32F),ie===r.HALF_FLOAT&&(he=r.R16F),ie===r.UNSIGNED_BYTE&&(he=r.R8)),D===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.R8UI),ie===r.UNSIGNED_SHORT&&(he=r.R16UI),ie===r.UNSIGNED_INT&&(he=r.R32UI),ie===r.BYTE&&(he=r.R8I),ie===r.SHORT&&(he=r.R16I),ie===r.INT&&(he=r.R32I)),D===r.RG&&(ie===r.FLOAT&&(he=r.RG32F),ie===r.HALF_FLOAT&&(he=r.RG16F),ie===r.UNSIGNED_BYTE&&(he=r.RG8)),D===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RG8UI),ie===r.UNSIGNED_SHORT&&(he=r.RG16UI),ie===r.UNSIGNED_INT&&(he=r.RG32UI),ie===r.BYTE&&(he=r.RG8I),ie===r.SHORT&&(he=r.RG16I),ie===r.INT&&(he=r.RG32I)),D===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(he=r.RGB16UI),ie===r.UNSIGNED_INT&&(he=r.RGB32UI),ie===r.BYTE&&(he=r.RGB8I),ie===r.SHORT&&(he=r.RGB16I),ie===r.INT&&(he=r.RGB32I)),D===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),ie===r.UNSIGNED_INT&&(he=r.RGBA32UI),ie===r.BYTE&&(he=r.RGBA8I),ie===r.SHORT&&(he=r.RGBA16I),ie===r.INT&&(he=r.RGBA32I)),D===r.RGB&&ie===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),D===r.RGBA){const He=_e?Sf:Tt.getTransfer(de);ie===r.FLOAT&&(he=r.RGBA32F),ie===r.HALF_FLOAT&&(he=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(he=He===Rt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(O,D){let ie;return O?D===null||D===wo||D===eu?ie=r.DEPTH24_STENCIL8:D===jr?ie=r.DEPTH32F_STENCIL8:D===Jl&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===wo||D===eu?ie=r.DEPTH_COMPONENT24:D===jr?ie=r.DEPTH_COMPONENT32F:D===Jl&&(ie=r.DEPTH_COMPONENT16),ie}function N(O,D){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==ir&&O.minFilter!==gr?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function L(O){const D=O.target;D.removeEventListener("dispose",L),U(D),D.isVideoTexture&&p.delete(D)}function T(O){const D=O.target;D.removeEventListener("dispose",T),A(D)}function U(O){const D=n.get(O);if(D.__webglInit===void 0)return;const ie=O.source,de=g.get(ie);if(de){const _e=de[D.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&w(O),Object.keys(de).length===0&&g.delete(ie)}n.remove(O)}function w(O){const D=n.get(O);r.deleteTexture(D.__webglTexture);const ie=O.source,de=g.get(ie);delete de[D.__cacheKey],u.memory.textures--}function A(O){const D=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(D.__webglFramebuffer[de]))for(let _e=0;_e<D.__webglFramebuffer[de].length;_e++)r.deleteFramebuffer(D.__webglFramebuffer[de][_e]);else r.deleteFramebuffer(D.__webglFramebuffer[de]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[de])}else{if(Array.isArray(D.__webglFramebuffer))for(let de=0;de<D.__webglFramebuffer.length;de++)r.deleteFramebuffer(D.__webglFramebuffer[de]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let de=0;de<D.__webglColorRenderbuffer.length;de++)D.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[de]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ie=O.textures;for(let de=0,_e=ie.length;de<_e;de++){const he=n.get(ie[de]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),u.memory.textures--),n.remove(ie[de])}n.remove(O)}let k=0;function $(){k=0}function G(){const O=k;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),k+=1,O}function ee(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function oe(O,D){const ie=n.get(O);if(O.isVideoTexture&&je(O),O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){const de=O.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ie,O,D);return}}t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+D)}function K(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){J(ie,O,D);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+D)}function ce(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){J(ie,O,D);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+D)}function B(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){fe(ie,O,D);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+D)}const se={[xf]:r.REPEAT,[vo]:r.CLAMP_TO_EDGE,[kp]:r.MIRRORED_REPEAT},le={[ir]:r.NEAREST,[Ww]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[gr]:r.LINEAR,[Fd]:r.LINEAR_MIPMAP_NEAREST,[yo]:r.LINEAR_MIPMAP_LINEAR},z={[$w]:r.NEVER,[eA]:r.ALWAYS,[qw]:r.LESS,[yx]:r.LEQUAL,[Kw]:r.EQUAL,[Jw]:r.GEQUAL,[Zw]:r.GREATER,[Qw]:r.NOTEQUAL};function ne(O,D){if(D.type===jr&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===gr||D.magFilter===Fd||D.magFilter===Rc||D.magFilter===yo||D.minFilter===gr||D.minFilter===Fd||D.minFilter===Rc||D.minFilter===yo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,se[D.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,se[D.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,se[D.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,le[D.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,le[D.minFilter]),D.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,z[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===ir||D.minFilter!==Rc&&D.minFilter!==yo||D.type===jr&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function Ae(O,D){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",L));const de=D.source;let _e=g.get(de);_e===void 0&&(_e={},g.set(de,_e));const he=ee(D);if(he!==O.__cacheKey){_e[he]===void 0&&(_e[he]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),_e[he].usedTimes++;const He=_e[O.__cacheKey];He!==void 0&&(_e[O.__cacheKey].usedTimes--,He.usedTimes===0&&w(D)),O.__cacheKey=he,O.__webglTexture=_e[he].texture}return ie}function J(O,D,ie){let de=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(de=r.TEXTURE_3D);const _e=Ae(O,D),he=D.source;t.bindTexture(de,O.__webglTexture,r.TEXTURE0+ie);const He=n.get(he);if(he.version!==He.__version||_e===!0){t.activeTexture(r.TEXTURE0+ie);const be=Tt.getPrimaries(Tt.workingColorSpace),qe=D.colorSpace===Rs?null:Tt.getPrimaries(D.colorSpace),$e=D.colorSpace===Rs||be===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ye=S(D.image,!1,s.maxTextureSize);ye=Ct(D,ye);const Ne=a.convert(D.format,D.colorSpace),Je=a.convert(D.type);let et=P(D.internalFormat,Ne,Je,D.colorSpace,D.isVideoTexture);ne(de,D);let Oe;const ht=D.mipmaps,it=D.isVideoTexture!==!0,bt=He.__version===void 0||_e===!0,X=he.dataReady,Ce=N(D,ye);if(D.isDepthTexture)et=b(D.format===nu,D.type),bt&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,null));else if(D.isDataTexture)if(ht.length>0){it&&bt&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ht[0].width,ht[0].height);for(let ue=0,pe=ht.length;ue<pe;ue++)Oe=ht[ue],it?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Ne,Je,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,et,Oe.width,Oe.height,0,Ne,Je,Oe.data);D.generateMipmaps=!1}else it?(bt&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ye.width,ye.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Ne,Je,ye.data)):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,ye.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){it&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,ht[0].width,ht[0].height,ye.depth);for(let ue=0,pe=ht.length;ue<pe;ue++)if(Oe=ht[ue],D.format!==nr)if(Ne!==null)if(it){if(X)if(D.layerUpdates.size>0){const De=Yv(Oe.width,Oe.height,D.format,D.type);for(const Pe of D.layerUpdates){const rt=Oe.data.subarray(Pe*De/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*De/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Pe,Oe.width,Oe.height,1,Ne,rt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,et,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Je,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,et,Oe.width,Oe.height,ye.depth,0,Ne,Je,Oe.data)}else{it&&bt&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ht[0].width,ht[0].height);for(let ue=0,pe=ht.length;ue<pe;ue++)Oe=ht[ue],D.format!==nr?Ne!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Ne,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Ne,Je,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,et,Oe.width,Oe.height,0,Ne,Je,Oe.data)}else if(D.isDataArrayTexture)if(it){if(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,ye.width,ye.height,ye.depth),X)if(D.layerUpdates.size>0){const ue=Yv(ye.width,ye.height,D.format,D.type);for(const pe of D.layerUpdates){const De=ye.data.subarray(pe*ue/ye.data.BYTES_PER_ELEMENT,(pe+1)*ue/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Ne,Je,De)}D.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(D.isData3DTexture)it?(bt&&t.texStorage3D(r.TEXTURE_3D,Ce,et,ye.width,ye.height,ye.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)):t.texImage3D(r.TEXTURE_3D,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(D.isFramebufferTexture){if(bt)if(it)t.texStorage2D(r.TEXTURE_2D,Ce,et,ye.width,ye.height);else{let ue=ye.width,pe=ye.height;for(let De=0;De<Ce;De++)t.texImage2D(r.TEXTURE_2D,De,et,ue,pe,0,Ne,Je,null),ue>>=1,pe>>=1}}else if(ht.length>0){if(it&&bt){const ue=Ge(ht[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,ue.width,ue.height)}for(let ue=0,pe=ht.length;ue<pe;ue++)Oe=ht[ue],it?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne,Je,Oe):t.texImage2D(r.TEXTURE_2D,ue,et,Ne,Je,Oe);D.generateMipmaps=!1}else if(it){if(bt){const ue=Ge(ye);t.texStorage2D(r.TEXTURE_2D,Ce,et,ue.width,ue.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,ye)}else t.texImage2D(r.TEXTURE_2D,0,et,Ne,Je,ye);y(D)&&v(de),He.__version=he.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function fe(O,D,ie){if(D.image.length!==6)return;const de=Ae(O,D),_e=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ie);const he=n.get(_e);if(_e.version!==he.__version||de===!0){t.activeTexture(r.TEXTURE0+ie);const He=Tt.getPrimaries(Tt.workingColorSpace),be=D.colorSpace===Rs?null:Tt.getPrimaries(D.colorSpace),qe=D.colorSpace===Rs||He===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const $e=D.isCompressedTexture||D.image[0].isCompressedTexture,ye=D.image[0]&&D.image[0].isDataTexture,Ne=[];for(let pe=0;pe<6;pe++)!$e&&!ye?Ne[pe]=S(D.image[pe],!0,s.maxCubemapSize):Ne[pe]=ye?D.image[pe].image:D.image[pe],Ne[pe]=Ct(D,Ne[pe]);const Je=Ne[0],et=a.convert(D.format,D.colorSpace),Oe=a.convert(D.type),ht=P(D.internalFormat,et,Oe,D.colorSpace),it=D.isVideoTexture!==!0,bt=he.__version===void 0||de===!0,X=_e.dataReady;let Ce=N(D,Je);ne(r.TEXTURE_CUBE_MAP,D);let ue;if($e){it&&bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ht,Je.width,Je.height);for(let pe=0;pe<6;pe++){ue=Ne[pe].mipmaps;for(let De=0;De<ue.length;De++){const Pe=ue[De];D.format!==nr?et!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ht,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,et,Oe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ht,Pe.width,Pe.height,0,et,Oe,Pe.data)}}}else{if(ue=D.mipmaps,it&&bt){ue.length>0&&Ce++;const pe=Ge(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ne[pe].width,Ne[pe].height,et,Oe,Ne[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Ne[pe].width,Ne[pe].height,0,et,Oe,Ne[pe].data);for(let De=0;De<ue.length;De++){const rt=ue[De].image[pe].image;it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,et,Oe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ht,rt.width,rt.height,0,et,Oe,rt.data)}}else{it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Oe,Ne[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,et,Oe,Ne[pe]);for(let De=0;De<ue.length;De++){const Pe=ue[De];it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,et,Oe,Pe.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ht,et,Oe,Pe.image[pe])}}}y(D)&&v(r.TEXTURE_CUBE_MAP),he.__version=_e.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Me(O,D,ie,de,_e,he){const He=a.convert(ie.format,ie.colorSpace),be=a.convert(ie.type),qe=P(ie.internalFormat,He,be,ie.colorSpace),$e=n.get(D),ye=n.get(ie);if(ye.__renderTarget=D,!$e.__hasExternalTextures){const Ne=Math.max(1,D.width>>he),Je=Math.max(1,D.height>>he);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,qe,Ne,Je,D.depth,0,He,be,null):t.texImage2D(_e,he,qe,Ne,Je,0,He,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),ft(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,_e,ye.__webglTexture,0,mt(D)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,_e,ye.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(O,D,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,O),D.depthBuffer){const de=D.depthTexture,_e=de&&de.isDepthTexture?de.type:null,he=b(D.stencilBuffer,_e),He=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=mt(D);ft(D)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,he,D.width,D.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,he,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,he,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,O)}else{const de=D.textures;for(let _e=0;_e<de.length;_e++){const he=de[_e],He=a.convert(he.format,he.colorSpace),be=a.convert(he.type),qe=P(he.internalFormat,He,be,he.colorSpace),$e=mt(D);ie&&ft(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,qe,D.width,D.height):ft(D)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,qe,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,qe,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(D.depthTexture);de.__renderTarget=D,(!de.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),oe(D.depthTexture,0);const _e=de.__webglTexture,he=mt(D);if(D.depthTexture.format===tu)ft(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(D.depthTexture.format===nu)ft(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(O){const D=n.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),de){const _e=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),D.__depthDisposeCallback=_e}D.__boundDepthTexture=de}if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const de=O.texture.mipmaps;de&&de.length>0?Te(D.__webglFramebuffer[0],O):Te(D.__webglFramebuffer,O)}else if(ie){D.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[de]),D.__webglDepthbuffer[de]===void 0)D.__webglDepthbuffer[de]=r.createRenderbuffer(),ve(D.__webglDepthbuffer[de],O,!1);else{const _e=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=D.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),ve(D.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(O,D,ie){const de=n.get(O);D!==void 0&&Me(de.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Xe(O)}function It(O){const D=O.texture,ie=n.get(O),de=n.get(D);O.addEventListener("dispose",T);const _e=O.textures,he=O.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=D.version,u.memory.textures++),he){ie.__webglFramebuffer=[];for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer[be]=[];for(let qe=0;qe<D.mipmaps.length;qe++)ie.__webglFramebuffer[be][qe]=r.createFramebuffer()}else ie.__webglFramebuffer[be]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer=[];for(let be=0;be<D.mipmaps.length;be++)ie.__webglFramebuffer[be]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(He)for(let be=0,qe=_e.length;be<qe;be++){const $e=n.get(_e[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&ft(O)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const qe=_e[be];ie.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[be]);const $e=a.convert(qe.format,qe.colorSpace),ye=a.convert(qe.type),Ne=P(qe.internalFormat,$e,ye,qe.colorSpace,O.isXRRenderTarget===!0),Je=mt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ie.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ne(r.TEXTURE_CUBE_MAP,D);for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)Me(ie.__webglFramebuffer[be][qe],O,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe);else Me(ie.__webglFramebuffer[be],O,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(D)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let be=0,qe=_e.length;be<qe;be++){const $e=_e[be],ye=n.get($e);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),ne(r.TEXTURE_2D,$e),Me(ie.__webglFramebuffer,O,$e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),y($e)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(be=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),ne(be,D),D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)Me(ie.__webglFramebuffer[qe],O,D,r.COLOR_ATTACHMENT0,be,qe);else Me(ie.__webglFramebuffer,O,D,r.COLOR_ATTACHMENT0,be,0);y(D)&&v(be),t.unbindTexture()}O.depthBuffer&&Xe(O)}function Ut(O){const D=O.textures;for(let ie=0,de=D.length;ie<de;ie++){const _e=D[ie];if(y(_e)){const he=R(O),He=n.get(_e).__webglTexture;t.bindTexture(he,He),v(he),t.unbindTexture()}}}const ct=[],V=[];function Xn(O){if(O.samples>0){if(ft(O)===!1){const D=O.textures,ie=O.width,de=O.height;let _e=r.COLOR_BUFFER_BIT;const he=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=n.get(O),be=D.length>1;if(be)for(let $e=0;$e<D.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const qe=O.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let $e=0;$e<D.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const ye=n.get(D[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,ie,de,0,0,ie,de,_e,r.NEAREST),f===!0&&(ct.length=0,V.length=0,ct.push(r.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ct.push(he),V.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<D.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const ye=n.get(D[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const D=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function mt(O){return Math.min(s.maxSamples,O.samples)}function ft(O){const D=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function je(O){const D=u.render.frame;p.get(O)!==D&&(p.set(O,D),O.update())}function Ct(O,D){const ie=O.colorSpace,de=O.format,_e=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Fa&&ie!==Rs&&(Tt.getTransfer(ie)===Rt?(de!==nr||_e!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),D}function Ge(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Ve,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function O2(r,e){function t(n,s=Rs){let a;const u=Tt.getTransfer(s);if(n===Qr)return r.UNSIGNED_BYTE;if(n===Hm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===dx)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===fx)return r.BYTE;if(n===hx)return r.SHORT;if(n===Jl)return r.UNSIGNED_SHORT;if(n===Bm)return r.INT;if(n===wo)return r.UNSIGNED_INT;if(n===jr)return r.FLOAT;if(n===mu)return r.HALF_FLOAT;if(n===px)return r.ALPHA;if(n===mx)return r.RGB;if(n===nr)return r.RGBA;if(n===tu)return r.DEPTH_COMPONENT;if(n===nu)return r.DEPTH_STENCIL;if(n===gx)return r.RED;if(n===Gm)return r.RED_INTEGER;if(n===_x)return r.RG;if(n===Wm)return r.RG_INTEGER;if(n===Xm)return r.RGBA_INTEGER;if(n===af||n===lf||n===uf||n===cf)if(u===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===af)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===af)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zp||n===Bp||n===Hp||n===Vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gp||n===Wp||n===Xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Gp||n===Wp)return u===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Xp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jp||n===Yp||n===$p||n===qp||n===Kp||n===Zp||n===Qp||n===Jp||n===em||n===tm||n===nm||n===im||n===rm||n===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===jp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$p)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===em)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tm)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nm)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===im)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rm)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sm)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ff||n===om||n===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ff)return u===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vx||n===lm||n===um||n===cm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ff)return a.COMPRESSED_RED_RGTC1_EXT;if(n===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===um)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eu?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const F2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ti,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mr({vertexShader:F2,fragmentShader:k2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new _u(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B2 extends Co{constructor(e,t){super();const n=this;let s=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,m=null,g=null,x=null,E=null;const S=new z2,y=t.getContextAttributes();let v=null,R=null;const P=[],b=[],N=new ut;let L=null;const T=new Ti;T.viewport=new Kt;const U=new Ti;U.viewport=new Kt;const w=[T,U],A=new sb;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=P[J];return fe===void 0&&(fe=new ip,P[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=P[J];return fe===void 0&&(fe=new ip,P[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=P[J];return fe===void 0&&(fe=new ip,P[J]=fe),fe.getHandSpace()};function G(J){const fe=b.indexOf(J.inputSource);if(fe===-1)return;const Me=P[fe];Me!==void 0&&(Me.update(J.inputSource,J.frame,d||u),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function ee(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",oe);for(let J=0;J<P.length;J++){const fe=b[J];fe!==null&&(b[J]=null,P[J].disconnect(fe))}k=null,$=null,S.reset(),e.setRenderTarget(v),x=null,g=null,m=null,s=null,R=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ve=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?nu:tu,ve=y.stencil?eu:wo);const Xe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};m=new XRWebGLBinding(s,t),g=m.createProjectionLayer(Xe),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new ks(g.textureWidth,g.textureHeight,{format:nr,type:Qr,depthTexture:new Px(g.textureWidth,g.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ks(x.framebufferWidth,x.framebufferHeight,{format:nr,type:Qr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await s.requestReferenceSpace(c),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function oe(J){for(let fe=0;fe<J.removed.length;fe++){const Me=J.removed[fe],ve=b.indexOf(Me);ve>=0&&(b[ve]=null,P[ve].disconnect(Me))}for(let fe=0;fe<J.added.length;fe++){const Me=J.added[fe];let ve=b.indexOf(Me);if(ve===-1){for(let Xe=0;Xe<P.length;Xe++)if(Xe>=b.length){b.push(Me),ve=Xe;break}else if(b[Xe]===null){b[Xe]=Me,ve=Xe;break}if(ve===-1)break}const Te=P[ve];Te&&Te.connect(Me)}}const K=new j,ce=new j;function B(J,fe,Me){K.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=K.distanceTo(ce),Te=fe.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Ve=Te[14]/(Te[10]-1),It=Te[14]/(Te[10]+1),Ut=(Te[9]+1)/Te[5],ct=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],Xn=(Xe[8]+1)/Xe[0],mt=Ve*V,ft=Ve*Xn,je=ve/(-V+Xn),Ct=je*-V;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ge=Ve+je,O=It+je,D=mt-Ct,ie=ft+(ve-Ct),de=Ut*It/O*Ge,_e=ct*It/O*Ge;J.projectionMatrix.makePerspective(D,ie,de,_e,Ge,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let fe=J.near,Me=J.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),A.near=U.near=T.near=fe,A.far=U.far=T.far=Me,(k!==A.near||$!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,$=A.far),T.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,A.layers.mask=T.layers.mask|U.layers.mask;const ve=J.parent,Te=A.cameras;se(A,ve);for(let Xe=0;Xe<Te.length;Xe++)se(Te[Xe],ve);Te.length===2?B(A,T,U):A.projectionMatrix.copy(T.projectionMatrix),le(J,A,ve)};function le(J,fe,Me){Me===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=iu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(J){f=J,g!==null&&(g.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let z=null;function ne(J,fe){if(p=fe.getViewerPose(d||u),E=fe,p!==null){const Me=p.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let ve=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ve=0;Ve<Me.length;Ve++){const It=Me[Ve];let Ut=null;if(x!==null)Ut=x.getViewport(It);else{const V=m.getViewSubImage(g,It);Ut=V.viewport,Ve===0&&(e.setRenderTargetTextures(R,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(R))}let ct=w[Ve];ct===void 0&&(ct=new Ti,ct.layers.enable(Ve),ct.viewport=new Kt,w[Ve]=ct),ct.matrix.fromArray(It.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(It.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Ve===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ct)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){const Ve=m.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&S.init(e,Ve,s.renderState)}}for(let Me=0;Me<P.length;Me++){const ve=b[Me],Te=P[Me];ve!==null&&Te!==void 0&&Te.update(ve,fe,d||u)}z&&z(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ae=new Lx;Ae.setAnimationLoop(ne),this.setAnimationLoop=function(J){z=J},this.dispose=function(){}}}const uo=new rr,H2=new Bt;function V2(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,Ax(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,R,P,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),m(y,v)):v.isMeshPhongMaterial?(a(y,v),p(y,v)):v.isMeshStandardMaterial?(a(y,v),g(y,v),v.isMeshPhysicalMaterial&&x(y,v,b)):v.isMeshMatcapMaterial?(a(y,v),E(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),S(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?f(y,v,R,P):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ei&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ei&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const R=e.get(v),P=R.envMap,b=R.envMapRotation;P&&(y.envMap.value=P,uo.copy(b),uo.x*=-1,uo.y*=-1,uo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),y.envMapRotation.value.setFromMatrix4(H2.makeRotationFromEuler(uo)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function f(y,v,R,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*R,y.scale.value=P*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,R){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ei&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function S(y,v){const R=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G2(r,e,t,n){let s={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,P){const b=P.program;n.uniformBlockBinding(R,b)}function d(R,P){let b=s[R.id];b===void 0&&(E(R),b=p(R),s[R.id]=b,R.addEventListener("dispose",y));const N=P.program;n.updateUBOMapping(R,N);const L=e.render.frame;a[R.id]!==L&&(g(R),a[R.id]=L)}function p(R){const P=m();R.__bindingPointIndex=P;const b=r.createBuffer(),N=R.__size,L=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,N,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,b),b}function m(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const P=s[R.id],b=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let L=0,T=b.length;L<T;L++){const U=Array.isArray(b[L])?b[L]:[b[L]];for(let w=0,A=U.length;w<A;w++){const k=U[w];if(x(k,L,w,N)===!0){const $=k.__offset,G=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let oe=0;oe<G.length;oe++){const K=G[oe],ce=S(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,$+ee,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,ee),ee+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,P,b,N){const L=R.value,T=P+"_"+b;if(N[T]===void 0)return typeof L=="number"||typeof L=="boolean"?N[T]=L:N[T]=L.clone(),!0;{const U=N[T];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return N[T]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function E(R){const P=R.uniforms;let b=0;const N=16;for(let T=0,U=P.length;T<U;T++){const w=Array.isArray(P[T])?P[T]:[P[T]];for(let A=0,k=w.length;A<k;A++){const $=w[A],G=Array.isArray($.value)?$.value:[$.value];for(let ee=0,oe=G.length;ee<oe;ee++){const K=G[ee],ce=S(K),B=b%N,se=B%ce.boundary,le=B+se;b+=se,le!==0&&N-le<ce.storage&&(b+=N-le),$.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=ce.storage}}}const L=b%N;return L>0&&(b+=N-L),R.__size=b,R.__cache={},this}function S(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),P}function y(R){const P=R.target;P.removeEventListener("dispose",y);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function v(){for(const R in s)r.deleteBuffer(s[R]);u=[],s={},a={}}return{bind:f,update:d,dispose:v}}class W2{constructor(e={}){const{canvas:t=_A(),context:n=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),S=new Int32Array(4);let y=null,v=null;const R=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Mi;let L=0,T=0,U=null,w=-1,A=null;const k=new Kt,$=new Kt;let G=null;const ee=new at(0);let oe=0,K=t.width,ce=t.height,B=1,se=null,le=null;const z=new Kt(0,0,K,ce),ne=new Kt(0,0,K,ce);let Ae=!1;const J=new Rx;let fe=!1,Me=!1;const ve=new Bt,Te=new Bt,Xe=new j,Ve=new Kt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function ct(){return U===null?B:1}let V=n;function Xn(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${km}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const Y="webgl2";if(V=Xn(Y,I),V===null)throw Xn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let mt,ft,je,Ct,Ge,O,D,ie,de,_e,he,He,be,qe,$e,ye,Ne,Je,et,Oe,ht,it,bt,X;function Ce(){mt=new eP(V),mt.init(),it=new O2(V,mt),ft=new YR(V,mt,e,it),je=new U2(V,mt),ft.reverseDepthBuffer&&g&&je.buffers.depth.setReversed(!0),Ct=new iP(V),Ge=new S2,O=new N2(V,mt,je,Ge,ft,it,Ct),D=new qR(b),ie=new JR(b),de=new ub(V),bt=new XR(V,de),_e=new tP(V,de,Ct,bt),he=new sP(V,_e,de,Ct),et=new rP(V,ft,O),ye=new $R(Ge),He=new x2(b,D,ie,mt,ft,bt,ye),be=new V2(b,Ge),qe=new E2,$e=new R2(mt),Je=new WR(b,D,ie,je,he,x,f),Ne=new L2(b,he,ft),X=new G2(V,Ct,ft,je),Oe=new jR(V,mt,Ct),ht=new nP(V,mt,Ct),Ct.programs=He.programs,b.capabilities=ft,b.extensions=mt,b.properties=Ge,b.renderLists=qe,b.shadowMap=Ne,b.state=je,b.info=Ct}Ce();const ue=new B2(b,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const I=mt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=mt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(K,ce,!1))},this.getSize=function(I){return I.set(K,ce)},this.setSize=function(I,Y,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,ce=Y,t.width=Math.floor(I*B),t.height=Math.floor(Y*B),ae===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(K*B,ce*B).floor()},this.setDrawingBufferSize=function(I,Y,ae){K=I,ce=Y,B=ae,t.width=Math.floor(I*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(z)},this.setViewport=function(I,Y,ae,Q){I.isVector4?z.set(I.x,I.y,I.z,I.w):z.set(I,Y,ae,Q),je.viewport(k.copy(z).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(ne)},this.setScissor=function(I,Y,ae,Q){I.isVector4?ne.set(I.x,I.y,I.z,I.w):ne.set(I,Y,ae,Q),je.scissor($.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(I){je.setScissorTest(Ae=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){le=I},this.getClearColor=function(I){return I.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(I=!0,Y=!0,ae=!0){let Q=0;if(I){let q=!1;if(U!==null){const Se=U.texture.format;q=Se===Xm||Se===Wm||Se===Gm}if(q){const Se=U.texture.type,Re=Se===Qr||Se===wo||Se===Jl||Se===eu||Se===Hm||Se===Vm,Le=Je.getClearColor(),Fe=Je.getClearAlpha(),tt=Le.r,Qe=Le.g,ze=Le.b;Re?(E[0]=tt,E[1]=Qe,E[2]=ze,E[3]=Fe,V.clearBufferuiv(V.COLOR,0,E)):(S[0]=tt,S[1]=Qe,S[2]=ze,S[3]=Fe,V.clearBufferiv(V.COLOR,0,S))}else Q|=V.COLOR_BUFFER_BIT}Y&&(Q|=V.DEPTH_BUFFER_BIT),ae&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Je.dispose(),qe.dispose(),$e.dispose(),Ge.dispose(),D.dispose(),ie.dispose(),he.dispose(),bt.dispose(),X.dispose(),He.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Po),ue.removeEventListener("sessionend",ts),Tr.stop()};function pe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const I=Ct.autoReset,Y=Ne.enabled,ae=Ne.autoUpdate,Q=Ne.needsUpdate,q=Ne.type;Ce(),Ct.autoReset=I,Ne.enabled=Y,Ne.autoUpdate=ae,Ne.needsUpdate=Q,Ne.type=q}function Pe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function rt(I){const Y=I.target;Y.removeEventListener("dispose",rt),Ot(Y)}function Ot(I){dn(I),Ge.remove(I)}function dn(I){const Y=Ge.get(I).programs;Y!==void 0&&(Y.forEach(function(ae){He.releaseProgram(ae)}),I.isShaderMaterial&&He.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,ae,Q,q,Se){Y===null&&(Y=It);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Le=Mu(I,Y,ae,Q,q);je.setMaterial(Q,Re);let Fe=ae.index,tt=1;if(Q.wireframe===!0){if(Fe=_e.getWireframeAttribute(ae),Fe===void 0)return;tt=2}const Qe=ae.drawRange,ze=ae.attributes.position;let _t=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Se!==null&&(_t=Math.max(_t,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Fe!==null?(_t=Math.max(_t,0),st=Math.min(st,Fe.count)):ze!=null&&(_t=Math.max(_t,0),st=Math.min(st,ze.count));const Qt=st-_t;if(Qt<0||Qt===1/0)return;bt.setup(q,Q,Le,ae,Fe);let Ht,yt=Oe;if(Fe!==null&&(Ht=de.get(Fe),yt=ht,yt.setIndex(Ht)),q.isMesh)Q.wireframe===!0?(je.setLineWidth(Q.wireframeLinewidth*ct()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(q.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*ct()),q.isLineSegments?yt.setMode(V.LINES):q.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else q.isPoints?yt.setMode(V.POINTS):q.isSprite&&yt.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)hf("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Jt=q._multiDrawCounts,gt=q._multiDrawCount,Ln=Fe?de.get(Fe).bytesPerElement:1,is=Ge.get(Q).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)is.setValue(V,"_gl_DrawID",Yn),yt.render(Ye[Yn]/Ln,Jt[Yn])}else if(q.isInstancedMesh)yt.renderInstances(_t,Qt,q.count);else if(ae.isInstancedBufferGeometry){const Ye=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Jt=Math.min(ae.instanceCount,Ye);yt.renderInstances(_t,Qt,Jt)}else yt.render(_t,Qt)};function xt(I,Y,ae){I.transparent===!0&&I.side===Xr&&I.forceSinglePass===!1?(I.side=ei,I.needsUpdate=!0,Do(I,Y,ae),I.side=Zr,I.needsUpdate=!0,Do(I,Y,ae),I.side=Xr):Do(I,Y,ae)}this.compile=function(I,Y,ae=null){ae===null&&(ae=I),v=$e.get(ae),v.init(Y),P.push(v),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),I!==ae&&I.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const Q=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];xt(Le,ae,q),Q.add(Le)}else xt(Se,ae,q),Q.add(Se)}),v=P.pop(),Q},this.compileAsync=function(I,Y,ae=null){const Q=this.compile(I,Y,ae);return new Promise(q=>{function Se(){if(Q.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&Q.delete(Re)}),Q.size===0){q(I);return}setTimeout(Se,10)}mt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ni=null;function jn(I){ni&&ni(I)}function Po(){Tr.stop()}function ts(){Tr.start()}const Tr=new Lx;Tr.setAnimationLoop(jn),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(I){ni=I,ue.setAnimationLoop(I),I===null?Tr.stop():Tr.start()},ue.addEventListener("sessionstart",Po),ue.addEventListener("sessionend",ts),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,Y,U),v=$e.get(I,P.length),v.init(Y),P.push(v),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Me),y=qe.get(I,R.length),y.init(),R.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&wr(Se,Y,-1/0,b.sortObjects)}wr(I,Y,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(se,le),Ut=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ut&&Je.addToRenderList(y,I),this.info.render.frame++,fe===!0&&ye.beginShadows();const ae=v.state.shadowsArray;Ne.render(ae,I,Y),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,q=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const Se=Y.cameras;if(q.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const Fe=Se[Re];Ws(Q,q,I,Fe)}Ut&&Je.render(I);for(let Re=0,Le=Se.length;Re<Le;Re++){const Fe=Se[Re];Gs(y,I,Fe,Fe.viewport)}}else q.length>0&&Ws(Q,q,I,Y),Ut&&Je.render(I),Gs(y,I,Y);U!==null&&T===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),I.isScene===!0&&I.onAfterRender(b,I,Y),bt.resetDefaultState(),w=-1,A=null,P.pop(),P.length>0?(v=P[P.length-1],fe===!0&&ye.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function wr(I,Y,ae,Q){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)v.pushLight(I),I.castShadow&&v.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||J.intersectsSprite(I)){Q&&Ve.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Te);const Re=he.update(I),Le=I.material;Le.visible&&y.push(I,Re,Le,ae,Ve.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||J.intersectsObject(I))){const Re=he.update(I),Le=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ve.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(I.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Fe=Re.groups;for(let tt=0,Qe=Fe.length;tt<Qe;tt++){const ze=Fe[tt],_t=Le[ze.materialIndex];_t&&_t.visible&&y.push(I,Re,_t,ae,Ve.z,ze)}}else Le.visible&&y.push(I,Re,Le,ae,Ve.z,null)}}const Se=I.children;for(let Re=0,Le=Se.length;Re<Le;Re++)wr(Se[Re],Y,ae,Q)}function Gs(I,Y,ae,Q){const q=I.opaque,Se=I.transmissive,Re=I.transparent;v.setupLightsView(ae),fe===!0&&ye.setGlobalState(b.clippingPlanes,ae),Q&&je.viewport(k.copy(Q)),q.length>0&&ns(q,Y,ae),Se.length>0&&ns(Se,Y,ae),Re.length>0&&ns(Re,Y,ae),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Ws(I,Y,ae,Q){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new ks(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?mu:Qr,minFilter:yo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Se=v.state.transmissionRenderTarget[Q.id],Re=Q.viewport||k;Se.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Le=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(ee),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),Ut&&Je.render(ae);const Fe=b.toneMapping;b.toneMapping=Ns;const tt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),fe===!0&&ye.setGlobalState(b.clippingPlanes,Q),ns(I,ae,Q),O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,_t=Y.length;ze<_t;ze++){const st=Y[ze],Qt=st.object,Ht=st.geometry,yt=st.material,Ye=st.group;if(yt.side===Xr&&Qt.layers.test(Q.layers)){const Jt=yt.side;yt.side=ei,yt.needsUpdate=!0,xu(Qt,ae,Q,Ht,yt,Ye),yt.side=Jt,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se))}b.setRenderTarget(Le),b.setClearColor(ee,oe),tt!==void 0&&(Q.viewport=tt),b.toneMapping=Fe}function ns(I,Y,ae){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Se=I.length;q<Se;q++){const Re=I[q],Le=Re.object,Fe=Re.geometry,tt=Re.group;let Qe=Re.material;Qe.allowOverride===!0&&Q!==null&&(Qe=Q),Le.layers.test(ae.layers)&&xu(Le,Y,ae,Fe,Qe,tt)}}function xu(I,Y,ae,Q,q,Se){I.onBeforeRender(b,Y,ae,Q,q,Se),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(b,Y,ae,Q,I,Se),q.transparent===!0&&q.side===Xr&&q.forceSinglePass===!1?(q.side=ei,q.needsUpdate=!0,b.renderBufferDirect(ae,Y,Q,q,I,Se),q.side=Zr,q.needsUpdate=!0,b.renderBufferDirect(ae,Y,Q,q,I,Se),q.side=Xr):b.renderBufferDirect(ae,Y,Q,q,I,Se),I.onAfterRender(b,Y,ae,Q,q,Se)}function Do(I,Y,ae){Y.isScene!==!0&&(Y=It);const Q=Ge.get(I),q=v.state.lights,Se=v.state.shadowsArray,Re=q.state.version,Le=He.getParameters(I,q.state,Se,Y,ae),Fe=He.getProgramCacheKey(Le);let tt=Q.programs;Q.environment=I.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(I.isMeshStandardMaterial?ie:D).get(I.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,tt===void 0&&(I.addEventListener("dispose",rt),tt=new Map,Q.programs=tt);let Qe=tt.get(Fe);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Re)return sr(I,Le),Qe}else Le.uniforms=He.getUniforms(I),I.onBeforeCompile(Le,b),Qe=He.acquireProgram(Le,Fe),tt.set(Fe,Qe),Q.uniforms=Le.uniforms;const ze=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=ye.uniform),sr(I,Le),Q.needsLights=Qf(I),Q.lightsStateVersion=Re,Q.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function Su(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=pf.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function sr(I,Y){const ae=Ge.get(I);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Mu(I,Y,ae,Q,q){Y.isScene!==!0&&(Y=It),O.resetTextureUnits();const Se=Y.fog,Re=Q.isMeshStandardMaterial?Y.environment:null,Le=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Fa,Fe=(Q.isMeshStandardMaterial?ie:D).get(Q.envMap||Re),tt=Q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Qe=!!ae.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,st=!!ae.morphAttributes.color;let Qt=Ns;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qt=b.toneMapping);const Ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=Ht!==void 0?Ht.length:0,Ye=Ge.get(Q),Jt=v.state.lights;if(fe===!0&&(Me===!0||I!==A)){const bn=I===A&&Q.id===w;ye.setState(Q,I,bn)}let gt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Jt.state.version||Ye.outputColorSpace!==Le||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==Fe||Q.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Qe||Ye.morphTargets!==ze||Ye.morphNormals!==_t||Ye.morphColors!==st||Ye.toneMapping!==Qt||Ye.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,Ye.__version=Q.version);let Ln=Ye.currentProgram;gt===!0&&(Ln=Do(Q,Y,q));let is=!1,Yn=!1,Ar=!1;const Dt=Ln.getUniforms(),In=Ye.uniforms;if(je.useProgram(Ln.program)&&(is=!0,Yn=!0,Ar=!0),Q.id!==w&&(w=Q.id,Yn=!0),is||A!==I){je.buffers.depth.getReversed()?(ve.copy(I.projectionMatrix),yA(ve),xA(ve),Dt.setValue(V,"projectionMatrix",ve)):Dt.setValue(V,"projectionMatrix",I.projectionMatrix),Dt.setValue(V,"viewMatrix",I.matrixWorldInverse);const xn=Dt.map.cameraPosition;xn!==void 0&&xn.setValue(V,Xe.setFromMatrixPosition(I.matrixWorld)),ft.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,Yn=!0,Ar=!0)}if(q.isSkinnedMesh){Dt.setOptional(V,q,"bindMatrix"),Dt.setOptional(V,q,"bindMatrixInverse");const bn=q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Dt.setValue(V,"boneTexture",bn.boneTexture,O))}q.isBatchedMesh&&(Dt.setOptional(V,q,"batchingTexture"),Dt.setValue(V,"batchingTexture",q._matricesTexture,O),Dt.setOptional(V,q,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",q._indirectTexture,O),Dt.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",q._colorsTexture,O));const yn=ae.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&et.update(q,ae,Ln),(Yn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Dt.setValue(V,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(In.envMap.value=Fe,In.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Y.environment!==null&&(In.envMapIntensity.value=Y.environmentIntensity),Yn&&(Dt.setValue(V,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&Eu(In,Ar),Se&&Q.fog===!0&&be.refreshFogUniforms(In,Se),be.refreshMaterialUniforms(In,Q,B,ce,v.state.transmissionRenderTarget[I.id]),pf.upload(V,Su(Ye),In,O)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pf.upload(V,Su(Ye),In,O),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(V,"center",q.center),Dt.setValue(V,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(V,"normalMatrix",q.normalMatrix),Dt.setValue(V,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const bn=Q.uniformsGroups;for(let xn=0,St=bn.length;xn<St;xn++){const or=bn[xn];X.update(or,Ln),X.bind(or,Ln)}}return Ln}function Eu(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Qf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(I,Y,ae){const Q=Ge.get(I);Q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ge.get(I.texture).__webglTexture=Y,Ge.get(I.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ae,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Y){const ae=Ge.get(I);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Tu=V.createFramebuffer();this.setRenderTarget=function(I,Y=0,ae=0){U=I,L=Y,T=ae;let Q=!0,q=null,Se=!1,Re=!1;if(I){const Fe=Ge.get(I);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(V.FRAMEBUFFER,null),Q=!1;else if(Fe.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Fe.__hasExternalTextures)O.rebindTextures(I,Ge.get(I.texture).__webglTexture,Ge.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const ze=I.depthTexture;if(Fe.__boundDepthTexture!==ze){if(ze!==null&&Ge.has(ze)&&(I.width!==ze.image.width||I.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const tt=I.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?q=Qe[Y][ae]:q=Qe[Y],Se=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?q=Ge.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[ae]:q=Qe,k.copy(I.viewport),$.copy(I.scissor),G=I.scissorTest}else k.copy(z).multiplyScalar(B).floor(),$.copy(ne).multiplyScalar(B).floor(),G=Ae;if(ae!==0&&(q=Tu),je.bindFramebuffer(V.FRAMEBUFFER,q)&&Q&&je.drawBuffers(I,q),je.viewport(k),je.scissor($),je.setScissorTest(G),Se){const Fe=Ge.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ae)}else if(Re){const Fe=Ge.get(I.texture),tt=Y;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.__webglTexture,ae,tt)}else if(I!==null&&ae!==0){const Fe=Ge.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(I,Y,ae,Q,q,Se,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(V.FRAMEBUFFER,Le);try{const Fe=I.texture,tt=Fe.format,Qe=Fe.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-Q&&ae>=0&&ae<=I.height-q&&V.readPixels(Y,ae,Q,q,it.convert(tt),it.convert(Qe),Se)}finally{const Fe=U!==null?Ge.get(U).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(I,Y,ae,Q,q,Se,Re){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(Y>=0&&Y<=I.width-Q&&ae>=0&&ae<=I.height-q){je.bindFramebuffer(V.FRAMEBUFFER,Le);const Fe=I.texture,tt=Fe.format,Qe=Fe.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),V.readPixels(Y,ae,Q,q,it.convert(tt),it.convert(Qe),0);const _t=U!==null?Ge.get(U).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,_t);const st=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vA(V,st,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer(ze),V.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Y=null,ae=0){const Q=Math.pow(2,-ae),q=Math.floor(I.image.width*Q),Se=Math.floor(I.image.height*Q),Re=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;O.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Re,Le,q,Se),je.unbindTexture()};const wu=V.createFramebuffer(),Au=V.createFramebuffer();this.copyTextureToTexture=function(I,Y,ae=null,Q=null,q=0,Se=null){Se===null&&(q!==0?(hf("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=q,q=0):Se=0);let Re,Le,Fe,tt,Qe,ze,_t,st,Qt;const Ht=I.isCompressedTexture?I.mipmaps[Se]:I.image;if(ae!==null)Re=ae.max.x-ae.min.x,Le=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,tt=ae.min.x,Qe=ae.min.y,ze=ae.isBox3?ae.min.z:0;else{const yn=Math.pow(2,-q);Re=Math.floor(Ht.width*yn),Le=Math.floor(Ht.height*yn),I.isDataArrayTexture?Fe=Ht.depth:I.isData3DTexture?Fe=Math.floor(Ht.depth*yn):Fe=1,tt=0,Qe=0,ze=0}Q!==null?(_t=Q.x,st=Q.y,Qt=Q.z):(_t=0,st=0,Qt=0);const yt=it.convert(Y.format),Ye=it.convert(Y.type);let Jt;Y.isData3DTexture?(O.setTexture3D(Y,0),Jt=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),Jt=V.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),Jt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const gt=V.getParameter(V.UNPACK_ROW_LENGTH),Ln=V.getParameter(V.UNPACK_IMAGE_HEIGHT),is=V.getParameter(V.UNPACK_SKIP_PIXELS),Yn=V.getParameter(V.UNPACK_SKIP_ROWS),Ar=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ze);const Dt=I.isDataArrayTexture||I.isData3DTexture,In=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isDepthTexture){const yn=Ge.get(I),bn=Ge.get(Y),xn=Ge.get(yn.__renderTarget),St=Ge.get(bn.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,xn.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let or=0;or<Fe;or++)Dt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(I).__webglTexture,q,ze+or),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(Y).__webglTexture,Se,Qt+or)),V.blitFramebuffer(tt,Qe,Re,Le,_t,st,Re,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||Ge.has(I)){const yn=Ge.get(I),bn=Ge.get(Y);je.bindFramebuffer(V.READ_FRAMEBUFFER,wu),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Au);for(let xn=0;xn<Fe;xn++)Dt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yn.__webglTexture,q,ze+xn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yn.__webglTexture,q),In?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Se,Qt+xn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Se),q!==0?V.blitFramebuffer(tt,Qe,Re,Le,_t,st,Re,Le,V.COLOR_BUFFER_BIT,V.NEAREST):In?V.copyTexSubImage3D(Jt,Se,_t,st,Qt+xn,tt,Qe,Re,Le):V.copyTexSubImage2D(Jt,Se,_t,st,tt,Qe,Re,Le);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else In?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(Jt,Se,_t,st,Qt,Re,Le,Fe,yt,Ye,Ht.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Jt,Se,_t,st,Qt,Re,Le,Fe,yt,Ht.data):V.texSubImage3D(Jt,Se,_t,st,Qt,Re,Le,Fe,yt,Ye,Ht):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,_t,st,Re,Le,yt,Ye,Ht.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,_t,st,Ht.width,Ht.height,yt,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Se,_t,st,Re,Le,yt,Ye,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,gt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ln),V.pixelStorei(V.UNPACK_SKIP_PIXELS,is),V.pixelStorei(V.UNPACK_SKIP_ROWS,Yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ar),Se===0&&Y.generateMipmaps&&V.generateMipmap(Jt),je.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,ae=null,Q=null,q=0){return hf('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Y,ae,Q,q)},this.initRenderTarget=function(I){Ge.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),je.unbindTexture()},this.resetState=function(){L=0,T=0,U=null,je.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class X2 extends Jn{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,a=t.textureHeight!==void 0?t.textureHeight:512,u=t.clipBias!==void 0?t.clipBias:0,c=t.alpha!==void 0?t.alpha:1,f=t.time!==void 0?t.time:0,d=t.waterNormals!==void 0?t.waterNormals:null,p=t.sunDirection!==void 0?t.sunDirection:new j(.70707,.70707,0),m=new at(t.sunColor!==void 0?t.sunColor:16777215),g=new at(t.waterColor!==void 0?t.waterColor:8355711),x=t.eye!==void 0?t.eye:new j(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,S=t.side!==void 0?t.side:Zr,y=t.fog!==void 0?t.fog:!1,v=new Gr,R=new j,P=new j,b=new j,N=new Bt,L=new j(0,0,-1),T=new Kt,U=new j,w=new j,A=new Kt,k=new Bt,$=new Ti,G=new ks(s,a),ee={name:"MirrorShader",uniforms:Ef.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Bt},sunColor:{value:new at(8355711)},sunDirection:{value:new j(.70707,.70707,0)},eye:{value:new j},waterColor:{value:new at(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},oe=new Mr({name:ee.name,uniforms:Ef.clone(ee.uniforms),vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader,lights:!0,side:S,fog:y});oe.uniforms.mirrorSampler.value=G.texture,oe.uniforms.textureMatrix.value=k,oe.uniforms.alpha.value=c,oe.uniforms.time.value=f,oe.uniforms.normalSampler.value=d,oe.uniforms.sunColor.value=m,oe.uniforms.waterColor.value=g,oe.uniforms.sunDirection.value=p,oe.uniforms.distortionScale.value=E,oe.uniforms.eye.value=x,n.material=oe,n.onBeforeRender=function(K,ce,B){if(P.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(B.matrixWorld),N.extractRotation(n.matrixWorld),R.set(0,0,1),R.applyMatrix4(N),U.subVectors(P,b),U.dot(R)>0)return;U.reflect(R).negate(),U.add(P),N.extractRotation(B.matrixWorld),L.set(0,0,-1),L.applyMatrix4(N),L.add(b),w.subVectors(P,L),w.reflect(R).negate(),w.add(P),$.position.copy(U),$.up.set(0,1,0),$.up.applyMatrix4(N),$.up.reflect(R),$.lookAt(w),$.far=B.far,$.updateMatrixWorld(),$.projectionMatrix.copy(B.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply($.projectionMatrix),k.multiply($.matrixWorldInverse),v.setFromNormalAndCoplanarPoint(R,P),v.applyMatrix4($.matrixWorldInverse),T.set(v.normal.x,v.normal.y,v.normal.z,v.constant);const se=$.projectionMatrix;A.x=(Math.sign(T.x)+se.elements[8])/se.elements[0],A.y=(Math.sign(T.y)+se.elements[9])/se.elements[5],A.z=-1,A.w=(1+se.elements[10])/se.elements[14],T.multiplyScalar(2/T.dot(A)),se.elements[2]=T.x,se.elements[6]=T.y,se.elements[10]=T.z+1-u,se.elements[14]=T.w,x.setFromMatrixPosition(B.matrixWorld);const le=K.getRenderTarget(),z=K.xr.enabled,ne=K.shadowMap.autoUpdate;n.visible=!1,K.xr.enabled=!1,K.shadowMap.autoUpdate=!1,K.setRenderTarget(G),K.state.buffers.depth.setMask(!0),K.autoClear===!1&&K.clear(),K.render(ce,$),n.visible=!0,K.xr.enabled=z,K.shadowMap.autoUpdate=ne,K.setRenderTarget(le);const Ae=B.viewport;Ae!==void 0&&K.state.viewport(Ae)}}}class $f extends Jn{constructor(){const e=$f.SkyShader,t=new Mr({name:e.name,uniforms:Ef.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ei,depthWrite:!1});super(new $a(1,1,1),t),this.isSky=!0}}$f.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new j},up:{value:new j(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const vy={type:"change"},Qm={type:"start"},Fx={type:"end"},ef=new jf,yy=new Gr,j2=Math.cos(70*fm.DEG2RAD),gn=new j,ui=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dp=1e-6;class Y2 extends ab{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:Sa.ROTATE,TWO:Sa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ao,this._lastTargetPosition=new j,this._quat=new Ao().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jv,this._sphericalDelta=new jv,this._scale=1,this._panOffset=new j,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new j,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q2.bind(this),this._onPointerDown=$2.bind(this),this._onPointerUp=K2.bind(this),this._onContextMenu=iD.bind(this),this._onMouseWheel=J2.bind(this),this._onKeyDown=eD.bind(this),this._onTouchStart=tD.bind(this),this._onTouchMove=nD.bind(this),this._onMouseDown=Z2.bind(this),this._onMouseMove=Q2.bind(this),this._interceptControlDown=rD.bind(this),this._interceptControlUp=sD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vy),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=gn.length();u=this._clampDistance(c*this._scale);const f=c-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ef.origin.copy(this.object.position),ef.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ef.direction))<j2?this.object.lookAt(this.target):(yy.setFromNormalAndCoplanarPoint(this.object.up,this.target),ef.intersectPlane(yy,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>dp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dp||this._lastTargetPosition.distanceToSquared(this.target)>dp?(this.dispatchEvent(vy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gn.copy(s).sub(this.target);let a=gn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,u=n.width,c=n.height;this._mouse.x=s/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function q2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function K2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fx),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Z2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Pt.DOLLY;break;case ba.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Pt.ROTATE}break;case ba.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Qm)}function Q2(r){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function J2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(r.preventDefault(),this.dispatchEvent(Qm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fx))}function eD(r){this.enabled!==!1&&this._handleKeyDown(r)}function tD(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Sa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Pt.TOUCH_ROTATE;break;case Sa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Sa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Pt.TOUCH_DOLLY_PAN;break;case Sa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Qm)}function nD(r){switch(this._trackPointer(r),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Pt.NONE}}function iD(r){this.enabled!==!1&&r.preventDefault()}function rD(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sD(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const oD=/^[og]\s*(.+)?/,aD=/^mtllib /,lD=/^usemtl /,uD=/^usemap /,xy=/\s+/,Sy=new j,pp=new j,My=new j,Ey=new j,zi=new j,tf=new at;function cD(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const c={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const d={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,a=this.object.geometry.normals;Sy.fromArray(s,e),pp.fromArray(s,t),My.fromArray(s,n),zi.subVectors(My,pp),Ey.subVectors(Sy,pp),zi.cross(Ey),zi.normalize(),a.push(zi.x,zi.y,zi.z),a.push(zi.x,zi.y,zi.z),a.push(zi.x,zi.y,zi.z)},addColor:function(e,t,n){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&a.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,a,u,c,f,d){const p=this.vertices.length;let m=this.parseVertexIndex(e,p),g=this.parseVertexIndex(t,p),x=this.parseVertexIndex(n,p);if(this.addVertex(m,g,x),this.addColor(m,g,x),c!==void 0&&c!==""){const E=this.normals.length;m=this.parseNormalIndex(c,E),g=this.parseNormalIndex(f,E),x=this.parseNormalIndex(d,E),this.addNormal(m,g,x)}else this.addFaceNormal(m,g,x);if(s!==void 0&&s!==""){const E=this.uvs.length;m=this.parseUVIndex(s,E),g=this.parseUVIndex(a,E),x=this.parseUVIndex(u,E),this.addUV(m,g,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let a=0,u=e.length;a<u;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,u=t.length;a<u;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return r.startObject("",!1),r}class fD extends vu{constructor(e){super(e),this.materials=null}load(e,t,n,s){const a=this,u=new JA(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{t(a.parse(c))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new cD;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let c=0,f=n.length;c<f;c++){const d=n[c].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const m=d.split(xy);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(tf.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Mi),t.colors.push(tf.r,tf.g,tf.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(p==="f"){const g=d.slice(1).trim().split(xy),x=[];for(let S=0,y=g.length;S<y;S++){const v=g[S];if(v.length>0){const R=v.split("/");x.push(R)}}const E=x[0];for(let S=1,y=x.length-1;S<y;S++){const v=x[S],R=x[S+1];t.addFace(E[0],v[0],R[0],E[1],v[1],R[1],E[2],v[2],R[2])}}else if(p==="l"){const m=d.substring(1).trim().split(" ");let g=[];const x=[];if(d.indexOf("/")===-1)g=m;else for(let E=0,S=m.length;E<S;E++){const y=m[E].split("/");y[0]!==""&&g.push(y[0]),y[1]!==""&&x.push(y[1])}t.addLineGeometry(g,x)}else if(p==="p"){const g=d.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((s=oD.exec(d))!==null){const m=(" "+s[0].slice(1).trim()).slice(1);t.startObject(m)}else if(lD.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(aD.test(d))t.materialLibraries.push(d.substring(7).trim());else if(uD.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const g=s[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Ol;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let c=0,f=t.objects.length;c<f;c++){const d=t.objects[c],p=d.geometry,m=d.materials,g=p.type==="Line",x=p.type==="Points";let E=!1;if(p.vertices.length===0)continue;const S=new Wi;S.setAttribute("position",new wn(p.vertices,3)),p.normals.length>0&&S.setAttribute("normal",new wn(p.normals,3)),p.colors.length>0&&(E=!0,S.setAttribute("color",new wn(p.colors,3))),p.hasUVIndices===!0&&S.setAttribute("uv",new wn(p.uvs,2));const y=[];for(let R=0,P=m.length;R<P;R++){const b=m[R],N=b.name+"_"+b.smooth+"_"+E;let L=t.materials[N];if(this.materials!==null){if(L=this.materials.create(b.name),g&&L&&!(L instanceof df)){const T=new df;Sr.prototype.copy.call(T,L),T.color.copy(L.color),L=T}else if(x&&L&&!(L instanceof Fl)){const T=new Fl({size:10,sizeAttenuation:!1});Sr.prototype.copy.call(T,L),T.color.copy(L.color),T.map=L.map,L=T}}L===void 0&&(g?L=new df:x?L=new Fl({size:1,sizeAttenuation:!1}):L=new $A,L.name=b.name,L.flatShading=!b.smooth,L.vertexColors=E,t.materials[N]=L),y.push(L)}let v;if(y.length>1){for(let R=0,P=m.length;R<P;R++){const b=m[R];S.addGroup(b.groupStart,b.groupCount,R)}g?v=new Hv(S,y):x?v=new op(S,y):v=new Jn(S,y)}else g?v=new Hv(S,y[0]):x?v=new op(S,y[0]):v=new Jn(S,y[0]);v.name=d.name,a.add(v)}else if(t.vertices.length>0){const c=new Fl({size:1,sizeAttenuation:!1}),f=new Wi;f.setAttribute("position",new wn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new wn(t.colors,3)),c.vertexColors=!0);const d=new op(f,c);a.add(d)}return a}}function Vr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},za={duration:.5,overwrite:!1,delay:0},Jm,Dn,Wt,xr=1e8,Vn=1/xr,pm=Math.PI*2,hD=pm/4,dD=0,zx=Math.sqrt,pD=Math.cos,mD=Math.sin,An=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},eg=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ci=function(e){return e!==!1},tg=function(){return typeof window<"u"},nf=function(e){return rn(e)||An(e)},Bx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,mm=/(?:-?\.?\d|\.)+/gi,Hx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vx=/[+-]=-?[.\d]+/,Gx=/[^,'"\[\]\s]+/gi,gD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,fr,gm,ng,Pi={},bf={},Wx,Xx=function(e){return(bf=Ba(e,Pi))&&mi},ig=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},su=function(e,t){return!t&&console.warn(e)},jx=function(e,t){return e&&(Pi[e]=t)&&bf&&(bf[e]=t)||Pi},ou=function(){return 0},_D={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},vD={suppressEvents:!0},rg={},Os=[],_m={},Yx,Ei={},gp={},Ty=30,gf=[],sg="",og=function(e){var t=e[0],n,s;if(Er(t)||rn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=gf.length;s--&&!gf[s].targetTest(t););n=gf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new _S(e[s],n)))||e.splice(s,1);return e},So=function(e){return e._gsap||og(Vi(e))[0]._gsap},$x=function(e,t,n){return(n=e[t])&&rn(n)?e[t]():eg(n)&&e.getAttribute&&e.getAttribute(t)||n},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},on=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},Pa=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},yD=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Cf=function(){var e=Os.length,t=Os.slice(0),n,s;for(_m={},Os.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},ag=function(e){return!!(e._initted||e._startAt||e.add)},qx=function(e,t,n,s){Os.length&&!Dn&&Cf(),e.render(t,n,!!(Dn&&t<0&&ag(e))),Os.length&&!Dn&&Cf()},Kx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gx).length<2?t:An(e)?e.trim():e},Zx=function(e){return e},Di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xD=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Ba=function(e,t){for(var n in t)e[n]=t[n];return e},wy=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Er(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Rf=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},Xl=function(e){var t=e.parent||qt,n=e.keyframes?xD(Wn(e.keyframes)):Di;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},SD=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Qx=function(e,t,n,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},qf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},MD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vm=function(e,t,n,s){return e._startAt&&(Dn?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},ED=function r(e){return!e||e._ts&&r(e.parent)},Ay=function(e){return e._repeat?Ha(e._tTime,e=e.duration()+e._rDelay)*e:0},Ha=function(e,t){var n=Math.floor(e=fn(e/t));return e&&n===e?n-1:n},Pf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kf=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vn)||0))},Zf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kf(e),n._dirty||Mo(n,e)),e},Jx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pf(e.rawTime(),t),(!t._dur||yu(0,t.totalDuration(),n)-t._tTime>Vn)&&t.render(n,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},mr=function(e,t,n,s){return t.parent&&zs(t),t._start=fn((Jr(n)?n:n||e!==qt?Bi(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qx(e,t,"_first","_last",e._sort?"_start":0),ym(t)||(e._recent=t),s||Jx(e,t),e._ts<0&&Zf(e,e._tTime),e},eS=function(e,t){return(Pi.ScrollTrigger||ig("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},tS=function(e,t,n,s,a){if(ug(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yx!==Ai.frame)return Os.push(e),e._lazy=[a,s],1},TD=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ym=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wD=function(e,t,n,s){var a=e.ratio,u=t<0||!t&&(!e._start&&TD(e)&&!(!e._initted&&ym(e))||(e._ts<0||e._dp._ts<0)&&!ym(e))?0:1,c=e._rDelay,f=0,d,p,m;if(c&&e._repeat&&(f=yu(0,e._tDur,t),p=Ha(f,c),e._yoyo&&p&1&&(u=1-u),p!==Ha(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||Dn||s||e._zTime===Vn||!t&&e._zTime){if(!e._initted&&tS(e,t,s,n,f))return;for(m=e._zTime,e._zTime=t||(n?Vn:0),n||(n=t&&!m),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=f,d=e._pt;d;)d.r(u,d.d),d=d._next;t<0&&vm(e,t,n,!0),e._onUpdate&&!n&&bi(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&zs(e,1),!n&&!Dn&&(bi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AD=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Va=function(e,t,n,s){var a=e._repeat,u=fn(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:fn(u*(a+1)+e._rDelay*a):u,c>0&&!s&&Zf(e,e._tTime=e._tDur*c),e.parent&&Kf(e),n||Mo(e.parent,e),e},by=function(e){return e instanceof Qn?Mo(e):Va(e,e._dur)},bD={_start:0,endTime:ou,totalDuration:ou},Bi=function r(e,t,n){var s=e.labels,a=e._recent||bD,u=e.duration()>=xr?a.endTime(!1):e._dur,c,f,d;return An(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&n&&(f=f/100*(Wn(n)?n[0]:n).totalDuration()),c>1?r(e,t.substr(0,c-1),n)+f:u+f)):t==null?u:+t},jl=function(e,t,n){var s=Jr(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,f;if(s&&(u.duration=t[1]),u.parent=n,e){for(c=u,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=ci(f.vars.inherit)&&f.parent;u.immediateRender=ci(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new cn(t[0],u,t[a+1])},Vs=function(e,t){return e||e===0?t(e):t},yu=function(e,t,n){return n<e?e:n>t?t:n},Hn=function(e,t){return!An(e)||!(t=gD.exec(e))?"":t[1]},CD=function(e,t,n){return Vs(n,function(s){return yu(e,t,s)})},xm=[].slice,nS=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==fr},RD=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return An(s)&&!t||nS(s,1)?(a=n).push.apply(a,Vi(s)):n.push(s)})||n},Vi=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):An(e)&&!n&&(gm||!Ga())?xm.call((t||ng).querySelectorAll(e),0):Wn(e)?RD(e,n):nS(e)?xm.call(e,0):e?[e]:[]},Sm=function(e){return e=Vi(e)[0]||su("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vi(t,n.querySelectorAll?n:n===e?su("Invalid scope")||ng.createElement("div"):e)}},iS=function(e){return e.sort(function(){return .5-Math.random()})},rS=function(e){if(rn(e))return e;var t=Er(e)?e:{each:e},n=Eo(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,f=isNaN(s)||c,d=t.axis,p=s,m=s;return An(s)?p=m={center:.5,edges:.5,end:1}[s]||0:!c&&f&&(p=s[0],m=s[1]),function(g,x,E){var S=(E||t).length,y=u[S],v,R,P,b,N,L,T,U,w;if(!y){if(w=t.grid==="auto"?0:(t.grid||[1,xr])[1],!w){for(T=-1e8;T<(T=E[w++].getBoundingClientRect().left)&&w<S;);w<S&&w--}for(y=u[S]=[],v=f?Math.min(w,S)*p-.5:s%w,R=w===xr?0:f?S*m/w-.5:s/w|0,T=0,U=xr,L=0;L<S;L++)P=L%w-v,b=R-(L/w|0),y[L]=N=d?Math.abs(d==="y"?b:P):zx(P*P+b*b),N>T&&(T=N),N<U&&(U=N);s==="random"&&iS(y),y.max=T-U,y.min=U,y.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(w>S?S-1:d?d==="y"?S/w:w:Math.max(w,S/w))||0)*(s==="edges"?-1:1),y.b=S<0?a-S:a,y.u=Hn(t.amount||t.each)||0,n=n&&S<0?pS(n):n}return S=(y[g]-y.min)/y.max||0,fn(y.b+(n?n(S):S)*y.v)+y.u}},Mm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=fn(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Jr(n)?0:Hn(n))}},sS=function(e,t){var n=Wn(e),s,a;return!n&&Er(e)&&(s=n=e.radius||xr,e.values?(e=Vi(e.values),(a=!Jr(e[0]))&&(s*=s)):e=Mm(e.increment)),Vs(t,n?rn(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),f=parseFloat(a?u.y:0),d=xr,p=0,m=e.length,g,x;m--;)a?(g=e[m].x-c,x=e[m].y-f,g=g*g+x*x):g=Math.abs(e[m]-c),g<d&&(d=g,p=m);return p=!s||d<=s?e[p]:u,a||p===u||Jr(u)?p:p+Hn(u)}:Mm(e))},oS=function(e,t,n,s){return Vs(Wn(e)?!t:n===!0?!!(n=0):!s,function(){return Wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},PD=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,u){return u(a)},s)}},DD=function(e,t){return function(n){return e(parseFloat(n))+(t||Hn(n))}},LD=function(e,t,n){return lS(e,t,0,1,n)},aS=function(e,t,n){return Vs(n,function(s){return e[~~t(s)]})},ID=function r(e,t,n){var s=t-e;return Wn(e)?aS(e,r(0,e.length),t):Vs(n,function(a){return(s+(a-e)%s)%s+e})},UD=function r(e,t,n){var s=t-e,a=s*2;return Wn(e)?aS(e,r(0,e.length-1),t):Vs(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},au=function(e){for(var t=0,n="",s,a,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",a=e.substr(s+7,u-s-7).match(c?Gx:mm),n+=e.substr(t,s-t)+oS(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},lS=function(e,t,n,s,a){var u=t-e,c=s-n;return Vs(a,function(f){return n+((f-e)/u*c||0)})},ND=function r(e,t,n,s){var a=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!a){var u=An(e),c={},f,d,p,m,g;if(n===!0&&(s=1)&&(n=null),u)e={p:e},t={p:t};else if(Wn(e)&&!Wn(t)){for(p=[],m=e.length,g=m-2,d=1;d<m;d++)p.push(r(e[d-1],e[d]));m--,a=function(E){E*=m;var S=Math.min(g,~~E);return p[S](E-S)},n=t}else s||(e=Ba(Wn(e)?[]:{},e));if(!p){for(f in t)lg.call(c,e,f,"get",t[f]);a=function(E){return hg(E,c)||(u?e.p:e)}}}return Vs(n,a)},Cy=function(e,t,n){var s=e.labels,a=xr,u,c,f;for(u in s)c=s[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=u,a=c);return f},bi=function(e,t,n){var s=e.vars,a=s[t],u=Wt,c=e._ctx,f,d,p;if(a)return f=s[t+"Params"],d=s.callbackScope||e,n&&Os.length&&Cf(),c&&(Wt=c),p=f?a.apply(d,f):a.call(d),Wt=u,p},zl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&bi(e,"onInterrupt"),e},Ta,uS=[],cS=function(e){if(e)if(e=!e.name&&e.default||e,tg()||e.headless){var t=e.name,n=rn(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:ou,render:hg,add:lg,kill:ZD,modifier:KD,rawVars:0},u={targetTest:0,get:0,getSetter:fg,aliases:{},register:0};if(Ga(),e!==s){if(Ei[t])return;Di(s,Di(Rf(e,a),u)),Ba(s.prototype,Ba(a,Rf(e,u))),Ei[s.prop=t]=s,e.targetTest&&(gf.push(s),rg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jx(t,s),e.register&&e.register(mi,s,hi)}else uS.push(e)},Lt=255,Bl={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},_p=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},fS=function(e,t,n){var s=e?Jr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Bl.black,a,u,c,f,d,p,m,g,x,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bl[e])s=Bl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Lt,s&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(mm),!t)f=+s[0]%360/360,d=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(d+1):p+d-p*d,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=_p(f+1/3,a,u),s[1]=_p(f,a,u),s[2]=_p(f-1/3,a,u);else if(~e.indexOf("="))return s=e.match(Hx),n&&s.length<4&&(s[3]=1),s}else s=e.match(mm)||Bl.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Lt,u=s[1]/Lt,c=s[2]/Lt,m=Math.max(a,u,c),g=Math.min(a,u,c),p=(m+g)/2,m===g?f=d=0:(x=m-g,d=p>.5?x/(2-m-g):x/(m+g),f=m===a?(u-c)/x+(u<c?6:0):m===u?(c-a)/x+2:(a-u)/x+4,f*=60),s[0]=~~(f+.5),s[1]=~~(d*100+.5),s[2]=~~(p*100+.5)),n&&s.length<4&&(s[3]=1),s},hS=function(e){var t=[],n=[],s=-1;return e.split(Fs).forEach(function(a){var u=a.match(Ea)||[];t.push.apply(t,u),n.push(s+=u.length+1)}),t.c=n,t},Ry=function(e,t,n){var s="",a=(e+s).match(Fs),u=t?"hsla(":"rgba(",c=0,f,d,p,m;if(!a)return e;if(a=a.map(function(g){return(g=fS(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=hS(e),f=n.c,f.join(s)!==p.c.join(s)))for(d=e.replace(Fs,"1").split(Ea),m=d.length-1;c<m;c++)s+=d[c]+(~f.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(Fs),m=d.length-1;c<m;c++)s+=d[c]+a[c];return s+d[m]},Fs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),OD=/hsl[a]?\(/,dS=function(e){var t=e.join(" "),n;if(Fs.lastIndex=0,Fs.test(t))return n=OD.test(t),e[1]=Ry(e[1],n),e[0]=Ry(e[0],n,hS(e[1])),!0},lu,Ai=function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,u=a,c=[],f,d,p,m,g,x,E=function S(y){var v=r()-s,R=y===!0,P,b,N,L;if((v>e||v<0)&&(n+=v-t),s+=v,N=s-n,P=N-u,(P>0||R)&&(L=++m.frame,g=N-m.time*1e3,m.time=N=N/1e3,u+=P+(P>=a?4:a-P),b=1),R||(f=d(S)),b)for(x=0;x<c.length;x++)c[x](N,g,L,y)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Wx&&(!gm&&tg()&&(fr=gm=window,ng=fr.document||{},Pi.gsap=mi,(fr.gsapVersions||(fr.gsapVersions=[])).push(mi.version),Xx(bf||fr.GreenSockGlobals||!fr.gsap&&fr||{}),uS.forEach(cS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),d=p||function(y){return setTimeout(y,u-m.time*1e3+1|0)},lu=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),lu=0,d=ou},lagSmoothing:function(y,v){e=y||1/0,t=Math.min(v||33,e)},fps:function(y){a=1e3/(y||240),u=m.time*1e3+a},add:function(y,v,R){var P=v?function(b,N,L,T){y(b,N,L,T),m.remove(P)}:y;return m.remove(y),c[R?"unshift":"push"](P),Ga(),P},remove:function(y,v){~(v=c.indexOf(y))&&c.splice(v,1)&&x>=v&&x--},_listeners:c},m}(),Ga=function(){return!lu&&Ai.wake()},vt={},FD=/^[\d.\-M][\d.\-,\s]/,kD=/["']/g,zD=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,u=n.length,c,f,d;a<u;a++)f=n[a],c=a!==u-1?f.lastIndexOf(","):f.length,d=f.substr(0,c),t[s]=isNaN(d)?d.replace(kD,"").trim():+d,s=f.substr(c+1).trim();return t},BD=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},HD=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zD(t[1])]:BD(e).split(",").map(Kx)):vt._CE&&FD.test(e)?vt._CE("",e):n},pS=function(e){return function(t){return 1-e(1-t)}},mS=function r(e,t){for(var n=e._first,s;n;)n instanceof Qn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Eo=function(e,t){return e&&(rn(e)?e:vt[e]||HD(e))||t},Ro=function(e,t,n,s){n===void 0&&(n=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},u;return fi(e,function(c){vt[c]=Pi[c]=a,vt[u=c.toLowerCase()]=n;for(var f in a)vt[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=vt[c+"."+f]=a[f]}),a},gS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vp=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/pm*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*mD((p-u)*a)+1},f=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:gS(c);return a=pm/a,f.config=function(d,p){return r(e,d,p)},f},yp=function r(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:gS(n);return s.config=function(a){return r(e,a)},s};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ro(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Ro("Elastic",vp("in"),vp("out"),vp());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(c){return c<t?r*c*c:c<n?r*Math.pow(c-1.5/e,2)+.75:c<s?r*(c-=2.25/e)*c+.9375:r*Math.pow(c-2.625/e,2)+.984375};Ro("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Ro("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ro("Circ",function(r){return-(zx(1-r*r)-1)});Ro("Sine",function(r){return r===1?1:-pD(r*hD)+1});Ro("Back",yp("in"),yp("out"),yp());vt.SteppedEase=vt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,u=1-Vn;return function(c){return((s*yu(0,u,c)|0)+a)*n}}};za.ease=vt["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return sg+=r+","+r+"Params,"});var _S=function(e,t){this.id=dD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$x,this.set=t?t.getSetter:fg},uu=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Va(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),lu||Ai.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Va(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Ga(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Zf(this,n),!a._dp||a.parent||Jx(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Vn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qx(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ay(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ay(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?Ha(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Pf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(yu(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Kf(this),MD(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vn&&(this._tTime-=Vn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mr(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pf(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vD);var s=Dn;return Dn=n,ag(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dn=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,by(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,by(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Bi(this,n),ci(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ci(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Vn)},e.eventCallback=function(n,s,a){var u=this.vars;return arguments.length>1?(s?(u[n]=s,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete u[n],this):u[n]},e.then=function(n){var s=this;return new Promise(function(a){var u=rn(n)?n:Zx,c=function(){var d=s.then;s.then=null,rn(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=d),a(u),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){zl(this)},r}();Di(uu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Qn=function(r){kx(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=ci(n.sortChildren),qt&&mr(n.parent||qt,Vr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&eS(Vr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return jl(0,arguments,this),this},t.from=function(s,a,u){return jl(1,arguments,this),this},t.fromTo=function(s,a,u,c){return jl(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,Xl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new cn(s,a,Bi(this,u),1),this},t.call=function(s,a,u){return mr(this,cn.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,f,d,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=d,u.onCompleteParams=p,u.parent=this,new cn(s,u,Bi(this,f)),this},t.staggerFrom=function(s,a,u,c,f,d,p){return u.runBackwards=1,Xl(u).immediateRender=ci(u.immediateRender),this.staggerTo(s,a,u,c,f,d,p)},t.staggerFromTo=function(s,a,u,c,f,d,p,m){return c.startAt=u,Xl(c).immediateRender=ci(c.immediateRender),this.staggerTo(s,a,c,f,d,p,m)},t.render=function(s,a,u){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=s<=0?0:fn(s),m=this._zTime<0!=s<0&&(this._initted||!d),g,x,E,S,y,v,R,P,b,N,L,T;if(this!==qt&&p>f&&s>=0&&(p=f),p!==this._tTime||u||m){if(c!==this._time&&d&&(p+=this._time-c,s+=this._time-c),g=p,b=this._start,P=this._ts,v=!P,m&&(d||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(L=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,a,u);if(g=fn(p%y),p===f?(S=this._repeat,g=d):(N=fn(p/y),S=~~N,S&&S===N&&(g=d,S--),g>d&&(g=d)),N=Ha(this._tTime,y),!c&&this._tTime&&N!==S&&this._tTime-N*y-this._dur<=0&&(N=S),L&&S&1&&(g=d-g,T=1),S!==N&&!this._lock){var U=L&&N&1,w=U===(L&&S&1);if(S<N&&(U=!U),c=U?0:p%d?d:p,this._lock=1,this.render(c||(T?0:fn(S*y)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,w&&(this._lock=2,c=U?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;mS(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=AD(this,fn(c),fn(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&!a&&!N&&(bi(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(x=this._first;x;){if(E=x._next,(x._act||g>=x._start)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,a,u);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,a,u),g!==this._time||!this._ts&&!v){R=0,E&&(p+=this._zTime=-1e-8);break}}x=E}else{x=this._last;for(var A=s<0?s:g;x;){if(E=x._prev,(x._act||A<=x._end)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,a,u);if(x.render(x._ts>0?(A-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(A-x._start)*x._ts,a,u||Dn&&ag(x)),g!==this._time||!this._ts&&!v){R=0,E&&(p+=this._zTime=A?-1e-8:Vn);break}}x=E}}if(R&&!a&&(this.pause(),R.render(g>=c?0:-1e-8)._zTime=g>=c?1:-1,this._ts))return this._start=b,Kf(this),this.render(s,a,u);this._onUpdate&&!a&&bi(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(b===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(p===f&&this._ts>0||!p&&this._ts<0)&&zs(this,1),!a&&!(s<0&&!c)&&(p||c||!f)&&(bi(this,p===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(Jr(a)||(a=Bi(this,a,s)),!(s instanceof uu)){if(Wn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(An(s))return this.addLabel(s,a);if(rn(s))s=cn.delayedCall(0,s);else return this}return this!==s?mr(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-1e8);for(var f=[],d=this._first;d;)d._start>=c&&(d instanceof cn?a&&f.push(d):(u&&f.push(d),s&&f.push.apply(f,d.getChildren(!0,a,u)))),d=d._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return An(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&qf(this,s),s===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(Ai.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Bi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=cn.delayedCall(0,a||ou,u);return c.data="isPause",this._hasPause=1,mr(this,c,Bi(this,s))},t.removePause=function(s){var a=this._first;for(s=Bi(this,s);a;)a._start===s&&a.data==="isPause"&&zs(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),f=c.length;f--;)Ps!==c[f]&&c[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=Vi(s),f=this._first,d=Jr(a),p;f;)f instanceof cn?yD(f._targets,c)&&(d?(!Ps||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&u.push(f):(p=f.getTweensOf(c,a)).length&&u.push.apply(u,p),f=f._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=Bi(u,s),f=a,d=f.startAt,p=f.onStart,m=f.onStartParams,g=f.immediateRender,x,E=cn.to(u,Di({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale())||Vn,onStart:function(){if(u.pause(),!x){var y=a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale());E._dur!==y&&Va(E,y,0,1).render(E._time,!0,!0),x=1}p&&p.apply(E,m||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,Di({startAt:{time:Bi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Cy(this,Bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Cy(this,Bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Vn)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);for(var c=this._first,f=this.labels,d;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(d in f)f[d]>=u&&(f[d]+=s);return Mo(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Mo(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,f=xr,d,p,m;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(m=u.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&u._sort&&c._ts&&!u._lock?(u._lock=1,mr(u,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!m&&!u._dp||m&&m.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=d;Va(u,u===qt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(qt._ts&&(qx(qt,Pf(s,qt)),Yx=Ai.frame),Ai.frame>=Ty){Ty+=Ri.autoSleep||120;var a=qt._first;if((!a||!a._ts)&&Ri.autoSleep&&Ai._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ai.sleep()}}},e}(uu);Di(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var VD=function(e,t,n,s,a,u,c){var f=new hi(this._pt,e,t,0,1,ES,null,a),d=0,p=0,m,g,x,E,S,y,v,R;for(f.b=n,f.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=au(s)),u&&(R=[n,s],u(R,e,t),n=R[0],s=R[1]),g=n.match(mp)||[];m=mp.exec(s);)E=m[0],S=s.substring(d,m.index),x?x=(x+1)%5:S.substr(-5)==="rgba("&&(x=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:S||p===1?S:",",s:y,c:E.charAt(1)==="="?Pa(y,E)-y:parseFloat(E)-y,m:x&&x<4?Math.round:0},d=mp.lastIndex);return f.c=d<s.length?s.substring(d,s.length):"",f.fp=c,(Vx.test(s)||v)&&(f.e=0),this._pt=f,f},lg=function(e,t,n,s,a,u,c,f,d,p){rn(s)&&(s=s(a||0,e,u));var m=e[t],g=n!=="get"?n:rn(m)?d?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():m,x=rn(m)?d?YD:SS:cg,E;if(An(s)&&(~s.indexOf("random(")&&(s=au(s)),s.charAt(1)==="="&&(E=Pa(g,s)+(Hn(g)||0),(E||E===0)&&(s=E))),!p||g!==s||Em)return!isNaN(g*s)&&s!==""?(E=new hi(this._pt,e,t,+g||0,s-(g||0),typeof m=="boolean"?qD:MS,0,x),d&&(E.fp=d),c&&E.modifier(c,this,e),this._pt=E):(!m&&!(t in e)&&ig(t,s),VD.call(this,e,t,g,s,x,f||Ri.stringFilter,d))},GD=function(e,t,n,s,a){if(rn(e)&&(e=Yl(e,a,t,n,s)),!Er(e)||e.style&&e.nodeType||Wn(e)||Bx(e))return An(e)?Yl(e,a,t,n,s):e;var u={},c;for(c in e)u[c]=Yl(e[c],a,t,n,s);return u},vS=function(e,t,n,s,a,u){var c,f,d,p;if(Ei[e]&&(c=new Ei[e]).init(a,c.rawVars?t[e]:GD(t[e],s,a,u,n),n,s,u)!==!1&&(n._pt=f=new hi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==Ta))for(d=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=f;return c},Ps,Em,ug=function r(e,t,n){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,f=s.lazy,d=s.onUpdate,p=s.runBackwards,m=s.yoyoEase,g=s.keyframes,x=s.autoRevert,E=e._dur,S=e._startAt,y=e._targets,v=e.parent,R=v&&v.data==="nested"?v.vars.targets:y,P=e._overwrite==="auto"&&!Jm,b=e.timeline,N,L,T,U,w,A,k,$,G,ee,oe,K,ce;if(b&&(!g||!a)&&(a="none"),e._ease=Eo(a,za.ease),e._yEase=m?pS(Eo(m===!0?a:m,za.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!b&&!!s.runBackwards,!b||g&&!s.stagger){if($=y[0]?So(y[0]).harness:0,K=$&&s[$.prop],N=Rf(s,rg),S&&(S._zTime<0&&S.progress(1),t<0&&p&&c&&!x?S.render(-1,!0):S.revert(p&&E?mf:_D),S._lazy=0),u){if(zs(e._startAt=cn.set(y,Di({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!S&&ci(f),startAt:null,delay:0,onUpdate:d&&function(){return bi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!c&&!x)&&e._startAt.revert(mf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!S){if(t&&(c=!1),T=Di({overwrite:!1,data:"isFromStart",lazy:c&&!S&&ci(f),immediateRender:c,stagger:0,parent:v},N),K&&(T[$.prop]=K),zs(e._startAt=cn.set(y,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(mf):e._startAt.render(-1,!0)),e._zTime=t,!c)r(e._startAt,Vn,Vn);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&ci(f)||f&&!E,L=0;L<y.length;L++){if(w=y[L],k=w._gsap||og(y)[L]._gsap,e._ptLookup[L]=ee={},_m[k.id]&&Os.length&&Cf(),oe=R===y?L:R.indexOf(w),$&&(G=new $).init(w,K||N,e,oe,R)!==!1&&(e._pt=U=new hi(e._pt,w,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){ee[B]=U}),G.priority&&(A=1)),!$||K)for(T in N)Ei[T]&&(G=vS(T,N,e,oe,w,R))?G.priority&&(A=1):ee[T]=U=lg.call(e,w,T,"get",N[T],oe,R,0,s.stringFilter);e._op&&e._op[L]&&e.kill(w,e._op[L]),P&&e._pt&&(Ps=e,qt.killTweensOf(w,ee,e.globalTime(t)),ce=!e.parent,Ps=0),e._pt&&f&&(_m[k.id]=1)}A&&TS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!ce,g&&t<=0&&b.render(xr,!0,!0)},WD=function(e,t,n,s,a,u,c,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,g,x;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,x=e._targets.length;x--;){if(p=g[x][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Em=1,e.vars[t]="+=0",ug(e,c),Em=0,f?su(t+" not eligible for reset"):1;d.push(p)}for(x=d.length;x--;)m=d[x],p=m._pt||m,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=n-p.s,m.e&&(m.e=on(n)+Hn(m.e)),m.b&&(m.b=p.s+Hn(m.b))},XD=function(e,t){var n=e[0]?So(e[0]).harness:0,s=n&&n.aliases,a,u,c,f;if(!s)return t;a=Ba({},t);for(u in s)if(u in a)for(f=s[u].split(","),c=f.length;c--;)a[f[c]]=a[u];return a},jD=function(e,t,n,s){var a=t.ease||s||"power1.inOut",u,c;if(Wn(t))c=n[e]||(n[e]=[]),t.forEach(function(f,d){return c.push({t:d/(t.length-1)*100,v:f,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Yl=function(e,t,n,s,a){return rn(e)?e.call(t,n,s,a):An(e)&&~e.indexOf("random(")?au(e):e},yS=sg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xS={};fi(yS+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xS[r]=1});var cn=function(r){kx(e,r);function e(n,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=r.call(this,u?s:Xl(s))||this;var f=c.vars,d=f.duration,p=f.delay,m=f.immediateRender,g=f.stagger,x=f.overwrite,E=f.keyframes,S=f.defaults,y=f.scrollTrigger,v=f.yoyoEase,R=s.parent||qt,P=(Wn(n)||Bx(n)?Jr(n[0]):"length"in s)?[n]:Vi(n),b,N,L,T,U,w,A,k;if(c._targets=P.length?og(P):su("GSAP target "+n+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=x,E||g||nf(d)||nf(p)){if(s=c.vars,b=c.timeline=new Qn({data:"nested",defaults:S||{},targets:R&&R.data==="nested"?R.vars.targets:P}),b.kill(),b.parent=b._dp=Vr(c),b._start=0,g||nf(d)||nf(p)){if(T=P.length,A=g&&rS(g),Er(g))for(U in g)~yS.indexOf(U)&&(k||(k={}),k[U]=g[U]);for(N=0;N<T;N++)L=Rf(s,xS),L.stagger=0,v&&(L.yoyoEase=v),k&&Ba(L,k),w=P[N],L.duration=+Yl(d,Vr(c),N,w,P),L.delay=(+Yl(p,Vr(c),N,w,P)||0)-c._delay,!g&&T===1&&L.delay&&(c._delay=p=L.delay,c._start+=p,L.delay=0),b.to(w,L,A?A(N,w,P):0),b._ease=vt.none;b.duration()?d=p=0:c.timeline=0}else if(E){Xl(Di(b.vars.defaults,{ease:"none"})),b._ease=Eo(E.ease||s.ease||"none");var $=0,G,ee,oe;if(Wn(E))E.forEach(function(K){return b.to(P,K,">")}),b.duration();else{L={};for(U in E)U==="ease"||U==="easeEach"||jD(U,E[U],L,E.easeEach);for(U in L)for(G=L[U].sort(function(K,ce){return K.t-ce.t}),$=0,N=0;N<G.length;N++)ee=G[N],oe={ease:ee.e,duration:(ee.t-(N?G[N-1].t:0))/100*d},oe[U]=ee.v,b.to(P,oe,$),$+=oe.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||c.duration(d=b.duration())}else c.timeline=0;return x===!0&&!Jm&&(Ps=Vr(c),qt.killTweensOf(P),Ps=0),mr(R,Vr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(m||!d&&!E&&c._start===fn(R._time)&&ci(m)&&ED(Vr(c))&&R.data!=="nested")&&(c._tTime=-1e-8,c.render(Math.max(0,-p)||0)),y&&eS(Vr(c),y),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,f=this._tDur,d=this._dur,p=s<0,m=s>f-Vn&&!p?f:s<Vn?0:s,g,x,E,S,y,v,R,P,b;if(!d)wD(this,s,a,u);else if(m!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=m,P=this.timeline,this._repeat){if(S=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+s,a,u);if(g=fn(m%S),m===f?(E=this._repeat,g=d):(y=fn(m/S),E=~~y,E&&E===y?(g=d,E--):g>d&&(g=d)),v=this._yoyo&&E&1,v&&(b=this._yEase,g=d-g),y=Ha(this._tTime,S),g===c&&!u&&this._initted&&E===y)return this._tTime=m,this;E!==y&&(P&&this._yEase&&mS(P,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==S&&this._initted&&(this._lock=u=1,this.render(fn(S*E),!0).invalidate()._lock=0))}if(!this._initted){if(tS(this,p?s:g,u,a,m))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(s,a,u)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(b||this._ease)(g/d),this._from&&(this.ratio=R=1-R),!c&&m&&!a&&!y&&(bi(this,"onStart"),this._tTime!==m))return this;for(x=this._pt;x;)x.r(R,x.d),x=x._next;P&&P.render(s<0?s:P._dur*P._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&vm(this,s,a,u),bi(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&bi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&vm(this,s,!0,!0),(s||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&zs(this,1),!a&&!(p&&!c)&&(m||c||v)&&(bi(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,f){lu||Ai.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||ug(this,d),p=this._ease(d/this._dur),WD(this,s,a,u,c,p,d,f)?this.resetTo(s,a,u,c,1):(Zf(this,0),this.parent||Qx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?zl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Ps&&Ps.vars.overwrite!==!0)._first||zl(this),this.parent&&u!==this.timeline.totalDuration()&&Va(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,f=s?Vi(s):c,d=this._ptLookup,p=this._pt,m,g,x,E,S,y,v;if((!a||a==="all")&&SD(c,f))return a==="all"&&(this._pt=0),zl(this);for(m=this._op=this._op||[],a!=="all"&&(An(a)&&(S={},fi(a,function(R){return S[R]=1}),a=S),a=XD(c,a)),v=c.length;v--;)if(~f.indexOf(c[v])){g=d[v],a==="all"?(m[v]=a,E=g,x={}):(x=m[v]=m[v]||{},E=a);for(S in E)y=g&&g[S],y&&((!("kill"in y.d)||y.d.kill(S)===!0)&&qf(this,y,"_pt"),delete g[S]),x!=="all"&&(x[S]=1)}return this._initted&&!this._pt&&p&&zl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return jl(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return jl(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return qt.killTweensOf(s,a,u)},e}(uu);Di(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(r){cn[r]=function(){var e=new Qn,t=xm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var cg=function(e,t,n){return e[t]=n},SS=function(e,t,n){return e[t](n)},YD=function(e,t,n,s){return e[t](s.fp,n)},$D=function(e,t,n){return e.setAttribute(t,n)},fg=function(e,t){return rn(e[t])?SS:eg(e[t])&&e.setAttribute?$D:cg},MS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ES=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},hg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KD=function(e,t,n,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,n),a=u},ZD=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?qf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},QD=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},TS=function(e){for(var t=e._pt,n,s,a,u;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=n}e._pt=a},hi=function(){function r(t,n,s,a,u,c,f,d,p){this.t=n,this.s=a,this.c=u,this.p=s,this.r=c||MS,this.d=f||this,this.set=d||cg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=QD,this.m=n,this.mt=a,this.tween=s},r}();fi(sg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return rg[r]=1});Pi.TweenMax=Pi.TweenLite=cn;Pi.TimelineLite=Pi.TimelineMax=Qn;qt=new Qn({sortChildren:!1,defaults:za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=dS;var To=[],_f={},JD=[],Py=0,eL=0,xp=function(e){return(_f[e]||JD).map(function(t){return t()})},Tm=function(){var e=Date.now(),t=[];e-Py>2&&(xp("matchMediaInit"),To.forEach(function(n){var s=n.queries,a=n.conditions,u,c,f,d;for(c in s)u=fr.matchMedia(s[c]).matches,u&&(f=1),u!==a[c]&&(a[c]=u,d=1);d&&(n.revert(),f&&t.push(n))}),xp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Py=e,xp("matchMedia"))},wS=function(){function r(t,n){this.selector=n&&Sm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=eL++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){rn(n)&&(a=s,s=n,n=rn);var u=this,c=function(){var d=Wt,p=u.selector,m;return d&&d!==u&&d.data.push(u),a&&(u.selector=Sm(a)),Wt=u,m=s.apply(u,arguments),rn(m)&&u._r.push(m),Wt=d,u.selector=p,u.isReverted=!1,m};return u.last=c,n===rn?c(u,function(f){return u.add(null,f)}):n?u[n]=c:c},e.ignore=function(n){var s=Wt;Wt=null,n(this),Wt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof cn&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?function(){for(var c=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof Qn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof cn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=To.length;u--;)To[u].id===this.id&&To.splice(u,1)},e.revert=function(n){this.kill(n||{})},r}(),tL=function(){function r(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){Er(n)||(n={matches:n});var u=new wS(0,a||this.scope),c=u.conditions={},f,d,p;Wt&&!u.selector&&(u.selector=Wt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=n;for(d in n)d==="all"?p=1:(f=fr.matchMedia(n[d]),f&&(To.indexOf(u)<0&&To.push(u),(c[d]=f.matches)&&(p=1),f.addListener?f.addListener(Tm):f.addEventListener("change",Tm)));return p&&s(u,function(m){return u.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),Df={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return cS(s)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,s){An(e)&&(e=Vi(e)[0]);var a=So(e||{}).get,u=n?Zx:Kx;return n==="native"&&(n=""),e&&(t?u((Ei[t]&&Ei[t].get||a)(e,t,n,s)):function(c,f,d){return u((Ei[c]&&Ei[c].get||a)(e,c,f,d))})},quickSetter:function(e,t,n){if(e=Vi(e),e.length>1){var s=e.map(function(p){return mi.quickSetter(p,t,n)}),a=s.length;return function(p){for(var m=a;m--;)s[m](p)}}e=e[0]||{};var u=Ei[t],c=So(e),f=c.harness&&(c.harness.aliases||{})[t]||t,d=u?function(p){var m=new u;Ta._pt=0,m.init(e,n?p+n:p,Ta,0,[e]),m.render(1,m),Ta._pt&&hg(1,Ta)}:c.set(e,f);return u?d:function(p){return d(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var s,a=mi.to(e,Di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),u=function(f,d,p){return a.resetTo(t,f,d,p)};return u.tween=a,u},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,za.ease)),wy(za,e||{})},config:function(e){return wy(Ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!Ei[c]&&!Pi[c]&&su(t+" effect requires "+c+" plugin.")}),gp[t]=function(c,f,d){return n(Vi(c),Di(f||{},a),d)},u&&(Qn.prototype[t]=function(c,f,d){return this.add(gp[t](c,Er(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){vt[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):vt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qn(e),s,a;for(n.smoothChildTiming=ci(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,s=qt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof cn&&s.vars.onComplete===s._targets[0]))&&mr(n,s,s._start-s._delay),s=a;return mr(qt,n,0),n},context:function(e,t){return e?new wS(e,t):Wt},matchMedia:function(e){return new tL(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Tm()},addEventListener:function(e,t){var n=_f[e]||(_f[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_f[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:ID,wrapYoyo:UD,distribute:rS,random:oS,snap:sS,normalize:LD,getUnit:Hn,clamp:CD,splitColor:fS,toArray:Vi,selector:Sm,mapRange:lS,pipe:PD,unitize:DD,interpolate:ND,shuffle:iS},install:Xx,effects:gp,ticker:Ai,updateRoot:Qn.updateRoot,plugins:Ei,globalTimeline:qt,core:{PropTween:hi,globals:jx,Tween:cn,Timeline:Qn,Animation:uu,getCache:So,_removeLinkedListItem:qf,reverting:function(){return Dn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Jm=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Df[r]=cn[r]});Ai.add(Qn.updateRoot);Ta=Df.to({},{duration:0});var nL=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},iL=function(e,t){var n=e._targets,s,a,u;for(s in t)for(a=n.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=nL(u,s)),u&&u.modifier&&u.modifier(t[s],e,n[a],s))},Sp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,u){u._onInit=function(c){var f,d;if(An(a)&&(f={},fi(a,function(p){return f[p]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}iL(c,a)}}}},mi=Df.registerPlugin({name:"attr",init:function(e,t,n,s,a){var u,c,f;this.tween=n;for(u in t)f=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(f||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=f,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)Dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sp("roundProps",Mm),Sp("modifiers"),Sp("snap",sS))||Df;cn.version=Qn.version=mi.version="3.13.0";Wx=1;tg()&&Ga();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dy,Ds,Da,dg,xo,Ly,pg,rL=function(){return typeof window<"u"},es={},po=180/Math.PI,La=Math.PI/180,ya=Math.atan2,Iy=1e8,mg=/([A-Z])/g,sL=/(left|right|width|margin|padding|x)/i,oL=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uL=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},AS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cL=function(e,t,n){return e.style[t]=n},fL=function(e,t,n){return e.style.setProperty(t,n)},hL=function(e,t,n){return e._gsap[t]=n},dL=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},pL=function(e,t,n,s,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},mL=function(e,t,n,s,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},Zt="transform",di=Zt+"Origin",gL=function r(e,t){var n=this,s=this.target,a=s.style,u=s._gsap;if(e in es&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Wr(s,c)}):this.tfm[e]=u.x?u[e]:Wr(s,e),e===di&&(this.tfm.zOrigin=u.zOrigin);else return _r.transform.split(",").forEach(function(c){return r.call(n,c,t)});if(this.props.indexOf(Zt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Zt}(a||t)&&this.props.push(e,t,a[e])},CS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_L=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(mg,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=pg(),(!a||!a.isStart)&&!n[Zt]&&(CS(n),s.zOrigin&&n[di]&&(n[di]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},RS=function(e,t){var n={target:e,props:[],revert:_L,save:gL};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},PS,Am=function(e,t){var n=Ds.createElementNS?Ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ds.createElement(e);return n&&n.style?n:Ds.createElement(e)},Gi=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(mg,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,Wa(t)||t,1)||""},Uy="O,Moz,ms,Ms,Webkit".split(","),Wa=function(e,t,n){var s=t||xo,a=s.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Uy[u]+e in a););return u<0?null:(u===3?"ms":u>=0?Uy[u]:"")+e},bm=function(){rL()&&window.document&&(Dy=window,Ds=Dy.document,Da=Ds.documentElement,xo=Am("div")||{style:{}},Am("div"),Zt=Wa(Zt),di=Zt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",PS=!!Wa("perspective"),pg=mi.core.reverting,dg=1)},Ny=function(e){var t=e.ownerSVGElement,n=Am("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),Da.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),Da.removeChild(n),a},Oy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},DS=function(e){var t,n;try{t=e.getBBox()}catch{t=Ny(e),n=1}return t&&(t.width||t.height)||n||(t=Ny(e)),t&&!t.width&&!t.x&&!t.y?{x:+Oy(e,["x","cx","x1"])||0,y:+Oy(e,["y","cy","y1"])||0,width:0,height:0}:t},LS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&DS(e))},bo=function(e,t){if(t){var n=e.style,s;t in es&&t!==di&&(t=Zt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(mg,"-$1").toLowerCase())):n.removeAttribute(t)}},Ls=function(e,t,n,s,a,u){var c=new hi(e._pt,t,n,0,1,u?bS:AS);return e._pt=c,c.b=s,c.e=a,e._props.push(n),c},Fy={deg:1,rad:1,turn:1},vL={grid:1,flex:1},Bs=function r(e,t,n,s){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=xo.style,f=sL.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(f?"Width":"Height"),m=100,g=s==="px",x=s==="%",E,S,y,v;if(s===u||!a||Fy[s]||Fy[u])return a;if(u!=="px"&&!g&&(a=r(e,t,n,"px")),v=e.getCTM&&LS(e),(x||u==="%")&&(es[t]||~t.indexOf("adius")))return E=v?e.getBBox()[f?"width":"height"]:e[p],on(x?a/E*m:a/100*E);if(c[f?"width":"height"]=m+(g?u:s),S=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,v&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===Ds||!S.appendChild)&&(S=Ds.body),y=S._gsap,y&&x&&y.width&&f&&y.time===Ai.time&&!y.uncache)return on(a/y.width*m);if(x&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=m+s,E=e[p],R?e.style[t]=R:bo(e,t)}else(x||u==="%")&&!vL[Gi(S,"display")]&&(c.position=Gi(e,"position")),S===e&&(c.position="static"),S.appendChild(xo),E=xo[p],S.removeChild(xo),c.position="absolute";return f&&x&&(y=So(S),y.time=Ai.time,y.width=S[p]),on(g?E*a/m:E&&a?m/E*a:0)},Wr=function(e,t,n,s){var a;return dg||bm(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(a=fu(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:If(Gi(e,di))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Lf[t]&&Lf[t](e,t,n)||Gi(e,t)||$x(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Bs(e,t,a,n)+n:a},yL=function(e,t,n,s){if(!n||n==="none"){var a=Wa(t,e,1),u=a&&Gi(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=Gi(e,"borderTopColor"))}var c=new hi(this._pt,e.style,t,0,1,ES),f=0,d=0,p,m,g,x,E,S,y,v,R,P,b,N;if(c.b=n,c.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=Gi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=e.style[t],e.style[t]=s,s=Gi(e,t)||s,S?e.style[t]=S:bo(e,t)),p=[n,s],dS(p),n=p[0],s=p[1],g=n.match(Ea)||[],N=s.match(Ea)||[],N.length){for(;m=Ea.exec(s);)y=m[0],R=s.substring(f,m.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(S=g[d++]||"")&&(x=parseFloat(S)||0,b=S.substr((x+"").length),y.charAt(1)==="="&&(y=Pa(x,y)+b),v=parseFloat(y),P=y.substr((v+"").length),f=Ea.lastIndex-P.length,P||(P=P||Ri.units[t]||b,f===s.length&&(s+=P,c.e+=P)),b!==P&&(x=Bs(e,t,S,P)||0),c._pt={_next:c._pt,p:R||d===1?R:",",s:x,c:v-x,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=f<s.length?s.substring(f,s.length):""}else c.r=t==="display"&&s==="none"?bS:AS;return Vx.test(s)&&(c.e=0),this._pt=c,c},ky={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xL=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=ky[n]||n,t[1]=ky[s]||s,t.join(" ")},SL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,u=n._gsap,c,f,d;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],es[c]&&(f=1,c=c==="transformOrigin"?di:Zt),bo(n,c);f&&(bo(n,Zt),u&&(u.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",fu(n,1),u.uncache=1,CS(s)))}},Lf={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var u=e._pt=new hi(e._pt,t,n,0,0,SL);return u.u=s,u.pr=-10,u.tween=a,e._props.push(n),1}}},cu=[1,0,0,1,0,0],IS={},US=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zy=function(e){var t=Gi(e,Zt);return US(t)?cu:t.substr(7).match(Hx).map(on)},gg=function(e,t){var n=e._gsap||So(e),s=e.style,a=zy(e),u,c,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?cu:a):(a===cu&&!e.offsetParent&&e!==Da&&!n.svg&&(f=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,c=e.nextElementSibling,Da.appendChild(e)),a=zy(e),f?s.display=f:bo(e,"display"),d&&(c?u.insertBefore(e,c):u?u.appendChild(e):Da.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Cm=function(e,t,n,s,a,u){var c=e._gsap,f=a||gg(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,g=c.yOffset||0,x=f[0],E=f[1],S=f[2],y=f[3],v=f[4],R=f[5],P=t.split(" "),b=parseFloat(P[0])||0,N=parseFloat(P[1])||0,L,T,U,w;n?f!==cu&&(T=x*y-E*S)&&(U=b*(y/T)+N*(-S/T)+(S*R-y*v)/T,w=b*(-E/T)+N*(x/T)-(x*R-E*v)/T,b=U,N=w):(L=DS(e),b=L.x+(~P[0].indexOf("%")?b/100*L.width:b),N=L.y+(~(P[1]||P[0]).indexOf("%")?N/100*L.height:N)),s||s!==!1&&c.smooth?(v=b-d,R=N-p,c.xOffset=m+(v*x+R*S)-v,c.yOffset=g+(v*E+R*y)-R):c.xOffset=c.yOffset=0,c.xOrigin=b,c.yOrigin=N,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!n,e.style[di]="0px 0px",u&&(Ls(u,c,"xOrigin",d,b),Ls(u,c,"yOrigin",p,N),Ls(u,c,"xOffset",m,c.xOffset),Ls(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",b+" "+N)},fu=function(e,t){var n=e._gsap||new _S(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,u="px",c="deg",f=getComputedStyle(e),d=Gi(e,di)||"0",p,m,g,x,E,S,y,v,R,P,b,N,L,T,U,w,A,k,$,G,ee,oe,K,ce,B,se,le,z,ne,Ae,J,fe;return p=m=g=S=y=v=R=P=b=0,x=E=1,n.svg=!!(e.getCTM&&LS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Zt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Zt]!=="none"?f[Zt]:"")),s.scale=s.rotate=s.translate="none"),T=gg(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),d=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",ce=""):ce=!t&&e.getAttribute("data-svg-origin"),Cm(e,ce||d,!!ce||n.originIsAbsolute,n.smooth!==!1,T)),N=n.xOrigin||0,L=n.yOrigin||0,T!==cu&&(k=T[0],$=T[1],G=T[2],ee=T[3],p=oe=T[4],m=K=T[5],T.length===6?(x=Math.sqrt(k*k+$*$),E=Math.sqrt(ee*ee+G*G),S=k||$?ya($,k)*po:0,R=G||ee?ya(G,ee)*po+S:0,R&&(E*=Math.abs(Math.cos(R*La))),n.svg&&(p-=N-(N*k+L*G),m-=L-(N*$+L*ee))):(fe=T[6],Ae=T[7],le=T[8],z=T[9],ne=T[10],J=T[11],p=T[12],m=T[13],g=T[14],U=ya(fe,ne),y=U*po,U&&(w=Math.cos(-U),A=Math.sin(-U),ce=oe*w+le*A,B=K*w+z*A,se=fe*w+ne*A,le=oe*-A+le*w,z=K*-A+z*w,ne=fe*-A+ne*w,J=Ae*-A+J*w,oe=ce,K=B,fe=se),U=ya(-G,ne),v=U*po,U&&(w=Math.cos(-U),A=Math.sin(-U),ce=k*w-le*A,B=$*w-z*A,se=G*w-ne*A,J=ee*A+J*w,k=ce,$=B,G=se),U=ya($,k),S=U*po,U&&(w=Math.cos(U),A=Math.sin(U),ce=k*w+$*A,B=oe*w+K*A,$=$*w-k*A,K=K*w-oe*A,k=ce,oe=B),y&&Math.abs(y)+Math.abs(S)>359.9&&(y=S=0,v=180-v),x=on(Math.sqrt(k*k+$*$+G*G)),E=on(Math.sqrt(K*K+fe*fe)),U=ya(oe,K),R=Math.abs(U)>2e-4?U*po:0,b=J?1/(J<0?-J:J):0),n.svg&&(ce=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!US(Gi(e,Zt)),ce&&e.setAttribute("transform",ce))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(x*=-1,R+=S<=0?180:-180,S+=S<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=g+u,n.scaleX=on(x),n.scaleY=on(E),n.rotation=on(S)+c,n.rotationX=on(y)+c,n.rotationY=on(v)+c,n.skewX=R+c,n.skewY=P+c,n.transformPerspective=b+u,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(s[di]=If(d)),n.xOffset=n.yOffset=0,n.force3D=Ri.force3D,n.renderTransform=n.svg?EL:PS?NS:ML,n.uncache=0,n},If=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mp=function(e,t,n){var s=Hn(t);return on(parseFloat(t)+parseFloat(Bs(e,"x",n+"px",s)))+s},ML=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,NS(e,t)},co="0deg",Nl="0px",fo=") ",NS=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.z,d=n.rotation,p=n.rotationY,m=n.rotationX,g=n.skewX,x=n.skewY,E=n.scaleX,S=n.scaleY,y=n.transformPerspective,v=n.force3D,R=n.target,P=n.zOrigin,b="",N=v==="auto"&&e&&e!==1||v===!0;if(P&&(m!==co||p!==co)){var L=parseFloat(p)*La,T=Math.sin(L),U=Math.cos(L),w;L=parseFloat(m)*La,w=Math.cos(L),u=Mp(R,u,T*w*-P),c=Mp(R,c,-Math.sin(L)*-P),f=Mp(R,f,U*w*-P+P)}y!==Nl&&(b+="perspective("+y+fo),(s||a)&&(b+="translate("+s+"%, "+a+"%) "),(N||u!==Nl||c!==Nl||f!==Nl)&&(b+=f!==Nl||N?"translate3d("+u+", "+c+", "+f+") ":"translate("+u+", "+c+fo),d!==co&&(b+="rotate("+d+fo),p!==co&&(b+="rotateY("+p+fo),m!==co&&(b+="rotateX("+m+fo),(g!==co||x!==co)&&(b+="skew("+g+", "+x+fo),(E!==1||S!==1)&&(b+="scale("+E+", "+S+fo),R.style[Zt]=b||"translate(0, 0)"},EL=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.rotation,d=n.skewX,p=n.skewY,m=n.scaleX,g=n.scaleY,x=n.target,E=n.xOrigin,S=n.yOrigin,y=n.xOffset,v=n.yOffset,R=n.forceCSS,P=parseFloat(u),b=parseFloat(c),N,L,T,U,w;f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=La,d*=La,N=Math.cos(f)*m,L=Math.sin(f)*m,T=Math.sin(f-d)*-g,U=Math.cos(f-d)*g,d&&(p*=La,w=Math.tan(d-p),w=Math.sqrt(1+w*w),T*=w,U*=w,p&&(w=Math.tan(p),w=Math.sqrt(1+w*w),N*=w,L*=w)),N=on(N),L=on(L),T=on(T),U=on(U)):(N=m,U=g,L=T=0),(P&&!~(u+"").indexOf("px")||b&&!~(c+"").indexOf("px"))&&(P=Bs(x,"x",u,"px"),b=Bs(x,"y",c,"px")),(E||S||y||v)&&(P=on(P+E-(E*N+S*T)+y),b=on(b+S-(E*L+S*U)+v)),(s||a)&&(w=x.getBBox(),P=on(P+s/100*w.width),b=on(b+a/100*w.height)),w="matrix("+N+","+L+","+T+","+U+","+P+","+b+")",x.setAttribute("transform",w),R&&(x.style[Zt]=w)},TL=function(e,t,n,s,a){var u=360,c=An(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?po:1),d=f-s,p=s+d+"deg",m,g;return c&&(m=a.split("_")[1],m==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-360)),m==="cw"&&d<0?d=(d+u*Iy)%u-~~(d/u)*u:m==="ccw"&&d>0&&(d=(d-u*Iy)%u-~~(d/u)*u)),e._pt=g=new hi(e._pt,t,n,s,d,aL),g.e=p,g.u="deg",e._props.push(n),g},By=function(e,t){for(var n in t)e[n]=t[n];return e},wL=function(e,t,n){var s=By({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,f,d,p,m,g,x,E;s.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),u[Zt]=t,c=fu(n,1),bo(n,Zt),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Zt],u[Zt]=t,c=fu(n,1),u[Zt]=d);for(f in es)d=s[f],p=c[f],d!==p&&a.indexOf(f)<0&&(x=Hn(d),E=Hn(p),m=x!==E?Bs(n,f,d,E):parseFloat(d),g=parseFloat(p),e._pt=new hi(e._pt,c,f,m,g-m,wm),e._pt.u=E||0,e._props.push(f));By(c,s)};fi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",u=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(c){return e<2?r+c:"border"+c+r});Lf[e>1?"border"+r:r]=function(c,f,d,p,m){var g,x;if(arguments.length<4)return g=u.map(function(E){return Wr(c,E,d)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(p+"").split(" "),x={},u.forEach(function(E,S){return x[E]=g[S]=g[S]||g[(S-1)/2|0]}),c.init(f,x,m)}});var OS={name:"css",register:bm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var u=this._props,c=e.style,f=n.vars.startAt,d,p,m,g,x,E,S,y,v,R,P,b,N,L,T,U;dg||bm(),this.styles=this.styles||RS(e),U=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(p=t[S],!(Ei[S]&&vS(S,t,n,s,e,a)))){if(x=typeof p,E=Lf[S],x==="function"&&(p=p.call(n,s,e,a),x=typeof p),x==="string"&&~p.indexOf("random(")&&(p=au(p)),E)E(this,e,S,p,n)&&(T=1);else if(S.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",Fs.lastIndex=0,Fs.test(d)||(y=Hn(d),v=Hn(p)),v?y!==v&&(d=Bs(e,S,d,v)+v):y&&(p+=y),this.add(c,"setProperty",d,p,s,a,0,0,S),u.push(S),U.push(S,0,c[S]);else if(x!=="undefined"){if(f&&S in f?(d=typeof f[S]=="function"?f[S].call(n,s,e,a):f[S],An(d)&&~d.indexOf("random(")&&(d=au(d)),Hn(d+"")||d==="auto"||(d+=Ri.units[S]||Hn(Wr(e,S))||""),(d+"").charAt(1)==="="&&(d=Wr(e,S))):d=Wr(e,S),g=parseFloat(d),R=x==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),m=parseFloat(p),S in _r&&(S==="autoAlpha"&&(g===1&&Wr(e,"visibility")==="hidden"&&m&&(g=0),U.push("visibility",0,c.visibility),Ls(this,c,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=_r[S],~S.indexOf(",")&&(S=S.split(",")[0]))),P=S in es,P){if(this.styles.save(S),x==="string"&&p.substring(0,6)==="var(--"&&(p=Gi(e,p.substring(4,p.indexOf(")"))),m=parseFloat(p)),b||(N=e._gsap,N.renderTransform&&!t.parseTransform||fu(e,t.parseTransform),L=t.smoothOrigin!==!1&&N.smooth,b=this._pt=new hi(this._pt,c,Zt,0,1,N.renderTransform,N,0,-1),b.dep=1),S==="scale")this._pt=new hi(this._pt,N,"scaleY",N.scaleY,(R?Pa(N.scaleY,R+m):m)-N.scaleY||0,wm),this._pt.u=0,u.push("scaleY",S),S+="X";else if(S==="transformOrigin"){U.push(di,0,c[di]),p=xL(p),N.svg?Cm(e,p,0,L,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==N.zOrigin&&Ls(this,N,"zOrigin",N.zOrigin,v),Ls(this,c,S,If(d),If(p)));continue}else if(S==="svgOrigin"){Cm(e,p,1,L,0,this);continue}else if(S in IS){TL(this,N,S,g,R?Pa(g,R+p):p);continue}else if(S==="smoothOrigin"){Ls(this,N,"smooth",N.smooth,p);continue}else if(S==="force3D"){N[S]=p;continue}else if(S==="transform"){wL(this,p,e);continue}}else S in c||(S=Wa(S)||S);if(P||(m||m===0)&&(g||g===0)&&!oL.test(p)&&S in c)y=(d+"").substr((g+"").length),m||(m=0),v=Hn(p)||(S in Ri.units?Ri.units[S]:y),y!==v&&(g=Bs(e,S,d,v)),this._pt=new hi(this._pt,P?N:c,S,g,(R?Pa(g,R+m):m)-g,!P&&(v==="px"||S==="zIndex")&&t.autoRound!==!1?uL:wm),this._pt.u=v||0,y!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=lL);else if(S in c)yL.call(this,e,S,d,R?R+p:p);else if(S in e)this.add(e,S,d||e[S],R?R+p:p,s,a);else if(S!=="parseTransform"){ig(S,p);continue}P||(S in c?U.push(S,0,c[S]):typeof e[S]=="function"?U.push(S,2,e[S]()):U.push(S,1,d||e[S])),u.push(S)}}T&&TS(this)},render:function(e,t){if(t.tween._time||!pg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Wr,aliases:_r,getSetter:function(e,t,n){var s=_r[t];return s&&s.indexOf(",")<0&&(t=s),t in es&&t!==di&&(e._gsap.x||Wr(e,"x"))?n&&Ly===n?t==="scale"?dL:hL:(Ly=n||{})&&(t==="scale"?pL:mL):e.style&&!eg(e.style[t])?cL:~t.indexOf("-")?fL:fg(e,t)},core:{_removeProperty:bo,_getMatrix:gg}};mi.utils.checkPrefix=Wa;mi.core.getStyleSaver=RS;(function(r,e,t,n){var s=fi(r+","+e+","+t,function(a){es[a]=1});fi(e,function(a){Ri.units[a]="deg",IS[a]=1}),_r[s[13]]=r+","+e,fi(n,function(a){var u=a.split(":");_r[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ri.units[r]="px"});mi.registerPlugin(OS);var Rm=mi.registerPlugin(OS)||mi;Rm.core.Tween;class AL{constructor(){io(this,"clock");io(this,"animationFrameId",null);io(this,"callbacks",[]);io(this,"ship",null);io(this,"birdOfPrey",null);io(this,"targetShipPosition",new j(0,-.5,-10));this.clock=new ob}add(e){this.callbacks.push(e)}start(){const e=()=>{this.animationFrameId=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();this.callbacks.forEach(s=>s(t,n))};this.clock.start(),e()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}clear(){this.callbacks=[]}dispose(){this.stop(),this.clear()}setShip(e){this.ship=e}setBirdOfPrey(e){this.birdOfPrey=e,this.birdOfPrey.visible=!1}playCloakReveal(){if(!this.ship||!this.birdOfPrey)return;const e=this.targetShipPosition.clone().add(new j(0,0,-20));this.ship.position.copy(e),this.birdOfPrey.visible=!1,Rm.to(this.ship.position,{z:this.targetShipPosition.z,duration:3,ease:"sine.out",onStart:()=>{this.revealBirdOfPrey()}})}revealBirdOfPrey(){if(!this.birdOfPrey)return;const e=this.birdOfPrey;e.visible=!0,e.traverse(t=>{if(t.isMesh){const n=t.material;n.transparent=!0,n.opacity=0,Rm.to(n,{opacity:1,duration:5,ease:"power1.out",onComplete:()=>{n.transparent=!1}})}})}}function bL(){const r=zt.useRef(null),[e,t]=zt.useState(!0),[n,s]=zt.useState(0),a=zt.useRef(null),u=zt.useRef(null),c=zt.useRef(null),f=zt.useRef(null),d=zt.useRef(null),p=zt.useRef(null),m={waterNormal:new URL(""+new URL("textures/waternormals-Dfm-ILpY.jpg",import.meta.url).href,import.meta.url).href,birdOfPrey:new URL(""+new URL("models/BirdOfPrey_ENT-9hjXG-3R.obj",import.meta.url).href,import.meta.url).href,shipModel:new URL(""+new URL("models/untitled1-BQF0YAZ0.obj",import.meta.url).href,import.meta.url).href},g={klingon:new Wv({color:4491332,metalness:.6,roughness:.4,emissive:1127185,emissiveIntensity:.3,transparent:!0,opacity:0}),ship:new Wv({color:8947848,metalness:.3,roughness:.7})};return zt.useEffect(()=>{if(!r.current)return;const x=r.current,E=new WA;a.current=E;const S=new Ti(65,window.innerWidth/window.innerHeight,.1,2e3);S.position.set(-7.43,1.24,4.61);const y=new W2({antialias:!0});y.setSize(window.innerWidth,window.innerHeight),y.setPixelRatio(window.devicePixelRatio),x.appendChild(y.domElement),u.current=y;const v=new Vl;x.appendChild(v.dom);const R=new X2(new _u(100,100),{textureWidth:256,textureHeight:256,waterNormals:new tb().load(m.waterNormal,G=>{G.wrapS=G.wrapT=xf}),sunDirection:new j,sunColor:16777215,waterColor:7695,distortionScale:2.5});R.rotation.x=-Math.PI/2,E.add(R);const P=new $f;P.scale.setScalar(100),E.add(P);const b=new j,N=new Jn(new Km(.1,16,16),new qm({color:16776960}));N.position.copy(b),E.add(N),b.setFromSphericalCoords(1,fm.degToRad(88),fm.degToRad(180)),P.material.uniforms.sunPosition.value.copy(b),R.material.uniforms.sunDirection.value.copy(b).normalize(),E.add(new rb(4210752,.5));const L=new Y2(S,y.domElement);L.target.set(0,2.5,0),L.enableDamping=!0,c.current=L;const T=new AL;p.current=T;const U=new fD(new Dx(()=>{t(!1),f.current&&T.setShip(f.current),d.current&&T.setBirdOfPrey(d.current),T.playCloakReveal()},(G,ee,oe)=>s(ee/oe*100))),w=(G,ee,oe,K,ce,B)=>{U.load(G,se=>{se.position.copy(oe),se.rotation.y=K;const z=new Ya().setFromObject(se).getSize(new j),ne=ce/z.z;se.scale.set(ne,ne,ne),se.traverse(Ae=>{Ae instanceof Jn&&(Ae.material=ee)}),B.current=se,E.add(se)})},k=new j(0,-.5,-10).clone().add(new j(0,0,-20));w(m.shipModel,g.ship,k,Math.PI/10,4,f),w(m.birdOfPrey,g.klingon,new j(0,3.5,0),Math.PI/35,8,d),T.add((G,ee)=>{v.begin(),R.material.uniforms.time.value+=G*.25,f.current&&(f.current.position.y=-.5+Math.sin(ee)*.1,f.current.rotation.z=Math.sin(ee*.7)*.03),L.update(),y.render(E,S),v.end()}),T.start();const $=()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",$),()=>{var G;T.dispose(),window.removeEventListener("resize",$),y.dispose(),(G=r.current)!=null&&G.contains(y.domElement)&&r.current.removeChild(y.domElement)}},[]),Is.jsx("div",{ref:r,style:{width:"100%",height:"100%"},children:e&&Is.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.7)",padding:"20px",borderRadius:"5px"},children:Is.jsxs("div",{children:["Loading model... ",Math.round(n),"%"]})})})}function CL(){return Is.jsx(dw,{sx:{width:"100vw",height:"100vh"},children:Is.jsx(bL,{})})}b1.createRoot(document.getElementById("root")).render(Is.jsx(Gy.StrictMode,{children:Is.jsx(CL,{})}));
