(function(){
  'use strict';
  
  angular
    .module('blog')
    .controller('ArticlesCtrl', ArticlesCtrlAs);

  ArticlesCtrlAs.$inject = ['article','previewFilter'];
  function ArticlesCtrlAs(article, previewFilter) {
    /* jshint validthis: true */
    var vm = this;
    vm.articles = article.all(format);


    ////////////////////////////////////
    function format(itemList){
      var data = [];
      angular.forEach(itemList, function(item,idx){
        var tile = {
          imageUrl : '/assets/'+ (idx+1) +'.jpg',
          preview  : previewFilter(50)(item.text),
          col      : minSpace('col')(),
          row      : minSpace('row')(),
          class    : 'blue'
        };

        data.push(angular.extend(item, tile));
      });
      return data;
    }

    function minSpace(category){
      var limits = {row:2, col:3},
          max = limits[category],
          min = 1;
      return function getRandomArbitrary() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    }
  }

})();
