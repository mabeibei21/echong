import {bookActionType} from "../../actions/week/weekActionTypes";
import {handleActions} from "redux-actions";

let defaultState={
    book:[]
}

export default handleActions({
    [bookActionType]:(state,action)=>{
        let bookState=JSON.parse(JSON.stringify(state));
        // for(var i=0;i<action.data.data.list.length;i++){
            // if(action.data.data.list[i].type==1){
            bookState.book=action.data.data.list;
        // }
        // }
        
        
        
        return bookState;
    }
},defaultState)
