'use strict';

// Declare app level module which depends on filters, and services
angular.module('timelineApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'timelineApp.filters',
  'timelineApp.services',
  'timelineApp.directives',
  'timelineApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {templateUrl: '/index', controller: 'IndexCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/progress', {templateUrl: 'partials/progress.html', controller: 'ProgressCtrl'});
  $routeProvider.when('/Curiosity Rover', {templateUrl: 'partials/curiosity.html', controller: 'CuriosityCtrl'});
  $routeProvider.otherwise({redirectTo: 'progress'});
}]);
