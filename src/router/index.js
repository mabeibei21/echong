import {Select,Mine,Login,Class,Cart,Book} from "../pages";

export const TabBarRoute=[
    {
        path:"/select",
        component:Select,
        meta:{
            flag:true
        },
        icon:"\ue60d",
        text:"精选"
    },
    {
        path:"/class",
        component:Class,
        meta:{
            flag:true
        },
        icon:"\ue518",
        text:"分类"
    },
    {
        path:"/book",
        component:Book,
        meta:{
            flag:true
        },
        icon:"\ue693",
        text:"小萌书"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"\ue614",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue505",
        text:"我的"
    },
];

export const NoTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        }
    }
];

export const RouteConfig=TabBarRoute.concat(NoTabBarRoute);