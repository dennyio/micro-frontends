import { HttpClient } from '@angular/common/http';
import { LoadingService, MessagesService } from '@commons-lib';
import { Observable } from 'rxjs';
import { Course } from './models/course';
import * as i0 from "@angular/core";
export declare class StoreLibService {
    private http;
    private loading;
    private messages;
    private subject;
    courses$: Observable<Course[]>;
    constructor(http: HttpClient, loading: LoadingService, messages: MessagesService);
    private loadAllCourses;
    saveCourse(courseId: string, changes: Partial<Course>): Observable<any>;
    filterByCategory(category: string): Observable<Course[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreLibService>;
}
