(self.webpackChunkmf_shell=self.webpackChunkmf_shell||[]).push([[9503,8772],{8772:(y,c,s)=>{var h;s.r(c),s.d(c,{MAT_MOMENT_DATE_ADAPTER_OPTIONS:()=>M,MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY:()=>f,MAT_MOMENT_DATE_FORMATS:()=>u,MatMomentDateModule:()=>T,MomentDateAdapter:()=>_,MomentDateModule:()=>m});var o=s(8043),l=s(3757),D=s(5525);const a=D||h||(h=s.t(D,2)),M=new o.InjectionToken("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:f});function f(){return{useUtc:!1}}function A(n,r){const e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}let _=(()=>{class n extends l.DateAdapter{constructor(e,t){super(),this._options=t,this.setLocale(e||a.locale())}setLocale(e){super.setLocale(e);let t=a.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:A(31,i=>this.createDate(2017,0,i+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,i){const d=this._createMoment({year:e,month:t,date:i}).locale(this.locale);return d.isValid(),d}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,a.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return a.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return a.invalid()}_createMoment(e,t,i){const{strict:d,useUtc:O}=this._options||{};return O?a.utc(e,t,i,d):a(e,t,i,d)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.MAT_DATE_LOCALE,8),o.\u0275\u0275inject(M,8))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const u={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:l.DateAdapter,useClass:_,deps:[l.MAT_DATE_LOCALE,M]}]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:l.MAT_DATE_FORMATS,useValue:u}],imports:[m]}),n})()}}]);