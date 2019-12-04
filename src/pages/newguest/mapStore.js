import {NewAsyncAction} from "../../actions/week/weekActionCreator";

export const mapStateToProps=(state)=>({
    like:state.newguest.like
})

export const mapDispatchToProps=(dispatch)=>({
    handleNewGuest(){
        dispatch(NewAsyncAction())
    }
})