(function(){
'use strict';
  
  angular
    .module('blog')
    .controller('ArticlesCtrl', ArticlesCtrlAs);

  ArticlesCtrlAs.$inject = ['article'];
  function ArticlesCtrlAs(article) {
    /* jshint validthis: true */
    var vm = this;
    vm.articles = article.all();
  }

})();
