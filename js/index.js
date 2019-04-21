$(function(){
	$('.nav_right ul li').hover(function () {
		$(this).find('.under').stop().slideDown(700,'elasticOut')
	},function () {
		$('.under').stop().slideUp()
	}).click(function () {
		$(this).addClass('on').siblings().removeClass('on')
	})
	
	$('.one').show().siblings().hide()
	$('.anniu').show()
	var now=0;
	function move() {
		$('.anmi span').removeClass('blue')
		$('.anmi span').eq(now).addClass('blue')
		$('.study div').filter('[name="bg"]').eq(now).show().siblings('[name="bg"]').hide()
	}
	$('.anmi span').click(function () {
		now=$(this).index();
		move()
	})
	$('.anr').click(function () {
		now++
		if(now==$('.anmi span').length){
			now=0
		}
		move()
	})
	$('.anl').click(function () {
		if(now==0){
			now=$('.anmi span').length
		}
		now--
		move()
	})
	
	$('.cone').eq(0).show().siblings().hide()
	function anim(ele,className) {
		ele.eq(index).removeClass('animated fadeInLeft fadeInRight').addClass('animated').addClass(className)
	}
	var index=0
	$('.next').click(function () {
		index++
		if(index>$('.cone').length-1){
			index=0
		}
		$('.pro_btn_line span').removeClass('onspan')
		$('.pro_btn_line span').eq(index).addClass('onspan')
		anim($('.cone_left'),'fadeInRight')
		anim($('.cone_right'),'fadeInRight')
		$('.cone').eq(index).show().siblings().hide()
	})
	$('.prev').click(function () {
		index--
		if(index<0){
			index=$('.cone').length-1
		}
		$('.pro_btn_line span').removeClass('onspan')
		$('.pro_btn_line span').eq(index).addClass('onspan')
		anim($('.cone_left'),'fadeInLeft')
		anim($('.cone_right'),'fadeInLeft')
		$('.cone').eq(index).show().siblings().hide()
	})
	$('.pro_btn_line span').click(function () {
		var filter='';
		if($(this).index('.pro_btn_line span')>index){
			filter='fadeInRight'
		}else{
			filter='fadeInLeft'
		}
		$('.pro_btn_line span').removeClass('onspan')
		$(this).addClass('onspan')
		index=$(this).index('.pro_btn_line span')
		console.log(index)
		$('.cone').eq(index).show().siblings().hide()
		anim($('.cone_left'),filter)
		anim($('.cone_right'),filter)
	})
	
	
	
	
	
	$('.add').mouseenter(function () {
		$(this).addClass('animated tada')
		
	})
	$('.add').mouseleave(function () {
		$(this).removeClass('animated tada')
	})
	
	$('.centerimg').hover(function () {
		$(this).addClass('animated tada')
	},function () {
		$(this).removeClass('animated tada')
	})
	
	$('.add').click(function () {
		if ($(this).parent().siblings('.daital').css('display')=='none') {
			$('.add').removeClass('addl')
			$(this).addClass('addl')
			$('.pintai .daital').hide()
			$(this).parent().siblings('.daital').slideDown()
		} else{
			$('.add').removeClass('addl')
			$('.pintai .daital').slideUp()
		}
	})
	$('.centerimg').click(function(){
		if ($(this).parent().siblings('.daital').css('display')=='none') {
			$('.add').removeClass('addl')
			$(this).siblings('.add').addClass('addl')
			$('.pintai .daital').hide()
			$(this).parent().siblings('.daital').slideDown()
		} else{
			$('.add').removeClass('addl')
			$('.pintai .daital').slideUp()
		}
	})
	// 团队介绍
	var Toleft=0
	function gole(){
		Toleft++
		if(Toleft==$('.anmi1 span').length){
			Toleft=0
		}
		$('.team_move').animate({'left':-1130},1000,'backIn',function(){
			$('.team_move').find('.member:first').appendTo('.team_move')
			$('.team_move').animate({'left':0},0)
		})
		$('.anmi1 span').removeClass('blue')
		$('.anmi1 span').eq(Toleft).addClass('blue')
	}
	$('.anr1').click(function(){
		gole()
	})
	$('.anle').click(function(){
		
		if(Toleft==0){
			Toleft=$('.anmi1 span').length
		}
		Toleft--
		$('.team_move').find('.member:last').prependTo('.team_move')
		$('.team_move').animate({'left':-1130},0);
		$('.team_move').animate({'left':0},1000,'backOut')
		$('.anmi1 span').removeClass('blue')
		$('.anmi1 span').eq(Toleft).addClass('blue')
	})
	var timer=setInterval(gole,3000)
	
	
	
	
	
	// 音乐按钮
	$('.music span').click(function(){
		var mus=$(this).index()
		$(this).append('<audio src="music/sound0'+mus+'.mp3" autoplay></audio>')
	})
	
	
	// 地图
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.357247,40.095792);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"我的标记",content:"我的备注",point:"116.357561|40.095847",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图
	
	
	
	// 返回顶部
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			$('.fix').fadeIn()
		}else{
			$('.fix').fadeOut(0)
		}
	})
	
	$('.totop').click(function(){
		$('body,html').animate({'scrollTop':0},500)
	})
})