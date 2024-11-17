var app = angular.module('musicPlayerApp', ['ngRoute'])
        app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                })
                .when('/currentSong', {
                    templateUrl: 'templates/currentSong.html',
                })
                .otherwise({
                redirectTo: '/'
                });
        }]);