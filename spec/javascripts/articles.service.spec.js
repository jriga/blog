'use strict';

describe('Article service',function(){
  var Article;

  beforeEach(module('blog'));

  beforeEach(function(){
    inject(function($injector){
      Article = $injector.get('Article');
    });
  });

  xit('provide an Article resource', function(){
    expect(Article).toEqual(function(){});
  });
});
