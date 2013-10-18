'use strict';

angular.module('tapcatWebApp')
	.controller('AuthCtrl',['$scope', 'Restangular', 'personaAuthService', function ($scope, Restangular) {
		$scope.login = function() { navigator.id.request(); };
		Restangular.one('user').get().then(function() { $scope.login = function() { window.location = '/app'; }; });
	}]);
