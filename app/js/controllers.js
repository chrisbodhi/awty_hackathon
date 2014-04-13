'use strict';

/* Controllers */

angular.module('timelineApp.controllers', [])
  .controller('MyCtrl2', [function() {

  }])
  .controller('CuriosityCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sayPlanet = function() {
      $scope.planet = "Going to Mars";
    };

    $scope.followCuriosity = function() {
      alert("on it");
    };

    $scope.getDatum = function(){
      var httpRequest = $http.get('./js/awtyData.json')
        .success(function(data){
          $scope.datum = data;
        });
      };
  }]);
