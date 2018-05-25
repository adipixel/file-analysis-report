/**
 * @ngdoc object
 * @name config
 * @module moduleName
 * @description moduleName Config
 * @requires dependency
 */
(function (angular) {
    'use strict';

    angular
        .module('challengeApp')
        .config(['$stateProvider', config]);

    /**
     * @param dependency
     */
    function config($stateProvider) {
        //code
        $stateProvider
            .state('file-reads', {
                abstract: true,
                resolve: {
                   fileWriteData: fileWriteData
                },
                template: 'view/analysisFileReads.html',
                css: '',
                url: '/read_reports'
            });

    }

    function fileWriteData () {
        // api call to fetch data
        //return the data
        this.data = "aditya"
    }
}(window.angular));
