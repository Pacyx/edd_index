$(function () {
	'use strict';

	// 初始化
	$('body').scrollspy({
		target: '#header',
		offset: 85
	});

	smoothScroll.init({
		selector: '.smoothScroll',
		speed: 1000,
		offset: 85,
		before: function (anchor, toggle) {
			// Check if mobile navigation is active
			var query = Modernizr.mq('(max-width: 767px)');
			// Check if element is navigation eelement
			var navItem = $(toggle).parents("#main-navbar").length;
			// If mobile nav & nav item then close nav
			if (query && navItem !== 0) {
				$("button.navbar-toggle").click();
			}
		}
	});


	$('.navbar-toggle').click(function () {
		$("#main-navigation.navbar-default").css({
			"background-color": "rgb(68, 114, 196)"
		});

	})

	window.onscroll = scroll;
	
	//增加用戶体验
	scroll();

	animationForMore();
	
	contactIconClick();

	dataImgClick();
	
});

function animationForMore(){	
	$('.bigdata').mouseenter(function () {
		$('.items').addClass('animated bounceInLeft')
	});

	$('.bigdata').mouseleave(function () {
		$('.items').removeClass('animated bounceInLeft')
	});

	$('#skills').mouseenter(function () {
		$('.l-list').addClass('animated bounceInLeft')
		$('.r-list').addClass('animated bounceInRight')
	});


	$('#eddais').mouseenter(function () {
		$('.eddai').addClass('aibg');
		$('.eddai').css('animation-play-state', 'running');

		$('.item-modal1').addClass('aicards1');
		$('.item-modal1').css('animation-play-state', 'running');
	})

	$('#eddais').mouseleave(function () {
		$('.eddai').removeClass('aibg');
		$('.item-modal1').removeClass('aicards1')
	})

	$('#edddatas').mouseenter(function () {
		$('.edddata').addClass('aibg');
		$('.edddata').css('animation-play-state', 'running');

		$('.item-modal2').addClass('aicards2')
		$('.item-modal2').css('animation-play-state', 'running')
	})

	$('#edddatas').mouseleave(function () {
		$('.edddata').removeClass('aibg');
		$('.item-modal2').removeClass('aicards2')
	})

	$('#eddprojects').mouseenter(function () {
		$('.eddproject').addClass('aibg');
		$('.eddproject').css('animation-play-state', 'running');

		$('.item-modal3').addClass('aicards3')
		$('.item-modal3').css('animation-play-state', 'running')
	})

	$('#eddprojects').mouseleave(function () {
		$('.eddproject').removeClass('aibg');
		$('.item-modal3').removeClass('aicards3')
	})
}

function dataImgClick(){
	$('.data-img1').mouseenter(function () {
		$('.datatitle_1').addClass('showcard');
		$('.datatitles_1').addClass('hidecard');
	});

	$('.data-img1').mouseleave(function () {
		$('.datatitle_1').removeClass('showcard');
		$('.datatitles_1').removeClass('hidecard');
	});


	$('.data-img2').mouseenter(function () {
		$('.datatitle_2').addClass('showcard');
		$('.datatitles_2').addClass('hidecard');
	});

	$('.data-img2').mouseleave(function () {
		$('.datatitle_2').removeClass('showcard');
		$('.datatitles_2').removeClass('hidecard');
	});

	$('.data-img3').mouseenter(function () {
		$('.datatitle_3').addClass('showcard');
		$('.datatitles_3').addClass('hidecard');
	});

	$('.data-img3').mouseleave(function () {
		$('.datatitle_3').removeClass('showcard');
		$('.datatitles_3').removeClass('hidecard');
	});

	$('.data-img4').mouseenter(function () {
		$('.datatitle_4').addClass('showcard');
		$('.datatitles_4').addClass('hidecard');
	});

	$('.data-img4').mouseleave(function () {
		$('.datatitle_4').removeClass('showcard');
		$('.datatitles_4').removeClass('hidecard');
	});

}

function contactIconClick(){
	$('.isphone').on('click', function () {
		$('.isemail').toggle();
		$('.isaddress').toggle();
		$('.forphone').toggle();
	});

	$('.isaddress').on('click', function () {
		$('.isemail').toggle();
		$('.isphone').toggle();
		$('.foraddress').toggle();
	});

	$('.isemail').on('click', function () {
		$('.isphone').toggle();
		$('.isaddress').toggle();
		$('.foremail').toggle();
	});

}

function scroll() {
	if (window.pageYOffset >= 10) {
		
		$("#backtop").css({
			"background": "#31708f",
			"color": "#fff"
		})

		$("#main-navigation.navbar-default").css({
			"background-color": "rgb(68, 114, 196)"
		});
	} else {
		$("#backtop").css({
			"background": "rgba(0,0,0,0)",
			"color": "rgba(0,0,0,0)"
		})

		$("#main-navigation.navbar-default").css({
			"background-color": "rgb(68, 114, 196)"
		});
	}
}
