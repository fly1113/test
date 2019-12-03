var Ajax;
Ajax = {
	request: function(url, type, status, request, callback) {
		if (!url || !callback) {
			return;
		}
		$.ajax({
			url: url,
			type: type ? type : "POST",
			data: request,
			async: status == "async" ? true : false,
			dataType: 'json',
			timeout: 15000,
			success: function(data) {
				callback(data);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("请求失败：【状态" + XMLHttpRequest.status + "】，失败原因：" + textStatus);
			}
		});
	},
}

Ajax.request("http://111.231.94.34:8290/dbsrv/v1/customer/workTime?channel=SystemMaintain", "GET", "async", {}, function(data) {
	console.log(data);
});
