'use strict';

describe('Article service',function(){
  var article,
      resHTTP = [{
        id    : 1,
        title : 'my Title',
        text  : 'my text',
      }];

  beforeEach(module('blog'));

  beforeEach(function(){
    module(function($provide){
      $provide.value('$resource',function(){
        return {
          query : jasmine.createSpy('mockResource').and.returnValue(resHTTP),
          save  : jasmine.createSpy('mockSave').and.returnValue(resHTTP[0])
        };
      });
    });

    inject(function($injector){
      article = $injector.get('article');
    });
  });

  describe('.all()',function(){

    it('returns all articles', function(){
      expect(article.all()).toEqual(resHTTP);
    });
  });


  describe('.save(data)', function(){
    it('saves article in backend',function(){
      var data = {
        title: resHTTP[0].title,
        text:  resHTTP[0].text
      };
      expect(article.save(data)).toEqual(resHTTP[0]);
    });
  });
});
