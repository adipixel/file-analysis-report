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
			controller: function ($location, $scope, $http) {
				this.val = 5
				this.count = 0
				this.data = null
				self = this
				$http({
					method: 'get',
					url: 'http://localhost:9000/api/files.json',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(function (response) {
						console.log(response.data)
						self.data = response.data
					}, function (err) {
						console.log(err)
					})

				this.tabClass = 'active'
				this.toggleTabClass = function () {
					if (this.tabClass == 'active') {

					}
				}
			},
		})
}(window.angular));