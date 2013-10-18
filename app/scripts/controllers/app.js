'use strict';

angular.module('tapcatWebApp')
	.controller('AppCtrl',['$scope', 'Restangular', function ($scope, Restangular) {
		Restangular.one('user').get().then(function(user) {
			$scope.user = user;
		});
	}]);
