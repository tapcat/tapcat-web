'use strict';

angular.module('tapcatWebApp', ['ngRoute'])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.withCredentials = true;
	}])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
