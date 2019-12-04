import {newguestActionType} from "../../actions/week/weekActionTypes";
import {handleActions} from "redux-actions";
const defaultState={
    like:[]
}

export default handleActions({
    [newguestActionType]:(state,action)=>{
        let newguestState=JSON.parse(JSON.stringify(state));
        for(var i=3776000;i<=3776009;i++){
            for(var j=0;j<2;j++){
                newguestState.like.push((action.data.data[i].data.goods[j]))
            }
        }
        return newguestState;
    }
},defaultState)