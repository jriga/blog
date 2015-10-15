(function(){
  'use strict';

  angular
    .module('blog', [
      'ngRoute',
      'ngResource',
      'ngAnimate',
      'ngAria',
      'ngMaterial',
      'btford.markdown'
    ])
    .config(['$routeProvider', config]);


  config.$inject = ['$routeProvider'];
  function config($routeProvider){
    $routeProvider.
      when('/', {
        templateUrl  : '/pages/articles.html',
        controller   : 'ArticlesCtrl',
        controllerAs : 'vm'
      }).
      when('/article',{
        templateUrl  : '/pages/article.html',
        controller   : 'CreateArticleCtrl',
        controllerAs : 'vm'
      }).
      when('/article/:id',{
        templateUrl  : '/pages/article-view.html',
        controller   : 'ViewArticleCtrl',
        controllerAs : 'vm'
      }).
      when('/article/:id/edit',{
        templateUrl  : '/pages/article.html',
        controller   : 'EditArticleCtrl',
        controllerAs : 'vm',
        resolve      : {
          articleToEdit : articleToEditFn
        }
      }).
      otherwise({redirectTo: '/'});
  }

  articleToEditFn.$inject = ['Article','$routeParams','$location'];
  function articleToEditFn(Article, $routeParams, $location){
    var id;
    if (typeof $routeParams.id === 'undefined'){
      console.log('Using $location when $routeParams is empty')
      id = $location.path().split('/')[2];
    }
    else{
      id = $routeParams.id;
    }

    return Article.get({id:id});
  }

})();
