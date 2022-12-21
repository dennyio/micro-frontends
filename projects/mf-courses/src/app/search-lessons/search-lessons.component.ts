import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { LessonComponent } from '../lesson/lesson.component';
import { Lesson } from '../models/lesson';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    LessonComponent
  ],
})
export class SearchLessonsComponent implements OnInit {
  public searchResults$: Observable<Lesson[]> | undefined;

  public activeLesson!: Lesson | null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}

  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}
