import React, { Component } from 'react'
import {PageContainer} from "../../common/styled";
import Header from "../../components/header/index";
import {NavSec,NavThree,Share,Body} from "./styled";
export default class Book extends Component {
    render() {
        return (
            <PageContainer>
                <Header title="小萌书"/>
                <Body>
                <div className="container">
                <NavSec>
                <div className="top">
                    <ul>
                        <li><i className="iconfont">&#xe67b;</i>狗狗</li>
                        <li><i className="iconfont">&#xe623;</i>请输入搜索内容</li>
                        <li><i className="iconfont">&#xe9b2;</i></li>
                    </ul>
                </div>
                <div className="NavXia">
                    <ol>
                        <li>收藏</li>
                        <li>推荐</li>
                        <li>达人测评</li>
                        <li>养宠视频</li>
                    </ol>
                </div>
            </NavSec>
            {/* 能不能吃 导航3 */}
            <NavThree>
                <ul>
                    <li><img src="https://static.epetbar.com/static_wap/content/opgc/image/eat.png"/></li>
                    <li><img src="https://static.epetbar.com/static_wap/content/opgc/image/diseasePet.png"/></li>
                    <li><img src="https://static.epetbar.com/static_wap/content/opgc/image/moreTool.png"/></li>
                    <li><img src="https://static.epetbar.com/static_wap/content/opgc/image/protectPet.png"/></li>
                    <li><img src="https://static.epetbar.com/static_wap/content/opgc/image/knowledgeBase.png"/></li>
                </ul>
            </NavThree>
            {/* 经验分享 */}
            <Share>
                <div className="bao">
                    <div className="tutu">
                        <img src="https://img1.epetbar.com/2019-09/25/11/ea076b5ad4f270fcab38b6b4b44cb87c.jpg?x-oss-process=style/cut&$1=250&$2=125"/>
                        <div className="ppp"><h6>雪纳瑞被毛褪色，真相竟然是这样！</h6><h5>养雪纳瑞的铲屎官是否都有过类似经历，自家狗狗小时候的毛发颜色又深又亮，长着长着颜色就淡了，这是怎么回</h5></div>
                    </div>
                    <div className="zi">
                        <p>
                            <img src="https://img1.epetbar.com/2019-09/05/09/3e3980a88823a70ac5f48c49f82a1363.jpg?x-oss-process=style/waterfall&$1=50"/>
                            汪品喵鉴
                        </p>
                        <a><img src="../../../public/img/Btu.png"/>2</a>
                    </div>
                </div>
                <div className="bao">
                    <div className="tutu">
                        <img src="https://img1.epetbar.com/2019-09/25/11/ea076b5ad4f270fcab38b6b4b44cb87c.jpg?x-oss-process=style/cut&$1=250&$2=125"/>
                        <div className="ppp"><h6>雪纳瑞被毛褪色，真相竟然是这样！</h6><h5>养雪纳瑞的铲屎官是否都有过类似经历，自家狗狗小时候的毛发颜色又深又亮，长着长着颜色就淡了，这是怎么回</h5></div>
                    </div>
                    <div className="zi">
                        <p>
                            <img src="https://img1.epetbar.com/2019-09/05/09/3e3980a88823a70ac5f48c49f82a1363.jpg?x-oss-process=style/waterfall&$1=50"/>
                            汪品喵鉴
                        </p>
                        <a><img src="../../../public/img/Btu.png"/>2</a>
                    </div>
                </div>
                <div className="bao">
                    <div className="tutu">
                        <img src="https://img1.epetbar.com/2019-09/25/11/ea076b5ad4f270fcab38b6b4b44cb87c.jpg?x-oss-process=style/cut&$1=250&$2=125"/>
                        <div className="ppp"><h6>雪纳瑞被毛褪色，真相竟然是这样！</h6><h5>养雪纳瑞的铲屎官是否都有过类似经历，自家狗狗小时候的毛发颜色又深又亮，长着长着颜色就淡了，这是怎么回</h5></div>
                    </div>
                    <div className="zi">
                        <p>
                            <img src="https://img1.epetbar.com/2019-09/05/09/3e3980a88823a70ac5f48c49f82a1363.jpg?x-oss-process=style/waterfall&$1=50"/>
                            汪品喵鉴
                        </p>
                        <a><img src="../../../public/img/Btu.png"/>2</a>
                    </div>
                </div>
            </Share>
            </div>
            </Body>
            </PageContainer>
        )
    }
}
