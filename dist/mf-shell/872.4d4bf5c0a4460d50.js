(self.webpackChunkmf_shell=self.webpackChunkmf_shell||[]).push([[872,3538],{4929:(y,m,r)=>{r.d(m,{Eq:()=>h,HM:()=>f,Ig:()=>e,du:()=>x,fI:()=>p,su:()=>g,t6:()=>c});var d=r(8043);function e(n){return null!=n&&"false"!=`${n}`}function g(n,_=0){return c(n)?Number(n):_}function c(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function h(n){return Array.isArray(n)?n:[n]}function f(n){return null==n?"":"string"==typeof n?n:`${n}px`}function p(n){return n instanceof d.ElementRef?n.nativeElement:n}function x(n,_=/\s+/){const P=[];if(null!=n){const I=Array.isArray(n)?n:`${n}`.split(_);for(const M of I){const b=`${M}`.trim();b&&P.push(b)}}return P}},3538:(y,m,r)=>{r.r(m),r.d(m,{MAT_PAGINATOR_DEFAULT_OPTIONS:()=>z,MAT_PAGINATOR_INTL_PROVIDER:()=>T,MAT_PAGINATOR_INTL_PROVIDER_FACTORY:()=>S,MatPaginator:()=>B,MatPaginatorIntl:()=>u,MatPaginatorModule:()=>R,PageEvent:()=>A,_MatPaginatorBase:()=>O});var d=r(2581),e=r(8043),g=r(3757),c=r(7814),h=r(6179),f=r(8828),p=r(4929),x=r(3970),n=r(7528);function _(a,s){if(1&a&&(e.\u0275\u0275elementStart(0,"mat-option",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const t=s.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}function P(a,s){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-form-field",16)(1,"mat-select",17),e.\u0275\u0275listener("selectionChange",function(o){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(l._changePageSize(o.value))}),e.\u0275\u0275template(2,_,2,2,"mat-option",18),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("appearance",t._formFieldAppearance)("color",t.color),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",t.pageSize)("disabled",t.disabled)("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering)("aria-label",t._intl.itemsPerPageLabel),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t._displayedPageSizeOptions)}}function I(a,s){if(1&a&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.pageSize)}}function M(a,s){if(1&a&&(e.\u0275\u0275elementStart(0,"div",12)(1,"div",13),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,P,3,8,"mat-form-field",14),e.\u0275\u0275template(4,I,2,1,"div",15),e.\u0275\u0275elementEnd()),2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t._intl.itemsPerPageLabel," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t._displayedPageSizeOptions.length>1),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t._displayedPageSizeOptions.length<=1)}}function b(a,s){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.firstPage())}),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(1,"svg",7),e.\u0275\u0275element(2,"path",22),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("matTooltipPosition","above")("disabled",t._previousButtonsDisabled()),e.\u0275\u0275attribute("aria-label",t._intl.firstPageLabel)}}function L(a,s){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(0,"button",23),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.lastPage())}),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(1,"svg",7),e.\u0275\u0275element(2,"path",24),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("matTooltipPosition","above")("disabled",t._nextButtonsDisabled()),e.\u0275\u0275attribute("aria-label",t._intl.lastPageLabel)}}let u=(()=>{class a{constructor(){this.changes=new x.Subject,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(t,i,o)=>{if(0==o||0==i)return`0 of ${o}`;const l=t*i;return`${l+1} \u2013 ${l<(o=Math.max(o,0))?Math.min(l+i,o):l+i} of ${o}`}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=e.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function S(a){return a||new u}const T={provide:u,deps:[[new e.Optional,new e.SkipSelf,u]],useFactory:S};class A{}const z=new e.InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS"),F=(0,g.mixinDisabled)((0,g.mixinInitialized)(class{}));let O=(()=>{class a extends F{constructor(t,i,o){if(super(),this._intl=t,this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new e.EventEmitter,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),o){const{pageSize:l,pageSizeOptions:v,hidePageSize:D,showFirstLastButtons:E}=o;null!=l&&(this._pageSize=l),null!=v&&(this._pageSizeOptions=v),null!=D&&(this._hidePageSize=D),null!=E&&(this._showFirstLastButtons=E)}}get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max((0,p.su)(t),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(t){this._length=(0,p.su)(t),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max((0,p.su)(t),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(i=>(0,p.su)(i)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=(0,p.Ig)(t)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(t){this._showFirstLastButtons=(0,p.Ig)(t)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const t=this.getNumberOfPages()-1;return this.pageIndex<t&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){const o=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/t)||0,this.pageSize=t,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){!this._initialized||(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,i)=>t-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return a.\u0275fac=function(t){e.\u0275\u0275invalidFactory()},a.\u0275dir=e.\u0275\u0275defineDirective({type:a,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},features:[e.\u0275\u0275InheritDefinitionFeature]}),a})(),B=(()=>{class a extends O{constructor(t,i,o){super(t,i,o),o&&null!=o.formFieldAppearance&&(this._formFieldAppearance=o.formFieldAppearance)}}return a.\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(u),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(z,8))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[e.\u0275\u0275InheritDefinitionFeature],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","panelClass","disableOptionCentering","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275template(2,M,5,3,"div",2),e.\u0275\u0275elementStart(3,"div",3)(4,"div",4),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,b,3,5,"button",5),e.\u0275\u0275elementStart(7,"button",6),e.\u0275\u0275listener("click",function(){return i.previousPage()}),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(8,"svg",7),e.\u0275\u0275element(9,"path",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(10,"button",9),e.\u0275\u0275listener("click",function(){return i.nextPage()}),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(11,"svg",7),e.\u0275\u0275element(12,"path",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(13,L,3,5,"button",11),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!i.hidePageSize),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.showFirstLastButtons),e.\u0275\u0275advance(1),e.\u0275\u0275property("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),e.\u0275\u0275attribute("aria-label",i._intl.previousPageLabel),e.\u0275\u0275advance(3),e.\u0275\u0275property("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),e.\u0275\u0275attribute("aria-label",i._intl.nextPageLabel),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.showFirstLastButtons))},dependencies:[d.NgForOf,d.NgIf,c.MatButton,n.MatFormField,h.MatSelect,g.MatOption,f.MatTooltip],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"],encapsulation:2,changeDetection:0}),a})(),R=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({providers:[T],imports:[d.CommonModule,c.MatButtonModule,h.MatSelectModule,f.MatTooltipModule,g.MatCommonModule]}),a})()}}]);