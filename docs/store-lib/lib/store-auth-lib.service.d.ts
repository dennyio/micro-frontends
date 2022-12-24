import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import * as i0 from "@angular/core";
export declare class StoreAuthLibService {
    private http;
    private subject;
    user$: Observable<User | null>;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    constructor(http: HttpClient);
    login(email: string, password: string): Observable<User>;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreAuthLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreAuthLibService>;
}
