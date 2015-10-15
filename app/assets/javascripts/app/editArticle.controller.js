(function(){
  'use strict';

  angular
    .module('blog')
    .controller('EditArticleCtrl', EditArticleCtrl);

  EditArticleCtrl.$inject = ['Article','articleToEdit'];
  function EditArticleCtrl(Article,articleToEdit){
    var vm = this;
    vm.article = articleToEdit;
    vm.save = saveFn;

    /////////////////////

    function saveFn(data){
      Article.update({id: data.id},data);
    }
  }

})();
