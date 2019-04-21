$(function(){
	var global=global||{}
	global.loadstar=0 //加载次数
	
	atriclelist()
	function atriclelist() {
		//判断加载次数
		if(global.loadstar==0){
			//如果是第一次加载清空
			$('.listcontent ul').html('')
		}
		//加载数据
		var result=listData['listData0'+global.loadstar]
		var List=result.data.list
		//判断数据存不存在
		if (!List||!List.length) {
			$('.listcontent ul').html('数据不存在')
		} else{
			for(var i=0;i<List.length;i++){
				var Listcontent=$('#item').html()
				Listcontent=Listcontent.replace('articleId',List[i].sysId)
				Listcontent=Listcontent.replace('img/list_img01.jpg',List[i].coverImg)
				Listcontent=Listcontent.replace('$atricletitle$',List[i].title)
				Listcontent=Listcontent.replace('$articletime$',List[i].creatAt)
				Listcontent=Listcontent.replace('$articlecontnet$',List[i].describe)
				$('.listcontent ul').append(Listcontent)
			}
		}
		global.loadstar++
		global.count=Math.ceil(result.data.count/result.data.pageSize)
		if(global.loadstar>=global.count){
			$('.gomore').fadeTo(200,0)
			$('.dongtaimg').attr('src','img/list_gomore_bg_nomore.jpg')
		}
	}
	$('.gomore').click(function () {
		if(global.loadstar<global.count){
			atriclelist()
		}
	})
	$('.listcontent ul').delegate('li','click',function () {
		var articleid=$(this).attr('articleId')
		window.open('article.html?news=xiaoniaoNews'+articleid)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})