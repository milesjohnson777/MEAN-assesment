var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/add', {
        templateUrl: '/views/add.html',
        controller: 'AddController'
    }).when('/home', {
        templatUrl: '/views/index.html'
    }).when('/list', {
        templateUrl: '/views/list.html',
        controller: 'ListController'
    }).otherwise({ redirectTo: '/home' });
}]);
