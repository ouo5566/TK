"use strict" 
var sojin = {
		box : ()=>{
			let $w = $('#wrapper');
			
			$('<div/>').attr({id : 'nav-box'}).appendTo($w);
			$('<ul/>').attr({id : 'nav'}).addClass('nav nav-pills nav-justified').appendTo($('#nav-box'));
			$('<li/>').append(
					$('<a/>')
					.attr({href:'#'})
					.html('Music4U')
					.click(e=>{
				$('#content').empty();
				sojin.m4u();
			})).appendTo($('#nav'));
			$('<li/>').append($('<a/>').attr({href:'#'}).html('DJ4U').click(e=>{
				
			})).appendTo($('#nav'));
			$('<div/>').attr({id : 'content'}).appendTo($w);
			
		},
		m4u : ()=>{
			$('<p/>').html('이런 노래는 어떠세요 ?').appendTo($('#content'));
			$('<div/>').attr({id:'music'}).appendTo($('#content'));
			$('<p/>').html('즐겨들은 곡과 비슷한 곡').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('전체듣기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('선택듣기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('담기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('나의앨범추가').appendTo($('#music'));
			$('<table/>').addClass('table table-bordered text-center').attr({id:'music-list'}).appendTo($('#music'));
			$('<tr/>').attr({id:'music-list-meta'}).appendTo($('#music-list'));
			$('<td/>').html('곡').appendTo($('#music-list-meta'));
			$('<td/>').html('아티스트').appendTo($('#music-list-meta'));
			$('<td/>').html('앨범').appendTo($('#music-list-meta'));
			$('<td/>').html('기능').appendTo($('#music-list-meta'));
			$('<tr/>').attr({id:'music-list-row1'}).appendTo($('#music-list'));
			$('<td/>').html('Love U').appendTo($('#music-list-row1'));
			$('<td/>').html('청하').appendTo($('#music-list-row1'));
			$('<td/>').html('Blooming Blue').appendTo($('#music-list-row1'));
			$('<td/>').appendTo($('#music-list-row1'))
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>')
			;
			
			$('</div>').appendTo($('#content'));
			$('</div>').appendTo($('#content'));
		},
		d4u : ()=>{
			
		}
};

