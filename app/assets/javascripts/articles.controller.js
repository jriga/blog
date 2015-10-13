(function(){
  'use strict';
  
  angular
    .module('blog')
    .controller('ArticlesCtrl', ArticlesCtrlAs);

  ArticlesCtrlAs.$inject = ['article'];
  function ArticlesCtrlAs(article) {
    /* jshint validthis: true */
    var vm = this;
    vm.articles = article.all(format);


    ////////////////////////////////////
    function format(itemList){
      var data = [];
      angular.forEach(itemList, function(item,idx){
        var tile = {
          imageUrl : '/assets/'+ (idx+1) +'.jpg',
          preview  : preview(50)(item.text),
          col      : minSpace('col')(),
          row      : minSpace('row')(),
          class    : 'blue'
        };

        data.push(angular.extend(item, tile));
      });
      return data;
    }

    function preview(n, particule) {
      particule = typeof particule !== 'undefined' ?  particule : ' ...';
      return function textCutter(text) {
        var short = text.substr(0, n);
        if (/^\S/.test(text.substr(n)))
          return short.replace(/\s+\S*$/, "") + particule;
        return short + particule;
      };
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
