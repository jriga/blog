(function(){
  'use strict';

  angular
    .module('blog')
    .controller('CreateArticleCtrl', CreateArticleCtrl);

  CreateArticleCtrl.$inject = ['Article'];
  function CreateArticleCtrl(Article){
    var vm = this;

    vm.article = {title: '', text: ''};
    vm.save = saveFn;

    /////////////////////

    function saveFn(data){
      Article.save({article:data});
    }
  }

})();
