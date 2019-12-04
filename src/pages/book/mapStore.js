import {bookAsyncAction} from "../../actions/week/weekActionCreator";

export const mapStateToProps=(state)=>({
    book:state.book.book
})

export const mapDispatchToProps=(dispatch)=>({
    handleBookAsyncData(){
        dispatch(bookAsyncAction())
    }
})