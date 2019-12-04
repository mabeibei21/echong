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
