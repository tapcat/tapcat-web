'use strict';

angular.module('tapcatWebApp', ['ngRoute'])
	.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
		$httpProvider.defaults.withCredentials = true;
		$routeProvider
			.otherwise({
				redirectTo: '/'
			});
	}]);
