'use strict';

/* Controllers */

angular.module('timelineApp.controllers', [])
  .controller('MyCtrl2', [function() {

  }])
  .controller('ProgressCtrl', [function() {

  }])
  .controller('IndexCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.getDatum = function(){
      var httpRequest = $http.get('./js/awtyData.json')
        .success(function(data){
          $scope.datum = data;
        });
      };
  }])
  .controller('CuriosityCtrl', ['$scope', '$http', '$animate', function($scope, $http) {
    $scope.sayPlanet = function() {
      $scope.planet = "Going to Mars";
    };

    $scope.followCuriosity = function() {
      
      alert("on it");
    };

    $scope.getDatum = function(){
      var httpRequest = $http.get('./js/awtyData.json')
        .success(function(data){
          $scope.datum = data[0];
        });
      };
  }]);
