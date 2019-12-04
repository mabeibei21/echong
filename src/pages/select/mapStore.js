import {weekAsyncAction} from "../../actions/week/weekActionCreator";

export const mapStateToProps=(state)=>({
    Sberserk:state.home.Sberserk,
    Segroup:state.home.Segroup,
    like:state.home.like,
    // colorF:state.home.colorF
})

export const mapDispatchToProps=(dispatch)=>({
    handleWeekAsyncData(){
        dispatch(weekAsyncAction())
    },
    handleSearch(){
        this.props.history.push("search");
    },
    handleNewGutse(){
        this.props.history.push("newguest");
    },
    handleRobDay(){
        this.props.history.push("rob");
    },
    handleDogFood(){
        this.props.history.push("dogfood");
    },
    handleEgroup(){
        this.props.history.push("spellgroup");
    },
    handleClearGoods(){
        this.props.history.push("cleargoods");
    },
    handleScroll(){
        let h=this.refs.bodyBox.scrollTop;
        if(h>100){
            this.setState({
                colorF:true
            })
            // console.log(colorF)
        }
    }
})


