$(document).ready(function(){

	$('.insta-gallery-left-arrow').on('click', function(){
		var firstInsta = $('.insta-slide:first');
		// var pos=$(firstInsta).offset().left;
		// $(firstInsta).offset({ left : pos-293});
		$('.insta-slider').append(firstInsta);
	});

	$('.insta-gallery-right-arrow').on('click', function(){
		var lastInsta = $('.insta-slide:last');
		// var pos=$(lastInsta).offset().right;
		// $(lastInsta).offset({ right : pos+293});
		$('.insta-slider').prepend(lastInsta);
		
	});

	$('.image-gallery-overlay-left').on('click', function(){
		var firstItem = $('.slider-item:first');
		$('.slider').append(firstItem);
	});

	$('.image-gallery-overlay-right').on('click', function(){
		var lastItem = $('.slider-item:last');
		$('.slider').prepend(lastItem);
		
	});	

});