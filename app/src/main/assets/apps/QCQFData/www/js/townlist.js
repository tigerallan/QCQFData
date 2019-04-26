mui.plusReady(function() {
			//获取参数
			var info = JSON.parse(plus.storage.getItem("personal-information"));
			qxId = info[0].areaId;
			var qxName = info[0].area_name;
			//乡镇
			ajaxData(ipconfig + 'station/meteor/findAreaAdminRate.do?areaId=' + qxId).done(function(json) {
				var data = json.data;
				for(var i = 0; i < data.length; i++) {
					var sy=data[i].weeklyTownship.replace(/,/g, "");
					var week = "<option value="+ sy + ">" + sy + "</option>" ;
					$("#sellect").append(week);
				}
			});
	})