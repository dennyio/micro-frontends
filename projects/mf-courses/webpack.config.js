const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfCoursesList",

  exposes: {
    "./HomeModule": "./projects/mf-courses/src/app/home/home.module.ts",
    "./LoginComponent":
      "./projects/mf-courses/src/app/login/login.component.ts",
    "./SearchLessonsComponent":
      "./projects/mf-courses/src/app/search-lessons/search-lessons.component.ts",
    "./CourseComponent":
      "./projects/mf-courses/src/app/course/course.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  sharedMappings: [
    "@commons-lib",
    "@store-lib",
    "@angular/common",
    "@angular/core",
    "@angular/router",
    "@angular/common/http",
    "@angular/material",
  ],
});
