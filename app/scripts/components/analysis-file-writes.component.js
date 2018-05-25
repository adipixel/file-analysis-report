/**
 * @ngdoc Component
 * @name llAnalysisFileWrites
 * @module llMainPage
 * @description 
 * This component presents the analysis 
 * report for file writes
 */

(function (angular) {
	angular
		.module('llMainPage')
		.component('llAnalysisFileWrites', {
			templateUrl: 'views/analysisReport.template.html',
			//template: 'llAnalysisFileWrites',
			bindings: {
				list: '<',
			},
			transclude: true,
			controller: function () {
				this.selected = 0
				this.title = "Write Files"
				this.$onInit = function () {
					console.log(this.list)
					this.report = this.list[this.selected]
				};
				this.getReport = function (id) {
					this.report = this.list[id]
					this.selected = id
				}
			}

		});
}(window.angular));