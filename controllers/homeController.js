'use strict';
weatherForecast
    .controller('homeController', ['$scope','forecastService', function ($scope, forecastService) {
        $scope.city = forecastService.city;
        
        $scope.$watch('city', function() {
           forecastService.city = $scope.city; 
        });
    }]);