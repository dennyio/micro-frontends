import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../models/course';
import * as moment from 'moment';
import { MessagesService } from '@commons-lib';
import { StoreLibService } from '@store-lib';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  providers: [MessagesService],
})
export class CourseDialogComponent implements OnInit {
  form: FormGroup;
  course: Course;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private coursesStore: StoreLibService,
    private messagesService: MessagesService
  ) {
    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    const changes = this.form.value;

    this.coursesStore.saveCourse(this.course.id, changes).subscribe();

    this.dialogRef.close(changes);

    // const changes = this.form.value;

    // const saveCourse$ = this.courseService
    //   .saveCourse(this.course.id, changes)
    //   .pipe(
    //     catchError((err) => {
    //       const message = 'Could not save course.';
    //       console.log(message, err);
    //       this.messagesService.showErrors(message);
    //       return throwError(() => err);
    //     })
    //   );

    // const save$ = this.loadingService
    //   .showLoaderUntilCompleted(saveCourse$)
    //   .subscribe((val) => {
    //     this.dialogRef.close(val);
    //   });
  }

  close() {
    this.dialogRef.close();
  }
}
