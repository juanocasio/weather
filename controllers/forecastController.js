'use strict';
weatherForecast
    .controller('forecastController', ['$scope', '$routeParams','forecastService', function ($scope, $routeParam, forecastService) {
        $scope.name = forecastService.name;
    }]);