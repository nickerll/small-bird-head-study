$(function() {
	$('.open').width($(window).width())
	$('.open').height($(window).height())
	var bird=setInterval(function () {
		clearInterval(bird)
		$('.bird').animate({'margin-top':-50},500),
		$('.opbico').fadeIn().addClass('animated bounceInUp')
	},6000)
	var top=setTimeout(function () {
		clearInterval(top)
		$('.open').animate({'top':-$(window).height()}).fadeOut()
	},8000)
	$('.open').dblclick(function(){
		$('.open').animate({'top':-$(window).height()}).fadeOut()
	})
	// 全屏滚动
	var height = $(window).height();
	var width = $(window).width();
	$(".cansee").height(height);
	$(".cansee").width(width);
	$(window).resize(function() {
		var height = $(window).height();
		var width = $(window).width();
		$(".cansee").height(height);
		$(".cansee").width(width);
	})
	var index = 0;
	var isRuning = false;
	function scrollUp() {
		if (!isRuning) {
			isRuning = true
			setTimeout(function() {
				isRuning = false;
			}, 2000)
			if (index > 0) {
				index--;
			}
			$(".nav_right ul").find("li").removeClass("on");
			if(index==0){
				$('.nav_right ul li').eq(0).addClass('on')
			}
			if(index==1){
				$('.nav_right ul li').eq(0).addClass('on')
			}
			if(index==2){
				$('.nav_right ul li').eq(1).addClass('on')
			}
			if(index==3){
				$('.nav_right ul li').eq(2).addClass('on')
			}
			if(index==4){
				$('.nav_right ul li').eq(3).addClass('on')
				$('.nav_right ul li').eq(4).addClass('on')
			}
			$(".all_content").animate({
				'top': index * -100 + "%"
			})
		}
	}
	function scrollDown() {
		if (!isRuning) {
			isRuning = true
			setTimeout(function() {
				isRuning = false;
			}, 2000)
			if (index < $("section").length - 1) {
				index++;
			}
			$(".nav_right ul").find("li").removeClass("on");
			if(index==0){
				$('.nav_right ul li').eq(0).addClass('on')
			}
			if(index==1){
				$('.nav_right ul li').eq(0).addClass('on')
			}
			if(index==2){
				$('.nav_right ul li').eq(1).addClass('on')
			}
			if(index==3){
				$('.nav_right ul li').eq(2).addClass('on')
			}
			if(index==4){
				$('.nav_right ul li').eq(3).addClass('on')
				$('.nav_right ul li').eq(4).addClass('on')
			}
			$(".all_content").animate({
				'top': index * -100 + "%"
			})
		}
	}
	function mouseWheel(ev) {
		if (ev.wheelDelta) {
			if (ev.wheelDelta > 0) {
				scrollUp()
			} else {
				scrollDown()
			}
			console.log(ev.wheelDelta)
		} else {
			if (ev.detail > 0) {
				scrollDown()
			} else {
				scrollUp()
			}
			console.log(ev.detail)
		}
	}
	window.onmousewheel = mouseWheel
	window.addEventListener("DOMMouseScroll", mouseWheel)
	
	//导航栏
	$('.nav_right ul li').click(function(){
		var index=$(this).index()
		$('.nav_right ul li').removeClass('on')
		$(this).addClass('on')
		if(index==0){
			$('.all_content').css({'margin-top':-1*$(window).height()})
			$('.nav_right ul li').eq(0).addClass('on')
		}
		if(index==1){
			$('.all_content').css({'margin-top':-2*$(window).height()})
			$('.nav_right ul li').eq(0).addClass('on')
		}
		if(index==2){
			$('.all_content').css({'margin-top':-3*$(window).height()})
			$('.nav_right ul li').eq(1).addClass('on')
		}
		if(index==3){
			$('.all_content').css({'margin-top':-4*$(window).height()})
			$('.nav_right ul li').eq(2).addClass('on')
		}
		if(index==4){
			$('.nav_right ul li').eq(3).addClass('on')
			$('.nav_right ul li').eq(4).addClass('on')
		}
	})
	
	
	
	// 概述
	var gaishu=0
	$('.xiangyou').click(function () {
		gaishu++
		if(gaishu==$('.gaishu_content').length){
			$('.xiangyou').css('opacity',0.6)
			gaishu=0
		}else{
			$('.xiangyou').css('opacity',1)
		}
		$('.baohan').animate({'left':gaishu*-973})
	})
	
	$('.xiangzuo').click(function () {
		if(gaishu==0){
			$('.xiangzuo').css('opacity',0.6)
			gaishu=$('.gaishu_content').length
		}else{
			$('.xiangzuo').css('opacity',1)
		}
		gaishu--
		$('.baohan').animate({'left':gaishu*-973})
	})
	
	
	// 企业价值
	setInterval(function(){
		$('.comeout').fadeIn(1200,function(){
			$('.comeout').delay(100).fadeOut(400)
		})
	},1000)
	
	// 小鸟掌云
	$('.birdbt1').click(function(){
		var bir=$(this).index()
		if(bir==0){
			$(this).siblings().find('i').css('margin-left',-78)
		}else if(bir==1){
			$(this).siblings().find('i').css('margin-left',78)
		}
		$(this).find('i').css('margin-left',0)
		$('.birddouble').animate({'margin-left':$(this).index()*-910},800)
	})
	
	

})
