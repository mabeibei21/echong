import {listAsyncAction,priceSortAction,popularAsyncAction,newestAsyncAction,commentAsyncAction,allAsyncAction} from "../../actions/week/weekActionCreator";

export const mapStateToProps=(state)=>({
    list:state.list.list,
    sort_rank:state.list.sort_rank,
    defaultList:state.list.defaultList
})

export const mapDispatchToProps=(dispatch)=>({
    handleListAsyncData(){
        dispatch(listAsyncAction())
    },
    handledefault(index){
        switch(index){
            case 0: this.setState({disapper:!this.state.disapper,flag:index});
            break;
            case 1:this.setState({flag:index});
            dispatch(listAsyncAction());
            break;
            case 2:this.setState({flag:index});
            dispatch(priceSortAction());
            break;
            
        }
    },
    handleDetailTo(){
        this.props.history.push("detail");
    },
    handlepopular(index){
        switch(index){
            case 0:this.setState({disapper:!this.state.disapper,color:index});
            dispatch(listAsyncAction());
            break;
            case 1:this.setState({disapper:!this.state.disapper,color:index});
            dispatch(popularAsyncAction());
            break;
            case 2:this.setState({disapper:!this.state.disapper,color:index});
            dispatch(newestAsyncAction());
            break;
            case 3:this.setState({disapper:!this.state.disapper,color:index});
            dispatch(commentAsyncAction());
            break;
        }
    },
    handleScreen(){
        this.setState({
            screen:!this.state.screen
        })
    },
    handleAll(){
        this.setState({
            screen:!this.state.screen
        });
        dispatch(allAsyncAction());
    }
})