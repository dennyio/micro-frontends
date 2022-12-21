const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfCoursesList: "http://localhost:4201/remoteEntry.js",
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
