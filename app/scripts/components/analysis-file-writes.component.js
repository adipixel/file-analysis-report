angular
  .module('llMainPage')
  .component('llAnalysisFileWrites', {
    templateUrl: 'views/analysisFileReads.html',
    //template: 'llAnalysisFileWrites',
    bindings:{
      list: '<',
    },
    transclude: true,
    controller: function(){
      this.selected = 0
      this.title = "Write Files"
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