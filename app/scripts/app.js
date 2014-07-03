'use strict';

var app = angular.module('ktsteinbergApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngPDFViewer',
    'ui.bootstrap'
]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main',
            controller: 'MainCtrl'
        })
        .when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'ResumePDFController'
        })
        .when('/projects', {
            templateUrl: 'partials/projects',
            controller: 'MainCtrl'
        })
        .when('/resources', {
            templateUrl: 'partials/resources',
            controller: 'MainCtrl'
        })
            .when('/resources/eecs370', {
                templateUrl: 'partials/resources/eecs370.html',
                controller: 'MainCtrl'
            })
                .when('/resources/eecs370/project2', {
                    templateUrl: 'partials/resources/eecs370/project2.html',
                    controller: 'MainCtrl'
                })
                .when('/resources/eecs370/project3', {
                    templateUrl: 'partials/resources/eecs370/project3.html',
                    controller: 'MainCtrl'
                })
                .when('/resources/eecs370/project4', {
                    templateUrl: 'partials/resources/eecs370/project4.html',
                    controller: 'MainCtrl'
                })
                .when('/resources/eecs370/cache', {
                    templateUrl: 'partials/resources/eecs370/cache-notes.html',
                    controller: 'MainCtrl'
                })
                .when('/resources/eecs370/lc2k', {
                    templateUrl: 'partials/resources/eecs370/lc2k-instructions.html',
                    controller: 'MainCtrl'
                })
            .when('/resources/eecs484', {
                templateUrl: 'partials/resources/eecs484.html',
                controller: 'MainCtrl'
            })
                .when('/resources/eecs484/project4', {
                    templateUrl: 'partials/resources/eecs484/p4/project4.html',
                    controller: 'MainCtrl'
                })
        .when('/skydiving', {
            templateUrl: 'partials/skydiving.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});