angular
  .module('llMainPage')
  .filter('filename', function(){
    return function(x){
      var arr = x.split('\\')
      var res = arr[arr.length-1]
      if (res == ""){
        res= arr[arr.length-2] + "\\"
      }
      return res
    }
  })
