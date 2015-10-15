'use strict';

describe('Create Article Controller', function(){
  var CreateArticleCtrl,
      scope,
      article,
      Article;

  beforeEach(module('blog'));

  beforeEach(function(){
    Article = jasmine.createSpyObj('Article',['save']);

    module(function($provide){
      $provide.factory('Article',function(){
        return Article;
      });
    });

    inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      CreateArticleCtrl = $controller('CreateArticleCtrl', {$scope: scope});
    });

    article = {
      title: 'King Carter',
      text: '#Some Header\nYes this the real deal'
    };
  });

  it('initializes a blank article', function(){
    expect(CreateArticleCtrl.article).toEqual({title: '', text: ''});
  });

  it('saves article', function(){
    CreateArticleCtrl.save(article);
    expect(Article.save).toHaveBeenCalledWith({article:article});
  });
});

