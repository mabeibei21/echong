const proxy = require("http-proxy-middleware");

module.exports = app => {
	app.use(
		"/ajax",
		proxy({
			target: "https://mall.api.epet.com",
			changeOrigin: true,
			pathRewrite: {
				"^/ajax": ""
			}
		})
	);
	app.use(
		"/v3",
		proxy({
			target: "https://mallcdn.api.epet.com",
			changeOrigin: true
		})
	);
	
// https://mall.api.epet.com/v3/goods/detail/main.html?do=GetDynamic&gid=100209&extend_pam=buytype%3A%7Ctid%3A0&version=410&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1575443193991
	app.use(
		"/v3",
		proxy({
			target: " https://mallapi.epetht.com",
			changeOrigin: true,
			pathRewrite: {
				"^/v3": ""
			}
		})
	);
	app.use(
		"/v3",
		proxy({
			target: " https://mall.api.epet.com",
			changeOrigin: true,
			pathRewrite: {
				"^/v31": ""
			}
		})
	);
};
