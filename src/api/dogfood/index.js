import http from "utils/request";

export const dogfoodApi = (cdn = 20191128113704, menu = 211) =>
	http.get({
		url: "/v3/index/main.html",
		data: {
			do: "getStaticV415",
			cdn_version: cdn,
			pet_type: "dog",
			version: 435,
			is_single: 1,
			menu_param: menu,
			isWeb: 1,
			system: "wap",
			distinct_id:
				"16ed127ca6a11e-00a4b422dfb61e-2d604637-250125-16ed127ca6b9d1"
		}
	});
export const dogListApi = (menu = 211) =>
	http.get({
		url: "/v3/index/main.html",
		data: {
			do: "getDynamicV415",
			pet_type: "dog",
			version: 435,
			is_single: 1,
			menu_param: menu,
			isWeb: 1,
			system: "wap",
			distinct_id:
				"16ed127ca6a11e-00a4b422dfb61e-2d604637-250125-16ed127ca6b9d1"
		}
	});
