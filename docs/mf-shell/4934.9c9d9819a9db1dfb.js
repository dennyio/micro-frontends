(self.webpackChunkmf_shell=self.webpackChunkmf_shell||[]).push([[4934,6974],{4934:(x,p,h)=>{h.r(p),h.d(p,{ANIMATION_MODULE_TYPE:()=>s.ANIMATION_MODULE_TYPE,BrowserAnimationsModule:()=>S,NoopAnimationsModule:()=>j,provideAnimations:()=>F,provideNoopAnimations:()=>k,\u0275AnimationRenderer:()=>N,\u0275AnimationRendererFactory:()=>v,\u0275BrowserAnimationBuilder:()=>I,\u0275BrowserAnimationFactory:()=>D,\u0275InjectableAnimationEngine:()=>C});var s=h(8043),A=h(7835),u=h(8706),a=h(8641),y=h(2581);let I=(()=>{class i extends u.AnimationBuilder{constructor(e,n){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(n.body,{id:"0",encapsulation:s.ViewEncapsulation.None,styles:[],data:{animation:[]}})}build(e){const n=this._nextAnimationId.toString();this._nextAnimationId++;const r=Array.isArray(e)?(0,u.sequence)(e):e;return E(this._renderer,null,n,"register",[r]),new D(n,this._renderer)}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(s.RendererFactory2),s.\u0275\u0275inject(y.DOCUMENT))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();class D extends u.AnimationFactory{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new O(this._id,t,e||{},this._renderer)}}class O{constructor(t,e,n,r){this.id=t,this.element=e,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){return E(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function E(i,t,e,n,r){return i.setProperty(t,`@@${e}:${n}`,r)}const m="@",M="@.disabled";let v=(()=>{class i{constructor(e,n,r){this.delegate=e,this.engine=n,this._zone=r,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),n.onRemovalComplete=(o,c)=>{const d=c?.parentNode(o);d&&c.removeChild(d,o)}}createRenderer(e,n){const o=this.delegate.createRenderer(e,n);if(!(e&&n&&n.data&&n.data.animation)){let l=this._rendererCache.get(o);return l||(l=new R("",o,this.engine,()=>this._rendererCache.delete(o)),this._rendererCache.set(o,l)),l}const c=n.id,d=n.id+"-"+this._currentId;this._currentId++,this.engine.register(d,e);const _=l=>{Array.isArray(l)?l.forEach(_):this.engine.registerTrigger(c,d,e,l.name,l)};return n.data.animation.forEach(_),new N(this,d,o,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,n,r){e>=0&&e<this._microtaskId?this._zone.run(()=>n(r)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(o=>{const[c,d]=o;c(d)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([n,r]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(s.RendererFactory2),s.\u0275\u0275inject(a.\u0275AnimationEngine),s.\u0275\u0275inject(s.NgZone))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();class R{constructor(t,e,n,r){this.namespaceId=t,this.delegate=e,this.engine=n,this._onDestroy=r,this.destroyNode=this.delegate.destroyNode?o=>e.destroyNode(o):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n,r=!0){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,r)}removeChild(t,e,n){this.engine.onRemove(this.namespaceId,e,this.delegate,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){e.charAt(0)==m&&e==M?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.delegate.listen(t,e,n)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}}class N extends R{constructor(t,e,n,r,o){super(e,n,r,o),this.factory=t,this.namespaceId=e}setProperty(t,e,n){e.charAt(0)==m?"."==e.charAt(1)&&e==M?this.disableAnimations(t,n=void 0===n||!!n):this.engine.process(this.namespaceId,t,e.slice(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n){if(e.charAt(0)==m){const r=function B(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}(t);let o=e.slice(1),c="";return o.charAt(0)!=m&&([o,c]=function P(i){const t=i.indexOf(".");return[i.substring(0,t),i.slice(t+1)]}(o)),this.engine.listen(this.namespaceId,r,o,c,d=>{this.factory.scheduleListenerCallback(d._data||-1,n,d)})}return this.delegate.listen(t,e,n)}}let C=(()=>{class i extends a.\u0275AnimationEngine{constructor(e,n,r,o){super(e.body,n,r)}ngOnDestroy(){this.flush()}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(y.DOCUMENT),s.\u0275\u0275inject(a.AnimationDriver),s.\u0275\u0275inject(a.\u0275AnimationStyleNormalizer),s.\u0275\u0275inject(s.ApplicationRef))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();const b=[{provide:u.AnimationBuilder,useClass:I},{provide:a.\u0275AnimationStyleNormalizer,useFactory:function T(){return new a.\u0275WebAnimationsStyleNormalizer}},{provide:a.\u0275AnimationEngine,useClass:C},{provide:s.RendererFactory2,useFactory:function w(i,t,e){return new v(i,t,e)},deps:[A.\u0275DomRendererFactory2,a.\u0275AnimationEngine,s.NgZone]}],f=[{provide:a.AnimationDriver,useFactory:()=>new a.\u0275WebAnimationsDriver},{provide:s.ANIMATION_MODULE_TYPE,useValue:"BrowserAnimations"},...b],g=[{provide:a.AnimationDriver,useClass:a.\u0275NoopAnimationDriver},{provide:s.ANIMATION_MODULE_TYPE,useValue:"NoopAnimations"},...b];let S=(()=>{class i{static withConfig(e){return{ngModule:i,providers:e.disableAnimations?g:f}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=s.\u0275\u0275defineInjector({providers:f,imports:[A.BrowserModule]}),i})();function F(){return[...f]}let j=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=s.\u0275\u0275defineInjector({providers:g,imports:[A.BrowserModule]}),i})();function k(){return[...g]}}}]);