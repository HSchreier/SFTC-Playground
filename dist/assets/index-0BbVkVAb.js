function Ay(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function q0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function K0(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),t}var Hf={exports:{}},da={},Vf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ry(){if(ag)return ht;ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,ne,Ae){this.props=O,this.context=ne,this.refs=M,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=x.prototype;function D(O,ne,Ae){this.props=O,this.context=ne,this.refs=M,this.updater=Ae||S}var L=D.prototype=new y;L.constructor=D,E(L,x.prototype),L.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,U={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function F(O,ne,Ae){var J,fe={},ye=null,ve=null;if(ne!=null)for(J in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(ye=""+ne.key),ne)V.call(ne,J)&&!A.hasOwnProperty(J)&&(fe[J]=ne[J]);var Te=arguments.length-2;if(Te===1)fe.children=Ae;else if(1<Te){for(var Xe=Array(Te),Ve=0;Ve<Te;Ve++)Xe[Ve]=arguments[Ve+2];fe.children=Xe}if(O&&O.defaultProps)for(J in Te=O.defaultProps,Te)fe[J]===void 0&&(fe[J]=Te[J]);return{$$typeof:r,type:O,key:ye,ref:ve,props:fe,_owner:U.current}}function C(O,ne){return{$$typeof:r,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function z(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return ne[Ae]})}var ie=/\/+/g;function K(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ne.toString(36)}function ae(O,ne,Ae,J,fe){var ye=typeof O;(ye==="undefined"||ye==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(ye){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0}}if(ve)return ve=O,fe=fe(ve),O=J===""?"."+K(ve,0):J,P(fe)?(Ae="",O!=null&&(Ae=O.replace(ie,"$&/")+"/"),ae(fe,ne,Ae,"",function(Ve){return Ve})):fe!=null&&(w(fe)&&(fe=C(fe,Ae+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ie,"$&/")+"/")+O)),ne.push(fe)),1;if(ve=0,J=J===""?".":J+":",P(O))for(var Te=0;Te<O.length;Te++){ye=O[Te];var Xe=J+K(ye,Te);ve+=ae(ye,ne,Ae,Xe,fe)}else if(Xe=v(O),typeof Xe=="function")for(O=Xe.call(O),Te=0;!(ye=O.next()).done;)ye=ye.value,Xe=J+K(ye,Te++),ve+=ae(ye,ne,Ae,Xe,fe);else if(ye==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function ue(O,ne,Ae){if(O==null)return O;var J=[],fe=0;return ae(O,J,"","",function(ye){return ne.call(Ae,ye,fe++)}),J}function te(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var de={current:null},k={transition:null},se={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:k,ReactCurrentOwner:U};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ue,forEach:function(O,ne,Ae){ue(O,function(){ne.apply(this,arguments)},Ae)},count:function(O){var ne=0;return ue(O,function(){ne++}),ne},toArray:function(O){return ue(O,function(ne){return ne})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=x,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=D,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,ht.act=Z,ht.cloneElement=function(O,ne,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=E({},O.props),fe=O.key,ye=O.ref,ve=O._owner;if(ne!=null){if(ne.ref!==void 0&&(ye=ne.ref,ve=U.current),ne.key!==void 0&&(fe=""+ne.key),O.type&&O.type.defaultProps)var Te=O.type.defaultProps;for(Xe in ne)V.call(ne,Xe)&&!A.hasOwnProperty(Xe)&&(J[Xe]=ne[Xe]===void 0&&Te!==void 0?Te[Xe]:ne[Xe])}var Xe=arguments.length-2;if(Xe===1)J.children=Ae;else if(1<Xe){Te=Array(Xe);for(var Ve=0;Ve<Xe;Ve++)Te[Ve]=arguments[Ve+2];J.children=Te}return{$$typeof:r,type:O.type,key:fe,ref:ye,props:J,_owner:ve}},ht.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ht.createElement=F,ht.createFactory=function(O){var ne=F.bind(null,O);return ne.type=O,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:f,render:O}},ht.isValidElement=w,ht.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:te}},ht.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},ht.startTransition=function(O){var ne=k.transition;k.transition={};try{O()}finally{k.transition=ne}},ht.unstable_act=Z,ht.useCallback=function(O,ne){return de.current.useCallback(O,ne)},ht.useContext=function(O){return de.current.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O){return de.current.useDeferredValue(O)},ht.useEffect=function(O,ne){return de.current.useEffect(O,ne)},ht.useId=function(){return de.current.useId()},ht.useImperativeHandle=function(O,ne,Ae){return de.current.useImperativeHandle(O,ne,Ae)},ht.useInsertionEffect=function(O,ne){return de.current.useInsertionEffect(O,ne)},ht.useLayoutEffect=function(O,ne){return de.current.useLayoutEffect(O,ne)},ht.useMemo=function(O,ne){return de.current.useMemo(O,ne)},ht.useReducer=function(O,ne,Ae){return de.current.useReducer(O,ne,Ae)},ht.useRef=function(O){return de.current.useRef(O)},ht.useState=function(O){return de.current.useState(O)},ht.useSyncExternalStore=function(O,ne,Ae){return de.current.useSyncExternalStore(O,ne,Ae)},ht.useTransition=function(){return de.current.useTransition()},ht.version="18.3.1",ht}var lg;function vh(){return lg||(lg=1,Vf.exports=Ry()),Vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Cy(){if(ug)return da;ug=1;var r=vh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,m={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(m[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)m[g]===void 0&&(m[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:m,_owner:o.current}}return da.Fragment=t,da.jsx=c,da.jsxs=c,da}var cg;function by(){return cg||(cg=1,Hf.exports=Cy()),Hf.exports}var wi=by(),kt=vh();const Z0=q0(kt),fg=Ay({__proto__:null,default:Z0},[kt]);var Ql={},Gf={exports:{}},Yn={},Wf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Py(){return dg||(dg=1,function(r){function e(k,se){var Z=k.length;k.push(se);e:for(;0<Z;){var O=Z-1>>>1,ne=k[O];if(0<o(ne,se))k[O]=se,k[Z]=ne,Z=O;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var se=k[0],Z=k.pop();if(Z!==se){k[0]=Z;e:for(var O=0,ne=k.length,Ae=ne>>>1;O<Ae;){var J=2*(O+1)-1,fe=k[J],ye=J+1,ve=k[ye];if(0>o(fe,Z))ye<ne&&0>o(ve,fe)?(k[O]=ve,k[ye]=Z,O=ye):(k[O]=fe,k[J]=Z,O=J);else if(ye<ne&&0>o(ve,Z))k[O]=ve,k[ye]=Z,O=ye;else break e}}return se}function o(k,se){var Z=k.sortIndex-se.sortIndex;return Z!==0?Z:k.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,m=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var se=t(p);se!==null;){if(se.callback===null)s(p);else if(se.startTime<=k)s(p),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(p)}}function P(k){if(M=!1,L(k),!E)if(t(h)!==null)E=!0,te(V);else{var se=t(p);se!==null&&de(P,se.startTime-k)}}function V(k,se){E=!1,M&&(M=!1,y(F),F=-1),S=!0;var Z=v;try{for(L(se),m=t(h);m!==null&&(!(m.expirationTime>se)||k&&!z());){var O=m.callback;if(typeof O=="function"){m.callback=null,v=m.priorityLevel;var ne=O(m.expirationTime<=se);se=r.unstable_now(),typeof ne=="function"?m.callback=ne:m===t(h)&&s(h),L(se)}else s(h);m=t(h)}if(m!==null)var Ae=!0;else{var J=t(p);J!==null&&de(P,J.startTime-se),Ae=!1}return Ae}finally{m=null,v=Z,S=!1}}var U=!1,A=null,F=-1,C=5,w=-1;function z(){return!(r.unstable_now()-w<C)}function ie(){if(A!==null){var k=r.unstable_now();w=k;var se=!0;try{se=A(!0,k)}finally{se?K():(U=!1,A=null)}}else U=!1}var K;if(typeof D=="function")K=function(){D(ie)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=ie,K=function(){ue.postMessage(null)}}else K=function(){x(ie,0)};function te(k){A=k,U||(U=!0,K())}function de(k,se){F=x(function(){k(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,te(V))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(k){switch(v){case 1:case 2:case 3:var se=3;break;default:se=v}var Z=v;v=se;try{return k()}finally{v=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,se){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=v;v=k;try{return se()}finally{v=Z}},r.unstable_scheduleCallback=function(k,se,Z){var O=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Z+ne,k={id:g++,callback:se,priorityLevel:k,startTime:Z,expirationTime:ne,sortIndex:-1},Z>O?(k.sortIndex=Z,e(p,k),t(h)===null&&k===t(p)&&(M?(y(F),F=-1):M=!0,de(P,Z-O))):(k.sortIndex=ne,e(h,k),E||S||(E=!0,te(V))),k},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(k){var se=v;return function(){var Z=v;v=se;try{return k.apply(this,arguments)}finally{v=Z}}}}(Xf)),Xf}var hg;function Ly(){return hg||(hg=1,Wf.exports=Py()),Wf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Dy(){if(pg)return Yn;pg=1;var r=vh(),e=Ly();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(n){return h.call(m,n)?!0:h.call(g,n)?!1:p.test(n)?m[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,d,_,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),U=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),k=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,O;function ne(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ae=!1;function J(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),_=u.stack.split(`
`),T=d.length-1,N=_.length-1;1<=T&&0<=N&&d[T]!==_[N];)N--;for(;1<=T&&0<=N;T--,N--)if(d[T]!==_[N]){if(T!==1||N!==1)do if(T--,N--,0>N||d[T]!==_[N]){var B=`
`+d[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=N);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function fe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case U:return"Portal";case C:return"Profiler";case F:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,_=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Dt(n){n._valueTracker||(n._valueTracker=Ve(n))}function It(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Xe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ln(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ft(n,i){mt(n,i);var a=Te(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function I(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function he(n,i){var a=Te(i.value),u=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,qe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function $e(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function Je(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Je(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Fe=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,le=null,pe=null;function Le(n){if(n=Zo(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=hl(i),Ce(n.stateNode,n.type,i))}}function Pe(n){le?pe?pe.push(n):pe=[n]:le=n}function rt(){if(le){var n=le,i=pe;if(pe=le=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Nt(n,i){return n(i)}function rn(){}var yt=!1;function Hn(n,i,a){if(yt)return n(i,a);yt=!0;try{return Nt(n,i,a)}finally{yt=!1,(le!==null||pe!==null)&&(rn(),rt())}}function Dn(n,i){var a=n.stateNode;if(a===null)return null;var u=hl(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Rs=!1;if(f)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Rs=!1}function ji(n,i,a,u,d,_,T,N,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(ge){this.onError(ge)}}var Yi=!1,Zr=null,Qr=!1,yr=null,Xa={onError:function(n){Yi=!0,Zr=n}};function Cs(n,i,a,u,d,_,T,N,B){Yi=!1,Zr=null,ji.apply(Xa,arguments)}function ja(n,i,a,u,d,_,T,N,B){if(Cs.apply(this,arguments),Yi){if(Yi){var re=Zr;Yi=!1,Zr=null}else throw Error(t(198));Qr||(Qr=!0,yr=re)}}function Li(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ya(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function $a(n){if(Li(n)!==n)throw Error(t(188))}function uc(n){var i=n.alternate;if(!i){if(i=Li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var _=d.alternate;if(_===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===a)return $a(d),n;if(_===u)return $a(d),i;_=_.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=_;else{for(var T=!1,N=d.child;N;){if(N===a){T=!0,a=d,u=_;break}if(N===u){T=!0,u=d,a=_;break}N=N.sibling}if(!T){for(N=_.child;N;){if(N===a){T=!0,a=_,u=d;break}if(N===u){T=!0,u=_,a=d;break}N=N.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function qa(n){return n=uc(n),n!==null?Ka(n):null}function Ka(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ka(n);if(i!==null)return i;n=n.sibling}return null}var Za=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,j=e.unstable_shouldYield,oe=e.unstable_requestPaint,q=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,ze=null;function _t(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,Yt=Math.log,zt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(Yt(n)/zt|0)|0}var Ye=64,$t=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,_=n.pingedLanes,T=a&268435455;if(T!==0){var N=T&~d;N!==0?u=gt(N):(_&=T,_!==0&&(u=gt(_)))}else T=a&~d,T!==0?u=gt(T):_!==0&&(u=gt(_));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,_=i&-i,d>=_||d===16&&(_&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-st(i),d=1<<a,u|=n[a],i&=~d;return u}function xr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function In(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-st(_),N=1<<T,B=d[T];B===-1?((N&a)===0||(N&u)!==0)&&(d[T]=xr(N,i)):B<=i&&(n.expiredLanes|=N),_&=~N}}function $i(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pt(){var n=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),n}function Mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=a}function _n(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-st(a),_=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~_}}function fn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-st(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var xt=0;function Di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bh,cc,Hh,Vh,Gh,fc=!1,Qa=[],Sr=null,Mr=null,Er=null,No=new Map,Fo=new Map,Tr=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(n,i){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":No.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(i.pointerId)}}function Oo(n,i,a,u,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[d]},i!==null&&(i=Zo(i),i!==null&&cc(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function q_(n,i,a,u,d){switch(i){case"focusin":return Sr=Oo(Sr,n,i,a,u,d),!0;case"dragenter":return Mr=Oo(Mr,n,i,a,u,d),!0;case"mouseover":return Er=Oo(Er,n,i,a,u,d),!0;case"pointerover":var _=d.pointerId;return No.set(_,Oo(No.get(_)||null,n,i,a,u,d)),!0;case"gotpointercapture":return _=d.pointerId,Fo.set(_,Oo(Fo.get(_)||null,n,i,a,u,d)),!0}return!1}function Xh(n){var i=Jr(n.target);if(i!==null){var a=Li(i);if(a!==null){if(i=a.tag,i===13){if(i=Ya(a),i!==null){n.blockedOn=i,Gh(n.priority,function(){Hh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return i=Zo(a),i!==null&&cc(i),n.blockedOn=a,!1;i.shift()}return!0}function jh(n,i,a){Ja(n)&&a.delete(i)}function K_(){fc=!1,Sr!==null&&Ja(Sr)&&(Sr=null),Mr!==null&&Ja(Mr)&&(Mr=null),Er!==null&&Ja(Er)&&(Er=null),No.forEach(jh),Fo.forEach(jh)}function ko(n,i){n.blockedOn===i&&(n.blockedOn=null,fc||(fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,K_)))}function zo(n){function i(d){return ko(d,n)}if(0<Qa.length){ko(Qa[0],n);for(var a=1;a<Qa.length;a++){var u=Qa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Sr!==null&&ko(Sr,n),Mr!==null&&ko(Mr,n),Er!==null&&ko(Er,n),No.forEach(i),Fo.forEach(i),a=0;a<Tr.length;a++)u=Tr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)Xh(a),a.blockedOn===null&&Tr.shift()}var bs=P.ReactCurrentBatchConfig,el=!0;function Z_(n,i,a,u){var d=xt,_=bs.transition;bs.transition=null;try{xt=1,dc(n,i,a,u)}finally{xt=d,bs.transition=_}}function Q_(n,i,a,u){var d=xt,_=bs.transition;bs.transition=null;try{xt=4,dc(n,i,a,u)}finally{xt=d,bs.transition=_}}function dc(n,i,a,u){if(el){var d=hc(n,i,a,u);if(d===null)Pc(n,i,u,tl,a),Wh(n,u);else if(q_(d,n,i,a,u))u.stopPropagation();else if(Wh(n,u),i&4&&-1<$_.indexOf(n)){for(;d!==null;){var _=Zo(d);if(_!==null&&Bh(_),_=hc(n,i,a,u),_===null&&Pc(n,i,u,tl,a),_===d)break;d=_}d!==null&&u.stopPropagation()}else Pc(n,i,u,null,a)}}var tl=null;function hc(n,i,a,u){if(tl=null,n=W(u),n=Jr(n),n!==null)if(i=Li(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ya(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return tl=n,null}function Yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Me:return 1;case be:return 4;case De:case Oe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var wr=null,pc=null,nl=null;function $h(){if(nl)return nl;var n,i=pc,a=i.length,u,d="value"in wr?wr.value:wr.textContent,_=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===d[_-u];u++);return nl=d.slice(n,1<u?1-u:void 0)}function il(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function qh(){return!1}function Kn(n){function i(a,u,d,_,T){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(_):_[N]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:qh,this.isPropagationStopped=qh,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=Kn(Ps),Bo=Z({},Ps,{view:0,detail:0}),J_=Kn(Bo),gc,_c,Ho,sl=Z({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ho&&(Ho&&n.type==="mousemove"?(gc=n.screenX-Ho.screenX,_c=n.screenY-Ho.screenY):_c=gc=0,Ho=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:_c}}),Kh=Kn(sl),ev=Z({},sl,{dataTransfer:0}),tv=Kn(ev),nv=Z({},Bo,{relatedTarget:0}),vc=Kn(nv),iv=Z({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Kn(iv),sv=Z({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ov=Kn(sv),av=Z({},Ps,{data:0}),Zh=Kn(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=cv[n])?!!i[n]:!1}function yc(){return fv}var dv=Z({},Bo,{key:function(n){if(n.key){var i=lv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hv=Kn(dv),pv=Z({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Kn(pv),mv=Z({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),gv=Kn(mv),_v=Z({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Kn(_v),yv=Z({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Kn(yv),Sv=[9,13,27,32],xc=f&&"CompositionEvent"in window,Vo=null;f&&"documentMode"in document&&(Vo=document.documentMode);var Mv=f&&"TextEvent"in window&&!Vo,Jh=f&&(!xc||Vo&&8<Vo&&11>=Vo),ep=" ",tp=!1;function np(n,i){switch(n){case"keyup":return Sv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Ev(n,i){switch(n){case"compositionend":return ip(i);case"keypress":return i.which!==32?null:(tp=!0,ep);case"textInput":return n=i.data,n===ep&&tp?null:n;default:return null}}function Tv(n,i){if(Ls)return n==="compositionend"||!xc&&np(n,i)?(n=$h(),nl=pc=wr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jh&&i.locale!=="ko"?null:i.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!wv[n.type]:i==="textarea"}function sp(n,i,a,u){Pe(u),i=cl(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Go=null,Wo=null;function Av(n){Ep(n,0)}function ol(n){var i=Fs(n);if(It(i))return n}function Rv(n,i){if(n==="change")return i}var op=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Mc=typeof ap.oninput=="function"}Sc=Mc}else Sc=!1;op=Sc&&(!document.documentMode||9<document.documentMode)}function lp(){Go&&(Go.detachEvent("onpropertychange",up),Wo=Go=null)}function up(n){if(n.propertyName==="value"&&ol(Wo)){var i=[];sp(i,Wo,n,W(n)),Hn(Av,i)}}function Cv(n,i,a){n==="focusin"?(lp(),Go=i,Wo=a,Go.attachEvent("onpropertychange",up)):n==="focusout"&&lp()}function bv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(Wo)}function Pv(n,i){if(n==="click")return ol(i)}function Lv(n,i){if(n==="input"||n==="change")return ol(i)}function Dv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:Dv;function Xo(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!gi(n[d],i[d]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,i){var a=cp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function dp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hp(){for(var n=window,i=ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ct(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Iv(n){var i=hp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(u!==null&&Ec(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,_=Math.min(u.start,d);u=u.end===void 0?_:Math.min(u.end,d),!n.extend&&_>u&&(d=u,u=_,_=d),d=fp(a,_);var T=fp(a,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),_>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uv=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Tc=null,jo=null,wc=!1;function pp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Ds==null||Ds!==ct(u)||(u=Ds,"selectionStart"in u&&Ec(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),jo&&Xo(jo,u)||(jo=u,u=cl(Tc,"onSelect"),0<u.length&&(i=new mc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ds)))}function al(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Ac={},mp={};f&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function ll(n){if(Ac[n])return Ac[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mp)return Ac[n]=i[a];return n}var gp=ll("animationend"),_p=ll("animationiteration"),vp=ll("animationstart"),yp=ll("transitionend"),xp=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,i){xp.set(n,i),l(i,[n])}for(var Rc=0;Rc<Sp.length;Rc++){var Cc=Sp[Rc],Nv=Cc.toLowerCase(),Fv=Cc[0].toUpperCase()+Cc.slice(1);Ar(Nv,"on"+Fv)}Ar(gp,"onAnimationEnd"),Ar(_p,"onAnimationIteration"),Ar(vp,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Mp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ja(u,i,void 0,n),n.currentTarget=null}function Ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var N=u[T],B=N.instance,re=N.currentTarget;if(N=N.listener,B!==_&&d.isPropagationStopped())break e;Mp(d,N,re),_=B}else for(T=0;T<u.length;T++){if(N=u[T],B=N.instance,re=N.currentTarget,N=N.listener,B!==_&&d.isPropagationStopped())break e;Mp(d,N,re),_=B}}}if(Qr)throw n=yr,Qr=!1,yr=null,n}function Ft(n,i){var a=i[Fc];a===void 0&&(a=i[Fc]=new Set);var u=n+"__bubble";a.has(u)||(Tp(i,n,2,!1),a.add(u))}function bc(n,i,a){var u=0;i&&(u|=4),Tp(a,n,u,i)}var ul="_reactListening"+Math.random().toString(36).slice(2);function $o(n){if(!n[ul]){n[ul]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ov.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ul]||(i[ul]=!0,bc("selectionchange",!1,i))}}function Tp(n,i,a,u){switch(Yh(i)){case 1:var d=Z_;break;case 4:d=Q_;break;default:d=dc}a=d.bind(null,i,a,n),d=void 0,!Rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Pc(n,i,a,u,d){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;T=T.return}for(;N!==null;){if(T=Jr(N),T===null)return;if(B=T.tag,B===5||B===6){u=_=T;continue e}N=N.parentNode}}u=u.return}Hn(function(){var re=_,ge=W(a),Se=[];e:{var me=xp.get(n);if(me!==void 0){var Ie=mc,ke=n;switch(n){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":Ie=hv;break;case"focusin":ke="focus",Ie=vc;break;case"focusout":ke="blur",Ie=vc;break;case"beforeblur":case"afterblur":Ie=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=gv;break;case gp:case _p:case vp:Ie=rv;break;case yp:Ie=vv;break;case"scroll":Ie=J_;break;case"wheel":Ie=xv;break;case"copy":case"cut":case"paste":Ie=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Qh}var Be=(i&4)!==0,Qt=!Be&&n==="scroll",$=Be?me!==null?me+"Capture":null:me;Be=[];for(var G=re,Q;G!==null;){Q=G;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,$!==null&&(Ee=Dn(G,$),Ee!=null&&Be.push(qo(G,Ee,Q)))),Qt)break;G=G.return}0<Be.length&&(me=new Ie(me,ke,null,a,ge),Se.push({event:me,listeners:Be}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==At&&(ke=a.relatedTarget||a.fromElement)&&(Jr(ke)||ke[qi]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=a.relatedTarget||a.toElement,Ie=re,ke=ke?Jr(ke):null,ke!==null&&(Qt=Li(ke),ke!==Qt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=re),Ie!==ke)){if(Be=Kh,Ee="onMouseLeave",$="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Be=Qh,Ee="onPointerLeave",$="onPointerEnter",G="pointer"),Qt=Ie==null?me:Fs(Ie),Q=ke==null?me:Fs(ke),me=new Be(Ee,G+"leave",Ie,a,ge),me.target=Qt,me.relatedTarget=Q,Ee=null,Jr(ge)===re&&(Be=new Be($,G+"enter",ke,a,ge),Be.target=Q,Be.relatedTarget=Qt,Ee=Be),Qt=Ee,Ie&&ke)t:{for(Be=Ie,$=ke,G=0,Q=Be;Q;Q=Us(Q))G++;for(Q=0,Ee=$;Ee;Ee=Us(Ee))Q++;for(;0<G-Q;)Be=Us(Be),G--;for(;0<Q-G;)$=Us($),Q--;for(;G--;){if(Be===$||$!==null&&Be===$.alternate)break t;Be=Us(Be),$=Us($)}Be=null}else Be=null;Ie!==null&&wp(Se,me,Ie,Be,!1),ke!==null&&Qt!==null&&wp(Se,Qt,ke,Be,!0)}}e:{if(me=re?Fs(re):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var We=Rv;else if(rp(me))if(op)We=Lv;else{We=bv;var Ke=Cv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Pv);if(We&&(We=We(n,re))){sp(Se,We,a,ge);break e}Ke&&Ke(n,me,re),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Rt(me,"number",me.value)}switch(Ke=re?Fs(re):window,n){case"focusin":(rp(Ke)||Ke.contentEditable==="true")&&(Ds=Ke,Tc=re,jo=null);break;case"focusout":jo=Tc=Ds=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,pp(Se,a,ge);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":pp(Se,a,ge)}var Ze;if(xc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ls?np(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Jh&&a.locale!=="ko"&&(Ls||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ls&&(Ze=$h()):(wr=ge,pc="value"in wr?wr.value:wr.textContent,Ls=!0)),Ke=cl(re,nt),0<Ke.length&&(nt=new Zh(nt,n,null,a,ge),Se.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=ip(a),Ze!==null&&(nt.data=Ze)))),(Ze=Mv?Ev(n,a):Tv(n,a))&&(re=cl(re,"onBeforeInput"),0<re.length&&(ge=new Zh("onBeforeInput","beforeinput",null,a,ge),Se.push({event:ge,listeners:re}),ge.data=Ze))}Ep(Se,i)})}function qo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function cl(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,_=d.stateNode;d.tag===5&&_!==null&&(d=_,_=Dn(n,a),_!=null&&u.unshift(qo(n,_,d)),_=Dn(n,i),_!=null&&u.push(qo(n,_,d))),n=n.return}return u}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,i,a,u,d){for(var _=i._reactName,T=[];a!==null&&a!==u;){var N=a,B=N.alternate,re=N.stateNode;if(B!==null&&B===u)break;N.tag===5&&re!==null&&(N=re,d?(B=Dn(a,_),B!=null&&T.unshift(qo(a,B,N))):d||(B=Dn(a,_),B!=null&&T.push(qo(a,B,N)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var kv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(kv,`
`).replace(zv,"")}function fl(n,i,a){if(i=Ap(i),Ap(n)!==i&&a)throw Error(t(425))}function dl(){}var Lc=null,Dc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(Vv)}:Uc;function Vv(n){setTimeout(function(){throw n})}function Nc(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),zo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);zo(i)}function Rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ns,Ko="__reactProps$"+Ns,qi="__reactContainer$"+Ns,Fc="__reactEvents$"+Ns,Gv="__reactListeners$"+Ns,Wv="__reactHandles$"+Ns;function Jr(n){var i=n[Ii];if(i)return i;for(var a=n.parentNode;a;){if(i=a[qi]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Cp(n);n!==null;){if(a=n[Ii])return a;n=Cp(n)}return i}n=a,a=n.parentNode}return null}function Zo(n){return n=n[Ii]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[Ko]||null}var Oc=[],Os=-1;function Cr(n){return{current:n}}function Ot(n){0>Os||(n.current=Oc[Os],Oc[Os]=null,Os--)}function Ut(n,i){Os++,Oc[Os]=n.current,n.current=i}var br={},En=Cr(br),Vn=Cr(!1),es=br;function ks(n,i){var a=n.type.contextTypes;if(!a)return br;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},_;for(_ in a)d[_]=i[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gn(n){return n=n.childContextTypes,n!=null}function pl(){Ot(Vn),Ot(En)}function bp(n,i,a){if(En.current!==br)throw Error(t(168));Ut(En,i),Ut(Vn,a)}function Pp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return Z({},a,u)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,es=En.current,Ut(En,n),Ut(Vn,Vn.current),!0}function Lp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Pp(n,i,es),u.__reactInternalMemoizedMergedChildContext=n,Ot(Vn),Ot(En),Ut(En,n)):Ot(Vn),Ut(Vn,a)}var Ki=null,gl=!1,kc=!1;function Dp(n){Ki===null?Ki=[n]:Ki.push(n)}function Xv(n){gl=!0,Dp(n)}function Pr(){if(!kc&&Ki!==null){kc=!0;var n=0,i=xt;try{var a=Ki;for(xt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ki=null,gl=!1}catch(d){throw Ki!==null&&(Ki=Ki.slice(n+1)),Za(Me,Pr),d}finally{xt=i,kc=!1}}return null}var zs=[],Bs=0,_l=null,vl=0,oi=[],ai=0,ts=null,Zi=1,Qi="";function ns(n,i){zs[Bs++]=vl,zs[Bs++]=_l,_l=n,vl=i}function Ip(n,i,a){oi[ai++]=Zi,oi[ai++]=Qi,oi[ai++]=ts,ts=n;var u=Zi;n=Qi;var d=32-st(u)-1;u&=~(1<<d),a+=1;var _=32-st(i)+d;if(30<_){var T=d-d%5;_=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Zi=1<<32-st(i)+d|a<<d|u,Qi=_+n}else Zi=1<<_|a<<d|u,Qi=n}function zc(n){n.return!==null&&(ns(n,1),Ip(n,1,0))}function Bc(n){for(;n===_l;)_l=zs[--Bs],zs[Bs]=null,vl=zs[--Bs],zs[Bs]=null;for(;n===ts;)ts=oi[--ai],oi[ai]=null,Qi=oi[--ai],oi[ai]=null,Zi=oi[--ai],oi[ai]=null}var Zn=null,Qn=null,Bt=!1,_i=null;function Up(n,i){var a=fi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zn=n,Qn=Rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zn=n,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:Zi,overflow:Qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=fi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Zn=n,Qn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Bt){var i=Qn;if(i){var a=i;if(!Np(n,i)){if(Hc(n))throw Error(t(418));i=Rr(a.nextSibling);var u=Zn;i&&Np(n,i)?Up(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Zn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Zn=n}}}function Fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function yl(n){if(n!==Zn)return!1;if(!Bt)return Fp(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=Qn)){if(Hc(n))throw Op(),Error(t(418));for(;i;)Up(n,i),i=Rr(i.nextSibling)}if(Fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Qn=Rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Qn=null}}else Qn=Zn?Rr(n.stateNode.nextSibling):null;return!0}function Op(){for(var n=Qn;n;)n=Rr(n.nextSibling)}function Hs(){Qn=Zn=null,Bt=!1}function Gc(n){_i===null?_i=[n]:_i.push(n)}var jv=P.ReactCurrentBatchConfig;function Qo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(T){var N=d.refs;T===null?delete N[_]:N[_]=T},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function xl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kp(n){var i=n._init;return i(n._payload)}function zp(n){function i($,G){if(n){var Q=$.deletions;Q===null?($.deletions=[G],$.flags|=16):Q.push(G)}}function a($,G){if(!n)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function u($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function d($,G){return $=kr($,G),$.index=0,$.sibling=null,$}function _($,G,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<G?($.flags|=2,G):Q):($.flags|=2,G)):($.flags|=1048576,G)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function N($,G,Q,Ee){return G===null||G.tag!==6?(G=Nf(Q,$.mode,Ee),G.return=$,G):(G=d(G,Q),G.return=$,G)}function B($,G,Q,Ee){var We=Q.type;return We===A?ge($,G,Q.props.children,Ee,Q.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===te&&kp(We)===G.type)?(Ee=d(G,Q.props),Ee.ref=Qo($,G,Q),Ee.return=$,Ee):(Ee=Wl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=Qo($,G,Q),Ee.return=$,Ee)}function re($,G,Q,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Ff(Q,$.mode,Ee),G.return=$,G):(G=d(G,Q.children||[]),G.return=$,G)}function ge($,G,Q,Ee,We){return G===null||G.tag!==7?(G=cs(Q,$.mode,Ee,We),G.return=$,G):(G=d(G,Q),G.return=$,G)}function Se($,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Nf(""+G,$.mode,Q),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return Q=Wl(G.type,G.key,G.props,null,$.mode,Q),Q.ref=Qo($,null,G),Q.return=$,Q;case U:return G=Ff(G,$.mode,Q),G.return=$,G;case te:var Ee=G._init;return Se($,Ee(G._payload),Q)}if(Ge(G)||se(G))return G=cs(G,$.mode,Q,null),G.return=$,G;xl($,G)}return null}function me($,G,Q,Ee){var We=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return We!==null?null:N($,G,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:return Q.key===We?B($,G,Q,Ee):null;case U:return Q.key===We?re($,G,Q,Ee):null;case te:return We=Q._init,me($,G,We(Q._payload),Ee)}if(Ge(Q)||se(Q))return We!==null?null:ge($,G,Q,Ee,null);xl($,Q)}return null}function Ie($,G,Q,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(Q)||null,N(G,$,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return $=$.get(Ee.key===null?Q:Ee.key)||null,B(G,$,Ee,We);case U:return $=$.get(Ee.key===null?Q:Ee.key)||null,re(G,$,Ee,We);case te:var Ke=Ee._init;return Ie($,G,Q,Ke(Ee._payload),We)}if(Ge(Ee)||se(Ee))return $=$.get(Q)||null,ge(G,$,Ee,We,null);xl(G,Ee)}return null}function ke($,G,Q,Ee){for(var We=null,Ke=null,Ze=G,nt=G=0,pn=null;Ze!==null&&nt<Q.length;nt++){Ze.index>nt?(pn=Ze,Ze=null):pn=Ze.sibling;var Mt=me($,Ze,Q[nt],Ee);if(Mt===null){Ze===null&&(Ze=pn);break}n&&Ze&&Mt.alternate===null&&i($,Ze),G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt,Ze=pn}if(nt===Q.length)return a($,Ze),Bt&&ns($,nt),We;if(Ze===null){for(;nt<Q.length;nt++)Ze=Se($,Q[nt],Ee),Ze!==null&&(G=_(Ze,G,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&ns($,nt),We}for(Ze=u($,Ze);nt<Q.length;nt++)pn=Ie(Ze,$,nt,Q[nt],Ee),pn!==null&&(n&&pn.alternate!==null&&Ze.delete(pn.key===null?nt:pn.key),G=_(pn,G,nt),Ke===null?We=pn:Ke.sibling=pn,Ke=pn);return n&&Ze.forEach(function(zr){return i($,zr)}),Bt&&ns($,nt),We}function Be($,G,Q,Ee){var We=se(Q);if(typeof We!="function")throw Error(t(150));if(Q=We.call(Q),Q==null)throw Error(t(151));for(var Ke=We=null,Ze=G,nt=G=0,pn=null,Mt=Q.next();Ze!==null&&!Mt.done;nt++,Mt=Q.next()){Ze.index>nt?(pn=Ze,Ze=null):pn=Ze.sibling;var zr=me($,Ze,Mt.value,Ee);if(zr===null){Ze===null&&(Ze=pn);break}n&&Ze&&zr.alternate===null&&i($,Ze),G=_(zr,G,nt),Ke===null?We=zr:Ke.sibling=zr,Ke=zr,Ze=pn}if(Mt.done)return a($,Ze),Bt&&ns($,nt),We;if(Ze===null){for(;!Mt.done;nt++,Mt=Q.next())Mt=Se($,Mt.value,Ee),Mt!==null&&(G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return Bt&&ns($,nt),We}for(Ze=u($,Ze);!Mt.done;nt++,Mt=Q.next())Mt=Ie(Ze,$,nt,Mt.value,Ee),Mt!==null&&(n&&Mt.alternate!==null&&Ze.delete(Mt.key===null?nt:Mt.key),G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return n&&Ze.forEach(function(wy){return i($,wy)}),Bt&&ns($,nt),We}function Qt($,G,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:e:{for(var We=Q.key,Ke=G;Ke!==null;){if(Ke.key===We){if(We=Q.type,We===A){if(Ke.tag===7){a($,Ke.sibling),G=d(Ke,Q.props.children),G.return=$,$=G;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===te&&kp(We)===Ke.type){a($,Ke.sibling),G=d(Ke,Q.props),G.ref=Qo($,Ke,Q),G.return=$,$=G;break e}a($,Ke);break}else i($,Ke);Ke=Ke.sibling}Q.type===A?(G=cs(Q.props.children,$.mode,Ee,Q.key),G.return=$,$=G):(Ee=Wl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=Qo($,G,Q),Ee.return=$,$=Ee)}return T($);case U:e:{for(Ke=Q.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a($,G.sibling),G=d(G,Q.children||[]),G.return=$,$=G;break e}else{a($,G);break}else i($,G);G=G.sibling}G=Ff(Q,$.mode,Ee),G.return=$,$=G}return T($);case te:return Ke=Q._init,Qt($,G,Ke(Q._payload),Ee)}if(Ge(Q))return ke($,G,Q,Ee);if(se(Q))return Be($,G,Q,Ee);xl($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(a($,G.sibling),G=d(G,Q),G.return=$,$=G):(a($,G),G=Nf(Q,$.mode,Ee),G.return=$,$=G),T($)):a($,G)}return Qt}var Vs=zp(!0),Bp=zp(!1),Sl=Cr(null),Ml=null,Gs=null,Wc=null;function Xc(){Wc=Gs=Ml=null}function jc(n){var i=Sl.current;Ot(Sl),n._currentValue=i}function Yc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Ml=n,Wc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(Ml===null)throw Error(t(308));Gs=n,Ml.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var is=null;function $c(n){is===null?is=[n]:is.push(n)}function Hp(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,$c(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ji(n,u)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Lr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ji(n,a)}return d=u.interleaved,d===null?(i.next=i,$c(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ji(n,a)}function El(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,fn(n,a)}}function Gp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?d=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?d=_=i:_=_.next=i}else d=_=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Tl(n,i,a,u){var d=n.updateQueue;Lr=!1;var _=d.firstBaseUpdate,T=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var B=N,re=B.next;B.next=null,T===null?_=re:T.next=re,T=B;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==T&&(N===null?ge.firstBaseUpdate=re:N.next=re,ge.lastBaseUpdate=B))}if(_!==null){var Se=d.baseState;T=0,ge=re=B=null,N=_;do{var me=N.lane,Ie=N.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ke=n,Be=N;switch(me=i,Ie=a,Be.tag){case 1:if(ke=Be.payload,typeof ke=="function"){Se=ke.call(Ie,Se,me);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Be.payload,me=typeof ke=="function"?ke.call(Ie,Se,me):ke,me==null)break e;Se=Z({},Se,me);break e;case 2:Lr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[N]:me.push(N))}else Ie={eventTime:Ie,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(re=ge=Ie,B=Se):ge=ge.next=Ie,T|=me;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;me=N,N=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ge===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=re,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else _===null&&(d.shared.lanes=0);os|=T,n.lanes=T,n.memoizedState=Se}}function Wp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Jo={},Ui=Cr(Jo),ea=Cr(Jo),ta=Cr(Jo);function rs(n){if(n===Jo)throw Error(t(174));return n}function Kc(n,i){switch(Ut(ta,i),Ut(ea,n),Ut(Ui,Jo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=He(i,n)}Ot(Ui),Ut(Ui,i)}function Xs(){Ot(Ui),Ot(ea),Ot(ta)}function Xp(n){rs(ta.current);var i=rs(Ui.current),a=He(i,n.type);i!==a&&(Ut(ea,n),Ut(Ui,a))}function Zc(n){ea.current===n&&(Ot(Ui),Ot(ea))}var Wt=Cr(0);function wl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qc=[];function Jc(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var Al=P.ReactCurrentDispatcher,ef=P.ReactCurrentBatchConfig,ss=0,Xt=null,sn=null,dn=null,Rl=!1,na=!1,ia=0,Yv=0;function Tn(){throw Error(t(321))}function tf(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function nf(n,i,a,u,d,_){if(ss=_,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Al.current=n===null||n.memoizedState===null?Zv:Qv,n=a(u,d),na){_=0;do{if(na=!1,ia=0,25<=_)throw Error(t(301));_+=1,dn=sn=null,i.updateQueue=null,Al.current=Jv,n=a(u,d)}while(na)}if(Al.current=Pl,i=sn!==null&&sn.next!==null,ss=0,dn=sn=Xt=null,Rl=!1,i)throw Error(t(300));return n}function rf(){var n=ia!==0;return ia=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Xt.memoizedState=dn=n:dn=dn.next=n,dn}function ui(){if(sn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=dn===null?Xt.memoizedState:dn.next;if(i!==null)dn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},dn===null?Xt.memoizedState=dn=n:dn=dn.next=n}return dn}function ra(n,i){return typeof i=="function"?i(n):i}function sf(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=sn,d=u.baseQueue,_=a.pending;if(_!==null){if(d!==null){var T=d.next;d.next=_.next,_.next=T}u.baseQueue=d=_,a.pending=null}if(d!==null){_=d.next,u=u.baseState;var N=T=null,B=null,re=_;do{var ge=re.lane;if((ss&ge)===ge)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Se={lane:ge,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(N=B=Se,T=u):B=B.next=Se,Xt.lanes|=ge,os|=ge}re=re.next}while(re!==null&&re!==_);B===null?T=u:B.next=N,gi(u,i.memoizedState)||(Wn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do _=d.lane,Xt.lanes|=_,os|=_,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function of(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,_=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do _=n(_,T.action),T=T.next;while(T!==d);gi(_,i.memoizedState)||(Wn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,u]}function jp(){}function Yp(n,i){var a=Xt,u=ui(),d=i(),_=!gi(u.memoizedState,d);if(_&&(u.memoizedState=d,Wn=!0),u=u.queue,af(Kp.bind(null,a,u,n),[n]),u.getSnapshot!==i||_||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,sa(9,qp.bind(null,a,u,d,i),void 0,null),hn===null)throw Error(t(349));(ss&30)!==0||$p(a,i,d)}return d}function $p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qp(n,i,a,u){i.value=a,i.getSnapshot=u,Zp(i)&&Qp(n)}function Kp(n,i,a){return a(function(){Zp(i)&&Qp(n)})}function Zp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Qp(n){var i=Ji(n,1);i!==null&&Si(i,n,1,-1)}function Jp(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},i.queue=n,n=n.dispatch=Kv.bind(null,Xt,n),[i.memoizedState,n]}function sa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function em(){return ui().memoizedState}function Cl(n,i,a,u){var d=Ni();Xt.flags|=n,d.memoizedState=sa(1|i,a,void 0,u===void 0?null:u)}function bl(n,i,a,u){var d=ui();u=u===void 0?null:u;var _=void 0;if(sn!==null){var T=sn.memoizedState;if(_=T.destroy,u!==null&&tf(u,T.deps)){d.memoizedState=sa(i,a,_,u);return}}Xt.flags|=n,d.memoizedState=sa(1|i,a,_,u)}function tm(n,i){return Cl(8390656,8,n,i)}function af(n,i){return bl(2048,8,n,i)}function nm(n,i){return bl(4,2,n,i)}function im(n,i){return bl(4,4,n,i)}function rm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sm(n,i,a){return a=a!=null?a.concat([n]):null,bl(4,4,rm.bind(null,i,n),a)}function lf(){}function om(n,i){var a=ui();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&tf(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function am(n,i){var a=ui();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&tf(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function lm(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(gi(a,i)||(a=Pt(),Xt.lanes|=a,os|=a,n.baseState=!0),i)}function $v(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var u=ef.transition;ef.transition={};try{n(!1),i()}finally{xt=a,ef.transition=u}}function um(){return ui().memoizedState}function qv(n,i,a){var u=Fr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},cm(n))fm(i,a);else if(a=Hp(n,i,a,u),a!==null){var d=Nn();Si(a,n,u,d),dm(a,i,u)}}function Kv(n,i,a){var u=Fr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(cm(n))fm(i,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,N=_(T,a);if(d.hasEagerState=!0,d.eagerState=N,gi(N,T)){var B=i.interleaved;B===null?(d.next=d,$c(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Hp(n,i,d,u),a!==null&&(d=Nn(),Si(a,n,u,d),dm(a,i,u))}}function cm(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function fm(n,i){na=Rl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dm(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,fn(n,a)}}var Pl={readContext:li,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Zv={readContext:li,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:tm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Cl(4194308,4,rm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Cl(4,2,n,i)},useMemo:function(n,i){var a=Ni();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ni();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=qv.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:Jp,useDebugValue:lf,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Jp(!1),i=n[0];return n=$v.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Xt,d=Ni();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(ss&30)!==0||$p(u,i,a)}d.memoizedState=a;var _={value:a,getSnapshot:i};return d.queue=_,tm(Kp.bind(null,u,_,n),[n]),u.flags|=2048,sa(9,qp.bind(null,u,_,a,i),void 0,null),a},useId:function(){var n=Ni(),i=hn.identifierPrefix;if(Bt){var a=Qi,u=Zi;a=(u&~(1<<32-st(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qv={readContext:li,useCallback:om,useContext:li,useEffect:af,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:am,useReducer:sf,useRef:em,useState:function(){return sf(ra)},useDebugValue:lf,useDeferredValue:function(n){var i=ui();return lm(i,sn.memoizedState,n)},useTransition:function(){var n=sf(ra)[0],i=ui().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Yp,useId:um,unstable_isNewReconciler:!1},Jv={readContext:li,useCallback:om,useContext:li,useEffect:af,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:am,useReducer:of,useRef:em,useState:function(){return of(ra)},useDebugValue:lf,useDeferredValue:function(n){var i=ui();return sn===null?i.memoizedState=n:lm(i,sn.memoizedState,n)},useTransition:function(){var n=of(ra)[0],i=ui().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Yp,useId:um,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function uf(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:Z({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Nn(),d=Fr(n),_=er(u,d);_.payload=i,a!=null&&(_.callback=a),i=Dr(n,_,d),i!==null&&(Si(i,n,d,u),El(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Nn(),d=Fr(n),_=er(u,d);_.tag=1,_.payload=i,a!=null&&(_.callback=a),i=Dr(n,_,d),i!==null&&(Si(i,n,d,u),El(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Nn(),u=Fr(n),d=er(a,u);d.tag=2,i!=null&&(d.callback=i),i=Dr(n,d,u),i!==null&&(Si(i,n,u,a),El(i,n,u))}};function hm(n,i,a,u,d,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!Xo(a,u)||!Xo(d,_):!0}function pm(n,i,a){var u=!1,d=br,_=i.contextType;return typeof _=="object"&&_!==null?_=li(_):(d=Gn(i)?es:En.current,u=i.contextTypes,_=(u=u!=null)?ks(n,d):br),i=new i(a,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ll,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=_),i}function mm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Ll.enqueueReplaceState(i,i.state,null)}function cf(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},qc(n);var _=i.contextType;typeof _=="object"&&_!==null?d.context=li(_):(_=Gn(i)?es:En.current,d.context=ks(n,_)),d.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(uf(n,i,_,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ll.enqueueReplaceState(d,d.state,null),Tl(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var a="",u=i;do a+=fe(u),u=u.return;while(u);var d=a}catch(_){d=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:d,digest:null}}function ff(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function df(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function gm(n,i,a){a=er(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){kl||(kl=!0,Rf=u),df(n,i)},a}function _m(n,i,a){a=er(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){df(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){df(n,i),typeof u!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function vm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new ey;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=py.bind(null,n,i,a),i.then(n,n))}function ym(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xm(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=er(-1,1),i.tag=2,Dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ty=P.ReactCurrentOwner,Wn=!1;function Un(n,i,a,u){i.child=n===null?Bp(i,null,a,u):Vs(i,n.child,a,u)}function Sm(n,i,a,u,d){a=a.render;var _=i.ref;return Ws(i,d),u=nf(n,i,a,u,_,d),a=rf(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,tr(n,i,d)):(Bt&&a&&zc(i),i.flags|=1,Un(n,i,u,d),i.child)}function Mm(n,i,a,u,d){if(n===null){var _=a.type;return typeof _=="function"&&!Uf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=_,Em(n,i,_,u,d)):(n=Wl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&d)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(T,u)&&n.ref===i.ref)return tr(n,i,d)}return i.flags|=1,n=kr(_,u),n.ref=i.ref,n.return=i,i.child=n}function Em(n,i,a,u,d){if(n!==null){var _=n.memoizedProps;if(Xo(_,u)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=u=_,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,tr(n,i,d)}return hf(n,i,a,u,d)}function Tm(n,i,a){var u=i.pendingProps,d=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut($s,Jn),Jn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut($s,Jn),Jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:a,Ut($s,Jn),Jn|=u}else _!==null?(u=_.baseLanes|a,i.memoizedState=null):u=a,Ut($s,Jn),Jn|=u;return Un(n,i,d,a),i.child}function wm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function hf(n,i,a,u,d){var _=Gn(a)?es:En.current;return _=ks(i,_),Ws(i,d),a=nf(n,i,a,u,_,d),u=rf(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,tr(n,i,d)):(Bt&&u&&zc(i),i.flags|=1,Un(n,i,a,d),i.child)}function Am(n,i,a,u,d){if(Gn(a)){var _=!0;ml(i)}else _=!1;if(Ws(i,d),i.stateNode===null)Il(n,i),pm(i,a,u),cf(i,a,u,d),u=!0;else if(n===null){var T=i.stateNode,N=i.memoizedProps;T.props=N;var B=T.context,re=a.contextType;typeof re=="object"&&re!==null?re=li(re):(re=Gn(a)?es:En.current,re=ks(i,re));var ge=a.getDerivedStateFromProps,Se=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==u||B!==re)&&mm(i,T,u,re),Lr=!1;var me=i.memoizedState;T.state=me,Tl(i,u,T,d),B=i.memoizedState,N!==u||me!==B||Vn.current||Lr?(typeof ge=="function"&&(uf(i,a,ge,u),B=i.memoizedState),(N=Lr||hm(i,a,N,u,me,B,re))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),T.props=u,T.state=B,T.context=re,u=N):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,Vp(n,i),N=i.memoizedProps,re=i.type===i.elementType?N:vi(i.type,N),T.props=re,Se=i.pendingProps,me=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=li(B):(B=Gn(a)?es:En.current,B=ks(i,B));var Ie=a.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==Se||me!==B)&&mm(i,T,u,B),Lr=!1,me=i.memoizedState,T.state=me,Tl(i,u,T,d);var ke=i.memoizedState;N!==Se||me!==ke||Vn.current||Lr?(typeof Ie=="function"&&(uf(i,a,Ie,u),ke=i.memoizedState),(re=Lr||hm(i,a,re,u,me,ke,B)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,ke,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,ke,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ke),T.props=u,T.state=ke,T.context=B,u=re):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return pf(n,i,a,u,_,d)}function pf(n,i,a,u,d,_){wm(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&Lp(i,a,!1),tr(n,i,_);u=i.stateNode,ty.current=i;var N=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=Vs(i,n.child,null,_),i.child=Vs(i,null,N,_)):Un(n,i,N,_),i.memoizedState=u.state,d&&Lp(i,a,!0),i.child}function Rm(n){var i=n.stateNode;i.pendingContext?bp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&bp(n,i.context,!1),Kc(n,i.containerInfo)}function Cm(n,i,a,u,d){return Hs(),Gc(d),i.flags|=256,Un(n,i,a,u),i.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(n){return{baseLanes:n,cachePool:null,transitions:null}}function bm(n,i,a){var u=i.pendingProps,d=Wt.current,_=!1,T=(i.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Wt,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,_?(u=i.mode,_=i.child,T={mode:"hidden",children:T},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Xl(T,u,0,null),n=cs(n,u,a,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=gf(a),i.memoizedState=mf,n):_f(i,T));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return ny(n,i,T,u,N,d,a);if(_){_=u.fallback,T=i.mode,d=n.child,N=d.sibling;var B={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=kr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?_=kr(N,_):(_=cs(_,T,a,null),_.flags|=2),_.return=i,u.return=i,u.sibling=_,i.child=u,u=_,_=i.child,T=n.child.memoizedState,T=T===null?gf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~a,i.memoizedState=mf,u}return _=n.child,n=_.sibling,u=kr(_,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function _f(n,i){return i=Xl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Dl(n,i,a,u){return u!==null&&Gc(u),Vs(i,n.child,null,a),n=_f(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ny(n,i,a,u,d,_,T){if(a)return i.flags&256?(i.flags&=-257,u=ff(Error(t(422))),Dl(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=u.fallback,d=i.mode,u=Xl({mode:"visible",children:u.children},d,0,null),_=cs(_,d,T,null),_.flags|=2,u.return=i,_.return=i,u.sibling=_,i.child=u,(i.mode&1)!==0&&Vs(i,n.child,null,T),i.child.memoizedState=gf(T),i.memoizedState=mf,_);if((i.mode&1)===0)return Dl(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,_=Error(t(419)),u=ff(_,u,void 0),Dl(n,i,T,u)}if(N=(T&n.childLanes)!==0,Wn||N){if(u=hn,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==_.retryLane&&(_.retryLane=d,Ji(n,d),Si(u,n,d,-1))}return If(),u=ff(Error(t(421))),Dl(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=my.bind(null,n),d._reactRetry=i,null):(n=_.treeContext,Qn=Rr(d.nextSibling),Zn=i,Bt=!0,_i=null,n!==null&&(oi[ai++]=Zi,oi[ai++]=Qi,oi[ai++]=ts,Zi=n.id,Qi=n.overflow,ts=i),i=_f(i,u.children),i.flags|=4096,i)}function Pm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Yc(n.return,i,a)}function vf(n,i,a,u,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=d)}function Lm(n,i,a){var u=i.pendingProps,d=u.revealOrder,_=u.tail;if(Un(n,i,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,a,i);else if(n.tag===19)Pm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ut(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),vf(i,!1,d,a,_);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&wl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}vf(i,!0,a,null,_);break;case"together":vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),os|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function iy(n,i,a){switch(i.tag){case 3:Rm(i),Hs();break;case 5:Xp(i);break;case 1:Gn(i.type)&&ml(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ut(Sl,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ut(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?bm(n,i,a):(Ut(Wt,Wt.current&1),n=tr(n,i,a),n!==null?n.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Lm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,Tm(n,i,a)}return tr(n,i,a)}var Dm,yf,Im,Um;Dm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yf=function(){},Im=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,rs(Ui.current);var _=null;switch(a){case"input":d=H(n,d),u=H(n,u),_=[];break;case"select":d=Z({},d,{value:void 0}),u=Z({},u,{value:void 0}),_=[];break;case"textarea":d=R(n,d),u=R(n,u),_=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=dl)}dt(a,u);var T;a=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var N=d[re];for(T in N)N.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in u){var B=u[re];if(N=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&B!==N&&(B!=null||N!=null))if(re==="style")if(N){for(T in N)!N.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&N[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(_||(_=[]),_.push(re,a)),a=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(_=_||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Ft("scroll",n),_||N===B||(_=[])):(_=_||[]).push(re,B))}a&&(_=_||[]).push("style",a);var re=_;(i.updateQueue=re)&&(i.flags|=4)}},Um=function(n,i,a,u){a!==u&&(i.flags|=4)};function oa(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function ry(n,i,a){var u=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return Gn(i.type)&&pl(),wn(i),null;case 3:return u=i.stateNode,Xs(),Ot(Vn),Ot(En),Jc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(yl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Pf(_i),_i=null))),yf(n,i),wn(i),null;case 5:Zc(i);var d=rs(ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Im(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=rs(Ui.current),yl(i)){u=i.stateNode,a=i.type;var _=i.memoizedProps;switch(u[Ii]=i,u[Ko]=_,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<Yo.length;d++)Ft(Yo[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Ln(u,_),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",u);break;case"textarea":ee(u,_),Ft("invalid",u)}dt(a,_),d=null;for(var T in _)if(_.hasOwnProperty(T)){var N=_[T];T==="children"?typeof N=="string"?u.textContent!==N&&(_.suppressHydrationWarning!==!0&&fl(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(_.suppressHydrationWarning!==!0&&fl(u.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ft("scroll",u)}switch(a){case"input":Dt(u),je(u,_,!0);break;case"textarea":Dt(u),_e(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=dl)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[Ii]=i,n[Ko]=u,Dm(n,i,!1,!1),i.stateNode=n;e:{switch(T=it(a,u),a){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<Yo.length;d++)Ft(Yo[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":Ln(n,u),d=H(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Z({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":ee(n,u),d=R(n,u),Ft("invalid",n);break;default:d=u}dt(a,d),N=d;for(_ in N)if(N.hasOwnProperty(_)){var B=N[_];_==="style"?et(n,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&qe(n,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&$e(n,B):typeof B=="number"&&$e(n,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Ft("scroll",n):B!=null&&L(n,_,B,T))}switch(a){case"input":Dt(n),je(n,u,!1);break;case"textarea":Dt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?I(n,!!u.multiple,_,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Um(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(ta.current),rs(Ui.current),yl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ii]=i,(_=u.nodeValue!==a)&&(n=Zn,n!==null))switch(n.tag){case 3:fl(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(u.nodeValue,a,(n.mode&1)!==0)}_&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ii]=i,i.stateNode=u}return wn(i),null;case 13:if(Ot(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Op(),Hs(),i.flags|=98560,_=!1;else if(_=yl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ii]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),_=!1}else _i!==null&&(Pf(_i),_i=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?on===0&&(on=3):If())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Xs(),yf(n,i),n===null&&$o(i.stateNode.containerInfo),wn(i),null;case 10:return jc(i.type._context),wn(i),null;case 17:return Gn(i.type)&&pl(),wn(i),null;case 19:if(Ot(Wt),_=i.memoizedState,_===null)return wn(i),null;if(u=(i.flags&128)!==0,T=_.rendering,T===null)if(u)oa(_,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=wl(n),T!==null){for(i.flags|=128,oa(_,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)_=a,n=u,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ut(Wt,Wt.current&1|2),i.child}n=n.sibling}_.tail!==null&&q()>qs&&(i.flags|=128,u=!0,oa(_,!1),i.lanes=4194304)}else{if(!u)if(n=wl(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),oa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Bt)return wn(i),null}else 2*q()-_.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,u=!0,oa(_,!1),i.lanes=4194304);_.isBackwards?(T.sibling=i.child,i.child=T):(a=_.last,a!==null?a.sibling=T:i.child=T,_.last=T)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=q(),i.sibling=null,a=Wt.current,Ut(Wt,u?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return Df(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function sy(n,i){switch(Bc(i),i.tag){case 1:return Gn(i.type)&&pl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),Ot(Vn),Ot(En),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(Ot(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Wt),null;case 4:return Xs(),null;case 10:return jc(i.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Ul=!1,An=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function xf(n,i,a){try{a()}catch(u){qt(n,i,u)}}var Nm=!1;function ay(n,i){if(Lc=el,n=hp(),Ec(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,N=-1,B=-1,re=0,ge=0,Se=n,me=null;t:for(;;){for(var Ie;Se!==a||d!==0&&Se.nodeType!==3||(N=T+d),Se!==_||u!==0&&Se.nodeType!==3||(B=T+u),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)me=Se,Se=Ie;for(;;){if(Se===n)break t;if(me===a&&++re===d&&(N=T),me===_&&++ge===u&&(B=T),(Ie=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Ie}a=N===-1||B===-1?null:{start:N,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},el=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Be=ke.memoizedProps,Qt=ke.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Be:vi(i.type,Be),Qt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return ke=Nm,Nm=!1,ke}function aa(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var _=d.destroy;d.destroy=void 0,_!==void 0&&xf(i,a,_)}d=d.next}while(d!==u)}}function Nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Sf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Fm(n){var i=n.alternate;i!==null&&(n.alternate=null,Fm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[Ko],delete i[Fc],delete i[Gv],delete i[Wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Om(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mf(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dl));else if(u!==4&&(n=n.child,n!==null))for(Mf(n,i,a),n=n.sibling;n!==null;)Mf(n,i,a),n=n.sibling}function Ef(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ef(n,i,a),n=n.sibling;n!==null;)Ef(n,i,a),n=n.sibling}var vn=null,yi=!1;function Ir(n,i,a){for(a=a.child;a!==null;)zm(n,i,a),a=a.sibling}function zm(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:An||Ys(a,i);case 6:var u=vn,d=yi;vn=null,Ir(n,i,a),vn=u,yi=d,vn!==null&&(yi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(yi?(n=vn,a=a.stateNode,n.nodeType===8?Nc(n.parentNode,a):n.nodeType===1&&Nc(n,a),zo(n)):Nc(vn,a.stateNode));break;case 4:u=vn,d=yi,vn=a.stateNode.containerInfo,yi=!0,Ir(n,i,a),vn=u,yi=d;break;case 0:case 11:case 14:case 15:if(!An&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var _=d,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&xf(a,i,T),d=d.next}while(d!==u)}Ir(n,i,a);break;case 1:if(!An&&(Ys(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){qt(a,i,N)}Ir(n,i,a);break;case 21:Ir(n,i,a);break;case 22:a.mode&1?(An=(u=An)||a.memoizedState!==null,Ir(n,i,a),An=u):Ir(n,i,a);break;default:Ir(n,i,a)}}function Bm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new oy),i.forEach(function(u){var d=gy.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function xi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var _=n,T=i,N=T;e:for(;N!==null;){switch(N.tag){case 5:vn=N.stateNode,yi=!1;break e;case 3:vn=N.stateNode.containerInfo,yi=!0;break e;case 4:vn=N.stateNode.containerInfo,yi=!0;break e}N=N.return}if(vn===null)throw Error(t(160));zm(_,T,d),vn=null,yi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(re){qt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hm(i,n),i=i.sibling}function Hm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(i,n),Fi(n),u&4){try{aa(3,n,n.return),Nl(3,n)}catch(Be){qt(n,n.return,Be)}try{aa(5,n,n.return)}catch(Be){qt(n,n.return,Be)}}break;case 1:xi(i,n),Fi(n),u&512&&a!==null&&Ys(a,a.return);break;case 5:if(xi(i,n),Fi(n),u&512&&a!==null&&Ys(a,a.return),n.flags&32){var d=n.stateNode;try{$e(d,"")}catch(Be){qt(n,n.return,Be)}}if(u&4&&(d=n.stateNode,d!=null)){var _=n.memoizedProps,T=a!==null?a.memoizedProps:_,N=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{N==="input"&&_.type==="radio"&&_.name!=null&&mt(d,_),it(N,T);var re=it(N,_);for(T=0;T<B.length;T+=2){var ge=B[T],Se=B[T+1];ge==="style"?et(d,Se):ge==="dangerouslySetInnerHTML"?qe(d,Se):ge==="children"?$e(d,Se):L(d,ge,Se,re)}switch(N){case"input":ft(d,_);break;case"textarea":he(d,_);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?I(d,!!_.multiple,Ie,!1):me!==!!_.multiple&&(_.defaultValue!=null?I(d,!!_.multiple,_.defaultValue,!0):I(d,!!_.multiple,_.multiple?[]:"",!1))}d[Ko]=_}catch(Be){qt(n,n.return,Be)}}break;case 6:if(xi(i,n),Fi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,_=n.memoizedProps;try{d.nodeValue=_}catch(Be){qt(n,n.return,Be)}}break;case 3:if(xi(i,n),Fi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(i.containerInfo)}catch(Be){qt(n,n.return,Be)}break;case 4:xi(i,n),Fi(n);break;case 13:xi(i,n),Fi(n),d=n.child,d.flags&8192&&(_=d.memoizedState!==null,d.stateNode.isHidden=_,!_||d.alternate!==null&&d.alternate.memoizedState!==null||(Af=q())),u&4&&Bm(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(An=(re=An)||ge,xi(i,n),An=re):xi(i,n),Fi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ge&&(n.mode&1)!==0)for(Ue=n,ge=n.child;ge!==null;){for(Se=Ue=ge;Ue!==null;){switch(me=Ue,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:aa(4,me,me.return);break;case 1:Ys(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){u=me,a=me.return;try{i=u,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(Be){qt(u,a,Be)}}break;case 5:Ys(me,me.return);break;case 22:if(me.memoizedState!==null){Wm(Se);continue}}Ie!==null?(Ie.return=me,Ue=Ie):Wm(Se)}ge=ge.sibling}e:for(ge=null,Se=n;;){if(Se.tag===5){if(ge===null){ge=Se;try{d=Se.stateNode,re?(_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(N=Se.stateNode,B=Se.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Je("display",T))}catch(Be){qt(n,n.return,Be)}}}else if(Se.tag===6){if(ge===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(Be){qt(n,n.return,Be)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ge===Se&&(ge=null),Se=Se.return}ge===Se&&(ge=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:xi(i,n),Fi(n),u&4&&Bm(n);break;case 21:break;default:xi(i,n),Fi(n)}}function Fi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Om(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&($e(d,""),u.flags&=-33);var _=km(n);Ef(n,_,d);break;case 3:case 4:var T=u.stateNode.containerInfo,N=km(n);Mf(n,N,T);break;default:throw Error(t(161))}}catch(B){qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ly(n,i,a){Ue=n,Vm(n)}function Vm(n,i,a){for(var u=(n.mode&1)!==0;Ue!==null;){var d=Ue,_=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Ul;if(!T){var N=d.alternate,B=N!==null&&N.memoizedState!==null||An;N=Ul;var re=An;if(Ul=T,(An=B)&&!re)for(Ue=d;Ue!==null;)T=Ue,B=T.child,T.tag===22&&T.memoizedState!==null?Xm(d):B!==null?(B.return=T,Ue=B):Xm(d);for(;_!==null;)Ue=_,Vm(_),_=_.sibling;Ue=d,Ul=N,An=re}Gm(n)}else(d.subtreeFlags&8772)!==0&&_!==null?(_.return=d,Ue=_):Gm(n)}}function Gm(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Nl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!An)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&Wp(i,_,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wp(i,T,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ge=re.memoizedState;if(ge!==null){var Se=ge.dehydrated;Se!==null&&zo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&Sf(i)}catch(me){qt(i,i.return,me)}}if(i===n){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Wm(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Xm(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Nl(4,i)}catch(B){qt(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){qt(i,d,B)}}var _=i.return;try{Sf(i)}catch(B){qt(i,_,B)}break;case 5:var T=i.return;try{Sf(i)}catch(B){qt(i,T,B)}}}catch(B){qt(i,i.return,B)}if(i===n){Ue=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ue=N;break}Ue=i.return}}var uy=Math.ceil,Fl=P.ReactCurrentDispatcher,Tf=P.ReactCurrentOwner,ci=P.ReactCurrentBatchConfig,St=0,hn=null,en=null,yn=0,Jn=0,$s=Cr(0),on=0,la=null,os=0,Ol=0,wf=0,ua=null,Xn=null,Af=0,qs=1/0,nr=null,kl=!1,Rf=null,Ur=null,zl=!1,Nr=null,Bl=0,ca=0,Cf=null,Hl=-1,Vl=0;function Nn(){return(St&6)!==0?q():Hl!==-1?Hl:Hl=q()}function Fr(n){return(n.mode&1)===0?1:(St&2)!==0&&yn!==0?yn&-yn:jv.transition!==null?(Vl===0&&(Vl=Pt()),Vl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Yh(n.type)),n)}function Si(n,i,a,u){if(50<ca)throw ca=0,Cf=null,Error(t(185));cn(n,a,u),((St&2)===0||n!==hn)&&(n===hn&&((St&2)===0&&(Ol|=a),on===4&&Or(n,yn)),jn(n,u),a===1&&St===0&&(i.mode&1)===0&&(qs=q()+500,gl&&Pr()))}function jn(n,i){var a=n.callbackNode;In(n,i);var u=Sn(n,n===hn?yn:0);if(u===0)a!==null&&b(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&b(a),i===1)n.tag===0?Xv(Ym.bind(null,n)):Dp(Ym.bind(null,n)),Hv(function(){(St&6)===0&&Pr()}),a=null;else{switch(Di(u)){case 1:a=Me;break;case 4:a=be;break;case 16:a=De;break;case 536870912:a=tt;break;default:a=De}a=tg(a,jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function jm(n,i){if(Hl=-1,Vl=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var u=Sn(n,n===hn?yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Gl(n,u);else{i=u;var d=St;St|=2;var _=qm();(hn!==n||yn!==i)&&(nr=null,qs=q()+500,ls(n,i));do try{dy();break}catch(N){$m(n,N)}while(!0);Xc(),Fl.current=_,St=d,en!==null?i=0:(hn=null,yn=0,i=on)}if(i!==0){if(i===2&&(d=$i(n),d!==0&&(u=d,i=bf(n,d))),i===1)throw a=la,ls(n,0),Or(n,u),jn(n,q()),a;if(i===6)Or(n,u);else{if(d=n.current.alternate,(u&30)===0&&!cy(d)&&(i=Gl(n,u),i===2&&(_=$i(n),_!==0&&(u=_,i=bf(n,_))),i===1))throw a=la,ls(n,0),Or(n,u),jn(n,q()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:us(n,Xn,nr);break;case 3:if(Or(n,u),(u&130023424)===u&&(i=Af+500-q(),10<i)){if(Sn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Nn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(us.bind(null,n,Xn,nr),i);break}us(n,Xn,nr);break;case 4:if(Or(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-st(u);_=1<<T,T=i[T],T>d&&(d=T),u&=~_}if(u=d,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uy(u/1960))-u,10<u){n.timeoutHandle=Uc(us.bind(null,n,Xn,nr),u);break}us(n,Xn,nr);break;case 5:us(n,Xn,nr);break;default:throw Error(t(329))}}}return jn(n,q()),n.callbackNode===a?jm.bind(null,n):null}function bf(n,i){var a=ua;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=Gl(n,i),n!==2&&(i=Xn,Xn=a,i!==null&&Pf(i)),n}function Pf(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function cy(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],_=d.getSnapshot;d=d.value;try{if(!gi(_(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Or(n,i){for(i&=~wf,i&=~Ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-st(i),u=1<<a;n[a]=-1,i&=~u}}function Ym(n){if((St&6)!==0)throw Error(t(327));Ks();var i=Sn(n,0);if((i&1)===0)return jn(n,q()),null;var a=Gl(n,i);if(n.tag!==0&&a===2){var u=$i(n);u!==0&&(i=u,a=bf(n,u))}if(a===1)throw a=la,ls(n,0),Or(n,i),jn(n,q()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,us(n,Xn,nr),jn(n,q()),null}function Lf(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(qs=q()+500,gl&&Pr())}}function as(n){Nr!==null&&Nr.tag===0&&(St&6)===0&&Ks();var i=St;St|=1;var a=ci.transition,u=xt;try{if(ci.transition=null,xt=1,n)return n()}finally{xt=u,ci.transition=a,St=i,(St&6)===0&&Pr()}}function Df(){Jn=$s.current,Ot($s)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bv(a)),en!==null)for(a=en.return;a!==null;){var u=a;switch(Bc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&pl();break;case 3:Xs(),Ot(Vn),Ot(En),Jc();break;case 5:Zc(u);break;case 4:Xs();break;case 13:Ot(Wt);break;case 19:Ot(Wt);break;case 10:jc(u.type._context);break;case 22:case 23:Df()}a=a.return}if(hn=n,en=n=kr(n.current,null),yn=Jn=i,on=0,la=null,wf=Ol=os=0,Xn=ua=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,_=a.pending;if(_!==null){var T=_.next;_.next=d,u.next=T}a.pending=u}is=null}return n}function $m(n,i){do{var a=en;try{if(Xc(),Al.current=Pl,Rl){for(var u=Xt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Rl=!1}if(ss=0,dn=sn=Xt=null,na=!1,ia=0,Tf.current=null,a===null||a.return===null){on=1,la=i,en=null;break}e:{var _=n,T=a.return,N=a,B=i;if(i=yn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,ge=N,Se=ge.tag;if((ge.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=ym(T);if(Ie!==null){Ie.flags&=-257,xm(Ie,T,N,_,i),Ie.mode&1&&vm(_,re,i),i=Ie,B=re;var ke=i.updateQueue;if(ke===null){var Be=new Set;Be.add(B),i.updateQueue=Be}else ke.add(B);break e}else{if((i&1)===0){vm(_,re,i),If();break e}B=Error(t(426))}}else if(Bt&&N.mode&1){var Qt=ym(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),xm(Qt,T,N,_,i),Gc(js(B,N));break e}}_=B=js(B,N),on!==4&&(on=2),ua===null?ua=[_]:ua.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var $=gm(_,B,i);Gp(_,$);break e;case 1:N=B;var G=_.type,Q=_.stateNode;if((_.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Ur===null||!Ur.has(Q)))){_.flags|=65536,i&=-i,_.lanes|=i;var Ee=_m(_,N,i);Gp(_,Ee);break e}}_=_.return}while(_!==null)}Zm(a)}catch(We){i=We,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function qm(){var n=Fl.current;return Fl.current=Pl,n===null?Pl:n}function If(){(on===0||on===3||on===2)&&(on=4),hn===null||(os&268435455)===0&&(Ol&268435455)===0||Or(hn,yn)}function Gl(n,i){var a=St;St|=2;var u=qm();(hn!==n||yn!==i)&&(nr=null,ls(n,i));do try{fy();break}catch(d){$m(n,d)}while(!0);if(Xc(),St=a,Fl.current=u,en!==null)throw Error(t(261));return hn=null,yn=0,on}function fy(){for(;en!==null;)Km(en)}function dy(){for(;en!==null&&!j();)Km(en)}function Km(n){var i=eg(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,i===null?Zm(n):en=i,Tf.current=null}function Zm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ry(a,i,Jn),a!==null){en=a;return}}else{if(a=sy(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);on===0&&(on=5)}function us(n,i,a){var u=xt,d=ci.transition;try{ci.transition=null,xt=1,hy(n,i,a,u)}finally{ci.transition=d,xt=u}return null}function hy(n,i,a,u){do Ks();while(Nr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(_n(n,_),n===hn&&(en=hn=null,yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zl||(zl=!0,tg(De,function(){return Ks(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ci.transition,ci.transition=null;var T=xt;xt=1;var N=St;St|=4,Tf.current=null,ay(n,a),Hm(a,n),Iv(Dc),el=!!Lc,Dc=Lc=null,n.current=a,ly(a),oe(),St=N,xt=T,ci.transition=_}else n.current=a;if(zl&&(zl=!1,Nr=n,Bl=d),_=n.pendingLanes,_===0&&(Ur=null),_t(a.stateNode),jn(n,q()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(kl)throw kl=!1,n=Rf,Rf=null,n;return(Bl&1)!==0&&n.tag!==0&&Ks(),_=n.pendingLanes,(_&1)!==0?n===Cf?ca++:(ca=0,Cf=n):ca=0,Pr(),null}function Ks(){if(Nr!==null){var n=Di(Bl),i=ci.transition,a=xt;try{if(ci.transition=null,xt=16>n?16:n,Nr===null)var u=!1;else{if(n=Nr,Nr=null,Bl=0,(St&6)!==0)throw Error(t(331));var d=St;for(St|=4,Ue=n.current;Ue!==null;){var _=Ue,T=_.child;if((Ue.flags&16)!==0){var N=_.deletions;if(N!==null){for(var B=0;B<N.length;B++){var re=N[B];for(Ue=re;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:aa(8,ge,_)}var Se=ge.child;if(Se!==null)Se.return=ge,Ue=Se;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ie=ge.return;if(Fm(ge),ge===re){Ue=null;break}if(me!==null){me.return=Ie,Ue=me;break}Ue=Ie}}}var ke=_.alternate;if(ke!==null){var Be=ke.child;if(Be!==null){ke.child=null;do{var Qt=Be.sibling;Be.sibling=null,Be=Qt}while(Be!==null)}}Ue=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Ue=T;else e:for(;Ue!==null;){if(_=Ue,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:aa(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Ue=$;break e}Ue=_.return}}var G=n.current;for(Ue=G;Ue!==null;){T=Ue;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,Ue=Q;else e:for(T=G;Ue!==null;){if(N=Ue,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Nl(9,N)}}catch(We){qt(N,N.return,We)}if(N===T){Ue=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Ue=Ee;break e}Ue=N.return}}if(St=d,Pr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{xt=a,ci.transition=i}}return!1}function Qm(n,i,a){i=js(a,i),i=gm(n,i,1),n=Dr(n,i,1),i=Nn(),n!==null&&(cn(n,1,i),jn(n,i))}function qt(n,i,a){if(n.tag===3)Qm(n,n,a);else for(;i!==null;){if(i.tag===3){Qm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ur===null||!Ur.has(u))){n=js(a,n),n=_m(i,n,1),i=Dr(i,n,1),n=Nn(),i!==null&&(cn(i,1,n),jn(i,n));break}}i=i.return}}function py(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Nn(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(yn&a)===a&&(on===4||on===3&&(yn&130023424)===yn&&500>q()-Af?ls(n,0):wf|=a),jn(n,i)}function Jm(n,i){i===0&&((n.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var a=Nn();n=Ji(n,i),n!==null&&(cn(n,i,a),jn(n,a))}function my(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jm(n,a)}function gy(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Jm(n,a)}var eg;eg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,iy(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,Bt&&(i.flags&1048576)!==0&&Ip(i,vl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Il(n,i),n=i.pendingProps;var d=ks(i,En.current);Ws(i,a),d=nf(null,i,u,n,d,a);var _=rf();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(u)?(_=!0,ml(i)):_=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qc(i),d.updater=Ll,i.stateNode=d,d._reactInternals=i,cf(i,u,n,a),i=pf(null,i,u,!0,_,a)):(i.tag=0,Bt&&_&&zc(i),Un(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Il(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=vy(u),n=vi(u,n),d){case 0:i=hf(null,i,u,n,a);break e;case 1:i=Am(null,i,u,n,a);break e;case 11:i=Sm(null,i,u,n,a);break e;case 14:i=Mm(null,i,u,vi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),hf(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),Am(n,i,u,d,a);case 3:e:{if(Rm(i),n===null)throw Error(t(387));u=i.pendingProps,_=i.memoizedState,d=_.element,Vp(n,i),Tl(i,u,null,a);var T=i.memoizedState;if(u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){d=js(Error(t(423)),i),i=Cm(n,i,u,a,d);break e}else if(u!==d){d=js(Error(t(424)),i),i=Cm(n,i,u,a,d);break e}else for(Qn=Rr(i.stateNode.containerInfo.firstChild),Zn=i,Bt=!0,_i=null,a=Bp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),u===d){i=tr(n,i,a);break e}Un(n,i,u,a)}i=i.child}return i;case 5:return Xp(i),n===null&&Vc(i),u=i.type,d=i.pendingProps,_=n!==null?n.memoizedProps:null,T=d.children,Ic(u,d)?T=null:_!==null&&Ic(u,_)&&(i.flags|=32),wm(n,i),Un(n,i,T,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return bm(n,i,a);case 4:return Kc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Vs(i,null,u,a):Un(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),Sm(n,i,u,d,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,_=i.memoizedProps,T=d.value,Ut(Sl,u._currentValue),u._currentValue=T,_!==null)if(gi(_.value,T)){if(_.children===d.children&&!Vn.current){i=tr(n,i,a);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var N=_.dependencies;if(N!==null){T=_.child;for(var B=N.firstContext;B!==null;){if(B.context===u){if(_.tag===1){B=er(-1,a&-a),B.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var ge=re.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),re.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),Yc(_.return,a,i),N.lanes|=a;break}B=B.next}}else if(_.tag===10)T=_.type===i.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,N=T.alternate,N!==null&&(N.lanes|=a),Yc(T,a,i),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===i){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Un(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ws(i,a),d=li(d),u=u(d),i.flags|=1,Un(n,i,u,a),i.child;case 14:return u=i.type,d=vi(u,i.pendingProps),d=vi(u.type,d),Mm(n,i,u,d,a);case 15:return Em(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),Il(n,i),i.tag=1,Gn(u)?(n=!0,ml(i)):n=!1,Ws(i,a),pm(i,u,d),cf(i,u,d,a),pf(null,i,u,!0,n,a);case 19:return Lm(n,i,a);case 22:return Tm(n,i,a)}throw Error(t(156,i.tag))};function tg(n,i){return Za(n,i)}function _y(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,a,u){return new _y(n,i,a,u)}function Uf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vy(n){if(typeof n=="function")return Uf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===ue)return 14}return 2}function kr(n,i){var a=n.alternate;return a===null?(a=fi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wl(n,i,a,u,d,_){var T=2;if(u=n,typeof n=="function")Uf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case A:return cs(a.children,d,_,i);case F:T=8,d|=8;break;case C:return n=fi(12,a,i,d|2),n.elementType=C,n.lanes=_,n;case K:return n=fi(13,a,i,d),n.elementType=K,n.lanes=_,n;case ae:return n=fi(19,a,i,d),n.elementType=ae,n.lanes=_,n;case de:return Xl(a,d,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:T=10;break e;case z:T=9;break e;case ie:T=11;break e;case ue:T=14;break e;case te:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=fi(T,a,i,d),i.elementType=n,i.type=u,i.lanes=_,i}function cs(n,i,a,u){return n=fi(7,n,u,i),n.lanes=a,n}function Xl(n,i,a,u){return n=fi(22,n,u,i),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function Nf(n,i,a){return n=fi(6,n,null,i),n.lanes=a,n}function Ff(n,i,a){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yy(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Of(n,i,a,u,d,_,T,N,B){return n=new yy(n,i,a,N,B),i===1?(i=1,_===!0&&(i|=8)):i=0,_=fi(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(_),n}function xy(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function ng(n){if(!n)return br;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return Pp(n,a,i)}return i}function ig(n,i,a,u,d,_,T,N,B){return n=Of(a,u,!0,n,d,_,T,N,B),n.context=ng(null),a=n.current,u=Nn(),d=Fr(a),_=er(u,d),_.callback=i??null,Dr(a,_,d),n.current.lanes=d,cn(n,d,u),jn(n,u),n}function jl(n,i,a,u){var d=i.current,_=Nn(),T=Fr(d);return a=ng(a),i.context===null?i.context=a:i.pendingContext=a,i=er(_,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Dr(d,i,T),n!==null&&(Si(n,d,T,_),El(n,d,T)),T}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function kf(n,i){rg(n,i),(n=n.alternate)&&rg(n,i)}function Sy(){return null}var sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function zf(n){this._internalRoot=n}$l.prototype.render=zf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));jl(n,i,null,null)},$l.prototype.unmount=zf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;as(function(){jl(null,n,null,null)}),i[qi]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Tr.length&&i!==0&&i<Tr[a].priority;a++);Tr.splice(a,0,n),a===0&&Xh(n)}};function Bf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ql(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function My(n,i,a,u,d){if(d){if(typeof u=="function"){var _=u;u=function(){var re=Yl(T);_.call(re)}}var T=ig(i,u,n,0,null,!1,!1,"",og);return n._reactRootContainer=T,n[qi]=T.current,$o(n.nodeType===8?n.parentNode:n),as(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var re=Yl(B);N.call(re)}}var B=Of(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=B,n[qi]=B.current,$o(n.nodeType===8?n.parentNode:n),as(function(){jl(i,B,a,u)}),B}function Kl(n,i,a,u,d){var _=a._reactRootContainer;if(_){var T=_;if(typeof d=="function"){var N=d;d=function(){var B=Yl(T);N.call(B)}}jl(i,T,n,d)}else T=My(a,i,n,d,u);return Yl(T)}Bh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(fn(i,a|1),jn(i,q()),(St&6)===0&&(qs=q()+500,Pr()))}break;case 13:as(function(){var u=Ji(n,1);if(u!==null){var d=Nn();Si(u,n,1,d)}}),kf(n,1)}},cc=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=Nn();Si(i,n,134217728,a)}kf(n,134217728)}},Hh=function(n){if(n.tag===13){var i=Fr(n),a=Ji(n,i);if(a!==null){var u=Nn();Si(a,n,i,u)}kf(n,i)}},Vh=function(){return xt},Gh=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Ce=function(n,i,a){switch(i){case"input":if(ft(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=hl(u);if(!d)throw Error(t(90));It(u),ft(u,d)}}}break;case"textarea":he(n,a);break;case"select":i=a.value,i!=null&&I(n,!!a.multiple,i,!1)}},Nt=Lf,rn=as;var Ey={usingClientEntryPoint:!1,Events:[Zo,Fs,hl,Pe,rt,Lf]},fa={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ty={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qa(n),n===null?null:n.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Qe=Zl.inject(Ty),ze=Zl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey,Yn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(i))throw Error(t(200));return xy(n,i,null,a)},Yn.createRoot=function(n,i){if(!Bf(n))throw Error(t(299));var a=!1,u="",d=sg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Of(n,1,!1,null,null,a,!1,u,d),n[qi]=i.current,$o(n.nodeType===8?n.parentNode:n),new zf(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qa(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return as(n)},Yn.hydrate=function(n,i,a){if(!ql(i))throw Error(t(200));return Kl(null,n,i,!0,a)},Yn.hydrateRoot=function(n,i,a){if(!Bf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,_="",T=sg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=ig(i,null,n,1,a??null,d,!1,_,T),n[qi]=i.current,$o(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new $l(i)},Yn.render=function(n,i,a){if(!ql(i))throw Error(t(200));return Kl(null,n,i,!1,a)},Yn.unmountComponentAtNode=function(n){if(!ql(n))throw Error(t(40));return n._reactRootContainer?(as(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Yn.unstable_batchedUpdates=Lf,Yn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!ql(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,i,a,!1,u)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var mg;function Iy(){if(mg)return Gf.exports;mg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gf.exports=Dy(),Gf.exports}var gg;function Uy(){if(gg)return Ql;gg=1;var r=Iy();return Ql.createRoot=r.createRoot,Ql.hydrateRoot=r.hydrateRoot,Ql}var Ny=Uy();const Fy=q0(Ny),Ra={black:"#000",white:"#fff"},Zs={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Qs={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Js={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},eo={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},to={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ha={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Oy={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Ca(r){let e="https://mui.com/production-error/?code="+r;for(let t=1;t<arguments.length;t+=1)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+r+"; visit "+e+" for the full message."}const ky=Object.freeze(Object.defineProperty({__proto__:null,default:Ca},Symbol.toStringTag,{value:"Module"})),zy="$$material";function Gt(){return Gt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Gt.apply(null,arguments)}function Kr(r,e){if(r==null)return{};var t={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;t[s]=r[s]}return t}function By(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function Hy(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Vy=function(){function r(t){var s=this;this._insertTag=function(o){var l;s.tags.length===0?s.insertionPoint?l=s.insertionPoint.nextSibling:s.prepend?l=s.container.firstChild:l=s.before:l=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(o,l),s.tags.push(o)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(s){s.forEach(this._insertTag)},e.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=By(o);try{l.insertRule(s,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(s));this.ctr++},e.flush=function(){this.tags.forEach(function(s){var o;return(o=s.parentNode)==null?void 0:o.removeChild(s)}),this.tags=[],this.ctr=0},r}(),bn="-ms-",zu="-moz-",Tt="-webkit-",Q0="comm",yh="rule",xh="decl",Gy="@import",J0="@keyframes",Wy="@layer",Xy=Math.abs,$u=String.fromCharCode,jy=Object.assign;function Yy(r,e){return xn(r,0)^45?(((e<<2^xn(r,0))<<2^xn(r,1))<<2^xn(r,2))<<2^xn(r,3):0}function e_(r){return r.trim()}function $y(r,e){return(r=e.exec(r))?r[0]:r}function wt(r,e,t){return r.replace(e,t)}function Cd(r,e){return r.indexOf(e)}function xn(r,e){return r.charCodeAt(e)|0}function ba(r,e,t){return r.slice(e,t)}function Oi(r){return r.length}function Sh(r){return r.length}function Jl(r,e){return e.push(r),r}function qy(r,e){return r.map(e).join("")}var qu=1,wo=1,t_=0,qn=0,nn=0,Lo="";function Ku(r,e,t,s,o,l,c){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:qu,column:wo,length:c,return:""}}function pa(r,e){return jy(Ku("",null,null,"",null,null,0),r,{length:-r.length},e)}function Ky(){return nn}function Zy(){return nn=qn>0?xn(Lo,--qn):0,wo--,nn===10&&(wo=1,qu--),nn}function si(){return nn=qn<t_?xn(Lo,qn++):0,wo++,nn===10&&(wo=1,qu++),nn}function Hi(){return xn(Lo,qn)}function Ru(){return qn}function ka(r,e){return ba(Lo,r,e)}function Pa(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n_(r){return qu=wo=1,t_=Oi(Lo=r),qn=0,[]}function i_(r){return Lo="",r}function Cu(r){return e_(ka(qn-1,bd(r===91?r+2:r===40?r+1:r)))}function Qy(r){for(;(nn=Hi())&&nn<33;)si();return Pa(r)>2||Pa(nn)>3?"":" "}function Jy(r,e){for(;--e&&si()&&!(nn<48||nn>102||nn>57&&nn<65||nn>70&&nn<97););return ka(r,Ru()+(e<6&&Hi()==32&&si()==32))}function bd(r){for(;si();)switch(nn){case r:return qn;case 34:case 39:r!==34&&r!==39&&bd(nn);break;case 40:r===41&&bd(r);break;case 92:si();break}return qn}function ex(r,e){for(;si()&&r+nn!==57;)if(r+nn===84&&Hi()===47)break;return"/*"+ka(e,qn-1)+"*"+$u(r===47?r:si())}function tx(r){for(;!Pa(Hi());)si();return ka(r,qn)}function nx(r){return i_(bu("",null,null,null,[""],r=n_(r),0,[0],r))}function bu(r,e,t,s,o,l,c,f,h){for(var p=0,g=0,m=c,v=0,S=0,E=0,M=1,x=1,y=1,D=0,L="",P=o,V=l,U=s,A=L;x;)switch(E=D,D=si()){case 40:if(E!=108&&xn(A,m-1)==58){Cd(A+=wt(Cu(D),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:A+=Cu(D);break;case 9:case 10:case 13:case 32:A+=Qy(E);break;case 92:A+=Jy(Ru()-1,7);continue;case 47:switch(Hi()){case 42:case 47:Jl(ix(ex(si(),Ru()),e,t),h);break;default:A+="/"}break;case 123*M:f[p++]=Oi(A)*y;case 125*M:case 59:case 0:switch(D){case 0:case 125:x=0;case 59+g:y==-1&&(A=wt(A,/\f/g,"")),S>0&&Oi(A)-m&&Jl(S>32?vg(A+";",s,t,m-1):vg(wt(A," ","")+";",s,t,m-2),h);break;case 59:A+=";";default:if(Jl(U=_g(A,e,t,p,g,o,f,L,P=[],V=[],m),l),D===123)if(g===0)bu(A,e,U,U,P,l,m,f,V);else switch(v===99&&xn(A,3)===110?100:v){case 100:case 108:case 109:case 115:bu(r,U,U,s&&Jl(_g(r,U,U,0,0,o,f,L,o,P=[],m),V),o,V,m,f,s?P:V);break;default:bu(A,U,U,U,[""],V,0,f,V)}}p=g=S=0,M=y=1,L=A="",m=c;break;case 58:m=1+Oi(A),S=E;default:if(M<1){if(D==123)--M;else if(D==125&&M++==0&&Zy()==125)continue}switch(A+=$u(D),D*M){case 38:y=g>0?1:(A+="\f",-1);break;case 44:f[p++]=(Oi(A)-1)*y,y=1;break;case 64:Hi()===45&&(A+=Cu(si())),v=Hi(),g=m=Oi(L=A+=tx(Ru())),D++;break;case 45:E===45&&Oi(A)==2&&(M=0)}}return l}function _g(r,e,t,s,o,l,c,f,h,p,g){for(var m=o-1,v=o===0?l:[""],S=Sh(v),E=0,M=0,x=0;E<s;++E)for(var y=0,D=ba(r,m+1,m=Xy(M=c[E])),L=r;y<S;++y)(L=e_(M>0?v[y]+" "+D:wt(D,/&\f/g,v[y])))&&(h[x++]=L);return Ku(r,e,t,o===0?yh:f,h,p,g)}function ix(r,e,t){return Ku(r,e,t,Q0,$u(Ky()),ba(r,2,-2),0)}function vg(r,e,t,s){return Ku(r,e,t,xh,ba(r,0,s),ba(r,s+1,-1),s)}function xo(r,e){for(var t="",s=Sh(r),o=0;o<s;o++)t+=e(r[o],o,r,e)||"";return t}function rx(r,e,t,s){switch(r.type){case Wy:if(r.children.length)break;case Gy:case xh:return r.return=r.return||r.value;case Q0:return"";case J0:return r.return=r.value+"{"+xo(r.children,s)+"}";case yh:r.value=r.props.join(",")}return Oi(t=xo(r.children,s))?r.return=r.value+"{"+t+"}":""}function sx(r){var e=Sh(r);return function(t,s,o,l){for(var c="",f=0;f<e;f++)c+=r[f](t,s,o,l)||"";return c}}function ox(r){return function(e){e.root||(e=e.return)&&r(e)}}function r_(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var ax=function(e,t,s){for(var o=0,l=0;o=l,l=Hi(),o===38&&l===12&&(t[s]=1),!Pa(l);)si();return ka(e,qn)},lx=function(e,t){var s=-1,o=44;do switch(Pa(o)){case 0:o===38&&Hi()===12&&(t[s]=1),e[s]+=ax(qn-1,t,s);break;case 2:e[s]+=Cu(o);break;case 4:if(o===44){e[++s]=Hi()===58?"&\f":"",t[s]=e[s].length;break}default:e[s]+=$u(o)}while(o=si());return e},ux=function(e,t){return i_(lx(n_(e),t))},yg=new WeakMap,cx=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,s=e.parent,o=e.column===s.column&&e.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!yg.get(s))&&!o){yg.set(e,!0);for(var l=[],c=ux(t,l),f=s.props,h=0,p=0;h<c.length;h++)for(var g=0;g<f.length;g++,p++)e.props[p]=l[h]?c[h].replace(/&\f/g,f[g]):f[g]+" "+c[h]}}},fx=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function s_(r,e){switch(Yy(r,e)){case 5103:return Tt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+r+zu+r+bn+r+r;case 6828:case 4268:return Tt+r+bn+r+r;case 6165:return Tt+r+bn+"flex-"+r+r;case 5187:return Tt+r+wt(r,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+bn+"flex-$1$2")+r;case 5443:return Tt+r+bn+"flex-item-"+wt(r,/flex-|-self/,"")+r;case 4675:return Tt+r+bn+"flex-line-pack"+wt(r,/align-content|flex-|-self/,"")+r;case 5548:return Tt+r+bn+wt(r,"shrink","negative")+r;case 5292:return Tt+r+bn+wt(r,"basis","preferred-size")+r;case 6060:return Tt+"box-"+wt(r,"-grow","")+Tt+r+bn+wt(r,"grow","positive")+r;case 4554:return Tt+wt(r,/([^-])(transform)/g,"$1"+Tt+"$2")+r;case 6187:return wt(wt(wt(r,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),r,"")+r;case 5495:case 3959:return wt(r,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return wt(wt(r,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+r+r;case 4095:case 3583:case 4068:case 2532:return wt(r,/(.+)-inline(.+)/,Tt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Oi(r)-1-e>6)switch(xn(r,e+1)){case 109:if(xn(r,e+4)!==45)break;case 102:return wt(r,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+zu+(xn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Cd(r,"stretch")?s_(wt(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(xn(r,e+1)!==115)break;case 6444:switch(xn(r,Oi(r)-3-(~Cd(r,"!important")&&10))){case 107:return wt(r,":",":"+Tt)+r;case 101:return wt(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Tt+(xn(r,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+bn+"$2box$3")+r}break;case 5936:switch(xn(r,e+11)){case 114:return Tt+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Tt+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Tt+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Tt+r+bn+r+r}return r}var dx=function(e,t,s,o){if(e.length>-1&&!e.return)switch(e.type){case xh:e.return=s_(e.value,e.length);break;case J0:return xo([pa(e,{value:wt(e.value,"@","@"+Tt)})],o);case yh:if(e.length)return qy(e.props,function(l){switch($y(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xo([pa(e,{props:[wt(l,/:(read-\w+)/,":"+zu+"$1")]})],o);case"::placeholder":return xo([pa(e,{props:[wt(l,/:(plac\w+)/,":"+Tt+"input-$1")]}),pa(e,{props:[wt(l,/:(plac\w+)/,":"+zu+"$1")]}),pa(e,{props:[wt(l,/:(plac\w+)/,bn+"input-$1")]})],o)}return""})}},hx=[dx],px=function(e){var t=e.key;if(t==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(M){var x=M.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var o=e.stylisPlugins||hx,l={},c,f=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(M){for(var x=M.getAttribute("data-emotion").split(" "),y=1;y<x.length;y++)l[x[y]]=!0;f.push(M)});var h,p=[cx,fx];{var g,m=[rx,ox(function(M){g.insert(M)})],v=sx(p.concat(o,m)),S=function(x){return xo(nx(x),v)};h=function(x,y,D,L){g=D,S(x?x+"{"+y.styles+"}":y.styles),L&&(E.inserted[y.name]=!0)}}var E={key:t,sheet:new Vy({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:h};return E.sheet.hydrate(f),E},mx=!0;function gx(r,e,t){var s="";return t.split(" ").forEach(function(o){r[o]!==void 0?e.push(r[o]+";"):o&&(s+=o+" ")}),s}var o_=function(e,t,s){var o=e.key+"-"+t.name;(s===!1||mx===!1)&&e.registered[o]===void 0&&(e.registered[o]=t.styles)},_x=function(e,t,s){o_(e,t,s);var o=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var l=t;do e.insert(t===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function vx(r){for(var e=0,t,s=0,o=r.length;o>=4;++s,o-=4)t=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(s+2)&255)<<16;case 2:e^=(r.charCodeAt(s+1)&255)<<8;case 1:e^=r.charCodeAt(s)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xx=/[A-Z]|^ms/g,Sx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a_=function(e){return e.charCodeAt(1)===45},xg=function(e){return e!=null&&typeof e!="boolean"},jf=r_(function(r){return a_(r)?r:r.replace(xx,"-$&").toLowerCase()}),Sg=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Sx,function(s,o,l){return ki={name:o,styles:l,next:ki},o})}return yx[e]!==1&&!a_(e)&&typeof t=="number"&&t!==0?t+"px":t};function La(r,e,t){if(t==null)return"";var s=t;if(s.__emotion_styles!==void 0)return s;switch(typeof t){case"boolean":return"";case"object":{var o=t;if(o.anim===1)return ki={name:o.name,styles:o.styles,next:ki},o.name;var l=t;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)ki={name:c.name,styles:c.styles,next:ki},c=c.next;var f=l.styles+";";return f}return Mx(r,e,t)}case"function":{if(r!==void 0){var h=ki,p=t(r);return ki=h,La(r,e,p)}break}}var g=t;if(e==null)return g;var m=e[g];return m!==void 0?m:g}function Mx(r,e,t){var s="";if(Array.isArray(t))for(var o=0;o<t.length;o++)s+=La(r,e,t[o])+";";else for(var l in t){var c=t[l];if(typeof c!="object"){var f=c;e!=null&&e[f]!==void 0?s+=l+"{"+e[f]+"}":xg(f)&&(s+=jf(l)+":"+Sg(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var h=0;h<c.length;h++)xg(c[h])&&(s+=jf(l)+":"+Sg(l,c[h])+";");else{var p=La(r,e,c);switch(l){case"animation":case"animationName":{s+=jf(l)+":"+p+";";break}default:s+=l+"{"+p+"}"}}}return s}var Mg=/label:\s*([^\s;{]+)\s*(;|$)/g,ki;function Ex(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,o="";ki=void 0;var l=r[0];if(l==null||l.raw===void 0)s=!1,o+=La(t,e,l);else{var c=l;o+=c[0]}for(var f=1;f<r.length;f++)if(o+=La(t,e,r[f]),s){var h=l;o+=h[f]}Mg.lastIndex=0;for(var p="",g;(g=Mg.exec(o))!==null;)p+="-"+g[1];var m=vx(o)+p;return{name:m,styles:o,next:ki}}var Tx=function(e){return e()},wx=fg.useInsertionEffect?fg.useInsertionEffect:!1,Ax=wx||Tx,l_=kt.createContext(typeof HTMLElement<"u"?px({key:"css"}):null);l_.Provider;var Rx=function(e){return kt.forwardRef(function(t,s){var o=kt.useContext(l_);return e(t,o,s)})},u_=kt.createContext({}),Cx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bx=r_(function(r){return Cx.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),Px=bx,Lx=function(e){return e!=="theme"},Eg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Px:Lx},Tg=function(e,t,s){var o;if(t){var l=t.shouldForwardProp;o=e.__emotion_forwardProp&&l?function(c){return e.__emotion_forwardProp(c)&&l(c)}:l}return typeof o!="function"&&s&&(o=e.__emotion_forwardProp),o},Dx=function(e){var t=e.cache,s=e.serialized,o=e.isStringTag;return o_(t,s,o),Ax(function(){return _x(t,s,o)}),null},Ix=function r(e,t){var s=e.__emotion_real===e,o=s&&e.__emotion_base||e,l,c;t!==void 0&&(l=t.label,c=t.target);var f=Tg(e,t,s),h=f||Eg(o),p=!h("as");return function(){var g=arguments,m=s&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&m.push("label:"+l+";"),g[0]==null||g[0].raw===void 0)m.push.apply(m,g);else{var v=g[0];m.push(v[0]);for(var S=g.length,E=1;E<S;E++)m.push(g[E],v[E])}var M=Rx(function(x,y,D){var L=p&&x.as||o,P="",V=[],U=x;if(x.theme==null){U={};for(var A in x)U[A]=x[A];U.theme=kt.useContext(u_)}typeof x.className=="string"?P=gx(y.registered,V,x.className):x.className!=null&&(P=x.className+" ");var F=Ex(m.concat(V),y.registered,U);P+=y.key+"-"+F.name,c!==void 0&&(P+=" "+c);var C=p&&f===void 0?Eg(L):h,w={};for(var z in x)p&&z==="as"||C(z)&&(w[z]=x[z]);return w.className=P,D&&(w.ref=D),kt.createElement(kt.Fragment,null,kt.createElement(Dx,{cache:y,serialized:F,isStringTag:typeof L=="string"}),kt.createElement(L,w))});return M.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",M.defaultProps=e.defaultProps,M.__emotion_real=M,M.__emotion_base=o,M.__emotion_styles=m,M.__emotion_forwardProp=f,Object.defineProperty(M,"toString",{value:function(){return"."+c}}),M.withComponent=function(x,y){var D=r(x,Gt({},t,y,{shouldForwardProp:Tg(M,y,!0)}));return D.apply(void 0,m)},M}},Ux=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Pd=Ix.bind(null);Ux.forEach(function(r){Pd[r]=Pd(r)});function Nx(r,e){return Pd(r,e)}function vs(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function c_(r){if(kt.isValidElement(r)||!vs(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=c_(r[t])}),e}function pr(r,e,t={clone:!0}){const s=t.clone?Gt({},r):r;return vs(r)&&vs(e)&&Object.keys(e).forEach(o=>{kt.isValidElement(e[o])?s[o]=e[o]:vs(e[o])&&Object.prototype.hasOwnProperty.call(r,o)&&vs(r[o])?s[o]=pr(r[o],e[o],t):t.clone?s[o]=vs(e[o])?c_(e[o]):e[o]:s[o]=e[o]}),s}const Fx=["values","unit","step"],Ox=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,s)=>t.val-s.val),e.reduce((t,s)=>Gt({},t,{[s.key]:s.val}),{})};function kx(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:s=5}=r,o=Kr(r,Fx),l=Ox(e),c=Object.keys(l);function f(v){return`@media (min-width:${typeof e[v]=="number"?e[v]:v}${t})`}function h(v){return`@media (max-width:${(typeof e[v]=="number"?e[v]:v)-s/100}${t})`}function p(v,S){const E=c.indexOf(S);return`@media (min-width:${typeof e[v]=="number"?e[v]:v}${t}) and (max-width:${(E!==-1&&typeof e[c[E]]=="number"?e[c[E]]:S)-s/100}${t})`}function g(v){return c.indexOf(v)+1<c.length?p(v,c[c.indexOf(v)+1]):f(v)}function m(v){const S=c.indexOf(v);return S===0?f(c[1]):S===c.length-1?h(c[S]):p(v,c[c.indexOf(v)+1]).replace("@media","@media not all and")}return Gt({keys:c,values:l,up:f,down:h,between:p,only:g,not:m,unit:t},o)}const zx={borderRadius:4};function Ea(r,e){return e?pr(r,e,{clone:!1}):r}const Mh={xs:0,sm:600,md:900,lg:1200,xl:1536},wg={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${Mh[r]}px)`};function gr(r,e,t){const s=r.theme||{};if(Array.isArray(e)){const l=s.breakpoints||wg;return e.reduce((c,f,h)=>(c[l.up(l.keys[h])]=t(e[h]),c),{})}if(typeof e=="object"){const l=s.breakpoints||wg;return Object.keys(e).reduce((c,f)=>{if(Object.keys(l.values||Mh).indexOf(f)!==-1){const h=l.up(f);c[h]=t(e[f],f)}else{const h=f;c[h]=e[h]}return c},{})}return t(e)}function Bx(r={}){var e;return((e=r.keys)==null?void 0:e.reduce((s,o)=>{const l=r.up(o);return s[l]={},s},{}))||{}}function Hx(r,e){return r.reduce((t,s)=>{const o=t[s];return(!o||Object.keys(o).length===0)&&delete t[s],t},e)}function f_(r){if(typeof r!="string")throw new Error(Ca(7));return r.charAt(0).toUpperCase()+r.slice(1)}function Zu(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const s=`vars.${e}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,r);if(s!=null)return s}return e.split(".").reduce((s,o)=>s&&s[o]!=null?s[o]:null,r)}function Bu(r,e,t,s=t){let o;return typeof r=="function"?o=r(t):Array.isArray(r)?o=r[t]||s:o=Zu(r,t)||s,e&&(o=e(o,s,r)),o}function Jt(r){const{prop:e,cssProperty:t=r.prop,themeKey:s,transform:o}=r,l=c=>{if(c[e]==null)return null;const f=c[e],h=c.theme,p=Zu(h,s)||{};return gr(c,f,m=>{let v=Bu(p,o,m);return m===v&&typeof m=="string"&&(v=Bu(p,o,`${e}${m==="default"?"":f_(m)}`,m)),t===!1?v:{[t]:v}})};return l.propTypes={},l.filterProps=[e],l}function Vx(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const Gx={m:"margin",p:"padding"},Wx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ag={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Xx=Vx(r=>{if(r.length>2)if(Ag[r])r=Ag[r];else return[r];const[e,t]=r.split(""),s=Gx[e],o=Wx[t]||"";return Array.isArray(o)?o.map(l=>s+l):[s+o]}),Eh=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Th=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Eh,...Th];function za(r,e,t,s){var o;const l=(o=Zu(r,e,!1))!=null?o:t;return typeof l=="number"?c=>typeof c=="string"?c:l*c:Array.isArray(l)?c=>typeof c=="string"?c:l[c]:typeof l=="function"?l:()=>{}}function d_(r){return za(r,"spacing",8)}function Ba(r,e){if(typeof e=="string"||e==null)return e;const t=Math.abs(e),s=r(t);return e>=0?s:typeof s=="number"?-s:`-${s}`}function jx(r,e){return t=>r.reduce((s,o)=>(s[o]=Ba(e,t),s),{})}function Yx(r,e,t,s){if(e.indexOf(t)===-1)return null;const o=Xx(t),l=jx(o,s),c=r[t];return gr(r,c,l)}function h_(r,e){const t=d_(r.theme);return Object.keys(r).map(s=>Yx(r,e,s,t)).reduce(Ea,{})}function Kt(r){return h_(r,Eh)}Kt.propTypes={};Kt.filterProps=Eh;function Zt(r){return h_(r,Th)}Zt.propTypes={};Zt.filterProps=Th;function $x(r=8){if(r.mui)return r;const e=d_({spacing:r}),t=(...s)=>(s.length===0?[1]:s).map(l=>{const c=e(l);return typeof c=="number"?`${c}px`:c}).join(" ");return t.mui=!0,t}function Qu(...r){const e=r.reduce((s,o)=>(o.filterProps.forEach(l=>{s[l]=o}),s),{}),t=s=>Object.keys(s).reduce((o,l)=>e[l]?Ea(o,e[l](s)):o,{});return t.propTypes={},t.filterProps=r.reduce((s,o)=>s.concat(o.filterProps),[]),t}function pi(r){return typeof r!="number"?r:`${r}px solid`}function mi(r,e){return Jt({prop:r,themeKey:"borders",transform:e})}const qx=mi("border",pi),Kx=mi("borderTop",pi),Zx=mi("borderRight",pi),Qx=mi("borderBottom",pi),Jx=mi("borderLeft",pi),eS=mi("borderColor"),tS=mi("borderTopColor"),nS=mi("borderRightColor"),iS=mi("borderBottomColor"),rS=mi("borderLeftColor"),sS=mi("outline",pi),oS=mi("outlineColor"),Ju=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=za(r.theme,"shape.borderRadius",4),t=s=>({borderRadius:Ba(e,s)});return gr(r,r.borderRadius,t)}return null};Ju.propTypes={};Ju.filterProps=["borderRadius"];Qu(qx,Kx,Zx,Qx,Jx,eS,tS,nS,iS,rS,Ju,sS,oS);const ec=r=>{if(r.gap!==void 0&&r.gap!==null){const e=za(r.theme,"spacing",8),t=s=>({gap:Ba(e,s)});return gr(r,r.gap,t)}return null};ec.propTypes={};ec.filterProps=["gap"];const tc=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=za(r.theme,"spacing",8),t=s=>({columnGap:Ba(e,s)});return gr(r,r.columnGap,t)}return null};tc.propTypes={};tc.filterProps=["columnGap"];const nc=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=za(r.theme,"spacing",8),t=s=>({rowGap:Ba(e,s)});return gr(r,r.rowGap,t)}return null};nc.propTypes={};nc.filterProps=["rowGap"];const aS=Jt({prop:"gridColumn"}),lS=Jt({prop:"gridRow"}),uS=Jt({prop:"gridAutoFlow"}),cS=Jt({prop:"gridAutoColumns"}),fS=Jt({prop:"gridAutoRows"}),dS=Jt({prop:"gridTemplateColumns"}),hS=Jt({prop:"gridTemplateRows"}),pS=Jt({prop:"gridTemplateAreas"}),mS=Jt({prop:"gridArea"});Qu(ec,tc,nc,aS,lS,uS,cS,fS,dS,hS,pS,mS);function So(r,e){return e==="grey"?e:r}const gS=Jt({prop:"color",themeKey:"palette",transform:So}),_S=Jt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:So}),vS=Jt({prop:"backgroundColor",themeKey:"palette",transform:So});Qu(gS,_S,vS);function ii(r){return r<=1&&r!==0?`${r*100}%`:r}const yS=Jt({prop:"width",transform:ii}),wh=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var s,o;const l=((s=r.theme)==null||(s=s.breakpoints)==null||(s=s.values)==null?void 0:s[t])||Mh[t];return l?((o=r.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${l}${r.theme.breakpoints.unit}`}:{maxWidth:l}:{maxWidth:ii(t)}};return gr(r,r.maxWidth,e)}return null};wh.filterProps=["maxWidth"];const xS=Jt({prop:"minWidth",transform:ii}),SS=Jt({prop:"height",transform:ii}),MS=Jt({prop:"maxHeight",transform:ii}),ES=Jt({prop:"minHeight",transform:ii});Jt({prop:"size",cssProperty:"width",transform:ii});Jt({prop:"size",cssProperty:"height",transform:ii});const TS=Jt({prop:"boxSizing"});Qu(yS,wh,xS,SS,MS,ES,TS);const ic={border:{themeKey:"borders",transform:pi},borderTop:{themeKey:"borders",transform:pi},borderRight:{themeKey:"borders",transform:pi},borderBottom:{themeKey:"borders",transform:pi},borderLeft:{themeKey:"borders",transform:pi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:pi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ju},color:{themeKey:"palette",transform:So},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:So},backgroundColor:{themeKey:"palette",transform:So},p:{style:Zt},pt:{style:Zt},pr:{style:Zt},pb:{style:Zt},pl:{style:Zt},px:{style:Zt},py:{style:Zt},padding:{style:Zt},paddingTop:{style:Zt},paddingRight:{style:Zt},paddingBottom:{style:Zt},paddingLeft:{style:Zt},paddingX:{style:Zt},paddingY:{style:Zt},paddingInline:{style:Zt},paddingInlineStart:{style:Zt},paddingInlineEnd:{style:Zt},paddingBlock:{style:Zt},paddingBlockStart:{style:Zt},paddingBlockEnd:{style:Zt},m:{style:Kt},mt:{style:Kt},mr:{style:Kt},mb:{style:Kt},ml:{style:Kt},mx:{style:Kt},my:{style:Kt},margin:{style:Kt},marginTop:{style:Kt},marginRight:{style:Kt},marginBottom:{style:Kt},marginLeft:{style:Kt},marginX:{style:Kt},marginY:{style:Kt},marginInline:{style:Kt},marginInlineStart:{style:Kt},marginInlineEnd:{style:Kt},marginBlock:{style:Kt},marginBlockStart:{style:Kt},marginBlockEnd:{style:Kt},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ec},rowGap:{style:nc},columnGap:{style:tc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ii},maxWidth:{style:wh},minWidth:{transform:ii},height:{transform:ii},maxHeight:{transform:ii},minHeight:{transform:ii},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function wS(...r){const e=r.reduce((s,o)=>s.concat(Object.keys(o)),[]),t=new Set(e);return r.every(s=>t.size===Object.keys(s).length)}function AS(r,e){return typeof r=="function"?r(e):r}function RS(){function r(t,s,o,l){const c={[t]:s,theme:o},f=l[t];if(!f)return{[t]:s};const{cssProperty:h=t,themeKey:p,transform:g,style:m}=f;if(s==null)return null;if(p==="typography"&&s==="inherit")return{[t]:s};const v=Zu(o,p)||{};return m?m(c):gr(c,s,E=>{let M=Bu(v,g,E);return E===M&&typeof E=="string"&&(M=Bu(v,g,`${t}${E==="default"?"":f_(E)}`,E)),h===!1?M:{[h]:M}})}function e(t){var s;const{sx:o,theme:l={}}=t||{};if(!o)return null;const c=(s=l.unstable_sxConfig)!=null?s:ic;function f(h){let p=h;if(typeof h=="function")p=h(l);else if(typeof h!="object")return h;if(!p)return null;const g=Bx(l.breakpoints),m=Object.keys(g);let v=g;return Object.keys(p).forEach(S=>{const E=AS(p[S],l);if(E!=null)if(typeof E=="object")if(c[S])v=Ea(v,r(S,E,l,c));else{const M=gr({theme:l},E,x=>({[S]:x}));wS(M,E)?v[S]=e({sx:E,theme:l}):v=Ea(v,M)}else v=Ea(v,r(S,E,l,c))}),Hx(m,v)}return Array.isArray(o)?o.map(f):f(o)}return e}const rc=RS();rc.filterProps=["sx"];function CS(r,e){const t=this;return t.vars&&typeof t.getColorSchemeSelector=="function"?{[t.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:t.palette.mode===r?e:{}}const bS=["breakpoints","palette","spacing","shape"];function p_(r={},...e){const{breakpoints:t={},palette:s={},spacing:o,shape:l={}}=r,c=Kr(r,bS),f=kx(t),h=$x(o);let p=pr({breakpoints:f,direction:"ltr",components:{},palette:Gt({mode:"light"},s),spacing:h,shape:Gt({},zx,l)},c);return p.applyStyles=CS,p=e.reduce((g,m)=>pr(g,m),p),p.unstable_sxConfig=Gt({},ic,c==null?void 0:c.unstable_sxConfig),p.unstable_sx=function(m){return rc({sx:m,theme:this})},p}function PS(r){return Object.keys(r).length===0}function LS(r=null){const e=kt.useContext(u_);return!e||PS(e)?r:e}const DS=p_();function IS(r=DS){return LS(r)}const US=["sx"],NS=r=>{var e,t;const s={systemProps:{},otherProps:{}},o=(e=r==null||(t=r.theme)==null?void 0:t.unstable_sxConfig)!=null?e:ic;return Object.keys(r).forEach(l=>{o[l]?s.systemProps[l]=r[l]:s.otherProps[l]=r[l]}),s};function FS(r){const{sx:e}=r,t=Kr(r,US),{systemProps:s,otherProps:o}=NS(t);let l;return Array.isArray(e)?l=[s,...e]:typeof e=="function"?l=(...c)=>{const f=e(...c);return vs(f)?Gt({},s,f):s}:l=Gt({},s,e),Gt({},o,{sx:l})}const Rg=r=>r,OS=()=>{let r=Rg;return{configure(e){r=e},generate(e){return r(e)},reset(){r=Rg}}},m_=OS();function g_(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=g_(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function kS(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=g_(r))&&(s&&(s+=" "),s+=e);return s}const zS=["className","component"];function BS(r={}){const{themeId:e,defaultTheme:t,defaultClassName:s="MuiBox-root",generateClassName:o}=r,l=Nx("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(rc);return kt.forwardRef(function(h,p){const g=IS(t),m=FS(h),{className:v,component:S="div"}=m,E=Kr(m,zS);return wi.jsx(l,Gt({as:S,ref:p,className:kS(v,o?o(s):s),theme:e&&g[e]||g},E))})}const HS={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function VS(r,e,t="Mui"){const s=HS[e];return s?`${t}-${s}`:`${m_.generate(r)}-${e}`}function GS(r,e,t="Mui"){const s={};return e.forEach(o=>{s[o]=VS(r,o,t)}),s}function WS(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:WS},Symbol.toStringTag,{value:"Module"}));function jS(r,e){return Gt({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},e)}var jt={},Yf={exports:{}},Cg;function YS(){return Cg||(Cg=1,function(r){function e(t){return t&&t.__esModule?t:{default:t}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Yf)),Yf.exports}const $S=K0(ky),qS=K0(XS);var bg;function KS(){if(bg)return jt;bg=1;var r=YS();Object.defineProperty(jt,"__esModule",{value:!0}),jt.alpha=E,jt.blend=U,jt.colorChannel=void 0,jt.darken=x,jt.decomposeColor=c,jt.emphasize=P,jt.getContrastRatio=S,jt.getLuminance=v,jt.hexToRgb=o,jt.hslToRgb=m,jt.lighten=D,jt.private_safeAlpha=M,jt.private_safeColorChannel=void 0,jt.private_safeDarken=y,jt.private_safeEmphasize=V,jt.private_safeLighten=L,jt.recomposeColor=p,jt.rgbToHex=g;var e=r($S),t=r(qS);function s(A,F=0,C=1){return(0,t.default)(A,F,C)}function o(A){A=A.slice(1);const F=new RegExp(`.{1,${A.length>=6?2:1}}`,"g");let C=A.match(F);return C&&C[0].length===1&&(C=C.map(w=>w+w)),C?`rgb${C.length===4?"a":""}(${C.map((w,z)=>z<3?parseInt(w,16):Math.round(parseInt(w,16)/255*1e3)/1e3).join(", ")})`:""}function l(A){const F=A.toString(16);return F.length===1?`0${F}`:F}function c(A){if(A.type)return A;if(A.charAt(0)==="#")return c(o(A));const F=A.indexOf("("),C=A.substring(0,F);if(["rgb","rgba","hsl","hsla","color"].indexOf(C)===-1)throw new Error((0,e.default)(9,A));let w=A.substring(F+1,A.length-1),z;if(C==="color"){if(w=w.split(" "),z=w.shift(),w.length===4&&w[3].charAt(0)==="/"&&(w[3]=w[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(z)===-1)throw new Error((0,e.default)(10,z))}else w=w.split(",");return w=w.map(ie=>parseFloat(ie)),{type:C,values:w,colorSpace:z}}const f=A=>{const F=c(A);return F.values.slice(0,3).map((C,w)=>F.type.indexOf("hsl")!==-1&&w!==0?`${C}%`:C).join(" ")};jt.colorChannel=f;const h=(A,F)=>{try{return f(A)}catch{return A}};jt.private_safeColorChannel=h;function p(A){const{type:F,colorSpace:C}=A;let{values:w}=A;return F.indexOf("rgb")!==-1?w=w.map((z,ie)=>ie<3?parseInt(z,10):z):F.indexOf("hsl")!==-1&&(w[1]=`${w[1]}%`,w[2]=`${w[2]}%`),F.indexOf("color")!==-1?w=`${C} ${w.join(" ")}`:w=`${w.join(", ")}`,`${F}(${w})`}function g(A){if(A.indexOf("#")===0)return A;const{values:F}=c(A);return`#${F.map((C,w)=>l(w===3?Math.round(255*C):C)).join("")}`}function m(A){A=c(A);const{values:F}=A,C=F[0],w=F[1]/100,z=F[2]/100,ie=w*Math.min(z,1-z),K=(te,de=(te+C/30)%12)=>z-ie*Math.max(Math.min(de-3,9-de,1),-1);let ae="rgb";const ue=[Math.round(K(0)*255),Math.round(K(8)*255),Math.round(K(4)*255)];return A.type==="hsla"&&(ae+="a",ue.push(F[3])),p({type:ae,values:ue})}function v(A){A=c(A);let F=A.type==="hsl"||A.type==="hsla"?c(m(A)).values:A.values;return F=F.map(C=>(A.type!=="color"&&(C/=255),C<=.03928?C/12.92:((C+.055)/1.055)**2.4)),Number((.2126*F[0]+.7152*F[1]+.0722*F[2]).toFixed(3))}function S(A,F){const C=v(A),w=v(F);return(Math.max(C,w)+.05)/(Math.min(C,w)+.05)}function E(A,F){return A=c(A),F=s(F),(A.type==="rgb"||A.type==="hsl")&&(A.type+="a"),A.type==="color"?A.values[3]=`/${F}`:A.values[3]=F,p(A)}function M(A,F,C){try{return E(A,F)}catch{return A}}function x(A,F){if(A=c(A),F=s(F),A.type.indexOf("hsl")!==-1)A.values[2]*=1-F;else if(A.type.indexOf("rgb")!==-1||A.type.indexOf("color")!==-1)for(let C=0;C<3;C+=1)A.values[C]*=1-F;return p(A)}function y(A,F,C){try{return x(A,F)}catch{return A}}function D(A,F){if(A=c(A),F=s(F),A.type.indexOf("hsl")!==-1)A.values[2]+=(100-A.values[2])*F;else if(A.type.indexOf("rgb")!==-1)for(let C=0;C<3;C+=1)A.values[C]+=(255-A.values[C])*F;else if(A.type.indexOf("color")!==-1)for(let C=0;C<3;C+=1)A.values[C]+=(1-A.values[C])*F;return p(A)}function L(A,F,C){try{return D(A,F)}catch{return A}}function P(A,F=.15){return v(A)>.5?x(A,F):D(A,F)}function V(A,F,C){try{return P(A,F)}catch{return A}}function U(A,F,C,w=1){const z=(ue,te)=>Math.round((ue**(1/w)*(1-C)+te**(1/w)*C)**w),ie=c(A),K=c(F),ae=[z(ie.values[0],K.values[0]),z(ie.values[1],K.values[1]),z(ie.values[2],K.values[2])];return p({type:"rgb",values:ae})}return jt}var Ld=KS();const ZS=["mode","contrastThreshold","tonalOffset"],Pg={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ra.white,default:Ra.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},$f={text:{primary:Ra.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ra.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Lg(r,e,t,s){const o=s.light||s,l=s.dark||s*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Ld.lighten(r.main,o):e==="dark"&&(r.dark=Ld.darken(r.main,l)))}function QS(r="light"){return r==="dark"?{main:Js[200],light:Js[50],dark:Js[400]}:{main:Js[700],light:Js[400],dark:Js[800]}}function JS(r="light"){return r==="dark"?{main:Qs[200],light:Qs[50],dark:Qs[400]}:{main:Qs[500],light:Qs[300],dark:Qs[700]}}function eM(r="light"){return r==="dark"?{main:Zs[500],light:Zs[300],dark:Zs[700]}:{main:Zs[700],light:Zs[400],dark:Zs[800]}}function tM(r="light"){return r==="dark"?{main:eo[400],light:eo[300],dark:eo[700]}:{main:eo[700],light:eo[500],dark:eo[900]}}function nM(r="light"){return r==="dark"?{main:to[400],light:to[300],dark:to[700]}:{main:to[800],light:to[500],dark:to[900]}}function iM(r="light"){return r==="dark"?{main:ha[400],light:ha[300],dark:ha[700]}:{main:"#ed6c02",light:ha[500],dark:ha[900]}}function rM(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:s=.2}=r,o=Kr(r,ZS),l=r.primary||QS(e),c=r.secondary||JS(e),f=r.error||eM(e),h=r.info||tM(e),p=r.success||nM(e),g=r.warning||iM(e);function m(M){return Ld.getContrastRatio(M,$f.text.primary)>=t?$f.text.primary:Pg.text.primary}const v=({color:M,name:x,mainShade:y=500,lightShade:D=300,darkShade:L=700})=>{if(M=Gt({},M),!M.main&&M[y]&&(M.main=M[y]),!M.hasOwnProperty("main"))throw new Error(Ca(11,x?` (${x})`:"",y));if(typeof M.main!="string")throw new Error(Ca(12,x?` (${x})`:"",JSON.stringify(M.main)));return Lg(M,"light",D,s),Lg(M,"dark",L,s),M.contrastText||(M.contrastText=m(M.main)),M},S={dark:$f,light:Pg};return pr(Gt({common:Gt({},Ra),mode:e,primary:v({color:l,name:"primary"}),secondary:v({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:v({color:f,name:"error"}),warning:v({color:g,name:"warning"}),info:v({color:h,name:"info"}),success:v({color:p,name:"success"}),grey:Oy,contrastThreshold:t,getContrastText:m,augmentColor:v,tonalOffset:s},S[e]),o)}const sM=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function oM(r){return Math.round(r*1e5)/1e5}const Dg={textTransform:"uppercase"},Ig='"Roboto", "Helvetica", "Arial", sans-serif';function aM(r,e){const t=typeof e=="function"?e(r):e,{fontFamily:s=Ig,fontSize:o=14,fontWeightLight:l=300,fontWeightRegular:c=400,fontWeightMedium:f=500,fontWeightBold:h=700,htmlFontSize:p=16,allVariants:g,pxToRem:m}=t,v=Kr(t,sM),S=o/14,E=m||(y=>`${y/p*S}rem`),M=(y,D,L,P,V)=>Gt({fontFamily:s,fontWeight:y,fontSize:E(D),lineHeight:L},s===Ig?{letterSpacing:`${oM(P/D)}em`}:{},V,g),x={h1:M(l,96,1.167,-1.5),h2:M(l,60,1.2,-.5),h3:M(c,48,1.167,0),h4:M(c,34,1.235,.25),h5:M(c,24,1.334,0),h6:M(f,20,1.6,.15),subtitle1:M(c,16,1.75,.15),subtitle2:M(f,14,1.57,.1),body1:M(c,16,1.5,.15),body2:M(c,14,1.43,.15),button:M(f,14,1.75,.4,Dg),caption:M(c,12,1.66,.4),overline:M(c,12,2.66,1,Dg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return pr(Gt({htmlFontSize:p,pxToRem:E,fontFamily:s,fontSize:o,fontWeightLight:l,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:h},x),v,{clone:!1})}const lM=.2,uM=.14,cM=.12;function Ht(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${lM})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${uM})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${cM})`].join(",")}const fM=["none",Ht(0,2,1,-1,0,1,1,0,0,1,3,0),Ht(0,3,1,-2,0,2,2,0,0,1,5,0),Ht(0,3,3,-2,0,3,4,0,0,1,8,0),Ht(0,2,4,-1,0,4,5,0,0,1,10,0),Ht(0,3,5,-1,0,5,8,0,0,1,14,0),Ht(0,3,5,-1,0,6,10,0,0,1,18,0),Ht(0,4,5,-2,0,7,10,1,0,2,16,1),Ht(0,5,5,-3,0,8,10,1,0,3,14,2),Ht(0,5,6,-3,0,9,12,1,0,3,16,2),Ht(0,6,6,-3,0,10,14,1,0,4,18,3),Ht(0,6,7,-4,0,11,15,1,0,4,20,3),Ht(0,7,8,-4,0,12,17,2,0,5,22,4),Ht(0,7,8,-4,0,13,19,2,0,5,24,4),Ht(0,7,9,-4,0,14,21,2,0,5,26,4),Ht(0,8,9,-5,0,15,22,2,0,6,28,5),Ht(0,8,10,-5,0,16,24,2,0,6,30,5),Ht(0,8,11,-5,0,17,26,2,0,6,32,5),Ht(0,9,11,-5,0,18,28,2,0,7,34,6),Ht(0,9,12,-6,0,19,29,2,0,7,36,6),Ht(0,10,13,-6,0,20,31,3,0,8,38,7),Ht(0,10,13,-6,0,21,33,3,0,8,40,7),Ht(0,10,14,-6,0,22,35,3,0,8,42,7),Ht(0,11,14,-7,0,23,36,3,0,9,44,8),Ht(0,11,15,-7,0,24,38,3,0,9,46,8)],dM=["duration","easing","delay"],hM={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},pM={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ug(r){return`${Math.round(r)}ms`}function mM(r){if(!r)return 0;const e=r/36;return Math.round((4+15*e**.25+e/5)*10)}function gM(r){const e=Gt({},hM,r.easing),t=Gt({},pM,r.duration);return Gt({getAutoHeightDuration:mM,create:(o=["all"],l={})=>{const{duration:c=t.standard,easing:f=e.easeInOut,delay:h=0}=l;return Kr(l,dM),(Array.isArray(o)?o:[o]).map(p=>`${p} ${typeof c=="string"?c:Ug(c)} ${f} ${typeof h=="string"?h:Ug(h)}`).join(",")}},r,{easing:e,duration:t})}const _M={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},vM=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function yM(r={},...e){const{mixins:t={},palette:s={},transitions:o={},typography:l={}}=r,c=Kr(r,vM);if(r.vars&&r.generateCssVars===void 0)throw new Error(Ca(18));const f=rM(s),h=p_(r);let p=pr(h,{mixins:jS(h.breakpoints,t),palette:f,shadows:fM.slice(),typography:aM(f,l),transitions:gM(o),zIndex:Gt({},_M)});return p=pr(p,c),p=e.reduce((g,m)=>pr(g,m),p),p.unstable_sxConfig=Gt({},ic,c==null?void 0:c.unstable_sxConfig),p.unstable_sx=function(m){return rc({sx:m,theme:this})},p}const xM=GS("MuiBox",["root"]),SM=yM(),MM=BS({themeId:zy,defaultTheme:SM,defaultClassName:xM.root,generateClassName:m_.generate});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="176",Mo={ROTATE:0,DOLLY:1,PAN:2},vo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,Ng=1,TM=2,__=1,wM=2,ur=3,_r=0,zn=1,fr=2,Yr=0,Eo=1,Fg=2,Og=3,kg=4,AM=5,ys=100,RM=101,CM=102,bM=103,PM=104,LM=200,DM=201,IM=202,UM=203,Dd=204,Id=205,NM=206,FM=207,OM=208,kM=209,zM=210,BM=211,HM=212,VM=213,GM=214,Ud=0,Nd=1,Fd=2,Ao=3,Od=4,kd=5,zd=6,Bd=7,Rh=0,WM=1,XM=2,$r=0,jM=1,YM=2,$M=3,qM=4,KM=5,ZM=6,QM=7,v_=300,Ro=301,Co=302,Hd=303,Vd=304,sc=306,Hu=1e3,Ss=1001,Gd=1002,Ci=1003,JM=1004,eu=1005,Bi=1006,qf=1007,Ms=1008,Gi=1009,y_=1010,x_=1011,Da=1012,Ch=1013,Es=1014,dr=1015,Ha=1016,bh=1017,Ph=1018,Ia=1020,S_=35902,M_=1021,E_=1022,Ri=1023,Ua=1026,Na=1027,T_=1028,Lh=1029,w_=1030,Dh=1031,Ih=1033,Pu=33776,Lu=33777,Du=33778,Iu=33779,Wd=35840,Xd=35841,jd=35842,Yd=35843,$d=36196,qd=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,uh=37820,ch=37821,Uu=36492,fh=36494,dh=36495,A_=36283,hh=36284,ph=36285,mh=36286,eE=3200,tE=3201,Uh=0,nE=1,jr="",Pn="srgb",bo="srgb-linear",Vu="linear",Ct="srgb",no=7680,zg=519,iE=512,rE=513,sE=514,R_=515,oE=516,aE=517,lE=518,uE=519,Bg=35044,Hg="300 es",hr=2e3,Gu=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vg=1234567;const Ta=Math.PI/180,Fa=180/Math.PI;function Do(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Nh(r,e){return(r%e+e)%e}function cE(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function fE(r,e,t){return r!==e?(t-r)/(e-r):0}function wa(r,e,t){return(1-t)*r+t*e}function dE(r,e,t,s){return wa(r,e,1-Math.exp(-t*s))}function hE(r,e=1){return e-Math.abs(Nh(r,e*2)-e)}function pE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _E(r,e){return r+Math.random()*(e-r)}function vE(r){return r*(.5-Math.random())}function yE(r){r!==void 0&&(Vg=r);let e=Vg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xE(r){return r*Ta}function SE(r){return r*Fa}function ME(r){return(r&r-1)===0&&r!==0}function EE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wE(r,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),g=c((e+s)/2),m=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(o){case"XYX":r.set(f*g,h*m,h*v,f*p);break;case"YZY":r.set(h*v,f*g,h*m,f*p);break;case"ZXZ":r.set(h*m,h*v,f*g,f*p);break;case"XZX":r.set(f*g,h*E,h*S,f*p);break;case"YXY":r.set(h*S,f*g,h*E,f*p);break;case"ZYZ":r.set(h*E,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function _o(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nu={DEG2RAD:Ta,RAD2DEG:Fa,generateUUID:Do,clamp:pt,euclideanModulo:Nh,mapLinear:cE,inverseLerp:fE,lerp:wa,damp:dE,pingpong:hE,smoothstep:pE,smootherstep:mE,randInt:gE,randFloat:_E,randFloatSpread:vE,seededRandom:yE,degToRad:xE,radToDeg:SE,isPowerOfTwo:ME,ceilPowerOfTwo:EE,floorPowerOfTwo:TE,setQuaternionFromProperEuler:wE,normalize:Fn,denormalize:_o};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,s,o,l,c,f,h,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],g=s[4],m=s[7],v=s[2],S=s[5],E=s[8],M=o[0],x=o[3],y=o[6],D=o[1],L=o[4],P=o[7],V=o[2],U=o[5],A=o[8];return l[0]=c*M+f*D+h*V,l[3]=c*x+f*L+h*U,l[6]=c*y+f*P+h*A,l[1]=p*M+g*D+m*V,l[4]=p*x+g*L+m*U,l[7]=p*y+g*P+m*A,l[2]=v*M+S*D+E*V,l[5]=v*x+S*L+E*U,l[8]=v*y+S*P+E*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-s*l*g+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],m=g*c-f*p,v=f*h-g*l,S=p*l-c*h,E=t*m+s*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(o*p-g*s)*M,e[2]=(f*s-o*c)*M,e[3]=v*M,e[4]=(g*t-o*h)*M,e[5]=(o*l-f*t)*M,e[6]=S*M,e[7]=(s*h-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Kf.makeScale(e,t)),this}rotate(e){return this.premultiply(Kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new at;function C_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AE(){const r=Oa("canvas");return r.style.display="block",r}const Gg={};function Fu(r){r in Gg||(Gg[r]=!0,console.warn(r))}function RE(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function CE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wg=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PE(){const r={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ct&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(o.r=To(o.r),o.g=To(o.g),o.b=To(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Vu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[bo]:{primaries:e,whitePoint:s,transfer:Vu,toXYZ:Wg,fromXYZ:Xg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:s,transfer:Ct,toXYZ:Wg,fromXYZ:Xg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}const Et=PE();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function To(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let io;class LE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{io===void 0&&(io=Oa("canvas")),io.width=e.width,io.height=e.height;const o=io.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=io}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=mr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(mr(t[s]/255)*255):t[s]=mr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class Fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Zf(o[c].image)):l.push(Zf(o[c]))}else l=Zf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Zf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;class Bn extends As{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,s=Ss,o=Ss,l=Bi,c=Ms,f=Ri,h=Gi,p=Bn.DEFAULT_ANISOTROPY,g=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Do(),this.name="",this.source=new Fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hu:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hu:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=v_;Bn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,s=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],g=h[4],m=h[8],v=h[1],S=h[5],E=h[9],M=h[2],x=h[6],y=h[10];if(Math.abs(g-v)<.01&&Math.abs(m-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,P=(S+1)/2,V=(y+1)/2,U=(g+v)/4,A=(m+M)/4,F=(E+x)/4;return L>P&&L>V?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=U/s,l=A/s):P>V?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=U/o,l=F/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=A/l,o=F/l),this.set(s,o,l,t),this}let D=Math.sqrt((x-E)*(x-E)+(m-M)*(m-M)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(x-E)/D,this.y=(m-M)/D,this.z=(v-g)/D,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends As{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Bn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Fh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends UE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class b_ extends Bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NE extends Bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];const v=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(m!==M||h!==v||p!==S||g!==E){let x=1-f;const y=h*v+p*S+g*E+m*M,D=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const V=Math.sqrt(L),U=Math.atan2(V,y*D);x=Math.sin(x*U)/V,f=Math.sin(f*U)/V}const P=f*D;if(h=h*x+v*P,p=p*x+S*P,g=g*x+E*P,m=m*x+M*P,x===1-f){const V=1/Math.sqrt(h*h+p*p+g*g+m*m);h*=V,p*=V,g*=V,m*=V}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],g=s[o+3],m=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*m+h*S-p*v,e[t+1]=h*E+g*v+p*m-f*S,e[t+2]=p*E+g*S+f*v-h*m,e[t+3]=g*E-f*m-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(o/2),m=f(l/2),v=h(s/2),S=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=v*g*m+p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m-v*S*E;break;case"YXZ":this._x=v*g*m+p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m+v*S*E;break;case"ZXY":this._x=v*g*m-p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m-v*S*E;break;case"ZYX":this._x=v*g*m-p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m+v*S*E;break;case"YZX":this._x=v*g*m+p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m-v*S*E;break;case"XZY":this._x=v*g*m-p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],m=t[10],v=s+f+m;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>m){const S=2*Math.sqrt(1+s-f-m);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>m){const S=2*Math.sqrt(1+f-s-m);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+m-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-s*p,this._z=l*g+c*p+s*h-o*f,this._w=c*g-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),m=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=c*m+this._w*v,this._x=s*m+this._x*v,this._y=o*m+this._y*v,this._z=l*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,s=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),g=2*(f*t-l*o),m=2*(l*s-c*t);return this.x=t+h*p+c*m-f*g,this.y=s+h*g+f*p-l*m,this.z=o+h*m+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new X,jg=new Ts;class ws{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tu.copy(s.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),nu.subVectors(this.max,ma),ro.subVectors(e.a,ma),so.subVectors(e.b,ma),oo.subVectors(e.c,ma),Br.subVectors(so,ro),Hr.subVectors(oo,so),fs.subVectors(ro,oo);let t=[0,-Br.z,Br.y,0,-Hr.z,Hr.y,0,-fs.z,fs.y,Br.z,0,-Br.x,Hr.z,0,-Hr.x,fs.z,0,-fs.x,-Br.y,Br.x,0,-Hr.y,Hr.x,0,-fs.y,fs.x,0];return!Jf(t,ro,so,oo,nu)||(t=[1,0,0,0,1,0,0,0,1],!Jf(t,ro,so,oo,nu))?!1:(iu.crossVectors(Br,Hr),t=[iu.x,iu.y,iu.z],Jf(t,ro,so,oo,nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new X,new X,new X,new X,new X,new X,new X,new X],Mi=new X,tu=new ws,ro=new X,so=new X,oo=new X,Br=new X,Hr=new X,fs=new X,ma=new X,nu=new X,iu=new X,ds=new X;function Jf(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){ds.fromArray(r,l);const f=o.x*Math.abs(ds.x)+o.y*Math.abs(ds.y)+o.z*Math.abs(ds.z),h=e.dot(ds),p=t.dot(ds),g=s.dot(ds);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const FE=new ws,ga=new X,ed=new X;class Va{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):FE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ga,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(ed)),this.expandByPoint(ga.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new X,td=new X,ru=new X,Vr=new X,nd=new X,su=new X,id=new X;class oc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){td.copy(e).add(t).multiplyScalar(.5),ru.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(td);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ru),f=Vr.dot(this.direction),h=-Vr.dot(ru),p=Vr.lengthSq(),g=Math.abs(1-c*c);let m,v,S,E;if(g>0)if(m=c*h-f,v=c*f-h,E=l*g,m>=0)if(v>=-E)if(v<=E){const M=1/g;m*=M,v*=M,S=m*(m+c*v+2*f)+v*(c*m+v+2*h)+p}else v=l,m=Math.max(0,-(c*v+f)),S=-m*m+v*(v+2*h)+p;else v=-l,m=Math.max(0,-(c*v+f)),S=-m*m+v*(v+2*h)+p;else v<=-E?(m=Math.max(0,-(-c*l+f)),v=m>0?-l:Math.min(Math.max(-l,-h),l),S=-m*m+v*(v+2*h)+p):v<=E?(m=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(m=Math.max(0,-(c*l+f)),v=m>0?l:Math.min(Math.max(-l,-h),l),S=-m*m+v*(v+2*h)+p);else v=c>0?-l:l,m=Math.max(0,-(c*v+f)),S=-m*m+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(td).addScaledVector(ru,v),S}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const s=rr.dot(this.direction),o=rr.dot(rr)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),m>=0?(f=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(f=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,s,o,l){nd.subVectors(t,e),su.subVectors(s,e),id.crossVectors(nd,su);let c=this.direction.dot(id),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const h=f*this.direction.dot(su.crossVectors(Vr,su));if(h<0)return null;const p=f*this.direction.dot(nd.cross(Vr));if(p<0||h+p>c)return null;const g=-f*Vr.dot(id);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,s,o,l,c,f,h,p,g,m,v,S,E,M,x){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,g,m,v,S,E,M,x)}set(e,t,s,o,l,c,f,h,p,g,m,v,S,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=p,y[6]=g,y[10]=m,y[14]=v,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/ao.setFromMatrixColumn(e,0).length(),l=1/ao.setFromMatrixColumn(e,1).length(),c=1/ao.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),m=Math.sin(l);if(e.order==="XYZ"){const v=c*g,S=c*m,E=f*g,M=f*m;t[0]=h*g,t[4]=-h*m,t[8]=p,t[1]=S+E*p,t[5]=v-M*p,t[9]=-f*h,t[2]=M-v*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const v=h*g,S=h*m,E=p*g,M=p*m;t[0]=v+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*m,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=M+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*g,S=h*m,E=p*g,M=p*m;t[0]=v-M*f,t[4]=-c*m,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=M-v*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*g,S=c*m,E=f*g,M=f*m;t[0]=h*g,t[4]=E*p-S,t[8]=v*p+M,t[1]=h*m,t[5]=M*p+v,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*g,t[4]=M-v*m,t[8]=E*m+S,t[1]=m,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*m+E,t[10]=v-M*m}else if(e.order==="XZY"){const v=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*g,t[4]=-m,t[8]=p*g,t[1]=v*m+M,t[5]=c*g,t[9]=S*m-E,t[2]=E*m-S,t[6]=f*g,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,kE)}lookAt(e,t,s){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Gr.crossVectors(s,ei),Gr.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Gr.crossVectors(s,ei)),Gr.normalize(),ou.crossVectors(ei,Gr),o[0]=Gr.x,o[4]=ou.x,o[8]=ei.x,o[1]=Gr.y,o[5]=ou.y,o[9]=ei.y,o[2]=Gr.z,o[6]=ou.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],g=s[1],m=s[5],v=s[9],S=s[13],E=s[2],M=s[6],x=s[10],y=s[14],D=s[3],L=s[7],P=s[11],V=s[15],U=o[0],A=o[4],F=o[8],C=o[12],w=o[1],z=o[5],ie=o[9],K=o[13],ae=o[2],ue=o[6],te=o[10],de=o[14],k=o[3],se=o[7],Z=o[11],O=o[15];return l[0]=c*U+f*w+h*ae+p*k,l[4]=c*A+f*z+h*ue+p*se,l[8]=c*F+f*ie+h*te+p*Z,l[12]=c*C+f*K+h*de+p*O,l[1]=g*U+m*w+v*ae+S*k,l[5]=g*A+m*z+v*ue+S*se,l[9]=g*F+m*ie+v*te+S*Z,l[13]=g*C+m*K+v*de+S*O,l[2]=E*U+M*w+x*ae+y*k,l[6]=E*A+M*z+x*ue+y*se,l[10]=E*F+M*ie+x*te+y*Z,l[14]=E*C+M*K+x*de+y*O,l[3]=D*U+L*w+P*ae+V*k,l[7]=D*A+L*z+P*ue+V*se,l[11]=D*F+L*ie+P*te+V*Z,l[15]=D*C+L*K+P*de+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],m=e[6],v=e[10],S=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+l*h*m-o*p*m-l*f*v+s*p*v+o*f*S-s*h*S)+M*(+t*h*S-t*p*v+l*c*v-o*c*S+o*p*g-l*h*g)+x*(+t*p*m-t*f*S-l*c*m+s*c*S+l*f*g-s*p*g)+y*(-o*f*g-t*h*m+t*f*v+o*c*m-s*c*v+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],m=e[9],v=e[10],S=e[11],E=e[12],M=e[13],x=e[14],y=e[15],D=m*x*p-M*v*p+M*h*S-f*x*S-m*h*y+f*v*y,L=E*v*p-g*x*p-E*h*S+c*x*S+g*h*y-c*v*y,P=g*M*p-E*m*p+E*f*S-c*M*S-g*f*y+c*m*y,V=E*m*h-g*M*h-E*f*v+c*M*v+g*f*x-c*m*x,U=t*D+s*L+o*P+l*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/U;return e[0]=D*A,e[1]=(M*v*l-m*x*l-M*o*S+s*x*S+m*o*y-s*v*y)*A,e[2]=(f*x*l-M*h*l+M*o*p-s*x*p-f*o*y+s*h*y)*A,e[3]=(m*h*l-f*v*l-m*o*p+s*v*p+f*o*S-s*h*S)*A,e[4]=L*A,e[5]=(g*x*l-E*v*l+E*o*S-t*x*S-g*o*y+t*v*y)*A,e[6]=(E*h*l-c*x*l-E*o*p+t*x*p+c*o*y-t*h*y)*A,e[7]=(c*v*l-g*h*l+g*o*p-t*v*p-c*o*S+t*h*S)*A,e[8]=P*A,e[9]=(E*m*l-g*M*l-E*s*S+t*M*S+g*s*y-t*m*y)*A,e[10]=(c*M*l-E*f*l+E*s*p-t*M*p-c*s*y+t*f*y)*A,e[11]=(g*f*l-c*m*l-g*s*p+t*m*p+c*s*S-t*f*S)*A,e[12]=V*A,e[13]=(g*M*o-E*m*o+E*s*v-t*M*v-g*s*x+t*m*x)*A,e[14]=(E*f*o-c*M*o-E*s*h+t*M*h+c*s*x-t*f*x)*A,e[15]=(c*m*o-g*f*o+g*s*h-t*m*h-c*s*v+t*f*v)*A,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+s,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,m=f+f,v=l*p,S=l*g,E=l*m,M=c*g,x=c*m,y=f*m,D=h*p,L=h*g,P=h*m,V=s.x,U=s.y,A=s.z;return o[0]=(1-(M+y))*V,o[1]=(S+P)*V,o[2]=(E-L)*V,o[3]=0,o[4]=(S-P)*U,o[5]=(1-(v+y))*U,o[6]=(x+D)*U,o[7]=0,o[8]=(E+L)*A,o[9]=(x-D)*A,o[10]=(1-(v+M))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=ao.set(o[0],o[1],o[2]).length();const c=ao.set(o[4],o[5],o[6]).length(),f=ao.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const p=1/l,g=1/c,m=1/f;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=m,Ei.elements[9]*=m,Ei.elements[10]*=m,t.setFromRotationMatrix(Ei),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=hr){const h=this.elements,p=2*l/(t-e),g=2*l/(s-o),m=(t+e)/(t-e),v=(s+o)/(s-o);let S,E;if(f===hr)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Gu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=hr){const h=this.elements,p=1/(t-e),g=1/(s-o),m=1/(c-l),v=(t+e)*p,S=(s+o)*g;let E,M;if(f===hr)E=(c+l)*m,M=-2*m;else if(f===Gu)E=l*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ao=new X,Ei=new Lt,OE=new X(0,0,0),kE=new X(1,1,1),Gr=new X,ou=new X,ei=new X,Yg=new Lt,$g=new Ts;class bi{constructor(e=0,t=0,s=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],m=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class P_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const qg=new X,lo=new Ts,sr=new Lt,au=new X,_a=new X,BE=new X,HE=new Ts,Kg=new X(1,0,0),Zg=new X(0,1,0),Qg=new X(0,0,1),Jg={type:"added"},VE={type:"removed"},uo={type:"childadded",child:null},rd={type:"childremoved",child:null};class gn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new X,t=new bi,s=new Ts,o=new X(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Lt},normalMatrix:{value:new at}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,t){return qg.copy(e).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?au.copy(e):au.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(_a,au,this.up):sr.lookAt(au,_a,this.up),this.quaternion.setFromRotationMatrix(sr),o&&(sr.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(sr),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jg),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VE),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jg),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const m=h[p];l(e.shapes,m)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),m=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),m.length>0&&(s.shapes=m),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}gn.DEFAULT_UP=new X(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new X,or=new X,sd=new X,ar=new X,co=new X,fo=new X,e0=new X,od=new X,ad=new X,ld=new X,ud=new Vt,cd=new Vt,fd=new Vt;class Ai{constructor(e=new X,t=new X,s=new X){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ti.subVectors(o,t),or.subVectors(s,t),sd.subVectors(e,t);const c=Ti.dot(Ti),f=Ti.dot(or),h=Ti.dot(sd),p=or.dot(or),g=or.dot(sd),m=c*p-f*f;if(m===0)return l.set(0,0,0),null;const v=1/m,S=(p*h-f*g)*v,E=(c*g-f*h)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,ar)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ar.x),h.addScaledVector(c,ar.y),h.addScaledVector(f,ar.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return ud.setScalar(0),cd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,s),fd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ud,l.x),c.addScaledVector(cd,l.y),c.addScaledVector(fd,l.z),c}static isFrontFacing(e,t,s,o){return Ti.subVectors(s,t),or.subVectors(e,t),Ti.cross(or).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ti.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;co.subVectors(o,s),fo.subVectors(l,s),od.subVectors(e,s);const h=co.dot(od),p=fo.dot(od);if(h<=0&&p<=0)return t.copy(s);ad.subVectors(e,o);const g=co.dot(ad),m=fo.dot(ad);if(g>=0&&m<=g)return t.copy(o);const v=h*m-g*p;if(v<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(co,c);ld.subVectors(e,l);const S=co.dot(ld),E=fo.dot(ld);if(E>=0&&S<=E)return t.copy(l);const M=S*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(fo,f);const x=g*E-S*m;if(x<=0&&m-g>=0&&S-E>=0)return e0.subVectors(l,o),f=(m-g)/(m-g+(S-E)),t.copy(o).addScaledVector(e0,f);const y=1/(x+M+v);return c=M*y,f=v*y,t.copy(s).addScaledVector(co,c).addScaledVector(fo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},lu={h:0,s:0,l:0};function dd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=s,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Et.workingColorSpace){if(e=Nh(e,1),t=pt(t,0,1),s=pt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=dd(c,l,e+1/3),this.g=dd(c,l,e),this.b=dd(c,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=Pn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const s=L_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Et.fromWorkingColorSpace(Cn.copy(this),e),Math.round(pt(Cn.r*255,0,255))*65536+Math.round(pt(Cn.g*255,0,255))*256+Math.round(pt(Cn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Cn.copy(this),t);const s=Cn.r,o=Cn.g,l=Cn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const m=c-f;switch(p=g<=.5?m/(c+f):m/(2-c-f),c){case s:h=(o-l)/m+(o<l?6:0);break;case o:h=(l-s)/m+2;break;case l:h=(s-o)/m+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Pn){Et.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,s=Cn.g,o=Cn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(lu);const s=wa(Wr.h,lu.h,t),o=wa(Wr.s,lu.s,t),l=wa(Wr.l,lu.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new lt;lt.NAMES=L_;let GE=0;class Wi extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=Eo,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Id,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(s.blending=this.blending),this.side!==_r&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Id&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(s.stencilFail=this.stencilFail),this.stencilZFail!==no&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class D_ extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new X,uu=new ot;let WE=0;class Vi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Bg,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)uu.fromBufferAttribute(this,t),uu.applyMatrix3(e),this.setXY(t,uu.x,uu.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=_o(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bg&&(e.usage=this.usage),e}}class I_ extends Vi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class U_ extends Vi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class kn extends Vi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let XE=0;const di=new Lt,hd=new gn,ho=new X,ti=new ws,va=new ws,mn=new X;class Pi extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?U_:I_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new at().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,s){return di.makeTranslation(e,t,s),this.applyMatrix4(di),this}scale(e,t,s){return di.makeScale(e,t,s),this.applyMatrix4(di),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];va.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(ti.min,va.min),ti.expandByPoint(mn),mn.addVectors(ti.max,va.max),ti.expandByPoint(mn)):(ti.expandByPoint(va.min),ti.expandByPoint(va.max))}ti.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)mn.fromBufferAttribute(f,p),h&&(ho.fromBufferAttribute(e,p),mn.add(ho)),o=Math.max(o,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<s.count;F++)f[F]=new X,h[F]=new X;const p=new X,g=new X,m=new X,v=new ot,S=new ot,E=new ot,M=new X,x=new X;function y(F,C,w){p.fromBufferAttribute(s,F),g.fromBufferAttribute(s,C),m.fromBufferAttribute(s,w),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,C),E.fromBufferAttribute(l,w),g.sub(p),m.sub(p),S.sub(v),E.sub(v);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(z),x.copy(m).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),f[F].add(M),f[C].add(M),f[w].add(M),h[F].add(x),h[C].add(x),h[w].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,C=D.length;F<C;++F){const w=D[F],z=w.start,ie=w.count;for(let K=z,ae=z+ie;K<ae;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new X,P=new X,V=new X,U=new X;function A(F){V.fromBufferAttribute(o,F),U.copy(V);const C=f[F];L.copy(C),L.sub(V.multiplyScalar(V.dot(C))).normalize(),P.crossVectors(U,C);const z=P.dot(h[F])<0?-1:1;c.setXYZW(F,L.x,L.y,L.z,z)}for(let F=0,C=D.length;F<C;++F){const w=D[F],z=w.start,ie=w.count;for(let K=z,ae=z+ie;K<ae;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const o=new X,l=new X,c=new X,f=new X,h=new X,p=new X,g=new X,m=new X;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),g.subVectors(c,l),m.subVectors(o,l),g.cross(m),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,x),f.add(g),h.add(g),p.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,l),m.subVectors(o,l),g.cross(m),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,m=f.normalized,v=new p.constructor(h.length*g);let S=0,E=0;for(let M=0,x=h.length;M<x;M++){f.isInterleavedBufferAttribute?S=h[M]*f.data.stride+f.offset:S=h[M]*g;for(let y=0;y<g;y++)v[E++]=p[S++]}return new Vi(v,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,m=p.length;g<m;g++){const v=p[g],S=e(v,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let m=0,v=p.length;m<v;m++){const S=p[m];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],m=l[p];for(let v=0,S=m.length;v<S;v++)g.push(m[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const m=c[p];this.addGroup(m.start,m.count,m.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new Lt,hs=new oc,cu=new Va,n0=new X,fu=new X,du=new X,hu=new X,pd=new X,pu=new X,i0=new X,mu=new X;class ri extends gn{constructor(e=new Pi,t=new D_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){pu.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],m=l[h];g!==0&&(pd.fromBufferAttribute(m,e),c?pu.addScaledVector(pd,g):pu.addScaledVector(pd.sub(t),g))}t.add(pu)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cu.copy(s.boundingSphere),cu.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(cu.containsPoint(hs.origin)===!1&&(hs.intersectSphere(cu,n0)===null||hs.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(l).invert(),hs.copy(e.ray).applyMatrix4(t0),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,m=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=c[x.materialIndex],D=Math.max(x.start,S.start),L=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let P=D,V=L;P<V;P+=3){const U=f.getX(P),A=f.getX(P+1),F=f.getX(P+2);o=gu(this,y,e,s,p,g,m,U,A,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const D=f.getX(x),L=f.getX(x+1),P=f.getX(x+2);o=gu(this,c,e,s,p,g,m,D,L,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=c[x.materialIndex],D=Math.max(x.start,S.start),L=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=D,V=L;P<V;P+=3){const U=P,A=P+1,F=P+2;o=gu(this,y,e,s,p,g,m,U,A,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const D=x,L=x+1,P=x+2;o=gu(this,c,e,s,p,g,m,D,L,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function jE(r,e,t,s,o,l,c,f){let h;if(e.side===zn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===_r,f),h===null)return null;mu.copy(f),mu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(mu);return p<t.near||p>t.far?null:{distance:p,point:mu.clone(),object:r}}function gu(r,e,t,s,o,l,c,f,h,p){r.getVertexPosition(f,fu),r.getVertexPosition(h,du),r.getVertexPosition(p,hu);const g=jE(r,e,t,s,fu,du,hu,i0);if(g){const m=new X;Ai.getBarycoord(i0,fu,du,hu,m),o&&(g.uv=Ai.getInterpolatedAttribute(o,f,h,p,m,new ot)),l&&(g.uv1=Ai.getInterpolatedAttribute(l,f,h,p,m,new ot)),c&&(g.normal=Ai.getInterpolatedAttribute(c,f,h,p,m,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new X,materialIndex:0};Ai.getNormal(fu,du,hu,v.normal),g.face=v,g.barycoord=m}return g}class Io extends Pi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],m=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(m,2));function E(M,x,y,D,L,P,V,U,A,F,C){const w=P/A,z=V/F,ie=P/2,K=V/2,ae=U/2,ue=A+1,te=F+1;let de=0,k=0;const se=new X;for(let Z=0;Z<te;Z++){const O=Z*z-K;for(let ne=0;ne<ue;ne++){const Ae=ne*w-ie;se[M]=Ae*D,se[x]=O*L,se[y]=ae,p.push(se.x,se.y,se.z),se[M]=0,se[x]=0,se[y]=U>0?1:-1,g.push(se.x,se.y,se.z),m.push(ne/A),m.push(1-Z/F),de+=1}}for(let Z=0;Z<F;Z++)for(let O=0;O<A;O++){const ne=v+O+ue*Z,Ae=v+O+ue*(Z+1),J=v+(O+1)+ue*(Z+1),fe=v+(O+1)+ue*Z;h.push(ne,Ae,fe),h.push(Ae,J,fe),k+=6}f.addGroup(S,k,C),S+=k,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const s=Po(r[t]);for(const o in s)e[o]=s[o]}return e}function YE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function N_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Wu={clone:Po,merge:On};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class F_ extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=hr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new X,r0=new ot,s0=new ot;class ni extends F_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,r0,s0),t.subVectors(s0,r0)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const po=-90,mo=1;class KE extends gn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(po,mo,e,t);o.layers=this.layers,this.add(o);const l=new ni(po,mo,e,t);l.layers=this.layers,this.add(l);const c=new ni(po,mo,e,t);c.layers=this.layers,this.add(c);const f=new ni(po,mo,e,t);f.layers=this.layers,this.add(f);const h=new ni(po,mo,e,t);h.layers=this.layers,this.add(h);const p=new ni(po,mo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===hr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(m,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class O_ extends Bn{constructor(e=[],t=Ro,s,o,l,c,f,h,p,g){super(e,t,s,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZE extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new O_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Io(5,5,5),l=new Xi({name:"CubemapFromEquirect",uniforms:Po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Yr});l.uniforms.tEquirect.value=t;const c=new ri(o,l),f=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Bi),new KE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class xa extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,s),y=this._getHandJoint(p,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=g.position.distanceTo(m.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new xa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class JE extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gd=new X,e1=new X,t1=new at;class cr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=gd.subVectors(s,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(gd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||t1.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Va,_u=new X;class Oh{constructor(e=new cr,t=new cr,s=new cr,o=new cr,l=new cr,c=new cr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=hr){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],g=o[5],m=o[6],v=o[7],S=o[8],E=o[9],M=o[10],x=o[11],y=o[12],D=o[13],L=o[14],P=o[15];if(s[0].setComponents(h-l,v-p,x-S,P-y).normalize(),s[1].setComponents(h+l,v+p,x+S,P+y).normalize(),s[2].setComponents(h+c,v+g,x+E,P+D).normalize(),s[3].setComponents(h-c,v-g,x-E,P-D).normalize(),s[4].setComponents(h-f,v-m,x-M,P-L).normalize(),t===hr)s[5].setComponents(h+f,v+m,x+M,P+L).normalize();else if(t===Gu)s[5].setComponents(f,m,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(_u.x=o.normal.x>0?e.max.x:e.min.x,_u.y=o.normal.y>0?e.max.y:e.min.y,_u.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ou extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new X,ju=new X,o0=new Lt,ya=new oc,vu=new Va,_d=new X,a0=new X;class n1 extends gn{constructor(e=new Pi,t=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Xu.fromBufferAttribute(t,o-1),ju.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Xu.distanceTo(ju);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vu.copy(s.boundingSphere),vu.applyMatrix4(o),vu.radius+=l,e.ray.intersectsSphere(vu)===!1)return;o0.copy(o).invert(),ya.copy(e.ray).applyMatrix4(o0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let M=S,x=E-1;M<x;M+=p){const y=g.getX(M),D=g.getX(M+1),L=yu(this,e,ya,h,y,D,M);L&&t.push(L)}if(this.isLineLoop){const M=g.getX(E-1),x=g.getX(S),y=yu(this,e,ya,h,M,x,E-1);y&&t.push(y)}}else{const S=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let M=S,x=E-1;M<x;M+=p){const y=yu(this,e,ya,h,M,M+1,M);y&&t.push(y)}if(this.isLineLoop){const M=yu(this,e,ya,h,E-1,S,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function yu(r,e,t,s,o,l,c){const f=r.geometry.attributes.position;if(Xu.fromBufferAttribute(f,o),ju.fromBufferAttribute(f,l),t.distanceSqToSegment(Xu,ju,_d,a0)>s)return;_d.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(_d);if(!(p<e.near||p>e.far))return{distance:p,point:a0.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const l0=new X,u0=new X;class c0 extends n1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)l0.fromBufferAttribute(t,o),u0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+l0.distanceTo(u0);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sa extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f0=new Lt,gh=new oc,xu=new Va,Su=new X;class vd extends gn{constructor(e=new Pi,t=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(o),xu.radius+=l,e.ray.intersectsSphere(xu)===!1)return;f0.copy(o).invert(),gh.copy(e.ray).applyMatrix4(f0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,m=s.attributes.position;if(p!==null){const v=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=v,M=S;E<M;E++){const x=p.getX(E);Su.fromBufferAttribute(m,x),d0(Su,x,h,o,e,t,this)}}else{const v=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=v,M=S;E<M;E++)Su.fromBufferAttribute(m,E),d0(Su,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function d0(r,e,t,s,o,l,c){const f=gh.distanceSqToPoint(r);if(f<t){const h=new X;gh.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class k_ extends Bn{constructor(e,t,s=Es,o,l,c,f=Ci,h=Ci,p,g=Ua){if(g!==Ua&&g!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,c,f,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ga extends Pi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,g=h+1,m=e/f,v=t/h,S=[],E=[],M=[],x=[];for(let y=0;y<g;y++){const D=y*v-c;for(let L=0;L<p;L++){const P=L*m-l;E.push(P,-D,0),M.push(0,0,1),x.push(L/f),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let D=0;D<f;D++){const L=D+p*y,P=D+p*(y+1),V=D+1+p*(y+1),U=D+1+p*y;S.push(L,P,U),S.push(P,V,U)}this.setIndex(S),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class h0 extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i1 extends Wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class r1 extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s1 extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class z_{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,m){return p.push(g,m),this},this.removeHandler=function(g){const m=p.indexOf(g);return m!==-1&&p.splice(m,2),this},this.getHandler=function(g){for(let m=0,v=p.length;m<v;m+=2){const S=p[m],E=p[m+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const o1=new z_;class Wa{constructor(e){this.manager=e!==void 0?e:o1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class a1 extends Error{constructor(e,t){super(e),this.response=t}}class l1 extends Wa{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,s,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Yu.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:s,onError:o});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:s,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=lr[e],m=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let M=0;const x=new ReadableStream({start(y){D();function D(){m.read().then(({done:L,value:P})=>{if(L)y.close();else{M+=P.byteLength;const V=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:S});for(let U=0,A=g.length;U<A;U++){const F=g[U];F.onProgress&&F.onProgress(V)}y.enqueue(P),D()}},L=>{y.error(L)})}}});return new Response(x)}else throw new a1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(f),v=m&&m[1]?m[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{Yu.add(e,p);const g=lr[e];delete lr[e];for(let m=0,v=g.length;m<v;m++){const S=g[m];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=lr[e];if(g===void 0)throw this.manager.itemError(e),p;delete lr[e];for(let m=0,v=g.length;m<v;m++){const S=g[m];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u1 extends Wa{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Yu.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Oa("img");function h(){g(),Yu.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(m){g(),o&&o(m),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class p0 extends Wa{constructor(e){super(e)}load(e,t,s,o){const l=new Bn,c=new u1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class B_ extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yd=new Lt,m0=new X,g0=new X;class c1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;m0.setFromMatrixPosition(e.matrixWorld),t.position.copy(m0),g0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(g0),t.updateMatrixWorld(),yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H_ extends F_{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class f1 extends c1{constructor(){super(new H_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d1 extends B_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new f1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h1 extends B_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class p1 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _0{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m1 extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function v0(r,e,t,s){const o=g1(s);switch(t){case M_:return r*e;case T_:return r*e/o.components*o.byteLength;case Lh:return r*e/o.components*o.byteLength;case w_:return r*e*2/o.components*o.byteLength;case Dh:return r*e*2/o.components*o.byteLength;case E_:return r*e*3/o.components*o.byteLength;case Ri:return r*e*4/o.components*o.byteLength;case Ih:return r*e*4/o.components*o.byteLength;case Pu:case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Du:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xd:case Yd:return Math.max(r,16)*Math.max(e,8)/4;case Wd:case jd:return Math.max(r,8)*Math.max(e,8)/2;case $d:case qd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uu:case fh:case dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case A_:case hh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g1(r){switch(r){case Gi:case y_:return{byteLength:1,components:1};case Da:case x_:case Ha:return{byteLength:2,components:1};case bh:case Ph:return{byteLength:2,components:4};case Es:case Ch:case dr:return{byteLength:4,components:1};case S_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function _1(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,m=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:m}}function s(f,h,p){const g=h.array,m=h.updateRanges;if(r.bindBuffer(p,f),m.length===0)r.bufferSubData(p,0,g);else{m.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<m.length;S++){const E=m[v],M=m[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,m[v]=M)}m.length=v+1;for(let S=0,E=m.length;S<E;S++){const M=m[S];r.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var v1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
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
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
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
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
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
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H1=`#define PI 3.141592653589793
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
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
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
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uT=`uniform bool receiveShadow;
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
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,gT=`struct PhysicalMaterial {
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
}`,_T=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ST=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RT=`#if defined( USE_POINTS_UV )
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
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
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
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nw=`float getShadowMask() {
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
}`,iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vw=`uniform sampler2D t2D;
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
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
}`,Tw=`#if DEPTH_PACKING == 3200
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
}`,ww=`#define DISTANCE
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
}`,Aw=`#define DISTANCE
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`uniform float scale;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#include <common>
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Iw=`#define LAMBERT
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
}`,Uw=`#define LAMBERT
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
}`,Nw=`#define MATCAP
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
}`,Fw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,kw=`#define NORMAL
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
}`,zw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,Hw=`#define STANDARD
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,Ww=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,jw=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,$w=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:v1,alphahash_pars_fragment:y1,alphamap_fragment:x1,alphamap_pars_fragment:S1,alphatest_fragment:M1,alphatest_pars_fragment:E1,aomap_fragment:T1,aomap_pars_fragment:w1,batching_pars_vertex:A1,batching_vertex:R1,begin_vertex:C1,beginnormal_vertex:b1,bsdfs:P1,iridescence_fragment:L1,bumpmap_pars_fragment:D1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:U1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:F1,color_fragment:O1,color_pars_fragment:k1,color_pars_vertex:z1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:G1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:j1,emissivemap_pars_fragment:Y1,colorspace_fragment:$1,colorspace_pars_fragment:q1,envmap_fragment:K1,envmap_common_pars_fragment:Z1,envmap_pars_fragment:Q1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:cT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:uT,lights_toon_fragment:fT,lights_toon_pars_fragment:dT,lights_phong_fragment:hT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:yT,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:ST,logdepthbuf_pars_vertex:MT,logdepthbuf_vertex:ET,map_fragment:TT,map_pars_fragment:wT,map_particle_fragment:AT,map_particle_pars_fragment:RT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:bT,morphinstance_vertex:PT,morphcolor_vertex:LT,morphnormal_vertex:DT,morphtarget_pars_vertex:IT,morphtarget_vertex:UT,normal_fragment_begin:NT,normal_fragment_maps:FT,normal_pars_fragment:OT,normal_pars_vertex:kT,normal_vertex:zT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:GT,iridescence_pars_fragment:WT,opaque_fragment:XT,packing:jT,premultiplied_alpha_fragment:YT,project_vertex:$T,dithering_fragment:qT,dithering_pars_fragment:KT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:ew,shadowmap_vertex:tw,shadowmask_pars_fragment:nw,skinbase_vertex:iw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:ow,specularmap_fragment:aw,specularmap_pars_fragment:lw,tonemapping_fragment:uw,tonemapping_pars_fragment:cw,transmission_fragment:fw,transmission_pars_fragment:dw,uv_pars_fragment:hw,uv_pars_vertex:pw,uv_vertex:mw,worldpos_vertex:gw,background_vert:_w,background_frag:vw,backgroundCube_vert:yw,backgroundCube_frag:xw,cube_vert:Sw,cube_frag:Mw,depth_vert:Ew,depth_frag:Tw,distanceRGBA_vert:ww,distanceRGBA_frag:Aw,equirect_vert:Rw,equirect_frag:Cw,linedashed_vert:bw,linedashed_frag:Pw,meshbasic_vert:Lw,meshbasic_frag:Dw,meshlambert_vert:Iw,meshlambert_frag:Uw,meshmatcap_vert:Nw,meshmatcap_frag:Fw,meshnormal_vert:Ow,meshnormal_frag:kw,meshphong_vert:zw,meshphong_frag:Bw,meshphysical_vert:Hw,meshphysical_frag:Vw,meshtoon_vert:Gw,meshtoon_frag:Ww,points_vert:Xw,points_frag:jw,shadow_vert:Yw,shadow_frag:$w,sprite_vert:qw,sprite_frag:Kw},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},zi={basic:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:On([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:On([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:On([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:On([we.points,we.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:On([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:On([we.common,we.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:On([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:On([we.sprite,we.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:On([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:On([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zi.physical={uniforms:On([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Mu={r:0,b:0,g:0},ms=new bi,Zw=new Lt;function Qw(r,e,t,s,o,l,c){const f=new lt(0);let h=l===!0?0:1,p,g,m=null,v=0,S=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function M(L){let P=!1;const V=E(L);V===null?y(f,h):V&&V.isColor&&(y(V,1),P=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(L,P){const V=E(P);V&&(V.isCubeTexture||V.mapping===sc)?(g===void 0&&(g=new ri(new Io(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Po(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ms.copy(P.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(ms)),g.material.toneMapped=Et.getTransfer(V.colorSpace)!==Ct,(m!==V||v!==V.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,m=V,v=V.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new ri(new Ga(2,2),new Xi({name:"BackgroundMaterial",uniforms:Po(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Et.getTransfer(V.colorSpace)!==Ct,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||v!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,m=V,v=V.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,P){L.getRGB(Mu,N_(r)),s.buffers.color.setClear(Mu.r,Mu.g,Mu.b,P,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(f,h)},render:M,addToRenderList:x,dispose:D}}function Jw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,c=!1;function f(w,z,ie,K,ae){let ue=!1;const te=m(K,ie,z);l!==te&&(l=te,p(l.object)),ue=S(w,K,ie,ae),ue&&E(w,K,ie,ae),ae!==null&&e.update(ae,r.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,P(w,z,ie,K),ae!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function m(w,z,ie){const K=ie.wireframe===!0;let ae=s[w.id];ae===void 0&&(ae={},s[w.id]=ae);let ue=ae[z.id];ue===void 0&&(ue={},ae[z.id]=ue);let te=ue[K];return te===void 0&&(te=v(h()),ue[K]=te),te}function v(w){const z=[],ie=[],K=[];for(let ae=0;ae<t;ae++)z[ae]=0,ie[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:K,object:w,attributes:{},index:null}}function S(w,z,ie,K){const ae=l.attributes,ue=z.attributes;let te=0;const de=ie.getAttributes();for(const k in de)if(de[k].location>=0){const Z=ae[k];let O=ue[k];if(O===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Z===void 0||Z.attribute!==O||O&&Z.data!==O.data)return!0;te++}return l.attributesNum!==te||l.index!==K}function E(w,z,ie,K){const ae={},ue=z.attributes;let te=0;const de=ie.getAttributes();for(const k in de)if(de[k].location>=0){let Z=ue[k];Z===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor));const O={};O.attribute=Z,Z&&Z.data&&(O.data=Z.data),ae[k]=O,te++}l.attributes=ae,l.attributesNum=te,l.index=K}function M(){const w=l.newAttributes;for(let z=0,ie=w.length;z<ie;z++)w[z]=0}function x(w){y(w,0)}function y(w,z){const ie=l.newAttributes,K=l.enabledAttributes,ae=l.attributeDivisors;ie[w]=1,K[w]===0&&(r.enableVertexAttribArray(w),K[w]=1),ae[w]!==z&&(r.vertexAttribDivisor(w,z),ae[w]=z)}function D(){const w=l.newAttributes,z=l.enabledAttributes;for(let ie=0,K=z.length;ie<K;ie++)z[ie]!==w[ie]&&(r.disableVertexAttribArray(ie),z[ie]=0)}function L(w,z,ie,K,ae,ue,te){te===!0?r.vertexAttribIPointer(w,z,ie,ae,ue):r.vertexAttribPointer(w,z,ie,K,ae,ue)}function P(w,z,ie,K){M();const ae=K.attributes,ue=ie.getAttributes(),te=z.defaultAttributeValues;for(const de in ue){const k=ue[de];if(k.location>=0){let se=ae[de];if(se===void 0&&(de==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),de==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const Z=se.normalized,O=se.itemSize,ne=e.get(se);if(ne===void 0)continue;const Ae=ne.buffer,J=ne.type,fe=ne.bytesPerElement,ye=J===r.INT||J===r.UNSIGNED_INT||se.gpuType===Ch;if(se.isInterleavedBufferAttribute){const ve=se.data,Te=ve.stride,Xe=se.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)y(k.location+Ve,ve.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)x(k.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ve=0;Ve<k.locationSize;Ve++)L(k.location+Ve,O/k.locationSize,J,Z,Te*fe,(Xe+O/k.locationSize*Ve)*fe,ye)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve,se.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,O/k.locationSize,J,Z,O*fe,O/k.locationSize*ve*fe,ye)}}else if(te!==void 0){const Z=te[de];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(k.location,Z);break;case 3:r.vertexAttrib3fv(k.location,Z);break;case 4:r.vertexAttrib4fv(k.location,Z);break;default:r.vertexAttrib1fv(k.location,Z)}}}}D()}function V(){F();for(const w in s){const z=s[w];for(const ie in z){const K=z[ie];for(const ae in K)g(K[ae].object),delete K[ae];delete z[ie]}delete s[w]}}function U(w){if(s[w.id]===void 0)return;const z=s[w.id];for(const ie in z){const K=z[ie];for(const ae in K)g(K[ae].object),delete K[ae];delete z[ie]}delete s[w.id]}function A(w){for(const z in s){const ie=s[z];if(ie[w.id]===void 0)continue;const K=ie[w.id];for(const ae in K)g(K[ae].object),delete K[ae];delete ie[w.id]}}function F(){C(),c=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:x,disableUnusedAttributes:D}}function eA(r,e,t){let s;function o(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function c(p,g,m){m!==0&&(r.drawArraysInstanced(s,p,g,m),t.update(g,s,m))}function f(p,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,m);let S=0;for(let E=0;E<m;E++)S+=g[E];t.update(S,s,1)}function h(p,g,m,v){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,m);let E=0;for(let M=0;M<m;M++)E+=g[M]*v[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function tA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(A){return!(A!==Ri&&s.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(A){const F=A===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Gi&&s.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dr&&!F)}function h(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:V,maxSamples:U}}function nA(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new cr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const S=m.length!==0||v||s!==0||o;return o=v,s=m.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,S){const E=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,y=r.get(m);if(!o||E===null||E.length===0||l&&!x)l?g(null):p();else{const D=l?0:s,L=D*4;let P=y.clippingState||null;h.value=P,P=g(E,v,L,S);for(let V=0;V!==L;++V)P[V]=t[V];y.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(m,v,S,E){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const y=S+M*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(x===null||x.length<y)&&(x=new Float32Array(y));for(let L=0,P=S;L!==M;++L,P+=4)c.copy(m[L]).applyMatrix4(D,f),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function iA(r){let e=new WeakMap;function t(c,f){return f===Hd?c.mapping=Ro:f===Vd&&(c.mapping=Co),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Hd||f===Vd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new ZE(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const yo=4,y0=[.125,.215,.35,.446,.526,.582],xs=20,xd=new H_,x0=new lt;let Sd=null,Md=0,Ed=0,Td=!1;const _s=(1+Math.sqrt(5))/2,go=1/_s,S0=[new X(-_s,go,0),new X(_s,go,0),new X(-go,0,_s),new X(go,0,_s),new X(0,_s,-go),new X(0,_s,go),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],rA=new X;class M0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=rA}=l;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,Eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Ha,format:Ri,colorSpace:bo,depthBuffer:!1},o=E0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sA(l)),this._blurMaterial=oA(l,e,t)}return o}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,s,o,l){const h=new ni(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,S=m.toneMapping;m.getClearColor(x0),m.toneMapping=$r,m.autoClear=!1;const E=new D_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new ri(new Io,E);let x=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,x=!0):(E.color.copy(x0),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[D],l.y,l.z)):L===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[D]));const P=this._cubeSize;Eu(o,L*P,D>2?P:0,P,P),m.setRenderTarget(o),x&&m.render(M,h),m.render(e,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=v,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Ro||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new ri(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Eu(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,xd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=S0[(o-l-1)%S0.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new ri(this._lodPlanes[o],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*xs-1),M=l/E,x=isFinite(l)?1+Math.floor(g*M):xs;x>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);const y=[];let D=0;for(let A=0;A<xs;++A){const F=A/M,C=Math.exp(-F*F/2);y.push(C),A===0?D+=C:A<x&&(D+=2*C)}for(let A=0;A<y.length;A++)y[A]=y[A]/D;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const P=this._sizeLods[o],V=3*P*(o>L-yo?o-L+yo:0),U=4*(this._cubeSize-P);Eu(t,V,U,3*P,2*P),h.setRenderTarget(t),h.render(m,xd)}}function sA(r){const e=[],t=[],s=[];let o=r;const l=r-yo+1+y0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>r-yo?h=y0[c-r+yo-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),g=-p,m=1+p,v=[g,g,m,g,m,m,g,g,m,m,g,m],S=6,E=6,M=3,x=2,y=1,D=new Float32Array(M*E*S),L=new Float32Array(x*E*S),P=new Float32Array(y*E*S);for(let U=0;U<S;U++){const A=U%3*2/3-1,F=U>2?0:-1,C=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];D.set(C,M*E*U),L.set(v,x*E*U);const w=[U,U,U,U,U,U];P.set(w,y*E*U)}const V=new Pi;V.setAttribute("position",new Vi(D,M)),V.setAttribute("uv",new Vi(L,x)),V.setAttribute("faceIndex",new Vi(P,y)),e.push(V),o>yo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function E0(r,e,t){const s=new qr(r,e,t);return s.texture.mapping=sc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Eu(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function oA(r,e,t){const s=new Float32Array(xs),o=new X(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function T0(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function w0(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function aA(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Hd||h===Vd,g=h===Ro||h===Co;if(p||g){let m=e.get(f);const v=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new M0(r)),m=p?t.fromEquirectangular(f,m):t.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new M0(r)),m=p?t.fromEquirectangular(f):t.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",l),m.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function lA(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Fu("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function uA(r,e,t,s){const o={},l=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(m,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function h(m){const v=m.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function p(m){const v=[],S=m.index,E=m.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let L=0,P=D.length;L<P;L+=3){const V=D[L+0],U=D[L+1],A=D[L+2];v.push(V,U,U,A,A,V)}}else if(E!==void 0){const D=E.array;M=E.version;for(let L=0,P=D.length/3-1;L<P;L+=3){const V=L+0,U=L+1,A=L+2;v.push(V,U,U,A,A,V)}}else return;const x=new(C_(v)?U_:I_)(v,1);x.version=M;const y=l.get(m);y&&e.remove(y),l.set(m,x)}function g(m){const v=l.get(m);if(v){const S=m.index;S!==null&&v.version<S.version&&p(m)}else p(m);return l.get(m)}return{get:f,update:h,getWireframeAttribute:g}}function cA(r,e,t){let s;function o(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,S){r.drawElements(s,S,l,v*c),t.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*c,E),t.update(S,s,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];t.update(x,s,1)}function m(v,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/c,S[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,M,0,E);let y=0;for(let D=0;D<E;D++)y+=S[D]*M[D];t.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function fA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function dA(r,e,t){const s=new WeakMap,o=new Vt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=g!==void 0?g.length:0;let v=s.get(f);if(v===void 0||v.count!==m){let C=function(){A.dispose(),s.delete(f),f.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),M===!0&&(L=3);let P=f.attributes.position.count*L,V=1;P>e.maxTextureSize&&(V=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const U=new Float32Array(P*V*4*m),A=new b_(U,P,V,m);A.type=dr,A.needsUpdate=!0;const F=L*4;for(let w=0;w<m;w++){const z=x[w],ie=y[w],K=D[w],ae=P*V*4*w;for(let ue=0;ue<z.count;ue++){const te=ue*F;S===!0&&(o.fromBufferAttribute(z,ue),U[ae+te+0]=o.x,U[ae+te+1]=o.y,U[ae+te+2]=o.z,U[ae+te+3]=0),E===!0&&(o.fromBufferAttribute(ie,ue),U[ae+te+4]=o.x,U[ae+te+5]=o.y,U[ae+te+6]=o.z,U[ae+te+7]=0),M===!0&&(o.fromBufferAttribute(K,ue),U[ae+te+8]=o.x,U[ae+te+9]=o.y,U[ae+te+10]=o.z,U[ae+te+11]=K.itemSize===4?o.w:1)}}v={count:m,texture:A,size:new ot(P,V)},s.set(f,v),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function hA(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,m=e.get(h,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return m}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const G_=new Bn,A0=new k_(1,1),W_=new b_,X_=new NE,j_=new O_,R0=[],C0=[],b0=new Float32Array(16),P0=new Float32Array(9),L0=new Float32Array(4);function Uo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=R0[o];if(l===void 0&&(l=new Float32Array(o),R0[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function ac(r,e){let t=C0[e];t===void 0&&(t=new Int32Array(e),C0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function pA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function gA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function _A(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function vA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;L0.set(s),r.uniformMatrix2fv(this.addr,!1,L0),un(t,s)}}function yA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;P0.set(s),r.uniformMatrix3fv(this.addr,!1,P0),un(t,s)}}function xA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,s))return;b0.set(s),r.uniformMatrix4fv(this.addr,!1,b0),un(t,s)}}function SA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function MA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function EA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function TA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function wA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function RA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function CA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function bA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(A0.compareFunction=R_,l=A0):l=G_,t.setTexture2D(e||l,o)}function PA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||X_,o)}function LA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||j_,o)}function DA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||W_,o)}function IA(r){switch(r){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return yA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return TA;case 5125:return wA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return DA}}function UA(r,e){r.uniform1fv(this.addr,e)}function NA(r,e){const t=Uo(e,this.size,2);r.uniform2fv(this.addr,t)}function FA(r,e){const t=Uo(e,this.size,3);r.uniform3fv(this.addr,t)}function OA(r,e){const t=Uo(e,this.size,4);r.uniform4fv(this.addr,t)}function kA(r,e){const t=Uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zA(r,e){const t=Uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function BA(r,e){const t=Uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function HA(r,e){r.uniform1iv(this.addr,e)}function VA(r,e){r.uniform2iv(this.addr,e)}function GA(r,e){r.uniform3iv(this.addr,e)}function WA(r,e){r.uniform4iv(this.addr,e)}function XA(r,e){r.uniform1uiv(this.addr,e)}function jA(r,e){r.uniform2uiv(this.addr,e)}function YA(r,e){r.uniform3uiv(this.addr,e)}function $A(r,e){r.uniform4uiv(this.addr,e)}function qA(r,e,t){const s=this.cache,o=e.length,l=ac(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||G_,l[c])}function KA(r,e,t){const s=this.cache,o=e.length,l=ac(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||X_,l[c])}function ZA(r,e,t){const s=this.cache,o=e.length,l=ac(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||j_,l[c])}function QA(r,e,t){const s=this.cache,o=e.length,l=ac(t,o);ln(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||W_,l[c])}function JA(r){switch(r){case 5126:return UA;case 35664:return NA;case 35665:return FA;case 35666:return OA;case 35674:return kA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return HA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return jA;case 36295:return YA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return QA}}class eR{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=IA(t.type)}}class tR{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JA(t.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function D0(r,e){r.seq.push(e),r.map[e.id]=e}function iR(r,e,t){const s=r.name,o=s.length;for(wd.lastIndex=0;;){const l=wd.exec(s),c=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){D0(t,p===void 0?new eR(f,r,e):new tR(f,r,e));break}else{let m=t.map[f];m===void 0&&(m=new nR(f),D0(t,m)),t=m}}}class ku{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);iR(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function I0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const rR=37297;let sR=0;function oR(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const U0=new at;function aR(r){Et._getMatrix(U0,Et.workingColorSpace,r);const e=`mat3( ${U0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(r)){case Vu:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function N0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+oR(r.getShaderSource(e),c)}else return o}function lR(r,e){const t=aR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uR(r,e){let t;switch(e){case jM:t="Linear";break;case YM:t="Reinhard";break;case $M:t="Cineon";break;case qM:t="ACESFilmic";break;case ZM:t="AgX";break;case QM:t="Neutral";break;case KM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new X;function cR(){Et.getLuminanceCoefficients(Tu);const r=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function dR(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function hR(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Ma(r){return r!==""}function F0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(r){return r.replace(pR,gR)}const mR=new Map;function gR(r,e){let t=ut[e];if(t===void 0){const s=mR.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}const _R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(r){return r.replace(_R,vR)}function vR(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function z0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function yR(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function xR(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ro:case Co:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SR(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function MR(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case WM:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function ER(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function TR(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=yR(t),p=xR(t),g=SR(t),m=MR(t),v=ER(t),S=fR(t),E=dR(l),M=o.createProgram();let x,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ma).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ma).join(`
`),y.length>0&&(y+=`
`)):(x=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),y=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?ut.tonemapping_pars_fragment:"",t.toneMapping!==$r?uR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,lR("linearToOutputTexel",t.outputColorSpace),cR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),c=_h(c),c=F0(c,t),c=O0(c,t),f=_h(f),f=F0(f,t),f=O0(f,t),c=k0(c),f=k0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+x+c,P=D+y+f,V=I0(o,o.VERTEX_SHADER,L),U=I0(o,o.FRAGMENT_SHADER,P);o.attachShader(M,V),o.attachShader(M,U),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function A(z){if(r.debug.checkShaderErrors){const ie=o.getProgramInfoLog(M).trim(),K=o.getShaderInfoLog(V).trim(),ae=o.getShaderInfoLog(U).trim();let ue=!0,te=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,V,U);else{const de=N0(o,V,"vertex"),k=N0(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+de+`
`+k)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(K===""||ae==="")&&(te=!1);te&&(z.diagnostics={runnable:ue,programLog:ie,vertexShader:{log:K,prefix:x},fragmentShader:{log:ae,prefix:y}})}o.deleteShader(V),o.deleteShader(U),F=new ku(o,M),C=hR(o,M)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(M,rR)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=U,this}let wR=0;class AR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new RR(e),t.set(e,s)),s}}class RR{constructor(e){this.id=wR++,this.code=e,this.usedTimes=0}}function CR(r,e,t,s,o,l,c){const f=new P_,h=new AR,p=new Set,g=[],m=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,w,z,ie,K){const ae=ie.fog,ue=K.geometry,te=C.isMeshStandardMaterial?ie.environment:null,de=(C.isMeshStandardMaterial?t:e).get(C.envMap||te),k=de&&de.mapping===sc?de.image.height:null,se=E[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const Z=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=Z!==void 0?Z.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let Ae,J,fe,ye;if(se){const yt=zi[se];Ae=yt.vertexShader,J=yt.fragmentShader}else Ae=C.vertexShader,J=C.fragmentShader,h.update(C),fe=h.getVertexShaderID(C),ye=h.getFragmentShaderID(C);const ve=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Xe=K.isInstancedMesh===!0,Ve=K.isBatchedMesh===!0,Dt=!!C.map,It=!!C.matcap,ct=!!de,H=!!C.aoMap,Ln=!!C.lightMap,mt=!!C.bumpMap,ft=!!C.normalMap,je=!!C.displacementMap,Rt=!!C.emissiveMap,Ge=!!C.metalnessMap,I=!!C.roughnessMap,R=C.anisotropy>0,ee=C.clearcoat>0,he=C.dispersion>0,_e=C.iridescence>0,ce=C.sheen>0,He=C.transmission>0,Re=R&&!!C.anisotropyMap,qe=ee&&!!C.clearcoatMap,$e=ee&&!!C.clearcoatNormalMap,xe=ee&&!!C.clearcoatRoughnessMap,Ne=_e&&!!C.iridescenceMap,Je=_e&&!!C.iridescenceThicknessMap,et=ce&&!!C.sheenColorMap,Fe=ce&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,At=!!C.specularIntensityMap,W=He&&!!C.transmissionMap,Ce=He&&!!C.thicknessMap,le=!!C.gradientMap,pe=!!C.alphaMap,Le=C.alphaTest>0,Pe=!!C.alphaHash,rt=!!C.extensions;let Nt=$r;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Nt=r.toneMapping);const rn={shaderID:se,shaderType:C.type,shaderName:C.name,vertexShader:Ae,fragmentShader:J,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&K._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&K.instanceColor!==null,instancingMorph:Xe&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bo,alphaToCoverage:!!C.alphaToCoverage,map:Dt,matcap:It,envMap:ct,envMapMode:ct&&de.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:Ln,bumpMap:mt,normalMap:ft,displacementMap:v&&je,emissiveMap:Rt,normalMapObjectSpace:ft&&C.normalMapType===nE,normalMapTangentSpace:ft&&C.normalMapType===Uh,metalnessMap:Ge,roughnessMap:I,anisotropy:R,anisotropyMap:Re,clearcoat:ee,clearcoatMap:qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:xe,dispersion:he,iridescence:_e,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:ce,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:dt,specularColorMap:it,specularIntensityMap:At,transmission:He,transmissionMap:W,thicknessMap:Ce,gradientMap:le,opaque:C.transparent===!1&&C.blending===Eo&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:C.combine,mapUv:Dt&&M(C.map.channel),aoMapUv:H&&M(C.aoMap.channel),lightMapUv:Ln&&M(C.lightMap.channel),bumpMapUv:mt&&M(C.bumpMap.channel),normalMapUv:ft&&M(C.normalMap.channel),displacementMapUv:je&&M(C.displacementMap.channel),emissiveMapUv:Rt&&M(C.emissiveMap.channel),metalnessMapUv:Ge&&M(C.metalnessMap.channel),roughnessMapUv:I&&M(C.roughnessMap.channel),anisotropyMapUv:Re&&M(C.anisotropyMap.channel),clearcoatMapUv:qe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:$e&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(C.sheenRoughnessMap.channel),specularMapUv:dt&&M(C.specularMap.channel),specularColorMapUv:it&&M(C.specularColorMap.channel),specularIntensityMapUv:At&&M(C.specularIntensityMap.channel),transmissionMapUv:W&&M(C.transmissionMap.channel),thicknessMapUv:Ce&&M(C.thicknessMap.channel),alphaMapUv:pe&&M(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ft||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ue.attributes.uv&&(Dt||pe),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Dt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ct,decodeVideoTextureEmissive:Rt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ct,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fr,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return rn.vertexUv1s=p.has(1),rn.vertexUv2s=p.has(2),rn.vertexUv3s=p.has(3),p.clear(),rn}function y(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)w.push(z),w.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(D(w,C),L(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function D(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const w=E[C.type];let z;if(w){const ie=zi[w];z=Wu.clone(ie.uniforms)}else z=C.uniforms;return z}function V(C,w){let z;for(let ie=0,K=g.length;ie<K;ie++){const ae=g[ie];if(ae.cacheKey===w){z=ae,++z.usedTimes;break}}return z===void 0&&(z=new TR(r,w,C,l),g.push(z)),z}function U(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function A(C){h.remove(C)}function F(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:P,acquireProgram:V,releaseProgram:U,releaseShaderCache:A,programs:g,dispose:F}}function bR(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function PR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function B0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function H0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(m,v,S,E,M,x){let y=r[e];return y===void 0?(y={id:m.id,object:m,geometry:v,material:S,groupOrder:E,renderOrder:m.renderOrder,z:M,group:x},r[e]=y):(y.id=m.id,y.object=m,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=m.renderOrder,y.z=M,y.group=x),e++,y}function f(m,v,S,E,M,x){const y=c(m,v,S,E,M,x);S.transmission>0?s.push(y):S.transparent===!0?o.push(y):t.push(y)}function h(m,v,S,E,M,x){const y=c(m,v,S,E,M,x);S.transmission>0?s.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(m,v){t.length>1&&t.sort(m||PR),s.length>1&&s.sort(v||B0),o.length>1&&o.sort(v||B0)}function g(){for(let m=e,v=r.length;m<v;m++){const S=r[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function LR(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new H0,r.set(s,[c])):o>=l.length?(c=new H0,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function DR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new lt};break;case"SpotLight":t={position:new X,direction:new X,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function IR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let UR=0;function NR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FR(r){const e=new DR,t=IR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const o=new X,l=new Lt,c=new Lt;function f(p){let g=0,m=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,M=0,x=0,y=0,D=0,L=0,P=0,V=0,U=0,A=0;p.sort(NR);for(let C=0,w=p.length;C<w;C++){const z=p[C],ie=z.color,K=z.intensity,ae=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=ie.r*K,m+=ie.g*K,v+=ie.b*K;else if(z.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(z.sh.coefficients[te],K);A++}else if(z.isDirectionalLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,k=t.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=ue,s.directionalShadowMatrix[S]=z.shadow.matrix,D++}s.directional[S]=te,S++}else if(z.isSpotLight){const te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(ie).multiplyScalar(K),te.distance=ae,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,s.spot[M]=te;const de=z.shadow;if(z.map&&(s.spotLightMap[V]=z.map,V++,de.updateMatrices(z),z.castShadow&&U++),s.spotLightMatrix[M]=de.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,s.spotShadow[M]=k,s.spotShadowMap[M]=ue,P++}M++}else if(z.isRectAreaLight){const te=e.get(z);te.color.copy(ie).multiplyScalar(K),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),s.rectArea[x]=te,x++}else if(z.isPointLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){const de=z.shadow,k=t.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,k.shadowCameraNear=de.camera.near,k.shadowCameraFar=de.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=z.shadow.matrix,L++}s.point[E]=te,E++}else if(z.isHemisphereLight){const te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(K),te.groundColor.copy(z.groundColor).multiplyScalar(K),s.hemi[y]=te,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=m,s.ambient[2]=v;const F=s.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==y||F.numDirectionalShadows!==D||F.numPointShadows!==L||F.numSpotShadows!==P||F.numSpotMaps!==V||F.numLightProbes!==A)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=x,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+V-U,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=A,F.directionalLength=S,F.pointLength=E,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=y,F.numDirectionalShadows=D,F.numPointShadows=L,F.numSpotShadows=P,F.numSpotMaps=V,F.numLightProbes=A,s.version=UR++)}function h(p,g){let m=0,v=0,S=0,E=0,M=0;const x=g.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const L=p[y];if(L.isDirectionalLight){const P=s.directional[m];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),m++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(L.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),v++}else if(L.isHemisphereLight){const P=s.hemi[M];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(x),M++}}}return{setup:f,setupView:h,state:s}}function V0(r){const e=new FR(r),t=[],s=[];function o(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function OR(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new V0(r),e.set(o,[f])):l>=c.length?(f=new V0(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zR=`uniform sampler2D shadow_pass;
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
}`;function BR(r,e,t){let s=new Oh;const o=new ot,l=new ot,c=new Vt,f=new r1({depthPacking:tE}),h=new s1,p={},g=t.maxTextureSize,m={[_r]:zn,[zn]:_r,[fr]:fr},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:kR,fragmentShader:zR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ri(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let y=this.type;this.render=function(U,A,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(Yr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const K=y!==ur&&this.type===ur,ae=y===ur&&this.type!==ur;for(let ue=0,te=U.length;ue<te;ue++){const de=U[ue],k=de.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const se=k.getFrameExtents();if(o.multiply(se),l.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/se.x),o.x=l.x*se.x,k.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/se.y),o.y=l.y*se.y,k.mapSize.y=l.y)),k.map===null||K===!0||ae===!0){const O=this.type!==ur?{minFilter:Ci,magFilter:Ci}:{};k.map!==null&&k.map.dispose(),k.map=new qr(o.x,o.y,O),k.map.texture.name=de.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const Z=k.getViewportCount();for(let O=0;O<Z;O++){const ne=k.getViewport(O);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ie.viewport(c),k.updateMatrices(de,O),s=k.getFrustum(),P(A,F,k.camera,de,this.type)}k.isPointLightShadow!==!0&&this.type===ur&&D(k,F),k.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(C,w,z)};function D(U,A){const F=e.update(M);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new qr(o.x,o.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(A,null,F,v,M,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(A,null,F,S,M,null)}function L(U,A,F,C){let w=null;const z=F.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)w=z;else if(w=F.isPointLight===!0?h:f,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const ie=w.uuid,K=A.uuid;let ae=p[ie];ae===void 0&&(ae={},p[ie]=ae);let ue=ae[K];ue===void 0&&(ue=w.clone(),ae[K]=ue,A.addEventListener("dispose",V)),w=ue}if(w.visible=A.visible,w.wireframe=A.wireframe,C===ur?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:m[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ie=r.properties.get(w);ie.light=F}return w}function P(U,A,F,C,w){if(U.visible===!1)return;if(U.layers.test(A.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ur)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld);const K=e.update(U),ae=U.material;if(Array.isArray(ae)){const ue=K.groups;for(let te=0,de=ue.length;te<de;te++){const k=ue[te],se=ae[k.materialIndex];if(se&&se.visible){const Z=L(U,se,C,w);U.onBeforeShadow(r,U,A,F,K,Z,k),r.renderBufferDirect(F,null,K,Z,U,k),U.onAfterShadow(r,U,A,F,K,Z,k)}}}else if(ae.visible){const ue=L(U,ae,C,w);U.onBeforeShadow(r,U,A,F,K,ue,null),r.renderBufferDirect(F,null,K,ue,U,null),U.onAfterShadow(r,U,A,F,K,ue,null)}}const ie=U.children;for(let K=0,ae=ie.length;K<ae;K++)P(ie[K],A,F,C,w)}function V(U){U.target.removeEventListener("dispose",V);for(const F in p){const C=p[F],w=U.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const HR={[Ud]:Nd,[Fd]:zd,[Od]:Bd,[Ao]:kd,[Nd]:Ud,[zd]:Fd,[Bd]:Od,[kd]:Ao};function VR(r,e){function t(){let W=!1;const Ce=new Vt;let le=null;const pe=new Vt(0,0,0,0);return{setMask:function(Le){le!==Le&&!W&&(r.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Pe,rt,Nt,rn){rn===!0&&(Le*=Nt,Pe*=Nt,rt*=Nt),Ce.set(Le,Pe,rt,Nt),pe.equals(Ce)===!1&&(r.clearColor(Le,Pe,rt,Nt),pe.copy(Ce))},reset:function(){W=!1,le=null,pe.set(-1,0,0,0)}}}function s(){let W=!1,Ce=!1,le=null,pe=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=Pe;const Nt=Le;Le=null,this.setClear(Nt)}},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!W&&(r.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(Ce&&(Pe=HR[Pe]),pe!==Pe){switch(Pe){case Ud:r.depthFunc(r.NEVER);break;case Nd:r.depthFunc(r.ALWAYS);break;case Fd:r.depthFunc(r.LESS);break;case Ao:r.depthFunc(r.LEQUAL);break;case Od:r.depthFunc(r.EQUAL);break;case kd:r.depthFunc(r.GEQUAL);break;case zd:r.depthFunc(r.GREATER);break;case Bd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),r.clearDepth(Pe),Le=Pe)},reset:function(){W=!1,le=null,pe=null,Le=null,Ce=!1}}}function o(){let W=!1,Ce=null,le=null,pe=null,Le=null,Pe=null,rt=null,Nt=null,rn=null;return{setTest:function(yt){W||(yt?ve(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!W&&(r.stencilMask(yt),Ce=yt)},setFunc:function(yt,Hn,Dn){(le!==yt||pe!==Hn||Le!==Dn)&&(r.stencilFunc(yt,Hn,Dn),le=yt,pe=Hn,Le=Dn)},setOp:function(yt,Hn,Dn){(Pe!==yt||rt!==Hn||Nt!==Dn)&&(r.stencilOp(yt,Hn,Dn),Pe=yt,rt=Hn,Nt=Dn)},setLocked:function(yt){W=yt},setClear:function(yt){rn!==yt&&(r.clearStencil(yt),rn=yt)},reset:function(){W=!1,Ce=null,le=null,pe=null,Le=null,Pe=null,rt=null,Nt=null,rn=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let g={},m={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,D=null,L=null,P=null,V=null,U=null,A=new lt(0,0,0),F=0,C=!1,w=null,z=null,ie=null,K=null,ae=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,de=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(k)[1]),te=de>=1):k.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),te=de>=2);let se=null,Z={};const O=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ae=new Vt().fromArray(O),J=new Vt().fromArray(ne);function fe(W,Ce,le,pe){const Le=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(W,Pe),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<le;rt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ce+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Pe}const ye={};ye[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),c.setFunc(Ao),mt(!1),ft(Ng),ve(r.CULL_FACE),H(Yr);function ve(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Xe(W,Ce){return m[W]!==Ce?(r.bindFramebuffer(W,Ce),m[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ve(W,Ce){let le=S,pe=!1;if(W){le=v.get(Ce),le===void 0&&(le=[],v.set(Ce,le));const Le=W.textures;if(le.length!==Le.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)le[Pe]=r.COLOR_ATTACHMENT0+Pe;le.length=Le.length,pe=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,pe=!0);pe&&r.drawBuffers(le)}function Dt(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const It={[ys]:r.FUNC_ADD,[RM]:r.FUNC_SUBTRACT,[CM]:r.FUNC_REVERSE_SUBTRACT};It[bM]=r.MIN,It[PM]=r.MAX;const ct={[LM]:r.ZERO,[DM]:r.ONE,[IM]:r.SRC_COLOR,[Dd]:r.SRC_ALPHA,[zM]:r.SRC_ALPHA_SATURATE,[OM]:r.DST_COLOR,[NM]:r.DST_ALPHA,[UM]:r.ONE_MINUS_SRC_COLOR,[Id]:r.ONE_MINUS_SRC_ALPHA,[kM]:r.ONE_MINUS_DST_COLOR,[FM]:r.ONE_MINUS_DST_ALPHA,[BM]:r.CONSTANT_COLOR,[HM]:r.ONE_MINUS_CONSTANT_COLOR,[VM]:r.CONSTANT_ALPHA,[GM]:r.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ce,le,pe,Le,Pe,rt,Nt,rn,yt){if(W===Yr){M===!0&&(Te(r.BLEND),M=!1);return}if(M===!1&&(ve(r.BLEND),M=!0),W!==AM){if(W!==x||yt!==C){if((y!==ys||P!==ys)&&(r.blendEquation(r.FUNC_ADD),y=ys,P=ys),yt)switch(W){case Eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fg:r.blendFunc(r.ONE,r.ONE);break;case Og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,L=null,V=null,U=null,A.set(0,0,0),F=0,x=W,C=yt}return}Le=Le||Ce,Pe=Pe||le,rt=rt||pe,(Ce!==y||Le!==P)&&(r.blendEquationSeparate(It[Ce],It[Le]),y=Ce,P=Le),(le!==D||pe!==L||Pe!==V||rt!==U)&&(r.blendFuncSeparate(ct[le],ct[pe],ct[Pe],ct[rt]),D=le,L=pe,V=Pe,U=rt),(Nt.equals(A)===!1||rn!==F)&&(r.blendColor(Nt.r,Nt.g,Nt.b,rn),A.copy(Nt),F=rn),x=W,C=!1}function Ln(W,Ce){W.side===fr?Te(r.CULL_FACE):ve(r.CULL_FACE);let le=W.side===zn;Ce&&(le=!le),mt(le),W.blending===Eo&&W.transparent===!1?H(Yr):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;f.setTest(pe),pe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function ft(W){W!==EM?(ve(r.CULL_FACE),W!==z&&(W===Ng?r.cullFace(r.BACK):W===TM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),z=W}function je(W){W!==ie&&(te&&r.lineWidth(W),ie=W)}function Rt(W,Ce,le){W?(ve(r.POLYGON_OFFSET_FILL),(K!==Ce||ae!==le)&&(r.polygonOffset(Ce,le),K=Ce,ae=le)):Te(r.POLYGON_OFFSET_FILL)}function Ge(W){W?ve(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function I(W){W===void 0&&(W=r.TEXTURE0+ue-1),se!==W&&(r.activeTexture(W),se=W)}function R(W,Ce,le){le===void 0&&(se===null?le=r.TEXTURE0+ue-1:le=se);let pe=Z[le];pe===void 0&&(pe={type:void 0,texture:void 0},Z[le]=pe),(pe.type!==W||pe.texture!==Ce)&&(se!==le&&(r.activeTexture(le),se=le),r.bindTexture(W,Ce||ye[W]),pe.type=W,pe.texture=Ce)}function ee(){const W=Z[se];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){Ae.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function Fe(W){J.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function dt(W,Ce){let le=p.get(Ce);le===void 0&&(le=new WeakMap,p.set(Ce,le));let pe=le.get(W);pe===void 0&&(pe=r.getUniformBlockIndex(Ce,W.name),le.set(W,pe))}function it(W,Ce){const pe=p.get(Ce).get(W);h.get(Ce)!==pe&&(r.uniformBlockBinding(Ce,pe,W.__bindingPointIndex),h.set(Ce,pe))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},se=null,Z={},m={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,D=null,L=null,P=null,V=null,U=null,A=new lt(0,0,0),F=0,C=!1,w=null,z=null,ie=null,K=null,ae=null,Ae.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:Te,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:Dt,setBlending:H,setMaterial:Ln,setFlipSided:mt,setCullFace:ft,setLineWidth:je,setPolygonOffset:Rt,setScissorTest:Ge,activeTexture:I,bindTexture:R,unbindTexture:ee,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Ne,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:$e,texStorage3D:xe,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:qe,scissor:et,viewport:Fe,reset:At}}function GR(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,g=new WeakMap;let m;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,R){return S?new OffscreenCanvas(I,R):Oa("canvas")}function M(I,R,ee){let he=1;const _e=Ge(I);if((_e.width>ee||_e.height>ee)&&(he=ee/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(he*_e.width),He=Math.floor(he*_e.height);m===void 0&&(m=E(ce,He));const Re=R?E(ce,He):m;return Re.width=ce,Re.height=He,Re.getContext("2d").drawImage(I,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ce+"x"+He+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function x(I){return I.generateMipmaps}function y(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,R,ee,he,_e=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=R;if(R===r.RED&&(ee===r.FLOAT&&(ce=r.R32F),ee===r.HALF_FLOAT&&(ce=r.R16F),ee===r.UNSIGNED_BYTE&&(ce=r.R8)),R===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ce=r.R8UI),ee===r.UNSIGNED_SHORT&&(ce=r.R16UI),ee===r.UNSIGNED_INT&&(ce=r.R32UI),ee===r.BYTE&&(ce=r.R8I),ee===r.SHORT&&(ce=r.R16I),ee===r.INT&&(ce=r.R32I)),R===r.RG&&(ee===r.FLOAT&&(ce=r.RG32F),ee===r.HALF_FLOAT&&(ce=r.RG16F),ee===r.UNSIGNED_BYTE&&(ce=r.RG8)),R===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ce=r.RG8UI),ee===r.UNSIGNED_SHORT&&(ce=r.RG16UI),ee===r.UNSIGNED_INT&&(ce=r.RG32UI),ee===r.BYTE&&(ce=r.RG8I),ee===r.SHORT&&(ce=r.RG16I),ee===r.INT&&(ce=r.RG32I)),R===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),ee===r.UNSIGNED_INT&&(ce=r.RGB32UI),ee===r.BYTE&&(ce=r.RGB8I),ee===r.SHORT&&(ce=r.RGB16I),ee===r.INT&&(ce=r.RGB32I)),R===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),ee===r.UNSIGNED_INT&&(ce=r.RGBA32UI),ee===r.BYTE&&(ce=r.RGBA8I),ee===r.SHORT&&(ce=r.RGBA16I),ee===r.INT&&(ce=r.RGBA32I)),R===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),R===r.RGBA){const He=_e?Vu:Et.getTransfer(he);ee===r.FLOAT&&(ce=r.RGBA32F),ee===r.HALF_FLOAT&&(ce=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ce=He===Ct?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(I,R){let ee;return I?R===null||R===Es||R===Ia?ee=r.DEPTH24_STENCIL8:R===dr?ee=r.DEPTH32F_STENCIL8:R===Da&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Es||R===Ia?ee=r.DEPTH_COMPONENT24:R===dr?ee=r.DEPTH_COMPONENT32F:R===Da&&(ee=r.DEPTH_COMPONENT16),ee}function V(I,R){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ci&&I.minFilter!==Bi?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function U(I){const R=I.target;R.removeEventListener("dispose",U),F(R),R.isVideoTexture&&g.delete(R)}function A(I){const R=I.target;R.removeEventListener("dispose",A),w(R)}function F(I){const R=s.get(I);if(R.__webglInit===void 0)return;const ee=I.source,he=v.get(ee);if(he){const _e=he[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(I),Object.keys(he).length===0&&v.delete(ee)}s.remove(I)}function C(I){const R=s.get(I);r.deleteTexture(R.__webglTexture);const ee=I.source,he=v.get(ee);delete he[R.__cacheKey],c.memory.textures--}function w(I){const R=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(R.__webglFramebuffer[he]))for(let _e=0;_e<R.__webglFramebuffer[he].length;_e++)r.deleteFramebuffer(R.__webglFramebuffer[he][_e]);else r.deleteFramebuffer(R.__webglFramebuffer[he]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[he])}else{if(Array.isArray(R.__webglFramebuffer))for(let he=0;he<R.__webglFramebuffer.length;he++)r.deleteFramebuffer(R.__webglFramebuffer[he]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=I.textures;for(let he=0,_e=ee.length;he<_e;he++){const ce=s.get(ee[he]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(ee[he])}s.remove(I)}let z=0;function ie(){z=0}function K(){const I=z;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),z+=1,I}function ae(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function ue(I,R){const ee=s.get(I);if(I.isVideoTexture&&je(I),I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ee,I,R);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+R)}function te(I,R){const ee=s.get(I);if(I.version>0&&ee.__version!==I.version){J(ee,I,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+R)}function de(I,R){const ee=s.get(I);if(I.version>0&&ee.__version!==I.version){J(ee,I,R);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+R)}function k(I,R){const ee=s.get(I);if(I.version>0&&ee.__version!==I.version){fe(ee,I,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+R)}const se={[Hu]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Gd]:r.MIRRORED_REPEAT},Z={[Ci]:r.NEAREST,[JM]:r.NEAREST_MIPMAP_NEAREST,[eu]:r.NEAREST_MIPMAP_LINEAR,[Bi]:r.LINEAR,[qf]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},O={[iE]:r.NEVER,[uE]:r.ALWAYS,[rE]:r.LESS,[R_]:r.LEQUAL,[sE]:r.EQUAL,[lE]:r.GEQUAL,[oE]:r.GREATER,[aE]:r.NOTEQUAL};function ne(I,R){if(R.type===dr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Bi||R.magFilter===qf||R.magFilter===eu||R.magFilter===Ms||R.minFilter===Bi||R.minFilter===qf||R.minFilter===eu||R.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,se[R.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,se[R.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,se[R.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Z[R.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ci||R.minFilter!==eu&&R.minFilter!==Ms||R.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Ae(I,R){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",U));const he=R.source;let _e=v.get(he);_e===void 0&&(_e={},v.set(he,_e));const ce=ae(R);if(ce!==I.__cacheKey){_e[ce]===void 0&&(_e[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),_e[ce].usedTimes++;const He=_e[I.__cacheKey];He!==void 0&&(_e[I.__cacheKey].usedTimes--,He.usedTimes===0&&C(R)),I.__cacheKey=ce,I.__webglTexture=_e[ce].texture}return ee}function J(I,R,ee){let he=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(he=r.TEXTURE_3D);const _e=Ae(I,R),ce=R.source;t.bindTexture(he,I.__webglTexture,r.TEXTURE0+ee);const He=s.get(ce);if(ce.version!==He.__version||_e===!0){t.activeTexture(r.TEXTURE0+ee);const Re=Et.getPrimaries(Et.workingColorSpace),qe=R.colorSpace===jr?null:Et.getPrimaries(R.colorSpace),$e=R.colorSpace===jr||Re===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let xe=M(R.image,!1,o.maxTextureSize);xe=Rt(R,xe);const Ne=l.convert(R.format,R.colorSpace),Je=l.convert(R.type);let et=L(R.internalFormat,Ne,Je,R.colorSpace,R.isVideoTexture);ne(he,R);let Fe;const dt=R.mipmaps,it=R.isVideoTexture!==!0,At=He.__version===void 0||_e===!0,W=ce.dataReady,Ce=V(R,xe);if(R.isDepthTexture)et=P(R.format===Na,R.type),At&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,null));else if(R.isDataTexture)if(dt.length>0){it&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let le=0,pe=dt.length;le<pe;le++)Fe=dt[le],it?W&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,le,et,Fe.width,Fe.height,0,Ne,Je,Fe.data);R.generateMipmaps=!1}else it?(At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,xe.width,xe.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Ne,Je,xe.data)):t.texImage2D(r.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,xe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,dt[0].width,dt[0].height,xe.depth);for(let le=0,pe=dt.length;le<pe;le++)if(Fe=dt[le],R.format!==Ri)if(Ne!==null)if(it){if(W)if(R.layerUpdates.size>0){const Le=v0(Fe.width,Fe.height,R.format,R.type);for(const Pe of R.layerUpdates){const rt=Fe.data.subarray(Pe*Le/Fe.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Pe,Fe.width,Fe.height,1,Ne,rt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,et,Fe.width,Fe.height,xe.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Je,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,et,Fe.width,Fe.height,xe.depth,0,Ne,Je,Fe.data)}else{it&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let le=0,pe=dt.length;le<pe;le++)Fe=dt[le],R.format!==Ri?Ne!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,le,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,le,et,Fe.width,Fe.height,0,Ne,Je,Fe.data)}else if(R.isDataArrayTexture)if(it){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,xe.width,xe.height,xe.depth),W)if(R.layerUpdates.size>0){const le=v0(xe.width,xe.height,R.format,R.type);for(const pe of R.layerUpdates){const Le=xe.data.subarray(pe*le/xe.data.BYTES_PER_ELEMENT,(pe+1)*le/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,xe.width,xe.height,1,Ne,Je,Le)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(R.isData3DTexture)it?(At&&t.texStorage3D(r.TEXTURE_3D,Ce,et,xe.width,xe.height,xe.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)):t.texImage3D(r.TEXTURE_3D,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(R.isFramebufferTexture){if(At)if(it)t.texStorage2D(r.TEXTURE_2D,Ce,et,xe.width,xe.height);else{let le=xe.width,pe=xe.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(r.TEXTURE_2D,Le,et,le,pe,0,Ne,Je,null),le>>=1,pe>>=1}}else if(dt.length>0){if(it&&At){const le=Ge(dt[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,le.width,le.height)}for(let le=0,pe=dt.length;le<pe;le++)Fe=dt[le],it?W&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Ne,Je,Fe):t.texImage2D(r.TEXTURE_2D,le,et,Ne,Je,Fe);R.generateMipmaps=!1}else if(it){if(At){const le=Ge(xe);t.texStorage2D(r.TEXTURE_2D,Ce,et,le.width,le.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,xe)}else t.texImage2D(r.TEXTURE_2D,0,et,Ne,Je,xe);x(R)&&y(he),He.__version=ce.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function fe(I,R,ee){if(R.image.length!==6)return;const he=Ae(I,R),_e=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+ee);const ce=s.get(_e);if(_e.version!==ce.__version||he===!0){t.activeTexture(r.TEXTURE0+ee);const He=Et.getPrimaries(Et.workingColorSpace),Re=R.colorSpace===jr?null:Et.getPrimaries(R.colorSpace),qe=R.colorSpace===jr||He===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const $e=R.isCompressedTexture||R.image[0].isCompressedTexture,xe=R.image[0]&&R.image[0].isDataTexture,Ne=[];for(let pe=0;pe<6;pe++)!$e&&!xe?Ne[pe]=M(R.image[pe],!0,o.maxCubemapSize):Ne[pe]=xe?R.image[pe].image:R.image[pe],Ne[pe]=Rt(R,Ne[pe]);const Je=Ne[0],et=l.convert(R.format,R.colorSpace),Fe=l.convert(R.type),dt=L(R.internalFormat,et,Fe,R.colorSpace),it=R.isVideoTexture!==!0,At=ce.__version===void 0||he===!0,W=_e.dataReady;let Ce=V(R,Je);ne(r.TEXTURE_CUBE_MAP,R);let le;if($e){it&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,dt,Je.width,Je.height);for(let pe=0;pe<6;pe++){le=Ne[pe].mipmaps;for(let Le=0;Le<le.length;Le++){const Pe=le[Le];R.format!==Ri?et!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,et,Fe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,Pe.width,Pe.height,0,et,Fe,Pe.data)}}}else{if(le=R.mipmaps,it&&At){le.length>0&&Ce++;const pe=Ge(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(xe){it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ne[pe].width,Ne[pe].height,et,Fe,Ne[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Ne[pe].width,Ne[pe].height,0,et,Fe,Ne[pe].data);for(let Le=0;Le<le.length;Le++){const rt=le[Le].image[pe].image;it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt.width,rt.height,et,Fe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,rt.width,rt.height,0,et,Fe,rt.data)}}else{it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Fe,Ne[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,et,Fe,Ne[pe]);for(let Le=0;Le<le.length;Le++){const Pe=le[Le];it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,et,Fe,Pe.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,et,Fe,Pe.image[pe])}}}x(R)&&y(r.TEXTURE_CUBE_MAP),ce.__version=_e.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ye(I,R,ee,he,_e,ce){const He=l.convert(ee.format,ee.colorSpace),Re=l.convert(ee.type),qe=L(ee.internalFormat,He,Re,ee.colorSpace),$e=s.get(R),xe=s.get(ee);if(xe.__renderTarget=R,!$e.__hasExternalTextures){const Ne=Math.max(1,R.width>>ce),Je=Math.max(1,R.height>>ce);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,ce,qe,Ne,Je,R.depth,0,He,Re,null):t.texImage2D(_e,ce,qe,Ne,Je,0,He,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),ft(R)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,_e,xe.__webglTexture,0,mt(R)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,_e,xe.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(I,R,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,I),R.depthBuffer){const he=R.depthTexture,_e=he&&he.isDepthTexture?he.type:null,ce=P(R.stencilBuffer,_e),He=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=mt(R);ft(R)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ce,R.width,R.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ce,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,I)}else{const he=R.textures;for(let _e=0;_e<he.length;_e++){const ce=he[_e],He=l.convert(ce.format,ce.colorSpace),Re=l.convert(ce.type),qe=L(ce.internalFormat,He,Re,ce.colorSpace),$e=mt(R);ee&&ft(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,qe,R.width,R.height):ft(R)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,qe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,qe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(R.depthTexture);he.__renderTarget=R,(!he.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ue(R.depthTexture,0);const _e=he.__webglTexture,ce=mt(R);if(R.depthTexture.format===Ua)ft(R)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(R.depthTexture.format===Na)ft(R)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(I){const R=s.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),he){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=he}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const he=I.texture.mipmaps;he&&he.length>0?Te(R.__webglFramebuffer[0],I):Te(R.__webglFramebuffer,I)}else if(ee){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]===void 0)R.__webglDepthbuffer[he]=r.createRenderbuffer(),ve(R.__webglDepthbuffer[he],I,!1);else{const _e=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ce)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),ve(R.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,R,ee){const he=s.get(I);R!==void 0&&ye(he.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Xe(I)}function Dt(I){const R=I.texture,ee=s.get(I),he=s.get(R);I.addEventListener("dispose",A);const _e=I.textures,ce=I.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=R.version,c.memory.textures++),ce){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let qe=0;qe<R.mipmaps.length;qe++)ee.__webglFramebuffer[Re][qe]=r.createFramebuffer()}else ee.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(He)for(let Re=0,qe=_e.length;Re<qe;Re++){const $e=s.get(_e[Re]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&ft(I)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const qe=_e[Re];ee.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);const $e=l.convert(qe.format,qe.colorSpace),xe=l.convert(qe.type),Ne=L(qe.internalFormat,$e,xe,qe.colorSpace,I.isXRRenderTarget===!0),Je=mt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ne(r.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let qe=0;qe<R.mipmaps.length;qe++)ye(ee.__webglFramebuffer[Re][qe],I,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe);else ye(ee.__webglFramebuffer[Re],I,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(R)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Re=0,qe=_e.length;Re<qe;Re++){const $e=_e[Re],xe=s.get($e);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),ne(r.TEXTURE_2D,$e),ye(ee.__webglFramebuffer,I,$e,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x($e)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,he.__webglTexture),ne(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let qe=0;qe<R.mipmaps.length;qe++)ye(ee.__webglFramebuffer[qe],I,R,r.COLOR_ATTACHMENT0,Re,qe);else ye(ee.__webglFramebuffer,I,R,r.COLOR_ATTACHMENT0,Re,0);x(R)&&y(Re),t.unbindTexture()}I.depthBuffer&&Xe(I)}function It(I){const R=I.textures;for(let ee=0,he=R.length;ee<he;ee++){const _e=R[ee];if(x(_e)){const ce=D(I),He=s.get(_e).__webglTexture;t.bindTexture(ce,He),y(ce),t.unbindTexture()}}}const ct=[],H=[];function Ln(I){if(I.samples>0){if(ft(I)===!1){const R=I.textures,ee=I.width,he=I.height;let _e=r.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(I),Re=R.length>1;if(Re)for(let $e=0;$e<R.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const qe=I.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let $e=0;$e<R.length;$e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const xe=s.get(R[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,ee,he,0,0,ee,he,_e,r.NEAREST),h===!0&&(ct.length=0,H.length=0,ct.push(r.COLOR_ATTACHMENT0+$e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ct.push(ce),H.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let $e=0;$e<R.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const xe=s.get(R[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const R=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function mt(I){return Math.min(o.maxSamples,I.samples)}function ft(I){const R=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function je(I){const R=c.render.frame;g.get(I)!==R&&(g.set(I,R),I.update())}function Rt(I,R){const ee=I.colorSpace,he=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==bo&&ee!==jr&&(Et.getTransfer(ee)===Ct?(he!==Ri||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=ie,this.setTexture2D=ue,this.setTexture2DArray=te,this.setTexture3D=de,this.setTextureCube=k,this.rebindTextures=Ve,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ft}function WR(r,e){function t(s,o=jr){let l;const c=Et.getTransfer(o);if(s===Gi)return r.UNSIGNED_BYTE;if(s===bh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return r.UNSIGNED_SHORT_5_5_5_1;if(s===S_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===y_)return r.BYTE;if(s===x_)return r.SHORT;if(s===Da)return r.UNSIGNED_SHORT;if(s===Ch)return r.INT;if(s===Es)return r.UNSIGNED_INT;if(s===dr)return r.FLOAT;if(s===Ha)return r.HALF_FLOAT;if(s===M_)return r.ALPHA;if(s===E_)return r.RGB;if(s===Ri)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Na)return r.DEPTH_STENCIL;if(s===T_)return r.RED;if(s===Lh)return r.RED_INTEGER;if(s===w_)return r.RG;if(s===Dh)return r.RG_INTEGER;if(s===Ih)return r.RGBA_INTEGER;if(s===Pu||s===Lu||s===Du||s===Iu)if(c===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Pu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Pu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Du)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Iu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===Xd||s===jd||s===Yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Wd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$d||s===qd||s===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===$d||s===qd)return c===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Kd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Zd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ih)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ah)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uh)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ch)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uu||s===fh||s===dh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Uu)return c===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===A_||s===hh||s===ph||s===mh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Uu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===hh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ph)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ia?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const XR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jR=`
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

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Xi({vertexShader:XR,fragmentShader:jR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Ga(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $R extends As{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,m=null,v=null,S=null,E=null;const M=new YR,x=t.getContextAttributes();let y=null,D=null;const L=[],P=[],V=new ot;let U=null;const A=new ni;A.viewport=new Vt;const F=new ni;F.viewport=new Vt;const C=[A,F],w=new p1;let z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=L[J];return fe===void 0&&(fe=new md,L[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=L[J];return fe===void 0&&(fe=new md,L[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=L[J];return fe===void 0&&(fe=new md,L[J]=fe),fe.getHandSpace()};function K(J){const fe=P.indexOf(J.inputSource);if(fe===-1)return;const ye=L[fe];ye!==void 0&&(ye.update(J.inputSource,J.frame,p||c),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function ae(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",ue);for(let J=0;J<L.length;J++){const fe=P[J];fe!==null&&(P[J]=null,L[J].disconnect(fe))}z=null,ie=null,M.reset(),e.setRenderTarget(y),S=null,v=null,m=null,o=null,D=null,Ae.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",ue),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ve=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Na:Ua,ve=x.stencil?Ia:Es);const Xe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};m=new XRWebGLBinding(o,t),v=m.createProjectionLayer(Xe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new qr(v.textureWidth,v.textureHeight,{format:Ri,type:Gi,depthTexture:new k_(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new qr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ae.setContext(o),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(J){for(let fe=0;fe<J.removed.length;fe++){const ye=J.removed[fe],ve=P.indexOf(ye);ve>=0&&(P[ve]=null,L[ve].disconnect(ye))}for(let fe=0;fe<J.added.length;fe++){const ye=J.added[fe];let ve=P.indexOf(ye);if(ve===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=P.length){P.push(ye),ve=Xe;break}else if(P[Xe]===null){P[Xe]=ye,ve=Xe;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(ye)}}const te=new X,de=new X;function k(J,fe,ye){te.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(ye.matrixWorld);const ve=te.distanceTo(de),Te=fe.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,Ve=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),It=(Te[9]+1)/Te[5],ct=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],Ln=(Xe[8]+1)/Xe[0],mt=Ve*H,ft=Ve*Ln,je=ve/(-H+Ln),Rt=je*-H;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Rt),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ge=Ve+je,I=Dt+je,R=mt-Rt,ee=ft+(ve-Rt),he=It*Dt/I*Ge,_e=ct*Dt/I*Ge;J.projectionMatrix.makePerspective(R,ee,he,_e,Ge,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,ye=J.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),w.near=F.near=A.near=fe,w.far=F.far=A.far=ye,(z!==w.near||ie!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,ie=w.far),A.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,w.layers.mask=A.layers.mask|F.layers.mask;const ve=J.parent,Te=w.cameras;se(w,ve);for(let Xe=0;Xe<Te.length;Xe++)se(Te[Xe],ve);Te.length===2?k(w,A,F):w.projectionMatrix.copy(A.projectionMatrix),Z(J,w,ve)};function Z(J,fe,ye){ye===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(J){h=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let O=null;function ne(J,fe){if(g=fe.getViewerPose(p||c),E=fe,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Ve=0;Ve<ye.length;Ve++){const Dt=ye[Ve];let It=null;if(S!==null)It=S.getViewport(Dt);else{const H=m.getViewSubImage(v,Dt);It=H.viewport,Ve===0&&(e.setRenderTargetTextures(D,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(D))}let ct=C[Ve];ct===void 0&&(ct=new ni,ct.layers.enable(Ve),ct.viewport=new Vt,C[Ve]=ct),ct.matrix.fromArray(Dt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Dt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(It.x,It.y,It.width,It.height),Ve===0&&(w.matrix.copy(ct.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(ct)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){const Ve=m.getDepthInformation(ye[0]);Ve&&Ve.isValid&&Ve.texture&&M.init(e,Ve,o.renderState)}}for(let ye=0;ye<L.length;ye++){const ve=P[ye],Te=L[ye];ve!==null&&Te!==void 0&&Te.update(ve,fe,p||c)}O&&O(J,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ae=new V_;Ae.setAnimationLoop(ne),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const gs=new bi,qR=new Lt;function KR(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,N_(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,D,L,P){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),m(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,P)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?h(x,y,D,L):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===zn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===zn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const D=e.get(y),L=D.envMap,P=D.envMapRotation;L&&(x.envMap.value=L,gs.copy(P),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),x.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(gs)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,D,L){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*D,x.scale.value=L*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,D){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const D=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function ZR(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const P=L.program;s.uniformBlockBinding(D,P)}function p(D,L){let P=o[D.id];P===void 0&&(E(D),P=g(D),o[D.id]=P,D.addEventListener("dispose",x));const V=L.program;s.updateUBOMapping(D,V);const U=e.render.frame;l[D.id]!==U&&(v(D),l[D.id]=U)}function g(D){const L=m();D.__bindingPointIndex=L;const P=r.createBuffer(),V=D.__size,U=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,V,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function m(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=o[D.id],P=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,A=P.length;U<A;U++){const F=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,w=F.length;C<w;C++){const z=F[C];if(S(z,U,C,V)===!0){const ie=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let ue=0;ue<K.length;ue++){const te=K[ue],de=M(te);typeof te=="number"||typeof te=="boolean"?(z.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,ie+ae,z.__data)):te.isMatrix3?(z.__data[0]=te.elements[0],z.__data[1]=te.elements[1],z.__data[2]=te.elements[2],z.__data[3]=0,z.__data[4]=te.elements[3],z.__data[5]=te.elements[4],z.__data[6]=te.elements[5],z.__data[7]=0,z.__data[8]=te.elements[6],z.__data[9]=te.elements[7],z.__data[10]=te.elements[8],z.__data[11]=0):(te.toArray(z.__data,ae),ae+=de.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ie,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,P,V){const U=D.value,A=L+"_"+P;if(V[A]===void 0)return typeof U=="number"||typeof U=="boolean"?V[A]=U:V[A]=U.clone(),!0;{const F=V[A];if(typeof U=="number"||typeof U=="boolean"){if(F!==U)return V[A]=U,!0}else if(F.equals(U)===!1)return F.copy(U),!0}return!1}function E(D){const L=D.uniforms;let P=0;const V=16;for(let A=0,F=L.length;A<F;A++){const C=Array.isArray(L[A])?L[A]:[L[A]];for(let w=0,z=C.length;w<z;w++){const ie=C[w],K=Array.isArray(ie.value)?ie.value:[ie.value];for(let ae=0,ue=K.length;ae<ue;ae++){const te=K[ae],de=M(te),k=P%V,se=k%de.boundary,Z=k+se;P+=se,Z!==0&&V-Z<de.storage&&(P+=V-Z),ie.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=de.storage}}}const U=P%V;return U>0&&(P+=V-U),D.__size=P,D.__cache={},this}function M(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function x(D){const L=D.target;L.removeEventListener("dispose",x);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:h,update:p,dispose:y}}class QR{constructor(e={}){const{canvas:t=AE(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,y=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let V=!1;this._outputColorSpace=Pn;let U=0,A=0,F=null,C=-1,w=null;const z=new Vt,ie=new Vt;let K=null;const ae=new lt(0);let ue=0,te=t.width,de=t.height,k=1,se=null,Z=null;const O=new Vt(0,0,te,de),ne=new Vt(0,0,te,de);let Ae=!1;const J=new Oh;let fe=!1,ye=!1;const ve=new Lt,Te=new Lt,Xe=new X,Ve=new Vt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ct(){return F===null?k:1}let H=s;function Ln(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ah}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const j="webgl2";if(H=Ln(j,b),H===null)throw Ln(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,ft,je,Rt,Ge,I,R,ee,he,_e,ce,He,Re,qe,$e,xe,Ne,Je,et,Fe,dt,it,At,W;function Ce(){mt=new lA(H),mt.init(),it=new WR(H,mt),ft=new tA(H,mt,e,it),je=new VR(H,mt),ft.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),Rt=new fA(H),Ge=new bR,I=new GR(H,mt,je,Ge,ft,it,Rt),R=new iA(P),ee=new aA(P),he=new _1(H),At=new Jw(H,he),_e=new uA(H,he,Rt,At),ce=new hA(H,_e,he,Rt),et=new dA(H,ft,I),xe=new nA(Ge),He=new CR(P,R,ee,mt,ft,At,xe),Re=new KR(P,Ge),qe=new LR,$e=new OR(mt),Je=new Qw(P,R,ee,je,ce,S,h),Ne=new BR(P,ce,ft),W=new ZR(H,Rt,ft,je),Fe=new eA(H,mt,Rt),dt=new cA(H,mt,Rt),Rt.programs=He.programs,P.capabilities=ft,P.extensions=mt,P.properties=Ge,P.renderLists=qe,P.shadowMap=Ne,P.state=je,P.info=Rt}Ce();const le=new $R(P,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(te,de,!1))},this.getSize=function(b){return b.set(te,de)},this.setSize=function(b,j,oe=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,de=j,t.width=Math.floor(b*k),t.height=Math.floor(j*k),oe===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(te*k,de*k).floor()},this.setDrawingBufferSize=function(b,j,oe){te=b,de=j,k=oe,t.width=Math.floor(b*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,j,oe,q){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,oe,q),je.viewport(z.copy(O).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,j,oe,q){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,j,oe,q),je.scissor(ie.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(b){je.setScissorTest(Ae=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,oe=!0){let q=0;if(b){let Y=!1;if(F!==null){const Me=F.texture.format;Y=Me===Ih||Me===Dh||Me===Lh}if(Y){const Me=F.texture.type,be=Me===Gi||Me===Es||Me===Da||Me===Ia||Me===bh||Me===Ph,De=Je.getClearColor(),Oe=Je.getClearAlpha(),tt=De.r,Qe=De.g,ze=De.b;be?(E[0]=tt,E[1]=Qe,E[2]=ze,E[3]=Oe,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=tt,M[1]=Qe,M[2]=ze,M[3]=Oe,H.clearBufferiv(H.COLOR,0,M))}else q|=H.COLOR_BUFFER_BIT}j&&(q|=H.DEPTH_BUFFER_BIT),oe&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Je.dispose(),qe.dispose(),$e.dispose(),Ge.dispose(),R.dispose(),ee.dispose(),ce.dispose(),At.dispose(),W.dispose(),He.dispose(),le.dispose(),le.removeEventListener("sessionstart",Rs),le.removeEventListener("sessionend",vr),ji.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=Rt.autoReset,j=Ne.enabled,oe=Ne.autoUpdate,q=Ne.needsUpdate,Y=Ne.type;Ce(),Rt.autoReset=b,Ne.enabled=j,Ne.autoUpdate=oe,Ne.needsUpdate=q,Ne.type=Y}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const j=b.target;j.removeEventListener("dispose",rt),Nt(j)}function Nt(b){rn(b),Ge.remove(b)}function rn(b){const j=Ge.get(b).programs;j!==void 0&&(j.forEach(function(oe){He.releaseProgram(oe)}),b.isShaderMaterial&&He.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,oe,q,Y,Me){j===null&&(j=Dt);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,De=Ya(b,j,oe,q,Y);je.setMaterial(q,be);let Oe=oe.index,tt=1;if(q.wireframe===!0){if(Oe=_e.getWireframeAttribute(oe),Oe===void 0)return;tt=2}const Qe=oe.drawRange,ze=oe.attributes.position;let _t=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Me!==null&&(_t=Math.max(_t,Me.start*tt),st=Math.min(st,(Me.start+Me.count)*tt)),Oe!==null?(_t=Math.max(_t,0),st=Math.min(st,Oe.count)):ze!=null&&(_t=Math.max(_t,0),st=Math.min(st,ze.count));const Yt=st-_t;if(Yt<0||Yt===1/0)return;At.setup(Y,q,De,oe,Oe);let zt,vt=Fe;if(Oe!==null&&(zt=he.get(Oe),vt=dt,vt.setIndex(zt)),Y.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*ct()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(Y.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*ct()),Y.isLineSegments?vt.setMode(H.LINES):Y.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else Y.isPoints?vt.setMode(H.POINTS):Y.isSprite&&vt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Fu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,$t=Y._multiDrawCounts,gt=Y._multiDrawCount,Sn=Oe?he.get(Oe).bytesPerElement:1,xr=Ge.get(q).currentProgram.getUniforms();for(let In=0;In<gt;In++)xr.setValue(H,"_gl_DrawID",In),vt.render(Ye[In]/Sn,$t[In])}else if(Y.isInstancedMesh)vt.renderInstances(_t,Yt,Y.count);else if(oe.isInstancedBufferGeometry){const Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,$t=Math.min(oe.instanceCount,Ye);vt.renderInstances(_t,Yt,$t)}else vt.render(_t,Yt)};function yt(b,j,oe){b.transparent===!0&&b.side===fr&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,Cs(b,j,oe),b.side=_r,b.needsUpdate=!0,Cs(b,j,oe),b.side=fr):Cs(b,j,oe)}this.compile=function(b,j,oe=null){oe===null&&(oe=b),y=$e.get(oe),y.init(j),L.push(y),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),b!==oe&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const De=Me[be];yt(De,oe,Y),q.add(De)}else yt(Me,oe,Y),q.add(Me)}),y=L.pop(),q},this.compileAsync=function(b,j,oe=null){const q=this.compile(b,j,oe);return new Promise(Y=>{function Me(){if(q.forEach(function(be){Ge.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){Y(b);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Hn=null;function Dn(b){Hn&&Hn(b)}function Rs(){ji.stop()}function vr(){ji.start()}const ji=new V_;ji.setAnimationLoop(Dn),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(b){Hn=b,le.setAnimationLoop(b),b===null?ji.stop():ji.start()},le.addEventListener("sessionstart",Rs),le.addEventListener("sessionend",vr),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,j,F),y=$e.get(b,L.length),y.init(j),L.push(y),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,fe=xe.init(this.clippingPlanes,ye),x=qe.get(b,D.length),x.init(),D.push(x),le.enabled===!0&&le.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Yi(Me,j,-1/0,P.sortObjects)}Yi(b,j,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(se,Z),It=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,It&&Je.addToRenderList(x,b),this.info.render.frame++,fe===!0&&xe.beginShadows();const oe=y.state.shadowsArray;Ne.render(oe,b,j),fe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,Y=x.transmissive;if(y.setupLights(),j.isArrayCamera){const Me=j.cameras;if(Y.length>0)for(let be=0,De=Me.length;be<De;be++){const Oe=Me[be];Qr(q,Y,b,Oe)}It&&Je.render(b);for(let be=0,De=Me.length;be<De;be++){const Oe=Me[be];Zr(x,b,Oe,Oe.viewport)}}else Y.length>0&&Qr(q,Y,b,j),It&&Je.render(b),Zr(x,b,j);F!==null&&A===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(P,b,j),At.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(y=L[L.length-1],fe===!0&&xe.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function Yi(b,j,oe,q){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){q&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const be=ce.update(b),De=b.material;De.visible&&x.push(b,be,De,oe,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const be=ce.update(b),De=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=be.groups;for(let tt=0,Qe=Oe.length;tt<Qe;tt++){const ze=Oe[tt],_t=De[ze.materialIndex];_t&&_t.visible&&x.push(b,be,_t,oe,Ve.z,ze)}}else De.visible&&x.push(b,be,De,oe,Ve.z,null)}}const Me=b.children;for(let be=0,De=Me.length;be<De;be++)Yi(Me[be],j,oe,q)}function Zr(b,j,oe,q){const Y=b.opaque,Me=b.transmissive,be=b.transparent;y.setupLightsView(oe),fe===!0&&xe.setGlobalState(P.clippingPlanes,oe),q&&je.viewport(z.copy(q)),Y.length>0&&yr(Y,j,oe),Me.length>0&&yr(Me,j,oe),be.length>0&&yr(be,j,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Qr(b,j,oe,q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new qr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ha:Gi,minFilter:Ms,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Me=y.state.transmissionRenderTarget[q.id],be=q.viewport||z;Me.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const De=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(ae),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),It&&Je.render(oe);const Oe=P.toneMapping;P.toneMapping=$r;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),fe===!0&&xe.setGlobalState(P.clippingPlanes,q),yr(b,oe,q),I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,_t=j.length;ze<_t;ze++){const st=j[ze],Yt=st.object,zt=st.geometry,vt=st.material,Ye=st.group;if(vt.side===fr&&Yt.layers.test(q.layers)){const $t=vt.side;vt.side=zn,vt.needsUpdate=!0,Xa(Yt,oe,q,zt,vt,Ye),vt.side=$t,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me))}P.setRenderTarget(De),P.setClearColor(ae,ue),tt!==void 0&&(q.viewport=tt),P.toneMapping=Oe}function yr(b,j,oe){const q=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Me=b.length;Y<Me;Y++){const be=b[Y],De=be.object,Oe=be.geometry,tt=be.group;let Qe=be.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),De.layers.test(oe.layers)&&Xa(De,j,oe,Oe,Qe,tt)}}function Xa(b,j,oe,q,Y,Me){b.onBeforeRender(P,j,oe,q,Y,Me),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(P,j,oe,q,b,Me),Y.transparent===!0&&Y.side===fr&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,P.renderBufferDirect(oe,j,q,Y,b,Me),Y.side=_r,Y.needsUpdate=!0,P.renderBufferDirect(oe,j,q,Y,b,Me),Y.side=fr):P.renderBufferDirect(oe,j,q,Y,b,Me),b.onAfterRender(P,j,oe,q,Y,Me)}function Cs(b,j,oe){j.isScene!==!0&&(j=Dt);const q=Ge.get(b),Y=y.state.lights,Me=y.state.shadowsArray,be=Y.state.version,De=He.getParameters(b,Y.state,Me,j,oe),Oe=He.getProgramCacheKey(De);let tt=q.programs;q.environment=b.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(b.isMeshStandardMaterial?ee:R).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",rt),tt=new Map,q.programs=tt);let Qe=tt.get(Oe);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===be)return Li(b,De),Qe}else De.uniforms=He.getUniforms(b),b.onBeforeCompile(De,P),Qe=He.acquireProgram(De,Oe),tt.set(Oe,Qe),q.uniforms=De.uniforms;const ze=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=xe.uniform),Li(b,De),q.needsLights=uc(b),q.lightsStateVersion=be,q.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function ja(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=ku.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Li(b,j){const oe=Ge.get(b);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Ya(b,j,oe,q,Y){j.isScene!==!0&&(j=Dt),I.resetTextureUnits();const Me=j.fog,be=q.isMeshStandardMaterial?j.environment:null,De=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:bo,Oe=(q.isMeshStandardMaterial?ee:R).get(q.envMap||be),tt=q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Qe=!!oe.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!oe.morphAttributes.position,_t=!!oe.morphAttributes.normal,st=!!oe.morphAttributes.color;let Yt=$r;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Yt=P.toneMapping);const zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,vt=zt!==void 0?zt.length:0,Ye=Ge.get(q),$t=y.state.lights;if(fe===!0&&(ye===!0||b!==w)){const _n=b===w&&q.id===C;xe.setState(q,b,_n)}let gt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==$t.state.version||Ye.outputColorSpace!==De||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Oe||q.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==xe.numPlanes||Ye.numIntersection!==xe.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Qe||Ye.morphTargets!==ze||Ye.morphNormals!==_t||Ye.morphColors!==st||Ye.toneMapping!==Yt||Ye.morphTargetsCount!==vt)&&(gt=!0):(gt=!0,Ye.__version=q.version);let Sn=Ye.currentProgram;gt===!0&&(Sn=Cs(q,j,Y));let xr=!1,In=!1,$i=!1;const Pt=Sn.getUniforms(),Mn=Ye.uniforms;if(je.useProgram(Sn.program)&&(xr=!0,In=!0,$i=!0),q.id!==C&&(C=q.id,In=!0),xr||w!==b){je.buffers.depth.getReversed()?(ve.copy(b.projectionMatrix),CE(ve),bE(ve),Pt.setValue(H,"projectionMatrix",ve)):Pt.setValue(H,"projectionMatrix",b.projectionMatrix),Pt.setValue(H,"viewMatrix",b.matrixWorldInverse);const fn=Pt.map.cameraPosition;fn!==void 0&&fn.setValue(H,Xe.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,In=!0,$i=!0)}if(Y.isSkinnedMesh){Pt.setOptional(H,Y,"bindMatrix"),Pt.setOptional(H,Y,"bindMatrixInverse");const _n=Y.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Pt.setValue(H,"boneTexture",_n.boneTexture,I))}Y.isBatchedMesh&&(Pt.setOptional(H,Y,"batchingTexture"),Pt.setValue(H,"batchingTexture",Y._matricesTexture,I),Pt.setOptional(H,Y,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",Y._indirectTexture,I),Pt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",Y._colorsTexture,I));const cn=oe.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&et.update(Y,oe,Sn),(In||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Pt.setValue(H,"receiveShadow",Y.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Mn.envMap.value=Oe,Mn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&j.environment!==null&&(Mn.envMapIntensity.value=j.environmentIntensity),In&&(Pt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&$a(Mn,$i),Me&&q.fog===!0&&Re.refreshFogUniforms(Mn,Me),Re.refreshMaterialUniforms(Mn,q,k,de,y.state.transmissionRenderTarget[b.id]),ku.upload(H,ja(Ye),Mn,I)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ku.upload(H,ja(Ye),Mn,I),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(H,"center",Y.center),Pt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(H,"normalMatrix",Y.normalMatrix),Pt.setValue(H,"modelMatrix",Y.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const _n=q.uniformsGroups;for(let fn=0,xt=_n.length;fn<xt;fn++){const Di=_n[fn];W.update(Di,Sn),W.bind(Di,Sn)}}return Sn}function $a(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,j,oe){const q=Ge.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ge.get(b.texture).__webglTexture=j,Ge.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:oe,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const oe=Ge.get(b);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const qa=H.createFramebuffer();this.setRenderTarget=function(b,j=0,oe=0){F=b,U=j,A=oe;let q=!0,Y=null,Me=!1,be=!1;if(b){const Oe=Ge.get(b);if(Oe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Oe.__hasExternalTextures)I.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&Ge.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(be=!0);const Qe=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?Y=Qe[j][oe]:Y=Qe[j],Me=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?Y=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[oe]:Y=Qe,z.copy(b.viewport),ie.copy(b.scissor),K=b.scissorTest}else z.copy(O).multiplyScalar(k).floor(),ie.copy(ne).multiplyScalar(k).floor(),K=Ae;if(oe!==0&&(Y=qa),je.bindFramebuffer(H.FRAMEBUFFER,Y)&&q&&je.drawBuffers(b,Y),je.viewport(z),je.scissor(ie),je.setScissorTest(K),Me){const Oe=Ge.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,oe)}else if(be){const Oe=Ge.get(b.texture),tt=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,oe,tt)}else if(b!==null&&oe!==0){const Oe=Ge.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,oe)}C=-1},this.readRenderTargetPixels=function(b,j,oe,q,Y,Me,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(De=De[be]),De){je.bindFramebuffer(H.FRAMEBUFFER,De);try{const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-q&&oe>=0&&oe<=b.height-Y&&H.readPixels(j,oe,q,Y,it.convert(tt),it.convert(Qe),Me)}finally{const Oe=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,j,oe,q,Y,Me,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(De=De[be]),De)if(j>=0&&j<=b.width-q&&oe>=0&&oe<=b.height-Y){je.bindFramebuffer(H.FRAMEBUFFER,De);const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ze),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(j,oe,q,Y,it.convert(tt),it.convert(Qe),0);const _t=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,_t);const st=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await RE(H,st,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(ze),H.deleteSync(st),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,oe=0){const q=Math.pow(2,-oe),Y=Math.floor(b.image.width*q),Me=Math.floor(b.image.height*q),be=j!==null?j.x:0,De=j!==null?j.y:0;I.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,be,De,Y,Me),je.unbindTexture()};const Ka=H.createFramebuffer(),Za=H.createFramebuffer();this.copyTextureToTexture=function(b,j,oe=null,q=null,Y=0,Me=null){Me===null&&(Y!==0?(Fu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let be,De,Oe,tt,Qe,ze,_t,st,Yt;const zt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(oe!==null)be=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,tt=oe.min.x,Qe=oe.min.y,ze=oe.isBox3?oe.min.z:0;else{const cn=Math.pow(2,-Y);be=Math.floor(zt.width*cn),De=Math.floor(zt.height*cn),b.isDataArrayTexture?Oe=zt.depth:b.isData3DTexture?Oe=Math.floor(zt.depth*cn):Oe=1,tt=0,Qe=0,ze=0}q!==null?(_t=q.x,st=q.y,Yt=q.z):(_t=0,st=0,Yt=0);const vt=it.convert(j.format),Ye=it.convert(j.type);let $t;j.isData3DTexture?(I.setTexture3D(j,0),$t=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),$t=H.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),$t=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),xr=H.getParameter(H.UNPACK_SKIP_PIXELS),In=H.getParameter(H.UNPACK_SKIP_ROWS),$i=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ze);const Pt=b.isDataArrayTexture||b.isData3DTexture,Mn=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const cn=Ge.get(b),_n=Ge.get(j),fn=Ge.get(cn.__renderTarget),xt=Ge.get(_n.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,fn.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Di=0;Di<Oe;Di++)Pt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,Y,ze+Di),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(j).__webglTexture,Me,Yt+Di)),H.blitFramebuffer(tt,Qe,be,De,_t,st,be,De,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ge.has(b)){const cn=Ge.get(b),_n=Ge.get(j);je.bindFramebuffer(H.READ_FRAMEBUFFER,Ka),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,Za);for(let fn=0;fn<Oe;fn++)Pt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,Y,ze+fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,Y),Mn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Me,Yt+fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Me),Y!==0?H.blitFramebuffer(tt,Qe,be,De,_t,st,be,De,H.COLOR_BUFFER_BIT,H.NEAREST):Mn?H.copyTexSubImage3D($t,Me,_t,st,Yt+fn,tt,Qe,be,De):H.copyTexSubImage2D($t,Me,_t,st,tt,Qe,be,De);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?H.texSubImage3D($t,Me,_t,st,Yt,be,De,Oe,vt,Ye,zt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D($t,Me,_t,st,Yt,be,De,Oe,vt,zt.data):H.texSubImage3D($t,Me,_t,st,Yt,be,De,Oe,vt,Ye,zt):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,_t,st,be,De,vt,Ye,zt.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,_t,st,zt.width,zt.height,vt,zt.data):H.texSubImage2D(H.TEXTURE_2D,Me,_t,st,be,De,vt,Ye,zt);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xr),H.pixelStorei(H.UNPACK_SKIP_ROWS,In),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$i),Me===0&&j.generateMipmaps&&H.generateMipmap($t),je.unbindTexture()},this.copyTextureToTexture3D=function(b,j,oe=null,q=null,Y=0){return Fu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,j,oe,q,Y)},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),je.unbindTexture()},this.resetState=function(){U=0,A=0,F=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class JR extends ri{constructor(e,t={}){super(e),this.isWater=!0;const s=this,o=t.textureWidth!==void 0?t.textureWidth:512,l=t.textureHeight!==void 0?t.textureHeight:512,c=t.clipBias!==void 0?t.clipBias:0,f=t.alpha!==void 0?t.alpha:1,h=t.time!==void 0?t.time:0,p=t.waterNormals!==void 0?t.waterNormals:null,g=t.sunDirection!==void 0?t.sunDirection:new X(.70707,.70707,0),m=new lt(t.sunColor!==void 0?t.sunColor:16777215),v=new lt(t.waterColor!==void 0?t.waterColor:8355711),S=t.eye!==void 0?t.eye:new X(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,M=t.side!==void 0?t.side:_r,x=t.fog!==void 0?t.fog:!1,y=new cr,D=new X,L=new X,P=new X,V=new Lt,U=new X(0,0,-1),A=new Vt,F=new X,C=new X,w=new Vt,z=new Lt,ie=new ni,K=new qr(o,l),ae={name:"MirrorShader",uniforms:Wu.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Lt},sunColor:{value:new lt(8355711)},sunDirection:{value:new X(.70707,.70707,0)},eye:{value:new X},waterColor:{value:new lt(5592405)}}]),vertexShader:`
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
				}`},ue=new Xi({name:ae.name,uniforms:Wu.clone(ae.uniforms),vertexShader:ae.vertexShader,fragmentShader:ae.fragmentShader,lights:!0,side:M,fog:x});ue.uniforms.mirrorSampler.value=K.texture,ue.uniforms.textureMatrix.value=z,ue.uniforms.alpha.value=f,ue.uniforms.time.value=h,ue.uniforms.normalSampler.value=p,ue.uniforms.sunColor.value=m,ue.uniforms.waterColor.value=v,ue.uniforms.sunDirection.value=g,ue.uniforms.distortionScale.value=E,ue.uniforms.eye.value=S,s.material=ue,s.onBeforeRender=function(te,de,k){if(L.setFromMatrixPosition(s.matrixWorld),P.setFromMatrixPosition(k.matrixWorld),V.extractRotation(s.matrixWorld),D.set(0,0,1),D.applyMatrix4(V),F.subVectors(L,P),F.dot(D)>0)return;F.reflect(D).negate(),F.add(L),V.extractRotation(k.matrixWorld),U.set(0,0,-1),U.applyMatrix4(V),U.add(P),C.subVectors(L,U),C.reflect(D).negate(),C.add(L),ie.position.copy(F),ie.up.set(0,1,0),ie.up.applyMatrix4(V),ie.up.reflect(D),ie.lookAt(C),ie.far=k.far,ie.updateMatrixWorld(),ie.projectionMatrix.copy(k.projectionMatrix),z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),z.multiply(ie.projectionMatrix),z.multiply(ie.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(D,L),y.applyMatrix4(ie.matrixWorldInverse),A.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const se=ie.projectionMatrix;w.x=(Math.sign(A.x)+se.elements[8])/se.elements[0],w.y=(Math.sign(A.y)+se.elements[9])/se.elements[5],w.z=-1,w.w=(1+se.elements[10])/se.elements[14],A.multiplyScalar(2/A.dot(w)),se.elements[2]=A.x,se.elements[6]=A.y,se.elements[10]=A.z+1-c,se.elements[14]=A.w,S.setFromMatrixPosition(k.matrixWorld);const Z=te.getRenderTarget(),O=te.xr.enabled,ne=te.shadowMap.autoUpdate;s.visible=!1,te.xr.enabled=!1,te.shadowMap.autoUpdate=!1,te.setRenderTarget(K),te.state.buffers.depth.setMask(!0),te.autoClear===!1&&te.clear(),te.render(de,ie),s.visible=!0,te.xr.enabled=O,te.shadowMap.autoUpdate=ne,te.setRenderTarget(Z);const Ae=k.viewport;Ae!==void 0&&te.state.viewport(Ae)}}}class lc extends ri{constructor(){const e=lc.SkyShader,t=new Xi({name:e.name,uniforms:Wu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:zn,depthWrite:!1});super(new Io(1,1,1),t),this.isSky=!0}}lc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new X},up:{value:new X(0,1,0)}},vertexShader:`
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

		}`};const eC=/^[og]\s*(.+)?/,tC=/^mtllib /,nC=/^usemtl /,iC=/^usemap /,G0=/\s+/,W0=new X,Ad=new X,X0=new X,j0=new X,hi=new X,wu=new lt;function rC(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:o||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),o&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},s&&s.name&&typeof s.clone=="function"){const o=s.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseNormalIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseUVIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/2)*2},addVertex:function(e,t,s){const o=this.vertices,l=this.object.geometry.vertices;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const o=this.normals,l=this.object.geometry.normals;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addFaceNormal:function(e,t,s){const o=this.vertices,l=this.object.geometry.normals;W0.fromArray(o,e),Ad.fromArray(o,t),X0.fromArray(o,s),hi.subVectors(X0,Ad),j0.subVectors(W0,Ad),hi.cross(j0),hi.normalize(),l.push(hi.x,hi.y,hi.z),l.push(hi.x,hi.y,hi.z),l.push(hi.x,hi.y,hi.z)},addColor:function(e,t,s){const o=this.colors,l=this.object.geometry.colors;o[e]!==void 0&&l.push(o[e+0],o[e+1],o[e+2]),o[t]!==void 0&&l.push(o[t+0],o[t+1],o[t+2]),o[s]!==void 0&&l.push(o[s+0],o[s+1],o[s+2])},addUV:function(e,t,s){const o=this.uvs,l=this.object.geometry.uvs;l.push(o[e+0],o[e+1]),l.push(o[t+0],o[t+1]),l.push(o[s+0],o[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,o,l,c,f,h,p){const g=this.vertices.length;let m=this.parseVertexIndex(e,g),v=this.parseVertexIndex(t,g),S=this.parseVertexIndex(s,g);if(this.addVertex(m,v,S),this.addColor(m,v,S),f!==void 0&&f!==""){const E=this.normals.length;m=this.parseNormalIndex(f,E),v=this.parseNormalIndex(h,E),S=this.parseNormalIndex(p,E),this.addNormal(m,v,S)}else this.addFaceNormal(m,v,S);if(o!==void 0&&o!==""){const E=this.uvs.length;m=this.parseUVIndex(o,E),v=this.parseUVIndex(l,E),S=this.parseUVIndex(c,E),this.addUV(m,v,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,o=e.length;s<o;s++){const l=this.parseVertexIndex(e[s],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,o=this.uvs.length;for(let l=0,c=e.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(e[l],s));for(let l=0,c=t.length;l<c;l++)this.addUVLine(this.parseUVIndex(t[l],o))}};return r.startObject("",!1),r}class sC extends Wa{constructor(e){super(e),this.materials=null}load(e,t,s,o){const l=this,c=new l1(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(h){o?o(h):console.error(h),l.manager.itemError(e)}},s,o)}setMaterials(e){return this.materials=e,this}parse(e){const t=new rC;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const s=e.split(`
`);let o=[];for(let f=0,h=s.length;f<h;f++){const p=s[f].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const m=p.split(G0);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(wu.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Pn),t.colors.push(wu.r,wu.g,wu.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(G0),S=[];for(let M=0,x=v.length;M<x;M++){const y=v[M];if(y.length>0){const D=y.split("/");S.push(D)}}const E=S[0];for(let M=1,x=S.length-1;M<x;M++){const y=S[M],D=S[M+1];t.addFace(E[0],y[0],D[0],E[1],y[1],D[1],E[2],y[2],D[2])}}else if(g==="l"){const m=p.substring(1).trim().split(" ");let v=[];const S=[];if(p.indexOf("/")===-1)v=m;else for(let E=0,M=m.length;E<M;E++){const x=m[E].split("/");x[0]!==""&&v.push(x[0]),x[1]!==""&&S.push(x[1])}t.addLineGeometry(v,S)}else if(g==="p"){const v=p.slice(1).trim().split(" ");t.addPointGeometry(v)}else if((o=eC.exec(p))!==null){const m=(" "+o[0].slice(1).trim()).slice(1);t.startObject(m)}else if(nC.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(tC.test(p))t.materialLibraries.push(p.substring(7).trim());else if(iC.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(o=p.split(" "),o.length>1){const v=o[1].trim().toLowerCase();t.object.smooth=v!=="0"&&v!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new xa;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],g=p.geometry,m=p.materials,v=g.type==="Line",S=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const M=new Pi;M.setAttribute("position",new kn(g.vertices,3)),g.normals.length>0&&M.setAttribute("normal",new kn(g.normals,3)),g.colors.length>0&&(E=!0,M.setAttribute("color",new kn(g.colors,3))),g.hasUVIndices===!0&&M.setAttribute("uv",new kn(g.uvs,2));const x=[];for(let D=0,L=m.length;D<L;D++){const P=m[D],V=P.name+"_"+P.smooth+"_"+E;let U=t.materials[V];if(this.materials!==null){if(U=this.materials.create(P.name),v&&U&&!(U instanceof Ou)){const A=new Ou;Wi.prototype.copy.call(A,U),A.color.copy(U.color),U=A}else if(S&&U&&!(U instanceof Sa)){const A=new Sa({size:10,sizeAttenuation:!1});Wi.prototype.copy.call(A,U),A.color.copy(U.color),A.map=U.map,U=A}}U===void 0&&(v?U=new Ou:S?U=new Sa({size:1,sizeAttenuation:!1}):U=new i1,U.name=P.name,U.flatShading=!P.smooth,U.vertexColors=E,t.materials[V]=U),x.push(U)}let y;if(x.length>1){for(let D=0,L=m.length;D<L;D++){const P=m[D];M.addGroup(P.groupStart,P.groupCount,D)}v?y=new c0(M,x):S?y=new vd(M,x):y=new ri(M,x)}else v?y=new c0(M,x[0]):S?y=new vd(M,x[0]):y=new ri(M,x[0]);y.name=p.name,l.add(y)}else if(t.vertices.length>0){const f=new Sa({size:1,sizeAttenuation:!1}),h=new Pi;h.setAttribute("position",new kn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new kn(t.colors,3)),f.vertexColors=!0);const p=new vd(h,f);l.add(p)}return l}}const Y0={type:"change"},zh={type:"start"},Y_={type:"end"},Au=new oc,$0=new cr,oC=Math.cos(70*Nu.DEG2RAD),an=new X,$n=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rd=1e-6;class aC extends m1{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mo.ROTATE,MIDDLE:Mo.DOLLY,RIGHT:Mo.PAN},this.touches={ONE:vo.ROTATE,TWO:vo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ts,this._lastTargetPosition=new X,this._quat=new Ts().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _0,this._sphericalDelta=new _0,this._scale=1,this._panOffset=new X,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new X,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uC.bind(this),this._onPointerDown=lC.bind(this),this._onPointerUp=cC.bind(this),this._onContextMenu=_C.bind(this),this._onMouseWheel=hC.bind(this),this._onKeyDown=pC.bind(this),this._onTouchStart=mC.bind(this),this._onTouchMove=gC.bind(this),this._onMouseDown=fC.bind(this),this._onMouseMove=dC.bind(this),this._interceptControlDown=vC.bind(this),this._interceptControlUp=yC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(s)&&isFinite(o)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),o<-Math.PI?o+=$n:o>Math.PI&&(o-=$n),s<=o?this._spherical.theta=Math.max(s,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+o)/2?Math.max(s,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=an.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new X(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Au.origin.copy(this.object.position),Au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Au.direction))<oC?this.object.lookAt(this.target):($0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Au.intersectPlane($0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rd||this._lastTargetPosition.distanceToSquared(this.target)>Rd?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;an.copy(o).sub(this.target);let l=an.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),o=e-s.left,l=t-s.top,c=s.width,f=s.height;this._mouse.x=o/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(s,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(s,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),o=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(s,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function lC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function uC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function cC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Y_),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fC(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=bt.DOLLY;break;case Mo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}break;case Mo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(zh)}function dC(r){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function hC(r){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(r.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Y_))}function pC(r){this.enabled!==!1&&this._handleKeyDown(r)}function mC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=bt.TOUCH_ROTATE;break;case vo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case vo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=bt.TOUCH_DOLLY_PAN;break;case vo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(zh)}function gC(r){switch(this._trackPointer(r),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=bt.NONE}}function _C(r){this.enabled!==!1&&r.preventDefault()}function vC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Aa=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),s(++r%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function s(g){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===g?"block":"none";r=g}var o=(performance||Date).now(),l=o,c=0,f=t(new Aa.Panel("FPS","#0ff","#002")),h=t(new Aa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new Aa.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(h.update(g-o,200),g>=l+1e3&&(f.update(c*1e3/(g-l),100),l=g,c=0,p)){var m=performance.memory;p.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return g},update:function(){o=this.end()},domElement:e,setMode:s}};Aa.Panel=function(r,e,t){var s=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),f=80*c,h=48*c,p=3*c,g=2*c,m=3*c,v=15*c,S=74*c,E=30*c,M=document.createElement("canvas");M.width=f,M.height=h,M.style.cssText="width:80px;height:48px";var x=M.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,f,h),x.fillStyle=e,x.fillText(r,p,g),x.fillRect(m,v,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(m,v,S,E),{dom:M,update:function(y,D){s=Math.min(s,y),o=Math.max(o,y),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,f,v),x.fillStyle=e,x.fillText(l(y)+" "+r+" ("+l(s)+"-"+l(o)+")",p,g),x.drawImage(M,m+c,v,S-c,E,m,v,S-c,E),x.fillRect(m+S-c,v,c,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(m+S-c,v,c,l((1-y/D)*E))}}};const xC="/fonts/minecraft.ttf";function SC(){const r=kt.useRef(null),[e,t]=kt.useState(!0),[s,o]=kt.useState(0),[l,c]=kt.useState({x:0,y:0,z:0}),[f,h]=kt.useState(0),p=kt.useRef(null),g=kt.useRef({frameId:0,startTime:null}),m={cameraPosition:new X(-13.81,1.33,26.67),waterSize:100,shipScale:15,islandScale:30,islandPosition:new X(0,3,-40),waterColor:7695,sunPositionSpherical:[1,88,180],shipSpeed:.05,shipRockingSpeed:.002,shipRockingAmount:.2,shipStopDistance:15,shipMinSpeed:.001,textFadeInDuration:3e3},v={waterNormal:new URL(""+new URL("textures/waternormals-Dfm-ILpY.jpg",import.meta.url).href,import.meta.url).href,shipModel:new URL(""+new URL("models/ship-model-DYGB5HRT.obj",import.meta.url).href,import.meta.url).href,shipTexture:new URL(""+new URL("textures/solar_punk_pirate_shi_0617201936_texture-CBaoT2g5.png",import.meta.url).href,import.meta.url).href,islandModel:new URL(""+new URL("models/medas-C3C47lR6.obj",import.meta.url).href,import.meta.url).href,islandTexture:new URL(""+new URL("textures/medas_texture-CBqzix36.png",import.meta.url).href,import.meta.url).href},S=["Els pirates electrònics","desembarquen","SALA mariscal","28/08/2025"],[E,M]=kt.useState({x:0,y:0,z:0}),x=kt.useRef(m.shipSpeed);return kt.useEffect(()=>{const y=new FontFace("Minecraft",`url(${xC})`);document.fonts.add(y),y.load().then(()=>{const k=Date.now(),se=()=>{const Z=Date.now()-k,O=Math.min(Z/m.textFadeInDuration,1);h(O),O<1&&requestAnimationFrame(se)};se()}).catch(k=>{console.error("Failed to load Minecraft font:",k),h(1)});let D,L,P,V,U;if(!r.current)return;const A=r.current;P=new JE,V=new ni(65,window.innerWidth/window.innerHeight,.1,2e3),V.position.copy(m.cameraPosition),V.lookAt(0,0,0),L=new QR({antialias:!0}),L.setSize(window.innerWidth,window.innerHeight),L.setPixelRatio(window.devicePixelRatio),L.outputEncoding=Pn,A.appendChild(L.domElement),P.add(new h1(16777215,.7));const F=new d1(16777215,1.2);F.position.set(0,50,100),F.castShadow=!0,P.add(F),U=new aC(V,L.domElement),U.target.set(0,.5,0),U.update();const C=new Aa;A.appendChild(C.dom);const w=new lc;w.scale.setScalar(100),P.add(w);const z=new X;z.setFromSphericalCoords(m.sunPositionSpherical[0],Nu.degToRad(m.sunPositionSpherical[1]),Nu.degToRad(m.sunPositionSpherical[2])),w.material.uniforms.sunPosition.value.copy(z);const ie=new Ga(m.waterSize,m.waterSize);D=new JR(ie,{textureWidth:256,textureHeight:256,waterNormals:new p0().load(v.waterNormal,k=>{k.wrapS=k.wrapT=Hu}),sunDirection:z.clone().normalize(),sunColor:16777215,waterColor:m.waterColor,distortionScale:2.5,fog:P.fog!==void 0}),D.rotation.x=-Math.PI/2,P.add(D);const K=new p0,ae=new z_(()=>t(!1),(k,se,Z)=>o(se/Z*100)),ue=new sC(ae);K.load(v.islandTexture,k=>{k.colorSpace=Pn,k.anisotropy=L.capabilities.getMaxAnisotropy();const se=new h0({map:k,metalness:.1,roughness:.8});ue.load(v.islandModel,Z=>{const ne=new ws().setFromObject(Z).getCenter(new X);Z.position.sub(ne),Z.scale.setScalar(m.islandScale),Z.position.copy(m.islandPosition),Z.traverse(Ae=>{if(Ae.isMesh){const J=Ae;J.material=se,J.castShadow=!0,J.receiveShadow=!0}}),P.add(Z)})}),K.load(v.shipTexture,k=>{k.colorSpace=Pn,k.anisotropy=L.capabilities.getMaxAnisotropy();const se=new h0({map:k,metalness:.3,roughness:.7});ue.load(v.shipModel,Z=>{const O=new ws().setFromObject(Z),ne=O.getCenter(new X);Z.position.sub(ne);const Ae=m.shipScale/Math.max(O.getSize(new X).length(),1);Z.scale.setScalar(Ae);const J=O.min.y*Ae;Z.position.set(0,-J,0),Z.rotation.y=Nu.degToRad(-290),Z.traverse(fe=>{if(fe.isMesh){const ye=fe;ye.material=se,ye.castShadow=!0,ye.receiveShadow=!0}}),P.add(Z),p.current=Z,M({x:Z.position.x,y:Z.position.y,z:Z.position.z})})});const te=k=>{if(g.current.startTime||(g.current.startTime=k),C.update(),U.update(),D&&(D.material.uniforms.time.value+=1/60),p.current){const Z=m.cameraPosition.z-p.current.position.z;Z<m.shipStopDistance&&(x.current=Math.max(m.shipMinSpeed,x.current*.98),Z<5&&(x.current=0)),p.current.position.z+=x.current;const O=x.current>.01?1:x.current/.01,ne=Math.sin(k*m.shipRockingSpeed)*O;p.current.rotation.z=ne*.08,p.current.rotation.x=Math.sin(k*m.shipRockingSpeed*.7)*.03*O,p.current.position.y=-.5+ne*m.shipRockingAmount,p.current.position.y+=Math.sin(k*.0015)*.15*O,M({x:p.current.position.x,y:p.current.position.y,z:p.current.position.z})}L.render(P,V);const se=V.position;c({x:se.x,y:se.y,z:se.z}),g.current.frameId=requestAnimationFrame(te)};g.current.frameId=requestAnimationFrame(te);const de=()=>{V.aspect=window.innerWidth/window.innerHeight,V.updateProjectionMatrix(),L.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",de),()=>{var k;window.removeEventListener("resize",de),cancelAnimationFrame(g.current.frameId),L.dispose(),(k=r.current)!=null&&k.contains(L.domElement)&&r.current.removeChild(L.domElement)}},[]),wi.jsxs("div",{ref:r,style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[e&&wi.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.7)",padding:20,color:"white",borderRadius:8},children:["Loading... ",Math.round(s),"%"]}),wi.jsx("div",{style:{position:"absolute",top:"60px",left:"20px",fontFamily:"Minecraft, monospace",color:"#FFFFFF",textShadow:"2px 2px 0 #3F3F3F",fontSize:"24px",lineHeight:"1.5",opacity:f,transition:"opacity 0.5s ease",pointerEvents:"none",background:"none"},children:S.map((y,D)=>wi.jsx("div",{children:y},D))}),wi.jsxs("div",{style:{position:"absolute",bottom:"50px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.6)",color:"lime",fontFamily:"monospace",padding:"8px",borderRadius:"4px",fontSize:"12px",zIndex:1},children:["camera.position.set(",l.x.toFixed(2),",",l.y.toFixed(2),",",l.z.toFixed(2),")"]}),wi.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.6)",color:"cyan",fontFamily:"monospace",padding:"8px",borderRadius:"4px",fontSize:"12px",zIndex:1},children:["ship.position: z=",E.z.toFixed(2),", speed=",x.current.toFixed(4)]})]})}function MC(){return wi.jsx(MM,{sx:{width:"100vw",height:"100vh"},children:wi.jsx(SC,{})})}Fy.createRoot(document.getElementById("root")).render(wi.jsx(Z0.StrictMode,{children:wi.jsx(MC,{})}));
