'use strict';

// Declare app level module which depends on filters, and services
angular.module('timelineApp', [
  'ngRoute',
  'ngResource',
  'timelineApp.filters',
  'timelineApp.services',
  'timelineApp.directives',
  'timelineApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/curiosity', {templateUrl: 'partials/curiosity.html', controller: 'CuriosityCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
