import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchLessonsComponent } from './search-lessons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchLessonsComponent', () => {
  let component: SearchLessonsComponent;
  let fixture: ComponentFixture<SearchLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SearchLessonsComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
