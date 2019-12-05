import http from "utils/request";
export const cleargoods_api = (page = 1, price = "", type = 0) =>
	http.get({
		url: "v3/cleargoods.html",
		data: {
			version: 336,
			page: page,
			discount: price,
			discount_type: 0,
			price: price,
			type: type,
			pet_type: "dog",
			totalPage: 2,
			system: "wap",
			isWeb: 1,
			distinct_id: "%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
			_: 1575370196304
		}
	});

export const shaixuanApi = () =>
	http.get({
		url: "/v3/cleargoods.html",
		data: {
			do: "getcate",
			version: 335,
			pet_type: "dog",
			system: "wap",
			isWeb: 1,
			distinct_id:
				"16ed127ca6a11e-00a4b422dfb61e-2d604637-250125-16ed127ca6b9d1",
			_: 1575511938511
		}
	});
