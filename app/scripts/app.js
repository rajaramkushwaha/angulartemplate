'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
	.state('dashboard.addUser',{url:'/addUser',controller:'addUserCtrl',templateUrl:'views/addUser.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/addUserService.js','scripts/controllers/addUserContoller.js' ]              })            }          }    })
	.state('dashboard.manageUser',{url:'/manageUser',controller:'manageUserCtrl',templateUrl:'views/manageUser.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/manageUserService.js','scripts/controllers/manageUserContoller.js' ]              })            }          }    })
	.state('dashboard.manageProvider',{url:'/manageProvider',controller:'manageProviderCtrl',templateUrl:'views/manageProvider.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/manageProviderService.js','scripts/controllers/manageProviderContoller.js' ]              })            }          }    })
	.state('dashboard.addProvider',{url:'/addProvider',controller:'addProviderCtrl',templateUrl:'views/addProvider.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/addProviderService.js','scripts/controllers/addProviderContoller.js' ]              })            }          }    })
	.state('dashboard.addOffer',{url:'/addOffer',controller:'addOfferCtrl',templateUrl:'views/addOffer.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/addOfferService.js','scripts/controllers/addOfferContoller.js' ]              })            }          }    })
	.state('dashboard.manageOffer',{url:'/manageOffer',controller:'manageOfferCtrl',templateUrl:'views/manageOffer.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/manageOfferService.js','scripts/controllers/manageOfferContoller.js' ]              })            }          }    })
	.state('dashboard.addRewar',{url:'/addRewar',controller:'addRewarCtrl',templateUrl:'views/addRewar.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/addRewarService.js','scripts/controllers/addRewarContoller.js' ]              })            }          }    })
	.state('dashboard.manageReward',{url:'/manageReward',controller:'manageRewardCtrl',templateUrl:'views/manageReward.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/manageRewardService.js','scripts/controllers/manageRewardContoller.js' ]              })            }          }    })
	.state('dashboard.charlieDashbord',{url:'/charlieDashbord',controller:'charlieDashbordCtrl',templateUrl:'views/charlieDashbord.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/charlieDashbordService.js','scripts/controllers/charlieDashbordContoller.js' ]              })            }          }    })
	.state('dashboard.providerDashbord',{url:'/providerDashbord',controller:'providerDashbordCtrl',templateUrl:'views/providerDashbord.html',  resolve: {            loadMyFiles:function($ocLazyLoad) {              return $ocLazyLoad.load({                name:'sbAdminApp',                files:['scripts/services/providerDashbordService.js','scripts/controllers/providerDashbordContoller.js' ]              })            }          }    })
   
  }]);

    
