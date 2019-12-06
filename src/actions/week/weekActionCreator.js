import {weekAsyncType,listActionType,bookActionType,robActionType,robChangeType,priceActionType,popularActionType,newestActionType,commentActionType,allActionType,newguestActionType,toDetailActionType} from "./weekActionTypes";
import {getDynamicApi,getListApi,getBookApi,dayRobApi,priceSortApi,popularSortApi,newestSortApi,commentSortApi,allListApi,toDetailApi} from "api/hub";

// 首页
export const weekAsyncAction=()=>{
    let weekAction=(data)=>({
        type:weekAsyncType,
        data
    })
    return async (dispatch)=>{
        let data=await getDynamicApi();
        dispatch(weekAction(data));
    }
}
// 列表页
export const listAsyncAction=()=>{
    let listAction=(data)=>({
        type:listActionType,
        data
    })
    return async (dispatch)=>{
        let data=await getListApi(0);
        dispatch(listAction(data));
    }
}
// 小萌书
export const bookAsyncAction=()=>{
    let bookAction=(data)=>({
        type:bookActionType,
        data
    })
    return async (dispatch)=>{
        let data=await getBookApi();
        dispatch(bookAction(data));
    }
}
//每日疯抢
export const dayRobAsyncAction=()=>{
    let robAction=(data)=>({
        type:robActionType,
        data
    })
    return async (dispatch)=>{
        let data=await dayRobApi('20:00');
        dispatch(robAction(data));
    }
}
// 每日疯抢 点击换数据
export const dayRobChangeAction=(tid)=>{
    let robChangeAction=(data)=>({
        type:robChangeType,
        data
    })
    return async (dispatch)=>{
        let data=await dayRobApi(tid);
        dispatch(robChangeAction(data))
    }
}

// 列表页
export const priceSortAction=()=>{
    let priceAction=(data)=>({
        type:priceActionType,
        data
    })
    return async (dispatch)=>{
        let data=await priceSortApi(0);
        dispatch(priceAction(data));
    }
}

// 列表页默认中的 按人气排序
export const popularAsyncAction=()=>{
    let popularAction=(data)=>({
        type:popularActionType,
        data
    })
    return async (dispatch)=>{
        let data=await popularSortApi(0);
        dispatch(popularAction(data));
    }
}
// 列表页默认中的 按最新上架排序
export const newestAsyncAction=()=>{
    let newestAction=(data)=>({
        type:newestActionType,
        data
    })
    return async (dispatch)=>{
        let data=await newestSortApi(0);
        dispatch(newestAction(data));
    }
}
// 列表页默认中的 按评论排序
export const commentAsyncAction=()=>{
    let commentAction=(data)=>({
        type:commentActionType,
        data
    })
    return async (dispatch)=>{
        let data=await commentSortApi(0);
        dispatch(commentAction(data));
    }
}

// 列表页默认中的 筛选
export const allAsyncAction=()=>{
    let allAction=(data)=>({
        type:allActionType,
        data
    })
    return async (dispatch)=>{
        let data=await allListApi(0);
        dispatch(allAction(data));
    }
}

// 新客主粮趴
export const NewAsyncAction=()=>{
    let newguestAction=(data)=>({
        type:newguestActionType,
        data
    })
    return async (dispatch)=>{
        let data=await getDynamicApi();
        dispatch(newguestAction(data));
    }
}
//搜索页面
/* export const searchAsyncAction=()=>{
    let searchAction=(data)=>({
        type:searchActionType,
        data
    })
    return async (dispatch)=>{
        let data=await getDynamicApi();
        dispatch(searchAction(data));
    }
} */




