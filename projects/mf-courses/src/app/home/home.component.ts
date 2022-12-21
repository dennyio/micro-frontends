import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course, StoreLibService } from '@store-lib';
import { Observable } from 'rxjs';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public beginnerCourses$: Observable<Course[]> | undefined;
  public advancedCourses$: Observable<Course[]> | undefined;

  constructor(
    private coursesStore: StoreLibService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  public openDialog() {
    this.dialog.open(CourseDialogComponent);
  }

  public reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');

    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }
}
