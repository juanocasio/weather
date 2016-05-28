var weatherForecast = angular.module("weatherForecast", ['ngRoute', 'ngResource'])
.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: "./templates/homeTemplate.html",
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: "./templates/forecastTemplate.html",
        controller: 'forecastController'
    })   
});