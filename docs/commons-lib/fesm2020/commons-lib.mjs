import * as i0 from '@angular/core';
import { Injectable, Component, Pipe, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, of } from 'rxjs';
import { tap, concatMap, finalize, filter } from 'rxjs/operators';
import * as i1 from '@angular/platform-browser';

class CommonsLibService {
    constructor() { }
}
CommonsLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonsLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LoadingService {
    constructor() {
        this.loadingSubject = new BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
        console.log('Loading service created ...');
    }
    showLoaderUntilCompleted(obs$) {
        return of(null).pipe(tap(() => this.loadingOn()), concatMap(() => obs$), finalize(() => this.loadingOff()));
    }
    loadingOn() {
        this.loadingSubject.next(true);
    }
    loadingOff() {
        this.loadingSubject.next(false);
    }
}
LoadingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoadingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingComponent, deps: [{ token: LoadingService }], target: i0.ɵɵFactoryTarget.Component });
LoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LoadingComponent, selector: "loading", ngImport: i0, template: "<div class=\"spinner-container\" *ngIf=\"loadingService.loading$ | async\">\n  <mat-spinner></mat-spinner>\n</div>\n", styles: [".spinner-container{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.32);z-index:20000}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading', template: "<div class=\"spinner-container\" *ngIf=\"loadingService.loading$ | async\">\n  <mat-spinner></mat-spinner>\n</div>\n", styles: [".spinner-container{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.32);z-index:20000}\n"] }]
        }], ctorParameters: function () { return [{ type: LoadingService }]; } });

class MessagesService {
    constructor() {
        this.subject = new BehaviorSubject([]);
        this.errors$ = this.subject
            .asObservable()
            .pipe(filter((messages) => messages && messages.length > 0));
    }
    showErrors(...errors) {
        this.subject.next(errors);
    }
}
MessagesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MessagesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService, decorators: [{
            type: Injectable
        }] });

class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.showMessages = false;
        console.log('Created messages component');
    }
    ngOnInit() {
        this.errors$ = this.messagesService.errors$.pipe(tap(() => (this.showMessages = true)));
    }
    onClose() {
        this.showMessages = false;
    }
}
MessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesComponent, deps: [{ token: MessagesService }], target: i0.ɵɵFactoryTarget.Component });
MessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: MessagesComponent, selector: "messages", ngImport: i0, template: "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"messages-container\" *ngIf=\"showMessages\">\n    <div class=\"message\" *ngFor=\"let error of errors\">\n      {{ error }}\n    </div>\n\n    <mat-icon class=\"close\" (click)=\"onClose()\">close</mat-icon>\n  </div>\n</ng-container>\n", styles: [".messages-container{display:flex;color:#a94442;background-color:#f2dede;border:1px solid #ebccd1;padding:20px;font-family:Roboto;position:relative}.close{position:absolute;right:10px;top:10px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'messages', template: "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"messages-container\" *ngIf=\"showMessages\">\n    <div class=\"message\" *ngFor=\"let error of errors\">\n      {{ error }}\n    </div>\n\n    <mat-icon class=\"close\" (click)=\"onClose()\">close</mat-icon>\n  </div>\n</ng-container>\n", styles: [".messages-container{display:flex;color:#a94442;background-color:#f2dede;border:1px solid #ebccd1;padding:20px;font-family:Roboto;position:relative}.close{position:absolute;right:10px;top:10px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: MessagesService }]; } });

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SafeUrlPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeUrlPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: SafeUrlPipe, name: "safeUrl" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SafeUrlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safeUrl',
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });

class CommonsLibModule {
}
CommonsLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonsLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, declarations: [LoadingComponent,
        MessagesComponent,
        SafeUrlPipe], imports: [CommonModule, MatProgressSpinnerModule, MatIconModule], exports: [LoadingComponent,
        MessagesComponent,
        SafeUrlPipe] });
CommonsLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, providers: [LoadingService, MessagesService], imports: [CommonModule, MatProgressSpinnerModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadingComponent,
                        MessagesComponent,
                        SafeUrlPipe,
                    ],
                    imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
                    exports: [
                        LoadingComponent,
                        MessagesComponent,
                        SafeUrlPipe,
                    ],
                    providers: [LoadingService, MessagesService],
                }]
        }] });

/*
 * Public API Surface of commons-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonsLibModule, CommonsLibService, LoadingComponent, LoadingService, MessagesComponent, MessagesService, SafeUrlPipe };
//# sourceMappingURL=commons-lib.mjs.map
