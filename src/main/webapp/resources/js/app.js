"use strict" 
var app = app || {};
app = (()=>{
	var init =x=>{
		app.router.init(x);
	};
	return{init:init};
})();

app.main = (()=>{
	var ctx, script, style, img;
	var init =x=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		onCreate();
	};
	var onCreate =x=>{
		setContentView();
	};
	var setContentView =x=>{
		$.getScript(script+'/sojin.js',()=>{
			sojin.box();
		})
		
	};
	return{init:init};
})();

app.router = {
		init : x=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.main.init();
			});
		}
};

