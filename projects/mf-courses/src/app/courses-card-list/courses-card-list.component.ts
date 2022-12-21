import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCardListComponent implements OnInit {
  @Input()
  courses?: Course[] | null;

  @Output()
  private coursesChanged = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter((val) => !!val),
        tap(() => this.coursesChanged.emit())
      )
      .subscribe();
  }
}
