(function(){
  'use strict';

  angular
    .module('blog')
    .controller('ViewArticleCtrl', ViewArticleCtrl);

  ViewArticleCtrl.$inject = ['$routeParams','Article'];
  function ViewArticleCtrl($routeParams, Article){
    var vm = this;

    Article.get({id:$routeParams.id}, function(article){
      vm.article = article;
    });
  }

})();
