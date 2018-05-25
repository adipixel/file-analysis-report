angular
  .module('llMainPage')
  .component('llTestComp', {
    templateUrl: 'views/test.html',
    bindings:{
      item: '='
    },
    transclude: true,
    require: {
      tabsCtrl: '^llMainPage'
    },
    controller: function(){
      this.$onInit = function() {
        this.yo = this.tabsCtrl.val;
        console.log(this);
      };
    }
    
  });