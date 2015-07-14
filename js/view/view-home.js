define(['zepto', 'underscore', 'backbone', '../model/data1', '../template/home','view/common/view-header','view/common/view-footer'], 
  function($, _, Backbone, data1, tpl1,headerView,footerView){
	var ListView = Backbone.View.extend({
    el: $('body'),
    ui:{
            "wrapper": ".wrap"

         },
  
  	events: function() {
  	 	 var events = {};
  	 	  events["click " + this.ui.ulOpen]="ulOpen";
      return events
    },
		
    initialize: function(){
      this.render()
    },
    render: function(){
     var template = _.template(tpl1);
     var result = template({datas: data1});
	   this.$el.find(this.ui.wrapper).html(result);
     return this.$el;
    }
  });

  var listView = new ListView();

});