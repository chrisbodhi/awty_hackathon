'use strict';

/* Controllers */

angular.module('timelineApp.controllers', [])
  .controller('MyCtrl2', [function() {

  }])
  // .controller('IndexCtrl', [function() {
  // }])
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
          $scope.datum = data;
        });
      };

    $scope.allMars = function (data) {
      return data.planet === "Mars";
    }
  }]);
