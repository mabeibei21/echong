import http from "utils/request";
export const cleargoods_api = (price = "") =>
	http.get({
		url: "v3/cleargoods.html",
		data: {
			version: 336,
			page: 1,
			discount: price,
			discount_type: 0,
			price: price,
			type: 0,
			pet_type: "dog",
			totalPage: 2,
			system: "wap",
			isWeb: 1,
			distinct_id: "%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
			_: 1575370196304
		}
	});
