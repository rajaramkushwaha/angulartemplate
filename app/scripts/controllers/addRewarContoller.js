angular.module('sbAdminApp').controller('addRewarCtrl', function($scope,addRewarService) {	$scope.test=addRewarService.getTestData() ;});