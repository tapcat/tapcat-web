'use strict';

angular.module('tapcatWebApp')
	.service('personaAuthService', ['$http', 'login-url', 'logout-url', 'success-login-url', function ($http, loginUrl, logoutUrl, successUrl) {

		var login = function(assertion) {
			$http.post(loginUrl, 'assertion=' + assertion, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
				.success(function() {
					window.location = successUrl;
				})
				.error(function() {
					navigator.id.logout();
				});
		};

		var logout = function() {
			$http.post(logoutUrl).then(function() {
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
