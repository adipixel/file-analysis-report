angular
  .module('llMainPage')
  .component('llAnalysisFileReads', {
    templateUrl: 'views/analysisFileReads.html',
    //template: 'llAnalysisFileReads',
    bindings:{
      list: '<',
    },
    transclude: true,
    controller: function(){
      this.selected = 0
      this.title = "Read Files"
      this.$onInit = function() {
        console.log(this.list)
        this.report = this.list[this.selected]
      };
      this.getReport = function(id){
        this.report = this.list[id]
        this.selected = id
      }
    }
    
  });