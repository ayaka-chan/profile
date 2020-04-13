$(function() {

	// バナーの枠
	var duration=300;
	
	$('#banners button')
		.on('mouseover', function() {
			$(this).stop(true).animate({
				borderWidth: '10px',
				borderColor: '#99f'
			}, duration, 'easeOutSine');
		})
		.on('mouseout', function() {
			$(this).stop(true).animate({
				borderWidth: '1px',
				borderColor: '#999'
			}, duration, 'easeOutSine');
		});
	
	// ページトップへ
	$( '#move-page-top' ).click(function() {
		// スムーズにスクロールする
		$( 'html,body' ).animate( {scrollTop:0} , 'fast' ) ;
	});
	
	// スライドショー
	$(document).ready(function(){
		$('.chocolat-parent').Chocolat();
	});
	
});

// 今の西暦を取得
function year() {
	var data = new Date(); var now_year = data.getFullYear(); document.write(now_year);
}
