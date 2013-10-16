'use strict';

angular.module('tapcatWebApp', ['ngRoute'])
	.constant('api-url', 'http://api.tapcat.net')
	.constant('login-url', 'http://api.tapcat.net/login')
	.constant('logout-url', 'http://api.tapcat.net/logout')
	.constant('success-login-url', '/app')
	.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
		$httpProvider.defaults.withCredentials = true;
		$routeProvider
			.otherwise({
				redirectTo: '/'
			});
	}]);
