'use strict';

angular.module('tapcatWebApp')
	.controller('AuthCtrl',['$scope', '$http', 'personaAuthService', function ($scope, $http) {
		$scope.login = function() { navigator.id.request(); };
		$http.get('http://api.tapcat.net/user/')
			.success(function() { $scope.login = function() { window.location = '/app'; }; });
	}]);
