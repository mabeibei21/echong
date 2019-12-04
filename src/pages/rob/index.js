import React,{Fragment} from "react";
import Header from "../../components/header/index";
import {RobDay,Title,Goods,Body} from "./styled";
import {PageContainer} from "../../common/styled";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Rob extends React.Component{
    constructor(){
        super();
        this.state={
            flag:'16:00'
        }
    }
    render(){
        let {timePoints,Rlist,buyLogLink} =this.props;
        let {flag}=this.state;
        return(
            <PageContainer>
                <Header title="每日疯抢"/>
                <Body><div className="content">
                {/* 每日疯抢的导航条 */}
            <RobDay>
                <ul>
                    {
                    timePoints.map((item,index)=>(
                    <li key={item.time} onClick={this.props.handleTime.bind(this,item.time)} className={flag==item.time?'active':''}>
                        <div><a>{item.time}</a>
                        <span><img src={"https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"}/></span>
                        <i>{item.stateLabel}</i></div>
                    </li>
                        ))
                    }
                </ul>
            </RobDay>
            {/* 题目 */}
            
                    <Title>
                <img src={buyLogLink.img}/>
                {buyLogLink.tip}
            </Title>
                
            
            
            {/* 商品 */}
            <Goods>
                {
                    Rlist.map((item,index)=>(
                        <div className="goods" key={index}>
                <div className="left">
                    <img src={item.photo}/>
                </div>
                <div className="right">
                    <h6>{item.subject}</h6>
                    <h5>{item.sumnum}</h5>
                    <p><span>￥{item.selloutProgress}<del>￥{item.selloutProgress_new}</del></span><i>{item.selloutLabel}</i></p>
                </div>
                </div>
                    ))
                }
                
                
            </Goods>
            </div></Body>
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleDayRobAsyncData();
    }
}

export default Rob;