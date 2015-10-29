angular.module('sbAdminApp').controller('charlieDashbordCtrl', function($scope,charlieDashbordService) {	
$scope.test=charlieDashbordService.getTestData() ;

});