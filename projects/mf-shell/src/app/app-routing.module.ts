import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('mfCoursesList/HomeModule').then((m) => m.HomeModule),
  },
  // {
  //   path: 'login',
  //   loadComponent: () => import('@store-lib').then((c) => c.LoginComponent),
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('mfCoursesList/LoginComponent').then((c) => c.LoginComponent),
  },
  {
    path: 'search-lessons',
    loadComponent: () =>
      import('mfCoursesList/SearchLessonsComponent').then(
        (c) => c.SearchLessonsComponent
      ),
  },
  {
    path: 'courses/:courseId',
    loadComponent: () =>
      import('mfCoursesList/CourseComponent').then((c) => c.CourseComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
