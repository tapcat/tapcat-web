'use strict';

angular.module('tapcatWebApp')
	.service('personaAuthService', ['$http', function ($http) {

		var login = function(assertion) {
			$http.post('http://api.tapcat.net/login', 'assertion=' + assertion, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
				.success(function() {
					// experiment only. Another request should contains cookies
					$http.get('http://api.tapcat.net/user/');
					//window.location = '/user';
				})
				.error(function() {
					navigator.id.logout();
				});
		};

		var logout = function() {
			$http.post('/logout').then(function() {
				window.location = '/';
			});
		};

		navigator.id.watch({ onlogin: login,
			onlogout: logout });

		return {
			login: login,
			logout: logout
		};
	}]);
