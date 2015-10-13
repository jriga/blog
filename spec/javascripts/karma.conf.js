module.exports = function(config){
  config.set({

    basePath : '../../vendor/assets/bower_components/',

    files : [
      'angular/angular.js',
      'angular-route/angular-route.js',
      'angular-mocks/angular-mocks.js',
      '../../../app/assets/javascripts/application.js',
      '../../../spec/javascripts/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
      
    }

    
  });

};
