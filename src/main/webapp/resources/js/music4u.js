"use strict" 
function Session(x){
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('style', x+'/resources/css');
	sessionStorage.setItem('script', x+'/resources/js');
	sessionStorage.setItem('img', x+'/resources/img');
	return{
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		style : ()=>{return sessionStorage.getItem('style');},
		script : ()=>{return sessionStorage.getItem('script');},
		img : ()=>{return sessionStorage.getItem('img');}
	};
}