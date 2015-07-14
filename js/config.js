require.config({
  baseUrl : '../js',
  path : {lib : 'lib',  page : 'page'},
  paths : {
    'zepto'   : 'lib/zepto.min',
    'backbone'    : 'lib/backbone.min',
    'underscore'    : 'lib/underscore'
  },
  shim:{
    'zepto': { 
      exports: 'Zepto'
    }
  }
});