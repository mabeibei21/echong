import {
	Select,
	Mine,
	Login,
	Class,
	Cart,
	Book,
	Search,
	List,
	NewGuest,
	Rob,
	DogFood,
	Spellgroup,
	Cleargoods,
	Detail,
	Exit,
	Collection
} from "../pages";

export const TabBarRoute = [
	{
		path: "/select",
		component: Select,
		meta: {
			flag: true
		},
		icon: "\ue60d",
		text: "精选"
	},
	{
		path: "/class",
		component: Class,
		meta: {
			flag: true
		},
		icon: "\ue518",
		text: "分类"
	},
	{
		path: "/book",
		component: Book,
		meta: {
			flag: true
		},
		icon: "\ue693",
		text: "小萌书"
	},
	{
		path: "/cart",
		component: Cart,
		meta: {
			flag: false
		},
		icon: "\ue614",
		text: "购物车"
	},
	{
		path: "/mine",
		component: Mine,
		meta: {
			flag: true,
			requiredAuth: true
		},
		icon: "\ue505",
		text: "我的"
	}
];

export const NoTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        }
    },{
        path:"/search",
        component:Search,
        meta:{
            flag:false
        }
    },{
        path:"/list",
        component:List,
        meta:{
            flag:false
        }
    },{
        path:"/newguest",
        component:NewGuest,
        meta:{
            flag:false
        }
    },{
        path:"/rob",
        component:Rob,
        meta:{
            flag:false
        }
    },{
        path:"/dogfood",
        component:DogFood,
        meta:{
            flag:false
        }
    },{
        path:"/spellgroup",
        component:Spellgroup,
        meta:{
            flag:false
        }
    },{
        path:"/cleargoods",
        component:Cleargoods,
        meta:{
            flag:false
        }
    },{
        path:"/detail/:gid",
        component:Detail,
        meta:{
            flag:false
        }
    },{
        path:"/exit",
        component:Exit,
        meta:{
            flag:false
        }
    },
    {
        path:"/collection",
        component:Collection,
        meta:{
            flag:false
        }
    },
    
    
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);
