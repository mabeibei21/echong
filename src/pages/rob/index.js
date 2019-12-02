import React,{Fragment} from "react";
import Header from "../../components/header/index";
import {RobDay,Title,Goods} from "./styled";
class Rob extends React.Component{
    render(){
        return(
            <Fragment>
                <Header title="每日疯抢"/>
                {/* 每日疯抢的导航条 */}
            <RobDay>
                <ul>
                    <li>
                        <div><a>10.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                        
                    </li>
                    <li>
                        <div><a>11.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                    </li>
                    <li>
                        <div><a>12.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                    </li>  <li>
                        <div><a>13.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                    </li>  <li>
                        <div><a>14.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                    </li>  <li>
                        <div><a>15.00</a>
                        <span><img src="https://static.epetbar.com/static_web/wap/dist/images/dailySurprise/point3.png"/></span>
                        <i>已结束</i></div>
                    </li>
                </ul>
            </RobDay>
            {/* 题目 */}
            <Title>
                <img src="https://static.epetbar.com/static_web/wap/dist/images/background/supercode.png"/>
        超 低 折 扣 X 限 量 秒 杀
            </Title>
            {/* 商品 */}
            <Goods>
                <div className="goods">
                <div className="left">
                    <img src="https://img1.epetbar.com/goods/sales/20190529182047_266002.jpg?x-oss-process=style/waterfall&$1=200"/>
                </div>
                <div className="right">
                    <h6>美国原装进口Timberwolf 马具型胸背带 粉色L号 宽1.1cm*胸围78.7-89cm </h6>
                    <h5>限量5件</h5>
                    <p><span>￥48.00<del>￥41.00</del></span><i>即将开始</i></p>
                </div>
                </div>
                <div className="goods">
                <div className="left">
                    <img src="https://img1.epetbar.com/goods/sales/20190529182047_266002.jpg?x-oss-process=style/waterfall&$1=200"/>
                </div>
                <div className="right">
                    <h6>美国原装进口Timberwolf 马具型胸背带 粉色L号 宽1.1cm*胸围78.7-89cm </h6>
                    <h5>限量5件</h5>
                    <p><span>￥48.00<del>￥41.00</del></span><i>即将开始</i></p>
                </div>
                </div>
            </Goods>
            </Fragment>
        )
    }
}

export default Rob;