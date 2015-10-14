(function(){
  'use strict';

  angular
    .module('blog')
    .factory('article', Article);

  Article.$inject = ['$resource'];
  function Article($resource){
    var resource = $resource('http://localhost:3000/articles.json',{}, {cache: true}),
        service  = {
          all  :  allFn,
          save :  saveFn
        };

    return service;

    /////////////////////
    function allFn(callback){
      return resource.query(callback);
    }

    function saveFn(data){
      return resource.save({article:data});
    }
  }
})();

