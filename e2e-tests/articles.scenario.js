'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('blog articles', function() {


  it('loads angular', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Blog');

    element.all(by.binding('a.title')).then(function(articles){
      expect(articles.length).toBe(2)
    });
  });

    
});
