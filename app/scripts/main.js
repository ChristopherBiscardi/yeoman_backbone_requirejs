require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
    underscore: '../components/underscore-amd/underscore-min',
    backbone: '../components/backbone-amd/backbone-min'
  }
});
 
require(['app'], function(app) {
  app.initialize();
});
