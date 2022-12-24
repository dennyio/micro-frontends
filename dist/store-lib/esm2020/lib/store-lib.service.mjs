import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, shareReplay, tap, throwError, } from 'rxjs';
import { sortCoursesBySeqNo } from './models/course';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@commons-lib";
export class StoreLibService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZS1saWIvc3JjL2xpYi9zdG9yZS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEdBQUcsRUFFSCxXQUFXLEVBQ1gsR0FBRyxFQUNILFVBQVUsR0FDWCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUt4RSxNQUFNLE9BQU8sZUFBZTtJQUsxQixZQUNVLElBQWdCLEVBQ2hCLE9BQXVCLEVBQ3ZCLFFBQXlCO1FBRnpCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFQM0IsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLGFBQVEsR0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU9sRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDbkMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUM3QyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRU0sVUFBVSxDQUFDLFFBQWdCLEVBQUUsT0FBd0I7UUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV4QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBRW5FLE1BQU0sU0FBUyxHQUFXO1lBQ3hCLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNqQixHQUFHLE9BQU87U0FDWCxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQWEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUQsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsTUFBTSxPQUFPLEdBQUcsdUJBQXVCLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxFQUFFLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNkLE9BQU87YUFDSixNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO2FBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUM1QixDQUNGLENBQUM7SUFDSixDQUFDOzs2R0EvRFUsZUFBZTtpSEFBZixlQUFlLGNBRmQsTUFBTTs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSwgTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnQGNvbW1vbnMtbGliJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY2F0Y2hFcnJvcixcbiAgbWFwLFxuICBPYnNlcnZhYmxlLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB0aHJvd0Vycm9yLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvdXJzZSwgSVJlc3BvbnNlLCBzb3J0Q291cnNlc0J5U2VxTm8gfSBmcm9tICcuL21vZGVscy9jb3Vyc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVMaWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb3Vyc2VbXT4oW10pO1xuXG4gIHB1YmxpYyBjb3Vyc2VzJDogT2JzZXJ2YWJsZTxDb3Vyc2VbXT4gPSB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogTWVzc2FnZXNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMubG9hZEFsbENvdXJzZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFsbENvdXJzZXMoKSB7XG4gICAgY29uc3QgbG9hZENvdXJzZXMkID0gdGhpcy5odHRwLmdldDxJUmVzcG9uc2U+KCcvYXBpL2NvdXJzZXMnKS5waXBlKFxuICAgICAgbWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UucGF5bG9hZCksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdDb3VsZCBub3QgbG9hZCBjb3Vyc2VzJztcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zaG93RXJyb3JzKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCBlcnIpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcigoKSA9PiBlcnIpO1xuICAgICAgfSksXG4gICAgICB0YXAoKGNvdXJzZXMpID0+IHRoaXMuc3ViamVjdC5uZXh0KGNvdXJzZXMpKVxuICAgICk7XG5cbiAgICB0aGlzLmxvYWRpbmcuc2hvd0xvYWRlclVudGlsQ29tcGxldGVkKGxvYWRDb3Vyc2VzJCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUNvdXJzZShjb3Vyc2VJZDogc3RyaW5nLCBjaGFuZ2VzOiBQYXJ0aWFsPENvdXJzZT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGNvdXJzZXMgPSB0aGlzLnN1YmplY3QuZ2V0VmFsdWUoKTtcblxuICAgIGNvbnN0IGluZGV4ID0gY291cnNlcy5maW5kSW5kZXgoKGNvdXJzZSkgPT4gY291cnNlLmlkID09IGNvdXJzZUlkKTtcblxuICAgIGNvbnN0IG5ld0NvdXJzZTogQ291cnNlID0ge1xuICAgICAgLi4uY291cnNlc1tpbmRleF0sXG4gICAgICAuLi5jaGFuZ2VzLFxuICAgIH07XG5cbiAgICBjb25zdCBuZXdDb3Vyc2VzOiBDb3Vyc2VbXSA9IGNvdXJzZXMuc2xpY2UoMCk7XG5cbiAgICBuZXdDb3Vyc2VzW2luZGV4XSA9IG5ld0NvdXJzZTtcblxuICAgIHRoaXMuc3ViamVjdC5uZXh0KG5ld0NvdXJzZXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYC9hcGkvY291cnNlcy8ke2NvdXJzZUlkfWAsIGNoYW5nZXMpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdDb3VsZCBub3Qgc2F2ZSBjb3Vyc2UnO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCBlcnIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNob3dFcnJvcnMobWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycik7XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZpbHRlckJ5Q2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZyk6IE9ic2VydmFibGU8Q291cnNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jb3Vyc2VzJC5waXBlKFxuICAgICAgbWFwKChjb3Vyc2VzKSA9PlxuICAgICAgICBjb3Vyc2VzXG4gICAgICAgICAgLmZpbHRlcigoY291cnNlKSA9PiBjb3Vyc2UuY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpXG4gICAgICAgICAgLnNvcnQoc29ydENvdXJzZXNCeVNlcU5vKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==