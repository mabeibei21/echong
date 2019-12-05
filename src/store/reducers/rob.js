import {robActionType,robChangeType} from "../../actions/week/weekActionTypes";
import {handleActions} from "redux-actions";
// 简化redux的书写流程

const defaultState={
    rob:[],
    timePoints:[],
    Rlist:[],
    buyLogLink:'',
}

export default handleActions({
    [robActionType]:(state,action)=>{
        let robState=JSON.parse(JSON.stringify(state));
        robState.timePoints=action.data.timePoints;
        robState.Rlist=action.data.list;
        robState.buyLogLink=action.data.buyLogLink;
        return robState;

    },
    [robChangeType]:(state,action)=>{
        
        let robState2=JSON.parse(JSON.stringify(state));
        robState2.timePoints=action.data.timePoints;
        robState2.Rlist=action.data.list;
        robState2.buyLogLink=action.data.buyLogLink;
        return robState2;
    }
},defaultState)