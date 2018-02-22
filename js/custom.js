$(function () {
	'use strict';


	//初始化
	window.isFinash = true;
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

	$(document.body).css({
		"overflow-x": "hidden",
		"overflow-y": "hidden"
	});

	window.onscroll = scroll;

	$('#bigdata-text').css({
		'padding': '20px 40px'
	});
	$('#seedata-text').css({
		'padding': '20px 40px'
	})
	$('#work-text').css({
		'padding': '20px 40px'
	})
	$('#ai1').css({
		'padding': '20px 40px'
	})

	if (document.compatMode == "BackCompat") {
		var getWidth = document.body.clientWidth;
		var toresize = document.body.clientHeight;

	} else {
		var getWidth = document.documentElement.clientWidth;
		var toresize = document.documentElement.clientHeight;
	}

	// wheel(wheelUp, wheelDown);
	contralScorll();

	contralResize(getWidth, toresize);
	// draw(getWidth,toresize);

	$(window).resize(function () {
		if (document.compatMode == "BackCompat") {
			var newWidth = document.body.clientWidth;
			var newresize = document.body.clientHeight;
		} else {
			var newWidth = document.documentElement.clientWidth;
			var newresize = document.documentElement.clientHeight;
		}

		contralResize(newWidth, newresize);

	});

	var navt = $('.ischoose').attr('id');
	$('#' + navt + '>span:first').css('background', '#f95353');

	//增加用户体验
	navbarToggleClick();

	initCard(getWidth, toresize);

	animationForPage(getWidth, toresize);

	topAndFootClick();

	sideNavClick();

	nextAndPreClick();

	scroll();

	// toggleBg1();
	// toggleBg2();
	// toggleBg3();
	// toggleBg4();
});

function contralResize(newWidth, newresize) {
	animationForPage(newWidth, newresize);
	var Option1 = {
		reverse: true,
		scale: 1.05,
		shadow: true,
		'shadow-save': true
	}

	// var Option2 = {
	// 	reverse: false,
	// 	scale: 1.05,
	// 	shadow: false,
	// 	'shadow-save': false
	// }

	if (newWidth < 1120) {

		$('#bigdata-text').removeClass('col-md-6');
		$('#bigdata-text').addClass('col-md-12 col-sm-12 col-xs-12');
		$('#seedata-text').removeClass('col-md-6');
		$('#seedata-text').addClass('col-md-12 col-sm-12 col-xs-12');
		$('#work-text').removeClass('col-md-6');
		$('#work-text').addClass('col-md-12 col-sm-12 col-xs-12');
		$('#ai1').removeClass('col-md-6');
		$('#ai1').addClass('col-md-12 col-sm-12 col-xs-12');

		$('.contcat-text').removeClass('col-md-6');
		$('.contcat-text').addClass('col-md-12 col-sm-12 col-xs-12');
	}

	if (newWidth < 617) {
		$('.bigtitle').css('font-size', '30px');
		$('.bigul>li').css('font-size', '18px');
		// $('#ai1,#work-text,#seedata-text,#bigdata-text').UniversalTilt(Option2);
	} else {
		$('#ai1,#work-text,#seedata-text,#bigdata-text').UniversalTilt(Option1);

		$('.bigtitle').css('font-size', '38px');
		$('.bigul>li').css('font-size', '22px');

		$('.toresize').css("height", newresize - 85)
		$('.toresize1').css("height", newresize)
	}

	if (newWidth < 555) {
		$('#edd-text').removeClass('col-md-8');
		$('#edd-text').removeClass('col-xs-8 ');
		$('#edd-text').removeClass('col-lg-8');
		$('#edd-text').addClass('col-md-12');
		$('#edd-text').addClass('col-sm-12');
		$('#edd-text').addClass('col-xs-12');

		$('.h1').css('font-size', '40px');
		$('.edd-js').css('font-size', '20px');

	} else {
		$('#edd-text').removeClass('col-md-12');
		$('#edd-text').removeClass('col-sm-12');
		$('#edd-text').removeClass('col-xs-12');
		$('#edd-text').addClass('col-md-8');
		$('#edd-text').addClass('col-xs-8 ');
		$('#edd-text').addClass('col-lg-8');

		$('.h1').css('font-size', '60px');
		$('.edd-js').css('font-size', '26px')
	}

	if (newWidth < 471) {
		$('#bigdata-1').css('display', 'none');
		$('#bigdata-2').css('display', 'block');
		$('#work,#work_1,#skills,#skills_1,#contact').css('padding', '50px 0');
		$('.topre,.tonext').css('display', 'none');
		$('#backtop').css('display', 'none');

		mobileForCard()

	} else {
		backeCard()
		$('#bigdata-2').css('display', 'none');
		$('#bigdata-1').css('display', 'block');
		$('#work,#work_1,#skills,#skills_1,#contact').css('padding', '0');
		$('.topre,.tonext').css('display', 'block');
		$('#backtop').css('display', 'block');
	}

}

function sideNavClick() {
	$('#part1,#part2,#part3,#part4,#part5').on('click', function (e) {
		clearAnimated();
		$('#footer').removeClass('fixefoot');

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('.ischoose').removeClass('ischoose');
		var current = $(e.target).attr('class').substr(0, 8);
		$('.' + current).addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');

	});
	$('#part6').on('click', function (e) {
		clearAnimated();
		$('#footer').addClass('fixefoot');
		getChoose(e);
	});




}

function nextAndPreClick() {
	$('.pull1').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');

	})

	$('.pull2').on('click', function (e) {

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull3').on('click', function (e) {
		// e.preventDefault();
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current3').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull4').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull5').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');
		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull6').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current3').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull7').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current5').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull8').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull9').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').addClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current6').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull10').on('click', function () {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current5').addClass('ischoose');

		clearAnimated()

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
}

function topAndFootClick() {
	$('#brand-mobile').on('click', function (e) {
		clearAnimated();

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');

		// $('#navtip1').css('background','#f95353');
	});

	$('#backtop').on('click', function (e) {
		clearAnimated();

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart1').on('click', function (e) {
		clearAnimated();

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart2').on('click', function (e) {
		clearAnimated();
		// setTimeout(function() {
		// 	$('.seedata-imgs').addClass('animated bounceInRight')
		// }, 1000);

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart3').on('click', function (e) {

		clearAnimated()
		// setTimeout(function() {
		// 	$('.ai-img').addClass('animated swing');
		// }, 1000);

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart4').on('click', function (e) {
		clearAnimated();

		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').addClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current6').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});
}

function scroll() {

	if (window.pageYOffset >= 10) {
		$("#backtop").css({
			"background": "#f85252",
			"color": "#fff"
		})
		$("#main-navigation.navbar-default").removeClass('showbg2')
		$("#main-navigation.navbar-default").addClass('showbg1');
	} else {
		$("#backtop").css({
			"background": "",
			"color": "rgba(0,0,0,0)"
		})
		$("#main-navigation.navbar-default").removeClass('showbg1')
		$("#main-navigation.navbar-default").addClass('showbg2');
	}
}

function animationForPage(newWidth, newresize) {
	if (newWidth < 471) {

	} else {

		$('#seedata-text').mouseenter(function () {
			moveline1();
			$('#seedata-text').on('click', function (e) {
				e.stopPropagation();
			});
			$('#work').on('click', function () {
				$('.line1').removeClass('moveline');
				$('.line1').addClass('moveline1');

				$('#seedata-text').removeClass('makebg1');
				$('#seedata-text').css('box-shadow', '0 0 0');

				$('#work').removeClass('makebg')

				$('.t-sp1').css('color', '#333');
				$('.u-sp1').css({
					'color': '#55565b',
					'text-shadow': ''
				});
			})

			$('#seedata-text').addClass('makebg1');

			$('#work').removeClass('makebgbk');
			$('#work').addClass('makebg');

			$('.t-sp1').css('color', '#fff');
			$('.u-sp1').css({
				'color': '#fff',
				'text-shadow': '2px 2px 2px #000'
			});


		})

		$('#work-text').mouseenter(function () {
			moveline2()

			$('#work-text').on('click', function (e) {
				e.stopPropagation();
			});

			$('#work-text').addClass('makebg2');
			$('#work_1').addClass('makebg');

			$('.t-sp2').css('color', '#fff');
			$('.u-sp2').css({
				'color': '#fff',
				'text-shadow': '2px 2px 2px #000'
			});

			$('#work_1').on('click', function () {
				$('.line2').removeClass('moveline');
				$('.line2').addClass('moveline1');

				$('#work-text').removeClass('makebg2');
				$('#work_1').removeClass('makebg')

				$('.t-sp2').css('color', '#333');
				$('.u-sp2').css({
					'color': '#55565b',
					'text-shadow': ''
				});
				$('#work-text').css('box-shadow', '0 0 0');
			})

		})

		$('#ai1').mouseenter(function () {
			moveline3();
			$('#ai1').on('click', function (e) {
				e.stopPropagation();
			});

			$('#ai1').addClass('makebg3');
			$('#skills').addClass('makebg');

			$('.t-sp3').css('color', '#fff');
			$('.u-sp3').css({
				'color': '#fff',
				'text-shadow': '2px 2px 2px #000'
			});

			$('#skills').on('click', function () {
				$('.line3').removeClass('moveline');
				$('.line3').addClass('moveline1');

				$('#ai1').removeClass('makebg3');
				$('#skills').removeClass('makebg');

				$('.t-sp3').css('color', '#333');
				$('.u-sp3').css({
					'color': '#55565b',
					'text-shadow': ''
				});
				$('#ai1').css('box-shadow', '0 0 0');
			})
		})

		$('#bigdata-text').mouseenter(function () {
			moveline4();
			$('#bigdata-text').on('click', function (e) {
				e.stopPropagation();
			});

			$('#bigdata-text').addClass('makebg4');
			$('#skills_1').addClass('makebg');

			$('.t-sp4').css('color', '#fff');
			$('.u-sp4').css({
				'color': '#fff',
				'text-shadow': '2px 2px 2px #000'
			});

			$('#skills_1').on('click', function () {
				$('.line4').removeClass('moveline');
				$('.line4').addClass('moveline1');

				$('#bigdata-text').removeClass('makebg4');
				$('#skills_1').removeClass('makebg')

				$('.t-sp4').css('color', '#333');
				$('.u-sp4').css({
					'color': '#55565b',
					'text-shadow': ''
				});
				$('#bigdata-text').css('box-shadow', '0 0 0');
			})
		})

	}

}

function navbarToggleClick() {
	$('.navbar-toggle').click(function () {
		console.log($('.navbar-toggle').attr('class').substr(14));
		console.log($('.ischoose').attr('id'));
		var topnavst = $('.navbar-toggle').attr('class').substr(14);
		var attop = $('.ischoose').attr('id');
		if (attop == "part1") {
			if (topnavst != 'collapsed') {
				$("#main-navigation.navbar-default").addClass('showbg2');
			} else {
				$("#main-navigation.navbar-default").removeClass('showbg2');
				$("#main-navigation.navbar-default").css({
					"background-color": "rgb(68, 114, 196)"
				});
			}
		} else {
			$("#main-navigation.navbar-default").css({
				"background-color": "rgb(68, 114, 196)"
			});
		}

	})
};

function clearAnimated() {
	$('.items').removeClass('animated bounceInLeft');
	$('.ai-img').removeClass('animated swing');
	$('.bigdata-imgs').removeClass('animated tada');
	$('.seedata-imgs').removeClass('animated bounceInRight');
}

function getChoose(e) {
	var navtips = $('.ischoose').attr('id');
	$('#' + navtips + '>span:first').css('background', '#999');

	$('.ischoose').removeClass('ischoose');
	var current = $(e.target).attr('class').substr(0, 8);
	$('.' + current).addClass('ischoose');

	var newnavtips = $('.ischoose').attr('id');
	$('#' + newnavtips + '>span:first').css('background', '#f95353');
}

function contralScorll() {
	if (document.attachEvent) {
		document.attachEvent('onmousewheel', scrollFunc);
	}

	if (document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	} //W3C 
	document.onmousewheel = scrollFunc; //IE/Opera/Chrome 

}

function scrollFunc(e) {
	e = e || window.event;
	// var dy = e.originalEvent.wheelDelta;
	var navtips = $('.ischoose').attr('id');
	var getIndex = navtips.substr(4, 5);
	if (isFinash) {
		isFinash = false;
		setTimeout(function () {
			if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
				if (e.wheelDelta > 0) { //当滑轮向上滚动时  
					var ss = getIndex - 1
					console.log(ss);
					$('#topart' + ss).click();
				}
				if (e.wheelDelta < 0) { //当滑轮向下滚动时  
					var ss = getIndex - 1 + 2;
					console.log(ss);
					$('#topart' + ss).click();
				}
			} else if (e.detail) { //Firefox滑轮事件  
				if (e.detail > 0) {
					var ss = getIndex - 1 + 2;
					console.log(ss);
					$('#topart' + ss).click();
				}
				if (e.detail < 0) {
					var ss = getIndex - 1
					console.log(ss);
					$('#topart' + ss).click();
				}
			}
			isFinash = true;
		}, 180);

	}
}

function moveline1() {
	$('.line1').removeClass('oline');
	$('.line1').removeClass('moveline1');
	$('.line1').addClass('moveline');

}

function moveline2() {
	$('.line2').removeClass('oline');
	$('.line2').removeClass('moveline1');
	$('.line2').addClass('moveline');
}

function moveline3() {
	$('.line3').removeClass('oline');
	$('.line3').removeClass('moveline1');
	$('.line3').addClass('moveline');
}

function moveline4() {
	$('.line4').removeClass('oline');
	$('.line4').removeClass('moveline1');
	$('.line4').addClass('moveline');
}

function toggleBg4() {
	$('#bigdata-text').on('click', function () {
		var obg = $('.swbg4').attr('class').substr(11, 12);
		$('.togglebg4').addClass('togglebg02');

		if (obg == "4") {
			$('.swbg4').addClass('swbg044');
			$('.swbg4').removeClass('swbg04');
		} else {
			$('.swbg4').addClass('swbg04');
			$('.swbg4').removeClass('swbg044');
		}
		setTimeout(() => {
			$('.togglebg4').removeClass('togglebg02')
		}, 500);
	})
}

function initCard(newWidth, newresize) {
	if (newWidth < 471) {
		mobileForCard()

	} else {
		backeCard()
		// $('#seedata-text').addClass('makebg1');
		// $('#work-text').addClass('makebg2');
		// $('#ai1').addClass('makebg3');
		// $('#bigdata-text').addClass('makebg4');

		// $('.t-sp1').css('color','#fff');
		// $('.t-sp2').css('color','#fff');
		// $('.t-sp3',).css('color','#fff');
		// $('.t-sp4').css('color','#fff');
		// $('.u-sp1').css({'color':'#fff','text-shadow':'2px 2px 2px #000'});
		// $('.u-sp2').css({'color':'#fff','text-shadow':'2px 2px 2px #000'});
		// $('.u-sp3').css({'color':'#fff','text-shadow':'2px 2px 2px #000'});
		// $('.u-sp4').css({'color':'#fff','text-shadow':'2px 2px 2px #000'});
	}

}

function mobileForCard() {
	$('.line1').removeClass('moveline');
	$('.line1').addClass('moveline1');

	$('#seedata-text').removeClass('makebg1');
	$('#seedata-text').css('box-shadow', '0 0 0');

	$('#work').removeClass('makebg')

	$('.t-sp1').css('color', '#333');
	$('.u-sp1').css({
		'color': '#55565b',
		'text-shadow': ''
	});
	///////////////////////
	$('.line2').removeClass('moveline');
	$('.line2').addClass('moveline1');

	$('#work-text').removeClass('makebg2');
	$('#work_1').removeClass('makebg')

	$('.t-sp2').css('color', '#333');
	$('.u-sp2').css({
		'color': '#55565b',
		'text-shadow': ''
	});
	$('#work-text').css('box-shadow', '0 0 0');
	///////////////////////////
	$('.line3').removeClass('moveline');
	$('.line3').addClass('moveline1');

	$('#ai1').removeClass('makebg3');
	$('#skills').removeClass('makebg');

	$('.t-sp3').css('color', '#333');
	$('.u-sp3').css({
		'color': '#55565b',
		'text-shadow': ''
	});
	$('#ai1').css('box-shadow', '0 0 0');
	//////////////////////////////////////////
	$('.line4').removeClass('moveline');
	$('.line4').addClass('moveline1');

	$('#bigdata-text').removeClass('makebg4');
	$('#skills_1').removeClass('makebg')

	$('.t-sp4').css('color', '#333');
	$('.u-sp4').css({
		'color': '#55565b',
		'text-shadow': ''
	});
	$('#bigdata-text').css('box-shadow', '0 0 0');
}

function backeCard() {
	moveline1();
	$('#seedata-text').addClass('makebg1');

	$('#work').removeClass('makebgbk');
	$('#work').addClass('makebg');

	$('.t-sp1').css('color', '#fff');
	$('.u-sp1').css({
		'color': '#fff',
		'text-shadow': '2px 2px 2px #000'
	});
	//////////////////
	moveline2()

	$('#work-text').addClass('makebg2');
	$('#work_1').addClass('makebg');

	$('.t-sp2').css('color', '#fff');
	$('.u-sp2').css({
		'color': '#fff',
		'text-shadow': '2px 2px 2px #000'
	});
	/////////////////
	moveline3();

	$('#ai1').addClass('makebg3');
	$('#skills').addClass('makebg');

	$('.t-sp3').css('color', '#fff');
	$('.u-sp3').css({
		'color': '#fff',
		'text-shadow': '2px 2px 2px #000'
	});
	/////////////////
	moveline4();

	$('#bigdata-text').addClass('makebg4');
	$('#skills_1').addClass('makebg');

	$('.t-sp4').css('color', '#fff');
	$('.u-sp4').css({
		'color': '#fff',
		'text-shadow': '2px 2px 2px #000'
	});
}


// function toggleBg1(){
// 	$('#seedata-text').on('click',function () { 

// 		var obg=$('.swbg1').attr('class').substr(11, 12);
// 		$('.togglebg1').addClass('togglebg01');

// 		if(obg=="1"){
// 				$('.swbg1').addClass('swbg011');
// 				$('.swbg1').removeClass('swbg01');	

// 		}else{
// 			$('.swbg1').addClass('swbg01');
// 			$('.swbg1').removeClass('swbg011');
// 		}

// 		setTimeout(() => {
// 			$('.togglebg1').removeClass('togglebg01') 
// 		}, 500);
// 	})

// }

// function toggleBg2() { 
// $('#work-text').on('click',function () { 
// 	var obg=$('.swbg2').attr('class').substr(11, 12);
// 	$('.togglebg2').addClass('togglebg02');

// 	if(obg=="2"){
// 		$('.swbg2').addClass('swbg022');
// 		$('.swbg2').removeClass('swbg02');	
// 	}else{
// 		$('.swbg2').addClass('swbg02');
// 		$('.swbg2').removeClass('swbg022');
// 	}

// 	setTimeout(() => {
// 		$('.togglebg2').removeClass('togglebg02') 
// 	}, 500);
// })}

// function toggleBg3(){
// 	$('#ai1').on('click',function () { 
// 		var obg=$('.swbg3').attr('class').substr(11, 12);
// 		$('.togglebg3').addClass('togglebg01');

// 		if(obg=="3"){
// 			$('.swbg3').addClass('swbg033');
// 			$('.swbg3').removeClass('swbg03');	
// 		}else{
// 			$('.swbg3').addClass('swbg03');
// 			$('.swbg3').removeClass('swbg033');
// 		}

// 		setTimeout(() => {
// 			$('.togglebg3').removeClass('togglebg01') 
// 		}, 500);
// 	})

// }
