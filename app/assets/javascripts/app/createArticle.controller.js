(function(){
  'use strict';

  angular
    .module('blog')
    .controller('CreateArticleCtrl', CreateArticleCtrl);

  CreateArticleCtrl.$inject = ['article'];
  function CreateArticleCtrl(article){
    var vm = this;

    vm.article = {title: '', text: ''};
    vm.save = saveFn;

    /////////////////////

    function saveFn(data){
      article.save(data);
    }
  }

})();
