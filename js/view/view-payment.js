define(['zepto', 'underscore', 'backbone', '../model/data1', '../template/payment/index'], function($, _, Backbone, data1, tpl1){
  console.log(tpl1);
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
      alert("payment")
     // _.bindAll(this, 'render', 'ulOpen'); // every function that uses 'this' as the current object should be in here

      this.render();
    },
    // `render()` now introduces a button to add a new list item.
    render: function(){
    var template = _.template(tpl1);
	 var result = template({datas: data1});
	this.$el.find(".wrap").html(result);
	//业务代码
	$('.ul').hide();
                      
    },
    ulOpen: function(){
    	debugger
      $('.ul>li:last-child').addClass('last-li');
            $('body>div:first-child>ul').show();
            $('.title').click(function(){
                $(this).siblings().toggle();
                $(this).parent().siblings().children('.bbs-nav-ul').hide();
            })  
    }
  });

  var listView = new ListView();

});