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
        templateUrl  : 'articles.html',
        controller   : 'ArticlesCtrl',
        controllerAs : 'vm',
        resolve      :  {          
        }
      }).
      otherwise({redirectTo: '/'});
  }

})();
