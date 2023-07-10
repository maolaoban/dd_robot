'use strict';
exports.main = async (event, context) => {
	const defaultMsg = '起床上班,今天天气：'
	uniCloud.httpclient.request("https://restapi.amap.com/v3/weather/weatherInfo?city=330100&key=8655632cef5889cd800e7a66a09012f1", {
		dataType: 'json'
	}).then(res => {
		const data = res.data;
		uniCloud.callFunction({
			name: 'send_msg',
			data: {
				text: defaultMsg + data.status ? JSON.stringify(data.lives[0]) : '获取天气失败咯！自己查查看吧！'
			}
		})
	})
	//返回数据给客户端
	return event
};
