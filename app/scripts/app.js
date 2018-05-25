'use strict';

/**
 * @ngdoc overview
 * @name challengeApp
 * @description
 * # challengeApp
 *
 * Main module of the application.
 */
(function (angular) {
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
				.otherwise({
					redirectTo: '/'
				});
		});
}(window.angular));