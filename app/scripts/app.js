'use strict';

/**
 * @ngdoc overview
 * @name challengeApp
 * @description
 * # challengeApp
 *
 * Main module of the application.
 */

angular
  .module('challengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'llMainPage',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<ll-main-page></ll-main-page>',
      })
      .when('/read_report', {
        template: '<ll-analysis-file-reads></ll-analysis-file-reads>',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
