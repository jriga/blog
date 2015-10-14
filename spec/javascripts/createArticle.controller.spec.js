'use strict';

describe('Create Article Controller', function(){
  var CreateArticleCtrl,
      scope,
      article,
      articleSrv;

  beforeEach(module('blog'));

  beforeEach(function(){
    articleSrv = jasmine.createSpyObj('articleSrv',['save']);

    module(function($provide){
      $provide.factory('article',function(){
        return articleSrv;
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
    expect(articleSrv.save).toHaveBeenCalledWith(article);
  });
});

