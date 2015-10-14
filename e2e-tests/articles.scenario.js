'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('blog articles', function() {

  describe('menu', function(){
    beforeEach(function(){
      browser.get('/');
    });

    it('has link to home page',function(){
      expect(element(by.css('md-toolbar a[href=#/]'))).toBeTruthy();
    });

    it('has link to add article page',function(){
      expect(element(by.css('md-toolbar a[href=#/article]'))).toBeTruthy();
    });
  });

  describe('home page', function(){

    it('loads articles', function() {
      browser.get('/');
      expect(browser.getTitle()).toEqual('Blog');

      element.all(by.binding('a.title')).then(function(articles){
        expect(articles.length).toBe(2)
      });
    });

  });


  describe('add article page', function(){
    beforeEach(function(){
      browser.get('/#/article');
    });

    xit('')
  });
});
