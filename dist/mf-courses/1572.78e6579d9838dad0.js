(self.webpackChunkmf_courses=self.webpackChunkmf_courses||[]).push([[1572,7717],{445:(L,b,d)=>{d.d(b,{Is:()=>x,vT:()=>a});var m=d(8043),u=d(2581);const w=new m.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function k(){return(0,m.inject)(u.DOCUMENT)}}),i=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let x=(()=>{class f{constructor(_){if(this.value="ltr",this.change=new m.EventEmitter,_){const T=_.documentElement?_.documentElement.dir:null;this.value=function C(f){const v=f?.toLowerCase()||"";return"auto"===v&&typeof navigator<"u"&&navigator?.language?i.test(navigator.language)?"rtl":"ltr":"rtl"===v?"rtl":"ltr"}((_.body?_.body.dir:null)||T||"ltr")}}ngOnDestroy(){this.change.complete()}}return f.\u0275fac=function(_){return new(_||f)(m.\u0275\u0275inject(w,8))},f.\u0275prov=m.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:"root"}),f})(),a=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275mod=m.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=m.\u0275\u0275defineInjector({}),f})()},1281:(L,b,d)=>{d.d(b,{Eq:()=>i,HM:()=>C,Ig:()=>u,du:()=>I,fI:()=>x,su:()=>w});var m=d(8043);function u(a){return null!=a&&"false"!=`${a}`}function w(a,f=0){return function k(a){return!isNaN(parseFloat(a))&&!isNaN(Number(a))}(a)?Number(a):f}function i(a){return Array.isArray(a)?a:[a]}function C(a){return null==a?"":"string"==typeof a?a:`${a}px`}function x(a){return a instanceof m.ElementRef?a.nativeElement:a}function I(a,f=/\s+/){const v=[];if(null!=a){const _=Array.isArray(a)?a:`${a}`.split(f);for(const E of _){const T=`${E}`.trim();T&&v.push(T)}}return v}},3353:(L,b,d)=>{d.d(b,{Mq:()=>T,Oy:()=>l,ht:()=>z,i$:()=>v,kV:()=>V,qK:()=>I,sA:()=>p,t4:()=>k});var m=d(8043),u=d(2581);let w;try{w=typeof Intl<"u"&&Intl.v8BreakIterator}catch{w=!1}let C,k=(()=>{class t{constructor(g){this._platformId=g,this.isBrowser=this._platformId?(0,u.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!w)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(g){return new(g||t)(m.\u0275\u0275inject(m.PLATFORM_ID))},t.\u0275prov=m.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const x=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function I(){if(C)return C;if("object"!=typeof document||!document)return C=new Set(x),C;let t=document.createElement("input");return C=new Set(x.filter(c=>(t.setAttribute("type",c),t.type===c))),C}let a,E,A;function v(t){return function f(){if(null==a&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>a=!0}))}finally{a=a||!1}return a}()?t:!!t.capture}function T(){if(null==E){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return E=!1,E;if("scrollBehavior"in document.documentElement.style)E=!0;else{const t=Element.prototype.scrollTo;E=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return E}function V(t){if(function y(){if(null==A){const t=typeof document<"u"?document.head:null;A=!(!t||!t.createShadowRoot&&!t.attachShadow)}return A}()){const c=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&c instanceof ShadowRoot)return c}return null}function z(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){const c=t.shadowRoot.activeElement;if(c===t)break;t=c}return t}function p(t){return t.composedPath?t.composedPath()[0]:t.target}function l(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},7376:(L,b,d)=>{d.d(b,{Cl:()=>S,ZD:()=>g,mF:()=>P,rL:()=>V});var m=d(1281),u=d(8043),w=d(3970),k=d(6209),i=d(3353),C=d(2581),x=d(445);let P=(()=>{class o{constructor(e,r,n){this._ngZone=e,this._platform=r,this._scrolled=new w.Subject,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new w.Observable(r=>{this._globalSubscription||this._addGlobalListener();const n=e>0?this._scrolled.pipe((0,k.auditTime)(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,w.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){const n=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe((0,k.filter)(h=>!h||n.indexOf(h)>-1))}getAncestorScrollContainers(e){const r=[];return this.scrollContainers.forEach((n,h)=>{this._scrollableContainsElement(h,e)&&r.push(h)}),r}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,r){let n=(0,m.fI)(r),h=e.getElementRef().nativeElement;do{if(n==h)return!0}while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,w.fromEvent)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return o.\u0275fac=function(e){return new(e||o)(u.\u0275\u0275inject(u.NgZone),u.\u0275\u0275inject(i.t4),u.\u0275\u0275inject(C.DOCUMENT,8))},o.\u0275prov=u.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),V=(()=>{class o{constructor(e,r,n){this._platform=e,this._change=new w.Subject,this._changeListener=h=>{this._change.next(h)},this._document=n,r.runOutsideAngular(()=>{if(e.isBrowser){const h=this._getWindow();h.addEventListener("resize",this._changeListener),h.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:r,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+r,height:n,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,r=this._getWindow(),n=e.documentElement,h=n.getBoundingClientRect();return{top:-h.top||e.body.scrollTop||r.scrollY||n.scrollTop||0,left:-h.left||e.body.scrollLeft||r.scrollX||n.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,k.auditTime)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return o.\u0275fac=function(e){return new(e||o)(u.\u0275\u0275inject(i.t4),u.\u0275\u0275inject(u.NgZone),u.\u0275\u0275inject(C.DOCUMENT,8))},o.\u0275prov=u.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=u.\u0275\u0275defineInjector({}),o})(),S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=u.\u0275\u0275defineInjector({imports:[x.vT,g,x.vT,g]}),o})()},1572:(L,b,d)=>{d.r(b),d.d(b,{MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS:()=>T,MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY:()=>P,MatProgressSpinner:()=>y,MatProgressSpinnerModule:()=>V,MatSpinner:()=>z});var m=d(1281),u=d(3353),w=d(7376),k=d(2581),i=d(8043),C=d(3757),x=d(3018),I=d(3970);function a(p,l){if(1&p&&(i.\u0275\u0275namespaceSVG(),i.\u0275\u0275element(0,"circle",4)),2&p){const t=i.\u0275\u0275nextContext(),c=i.\u0275\u0275reference(1);i.\u0275\u0275styleProp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(c)),i.\u0275\u0275attribute("r",t._getCircleRadius())}}function f(p,l){if(1&p&&(i.\u0275\u0275namespaceSVG(),i.\u0275\u0275element(0,"circle",4)),2&p){const t=i.\u0275\u0275nextContext(),c=i.\u0275\u0275reference(1);i.\u0275\u0275styleProp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(c)),i.\u0275\u0275attribute("r",t._getCircleRadius())}}const E=(0,C.mixinColor)(class{constructor(p){this._elementRef=p}},"primary"),T=new i.InjectionToken("mat-progress-spinner-default-options",{providedIn:"root",factory:P});function P(){return{diameter:100}}class y extends E{constructor(l,t,c,g,S,o,s,e){super(l),this._document=c,this._diameter=100,this._value=0,this._resizeSubscription=I.Subscription.EMPTY,this.mode="determinate";const r=y._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),r.has(c.head)||r.set(c.head,new Set([100])),this._noopAnimations="NoopAnimations"===g&&!!S&&!S._forceAnimations,"mat-spinner"===l.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),S&&(S.color&&(this.color=this.defaultColor=S.color),S.diameter&&(this.diameter=S.diameter),S.strokeWidth&&(this.strokeWidth=S.strokeWidth)),t.isBrowser&&t.SAFARI&&s&&o&&e&&(this._resizeSubscription=s.change(150).subscribe(()=>{"indeterminate"===this.mode&&e.run(()=>o.markForCheck())}))}get diameter(){return this._diameter}set diameter(l){this._diameter=(0,m.su)(l),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(l){this._strokeWidth=(0,m.su)(l)}get value(){return"determinate"===this.mode?this._value:0}set value(l){this._value=Math.max(0,Math.min(100,(0,m.su)(l)))}ngOnInit(){const l=this._elementRef.nativeElement;this._styleRoot=(0,u.kV)(l)||this._document.head,this._attachStyleNode(),l.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const l=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${l} ${l}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(l){const t=50*(l.currentScale??1);return`${t}% ${t}%`}_attachStyleNode(){const l=this._styleRoot,t=this._diameter,c=y._diameters;let g=c.get(l);if(!g||!g.has(t)){const S=this._document.createElement("style");S.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),S.textContent=this._getAnimationText(),l.appendChild(S),g||(g=new Set,c.set(l,g)),g.add(t)}}_getAnimationText(){const l=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*l).replace(/END_VALUE/g,""+.2*l).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}y._diameters=new WeakMap,y.\u0275fac=function(l){return new(l||y)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(u.t4),i.\u0275\u0275directiveInject(k.DOCUMENT,8),i.\u0275\u0275directiveInject(x.ANIMATION_MODULE_TYPE,8),i.\u0275\u0275directiveInject(T),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(w.rL),i.\u0275\u0275directiveInject(i.NgZone))},y.\u0275cmp=i.\u0275\u0275defineComponent({type:y,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(l,t){2&l&&(i.\u0275\u0275attribute("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),i.\u0275\u0275styleProp("width",t.diameter,"px")("height",t.diameter,"px"),i.\u0275\u0275classProp("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[i.\u0275\u0275InheritDefinitionFeature],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(l,t){1&l&&(i.\u0275\u0275namespaceSVG(),i.\u0275\u0275elementStart(0,"svg",0,1),i.\u0275\u0275template(2,a,1,11,"circle",2),i.\u0275\u0275template(3,f,1,9,"circle",3),i.\u0275\u0275elementEnd()),2&l&&(i.\u0275\u0275styleProp("width",t.diameter,"px")("height",t.diameter,"px"),i.\u0275\u0275property("ngSwitch","indeterminate"===t.mode),i.\u0275\u0275attribute("viewBox",t._getViewBox()),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngSwitchCase",!0),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngSwitchCase",!1))},dependencies:[k.NgSwitch,k.NgSwitchCase],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let V=(()=>{class p{}return p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=i.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=i.\u0275\u0275defineInjector({imports:[C.MatCommonModule,k.CommonModule,C.MatCommonModule]}),p})();const z=y}}]);