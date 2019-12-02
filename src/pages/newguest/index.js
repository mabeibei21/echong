import React,{Fragment} from "react";
import Header from "../../components/header/index";
import {Body,Tu,Intro} from "./styled";
class NewGuest extends React.Component{
    render(){
        return (
            <Fragment>
                <Header title="新客主粮趴"/>
                <Body>
                <div className="big">
                {/* 开始的主图 */}
            <Tu>
                <img src="https://img2.epetbar.com/nowater/2019-09/06/11/8a0565fd42aceba2d3b8dd3005f6a23a.jpg@!water"/>
                <img src="https://img2.epetbar.com/nowater/2019-09/06/11/8e341714f2a703fd98d2ba6b06857fb9.jpg@!water"/>
            </Tu>
            {/* 人气推荐 */}
            <Intro>
                <div className="intro">
                    <img src="https://img2.epetbar.com/2017-06/30/12/5bacc70c6249770a77f4eb5c03212909.jpg@!water"/>
                    <h6>伯纳天纯 simple系列 羊肉&豌豆配方全犬粮 3kg</h6>
                    <h5><span>￥495.00</span><del>￥852.00</del></h5>
                    <h4>立即购买</h4>
                </div>
                <div className="intro">
                    <img src="https://img2.epetbar.com/2017-06/30/12/5bacc70c6249770a77f4eb5c03212909.jpg@!water"/>
                    <h6>伯纳天纯 simple系列 羊肉&豌豆配方全犬粮 3kg</h6>
                    <h5><span>￥495.00</span><del>￥852.00</del></h5>
                    <h4>立即购买</h4>
                </div>
                <div className="intro">
                    <img src="https://img2.epetbar.com/2017-06/30/12/5bacc70c6249770a77f4eb5c03212909.jpg@!water"/>
                    <h6>伯纳天纯 simple系列 羊肉&豌豆配方全犬粮 3kg</h6>
                    <h5><span>￥495.00</span><del>￥852.00</del></h5>
                    <h4>立即购买</h4>
                </div>
            </Intro>
            </div>
            </Body>
            </Fragment>
        )
    }
}

export default NewGuest;