(function(){
  'use strict';

  angular
    .module('blog')
    .factory('Article', Article);

  Article.$inject = ['$resource'];
  function Article($resource){
    return $resource('http://localhost:3000/articles/:id',{}, {
      cache: true,
      'update': { method: 'PATCH' }
    });
  }
})();

