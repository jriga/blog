module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
      'vendor/assets/bower_components/angular/angular.js',
      'vendor/assets/bower_components/angular-route/angular-route.js',
      'vendor/assets/bower_components/angular-resource/angular-resource.js',
      'vendor/assets/bower_components/angular-animate/angular-animate.js',
      'vendor/assets/bower_components/angular-aria/angular-aria.js',
      'vendor/assets/bower_components/angular-material/angular-material.js',
      'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
      'vendor/assets/bower_components/faker/build/build/faker.js',
      'app/assets/javascripts/app/**/*.js',
      'spec/javascripts/**/*.js'
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
