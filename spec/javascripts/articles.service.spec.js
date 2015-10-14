'use strict';

describe('Article service',function(){
  var article,
      resQuery = [{
        title : 'my Title',
        text  : 'my text',
      }];

  beforeEach(module('blog'));

  beforeEach(function(){
    module(function($provide){
      $provide.value('$resource',function(){
        return {
          query : jasmine.createSpy('mockResource').and.returnValue(resQuery)
        };
      });
    });

    inject(function($injector){
      article = $injector.get('article');
    });
  });

  describe('.all()',function(){

    it('returns all articles', function(){
      expect(article.all()).toEqual(resQuery);
    });
  });

});
