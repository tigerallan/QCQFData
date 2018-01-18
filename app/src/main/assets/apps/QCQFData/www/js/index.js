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
