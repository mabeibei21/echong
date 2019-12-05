import {handleActions} from "redux-actions";
//简化redux的书写流程
import {listActionType,priceActionType,popularActionType,newestActionType,commentActionType,allActionType} from "../../actions/week/weekActionTypes";
import {
	classPicType,
	classListsType,
	classTab2Type,
	classGuoType
} from "actions/class/ActionTypes";

const defaultState={
    list:[],
    sort_rank:[],
    defaultList:[],hot_list: [],
	pic_list: [],
	tab2_list: []
}

export default handleActions({
    [listActionType]:(state,action)=>{
        let listState=JSON.parse(JSON.stringify(state));
        listState.list=action.data.list;
        listState.sort_rank=action.data.sort_rank;
        listState.defaultList=action.data.sort_rank[0].list;
        return listState;
    },
    [priceActionType]:(state,action)=>{
        let priceState=JSON.parse(JSON.stringify(state));
        priceState.list=action.data.list;
        priceState.sort_rank=action.data.sort_rank;
        priceState.defaultList=action.data.sort_rank[0].list;
        return priceState; 
    },
    [popularActionType]:(state,action)=>{
        let popularState=JSON.parse(JSON.stringify(state));
        popularState.list=action.data.list;
        popularState.sort_rank=action.data.sort_rank;
        popularState.defaultList=action.data.sort_rank[0].list;
        return popularState;
    },
    [newestActionType]:(state,action)=>{
        let newestState=JSON.parse(JSON.stringify(state));
        newestState.list=action.data.list;
        newestState.sort_rank=action.data.sort_rank;
        newestState.defaultList=action.data.sort_rank[0].list;
        return newestState;
    },
    [commentActionType]:(state,action)=>{
        let commentState=JSON.parse(JSON.stringify(state));
        commentState.list=action.data.list;
        commentState.sort_rank=action.data.sort_rank;
        commentState.defaultList=action.data.sort_rank[0].list;
        return commentState;
    },
    [allActionType]:(state,action)=>{
        let allState=JSON.parse(JSON.stringify(state));
        allState.list=action.data.list;
        allState.sort_rank=action.data.sort_rank;
        allState.defaultList=action.data.sort_rank[0].list;
        return allState;
    },[classListsType]: (state, action) => {
        let hotState = JSON.parse(JSON.stringify(state));
        hotState.hot_list = action.payload.categorys;
        return hotState;
    },
    [classPicType]: (state, action) => {
        let tabState = JSON.parse(JSON.stringify(state));
        tabState.pic_list = action.payload.cate_list[0].list;
        return tabState;
    },
    [classTab2Type]: (state, action) => {
        let tabState = JSON.parse(JSON.stringify(state));
        tabState.tab2_list = action.payload.brand;
        return tabState;
    },
    [classGuoType]: (state, action) => {
        let guoState = JSON.parse(JSON.stringify(state));
        // console.log(action.payload, 1111);
        // guoState.tab2_list = action.payload.cate_list[1];
        return guoState;
    }
},defaultState)
