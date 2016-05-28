'use strict';
weatherForecast
    .controller('forecastController', ['$scope', '$resource', 'forecastService', function ($scope, $resource, forecastService) {
        $scope.city = forecastService.city;

        $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1e6d8bcb816fdcd89655f4c3c4b5c217',
            {
                callback: "JSON_CALLBACK"
            },
            {
                get: {
                    method: "JSONP"
                }
            });
            
            $scope.weatherResults = $scope.weatherAPI.get(
                {
                    q: $scope.city,
                    cnt: 2
                });
                
            $scope.convertToFahrenheit = function ( degK ) {
                return Math.round((1.8 * (degK - 273)) + 32);
            }
            
            $scope.convertToDate = function (dt){
                return new Date(dt * 1000);
            }
    }]);