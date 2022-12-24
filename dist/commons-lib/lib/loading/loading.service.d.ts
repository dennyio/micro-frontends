import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoadingService {
    private loadingSubject;
    loading$: Observable<boolean>;
    constructor();
    showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T>;
    loadingOn(): void;
    loadingOff(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingService>;
}
