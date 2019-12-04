import http from "utils/request";
// 首页的接口
export const getDynamicApi=()=>http.get({
    url:"/ajax/v3/index/main.html",
    data:{
        do:'getDynamicV415',
        pet_type:'dog',
        version:435,
        is_single:0,
        isWeb:1,
        system:'wap'
    }
})
// 列表的接口 销量排序同一个接口
export const getListApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'def_desc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam:'keyword:钙胃能',
        system:'wap',
        isWeb:1,
        _:1575343150001
    }
})
// 列表中的筛选 其中的全部按钮
export const allListApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'def_desc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam: 'undefined|brandid:0|extends_str:|real_wid:|region:',
        system:'wap',
        isWeb:1,
        _:1575429159424
    }
})
// https://mallcdn.api.epet.com/v3/goods/list/main.html?version=358&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=undefined%7Cbrandid%3A0%7Cextends_str%3A%7Creal_wid%3A%7Cregion%3A&real_wid=&region=&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1575429159424
// 列表中 价钱排序的接口
export const priceSortApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'price_asc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam:'keyword:钙胃能',
        system:'wap',
        isWeb:1,
        _:1575385813125
    }
})
// 列表中 默认排序中的按人气
export const popularSortApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'views_desc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam:'keyword:钙胃能',
        system:'wap',
        isWeb:1,
        _:1575421781406
    }
})
//列表默认中 最新上架
export const newestSortApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'lastupdate_desc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam:'keyword:钙胃能',
        system:'wap',
        isWeb:1,
        _:1575425472011
    }
})
//列表默认中 按评论
export const commentSortApi=(cateid=0)=>http.get({
    url:"/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page:1,
        orderby:'replys_desc',
        cateid:cateid,
        pet_type:'dog',
        extend_pam:'keyword:钙胃能',
        system:'wap',
        isWeb:1,
        _:1575425904844
    }
})
// https://mallcdn.api.epet.com/v3/goods/list/main.html?version=358&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=undefined%7Cbrandid%3A0%7Cextends_str%3A%7Creal_wid%3A%7Cregion%3A&real_wid=&region=&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1575429159424
// 小萌书的接口
export const getBookApi=()=>http.get({
    url:"/ajax/v3/content/opgc/Index.html",
    data:{
        do:'GetList',
        param:0,
        page:1,
        pet_type:'dog',
        system:'wap',
        isWeb:1,
        version:303,
    }
})
// 每日疯抢
export const dayRobApi=(tid='20:00')=>http.get({
    url:"/ajax/v3/activity/surprise.html",
    data:{
        do:'getGoodsV390',
        tid:tid,
        version:395,
        pet_type:'dog',
        system:'wap',
        isWeb:1,
        distinct_id:'%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2',
        _:1575363234832
    }
})

