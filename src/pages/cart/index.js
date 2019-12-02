import React, { Component } from 'react'
import {PageContainer} from "../../common/styled";
import Header from "../../components/header/index";
import {CartList,Bottom,Body,Search} from "./styled";
export default class Cart extends Component {
    render() {
        return (
            <PageContainer>
                <Header title="购物车" flag/>
                <Body>
                <CartList>
                <h6>
                    <i ><input type="checkbox"/></i>
                    E宠西部中央仓
                </h6>
                <div className="carta">
                    <div className="left">
                        <input type="checkbox"/>
                    </div>
                    <div className="cartc">
                        <img src="https://img2.epetbar.com/2015-11/26/14/832834279b53c1c40421034017f6d2c0.jpg@!200w-b"/>
                    </div>
                    <div className="cartr">
                        <h6><span>[订单赠品]</span><i>路斯 手工坊系列 鸡肉火腿肠 200g</i></h6>
                        <p><i>￥48.00</i><strong><b>-</b><em>1</em><a>+</a></strong></p>
                    </div>
                </div>
            </CartList>
            {/* 底部中间额 */}
            <Bottom>
                <p>
                    <i className="iconfont">&#xe65b;</i>
                    总额：<span>￥78.00</span>
                </p>
                <h6>去结算<span>(2)</span></h6>
            </Bottom>
            </Body>
            </PageContainer>
        )
    }
}
