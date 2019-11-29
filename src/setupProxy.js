const proxy = require("http-proxy-middleware");

module.exports=(app)=>{
    app.use("/ajax",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}
//https://mall.api.epet.com/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=435&is_single=0&isWeb=1&system=wap&distinct_id=