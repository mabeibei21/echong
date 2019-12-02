import React, { Component,Fragment } from 'react';
import {Nav,Goods,Body} from "./styled";
import Header from "../../components/header/index";
 class Collection extends Component {
    render() {
        return (
            <Fragment>
                {/* 头部header */}
                <Header title="我的收藏"/>
            <Body>
            
            {/* 第二个导航nav */}
            <Nav>
                <ul>
                    <li>商品</li>
                    <li>新宠课堂</li>
                </ul>
            </Nav>
            {/* 商品 */}
            <Goods>
                <div className="left">
                    <img src="https://img2.epetbar.com/common/upload/commonfile/2019/010/08/151534_350627.jpg"/>
                </div>
                <div className="right">
                    <h6>美国麦德氏 IN-PLUS日常照护营养系列 犬用浓缩卵磷脂 培根味 680g（约300颗） 680g</h6>
                    <h5>添加时间：<span>2019-11-28 21:19</span></h5>
                    <div className="xia">
                        <span>￥138.00</span>
                        <a>删除</a>
                    </div>
                </div>
            </Goods>
            </Body>
            </Fragment>
        )
    }
    
}


export default Collection;