import React, { Component,Fragment } from 'react';
import {Nav,Goods,Body,Class} from "./styled";
import Header from "../../components/header/index";
 class Collection extends React.Component {
     constructor(){
         super();
         this.state={
             collect:JSON.parse(localStorage.getItem("collect")),
             flag:true
         }
     }
    render() {
        let {collect,flag}=this.state;
        return (
            <Fragment>
                {/* 头部header */}
                <Header title="我的收藏"/>
            <Body>
            
            {/* 第二个导航nav */}
            <Nav>
                <ul>
                    <li onClick={this.handleAppear.bind(this)} className={flag?'active':''}>商品</li>
                    <li onClick={this.handleAppear.bind(this)} className={!flag?'active':''}>新宠课堂</li>
                </ul>
            </Nav>
            {/* 商品 */}
            <Fragment>
                <div className="yi" style={{display:flag?'block':'none'}}>
                     {
                collect.map((item,index)=>(
                    <Goods key={item.id}>
                <div className="left">
                    <img src={item.img}/>
                </div>
                <div className="right">
                    <h6>{item.title}</h6>
                    <h5>添加时间：<span>{item.time}</span></h5>
                    <div className="xia">
                        <span>￥{item.price}</span>
                        <a onClick={this.handleDelete.bind(this,index)}>删除</a>
                    </div>
                </div>
            </Goods>
                ))
            }
                </div>
               
            </Fragment>
            <Fragment>
                <Class>
                <div className="classroom" style={{display:!flag?'block':'none'}}>
                    暂无课堂收藏记录
                </div></Class>
            </Fragment>
            
            </Body>
            </Fragment>
        )
    }
    handleDelete(index){
        this.state.collect.splice(index,1);
        localStorage.setItem("collect",JSON.stringify(this.state.collect));
        this.forceUpdate();
    }
    handleAppear(){
        this.setState({
            flag:!this.state.flag
        })
    }
}


export default Collection;