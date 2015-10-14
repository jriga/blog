(function(){
  'use strict';

  angular
    .module('blog')
    .filter('preview', function(){ return previewFilter; });

  function previewFilter(maxNumOfChar, particule){
    particule = typeof particule !== 'undefined' ? particule : ' ...';

    return function textCutter(text){
      var short = text.substr(0, maxNumOfChar);
      if (/^\S/.test(text.substr(maxNumOfChar)))
        return short.replace(/\s+\S*$/, '') + particule;
      return short + particule;
    };
  };

})();
