import {handleActions} from "redux-actions";
// 简化redux的书写流程
import {weekAsyncType} from "../../actions/week/weekActionTypes";
const defaultState={
    Sberserk:[],
    Segroup:[],
    like:[],
    colorF:false
}

export default handleActions({
    [weekAsyncType]:(state,action)=>{
        let weekState=JSON.parse(JSON.stringify(state));
        weekState.Sberserk=action.data.data[3760].data.berserk.goods;
        weekState.Segroup=action.data.data[3760].data.egroup.goods;
        for(var i=3776000;i<=3776009;i++){
            for(var j=0;j<2;j++){
            weekState.like.push((action.data.data[i].data.goods[j]))
            }
        }
        return weekState;
    }
},defaultState)