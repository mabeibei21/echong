import http from "utils/request";

export const class_listApi = () =>
	http.get({
		url: "/v3/goods/category/main.html",
		data: {
			pet_type: "dog",
			version: 358,
			system: "wap",
			isWeb: 1
		}
	});

export const class_picApi = (owner = 88888, pet_type = "dog") =>
	http.get({
		url: "/v3/goods/category/main.html",
		data: {
			do: "getChildren",
			owner: owner,
			pet_type: pet_type,
			issite: true,
			version: 358,
			system: "wap",
			isWeb: 1
		}
	});
export const class_tab2 = () =>
	http.get({
		url: "/v3/brand/list/main.html",
		data: {
			pet_type: "dog",
			system: "wap",
			isWeb: 1,
			version: 303
		}
	});

export const calss_Guoji = () =>
	http.get({
		url: "/v3/goods/category/main.html",
		data: {
			do: "getChildren",
			owner: 88888888,
			pet_type: "dog",
			issite: true,
			version: 358,
			ishk: true,
			system: "wap",
			isWeb: 1
		}
	});
