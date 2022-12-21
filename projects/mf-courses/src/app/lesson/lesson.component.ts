import { Component, Input, OnInit } from '@angular/core';
import { CommonsLibModule } from '@commons-lib';
import { Lesson } from '../models/lesson';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  standalone: true,
  imports: [CommonsLibModule],
})
export class LessonComponent implements OnInit {
  @Input() lesson!: Lesson | null;

  constructor() {}

  ngOnInit(): void {}
}
