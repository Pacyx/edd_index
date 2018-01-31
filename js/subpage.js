
$(function(){
	'use strict';

				
	$('.bigdata').mouseenter(function(){
		$('.items').addClass('animated bounceInRight')
	});

	$('#skills').mouseenter(function(){
		$('.l-list').addClass('animated bounceInLeft')
		$('.r-list').addClass('animated bounceInRight')
	});


	$('#zixun').mouseenter(function() {
		$('#zixun').addClass('changeCard');
	});

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
		$('#content').toggleClass('changeHd');
		$('.navbar ').toggleClass('changeNav');
		$('#over').toggleClass('overlay')
	});


});


