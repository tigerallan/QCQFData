/**
 * 封装ajax后，只关注处理数据
 */

function ajaxData(url, type, data) {
	type = type === 'undefined' ? 'get' : type;
	data = data === 'undefined' ? {} : data;

	return $.ajax({
		url: url,
		type: type,
		data: data,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		}
	});
}
//隔行变色的表格
function table() {
	var trs = $("ul li");
	for(var i = 0; i < trs.length; i++) {
		if(i % 2 == 0) {
			trs[i].style.backgroundColor = "#F0F9FD";
		}
	}
}

var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){ // 当前环境为沉浸式状态栏模式
  immersed=parseFloat(ms[2]);// 获取状态栏的高度
}

var t=document.getElementById('header'),
  c=document.getElementById('content');
t&&(t.style.paddingTop=immersed+'px', t.style.height=t.offsetHeight+immersed+'px');
c&&(c.style.paddingTop=parseInt(window.getComputedStyle(c)['padding-top'])+immersed+'px');

alert(JSON.stringify(t.offsetHeight));

function getUrlData(url) {
	var returnData = null;
	if(url.indexOf('?') !== -1) {
		var dataArr = url.substring(url.indexOf('?') + 1).split('&');
		returnData = {};
		for(var i = 0, len = dataArr.length; i < len; i++) {
			var cellData = dataArr[i].split('=');
			returnData[cellData[0]] = cellData[1];
		}
	}
	return returnData;
}
