var weatherForecast = angular.module("weatherForecast", ['ngRoute', 'ngResource', 'homeController', 'forecastController'])
.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateURL: "./templates/homeTemplate.html",
        controller: 'homeController'
    })
    .when('/forecast', {
        templateURL: "./templates/forecastTemplate.html",
        controller: 'forecastController'
    })   
});