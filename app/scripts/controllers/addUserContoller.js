angular.module('sbAdminApp').controller('addUserCtrl', function($scope,addUserService) {	$scope.test=addUserService.getTestData() ;});