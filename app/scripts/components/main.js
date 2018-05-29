(function (angular) {

	'use strict';

	/**
	 * @ngdoc overview
	 * @name llMainPage
	 * @description 
	 * # ll-main-page
	 *
	 * The root component
	 */
	angular
		.module('llMainPage', [])
		.component('llMainPage', {
			transclude: true,
			templateUrl: 'views/main.html',
			controller: function ($location, $scope, $http, dataService) {
				this.val = 5
				this.count = 0
				this.data = null
				this.host = 'http://localhost:9000/'
				self = this
				dataService.getData().then(function(data){
					self.data = data
				}, function(err){
					console.log(err)
				})
			},
		})
}(window.angular));