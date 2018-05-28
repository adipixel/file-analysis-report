(function (angular) {
	angular
		.module('llMainPage')
		/**
	   * @ngdoc filter
	   * @name filename
	   * @module llMainPage
	   * @description 
	   * This filter takes the file's fullname
	   * and returns only file name without the
	   * path
	   */
		.filter('filename', function () {
			return function (x) {
				var arr = x.split('\\')
				var res = arr[arr.length - 1]
				if (res == "") {
					res = arr[arr.length - 2] + "\\"
				}
				return res
			}
		})
		/**
	   * @ngdoc filter
	   * @name unixDate
	   * @module llMainPage
	   * @description 
	   * This filter takes the round-trip date
	   * and returns unix stlye date
	   */
		.filter('unixDate', function () {
			return function (x) {
				return Date.parse(x)
			}
		})
}(window.angular));