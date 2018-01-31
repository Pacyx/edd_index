$(function () {
	'use strict';


	//初始化

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
		"overflow-x":"hidden",
		"overflow-y":"hidden"
	  });
  
	window.onscroll = scroll;

	if (document.compatMode == "BackCompat") {
		var getWidth = document.body.clientWidth;
		var toresize = document.body.clientHeight;
	} else { 
		var getWidth  = document.documentElement.clientWidth;
		var toresize = document.documentElement.clientHeight;
	}

	$('.toresize').css("height", toresize - 85);
	$('.toresize1').css("height", toresize);

	$(window).resize(function () {
		if (document.compatMode == "BackCompat") {
			var newWidth = document.body.clientWidth;
			var newresize = document.body.clientHeight;
		} else { 
			var newWidth  = document.documentElement.clientWidth;
			var newresize = document.documentElement.clientHeight;
		}

		if(newWidth<1120){

			$('#seedata-text').removeClass('col-md-6');
			$('#seedata-text').addClass('col-md-12 col-sm-12 col-xs-12');
			$('#work-text').removeClass('col-md-6');
			$('#work-text').addClass('col-md-12 col-sm-12 col-xs-12');
			$('#ai1').removeClass('col-md-6');
			$('#ai1').addClass('col-md-12 col-sm-12 col-xs-12');
		
			
			$('.contcat-text').removeClass('col-md-6');
			$('.contcat-text').addClass('col-md-12 col-sm-12 col-xs-12');
			
			// $('.bigtitle').css('font-size','20px')
		}

		if(newWidth<617){
			$('.bigtitle').css('font-size','30px');
			$('.bigul').css('font-size','25px');
		}else{
			$('.bigtitle').css('font-size','45px');
			$('.bigul').css('font-size','2.3em');

			$('.toresize').css("height", newresize - 85)
			$('.toresize1').css("height", newresize)
		}

		if(newWidth<555){
			$('.edd-text').removeClass('');
			$('.edd-text').addClass('col-md-12','col-sm-12','col-xs-12','column');
			
			$('.h1').css('font-size','50px')
		}else{
			$('.edd-text').removeClass('');
			$('.edd-text').addClass('col-md-8','col-xs-8','col-lg-8','column');
			$('.h1').css('font-size','60px')
		}
		// var newresize = document.body.clientHeight;
		console.log('H:'+newresize);
		console.log('W'+ newWidth);
		// $('.toresize').css("height", newresize - 85)
		// $('.toresize1').css("height", newresize)

	});

	var navt = $('.ischoose').attr('id');
	$('#' + navt + '>span:first').css('background', '#f95353');

	//增加用户体验
	navbarToggleClick();

	animationForPage()

	topAndFootClick();

	sideNavClick();

	nextAndPreClick();

	stopscroll();


});



function stopscroll(){
	//判断浏览器
	var isIE = navigator.userAgent.match(/MSIE (\d)/i);
	isIE = isIE ? isIE[1] : undefined;
	var isFF = /FireFox/i.test(navigator.userAgent);
	//获取元素
	var counter = document.getElementById("counter");
	//鼠标滚轮事件
	if (isIE < 9) //传统浏览器使用MouseWheel事件
		counter.attachEvent("onmousewheel", function () {
			//计算鼠标滚轮滚动的距离
			//一格3行，每行40像素，所以除以120
			var v = event.wheelDelta / 120;
			counter.innerHTML = counter.innerHTML * 1 + v;
			//阻止浏览器默认方法
			return false;
		});
	else if (!isFF) //除火狐外的现代浏览器也使用MouseWheel事件
		counter.addEventListener("mousewheel", function (e) {
			//计算鼠标滚轮滚动的距离
			var v = e.wheelDelta / 120;
			counter.innerHTML = counter.innerHTML * 1 + v;
			//阻止浏览器默认方法
			e.preventDefault();
		}, false);
	else //奇葩的火狐使用DOMMouseScroll事件
		counter.addEventListener("DOMMouseScroll", function (e) {
			//计算鼠标滚轮滚动的距离
			//一格是3行，但是要注意，这里和像素不同的是它是负值
			var v = -e.detail / 3;
			counter.innerHTML = counter.innerHTML * 1 + v;
			//阻止浏览器默认方法
			e.preventDefault();
		}, false);
}

function sideNavClick(){	
	$('#part1,#part2,#part3,#part4,#part5,#part6').on('click', function (e) {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		var current = $(e.target).attr('class').substr(0, 8);
		$('.' + current).addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});
}

function nextAndPreClick(){
	$('.pull1').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull2').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull3').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current3').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull4').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})

	$('.pull5').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull6').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current3').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull7').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current5').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull8').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull9').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current6').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
	$('.pull10').on('click',function(){
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current5').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	})
}

function topAndFootClick(){
	$('#brand-mobile').on('click', function (e) {
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
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart1').on('click', function (e) {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current1').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart2').on('click', function (e) {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current2').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart3').on('click', function (e) {
		var navtips = $('.ischoose').attr('id');
		$('#' + navtips + '>span:first').css('background', '#999');

		$('#footer').removeClass('fixefoot');
		$('.ischoose').removeClass('ischoose');
		$('.current4').addClass('ischoose');

		var newnavtips = $('.ischoose').attr('id');
		$('#' + newnavtips + '>span:first').css('background', '#f95353');
	});

	$('#navpart4').on('click', function (e) {
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
			"background": "#31708f",
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

function animationForPage(){
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

	$('.rotate').mouseenter(function () {
		$('.rotate').addClass('Rotation')
		$('.Rotation').css('animation-play-state', 'running')
	});

	$('.rotate').mouseleave(function () {
		$('.Rotation').css('animation-play-state', 'paused')
	})
}

function navbarToggleClick(){
	$('.navbar-toggle').click(function () {
		// $("#main-navigation.navbar-default").css({"background-color":"#1a1a1a"});
		$("#main-navigation.navbar-default").css({
			"background-color": "rgb(68, 114, 196)"
		});
	})
};

function contralLayout(){

}