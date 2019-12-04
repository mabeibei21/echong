import React, { Component } from 'react'
import Header from "../../components/header/index";
import {PageContainer} from "../../common/styled";
import {SearchBox,Nav,Default,GoodsList,Body,Screen} from "./styled";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class List extends Component {
    constructor(){
        super();
        this.state={
            disapper:false,
            flag:0,
            color:0,
            screen:false
        }
    }
    render() {
        let {disapper,flag,color,screen} =this.state;
        let {list,sort_rank,defaultList,} =this.props;
        return (
            <PageContainer>
                <Header title="商品列表"/>
                <Body>
                    <div className="container">

                    
                {/* 搜索 */}
            <SearchBox>
                <div className="input">
                    <i className="iconfont">&#xe623;</i>
                    <span>钙胃能</span>
                </div>
            </SearchBox>

            {/* 导航条 有排序 */}
            <Nav>
                <ul>
                    {
                        sort_rank.map((item,index)=>(
                            <li key={index} onClick={this.props.handledefault.bind(this,index)} className={flag==index?"active":""}>{item.title}<i className="iconfont">&#xe61d;</i></li>
                        ))
                    }
                    
                    <li onClick={this.props.handleScreen.bind(this)}>筛选<i className="iconfont">&#xe61d;</i></li>
                </ul>
            </Nav>
            {/* 点击筛选的时候 出现的信息 */}
            <Screen style={{display:screen?'block':'none'}}>
            <div className="oneone" onClick={this.props.handleAll.bind(this)}>
                        <span>全部</span>
                        <i className="iconfont" >&#xe65b;</i>
                </div>
            </Screen>
            {/* 点击默认出现的信息 */}
            <Default style={{display:disapper?'block':'none'}}>
                {
                    defaultList.map((item,index)=>(
                        <div className="one" key={index} onClick={this.props.handlepopular.bind(this,index)}>
                        <span className={color==index?"dui":""}>{item.item}</span>
                        <i className="iconfont" >&#xe65b;</i>
                        </div>
                    ))
                }
            </Default>
            {/* 商品列表 */}
            <GoodsList>
                {
                    list.map((item,index)=>(
                        <div onClick={this.props.handleDetailTo.bind(this)} key={index} className="zhong">
                    <div className="left">
                        <img src={item.photo}/>
                    </div>
                    <div className="right">
                        <h6>{item.subject}</h6>
                        <h5>￥{item.sale_price}</h5>
                        <p>
                            <span>{item.comments}</span>
                            <strong>{item.sold}</strong>
                            <i className="iconfont">&#xe614;</i>
                        </p>
                    </div>
                </div>
                    ))
                }
            </GoodsList>
            </div>
                </Body>
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleListAsyncData();
    }
    
}


export default List