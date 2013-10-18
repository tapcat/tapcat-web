'use strict';

angular.module('tapcatWebApp')
	.controller('AppCtrl',['$scope', 'Restangular', function ($scope, Restangular) {
		$scope.user = Restangular.one('user').get();
	}]);
