import http from "utils/request";
export const loginApi = (username, password) =>
	http.post({
		method: "post",
		url: "/login/users/login",
		data: { username: username, password: password }
	});
export const registerApi = (username, password) =>
	http.post({
		url: "/login/users/register",
		method: "POST",
		data: { username: username, password: password }
	});
