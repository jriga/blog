(function(){
  'use strict';

  angular
    .module('blog')
    .factory('article', Article);

  Article.$inject = ['$resource'];

  function Article($resource){
    var resource = $resource('http://localhost:3000/articles.json',{}, {cache: true}),
        service  = {
          all  :  all
        };

    return service;

    /////////////////////
    function all(callback){
      return resource.query(callback);
    }
  }
})();

