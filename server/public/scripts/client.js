var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/sale', {
        templateUrl: 'templates/sale.html',
        controller: 'SaleController as sc'
    }).when ('/rent', {
        templateUrl: 'templates/rent.html',
        controller: 'RentController as rc'
    }).when ('/new', {
        templateUrl: 'templates/new.html',
        controller: 'NewController as nc'
    });
});