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
    bindings: {
      title: '='
    },
    controller: function($location, $scope, $http) {
      this.val = 5
      this.count = 0
      this.data = null
      self = this
      $http({
        method: 'get',
        url: 'http://localhost:9000/api/files.json',
        headers : {
          'Content-Type': 'application/json'
        }
      })
      .then(function(response){
        console.log(response.data)
        self.data = response.data
      }, function(err){
        console.log(err)
      })
      
      this.tabClass = 'active'
      this.toggleTabClass = function(){
        if(this.tabClass == 'active'){
          
        }
      }
    },
  })
  .filter('filename', function(){
    return function(x){
      var arr = x.split('\\')
      return arr[arr.length-1]
    }
  })
