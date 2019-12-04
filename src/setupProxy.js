const proxy = require("http-proxy-middleware");

module.exports=(app)=>{
    app.use("/ajax",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),
    app.use("/v3",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true
    }))
}


//https://mallcdn.api.epet.com/v3/goods/list/main.html?version=358&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=undefined%7Cbrandid%3A0%7Cextends_str%3A%7Creal_wid%3A%7Cregion%3A&real_wid=&region=&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1575429159424