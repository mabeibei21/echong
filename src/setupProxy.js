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
	app.use(
		"/login",
		proxy({
			target: "http://39.105.204.151:3000",
			changeOrigin: true,
			pathRewrite: {
				"^/login": ""
			}
		})
	);
};
