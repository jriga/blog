'use strict';

describe('ArticlesCtrl',function(){
  var ArticlesCtrl,
      scope,
      articles;
      
  beforeEach(module('blog'));

  beforeEach(function(){
    articles =  [{title: 'my Title', text: 'my Text'}];

    module(function($provide){
      $provide.factory('Article', function(){
        return {
          query: function(callback){ return callback(articles); }
        };
      });
    });

    inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      ArticlesCtrl = $controller('ArticlesCtrl', {$scope: scope});
    });
  });

  it('loads articles', function(){
    expect(ArticlesCtrl.articles).toEqual(articles);
  });


  it('applies preview filter to articles',function(){
    var article = ArticlesCtrl.articles[0];
    expect(article).toEqual(jasmine.objectContaining({
      preview:'my Text ...'
    }));
  });
});

