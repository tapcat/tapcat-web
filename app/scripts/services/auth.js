'use strict';

angular.module('tapcatWebApp')
	.service('personaAuthService', ['$http', function ($http) {

		var login = function(assertion) {
			$http.post('//api.tapcat.net/login', 'assertion=' + assertion, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
				.success(function() {
					window.location = '/user';
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
		}
	}]);
