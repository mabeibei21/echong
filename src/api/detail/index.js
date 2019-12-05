import http from "utils/request";
// 详情页第一个接口
export const detailfirstapi = (gid=100209) =>
	http.get({
		url: "v3/goods/detail/main.html",
		data: {
			gid:gid,
			extend_pam:'buytype%3A%7Ctid%3A0',
			version:410,
			system:'wap',
			isWeb:1,
			distinct_id:'%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2',
			_:1575443193989
		}
	});

// 详情页第二个接口
export const detailsecApi = (gid=100209) =>
	http.get({
		url: "v3/goods/detail/main.html",
		data: {
			do:'GetDynamic',
			gid:gid,
			extend_pam:'buytype%3A%7Ctid%3A0',
			version:410,
			system:'wap',
			isWeb:1,
			distinct_id:'%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2',
			_:1575443193991
		}
	});
//https://mall.api.epet.com/v3/goods/detail/main.html?do=GetDynamic,