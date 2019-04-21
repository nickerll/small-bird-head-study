$(function() {
	var news = getUrlparme('news')
	var data = articleData[news].data
	console.log(data)
	$('.ct_h1').html(data.typeTitle)
	$('.ct_h2').html(data.typeEntitle)
	$('.ct_tit').html(data.title+'<span class="pen"></span>')
	$('.date').html(data.updateAt)
	$('.txt_img').find('img').attr('src',data.coverImg)
	$('.cont').html(data.content)


function getUrlparme(name) {
	var reg = RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	var r = window.location.search.substr(1).match(reg)
	if (r != null) {
		return r[2]
	} else {
		return ''
	}
}
})
