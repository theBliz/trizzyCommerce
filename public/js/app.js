'use strict';

/**
 * @ngdoc overview
 * @name testYoAngularGrunt2App
 * @description
 * # testYoAngularGrunt2App
 *
 * Main module of the application.
 */
angular
  .module('testYoAngularGrunt2App', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
