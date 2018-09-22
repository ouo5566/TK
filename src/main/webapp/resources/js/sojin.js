"use strict" 
var sojin = {
		box : ()=>{
			let $w = $('#wrapper');
			
			$('<div/>').attr({id : 'nav-box'}).appendTo($w);
			$('<ul/>').attr({id : 'nav'}).addClass('nav nav-pills nav-justified').appendTo($('#nav-box'));
			$('<li/>').attr({id : 'music4u'}).appendTo($('#nav'));
			$('<a/>')
			.attr({href:'#'})
			.html('Music4U')
			.appendTo($('#music4u'))
			.click(e=>{
				$('#music4u').addClass('active');
				$('#dj4u').removeClass('active');
				$('#content').empty();
				sojin.m4u();
			});
			$('<li/>').attr({id : 'dj4u'}).appendTo($('#nav'));
			$('<a/>')
			.attr({href:'#'})
			.html('DJ4U')
			.appendTo($('#dj4u'))
			.click(e=>{
				$('#dj4u').addClass('active');
				$('#music4u').removeClass('active');
				$('#content').empty();
				sojin.d4u();
			});
			$('<div/>').attr({id : 'content'}).appendTo($w);
			
		},
		m4u : ()=>{
			$('<p/>').html('이런 노래는 어떠세요 ?').appendTo($('#content'));
			// #music start
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
			$('<button/>').addClass('btn btn-secondary').html('더 보기').appendTo($('#music'));
			
			// #album start
			$('<div/>').attr({id:'album'}).appendTo($('#content'));
			$('<p/>').html('즐겨들은 곡과 비슷한 아티스트의 앨범').appendTo($('#album'));
			$('<ul/>').addClass('').attr({id : 'album-list'}).appendTo($('#album'));
			$('<li/>').attr({id : 'album-list-item1'}).appendTo($('#album-list'));
			$('<a/>').attr({href:'#'}).html('앨범자켓 <br> 앨범명 <br>').appendTo($('#album-list-item1'));
			$('<a/>').attr({href:'#'}).html('아티스트').appendTo($('#album-list-item1'));
			$('<li/>').attr({id : 'album-list-item2'}).appendTo($('#album-list'));
			$('<a/>').attr({href:'#'}).html('앨범자켓 <br> 앨범명 <br>').appendTo($('#album-list-item2'));
			$('<a/>').attr({href:'#'}).html('아티스트').appendTo($('#album-list-item2'));
			$('<ul/>')
			.addClass('pager')
			.appendTo($('#artist'))
			.append($('<li/>').addClass('previous').html('<a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>'))
			.append($('<li/>').addClass('next').html('<a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'))
			;
			// #album end
			
			// #artist start
			$('<div/>').attr({id:'artist'}).appendTo($('#content'));
			$('<p/>').html('소녀시대의 노래를 좋아한다면 ?').appendTo($('#artist'));
			$('<ul/>').addClass('').attr({id : 'artist-list'}).appendTo($('#artist'));
			$('<li/>').attr({id : 'artist-list-item1'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item1'));
			$('<li/>').attr({id : 'artist-list-item2'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item2'));
			// #artist end
		},
		d4u : ()=>{
			$('<div/>').attr({id : 'genre-box'}).appendTo($('#content'));
			$('<ul/>').attr({id : 'genre'}).addClass('nav nav-pills nav-justified').appendTo($('#genre-box'));
			$('<table/>').addClass('table table-bordered text-center').attr({id:'genre-list'}).appendTo($('#genre'));
			$('<tr/>').attr({id:'genre-list-meta'}).appendTo($('#genre-list'));
			$('<td/>').html('뮤직스타일').appendTo($('#genre-list-meta'));
			$('<td/>').html('계절과날씨').appendTo($('#genre-list-meta'));
			$('<td/>').html('상황과장소').appendTo($('#genre-list-meta'));
			$('<td/>').html('감정과기분').appendTo($('#genre-list-meta'));
			$('<td/>').html('장르별').appendTo($('#genre-list-meta'));
			
			$('<tr/>').attr({id:'genre-list-row-1'}).appendTo($('#genre-list'));
			$('<tr/>').attr({id:'genre-list-row-2'}).appendTo($('#genre-list'));
			$('<tr/>').attr({id:'genre-list-row-3'}).appendTo($('#genre-list'));
			$('<tr/>').attr({id:'genre-list-row-4'}).appendTo($('#genre-list'));
			$('<tr/>').attr({id:'genre-list-row-5'}).appendTo($('#genre-list'));
			
			$('<td/>').html('신나는').appendTo($('#genre-list-row-1'));
			$('<td/>').html('차분한').appendTo($('#genre-list-row-2'));
			$('<td/>').html('어쿠스틱').appendTo($('#genre-list-row-3'));
			$('<td/>').html('트로피칼').appendTo($('#genre-list-row-4'));
			$('<td/>').html('부드러운').appendTo($('#genre-list-row-5'));
			
			$('<td/>').html('봄').appendTo($('#genre-list-row-1'));
			$('<td/>').html('여름').appendTo($('#genre-list-row-2'));
			$('<td/>').html('가을').appendTo($('#genre-list-row-3'));
			$('<td/>').html('겨울').appendTo($('#genre-list-row-4'));
			$('<td/>').html('비오는날').appendTo($('#genre-list-row-5'));
			
			$('<td/>').html('드라이브').appendTo($('#genre-list-row-1'));
			$('<td/>').html('휴식').appendTo($('#genre-list-row-2'));
			$('<td/>').html('편집숍/매장').appendTo($('#genre-list-row-3'));
			$('<td/>').html('헬스').appendTo($('#genre-list-row-4'));
			$('<td/>').html('클럽').appendTo($('#genre-list-row-5'));
			
			$('<td/>').html('스트레스').appendTo($('#genre-list-row-1'));
			$('<td/>').html('이별').appendTo($('#genre-list-row-2'));
			$('<td/>').html('사랑/고백').appendTo($('#genre-list-row-3'));
			$('<td/>').html('새벽감성').appendTo($('#genre-list-row-4'));
			$('<td/>').html('위로').appendTo($('#genre-list-row-5'));
			
			$('<td/>').html('OST').appendTo($('#genre-list-row-1'));
			$('<td/>').html('힙합').appendTo($('#genre-list-row-2'));
			$('<td/>').html('팝송').appendTo($('#genre-list-row-3'));
			$('<td/>').html('R&B').appendTo($('#genre-list-row-4'));
			$('<td/>').html('클래식').appendTo($('#genre-list-row-5'));
			
			$('<div/>').attr({id:'list-box'}).addClass('container').appendTo($('#content'));
			$('<h2/>').addClass('my-4').html('DJ PLAYLIST').appendTo($('#list-box'));
			$('<div/>').addClass('row').attr({id : 'list'}).appendTo($('#list-box'));
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('늦은 여름에 느끼는 마지막 청량감')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 2018.09.02 <br> #여름 #신나는 #헬스'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br>'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br>'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br>'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br>'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br>'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			
			
			
			
		}
};

