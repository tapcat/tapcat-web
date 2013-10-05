'use strict';

angular.module('tapcatWebApp')
	.controller('AuthCtrl',['$scope', '$http', 'personaAuthService', function ($scope, $http) {
		$scope.needLogin = true;
		$http.get('//api.tapcat.net/user/')
			.success(function() { $scope.needLogin = false; });

		$scope.login = function() { navigator.id.request(); };
		$scope.logout = function() { navigator.id.logout(); };

	}]);
