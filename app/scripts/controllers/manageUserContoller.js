angular.module('sbAdminApp').controller('manageUserCtrl', function($scope,manageUserService) {	$scope.test=manageUserService.getTestData() ;});