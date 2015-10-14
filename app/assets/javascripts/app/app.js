(function(){
  'use strict';

  angular
    .module('blog', [
      'ngRoute',
      'ngResource',
      'ngAnimate', 
      'ngAria',
      'ngMaterial'
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
      otherwise({redirectTo: '/'});
  }

})();
