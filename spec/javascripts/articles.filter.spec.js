'use strict';

describe('Articles Preview Filter',function(){
  var preview,
      text;

  beforeEach(module('blog'));

  beforeEach(function(){
    inject(function($injector){
      preview = $injector.get('previewFilter');
    });

    text = 'this is a sample sentence that allows us to test the preview filter';
  });

  it('shortens text to specified length',function(){
    expect(preview(10)(text)).toEqual('this is a ...');
  });

  it('shortening particule is configurable', function(){
    expect(preview(10,' ^_^')(text)).toEqual('this is a ^_^');
  });
});

