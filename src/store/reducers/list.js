import {handleActions} from "redux-actions";
//简化redux的书写流程
import {listActionType,priceActionType,popularActionType,newestActionType,commentActionType,allActionType} from "../../actions/week/weekActionTypes";

const defaultState={
    list:[],
    sort_rank:[],
    defaultList:[]
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
    }
},defaultState)