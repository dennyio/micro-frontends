(self.webpackChunkmf_courses=self.webpackChunkmf_courses||[]).push([[3673],{3673:(L,p,s)=>{s.r(p),s.d(p,{CommonsLibComponent:()=>u,CommonsLibModule:()=>v,CommonsLibService:()=>f,LoadingComponent:()=>b,LoadingService:()=>l,MessagesComponent:()=>y,MessagesService:()=>m,SafeUrlPipe:()=>x});var n=s(8043);let f=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["lib-commons-lib"]],decls:2,vars:0,template:function(t,a){1&t&&(n.\u0275\u0275elementStart(0,"p"),n.\u0275\u0275text(1," commons-lib works! "),n.\u0275\u0275elementEnd())},encapsulation:2}),e})();var i=s(2581),d=s(1556),g=s(1366),c=s(3970),r=s(6209);let l=(()=>{class e{constructor(){this.loadingSubject=new c.BehaviorSubject(!1),this.loading$=this.loadingSubject.asObservable(),console.log("Loading service created ...")}showLoaderUntilCompleted(t){return(0,c.of)(null).pipe((0,r.tap)(()=>this.loadingOn()),(0,r.concatMap)(()=>t),(0,r.finalize)(()=>this.loadingOff()))}loadingOn(){this.loadingSubject.next(!0)}loadingOff(){this.loadingSubject.next(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),m=(()=>{class e{constructor(){this.subject=new c.BehaviorSubject([]),this.errors$=this.subject.asObservable().pipe((0,r.filter)(t=>t&&t.length>0))}showErrors(...t){this.subject.next(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=n.\u0275\u0275defineInjector({providers:[l,m],imports:[i.CommonModule,g.MatProgressSpinnerModule,d.MatIconModule]}),e})();function C(e,o){1&e&&(n.\u0275\u0275elementStart(0,"div",1),n.\u0275\u0275element(1,"mat-spinner"),n.\u0275\u0275elementEnd())}let b=(()=>{class e{constructor(t){this.loadingService=t}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275directiveInject(l))},e.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["loading"]],decls:2,vars:3,consts:[["class","spinner-container",4,"ngIf"],[1,"spinner-container"]],template:function(t,a){1&t&&(n.\u0275\u0275template(0,C,2,0,"div",0),n.\u0275\u0275pipe(1,"async")),2&t&&n.\u0275\u0275property("ngIf",n.\u0275\u0275pipeBind1(1,1,a.loadingService.loading$))},dependencies:[i.NgIf,g.MatProgressSpinner,i.AsyncPipe],styles:[".spinner-container[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.32);z-index:20000}"]}),e})();function S(e,o){if(1&e&&(n.\u0275\u0275elementStart(0,"div",5),n.\u0275\u0275text(1),n.\u0275\u0275elementEnd()),2&e){const t=o.$implicit;n.\u0275\u0275advance(1),n.\u0275\u0275textInterpolate1(" ",t," ")}}function h(e,o){if(1&e){const t=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"div",2),n.\u0275\u0275template(1,S,2,1,"div",3),n.\u0275\u0275elementStart(2,"mat-icon",4),n.\u0275\u0275listener("click",function(){n.\u0275\u0275restoreView(t);const j=n.\u0275\u0275nextContext(2);return n.\u0275\u0275resetView(j.onClose())}),n.\u0275\u0275text(3,"close"),n.\u0275\u0275elementEnd()()}if(2&e){const t=n.\u0275\u0275nextContext().ngIf;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngForOf",t)}}function M(e,o){if(1&e&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,h,4,1,"div",1),n.\u0275\u0275elementContainerEnd()),2&e){const t=n.\u0275\u0275nextContext();n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",t.showMessages)}}let y=(()=>{class e{constructor(t){this.messagesService=t,this.showMessages=!1,console.log("Created messages component")}ngOnInit(){this.errors$=this.messagesService.errors$.pipe((0,r.tap)(()=>this.showMessages=!0))}onClose(){this.showMessages=!1}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275directiveInject(m))},e.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["messages"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","messages-container",4,"ngIf"],[1,"messages-container"],["class","message",4,"ngFor","ngForOf"],[1,"close",3,"click"],[1,"message"]],template:function(t,a){1&t&&(n.\u0275\u0275template(0,M,2,1,"ng-container",0),n.\u0275\u0275pipe(1,"async")),2&t&&n.\u0275\u0275property("ngIf",n.\u0275\u0275pipeBind1(1,1,a.errors$))},dependencies:[i.NgForOf,i.NgIf,d.MatIcon,i.AsyncPipe],styles:[".messages-container[_ngcontent-%COMP%]{display:flex;color:#a94442;background-color:#f2dede;border:1px solid #ebccd1;padding:20px;font-family:Roboto;position:relative}.close[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;cursor:pointer}"]}),e})();var _=s(7835);let x=(()=>{class e{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275directiveInject(_.DomSanitizer,16))},e.\u0275pipe=n.\u0275\u0275definePipe({name:"safeUrl",type:e,pure:!0}),e})()}}]);