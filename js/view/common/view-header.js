define(['zepto', 'underscore', 'backbone', '../../template/common/header'], function($, _, Backbone, tpl1){
	var ListView = Backbone.View.extend({
    el: $('body'),
    ui:{
            "ulOpen": ".title",
         },
  
  	events: function() {
  	 	 var events = {};
  	 	  events["click " + this.ui.ulOpen]="ulOpen";
      return events
    },
		
    initialize: function(){
      this.render();
    },
    render: function(){
      var template = _.template(tpl1);
      this.$el.find(".header").html(template);
	 }
  });
  var listView = new ListView();
    return Backbone.View.extend({
    mainViewClass: listView
  });
});