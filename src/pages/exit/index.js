import React from "react";
import Header from "../../components/header/index";
import {PageContainer} from "../../common/styled";
import {HeadImg} from "./styled";
class Exit extends React.Component{
    render(){
        return (
            <PageContainer>
                <Header title="账号管理"/>
                {/* 头像 */}
            <HeadImg>
                <div className="touxiang">
                    <span>头像</span>
                    <img src="../../../public/img/Etu.jpg@!water"/>
                </div>
                <div className="nicheng">
                    <span>昵称</span>
                    <a>18337281898 <i className="iconfont">&#xe50a;</i></a>
                </div>
                <div className="username">
                    <span>用户名</span>
                    <a>主人_b4HG2P5IjM <i className="iconfont">&#xe50a;</i></a>
                </div>
                <div className="sex">
                    <span>性别</span>
                    <i className="iconfont">&#xe50a;</i>
                </div>
                <div className="sex">
                    <span>生日</span>
                    <i className="iconfont">&#xe50a;</i>
                </div>
                <div className="sex">
                    <span>首次养宠物</span>
                    <i className="iconfont">&#xe50a;</i>
                </div>
                <div className="kong"></div>
                <div className="sex">
                    <span>地址管理</span>
                    <i className="iconfont">&#xe50a;</i>
                </div>
                <div className="sex">
                    <span>账号安全</span>
                    <i className="iconfont">&#xe50a;</i>
                </div>
                <div className="exit">
                    退出登录
                </div>
            </HeadImg>
            </PageContainer>
        )
    }
}

export default Exit;