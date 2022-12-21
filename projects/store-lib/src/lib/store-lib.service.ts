import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService, MessagesService } from '@commons-lib';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { Course, IResponse, sortCoursesBySeqNo } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class StoreLibService {
  private subject = new BehaviorSubject<Course[]>([]);

  public courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private messages: MessagesService
  ) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    const loadCourses$ = this.http.get<IResponse>('/api/courses').pipe(
      map((response) => response.payload),
      catchError((err) => {
        const message = 'Could not load courses';
        this.messages.showErrors(message);
        console.log(message, err);
        return throwError(() => err);
      }),
      tap((courses) => this.subject.next(courses))
    );

    this.loading.showLoaderUntilCompleted(loadCourses$).subscribe();
  }

  public saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    const courses = this.subject.getValue();

    const index = courses.findIndex((course) => course.id == courseId);

    const newCourse: Course = {
      ...courses[index],
      ...changes,
    };

    const newCourses: Course[] = courses.slice(0);

    newCourses[index] = newCourse;

    this.subject.next(newCourses);

    return this.http.put(`/api/courses/${courseId}`, changes).pipe(
      catchError((err) => {
        const message = 'Could not save course';
        console.log(message, err);
        this.messages.showErrors(message);
        return throwError(() => err);
      }),
      shareReplay()
    );
  }

  public filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses) =>
        courses
          .filter((course) => course.category == category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }
}
