import http from "utils/request";
export const detail_api = (id = 1575425677929) =>
	http.get({
		url: "v3/goods/detail/main.html",
		data: {
			do: "GetDynamic",
			gid: 598282,
			extend_pam: "buytype%3Aclear_ware%7Ccwid%3A3452649",
			version: 410,
			system: "wap",
			isWeb: 1,
			distinct_id: "%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2,_:1575427049821",
			_: id
		}
	});

export const detailBig_api = (id = 1575425677929) =>
	http.get({
		url: "v3/goods/detail/main.html",
		data: {
			gid: 563002,
			extend_pam: "buytype%3A%7Ctid%3A0",
			version: 410,
			system: "wap",
			isWeb: 1,
			distinct_id: "%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
			_: id
		}
	});
