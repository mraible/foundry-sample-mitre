var Pp=Object.defineProperty;var Mp=(t,e,s)=>e in t?Pp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ht=(t,e,s)=>Mp(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=globalThis,pl=Yo.ShadowRoot&&(Yo.ShadyCSS===void 0||Yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fl=Symbol(),cc=new WeakMap;let cu=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==fl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(pl&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=cc.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&cc.set(s,e))}return e}toString(){return this.cssText}};const Dp=t=>new cu(typeof t=="string"?t:t+"",void 0,fl),rt=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new cu(s,t,fl)},zp=(t,e)=>{if(pl)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=Yo.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},dc=pl?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Dp(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vp,defineProperty:Np,getOwnPropertyDescriptor:Fp,getOwnPropertyNames:Bp,getOwnPropertySymbols:Up,getPrototypeOf:Hp}=Object,An=globalThis,uc=An.trustedTypes,jp=uc?uc.emptyScript:"",Wp=An.reactiveElementPolyfillSupport,Fr=(t,e)=>t,hr={toAttribute(t,e){switch(e){case Boolean:t=t?jp:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ml=(t,e)=>!Vp(t,e),hc={attribute:!0,type:String,converter:hr,reflect:!1,hasChanged:ml};Symbol.metadata??=Symbol("metadata"),An.litPropertyMetadata??=new WeakMap;class sr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=hc){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Np(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=Fp(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hc}static _$Ei(){if(this.hasOwnProperty(Fr("elementProperties")))return;const e=Hp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fr("properties"))){const s=this.properties,i=[...Bp(s),...Up(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(dc(r))}else e!==void 0&&s.push(dc(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EC(e,s){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:hr).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:hr;this._$Em=r,this[r]=n.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??ml)(this[e],s))return;this.P(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(s=>this._$EC(s,this[s])),this._$EU()}updated(e){}firstUpdated(e){}}sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Fr("elementProperties")]=new Map,sr[Fr("finalized")]=new Map,Wp?.({ReactiveElement:sr}),(An.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=globalThis,sn=gl.trustedTypes,pc=sn?sn.createPolicy("lit-html",{createHTML:t=>t}):void 0,du="$lit$",ci=`lit$${Math.random().toFixed(9).slice(2)}$`,uu="?"+ci,Kp=`<${uu}>`,Vi=document,eo=()=>Vi.createComment(""),so=t=>t===null||typeof t!="object"&&typeof t!="function",bl=Array.isArray,qp=t=>bl(t)||typeof t?.[Symbol.iterator]=="function",Zn=`[ 	
\f\r]`,Ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fc=/-->/g,mc=/>/g,Ei=RegExp(`>|${Zn}(?:([^\\s"'>=/]+)(${Zn}*=${Zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gc=/'/g,bc=/"/g,hu=/^(?:script|style|textarea|title)$/i,Gp=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=Gp(1),Ze=Symbol.for("lit-noChange"),jt=Symbol.for("lit-nothing"),yc=new WeakMap,Ri=Vi.createTreeWalker(Vi,129);function pu(t,e){if(!bl(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pc!==void 0?pc.createHTML(e):e}const Yp=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=Ar;for(let a=0;a<s;a++){const l=t[a];let d,h,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===Ar?h[1]==="!--"?n=fc:h[1]!==void 0?n=mc:h[2]!==void 0?(hu.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=Ei):h[3]!==void 0&&(n=Ei):n===Ei?h[0]===">"?(n=r??Ar,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?Ei:h[3]==='"'?bc:gc):n===bc||n===gc?n=Ei:n===fc||n===mc?n=Ar:(n=Ei,r=void 0);const m=n===Ei&&t[a+1].startsWith("/>")?" ":"";o+=n===Ar?l+Kp:u>=0?(i.push(d),l.slice(0,u)+du+l.slice(u)+ci+m):l+ci+(u===-2?a:m)}return[pu(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class io{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,h]=Yp(e,s);if(this.el=io.createElement(d,i),Ri.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Ri.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(du)){const p=h[n++],m=r.getAttribute(u).split(ci),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:m,ctor:v[1]==="."?Jp:v[1]==="?"?Qp:v[1]==="@"?Zp:Tn}),r.removeAttribute(u)}else u.startsWith(ci)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(hu.test(r.tagName)){const u=r.textContent.split(ci),p=u.length-1;if(p>0){r.textContent=sn?sn.emptyScript:"";for(let m=0;m<p;m++)r.append(u[m],eo()),Ri.nextNode(),l.push({type:2,index:++o});r.append(u[p],eo())}}}else if(r.nodeType===8)if(r.data===uu)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(ci,u+1))!==-1;)l.push({type:7,index:o}),u+=ci.length-1}o++}}static createElement(e,s){const i=Vi.createElement("template");return i.innerHTML=e,i}}function pr(t,e,s=t,i){if(e===Ze)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl;const o=so(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=pr(t,r._$AS(t,e.values),r,i)),e}class Xp{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Vi).importNode(s,!0);Ri.currentNode=r;let o=Ri.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new mo(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new tf(o,this,e)),this._$AV.push(d),l=i[++a]}n!==l?.index&&(o=Ri.nextNode(),n++)}return Ri.currentNode=Vi,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class mo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=jt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=pr(this,e,s),so(e)?e===jt||e==null||e===""?(this._$AH!==jt&&this._$AR(),this._$AH=jt):e!==this._$AH&&e!==Ze&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qp(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==jt&&so(this._$AH)?this._$AA.nextSibling.data=e:this.T(Vi.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=io.createElement(pu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{const o=new Xp(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=yc.get(e.strings);return s===void 0&&yc.set(e.strings,s=new io(e)),s}k(e){bl(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new mo(this.O(eo()),this.O(eo()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Tn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=jt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=jt}_$AI(e,s=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=pr(this,e,s,0),n=!so(e)||e!==this._$AH&&e!==Ze,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=pr(this,a[i+l],s,l),d===Ze&&(d=this._$AH[l]),n||=!so(d)||d!==this._$AH[l],d===jt?e=jt:e!==jt&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(e)}j(e){e===jt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Jp=class extends Tn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===jt?void 0:e}};class Qp extends Tn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==jt)}}class Zp extends Tn{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=pr(this,e,s,0)??jt)===Ze)return;const i=this._$AH,r=e===jt&&i!==jt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==jt&&(i===jt||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class tf{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){pr(this,e)}}const ef=gl.litHtmlPolyfillSupport;ef?.(io,mo),(gl.litHtmlVersions??=[]).push("3.2.1");const sf=(t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const o=s?.renderBefore??null;i._$litPart$=r=new mo(e.insertBefore(eo(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Br=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sf(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ze}};Br._$litElement$=!0,Br.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Br});const rf=globalThis.litElementPolyfillSupport;rf?.({LitElement:Br});(globalThis.litElementVersions??=[]).push("4.1.1");var of=rt`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,at=rt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,fu=Object.defineProperty,nf=Object.defineProperties,af=Object.getOwnPropertyDescriptor,lf=Object.getOwnPropertyDescriptors,vc=Object.getOwnPropertySymbols,cf=Object.prototype.hasOwnProperty,df=Object.prototype.propertyIsEnumerable,ta=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yl=t=>{throw TypeError(t)},_c=(t,e,s)=>e in t?fu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Qs=(t,e)=>{for(var s in e||(e={}))cf.call(e,s)&&_c(t,s,e[s]);if(vc)for(var s of vc(e))df.call(e,s)&&_c(t,s,e[s]);return t},go=(t,e)=>nf(t,lf(e)),c=(t,e,s,i)=>{for(var r=i>1?void 0:i?af(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&fu(e,s,r),r},mu=(t,e,s)=>e.has(t)||yl("Cannot "+s),uf=(t,e,s)=>(mu(t,e,"read from private field"),e.get(t)),hf=(t,e,s)=>e.has(t)?yl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),pf=(t,e,s,i)=>(mu(t,e,"write to private field"),e.set(t,s),s),ff=function(t,e){this[0]=t,this[1]=e},mf=t=>{var e=t[ta("asyncIterator")],s=!1,i,r={};return e==null?(e=t[ta("iterator")](),i=o=>r[o]=n=>e[o](n)):(e=e.call(t),i=o=>r[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new ff(new Promise(a=>{var l=e[o](n);l instanceof Object||yl("Object expected"),a(l)}),1)}}),r[ta("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=o=>{throw o},"return"in e&&i("return"),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gf={attribute:!0,type:String,converter:hr,reflect:!1,hasChanged:ml},bf=(t=gf,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),i==="accessor"){const{name:n}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){const{name:n}=s;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?bf(t,e,s):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bo(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gu=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t,e){return(s,i,r)=>{const o=n=>n.renderRoot?.querySelector(t)??null;return gu(s,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yf(t){return(e,s)=>gu(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var Xo,st=class extends Br{constructor(){super(),hf(this,Xo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,Qs({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,s){uf(this,Xo)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),pf(this,Xo,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};Xo=new WeakMap;st.version="2.20.0";st.dependencies={};c([f()],st.prototype,"dir",2);c([f()],st.prototype,"lang",2);var vl=class extends st{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return F`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};vl.styles=[at,of];c([G("slot")],vl.prototype,"defaultSlot",2);vl.define("sl-menu");var vf=rt`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _f=(t,e)=>t?._$litType$!==void 0,bu=t=>t.strings===void 0,wf={},xf=(t,e=wf)=>t._$AH=e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},yo=t=>(...e)=>({_$litDirective$:t,values:e});let vo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Ur(i,e);return!0},rn=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},yu=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Sf(e)}};function kf(t){this._$AN!==void 0?(rn(this),this._$AM=t,yu(this)):this._$AM=t}function Cf(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)Ur(i[o],!1),rn(i[o]);else i!=null&&(Ur(i,!1),rn(i));else Ur(this,t)}const Sf=t=>{t.type==Ls.CHILD&&(t._$AP??=Cf,t._$AQ??=kf)};class Ef extends vo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),yu(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Ur(this,e),rn(this))}setValue(e){if(bu(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $f=()=>new Af;let Af=class{};const ea=new WeakMap,Tf=yo(class extends Ef{render(t){return jt}update(t,[e]){const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),jt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let s=ea.get(e);s===void 0&&(s=new WeakMap,ea.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?ea.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var If=class{constructor(t,e){this.popupRef=$f(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const a=(n=e.get(o))!=null?n:new CSSUnitValue(0,"px"),d=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?F`
      <sl-popup
        ${Tf(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:F` <slot name="submenu" hidden></slot> `}},Lf=rt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Ta=new Set,nr=new Map;let Oi,_l="ltr",wl="en";const vu=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(vu){const t=new MutationObserver(wu);_l=document.documentElement.dir||"ltr",wl=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _u(...t){t.map(e=>{const s=e.$code.toLowerCase();nr.has(s)?nr.set(s,Object.assign(Object.assign({},nr.get(s)),e)):nr.set(s,e),Oi||(Oi=e)}),wu()}function wu(){vu&&(_l=document.documentElement.dir||"ltr",wl=document.documentElement.lang||navigator.language),[...Ta.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Of=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ta.add(this.host)}hostDisconnected(){Ta.delete(this.host)}dir(){return`${this.host.dir||_l}`.toLowerCase()}lang(){return`${this.host.lang||wl}`.toLowerCase()}getTranslationData(e){var s,i;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r?.language.toLowerCase(),n=(i=(s=r?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",a=nr.get(`${o}-${n}`),l=nr.get(o);return{locale:r,language:o,region:n,primary:a,secondary:l}}exists(e,s){var i;const{primary:r,secondary:o}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||o&&o[e]||s.includeFallback&&Oi&&Oi[e])}term(e,...s){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(r&&r[e])o=r[e];else if(Oi&&Oi[e])o=Oi[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...s):o}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var xu={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};_u(xu);var Rf=xu,At=class extends Of{};_u(Rf);const pi=Math.min,Je=Math.max,on=Math.round,Lo=Math.floor,Ps=t=>({x:t,y:t}),Pf={left:"right",right:"left",bottom:"top",top:"bottom"},Mf={start:"end",end:"start"};function Ia(t,e,s){return Je(t,pi(e,s))}function vr(t,e){return typeof t=="function"?t(e):t}function fi(t){return t.split("-")[0]}function _r(t){return t.split("-")[1]}function ku(t){return t==="x"?"y":"x"}function xl(t){return t==="y"?"height":"width"}function Ni(t){return["top","bottom"].includes(fi(t))?"y":"x"}function kl(t){return ku(Ni(t))}function Df(t,e,s){s===void 0&&(s=!1);const i=_r(t),r=kl(t),o=xl(r);let n=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(n=nn(n)),[n,nn(n)]}function zf(t){const e=nn(t);return[La(t),e,La(e)]}function La(t){return t.replace(/start|end/g,e=>Mf[e])}function Vf(t,e,s){const i=["left","right"],r=["right","left"],o=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return s?e?r:i:e?i:r;case"left":case"right":return e?o:n;default:return[]}}function Nf(t,e,s,i){const r=_r(t);let o=Vf(fi(t),s==="start",i);return r&&(o=o.map(n=>n+"-"+r),e&&(o=o.concat(o.map(La)))),o}function nn(t){return t.replace(/left|right|bottom|top/g,e=>Pf[e])}function Ff(t){return{top:0,right:0,bottom:0,left:0,...t}}function Cu(t){return typeof t!="number"?Ff(t):{top:t,right:t,bottom:t,left:t}}function an(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function wc(t,e,s){let{reference:i,floating:r}=t;const o=Ni(e),n=kl(e),a=xl(n),l=fi(e),d=o==="y",h=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[a]/2-r[a]/2;let m;switch(l){case"top":m={x:h,y:i.y-r.height};break;case"bottom":m={x:h,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:u};break;case"left":m={x:i.x-r.width,y:u};break;default:m={x:i.x,y:i.y}}switch(_r(e)){case"start":m[n]-=p*(s&&d?-1:1);break;case"end":m[n]+=p*(s&&d?-1:1);break}return m}const Bf=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=wc(d,i,l),p=i,m={},v=0;for(let k=0;k<a.length;k++){const{name:I,fn:_}=a[k],{x:w,y:E,data:g,reset:C}=await _({x:h,y:u,initialPlacement:i,placement:p,strategy:r,middlewareData:m,rects:d,platform:n,elements:{reference:t,floating:e}});h=w??h,u=E??u,m={...m,[I]:{...m[I],...g}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(d=C.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:h,y:u}=wc(d,p,l)),k=-1)}return{x:h,y:u,placement:p,strategy:r,middlewareData:m}};async function Cl(t,e){var s;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:m=0}=vr(e,t),v=Cu(m),I=a[p?u==="floating"?"reference":"floating":u],_=an(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(I)))==null||s?I:I.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),w=u==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,E=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),g=await(o.isElement==null?void 0:o.isElement(E))?await(o.getScale==null?void 0:o.getScale(E))||{x:1,y:1}:{x:1,y:1},C=an(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:E,strategy:l}):w);return{top:(_.top-C.top+v.top)/g.y,bottom:(C.bottom-_.bottom+v.bottom)/g.y,left:(_.left-C.left+v.left)/g.x,right:(C.right-_.right+v.right)/g.x}}const Uf=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:r,rects:o,platform:n,elements:a,middlewareData:l}=e,{element:d,padding:h=0}=vr(t,e)||{};if(d==null)return{};const u=Cu(h),p={x:s,y:i},m=kl(r),v=xl(m),k=await n.getDimensions(d),I=m==="y",_=I?"top":"left",w=I?"bottom":"right",E=I?"clientHeight":"clientWidth",g=o.reference[v]+o.reference[m]-p[m]-o.floating[v],C=p[m]-o.reference[m],R=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let T=R?R[E]:0;(!T||!await(n.isElement==null?void 0:n.isElement(R)))&&(T=a.floating[E]||o.floating[v]);const B=g/2-C/2,D=T/2-k[v]/2-1,z=pi(u[_],D),lt=pi(u[w],D),it=z,pt=T-k[v]-lt,_t=T/2-k[v]/2+B,kt=Ia(it,_t,pt),X=!l.arrow&&_r(r)!=null&&_t!==kt&&o.reference[v]/2-(_t<it?z:lt)-k[v]/2<0,J=X?_t<it?_t-it:_t-pt:0;return{[m]:p[m]+J,data:{[m]:kt,centerOffset:_t-kt-J,...X&&{alignmentOffset:J}},reset:X}}}),Hf=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:d}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:k=!0,...I}=vr(t,e);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const _=fi(r),w=Ni(a),E=fi(a)===a,g=await(l.isRTL==null?void 0:l.isRTL(d.floating)),C=p||(E||!k?[nn(a)]:zf(a)),R=v!=="none";!p&&R&&C.push(...Nf(a,k,v,g));const T=[a,...C],B=await Cl(e,I),D=[];let z=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&D.push(B[_]),u){const _t=Df(r,n,g);D.push(B[_t[0]],B[_t[1]])}if(z=[...z,{placement:r,overflows:D}],!D.every(_t=>_t<=0)){var lt,it;const _t=(((lt=o.flip)==null?void 0:lt.index)||0)+1,kt=T[_t];if(kt)return{data:{index:_t,overflows:z},reset:{placement:kt}};let X=(it=z.filter(J=>J.overflows[0]<=0).sort((J,dt)=>J.overflows[1]-dt.overflows[1])[0])==null?void 0:it.placement;if(!X)switch(m){case"bestFit":{var pt;const J=(pt=z.filter(dt=>{if(R){const Q=Ni(dt.placement);return Q===w||Q==="y"}return!0}).map(dt=>[dt.placement,dt.overflows.filter(Q=>Q>0).reduce((Q,Ct)=>Q+Ct,0)]).sort((dt,Q)=>dt[1]-Q[1])[0])==null?void 0:pt[0];J&&(X=J);break}case"initialPlacement":X=a;break}if(r!==X)return{reset:{placement:X}}}return{}}}};async function jf(t,e){const{placement:s,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=fi(s),a=_r(s),l=Ni(s)==="y",d=["left","top"].includes(n)?-1:1,h=o&&l?-1:1,u=vr(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof v=="number"&&(m=a==="end"?v*-1:v),l?{x:m*h,y:p*d}:{x:p*d,y:m*h}}const Wf=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:o,placement:n,middlewareData:a}=e,l=await jf(e,t);return n===((s=a.offset)==null?void 0:s.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}},Kf=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:n=!1,limiter:a={fn:I=>{let{x:_,y:w}=I;return{x:_,y:w}}},...l}=vr(t,e),d={x:s,y:i},h=await Cl(e,l),u=Ni(fi(r)),p=ku(u);let m=d[p],v=d[u];if(o){const I=p==="y"?"top":"left",_=p==="y"?"bottom":"right",w=m+h[I],E=m-h[_];m=Ia(w,m,E)}if(n){const I=u==="y"?"top":"left",_=u==="y"?"bottom":"right",w=v+h[I],E=v-h[_];v=Ia(w,v,E)}const k=a.fn({...e,[p]:m,[u]:v});return{...k,data:{x:k.x-s,y:k.y-i,enabled:{[p]:o,[u]:n}}}}}},qf=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:r,rects:o,platform:n,elements:a}=e,{apply:l=()=>{},...d}=vr(t,e),h=await Cl(e,d),u=fi(r),p=_r(r),m=Ni(r)==="y",{width:v,height:k}=o.floating;let I,_;u==="top"||u==="bottom"?(I=u,_=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=u,I=p==="end"?"top":"bottom");const w=k-h.top-h.bottom,E=v-h.left-h.right,g=pi(k-h[I],w),C=pi(v-h[_],E),R=!e.middlewareData.shift;let T=g,B=C;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(B=E),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=w),R&&!p){const z=Je(h.left,0),lt=Je(h.right,0),it=Je(h.top,0),pt=Je(h.bottom,0);m?B=v-2*(z!==0||lt!==0?z+lt:Je(h.left,h.right)):T=k-2*(it!==0||pt!==0?it+pt:Je(h.top,h.bottom))}await l({...e,availableWidth:B,availableHeight:T});const D=await n.getDimensions(a.floating);return v!==D.width||k!==D.height?{reset:{rects:!0}}:{}}}};function In(){return typeof window<"u"}function wr(t){return Su(t)?(t.nodeName||"").toLowerCase():"#document"}function es(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Vs(t){var e;return(e=(Su(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Su(t){return In()?t instanceof Node||t instanceof es(t).Node:!1}function bs(t){return In()?t instanceof Element||t instanceof es(t).Element:!1}function Ds(t){return In()?t instanceof HTMLElement||t instanceof es(t).HTMLElement:!1}function xc(t){return!In()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof es(t).ShadowRoot}function _o(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=ys(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(r)}function Gf(t){return["table","td","th"].includes(wr(t))}function Ln(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function On(t){const e=Sl(),s=bs(t)?ys(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function Yf(t){let e=mi(t);for(;Ds(e)&&!fr(e);){if(On(e))return e;if(Ln(e))return null;e=mi(e)}return null}function Sl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fr(t){return["html","body","#document"].includes(wr(t))}function ys(t){return es(t).getComputedStyle(t)}function Rn(t){return bs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function mi(t){if(wr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||xc(t)&&t.host||Vs(t);return xc(e)?e.host:e}function Eu(t){const e=mi(t);return fr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ds(e)&&_o(e)?e:Eu(e)}function ro(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const r=Eu(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),n=es(r);if(o){const a=Oa(n);return e.concat(n,n.visualViewport||[],_o(r)?r:[],a&&s?ro(a):[])}return e.concat(r,ro(r,[],s))}function Oa(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $u(t){const e=ys(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ds(t),o=r?t.offsetWidth:s,n=r?t.offsetHeight:i,a=on(s)!==o||on(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function El(t){return bs(t)?t:t.contextElement}function ar(t){const e=El(t);if(!Ds(e))return Ps(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:o}=$u(e);let n=(o?on(s.width):s.width)/i,a=(o?on(s.height):s.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Xf=Ps(0);function Au(t){const e=es(t);return!Sl()||!e.visualViewport?Xf:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jf(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==es(t)?!1:e}function Fi(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const r=t.getBoundingClientRect(),o=El(t);let n=Ps(1);e&&(i?bs(i)&&(n=ar(i)):n=ar(t));const a=Jf(o,s,i)?Au(o):Ps(0);let l=(r.left+a.x)/n.x,d=(r.top+a.y)/n.y,h=r.width/n.x,u=r.height/n.y;if(o){const p=es(o),m=i&&bs(i)?es(i):i;let v=p,k=Oa(v);for(;k&&i&&m!==v;){const I=ar(k),_=k.getBoundingClientRect(),w=ys(k),E=_.left+(k.clientLeft+parseFloat(w.paddingLeft))*I.x,g=_.top+(k.clientTop+parseFloat(w.paddingTop))*I.y;l*=I.x,d*=I.y,h*=I.x,u*=I.y,l+=E,d+=g,v=es(k),k=Oa(v)}}return an({width:h,height:u,x:l,y:d})}function $l(t,e){const s=Rn(t).scrollLeft;return e?e.left+s:Fi(Vs(t)).left+s}function Tu(t,e,s){s===void 0&&(s=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(s?0:$l(t,i)),o=i.top+e.scrollTop;return{x:r,y:o}}function Qf(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const o=r==="fixed",n=Vs(i),a=e?Ln(e.floating):!1;if(i===n||a&&o)return s;let l={scrollLeft:0,scrollTop:0},d=Ps(1);const h=Ps(0),u=Ds(i);if((u||!u&&!o)&&((wr(i)!=="body"||_o(n))&&(l=Rn(i)),Ds(i))){const m=Fi(i);d=ar(i),h.x=m.x+i.clientLeft,h.y=m.y+i.clientTop}const p=n&&!u&&!o?Tu(n,l,!0):Ps(0);return{width:s.width*d.x,height:s.height*d.y,x:s.x*d.x-l.scrollLeft*d.x+h.x+p.x,y:s.y*d.y-l.scrollTop*d.y+h.y+p.y}}function Zf(t){return Array.from(t.getClientRects())}function tm(t){const e=Vs(t),s=Rn(t),i=t.ownerDocument.body,r=Je(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Je(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+$l(t);const a=-s.scrollTop;return ys(i).direction==="rtl"&&(n+=Je(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}function em(t,e){const s=es(t),i=Vs(t),r=s.visualViewport;let o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;const d=Sl();(!d||d&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}function sm(t,e){const s=Fi(t,!0,e==="fixed"),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=Ds(t)?ar(t):Ps(1),n=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,d=i*o.y;return{width:n,height:a,x:l,y:d}}function kc(t,e,s){let i;if(e==="viewport")i=em(t,s);else if(e==="document")i=tm(Vs(t));else if(bs(e))i=sm(e,s);else{const r=Au(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return an(i)}function Iu(t,e){const s=mi(t);return s===e||!bs(s)||fr(s)?!1:ys(s).position==="fixed"||Iu(s,e)}function im(t,e){const s=e.get(t);if(s)return s;let i=ro(t,[],!1).filter(a=>bs(a)&&wr(a)!=="body"),r=null;const o=ys(t).position==="fixed";let n=o?mi(t):t;for(;bs(n)&&!fr(n);){const a=ys(n),l=On(n);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||_o(n)&&!l&&Iu(t,n))?i=i.filter(h=>h!==n):r=a,n=mi(n)}return e.set(t,i),i}function rm(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const n=[...s==="clippingAncestors"?Ln(e)?[]:im(e,this._c):[].concat(s),i],a=n[0],l=n.reduce((d,h)=>{const u=kc(e,h,r);return d.top=Je(u.top,d.top),d.right=pi(u.right,d.right),d.bottom=pi(u.bottom,d.bottom),d.left=Je(u.left,d.left),d},kc(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function om(t){const{width:e,height:s}=$u(t);return{width:e,height:s}}function nm(t,e,s){const i=Ds(e),r=Vs(e),o=s==="fixed",n=Fi(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ps(0);if(i||!i&&!o)if((wr(e)!=="body"||_o(r))&&(a=Rn(e)),i){const p=Fi(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=$l(r));const d=r&&!i&&!o?Tu(r,a):Ps(0),h=n.left+a.scrollLeft-l.x-d.x,u=n.top+a.scrollTop-l.y-d.y;return{x:h,y:u,width:n.width,height:n.height}}function sa(t){return ys(t).position==="static"}function Cc(t,e){if(!Ds(t)||ys(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Vs(t)===s&&(s=s.ownerDocument.body),s}function Lu(t,e){const s=es(t);if(Ln(t))return s;if(!Ds(t)){let r=mi(t);for(;r&&!fr(r);){if(bs(r)&&!sa(r))return r;r=mi(r)}return s}let i=Cc(t,e);for(;i&&Gf(i)&&sa(i);)i=Cc(i,e);return i&&fr(i)&&sa(i)&&!On(i)?s:i||Yf(t)||s}const am=async function(t){const e=this.getOffsetParent||Lu,s=this.getDimensions,i=await s(t.floating);return{reference:nm(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function lm(t){return ys(t).direction==="rtl"}const Jo={convertOffsetParentRelativeRectToViewportRelativeRect:Qf,getDocumentElement:Vs,getClippingRect:rm,getOffsetParent:Lu,getElementRects:am,getClientRects:Zf,getDimensions:om,getScale:ar,isElement:bs,isRTL:lm};function Ou(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function cm(t,e){let s=null,i;const r=Vs(t);function o(){var a;clearTimeout(i),(a=s)==null||a.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const d=t.getBoundingClientRect(),{left:h,top:u,width:p,height:m}=d;if(a||e(),!p||!m)return;const v=Lo(u),k=Lo(r.clientWidth-(h+p)),I=Lo(r.clientHeight-(u+m)),_=Lo(h),E={rootMargin:-v+"px "+-k+"px "+-I+"px "+-_+"px",threshold:Je(0,pi(1,l))||1};let g=!0;function C(R){const T=R[0].intersectionRatio;if(T!==l){if(!g)return n();T?n(!1,T):i=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!Ou(d,t.getBoundingClientRect())&&n(),g=!1}try{s=new IntersectionObserver(C,{...E,root:r.ownerDocument})}catch{s=new IntersectionObserver(C,E)}s.observe(t)}return n(!0),o}function dm(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=El(t),h=r||o?[...d?ro(d):[],...ro(e)]:[];h.forEach(_=>{r&&_.addEventListener("scroll",s,{passive:!0}),o&&_.addEventListener("resize",s)});const u=d&&a?cm(d,s):null;let p=-1,m=null;n&&(m=new ResizeObserver(_=>{let[w]=_;w&&w.target===d&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var E;(E=m)==null||E.observe(e)})),s()}),d&&!l&&m.observe(d),m.observe(e));let v,k=l?Fi(t):null;l&&I();function I(){const _=Fi(t);k&&!Ou(k,_)&&s(),k=_,v=requestAnimationFrame(I)}return s(),()=>{var _;h.forEach(w=>{r&&w.removeEventListener("scroll",s),o&&w.removeEventListener("resize",s)}),u?.(),(_=m)==null||_.disconnect(),m=null,l&&cancelAnimationFrame(v)}}const um=Wf,hm=Kf,pm=Hf,Sc=qf,fm=Uf,mm=(t,e,s)=>{const i=new Map,r={platform:Jo,...s},o={...r.platform,_c:i};return Bf(t,e,{...r,platform:o})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=yo(class extends vo{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Ze}});function gm(t){return bm(t)}function ia(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function bm(t){for(let e=t;e;e=ia(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ia(t);e;e=ia(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||On(s)||e.tagName==="BODY"))return e}return null}function ym(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Ot=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,n=0,a=0,l=0,d=0,h=0;s?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,d=e.right,h=e.top):(i=e.left,r=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,d=e.left,h=e.bottom):(i=e.right,r=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ym(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=dm(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[um({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Sc({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=r?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(pm({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(hm({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Sc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(fm({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>Jo.getOffsetParent(s,gm):Jo.getOffsetParent;mm(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:go(Qs({},Jo),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:r,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,d=r.arrow.y;let h="",u="",p="",m="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?v:"",m=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":v,m=n?v:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return F`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?F`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Ot.styles=[at,Lf];c([G(".popup")],Ot.prototype,"popup",2);c([G(".popup__arrow")],Ot.prototype,"arrowEl",2);c([f()],Ot.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"active",2);c([f({reflect:!0})],Ot.prototype,"placement",2);c([f({reflect:!0})],Ot.prototype,"strategy",2);c([f({type:Number})],Ot.prototype,"distance",2);c([f({type:Number})],Ot.prototype,"skidding",2);c([f({type:Boolean})],Ot.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],Ot.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],Ot.prototype,"arrowPadding",2);c([f({type:Boolean})],Ot.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],Ot.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],Ot.prototype,"flipFallbackStrategy",2);c([f({type:Object})],Ot.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],Ot.prototype,"flipPadding",2);c([f({type:Boolean})],Ot.prototype,"shift",2);c([f({type:Object})],Ot.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],Ot.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],Ot.prototype,"autoSize",2);c([f()],Ot.prototype,"sync",2);c([f({type:Object})],Ot.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],Ot.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],Ot.prototype,"hoverBridge",2);var vm=rt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,wo=class extends st{constructor(){super(...arguments),this.localize=new At(this)}render(){return F`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};wo.styles=[at,vm];var Ne=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function _m(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var Ra="";function Pa(t){Ra=t}function wm(t=""){if(!Ra){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Pa(s.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),Pa(r.split("/").slice(0,-1).join("/"))}}return Ra.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var xm={name:"default",resolver:t=>wm(`assets/icons/${t}.svg`)},km=xm,Ec={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Cm={name:"system",resolver:t=>t in Ec?`data:image/svg+xml,${encodeURIComponent(Ec[t])}`:""},Sm=Cm,Em=[km,Sm],Ma=[];function $m(t){Ma.push(t)}function Am(t){Ma=Ma.filter(e=>e!==t)}function $c(t){return Em.find(e=>e.name===t)}var Tm=rt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function K(t,e){const s=Qs({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:o}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const h=a.get(d),u=this[d];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),o.call(this,a)}}}var Tr=Symbol(),Oo=Symbol(),ra,oa=new Map,zt=class extends st{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=F`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Tr:Oo}catch{return Oo}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((s=o?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Tr;ra||(ra=new DOMParser);const a=ra.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Tr}catch{return Tr}}connectedCallback(){super.connectedCallback(),$m(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Am(this)}getIconSource(){const t=$c(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?$c(this.library):void 0;if(!e){this.svg=null;return}let r=oa.get(e);if(r||(r=this.resolveIcon(e,i),oa.set(e,r)),!this.initialRender)return;const o=await r;if(o===Oo&&oa.delete(e),e===this.getIconSource().url){if(_f(o)){if(this.svg=o,i){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(o){case Oo:case Tr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};zt.styles=[at,Tm];c([ot()],zt.prototype,"svg",2);c([f({reflect:!0})],zt.prototype,"name",2);c([f()],zt.prototype,"src",2);c([f()],zt.prototype,"label",2);c([f({reflect:!0})],zt.prototype,"library",2);c([K("label")],zt.prototype,"handleLabelChange",1);c([K(["name","src","library"])],zt.prototype,"setIcon",1);var ss=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ne(this,"submenu"),this.submenuController=new If(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return _m(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return F`
      <div
        id="anchor"
        part="base"
        class=${nt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?F` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ss.styles=[at,vf];ss.dependencies={"sl-icon":zt,"sl-popup":Ot,"sl-spinner":wo};c([G("slot:not([name])")],ss.prototype,"defaultSlot",2);c([G(".menu-item")],ss.prototype,"menuItem",2);c([f()],ss.prototype,"type",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"checked",2);c([f()],ss.prototype,"value",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"disabled",2);c([K("checked")],ss.prototype,"handleCheckedChange",1);c([K("disabled")],ss.prototype,"handleDisabledChange",1);c([K("type")],ss.prototype,"handleTypeChange",1);ss.define("sl-menu-item");wo.define("sl-spinner");var Im=rt`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ac=new WeakMap;function Ru(t){let e=Ac.get(t);return e||(e=window.getComputedStyle(t,null),Ac.set(t,e)),e}function Lm(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ru(t);return e.visibility!=="hidden"&&e.display!=="none"}function Om(t){const e=Ru(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Rm(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===t:o.querySelector(n)===t}return Lm(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Om(t):!1}function Pm(t){var e,s;const i=Da(t),r=(e=i[0])!=null?e:null,o=(s=i[i.length-1])!=null?s:null;return{start:r,end:o}}function Mm(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Da(t){const e=new WeakMap,s=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!s.includes(r)&&Rm(r)&&s.push(r),r instanceof HTMLSlotElement&&Mm(r,t)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(t),s.sort((r,o)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var Pu=new Map,Dm=new WeakMap;function zm(t){return t??{keyframes:[],options:{duration:0}}}function Tc(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Rt(t,e){Pu.set(t,zm(e))}function Wt(t,e,s){const i=Dm.get(t);if(i?.[e])return Tc(i[e],s.dir);const r=Pu.get(e);return r?Tc(r,s.dir):{keyframes:[],options:{duration:0}}}function Ve(t,e){return new Promise(s=>{function i(r){r.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}function Zt(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,go(Qs({},s),{duration:za()?0:s.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Ic(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function za(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ae(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function ln(t,e){return t.map(s=>go(Qs({},s),{height:s.height==="auto"?`${e}px`:s.height}))}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>t??jt;var we=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,r;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||o?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Pm(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ae(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Wt(this,"dropdown.show",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ae(this);const{keyframes:t,options:e}=Wt(this,"dropdown.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return F`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${et(this.sync?this.sync:void 0)}
        class=${nt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};we.styles=[at,Im];we.dependencies={"sl-popup":Ot};c([G(".dropdown")],we.prototype,"popup",2);c([G(".dropdown__trigger")],we.prototype,"trigger",2);c([G(".dropdown__panel")],we.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],we.prototype,"open",2);c([f({reflect:!0})],we.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],we.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],we.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],we.prototype,"containingElement",2);c([f({type:Number})],we.prototype,"distance",2);c([f({type:Number})],we.prototype,"skidding",2);c([f({type:Boolean})],we.prototype,"hoist",2);c([f({reflect:!0})],we.prototype,"sync",2);c([K("open",{waitUntilFirstUpdate:!0})],we.prototype,"handleOpenChange",1);Rt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Rt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});we.define("sl-dropdown");var Vm=rt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mu=Symbol.for(""),Nm=t=>{if(t?.r===Mu)return t?._$litStatic$},cn=(t,...e)=>({_$litStatic$:e.reduce((s,i,r)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:Mu}),Lc=new Map,Fm=t=>(e,...s)=>{const i=s.length;let r,o;const n=[],a=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&(o=s[d],(r=Nm(o))!==void 0);)l+=r+e[++d],h=!0;d!==i&&a.push(o),n.push(l),d++}if(d===i&&n.push(e[i]),h){const u=n.join("$$lit$$");(e=Lc.get(u))===void 0&&(n.raw=n,Lc.set(u,e=n)),s=a}return t(e,...s)},Hr=Fm(F);var ce=class extends st{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?cn`a`:cn`button`;return Hr`
      <${e}
        part="base"
        class=${nt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${et(t?void 0:this.disabled)}
        type=${et(t?void 0:"button")}
        href=${et(t?this.href:void 0)}
        target=${et(t?this.target:void 0)}
        download=${et(t?this.download:void 0)}
        rel=${et(t&&this.target?"noreferrer noopener":void 0)}
        role=${et(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${et(this.name)}
          library=${et(this.library)}
          src=${et(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ce.styles=[at,Vm];ce.dependencies={"sl-icon":zt};c([G(".icon-button")],ce.prototype,"button",2);c([ot()],ce.prototype,"hasFocus",2);c([f()],ce.prototype,"name",2);c([f()],ce.prototype,"library",2);c([f()],ce.prototype,"src",2);c([f()],ce.prototype,"href",2);c([f()],ce.prototype,"target",2);c([f()],ce.prototype,"download",2);c([f()],ce.prototype,"label",2);c([f({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);ce.define("sl-icon-button");var Bm=rt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ji=class extends st{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=Ir(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return F`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ji.styles=[at,Bm];c([G("slot")],ji.prototype,"defaultSlot",2);c([ot()],ji.prototype,"disableRole",2);c([f()],ji.prototype,"label",2);function Ir(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}ji.define("sl-button-group");var Lr=new WeakMap,Or=new WeakMap,Rr=new WeakMap,na=new WeakSet,Ro=new WeakMap,Zs=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{s.formData.append(r,a.toString())}):s.formData.append(r,o.toString()))},this.handleFormSubmit=s=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Lr.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ro.set(this.host,[])},this.handleInteraction=s=>{const i=Ro.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Qs({form:s=>{const i=s.form;if(i){const o=s.getRootNode().querySelector(`#${i}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ro.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ro.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Lr.has(this.form)?Lr.get(this.form).add(this.host):Lr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Or.has(this.form)||(Or.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Rr.has(this.form)||(Rr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Lr.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Or.has(this.form)&&(this.form.reportValidity=Or.get(this.form),Or.delete(this.form)),Rr.has(this.form)&&(this.form.checkValidity=Rr.get(this.form),Rr.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?na.add(t):na.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!na.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Pn=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Um=Object.freeze(go(Qs({},Pn),{valid:!1,valueMissing:!0})),Hm=Object.freeze(go(Qs({},Pn),{valid:!1,customError:!0})),Du=rt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Pt=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ne(this,"[default]","prefix","suffix"),this.localize=new At(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Pn}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?cn`a`:cn`button`;return Hr`
      <${e}
        part="base"
        class=${nt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${et(t?void 0:this.disabled)}
        type=${et(t?void 0:this.type)}
        title=${this.title}
        name=${et(t?void 0:this.name)}
        value=${et(t?void 0:this.value)}
        href=${et(t&&!this.disabled?this.href:void 0)}
        target=${et(t?this.target:void 0)}
        download=${et(t?this.download:void 0)}
        rel=${et(t?this.rel:void 0)}
        role=${et(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Hr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Hr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Pt.styles=[at,Du];Pt.dependencies={"sl-icon":zt,"sl-spinner":wo};c([G(".button")],Pt.prototype,"button",2);c([ot()],Pt.prototype,"hasFocus",2);c([ot()],Pt.prototype,"invalid",2);c([f()],Pt.prototype,"title",2);c([f({reflect:!0})],Pt.prototype,"variant",2);c([f({reflect:!0})],Pt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Pt.prototype,"circle",2);c([f()],Pt.prototype,"type",2);c([f()],Pt.prototype,"name",2);c([f()],Pt.prototype,"value",2);c([f()],Pt.prototype,"href",2);c([f()],Pt.prototype,"target",2);c([f()],Pt.prototype,"rel",2);c([f()],Pt.prototype,"download",2);c([f()],Pt.prototype,"form",2);c([f({attribute:"formaction"})],Pt.prototype,"formAction",2);c([f({attribute:"formenctype"})],Pt.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],Pt.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],Pt.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],Pt.prototype,"formTarget",2);c([K("disabled",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleDisabledChange",1);Pt.define("sl-button");var jm=rt`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,xr=(t="value")=>(e,s)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,n,a){var l;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(o===h){const u=d.converter||hr,m=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:hr.fromAttribute)(a,d.type);this[t]!==m&&(this[s]=m)}r.call(this,o,n,a)}},Wi=rt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=yo(class extends vo{constructor(t){if(super(t),t.type!==Ls.PROPERTY&&t.type!==Ls.ATTRIBUTE&&t.type!==Ls.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bu(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ze||e===jt)return e;const s=t.element,i=t.name;if(t.type===Ls.PROPERTY){if(e===s[i])return Ze}else if(t.type===Ls.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return Ze}else if(t.type===Ls.ATTRIBUTE&&s.getAttribute(i)===e+"")return Ze;return xf(t),e}});var Ie=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ne(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return F`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${nt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .checked=${Bi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ie.styles=[at,Wi,jm];c([G('input[type="checkbox"]')],Ie.prototype,"input",2);c([ot()],Ie.prototype,"hasFocus",2);c([f()],Ie.prototype,"title",2);c([f()],Ie.prototype,"name",2);c([f()],Ie.prototype,"value",2);c([f({reflect:!0})],Ie.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"checked",2);c([xr("checked")],Ie.prototype,"defaultChecked",2);c([f({reflect:!0})],Ie.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"required",2);c([f({attribute:"help-text"})],Ie.prototype,"helpText",2);c([K("checked",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleCheckedChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleDisabledChange",1);Ie.define("sl-switch");var Wm=rt`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,_s=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ae(this.body);const{keyframes:e,options:s}=Wt(this,"details.show",{dir:this.localize.dir()});await Zt(this.body,ln(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ae(this.body);const{keyframes:e,options:s}=Wt(this,"details.hide",{dir:this.localize.dir()});await Zt(this.body,ln(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ve(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return F`
      <details
        part="base"
        class=${nt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};_s.styles=[at,Wm];_s.dependencies={"sl-icon":zt};c([G(".details")],_s.prototype,"details",2);c([G(".details__header")],_s.prototype,"header",2);c([G(".details__body")],_s.prototype,"body",2);c([G(".details__expand-icon-slot")],_s.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"open",2);c([f()],_s.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"disabled",2);c([K("open",{waitUntilFirstUpdate:!0})],_s.prototype,"handleOpenChange",1);Rt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Rt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});_s.define("sl-details");var Km=rt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,yt=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ne(this,"help-text","label"),this.localize=new At(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return F`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${nt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${et(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              min=${et(this.min)}
              max=${et(this.max)}
              step=${et(this.step)}
              .value=${Bi(this.value)}
              autocapitalize=${et(this.autocapitalize)}
              autocomplete=${et(this.autocomplete)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${et(this.pattern)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?F`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?F`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?F`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:F`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};yt.styles=[at,Wi,Km];yt.dependencies={"sl-icon":zt};c([G(".input__control")],yt.prototype,"input",2);c([ot()],yt.prototype,"hasFocus",2);c([f()],yt.prototype,"title",2);c([f({reflect:!0})],yt.prototype,"type",2);c([f()],yt.prototype,"name",2);c([f()],yt.prototype,"value",2);c([xr()],yt.prototype,"defaultValue",2);c([f({reflect:!0})],yt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"pill",2);c([f()],yt.prototype,"label",2);c([f({attribute:"help-text"})],yt.prototype,"helpText",2);c([f({type:Boolean})],yt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);c([f()],yt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],yt.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],yt.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],yt.prototype,"noSpinButtons",2);c([f({reflect:!0})],yt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"required",2);c([f()],yt.prototype,"pattern",2);c([f({type:Number})],yt.prototype,"minlength",2);c([f({type:Number})],yt.prototype,"maxlength",2);c([f()],yt.prototype,"min",2);c([f()],yt.prototype,"max",2);c([f()],yt.prototype,"step",2);c([f()],yt.prototype,"autocapitalize",2);c([f()],yt.prototype,"autocorrect",2);c([f()],yt.prototype,"autocomplete",2);c([f({type:Boolean})],yt.prototype,"autofocus",2);c([f()],yt.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],yt.prototype,"spellcheck",2);c([f()],yt.prototype,"inputmode",2);c([K("disabled",{waitUntilFirstUpdate:!0})],yt.prototype,"handleDisabledChange",1);c([K("step",{waitUntilFirstUpdate:!0})],yt.prototype,"handleStepChange",1);c([K("value",{waitUntilFirstUpdate:!0})],yt.prototype,"handleValueChange",1);yt.define("sl-input");var qm=rt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Tt=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ne(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return F`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${nt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${et(this.name)}
              .value=${Bi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              rows=${et(this.rows)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              autocapitalize=${et(this.autocapitalize)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${et(this.spellcheck)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Tt.styles=[at,Wi,qm];c([G(".textarea__control")],Tt.prototype,"input",2);c([G(".textarea__size-adjuster")],Tt.prototype,"sizeAdjuster",2);c([ot()],Tt.prototype,"hasFocus",2);c([f()],Tt.prototype,"title",2);c([f()],Tt.prototype,"name",2);c([f()],Tt.prototype,"value",2);c([f({reflect:!0})],Tt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"filled",2);c([f()],Tt.prototype,"label",2);c([f({attribute:"help-text"})],Tt.prototype,"helpText",2);c([f()],Tt.prototype,"placeholder",2);c([f({type:Number})],Tt.prototype,"rows",2);c([f()],Tt.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"readonly",2);c([f({reflect:!0})],Tt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"required",2);c([f({type:Number})],Tt.prototype,"minlength",2);c([f({type:Number})],Tt.prototype,"maxlength",2);c([f()],Tt.prototype,"autocapitalize",2);c([f()],Tt.prototype,"autocorrect",2);c([f()],Tt.prototype,"autocomplete",2);c([f({type:Boolean})],Tt.prototype,"autofocus",2);c([f()],Tt.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Tt.prototype,"spellcheck",2);c([f()],Tt.prototype,"inputmode",2);c([xr()],Tt.prototype,"defaultValue",2);c([K("disabled",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleDisabledChange",1);c([K("rows",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleRowsChange",1);c([K("value",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleValueChange",1);Tt.define("sl-textarea");var Gm=rt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,yi=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return F`
      <span
        part="base"
        class=${nt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?F`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};yi.styles=[at,Gm];yi.dependencies={"sl-icon-button":ce};c([f({reflect:!0})],yi.prototype,"variant",2);c([f({reflect:!0})],yi.prototype,"size",2);c([f({type:Boolean,reflect:!0})],yi.prototype,"pill",2);c([f({type:Boolean})],yi.prototype,"removable",2);var Ym=rt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Xm(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Va=new Set;function Jm(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Qm(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function jr(t){if(Va.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Jm()+Qm();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Wr(t){Va.delete(t),Va.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Na(t,e,s="vertical",i="smooth"){const r=Xm(t,e),o=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(o<d?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>h&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fa extends vo{constructor(e){if(super(e),this.it=jt,e.type!==Ls.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===jt||e==null)return this._t=void 0,this.it=e;if(e===Ze)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Fa.directiveName="unsafeHTML",Fa.resultType=1;const Qo=yo(Fa);var wt=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ne(this,"help-text","label"),this.localize=new At(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>F`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(s||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let n=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=o+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=o-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],i=[];t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>s.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const i=this.getAllOptions();this.selectedOptions=i.filter(o=>o.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(t=o?.value)!=null?t:"",this.displayLabel=(s=(e=o?.getTextLabel)==null?void 0:e.call(o))!=null?s:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return F`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof s=="string"?Qo(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return F`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return F``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ae(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Wt(this,"select.show",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.currentOption&&Na(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ae(this);const{keyframes:t,options:e}=Wt(this,"select.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ve(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return F`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${nt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?F`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?F`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};wt.styles=[at,Wi,Ym];wt.dependencies={"sl-icon":zt,"sl-popup":Ot,"sl-tag":yi};c([G(".select")],wt.prototype,"popup",2);c([G(".select__combobox")],wt.prototype,"combobox",2);c([G(".select__display-input")],wt.prototype,"displayInput",2);c([G(".select__value-input")],wt.prototype,"valueInput",2);c([G(".select__listbox")],wt.prototype,"listbox",2);c([ot()],wt.prototype,"hasFocus",2);c([ot()],wt.prototype,"displayLabel",2);c([ot()],wt.prototype,"currentOption",2);c([ot()],wt.prototype,"selectedOptions",2);c([ot()],wt.prototype,"valueHasChanged",2);c([f()],wt.prototype,"name",2);c([ot()],wt.prototype,"value",1);c([f({attribute:"value"})],wt.prototype,"defaultValue",2);c([f({reflect:!0})],wt.prototype,"size",2);c([f()],wt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],wt.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);c([f({type:Boolean})],wt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"open",2);c([f({type:Boolean})],wt.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"pill",2);c([f()],wt.prototype,"label",2);c([f({reflect:!0})],wt.prototype,"placement",2);c([f({attribute:"help-text"})],wt.prototype,"helpText",2);c([f({reflect:!0})],wt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"required",2);c([f()],wt.prototype,"getTag",2);c([K("disabled",{waitUntilFirstUpdate:!0})],wt.prototype,"handleDisabledChange",1);c([K(["defaultValue","value"],{waitUntilFirstUpdate:!0})],wt.prototype,"handleValueChange",1);c([K("open",{waitUntilFirstUpdate:!0})],wt.prototype,"handleOpenChange",1);Rt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Rt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});wt.define("sl-select");var Zm=rt`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,hs=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return F`
      <div
        part="base"
        class=${nt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};hs.styles=[at,Zm];hs.dependencies={"sl-icon":zt};c([G(".option__label")],hs.prototype,"defaultSlot",2);c([ot()],hs.prototype,"current",2);c([ot()],hs.prototype,"selected",2);c([ot()],hs.prototype,"hasHover",2);c([f({reflect:!0})],hs.prototype,"value",2);c([f({type:Boolean,reflect:!0})],hs.prototype,"disabled",2);c([K("disabled")],hs.prototype,"handleDisabledChange",1);c([K("selected")],hs.prototype,"handleSelectedChange",1);c([K("value")],hs.prototype,"handleValueChange",1);hs.define("sl-option");function*Al(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*mf(Al(t.shadowRoot.activeElement))))}function tg(){return[...Al()].pop()}var Pr=[],zu=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=tg();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Da(this.element);let o=r.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const a=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const l=[...Al()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Pr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pr=Pr.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pr[Pr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Da(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},eg=rt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ns=class extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"footer"),this.localize=new At(this),this.modal=new zu(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),jr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Wr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Wt(this,"dialog.denyClose",{dir:this.localize.dir()});Zt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),jr(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ae(this.dialog),ae(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Wt(this,"dialog.show",{dir:this.localize.dir()}),s=Wt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Zt(this.panel,e.keyframes,e.options),Zt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ae(this.dialog),ae(this.overlay)]);const t=Wt(this,"dialog.hide",{dir:this.localize.dir()}),e=Wt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Zt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Zt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Wr(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}render(){return F`
      <div
        part="base"
        class=${nt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":F`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ns.styles=[at,eg];Ns.dependencies={"sl-icon-button":ce};c([G(".dialog")],Ns.prototype,"dialog",2);c([G(".dialog__panel")],Ns.prototype,"panel",2);c([G(".dialog__overlay")],Ns.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Ns.prototype,"open",2);c([f({reflect:!0})],Ns.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Ns.prototype,"noHeader",2);c([K("open",{waitUntilFirstUpdate:!0})],Ns.prototype,"handleOpenChange",1);Rt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Rt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Rt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Rt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Rt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ns.define("sl-dialog");var sg=rt`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,is=class Ti extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"icon","suffix"),this.localize=new At(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ae(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=Wt(this,"alert.show",{dir:this.localize.dir()});await Zt(this.base,e,s),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ae(this.base);const{keyframes:e,options:s}=Wt(this,"alert.hide",{dir:this.localize.dir()});await Zt(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Ti.toastStack.parentElement===null&&document.body.append(Ti.toastStack),Ti.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ti.toastStack.removeChild(this),e(),Ti.toastStack.querySelector("sl-alert")===null&&Ti.toastStack.remove()},{once:!0})})}render(){return F`
      <div
        part="base"
        class=${nt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?F`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?F`
              <div
                class=${nt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};is.styles=[at,sg];is.dependencies={"sl-icon-button":ce};c([G('[part~="base"]')],is.prototype,"base",2);c([G(".alert__countdown-elapsed")],is.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],is.prototype,"open",2);c([f({type:Boolean,reflect:!0})],is.prototype,"closable",2);c([f({reflect:!0})],is.prototype,"variant",2);c([f({type:Number})],is.prototype,"duration",2);c([f({type:String,reflect:!0})],is.prototype,"countdown",2);c([ot()],is.prototype,"remainingTime",2);c([K("open",{waitUntilFirstUpdate:!0})],is.prototype,"handleOpenChange",1);c([K("duration")],is.prototype,"handleDurationChange",1);var ig=is;Rt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Rt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ig.define("sl-alert");var rg=rt`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Tl=class extends st{render(){return F` <slot></slot> `}};Tl.styles=[at,rg];Tl.define("sl-visually-hidden");var og=rt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fe=class extends st{constructor(){super(),this.localize=new At(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ic(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ic(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ae(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=Wt(this,"tooltip.show",{dir:this.localize.dir()});await Zt(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ae(this.body);const{keyframes:s,options:i}=Wt(this,"tooltip.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}render(){return F`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${nt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};fe.styles=[at,og];fe.dependencies={"sl-popup":Ot};c([G("slot:not([name])")],fe.prototype,"defaultSlot",2);c([G(".tooltip__body")],fe.prototype,"body",2);c([G("sl-popup")],fe.prototype,"popup",2);c([f()],fe.prototype,"content",2);c([f()],fe.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);c([f({type:Number})],fe.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],fe.prototype,"open",2);c([f({type:Number})],fe.prototype,"skidding",2);c([f()],fe.prototype,"trigger",2);c([f({type:Boolean})],fe.prototype,"hoist",2);c([K("open",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpenChange",1);c([K(["content","distance","hoist","placement","skidding"])],fe.prototype,"handleOptionsChange",1);c([K("disabled")],fe.prototype,"handleDisabledChange",1);Rt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Rt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});fe.define("sl-tooltip");var ng=rt`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,ag=rt`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,lg=rt`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,de=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ne(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return F`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${nt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .indeterminate=${Bi(this.indeterminate)}
            .checked=${Bi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?F`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?F`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};de.styles=[at,Wi,lg];de.dependencies={"sl-icon":zt};c([G('input[type="checkbox"]')],de.prototype,"input",2);c([ot()],de.prototype,"hasFocus",2);c([f()],de.prototype,"title",2);c([f()],de.prototype,"name",2);c([f()],de.prototype,"value",2);c([f({reflect:!0})],de.prototype,"size",2);c([f({type:Boolean,reflect:!0})],de.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],de.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],de.prototype,"indeterminate",2);c([xr("checked")],de.prototype,"defaultChecked",2);c([f({reflect:!0})],de.prototype,"form",2);c([f({type:Boolean,reflect:!0})],de.prototype,"required",2);c([f({attribute:"help-text"})],de.prototype,"helpText",2);c([K("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);c([K(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],de.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oc(t,e,s){return t?e(t):s?.(t)}var te=class Ba extends st{constructor(){super(...arguments),this.localize=new At(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ae(this.childrenContainer);const{keyframes:e,options:s}=Wt(this,"tree-item.collapse",{dir:this.localize.dir()});await Zt(this.childrenContainer,ln(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Ba.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ae(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=Wt(this,"tree-item.expand",{dir:this.localize.dir()});await Zt(this.childrenContainer,ln(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Ba.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return F`
      <div
        part="base"
        class="${nt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${nt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Oc(this.loading,()=>F` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Oc(this.selectable,()=>F`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Bi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};te.styles=[at,ag];te.dependencies={"sl-checkbox":de,"sl-icon":zt,"sl-spinner":wo};c([ot()],te.prototype,"indeterminate",2);c([ot()],te.prototype,"isLeaf",2);c([ot()],te.prototype,"loading",2);c([ot()],te.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],te.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],te.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],te.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],te.prototype,"lazy",2);c([G("slot:not([name])")],te.prototype,"defaultSlot",2);c([G("slot[name=children]")],te.prototype,"childrenSlot",2);c([G(".tree-item__item")],te.prototype,"itemElement",2);c([G(".tree-item__children")],te.prototype,"childrenContainer",2);c([G(".tree-item__expand-button slot")],te.prototype,"expandButtonSlot",2);c([K("loading",{waitUntilFirstUpdate:!0})],te.prototype,"handleLoadingChange",1);c([K("disabled")],te.prototype,"handleDisabledChange",1);c([K("selected")],te.prototype,"handleSelectedChange",1);c([K("expanded",{waitUntilFirstUpdate:!0})],te.prototype,"handleExpandedChange",1);c([K("expanded",{waitUntilFirstUpdate:!0})],te.prototype,"handleExpandAnimation",1);c([K("lazy",{waitUntilFirstUpdate:!0})],te.prototype,"handleLazyChange",1);var Kr=te;Rt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Rt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function oe(t,e,s){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>s?i(s):i(t)}function Rc(t,e=!1){function s(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function i(o){const n=o.parentElement;Kr.isTreeItem(n)&&(s(n),i(n))}function r(o){for(const n of o.getChildrenItems())n.selected=e?o.selected||n.selected:!n.disabled&&o.selected,r(n);e&&s(o)}r(t),i(t)}var Ki=class extends st{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new At(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Kr.isTreeItem),i=[...e.removedNodes].filter(Kr.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Kr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Rc(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r?.tagName)==null?void 0:o.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(l=>l.matches(":focus")),o=e[r],n=l=>{const d=e[oe(l,0,e.length-1)];this.focusItem(d)},a=l=>{o.expanded=l};t.key==="ArrowDown"?n(r+1):t.key==="ArrowUp"?n(r-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):a(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var o;return(o=r?.classList)==null?void 0:o.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Rc(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const r=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return F`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ki.styles=[at,ng];c([G("slot:not([name])")],Ki.prototype,"defaultSlot",2);c([G("slot[name=expand-icon]")],Ki.prototype,"expandedIconSlot",2);c([G("slot[name=collapse-icon]")],Ki.prototype,"collapsedIconSlot",2);c([f()],Ki.prototype,"selection",2);c([K("selection")],Ki.prototype,"handleSelectionChange",1);Ki.define("sl-tree");Kr.define("sl-tree-item");var cg=rt`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,dg=0,xo=class extends st{constructor(){super(...arguments),this.attrId=++dg,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return F`
      <slot
        part="base"
        class=${nt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};xo.styles=[at,cg];c([f({reflect:!0})],xo.prototype,"name",2);c([f({type:Boolean,reflect:!0})],xo.prototype,"active",2);c([K("active")],xo.prototype,"handleActiveChange",1);xo.define("sl-tab-panel");yi.define("sl-tag");var ug=rt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,hg=0,ws=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.attrId=++hg,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,F`
      <div
        part="base"
        class=${nt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?F`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ws.styles=[at,ug];ws.dependencies={"sl-icon-button":ce};c([G(".tab")],ws.prototype,"tab",2);c([f({reflect:!0})],ws.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"active",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"disabled",2);c([f({type:Number,reflect:!0})],ws.prototype,"tabIndex",2);c([K("active")],ws.prototype,"handleActiveChange",1);c([K("disabled")],ws.prototype,"handleDisabledChange",1);ws.define("sl-tab");var pg=rt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,fg=rt`
  :host {
    display: contents;
  }
`,ko=class extends st{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return F` <slot @slotchange=${this.handleSlotChange}></slot> `}};ko.styles=[at,fg];c([f({type:Boolean,reflect:!0})],ko.prototype,"disabled",2);c([K("disabled",{waitUntilFirstUpdate:!0})],ko.prototype,"handleDisabledChange",1);var xe=class extends st{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new At(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{if(e.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(s=>s.attributeName==="active")){const i=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Na(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Qs({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Na(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return F`
      <div
        part="base"
        class=${nt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?F`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${nt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?F`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${nt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};xe.styles=[at,pg];xe.dependencies={"sl-icon-button":ce,"sl-resize-observer":ko};c([G(".tab-group")],xe.prototype,"tabGroup",2);c([G(".tab-group__body")],xe.prototype,"body",2);c([G(".tab-group__nav")],xe.prototype,"nav",2);c([G(".tab-group__indicator")],xe.prototype,"indicator",2);c([ot()],xe.prototype,"hasScrollControls",2);c([ot()],xe.prototype,"shouldHideScrollStartButton",2);c([ot()],xe.prototype,"shouldHideScrollEndButton",2);c([f()],xe.prototype,"placement",2);c([f()],xe.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],xe.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],xe.prototype,"fixedScrollControls",2);c([bo({passive:!0})],xe.prototype,"updateScrollButtons",1);c([K("noScrollControls",{waitUntilFirstUpdate:!0})],xe.prototype,"updateScrollControls",1);c([K("placement",{waitUntilFirstUpdate:!0})],xe.prototype,"syncIndicator",1);xe.define("sl-tab-group");var mg=rt`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function qr(t,e){function s(r){const o=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,d=r.pageX-a,h=r.pageY-l;e?.onMove&&e.onMove(d,h)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var Pc=()=>null,rs=class extends st{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new At(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Pc,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:r,isRtl:o,vertical:n})=>{let a=s,l=Number.POSITIVE_INFINITY;return e.forEach(d=>{let h;if(d.startsWith("repeat(")){const p=t.substring(7,t.length-1),m=p.endsWith("%"),v=Number.parseFloat(p),k=m?i*(v/100):v;h=Math.round((o&&!n?i-s:s)/k)*k}else d.endsWith("%")?h=i*(Number.parseFloat(d)/100):h=Number.parseFloat(d);o&&!n&&(h=i-h);const u=Math.abs(s-h);u<=r&&u<l&&(a=h,l=u)}),a}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Pc}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),qr(this,{onMove:(s,i)=>{var r;let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:o,this.position=oe(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=oe(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${i}`:s&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${r}`,this.style[e]="",F`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${et(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};rs.styles=[at,mg];c([G(".divider")],rs.prototype,"divider",2);c([f({type:Number,reflect:!0})],rs.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],rs.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],rs.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],rs.prototype,"disabled",2);c([f()],rs.prototype,"primary",2);c([f({reflect:!0})],rs.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],rs.prototype,"snapThreshold",2);c([K("position")],rs.prototype,"handlePositionChange",1);c([K("positionInPixels")],rs.prototype,"handlePositionInPixelsChange",1);c([K("vertical")],rs.prototype,"handleVerticalChange",1);rs.define("sl-split-panel");ko.define("sl-resize-observer");var gg=rt`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Il=class extends st{constructor(){super(...arguments),this.effect="none"}render(){return F`
      <div
        part="base"
        class=${nt({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Il.styles=[at,gg];c([f()],Il.prototype,"effect",2);Il.define("sl-skeleton");var bg=rt`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Jt=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this),this.hasSlotController=new Ne(this,"help-text","label"),this.localize=new At(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=e*t;if(r){const n=`${e-o}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${o}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return F`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${nt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${et(this.name)}
              ?disabled=${this.disabled}
              min=${et(this.min)}
              max=${et(this.max)}
              step=${et(this.step)}
              .value=${Bi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?F`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Jt.styles=[at,Wi,bg];c([G(".range__control")],Jt.prototype,"input",2);c([G(".range__tooltip")],Jt.prototype,"output",2);c([ot()],Jt.prototype,"hasFocus",2);c([ot()],Jt.prototype,"hasTooltip",2);c([f()],Jt.prototype,"title",2);c([f()],Jt.prototype,"name",2);c([f({type:Number})],Jt.prototype,"value",2);c([f()],Jt.prototype,"label",2);c([f({attribute:"help-text"})],Jt.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([f({type:Number})],Jt.prototype,"min",2);c([f({type:Number})],Jt.prototype,"max",2);c([f({type:Number})],Jt.prototype,"step",2);c([f()],Jt.prototype,"tooltip",2);c([f({attribute:!1})],Jt.prototype,"tooltipFormatter",2);c([f({reflect:!0})],Jt.prototype,"form",2);c([xr()],Jt.prototype,"defaultValue",2);c([bo({passive:!0})],Jt.prototype,"handleThumbDragStart",1);c([K("value",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleValueChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleDisabledChange",1);c([K("hasTooltip",{waitUntilFirstUpdate:!0})],Jt.prototype,"syncRange",1);Jt.define("sl-range");var yg=rt`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vu="important",vg=" !"+Vu,He=yo(class extends vo{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(vg);i.includes("-")||o?s.setProperty(i,o?r.slice(0,-11):r,o?Vu:""):s[i]=r}}return Ze}});var Le=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return oe(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,F`
      <div
        part="base"
        class=${nt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(i=>s>i&&s<i+1?F`
                <span
                  class=${nt({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${He({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${Qo(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${He({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${Qo(this.getSymbol(i+1))}
                  </div>
                </span>
              `:F`
              <span
                class=${nt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${Qo(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Le.styles=[at,yg];Le.dependencies={"sl-icon":zt};c([G(".rating")],Le.prototype,"rating",2);c([ot()],Le.prototype,"hoverValue",2);c([ot()],Le.prototype,"isHovering",2);c([f()],Le.prototype,"label",2);c([f({type:Number})],Le.prototype,"value",2);c([f({type:Number})],Le.prototype,"max",2);c([f({type:Number})],Le.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);c([f()],Le.prototype,"getSymbol",2);c([bo({passive:!0})],Le.prototype,"handleTouchMove",1);c([K("hoverValue")],Le.prototype,"handleHoverValueChange",1);c([K("isHovering")],Le.prototype,"handleIsHoveringChange",1);Le.define("sl-rating");var _g=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],qi=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:r}=_g.find(o=>Math.abs(s)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=Po("second"):i==="hour"?o=Po("minute"):i==="day"?o=Po("hour"):o=Po("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return F` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([ot()],qi.prototype,"isoTime",2);c([ot()],qi.prototype,"relativeTime",2);c([f()],qi.prototype,"date",2);c([f()],qi.prototype,"format",2);c([f()],qi.prototype,"numeric",2);c([f({type:Boolean})],qi.prototype,"sync",2);function Po(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}qi.define("sl-relative-time");var wg=rt`
  ${Du}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,xs=class extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Hr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${nt({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${et(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};xs.styles=[at,wg];c([G(".button")],xs.prototype,"input",2);c([G(".hidden-input")],xs.prototype,"hiddenInput",2);c([ot()],xs.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"checked",2);c([f()],xs.prototype,"value",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"disabled",2);c([f({reflect:!0})],xs.prototype,"size",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"pill",2);c([K("disabled",{waitUntilFirstUpdate:!0})],xs.prototype,"handleDisabledChange",1);xs.define("sl-radio-button");var xg=rt`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,ke=class extends st{constructor(){super(...arguments),this.formControlController=new Zs(this),this.hasSlotController=new Ne(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Hm:t?Um:Pn}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(a=>!a.disabled),i=(e=s.find(a=>a.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let n=s.indexOf(i)+r;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].setAttribute("tabindex","0"),s[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(o=>o.checked),i=e.find(o=>!o.disabled),r=s||i;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=F`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return F`
      <fieldset
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?F`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ke.styles=[at,Wi,xg];ke.dependencies={"sl-button-group":ji};c([G("slot:not([name])")],ke.prototype,"defaultSlot",2);c([G(".radio-group__validation-input")],ke.prototype,"validationInput",2);c([ot()],ke.prototype,"hasButtonGroup",2);c([ot()],ke.prototype,"errorMessage",2);c([ot()],ke.prototype,"defaultValue",2);c([f()],ke.prototype,"label",2);c([f({attribute:"help-text"})],ke.prototype,"helpText",2);c([f()],ke.prototype,"name",2);c([f({reflect:!0})],ke.prototype,"value",2);c([f({reflect:!0})],ke.prototype,"size",2);c([f({reflect:!0})],ke.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ke.prototype,"required",2);c([K("size",{waitUntilFirstUpdate:!0})],ke.prototype,"handleSizeChange",1);c([K("value")],ke.prototype,"handleValueChange",1);ke.define("sl-radio-group");var kg=rt`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,kr=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return F`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};kr.styles=[at,kg];c([G(".progress-ring__indicator")],kr.prototype,"indicator",2);c([ot()],kr.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],kr.prototype,"value",2);c([f()],kr.prototype,"label",2);kr.define("sl-progress-ring");var Cg=rt`
  :host {
    display: inline-block;
  }
`;let Nu=null;class Fu{}Fu.render=function(t,e){Nu(t,e)};self.QrCreator=Fu;(function(t){function e(a,l,d,h){var u={},p=t(d,l);p.u(a),p.J(),h=h||0;var m=p.h(),v=p.h()+2*h;return u.text=a,u.level=l,u.version=d,u.O=v,u.a=function(k,I){return k-=h,I-=h,0>k||k>=m||0>I||I>=m?!1:p.a(k,I)},u}function s(a,l,d,h,u,p,m,v,k,I){function _(w,E,g,C,R,T,B){w?(a.lineTo(E+T,g+B),a.arcTo(E,g,C,R,p)):a.lineTo(E,g)}m?a.moveTo(l+p,d):a.moveTo(l,d),_(v,h,d,h,u,-p,0),_(k,h,u,l,u,0,-p),_(I,l,u,l,d,p,0),_(m,l,d,h,d,0,p)}function i(a,l,d,h,u,p,m,v,k,I){function _(w,E,g,C){a.moveTo(w+g,E),a.lineTo(w,E),a.lineTo(w,E+C),a.arcTo(w,E,w+g,E,p)}m&&_(l,d,p,p),v&&_(h,d,-p,p),k&&_(h,u,-p,-p),I&&_(l,u,p,-p)}function r(a,l){var d=l.fill;if(typeof d=="string")a.fillStyle=d;else{var h=d.type,u=d.colorStops;if(d=d.position.map(m=>Math.round(m*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,d);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,d);else throw Error("Unsupported fill");u.forEach(([m,v])=>{p.addColorStop(m,v)}),a.fillStyle=p}}function o(a,l){t:{var d=l.text,h=l.v,u=l.N,p=l.K,m=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var v=e(d,h,u,m);break t}catch{}v=void 0}if(!v)return null;for(d=a.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,d.beginPath(),m=0;m<h;m+=1)for(u=0;u<h;u+=1){var k=d,I=l.left+u*p,_=l.top+m*p,w=m,E=u,g=v.a,C=I+p,R=_+p,T=w-1,B=w+1,D=E-1,z=E+1,lt=Math.floor(Math.min(.5,Math.max(0,l.R))*p),it=g(w,E),pt=g(T,D),_t=g(T,E);T=g(T,z);var kt=g(w,z);z=g(B,z),E=g(B,E),B=g(B,D),w=g(w,D),I=Math.round(I),_=Math.round(_),C=Math.round(C),R=Math.round(R),it?s(k,I,_,C,R,lt,!_t&&!w,!_t&&!kt,!E&&!kt,!E&&!w):i(k,I,_,C,R,lt,_t&&w&&pt,_t&&kt&&T,E&&kt&&z,E&&w&&B)}return r(d,l),d.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Nu=function(a,l){var d={};Object.assign(d,n,a),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,d)):(a=document.createElement("canvas"),a.width=d.size,a.height=d.size,d=o(a,d),l.appendChild(d))}})(function(){function t(l){var d=s.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(h){for(var u=0;u<d.length;u+=1)h.put(d[u],8)}}}function e(){var l=[],d=0,h={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var m=0;m<p;m+=1)h.m((u>>>p-m-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>d%8),d+=1}};return h}function s(l,d){function h(w,E){for(var g=-1;7>=g;g+=1)if(!(-1>=w+g||v<=w+g))for(var C=-1;7>=C;C+=1)-1>=E+C||v<=E+C||(m[w+g][E+C]=0<=g&&6>=g&&(C==0||C==6)||0<=C&&6>=C&&(g==0||g==6)||2<=g&&4>=g&&2<=C&&4>=C)}function u(w,E){for(var g=v=4*l+17,C=Array(g),R=0;R<g;R+=1){C[R]=Array(g);for(var T=0;T<g;T+=1)C[R][T]=null}for(m=C,h(0,0),h(v-7,0),h(0,v-7),g=o.G(l),C=0;C<g.length;C+=1)for(R=0;R<g.length;R+=1){T=g[C];var B=g[R];if(m[T][B]==null)for(var D=-2;2>=D;D+=1)for(var z=-2;2>=z;z+=1)m[T+D][B+z]=D==-2||D==2||z==-2||z==2||D==0&&z==0}for(g=8;g<v-8;g+=1)m[g][6]==null&&(m[g][6]=g%2==0);for(g=8;g<v-8;g+=1)m[6][g]==null&&(m[6][g]=g%2==0);for(g=o.w(p<<3|E),C=0;15>C;C+=1)R=!w&&(g>>C&1)==1,m[6>C?C:8>C?C+1:v-15+C][8]=R,m[8][8>C?v-C-1:9>C?15-C:14-C]=R;if(m[v-8][8]=!w,7<=l){for(g=o.A(l),C=0;18>C;C+=1)R=!w&&(g>>C&1)==1,m[Math.floor(C/3)][C%3+v-8-3]=R;for(C=0;18>C;C+=1)R=!w&&(g>>C&1)==1,m[C%3+v-8-3][Math.floor(C/3)]=R}if(k==null){for(w=a.I(l,p),g=e(),C=0;C<I.length;C+=1)R=I[C],g.put(4,4),g.put(R.b(),o.f(4,l)),R.write(g);for(C=R=0;C<w.length;C+=1)R+=w[C].j;if(g.f()>8*R)throw Error("code length overflow. ("+g.f()+">"+8*R+")");for(g.f()+4<=8*R&&g.put(0,4);g.f()%8!=0;)g.m(!1);for(;!(g.f()>=8*R)&&(g.put(236,8),!(g.f()>=8*R));)g.put(17,8);var lt=0;for(R=C=0,T=Array(w.length),B=Array(w.length),D=0;D<w.length;D+=1){var it=w[D].j,pt=w[D].o-it;for(C=Math.max(C,it),R=Math.max(R,pt),T[D]=Array(it),z=0;z<T[D].length;z+=1)T[D][z]=255&g.B()[z+lt];for(lt+=it,z=o.C(pt),it=i(T[D],z.b()-1).l(z),B[D]=Array(z.b()-1),z=0;z<B[D].length;z+=1)pt=z+it.b()-B[D].length,B[D][z]=0<=pt?it.c(pt):0}for(z=g=0;z<w.length;z+=1)g+=w[z].o;for(g=Array(g),z=lt=0;z<C;z+=1)for(D=0;D<w.length;D+=1)z<T[D].length&&(g[lt]=T[D][z],lt+=1);for(z=0;z<R;z+=1)for(D=0;D<w.length;D+=1)z<B[D].length&&(g[lt]=B[D][z],lt+=1);k=g}for(w=k,g=-1,C=v-1,R=7,T=0,E=o.F(E),B=v-1;0<B;B-=2)for(B==6&&--B;;){for(D=0;2>D;D+=1)m[C][B-D]==null&&(z=!1,T<w.length&&(z=(w[T]>>>R&1)==1),E(C,B-D)&&(z=!z),m[C][B-D]=z,--R,R==-1&&(T+=1,R=7));if(C+=g,0>C||v<=C){C-=g,g=-g;break}}}var p=r[d],m=null,v=0,k=null,I=[],_={u:function(w){w=t(w),I.push(w),k=null},a:function(w,E){if(0>w||v<=w||0>E||v<=E)throw Error(w+","+E);return m[w][E]},h:function(){return v},J:function(){for(var w=0,E=0,g=0;8>g;g+=1){u(!0,g);var C=o.D(_);(g==0||w>C)&&(w=C,E=g)}u(!1,E)}};return _}function i(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var m=Array(l.length-p+d),v=0;v<l.length-p;v+=1)m[v]=l[v+p];return m}(),u={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var m=Array(u.b()+p.b()-1),v=0;v<u.b();v+=1)for(var k=0;k<p.b();k+=1)m[v+k]^=n.i(n.g(u.c(v))+n.g(p.c(k)));return i(m,0)},l:function(p){if(0>u.b()-p.b())return u;for(var m=n.g(u.c(0))-n.g(p.c(0)),v=Array(u.b()),k=0;k<u.b();k+=1)v[k]=u.c(k);for(k=0;k<p.b();k+=1)v[k]^=n.i(n.g(p.c(k))+m);return i(v,0).l(p)}};return u}s.s=function(l){for(var d=[],h=0;h<l.length;h++){var u=l.charCodeAt(h);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var r={L:1,M:0,Q:3,H:2},o=function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=i([1],0),m=0;m<u;m+=1)p=p.multiply(i([1,n.i(m)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),m=0,v=0;v<p;v+=1)for(var k=0;k<p;k+=1){for(var I=0,_=u.a(v,k),w=-1;1>=w;w+=1)if(!(0>v+w||p<=v+w))for(var E=-1;1>=E;E+=1)0>k+E||p<=k+E||(w!=0||E!=0)&&_==u.a(v+w,k+E)&&(I+=1);5<I&&(m+=3+I-5)}for(v=0;v<p-1;v+=1)for(k=0;k<p-1;k+=1)I=0,u.a(v,k)&&(I+=1),u.a(v+1,k)&&(I+=1),u.a(v,k+1)&&(I+=1),u.a(v+1,k+1)&&(I+=1),(I==0||I==4)&&(m+=3);for(v=0;v<p;v+=1)for(k=0;k<p-6;k+=1)u.a(v,k)&&!u.a(v,k+1)&&u.a(v,k+2)&&u.a(v,k+3)&&u.a(v,k+4)&&!u.a(v,k+5)&&u.a(v,k+6)&&(m+=40);for(k=0;k<p;k+=1)for(v=0;v<p-6;v+=1)u.a(v,k)&&!u.a(v+1,k)&&u.a(v+2,k)&&u.a(v+3,k)&&u.a(v+4,k)&&!u.a(v+5,k)&&u.a(v+6,k)&&(m+=40);for(k=I=0;k<p;k+=1)for(v=0;v<p;v+=1)u.a(v,k)&&(I+=1);return m+=Math.abs(100*I/p/p-50)/5*10}};return h}(),n=function(){for(var l=Array(256),d=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)d[l[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),a=function(){function l(u,p){switch(p){case r.L:return d[4*(u-1)];case r.M:return d[4*(u-1)+1];case r.Q:return d[4*(u-1)+2];case r.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,p){var m=l(u,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=m.length/3,p=[];for(var v=0;v<u;v+=1)for(var k=m[3*v],I=m[3*v+1],_=m[3*v+2],w=0;w<k;w+=1){var E=_,g={};g.o=I,g.j=E,p.push(g)}return p}};return h}();return s}());const Sg=QrCreator;var ks=class extends st{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Sg.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return F`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${He({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ks.styles=[at,Cg];c([G("canvas")],ks.prototype,"canvas",2);c([f()],ks.prototype,"value",2);c([f()],ks.prototype,"label",2);c([f({type:Number})],ks.prototype,"size",2);c([f()],ks.prototype,"fill",2);c([f()],ks.prototype,"background",2);c([f({type:Number})],ks.prototype,"radius",2);c([f({attribute:"error-correction"})],ks.prototype,"errorCorrection",2);c([K(["background","errorCorrection","fill","radius","size","value"])],ks.prototype,"generate",1);ks.define("sl-qr-code");var Eg=rt`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fs=class extends st{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return F`
      <span
        part="base"
        class=${nt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?F` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Fs.styles=[at,Eg];Fs.dependencies={"sl-icon":zt};c([ot()],Fs.prototype,"checked",2);c([ot()],Fs.prototype,"hasFocus",2);c([f()],Fs.prototype,"value",2);c([f({reflect:!0})],Fs.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Fs.prototype,"disabled",2);c([K("checked")],Fs.prototype,"handleCheckedChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Fs.prototype,"handleDisabledChange",1);Fs.define("sl-radio");Ot.define("sl-popup");var $g=rt`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Co=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return F`
      <div
        part="base"
        class=${nt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${et(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${He({width:`${this.value}%`})}>
          ${this.indeterminate?"":F` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Co.styles=[at,$g];c([f({type:Number,reflect:!0})],Co.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Co.prototype,"indeterminate",2);c([f()],Co.prototype,"label",2);Co.define("sl-progress-bar");var Ag=rt`
  :host {
    display: contents;
  }
`,Bs=class extends st{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return F` <slot></slot> `}};Bs.styles=[at,Ag];c([f({reflect:!0})],Bs.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],Bs.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],Bs.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Bs.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],Bs.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],Bs.prototype,"disabled",2);c([K("disabled")],Bs.prototype,"handleDisabledChange",1);c([K("attr",{waitUntilFirstUpdate:!0}),K("attr-old-value",{waitUntilFirstUpdate:!0}),K("char-data",{waitUntilFirstUpdate:!0}),K("char-data-old-value",{waitUntilFirstUpdate:!0}),K("childList",{waitUntilFirstUpdate:!0})],Bs.prototype,"handleChange",1);Bs.define("sl-mutation-observer");var Tg=rt`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Bu=class extends st{render(){return F` <slot part="base" class="menu-label"></slot> `}};Bu.styles=[at,Tg];Bu.define("sl-menu-label");var Ig=rt`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Gi=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),qr(this.base,{onMove:i=>{this.position=parseFloat(oe(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=oe(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return F`
      <div
        part="base"
        id="image-comparer"
        class=${nt({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${He({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${He({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Gi.styles=[at,Ig];Gi.scopedElement={"sl-icon":zt};c([G(".image-comparer")],Gi.prototype,"base",2);c([G(".image-comparer__handle")],Gi.prototype,"handle",2);c([f({type:Number,reflect:!0})],Gi.prototype,"position",2);c([K("position",{waitUntilFirstUpdate:!0})],Gi.prototype,"handlePositionChange",1);Gi.define("sl-image-comparer");var Lg=rt`
  :host {
    display: block;
  }
`,aa=new Map;function Og(t,e="cors"){const s=aa.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return aa.set(t,o),o});return aa.set(t,i),i}var Cr=class extends st{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Og(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return F`<slot></slot>`}};Cr.styles=[at,Lg];c([f()],Cr.prototype,"src",2);c([f()],Cr.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],Cr.prototype,"allowScripts",2);c([K("src")],Cr.prototype,"handleSrcChange",1);Cr.define("sl-include");zt.define("sl-icon");var Mn=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};c([f({type:Number})],Mn.prototype,"value",2);c([f()],Mn.prototype,"unit",2);c([f()],Mn.prototype,"display",2);Mn.define("sl-format-bytes");var os=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return F`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};c([f()],os.prototype,"date",2);c([f()],os.prototype,"weekday",2);c([f()],os.prototype,"era",2);c([f()],os.prototype,"year",2);c([f()],os.prototype,"month",2);c([f()],os.prototype,"day",2);c([f()],os.prototype,"hour",2);c([f()],os.prototype,"minute",2);c([f()],os.prototype,"second",2);c([f({attribute:"time-zone-name"})],os.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],os.prototype,"timeZone",2);c([f({attribute:"hour-format"})],os.prototype,"hourFormat",2);os.define("sl-format-date");var Cs=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Cs.prototype,"value",2);c([f()],Cs.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Cs.prototype,"noGrouping",2);c([f()],Cs.prototype,"currency",2);c([f({attribute:"currency-display"})],Cs.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Cs.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Cs.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Cs.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Cs.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Cs.prototype,"maximumSignificantDigits",2);Cs.define("sl-format-number");var Rg=rt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Dn=class extends st{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Dn.styles=[at,Rg];c([f({type:Boolean,reflect:!0})],Dn.prototype,"vertical",2);c([K("vertical")],Dn.prototype,"handleVerticalChange",1);Dn.define("sl-divider");var Pg=rt`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Mc(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ns=class extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"footer"),this.localize=new At(this),this.modal=new zu(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),jr(this)))}disconnectedCallback(){super.disconnectedCallback(),Wr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Wt(this,"drawer.denyClose",{dir:this.localize.dir()});Zt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),jr(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ae(this.drawer),ae(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Wt(this,`drawer.show${Mc(this.placement)}`,{dir:this.localize.dir()}),s=Wt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Zt(this.panel,e.keyframes,e.options),Zt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Wr(this)),await Promise.all([ae(this.drawer),ae(this.overlay)]);const t=Wt(this,`drawer.hide${Mc(this.placement)}`,{dir:this.localize.dir()}),e=Wt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Zt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Zt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),jr(this)),this.open&&this.contained&&(this.modal.deactivate(),Wr(this))}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}render(){return F`
      <div
        part="base"
        class=${nt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":F`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ns.styles=[at,Pg];ns.dependencies={"sl-icon-button":ce};c([G(".drawer")],ns.prototype,"drawer",2);c([G(".drawer__panel")],ns.prototype,"panel",2);c([G(".drawer__overlay")],ns.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],ns.prototype,"open",2);c([f({reflect:!0})],ns.prototype,"label",2);c([f({reflect:!0})],ns.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],ns.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],ns.prototype,"noHeader",2);c([K("open",{waitUntilFirstUpdate:!0})],ns.prototype,"handleOpenChange",1);c([K("contained",{waitUntilFirstUpdate:!0})],ns.prototype,"handleNoModalChange",1);Rt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Rt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Rt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ns.define("sl-drawer");var Mg=rt`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,me=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";s?[r,o]=this.from.trim().split("."):i&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?i?t=n.getAttribute(o)||"":s?t=n[o]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,o=Wt(this,"copy.in",{dir:"ltr"}),n=Wt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return F`
      <sl-tooltip
        class=${nt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};me.styles=[at,Mg];me.dependencies={"sl-icon":zt,"sl-tooltip":fe};c([G('slot[name="copy-icon"]')],me.prototype,"copyIcon",2);c([G('slot[name="success-icon"]')],me.prototype,"successIcon",2);c([G('slot[name="error-icon"]')],me.prototype,"errorIcon",2);c([G("sl-tooltip")],me.prototype,"tooltip",2);c([ot()],me.prototype,"isCopying",2);c([ot()],me.prototype,"status",2);c([f()],me.prototype,"value",2);c([f()],me.prototype,"from",2);c([f({type:Boolean,reflect:!0})],me.prototype,"disabled",2);c([f({attribute:"copy-label"})],me.prototype,"copyLabel",2);c([f({attribute:"success-label"})],me.prototype,"successLabel",2);c([f({attribute:"error-label"})],me.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],me.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],me.prototype,"tooltipPlacement",2);c([f({type:Boolean})],me.prototype,"hoist",2);Rt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Rt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});me.define("sl-copy-button");de.define("sl-checkbox");var Dg=rt`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function ve(t,e){zg(t)&&(t="100%");const s=Vg(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Mo(t){return Math.min(1,Math.max(0,t))}function zg(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Vg(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Uu(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Do(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Pi(t){return t.length===1?"0"+t:String(t)}function Ng(t,e,s){return{r:ve(t,255)*255,g:ve(e,255)*255,b:ve(s,255)*255}}function Dc(t,e,s){t=ve(t,255),e=ve(e,255),s=ve(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0,n=0;const a=(i+r)/2;if(i===r)n=0,o=0;else{const l=i-r;switch(n=a>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-s)/l+(e<s?6:0);break;case e:o=(s-t)/l+2;break;case s:o=(t-e)/l+4;break}o/=6}return{h:o,s:n,l:a}}function la(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Fg(t,e,s){let i,r,o;if(t=ve(t,360),e=ve(e,100),s=ve(s,100),e===0)r=s,o=s,i=s;else{const n=s<.5?s*(1+e):s+e-s*e,a=2*s-n;i=la(a,n,t+1/3),r=la(a,n,t),o=la(a,n,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function zc(t,e,s){t=ve(t,255),e=ve(e,255),s=ve(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0;const n=i,a=i-r,l=i===0?0:a/i;if(i===r)o=0;else{switch(i){case t:o=(e-s)/a+(e<s?6:0);break;case e:o=(s-t)/a+2;break;case s:o=(t-e)/a+4;break}o/=6}return{h:o,s:l,v:n}}function Bg(t,e,s){t=ve(t,360)*6,e=ve(e,100),s=ve(s,100);const i=Math.floor(t),r=t-i,o=s*(1-e),n=s*(1-r*e),a=s*(1-(1-r)*e),l=i%6,d=[s,n,o,o,a,s][l],h=[a,s,s,n,o,o][l],u=[o,o,a,s,s,n][l];return{r:d*255,g:h*255,b:u*255}}function Vc(t,e,s,i){const r=[Pi(Math.round(t).toString(16)),Pi(Math.round(e).toString(16)),Pi(Math.round(s).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Ug(t,e,s,i,r){const o=[Pi(Math.round(t).toString(16)),Pi(Math.round(e).toString(16)),Pi(Math.round(s).toString(16)),Pi(jg(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Hg(t,e,s,i){const r=t/100,o=e/100,n=s/100,a=i/100,l=255*(1-r)*(1-a),d=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:d,b:h}}function Nc(t,e,s){let i=1-t/255,r=1-e/255,o=1-s/255,n=Math.min(i,r,o);return n===1?(i=0,r=0,o=0):(i=(i-n)/(1-n)*100,r=(r-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(o),k:Math.round(n)}}function jg(t){return Math.round(parseFloat(t)*255).toString(16)}function Fc(t){return Ye(t)/255}function Ye(t){return parseInt(t,16)}function Wg(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Ua={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Kg(t){let e={r:0,g:0,b:0},s=1,i=null,r=null,o=null,n=!1,a=!1;return typeof t=="string"&&(t=Yg(t)),typeof t=="object"&&(Ge(t.r)&&Ge(t.g)&&Ge(t.b)?(e=Ng(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ge(t.h)&&Ge(t.s)&&Ge(t.v)?(i=Do(t.s),r=Do(t.v),e=Bg(t.h,i,r),n=!0,a="hsv"):Ge(t.h)&&Ge(t.s)&&Ge(t.l)?(i=Do(t.s),o=Do(t.l),e=Fg(t.h,i,o),n=!0,a="hsl"):Ge(t.c)&&Ge(t.m)&&Ge(t.y)&&Ge(t.k)&&(e=Hg(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Uu(s),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const qg="[-\\+]?\\d+%?",Gg="[-\\+]?\\d*\\.\\d+%?",ui="(?:"+Gg+")|(?:"+qg+")",ca="[\\s|\\(]+("+ui+")[,|\\s]+("+ui+")[,|\\s]+("+ui+")\\s*\\)?",zo="[\\s|\\(]+("+ui+")[,|\\s]+("+ui+")[,|\\s]+("+ui+")[,|\\s]+("+ui+")\\s*\\)?",as={CSS_UNIT:new RegExp(ui),rgb:new RegExp("rgb"+ca),rgba:new RegExp("rgba"+zo),hsl:new RegExp("hsl"+ca),hsla:new RegExp("hsla"+zo),hsv:new RegExp("hsv"+ca),hsva:new RegExp("hsva"+zo),cmyk:new RegExp("cmyk"+zo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Yg(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Ua[t])t=Ua[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=as.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=as.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=as.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=as.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=as.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=as.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=as.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=as.hex8.exec(t),s?{r:Ye(s[1]),g:Ye(s[2]),b:Ye(s[3]),a:Fc(s[4]),format:e?"name":"hex8"}:(s=as.hex6.exec(t),s?{r:Ye(s[1]),g:Ye(s[2]),b:Ye(s[3]),format:e?"name":"hex"}:(s=as.hex4.exec(t),s?{r:Ye(s[1]+s[1]),g:Ye(s[2]+s[2]),b:Ye(s[3]+s[3]),a:Fc(s[4]+s[4]),format:e?"name":"hex8"}:(s=as.hex3.exec(t),s?{r:Ye(s[1]+s[1]),g:Ye(s[2]+s[2]),b:Ye(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function Ge(t){return typeof t=="number"?!Number.isNaN(t):as.CSS_UNIT.test(t)}class Qt{constructor(e="",s={}){if(e instanceof Qt)return e;typeof e=="number"&&(e=Wg(e)),this.originalInput=e;const i=Kg(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,r;const o=e.r/255,n=e.g/255,a=e.b/255;return o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Uu(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=zc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=zc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${r}%)`:`hsva(${s}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=Dc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Dc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${r}%)`:`hsla(${s}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Vc(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Ug(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(ve(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(ve(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Nc(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:r}=Nc(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Vc(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(Ua))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Qt(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=Mo(s.l),new Qt(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new Qt(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=Mo(s.l),new Qt(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=Mo(s.s),new Qt(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=Mo(s.s),new Qt(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new Qt(s)}mix(e,s=50){const i=this.toRgb(),r=new Qt(e).toRgb(),o=s/100,n={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new Qt(n)}analogous(e=6,s=30){const i=this.toHsl(),r=360/s,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new Qt(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Qt(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:r}=s;let{v:o}=s;const n=[],a=1/e;for(;e--;)n.push(new Qt({h:i,s:r,v:o})),o=(o+a)%1;return n}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new Qt({h:(s+72)%360,s:e.s,l:e.l}),new Qt({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new Qt(e).toRgb(),r=s.a+i.a*(1-s.a);return new Qt({r:(s.r*s.a+i.r*i.a*(1-s.a))/r,g:(s.g*s.a+i.g*i.a*(1-s.a))/r,b:(s.b*s.a+i.b*i.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,r=[this],o=360/e;for(let n=1;n<e;n++)r.push(new Qt({h:(i+n*o)%360,s:s.s,l:s.l}));return r}equals(e){const s=new Qt(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Bc="EyeDropper"in window,xt=class extends st{constructor(){super(),this.formControlController=new Zs(this),this.isSafeValue=!1,this.localize=new At(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),qr(e,{onMove:n=>{this.alpha=oe(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),qr(e,{onMove:n=>{this.hue=oe(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let o=this.value,n=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,qr(e,{onMove:(a,l)=>{this.saturation=oe(a/i*100,0,100),this.brightness=oe(100-l/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=oe(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=oe(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=oe(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=oe(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=oe(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=oe(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=oe(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=oe(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Qt(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),o=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Bc)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const r=new Qt(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=F`
      <div
        part="base"
        class=${nt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?F`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${He({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${nt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${He({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${et(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${He({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${et(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?F`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${He({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${He({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${et(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${He({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":F`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Bc?F`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?F`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(r=>{const o=this.parseColor(r);return o?F`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${et(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${He({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:F`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${nt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${He({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};xt.styles=[at,Dg];xt.dependencies={"sl-button-group":ji,"sl-button":Pt,"sl-dropdown":we,"sl-icon":zt,"sl-input":yt,"sl-visually-hidden":Tl};c([G('[part~="base"]')],xt.prototype,"base",2);c([G('[part~="input"]')],xt.prototype,"input",2);c([G(".color-dropdown")],xt.prototype,"dropdown",2);c([G('[part~="preview"]')],xt.prototype,"previewButton",2);c([G('[part~="trigger"]')],xt.prototype,"trigger",2);c([ot()],xt.prototype,"hasFocus",2);c([ot()],xt.prototype,"isDraggingGridHandle",2);c([ot()],xt.prototype,"isEmpty",2);c([ot()],xt.prototype,"inputValue",2);c([ot()],xt.prototype,"hue",2);c([ot()],xt.prototype,"saturation",2);c([ot()],xt.prototype,"brightness",2);c([ot()],xt.prototype,"alpha",2);c([f()],xt.prototype,"value",2);c([xr()],xt.prototype,"defaultValue",2);c([f()],xt.prototype,"label",2);c([f()],xt.prototype,"format",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"inline",2);c([f({reflect:!0})],xt.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],xt.prototype,"noFormatToggle",2);c([f()],xt.prototype,"name",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);c([f({type:Boolean})],xt.prototype,"hoist",2);c([f({type:Boolean})],xt.prototype,"opacity",2);c([f({type:Boolean})],xt.prototype,"uppercase",2);c([f()],xt.prototype,"swatches",2);c([f({reflect:!0})],xt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"required",2);c([bo({passive:!1})],xt.prototype,"handleTouchMove",1);c([K("format",{waitUntilFirstUpdate:!0})],xt.prototype,"handleFormatChange",1);c([K("opacity",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpacityChange",1);c([K("value")],xt.prototype,"handleValueChange",1);xt.define("sl-color-picker");var Xg=rt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Hu=class extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"footer","header","image")}render(){return F`
      <div
        part="base"
        class=${nt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hu.styles=[at,Xg];Hu.define("sl-card");var Jg=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Qg=rt`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Zg(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*tb(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let r=i;s>0?r<e:e<r;r+=s)yield r}var ee=class extends st{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Jg(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new At(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==r)&&(t.scrollTo({left:i,top:r,behavior:za()?"auto":"smooth"}),await Ve(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,r=i?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const a of e){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const s=e.find(a=>a.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=i.indexOf(s.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const a=Number(s.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(t.length-o-1)),this.prepend(n)}),i.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const n=i?(t+r.length)%r.length:oe(t,0,r.length-s);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=oe(t+(i?s:0)+(a?s-1:0),0,o.length-1),d=o[l];this.scrollToSlide(d,za()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-i.left,n=r.top-i.top;o||n?(this.pendingSlideChange=!0,s.scrollTo({left:o+s.scrollLeft,top:n+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return F`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${nt({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?F`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${nt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${nt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?F`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Zg(tb(s),a=>{const l=a===i;return F`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${nt({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,s)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ee.styles=[at,Qg];ee.dependencies={"sl-icon":zt};c([f({type:Boolean,reflect:!0})],ee.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],ee.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],ee.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],ee.prototype,"slidesPerMove",2);c([f()],ee.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ee.prototype,"mouseDragging",2);c([G(".carousel__slides")],ee.prototype,"scrollContainer",2);c([G(".carousel__pagination")],ee.prototype,"paginationContainer",2);c([ot()],ee.prototype,"activeSlide",2);c([ot()],ee.prototype,"scrolling",2);c([ot()],ee.prototype,"dragging",2);c([bo({passive:!0})],ee.prototype,"handleScroll",1);c([K("loop",{waitUntilFirstUpdate:!0}),K("slidesPerPage",{waitUntilFirstUpdate:!0})],ee.prototype,"initializeSlides",1);c([K("activeSlide")],ee.prototype,"handleSlideChange",1);c([K("slidesPerMove")],ee.prototype,"updateSlidesSnap",1);c([K("autoplay")],ee.prototype,"handleAutoplayChange",1);ee.define("sl-carousel");var eb=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},Uc=(t,e,s)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),s.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=o=>{for(const n of o.changedTouches)e.add(n.identifier)},r=o=>{for(const n of o.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Uc(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=eb(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Uc(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=s.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var sb=rt`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,ju=class extends st{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return F` <slot></slot> `}};ju.styles=[at,sb];ju.define("sl-carousel-item");var ib=rt`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Sr=class extends st{constructor(){super(...arguments),this.localize=new At(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),F`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Sr.styles=[at,ib];Sr.dependencies={"sl-icon":zt};c([G("slot")],Sr.prototype,"defaultSlot",2);c([G('slot[name="separator"]')],Sr.prototype,"separatorSlot",2);c([f()],Sr.prototype,"label",2);Sr.define("sl-breadcrumb");var rb=rt`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,So=class extends st{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return F`
      <span
        part="base"
        class=${nt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};So.styles=[at,rb];c([f({reflect:!0})],So.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],So.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],So.prototype,"pulse",2);So.define("sl-badge");var ob=rt`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,vi=class extends st{constructor(){super(...arguments),this.hasSlotController=new Ne(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return F`
      <div
        part="base"
        class=${nt({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?F`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${et(this.target?this.target:void 0)}"
                rel=${et(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?F`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?F`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};vi.styles=[at,ob];c([G("slot:not([name])")],vi.prototype,"defaultSlot",2);c([ot()],vi.prototype,"renderType",2);c([f()],vi.prototype,"href",2);c([f()],vi.prototype,"target",2);c([f()],vi.prototype,"rel",2);c([K("href",{waitUntilFirstUpdate:!0})],vi.prototype,"hrefChanged",1);vi.define("sl-breadcrumb-item");var nb=rt`
  :host {
    display: contents;
  }
`;const ab=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],lb=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],cb=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],db=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],ub=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],pb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],mb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bb=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],yb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],vb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_b=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],wb=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],xb=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],kb=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Cb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Sb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Eb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],$b=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ab=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Tb=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ib=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Lb=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ob=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rb=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Pb=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Mb=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Db=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],zb=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Vb=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Nb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fb=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bb=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ub=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jb=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wb=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kb=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qb=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gb=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yb=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xb=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jb=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Qb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Zb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],t0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],e0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],s0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],i0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],r0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],o0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],n0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],a0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],l0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],c0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],d0=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],u0=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],h0=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],p0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],f0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],m0=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],g0=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],b0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],y0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],v0=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],_0=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],w0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],x0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],k0=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],C0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],S0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],E0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],$0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],A0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],T0=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],I0=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],L0=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],O0=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],R0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],P0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],M0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],D0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],z0=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],V0=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],N0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],F0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],B0=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],U0=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],H0=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],j0=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],W0=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],K0=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],q0=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],G0=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Y0=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],X0=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Wu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},J0=Object.freeze(Object.defineProperty({__proto__:null,backInDown:_b,backInLeft:wb,backInRight:xb,backInUp:kb,backOutDown:Cb,backOutLeft:Sb,backOutRight:Eb,backOutUp:$b,bounce:ab,bounceIn:Ab,bounceInDown:Tb,bounceInLeft:Ib,bounceInRight:Lb,bounceInUp:Ob,bounceOut:Rb,bounceOutDown:Pb,bounceOutLeft:Mb,bounceOutRight:Db,bounceOutUp:zb,easings:Wu,fadeIn:Vb,fadeInBottomLeft:Nb,fadeInBottomRight:Fb,fadeInDown:Bb,fadeInDownBig:Ub,fadeInLeft:Hb,fadeInLeftBig:jb,fadeInRight:Wb,fadeInRightBig:Kb,fadeInTopLeft:qb,fadeInTopRight:Gb,fadeInUp:Yb,fadeInUpBig:Xb,fadeOut:Jb,fadeOutBottomLeft:Qb,fadeOutBottomRight:Zb,fadeOutDown:t0,fadeOutDownBig:e0,fadeOutLeft:s0,fadeOutLeftBig:i0,fadeOutRight:r0,fadeOutRightBig:o0,fadeOutTopLeft:n0,fadeOutTopRight:a0,fadeOutUp:l0,fadeOutUpBig:c0,flash:lb,flip:d0,flipInX:u0,flipInY:h0,flipOutX:p0,flipOutY:f0,headShake:cb,heartBeat:db,hinge:z0,jackInTheBox:V0,jello:ub,lightSpeedInLeft:m0,lightSpeedInRight:g0,lightSpeedOutLeft:b0,lightSpeedOutRight:y0,pulse:hb,rollIn:N0,rollOut:F0,rotateIn:v0,rotateInDownLeft:_0,rotateInDownRight:w0,rotateInUpLeft:x0,rotateInUpRight:k0,rotateOut:C0,rotateOutDownLeft:S0,rotateOutDownRight:E0,rotateOutUpLeft:$0,rotateOutUpRight:A0,rubberBand:pb,shake:fb,shakeX:mb,shakeY:gb,slideInDown:T0,slideInLeft:I0,slideInRight:L0,slideInUp:O0,slideOutDown:R0,slideOutLeft:P0,slideOutRight:M0,slideOutUp:D0,swing:bb,tada:yb,wobble:vb,zoomIn:B0,zoomInDown:U0,zoomInLeft:H0,zoomInRight:j0,zoomInUp:W0,zoomOut:K0,zoomOutDown:q0,zoomOutLeft:G0,zoomOutRight:Y0,zoomOutUp:X0},Symbol.toStringTag,{value:"Module"}));var ge=class extends st{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Wu[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:J0[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!i?!1:(this.destroyAnimation(),this.animation=o.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return F` <slot @slotchange=${this.handleSlotChange}></slot> `}};ge.styles=[at,nb];c([yf("slot")],ge.prototype,"defaultSlot",2);c([f()],ge.prototype,"name",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"play",2);c([f({type:Number})],ge.prototype,"delay",2);c([f()],ge.prototype,"direction",2);c([f({type:Number})],ge.prototype,"duration",2);c([f()],ge.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],ge.prototype,"endDelay",2);c([f()],ge.prototype,"fill",2);c([f({type:Number})],ge.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],ge.prototype,"iterationStart",2);c([f({attribute:!1})],ge.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],ge.prototype,"playbackRate",2);c([K(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ge.prototype,"handleAnimationChange",1);c([K("play")],ge.prototype,"handlePlayChange",1);c([K("playbackRate")],ge.prototype,"handlePlaybackRateChange",1);ge.define("sl-animation");var Q0=rt`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Us=class extends st{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=F`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=F``;return this.initials?e=F`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=F`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,F`
      <div
        part="base"
        class=${nt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Us.styles=[at,Q0];Us.dependencies={"sl-icon":zt};c([ot()],Us.prototype,"hasError",2);c([f()],Us.prototype,"image",2);c([f()],Us.prototype,"label",2);c([f()],Us.prototype,"initials",2);c([f()],Us.prototype,"loading",2);c([f({reflect:!0})],Us.prototype,"shape",2);c([K("image")],Us.prototype,"handleImageChange",1);Us.define("sl-avatar");var Z0=rt`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Ss=class extends st{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return F`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?F`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Ss.styles=[at,Z0];Ss.dependencies={"sl-icon":zt};c([G(".animated-image__animated")],Ss.prototype,"animatedImage",2);c([ot()],Ss.prototype,"frozenFrame",2);c([ot()],Ss.prototype,"isLoaded",2);c([f()],Ss.prototype,"src",2);c([f()],Ss.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],Ss.prototype,"play",2);c([K("play",{waitUntilFirstUpdate:!0})],Ss.prototype,"handlePlayChange",1);c([K("src")],Ss.prototype,"handleSrcChange",1);Ss.define("sl-animated-image");Pa("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ll(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const Ft={},lr=[],Ms=()=>{},ty=()=>!1,zn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ol=t=>t.startsWith("onUpdate:"),Te=Object.assign,Rl=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},ey=Object.prototype.hasOwnProperty,Lt=(t,e)=>ey.call(t,e),ft=Array.isArray,cr=t=>Vn(t)==="[object Map]",Ku=t=>Vn(t)==="[object Set]",bt=t=>typeof t=="function",re=t=>typeof t=="string",ti=t=>typeof t=="symbol",Kt=t=>t!==null&&typeof t=="object",qu=t=>(Kt(t)||bt(t))&&bt(t.then)&&bt(t.catch),Gu=Object.prototype.toString,Vn=t=>Gu.call(t),sy=t=>Vn(t).slice(8,-1),Yu=t=>Vn(t)==="[object Object]",Pl=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gr=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nn=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},iy=/-(\w)/g,gi=Nn(t=>t.replace(iy,(e,s)=>s?s.toUpperCase():"")),ry=/\B([A-Z])/g,Yi=Nn(t=>t.replace(ry,"-$1").toLowerCase()),Xu=Nn(t=>t.charAt(0).toUpperCase()+t.slice(1)),da=Nn(t=>t?`on${Xu(t)}`:""),hi=(t,e)=>!Object.is(t,e),ua=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},Ju=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},oy=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hc;const Fn=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bn(t){if(ft(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],r=re(i)?cy(i):Bn(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(re(t)||Kt(t))return t}const ny=/;(?![^(]*\))/g,ay=/:([^]+)/,ly=/\/\*[^]*?\*\//g;function cy(t){const e={};return t.replace(ly,"").split(ny).forEach(s=>{if(s){const i=s.split(ay);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mr(t){let e="";if(re(t))e=t;else if(ft(t))for(let s=0;s<t.length;s++){const i=mr(t[s]);i&&(e+=i+" ")}else if(Kt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function dy(t){if(!t)return null;let{class:e,style:s}=t;return e&&!re(e)&&(t.class=mr(e)),s&&(t.style=Bn(s)),t}const uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hy=Ll(uy);function Qu(t){return!!t||t===""}const Zu=t=>!!(t&&t.__v_isRef===!0),gt=t=>re(t)?t:t==null?"":ft(t)||Kt(t)&&(t.toString===Gu||!bt(t.toString))?Zu(t)?gt(t.value):JSON.stringify(t,th,2):String(t),th=(t,e)=>Zu(e)?th(t,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,r],o)=>(s[ha(i,o)+" =>"]=r,s),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>ha(s))}:ti(e)?ha(e):Kt(e)&&!ft(e)&&!Yu(e)?String(e):e,ha=(t,e="")=>{var s;return ti(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=De;try{return De=this,e()}finally{De=s}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ml(t){return new eh(t)}function sh(){return De}function py(t,e=!1){De&&De.cleanups.push(t)}let Vt;const pa=new WeakSet;class ih{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pa.has(this)&&(pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jc(this),nh(this);const e=Vt,s=gs;Vt=this,gs=!0;try{return this.fn()}finally{ah(this),Vt=e,gs=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vl(e);this.deps=this.depsTail=void 0,jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let rh=0,Yr,Xr;function oh(t,e=!1){if(t.flags|=8,e){t.next=Xr,Xr=t;return}t.next=Yr,Yr=t}function Dl(){rh++}function zl(){if(--rh>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;Yr;){let e=Yr;for(Yr=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function nh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ah(t){let e,s=t.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),Vl(i),fy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=s}function Ha(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oo))return;t.globalVersion=oo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ha(t)){t.flags&=-3;return}const s=Vt,i=gs;Vt=t,gs=!0;try{nh(t);const r=t.fn(t._value);(e.version===0||hi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Vt=s,gs=i,ah(t),t.flags&=-3}}function Vl(t,e=!1){const{dep:s,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Vl(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function fy(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let gs=!0;const ch=[];function _i(){ch.push(gs),gs=!1}function wi(){const t=ch.pop();gs=t===void 0?!0:t}function jc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=Vt;Vt=void 0;try{e()}finally{Vt=s}}}let oo=0;class my{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Vt||!gs||Vt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Vt)s=this.activeLink=new my(Vt,this),Vt.deps?(s.prevDep=Vt.depsTail,Vt.depsTail.nextDep=s,Vt.depsTail=s):Vt.deps=Vt.depsTail=s,dh(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=Vt.depsTail,s.nextDep=void 0,Vt.depsTail.nextDep=s,Vt.depsTail=s,Vt.deps===s&&(Vt.deps=i)}return s}trigger(e){this.version++,oo++,this.notify(e)}notify(e){Dl();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{zl()}}}function dh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dh(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const dn=new WeakMap,Mi=Symbol(""),ja=Symbol(""),no=Symbol("");function Se(t,e,s){if(gs&&Vt){let i=dn.get(t);i||dn.set(t,i=new Map);let r=i.get(s);r||(i.set(s,r=new Nl),r.map=i,r.key=s),r.track()}}function qs(t,e,s,i,r,o){const n=dn.get(t);if(!n){oo++;return}const a=l=>{l&&l.trigger()};if(Dl(),e==="clear")n.forEach(a);else{const l=ft(t),d=l&&Pl(s);if(l&&s==="length"){const h=Number(i);n.forEach((u,p)=>{(p==="length"||p===no||!ti(p)&&p>=h)&&a(u)})}else switch((s!==void 0||n.has(void 0))&&a(n.get(s)),d&&a(n.get(no)),e){case"add":l?d&&a(n.get("length")):(a(n.get(Mi)),cr(t)&&a(n.get(ja)));break;case"delete":l||(a(n.get(Mi)),cr(t)&&a(n.get(ja)));break;case"set":cr(t)&&a(n.get(Mi));break}}zl()}function gy(t,e){const s=dn.get(t);return s&&s.get(e)}function Qi(t){const e=$t(t);return e===t?e:(Se(e,"iterate",no),ds(t)?e:e.map(Ee))}function Un(t){return Se(t=$t(t),"iterate",no),t}const by={__proto__:null,[Symbol.iterator](){return fa(this,Symbol.iterator,Ee)},concat(...t){return Qi(this).concat(...t.map(e=>ft(e)?Qi(e):e))},entries(){return fa(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return js(this,"every",t,e,void 0,arguments)},filter(t,e){return js(this,"filter",t,e,s=>s.map(Ee),arguments)},find(t,e){return js(this,"find",t,e,Ee,arguments)},findIndex(t,e){return js(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return js(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return js(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return js(this,"forEach",t,e,void 0,arguments)},includes(...t){return ma(this,"includes",t)},indexOf(...t){return ma(this,"indexOf",t)},join(t){return Qi(this).join(t)},lastIndexOf(...t){return ma(this,"lastIndexOf",t)},map(t,e){return js(this,"map",t,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...t){return Mr(this,"push",t)},reduce(t,...e){return Wc(this,"reduce",t,e)},reduceRight(t,...e){return Wc(this,"reduceRight",t,e)},shift(){return Mr(this,"shift")},some(t,e){return js(this,"some",t,e,void 0,arguments)},splice(...t){return Mr(this,"splice",t)},toReversed(){return Qi(this).toReversed()},toSorted(t){return Qi(this).toSorted(t)},toSpliced(...t){return Qi(this).toSpliced(...t)},unshift(...t){return Mr(this,"unshift",t)},values(){return fa(this,"values",Ee)}};function fa(t,e,s){const i=Un(t),r=i[e]();return i!==t&&!ds(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=s(o.value)),o}),r}const yy=Array.prototype;function js(t,e,s,i,r,o){const n=Un(t),a=n!==t&&!ds(t),l=n[e];if(l!==yy[e]){const u=l.apply(t,o);return a?Ee(u):u}let d=s;n!==t&&(a?d=function(u,p){return s.call(this,Ee(u),p,t)}:s.length>2&&(d=function(u,p){return s.call(this,u,p,t)}));const h=l.call(n,d,i);return a&&r?r(h):h}function Wc(t,e,s,i){const r=Un(t);let o=s;return r!==t&&(ds(t)?s.length>3&&(o=function(n,a,l){return s.call(this,n,a,l,t)}):o=function(n,a,l){return s.call(this,n,Ee(a),l,t)}),r[e](o,...i)}function ma(t,e,s){const i=$t(t);Se(i,"iterate",no);const r=i[e](...s);return(r===-1||r===!1)&&Hn(s[0])?(s[0]=$t(s[0]),i[e](...s)):r}function Mr(t,e,s=[]){_i(),Dl();const i=$t(t)[e].apply(t,s);return zl(),wi(),i}const vy=Ll("__proto__,__v_isRef,__isVue"),uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ti));function _y(t){ti(t)||(t=String(t));const e=$t(this);return Se(e,"has",t),e.hasOwnProperty(t)}class hh{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return o;if(s==="__v_raw")return i===(r?o?Iy:gh:o?mh:fh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const n=ft(e);if(!r){let l;if(n&&(l=by[s]))return l;if(s==="hasOwnProperty")return _y}const a=Reflect.get(e,s,Xt(e)?e:i);return(ti(s)?uh.has(s):vy(s))||(r||Se(e,"get",s),o)?a:Xt(a)?n&&Pl(s)?a:a.value:Kt(a)?r?bh(a):Eo(a):a}}class ph extends hh{constructor(e=!1){super(!1,e)}set(e,s,i,r){let o=e[s];if(!this._isShallow){const l=Ui(o);if(!ds(i)&&!Ui(i)&&(o=$t(o),i=$t(i)),!ft(e)&&Xt(o)&&!Xt(i))return l?!1:(o.value=i,!0)}const n=ft(e)&&Pl(s)?Number(s)<e.length:Lt(e,s),a=Reflect.set(e,s,i,Xt(e)?e:r);return e===$t(r)&&(n?hi(i,o)&&qs(e,"set",s,i):qs(e,"add",s,i)),a}deleteProperty(e,s){const i=Lt(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&i&&qs(e,"delete",s,void 0),r}has(e,s){const i=Reflect.has(e,s);return(!ti(s)||!uh.has(s))&&Se(e,"has",s),i}ownKeys(e){return Se(e,"iterate",ft(e)?"length":Mi),Reflect.ownKeys(e)}}class wy extends hh{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const xy=new ph,ky=new wy,Cy=new ph(!0);const Wa=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function Sy(t,e,s){return function(...i){const r=this.__v_raw,o=$t(r),n=cr(o),a=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,d=r[t](...i),h=s?Wa:e?Ka:Ee;return!e&&Se(o,"iterate",l?ja:Mi),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:a?[h(u[0]),h(u[1])]:h(u),done:p}},[Symbol.iterator](){return this}}}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ey(t,e){const s={get(r){const o=this.__v_raw,n=$t(o),a=$t(r);t||(hi(r,a)&&Se(n,"get",r),Se(n,"get",a));const{has:l}=Vo(n),d=e?Wa:t?Ka:Ee;if(l.call(n,r))return d(o.get(r));if(l.call(n,a))return d(o.get(a));o!==n&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Se($t(r),"iterate",Mi),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,n=$t(o),a=$t(r);return t||(hi(r,a)&&Se(n,"has",r),Se(n,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const n=this,a=n.__v_raw,l=$t(a),d=e?Wa:t?Ka:Ee;return!t&&Se(l,"iterate",Mi),a.forEach((h,u)=>r.call(o,d(h),d(u),n))}};return Te(s,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(r){!e&&!ds(r)&&!Ui(r)&&(r=$t(r));const o=$t(this);return Vo(o).has.call(o,r)||(o.add(r),qs(o,"add",r,r)),this},set(r,o){!e&&!ds(o)&&!Ui(o)&&(o=$t(o));const n=$t(this),{has:a,get:l}=Vo(n);let d=a.call(n,r);d||(r=$t(r),d=a.call(n,r));const h=l.call(n,r);return n.set(r,o),d?hi(o,h)&&qs(n,"set",r,o):qs(n,"add",r,o),this},delete(r){const o=$t(this),{has:n,get:a}=Vo(o);let l=n.call(o,r);l||(r=$t(r),l=n.call(o,r)),a&&a.call(o,r);const d=o.delete(r);return l&&qs(o,"delete",r,void 0),d},clear(){const r=$t(this),o=r.size!==0,n=r.clear();return o&&qs(r,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Sy(r,t,e)}),s}function Fl(t,e){const s=Ey(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Lt(s,r)&&r in i?s:i,r,o)}const $y={get:Fl(!1,!1)},Ay={get:Fl(!1,!0)},Ty={get:Fl(!0,!1)};const fh=new WeakMap,mh=new WeakMap,gh=new WeakMap,Iy=new WeakMap;function Ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ly(sy(t))}function Eo(t){return Ui(t)?t:Bl(t,!1,xy,$y,fh)}function Ry(t){return Bl(t,!1,Cy,Ay,mh)}function bh(t){return Bl(t,!0,ky,Ty,gh)}function Bl(t,e,s,i,r){if(!Kt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const n=Oy(t);if(n===0)return t;const a=new Proxy(t,n===2?i:s);return r.set(t,a),a}function Js(t){return Ui(t)?Js(t.__v_raw):!!(t&&t.__v_isReactive)}function Ui(t){return!!(t&&t.__v_isReadonly)}function ds(t){return!!(t&&t.__v_isShallow)}function Hn(t){return t?!!t.__v_raw:!1}function $t(t){const e=t&&t.__v_raw;return e?$t(e):t}function Ul(t){return!Lt(t,"__v_skip")&&Object.isExtensible(t)&&Ju(t,"__v_skip",!0),t}const Ee=t=>Kt(t)?Eo(t):t,Ka=t=>Kt(t)?bh(t):t;function Xt(t){return t?t.__v_isRef===!0:!1}function Ht(t){return yh(t,!1)}function Py(t){return yh(t,!0)}function yh(t,e){return Xt(t)?t:new My(t,e)}class My{constructor(e,s){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:$t(e),this._value=s?e:Ee(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||ds(e)||Ui(e);e=i?e:$t(e),hi(e,s)&&(this._rawValue=e,this._value=i?e:Ee(e),this.dep.trigger())}}function q(t){return Xt(t)?t.value:t}const Dy={get:(t,e,s)=>e==="__v_raw"?t:q(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const r=t[e];return Xt(r)&&!Xt(s)?(r.value=s,!0):Reflect.set(t,e,s,i)}};function vh(t){return Js(t)?t:new Proxy(t,Dy)}function _h(t){const e=ft(t)?new Array(t.length):{};for(const s in t)e[s]=Vy(t,s);return e}class zy{constructor(e,s,i){this._object=e,this._key=s,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gy($t(this._object),this._key)}}function Vy(t,e,s){const i=t[e];return Xt(i)?i:new zy(t,e,s)}class Ny{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Vt!==this)return oh(this,!0),!0}get value(){const e=this.dep.track();return lh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fy(t,e,s=!1){let i,r;return bt(t)?i=t:(i=t.get,r=t.set),new Ny(i,r,s)}const Fo={},un=new WeakMap;let Ii;function By(t,e=!1,s=Ii){if(s){let i=un.get(s);i||un.set(s,i=[]),i.push(t)}}function Uy(t,e,s=Ft){const{immediate:i,deep:r,once:o,scheduler:n,augmentJob:a,call:l}=s,d=g=>r?g:ds(g)||r===!1||r===0?di(g,1):di(g);let h,u,p,m,v=!1,k=!1;if(Xt(t)?(u=()=>t.value,v=ds(t)):Js(t)?(u=()=>d(t),v=!0):ft(t)?(k=!0,v=t.some(g=>Js(g)||ds(g)),u=()=>t.map(g=>{if(Xt(g))return g.value;if(Js(g))return d(g);if(bt(g))return l?l(g,2):g()})):bt(t)?e?u=l?()=>l(t,2):t:u=()=>{if(p){_i();try{p()}finally{wi()}}const g=Ii;Ii=h;try{return l?l(t,3,[m]):t(m)}finally{Ii=g}}:u=Ms,e&&r){const g=u,C=r===!0?1/0:r;u=()=>di(g(),C)}const I=sh(),_=()=>{h.stop(),I&&I.active&&Rl(I.effects,h)};if(o&&e){const g=e;e=(...C)=>{g(...C),_()}}let w=k?new Array(t.length).fill(Fo):Fo;const E=g=>{if(!(!(h.flags&1)||!h.dirty&&!g))if(e){const C=h.run();if(r||v||(k?C.some((R,T)=>hi(R,w[T])):hi(C,w))){p&&p();const R=Ii;Ii=h;try{const T=[C,w===Fo?void 0:k&&w[0]===Fo?[]:w,m];l?l(e,3,T):e(...T),w=C}finally{Ii=R}}}else h.run()};return a&&a(E),h=new ih(u),h.scheduler=n?()=>n(E,!1):E,m=g=>By(g,!1,h),p=h.onStop=()=>{const g=un.get(h);if(g){if(l)l(g,4);else for(const C of g)C();un.delete(h)}},e?i?E(!0):w=h.run():n?n(E.bind(null,!0),!0):h.run(),_.pause=h.pause.bind(h),_.resume=h.resume.bind(h),_.stop=_,_}function di(t,e=1/0,s){if(e<=0||!Kt(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,Xt(t))di(t.value,e,s);else if(ft(t))for(let i=0;i<t.length;i++)di(t[i],e,s);else if(Ku(t)||cr(t))t.forEach(i=>{di(i,e,s)});else if(Yu(t)){for(const i in t)di(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&di(t[i],e,s)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(t,e,s,i){try{return i?t(...i):t()}catch(r){jn(r,e,s)}}function zs(t,e,s,i){if(bt(t)){const r=$o(t,e,s,i);return r&&qu(r)&&r.catch(o=>{jn(o,e,s)}),r}if(ft(t)){const r=[];for(let o=0;o<t.length;o++)r.push(zs(t[o],e,s,i));return r}}function jn(t,e,s,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](t,l,d)===!1)return}a=a.parent}if(o){_i(),$o(o,null,10,[t,l,d]),wi();return}}Hy(t,s,r,i,n)}function Hy(t,e,s,i=!0,r=!1){if(r)throw t;console.error(t)}const ze=[];let Is=-1;const dr=[];let ai=null,ir=0;const wh=Promise.resolve();let hn=null;function xh(t){const e=hn||wh;return t?e.then(this?t.bind(this):t):e}function jy(t){let e=Is+1,s=ze.length;for(;e<s;){const i=e+s>>>1,r=ze[i],o=ao(r);o<t||o===t&&r.flags&2?e=i+1:s=i}return e}function Hl(t){if(!(t.flags&1)){const e=ao(t),s=ze[ze.length-1];!s||!(t.flags&2)&&e>=ao(s)?ze.push(t):ze.splice(jy(e),0,t),t.flags|=1,kh()}}function kh(){hn||(hn=wh.then(Sh))}function Wy(t){ft(t)?dr.push(...t):ai&&t.id===-1?ai.splice(ir+1,0,t):t.flags&1||(dr.push(t),t.flags|=1),kh()}function Kc(t,e,s=Is+1){for(;s<ze.length;s++){const i=ze[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;ze.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ch(t){if(dr.length){const e=[...new Set(dr)].sort((s,i)=>ao(s)-ao(i));if(dr.length=0,ai){ai.push(...e);return}for(ai=e,ir=0;ir<ai.length;ir++){const s=ai[ir];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ai=null,ir=0}}const ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sh(t){try{for(Is=0;Is<ze.length;Is++){const e=ze[Is];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Is<ze.length;Is++){const e=ze[Is];e&&(e.flags&=-2)}Is=-1,ze.length=0,Ch(),hn=null,(ze.length||dr.length)&&Sh()}}let Ae=null,Eh=null;function pn(t){const e=Ae;return Ae=t,Eh=t&&t.type.__scopeId||null,e}function $h(t,e=Ae,s){if(!e||t._n)return t;const i=(...r)=>{i._d&&gn(-1);const o=pn(e);let n;try{n=t(...r)}finally{pn(o),i._d&&gn(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function $i(t,e,s,i){const r=t.dirs,o=e&&e.dirs;for(let n=0;n<r.length;n++){const a=r[n];o&&(a.oldValue=o[n].value);let l=a.dir[i];l&&(_i(),zs(l,s,8,[t.el,a,t,e]),wi())}}const Ky=Symbol("_vte"),qy=t=>t.__isTeleport;function jl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function We(t,e){return bt(t)?Te({name:t.name},e,{setup:t}):t}function Ah(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fn(t,e,s,i,r=!1){if(ft(t)){t.forEach((v,k)=>fn(v,e&&(ft(e)?e[k]:e),s,i,r));return}if(ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fn(t,e,s,i.component.subTree);return}const o=i.shapeFlag&4?Xl(i.component):i.el,n=r?null:o,{i:a,r:l}=t,d=e&&e.r,h=a.refs===Ft?a.refs={}:a.refs,u=a.setupState,p=$t(u),m=u===Ft?()=>!1:v=>Lt(p,v);if(d!=null&&d!==l&&(re(d)?(h[d]=null,m(d)&&(u[d]=null)):Xt(d)&&(d.value=null)),bt(l))$o(l,a,12,[n,h]);else{const v=re(l),k=Xt(l);if(v||k){const I=()=>{if(t.f){const _=v?m(l)?u[l]:h[l]:l.value;r?ft(_)&&Rl(_,o):ft(_)?_.includes(o)||_.push(o):v?(h[l]=[o],m(l)&&(u[l]=h[l])):(l.value=[o],t.k&&(h[t.k]=l.value))}else v?(h[l]=n,m(l)&&(u[l]=n)):k&&(l.value=n,t.k&&(h[t.k]=n))};n?(I.id=-1,Xe(I,s)):I()}}}Fn().requestIdleCallback;Fn().cancelIdleCallback;const ur=t=>!!t.type.__asyncLoader,Th=t=>t.type.__isKeepAlive;function Gy(t,e){Ih(t,"a",e)}function Yy(t,e){Ih(t,"da",e)}function Ih(t,e,s=ye){const i=t.__wdc||(t.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wn(e,i,s),s){let r=s.parent;for(;r&&r.parent;)Th(r.parent.vnode)&&Xy(i,e,s,r),r=r.parent}}function Xy(t,e,s,i){const r=Wn(e,t,i,!0);Kl(()=>{Rl(i[e],r)},s)}function Wn(t,e,s=ye,i=!1){if(s){const r=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...n)=>{_i();const a=To(s),l=zs(e,s,t,n);return a(),wi(),l});return i?r.unshift(o):r.push(o),o}}const ei=t=>(e,s=ye)=>{(!uo||t==="sp")&&Wn(t,(...i)=>e(...i),s)},Jy=ei("bm"),Wl=ei("m"),Qy=ei("bu"),Zy=ei("u"),tv=ei("bum"),Kl=ei("um"),ev=ei("sp"),sv=ei("rtg"),iv=ei("rtc");function rv(t,e=ye){Wn("ec",t,e)}const ov=Symbol.for("v-ndc");function Lh(t,e,s,i){let r;const o=s,n=ft(t);if(n||re(t)){const a=n&&Js(t);let l=!1;a&&(l=!ds(t),t=Un(t)),r=new Array(t.length);for(let d=0,h=t.length;d<h;d++)r[d]=e(l?Ee(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o)}else if(Kt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];r[l]=e(t[h],h,l,o)}}else r=[];return r}function nv(t,e,s={},i,r){if(Ae.ce||Ae.parent&&ur(Ae.parent)&&Ae.parent.ce)return mt(),Rs($e,null,[Ut("slot",s,i)],64);let o=t[e];o&&o._c&&(o._d=!1),mt();const n=o&&Oh(o(s)),a=s.key||n&&n.key,l=Rs($e,{key:(a&&!ti(a)?a:`_${e}`)+""},n||[],n&&t._===1?64:-2);return o&&o._c&&(o._d=!0),l}function Oh(t){return t.some(e=>co(e)?!(e.type===bi||e.type===$e&&!Oh(e.children)):!0)?t:null}const qa=t=>t?tp(t)?Xl(t):qa(t.parent):null,Jr=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ph(t),$forceUpdate:t=>t.f||(t.f=()=>{Hl(t.update)}),$nextTick:t=>t.n||(t.n=xh.bind(t.proxy)),$watch:t=>Tv.bind(t)}),ga=(t,e)=>t!==Ft&&!t.__isScriptSetup&&Lt(t,e),av={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:o,accessCache:n,type:a,appContext:l}=t;let d;if(e[0]!=="$"){const m=n[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return s[e];case 3:return o[e]}else{if(ga(i,e))return n[e]=1,i[e];if(r!==Ft&&Lt(r,e))return n[e]=2,r[e];if((d=t.propsOptions[0])&&Lt(d,e))return n[e]=3,o[e];if(s!==Ft&&Lt(s,e))return n[e]=4,s[e];Ga&&(n[e]=0)}}const h=Jr[e];let u,p;if(h)return e==="$attrs"&&Se(t.attrs,"get",""),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(s!==Ft&&Lt(s,e))return n[e]=4,s[e];if(p=l.config.globalProperties,Lt(p,e))return p[e]},set({_:t},e,s){const{data:i,setupState:r,ctx:o}=t;return ga(r,e)?(r[e]=s,!0):i!==Ft&&Lt(i,e)?(i[e]=s,!0):Lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:r,propsOptions:o}},n){let a;return!!s[n]||t!==Ft&&Lt(t,n)||ga(e,n)||(a=o[0])&&Lt(a,n)||Lt(i,n)||Lt(Jr,n)||Lt(r.config.globalProperties,n)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:Lt(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function qc(t){return ft(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Ga=!0;function lv(t){const e=Ph(t),s=t.proxy,i=t.ctx;Ga=!1,e.beforeCreate&&Gc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:n,watch:a,provide:l,inject:d,created:h,beforeMount:u,mounted:p,beforeUpdate:m,updated:v,activated:k,deactivated:I,beforeDestroy:_,beforeUnmount:w,destroyed:E,unmounted:g,render:C,renderTracked:R,renderTriggered:T,errorCaptured:B,serverPrefetch:D,expose:z,inheritAttrs:lt,components:it,directives:pt,filters:_t}=e;if(d&&cv(d,i,null),n)for(const J in n){const dt=n[J];bt(dt)&&(i[J]=dt.bind(s))}if(r){const J=r.call(s,s);Kt(J)&&(t.data=Eo(J))}if(Ga=!0,o)for(const J in o){const dt=o[J],Q=bt(dt)?dt.bind(s,s):bt(dt.get)?dt.get.bind(s,s):Ms,Ct=!bt(dt)&&bt(dt.set)?dt.set.bind(s):Ms,Ue=Nt({get:Q,set:Ct});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:se=>Ue.value=se})}if(a)for(const J in a)Rh(a[J],i,s,J);if(l){const J=bt(l)?l.call(s):l;Reflect.ownKeys(J).forEach(dt=>{mv(dt,J[dt])})}h&&Gc(h,t,"c");function X(J,dt){ft(dt)?dt.forEach(Q=>J(Q.bind(s))):dt&&J(dt.bind(s))}if(X(Jy,u),X(Wl,p),X(Qy,m),X(Zy,v),X(Gy,k),X(Yy,I),X(rv,B),X(iv,R),X(sv,T),X(tv,w),X(Kl,g),X(ev,D),ft(z))if(z.length){const J=t.exposed||(t.exposed={});z.forEach(dt=>{Object.defineProperty(J,dt,{get:()=>s[dt],set:Q=>s[dt]=Q})})}else t.exposed||(t.exposed={});C&&t.render===Ms&&(t.render=C),lt!=null&&(t.inheritAttrs=lt),it&&(t.components=it),pt&&(t.directives=pt),D&&Ah(t)}function cv(t,e,s=Ms){ft(t)&&(t=Ya(t));for(const i in t){const r=t[i];let o;Kt(r)?"default"in r?o=he(r.from||i,r.default,!0):o=he(r.from||i):o=he(r),Xt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):e[i]=o}}function Gc(t,e,s){zs(ft(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function Rh(t,e,s,i){let r=i.includes(".")?Gh(s,i):()=>s[i];if(re(t)){const o=e[t];bt(o)&&zi(r,o)}else if(bt(t))zi(r,t.bind(s));else if(Kt(t))if(ft(t))t.forEach(o=>Rh(o,e,s,i));else{const o=bt(t.handler)?t.handler.bind(s):e[t.handler];bt(o)&&zi(r,o,t)}}function Ph(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:n}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!s&&!i?l=e:(l={},r.length&&r.forEach(d=>mn(l,d,n,!0)),mn(l,e,n)),Kt(e)&&o.set(e,l),l}function mn(t,e,s,i=!1){const{mixins:r,extends:o}=e;o&&mn(t,o,s,!0),r&&r.forEach(n=>mn(t,n,s,!0));for(const n in e)if(!(i&&n==="expose")){const a=dv[n]||s&&s[n];t[n]=a?a(t[n],e[n]):e[n]}return t}const dv={data:Yc,props:Xc,emits:Xc,methods:Nr,computed:Nr,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Nr,directives:Nr,watch:hv,provide:Yc,inject:uv};function Yc(t,e){return e?t?function(){return Te(bt(t)?t.call(this,this):t,bt(e)?e.call(this,this):e)}:e:t}function uv(t,e){return Nr(Ya(t),Ya(e))}function Ya(t){if(ft(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Te(Object.create(null),t,e):e}function Xc(t,e){return t?ft(t)&&ft(e)?[...new Set([...t,...e])]:Te(Object.create(null),qc(t),qc(e??{})):e}function hv(t,e){if(!t)return e;if(!e)return t;const s=Te(Object.create(null),t);for(const i in e)s[i]=Pe(t[i],e[i]);return s}function Mh(){return{app:null,config:{isNativeTag:ty,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function fv(t,e){return function(i,r=null){bt(i)||(i=Te({},i)),r!=null&&!Kt(r)&&(r=null);const o=Mh(),n=new WeakSet,a=[];let l=!1;const d=o.app={_uid:pv++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:Gv,get config(){return o.config},set config(h){},use(h,...u){return n.has(h)||(h&&bt(h.install)?(n.add(h),h.install(d,...u)):bt(h)&&(n.add(h),h(d,...u))),d},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),d},component(h,u){return u?(o.components[h]=u,d):o.components[h]},directive(h,u){return u?(o.directives[h]=u,d):o.directives[h]},mount(h,u,p){if(!l){const m=d._ceVNode||Ut(i,r);return m.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),t(m,h,p),l=!0,d._container=h,h.__vue_app__=d,Xl(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(zs(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,u){return o.provides[h]=u,d},runWithContext(h){const u=Di;Di=d;try{return h()}finally{Di=u}}};return d}}let Di=null;function mv(t,e){if(ye){let s=ye.provides;const i=ye.parent&&ye.parent.provides;i===s&&(s=ye.provides=Object.create(i)),s[t]=e}}function he(t,e,s=!1){const i=ye||Ae;if(i||Di){const r=Di?Di._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return s&&bt(e)?e.call(i&&i.proxy):e}}function gv(){return!!(ye||Ae||Di)}const Dh={},zh=()=>Object.create(Dh),Vh=t=>Object.getPrototypeOf(t)===Dh;function bv(t,e,s,i=!1){const r={},o=zh();t.propsDefaults=Object.create(null),Nh(t,e,r,o);for(const n in t.propsOptions[0])n in r||(r[n]=void 0);s?t.props=i?r:Ry(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function yv(t,e,s,i){const{props:r,attrs:o,vnode:{patchFlag:n}}=t,a=$t(r),[l]=t.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let p=h[u];if(Kn(t.emitsOptions,p))continue;const m=e[p];if(l)if(Lt(o,p))m!==o[p]&&(o[p]=m,d=!0);else{const v=gi(p);r[v]=Xa(l,a,v,m,t,!1)}else m!==o[p]&&(o[p]=m,d=!0)}}}else{Nh(t,e,r,o)&&(d=!0);let h;for(const u in a)(!e||!Lt(e,u)&&((h=Yi(u))===u||!Lt(e,h)))&&(l?s&&(s[u]!==void 0||s[h]!==void 0)&&(r[u]=Xa(l,a,u,void 0,t,!0)):delete r[u]);if(o!==a)for(const u in o)(!e||!Lt(e,u))&&(delete o[u],d=!0)}d&&qs(t.attrs,"set","")}function Nh(t,e,s,i){const[r,o]=t.propsOptions;let n=!1,a;if(e)for(let l in e){if(Gr(l))continue;const d=e[l];let h;r&&Lt(r,h=gi(l))?!o||!o.includes(h)?s[h]=d:(a||(a={}))[h]=d:Kn(t.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(o){const l=$t(s),d=a||Ft;for(let h=0;h<o.length;h++){const u=o[h];s[u]=Xa(r,l,u,d[u],t,!Lt(d,u))}}return n}function Xa(t,e,s,i,r,o){const n=t[s];if(n!=null){const a=Lt(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&bt(l)){const{propsDefaults:d}=r;if(s in d)i=d[s];else{const h=To(r);i=d[s]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(s,i)}n[0]&&(o&&!a?i=!1:n[1]&&(i===""||i===Yi(s))&&(i=!0))}return i}const vv=new WeakMap;function Fh(t,e,s=!1){const i=s?vv:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,n={},a=[];let l=!1;if(!bt(t)){const h=u=>{l=!0;const[p,m]=Fh(u,e,!0);Te(n,p),m&&a.push(...m)};!s&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!o&&!l)return Kt(t)&&i.set(t,lr),lr;if(ft(o))for(let h=0;h<o.length;h++){const u=gi(o[h]);Jc(u)&&(n[u]=Ft)}else if(o)for(const h in o){const u=gi(h);if(Jc(u)){const p=o[h],m=n[u]=ft(p)||bt(p)?{type:p}:Te({},p),v=m.type;let k=!1,I=!0;if(ft(v))for(let _=0;_<v.length;++_){const w=v[_],E=bt(w)&&w.name;if(E==="Boolean"){k=!0;break}else E==="String"&&(I=!1)}else k=bt(v)&&v.name==="Boolean";m[0]=k,m[1]=I,(k||Lt(m,"default"))&&a.push(u)}}const d=[n,a];return Kt(t)&&i.set(t,d),d}function Jc(t){return t[0]!=="$"&&!Gr(t)}const Bh=t=>t[0]==="_"||t==="$stable",ql=t=>ft(t)?t.map(Os):[Os(t)],_v=(t,e,s)=>{if(e._n)return e;const i=$h((...r)=>ql(e(...r)),s);return i._c=!1,i},Uh=(t,e,s)=>{const i=t._ctx;for(const r in t){if(Bh(r))continue;const o=t[r];if(bt(o))e[r]=_v(r,o,i);else if(o!=null){const n=ql(o);e[r]=()=>n}}},Hh=(t,e)=>{const s=ql(e);t.slots.default=()=>s},jh=(t,e,s)=>{for(const i in e)(s||i!=="_")&&(t[i]=e[i])},wv=(t,e,s)=>{const i=t.slots=zh();if(t.vnode.shapeFlag&32){const r=e._;r?(jh(i,e,s),s&&Ju(i,"_",r,!0)):Uh(e,i)}else e&&Hh(t,e)},xv=(t,e,s)=>{const{vnode:i,slots:r}=t;let o=!0,n=Ft;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:jh(r,e,s):(o=!e.$stable,Uh(e,r)),n=e}else e&&(Hh(t,e),n={default:1});if(o)for(const a in r)!Bh(a)&&n[a]==null&&delete r[a]},Xe=Dv;function kv(t){return Cv(t)}function Cv(t,e){const s=Fn();s.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:n,createText:a,createComment:l,setText:d,setElementText:h,parentNode:u,nextSibling:p,setScopeId:m=Ms,insertStaticContent:v}=t,k=(x,S,P,U=null,N=null,H=null,b=void 0,y=null,A=!!S.dynamicChildren)=>{if(x===S)return;x&&!Dr(x,S)&&(U=$s(x),se(x,N,H,!0),x=null),S.patchFlag===-2&&(A=!1,S.dynamicChildren=null);const{type:O,ref:Y,shapeFlag:V}=S;switch(O){case Ao:I(x,S,P,U);break;case bi:_(x,S,P,U);break;case ya:x==null&&w(S,P,U,b);break;case $e:it(x,S,P,U,N,H,b,y,A);break;default:V&1?C(x,S,P,U,N,H,b,y,A):V&6?pt(x,S,P,U,N,H,b,y,A):(V&64||V&128)&&O.process(x,S,P,U,N,H,b,y,A,fs)}Y!=null&&N&&fn(Y,x&&x.ref,H,S||x,!S)},I=(x,S,P,U)=>{if(x==null)i(S.el=a(S.children),P,U);else{const N=S.el=x.el;S.children!==x.children&&d(N,S.children)}},_=(x,S,P,U)=>{x==null?i(S.el=l(S.children||""),P,U):S.el=x.el},w=(x,S,P,U)=>{[x.el,x.anchor]=v(x.children,S,P,U,x.el,x.anchor)},E=({el:x,anchor:S},P,U)=>{let N;for(;x&&x!==S;)N=p(x),i(x,P,U),x=N;i(S,P,U)},g=({el:x,anchor:S})=>{let P;for(;x&&x!==S;)P=p(x),r(x),x=P;r(S)},C=(x,S,P,U,N,H,b,y,A)=>{S.type==="svg"?b="svg":S.type==="math"&&(b="mathml"),x==null?R(S,P,U,N,H,b,y,A):D(x,S,N,H,b,y,A)},R=(x,S,P,U,N,H,b,y)=>{let A,O;const{props:Y,shapeFlag:V,transition:$,dirs:M}=x;if(A=x.el=n(x.type,H,Y&&Y.is,Y),V&8?h(A,x.children):V&16&&B(x.children,A,null,U,N,ba(x,H),b,y),M&&$i(x,null,U,"created"),T(A,x,x.scopeId,b,U),Y){for(const ct in Y)ct!=="value"&&!Gr(ct)&&o(A,ct,null,Y[ct],H,U);"value"in Y&&o(A,"value",null,Y.value,H),(O=Y.onVnodeBeforeMount)&&As(O,U,x)}M&&$i(x,null,U,"beforeMount");const Z=Sv(N,$);Z&&$.beforeEnter(A),i(A,S,P),((O=Y&&Y.onVnodeMounted)||Z||M)&&Xe(()=>{O&&As(O,U,x),Z&&$.enter(A),M&&$i(x,null,U,"mounted")},N)},T=(x,S,P,U,N)=>{if(P&&m(x,P),U)for(let H=0;H<U.length;H++)m(x,U[H]);if(N){let H=N.subTree;if(S===H||Xh(H.type)&&(H.ssContent===S||H.ssFallback===S)){const b=N.vnode;T(x,b,b.scopeId,b.slotScopeIds,N.parent)}}},B=(x,S,P,U,N,H,b,y,A=0)=>{for(let O=A;O<x.length;O++){const Y=x[O]=y?li(x[O]):Os(x[O]);k(null,Y,S,P,U,N,H,b,y)}},D=(x,S,P,U,N,H,b)=>{const y=S.el=x.el;let{patchFlag:A,dynamicChildren:O,dirs:Y}=S;A|=x.patchFlag&16;const V=x.props||Ft,$=S.props||Ft;let M;if(P&&Ai(P,!1),(M=$.onVnodeBeforeUpdate)&&As(M,P,S,x),Y&&$i(S,x,P,"beforeUpdate"),P&&Ai(P,!0),(V.innerHTML&&$.innerHTML==null||V.textContent&&$.textContent==null)&&h(y,""),O?z(x.dynamicChildren,O,y,P,U,ba(S,N),H):b||dt(x,S,y,null,P,U,ba(S,N),H,!1),A>0){if(A&16)lt(y,V,$,P,N);else if(A&2&&V.class!==$.class&&o(y,"class",null,$.class,N),A&4&&o(y,"style",V.style,$.style,N),A&8){const Z=S.dynamicProps;for(let ct=0;ct<Z.length;ct++){const vt=Z[ct],ie=V[vt],qt=$[vt];(qt!==ie||vt==="value")&&o(y,vt,ie,qt,N,P)}}A&1&&x.children!==S.children&&h(y,S.children)}else!b&&O==null&&lt(y,V,$,P,N);((M=$.onVnodeUpdated)||Y)&&Xe(()=>{M&&As(M,P,S,x),Y&&$i(S,x,P,"updated")},U)},z=(x,S,P,U,N,H,b)=>{for(let y=0;y<S.length;y++){const A=x[y],O=S[y],Y=A.el&&(A.type===$e||!Dr(A,O)||A.shapeFlag&70)?u(A.el):P;k(A,O,Y,null,U,N,H,b,!0)}},lt=(x,S,P,U,N)=>{if(S!==P){if(S!==Ft)for(const H in S)!Gr(H)&&!(H in P)&&o(x,H,S[H],null,N,U);for(const H in P){if(Gr(H))continue;const b=P[H],y=S[H];b!==y&&H!=="value"&&o(x,H,y,b,N,U)}"value"in P&&o(x,"value",S.value,P.value,N)}},it=(x,S,P,U,N,H,b,y,A)=>{const O=S.el=x?x.el:a(""),Y=S.anchor=x?x.anchor:a("");let{patchFlag:V,dynamicChildren:$,slotScopeIds:M}=S;M&&(y=y?y.concat(M):M),x==null?(i(O,P,U),i(Y,P,U),B(S.children||[],P,Y,N,H,b,y,A)):V>0&&V&64&&$&&x.dynamicChildren?(z(x.dynamicChildren,$,P,N,H,b,y),(S.key!=null||N&&S===N.subTree)&&Wh(x,S,!0)):dt(x,S,P,Y,N,H,b,y,A)},pt=(x,S,P,U,N,H,b,y,A)=>{S.slotScopeIds=y,x==null?S.shapeFlag&512?N.ctx.activate(S,P,U,b,A):_t(S,P,U,N,H,b,A):kt(x,S,A)},_t=(x,S,P,U,N,H,b)=>{const y=x.component=Uv(x,U,N);if(Th(x)&&(y.ctx.renderer=fs),Hv(y,!1,b),y.asyncDep){if(N&&N.registerDep(y,X,b),!x.el){const A=y.subTree=Ut(bi);_(null,A,S,P)}}else X(y,x,S,P,N,H,b)},kt=(x,S,P)=>{const U=S.component=x.component;if(Pv(x,S,P))if(U.asyncDep&&!U.asyncResolved){J(U,S,P);return}else U.next=S,U.update();else S.el=x.el,U.vnode=S},X=(x,S,P,U,N,H,b)=>{const y=()=>{if(x.isMounted){let{next:V,bu:$,u:M,parent:Z,vnode:ct}=x;{const qe=Kh(x);if(qe){V&&(V.el=ct.el,J(x,V,b)),qe.asyncDep.then(()=>{x.isUnmounted||y()});return}}let vt=V,ie;Ai(x,!1),V?(V.el=ct.el,J(x,V,b)):V=ct,$&&ua($),(ie=V.props&&V.props.onVnodeBeforeUpdate)&&As(ie,Z,V,ct),Ai(x,!0);const qt=Zc(x),Oe=x.subTree;x.subTree=qt,k(Oe,qt,u(Oe.el),$s(Oe),x,N,H),V.el=qt.el,vt===null&&Mv(x,qt.el),M&&Xe(M,N),(ie=V.props&&V.props.onVnodeUpdated)&&Xe(()=>As(ie,Z,V,ct),N)}else{let V;const{el:$,props:M}=S,{bm:Z,m:ct,parent:vt,root:ie,type:qt}=x,Oe=ur(S);Ai(x,!1),Z&&ua(Z),!Oe&&(V=M&&M.onVnodeBeforeMount)&&As(V,vt,S),Ai(x,!0);{ie.ce&&ie.ce._injectChildStyle(qt);const qe=x.subTree=Zc(x);k(null,qe,P,U,x,N,H),S.el=qe.el}if(ct&&Xe(ct,N),!Oe&&(V=M&&M.onVnodeMounted)){const qe=S;Xe(()=>As(V,vt,qe),N)}(S.shapeFlag&256||vt&&ur(vt.vnode)&&vt.vnode.shapeFlag&256)&&x.a&&Xe(x.a,N),x.isMounted=!0,S=P=U=null}};x.scope.on();const A=x.effect=new ih(y);x.scope.off();const O=x.update=A.run.bind(A),Y=x.job=A.runIfDirty.bind(A);Y.i=x,Y.id=x.uid,A.scheduler=()=>Hl(Y),Ai(x,!0),O()},J=(x,S,P)=>{S.component=x;const U=x.vnode.props;x.vnode=S,x.next=null,yv(x,S.props,U,P),xv(x,S.children,P),_i(),Kc(x),wi()},dt=(x,S,P,U,N,H,b,y,A=!1)=>{const O=x&&x.children,Y=x?x.shapeFlag:0,V=S.children,{patchFlag:$,shapeFlag:M}=S;if($>0){if($&128){Ct(O,V,P,U,N,H,b,y,A);return}else if($&256){Q(O,V,P,U,N,H,b,y,A);return}}M&8?(Y&16&&ps(O,N,H),V!==O&&h(P,V)):Y&16?M&16?Ct(O,V,P,U,N,H,b,y,A):ps(O,N,H,!0):(Y&8&&h(P,""),M&16&&B(V,P,U,N,H,b,y,A))},Q=(x,S,P,U,N,H,b,y,A)=>{x=x||lr,S=S||lr;const O=x.length,Y=S.length,V=Math.min(O,Y);let $;for($=0;$<V;$++){const M=S[$]=A?li(S[$]):Os(S[$]);k(x[$],M,P,null,N,H,b,y,A)}O>Y?ps(x,N,H,!0,!1,V):B(S,P,U,N,H,b,y,A,V)},Ct=(x,S,P,U,N,H,b,y,A)=>{let O=0;const Y=S.length;let V=x.length-1,$=Y-1;for(;O<=V&&O<=$;){const M=x[O],Z=S[O]=A?li(S[O]):Os(S[O]);if(Dr(M,Z))k(M,Z,P,null,N,H,b,y,A);else break;O++}for(;O<=V&&O<=$;){const M=x[V],Z=S[$]=A?li(S[$]):Os(S[$]);if(Dr(M,Z))k(M,Z,P,null,N,H,b,y,A);else break;V--,$--}if(O>V){if(O<=$){const M=$+1,Z=M<Y?S[M].el:U;for(;O<=$;)k(null,S[O]=A?li(S[O]):Os(S[O]),P,Z,N,H,b,y,A),O++}}else if(O>$)for(;O<=V;)se(x[O],N,H,!0),O++;else{const M=O,Z=O,ct=new Map;for(O=Z;O<=$;O++){const Re=S[O]=A?li(S[O]):Os(S[O]);Re.key!=null&&ct.set(Re.key,O)}let vt,ie=0;const qt=$-Z+1;let Oe=!1,qe=0;const Hs=new Array(qt);for(O=0;O<qt;O++)Hs[O]=0;for(O=M;O<=V;O++){const Re=x[O];if(ie>=qt){se(Re,N,H,!0);continue}let L;if(Re.key!=null)L=ct.get(Re.key);else for(vt=Z;vt<=$;vt++)if(Hs[vt-Z]===0&&Dr(Re,S[vt])){L=vt;break}L===void 0?se(Re,N,H,!0):(Hs[L-Z]=O+1,L>=qe?qe=L:Oe=!0,k(Re,S[L],P,null,N,H,b,y,A),ie++)}const Io=Oe?Ev(Hs):lr;for(vt=Io.length-1,O=qt-1;O>=0;O--){const Re=Z+O,L=S[Re],j=Re+1<Y?S[Re+1].el:U;Hs[O]===0?k(null,L,P,j,N,H,b,y,A):Oe&&(vt<0||O!==Io[vt]?Ue(L,P,j,2):vt--)}}},Ue=(x,S,P,U,N=null)=>{const{el:H,type:b,transition:y,children:A,shapeFlag:O}=x;if(O&6){Ue(x.component.subTree,S,P,U);return}if(O&128){x.suspense.move(S,P,U);return}if(O&64){b.move(x,S,P,fs);return}if(b===$e){i(H,S,P);for(let V=0;V<A.length;V++)Ue(A[V],S,P,U);i(x.anchor,S,P);return}if(b===ya){E(x,S,P);return}if(U!==2&&O&1&&y)if(U===0)y.beforeEnter(H),i(H,S,P),Xe(()=>y.enter(H),N);else{const{leave:V,delayLeave:$,afterLeave:M}=y,Z=()=>i(H,S,P),ct=()=>{V(H,()=>{Z(),M&&M()})};$?$(H,Z,ct):ct()}else i(H,S,P)},se=(x,S,P,U=!1,N=!1)=>{const{type:H,props:b,ref:y,children:A,dynamicChildren:O,shapeFlag:Y,patchFlag:V,dirs:$,cacheIndex:M}=x;if(V===-2&&(N=!1),y!=null&&fn(y,null,P,x,!0),M!=null&&(S.renderCache[M]=void 0),Y&256){S.ctx.deactivate(x);return}const Z=Y&1&&$,ct=!ur(x);let vt;if(ct&&(vt=b&&b.onVnodeBeforeUnmount)&&As(vt,S,x),Y&6)Xi(x.component,P,U);else{if(Y&128){x.suspense.unmount(P,U);return}Z&&$i(x,null,S,"beforeUnmount"),Y&64?x.type.remove(x,S,P,fs,U):O&&!O.hasOnce&&(H!==$e||V>0&&V&64)?ps(O,S,P,!1,!0):(H===$e&&V&384||!N&&Y&16)&&ps(A,S,P),U&&si(x)}(ct&&(vt=b&&b.onVnodeUnmounted)||Z)&&Xe(()=>{vt&&As(vt,S,x),Z&&$i(x,null,S,"unmounted")},P)},si=x=>{const{type:S,el:P,anchor:U,transition:N}=x;if(S===$e){Si(P,U);return}if(S===ya){g(x);return}const H=()=>{r(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(x.shapeFlag&1&&N&&!N.persisted){const{leave:b,delayLeave:y}=N,A=()=>b(P,H);y?y(x.el,H,A):A()}else H()},Si=(x,S)=>{let P;for(;x!==S;)P=p(x),r(x),x=P;r(S)},Xi=(x,S,P)=>{const{bum:U,scope:N,job:H,subTree:b,um:y,m:A,a:O}=x;Qc(A),Qc(O),U&&ua(U),N.stop(),H&&(H.flags|=8,se(b,x,S,P)),y&&Xe(y,S),Xe(()=>{x.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},ps=(x,S,P,U=!1,N=!1,H=0)=>{for(let b=H;b<x.length;b++)se(x[b],S,P,U,N)},$s=x=>{if(x.shapeFlag&6)return $s(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const S=p(x.anchor||x.el),P=S&&S[Ky];return P?p(P):S};let Ce=!1;const ii=(x,S,P)=>{x==null?S._vnode&&se(S._vnode,null,null,!0):k(S._vnode||null,x,S,null,null,null,P),S._vnode=x,Ce||(Ce=!0,Kc(),Ch(),Ce=!1)},fs={p:k,um:se,m:Ue,r:si,mt:_t,mc:B,pc:dt,pbc:z,n:$s,o:t};return{render:ii,hydrate:void 0,createApp:fv(ii)}}function ba({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Ai({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Sv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wh(t,e,s=!1){const i=t.children,r=e.children;if(ft(i)&&ft(r))for(let o=0;o<i.length;o++){const n=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=li(r[o]),a.el=n.el),!s&&a.patchFlag!==-2&&Wh(n,a)),a.type===Ao&&(a.el=n.el)}}function Ev(t){const e=t.slice(),s=[0];let i,r,o,n,a;const l=t.length;for(i=0;i<l;i++){const d=t[i];if(d!==0){if(r=s[s.length-1],t[r]<d){e[i]=r,s.push(i);continue}for(o=0,n=s.length-1;o<n;)a=o+n>>1,t[s[a]]<d?o=a+1:n=a;d<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,n=s[o-1];o-- >0;)s[o]=n,n=e[n];return s}function Kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function Qc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $v=Symbol.for("v-scx"),Av=()=>he($v);function zi(t,e,s){return qh(t,e,s)}function qh(t,e,s=Ft){const{immediate:i,deep:r,flush:o,once:n}=s,a=Te({},s),l=e&&i||!e&&o!=="post";let d;if(uo){if(o==="sync"){const m=Av();d=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Ms,m.resume=Ms,m.pause=Ms,m}}const h=ye;a.call=(m,v,k)=>zs(m,h,v,k);let u=!1;o==="post"?a.scheduler=m=>{Xe(m,h&&h.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(m,v)=>{v?m():Hl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=Uy(t,e,a);return uo&&(d?d.push(p):l&&p()),p}function Tv(t,e,s){const i=this.proxy,r=re(t)?t.includes(".")?Gh(i,t):()=>i[t]:t.bind(i,i);let o;bt(e)?o=e:(o=e.handler,s=e);const n=To(this),a=qh(r,o.bind(i),s);return n(),a}function Gh(t,e){const s=e.split(".");return()=>{let i=t;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const Iv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gi(e)}Modifiers`]||t[`${Yi(e)}Modifiers`];function Lv(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||Ft;let r=s;const o=e.startsWith("update:"),n=o&&Iv(i,e.slice(7));n&&(n.trim&&(r=s.map(h=>re(h)?h.trim():h)),n.number&&(r=s.map(oy)));let a,l=i[a=da(e)]||i[a=da(gi(e))];!l&&o&&(l=i[a=da(Yi(e))]),l&&zs(l,t,6,r);const d=i[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zs(d,t,6,r)}}function Yh(t,e,s=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let n={},a=!1;if(!bt(t)){const l=d=>{const h=Yh(d,e,!0);h&&(a=!0,Te(n,h))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(Kt(t)&&i.set(t,null),null):(ft(o)?o.forEach(l=>n[l]=null):Te(n,o),Kt(t)&&i.set(t,n),n)}function Kn(t,e){return!t||!zn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Lt(t,e[0].toLowerCase()+e.slice(1))||Lt(t,Yi(e))||Lt(t,e))}function Zc(t){const{type:e,vnode:s,proxy:i,withProxy:r,propsOptions:[o],slots:n,attrs:a,emit:l,render:d,renderCache:h,props:u,data:p,setupState:m,ctx:v,inheritAttrs:k}=t,I=pn(t);let _,w;try{if(s.shapeFlag&4){const g=r||i,C=g;_=Os(d.call(C,g,h,u,m,p,v)),w=a}else{const g=e;_=Os(g.length>1?g(u,{attrs:a,slots:n,emit:l}):g(u,null)),w=e.props?a:Ov(a)}}catch(g){Qr.length=0,jn(g,t,1),_=Ut(bi)}let E=_;if(w&&k!==!1){const g=Object.keys(w),{shapeFlag:C}=E;g.length&&C&7&&(o&&g.some(Ol)&&(w=Rv(w,o)),E=gr(E,w,!1,!0))}return s.dirs&&(E=gr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&jl(E,s.transition),_=E,pn(I),_}const Ov=t=>{let e;for(const s in t)(s==="class"||s==="style"||zn(s))&&((e||(e={}))[s]=t[s]);return e},Rv=(t,e)=>{const s={};for(const i in t)(!Ol(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function Pv(t,e,s){const{props:i,children:r,component:o}=t,{props:n,children:a,patchFlag:l}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?td(i,n,d):!!n;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const p=h[u];if(n[p]!==i[p]&&!Kn(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?td(i,n,d):!0:!!n;return!1}function td(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!Kn(s,o))return!0}return!1}function Mv({vnode:t,parent:e},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=s,e=e.parent;else break}}const Xh=t=>t.__isSuspense;function Dv(t,e){e&&e.pendingBranch?ft(t)?e.effects.push(...t):e.effects.push(t):Wy(t)}const $e=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),bi=Symbol.for("v-cmt"),ya=Symbol.for("v-stc"),Qr=[];let ts=null;function mt(t=!1){Qr.push(ts=t?null:[])}function zv(){Qr.pop(),ts=Qr[Qr.length-1]||null}let lo=1;function gn(t,e=!1){lo+=t,t<0&&ts&&e&&(ts.hasOnce=!0)}function Jh(t){return t.dynamicChildren=lo>0?ts||lr:null,zv(),lo>0&&ts&&ts.push(t),t}function St(t,e,s,i,r,o){return Jh(W(t,e,s,i,r,o,!0))}function Rs(t,e,s,i,r){return Jh(Ut(t,e,s,i,r,!0))}function co(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const Qh=({key:t})=>t??null,Zo=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||Xt(t)||bt(t)?{i:Ae,r:t,k:e,f:!!s}:t:null);function W(t,e=null,s=null,i=0,r=null,o=t===$e?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qh(e),ref:e&&Zo(e),scopeId:Eh,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ae};return a?(Gl(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=re(s)?8:16),lo>0&&!n&&ts&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ts.push(l),l}const Ut=Vv;function Vv(t,e=null,s=null,i=0,r=null,o=!1){if((!t||t===ov)&&(t=bi),co(t)){const a=gr(t,e,!0);return s&&Gl(a,s),lo>0&&!o&&ts&&(a.shapeFlag&6?ts[ts.indexOf(t)]=a:ts.push(a)),a.patchFlag=-2,a}if(qv(t)&&(t=t.__vccOpts),e){e=Zh(e);let{class:a,style:l}=e;a&&!re(a)&&(e.class=mr(a)),Kt(l)&&(Hn(l)&&!ft(l)&&(l=Te({},l)),e.style=Bn(l))}const n=re(t)?1:Xh(t)?128:qy(t)?64:Kt(t)?4:bt(t)?2:0;return W(t,e,s,i,r,n,o,!0)}function Zh(t){return t?Hn(t)||Vh(t)?Te({},t):t:null}function gr(t,e,s=!1,i=!1){const{props:r,ref:o,patchFlag:n,children:a,transition:l}=t,d=e?Nv(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Qh(d),ref:e&&e.ref?s&&o?ft(o)?o.concat(Zo(e)):[o,Zo(e)]:Zo(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&jl(h,l.clone(h)),h}function qn(t=" ",e=0){return Ut(Ao,null,t,e)}function je(t="",e=!1){return e?(mt(),Rs(bi,null,t)):Ut(bi,null,t)}function Os(t){return t==null||typeof t=="boolean"?Ut(bi):ft(t)?Ut($e,null,t.slice()):co(t)?li(t):Ut(Ao,null,String(t))}function li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function Gl(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ft(e))s=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gl(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=e._;!r&&!Vh(e)?e._ctx=Ae:r===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else bt(e)?(e={default:e,_ctx:Ae},s=32):(e=String(e),i&64?(s=16,e=[qn(e)]):s=8);t.children=e,t.shapeFlag|=s}function Nv(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mr([e.class,i.class]));else if(r==="style")e.style=Bn([e.style,i.style]);else if(zn(r)){const o=e[r],n=i[r];n&&o!==n&&!(ft(o)&&o.includes(n))&&(e[r]=o?[].concat(o,n):n)}else r!==""&&(e[r]=i[r])}return e}function As(t,e,s,i=null){zs(t,e,7,[s,i])}const Fv=Mh();let Bv=0;function Uv(t,e,s){const i=t.type,r=(e?e.appContext:t.appContext)||Fv,o={uid:Bv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fh(i,r),emitsOptions:Yh(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Lv.bind(null,o),t.ce&&t.ce(o),o}let ye=null;const Yl=()=>ye||Ae;let bn,Ja;{const t=Fn(),e=(s,i)=>{let r;return(r=t[s])||(r=t[s]=[]),r.push(i),o=>{r.length>1?r.forEach(n=>n(o)):r[0](o)}};bn=e("__VUE_INSTANCE_SETTERS__",s=>ye=s),Ja=e("__VUE_SSR_SETTERS__",s=>uo=s)}const To=t=>{const e=ye;return bn(t),t.scope.on(),()=>{t.scope.off(),bn(e)}},ed=()=>{ye&&ye.scope.off(),bn(null)};function tp(t){return t.vnode.shapeFlag&4}let uo=!1;function Hv(t,e=!1,s=!1){e&&Ja(e);const{props:i,children:r}=t.vnode,o=tp(t);bv(t,i,o,e),wv(t,r,s);const n=o?jv(t,e):void 0;return e&&Ja(!1),n}function jv(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,av);const{setup:i}=s;if(i){_i();const r=t.setupContext=i.length>1?Kv(t):null,o=To(t),n=$o(i,t,0,[t.props,r]),a=qu(n);if(wi(),o(),(a||t.sp)&&!ur(t)&&Ah(t),a){if(n.then(ed,ed),e)return n.then(l=>{sd(t,l)}).catch(l=>{jn(l,t,0)});t.asyncDep=n}else sd(t,n)}else ep(t)}function sd(t,e,s){bt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Kt(e)&&(t.setupState=vh(e)),ep(t)}function ep(t,e,s){const i=t.type;t.render||(t.render=i.render||Ms);{const r=To(t);_i();try{lv(t)}finally{wi(),r()}}}const Wv={get(t,e){return Se(t,"get",""),t[e]}};function Kv(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,Wv),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vh(Ul(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Jr)return Jr[s](t)},has(e,s){return s in e||s in Jr}})):t.proxy}function qv(t){return bt(t)&&"__vccOpts"in t}const Nt=(t,e)=>Fy(t,e,uo);function sp(t,e,s){const i=arguments.length;return i===2?Kt(e)&&!ft(e)?co(e)?Ut(t,null,[e]):Ut(t,e):Ut(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&co(s)&&(s=[s]),Ut(t,e,s))}const Gv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const id=typeof window<"u"&&window.trustedTypes;if(id)try{Qa=id.createPolicy("vue",{createHTML:t=>t})}catch{}const ip=Qa?t=>Qa.createHTML(t):t=>t,Yv="http://www.w3.org/2000/svg",Xv="http://www.w3.org/1998/Math/MathML",Ks=typeof document<"u"?document:null,rd=Ks&&Ks.createElement("template"),Jv={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const r=e==="svg"?Ks.createElementNS(Yv,t):e==="mathml"?Ks.createElementNS(Xv,t):s?Ks.createElement(t,{is:s}):Ks.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ks.createTextNode(t),createComment:t=>Ks.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ks.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,r,o){const n=s?s.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),s),!(r===o||!(r=r.nextSibling)););else{rd.innerHTML=ip(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=rd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[n?n.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},Qv=Symbol("_vtc");function Zv(t,e,s){const i=t[Qv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const od=Symbol("_vod"),t_=Symbol("_vsh"),e_=Symbol(""),s_=/(^|;)\s*display\s*:/;function i_(t,e,s){const i=t.style,r=re(s);let o=!1;if(s&&!r){if(e)if(re(e))for(const n of e.split(";")){const a=n.slice(0,n.indexOf(":")).trim();s[a]==null&&tn(i,a,"")}else for(const n in e)s[n]==null&&tn(i,n,"");for(const n in s)n==="display"&&(o=!0),tn(i,n,s[n])}else if(r){if(e!==s){const n=i[e_];n&&(s+=";"+n),i.cssText=s,o=s_.test(s)}}else e&&t.removeAttribute("style");od in t&&(t[od]=o?i.display:"",t[t_]&&(i.display="none"))}const nd=/\s*!important$/;function tn(t,e,s){if(ft(s))s.forEach(i=>tn(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=r_(t,e);nd.test(s)?t.setProperty(Yi(i),s.replace(nd,""),"important"):t[i]=s}}const ad=["Webkit","Moz","ms"],va={};function r_(t,e){const s=va[e];if(s)return s;let i=gi(e);if(i!=="filter"&&i in t)return va[e]=i;i=Xu(i);for(let r=0;r<ad.length;r++){const o=ad[r]+i;if(o in t)return va[e]=o}return e}const ld="http://www.w3.org/1999/xlink";function cd(t,e,s,i,r,o=hy(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(ld,e.slice(6,e.length)):t.setAttributeNS(ld,e,s):s==null||o&&!Qu(s)?t.removeAttribute(e):t.setAttribute(e,o?"":ti(s)?String(s):s)}function dd(t,e,s,i,r){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?ip(s):s);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const a=typeof t[e];a==="boolean"?s=Qu(s):s==null&&a==="string"?(s="",n=!0):a==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(r||e)}function o_(t,e,s,i){t.addEventListener(e,s,i)}function n_(t,e,s,i){t.removeEventListener(e,s,i)}const ud=Symbol("_vei");function a_(t,e,s,i,r=null){const o=t[ud]||(t[ud]={}),n=o[e];if(i&&n)n.value=i;else{const[a,l]=l_(e);if(i){const d=o[e]=u_(i,r);o_(t,a,d,l)}else n&&(n_(t,a,n,l),o[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function l_(t){let e;if(hd.test(t)){e={};let i;for(;i=t.match(hd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yi(t.slice(2)),e]}let _a=0;const c_=Promise.resolve(),d_=()=>_a||(c_.then(()=>_a=0),_a=Date.now());function u_(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;zs(h_(i,s.value),e,5,[i])};return s.value=t,s.attached=d_(),s}function h_(t,e){if(ft(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,p_=(t,e,s,i,r,o)=>{const n=r==="svg";e==="class"?Zv(t,i,n):e==="style"?i_(t,s,i):zn(e)?Ol(e)||a_(t,e,s,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(t,e,i,n))?(dd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cd(t,e,i,n,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!re(i))?dd(t,gi(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cd(t,e,i,n))};function f_(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&pd(e)&&bt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pd(e)&&re(s)?!1:e in t}const m_=["ctrl","shift","alt","meta"],g_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>m_.some(s=>t[`${s}Key`]&&!e.includes(s))},Qe=(t,e)=>{const s=t._withMods||(t._withMods={}),i=e.join(".");return s[i]||(s[i]=(r,...o)=>{for(let n=0;n<e.length;n++){const a=g_[e[n]];if(a&&a(r,e))return}return t(r,...o)})},b_=Te({patchProp:p_},Jv);let fd;function y_(){return fd||(fd=kv(b_))}const rp=(...t)=>{const e=y_().createApp(...t),{mount:s}=e;return e.mount=i=>{const r=__(i);if(!r)return;const o=e._component;!bt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const n=s(r,!1,v_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e};function v_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function __(t){return re(t)?document.querySelector(t):t}function op(t){const e=s=>Array.isArray(s)?s.map(i=>e(i)):Xt(s)||Js(s)||Hn(s)?e($t(s)):s&&typeof s=="object"?Object.keys(s).reduce((i,r)=>(i[r]=e(s[r]),i),{}):s;return e(t)}const np="https://attack.mitre.org",w_=`${np}/techniques/`,x_=`${np}/tactics/`,k_="/host-management/hosts";function C_(t){return t.technique_id?t.technique_id.replace(".","/"):""}function S_(t){return t?.technique_id?`${w_}/${C_(t)}`:""}function E_(t){return t?.tactic_id?`${x_}/${t.tactic_id}`:""}function $_(t){return t?.device?`${k_}/${t.device?.device_id}?filter=device_id:%27${t.device?.device_id}%27`:""}const ap="mitreAutoRemediationJira",lp="mitreAutoRemediationCreatedIssues";class A_ extends Error{}const T_="ransomwareNotifyIT",I_="ransomwareNotifyIR";let Bo;async function yn(t,e){try{const i=await t.collection({collection:ap}).read(e);if(i&&"errors"in i&&Array.isArray(i.errors)&&i.errors.length>0){const r=new A_(i.errors[0].message);throw i.errors[0].code&&(r.code=Number(i.errors[0].code)),r}else return i&&"account"in i&&"project"in i?i:void 0}catch(s){if(s.message?.includes("object not found")||s.code===404)return;throw s}}async function cp(t){if(Bo!==void 0)return Bo;let e=!0;try{e=typeof(await t.collection({collection:ap}))?.read=="function",e&&(await Promise.all([yn(t,"ransomwareNotifyIT"),yn(t,"ransomwareNotifyIR")]),e=!0)}catch(s){console.error(s),e=!1}finally{Bo=e}return Bo}const L_=async function(t){if(await cp(t))return yn(t,T_)},O_=async function(t){if(await cp(t))return yn(t,I_)},dp=function(t,e){return`${t.data?.detectionId}-${e}`.replace(/[^a-zA-Z\d\-_]/gi,"_")},md=async function(t,e){const s=dp(t,e);try{const r=await t.collection({collection:lp}).read(s);return r?.account&&r?.project&&r?.issueId?r:void 0}catch(i){if(i.message?.includes("object not found"))return;console.error(i)}},R_=async function(t,e,s,i,r){if(i.created){const o={account:s.account??"N/A",priority:s.priority??"N/A",issueType:s.issueType??"N/A",summary:s.summary??"",description:s.description??"",project:s.project??"N/A",labels:s.labels??[],issueId:i.id,issueKey:i.key,issueLink:i.api_link,detectionId:e.id,creationDate:new Date().toISOString(),notificationType:r},n=t.collection({collection:lp}),a=dp(t,r);return(await n.write(a,op(o))).errors?.length?void 0:o}};var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wa,gd;function M_(){if(gd)return wa;gd=1;var t="Expected a function",e="__lodash_hash_undefined__",s="[object Function]",i="[object GeneratorFunction]",r="[object Symbol]",o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/,a=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/[\\^$.*+?()[\]{}|]/g,h=/\\(\\)?/g,u=/^\[object .+?Constructor\]$/,p=typeof Uo=="object"&&Uo&&Uo.Object===Object&&Uo,m=typeof self=="object"&&self&&self.Object===Object&&self,v=p||m||Function("return this")();function k(L,j){return L?.[j]}function I(L){var j=!1;if(L!=null&&typeof L.toString!="function")try{j=!!(L+"")}catch{}return j}var _=Array.prototype,w=Function.prototype,E=Object.prototype,g=v["__core-js_shared__"],C=function(){var L=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||"");return L?"Symbol(src)_1."+L:""}(),R=w.toString,T=E.hasOwnProperty,B=E.toString,D=RegExp("^"+R.call(T).replace(d,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=v.Symbol,lt=_.splice,it=A(v,"Map"),pt=A(Object,"create"),_t=z?z.prototype:void 0,kt=_t?_t.toString:void 0;function X(L){var j=-1,ut=L?L.length:0;for(this.clear();++j<ut;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function J(){this.__data__=pt?pt(null):{}}function dt(L){return this.has(L)&&delete this.__data__[L]}function Q(L){var j=this.__data__;if(pt){var ut=j[L];return ut===e?void 0:ut}return T.call(j,L)?j[L]:void 0}function Ct(L){var j=this.__data__;return pt?j[L]!==void 0:T.call(j,L)}function Ue(L,j){var ut=this.__data__;return ut[L]=pt&&j===void 0?e:j,this}X.prototype.clear=J,X.prototype.delete=dt,X.prototype.get=Q,X.prototype.has=Ct,X.prototype.set=Ue;function se(L){var j=-1,ut=L?L.length:0;for(this.clear();++j<ut;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function si(){this.__data__=[]}function Si(L){var j=this.__data__,ut=P(j,L);if(ut<0)return!1;var Bt=j.length-1;return ut==Bt?j.pop():lt.call(j,ut,1),!0}function Xi(L){var j=this.__data__,ut=P(j,L);return ut<0?void 0:j[ut][1]}function ps(L){return P(this.__data__,L)>-1}function $s(L,j){var ut=this.__data__,Bt=P(ut,L);return Bt<0?ut.push([L,j]):ut[Bt][1]=j,this}se.prototype.clear=si,se.prototype.delete=Si,se.prototype.get=Xi,se.prototype.has=ps,se.prototype.set=$s;function Ce(L){var j=-1,ut=L?L.length:0;for(this.clear();++j<ut;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function ii(){this.__data__={hash:new X,map:new(it||se),string:new X}}function fs(L){return y(this,L).delete(L)}function Ji(L){return y(this,L).get(L)}function x(L){return y(this,L).has(L)}function S(L,j){return y(this,L).set(L,j),this}Ce.prototype.clear=ii,Ce.prototype.delete=fs,Ce.prototype.get=Ji,Ce.prototype.has=x,Ce.prototype.set=S;function P(L,j){for(var ut=L.length;ut--;)if(vt(L[ut][0],j))return ut;return-1}function U(L,j){j=O(j,L)?[j]:b(j);for(var ut=0,Bt=j.length;L!=null&&ut<Bt;)L=L[M(j[ut++])];return ut&&ut==Bt?L:void 0}function N(L){if(!Oe(L)||V(L))return!1;var j=qt(L)||I(L)?D:u;return j.test(Z(L))}function H(L){if(typeof L=="string")return L;if(Hs(L))return kt?kt.call(L):"";var j=L+"";return j=="0"&&1/L==-1/0?"-0":j}function b(L){return ie(L)?L:$(L)}function y(L,j){var ut=L.__data__;return Y(j)?ut[typeof j=="string"?"string":"hash"]:ut.map}function A(L,j){var ut=k(L,j);return N(ut)?ut:void 0}function O(L,j){if(ie(L))return!1;var ut=typeof L;return ut=="number"||ut=="symbol"||ut=="boolean"||L==null||Hs(L)?!0:n.test(L)||!o.test(L)||j!=null&&L in Object(j)}function Y(L){var j=typeof L;return j=="string"||j=="number"||j=="symbol"||j=="boolean"?L!=="__proto__":L===null}function V(L){return!!C&&C in L}var $=ct(function(L){L=Io(L);var j=[];return a.test(L)&&j.push(""),L.replace(l,function(ut,Bt,Er,$r){j.push(Er?$r.replace(h,"$1"):Bt||ut)}),j});function M(L){if(typeof L=="string"||Hs(L))return L;var j=L+"";return j=="0"&&1/L==-1/0?"-0":j}function Z(L){if(L!=null){try{return R.call(L)}catch{}try{return L+""}catch{}}return""}function ct(L,j){if(typeof L!="function"||j&&typeof j!="function")throw new TypeError(t);var ut=function(){var Bt=arguments,Er=j?j.apply(this,Bt):Bt[0],$r=ut.cache;if($r.has(Er))return $r.get(Er);var lc=L.apply(this,Bt);return ut.cache=$r.set(Er,lc),lc};return ut.cache=new(ct.Cache||Ce),ut}ct.Cache=Ce;function vt(L,j){return L===j||L!==L&&j!==j}var ie=Array.isArray;function qt(L){var j=Oe(L)?B.call(L):"";return j==s||j==i}function Oe(L){var j=typeof L;return!!L&&(j=="object"||j=="function")}function qe(L){return!!L&&typeof L=="object"}function Hs(L){return typeof L=="symbol"||qe(L)&&B.call(L)==r}function Io(L){return L==null?"":H(L)}function Re(L,j,ut){var Bt=L==null?void 0:U(L,j);return Bt===void 0?ut:Bt}return wa=Re,wa}var D_=M_();const z_=P_(D_),Jl={AgentId:"agent_id",AgentVersion:"device.agent_version",AllegedFiletype:"alleged_filetype",ClientID:"cid",CmdLine:"cmdline",CreatedTimestamp:"created_timestamp:datetime",DetectionId:"id",DeviceID:"device.device_id",ExternalIP:"device.external_ip",FalconHostLink:"falcon_host_link",FileName:"filename",FilePath:"filepath",Hostname:"device.hostname",Name:"name",Objective:"objective",PatternDisposition:"pattern_disposition_description",PatternDispositionID:"pattern_disposition",Platform:"platform",ProcessEndTime:"process_end_time:datetime",ProcessID:"process_id",ProcessStartTime:"process_start_time:datetime",Product:"product",Scenario:"scenario",Severity:"severity:toSeverityValue",Status:"status",Tactic:"tactic",TacticID:"tactic_id",Tags:"tags:join",Technique:"technique",TechniqueID:"technique_id",TimeStamp:"timestamp:datetime",Type:"type",UpdatedTimestamp:"updated_timestamp:datetime",UserID:"user_id",UserName:"user_name"},up=(t,e,s,i,r="---",o="preview")=>{const n=Jl[s]??"";let a="";if(n){const[l,d]=n.split(":");try{if(a=z_(i||{},l),d)switch(d){case"join":{a&&(a=[...a].join(", "));break}case"toSeverityValue":{if(a){const h=Number(a);isNaN(h)?a="Unknown":h<=20?a="Informational":h<=40?a="Low":h<=60?a="Medium":h<=80?a="High":h<=101?a="Critical":a="Unknown"}break}case"datetime":if(a){const h=Number(a),u=new Date(isNaN(h)?String(a):Number(a)*1e3);o==="preview"?a=e.d(u,"fullDateTime",t.data?.locale):a=u.toISOString()}break;default:break}}catch(h){console.error(h),console.log(l,a)}}return String(a)||r},bd=(t,e,s,i)=>(i&&Object.keys(Jl).forEach(r=>{const o=["${",r,"}"].join(""),n=up(t,e,r,i);s=s.replaceAll(o,n)}),s),V_="Ransomware ${Tactic} via ${Technique} detected on ${Hostname}",yd={default:"bb5c382c865347fd8ce08749cc2f64fc"},hp={},N_=async t=>Object.entries(yd).find(([e,s])=>t.includes(e))?.[1]??yd.default,F_=async function(t,e){const s=await N_(e);return((await t.api.plugins.getEntitiesConfigsV1({appId:s})).resources??[])?.filter(r=>r.config?.permissions.includes("read:jira-work")&&r.config?.permissions.includes("write:jira-work")&&r.config?.id).map(r=>({name:r.config.name,id:r.config.id}))},B_=async function(t,e){const s=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_projects_deprecated",config_id:e,request:{}}]});return t.api.plugins.postEntitiesExecuteV1,(s.resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,isPrivate:r.isPrivate,href:r.self})))},U_=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_labels",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.values?.length??0)>0).flatMap(i=>i.response_body.values).map(i=>{const r=i.replace(/ /g,"_");return hp[r]=i,r})},Za=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_priorities",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,href:r.self,description:r.description})))},H_=async function(t,e,s){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_issue_types",config_id:e,request:{params:{query:{projectId:s}}}}]})).resources??[])?.filter(r=>r.status_code===200&&(r.response_body?.length??0)>0).flatMap(r=>r.response_body.map(o=>({id:o.id,name:o.name,href:o.self,description:o.description})))},j_=async function(t,e,s,i,r,o){try{const{account:n,project:a,priority:l,labels:d=[],summary:h="",description:u="",issueType:p}=op(r);if(n&&a&&l&&d?.length&&h&&p){const[m,v,k,I,_]=await Promise.all([F_(t,s),B_(t,n),Za(t,n),H_(t,n,a),U_(t,n)]),w=m?.find(T=>String(T.id)===String(n)||String(T.name)===String(n)),E=v?.find(T=>String(T.id)===String(a)||String(T.name)===String(a)),g=k?.find(T=>String(T.id)===String(l)||String(T.name)===String(l)),C=I?.find(T=>String(T.id)===String(p)||String(T.name)===String(p)),R=d.map(T=>hp[T]??T.replace(/_/g,"")).filter(T=>_.includes(T));if(w&&E&&g&&C&&R.length){const T=bd(t,e,u,o),B=bd(t,e,h,o),D=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.create_issue",config_id:n,request:{json:{fields:{description:T,issuetype:{name:C.name},labels:R,priority:{id:g.id},project:{id:E.id},summary:B}}}}]});if(D?.resources?.length&&!D?.errors?.length){const z={errors:[],created:!0,id:D?.resources?.[0].response_body?.id,key:D?.resources?.[0].response_body?.key,api_link:D?.resources?.[0].response_body?.self};try{z.logged_data=await R_(t,o,{account:w.name,project:E.name,priority:g.name,issueType:C.name,labels:d??[],description:T??"",summary:B??""},z,i)}catch(lt){console.error(lt)}return z}else return{errors:(D?.errors??[]).map(z=>z.message),created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}catch(n){return console.error(n),{errors:[n.message],created:!1,id:"",key:"",api_link:""}}};async function W_(t,e){return e?(await t.api.alerts.postEntitiesAlertsV1({ids:[e]}))?.resources?.[0]:void 0}const _e={I18N:Symbol("i18n"),ALERTS:Symbol("alerts"),FALCON_API:Symbol("falconApi"),FALCON_API_GET_ORIGINS:Symbol("falconApiGetOrigins"),FALCON_API_GET_APP_ID:Symbol("falconApiGetAppId")};/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pp;const Gn=t=>pp=t,fp=Symbol();function tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zr||(Zr={}));function K_(){const t=Ml(!0),e=t.run(()=>Ht({}));let s=[],i=[];const r=Ul({install(o){Gn(r),r._a=o,o.provide(fp,r),o.config.globalProperties.$pinia=r,i.forEach(n=>s.push(n)),i=[]},use(o){return this._a?s.push(o):i.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return r}const mp=()=>{};function vd(t,e,s,i=mp){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&sh()&&py(r),r}function Zi(t,...e){t.slice().forEach(s=>{s(...e)})}const q_=t=>t(),_d=Symbol(),xa=Symbol();function el(t,e){t instanceof Map&&e instanceof Map?e.forEach((s,i)=>t.set(i,s)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],r=t[s];tl(r)&&tl(i)&&t.hasOwnProperty(s)&&!Xt(i)&&!Js(i)?t[s]=el(r,i):t[s]=i}return t}const G_=Symbol();function Y_(t){return!tl(t)||!t.hasOwnProperty(G_)}const{assign:ni}=Object;function X_(t){return!!(Xt(t)&&t.effect)}function J_(t,e,s,i){const{state:r,actions:o,getters:n}=e,a=s.state.value[t];let l;function d(){a||(s.state.value[t]=r?r():{});const h=_h(s.state.value[t]);return ni(h,o,Object.keys(n||{}).reduce((u,p)=>(u[p]=Ul(Nt(()=>{Gn(s);const m=s._s.get(t);return n[p].call(m,m)})),u),{}))}return l=gp(t,d,e,s,i,!0),l}function gp(t,e,s={},i,r,o){let n;const a=ni({actions:{}},s),l={deep:!0};let d,h,u=[],p=[],m;const v=i.state.value[t];!o&&!v&&(i.state.value[t]={}),Ht({});let k;function I(B){let D;d=h=!1,typeof B=="function"?(B(i.state.value[t]),D={type:Zr.patchFunction,storeId:t,events:m}):(el(i.state.value[t],B),D={type:Zr.patchObject,payload:B,storeId:t,events:m});const z=k=Symbol();xh().then(()=>{k===z&&(d=!0)}),h=!0,Zi(u,D,i.state.value[t])}const _=o?function(){const{state:D}=s,z=D?D():{};this.$patch(lt=>{ni(lt,z)})}:mp;function w(){n.stop(),u=[],p=[],i._s.delete(t)}const E=(B,D="")=>{if(_d in B)return B[xa]=D,B;const z=function(){Gn(i);const lt=Array.from(arguments),it=[],pt=[];function _t(J){it.push(J)}function kt(J){pt.push(J)}Zi(p,{args:lt,name:z[xa],store:C,after:_t,onError:kt});let X;try{X=B.apply(this&&this.$id===t?this:C,lt)}catch(J){throw Zi(pt,J),J}return X instanceof Promise?X.then(J=>(Zi(it,J),J)).catch(J=>(Zi(pt,J),Promise.reject(J))):(Zi(it,X),X)};return z[_d]=!0,z[xa]=D,z},g={_p:i,$id:t,$onAction:vd.bind(null,p),$patch:I,$reset:_,$subscribe(B,D={}){const z=vd(u,B,D.detached,()=>lt()),lt=n.run(()=>zi(()=>i.state.value[t],it=>{(D.flush==="sync"?h:d)&&B({storeId:t,type:Zr.direct,events:m},it)},ni({},l,D)));return z},$dispose:w},C=Eo(g);i._s.set(t,C);const T=(i._a&&i._a.runWithContext||q_)(()=>i._e.run(()=>(n=Ml()).run(()=>e({action:E}))));for(const B in T){const D=T[B];if(Xt(D)&&!X_(D)||Js(D))o||(v&&Y_(D)&&(Xt(D)?D.value=v[B]:el(D,v[B])),i.state.value[t][B]=D);else if(typeof D=="function"){const z=E(D,B);T[B]=z,a.actions[B]=D}}return ni(C,T),ni($t(C),T),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:B=>{I(D=>{ni(D,B)})}}),i._p.forEach(B=>{ni(C,n.run(()=>B({store:C,app:i._a,pinia:i,options:a})))}),v&&o&&s.hydrate&&s.hydrate(C.$state,v),d=!0,h=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Q_(t,e,s){let i;const r=typeof e=="function";i=r?s:e;function o(n,a){const l=gv();return n=n||(l?he(fp,null):null),n&&Gn(n),n=pp,n._s.has(t)||(r?gp(t,e,i,n):J_(t,i,n)),n._s.get(t)}return o.$id=t,o}const Yn=Q_("extension",()=>{const t=Ht(),e=Ht(!1),s=Ht(!1),i=Ht(!1),r=Ht(!1),o=Ht(),n=Ht("RansomwareRemediation:DefaultPanel"),a=Eo({}),l=Ht(),d=Ht(),h=Ht(),u=Ht(),p=Ht([]),m=Ht([]),v=he(_e.FALCON_API),k=he(_e.I18N),I=he(_e.FALCON_API_GET_ORIGINS),_=Ht(String(v.data?.detectionId)),{t:w}=k,E=async()=>{try{s.value=!0,o.value=void 0,_.value&&(o.value=await W_(v,_.value))}catch(Q){t.value=Q,console.error(Q)}finally{s.value=!1}},g=async()=>{try{i.value=!0,l.value=await L_(v),d.value=await O_(v),l.value?.account&&(p.value=await Za(v,l.value?.account)),d.value?.account&&(m.value=await Za(v,d.value?.account))}catch(Q){t.value=Q,console.error(Q)}finally{i.value=!1}},C=async()=>{try{r.value=!0,_.value&&(h.value=await md(v,"notifyIT"),u.value=await md(v,"notifyIR"))}catch(Q){t.value=Q,console.error(Q)}finally{r.value=!1}},R=Nt(()=>!0),T=()=>n.value?pt(n.value):{},B=(Q,Ct)=>{n.value=Q,Ct&&(a[Q]=Ct)},D=(Q,Ct)=>{a[n.value]={...a[n.value],[Q]:Ct}},z=(Q,Ct=void 0)=>pt(n.value)[Q]??Ct,lt=Q=>{a[Q]={}},it=(Q,Ct)=>{a[Q]={...Ct}},pt=Q=>(a[Q]||(a[Q]={}),a[Q]??{}),_t=Nt(()=>i?.value||s?.value||r?.value),kt=async()=>{await Promise.all([E(),g(),C()])},X=Nt(()=>n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR"?z("account","").length>0&&z("priority","").length>0&&z("issueType","").length>0&&z("summary","").length>0&&z("labels",[]).length>0:!0),J=async()=>{try{return e.value=!0,X.value&&(n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR")?await j_(v,k,I(),n.value==="RansomwareRemediation:NotifyIT"?"notifyIT":"notifyIR",pt(n.value),o.value):{errors:[w("errorCreatingJiraIssueDataMissing")],created:!1,id:"",api_link:"",key:""}}finally{e.value=!1}},dt=Nt(()=>{const Q={account:"",project:"",priority:"",labels:"",issueType:"",summary:"",description:""};if(!X.value){const Ct=T();Ct.account?.length||(Q.account=w("selectAccount")),Ct.project?.length||(Q.project=w("selectProject")),Ct.priority?.length||(Q.priority=w("selectPriority")),Ct.labels?.length||(Q.labels=w("enterOneOrMoreLabels")),Ct.issueType?.length||(Q.issueType=w("selectIssueType")),Ct.summary?.length||(Q.summary=w("enterSummary"))}return Q});return v.events.on("data",Q=>{const Ct=String(Q.detectionId);Ct&&_.value!==Ct&&(v.data&&(v.data.detectionId=Ct),_.value=Ct,kt())}),{notifyITConfig:l,notifyIRConfig:d,notifyITPriorities:p,notifyIRPriorities:m,loadData:kt,isLoading:_t,loadingError:t,hasRansomwareRemediation:R,detection:o,setWizardState:B,setWizardStateProperty:D,clearWizardStateStep:lt,setWizardStateStep:it,wizardState:n,wizardStateValues:a,getWizardStateStep:pt,getWizardStateProperty:z,isStepValid:X,createJiraIssueFromCurrentStep:J,isSaving:e,validationMessages:dt,existingTicketIT:h,existingTicketIR:u,loadExistingTickets:C}}),Es=(t,e)=>{const s=t.__vccOpts||t;for(const[i,r]of e)s[i]=r;return s},Z_={},t1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function e1(t,e){return mt(),St("svg",t1,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM17.207 15.793L15.793 17.207L12 13.414L8.207 17.207L6.793 15.793L10.586 12L6.793 8.207L8.207 6.793L12 10.586L15.793 6.793L17.207 8.207L13.414 12L17.207 15.793Z"},null,-1)]))}const wd=Es(Z_,[["render",e1]]),s1={},i1={width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"};function r1(t,e){return mt(),St("svg",i1,e[0]||(e[0]=[W("g",null,[W("path",{d:"M7.5 12V8h1v4h-1ZM8 6.049A1.024 1.024 0 1 0 8 4a1.024 1.024 0 0 0 0 2.049Z"}),W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-5.976a5.976 5.976 0 1 0 0 11.952A5.976 5.976 0 0 0 8 2.024Z"})],-1)]))}const xd=Es(s1,[["render",r1]]),o1={},n1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function a1(t,e){return mt(),St("svg",n1,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 19H11V10H13V19ZM12 8C11.171 8 10.5 7.328 10.5 6.5C10.5 5.672 11.172 5 12 5C12.828 5 13.5 5.672 13.5 6.5C13.5 7.328 12.828 8 12 8Z"},null,-1)]))}const l1=Es(o1,[["render",a1]]),c1={},d1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function u1(t,e){return mt(),St("svg",d1,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM9.242 17.295L5.453 13.506L6.867 12.092L9.242 14.467L16.497 7.212L17.911 8.626L9.242 17.295Z"},null,-1)]))}const h1=Es(c1,[["render",u1]]),p1={},f1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function m1(t,e){return mt(),St("svg",f1,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM11 5H13V14H11V5ZM12 19C11.171 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19Z"},null,-1)]))}const g1=Es(p1,[["render",m1]]),b1={},y1={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"};function v1(t,e){return mt(),St("svg",y1,e[0]||(e[0]=[W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.009 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 11h2V4H9v7Zm1 4.475a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"},null,-1)]))}const _1=Es(b1,[["render",v1]]),w1={},x1={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function k1(t,e){return mt(),St("svg",x1,e[0]||(e[0]=[W("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)]))}const C1=Es(w1,[["render",k1]]),S1={},E1={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function $1(t,e){return mt(),St("svg",E1,e[0]||(e[0]=[W("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)]))}const A1=Es(S1,[["render",$1]]),T1={class:"type-sm text-text-and-icons flex items-center gap-1 mb-1"},I1={class:"type-sm text-body-and-labels"},L1=We({__name:"ActionsPrivacyPanel",setup(t){const{t:e}=he(_e.I18N);return(s,i)=>i[0]||(gn(-1,!0),(i[0]=W("div",{class:"bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"},[W("h3",T1,[Ut(q(_1),{class:"text-medium"}),W("span",null,gt(q(e)("warning")),1)]),W("p",I1,gt(q(e)("actionDataPrivacy")),1)])).cacheIndex=0,gn(1),i[0])}}),O1={class:"flex gap-1 items-center mt-2"},R1={key:0,class:"inline-block text-xs text-disabled"},P1={slot:"trigger",class:"inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"},M1=["value"],D1=["content"],z1=["content"],V1=We({__name:"VariablesSelector",props:{exampleDetection:{},disabled:{type:Boolean}},emits:["addVariable"],setup(t,{emit:e}){const s=he(_e.FALCON_API),i=he(_e.I18N),{t:r}=i,o=Ht(),n=e,a=Ht(!1),l=t,d=u=>{o?.value.hide(),u.detail.item?.value&&n("addVariable",`\${${u.detail.item?.value}}`)},h=u=>up(s,i,u,l.exampleDetection,"---");return(u,p)=>(mt(),St("div",O1,[l.disabled?(mt(),St("span",R1,"Insert variable")):(mt(),St("sl-dropdown",{key:1,ref_key:"dropdownEl",ref:o,onSlAfterShow:p[0]||(p[0]=m=>a.value=!0),onSlAfterHide:p[1]||(p[1]=m=>a.value=!1),hoist:""},[W("a",P1,gt(q(r)("insertVariable")),1),W("sl-menu",{onSlSelect:d},[(mt(!0),St($e,null,Lh(q(Jl),(m,v)=>(mt(),St("sl-menu-item",{key:v,value:v},[qn(gt(v)+" ",1),l.exampleDetection&&h(v)!=="undefined"?(mt(),St("sl-tooltip",{key:0,slot:"suffix",style:{"--max-width":"90vw"},content:h(v),hoist:""},[Ut(q(xd))],8,D1)):je("",!0)],8,M1))),128))],32)],544)),W("sl-tooltip",{content:q(r)("insertVariableTooltip")},[Ut(q(xd))],8,z1)]))}}),kd=Es(V1,[["__scopeId","data-v-0be42262"]]),N1=["open"],F1={slot:"expand-icon"},B1={slot:"collapse-icon"},U1={class:"flex w-full justify-between gap-3",slot:"summary"},H1={class:"flex"},j1={key:0,class:"self-center pr-3"},W1=We({__name:"CollapsiblePanel",props:{label:{},iconComponent:{},iconProps:{},count:{},fontClass:{},open:{type:Boolean}},emits:["hide","show","after-show","after-hide"],setup(t,{emit:e}){const s=e,i=t,r=Nt(()=>i.fontClass??"type-lg-tight-medium"),{open:o=Ht(!1)}=_h(i),n=()=>{s("show"),o.value=!0},a=()=>{s("hide"),o.value=!1};return(l,d)=>(mt(),St("sl-details",{class:"collapsible-panel",onSlShow:d[0]||(d[0]=Qe(h=>n(),["self"])),onSlHide:d[1]||(d[1]=Qe(h=>a(),["self"])),onSlAfterShow:d[2]||(d[2]=Qe(h=>l.$emit("after-show"),["self"])),onSlAfterHide:d[3]||(d[3]=Qe(h=>l.$emit("after-hide"),["self"])),open:q(o)},[W("div",F1,[Ut(q(C1))]),W("div",B1,[Ut(q(A1))]),W("div",U1,[W("div",H1,[i.iconComponent?(mt(),St("div",j1,[Ut(i.iconComponent,dy(Zh(i.iconProps)),null,16)])):je("",!0),W("h3",{class:mr(["text-titles-and-attributes",r.value])},gt(i.label),3)]),l.count!==void 0?(mt(),St("div",{key:0,class:mr(["pr-0.5",r.value])},gt(l.count),3)):je("",!0)]),W("div",null,[nv(l.$slots,"default",{},void 0)])],40,N1))}}),K1=Es(W1,[["__scopeId","data-v-ba21779b"]]),q1={class:"p-3"},G1={key:0,class:"flex flex-row items-center justify-items-start gap-3 mb-4"},Y1=["disabled"],X1=["disabled"],J1={key:1},Q1={class:"text-critical type-md-medium"},Z1={class:"type-sm mb-4"},tw={key:2},ew={class:"text-high type-md-medium"},sw={class:"type-sm mb-4"},iw={key:3},rw={class:"text-high type-md-medium"},ow={class:"type-sm mb-4"},nw={key:4,class:"pt-3"},aw={class:"type-md-medium text-titles-and-attributes mb-3"},lw={key:0,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},cw={class:"w-1/4 truncate"},dw={class:"type-xs text-body-and-labels"},uw={class:"type-sm text-titles-and-attributes"},hw={class:"w-1/3 truncate"},pw={class:"type-xs text-body-and-labels"},fw={class:"type-sm text-titles-and-attributes"},mw={class:"truncate"},gw={class:"type-xs text-body-and-labels"},bw={class:"type-sm text-titles-and-attributes"},yw={key:1,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},vw={class:"w-1/4 truncate"},_w={class:"type-xs text-body-and-labels"},ww={class:"type-sm text-titles-and-attributes"},xw={class:"w-1/3 truncate"},kw={class:"type-xs text-body-and-labels"},Cw={class:"type-sm text-titles-and-attributes"},Sw={class:"truncate"},Ew={class:"type-xs text-body-and-labels"},$w={class:"type-sm text-titles-and-attributes"},Aw=We({__name:"DefaultPanel",setup(t){const e=he(_e.FALCON_API),s=Yn(),{t:i,d:r}=he(_e.I18N),o=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIR"),s.setWizardState("RansomwareRemediation:NotifyIT")},n=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIT"),s.setWizardState("RansomwareRemediation:NotifyIR")},a=()=>{!s.notifyITConfig&&!s.notifyIRConfig?e.navigation.navigateTo({path:"/wizard",type:"internal",target:"_blank"}):s.notifyITConfig?s.notifyIRConfig||e.navigation.navigateTo({path:"/notify-ir",type:"internal",target:"_blank"}):e.navigation.navigateTo({path:"/notify-it",type:"internal",target:"_blank"})};return(l,d)=>(mt(),St("div",q1,[q(s).notifyITConfig||q(s).notifyIRConfig?(mt(),St("div",G1,[W("sl-button",{disabled:!q(s).notifyITConfig,onClick:d[0]||(d[0]=h=>o()),variant:"neutral",size:"small",slot:"trigger"},gt(q(i)("notifyIT")),9,Y1),W("sl-button",{disabled:!q(s).notifyIRConfig,onClick:d[1]||(d[1]=h=>n()),variant:"neutral",size:"small",slot:"trigger"},gt(q(i)("notifyIR")),9,X1)])):je("",!0),!q(s).notifyITConfig&&!q(s).notifyIRConfig?(mt(),St("div",J1,[W("h2",Q1,gt(q(i)("actionNotConfigured")),1),W("p",Z1,gt(q(i)("configureActionsInAppMessage")),1),W("sl-button",{onClick:d[2]||(d[2]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},gt(q(i)("configureInApp")),1)])):q(s).notifyITConfig?q(s).notifyIRConfig?je("",!0):(mt(),St("div",iw,[W("h2",rw,gt(q(i)("notifyIRNotConfigured")),1),W("p",ow,gt(q(i)("configureNotifyIRInAppMessage")),1),W("sl-button",{onClick:d[4]||(d[4]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},gt(q(i)("configureInApp")),1)])):(mt(),St("div",tw,[W("h2",ew,gt(q(i)("notifyITNotConfigured")),1),W("p",sw,gt(q(i)("configureNotifyITInAppMessage")),1),W("sl-button",{onClick:d[3]||(d[3]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},gt(q(i)("configureInApp")),1)])),q(s).existingTicketIT||q(s).existingTicketIR?(mt(),St("div",nw,[W("h2",aw,gt(q(i)("remediationHistory")),1),q(s).existingTicketIT?(mt(),St("div",lw,[W("div",cw,[W("h3",dw,gt(q(i)("action")),1),W("p",uw,gt(q(i)("notifyIT")),1)]),W("div",hw,[W("h3",pw,gt(q(i)("jiraTicket")),1),W("p",fw,gt(q(s).existingTicketIT.issueKey),1)]),W("div",mw,[W("h3",gw,gt(q(i)("executionDate")),1),W("p",bw,gt(q(r)(new Date(q(s).existingTicketIT.creationDate),"fullDateTime")),1)])])):je("",!0),q(s).existingTicketIR?(mt(),St("div",yw,[W("div",vw,[W("h3",_w,gt(q(i)("action")),1),W("p",ww,gt(q(i)("notifyIR")),1)]),W("div",xw,[W("h3",kw,gt(q(i)("jiraTicket")),1),W("p",Cw,gt(q(s).existingTicketIR.issueKey),1)]),W("div",Sw,[W("h3",Ew,gt(q(i)("executionDate")),1),W("p",$w,gt(q(r)(new Date(q(s).existingTicketIR.creationDate),"fullDateTime")),1)])])):je("",!0)])):je("",!0)]))}}),Tw={class:"flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light"},Iw={class:"type-md-medium text-text-and-icons mb-3"},Lw={class:"w-full"},Ow=["label","value","disabled"],Rw=["value"],Pw={class:"w-full"},Mw=["label","value","disabled"],Dw={class:"w-full"},zw=["label","value","disabled"],Vw={class:"w-full"},Nw={class:"w-full flex flex-row justify-end items-center gap-3"},Fw=["disabled"],Bw=["disabled","variant"],Uw={key:0,class:"mr-1 inline-block"},Hw={key:1,name:"x-octagon",class:"mr-1 inline-block"},jw={key:2,name:"check-circle",class:"mr-1 inline-block"},bp=We({__name:"ConfigureNotify",props:{step:{}},setup(t){let e,s;const i=he(_e.ALERTS),r=Ht(),o=Ht(),n=Ht(),a=Ht(),l=X=>{r.value=X,setTimeout(()=>{r.value=void 0},10*1e3)},{t:d}=he(_e.I18N),h=t,u=Yn(),p=Nt(()=>h.step),m=Nt(()=>u.getWizardStateProperty("priority","")),v=Nt(()=>p.value==="RansomwareRemediation:NotifyIT"?u.notifyITPriorities:p.value==="RansomwareRemediation:NotifyIR"?u.notifyIRPriorities:[]),k=Nt(()=>p.value==="RansomwareRemediation:NotifyIT"?d("notifyIT"):p.value==="RansomwareRemediation:NotifyIR"?d("notifyIR"):""),I=Nt(()=>u.getWizardStateProperty("summary","")),_=Nt(()=>u.getWizardStateProperty("description","")),w=async X=>{const J=X?.target?.value;u.setWizardStateProperty("priority",J),kt()},E=async X=>{const J=X?.target?.value;u.setWizardStateProperty("summary",J.trim()||V_),kt()},g=async X=>{const J=X?.target?.value;u.setWizardStateProperty("description",J.trim()),kt()},C=Nt(()=>u.isStepValid),R=Nt(()=>u.validationMessages),T=X=>{u.setWizardStateProperty("summary",`${I.value.trim()} ${X}`.trim()),o.value.focus(),kt()},B=X=>{u.setWizardStateProperty("description",`${_.value.trim()} ${X}`.trim()),n.value.focus(),kt()},D=Nt(()=>u.isLoading),z=Nt(()=>u.isSaving),lt=async()=>{u.setWizardState(p.value),p.value==="RansomwareRemediation:NotifyIT"?u.setWizardStateStep(p.value,u.notifyITConfig??{}):p.value==="RansomwareRemediation:NotifyIR"&&u.setWizardStateStep(p.value,u.notifyIRConfig??{}),kt()},it=async()=>{clearTimeout(e),s?.hide(),u.wizardState!=="RansomwareRemediation:DefaultPanel"&&(await u.loadExistingTickets(),u.setWizardState("RansomwareRemediation:DefaultPanel"))},pt=async()=>{if(kt()&&!r.value){const X=await u.createJiraIssueFromCurrentStep();X.created&&X?(l("success"),e=setTimeout(it,1e4),s=i.notify({variant:"success",message:d("jiraIssueCreated",{key:X.key,id:X.id}),backdrop:!0,position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0,it()}},!1)):(l("danger"),s=i.notify({variant:"danger",backdrop:!0,message:X.errors?.[0]??d("errorCreatingJiraIssue"),position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0}},!1))}},_t=()=>{u.setWizardState("RansomwareRemediation:DefaultPanel")},kt=()=>{const{priority:X,summary:J,description:dt}=R.value;return a.value?.setCustomValidity(X),o.value?.setCustomValidity(J),n.value?.setCustomValidity(dt),a.value?.disabled||a.value?.reportValidity(),o.value?.disabled||o.value?.reportValidity(),n?.value?.disabled||n.value?.reportValidity(),C.value};return lt(),(X,J)=>(mt(),St("div",Tw,[W("h1",Iw,gt(k.value),1),W("div",Lw,[W("sl-select",{label:q(d)("priority"),value:m.value,onSlChange:Qe(w,["self"]),placement:"bottom",disabled:D.value,ref_key:"priorityElement",ref:a},[(mt(!0),St($e,null,Lh(v.value,dt=>(mt(),St("sl-option",{key:dt.id,value:dt.id},gt(dt.name),9,Rw))),128))],40,Ow)]),W("div",Pw,[W("sl-input",{label:q(d)("summary"),value:I.value,ref_key:"summaryElement",ref:o,onSlChange:Qe(E,["self"]),disabled:D.value},null,40,Mw),Ut(q(kd),{onAddVariable:T,disabled:D.value,"example-detection":q(u).detection},null,8,["disabled","example-detection"])]),W("div",Dw,[W("sl-textarea",{label:q(d)("description"),value:_.value,ref_key:"descriptionElement",ref:n,disabled:D.value,onSlChange:Qe(g,["self"])},null,40,zw),Ut(q(kd),{onAddVariable:B,disabled:D.value,"example-detection":q(u).detection},null,8,["disabled","example-detection"])]),W("div",Vw,[Ut(q(L1))]),W("div",Nw,[W("sl-button",{onClick:J[0]||(J[0]=dt=>_t()),disabled:z.value||r.value,variant:"neutral",size:"small",slot:"trigger"},gt(q(d)("cancel")),9,Fw),W("sl-button",{onClick:J[1]||(J[1]=dt=>pt()),disabled:z.value||!q(u).isStepValid,variant:r.value?r.value:"primary",size:"small",slot:"trigger"},[z.value?(mt(),St("sl-spinner",Uw)):r.value==="danger"?(mt(),St("sl-icon",Hw)):r.value==="success"?(mt(),St("sl-icon",jw)):je("",!0),qn(" "+gt(q(d)("createTicket")),1)],8,Bw)])]))}}),Ww=We({__name:"NotifyIR",setup(t){return(e,s)=>(mt(),Rs(bp,{step:"RansomwareRemediation:NotifyIR"}))}}),Kw=We({__name:"NotifyIT",setup(t){return(e,s)=>(mt(),Rs(bp,{step:"RansomwareRemediation:NotifyIT"}))}}),qw={class:"bg-surface-md h-full w-full overflow-y-auto max-w-full"},Gw={class:"p-3"},Yw={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},Xw={class:"w-2/3 truncate"},Jw={class:"type-xs truncate text-body-and-labels",title:"{{ t('tacticAndTechnique') }}"},Qw={class:"type-sm min-h-6 text-titles-and-attributes truncate"},Zw=["href","title"],tx=["href","title"],ex={class:"w-1/3 truncate"},sx={class:"type-xs truncate text-body-and-labels"},ix=["title"],rx=["href"],ox={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},nx={class:"w-full truncate"},ax={class:"type-xs truncate text-body-and-labels"},lx={class:"type-sm min-h-6 text-titles-and-attributes w-full"},cx=We({__name:"RansomwareRemediation",setup(t){const{t:e}=he(_e.I18N),s=Yn(),i=he(_e.FALCON_API),r=Nt(()=>E_(s.detection)),o=Nt(()=>S_(s.detection)),n=Nt(()=>$_(s.detection)),a=l=>i.navigation.onClick(l,"_blank","falcon");return(l,d)=>(mt(),Rs(q(K1),{label:q(e)("ransomwareRemediation"),"font-class":"type-md-medium",open:!0},{default:$h(()=>[W("div",qw,[W("div",Gw,[W("div",Yw,[W("div",Xw,[W("dt",Jw,gt(q(e)("tacticAndTechnique")),1),W("dd",Qw,[W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:r.value,target:"_blank",title:q(s).detection?.tactic},gt(q(s).detection?.tactic),41,Zw),qn(" "+gt(q(e)("via"))+" ",1),W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:o.value,target:"_blank",title:q(s).detection?.technique},gt(q(s).detection?.technique),41,tx)])]),W("div",ex,[W("dt",sx,gt(q(e)("hostname")),1),W("dd",{class:"type-sm min-h-6 text-titles-and-attributes truncate",title:q(s).detection?.device?.hostname},[W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:n.value,target:"_blank"},gt(q(s).detection?.device?.hostname),41,rx)],8,ix)])]),W("div",ox,[W("div",nx,[W("dt",ax,gt(q(e)("description")),1),W("dd",lx,gt(q(e)("createAJiraTicket")),1)])])]),q(s).wizardState==="RansomwareRemediation:DefaultPanel"?(mt(),Rs(Aw,{key:0})):je("",!0),q(s).wizardState==="RansomwareRemediation:NotifyIT"?(mt(),Rs(Kw,{key:1})):je("",!0),q(s).wizardState==="RansomwareRemediation:NotifyIR"?(mt(),Rs(Ww,{key:2})):je("",!0)])]),_:1},8,["label"]))}}),dx=Es(cx,[["__scopeId","data-v-3673d71e"]]),ux={class:"bg-surface-lg flex h-full w-full flex-col"},hx={key:0,class:"h-full w-full flex-grow p-6 text-center"},px=We({__name:"AvailableRemediations",setup(t){const e=Yn(),s=Nt(()=>e.hasRansomwareRemediation);return Wl(()=>{e.loadData()}),(i,r)=>(mt(),St("div",ux,[q(e).isLoading?(mt(),St("div",hx,r[0]||(r[0]=[W("sl-spinner",{style:{"font-size":"3rem"}},null,-1)]))):je("",!0),s.value&&!q(e).isLoading?(mt(),Rs(dx,{key:1})):je("",!0)]))}}),fx={class:"main-content w-full"},mx=We({__name:"App",setup(t){return(e,s)=>(mt(),St("div",fx,[Ut(px)]))}}),ka=t=>t&&typeof t=="object"&&!Array.isArray(t),sl=(t,...e)=>{if(!e.length)return t;const s=e.shift();if(ka(t)&&ka(s))for(const i in s)ka(s[i])?(t[i]||Object.assign(t,{[i]:{}}),sl(t[i],s[i])):Object.assign(t,{[i]:s[i]});return sl(t,...e)},vn=sl({},{en:{account:{t:0,b:{t:2,i:[{t:3}],s:"Account"}},action:{t:0,b:{t:2,i:[{t:3}],s:"Action"}},actionAppDetails:{t:0,b:{t:2,i:[{t:3}],s:"App details"}},actionButtonLabel:{t:0,b:{t:2,i:[{t:3}],s:"Actions"}},actionConfigureJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions"}},actionConfigureRemediationOptions:{t:0,b:{t:2,i:[{t:3}],s:"Configure remediation options"}},actionDataPrivacy:{t:0,b:{t:2,i:[{t:3}],s:"This action sends data out of Falcon to a system or third party that may have different security standards, privacy and data processing practices, or terms and conditions. By configuring this workflow you consent to such data transfer."}},actionNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Actions not configured"}},auditRoute:{t:0,b:{t:2,i:[{t:3}],s:"Audit"}},availableRemediationWorkflows:{t:0,b:{t:2,i:[{t:3}],s:"Available remediation workflows"}},buttonSeeDetections:{t:0,b:{t:2,i:[{t:3}],s:"See detections"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"Cancel"}},collectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"Collection not found"}},configureActionsInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:"This action does not have a configured workflow or Jira integration. Configure this workflow within the Triage app to use this action."}},configured:{t:0,b:{t:2,i:[{t:3}],s:"Configured"}},configureInApp:{t:0,b:{t:2,i:[{t:3}],s:"Configure in app"}},configureJiraActionsFollowing:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions for the following workflows"}},configureNotifyIRInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IR". Configure this workflow within the Triage app to use this action.'}},configureNotifyITInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IT". Configure this workflow within the Triage app to use this action.'}},configureTheJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure the Jira action for this remediation workflow"}},createAJiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create a Jira ticket to notify IT or IR with specific details of ransomware detections"}},createTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create Jira ticket"}},criticalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Critical"}},customObjectCollectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"collection was not found"}},description:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},detectionForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Enterprise"}},detectionForMobile:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Mobile"}},detectionsTitle:{t:0,b:{t:2,i:[{t:3}],s:"Detections"}},enterOneOrMoreLabels:{t:0,b:{t:2,i:[{t:3}],s:"Enter one or more labels"}},enterSummary:{t:0,b:{t:2,i:[{t:3}],s:"Enter a summary"}},errorConfiguringJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error configuring JIRA issue type"}},errorCreatingJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error creating the Jira issue"}},errorCreatingJiraIssueDataMissing:{t:0,b:{t:2,i:[{t:3}],s:"Jira Issue can't be created. Some information are missing."}},executionDate:{t:0,b:{t:2,i:[{t:3}],s:"Execution date"}},filterLastDay:{t:0,b:{t:2,i:[{t:3}],s:"Last day"}},filterLastHour:{t:0,b:{t:2,i:[{t:3}],s:"Last hour"}},filterLastMonth:{t:0,b:{t:2,i:[{t:3}],s:"Last 30 days"}},filterLastWeek:{t:0,b:{t:2,i:[{t:3}],s:"Last week"}},filterShowSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Show sub-techniques"}},filterShowTrend:{t:0,b:{t:2,i:[{t:3}],s:"Show trends"}},filterSwitchOff:{t:0,b:{t:2,i:[{t:3}],s:"Off"}},filterSwitchOn:{t:0,b:{t:2,i:[{t:3}],s:"On"}},highSeverity:{t:0,b:{t:2,i:[{t:3}],s:"High"}},hostname:{t:0,b:{t:2,i:[{t:3}],s:"Hostname"}},informationalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Informational"}},insertVariable:{t:0,b:{t:2,i:[{t:3}],s:"Insert variable"}},insertVariableTooltip:{t:0,b:{t:2,i:[{t:3}],s:"Insert a variable in the field that will be filled with the corresponding value from the detection"}},issueType:{t:0,b:{t:2,i:[{t:3}],s:"Issue type"}},jiraIssueConfigured:{t:0,b:{t:2,i:[{t:3}],s:"JIRA issue type configured"}},jiraIssueCreated:{t:0,b:{t:2,i:[{t:3,v:"Jira issue "},{t:4,k:"key"},{t:3,v:" has been created."}]}},jiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Jira ticket"}},labels:{t:0,b:{t:2,i:[{t:3}],s:"Labels"}},loading:{t:0,b:{t:2,i:[{t:3}],s:"Loading"}},lowSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Low"}},matrixForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Enterprise"}},matrixForMobile:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Mobile"}},mediumSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Medium"}},mitreAutoRemediationRoute:{t:0,b:{t:2,i:[{t:3}],s:"CrowdStrike Triage for MITRE ATT&CK"}},noJiraAccount:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA integration account was found"}},noJiraIssueType:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA issueType was configured for this project"}},noJiraLabels:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA labels was configured for this project"}},noJiraPriority:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA priority was configured for this project"}},noJiraProject:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA projects was configured in this account"}},noMatchingMitreDetections:{t:0,b:{t:2,i:[{t:3}],s:"No matching MITRE detections"}},notConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Not configured"}},notifyIR:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR"}},notifyIRNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR not configured"}},notifyIT:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT"}},notifyITNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT not configured"}},overviewCreated:{t:0,b:{t:2,i:[{t:3}],s:"Created"}},overviewDescription:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},overviewDetectedSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Detected sub-techniques"}},overviewLastModified:{t:0,b:{t:2,i:[{t:3}],s:"Last modified"}},overviewReadFullDescription:{t:0,b:{t:2,i:[{t:3}],s:"Read full description"}},overviewSubTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique"}},overviewSubTechniqueOf:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique of"}},overviewTitle:{t:0,b:{t:2,i:[{t:3}],s:"Overview"}},priority:{t:0,b:{t:2,i:[{t:3}],s:"Priority"}},projects:{t:0,b:{t:2,i:[{t:3}],s:"Projects"}},ransomwareRemediation:{t:0,b:{t:2,i:[{t:3}],s:"Ransomware remediation"}},remediationHistory:{t:0,b:{t:2,i:[{t:3}],s:"Remediation history"}},requiredValuesMissing:{t:0,b:{t:2,i:[{t:3}],s:"Required values are missing"}},save:{t:0,b:{t:2,i:[{t:3}],s:"Save"}},selectAccount:{t:0,b:{t:2,i:[{t:3}],s:"Select an account"}},selectIssueType:{t:0,b:{t:2,i:[{t:3}],s:"Select an issue type"}},selectPriority:{t:0,b:{t:2,i:[{t:3}],s:"Select a priority"}},selectProject:{t:0,b:{t:2,i:[{t:3}],s:"Select a project"}},subTechniquesTitle:{t:0,b:{t:2,i:[{t:3}],s:"Sub-techniques"}},summary:{t:0,b:{t:2,i:[{t:3}],s:"Summary"}},tacticAndTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Tactic & technique"}},updateYourDetection:{t:0,b:{t:2,i:[{t:3}],s:"Update your detection timeframe or ensure your organization is set up properly for endpoint detections."}},via:{t:0,b:{t:2,i:[{t:3}],s:"via"}},warning:{t:0,b:{t:2,i:[{t:3}],s:"Warning"}},workflowsConfigured:{t:0,b:{t:2,i:[{t:4,k:"configuredActions"},{t:3,v:"/"},{t:4,k:"totalActions"},{t:3,v:" workflows configured"}]}}}});function gx(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function zr(t,e){const i=rp(We({extends:e})),r=document.createElement("span");i.mount(r);const o=r.innerHTML;return i.unmount(),r.remove(),o}class bx{install(e){e.provide(_e.ALERTS,this)}notify(e,s=1e4){const{variant:i,message:r,afterHide:o,backdrop:n,position:a,margin:l="var(--sl-spacing-medium)"}=e;let d="";switch(i){case"success":d=zr("success",h1);break;case"danger":d=zr("danger",wd);break;case"warning":d=zr("warning",g1);break;case"primary":d=zr("primary",l1);break;default:d=zr("danger",wd);break}s=s===!1||s<=0?Number.POSITIVE_INFINITY:s;const h=document.createElement("sl-alert"),u=Object.assign(h,{variant:i,closable:!0,duration:s,innerHTML:`<span slot="icon">${d}</span>${gx(r)}`});let p;return n&&(p=document.createElement("div"),p.classList.add("sl-toast-backdrop"),document.body.append(p)),u.addEventListener("sl-after-hide",()=>{o?.(),p&&p.remove()}),document.body.append(u),u.toast(),a&&(u.classList?.add("static"),setTimeout(()=>{const m=u.base;m.style.width="max-content",m.style.margin="0",m.style.maxWidth=`calc(100% - ${l} * 2)`,m.style.maxHeight=`calc(100% - ${l} * 2)`,a.includes("top")?m.style.top=l:a.includes("middle")?m.style.top="50%":a.includes("bottom")&&(m.style.bottom=l),a.includes("left")?m.style.left=l:a.includes("center")?m.style.left="50%":a.includes("right")&&(m.style.right=l),(a.includes("center")||a.includes("middle"))&&(m.style.transform=`translate(${a.includes("center")?"-50%":"0"}, ${a.includes("middle")?"-50%":"0"})`)},10)),u}}function yx(){return new bx}var vx={};let Ho;const _x=new Uint8Array(16);function wx(){if(!Ho&&(Ho=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ho))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ho(_x)}const be=[];for(let t=0;t<256;++t)be.push((t+256).toString(16).slice(1));function xx(t,e=0){return be[t[e+0]]+be[t[e+1]]+be[t[e+2]]+be[t[e+3]]+"-"+be[t[e+4]]+be[t[e+5]]+"-"+be[t[e+6]]+be[t[e+7]]+"-"+be[t[e+8]]+be[t[e+9]]+"-"+be[t[e+10]]+be[t[e+11]]+be[t[e+12]]+be[t[e+13]]+be[t[e+14]]+be[t[e+15]]}const kx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Cd={randomUUID:kx};function Sd(t,e,s){if(Cd.randomUUID&&!t)return Cd.randomUUID();t=t||{};const i=t.random||(t.rng||wx)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,xx(i)}const Ed="current";function ue(t){if(!t.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function Cx(t){return!!t?.data?.meta?.messageId}const Sx=5e3,Ex=3e4,$x=5e3;function Ax(t){return t.type==="connect"?Sx:t.type==="api"?Ex:t.type==="navigateTo"?$x:null}class Tx{constructor({onDataUpdate:e,onBroadcast:s,onLivereload:i}={}){ht(this,"onDataUpdate");ht(this,"onBroadcast");ht(this,"onLivereload");ht(this,"pendingMessages",new Map);ht(this,"targetOrigin","*");ht(this,"handleMessageWrapper",e=>this.handleMessage(e));ht(this,"handleMessage",e=>{if(!Cx(e))return;const{message:s}=e.data;if(s.type==="data"){this.onDataUpdate?.(s);return}if(s.type==="broadcast"){this.onBroadcast?.(s);return}if(s.type==="livereload"){this.onLivereload?.(s);return}const{messageId:i}=e.data.meta,r=this.pendingMessages.get(i);if(!r){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),r(s.payload)});this.onDataUpdate=e,this.onBroadcast=s,this.onLivereload=i,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(e){this.targetOrigin=e}sendUnidirectionalMessage(e){const s=Sd(),i={message:e,meta:{messageId:s,version:Ed}};window.parent.postMessage(i,this.targetOrigin)}async postMessage(e){return new Promise((s,i)=>{const r=Sd();let o;const n=Ax(e);n!==null&&(o=setTimeout(()=>{i(new Error(`Waiting for response from foundry host for "${e.type}" message (ID: ${r}) timed out after ${n}ms`))},n)),this.pendingMessages.set(r,l=>{o&&clearTimeout(o),s(l)});const a={message:e,meta:{messageId:r,version:Ed}};window.parent.postMessage(a,this.targetOrigin)})}throwError(e){throw new Error(e)}}function Fe(t,e,s,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const ri=new WeakMap,Li=new WeakMap,Gs=new WeakMap,_n=Symbol("anyProducer"),$d=Promise.resolve(),wn=Symbol("listenerAdded"),xn=Symbol("listenerRemoved");let kn=!1,Ca=!1;const Cn=t=>typeof t=="string"||typeof t=="symbol"||typeof t=="number";function tr(t){if(!Cn(t))throw new TypeError("`eventName` must be a string, symbol, or number")}function jo(t){if(typeof t!="function")throw new TypeError("listener must be a function")}function er(t,e){const s=Li.get(t);if(s.has(e))return s.get(e)}function to(t,e){const s=Cn(e)?e:_n,i=Gs.get(t);if(i.has(s))return i.get(s)}function Ix(t,e,s){const i=Gs.get(t);if(i.has(e))for(const r of i.get(e))r.enqueue(s);if(i.has(_n)){const r=Promise.all([e,s]);for(const o of i.get(_n))o.enqueue(r)}}function Ad(t,e){e=Array.isArray(e)?e:[e];let s=!1,i=()=>{},r=[];const o={enqueue(n){r.push(n),i()},finish(){s=!0,i()}};for(const n of e){let a=to(t,n);a||(a=new Set,Gs.get(t).set(n,a)),a.add(o)}return{async next(){return r?r.length===0?s?(r=void 0,this.next()):(await new Promise(n=>{i=n}),this.next()):{done:!1,value:await r.shift()}:{done:!0}},async return(n){r=void 0;for(const a of e){const l=to(t,a);l&&(l.delete(o),l.size===0&&Gs.get(t).delete(a))}return i(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function Td(t){if(t===void 0)return Id;if(!Array.isArray(t))throw new TypeError("`methodNames` must be an array of strings");for(const e of t)if(!Id.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return t}const rr=t=>t===wn||t===xn;function Wo(t,e,s){if(rr(e))try{kn=!0,t.emit(e,s)}finally{kn=!1}}class Hi{static mixin(e,s){return s=Td(s),i=>{if(typeof i!="function")throw new TypeError("`target` must be function");for(const n of s)if(i.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function r(){return Object.defineProperty(this,e,{enumerable:!1,value:new Hi}),this[e]}Object.defineProperty(i.prototype,e,{enumerable:!1,get:r});const o=n=>function(...a){return this[e][n](...a)};for(const n of s)Object.defineProperty(i.prototype,n,{enumerable:!1,value:o(n)});return i}}static get isDebugEnabled(){if(typeof vx!="object")return Ca;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||Ca}static set isDebugEnabled(e){Ca=e}constructor(e={}){ri.set(this,new Set),Li.set(this,new Map),Gs.set(this,new Map),Gs.get(this).set(_n,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(s,i,r,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof r=="symbol"||typeof r=="number")&&(r=r.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${s}][${i}] Event Name: ${r}
	data: ${o}`)})}logIfDebugEnabled(e,s,i){(Hi.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,s,i)}on(e,s){jo(s),e=Array.isArray(e)?e:[e];for(const i of e){tr(i);let r=er(this,i);r||(r=new Set,Li.get(this).set(i,r)),r.add(s),this.logIfDebugEnabled("subscribe",i,void 0),rr(i)||Wo(this,wn,{eventName:i,listener:s})}return this.off.bind(this,e,s)}off(e,s){jo(s),e=Array.isArray(e)?e:[e];for(const i of e){tr(i);const r=er(this,i);r&&(r.delete(s),r.size===0&&Li.get(this).delete(i)),this.logIfDebugEnabled("unsubscribe",i,void 0),rr(i)||Wo(this,xn,{eventName:i,listener:s})}}once(e){let s;const i=new Promise(r=>{s=this.on(e,o=>{s(),r(o)})});return i.off=s,i}events(e){e=Array.isArray(e)?e:[e];for(const s of e)tr(s);return Ad(this,e)}async emit(e,s){if(tr(e),rr(e)&&!kn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,s),Ix(this,e,s);const i=er(this,e)??new Set,r=ri.get(this),o=[...i],n=rr(e)?[]:[...r];await $d,await Promise.all([...o.map(async a=>{if(i.has(a))return a(s)}),...n.map(async a=>{if(r.has(a))return a(e,s)})])}async emitSerial(e,s){if(tr(e),rr(e)&&!kn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,s);const i=er(this,e)??new Set,r=ri.get(this),o=[...i],n=[...r];await $d;for(const a of o)i.has(a)&&await a(s);for(const a of n)r.has(a)&&await a(e,s)}onAny(e){return jo(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),ri.get(this).add(e),Wo(this,wn,{listener:e}),this.offAny.bind(this,e)}anyEvent(){return Ad(this)}offAny(e){jo(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Wo(this,xn,{listener:e}),ri.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const s of e)if(this.logIfDebugEnabled("clear",s,void 0),Cn(s)){const i=er(this,s);i&&i.clear();const r=to(this,s);if(r){for(const o of r)o.finish();r.clear()}}else{ri.get(this).clear();for(const[i,r]of Li.get(this).entries())r.clear(),Li.get(this).delete(i);for(const[i,r]of Gs.get(this).entries()){for(const o of r)o.finish();r.clear(),Gs.get(this).delete(i)}}}listenerCount(e){e=Array.isArray(e)?e:[e];let s=0;for(const i of e){if(Cn(i)){s+=ri.get(this).size+(er(this,i)?.size??0)+(to(this,i)?.size??0)+(to(this)?.size??0);continue}i!==void 0&&tr(i),s+=ri.get(this).size;for(const r of Li.get(this).values())s+=r.size;for(const r of Gs.get(this).values())s+=r.size}return s}bindMethods(e,s){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");s=Td(s);for(const i of s){if(e[i]!==void 0)throw new Error(`The property \`${i}\` already exists on \`target\``);Object.defineProperty(e,i,{enumerable:!1,value:this[i].bind(this)})}}}const Id=Object.getOwnPropertyNames(Hi.prototype).filter(t=>t!=="constructor");Object.defineProperty(Hi,"listenerAdded",{value:wn,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Hi,"listenerRemoved",{value:xn,writable:!1,enumerable:!0,configurable:!1});function Be(t){let e,s,i;return e=t,(r,o,n)=>{if(n.value!=null)n.value=Ld(n.value,e,s,i);else if(n.get!=null)n.get=Ld(n.get,e,s,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Sa=new Map;function Ld(t,e,s=0,i){const r=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[r];if(Array.isArray(i))for(const l of i)Sa.has(l)?Sa.get(l).push(a):Sa.set(l,[a]);if(e||o.length>0||s>0){let l;e===!0?l=o.map(u=>u.toString()).join("!"):e?l=e.apply(this,o):l=o[0];const d=`${l}__timestamp`;let h=!1;if(s>0)if(!a.has(d))h=!0;else{let u=a.get(d);h=Date.now()-u>s}a.has(l)&&!h?n=a.get(l):(n=t.apply(this,o),a.set(l,n),s>0&&a.set(d,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=t.apply(this,o),a.set(l,n))}return n}}class Lx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV1(e={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV2(e={}){const s={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:e}};return this.bridge.postMessage(s)}async patchCombinedAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchCombinedAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Ox{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1Collections(e={}){const s={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjects(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:e}};return this.bridge.postMessage(s)}async postV1CollectionsCollectionNameObjects(e,s={}){const i={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putV1CollectionsCollectionNameObjectsObjectKey(e,s={}){const i={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Rx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV1(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDetectsGetV1(e,s={}){const i={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSummariesGetV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Px{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesBucketsV1(e){const s={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesFgaTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFgaGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAvailableGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesHiddenV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV1(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFgaGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDevicesTagsV2(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDevicesGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesFgaHostsGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedDevicesLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedFgaHostsLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesHiddenActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV2(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupActionsV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Mx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionV1(e){const s={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecutionV1(e,s={}){const i={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Dx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesEventsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFirewallFieldsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsDetailsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPlatformsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRulesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesEventsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFirewallFieldsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesNetworkLocationsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPlatformsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPolicyRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesEventsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesPolicyRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRuleGroupsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsMetadataV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsPrecedenceV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesOntologyV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRulesValidateFilepathV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesPoliciesV2(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class zx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(e={}){const s={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesBehaviorsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesIncidentsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postAggregatesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentActionsV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Vx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesSavedSearchesV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesSavedSearchesExecuteV1(e,s={}){const i={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Nx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(e={}){const s={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:e}};return this.bridge.postMessage(s)}}class Fx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesConfigsV1(e={}){const s={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDefinitionsV1(e){const s={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteDraftV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Bx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(e){const s={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesAppCommandV1(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPutFilesV2(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPutFilesV1(e={}){const s={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesAppCommandV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAppSessionsV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Ux{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getQueriesUsersV1(e={}){const s={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesUsersGetV1(e,s={}){const i={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Hx{constructor(e){ht(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(e){const s={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecutionActionsV1(e,s){const i={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Ke{constructor(e){ht(this,"api");this.api=e}get alerts(){return ue(this.api),new Lx(this.api.bridge)}get detects(){return ue(this.api),new Rx(this.api.bridge)}get devices(){return ue(this.api),new Px(this.api.bridge)}get fwmgr(){return ue(this.api),new Dx(this.api.bridge)}get incidents(){return ue(this.api),new zx(this.api.bridge)}get mitre(){return ue(this.api),new Nx(this.api.bridge)}get plugins(){return ue(this.api),new Fx(this.api.bridge)}get remoteResponse(){return ue(this.api),new Bx(this.api.bridge)}get userManagement(){return ue(this.api),new Ux(this.api.bridge)}get workflows(){return ue(this.api),new Hx(this.api.bridge)}get customobjects(){return ue(this.api),new Ox(this.api.bridge)}get faasGateway(){return ue(this.api),new Mx(this.api.bridge)}get loggingapi(){return ue(this.api),new Vx(this.api.bridge)}}Fe([Be()],Ke.prototype,"alerts",null);Fe([Be()],Ke.prototype,"detects",null);Fe([Be()],Ke.prototype,"devices",null);Fe([Be()],Ke.prototype,"fwmgr",null);Fe([Be()],Ke.prototype,"incidents",null);Fe([Be()],Ke.prototype,"mitre",null);Fe([Be()],Ke.prototype,"plugins",null);Fe([Be()],Ke.prototype,"remoteResponse",null);Fe([Be()],Ke.prototype,"userManagement",null);Fe([Be()],Ke.prototype,"workflows",null);Fe([Be()],Ke.prototype,"customobjects",null);Fe([Be()],Ke.prototype,"faasGateway",null);Fe([Be()],Ke.prototype,"loggingapi",null);class jx{constructor(e,s){ht(this,"falcon");ht(this,"definition");this.falcon=e,this.definition=s}async execute({request:e}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:e}]})}}const ls=class ls{constructor(e,s){ht(this,"falcon");ht(this,"definition");ht(this,"pollTimeout",500);ht(this,"intervalId");this.falcon=e,this.definition=s}async execute({path:e,method:s,body:i,params:r}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:e,method:s,body:i,params:r}});return new Promise((a,l)=>{const d=n?.resources?.[0];d?.execution_id?this.pollForResult({resolve:a,reject:l,executionId:d?.execution_id}):l(n?.errors)})}async getExecutionResult(e){return(await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:e}))?.resources?.[0]?.payload}pollForResult({resolve:e,reject:s,executionId:i}){let r=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(i);o&&(window.clearInterval(this.intervalId),e(o))}catch(o){r<=0&&(window.clearInterval(this.intervalId),s(o)),r--}},this.pollTimeout)}path(e){const s=new URL(e,"http://localhost"),i=s.pathname,r=[...s.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:i,queryParams:r,get:async(o={})=>this.get({path:i,params:{query:o?.query??r??{},header:o?.header??{}}}),post:async(o,n={})=>this.post({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),patch:async(o,n={})=>this.patch({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),put:async(o,n={})=>this.put({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),delete:async(o,n={})=>this.delete({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o})}}async get({path:e,params:s}){return this.execute({path:e,method:ls.GET,params:s})}async post({path:e,params:s,body:i}){return this.execute({path:e,method:ls.POST,body:i,params:s})}async patch({path:e,params:s,body:i}){return this.execute({path:e,method:ls.PATCH,body:i,params:s})}async put({path:e,params:s,body:i}){return this.execute({path:e,method:ls.PUT,body:i,params:s})}async delete({path:e,params:s,body:i}){return this.execute({path:e,method:ls.DELETE,body:i,params:s})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};ht(ls,"GET","GET"),ht(ls,"POST","POST"),ht(ls,"PATCH","PATCH"),ht(ls,"PUT","PUT"),ht(ls,"DELETE","DELETE");let il=ls;class Wx{constructor(e,s){ht(this,"falcon");ht(this,"definition");this.falcon=e,this.definition=s}async write(e,s){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:e,collection:this.definition.collection,data:s}})}async read(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:e,collection:this.definition.collection}})}async delete(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:e,collection:this.definition.collection}})}async search({filter:e,offset:s,sort:i,limit:r}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:e,limit:r,offset:s,sort:i,collection:this.definition.collection}})}}class Kx{constructor(e){ht(this,"falcon");this.falcon=e}async write(e,s){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:e,tag:s?.tag,tagSource:s?.tagSource,testData:s?.testData}})}async query(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:e}})}async savedQuery(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:e}})}}const qx=["_self","_blank"];class Gx{constructor(e){ht(this,"falcon");this.falcon=e}async navigateTo({path:e,type:s,target:i,metaKey:r,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:e,type:s??"falcon",target:i??"_self",metaKey:r??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(e,s="_self",i="falcon"){if(!(e instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in e)||!(e.target instanceof HTMLAnchorElement))return;e.preventDefault();const r=e.target.getAttribute("href");s=e.target.getAttribute("target")??s;const o=e.target.dataset?.type??i;if(s===null||!qx.includes(s))throw new Error("Target should be _self or _blank");const n=s;if(r==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:d}=e;await this.navigateTo({path:r,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:d})}}class Yx{constructor(e){ht(this,"bridge");ht(this,"observer");this.bridge=e,this.observer=new ResizeObserver(s=>this.handleResizeEvent(s)),this.observer.observe(document.body)}handleResizeEvent(e){const{height:s}=e[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:s}})}destroy(){this.observer.disconnect()}}class Xx{constructor(e){ht(this,"bridge");this.bridge=e}async openModal(e,s,i={}){const r=await this.bridge.postMessage({type:"openModal",payload:{extension:e,title:s,options:i}});if(r instanceof Error)throw r;return r}closeModal(e){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:e})}async uploadFile(e,s){return this.bridge.postMessage({type:"fileUpload",fileUploadType:e,payload:s})}}class Ql{constructor(){ht(this,"isConnected",!1);ht(this,"events",new Hi);ht(this,"data");ht(this,"bridge",new Tx({onDataUpdate:e=>this.handleDataUpdate(e),onBroadcast:e=>this.handleBroadcastMessage(e),onLivereload:()=>this.handleLivereloadMessage()}));ht(this,"api",new Ke(this));ht(this,"ui",new Xx(this.bridge));ht(this,"resizeTracker");ht(this,"cloudFunctions",[]);ht(this,"apiIntegrations",[]);ht(this,"collections",[])}async connect(){const e=await this.bridge.postMessage({type:"connect"});if(e!==void 0){const{data:s,origin:i}=e;this.bridge.setOrigin(i),this.data=s,this.updateTheme(s?.theme),this.isConnected=!0}return this.resizeTracker=new Yx(this.bridge),e}get appId(){return this.data?.app.id}sendBroadcast(e){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:e})}handleDataUpdate(e){this.data=e.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(e){this.events.emit("broadcast",e.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(e){if(!e)return;const s=e==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(e),document.documentElement.classList.remove(s)}cloudFunction(e){ue(this);const s=new il(this,e);return this.cloudFunctions.push(s),s}apiIntegration({definitionId:e,operationId:s}){if(ue(this),!this.data)throw Error("Data from console is missing");const i=new jx(this,{operationId:s,definitionId:e});return this.apiIntegrations.push(i),i}collection({collection:e}){ue(this);const s=new Wx(this,{collection:e});return this.collections.push(s),s}get navigation(){return ue(this),new Gx(this)}get logscale(){return ue(this),new Kx(this)}destroy(){this.cloudFunctions.forEach(e=>e.destroy()),this.resizeTracker?.destroy(),this.bridge.destroy()}}Fe([Be()],Ql.prototype,"navigation",null);Fe([Be()],Ql.prototype,"logscale",null);const Jx={};class Qx{constructor(){this.falcon=void 0}install(e){this.falcon=new Ql,e.provide(_e.FALCON_API,this.falcon),e.provide(_e.FALCON_API_GET_ORIGINS,()=>this.getOrigin()),e.provide(_e.FALCON_API_GET_APP_ID,()=>this.getAppId())}async connect(){try{await this.falcon?.connect()}catch(e){console.error(e)}}getOrigin(){const{targetOrigin:e}=this.falcon?.bridge;return e||self.location.origin}getAppId(){return this.falcon?.data?.app?.id??Jx.app_id}get data(){return{cid:String(this.falcon?.data?.cid??""),dateFormat:"MMM. D, YYYY",locale:"en-us",theme:"theme-dark",timezone:"UTC",...this.falcon?.data}}}function Zx(){return new Qx}/*!
  * shared v11.1.1
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Sn=typeof window<"u",xi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),t2=(t,e,s)=>e2({l:t,k:e,s}),e2=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ne=t=>typeof t=="number"&&isFinite(t),s2=t=>tc(t)==="[object Date]",En=t=>tc(t)==="[object RegExp]",Xn=t=>Et(t)&&Object.keys(t).length===0,pe=Object.assign,i2=Object.create,Dt=(t=null)=>i2(t);let Od;const Zl=()=>Od||(Od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Dt());function Rd(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const r2=Object.prototype.hasOwnProperty;function ms(t,e){return r2.call(t,e)}const le=Array.isArray,Gt=t=>typeof t=="function",tt=t=>typeof t=="string",Yt=t=>typeof t=="boolean",It=t=>t!==null&&typeof t=="object",o2=t=>It(t)&&Gt(t.then)&&Gt(t.catch),yp=Object.prototype.toString,tc=t=>yp.call(t),Et=t=>tc(t)==="[object Object]",n2=t=>t==null?"":le(t)||Et(t)&&t.toString===yp?JSON.stringify(t,null,2):String(t);function ec(t,e=""){return t.reduce((s,i,r)=>r===0?s+i:s+e+i,"")}function a2(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ko=t=>!It(t)||le(t);function en(t,e){if(Ko(t)||Ko(e))throw new Error("Invalid value");const s=[{src:t,des:e}];for(;s.length;){const{src:i,des:r}=s.pop();Object.keys(i).forEach(o=>{o!=="__proto__"&&(It(i[o])&&!It(r[o])&&(r[o]=Array.isArray(i[o])?[]:Dt()),Ko(r[o])||Ko(i[o])?r[o]=i[o]:s.push({src:i[o],des:r[o]}))})}}/*!
  * message-compiler v11.1.1
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function l2(t,e,s){return{line:t,column:e,offset:s}}function rl(t,e,s){return{start:t,end:e}}const Mt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},c2=17;function Jn(t,e,s={}){const{domain:i,messages:r,args:o}=s,n=t,a=new SyntaxError(String(n));return a.code=t,e&&(a.location=e),a.domain=i,a}function d2(t){throw t}const Ws=" ",u2="\r",Me=`
`,h2="\u2028",p2="\u2029";function f2(t){const e=t;let s=0,i=1,r=1,o=0;const n=T=>e[T]===u2&&e[T+1]===Me,a=T=>e[T]===Me,l=T=>e[T]===p2,d=T=>e[T]===h2,h=T=>n(T)||a(T)||l(T)||d(T),u=()=>s,p=()=>i,m=()=>r,v=()=>o,k=T=>n(T)||l(T)||d(T)?Me:e[T],I=()=>k(s),_=()=>k(s+o);function w(){return o=0,h(s)&&(i++,r=0),n(s)&&s++,s++,r++,e[s]}function E(){return n(s+o)&&o++,o++,e[s+o]}function g(){s=0,i=1,r=1,o=0}function C(T=0){o=T}function R(){const T=s+o;for(;T!==s;)w();o=0}return{index:u,line:p,column:m,peekOffset:v,charAt:k,currentChar:I,currentPeek:_,next:w,peek:E,reset:g,resetPeek:C,skipToPeek:R}}const oi=void 0,m2=".",Pd="'",g2="tokenizer";function b2(t,e={}){const s=e.location!==!1,i=f2(t),r=()=>i.index(),o=()=>l2(i.line(),i.column(),i.index()),n=o(),a=r(),l={currentType:13,offset:a,startLoc:n,endLoc:n,lastType:13,lastOffset:a,lastStartLoc:n,lastEndLoc:n,braceNest:0,inLinked:!1,text:""},d=()=>l,{onError:h}=e;function u(b,y,A,...O){const Y=d();if(y.column+=A,y.offset+=A,h){const V=s?rl(Y.startLoc,y):null,$=Jn(b,V,{domain:g2,args:O});h($)}}function p(b,y,A){b.endLoc=o(),b.currentType=y;const O={type:y};return s&&(O.loc=rl(b.startLoc,b.endLoc)),A!=null&&(O.value=A),O}const m=b=>p(b,13);function v(b,y){return b.currentChar()===y?(b.next(),y):(u(Mt.EXPECTED_TOKEN,o(),0,y),"")}function k(b){let y="";for(;b.currentPeek()===Ws||b.currentPeek()===Me;)y+=b.currentPeek(),b.peek();return y}function I(b){const y=k(b);return b.skipToPeek(),y}function _(b){if(b===oi)return!1;const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function w(b){if(b===oi)return!1;const y=b.charCodeAt(0);return y>=48&&y<=57}function E(b,y){const{currentType:A}=y;if(A!==2)return!1;k(b);const O=_(b.currentPeek());return b.resetPeek(),O}function g(b,y){const{currentType:A}=y;if(A!==2)return!1;k(b);const O=b.currentPeek()==="-"?b.peek():b.currentPeek(),Y=w(O);return b.resetPeek(),Y}function C(b,y){const{currentType:A}=y;if(A!==2)return!1;k(b);const O=b.currentPeek()===Pd;return b.resetPeek(),O}function R(b,y){const{currentType:A}=y;if(A!==7)return!1;k(b);const O=b.currentPeek()===".";return b.resetPeek(),O}function T(b,y){const{currentType:A}=y;if(A!==8)return!1;k(b);const O=_(b.currentPeek());return b.resetPeek(),O}function B(b,y){const{currentType:A}=y;if(!(A===7||A===11))return!1;k(b);const O=b.currentPeek()===":";return b.resetPeek(),O}function D(b,y){const{currentType:A}=y;if(A!==9)return!1;const O=()=>{const V=b.currentPeek();return V==="{"?_(b.peek()):V==="@"||V==="|"||V===":"||V==="."||V===Ws||!V?!1:V===Me?(b.peek(),O()):lt(b,!1)},Y=O();return b.resetPeek(),Y}function z(b){k(b);const y=b.currentPeek()==="|";return b.resetPeek(),y}function lt(b,y=!0){const A=(Y=!1,V="")=>{const $=b.currentPeek();return $==="{"||$==="@"||!$?Y:$==="|"?!(V===Ws||V===Me):$===Ws?(b.peek(),A(!0,Ws)):$===Me?(b.peek(),A(!0,Me)):!0},O=A();return y&&b.resetPeek(),O}function it(b,y){const A=b.currentChar();return A===oi?oi:y(A)?(b.next(),A):null}function pt(b){const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function _t(b){return it(b,pt)}function kt(b){const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function X(b){return it(b,kt)}function J(b){const y=b.charCodeAt(0);return y>=48&&y<=57}function dt(b){return it(b,J)}function Q(b){const y=b.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Ct(b){return it(b,Q)}function Ue(b){let y="",A="";for(;y=dt(b);)A+=y;return A}function se(b){let y="";for(;;){const A=b.currentChar();if(A==="{"||A==="}"||A==="@"||A==="|"||!A)break;if(A===Ws||A===Me)if(lt(b))y+=A,b.next();else{if(z(b))break;y+=A,b.next()}else y+=A,b.next()}return y}function si(b){I(b);let y="",A="";for(;y=X(b);)A+=y;return b.currentChar()===oi&&u(Mt.UNTERMINATED_CLOSING_BRACE,o(),0),A}function Si(b){I(b);let y="";return b.currentChar()==="-"?(b.next(),y+=`-${Ue(b)}`):y+=Ue(b),b.currentChar()===oi&&u(Mt.UNTERMINATED_CLOSING_BRACE,o(),0),y}function Xi(b){return b!==Pd&&b!==Me}function ps(b){I(b),v(b,"'");let y="",A="";for(;y=it(b,Xi);)y==="\\"?A+=$s(b):A+=y;const O=b.currentChar();return O===Me||O===oi?(u(Mt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),O===Me&&(b.next(),v(b,"'")),A):(v(b,"'"),A)}function $s(b){const y=b.currentChar();switch(y){case"\\":case"'":return b.next(),`\\${y}`;case"u":return Ce(b,y,4);case"U":return Ce(b,y,6);default:return u(Mt.UNKNOWN_ESCAPE_SEQUENCE,o(),0,y),""}}function Ce(b,y,A){v(b,y);let O="";for(let Y=0;Y<A;Y++){const V=Ct(b);if(!V){u(Mt.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${y}${O}${b.currentChar()}`);break}O+=V}return`\\${y}${O}`}function ii(b){return b!=="{"&&b!=="}"&&b!==Ws&&b!==Me}function fs(b){I(b);let y="",A="";for(;y=it(b,ii);)A+=y;return A}function Ji(b){let y="",A="";for(;y=_t(b);)A+=y;return A}function x(b){const y=A=>{const O=b.currentChar();return O==="{"||O==="@"||O==="|"||O==="("||O===")"||!O||O===Ws?A:(A+=O,b.next(),y(A))};return y("")}function S(b){I(b);const y=v(b,"|");return I(b),y}function P(b,y){let A=null;switch(b.currentChar()){case"{":return y.braceNest>=1&&u(Mt.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),b.next(),A=p(y,2,"{"),I(b),y.braceNest++,A;case"}":return y.braceNest>0&&y.currentType===2&&u(Mt.EMPTY_PLACEHOLDER,o(),0),b.next(),A=p(y,3,"}"),y.braceNest--,y.braceNest>0&&I(b),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),A;case"@":return y.braceNest>0&&u(Mt.UNTERMINATED_CLOSING_BRACE,o(),0),A=U(b,y)||m(y),y.braceNest=0,A;default:{let Y=!0,V=!0,$=!0;if(z(b))return y.braceNest>0&&u(Mt.UNTERMINATED_CLOSING_BRACE,o(),0),A=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,A;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return u(Mt.UNTERMINATED_CLOSING_BRACE,o(),0),y.braceNest=0,N(b,y);if(Y=E(b,y))return A=p(y,4,si(b)),I(b),A;if(V=g(b,y))return A=p(y,5,Si(b)),I(b),A;if($=C(b,y))return A=p(y,6,ps(b)),I(b),A;if(!Y&&!V&&!$)return A=p(y,12,fs(b)),u(Mt.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,A.value),I(b),A;break}}return A}function U(b,y){const{currentType:A}=y;let O=null;const Y=b.currentChar();switch((A===7||A===8||A===11||A===9)&&(Y===Me||Y===Ws)&&u(Mt.INVALID_LINKED_FORMAT,o(),0),Y){case"@":return b.next(),O=p(y,7,"@"),y.inLinked=!0,O;case".":return I(b),b.next(),p(y,8,".");case":":return I(b),b.next(),p(y,9,":");default:return z(b)?(O=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,O):R(b,y)||B(b,y)?(I(b),U(b,y)):T(b,y)?(I(b),p(y,11,Ji(b))):D(b,y)?(I(b),Y==="{"?P(b,y)||O:p(y,10,x(b))):(A===7&&u(Mt.INVALID_LINKED_FORMAT,o(),0),y.braceNest=0,y.inLinked=!1,N(b,y))}}function N(b,y){let A={type:13};if(y.braceNest>0)return P(b,y)||m(y);if(y.inLinked)return U(b,y)||m(y);switch(b.currentChar()){case"{":return P(b,y)||m(y);case"}":return u(Mt.UNBALANCED_CLOSING_BRACE,o(),0),b.next(),p(y,3,"}");case"@":return U(b,y)||m(y);default:{if(z(b))return A=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,A;if(lt(b))return p(y,0,se(b));break}}return A}function H(){const{currentType:b,offset:y,startLoc:A,endLoc:O}=l;return l.lastType=b,l.lastOffset=y,l.lastStartLoc=A,l.lastEndLoc=O,l.offset=r(),l.startLoc=o(),i.currentChar()===oi?p(l,13):N(i,l)}return{nextToken:H,currentOffset:r,currentPosition:o,context:d}}const y2="parser",v2=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function _2(t,e,s){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||s,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function w2(t={}){const e=t.location!==!1,{onError:s}=t;function i(_,w,E,g,...C){const R=_.currentPosition();if(R.offset+=g,R.column+=g,s){const T=e?rl(E,R):null,B=Jn(w,T,{domain:y2,args:C});s(B)}}function r(_,w,E){const g={type:_};return e&&(g.start=w,g.end=w,g.loc={start:E,end:E}),g}function o(_,w,E,g){e&&(_.end=w,_.loc&&(_.loc.end=E))}function n(_,w){const E=_.context(),g=r(3,E.offset,E.startLoc);return g.value=w,o(g,_.currentOffset(),_.currentPosition()),g}function a(_,w){const E=_.context(),{lastOffset:g,lastStartLoc:C}=E,R=r(5,g,C);return R.index=parseInt(w,10),_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function l(_,w){const E=_.context(),{lastOffset:g,lastStartLoc:C}=E,R=r(4,g,C);return R.key=w,_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function d(_,w){const E=_.context(),{lastOffset:g,lastStartLoc:C}=E,R=r(9,g,C);return R.value=w.replace(v2,_2),_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function h(_){const w=_.nextToken(),E=_.context(),{lastOffset:g,lastStartLoc:C}=E,R=r(8,g,C);return w.type!==11?(i(_,Mt.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),R.value="",o(R,g,C),{nextConsumeToken:w,node:R}):(w.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Ts(w)),R.value=w.value||"",o(R,_.currentOffset(),_.currentPosition()),{node:R})}function u(_,w){const E=_.context(),g=r(7,E.offset,E.startLoc);return g.value=w,o(g,_.currentOffset(),_.currentPosition()),g}function p(_){const w=_.context(),E=r(6,w.offset,w.startLoc);let g=_.nextToken();if(g.type===8){const C=h(_);E.modifier=C.node,g=C.nextConsumeToken||_.nextToken()}switch(g.type!==9&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(g)),g=_.nextToken(),g.type===2&&(g=_.nextToken()),g.type){case 10:g.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(g)),E.key=u(_,g.value||"");break;case 4:g.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(g)),E.key=l(_,g.value||"");break;case 5:g.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(g)),E.key=a(_,g.value||"");break;case 6:g.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(g)),E.key=d(_,g.value||"");break;default:{i(_,Mt.UNEXPECTED_EMPTY_LINKED_KEY,w.lastStartLoc,0);const C=_.context(),R=r(7,C.offset,C.startLoc);return R.value="",o(R,C.offset,C.startLoc),E.key=R,o(E,C.offset,C.startLoc),{nextConsumeToken:g,node:E}}}return o(E,_.currentOffset(),_.currentPosition()),{node:E}}function m(_){const w=_.context(),E=w.currentType===1?_.currentOffset():w.offset,g=w.currentType===1?w.endLoc:w.startLoc,C=r(2,E,g);C.items=[];let R=null;do{const D=R||_.nextToken();switch(R=null,D.type){case 0:D.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(n(_,D.value||""));break;case 5:D.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(a(_,D.value||""));break;case 4:D.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(l(_,D.value||""));break;case 6:D.value==null&&i(_,Mt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(d(_,D.value||""));break;case 7:{const z=p(_);C.items.push(z.node),R=z.nextConsumeToken||null;break}}}while(w.currentType!==13&&w.currentType!==1);const T=w.currentType===1?w.lastOffset:_.currentOffset(),B=w.currentType===1?w.lastEndLoc:_.currentPosition();return o(C,T,B),C}function v(_,w,E,g){const C=_.context();let R=g.items.length===0;const T=r(1,w,E);T.cases=[],T.cases.push(g);do{const B=m(_);R||(R=B.items.length===0),T.cases.push(B)}while(C.currentType!==13);return R&&i(_,Mt.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),o(T,_.currentOffset(),_.currentPosition()),T}function k(_){const w=_.context(),{offset:E,startLoc:g}=w,C=m(_);return w.currentType===13?C:v(_,E,g,C)}function I(_){const w=b2(_,pe({},t)),E=w.context(),g=r(0,E.offset,E.startLoc);return e&&g.loc&&(g.loc.source=_),g.body=k(w),t.onCacheKey&&(g.cacheKey=t.onCacheKey(_)),E.currentType!==13&&i(w,Mt.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,_[E.offset]||""),o(g,w.currentOffset(),w.currentPosition()),g}return{parse:I}}function Ts(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function x2(t,e={}){const s={ast:t,helpers:new Set};return{context:()=>s,helper:o=>(s.helpers.add(o),o)}}function Md(t,e){for(let s=0;s<t.length;s++)sc(t[s],e)}function sc(t,e){switch(t.type){case 1:Md(t.cases,e),e.helper("plural");break;case 2:Md(t.items,e);break;case 6:{sc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function k2(t,e={}){const s=x2(t);s.helper("normalize"),t.body&&sc(t.body,s);const i=s.context();t.helpers=Array.from(i.helpers)}function C2(t){const e=t.body;return e.type===2?Dd(e):e.cases.forEach(s=>Dd(s)),t}function Dd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let s=0;s<t.items.length;s++){const i=t.items[s];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=ec(e);for(let s=0;s<t.items.length;s++){const i=t.items[s];(i.type===3||i.type===9)&&delete i.value}}}}function or(t){switch(t.t=t.type,t.type){case 0:{const e=t;or(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,s=e.cases;for(let i=0;i<s.length;i++)or(s[i]);e.c=s,delete e.cases;break}case 2:{const e=t,s=e.items;for(let i=0;i<s.length;i++)or(s[i]);e.i=s,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;or(e.key),e.k=e.key,delete e.key,e.modifier&&(or(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function S2(t,e){const{filename:s,breakLineCode:i,needIndent:r}=e,o=e.location!==!1,n={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};o&&t.loc&&(n.source=t.loc.source);const a=()=>n;function l(k,I){n.code+=k}function d(k,I=!0){const _=I?i:"";l(r?_+"  ".repeat(k):_)}function h(k=!0){const I=++n.indentLevel;k&&d(I)}function u(k=!0){const I=--n.indentLevel;k&&d(I)}function p(){d(n.indentLevel)}return{context:a,push:l,indent:h,deindent:u,newline:p,helper:k=>`_${k}`,needIndent:()=>n.needIndent}}function E2(t,e){const{helper:s}=t;t.push(`${s("linked")}(`),br(t,e.key),e.modifier?(t.push(", "),br(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function $2(t,e){const{helper:s,needIndent:i}=t;t.push(`${s("normalize")}([`),t.indent(i());const r=e.items.length;for(let o=0;o<r&&(br(t,e.items[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}function A2(t,e){const{helper:s,needIndent:i}=t;if(e.cases.length>1){t.push(`${s("plural")}([`),t.indent(i());const r=e.cases.length;for(let o=0;o<r&&(br(t,e.cases[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}}function T2(t,e){e.body?br(t,e.body):t.push("null")}function br(t,e){const{helper:s}=t;switch(e.type){case 0:T2(t,e);break;case 1:A2(t,e);break;case 2:$2(t,e);break;case 6:E2(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${s("interpolate")}(${s("list")}(${e.index}))`,e);break;case 4:t.push(`${s("interpolate")}(${s("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const I2=(t,e={})=>{const s=tt(e.mode)?e.mode:"normal",i=tt(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:s==="arrow"?";":`
`,o=e.needIndent?e.needIndent:s!=="arrow",n=t.helpers||[],a=S2(t,{filename:i,breakLineCode:r,needIndent:o});a.push(s==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(o),n.length>0&&(a.push(`const { ${ec(n.map(h=>`${h}: _${h}`),", ")} } = ctx`),a.newline()),a.push("return "),br(a,t),a.deindent(o),a.push("}"),delete t.helpers;const{code:l,map:d}=a.context();return{ast:t,code:l,map:d?d.toJSON():void 0}};function L2(t,e={}){const s=pe({},e),i=!!s.jit,r=!!s.minify,o=s.optimize==null?!0:s.optimize,a=w2(s).parse(t);return i?(o&&C2(a),r&&or(a),{ast:a,code:""}):(k2(a,s),I2(a,s))}/*!
  * core-base v11.1.1
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function O2(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Zl().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ea(t){return s=>R2(s,t)}function R2(t,e){const s=M2(e);if(s==null)throw ho(0);if(ic(s)===1){const o=z2(s);return t.plural(o.reduce((n,a)=>[...n,zd(t,a)],[]))}else return zd(t,s)}const P2=["b","body"];function M2(t){return ki(t,P2)}const D2=["c","cases"];function z2(t){return ki(t,D2,[])}function zd(t,e){const s=N2(e);if(s!=null)return t.type==="text"?s:t.normalize([s]);{const i=B2(e).reduce((r,o)=>[...r,ol(t,o)],[]);return t.normalize(i)}}const V2=["s","static"];function N2(t){return ki(t,V2)}const F2=["i","items"];function B2(t){return ki(t,F2,[])}function ol(t,e){const s=ic(e);switch(s){case 3:return qo(e,s);case 9:return qo(e,s);case 4:{const i=e;if(ms(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(ms(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw ho(s)}case 5:{const i=e;if(ms(i,"i")&&ne(i.i))return t.interpolate(t.list(i.i));if(ms(i,"index")&&ne(i.index))return t.interpolate(t.list(i.index));throw ho(s)}case 6:{const i=e,r=W2(i),o=q2(i);return t.linked(ol(t,o),r?ol(t,r):void 0,t.type)}case 7:return qo(e,s);case 8:return qo(e,s);default:throw new Error(`unhandled node on format message part: ${s}`)}}const U2=["t","type"];function ic(t){return ki(t,U2)}const H2=["v","value"];function qo(t,e){const s=ki(t,H2);if(s)return s;throw ho(e)}const j2=["m","modifier"];function W2(t){return ki(t,j2)}const K2=["k","key"];function q2(t){const e=ki(t,K2);if(e)return e;throw ho(6)}function ki(t,e,s){for(let i=0;i<e.length;i++){const r=e[i];if(ms(t,r)&&t[r]!=null)return t[r]}return s}function ho(t){return new Error(`unhandled node type: ${t}`)}const G2=t=>t;let Go=Dt();function yr(t){return It(t)&&ic(t)===0&&(ms(t,"b")||ms(t,"body"))}function Y2(t,e={}){let s=!1;const i=e.onError||d2;return e.onError=r=>{s=!0,i(r)},{...L2(t,e),detectError:s}}function X2(t,e){if(tt(t)){Yt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||G2)(t),r=Go[i];if(r)return r;const{ast:o,detectError:n}=Y2(t,{...e,location:!1,jit:!0}),a=Ea(o);return n?a:Go[i]=a}else{const s=t.cacheKey;if(s){const i=Go[s];return i||(Go[s]=Ea(t))}else return Ea(t)}}let po=null;function J2(t){po=t}function Q2(t,e,s){po&&po.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:s})}const Z2=tk("function:translate");function tk(t){return e=>po&&po.emit(t,e)}const Ys={INVALID_ARGUMENT:c2,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},ek=24;function Xs(t){return Jn(t,null,void 0)}function rc(t,e){return e.locale!=null?Vd(e.locale):Vd(t.locale)}let $a;function Vd(t){if(tt(t))return t;if(Gt(t)){if(t.resolvedOnce&&$a!=null)return $a;if(t.constructor.name==="Function"){const e=t();if(o2(e))throw Xs(Ys.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return $a=e}else throw Xs(Ys.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Xs(Ys.NOT_SUPPORT_LOCALE_TYPE)}function sk(t,e,s){return[...new Set([s,...le(e)?e:It(e)?Object.keys(e):tt(e)?[e]:[s]])]}function vp(t,e,s){const i=tt(s)?s:$n,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let o=r.__localeChainCache.get(i);if(!o){o=[];let n=[s];for(;le(n);)n=Nd(o,n,e);const a=le(e)||!Et(e)?e:e.default?e.default:null;n=tt(a)?[a]:a,le(n)&&Nd(o,n,!1),r.__localeChainCache.set(i,o)}return o}function Nd(t,e,s){let i=!0;for(let r=0;r<e.length&&Yt(i);r++){const o=e[r];tt(o)&&(i=ik(t,e[r],s))}return i}function ik(t,e,s){let i;const r=e.split("-");do{const o=r.join("-");i=rk(t,o,s),r.splice(-1,1)}while(r.length&&i===!0);return i}function rk(t,e,s){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(le(s)||Et(s))&&s[r]&&(i=s[r])}return i}const Ci=[];Ci[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ci[1]={w:[1],".":[2],"[":[4],o:[7]};Ci[2]={w:[2],i:[3,0],0:[3,0]};Ci[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ci[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ci[5]={"'":[4,0],o:8,l:[5,0]};Ci[6]={'"':[4,0],o:8,l:[6,0]};const ok=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function nk(t){return ok.test(t)}function ak(t){const e=t.charCodeAt(0),s=t.charCodeAt(t.length-1);return e===s&&(e===34||e===39)?t.slice(1,-1):t}function lk(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ck(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:nk(e)?ak(e):"*"+e}function dk(t){const e=[];let s=-1,i=0,r=0,o,n,a,l,d,h,u;const p=[];p[0]=()=>{n===void 0?n=a:n+=a},p[1]=()=>{n!==void 0&&(e.push(n),n=void 0)},p[2]=()=>{p[0](),r++},p[3]=()=>{if(r>0)r--,i=4,p[0]();else{if(r=0,n===void 0||(n=ck(n),n===!1))return!1;p[1]()}};function m(){const v=t[s+1];if(i===5&&v==="'"||i===6&&v==='"')return s++,a="\\"+v,p[0](),!0}for(;i!==null;)if(s++,o=t[s],!(o==="\\"&&m())){if(l=lk(o),u=Ci[i],d=u[l]||u.l||8,d===8||(i=d[0],d[1]!==void 0&&(h=p[d[1]],h&&(a=o,h()===!1))))return;if(i===7)return e}}const Fd=new Map;function uk(t,e){return It(t)?t[e]:null}function hk(t,e){if(!It(t))return null;let s=Fd.get(e);if(s||(s=dk(e),s&&Fd.set(e,s)),!s)return null;const i=s.length;let r=t,o=0;for(;o<i;){const n=r[s[o]];if(n===void 0||Gt(r))return null;r=n,o++}return r}const pk="11.1.1",Qn=-1,$n="en-US",Bd="",Ud=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function fk(){return{upper:(t,e)=>e==="text"&&tt(t)?t.toUpperCase():e==="vnode"&&It(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&tt(t)?t.toLowerCase():e==="vnode"&&It(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&tt(t)?Ud(t):e==="vnode"&&It(t)&&"__v_isVNode"in t?Ud(t.children):t}}let _p;function mk(t){_p=t}let wp;function gk(t){wp=t}let xp;function bk(t){xp=t}let kp=null;const yk=t=>{kp=t},vk=()=>kp;let Cp=null;const Hd=t=>{Cp=t},_k=()=>Cp;let jd=0;function wk(t={}){const e=Gt(t.onWarn)?t.onWarn:a2,s=tt(t.version)?t.version:pk,i=tt(t.locale)||Gt(t.locale)?t.locale:$n,r=Gt(i)?$n:i,o=le(t.fallbackLocale)||Et(t.fallbackLocale)||tt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,n=Et(t.messages)?t.messages:Aa(r),a=Et(t.datetimeFormats)?t.datetimeFormats:Aa(r),l=Et(t.numberFormats)?t.numberFormats:Aa(r),d=pe(Dt(),t.modifiers,fk()),h=t.pluralRules||Dt(),u=Gt(t.missing)?t.missing:null,p=Yt(t.missingWarn)||En(t.missingWarn)?t.missingWarn:!0,m=Yt(t.fallbackWarn)||En(t.fallbackWarn)?t.fallbackWarn:!0,v=!!t.fallbackFormat,k=!!t.unresolving,I=Gt(t.postTranslation)?t.postTranslation:null,_=Et(t.processor)?t.processor:null,w=Yt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,g=Gt(t.messageCompiler)?t.messageCompiler:_p,C=Gt(t.messageResolver)?t.messageResolver:wp||uk,R=Gt(t.localeFallbacker)?t.localeFallbacker:xp||sk,T=It(t.fallbackContext)?t.fallbackContext:void 0,B=t,D=It(B.__datetimeFormatters)?B.__datetimeFormatters:new Map,z=It(B.__numberFormatters)?B.__numberFormatters:new Map,lt=It(B.__meta)?B.__meta:{};jd++;const it={version:s,cid:jd,locale:i,fallbackLocale:o,messages:n,modifiers:d,pluralRules:h,missing:u,missingWarn:p,fallbackWarn:m,fallbackFormat:v,unresolving:k,postTranslation:I,processor:_,warnHtmlMessage:w,escapeParameter:E,messageCompiler:g,messageResolver:C,localeFallbacker:R,fallbackContext:T,onWarn:e,__meta:lt};return it.datetimeFormats=a,it.numberFormats=l,it.__datetimeFormatters=D,it.__numberFormatters=z,__INTLIFY_PROD_DEVTOOLS__&&Q2(it,s,lt),it}const Aa=t=>({[t]:Dt()});function oc(t,e,s,i,r){const{missing:o,onWarn:n}=t;if(o!==null){const a=o(t,s,e,r);return tt(a)?a:e}else return e}function Vr(t,e,s){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,s,e)}function xk(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function kk(t,e){const s=e.indexOf(t);if(s===-1)return!1;for(let i=s+1;i<e.length;i++)if(xk(t,e[i]))return!0;return!1}function Wd(t,...e){const{datetimeFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__datetimeFormatters:a}=t,[l,d,h,u]=nl(...e),p=Yt(h.missingWarn)?h.missingWarn:t.missingWarn;Yt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const m=!!h.part,v=rc(t,h),k=n(t,r,v);if(!tt(l)||l==="")return new Intl.DateTimeFormat(v,u).format(d);let I={},_,w=null;const E="datetime format";for(let R=0;R<k.length&&(_=k[R],I=s[_]||{},w=I[l],!Et(w));R++)oc(t,l,_,p,E);if(!Et(w)||!tt(_))return i?Qn:l;let g=`${_}__${l}`;Xn(u)||(g=`${g}__${JSON.stringify(u)}`);let C=a.get(g);return C||(C=new Intl.DateTimeFormat(_,pe({},w,u)),a.set(g,C)),m?C.formatToParts(d):C.format(d)}const Sp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function nl(...t){const[e,s,i,r]=t,o=Dt();let n=Dt(),a;if(tt(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Xs(Ys.INVALID_ISO_DATE_ARGUMENT);const d=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(d);try{a.toISOString()}catch{throw Xs(Ys.INVALID_ISO_DATE_ARGUMENT)}}else if(s2(e)){if(isNaN(e.getTime()))throw Xs(Ys.INVALID_DATE_ARGUMENT);a=e}else if(ne(e))a=e;else throw Xs(Ys.INVALID_ARGUMENT);return tt(s)?o.key=s:Et(s)&&Object.keys(s).forEach(l=>{Sp.includes(l)?n[l]=s[l]:o[l]=s[l]}),tt(i)?o.locale=i:Et(i)&&(n=i),Et(r)&&(n=r),[o.key||"",a,o,n]}function Kd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__datetimeFormatters.has(o)&&i.__datetimeFormatters.delete(o)}}function qd(t,...e){const{numberFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__numberFormatters:a}=t,[l,d,h,u]=al(...e),p=Yt(h.missingWarn)?h.missingWarn:t.missingWarn;Yt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const m=!!h.part,v=rc(t,h),k=n(t,r,v);if(!tt(l)||l==="")return new Intl.NumberFormat(v,u).format(d);let I={},_,w=null;const E="number format";for(let R=0;R<k.length&&(_=k[R],I=s[_]||{},w=I[l],!Et(w));R++)oc(t,l,_,p,E);if(!Et(w)||!tt(_))return i?Qn:l;let g=`${_}__${l}`;Xn(u)||(g=`${g}__${JSON.stringify(u)}`);let C=a.get(g);return C||(C=new Intl.NumberFormat(_,pe({},w,u)),a.set(g,C)),m?C.formatToParts(d):C.format(d)}const Ep=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function al(...t){const[e,s,i,r]=t,o=Dt();let n=Dt();if(!ne(e))throw Xs(Ys.INVALID_ARGUMENT);const a=e;return tt(s)?o.key=s:Et(s)&&Object.keys(s).forEach(l=>{Ep.includes(l)?n[l]=s[l]:o[l]=s[l]}),tt(i)?o.locale=i:Et(i)&&(n=i),Et(r)&&(n=r),[o.key||"",a,o,n]}function Gd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__numberFormatters.has(o)&&i.__numberFormatters.delete(o)}}const Ck=t=>t,Sk=t=>"",Ek="text",$k=t=>t.length===0?"":ec(t),Ak=n2;function Yd(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Tk(t){const e=ne(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(ne(t.named.count)||ne(t.named.n))?ne(t.named.count)?t.named.count:ne(t.named.n)?t.named.n:e:e}function Ik(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Lk(t={}){const e=t.locale,s=Tk(t),i=It(t.pluralRules)&&tt(e)&&Gt(t.pluralRules[e])?t.pluralRules[e]:Yd,r=It(t.pluralRules)&&tt(e)&&Gt(t.pluralRules[e])?Yd:void 0,o=_=>_[i(s,_.length,r)],n=t.list||[],a=_=>n[_],l=t.named||Dt();ne(t.pluralIndex)&&Ik(s,l);const d=_=>l[_];function h(_,w){const E=Gt(t.messages)?t.messages(_,!!w):It(t.messages)?t.messages[_]:!1;return E||(t.parent?t.parent.message(_):Sk)}const u=_=>t.modifiers?t.modifiers[_]:Ck,p=Et(t.processor)&&Gt(t.processor.normalize)?t.processor.normalize:$k,m=Et(t.processor)&&Gt(t.processor.interpolate)?t.processor.interpolate:Ak,v=Et(t.processor)&&tt(t.processor.type)?t.processor.type:Ek,I={list:a,named:d,plural:o,linked:(_,...w)=>{const[E,g]=w;let C="text",R="";w.length===1?It(E)?(R=E.modifier||R,C=E.type||C):tt(E)&&(R=E||R):w.length===2&&(tt(E)&&(R=E||R),tt(g)&&(C=g||C));const T=h(_,!0)(I),B=C==="vnode"&&le(T)&&R?T[0]:T;return R?u(R)(B,C):B},message:h,type:v,interpolate:m,normalize:p,values:pe(Dt(),n,l)};return I}const Xd=()=>"",cs=t=>Gt(t);function Jd(t,...e){const{fallbackFormat:s,postTranslation:i,unresolving:r,messageCompiler:o,fallbackLocale:n,messages:a}=t,[l,d]=ll(...e),h=Yt(d.missingWarn)?d.missingWarn:t.missingWarn,u=Yt(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn,p=Yt(d.escapeParameter)?d.escapeParameter:t.escapeParameter,m=!!d.resolvedMessage,v=tt(d.default)||Yt(d.default)?Yt(d.default)?o?l:()=>l:d.default:s?o?l:()=>l:null,k=s||v!=null&&(tt(v)||Gt(v)),I=rc(t,d);p&&Ok(d);let[_,w,E]=m?[l,I,a[I]||Dt()]:$p(t,l,I,n,u,h),g=_,C=l;if(!m&&!(tt(g)||yr(g)||cs(g))&&k&&(g=v,C=g),!m&&(!(tt(g)||yr(g)||cs(g))||!tt(w)))return r?Qn:l;let R=!1;const T=()=>{R=!0},B=cs(g)?g:Ap(t,l,w,g,C,T);if(R)return g;const D=Mk(t,w,E,d),z=Lk(D),lt=Rk(t,B,z),it=i?i(lt,l):lt;if(__INTLIFY_PROD_DEVTOOLS__){const pt={timestamp:Date.now(),key:tt(l)?l:cs(g)?g.key:"",locale:w||(cs(g)?g.locale:""),format:tt(g)?g:cs(g)?g.source:"",message:it};pt.meta=pe({},t.__meta,vk()||{}),Z2(pt)}return it}function Ok(t){le(t.list)?t.list=t.list.map(e=>tt(e)?Rd(e):e):It(t.named)&&Object.keys(t.named).forEach(e=>{tt(t.named[e])&&(t.named[e]=Rd(t.named[e]))})}function $p(t,e,s,i,r,o){const{messages:n,onWarn:a,messageResolver:l,localeFallbacker:d}=t,h=d(t,i,s);let u=Dt(),p,m=null;const v="translate";for(let k=0;k<h.length&&(p=h[k],u=n[p]||Dt(),(m=l(u,e))===null&&(m=u[e]),!(tt(m)||yr(m)||cs(m)));k++)if(!kk(p,h)){const I=oc(t,e,p,o,v);I!==e&&(m=I)}return[m,p,u]}function Ap(t,e,s,i,r,o){const{messageCompiler:n,warnHtmlMessage:a}=t;if(cs(i)){const d=i;return d.locale=d.locale||s,d.key=d.key||e,d}if(n==null){const d=()=>i;return d.locale=s,d.key=e,d}const l=n(i,Pk(t,s,r,i,a,o));return l.locale=s,l.key=e,l.source=i,l}function Rk(t,e,s){return e(s)}function ll(...t){const[e,s,i]=t,r=Dt();if(!tt(e)&&!ne(e)&&!cs(e)&&!yr(e))throw Xs(Ys.INVALID_ARGUMENT);const o=ne(e)?String(e):(cs(e),e);return ne(s)?r.plural=s:tt(s)?r.default=s:Et(s)&&!Xn(s)?r.named=s:le(s)&&(r.list=s),ne(i)?r.plural=i:tt(i)?r.default=i:Et(i)&&pe(r,i),[o,r]}function Pk(t,e,s,i,r,o){return{locale:e,key:s,warnHtmlMessage:r,onError:n=>{throw o&&o(n),n},onCacheKey:n=>t2(e,s,n)}}function Mk(t,e,s,i){const{modifiers:r,pluralRules:o,messageResolver:n,fallbackLocale:a,fallbackWarn:l,missingWarn:d,fallbackContext:h}=t,p={locale:e,modifiers:r,pluralRules:o,messages:(m,v)=>{let k=n(s,m);if(k==null&&(h||v)){const[,,I]=$p(h||t,m,e,a,l,d);k=n(I,m)}if(tt(k)||yr(k)){let I=!1;const w=Ap(t,m,e,k,m,()=>{I=!0});return I?Xd:w}else return cs(k)?k:Xd}};return t.processor&&(p.processor=t.processor),i.list&&(p.list=i.list),i.named&&(p.named=i.named),ne(i.plural)&&(p.pluralIndex=i.plural),p}O2();/*!
  * vue-i18n v11.1.1
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Dk="11.1.1";function zk(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Zl().__INTLIFY_PROD_DEVTOOLS__=!1)}const us={UNEXPECTED_RETURN_TYPE:ek,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function vs(t,...e){return Jn(t,null,void 0)}const cl=xi("__translateVNode"),dl=xi("__datetimeParts"),ul=xi("__numberParts"),Vk=xi("__setPluralRules"),Nk=xi("__injectWithOption"),hl=xi("__dispose");function fo(t){if(!It(t))return t;for(const e in t)if(ms(t,e))if(!e.includes("."))It(t[e])&&fo(t[e]);else{const s=e.split("."),i=s.length-1;let r=t,o=!1;for(let n=0;n<i;n++){if(s[n]in r||(r[s[n]]=Dt()),!It(r[s[n]])){o=!0;break}r=r[s[n]]}o||(r[s[i]]=t[e],delete t[e]),It(r[s[i]])&&fo(r[s[i]])}return t}function Tp(t,e){const{messages:s,__i18n:i,messageResolver:r,flatJson:o}=e,n=Et(s)?s:le(i)?Dt():{[t]:Dt()};if(le(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:d}=a;l?(n[l]=n[l]||Dt(),en(d,n[l])):en(d,n)}else tt(a)&&en(JSON.parse(a),n)}),r==null&&o)for(const a in n)ms(n,a)&&fo(n[a]);return n}function Ip(t){return t.type}function Fk(t,e,s){let i=It(e.messages)?e.messages:Dt();"__i18nGlobal"in s&&(i=Tp(t.locale.value,{messages:i,__i18n:s.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(o=>{t.mergeLocaleMessage(o,i[o])});{if(It(e.datetimeFormats)){const o=Object.keys(e.datetimeFormats);o.length&&o.forEach(n=>{t.mergeDateTimeFormat(n,e.datetimeFormats[n])})}if(It(e.numberFormats)){const o=Object.keys(e.numberFormats);o.length&&o.forEach(n=>{t.mergeNumberFormat(n,e.numberFormats[n])})}}}function Qd(t){return Ut(Ao,null,t,0)}const Zd="__INTLIFY_META__",tu=()=>[],Bk=()=>!1;let eu=0;function su(t){return(e,s,i,r)=>t(s,i,Yl()||void 0,r)}const Uk=()=>{const t=Yl();let e=null;return t&&(e=Ip(t)[Zd])?{[Zd]:e}:null};function Lp(t={}){const{__root:e,__injectWithOption:s}=t,i=e===void 0,r=t.flatJson,o=Sn?Ht:Py;let n=Yt(t.inheritLocale)?t.inheritLocale:!0;const a=o(e&&n?e.locale.value:tt(t.locale)?t.locale:$n),l=o(e&&n?e.fallbackLocale.value:tt(t.fallbackLocale)||le(t.fallbackLocale)||Et(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),d=o(Tp(a.value,t)),h=o(Et(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=o(Et(t.numberFormats)?t.numberFormats:{[a.value]:{}});let p=e?e.missingWarn:Yt(t.missingWarn)||En(t.missingWarn)?t.missingWarn:!0,m=e?e.fallbackWarn:Yt(t.fallbackWarn)||En(t.fallbackWarn)?t.fallbackWarn:!0,v=e?e.fallbackRoot:Yt(t.fallbackRoot)?t.fallbackRoot:!0,k=!!t.fallbackFormat,I=Gt(t.missing)?t.missing:null,_=Gt(t.missing)?su(t.missing):null,w=Gt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:Yt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter;const C=e?e.modifiers:Et(t.modifiers)?t.modifiers:{};let R=t.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&Hd(null);const $={version:Dk,locale:a.value,fallbackLocale:l.value,messages:d.value,modifiers:C,pluralRules:R,missing:_===null?void 0:_,missingWarn:p,fallbackWarn:m,fallbackFormat:k,unresolving:!0,postTranslation:w===null?void 0:w,warnHtmlMessage:E,escapeParameter:g,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};$.datetimeFormats=h.value,$.numberFormats=u.value,$.__datetimeFormatters=Et(T)?T.__datetimeFormatters:void 0,$.__numberFormatters=Et(T)?T.__numberFormatters:void 0;const M=wk($);return i&&Hd(M),M})(),Vr(T,a.value,l.value);function D(){return[a.value,l.value,d.value,h.value,u.value]}const z=Nt({get:()=>a.value,set:$=>{T.locale=$,a.value=$}}),lt=Nt({get:()=>l.value,set:$=>{T.fallbackLocale=$,l.value=$,Vr(T,a.value,$)}}),it=Nt(()=>d.value),pt=Nt(()=>h.value),_t=Nt(()=>u.value);function kt(){return Gt(w)?w:null}function X($){w=$,T.postTranslation=$}function J(){return I}function dt($){$!==null&&(_=su($)),I=$,T.missing=_}const Q=($,M,Z,ct,vt,ie)=>{D();let qt;try{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=e?_k():void 0),qt=$(T)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=void 0)}if(Z!=="translate exists"&&ne(qt)&&qt===Qn||Z==="translate exists"&&!qt){const[Oe,qe]=M();return e&&v?ct(e):vt(Oe)}else{if(ie(qt))return qt;throw vs(us.UNEXPECTED_RETURN_TYPE)}};function Ct(...$){return Q(M=>Reflect.apply(Jd,null,[M,...$]),()=>ll(...$),"translate",M=>Reflect.apply(M.t,M,[...$]),M=>M,M=>tt(M))}function Ue(...$){const[M,Z,ct]=$;if(ct&&!It(ct))throw vs(us.INVALID_ARGUMENT);return Ct(M,Z,pe({resolvedMessage:!0},ct||{}))}function se(...$){return Q(M=>Reflect.apply(Wd,null,[M,...$]),()=>nl(...$),"datetime format",M=>Reflect.apply(M.d,M,[...$]),()=>Bd,M=>tt(M))}function si(...$){return Q(M=>Reflect.apply(qd,null,[M,...$]),()=>al(...$),"number format",M=>Reflect.apply(M.n,M,[...$]),()=>Bd,M=>tt(M))}function Si($){return $.map(M=>tt(M)||ne(M)||Yt(M)?Qd(String(M)):M)}const ps={normalize:Si,interpolate:$=>$,type:"vnode"};function $s(...$){return Q(M=>{let Z;const ct=M;try{ct.processor=ps,Z=Reflect.apply(Jd,null,[ct,...$])}finally{ct.processor=null}return Z},()=>ll(...$),"translate",M=>M[cl](...$),M=>[Qd(M)],M=>le(M))}function Ce(...$){return Q(M=>Reflect.apply(qd,null,[M,...$]),()=>al(...$),"number format",M=>M[ul](...$),tu,M=>tt(M)||le(M))}function ii(...$){return Q(M=>Reflect.apply(Wd,null,[M,...$]),()=>nl(...$),"datetime format",M=>M[dl](...$),tu,M=>tt(M)||le(M))}function fs($){R=$,T.pluralRules=R}function Ji($,M){return Q(()=>{if(!$)return!1;const Z=tt(M)?M:a.value,ct=P(Z),vt=T.messageResolver(ct,$);return yr(vt)||cs(vt)||tt(vt)},()=>[$],"translate exists",Z=>Reflect.apply(Z.te,Z,[$,M]),Bk,Z=>Yt(Z))}function x($){let M=null;const Z=vp(T,l.value,a.value);for(let ct=0;ct<Z.length;ct++){const vt=d.value[Z[ct]]||{},ie=T.messageResolver(vt,$);if(ie!=null){M=ie;break}}return M}function S($){const M=x($);return M??(e?e.tm($)||{}:{})}function P($){return d.value[$]||{}}function U($,M){if(r){const Z={[$]:M};for(const ct in Z)ms(Z,ct)&&fo(Z[ct]);M=Z[$]}d.value[$]=M,T.messages=d.value}function N($,M){d.value[$]=d.value[$]||{};const Z={[$]:M};if(r)for(const ct in Z)ms(Z,ct)&&fo(Z[ct]);M=Z[$],en(M,d.value[$]),T.messages=d.value}function H($){return h.value[$]||{}}function b($,M){h.value[$]=M,T.datetimeFormats=h.value,Kd(T,$,M)}function y($,M){h.value[$]=pe(h.value[$]||{},M),T.datetimeFormats=h.value,Kd(T,$,M)}function A($){return u.value[$]||{}}function O($,M){u.value[$]=M,T.numberFormats=u.value,Gd(T,$,M)}function Y($,M){u.value[$]=pe(u.value[$]||{},M),T.numberFormats=u.value,Gd(T,$,M)}eu++,e&&Sn&&(zi(e.locale,$=>{n&&(a.value=$,T.locale=$,Vr(T,a.value,l.value))}),zi(e.fallbackLocale,$=>{n&&(l.value=$,T.fallbackLocale=$,Vr(T,a.value,l.value))}));const V={id:eu,locale:z,fallbackLocale:lt,get inheritLocale(){return n},set inheritLocale($){n=$,$&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Vr(T,a.value,l.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:it,get modifiers(){return C},get pluralRules(){return R||{}},get isGlobal(){return i},get missingWarn(){return p},set missingWarn($){p=$,T.missingWarn=p},get fallbackWarn(){return m},set fallbackWarn($){m=$,T.fallbackWarn=m},get fallbackRoot(){return v},set fallbackRoot($){v=$},get fallbackFormat(){return k},set fallbackFormat($){k=$,T.fallbackFormat=k},get warnHtmlMessage(){return E},set warnHtmlMessage($){E=$,T.warnHtmlMessage=$},get escapeParameter(){return g},set escapeParameter($){g=$,T.escapeParameter=$},t:Ct,getLocaleMessage:P,setLocaleMessage:U,mergeLocaleMessage:N,getPostTranslationHandler:kt,setPostTranslationHandler:X,getMissingHandler:J,setMissingHandler:dt,[Vk]:fs};return V.datetimeFormats=pt,V.numberFormats=_t,V.rt=Ue,V.te=Ji,V.tm=S,V.d=se,V.n=si,V.getDateTimeFormat=H,V.setDateTimeFormat=b,V.mergeDateTimeFormat=y,V.getNumberFormat=A,V.setNumberFormat=O,V.mergeNumberFormat=Y,V[Nk]=s,V[cl]=$s,V[dl]=ii,V[ul]=Ce,V}const nc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Hk({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===$e?r.children:[r]],[]):e.reduce((s,i)=>{const r=t[i];return r&&(s[i]=r()),s},Dt())}function Op(){return $e}const jk=We({name:"i18n-t",props:pe({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>ne(t)||!isNaN(t)}},nc),setup(t,e){const{slots:s,attrs:i}=e,r=t.i18n||ac({useScope:t.scope,__useComponent:!0});return()=>{const o=Object.keys(s).filter(u=>u!=="_"),n=Dt();t.locale&&(n.locale=t.locale),t.plural!==void 0&&(n.plural=tt(t.plural)?+t.plural:t.plural);const a=Hk(e,o),l=r[cl](t.keypath,a,n),d=pe(Dt(),i),h=tt(t.tag)||It(t.tag)?t.tag:Op();return sp(h,d,l)}}}),iu=jk;function Wk(t){return le(t)&&!tt(t[0])}function Rp(t,e,s,i){const{slots:r,attrs:o}=e;return()=>{const n={part:!0};let a=Dt();t.locale&&(n.locale=t.locale),tt(t.format)?n.key=t.format:It(t.format)&&(tt(t.format.key)&&(n.key=t.format.key),a=Object.keys(t.format).reduce((p,m)=>s.includes(m)?pe(Dt(),p,{[m]:t.format[m]}):p,Dt()));const l=i(t.value,n,a);let d=[n.key];le(l)?d=l.map((p,m)=>{const v=r[p.type],k=v?v({[p.type]:p.value,index:m,parts:l}):[p.value];return Wk(k)&&(k[0].key=`${p.type}-${m}`),k}):tt(l)&&(d=[l]);const h=pe(Dt(),o),u=tt(t.tag)||It(t.tag)?t.tag:Op();return sp(u,h,d)}}const Kk=We({name:"i18n-n",props:pe({value:{type:Number,required:!0},format:{type:[String,Object]}},nc),setup(t,e){const s=t.i18n||ac({useScope:t.scope,__useComponent:!0});return Rp(t,e,Ep,(...i)=>s[ul](...i))}}),ru=Kk;function qk(t,e){const s=t;if(t.mode==="composition")return s.__getInstance(e)||t.global;{const i=s.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Gk(t){const e=n=>{const{instance:a,value:l}=n;if(!a||!a.$)throw vs(us.UNEXPECTED_ERROR);const d=qk(t,a.$),h=ou(l);return[Reflect.apply(d.t,d,[...nu(h)]),d]};return{created:(n,a)=>{const[l,d]=e(a);Sn&&t.global===d&&(n.__i18nWatcher=zi(d.locale,()=>{a.instance&&a.instance.$forceUpdate()})),n.__composer=d,n.textContent=l},unmounted:n=>{Sn&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:a})=>{if(n.__composer){const l=n.__composer,d=ou(a);n.textContent=Reflect.apply(l.t,l,[...nu(d)])}},getSSRProps:n=>{const[a]=e(n);return{textContent:a}}}}function ou(t){if(tt(t))return{path:t};if(Et(t)){if(!("path"in t))throw vs(us.REQUIRED_VALUE,"path");return t}else throw vs(us.INVALID_VALUE)}function nu(t){const{path:e,locale:s,args:i,choice:r,plural:o}=t,n={},a=i||{};return tt(s)&&(n.locale=s),ne(r)&&(n.plural=r),ne(o)&&(n.plural=o),[e,a,n]}function Yk(t,e,...s){const i=Et(s[0])?s[0]:{};(Yt(i.globalInstall)?i.globalInstall:!0)&&([iu.name,"I18nT"].forEach(o=>t.component(o,iu)),[ru.name,"I18nN"].forEach(o=>t.component(o,ru)),[lu.name,"I18nD"].forEach(o=>t.component(o,lu))),t.directive("t",Gk(e))}const Xk=xi("global-vue-i18n");function Jk(t={}){const e=Yt(t.globalInjection)?t.globalInjection:!0,s=new Map,[i,r]=Qk(t),o=xi("");function n(h){return s.get(h)||null}function a(h,u){s.set(h,u)}function l(h){s.delete(h)}const d={get mode(){return"composition"},async install(h,...u){if(h.__VUE_I18N_SYMBOL__=o,h.provide(h.__VUE_I18N_SYMBOL__,d),Et(u[0])){const v=u[0];d.__composerExtend=v.__composerExtend,d.__vueI18nExtend=v.__vueI18nExtend}let p=null;e&&(p=nC(h,d.global)),Yk(h,d,...u);const m=h.unmount;h.unmount=()=>{p&&p(),d.dispose(),m()}},get global(){return r},dispose(){i.stop()},__instances:s,__getInstance:n,__setInstance:a,__deleteInstance:l};return d}function ac(t={}){const e=Yl();if(e==null)throw vs(us.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw vs(us.NOT_INSTALLED);const s=Zk(e),i=eC(s),r=Ip(e),o=tC(t,r);if(o==="global")return Fk(i,t,r),i;if(o==="parent"){let l=sC(s,e,t.__useComponent);return l==null&&(l=i),l}const n=s;let a=n.__getInstance(e);if(a==null){const l=pe({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Lp(l),n.__composerExtend&&(a[hl]=n.__composerExtend(a)),rC(n,e,a),n.__setInstance(e,a)}return a}function Qk(t,e){const s=Ml(),i=s.run(()=>Lp(t));if(i==null)throw vs(us.UNEXPECTED_ERROR);return[s,i]}function Zk(t){const e=he(t.isCE?Xk:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw vs(t.isCE?us.NOT_INSTALLED_WITH_PROVIDE:us.UNEXPECTED_ERROR);return e}function tC(t,e){return Xn(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function eC(t){return t.mode==="composition"?t.global:t.global.__composer}function sC(t,e,s=!1){let i=null;const r=e.root;let o=iC(e,s);for(;o!=null;){const n=t;if(t.mode==="composition"&&(i=n.__getInstance(o)),i!=null||r===o)break;o=o.parent}return i}function iC(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function rC(t,e,s){Wl(()=>{},e),Kl(()=>{const i=s;t.__deleteInstance(e);const r=i[hl];r&&(r(),delete i[hl])},e)}const oC=["locale","fallbackLocale","availableLocales"],au=["t","rt","d","n","tm","te"];function nC(t,e){const s=Object.create(null);return oC.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o)throw vs(us.UNEXPECTED_ERROR);const n=Xt(o.value)?{get(){return o.value.value},set(a){o.value.value=a}}:{get(){return o.get&&o.get()}};Object.defineProperty(s,r,n)}),t.config.globalProperties.$i18n=s,au.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o.value)throw vs(us.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,o)}),()=>{delete t.config.globalProperties.$i18n,au.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const aC=We({name:"i18n-d",props:pe({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},nc),setup(t,e){const s=t.i18n||ac({useScope:t.scope,__useComponent:!0});return Rp(t,e,Sp,(...i)=>s[dl](...i))}}),lu=aC;zk();mk(X2);gk(hk);bk(vp);if(__INTLIFY_PROD_DEVTOOLS__){const t=Zl();t.__INTLIFY__=!0,J2(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}class lC{constructor(e,s=vn){this.i18nConfig=void 0,this.i18nConfig=Jk(this.getConfig(e,s))}getConfig(e,s=vn){const i={trend:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0},detections:{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0},detectionsCompact:{style:"decimal",notation:"compact",minimumFractionDigits:0,maximumFractionDigits:0}},r={secondRange:{hour:"2-digit",minute:"2-digit",second:"2-digit"},hourRange:{hour:"2-digit",minute:"2-digit"},dateRange:{month:"short",day:"numeric"},overviewDate:{month:"short",day:"numeric",year:"numeric"},fullDateTime:{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"2-digit"}},o={locale:e,fallbackLocale:"en-us",messages:s,allowComposition:!0,legacy:!1,numberFormats:{"en-US":i,[e]:i},datetimeFormats:{"en-US":r,[e]:r}};return o.numberFormats[e]=o.numberFormats[e]??o.numberFormats["en-US"],o}install(e){e.provide(_e.I18N,this.i18nConfig?.global)}}function cC(t,e=vn){return new lC(t,e)}(async()=>{const t=rp(mx);t.config.compilerOptions.isCustomElement=s=>s.startsWith("sl-");const e=Zx();t.use(yx()),t.use(e),t.use(K_()),await e.connect(),t.use(cC(e.data.locale,vn)),t.mount("#app")})();
