'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	uniCloud.httpclient.request("https://oapi.dingtalk.com/robot/send?access_token=340833ce57c2ed4b7f27af165e073fc180d1d71eda848f216d0d29785e5748be", {
		method:"POST",
		data: {
			msgtype: "text",
			text: {
				content: event.text || '天地地大干饭最大！！',
			},
		},
		contentType:"json",
		dataType:"json",
	}).then(res => {
		console.log(res);
	})
	//返回数据给客户端
	return event
};
