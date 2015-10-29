'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = 'dashboard';
	$scope.menuBar={ "menus":[			
				{		
				"id":1,
			    "displayName":"Dashboard",
				"style":"fa fa-dashboard fa-fw",
			    "menuItems":[
					{
					"refId":"dashboard.charlieDashbord",
					"displayName":"Admin Dashborard"
					},
					{				
					"refId":"dashboard.providerDashbord",
					"displayName":"Provider Dashbord"
					}
				  ]
				},
				{		
				"id":2,
			    "displayName":"User",
				"style":"fa fa-linux",
			    "menuItems":[
					{
					"refId":"dashboard.addUser",
					"displayName":"Add User"
					},
					{				
					"refId":"dashboard.manageUser",
					"displayName":"Manage User"
					}
				  ]
				},
				{		
				"id":3,
			    "displayName":"Provider",
			    "menuItems":[
					{
					"refId":"dashboard.addProvider",
					"displayName":"Add Provider"
					},
					{				
					"refId":"dashboard.manageProvider",
					"displayName":"Manage Provider"
					}
				  ]
				}
				
		]
};



/*
{
"id":2,
"displayName":"provider",
"menuItems":[
{
"refId":"addprovider",
"displayName":"Add Provider"
}
,
{
"refId":"manageprovider",
"displayName":"Manage Provider"
}


]
}
*/


        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };
      }
    }
  }]);
