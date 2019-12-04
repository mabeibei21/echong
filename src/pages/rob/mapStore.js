import {dayRobAsyncAction,dayRobChangeAction} from "../../actions/week/weekActionCreator";

export const mapStateToProps=(state)=>({
    timePoints:state.rob.timePoints,
    Rlist:state.rob.Rlist,
    buyLogLink:state.rob.buyLogLink
})

export const mapDispatchToProps=(dispatch)=>({
    handleDayRobAsyncData(){
        dispatch(dayRobAsyncAction())
    },
    handleTime(time){
        this.setState({
            flag:time
        })
        // console.log(time);
    dispatch(dayRobChangeAction(time));
    }
})