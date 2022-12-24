import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject, map, catchError, throwError, tap, shareReplay } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i2 from '@commons-lib';
import { CommonsLibModule } from '@commons-lib';
import { CommonModule } from '@angular/common';

function sortCoursesBySeqNo(c1, c2) {
    return c1.seqNo - c2.seqNo;
}

class StoreLibService {
    constructor(http, loading, messages) {
        this.http = http;
        this.loading = loading;
        this.messages = messages;
        this.subject = new BehaviorSubject([]);
        this.courses$ = this.subject.asObservable();
        this.loadAllCourses();
    }
    loadAllCourses() {
        const loadCourses$ = this.http.get('/api/courses').pipe(map((response) => response.payload), catchError((err) => {
            const message = 'Could not load courses';
            this.messages.showErrors(message);
            console.log(message, err);
            return throwError(() => err);
        }), tap((courses) => this.subject.next(courses)));
        this.loading.showLoaderUntilCompleted(loadCourses$).subscribe();
    }
    saveCourse(courseId, changes) {
        const courses = this.subject.getValue();
        const index = courses.findIndex((course) => course.id == courseId);
        const newCourse = {
            ...courses[index],
            ...changes,
        };
        const newCourses = courses.slice(0);
        newCourses[index] = newCourse;
        this.subject.next(newCourses);
        return this.http.put(`/api/courses/${courseId}`, changes).pipe(catchError((err) => {
            const message = 'Could not save course';
            console.log(message, err);
            this.messages.showErrors(message);
            return throwError(() => err);
        }), shareReplay());
    }
    filterByCategory(category) {
        return this.courses$.pipe(map((courses) => courses
            .filter((course) => course.category == category)
            .sort(sortCoursesBySeqNo)));
    }
}
StoreLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibService, deps: [{ token: i1.HttpClient }, { token: i2.LoadingService }, { token: i2.MessagesService }], target: i0.ɵɵFactoryTarget.Injectable });
StoreLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LoadingService }, { type: i2.MessagesService }]; } });

class StoreLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoreLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StoreLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: StoreLibComponent, selector: "lib-store-lib", ngImport: i0, template: `
    <p>
      store-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-store-lib', template: `
    <p>
      store-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class StoreLibModule {
}
StoreLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StoreLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: StoreLibModule, declarations: [StoreLibComponent], imports: [CommonModule, CommonsLibModule], exports: [StoreLibComponent] });
StoreLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibModule, imports: [CommonModule, CommonsLibModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [StoreLibComponent],
                    imports: [CommonModule, CommonsLibModule],
                    exports: [StoreLibComponent],
                }]
        }] });

const AUTH_DATA = 'auth_data';
class StoreAuthLibService {
    constructor(http) {
        this.http = http;
        this.subject = new BehaviorSubject(null);
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
        const user = localStorage.getItem(AUTH_DATA);
        if (user) {
            this.subject.next(JSON.parse(user));
        }
    }
    login(email, password) {
        return this.http.post('/api/login', { email, password }).pipe(tap((user) => {
            this.subject.next(user);
            localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }), shareReplay());
    }
    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
}
StoreAuthLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
StoreAuthLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

/*
 * Public API Surface of store-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { StoreAuthLibService, StoreLibComponent, StoreLibModule, StoreLibService, sortCoursesBySeqNo };
//# sourceMappingURL=store-lib.mjs.map
