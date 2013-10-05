'use strict';

angular.module('tapcatWebApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
