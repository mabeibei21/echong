import http from "utils/request";
export const spellgroupApi = (classId = 2, page = 1) =>
	http.get({
		url: "/v3/groupbuy/main.html",
		data: {
			do: "getList",
			petType: "dog",
			classId: classId,
			page: page,
			sysType: 1,
			pageSize: 15,
			system: "wap",
			isWeb: 1,
			version: 303,
			distinct_id:
				"16ed127ca6a11e-00a4b422dfb61e-2d604637-250125-16ed127ca6b9d1"
		}
	});
