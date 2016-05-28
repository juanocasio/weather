'use strict';
weatherForecast
    .controller('homeController', ['$scope','forecastService', function ($scope, forecastService) {
        $scope.name = forecastService.name;

    }]);