(function (angular) {
    /**
     * @ngdoc Service
     * @name dataService
     * @description 
     * This service gets data for the application
     */
    angular
        .module('llMainPage')
        .service('dataService', function ($http, $q) {
            this.getData = function () {
                var host = 'http://localhost:9000/'
                var deferred = $q.defer()
                $http({
                    method: 'get',
                    url: host + 'api/files.json',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (data) {
                        deferred.resolve(data.data)
                    }, function (err) {
                        deferred.reject("Data not available")
                    })

                return deferred.promise
            }
        })

}(window.angular));
