(self.webpackChunkmf_shell=self.webpackChunkmf_shell||[]).push([[1049],{1049:(y,h,c)=>{c.r(h),c.d(h,{StoreAuthLibService:()=>C,StoreLibComponent:()=>f,StoreLibModule:()=>j,StoreLibService:()=>g,sortCoursesBySeqNo:()=>p});var r=c(3970);function p(e,i){return e.seqNo-i.seqNo}var n=c(8043),d=c(8475),l=c(8899);let g=(()=>{class e{constructor(t,o,s){this.http=t,this.loading=o,this.messages=s,this.subject=new r.BehaviorSubject([]),this.courses$=this.subject.asObservable(),this.loadAllCourses()}loadAllCourses(){const t=this.http.get("/api/courses").pipe((0,r.map)(o=>o.payload),(0,r.catchError)(o=>{const s="Could not load courses";return this.messages.showErrors(s),console.log(s,o),(0,r.throwError)(()=>o)}),(0,r.tap)(o=>this.subject.next(o)));this.loading.showLoaderUntilCompleted(t).subscribe()}saveCourse(t,o){const s=this.subject.getValue(),m=s.findIndex(a=>a.id==t),L={...s[m],...o},b=s.slice(0);return b[m]=L,this.subject.next(b),this.http.put(`/api/courses/${t}`,o).pipe((0,r.catchError)(a=>{const S="Could not save course";return console.log(S,a),this.messages.showErrors(S),(0,r.throwError)(()=>a)}),(0,r.shareReplay)())}filterByCategory(t){return this.courses$.pipe((0,r.map)(o=>o.filter(s=>s.category==t).sort(p)))}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275inject(d.HttpClient),n.\u0275\u0275inject(l.LoadingService),n.\u0275\u0275inject(l.MessagesService))},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["lib-store-lib"]],decls:2,vars:0,template:function(t,o){1&t&&(n.\u0275\u0275elementStart(0,"p"),n.\u0275\u0275text(1," store-lib works! "),n.\u0275\u0275elementEnd())},encapsulation:2}),e})();var v=c(2581);let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=n.\u0275\u0275defineInjector({imports:[v.CommonModule,l.CommonsLibModule]}),e})();const u="auth_data";let C=(()=>{class e{constructor(t){this.http=t,this.subject=new r.BehaviorSubject(null),this.user$=this.subject.asObservable(),this.isLoggedIn$=this.user$.pipe((0,r.map)(s=>!!s)),this.isLoggedOut$=this.isLoggedIn$.pipe((0,r.map)(s=>!s));const o=localStorage.getItem(u);o&&this.subject.next(JSON.parse(o))}login(t,o){return this.http.post("/api/login",{email:t,password:o}).pipe((0,r.tap)(s=>{this.subject.next(s),localStorage.setItem(u,JSON.stringify(s))}),(0,r.shareReplay)())}logout(){this.subject.next(null),localStorage.removeItem(u)}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275inject(d.HttpClient))},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);